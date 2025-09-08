// TODO: this is a sample file. Recycle it or remove it.

import { UserCredentials } from "../../src/user-credentials";
import { Mock } from "./mock";
import { MockBuilder } from "./mock-builder";

export const UserCredentialsMock: typeof Mock<UserCredentials> = new MockBuilder<UserCredentials>()
  .spyOn("getUserName", fn => fn
    .mockReturnValue('mocked-test-user')
  )
  .buildClass();