/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/tests/**/*.test.{ts,tsx}"
  ],
  transform: {
    "^.+.tsx?$": ["ts-jest",{
      tsconfig: 'tsconfig.test.json'
    }],
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/tests/"
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};