declare module "clipboardy" {
  declare export function write(input: string): Promise<void>;

  declare export function writeSync(input: string): void;

  declare export function read(): Promise<string>;

  declare export function readSync(): string;
}
