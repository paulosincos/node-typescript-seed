import { HelloWorld } from "../src/hello-world";
import { UserCredentials } from "../src/user-credentials";
import { Mock } from "./mocks/mock";
import { UserCredentialsMock } from "./mocks/user-credentials-mock";

describe('HelloWorld Tests', () => {
  it('greet should return greeting to the user', () => {
    // Sample using a unique and especific UserCredentials mock
    const userCredentialsMock = new Mock<UserCredentials>();
    userCredentialsMock.spyOn('getUserName')
      .mockReturnValue('test-user');
    let result: any;
    const instance = new HelloWorld(userCredentialsMock.instance);

    const act = () => result = instance.greet();

    expect(act).not.toThrow();
    expect(result).toContain('Hello test-user');
  });

  it('greet should get userName from credentials', () => {
    // Sample using a predefined and reutilizable UserCredentials mock
    const userCredentialsMock = new UserCredentialsMock();
    let result: any;
    const instance = new HelloWorld(userCredentialsMock.instance);

    const act = () => result = instance.greet();

    expect(act).not.toThrow();
    expect(userCredentialsMock.spyOn('getUserName')).toHaveBeenCalled();
  });
});