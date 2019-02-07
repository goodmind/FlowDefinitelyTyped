declare module "config-yaml" {
  import typeof * as fs from "fs";

  declare module.exports: typeof Yaml;

  declare interface Yaml$Options {
    encoding: string;
  }
  declare function Yaml(
    path: fs.PathLike,
    options?: $Shape<Yaml$Yaml$Options>
  ): any;
}
