import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  { ...js.configs.recommended },
  { ...perfectionist.configs["recommended-natural"] },
  {
    files: ["**/*.js"],
    ignores: ["node_modules", "dist"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.greasemonkey,
        ...globals.commonjs,
        ...globals.es2024,
      },
    },
  },
]);
