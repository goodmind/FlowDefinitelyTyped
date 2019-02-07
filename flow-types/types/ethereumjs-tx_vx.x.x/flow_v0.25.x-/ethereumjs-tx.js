declare module "ethereumjs-tx" {
  declare class EthereumTx {
    raw: Buffer[];
    r: Buffer;
    s: Buffer;
    v: Buffer;
    nonce: Buffer;
    gasPrice: Buffer;
    gasLimit: Buffer;
    to: Buffer;
    value: Buffer;
    data: Buffer;
    serialize(): Buffer;
    sign(buffer: Buffer): void;
    toJSON(): string | string[];
    toCreationAddress(): boolean;
    hash(includeSignature?: boolean): Buffer;
    getChainId(): Buffer;
    getSenderAddress(): Buffer;
    getSenderPublicKey(): Buffer;
    verifySignature(): boolean;
    getDataFee(): BN;
    getBaseFee(): BN;
    getUpfrontCost(): BN;
    validate(stringError?: boolean): string | boolean;
    constructor(txParams: any): this;
  }
  declare module.exports: typeof EthereumTx;
}
