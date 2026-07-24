import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const outputDirectory = process.env.NAV_VISUAL_OUTPUT_DIRECTORY ??
  path.join(root, "docs", "sprints para v3");
const phase = process.env.NAV_VISUAL_PHASE ?? "after";
const artifactPrefix = process.env.NAV_VISUAL_ARTIFACT_PREFIX ?? `sprint6-${phase}`;
const captureEnabled = process.env.NAV_VISUAL_CAPTURE !== "0";
const mode = process.env.NAV_VISUAL_MODE ?? "dev";
const port = process.env.NAV_VISUAL_PORT ?? "3227";
const debuggingPort = process.env.NAV_VISUAL_DEBUG_PORT ?? "9238";
const origin = `http://127.0.0.1:${port}`;
const devtoolsUrl = `http://127.0.0.1:${debuggingPort}`;
const allRoutes = [
  "/",
  "/payload-journey",
  "/learn",
  "/cases",
  "/usmt",
  "/method",
  "/protocol",
  "/investigation",
  "/lab",
  "/ecosystem",
];
const requestedRoutes = process.env.NAV_VISUAL_ROUTES?.split(",").filter(Boolean) ?? [];
const routes = requestedRoutes.length > 0
  ? allRoutes.filter((route) => requestedRoutes.includes(route))
  : allRoutes;
