declare module "cryptex" {
  declare export interface CryptexConfig {
    keySource: string;
    keySourceOpts?: {
      dataKey?: string,
      region?: string
    };
    algorithm?: string;
    secretEncoding?: string;
    secrets: { [key: string]: any };
  }
  declare export interface CryptexOpts {
    file?: string;
    env?: string;
    cacheKey?: boolean;
    cacheKeyTimeout?: number;
    config?: CryptexConfig;
  }
  declare export function decrypt(
    data: string,
    encoding?: string
  ): Promise<string>;

  declare export function encrypt(
    data: string,
    encoding?: string
  ): Promise<string>;

  declare export function getSecret(
    secret: string,
    optional?: boolean
  ): Promise<string>;

  declare export function getSecrets(
    secrets: string[],
    optional?: boolean
  ): Promise<string[]>;

  declare export function update(opts: CryptexOpts): void;

  declare export class Cryptex {
    constructor(opts: CryptexOpts): this;
    decrypt(data: string, encoding?: string): string;
    encrypt(data: string, encoding?: string): string;
    getSecret(secret: string, optional?: boolean): Promise<string>;
    getSecrets(secrets: string[], optional?: boolean): Promise<string[]>;
    update(opts: CryptexOpts): void;
  }
}
