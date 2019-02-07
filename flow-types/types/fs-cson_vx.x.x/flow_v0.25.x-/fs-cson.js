declare module "fs-cson" {
  declare export function readFile(
    filePath: string,
    done: (err: Error | null, result: any) => void
  ): void;

  declare export function readFileSync(filePath: string): any;

  declare export function register(): void;

  declare export function updateFile(
    filePath: string,
    updater: (data: any) => any,
    done: (err: NodeJS.ErrnoException) => void
  ): void;

  declare export function updateFileSync(
    filePath: string,
    updater: (data: any) => any
  ): void;

  declare export function writeFile(
    filePath: string,
    data: any,
    done: (err: NodeJS.ErrnoException) => void
  ): void;

  declare export function writeFileSync(filePath: string, data: any): void;

  declare export function writeFileSafe(
    filePath: string,
    data: any,
    done: (err: NodeJS.ErrnoException) => void
  ): void;

  declare export function writeFileSafeSync(filePath: string, data: any): void;
}
