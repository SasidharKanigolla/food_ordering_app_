// babel.transformer.js
import { createTransformer } from "babel-jest";

export default createTransformer({
  configFile: "./babel.config.cjs",
});
