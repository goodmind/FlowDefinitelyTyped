declare module "bump-regex" {
  declare function BumpRegex(
    opts: string | BumpRegex$BumpRegex$Options,
    cb: BumpRegex$BumpRegex$Callback
  ): any;

  declare type BumpRegex$Callback = (
    err: string | Error | null,
    opts?: BumpRegex$Result
  ) => void;

  declare interface BumpRegex$Options {
    key?: string;
    type?: "major" | "minor" | "patch" | "prerelease";
    case?: boolean;
    keys?: string[];
    global?: boolean;
    version?: string;
    preid?: string;
    regex?: RegExp;
    str?: string;
  }

  declare type BumpRegex$Result = {
    prev: string,
    new: string
  } & BumpRegex$Options;

  declare module.exports: typeof BumpRegex;
}
