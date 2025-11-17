import css from "@/styles/styles.scss?inline";

export const injectStyles = (): void => {
  GM_addStyle(css);
};
