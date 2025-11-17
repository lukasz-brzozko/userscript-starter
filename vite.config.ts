import { exec } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { promisify } from "node:util";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

const execAsync = promisify(exec);

export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/index.tsx",
      output: { entryFileNames: "index.user.js" },
    },
  },
  plugins: [
    solid(),
    // Serves the userscript file from dist with proper cache headers for Violentmonkey tracking
    {
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = (req as { url?: string }).url;

          if (url === "/") {
            // Redirect - changes the URL in the browser
            res.writeHead(302, { Location: "/dist/index.user.js" });
            res.end();
            return;
          }

          // Serve userscript file from dist folder
          if (url === "/dist/index.user.js" || url === "/index.user.js") {
            try {
              const filePath = resolve(process.cwd(), "dist", "index.user.js");
              const fileContent = readFileSync(filePath, "utf-8");

              // Set headers for Violentmonkey tracking
              res.setHeader(
                "Content-Type",
                "application/javascript; charset=utf-8",
              );
              res.setHeader("Cache-Control", "max-age=5"); // 5 seconds cache
              res.setHeader("Access-Control-Allow-Origin", "*");

              res.end(fileContent);
              return;
            } catch (error) {
              console.error("Error serving userscript:", error);
              res.statusCode = 404;
              res.end("File not found");
              return;
            }
          }

          next();
        });
      },
      name: "serve-userscript",
    },
    // Runs postbuild.js after the build is finished
    {
      name: "postbuild",
      async writeBundle() {
        try {
          console.log("\x1b[32m%s\x1b[0m", "Running postbuild.js");

          const { stderr, stdout } = await execAsync("node postbuild.js");
          if (stdout) console.log(stdout);
          if (stderr) console.error(stderr);
        } catch (error) {
          console.error("Error running postbuild.js:", error);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "src"),
    },
  },
  server: {
    port: 5173,
  },
});
