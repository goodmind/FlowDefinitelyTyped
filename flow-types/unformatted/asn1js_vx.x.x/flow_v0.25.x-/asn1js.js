declare module 'asn1js' {
        import type {
          getParametersValue,padNumber,isEqualBuffer,bufferToHexCodes,checkBufferParams,utilToBase,utilFromBase,utilEncodeTC,utilDecodeTC,utilConcatBuf,nearestPowerOf2
        } from 'pvutils';

	declare module.exports: typeof Asn1js

	
      declare var npm$namespace$Asn1js: {
        fromBER: typeof Asn1js$fromBER,
compareSchema: typeof Asn1js$compareSchema,
verifySchema: typeof Asn1js$verifySchema,
        
      }
declare interface Asn1js$LocalBaseBlockParams {
blockLength?: number,
error?: string,
warnings?: string[],
valueBeforeDecode?: ArrayBuffer
} 

declare interface Asn1js$JsonLocalBaseBlock {
blockName: string,
blockLength: number,
error: string,
warnings: string[],
valueBeforeDecode: ArrayBuffer
} 

declare class Asn1js$LocalBaseBlock  {
blockLength: number;
error: string;
warnings: string[];
valueBeforeDecode: ArrayBuffer;
constructor(params?: Asn1js$LocalBaseBlockParams): this;

/**
 * Aux function, need to get a block name. Need to have it here for inhiritence
 * @static
 * @returns {string}
 * @memberOf LocalBaseBlock
 */
static blockName(): string;

/**
 * Convertion for the block to JSON object
 * @returns {Asn1js$JsonLocalBaseBlock}
 * @memberOf LocalBaseBlock
 */
toJSON(): Asn1js$JsonLocalBaseBlock
}

declare type Asn1js$LocalHexBlockParams = {
isHexOnly?: boolean,
valueHex?: ArrayBuffer
} & Asn1js$LocalBaseBlockParams


declare interface Asn1js$ILocalHexBlock {
isHexOnly: boolean,
valueHex: ArrayBuffer,

/**
 * Base function for converting block from BER encoded array of bytes
 * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
 * @param {number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
 * @param {number} inputLength Maximum length of array of bytes which can be using in this function
 * @returns {number} Offset after least decoded byte
 * @memberOf LocalHexBlockMixin
 */
Asn1js$fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number,

/**
 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
 * @param {boolean} sizeOnly Flag that we need only a size of encoding, not a real array of bytes
 * @returns {ArrayBuffer}
 * @memberOf LocalHexBlockMixin
 */
toBER(sizeOnly?: boolean): ArrayBuffer,

/**
 * Convertion for the block to JSON object
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
 */
toJSON(): any
} 

declare class Asn1js$LocalHexBlock mixins Asn1js$ILocalHexBlock {
isHexOnly: boolean;
valueHex: ArrayBuffer;
constructor(params: any): this;

/**
 * Aux function, need to get a block name. Need to have it here for inhiritence
 * @static
 * @returns {string}
 * @memberOf LocalHexBlockMixin
 */
static blockName(): string;

/**
 * Base function for converting block from BER encoded array of bytes
 * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
 * @param {number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
 * @param {number} inputLength Maximum length of array of bytes which can be using in this function
 * @returns {number} Offset after least decoded byte
 * @memberOf LocalHexBlockMixin
 */
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;

/**
 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
 * @param {boolean} sizeOnly Flag that we need only a size of encoding, not a real array of bytes
 * @returns {ArrayBuffer}
 * @memberOf LocalHexBlockMixin
 */
toBER(sizeOnly?: boolean): ArrayBuffer;

/**
 * Convertion for the block to JSON object
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
 */
toJSON(): any
}

declare interface Asn1js$LocalIdentificationBlockParams {
idBlock?: Asn1js$LocalHexBlockParams & {
isConstructed?: boolean,
tagClass?: number,
tagNumber?: number
}
} 

declare class Asn1js$LocalIdentificationBlock mixins Asn1js$LocalBaseBlock, Asn1js$ILocalHexBlock {
isConstructed: boolean;
tagClass: number;
tagNumber: number;
constructor(params?: Asn1js$LocalIdentificationBlockParams): this;
isHexOnly: boolean;
valueHex: ArrayBuffer;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer
}

declare interface Asn1js$LocalLengthBlockParams {
lenBlock?: {
isIndefiniteForm?: boolean,
longFormUsed?: boolean,
length: number
}
} 

declare class Asn1js$LocalLengthBlock mixins Asn1js$LocalBaseBlock {
isIndefiniteForm: boolean;
longFormUsed: boolean;
length: number;
constructor(params?: Asn1js$LocalLengthBlockParams): this;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): void;
toBER(sizeOnly?: boolean): ArrayBuffer
}

