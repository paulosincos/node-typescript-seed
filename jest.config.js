/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{
      tsconfig: 'tsconfig.test.json'
    }],
  },
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};