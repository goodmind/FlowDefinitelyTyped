declare module "minimist-options" {
  import typeof * as minimist from "minimist";

  declare function build(options?: build$build$Options): minimist.Opts;

  declare type build$Type = "string" | "boolean";

  declare interface build$Option {
    type?: build$Type;
    alias?: string | string[];
    default?: any;
  }

  declare type build$Options = {
    [key: string]: build$Type | build$Option
  } & $ObjMapi<
    { [k: "stopEarly" | "unknown" | "--"]: any },
    <K>(K) => $ElementType<minimist.Opts, K>
  >;
  declare module.exports: typeof build;
}
