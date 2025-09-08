// TODO: this is a sample file. Recycle it or remove it.

import { injectable } from "tsyringe";
import { UserCredentials } from "./user-credentials";

@injectable()
export class HelloWorld {
  constructor(
    private userCredentials: UserCredentials
  ) {
    
  }
  public greet(): string {
    return `Hello ${this.userCredentials.getUserName()}!`;
  }
}