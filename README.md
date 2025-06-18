# TypeScript Seed for NodeJs

Seed project for NodeJs with TypeScript.

## Features

- Package scripts ready to run, watch, build and test;
- Separated configurations for debug, release and test profiles;
- Easily update packages with pre-defined scripts (via [npm-check-updates][ncu]);
- Dependency Injection with [tsyringe];
- Debug configuration ready for [Visual Studio Code][vscode];
- Unit tests with [Jest] (test explorer and debug support);
- And others configurations ready for [Visual Studio Code][vscode];

## Pre-requisites

- [NodeJs][node] v20+;

### Recommendations

- Coding with [Visual Studio Code][vscode] and [Jest extension][vscode-jest];

## Setup

Just run `npm install` at project root folder.

## Executing

Available package commands:

- `npm start`: simple execution with debug configuration;
- `npm run watch`: execute in watch mode;
- `npm run start:release`: build with release configuration, then execute it;
- `npm run build`: build with debug configuration, outputs at `dist` folder;
- `npm run build:release`: build with release configuration;
- `npm run clear`: clear built files (`dist` folder);
- `npm test`: execute tests;
- `npm run test:watch`: execute tests in watch mode;
- `npm run test:coverage`: execute tests and report coverage information;

Take a look at `package.json` to see variants of the commands.

When using [Visual Studio Code][vscode], you can run by its commands, like pressing F5 for run with attached debugger or executing tests directly from test explorer tab.

## Updating dependencies

Update dependencies by running:

```bash
npm run update-packages
npm install
```

[tsyringe]: https://github.com/microsoft/tsyringe
[jest]: https://jestjs.io/
[vscode]: https://code.visualstudio.com/
[vscode-jest]: https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
[ncu]: https://github.com/raineorshine/npm-check-updates
[node]: https://nodejs.org/