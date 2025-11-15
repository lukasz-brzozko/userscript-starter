// Helper function for tagged template literals (for Prettier and Stylelint formatting)
const css = String.raw;

export const linkStyles = (): void => {
  const styleTag = document.createElement("style");
  styleTag.textContent = css`
    #container {
      background-color: #f31260;
    }
  `;

  document.body.prepend(styleTag);
};

