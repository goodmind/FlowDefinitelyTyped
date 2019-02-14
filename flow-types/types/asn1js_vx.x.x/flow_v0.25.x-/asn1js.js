declare module "asn1js" {
  import type {
    getParametersValue,
    padNumber,
    isEqualBuffer,
    bufferToHexCodes,
    checkBufferParams,
    utilToBase,
    utilFromBase,
    utilEncodeTC,
    utilDecodeTC,
    utilConcatBuf,
    nearestPowerOf2
  } from "pvutils";

  declare export default typeof Asn1js;

  declare var npm$namespace$Asn1js: {
    fromBER: typeof Asn1js$fromBER,
    compareSchema: typeof Asn1js$compareSchema,
    verifySchema: typeof Asn1js$verifySchema,

    LocalBaseBlock: typeof Asn1js$LocalBaseBlock,
    LocalHexBlock: typeof Asn1js$LocalHexBlock,
    LocalIdentificationBlock: typeof Asn1js$LocalIdentificationBlock,
    LocalLengthBlock: typeof Asn1js$LocalLengthBlock,
    LocalValueBlock: typeof Asn1js$LocalValueBlock,
    BaseBlock: typeof Asn1js$BaseBlock,
    LocalPrimitiveValueBlock: typeof Asn1js$LocalPrimitiveValueBlock,
    Primitive: typeof Asn1js$Primitive,
    LocalConstructedValueBlock: typeof Asn1js$LocalConstructedValueBlock,
    Constructed: typeof Asn1js$Constructed,
    LocalEndOfContentValueBlock: typeof Asn1js$LocalEndOfContentValueBlock,
    EndOfContent: typeof Asn1js$EndOfContent,
    LocalBooleanValueBlock: typeof Asn1js$LocalBooleanValueBlock,
    Boolean: typeof Asn1js$Boolean,
    Sequence: typeof Asn1js$Sequence,
    Set: typeof Asn1js$Set,
    Null: typeof Asn1js$Null,
    LocalOctetStringValueBlock: typeof Asn1js$LocalOctetStringValueBlock,
    OctetString: typeof Asn1js$OctetString,
    LocalBitStringValueBlock: typeof Asn1js$LocalBitStringValueBlock,
    BitString: typeof Asn1js$BitString,
    LocalIntegerValueBlock: typeof Asn1js$LocalIntegerValueBlock,
    Integer: typeof Asn1js$Integer,
    Enumerated: typeof Asn1js$Enumerated,
    LocalSidValueBlock: typeof Asn1js$LocalSidValueBlock,
    LocalObjectIdentifierValueBlock: typeof Asn1js$LocalObjectIdentifierValueBlock,
    ObjectIdentifier: typeof Asn1js$ObjectIdentifier,
    LocalUtf8StringValueBlock: typeof Asn1js$LocalUtf8StringValueBlock,
    Utf8String: typeof Asn1js$Utf8String,
    LocalBmpStringValueBlock: typeof Asn1js$LocalBmpStringValueBlock,
    BmpString: typeof Asn1js$BmpString,
    LocalUniversalStringValueBlock: typeof Asn1js$LocalUniversalStringValueBlock,
    UniversalString: typeof Asn1js$UniversalString,
    LocalSimpleLocalSimpleStringValueBlock: typeof Asn1js$LocalSimpleLocalSimpleStringValueBlock,
    LocalSimpleStringBlock: typeof Asn1js$LocalSimpleStringBlock,
    NumericString: typeof Asn1js$NumericString,
    PrintableString: typeof Asn1js$PrintableString,
    TeletexString: typeof Asn1js$TeletexString,
    VideotexString: typeof Asn1js$VideotexString,
    IA5String: typeof Asn1js$IA5String,
    GraphicString: typeof Asn1js$GraphicString,
    VisibleString: typeof Asn1js$VisibleString,
    GeneralString: typeof Asn1js$GeneralString,
    CharacterString: typeof Asn1js$CharacterString,
    UTCTime: typeof Asn1js$UTCTime,
    GeneralizedTime: typeof Asn1js$GeneralizedTime,
    DATE: typeof Asn1js$DATE,
    TimeOfDay: typeof Asn1js$TimeOfDay,
    DateTime: typeof Asn1js$DateTime,
    Duration: typeof Asn1js$Duration,
    TIME: typeof Asn1js$TIME,
    Choice: typeof Asn1js$Choice,
    Any: typeof Asn1js$Any,
    Repeated: typeof Asn1js$Repeated,
    RawData: typeof Asn1js$RawData
  };
  declare interface Asn1js$LocalBaseBlockParams {
    blockLength?: number;
    error?: string;
    warnings?: string[];
    valueBeforeDecode?: ArrayBuffer;
  }

  declare interface Asn1js$JsonLocalBaseBlock {
    blockName: string;
    blockLength: number;
    error: string;
    warnings: string[];
    valueBeforeDecode: ArrayBuffer;
  }

  declare class Asn1js$LocalBaseBlock {
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
    toJSON(): Asn1js$JsonLocalBaseBlock;
  }

  declare type Asn1js$LocalHexBlockParams = {
    isHexOnly?: boolean,
    valueHex?: ArrayBuffer
  } & LocalBaseBlockParams;

  declare interface Asn1js$ILocalHexBlock {
    isHexOnly: boolean;
    valueHex: ArrayBuffer;

    /**
     * Base function for converting block from BER encoded array of bytes
     * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
     * @param {number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
     * @param {number} inputLength Maximum length of array of bytes which can be using in this function
     * @returns {number} Offset after least decoded byte
     * @memberOf LocalHexBlockMixin
     */
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;

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
    toJSON(): any;
  }

  declare class Asn1js$LocalHexBlock mixins ILocalHexBlock {
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
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;

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
    toJSON(): any;
  }

  declare interface Asn1js$LocalIdentificationBlockParams {
    idBlock?: Asn1js$LocalHexBlockParams & {
      isConstructed?: boolean,
      tagClass?: number,
      tagNumber?: number
    };
  }

  declare class Asn1js$LocalIdentificationBlock
    mixins LocalBaseBlock, ILocalHexBlock {
    isConstructed: boolean;
    tagClass: number;
    tagNumber: number;
    constructor(params?: Asn1js$LocalIdentificationBlockParams): this;
    isHexOnly: boolean;
    valueHex: ArrayBuffer;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare interface Asn1js$LocalLengthBlockParams {
    lenBlock?: {
      isIndefiniteForm?: boolean,
      longFormUsed?: boolean,
      length: number
    };
  }

  declare class Asn1js$LocalLengthBlock mixins LocalBaseBlock {
    isIndefiniteForm: boolean;
    longFormUsed: boolean;
    length: number;
    constructor(params?: Asn1js$LocalLengthBlockParams): this;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): void;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare class Asn1js$LocalValueBlock mixins LocalBaseBlock {
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): void;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare type Asn1js$BaseBlockParams = {
    name?: string,
    optional?: boolean,
    primitiveSchema?: Object
  } & LocalBaseBlockParams;

  declare class Asn1js$BaseBlock<T: Asn1js$LocalValueBlock>
    mixins LocalBaseBlock {
    constructor(
      parameters?: Asn1js$BaseBlockParams,
      valueBlockType?: typeof LocalValueBlock
    ): this;
    idBlock: Asn1js$LocalIdentificationBlock;
    lenBlock: Asn1js$LocalLengthBlock;
    valueBlock: T;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare type Asn1js$LocalPrimitiveValueBlockParams = {
    valueHex?: ArrayBuffer,
    isHexOnly?: boolean
  } & LocalBaseBlockParams;

  declare class Asn1js$LocalPrimitiveValueBlock mixins LocalValueBlock {
    valueHex: ArrayBuffer;
    isHexOnly: boolean;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare class Asn1js$Primitive
    mixins BaseBlock<Asn1js$LocalPrimitiveValueBlock> {}

  declare type Asn1js$LocalConstructedValueBlockParams = {
    value?: Asn1js$LocalValueBlock,
    isIndefiniteForm?: boolean
  } & LocalBaseBlockParams;

  declare class Asn1js$LocalConstructedValueBlock mixins LocalValueBlock {
    value: Asn1js$LocalValueBlock[];
    isIndefiniteForm: boolean;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare class Asn1js$Constructed
    mixins BaseBlock<Asn1js$LocalConstructedValueBlock> {}

  declare type Asn1js$LocalEndOfContentValueBlockParams = {} & LocalBaseBlockParams;

  declare class Asn1js$LocalEndOfContentValueBlock mixins LocalValueBlock {
    constructor(params?: Asn1js$LocalEndOfContentValueBlockParams): this;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare export class Asn1js$EndOfContent
    mixins BaseBlock<Asn1js$LocalEndOfContentValueBlock> {}

  declare type Asn1js$LocalBooleanValueBlockParams = {
    value?: boolean,
    isHexOnly?: boolean,
    valueHex?: ArrayBuffer
  } & LocalBaseBlockParams;

  declare class Asn1js$LocalBooleanValueBlock mixins LocalValueBlock {
    value: boolean;
    isHexOnly: boolean;
    valueHex: ArrayBuffer;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare class Asn1js$Boolean
    mixins BaseBlock<Asn1js$LocalBooleanValueBlock> {}

  declare class Asn1js$Sequence mixins Constructed {}

  declare class Asn1js$Set mixins Constructed {}

  declare class Asn1js$Null mixins BaseBlock<Asn1js$LocalValueBlock> {}

  declare type Asn1js$LocalOctetStringValueBlockParams = {
    isConstructed?: boolean
  } & LocalConstructedValueBlockParams &
    LocalHexBlockParams;

  declare class Asn1js$LocalOctetStringValueBlock
    mixins LocalConstructedValueBlock, ILocalHexBlock {
    isConstructed: boolean;
    isHexOnly: boolean;
    valueHex: ArrayBuffer;
    constructor(params?: Asn1js$LocalOctetStringValueBlockParams): this;
  }

  declare export class Asn1js$OctetString
    mixins BaseBlock<Asn1js$LocalOctetStringValueBlock> {
    constructor(params?: Asn1js$LocalOctetStringValueBlockParams): this;

    /**
     * Checking that two OCTETSTRINGs are equal
     * @param {Asn1js$OctetString} octetString
     * @returns {boolean}
     * @memberOf OctetString
     */
    isEqual(octetString: Asn1js$OctetString): boolean;
  }

  declare type Asn1js$LocalBitStringValueBlockParams = {
    unusedBits?: number,
    isConstructed?: boolean,
    blockLength?: number
  } & LocalConstructedValueBlockParams &
    LocalHexBlockParams;

  declare class Asn1js$LocalBitStringValueBlock
    mixins LocalConstructedValueBlock, LocalHexBlock {
    unusedBits: number;
    isConstructed: boolean;
    blockLength: number;
    isHexOnly: boolean;
    valueHex: ArrayBuffer;
    constructor(params?: Asn1js$LocalBitStringValueBlockParams): this;
  }

  declare class Asn1js$BitString
    mixins BaseBlock<Asn1js$LocalBitStringValueBlock> {
    constructor(params?: Asn1js$LocalBitStringValueBlockParams): this;

    /**
     * Checking that two BITSTRINGs are equal
     * @param {Asn1js$BitString} bitString
     */
    isEqual(bitString: Asn1js$BitString): boolean;
  }

  declare type Asn1js$LocalIntegerValueBlockParams = {} & LocalBaseBlockParams &
    LocalHexBlockParams;

  declare class Asn1js$LocalIntegerValueBlock
    mixins LocalValueBlock, LocalHexBlock {
    valueDec: number;
    isHexOnly: boolean;
    valueHex: ArrayBuffer;
    constructor(params?: Asn1js$LocalIntegerValueBlockParams): this;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
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
      expectedLength?: number
    ): number;

    /**
     * Encoding of current ASN.1 block into ASN.1 encoded array (DER rules)
     * @param {boolean} sizeOnly Flag that we need only a size of encoding, not a real array of bytes
     * @returns {ArrayBuffer}
     */
    toDER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare interface Asn1js$IntegerParams {
    value?: number;
  }

  declare export class Asn1js$Integer
    mixins BaseBlock<Asn1js$LocalIntegerValueBlock> {
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
    convertFromDER(): Asn1js$Integer;
  }

  declare class Asn1js$Enumerated mixins Integer {}

  declare type Asn1js$LocalSidValueBlockParams = {
    valueDec?: number,
    isFirstSid?: boolean
  } & LocalBaseBlockParams &
    LocalHexBlockParams;

  declare class Asn1js$LocalSidValueBlock mixins LocalBaseBlock, LocalHexBlock {
    valueDec: number;
    isFirstSid: boolean;
    isHexOnly: boolean;
    valueHex: ArrayBuffer;
    constructor(params?: Asn1js$LocalSidValueBlockParams): this;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
    toString(): string;
  }

  declare type Asn1js$LocalObjectIdentifierValueBlockParams = {
    value?: string
  } & LocalBaseBlockParams;

  declare class Asn1js$LocalObjectIdentifierValueBlock mixins LocalValueBlock {
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
    toString(): string;
  }

  declare export class Asn1js$ObjectIdentifier
    mixins BaseBlock<Asn1js$LocalObjectIdentifierValueBlock> {
    constructor(params?: Asn1js$LocalObjectIdentifierValueBlockParams): this;
  }

  declare type Asn1js$LocalUtf8StringValueBlockParams = {} & LocalBaseBlockParams &
    LocalHexBlock;

  declare class Asn1js$LocalUtf8StringValueBlock
    mixins LocalBaseBlock, LocalHexBlock {
    isHexOnly: boolean;
    valueHex: ArrayBuffer;
    constructor(params?: Asn1js$LocalSidValueBlockParams): this;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
    toString(): string;
  }

  declare interface Asn1js$Utf8StringParams {
    value?: string;
  }

  declare class Asn1js$Utf8String
    mixins BaseBlock<Asn1js$LocalUtf8StringValueBlock> {
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
    fromString(inputString: string): void;
  }

  declare type Asn1js$LocalBmpStringValueBlockParams = {} & LocalHexBlockParams &
    LocalBaseBlockParams;

  declare class Asn1js$LocalBmpStringValueBlock
    mixins LocalBaseBlock, LocalHexBlock {
    value: string;
    isHexOnly: boolean;
    valueHex: ArrayBuffer;
    constructor(params?: Asn1js$LocalBmpStringValueBlockParams): this;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare interface Asn1js$BmpStringParams {
    value?: string;
  }

  declare export class Asn1js$BmpString
    mixins BaseBlock<Asn1js$LocalBmpStringValueBlock> {
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
    fromString(inputString: string): void;
  }

  declare type Asn1js$LocalUniversalStringValueParams = {} & LocalHexBlockParams &
    LocalBaseBlockParams;

  declare class Asn1js$LocalUniversalStringValueBlock
    mixins LocalBaseBlock, LocalHexBlock {
    value: string;
    isHexOnly: boolean;
    valueHex: ArrayBuffer;
    constructor(params?: Asn1js$LocalUniversalStringValueParams): this;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare interface Asn1js$UniversalStringParams {
    value?: string;
  }

  declare export class Asn1js$UniversalString
    mixins BaseBlock<Asn1js$LocalUniversalStringValueBlock> {
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
    fromString(inputString: string): void;
  }

  declare type Asn1js$LocalSimpleLocalSimpleStringValueBlockParams = {} & LocalHexBlockParams &
    LocalBaseBlockParams;

  declare class Asn1js$LocalSimpleLocalSimpleStringValueBlock
    mixins LocalBaseBlock, LocalHexBlock {
    value: string;
    isHexOnly: boolean;
    valueHex: ArrayBuffer;
    constructor(
      params?: Asn1js$LocalSimpleLocalSimpleStringValueBlockParams
    ): this;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  declare interface Asn1js$LocalSimpleStringBlockParams {
    value?: string;
  }

  declare export class Asn1js$LocalSimpleStringBlock
    mixins BaseBlock<Asn1js$LocalSimpleLocalSimpleStringValueBlock> {
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
    fromString(inputString: string): void;
  }

  declare export class Asn1js$NumericString mixins LocalSimpleStringBlock {}

  declare export class Asn1js$PrintableString mixins LocalSimpleStringBlock {}

  declare export class Asn1js$TeletexString mixins LocalSimpleStringBlock {}

  declare export class Asn1js$VideotexString mixins LocalSimpleStringBlock {}

  declare export class Asn1js$IA5String mixins LocalSimpleStringBlock {}

  declare export class Asn1js$GraphicString mixins LocalSimpleStringBlock {}

  declare export class Asn1js$VisibleString mixins LocalSimpleStringBlock {}

  declare export class Asn1js$GeneralString mixins LocalSimpleStringBlock {}

  declare export class Asn1js$CharacterString mixins LocalSimpleStringBlock {}

  declare type Asn1js$UTCTimeParams = {
    value?: string,
    valueDate?: Date
  } & LocalSimpleLocalSimpleStringValueBlockParams;

  declare export class Asn1js$UTCTime mixins VisibleString {
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
    toDate(): Date;
  }

  declare class Asn1js$GeneralizedTime mixins UTCTime {
    millisecond: number;
  }

  declare class Asn1js$DATE mixins Utf8String {}

  declare class Asn1js$TimeOfDay mixins Utf8String {}

  declare class Asn1js$DateTime mixins Utf8String {}

  declare class Asn1js$Duration mixins Utf8String {}

  declare class Asn1js$TIME mixins Utf8String {}

  declare interface Asn1js$ChoiceParams {
    value?: Asn1js$LocalValueBlock[];
    optional?: boolean;
  }

  declare class Asn1js$Choice {
    value: Asn1js$LocalValueBlock[];
    optional: boolean;
    constructor(params?: Asn1js$ChoiceParams): this;
  }

  declare interface Asn1js$AnyParams {
    name?: string;
    optional?: boolean;
  }

  declare class Asn1js$Any {
    name: string;
    optional: boolean;
    constructor(params?: Asn1js$AnyParams): this;
  }

  declare interface Asn1js$RepeatedParams {
    name?: string;
    optional?: boolean;
    value?: Asn1js$Any;
    local?: boolean;
  }

  declare class Asn1js$Repeated {
    name: string;
    optional: boolean;
    value: Asn1js$Any;
    local: boolean;
    constructor(params?: Asn1js$RepeatedParams): this;
  }

  declare interface Asn1js$RawDataParams {
    data?: ArrayBuffer;
  }

  declare class Asn1js$RawData {
    data: ArrayBuffer;
    constructor(params?: Asn1js$RawDataParams): this;
    fromBER(
      inputBuffer: ArrayBuffer,
      inputOffset: number,
      inputLength: number
    ): number;
    toBER(sizeOnly?: boolean): ArrayBuffer;
  }

  /**
 * Major function for decoding ASN.1 BER array into internal library structuries
 * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array of bytes
 * @returns {{
offset: number,
result: Asn1js$LocalBaseBlock
}}
 */
  declare function Asn1js$fromBER(
    inputBuffer: ArrayBuffer
  ): {
    offset: number,
    result: Asn1js$LocalBaseBlock
  };

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
    inputSchema: any
  ): {
    verified: boolean,
    result?: any
  };

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
    inputSchema: any
  ): {
    verified: boolean,
    result?: any
  };
}
