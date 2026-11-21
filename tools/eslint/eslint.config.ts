import { eslint } from "./src/index";

export default eslint({
  typescript: "engine",
  ignores: ["**/rules/**"],
});