declare class Asn1js$LocalValueBlock mixins Asn1js$LocalBaseBlock {
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): void;
toBER(sizeOnly?: boolean): ArrayBuffer
}

declare type Asn1js$BaseBlockParams = {
name?: string,
optional?: boolean,
primitiveSchema?: Object
} & Asn1js$LocalBaseBlockParams


declare class Asn1js$BaseBlock<T: Asn1js$LocalValueBlock> mixins Asn1js$LocalBaseBlock {
constructor(parameters?: Asn1js$BaseBlockParams, valueBlockType?: typeof LocalValueBlock): this;
idBlock: Asn1js$LocalIdentificationBlock;
lenBlock: Asn1js$LocalLengthBlock;
valueBlock: T;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer
}

declare type Asn1js$LocalPrimitiveValueBlockParams = {
valueHex?: ArrayBuffer,
isHexOnly?: boolean
} & Asn1js$LocalBaseBlockParams


declare class Asn1js$LocalPrimitiveValueBlock mixins Asn1js$LocalValueBlock {
valueHex: ArrayBuffer;
isHexOnly: boolean;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer
}

declare class Asn1js$Primitive mixins Asn1js$BaseBlock<Asn1js$LocalPrimitiveValueBlock> {}

declare type Asn1js$LocalConstructedValueBlockParams = {
value?: Asn1js$LocalValueBlock,
isIndefiniteForm?: boolean
} & Asn1js$LocalBaseBlockParams


declare class Asn1js$LocalConstructedValueBlock mixins Asn1js$LocalValueBlock {
value: Asn1js$LocalValueBlock[];
isIndefiniteForm: boolean;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer
}

declare class Asn1js$Constructed mixins Asn1js$BaseBlock<Asn1js$LocalConstructedValueBlock> {}

declare type Asn1js$LocalEndOfContentValueBlockParams = {} & Asn1js$LocalBaseBlockParams


declare class Asn1js$LocalEndOfContentValueBlock mixins Asn1js$LocalValueBlock {
constructor(params?: Asn1js$LocalEndOfContentValueBlockParams): this;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer
}

declare export class Asn1js$EndOfContent mixins Asn1js$BaseBlock<Asn1js$LocalEndOfContentValueBlock> {}

declare type Asn1js$LocalBooleanValueBlockParams = {
value?: boolean,
isHexOnly?: boolean,
valueHex?: ArrayBuffer
} & Asn1js$LocalBaseBlockParams


declare class Asn1js$LocalBooleanValueBlock mixins Asn1js$LocalValueBlock {
value: boolean;
isHexOnly: boolean;
valueHex: ArrayBuffer;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer
}

declare class Asn1js$Boolean mixins Asn1js$BaseBlock<Asn1js$LocalBooleanValueBlock> {}

declare class Asn1js$Sequence mixins Asn1js$Constructed {}

declare class Asn1js$Set mixins Asn1js$Constructed {}

declare class Asn1js$Null mixins Asn1js$BaseBlock<Asn1js$LocalValueBlock> {}

declare type Asn1js$LocalOctetStringValueBlockParams = {
isConstructed?: boolean
} & Asn1js$LocalConstructedValueBlockParams & Asn1js$LocalHexBlockParams


declare class Asn1js$LocalOctetStringValueBlock mixins Asn1js$LocalConstructedValueBlock, Asn1js$ILocalHexBlock {
isConstructed: boolean;
isHexOnly: boolean;
valueHex: ArrayBuffer;
constructor(params?: Asn1js$LocalOctetStringValueBlockParams): this
}

declare export class Asn1js$OctetString mixins Asn1js$BaseBlock<Asn1js$LocalOctetStringValueBlock> {
constructor(params?: Asn1js$LocalOctetStringValueBlockParams): this;

/**
 * Checking that two OCTETSTRINGs are equal
 * @param {Asn1js$OctetString} octetString
 * @returns {boolean}
 * @memberOf OctetString
 */
isEqual(octetString: Asn1js$OctetString): boolean
}

declare type Asn1js$LocalBitStringValueBlockParams = {
unusedBits?: number,
isConstructed?: boolean,
blockLength?: number
} & Asn1js$LocalConstructedValueBlockParams & Asn1js$LocalHexBlockParams


