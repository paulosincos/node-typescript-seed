# TypeScript Seed for Node.js

This project is a starting point for Node.js applications using TypeScript, focused on productivity, organization, and best practices.

## Features

- Ready-to-use scripts for running, watching, building, and testing;
- Separate configurations for debug, release, and test profiles;
- Easy dependency updates with pre-defined scripts (via [npm-check-updates][ncu]);
- Dependency injection with [tsyringe];
- Debug and general configurations ready for [Visual Studio Code][vscode];
- Unit testing with [Jest] (test explorer and debug support);
- Mock pattern for unit tests;
- Organized structure, ready to evolve;

## Prerequisites

- [Node.js][node] v22 or higher;

### Recommendations

- Develop using [Visual Studio Code][vscode] and the [Jest extension][vscode-jest];

## Getting Started

1. **Clone this repository:**
   ```bash
   git clone https://github.com/paulosincos/node-typescript-seed
   cd node-typescript-seed
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Rename the project:**
   - Edit `package.json` with your project's name and description.
4. **(Optional) Remove example files:**
   - Delete example files in `src/` and `tests/` as needed.
5. **Start developing:**
   - Create your source files in `src/` and tests in `tests/`.

## Project Structure

```
├── src/                # Main source code
├── tests/              # Unit tests and mocks
├── package.json        # Project configuration and scripts
├── tsconfig*.json      # TypeScript build profiles
├── jest.config.js      # Test configuration
└── README.md           # Documentation
```

## Available Scripts

- `npm start`: Runs with debug configuration;
- `npm run watch`: Runs in watch mode;
- `npm run start:release`: Builds in release mode and runs;
- `npm run build`: Builds in release mode (output in `dist`);
- `npm run build:debug`: Builds in debug mode;
- `npm run clear`: Cleans built files (`dist`);
- `npm test`: Runs tests;
- `npm run test:watch`: Runs tests in watch mode;
- `npm run test:coverage`: Runs tests and generates coverage report;
- `npm run update-packages`: Updates dependencies;

See `package.json` for more commands and details.

## Development Tips

- Use F5 key in VS Code to debug with breakpoints.
- Run tests directly from the test explorer.
- Use mocks to facilitate isolated tests.
- Keep your code organized in small, reusable modules.

## Updating Dependencies

To update project dependencies:

```bash
npm run update-packages
npm install
```

## Roadmap

- Container ready;
- Integration tests;
- Use of NodeJs native support to TypeScript

[tsyringe]: https://github.com/microsoft/tsyringe
[jest]: https://jestjs.io/
[vscode]: https://code.visualstudio.com/
[vscode-jest]: https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
[ncu]: https://github.com/raineorshine/npm-check-updates
[node]: https://nodejs.org/