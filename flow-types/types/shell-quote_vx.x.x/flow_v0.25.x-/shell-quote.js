declare module "shell-quote" {
  declare export type ParseEntry =
    | string
    | {
        op: string
      }
    | {
        op: "glob",
        pattern: string
      }
    | {
        comment: string
      };
  declare export function quote(args: string[]): string;

  declare export function parse(
    cmd: string,
    env?:
      | {
          [key: string]: string
        }
      | ((key: string) => string | { [key: string]: any }),
    opts?: {
      [key: string]: string
    }
  ): ParseEntry[];
}
