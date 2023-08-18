/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "\\.png$": "<rootDir>/jest-png-transformer.js",
  },
};