declare class Asn1js$LocalBitStringValueBlock mixins Asn1js$LocalConstructedValueBlock, Asn1js$LocalHexBlock {
unusedBits: number;
isConstructed: boolean;
blockLength: number;
isHexOnly: boolean;
valueHex: ArrayBuffer;
constructor(params?: Asn1js$LocalBitStringValueBlockParams): this
}

declare class Asn1js$BitString mixins Asn1js$BaseBlock<Asn1js$LocalBitStringValueBlock> {
constructor(params?: Asn1js$LocalBitStringValueBlockParams): this;

/**
 * Checking that two BITSTRINGs are equal
 * @param {Asn1js$BitString} bitString
 */
isEqual(bitString: Asn1js$BitString): boolean
}

declare type Asn1js$LocalIntegerValueBlockParams = {} & Asn1js$LocalBaseBlockParams & Asn1js$LocalHexBlockParams


declare class Asn1js$LocalIntegerValueBlock mixins Asn1js$LocalValueBlock, Asn1js$LocalHexBlock {
valueDec: number;
isHexOnly: boolean;
valueHex: ArrayBuffer;
constructor(params?: Asn1js$LocalIntegerValueBlockParams): this;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer;

/**
 * Base function for converting block from DER encoded array of bytes
 * @param {ArrayBuffer} inputBuffer ASN.1 DER encoded array
 * @param {number} inputOffset Offset in ASN.1 DER encoded array where decoding should be started
 * @param {number} inputLength Maximum length of array of bytes which can be using in this function
 * @param {number} expectedLength Expected length of converted "valueHex" buffer
 * @returns {number} Offset after least decoded byte
 */
fromDER(
inputBuffer: ArrayBuffer,
inputOffset: number,
inputLength: number,
expectedLength?: number): number;

/**
 * Encoding of current ASN.1 block into ASN.1 encoded array (DER rules)
 * @param {boolean} sizeOnly Flag that we need only a size of encoding, not a real array of bytes
 * @returns {ArrayBuffer}
 */
toDER(sizeOnly?: boolean): ArrayBuffer
}

declare interface Asn1js$IntegerParams {
value?: number
} 

declare export class Asn1js$Integer mixins Asn1js$BaseBlock<Asn1js$LocalIntegerValueBlock> {
constructor(params?: Asn1js$IntegerParams): this;

/**
 * Compare two Integer object, or Integer and ArrayBuffer objects
 * @param {(Asn1js$Integer | ArrayBuffer)} otherValue
 * @returns {boolean}
 * @memberOf Integer
 */
isEqual(otherValue: Asn1js$Integer | ArrayBuffer): boolean;

/**
 * Convert current Integer value from BER into DER format
 * @returns {Asn1js$Integer}
 */
convertToDER(): Asn1js$Integer;

/**
 * Convert current Integer value from DER to BER format
 * @returns {Asn1js$Integer}
 */
convertFromDER(): Asn1js$Integer
}

declare class Asn1js$Enumerated mixins Asn1js$Integer {}

declare type Asn1js$LocalSidValueBlockParams = {
valueDec?: number,
isFirstSid?: boolean
} & Asn1js$LocalBaseBlockParams & Asn1js$LocalHexBlockParams


declare class Asn1js$LocalSidValueBlock mixins Asn1js$LocalBaseBlock, Asn1js$LocalHexBlock {
valueDec: number;
isFirstSid: boolean;
isHexOnly: boolean;
valueHex: ArrayBuffer;
constructor(params?: Asn1js$LocalSidValueBlockParams): this;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer;
toString(): string
}

declare type Asn1js$LocalObjectIdentifierValueBlockParams = {
value?: string
} & Asn1js$LocalBaseBlockParams


declare class Asn1js$LocalObjectIdentifierValueBlock mixins Asn1js$LocalValueBlock {
constructor(params?: Asn1js$LocalObjectIdentifierValueBlockParams): this;

/**
 * Create "LocalObjectIdentifierValueBlock" class from string
 * @param {string} string Input string to convert from
 * @returns {boolean}
 */
fromString(data: string): boolean;

/**
 * Converts "LocalObjectIdentifierValueBlock" class to string
 * @returns {string}
 * @memberOf LocalObjectIdentifierValueBlock
 */
toString(): string
}

declare export class Asn1js$ObjectIdentifier mixins Asn1js$BaseBlock<Asn1js$LocalObjectIdentifierValueBlock> {
constructor(params?: Asn1js$LocalObjectIdentifierValueBlockParams): this
}

declare type Asn1js$LocalUtf8StringValueBlockParams = {} & Asn1js$LocalBaseBlockParams & Asn1js$LocalHexBlock


