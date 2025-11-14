// ==UserScript==
// @name         Userscript starter
// @namespace    https://github.com/lukasz-brzozko/userscript-starter
// @version      2024-05-21
// @description  Creates a new userscript
// @author       Łukasz Brzózko
// @match        https://github.com/
// @icon         https://github.githubassets.com/favicons/favicon.png
// @updateURL    https://raw.githubusercontent.com/lukasz-brzozko/userscript-starter/main/dist/index.meta.js
// @downloadURL  https://raw.githubusercontent.com/lukasz-brzozko/userscript-starter/main/dist/index.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const IDS = {
    container: "container",
  };

  const MESSAGES = {
    containerFound: `Znaleziono formularz ${IDS.container}`,
    error: {
      basic: "Error",
      containerNotFound: `Nie znaleziono kontenera ${IDS.container}. Skrypt został wstrzymany.`,
    },
  };

  let container;

  // Helper functions for tagged template literals (for Prettier and Stylelint formatting)
  const css = String.raw;
  const html = String.raw;

  const linkStyles = async () => {
    const styleTag = document.createElement("style");
    styleTag.textContent = css`
      #container {
        background-color: #f31260;
      }
    `;

    document.body.prepend(styleTag);
  };

  const handleContainerNotFound = () => {
    window.console.error(
      `%c ${MESSAGES.error.containerNotFound}`,
      "background: red; color: #fff; font-size: 20px",
    );
  };

  const lookForAppContainer = async () => {
    const DOMElements = await new Promise((resolve, reject) => {
      const maxAttempts = 50;
      let attempt = 0;

      const setIntervalId = setInterval(() => {
        container = document.getElementById(IDS.container);
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

    return DOMElements;
  };

  const renderUiElements = () => {
    container.innerHTML = html`
      <div class="container">
        <h1>Hello World</h1>
      </div>
    `;
  };

  const init = async () => {
    try {
      await lookForAppContainer();
    } catch (err) {
      console.error(err);
      return handleContainerNotFound();
    }
    linkStyles();
    renderUiElements();
  };

  init();
})();
