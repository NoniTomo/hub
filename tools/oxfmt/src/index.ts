import { defineConfig } from 'oxfmt';

export type Oxfmt = typeof oxfmt;

export const oxfmt = defineConfig({
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  semi: false,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  arrowParens: 'always',
  sortPackageJson: false
});
