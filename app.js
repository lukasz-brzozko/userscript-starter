import {
  appendFileSync,
  createReadStream,
  readFileSync,
  writeFileSync,
} from "fs";
import { resolve } from "path";
import readline from "readline";

const PATHS = {
  distMeta: resolve(import.meta.dirname, "dist", "index.meta.js"),
  distUser: resolve(import.meta.dirname, "dist", "index.user.js"),
  indexUser: resolve(import.meta.dirname, "src", "index.user.js"),
};

const copySrcMeta = () => {
  let closed = false;

  writeFileSync(PATHS.distMeta, "");

  const inputStream = createReadStream(PATHS.indexUser);
  const rl = readline.createInterface({
    input: inputStream,
    terminal: false,
  });

  const handleOnLine = (line) => {
    if (closed) return;

    appendFileSync(PATHS.distMeta, line + "\n");

    if (line.includes("==/UserScript==") && !closed) {
      rl.close();
      closed = true;
    }
  };

  rl.on("line", handleOnLine);
};

const copyToDist = () => {
  const userText = readFileSync(PATHS.indexUser, "utf8");

  writeFileSync(PATHS.distUser, userText);
};

const init = () => {
  copySrcMeta();
  copyToDist();
};

init();
