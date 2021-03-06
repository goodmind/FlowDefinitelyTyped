declare module "rsync" {
  import typeof * as child_process from "child_process";

  declare interface StreamDataHandler {
    (data: any): void;
  }
  declare interface Pattern {
    action: string;
    pattern: string;
  }
  declare interface Flag {
    [name: string]: boolean;
  }
  declare interface Rsync {
    set(option: string, value: string): Rsync;
    set(option: string): Rsync;
    unset(option: string): Rsync;
    flags(flags: string, set?: boolean): Rsync;
    flags(flags: Flag): Rsync;
    flags(flags: string[], set?: boolean): Rsync;
    flags(...flags: any[]): Rsync;
    isSet(option: string): boolean;
    option(option: string): any;
    args(): string[];
    command(): string;
    output(stdout: StreamDataHandler, stderr: StreamDataHandler): Rsync;
    execute(
      callback: (err: Error, code: number, cmd: string) => void
    ): child_process.ChildProcess;
    execute(
      callback: (err: Error, code: number, cmd: string) => void,
      stdout: StreamDataHandler,
      stderr: StreamDataHandler
    ): child_process.ChildProcess;
    cwd(cwd: string): string;
    shell(shell: string): Rsync;
    delete(): Rsync;
    progress(): Rsync;
    archive(): Rsync;
    compress(): Rsync;
    recursive(): Rsync;
    update(): Rsync;
    quiet(): Rsync;
    dirs(): Rsync;
    links(): Rsync;
    chmod(flags: string): Rsync;
    dry(): Rsync;
    executable(): string;
    executable(e: string): Rsync;
    executableShell(): string;
    executableShell(e: string): Rsync;
    destination(): string;
    destination(d: string): Rsync;
    source(): string[];
    source(s: string): Rsync;
    source(s: string[]): Rsync;
    patterns(patterns: (string | Pattern)[]): Rsync;
    exclude(p: string): Rsync;
    exclude(p: string[]): Rsync;
    include(p: string): Rsync;
    include(p: string[]): Rsync;
  }
  declare interface RsyncStatic {
    new(): Rsync;
  }
  declare var e: RsyncStatic;
  declare module.exports: typeof e;
}
