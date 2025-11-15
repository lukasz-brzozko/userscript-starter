import { IDS, MESSAGES } from "@/constants";

export const lookForAppContainer = async (): Promise<{
  container: HTMLElement;
}> => {
  return new Promise((resolve, reject) => {
    const maxAttempts = 50;
    let attempt = 0;

    const setIntervalId = setInterval(() => {
      const container = document.getElementById(IDS.container);
      if (container) {
        clearInterval(setIntervalId);
        window.console.info(
          `%c ${MESSAGES.containerFound}`,
          "background: #B7E1CD; color: #000; font-size: 20px",
        );
        resolve({ container });
      } else {
        if (attempt >= maxAttempts) {
          clearInterval(setIntervalId);
          reject({ error: MESSAGES.error.containerNotFound });
        } else {
          attempt++;
        }
      }
    }, 300);
  });
};

export const handleContainerNotFound = (): void => {
  window.console.error(
    `%c ${MESSAGES.error.containerNotFound}`,
    "background: red; color: #fff; font-size: 20px",
  );
};

export const renderUiElements = (container: HTMLElement): void => {
  // Helper function for tagged template literals (for Prettier and Stylelint formatting)
  const html = String.raw;

  container.innerHTML = html`
    <div class="container">
      <h1>Hello World</h1>
    </div>
  `;
};
