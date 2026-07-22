import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const outputDirectory = path.join(root, "docs", "sprints para v3");
const pageUrl = "http://127.0.0.1:3226";
const devtoolsUrl = "http://127.0.0.1:9239";
const sizes = [
  [320, 900],
  [375, 900],
  [768, 1000],
  [1024, 1000],
  [1440, 1000],
];

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
  const targetResponse = await fetch(`${devtoolsUrl}/json/new?${encodeURIComponent(pageUrl)}`, { method: "PUT" });
  const target = await targetResponse.json();
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
    const metrics = await protocol.call("Runtime.evaluate", {
      expression: "({ innerWidth, clientWidth: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth })",
      returnByValue: true,
    });
    const screenshot = await protocol.call("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: false,
      fromSurface: true,
    });
    const output = path.join(outputDirectory, `sprint1-validated-home-${width}.png`);
    await fs.writeFile(output, Buffer.from(screenshot.data, "base64"));
    const value = metrics.result.value;
    console.log(`${width}px inner=${value.innerWidth} client=${value.clientWidth} scroll=${value.scrollWidth} overflow=${value.scrollWidth - value.clientWidth}px`);
  }
  protocol.close();
} finally {
  if (server.exitCode === null) server.kill("SIGTERM");
  if (browser.exitCode === null) browser.kill("SIGTERM");
}
