declare module "web3-eth-abi" {
  declare function encodeParameters(
    typesArray: string[],
    parameters: any[]
  ): string;

  declare module.exports: typeof encodeParameters;
}
