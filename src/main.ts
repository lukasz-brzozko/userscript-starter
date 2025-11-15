import { linkStyles } from "./utils/styles.ts";
import {
  handleContainerNotFound,
  lookForAppContainer,
  renderUiElements,
} from "./utils/dom.ts";

(function () {
  "use strict";

  const init = async (): Promise<void> => {
    try {
      const { container } = await lookForAppContainer();
      linkStyles();
      renderUiElements(container);
    } catch (err) {
      console.error(err);
      handleContainerNotFound();
    }
  };

  init();
})();
