declare module 'elliptic' {
        declare export var utils: any;
	declare export var rand: any;
	declare export type BNInput = string
| BN
| number
| Buffer
| number[];
	declare export var version: number;
	
/**
 * @description Base class for the curves
 */
declare class curve$base  {
p: BN;
type: string;
red: any;
zero: BN;
one: BN;
two: BN;
n: BN;
g: curve$base.base$BasePoint;
redN: BN;
constructor(type: string, conf: curve$base.base$BaseCurveOptions): this;
validate(point: curve$base.base$BasePoint): boolean;
decodePoint(bytes: Buffer | string, enc?: "hex"): curve$base.base$BasePoint
}

declare class base$BasePoint  {
curve: curve$base;
type: string;
precomputed: base$PrecomputedValues | null;
constructor(curve: curve$base, type: string): this;
encode(enc: string, compact: boolean): string | Buffer;
encodeCompressed(enc: string): BN;
validate(): boolean;
precompute(power: number): base$BasePoint;
dblp(k: number): base$BasePoint;
inspect(): string;
isInfinity(): boolean;
add(p: base$BasePoint): base$BasePoint;
mul(k: BN): base$BasePoint;
dbl(): base$BasePoint;
getX(): BN;
getY(): BN;
eq(p: base$BasePoint): boolean;
neg(): base$BasePoint
}

declare interface base$BaseCurveOptions {
p: number
| string
| number[]
| Buffer
| BN,
prime?: BN | string,
n?: number | BN | Buffer,
g?: base$BasePoint,
gRed?: any
} 

declare interface base$PrecomputedValues {
doubles: any,
naf: any,
beta: any
} 

declare class curve$edwards mixins curve$base {
a: BN;
c: BN;
c2: BN;
d: BN;
dd: BN;
constructor(conf: curve$edwards.edwards$EdwardsConf): this;
point(
x: BNInput,
y: BNInput,
z?: BNInput,
t?: BNInput): curve$edwards.edwards$EdwardsPoint;
pointFromX(x: BNInput, odd?: boolean): curve$edwards.edwards$EdwardsPoint;
pointFromY(y: BNInput, odd?: boolean): curve$edwards.edwards$EdwardsPoint;
pointFromJSON(obj: BNInput[]): curve$edwards.edwards$EdwardsPoint
}

declare type edwards$EdwardsConf = {
a: BNInput,
c: BNInput,
d: BNInput
} & base$base$BaseCurveOptions


declare class edwards$EdwardsPoint mixins base$base$BasePoint {
x: BN;
y: BN;
z: BN;
t: BN;
normalize(): edwards$EdwardsPoint;
eqXToP(x: BN): boolean
}

declare class curve$short mixins curve$base {
a: BNInput;
b: BNInput;
g: curve$short.short$ShortPoint;
constructor(conf: curve$short.short$ShortConf): this;
point(x: BNInput, y: BNInput, isRed?: boolean): curve$short.short$ShortPoint;
pointFromX(x: BNInput, odd?: boolean): curve$short.short$ShortPoint;
pointFromJSON(obj: BNInput[], red: boolean): curve$short.short$ShortPoint
}

declare type short$ShortConf = {
a: BNInput,
b: BNInput,
beta?: BNInput,
lambda?: BNInput
} & base$base$BaseCurveOptions


declare class short$ShortPoint mixins base$base$BasePoint {
x: BN;
y: BN;
inf: boolean;
toJSON(): BNInput[]
}
	declare class curves$PresetCurve  {
type: string;
g: any;
n: BN | void | null;
hash: any;
constructor(options: curves$PresetCurve.PresetCurve$Options): this
}

declare interface PresetCurve$Options {
type: string,
prime: string | null,
p: string,
a: string,
b: string,
n: string,
hash: any,
gRed: boolean,
g: any,
beta?: string,
lambda?: string,
basis?: any
} 
	declare export class ec  {
curve: any;
n: BN | void | null;
nh: any;
g: any;
hash: any;
constructor(options: string | curves$curves$PresetCurve): this;
keyPair(options: ec$eddsa$KeyPairOptions): ec$eddsa$KeyPair;
keyFromPrivate(priv: Buffer | ec$eddsa$KeyPair, enc?: string): ec$eddsa$KeyPair;
keyFromPublic(pub: Buffer | ec$eddsa$KeyPair, enc?: string): ec$eddsa$KeyPair;
genKeyPair(options?: ec$ec$GenKeyPairOptions): ec$eddsa$KeyPair;
sign(
msg: BNInput,
key: Buffer | ec$eddsa$KeyPair,
enc: string,
options?: ec$ec$SignOptions): ec$eddsa$Signature;
sign(
msg: BNInput,
key: Buffer | ec$eddsa$KeyPair,
options?: ec$ec$SignOptions): ec$eddsa$Signature;
verify(
msg: BNInput,
signature: ec$eddsa$Signature | ec$ec$SignatureOptions,
key: Buffer | ec$eddsa$KeyPair,
enc?: string): boolean;
recoverPubKey(
msg: BNInput,
signature: ec$eddsa$Signature | ec$ec$SignatureOptions,
j: number,
enc?: string): any;
getKeyRecoveryParam(
e: Error | void,
signature: ec$eddsa$Signature | ec$ec$SignatureOptions,
Q: BN,
enc?: string): number
}
	declare interface ec$GenKeyPairOptions {
pers: any,
entropy: any,
persEnc?: string,
entropyEnc?: string
} 

declare interface ec$SignOptions {
pers: any,
persEnc?: string,
canonical?: boolean,
k?: BN
} 

declare class ec$KeyPair  {
static fromPublic(ec: ec, pub: Buffer | ec$KeyPair, enc?: string): ec$KeyPair;
static fromPrivate(ec: ec, priv: Buffer | ec$KeyPair, enc?: string): ec$KeyPair;
ec: ec;
constructor(ec: ec, options: eddsa$KeyPairOptions): this;
validate(): {
+result: boolean,
+reason: string
};
getPublic(compact: boolean, enc?: string): any;
getPublic(enc?: string): any;
getPrivate(enc?: "hex"): Buffer | BN | string;
derive(pub: any): any;
sign(msg: BNInput, enc: string, options?: ec$SignOptions): eddsa$Signature;
sign(msg: BNInput, options?: ec$SignOptions): eddsa$Signature;
verify(msg: BNInput, signature: eddsa$Signature | ec$SignatureOptions): boolean;
inspect(): string
}

declare class ec$Signature  {
r: BN;
s: BN;
recoveryParam: number | null;
constructor(options: ec$SignatureOptions | ec$Signature, enc?: string): this;
toDER(enc?: string | null): any
}

declare interface ec$SignatureOptions {
r: BNInput,
s: BNInput,
recoveryParam?: number
} 

declare interface ec$KeyPairOptions {
priv?: Buffer,
privEnc?: string,
pub?: Buffer,
pubEnc?: string,
secret: Buffer,
pub: Buffer | eddsa$Point
} 
	declare export class eddsa  {
curve: curve$curve$edwards;
constructor(name: "ed25519"): this;
sign(message: eddsa$eddsa$Bytes, secret: eddsa$eddsa$Bytes): eddsa$ec$Signature;
verify(
message: eddsa$eddsa$Bytes,
sig: eddsa$eddsa$Bytes | eddsa$ec$Signature,
pub: eddsa$eddsa$Bytes | eddsa$eddsa$Point | eddsa$ec$KeyPair): boolean;
hashInt(): BN;
keyFromPublic(pub: eddsa$eddsa$Bytes): eddsa$ec$KeyPair;
keyFromSecret(secret: eddsa$eddsa$Bytes): eddsa$ec$KeyPair;
makeSignature(sig: eddsa$ec$Signature | Buffer | string): eddsa$ec$Signature;
encodePoint(point: eddsa$eddsa$Point): Buffer;
decodePoint(bytes: eddsa$eddsa$Bytes): eddsa$eddsa$Point;
encodeInt(num: BN): Buffer;
decodeInt(bytes: BNInput): BN;
isPoint(val: any): boolean
}
	declare type eddsa$Point = curve$curve$base.base$BasePoint;

declare type eddsa$Bytes = string | Buffer;

declare class eddsa$Signature  {
constructor(eddsa: eddsa, sig: eddsa$Signature | eddsa$Bytes): this;
toBytes(): Buffer;
toHex(): string
}

declare class eddsa$KeyPair  {
constructor(eddsa: eddsa, params: ec$KeyPairOptions): this;
static fromPublic(eddsa: eddsa, pub: eddsa$Bytes): eddsa$KeyPair;
static fromSecret(eddsa: eddsa, secret: eddsa$Bytes): eddsa$KeyPair;
secret(): Buffer;
sign(message: eddsa$Bytes): eddsa$Signature;
verify(message: eddsa$Bytes, sig: eddsa$Signature | eddsa$Bytes): boolean;
getSecret(enc: "hex"): string;
getSecret(): Buffer;
getPublic(enc: "hex"): string;
getPublic(): Buffer
}

declare interface eddsa$KeyPairOptions {
priv?: Buffer,
privEnc?: string,
pub?: Buffer,
pubEnc?: string,
secret: Buffer,
pub: Buffer | eddsa$Point
} 
    }
