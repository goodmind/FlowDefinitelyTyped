declare module "parse-github-url" {
  import type { Url } from "url";

  declare type gh$Result = {
    filepath: string | null,
    owner: string | null,
    name: string | null,
    repo: string | null,
    repository: string | null,
    branch: string
  } & Url;

  declare function gh(url: string): gh$gh$Result | null;

  declare module.exports: typeof gh;
}