const sizes = [
  [320, 900],
  [375, 900],
  [768, 1000],
  [1024, 1000],
  [1440, 1000],
];
const intermediateSamples = new Set([
  "/",
  "/learn",
  "/cases",
  "/method",
  "/lab",
]);
const expectedActive = new Map([
  ["/", "Início"],
  ["/payload-journey", "Aprender"],
  ["/learn", "Aprender"],
  ["/method", "Métodos"],
  ["/protocol", "Métodos"],
  ["/investigation", "Métodos"],
  ["/usmt", "Métodos"],
  ["/cases", "Casos"],
  ["/lab", "LAB"],
  ["/ecosystem", "LAB"],
]);
const results = [];
const zoomEquivalentResults = [];
const server = spawn(process.execPath, [
  nextCli,
  mode,
  "--hostname",
  "127.0.0.1",
  "--port",
  port,
], {
  cwd: root,
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  stdio: "ignore",
  windowsHide: true,
});
const browser = spawn(edge, [
  "--headless=new",
  "--no-sandbox",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  `--remote-debugging-port=${debuggingPort}`,
  `--user-data-dir=${path.join(process.env.TEMP, `pjlab-navigation-${Date.now()}`)}`,
  "about:blank",
], { stdio: "ignore", windowsHide: true });

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function waitFor(url) {
  for (let attempt = 0; attempt < 240; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Timeout waiting for ${url}`);
}

async function getTarget() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(`${devtoolsUrl}/json/list`);
      if (response.ok) {
        const targets = await response.json();
        const target = targets.find((item) => item.type === "page");
        if (target) return target;
        const created = await fetch(`${devtoolsUrl}/json/new?about:blank`, { method: "PUT" });
        if (created.ok) {
          const newTarget = await created.json();
          if (newTarget.type === "page") return newTarget;
        }
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
    socket.addEventListener("open", () => resolve({
      call(method, params = {}) {
        const id = ++sequence;
        socket.send(JSON.stringify({ id, method, params }));
        return new Promise((callResolve, callReject) =>
          pending.set(id, { callResolve, callReject }));
      },
      close: () => socket.close(),
    }));
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

async function evaluate(protocol, expression) {
  const response = await protocol.call("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  return response.result.value;
}

function safeRouteName(route) {
  return route === "/" ? "home" : route.slice(1);
}

try {
  await Promise.all([waitFor(origin), waitFor(`${devtoolsUrl}/json/version`)]);
  const protocol = await openProtocol((await getTarget()).webSocketDebuggerUrl);
  await protocol.call("Page.enable");
  await protocol.call("Runtime.enable");

  for (const route of routes) {
    for (const [width, height] of sizes) {
      await protocol.call("Emulation.setDeviceMetricsOverride", {
        width,
        height,
        deviceScaleFactor: 1,
        mobile: width < 1024,
      });
      await protocol.call("Page.navigate", { url: `${origin}${route}` });
      await new Promise((resolve) => setTimeout(resolve, mode === "dev" ? 650 : 350));

      const metrics = await evaluate(protocol, `(() => {
        const active = [...document.querySelectorAll('header a[aria-current="page"]')]
          .map((node) => node.textContent.trim());
        const footerGroups = [...document.querySelectorAll('footer p')]
          .map((node) => node.textContent.trim())
          .filter((text) => ['Começar','Investigar','Evidências','LAB','Canais'].includes(text));
        return {
          title: document.title,
          h1: document.querySelectorAll('h1').length,
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          active,
          footerGroups,
          headerLinks: document.querySelectorAll('header a').length,
          footerLinks: document.querySelectorAll('footer a').length
        };
      })()`);
      assert(metrics.h1 === 1, `${route} ${width}: H1`);
      assert(metrics.scrollWidth <= metrics.clientWidth + 1, `${route} ${width}: overflow`);

      let mobileInteraction = null;
      if (width === 320 || width === 375) {
        mobileInteraction = await evaluate(protocol, `(async () => {
          const trigger = document.querySelector('button[aria-controls="mobile-navigation"]');
          trigger.focus();
          for (let attempt = 0; attempt < 10 && !document.querySelector('#mobile-navigation'); attempt += 1) {
            trigger.click();
            await new Promise((resolve) => setTimeout(resolve, 150));
          }
          const firstFocus = document.activeElement?.textContent?.trim();
          const active = document.querySelector('#mobile-navigation a[aria-current="page"]')?.textContent?.trim();
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
          await new Promise((resolve) => setTimeout(resolve, 50));
          const returned = document.activeElement === trigger;
          trigger.click();
          await new Promise((resolve) => setTimeout(resolve, 50));
          const firstItem = document.querySelector('#mobile-navigation a');
          const destination = firstItem?.getAttribute('href');
          firstItem?.addEventListener('click', (event) => event.preventDefault(), { once: true });
          firstItem?.click();
          await new Promise((resolve) => setTimeout(resolve, 100));
          const closedAfterNavigation = !document.querySelector('#mobile-navigation');
          return { firstFocus, active, returned, destination, closedAfterNavigation };
        })()`);
        if (phase === "after") {
          assert(mobileInteraction.firstFocus === "Início", `${route} ${width}: foco inicial`);
          assert(mobileInteraction.active === expectedActive.get(route), `${route} ${width}: ativo mobile`);
          assert(mobileInteraction.returned, `${route} ${width}: retorno de foco`);
          assert(mobileInteraction.closedAfterNavigation, `${route} ${width}: menu não fechou`);
        }
      }

      const shouldCapture = width === 320 || width === 1440 ||
        (intermediateSamples.has(route) && [375, 768, 1024].includes(width));
      if (shouldCapture && captureEnabled) {
        await protocol.call("Page.navigate", { url: `${origin}${route}` });
        await new Promise((resolve) => setTimeout(resolve, 250));
        const screenshot = await protocol.call("Page.captureScreenshot", {
          format: "png",
          captureBeyondViewport: false,
          fromSurface: true,
        });
        await fs.writeFile(
          path.join(outputDirectory, `${artifactPrefix}-${safeRouteName(route)}-${width}.png`),
          Buffer.from(screenshot.data, "base64"),
        );
      }

      results.push({
        route,
        width,
        overflow: metrics.scrollWidth - metrics.clientWidth,
        active: metrics.active,
        footerGroups: metrics.footerGroups.length,
        headerLinks: metrics.headerLinks,
        footerLinks: metrics.footerLinks,
        mobileInteraction,
      });
    }
  }

  if (phase !== "before-reconstructed") {
    for (const route of [...intermediateSamples].filter((item) => routes.includes(item))) {
      await protocol.call("Emulation.setDeviceMetricsOverride", {
        width: 720,
        height: 1000,
        deviceScaleFactor: 2,
        mobile: true,
      });
      await protocol.call("Page.navigate", { url: `${origin}${route}` });
      await new Promise((resolve) => setTimeout(resolve, mode === "dev" ? 650 : 350));
      const zoomMetrics = await evaluate(protocol, `({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        h1: document.querySelectorAll('h1').length,
        menuTrigger: Boolean(document.querySelector('button[aria-controls="mobile-navigation"]')),
        footer: Boolean(document.querySelector('footer')),
        offenders: [...document.querySelectorAll('body *')]
          .map((node) => {
            const rect = node.getBoundingClientRect();
            return {
              tag: node.tagName.toLowerCase(),
              id: node.id,
              className: typeof node.className === 'string' ? node.className : '',
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              width: Math.round(rect.width),
              text: node.textContent?.trim().slice(0, 80)
            };
          })
          .filter((item) => item.right > document.documentElement.clientWidth + 1 || item.left < -1)
          .slice(0, 12)
      })`);
      assert(zoomMetrics.h1 === 1, `${route}: H1 no equivalente a 200%`);
      assert(zoomMetrics.menuTrigger, `${route}: navegação indisponível no equivalente a 200%`);
      assert(zoomMetrics.footer, `${route}: Footer indisponível no equivalente a 200%`);
      assert(
        zoomMetrics.scrollWidth <= zoomMetrics.clientWidth + 1,
        `${route}: overflow no equivalente a 200% — ${JSON.stringify(zoomMetrics)}`,
      );
      zoomEquivalentResults.push({
        route,
        physicalReferenceWidth: 1440,
        cssViewportWidth: 720,
        deviceScaleFactor: 2,
        overflow: zoomMetrics.scrollWidth - zoomMetrics.clientWidth,
      });
    }
  }

  await fs.writeFile(
    path.join(outputDirectory, `${artifactPrefix}-responsive-validation.json`),
    `${JSON.stringify({
      phase,
      mode,
      combinations: results.length,
      routes: routes.length,
      widths: sizes.map(([width]) => width),
      results,
      zoomEquivalentResults,
    }, null, 2)}\n`,
  );
  console.log(JSON.stringify({
    result: "pass",
    phase,
    mode,
    combinations: results.length,
    screenshots: captureEnabled
      ? results.filter(({ route, width }) =>
        width === 320 || width === 1440 ||
        (intermediateSamples.has(route) && [375, 768, 1024].includes(width))).length
      : 0,
    mobileInteractions: results.filter(({ width }) => width === 320 || width === 375).length,
    overflowFailures: results.filter(({ overflow }) => overflow > 1).length,
    zoomEquivalentChecks: zoomEquivalentResults.length,
  }, null, 2));
  protocol.close();
} finally {
  if (server.exitCode === null) server.kill("SIGTERM");
  if (browser.exitCode === null) browser.kill("SIGTERM");
}
