export class Mock<T> {
  public get instance(): T {
    return this._instance;
  }
  private _instance: T = {} as T;

  spyOn(method: keyof T): jest.Mock {
    return (this._instance as any)[method] ??= jest.fn()
  }
}