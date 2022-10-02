import type { Config } from "jest";

const config: Config = {
  verbose: true,
  transform: {
    "^.+\\.(j|t)sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@react-dnd|i18n-js)"],
  moduleNameMapper: {
    "i18n-js": "<rootDir>/node_modules/i18n-js/dist/import/I18n.js",
  },
};

export default config;
