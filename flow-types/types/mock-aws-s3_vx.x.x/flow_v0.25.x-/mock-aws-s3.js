declare module "mock-aws-s3" {
  declare export * from "aws-sdk"

  import type { GlobalConfigInstance } from "aws-sdk/lib/config";

  declare export type MockConfigInstance = {
    basePath: string
  } & GlobalConfigInstance;

  declare export var config: MockConfigInstance;
}
