declare module "jest-expect-message" {
  declare interface jest$Expect {
    <T>(actual: T, message: string): Matchers<T>;
  }
}
