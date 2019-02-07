declare module "fined" {
  declare module.exports: typeof fined;

  declare function fined(
    path: string | fined$fined$PathSpec,
    opts?: fined$fined$PathSpec
  ): fined$fined$Result | null;

  declare interface fined$PathSpec {
    path?: string;
    name?: string;
    extensions?:
      | string
      | string[]
      | {
          [extension: string]: string | null
        };
    cwd?: string;
    findUp?: boolean;
  }

  declare interface fined$Result {
    path: string;
    extension:
      | string
      | {
          [extension: string]: string
        };
  }
}
