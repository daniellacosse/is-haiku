import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  external: ["syllable"],
  input: "isHaiku",
  output: [
    {
      file: "build/module.js",
      format: "es",
    },
    {
      file: "build/main.min.js",
      format: "iife",
      globals: {
        syllable: "syllable",
      },
      name: "isHaiku",
      plugins: [terser()],
    },
    {
      file: "build/main.js",
      format: "umd",
      globals: {
        syllable: "syllable",
      },
      name: "isHaiku",
    },
  ],
  plugins: [resolve(), typescript()],
};
