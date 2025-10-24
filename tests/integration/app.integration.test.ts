import { spawn } from 'child_process';

// Integration test base: run the app (ts-node) and assert expected output
describe('Integration - app execution', () => {
  jest.setTimeout(15000);

  test('app prints greeting to stdout', async () => {
    return new Promise<void>((resolve, reject) => {
      // Use npx to run ts-node against the debug tsconfig (same as npm start:debug)
      const proc = spawn('npx', ['ts-node', '--project', 'tsconfig.debug.json', './src/app.ts'], { shell: true });

      let stdout = '';
      let stderr = '';

      proc.stdout?.on('data', (chunk) => {
        stdout += String(chunk);
      });

      proc.stderr?.on('data', (chunk) => {
        stderr += String(chunk);
      });

      proc.on('error', (err) => reject(err));

      proc.on('close', (code) => {
        try {
          // Expect the sample app to print Hello Foo!
          expect(stdout).toMatch(/Hello\s+Foo!/);
          resolve();
        } catch (err) {
          // include stderr for easier debugging
          // @ts-ignore - augment error message
          if (err && typeof err === 'object') (err as any).stderr = stderr;
          reject(err);
        }
      });
    });
  });
});
