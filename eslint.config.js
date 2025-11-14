import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
  { ...js.configs.recommended },
  { ...perfectionist.configs["recommended-natural"] },
  {
    files: ["**/*.js"],
    ignores: ["app.js"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.greasemonkey,
        ...globals.es2024,
      },
    },
  },
  {
    files: ["app.js"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
      },
    },
  },
  globalIgnores(["node_modules", "dist"]),
]);