declare class Asn1js$LocalUtf8StringValueBlock mixins Asn1js$LocalBaseBlock, Asn1js$LocalHexBlock {
isHexOnly: boolean;
valueHex: ArrayBuffer;
constructor(params?: Asn1js$LocalSidValueBlockParams): this;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer;
toString(): string
}

declare interface Asn1js$Utf8StringParams {
value?: string
} 

declare class Asn1js$Utf8String mixins Asn1js$BaseBlock<Asn1js$LocalUtf8StringValueBlock> {
constructor(params?: Asn1js$Utf8StringParams): this;

/**
 * Function converting ArrayBuffer into ASN.1 internal string
 * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
 * @memberOf Utf8String
 */
fromBuffer(inputBuffer: ArrayBuffer): void;

/**
 * Function converting JavaScript string into ASN.1 internal class
 * @param {string} inputString ASN.1 BER encoded array
 * @memberOf Utf8String
 */
fromString(inputString: string): void
}

declare type Asn1js$LocalBmpStringValueBlockParams = {} & Asn1js$LocalHexBlockParams & Asn1js$LocalBaseBlockParams


declare class Asn1js$LocalBmpStringValueBlock mixins Asn1js$LocalBaseBlock, Asn1js$LocalHexBlock {
value: string;
isHexOnly: boolean;
valueHex: ArrayBuffer;
constructor(params?: Asn1js$LocalBmpStringValueBlockParams): this;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer
}

declare interface Asn1js$BmpStringParams {
value?: string
} 

declare export class Asn1js$BmpString mixins Asn1js$BaseBlock<Asn1js$LocalBmpStringValueBlock> {
constructor(params?: Asn1js$BmpStringParams): this;

/**
 * Function converting ArrayBuffer into ASN.1 internal string
 * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
 * @memberOf BmpString
 */
fromBuffer(inputBuffer: ArrayBuffer): void;

/**
 * Function converting JavaScript string into ASN.1 internal class
 * @param {string} inputString ASN.1 BER encoded array
 * @memberOf BmpString
 */
fromString(inputString: string): void
}

declare type Asn1js$LocalUniversalStringValueParams = {} & Asn1js$LocalHexBlockParams & Asn1js$LocalBaseBlockParams


declare class Asn1js$LocalUniversalStringValueBlock mixins Asn1js$LocalBaseBlock, Asn1js$LocalHexBlock {
value: string;
isHexOnly: boolean;
valueHex: ArrayBuffer;
constructor(params?: Asn1js$LocalUniversalStringValueParams): this;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer
}

declare interface Asn1js$UniversalStringParams {
value?: string
} 

declare export class Asn1js$UniversalString mixins Asn1js$BaseBlock<Asn1js$LocalUniversalStringValueBlock> {
constructor(params?: Asn1js$UniversalStringParams): this;

/**
 * Function converting ArrayBuffer into ASN.1 internal string
 * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
 * @memberOf UniversalString
 */
fromBuffer(inputBuffer: ArrayBuffer): void;

/**
 * Function converting JavaScript string into ASN.1 internal class
 * @param {string} inputString ASN.1 BER encoded array
 * @memberOf UniversalString
 */
fromString(inputString: string): void
}

declare type Asn1js$LocalSimpleLocalSimpleStringValueBlockParams = {} & Asn1js$LocalHexBlockParams & Asn1js$LocalBaseBlockParams


declare class Asn1js$LocalSimpleLocalSimpleStringValueBlock mixins Asn1js$LocalBaseBlock, Asn1js$LocalHexBlock {
value: string;
isHexOnly: boolean;
valueHex: ArrayBuffer;
constructor(params?: Asn1js$LocalSimpleLocalSimpleStringValueBlockParams): this;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer
}

declare interface Asn1js$LocalSimpleStringBlockParams {
value?: string
} 

declare export class Asn1js$LocalSimpleStringBlock mixins Asn1js$BaseBlock<Asn1js$LocalSimpleLocalSimpleStringValueBlock> {
constructor(params?: Asn1js$LocalSimpleStringBlockParams): this;

/**
 * Function converting ArrayBuffer into ASN.1 internal string
 * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
 * @memberOf LocalSimpleStringBlock
 */
fromBuffer(inputBuffer: ArrayBuffer): void;

/**
 * Function converting JavaScript string into ASN.1 internal class
 * @param {string} inputString ASN.1 BER encoded array
 * @memberOf LocalSimpleStringBlock
 */
fromString(inputString: string): void
}

