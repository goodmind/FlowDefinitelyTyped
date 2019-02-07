declare module "global-tunnel-ng" {
  declare export function initialize(options?: Options | string): void;

  declare export function end(): void;

  declare export var proxyUrl: string | null;
  declare export var proxyConfig: Options | null;
  declare export var isProxying: boolean;
  declare export interface Options {
    host: string;
    port: number;
    connect?: "neither" | "https" | "both";
    protocol?: "http:" | "https:";
    proxyAuth?: string;
    sockets?: number;
    proxyHttpsOptions?: {
      [key: string]: any
    };
    originHttpsOptions?: {
      [key: string]: any
    };
  }
}
