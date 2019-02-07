declare module "digibyte" {
  declare class crypto$BN {}

  declare var npm$namespace$ECDSA: {
    sign: typeof ECDSA$sign,
    verify: typeof ECDSA$verify
  };
  declare function ECDSA$sign(
    message: Buffer,
    key: PrivateKey
  ): crypto$Signature;

  declare function ECDSA$verify(
    hashbuf: Buffer,
    sig: crypto$Signature,
    pubkey: PublicKey,
    endian?: "little"
  ): boolean;

  declare var npm$namespace$Hash: {
    sha1: typeof Hash$sha1,
    sha256: typeof Hash$sha256,
    sha256sha256: typeof Hash$sha256sha256,
    sha256ripemd160: typeof Hash$sha256ripemd160,
    sha512: typeof Hash$sha512,
    ripemd160: typeof Hash$ripemd160,
    sha256hmac: typeof Hash$sha256hmac,
    sha512hmac: typeof Hash$sha512hmac
  };
  declare function Hash$sha1(buffer: Buffer): Buffer;

  declare function Hash$sha256(buffer: Buffer): Buffer;

  declare function Hash$sha256sha256(buffer: Buffer): Buffer;

  declare function Hash$sha256ripemd160(buffer: Buffer): Buffer;

  declare function Hash$sha512(buffer: Buffer): Buffer;

  declare function Hash$ripemd160(buffer: Buffer): Buffer;

  declare function Hash$sha256hmac(data: Buffer, key: Buffer): Buffer;

  declare function Hash$sha512hmac(data: Buffer, key: Buffer): Buffer;

  declare var npm$namespace$Random: {
    getRandomBuffer: typeof Random$getRandomBuffer
  };
  declare function Random$getRandomBuffer(size: number): Buffer;

  declare class crypto$Signature {
    static fromDER(sig: Buffer): crypto$Signature;
    static fromString(data: string): crypto$Signature;
    SIGHASH_ALL: number;
    toString(): string;
  }
  declare class Transaction$UnspentOutput {
    static fromObject(o: { [key: string]: any }): Transaction$UnspentOutput;
    address: Address;
    txId: string;
    outputIndex: number;
    script: Script;
    satoshis: number;
    constructor(data: { [key: string]: any }): this;
    inspect(): string;
    toObject(): this;
    toString(): string;
  }

  declare class Transaction$Output {
    script: Script;
    satoshis: number;
    constructor(data: { [key: string]: any }): this;
    setScript(script: Script | string | Buffer): this;
    inspect(): string;
    toObject(): { [key: string]: any };
  }

  declare class Transaction$Input {
    prevTxId: Buffer;
    outputIndex: number;
    sequenceNumber: number;
    script: Script;
    output: Transaction$Output;
  }
  declare export class Transaction {
    inputs: Transaction$Transaction$Input[];
    outputs: Transaction$Transaction$Output[];
    id: string;
    hash: string;
    nid: string;
    constructor(serialized?: any): this;
    from(utxos: Transaction$Transaction$UnspentOutput[]): this;
    to(address: Address[] | Address | string, amount: number): this;
    change(address: Address | string): this;
    fee(amount: number): this;
    feePerKb(amount: number): this;
    sign(privateKey: PrivateKey | string): this;
    applySignature(sig: crypto$crypto$Signature): this;
    addInput(input: Transaction$Transaction$Input): this;
    addOutput(output: Transaction$Transaction$Output): this;
    addData(value: Buffer): this;
    lockUntilDate(time: Date | number): this;
    lockUntilBlockHeight(height: number): this;
    hasWitnesses(): boolean;
    getFee(): number;
    getChangeOutput(): Transaction$Transaction$Output | null;
    getLockTime(): Date | number;
    verify(): string | boolean;
    isCoinbase(): boolean;
    enableRBF(): this;
    isRBF(): boolean;
    inspect(): string;
    serialize(): string;
  }
  declare export class Block {
    hash: string;
    height: number;
    transactions: Transaction[];
    header: {
      time: number,
      prevHash: string
    };
    constructor(data: Buffer | { [key: string]: any }): this;
  }
  declare export class PrivateKey {
    publicKey: PublicKey;
    network: Networks$Networks$Network;
    toAddress(): Address;
    toPublicKey(): PublicKey;
    toString(): string;
    toObject(): { [key: string]: any };
    toJSON(): { [key: string]: any };
    toWIF(): string;
    constructor(key?: string, network?: Networks$Networks$Network): this;
  }
  declare export class PublicKey {
    constructor(source: string): this;
    static fromPrivateKey(privateKey: PrivateKey): PublicKey;
    toBuffer(): Buffer;
    toDER(): Buffer;
  }
  declare export class HDPrivateKey {
    hdPublicKey: HDPublicKey;
    constructor(data?: string | Buffer | { [key: string]: any }): this;
    derive(arg: string | number, hardened?: boolean): HDPrivateKey;
    deriveChild(arg: string | number, hardened?: boolean): HDPrivateKey;
    deriveNonCompliantChild(
      arg: string | number,
      hardened?: boolean
    ): HDPrivateKey;
    toString(): string;
    toObject(): { [key: string]: any };
    toJSON(): { [key: string]: any };
  }
  declare export class HDPublicKey {
    xpubkey: Buffer;
    network: Networks$Networks$Network;
    depth: number;
    publicKey: PublicKey;
    fingerPrint: Buffer;
    constructor(arg: string | Buffer | { [key: string]: any }): this;
    derive(arg: string | number, hardened?: boolean): HDPublicKey;
    deriveChild(arg: string | number, hardened?: boolean): HDPublicKey;
    toString(): string;
  }

  declare var npm$namespace$Script: {
    buildMultisigOut: typeof Script$buildMultisigOut,
    buildWitnessMultisigOutFromScript: typeof Script$buildWitnessMultisigOutFromScript,
    buildMultisigIn: typeof Script$buildMultisigIn,
    buildP2SHMultisigIn: typeof Script$buildP2SHMultisigIn,
    buildPublicKeyHashOut: typeof Script$buildPublicKeyHashOut,
    buildPublicKeyOut: typeof Script$buildPublicKeyOut,
    buildDataOut: typeof Script$buildDataOut,
    buildScriptHashOut: typeof Script$buildScriptHashOut,
    buildPublicKeyIn: typeof Script$buildPublicKeyIn,
    buildPublicKeyHashIn: typeof Script$buildPublicKeyHashIn,
    fromAddress: typeof Script$fromAddress,
    empty: typeof Script$empty,
    types: typeof Script$types
  };
  declare var Script$types: {
    DATA_OUT: string
  };

  declare function Script$buildMultisigOut(
    publicKeys: PublicKey[],
    threshold: number,
    opts: { [key: string]: any }
  ): Script;

  declare function Script$buildWitnessMultisigOutFromScript(
    script: Script
  ): Script;

  declare function Script$buildMultisigIn(
    pubkeys: PublicKey[],
    threshold: number,
    signatures: Buffer[],
    opts: { [key: string]: any }
  ): Script;

  declare function Script$buildP2SHMultisigIn(
    pubkeys: PublicKey[],
    threshold: number,
    signatures: Buffer[],
    opts: { [key: string]: any }
  ): Script;

  declare function Script$buildPublicKeyHashOut(address: Address): Script;

  declare function Script$buildPublicKeyOut(pubkey: PublicKey): Script;

  declare function Script$buildDataOut(
    data: string | Buffer,
    encoding?: string
  ): Script;

  declare function Script$buildScriptHashOut(script: Script): Script;

  declare function Script$buildPublicKeyIn(
    signature: crypto$crypto$Signature | Buffer,
    sigtype: number
  ): Script;

  declare function Script$buildPublicKeyHashIn(
    publicKey: PublicKey,
    signature: crypto$crypto$Signature | Buffer,
    sigtype: number
  ): Script;

  declare function Script$fromAddress(address: string | Address): Script;

  declare function Script$empty(): Script;

  declare export class Script {
    constructor(data: string | { [key: string]: any }): this;
    set(obj: { [key: string]: any }): this;
    toBuffer(): Buffer;
    toASM(): string;
    toString(): string;
    toHex(): string;
    isPublicKeyHashOut(): boolean;
    isPublicKeyHashIn(): boolean;
    getPublicKey(): Buffer;
    getPublicKeyHash(): Buffer;
    isPublicKeyOut(): boolean;
    isPublicKeyIn(): boolean;
    isScriptHashOut(): boolean;
    isWitnessScriptHashOut(): boolean;
    isWitnessPublicKeyHashOut(): boolean;
    isWitnessProgram(): boolean;
    isScriptHashIn(): boolean;
    isMultisigOut(): boolean;
    isMultisigIn(): boolean;
    isDataOut(): boolean;
    getData(): Buffer;
    isPushOnly(): boolean;
    classify(): string;
    classifyInput(): string;
    classifyOutput(): string;
    isStandard(): boolean;
    prepend(obj: any): this;
    add(obj: any): this;
    hasCodeseparators(): boolean;
    removeCodeseparators(): this;
    equals(script: Script): boolean;
    getAddressInfo(): Address | boolean;
    findAndDelete(script: Script): this;
    checkMinimalPush(i: number): boolean;
    getSignatureOperationsCount(accurate: boolean): number;
    toAddress(): Address;
  }
  declare export interface Util {
    +buffer: {
      reverse(a: any): any
    };
  }

  declare var npm$namespace$Networks: {
    add: typeof Networks$add,
    remove: typeof Networks$remove,
    get: typeof Networks$get,
    livenet: typeof Networks$livenet,
    mainnet: typeof Networks$mainnet,
    testnet: typeof Networks$testnet
  };
  declare interface Networks$Network {
    +name: string;
    +alias: string;
  }

  declare var Networks$livenet: Networks$Network;

  declare var Networks$mainnet: Networks$Network;

  declare var Networks$testnet: Networks$Network;

  declare function Networks$add(data: any): Networks$Network;

  declare function Networks$remove(network: Networks$Network): void;

  declare function Networks$get(
    args: string | number | Networks$Network,
    keys: string | string[]
  ): Networks$Network;

  declare export class Address {
    hashBuffer: Buffer;
    network: Networks$Networks$Network;
    type: string;
    constructor(
      data: Buffer | Uint8Array | string | { [key: string]: any },
      network?: Networks$Networks$Network,
      type?: string
    ): this;
  }
  declare export class Unit {
    static fromDGB(amount: number): Unit;
    static fromMilis(amount: number): Unit;
    static fromBits(amount: number): Unit;
    static fromSatoshis(amount: number): Unit;
    static fromFiat(amount: number, exchangeRate: number): Unit;
    constructor(amount: number, unitPreference: string): this;
    toDGB(): number;
    toMilis(): number;
    toBits(): number;
    toSatoshis(): number;
  }
  declare export class URI {
    static fromString(str: string): URI;
    static fromObject(json: { [key: string]: any }): URI;
    static isValid(data: boolean): URI;
    static fromSatoshis(amount: number): URI;
    constructor(data: string | { [key: string]: any }): this;
    toString(): string;
    toObject(): any;
    parse(): any;
  }
}
