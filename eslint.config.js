import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tslintPrettier from "tslint-config-prettier"
import eslintPrettier from "eslint-config-prettier"


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPrettier,
  tslintPrettier
];