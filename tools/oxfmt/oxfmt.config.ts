import { defineConfig } from "oxfmt";

import { oxfmt } from "./src/index";

export default defineConfig({
  ...oxfmt,
  ignorePatterns: ["dist"],
});
