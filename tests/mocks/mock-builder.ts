import { Mock } from "./mock";

export class MockBuilder<T> {
  private _prototype: { [method: string]: (mockedFn: jest.Mock) => void } = {};

  public build(): Mock<T> {
    var mock = new Mock<T>;
    this.decorate(mock);
    return mock;
  }

  public buildClass(): typeof Mock<T> {
    var currentPrototype = {
      ...this._prototype
    };
    
    return class customMock extends Mock<T> {
      constructor() {
        super();
        MockBuilder.decorate(currentPrototype, this);
      }
    }
  }

  public decorate(mock: Mock<T>): void
  {
    MockBuilder.decorate(this._prototype, mock);
  }

  public spyOn(method: keyof T, configure: (mockedFn: jest.Mock) => void): MockBuilder<T> {
    (this._prototype as any)[method] = configure;
    return this;
  }

  private static decorate<T>(prototype: { [method: string]: (mockedFn: jest.Mock) => void }, mock: Mock<T>): void {
    for(var member in prototype)
    {
      var spy = mock.spyOn(member as keyof T);
      prototype[member](spy)
    }
  }
}