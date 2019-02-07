declare module "ethereumjs-abi" {
  declare export function soliditySHA3(argTypes: string[], args: any[]): Buffer;

  declare export function soliditySHA256(
    argTypes: string[],
    args: any[]
  ): Buffer;

  declare export function methodID(name: string, types: string[]): Buffer;

  declare export function simpleEncode(
    signature: string,
    ...args: any[]
  ): Buffer;

  declare export function rawDecode(signature: string[], data: Buffer): any[];
}
