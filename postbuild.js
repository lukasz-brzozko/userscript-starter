import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

const PATHS = {
  distUser: resolve(import.meta.dirname, "dist", "index.user.js"),
  srcMeta: resolve(import.meta.dirname, "src", "index.meta.js"),
};

const init = async () => {
  const metaText = await readFile(PATHS.srcMeta, { encoding: "utf8" });
  const userText = await readFile(PATHS.distUser, { encoding: "utf8" });

  await writeFile(PATHS.distUser, metaText + "\n" + userText, {
    encoding: "utf8",
  });
};

init();
