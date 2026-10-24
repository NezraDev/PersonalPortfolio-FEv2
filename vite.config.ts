import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseEnv } from "node:util";
import { defineConfig, loadEnv, type Plugin } from "vite";
import tailwindcss from "@tailwindcss/vite";

/** Run the same server-only handler locally that Netlify deploys in production. */
function localContactEndpoint(mode: string): Plugin {
  return {
    name: "local-contact-endpoint",
    configureServer(server) {
      const env = loadEnv(mode, process.cwd(), "");
      env.NODE_ENV = "development";
      // Read fresh file values without mutating process.env. Vite can reuse the
      // same Node process on restart; injected values would otherwise stay stale.
      for (const filename of [".env", ".env.local", `.env.${mode}`, `.env.${mode}.local`]) {
        const file = resolve(process.cwd(), filename);
        if (!existsSync(file)) continue;
        const values = parseEnv(readFileSync(file, "utf8"));
        for (const key of ["RESEND_API_KEY", "RESEND_FROM_EMAIL", "CONTACT_TO_EMAIL"]) {
          if (values[key] !== undefined) env[key] = values[key];
        }
      }
      const requests = new Map<string, { count: number; expires: number }>();
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.split("?")[0] !== "/.netlify/functions/contact") return next();
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Cache-Control", "no-store");
        try {
          if (req.method === "POST") {
            const now = Date.now();
            for (const [key, value] of requests) if (value.expires <= now) requests.delete(key);
            const address = req.socket.remoteAddress || "local";
            const record = requests.get(address) || { count: 0, expires: now + 60000 };
            record.count += 1;
            requests.set(address, record);
            if (record.count > 5) {
              res.statusCode = 429;
              res.end(JSON.stringify({ error: "Too many requests. Please wait a minute before trying again." }));
              return;
            }
          }
          let body = "";
          let bytes = 0;
          for await (const chunk of req) {
            bytes += Buffer.byteLength(chunk);
            if (bytes > 24000) {
              res.statusCode = 413;
              res.end(JSON.stringify({ error: "Your inquiry is too long." }));
              return;
            }
            body += chunk.toString();
          }
          const headers = new Headers();
          for (const [key, value] of Object.entries(req.headers)) {
            if (value) headers.set(key, Array.isArray(value) ? value.join(", ") : value);
          }
          const request = new Request(`http://${req.headers.host}${req.url}`, {
            method: req.method,
            headers,
            ...(req.method !== "GET" && req.method !== "HEAD" ? { body } : {}),
          });
          const handler = await server.ssrLoadModule("/netlify/functions/contact.mjs");
          const response: Response = await handler.handleContact(request, env);
          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(await response.text());
        } catch {
          server.config.logger.error("Local contact endpoint failed. Check your server configuration.");
          res.statusCode = 500;
          res.end(JSON.stringify({ error: "Unable to send right now. Please try again shortly." }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [tailwindcss(), localContactEndpoint(mode)],
}));
