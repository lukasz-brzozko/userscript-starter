import { render } from "solid-js/web";
import { App } from "@/components/App";
import { handleContainerNotFound, lookForAppContainer } from "@/utils/dom";
import { injectStyles } from "@/utils/styles";

(function () {
  "use strict";

  const init = async (): Promise<void> => {
    try {
      const { container } = await lookForAppContainer();
      injectStyles();
      render(() => <App />, container);
    } catch (err) {
      console.error(err);
      handleContainerNotFound();
    }
  };

  init();
})();
