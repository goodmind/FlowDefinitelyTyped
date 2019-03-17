declare module "voucher-code-generator" {
  declare export function charset(
    name: "numbers" | "alphabetic" | "alphanumeric"
  ): string;

  declare export function generate(config?: generatorConfig): string[];

  declare export interface generatorConfig {
    length?: number;
    count?: number;
    charset?: string;
    prefix?: string;
    postfix?: string;
    pattern?: string;
  }
}
