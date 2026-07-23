import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const outputDirectory = path.join(root, "docs", "sprints para v3");
const route = process.env.CAPTURE_ROUTE ?? "/";
const outputPrefix = process.env.CAPTURE_PREFIX ?? "sprint1-validated-home";
const pageUrl = `http://127.0.0.1:3226${route === "/" ? "" : route}`;
const devtoolsUrl = "http://127.0.0.1:9239";
const allSizes = [
  [320, 900],
  [375, 900],
  [768, 1000],
  [1024, 1000],
  [1440, 1000],
];
const requestedWidths = process.env.CAPTURE_WIDTHS?.split(",").map(Number) ?? [];
const sizes = requestedWidths.length > 0
  ? allSizes.filter(([width]) => requestedWidths.includes(width))
  : allSizes;
const captureSamples = process.env.CAPTURE_SAMPLES === "1";

const server = spawn(process.execPath, [nextCli, "dev", "--hostname", "127.0.0.1", "--port", "3226"], {
  cwd: root,
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  stdio: "ignore",
});
const browser = spawn(edge, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  "--remote-debugging-port=9239",
  `--user-data-dir=${path.join(process.env.TEMP, `pjlab-responsive-${Date.now()}`)}`,
  "about:blank",
], { stdio: "ignore", windowsHide: true });

async function waitFor(url) {
  for (let attempt = 0; attempt < 240; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Timeout waiting for ${url}`);
}

async function getTarget() {
  const endpoint = `${devtoolsUrl}/json/list`;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const targets = await response.json();
        const target = targets.find((item) => item.type === "page");
        if (target) return target;
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Timeout finding a DevTools page target");
}

function openProtocol(url) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(url);
    const pending = new Map();
    let sequence = 0;

    socket.addEventListener("open", () => {
      resolve({
        call(method, params = {}) {
          sequence += 1;
          const id = sequence;
          socket.send(JSON.stringify({ id, method, params }));
          return new Promise((callResolve, callReject) => pending.set(id, { callResolve, callReject }));
        },
        close() {
          socket.close();
        },
      });
    });
    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (!message.id || !pending.has(message.id)) return;
      const { callResolve, callReject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) callReject(new Error(message.error.message));
      else callResolve(message.result);
    });
    socket.addEventListener("error", () => reject(new Error("DevTools WebSocket failed")));
  });
}

try {
  await Promise.all([waitFor(pageUrl), waitFor(`${devtoolsUrl}/json/version`)]);
  const target = await getTarget();
  const protocol = await openProtocol(target.webSocketDebuggerUrl);
  await protocol.call("Page.enable");

  for (const [width, height] of sizes) {
    await protocol.call("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: true,
    });
    await protocol.call("Page.navigate", { url: pageUrl });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await protocol.call("Input.dispatchKeyEvent", {
      type: "keyDown",
      key: "Tab",
      code: "Tab",
      windowsVirtualKeyCode: 9,
    });
    await protocol.call("Input.dispatchKeyEvent", {
      type: "keyUp",
      key: "Tab",
      code: "Tab",
      windowsVirtualKeyCode: 9,
    });
    const focus = await protocol.call("Runtime.evaluate", {
      expression: "({ tag: document.activeElement?.tagName?.toLowerCase(), name: document.activeElement?.textContent?.trim(), href: document.activeElement?.getAttribute?.('href') })",
      returnByValue: true,
    });
    if (!["a", "button"].includes(focus.result.value.tag)) {
      throw new Error(`${width}px keyboard focus did not reach an interactive control`);
    }
    const metrics = await protocol.call("Runtime.evaluate", {
      expression: "({ innerWidth, clientWidth: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth })",
      returnByValue: true,
    });
    const screenshot = await protocol.call("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: false,
      fromSurface: true,
    });
    const output = path.join(outputDirectory, `${outputPrefix}-${width}.png`);
    await fs.writeFile(output, Buffer.from(screenshot.data, "base64"));
    const value = metrics.result.value;
    console.log(`${width}px inner=${value.innerWidth} client=${value.clientWidth} scroll=${value.scrollWidth} overflow=${value.scrollWidth - value.clientWidth}px focus=${focus.result.value.tag}:${focus.result.value.href ?? focus.result.value.name}`);

    if (captureSamples) {
      const layout = await protocol.call("Page.getLayoutMetrics");
      const maximumY = Math.max(0, layout.cssContentSize.height - height);
      for (const [index, fraction] of [0.25, 0.5, 0.75, 1].entries()) {
        const y = Math.round(maximumY * fraction);
        const sample = await protocol.call("Page.captureScreenshot", {
          format: "png",
          captureBeyondViewport: true,
          fromSurface: true,
          clip: { x: 0, y, width, height, scale: 1 },
        });
        const sampleOutput = path.join(outputDirectory, `${outputPrefix}-${width}-sample-${index + 1}.png`);
        await fs.writeFile(sampleOutput, Buffer.from(sample.data, "base64"));
      }
    }
  }
  protocol.close();
} finally {
  if (server.exitCode === null) server.kill("SIGTERM");
  if (browser.exitCode === null) browser.kill("SIGTERM");
}
