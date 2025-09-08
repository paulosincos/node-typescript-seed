// TODO: this is a sample startup file. Recycle it to your application needs and remove this comment.

import 'reflect-metadata';
import { container } from "tsyringe";
import { HelloWorld } from "./hello-world";

async function runAsync(): Promise<void> {
  console.log(container.resolve(HelloWorld).greet());
};

runAsync();