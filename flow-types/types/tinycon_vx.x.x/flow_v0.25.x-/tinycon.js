declare module "tinycon" {
  declare export function setBubble(count: number): void;

  declare export function setOptions(options: TinyconOptions): void;

  declare export interface TinyconOptions {
    abbreviate?: boolean;
    background?: string;
    color?: string;
    fallback?: boolean;
    font?: string;
    height?: number;
    width?: number;
  }
}
