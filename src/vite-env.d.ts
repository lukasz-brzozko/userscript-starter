/// <reference types="vite/client" />

declare module "*.scss" {
  const content: string;
  export default content;
}

// Userscript API types
declare function GM_addStyle(css: string): void;