declare export class Asn1js$NumericString mixins Asn1js$LocalSimpleStringBlock {}

declare export class Asn1js$PrintableString mixins Asn1js$LocalSimpleStringBlock {}

declare export class Asn1js$TeletexString mixins Asn1js$LocalSimpleStringBlock {}

declare export class Asn1js$VideotexString mixins Asn1js$LocalSimpleStringBlock {}

declare export class Asn1js$IA5String mixins Asn1js$LocalSimpleStringBlock {}

declare export class Asn1js$GraphicString mixins Asn1js$LocalSimpleStringBlock {}

declare export class Asn1js$VisibleString mixins Asn1js$LocalSimpleStringBlock {}

declare export class Asn1js$GeneralString mixins Asn1js$LocalSimpleStringBlock {}

declare export class Asn1js$CharacterString mixins Asn1js$LocalSimpleStringBlock {}

declare type Asn1js$UTCTimeParams = {
value?: string,
valueDate?: Date
} & Asn1js$LocalSimpleLocalSimpleStringValueBlockParams


declare export class Asn1js$UTCTime mixins Asn1js$VisibleString {
year: number;
month: number;
day: number;
hour: number;
minute: number;
second: number;
constructor(params?: Asn1js$UTCTimeParams): this;

/**
 * Function converting ASN.1 internal string into ArrayBuffer
 * @returns {ArrayBuffer}
 * @memberOf UTCTime
 */
toBuffer(): ArrayBuffer;

/**
 * Function converting "Date" object into ASN.1 internal string
 * @param {Date} inputDate JavaScript "Date" object
 * @memberOf UTCTime
 */
fromDate(inputDate: Date): void;

/**
 * Function converting ASN.1 internal string into "Date" object
 * @returns {Date}
 * @memberOf UTCTime
 */
toDate(): Date
}

declare class Asn1js$GeneralizedTime mixins Asn1js$UTCTime {
millisecond: number
}

declare class Asn1js$DATE mixins Asn1js$Utf8String {}

declare class Asn1js$TimeOfDay mixins Asn1js$Utf8String {}

declare class Asn1js$DateTime mixins Asn1js$Utf8String {}

declare class Asn1js$Duration mixins Asn1js$Utf8String {}

declare class Asn1js$TIME mixins Asn1js$Utf8String {}

declare interface Asn1js$ChoiceParams {
value?: Asn1js$LocalValueBlock[],
optional?: boolean
} 

declare class Asn1js$Choice  {
value: Asn1js$LocalValueBlock[];
optional: boolean;
constructor(params?: Asn1js$ChoiceParams): this
}

declare interface Asn1js$AnyParams {
name?: string,
optional?: boolean
} 

declare class Asn1js$Any  {
name: string;
optional: boolean;
constructor(params?: Asn1js$AnyParams): this
}

declare interface Asn1js$RepeatedParams {
name?: string,
optional?: boolean,
value?: Asn1js$Any,
local?: boolean
} 

declare class Asn1js$Repeated  {
name: string;
optional: boolean;
value: Asn1js$Any;
local: boolean;
constructor(params?: Asn1js$RepeatedParams): this
}

declare interface Asn1js$RawDataParams {
data?: ArrayBuffer
} 

declare class Asn1js$RawData  {
data: ArrayBuffer;
constructor(params?: Asn1js$RawDataParams): this;
fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
toBER(sizeOnly?: boolean): ArrayBuffer
}


/**
 * Major function for decoding ASN.1 BER array into internal library structuries
 * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array of bytes
 * @returns {{
offset: number,
result: Asn1js$LocalBaseBlock
}}
 */
declare function Asn1js$fromBER(inputBuffer: ArrayBuffer): {
offset: number,
result: Asn1js$LocalBaseBlock
}



/**
 * Compare of two ASN.1 object trees
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} root Root of input ASN.1 object tree
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} inputData Input ASN.1 object tree
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} inputSchema Input ASN.1 schema to compare with
 * @returns {{
verified: boolean,
result?: any
}}
 */
declare function Asn1js$compareSchema(
root: any,
inputData: any,
inputSchema: any): {
verified: boolean,
result?: any
}



/**
 * ASN.1 schema verification for ArrayBuffer data
 * @param {ArrayBuffer} inputBuffer Input BER-encoded ASN.1 data
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} inputSchema Input ASN.1 schema to verify against to
 * @returns {{
verified: boolean,
result?: any
}}
 */
declare function Asn1js$verifySchema(
inputBuffer: ArrayBuffer,
inputSchema: any): {
verified: boolean,
result?: any
}

    }
