declare module "google-closure-compiler" {
  import typeof * as child_process from "child_process";

  declare interface JSONStreamFile {
    path: string;
    src: string;
    srcmap?: string;
  }
  declare interface Compiler {
    javaPath: string;
    logger: (...args: any[]) => void;
    spawnOptions: {
      [key: string]: string
    };
    run(
      callback?: (exitCode: number, stdout: string, stderr: string) => void
    ): child_process.ChildProcess;
    getFullCommand(): string;
  }
  declare type CompileOption = string | boolean;
  declare type CompileOptions =
    | string[]
    | {
        [key: string]: CompileOption | CompileOption[]
      };
  declare export var compiler: {
    new(opts: CompileOptions | string[], extraCommandArgs?: string[]): Compiler,
    JAR_PATH: string,
    COMPILER_PATH: string,
    CONTRIB_PATH: string
  };
}
