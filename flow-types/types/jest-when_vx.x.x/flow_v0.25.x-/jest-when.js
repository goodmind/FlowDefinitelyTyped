declare module "jest-when" {
  declare export type WhenMock<T = any, Y: any[] = any> = {
    calledWith(...matchers: Y): WhenMock<T, Y>,
    expectCalledWith(...matchers: Y): WhenMock<T, Y>,
    mockReturnValue(value: T): WhenMock<T, Y>,
    mockReturnValueOnce(value: T): WhenMock<T, Y>,
    mockResolvedValue(value: T | PromiseLike<T>): WhenMock<Promise<T>, Y>,
    mockResolvedValueOnce(value: T | PromiseLike<T>): WhenMock<Promise<T>, Y>,
    mockRejectedValue(value: T | PromiseLike<T>): WhenMock<Promise<T>, Y>,
    mockRejectedValueOnce(value: T | PromiseLike<T>): WhenMock<Promise<T>, Y>
  } & jest.Mock<T, Y>;

  declare export type When = <T, Y: any[]>(
    fn: jest.Mock<T, Y>
  ) => WhenMock<T, Y>;
  declare export var when: When;
}
