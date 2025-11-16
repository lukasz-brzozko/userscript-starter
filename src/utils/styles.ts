import styles from "@/styles.css?raw";

export const linkStyles = (): void => {
  // Check if stylesheet is already added to avoid duplicates
  const existingLink = document.querySelector("link[data-userscript-styles]");
  if (existingLink) return;

  const linkTag = document.createElement("link");
  linkTag.rel = "stylesheet";
  linkTag.href = `data:text/css;base64,${btoa(styles)}`;
  linkTag.setAttribute("data-userscript-styles", "true");

  document.head.appendChild(linkTag);
};
