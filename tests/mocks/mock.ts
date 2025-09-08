/**
 * Utility class for creating strongly-typed mocks of objects.
 *
 * ## Example
 *
 * ```typescript
 * // Create a mock of MyService
 * const myServiceMock = new Mock<MyService>();
 *
 * // Configure the 'foo' method of MyService
 * myServiceMock.spyOn('foo')
 *   .mockReturnValue('bar');
 *
 * // Retrieve the mocked instance
 * const myService = myServiceMock.instance;
 *
 * const result = myService.foo(); // ===> 'bar'
 * ```
 *
 * ⚠️ Note: Only methods explicitly configured with {@link spyOn}
 * will exist on the mocked instance. All other methods will be `undefined`.
 */
export class Mock<T> {
  /**
   * Returns the mocked instance of type `T`.
   *
   * The instance only contains the methods explicitly configured
   * with {@link spyOn}. Any other methods will be `undefined`.
   *
   * Use this property when injecting the mock into the code under test.
   */
  public get instance(): T {
    return this._instance;
  }
  private _instance: T = {} as T;

  /**
   * Creates (or returns, if already defined) a Jest mock function
   * for the specified method.
   *
   * - Multiple calls to the same method return the same mock instance.
   * - This ensures consistent configuration and assertions across tests.
   *
   * @param method The name of the method to mock.
   * @returns A `jest.Mock` function that can be configured and asserted.
   */
  spyOn(method: keyof T): jest.Mock {
    return (this._instance as any)[method] ??= jest.fn()
  }
}