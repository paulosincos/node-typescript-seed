import { HelloWorld } from "./hello-world";

async function runAsync(): Promise<void> {
  console.log(new HelloWorld().greet());
};

runAsync();