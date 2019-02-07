declare module "std-mocks" {
  declare export interface Options {
    stdout?: boolean;
    stderr?: boolean;
  }

  /**
   * Start mocking std output
   */
  declare export function use(
    opts?: Options & {
      print?: boolean
    }
  ): void;

  /**
   * Restore std output
   */
  declare export function restore(opts?: Options): void;

  /**
   * Flush collected output
   */
  declare export function flush(
    opts: Options & {
      stdout: false,
      stderr: false
    }
  ): {};

  declare export function flush(
    opts: Options & {
      stderr: false
    }
  ): {
    stdout: string[]
  };

  declare export function flush(
    opts: Options & {
      stdout: false
    }
  ): {
    stderr: string[]
  };

  declare export function flush(
    opts?: Options
  ): {
    stdout: string[],
    stderr: string[]
  };
}
