declare module "bash-glob" {
  declare type Patterns = string | string[];
  declare type Callback = (err: Error, files: string[]) => void;
  declare function bashGlob(pattern: Patterns, callback: Callback): void;

  declare function bashGlob(
    pattern: Patterns,
    options: bashGlob$Options,
    callback: Callback
  ): void;

  declare var npm$namespace$bashGlob: {
    on: typeof bashGlob$on,
    each: typeof bashGlob$each,
    promise: typeof bashGlob$promise,
    sync: typeof bashGlob$sync
  };
  declare interface bashGlob$Options {
    cwd?: string;
    dot?: boolean;
    dotglob?: boolean;
    extglob?: boolean;
    failglob?: boolean;
    globstar?: boolean;
    nocase?: boolean;
    nocaseglob?: boolean;
    nullglob?: boolean;
  }

  declare function bashGlob$on(
    event: "match" | "files",
    callback: (files: string, cwd: string) => void
  ): void;

  declare function bashGlob$on(
    event: "end",
    callback: (files: string) => void
  ): void;

  declare function bashGlob$each(patterns: Patterns, callback: Callback): void;

  declare function bashGlob$each(
    patterns: Patterns,
    options: bashGlob$Options,
    callback: Callback
  ): void;

  declare function bashGlob$promise(
    patterns: Patterns,
    options?: bashGlob$Options
  ): Promise<string[]>;

  declare function bashGlob$sync(
    patterns: Patterns,
    options?: bashGlob$Options
  ): string[];

  declare export default typeof bashGlob;
}
