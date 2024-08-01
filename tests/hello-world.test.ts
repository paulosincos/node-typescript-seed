import { HelloWorld } from "../src/hello-world";

describe('My Class Tests', () => {
  it('getValue should return true', () => {
    expect(new HelloWorld().greet()).toContain('Hello world');
  });
});