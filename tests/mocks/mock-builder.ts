import { Mock } from "./mock";

/**
 * Utility class for building preconfigured {@link Mock} instances.
 *
 * `MockBuilder` allows you to define method spies and their behavior 
 * ahead of time, and then create either:
 * - A fully decorated {@link Mock} instance (`build`), or
 * - A subclass of {@link Mock} that applies the same configuration 
 *   whenever instantiated (`buildClass`).
 *
 * ## Example
 *
 * ```typescript
 * // Suppose MyService has a method `foo`
 * const builder = new MockBuilder<MyService>()
 *   .spyOn("foo", mock => mock.mockReturnValue("bar"));
 *
 * // Build a single mock instance
 * const mock = builder.build();
 * const service = mock.instance;
 * console.log(service.foo()); // ===> "bar"
 *
 * // Build a reusable mock class
 * const MockedService = builder.buildClass();
 * const mock1 = new MockedService();
 * const mock2 = new MockedService();
 *
 * console.log(mock1.instance.foo()); // ===> "bar"
 * console.log(mock2.instance.foo()); // ===> "bar"
 * ```
 */
export class MockBuilder<T> {
  private _prototype: { [method: string]: (mockedFn: jest.Mock) => void } = {};

  /**
   * Builds a new {@link Mock} instance of type `T`
   * and applies all configured spies.
   *
   * @returns A decorated {@link Mock} instance.
   */
  public build(): Mock<T> {
    var mock = new Mock<T>;
    this.decorate(mock);
    return mock;
  }

  /**
   * Builds a custom subclass of {@link Mock} that applies
   * the configured spies automatically in its constructor.
   *
   * Useful for reusing the same mock configuration across tests.
   *
   * @returns A new class extending {@link Mock} with preconfigured spies.
   */
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

  /**
   * Applies all configured spies to the provided {@link Mock} instance.
   *
   * @param mock The mock instance to decorate.
   */
  public decorate(mock: Mock<T>): void
  {
    MockBuilder.decorate(this._prototype, mock);
  }

  /**
   * Configures a spy for a method of type `T`.
   *
   * The provided callback receives the `jest.Mock` instance,
   * allowing you to define its behavior (e.g., return values, implementations).
   *
   * @param method The method name to mock.
   * @param configure A function that configures the created mock.
   * @returns The current {@link MockBuilder} (for chaining).
   *
   * @example
   * ```typescript
   * const builder = new MockBuilder<MyService>()
   *   .spyOn("foo", mock => mock.mockReturnValue("bar"))
   *   .spyOn("baz", mock => mock.mockImplementation(() => 42));
   * ```
   */
  public spyOn(method: keyof T, configure: (mockedFn: jest.Mock) => void): MockBuilder<T> {
    (this._prototype as any)[method] = configure;
    return this;
  }

  /**
   * Internal helper that applies all configured spies
   * from the given prototype into the provided {@link Mock}.
   *
   * @param prototype The collection of configured spies.
   * @param mock The {@link Mock} instance to decorate.
   */
  private static decorate<T>(prototype: { [method: string]: (mockedFn: jest.Mock) => void }, mock: Mock<T>): void {
    for(var member in prototype)
    {
      var spy = mock.spyOn(member as keyof T);
      prototype[member](spy)
    }
  }
}