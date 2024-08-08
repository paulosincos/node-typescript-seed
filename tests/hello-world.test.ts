import { HelloWorld } from "../src/hello-world";
import { UserCredentials } from "../src/user-credentials";
import { Mock } from "./mocks/mock";

describe('My Class Tests', () => {
  it('getValue should return true', () => {
    const userCredentialsMock = new Mock<UserCredentials>();
    userCredentialsMock.spyOn('getUserName')
      .mockReturnValue('test-user');
    let result: any;
    const instance = new HelloWorld(userCredentialsMock.instance);

    const act = () => result = instance.greet();

    expect(act).not.toThrow();
    expect(result).toContain('Hello test-user');
    expect(userCredentialsMock.spyOn('getUserName')).toHaveBeenCalled();
  });
});