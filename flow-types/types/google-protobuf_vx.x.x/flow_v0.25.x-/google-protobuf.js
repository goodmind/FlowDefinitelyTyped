declare module "google-protobuf" {
  declare type ByteSource = ArrayBuffer | Uint8Array | number[] | string;
  declare type ScalarFieldType = boolean | number | string;
  declare type RepeatedFieldType = ScalarFieldType[] | Uint8Array[];
  declare type AnyFieldType = ScalarFieldType | RepeatedFieldType | Uint8Array;
  declare type FieldValue =
    | string
    | number
    | boolean
    | Uint8Array
    | FieldValueArray
    | void;
  declare type FieldValueArray = {} & Array<FieldValue>;

  declare export class Message {
    getJsPbMessageId(): string | void;
    static initialize(
      msg: Message,
      data: Message$Message$MessageArray,
      messageId: string | number,
      suggestedPivot: number,
      repeatedFields?: number[],
      oneofFields?: number[][] | null
    ): void;
    static toObjectList<T: Message>(
      field: T[],
      toObjectFn: (includeInstance: boolean, data: T) => {},
      includeInstance?: boolean
    ): Array<{}>;
    static toObjectExtension(
      msg: Message,
      obj: {},
      extensions: {
        [key: number]: ExtensionFieldInfo<Message>
      },
      getExtensionFn: (fieldInfo: ExtensionFieldInfo<Message>) => Message,
      includeInstance?: boolean
    ): void;
    serializeBinaryExtensions(
      proto: Message,
      writer: BinaryWriter,
      extensions: {
        [key: number]: ExtensionFieldBinaryInfo<Message>
      },
      getExtensionFn: <T>(fieldInfo: ExtensionFieldInfo<T>) => T
    ): void;
    readBinaryExtension(
      proto: Message,
      reader: BinaryReader,
      extensions: {
        [key: number]: ExtensionFieldBinaryInfo<Message>
      },
      setExtensionFn: <T>(fieldInfo: ExtensionFieldInfo<T>, val: T) => void
    ): void;
    static getField(msg: Message, fieldNumber: number): FieldValue | null;
    static getOptionalFloatingPointField(
      msg: Message,
      fieldNumber: number
    ): number | void;
    static getRepeatedFloatingPointField(
      msg: Message,
      fieldNumber: number
    ): number[];
    static bytesAsB64(bytes: Uint8Array): string;
    static bytesAsU8(str: string): Uint8Array;
    static bytesListAsB64(bytesList: Uint8Array[]): string[];
    static bytesListAsU8(strList: string[]): Uint8Array[];
    static getFieldWithDefault<T>(
      msg: Message,
      fieldNumber: number,
      defaultValue: T
    ): T;
    static getMapField(
      msg: Message,
      fieldNumber: number,
      noLazyCreate: boolean,
      valueCtor: typeof Message
    ): Map<any, any>;
    static setField(msg: Message, fieldNumber: number, value: FieldValue): void;
    static addToRepeatedField(
      msg: Message,
      fieldNumber: number,
      value: any,
      index?: number
    ): void;
    static setOneofField(
      msg: Message,
      fieldNumber: number,
      oneof: number[],
      value: FieldValue
    ): void;
    static computeOneofCase(msg: Message, oneof: number[]): number;
    static getWrapperField<T: Message>(
      msg: Message,
      ctor: {
        new(): T
      },
      fieldNumber: number,
      required?: number
    ): T;
    static getRepeatedWrapperField<T: Message>(
      msg: Message,
      ctor: {
        new(): T
      },
      fieldNumber: number
    ): T[];
    static setWrapperField<T: Message>(
      msg: Message,
      fieldNumber: number,
      value?: T | Map<any, any>
    ): void;
    static setOneofWrapperField(
      msg: Message,
      fieldNumber: number,
      oneof: number[],
      value: any
    ): void;
    static setRepeatedWrapperField<T: Message>(
      msg: Message,
      fieldNumber: number,
      value?: T[]
    ): void;
    static addToRepeatedWrapperField<T: Message>(
      msg: Message,
      fieldNumber: number,
      value: T | void,
      ctor: {
        new(): T
      },
      index?: number
    ): T;
    static toMap(
      field: any[],
      mapKeyGetterFn: (field: any) => string,
      toObjectFn?: Message$Message$StaticToObject,
      includeInstance?: boolean
    ): void;
    toArray(): Message$Message$MessageArray;
    toString(): string;
    getExtension<T>(fieldInfo: ExtensionFieldInfo<T>): T;
    setExtension<T>(fieldInfo: ExtensionFieldInfo<T>, value: T): void;
    static difference<T: Message>(m1: T, m2: T): T;
    static equals(m1: Message, m2: Message): boolean;
    static compareExtensions(extension1: {}, extension2: {}): boolean;
    static compareFields(field1: any, field2: any): boolean;
    cloneMessage(): Message;
    clone(): Message;
    static clone<T: Message>(msg: T): T;
    static cloneMessage<T: Message>(msg: T): T;
    static copyInto(fromMessage: Message, toMessage: Message): void;
    static registerMessageType(id: number, constructor: typeof Message): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): {};
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(
      message: Message,
      reader: BinaryReader
    ): Message;
    static serializeBinaryToWriter(
      message: Message,
      writer: BinaryWriter
    ): void;
    static toObject(includeInstance: boolean, msg: Message): {};
    static extensions: {
      [key: number]: ExtensionFieldInfo<Message>
    };
    static extensionsBinary: {
      [key: number]: ExtensionFieldBinaryInfo<Message>
    };
  }
  declare type Message$MessageArray = any[];

  declare type Message$StaticToObject = (
    includeInstance: boolean,
    msg: Message
  ) => {};
  declare export class ExtensionFieldInfo<T> {
    fieldIndex: number;
    fieldName: number;
    ctor: typeof Message;
    toObjectFn: Message$Message$StaticToObject;
    isRepeated: number;
    constructor(
      fieldIndex: number,
      fieldName: {
        [key: string]: number
      },
      ctor: typeof Message,
      toObjectFn: Message$Message$StaticToObject,
      isRepeated: number
    ): this;
    isMessageType(): boolean;
  }
  declare export class ExtensionFieldBinaryInfo<T> {
    fieldInfo: ExtensionFieldInfo<T>;
    binaryReaderFn: BinaryRead;
    binaryWriterFn: BinaryWrite;
    opt_binaryMessageSerializeFn: (msg: Message, writer: BinaryWriter) => void;
    opt_binaryMessageDeserializeFn: (
      msg: Message,
      reader: BinaryReader
    ) => Message;
    opt_isPacked: boolean;
    constructor(
      fieldInfo: ExtensionFieldInfo<T>,
      binaryReaderFn: BinaryRead,
      binaryWriterFn: BinaryWrite,
      opt_binaryMessageSerializeFn: (
        msg: Message,
        writer: BinaryWriter
      ) => void,
      opt_binaryMessageDeserializeFn: (
        msg: Message,
        reader: BinaryReader
      ) => Message,
      opt_isPacked: boolean
    ): this;
  }
  declare export class Map<K, V> {
    constructor(
      arr: Array<[K, V]>,
      valueCtor?: {
        new(init: any): V
      }
    ): this;
    toArray(): Array<[K, V]>;
    toObject(includeInstance?: boolean): Array<[K, V]>;
    toObject<VO>(
      includeInstance: boolean,
      valueToObject: (includeInstance: boolean, valueWrapper: V) => VO
    ): Array<[K, VO]>;
    static fromObject<TK, TV>(
      entries: Array<[TK, TV]>,
      valueCtor: any,
      valueFromObject: any
    ): Map<TK, TV>;
    getLength(): number;
    clear(): void;
    del(key: K): boolean;
    getEntryList(): Array<[K, V]>;
    entries(): Map$Map$Iterator<[K, V]>;
    keys(): Map$Map$Iterator<K>;
    forEach(callback: (entry: V, key: K) => void, thisArg?: {}): void;
    set(key: K, value: V): this;
    get(key: K): V | void;
    has(key: K): boolean;
  }
  declare interface Map$Iterator<T> {
    next(): Map$IteratorResult<T>;
  }

  declare interface Map$IteratorResult<T> {
    done: boolean;
    value: T;
  }
  declare type BinaryReadReader = (
    msg: any,
    binaryReader: BinaryReader
  ) => void;
  declare type BinaryRead = (msg: any, reader: BinaryReadReader) => void;
  declare type BinaryWriteCallback = (
    value: any,
    binaryWriter: BinaryWriter
  ) => void;
  declare type BinaryWrite = (
    fieldNumber: number,
    value: any,
    writerCallback: BinaryWriteCallback
  ) => void;
  declare export class BinaryReader {
    constructor(bytes?: ByteSource, start?: number, length?: number): this;
    static alloc(
      bytes?: ByteSource,
      start?: number,
      length?: number
    ): BinaryReader;
    alloc(bytes?: ByteSource, start?: number, length?: number): BinaryReader;
    free(): void;
    getFieldCursor(): number;
    getCursor(): number;
    getBuffer(): Uint8Array;
    getFieldNumber(): number;
    getWireType(): BinaryConstants$BinaryConstants$WireType;
    isEndGroup(): boolean;
    getError(): boolean;
    setBlock(bytes?: ByteSource, start?: number, length?: number): void;
    reset(): void;
    advance(count: number): void;
    nextField(): boolean;
    unskipHeader(): void;
    skipMatchingFields(): void;
    skipVarintField(): void;
    skipDelimitedField(): void;
    skipFixed32Field(): void;
    skipFixed64Field(): void;
    skipGroup(): void;
    skipField(): void;
    registerReadCallback(
      callbackName: string,
      callback: (binaryReader: BinaryReader) => any
    ): void;
    runReadCallback(callbackName: string): any;
    readAny(fieldType: BinaryConstants$BinaryConstants$FieldType): AnyFieldType;
    readMessage: BinaryRead;
    readGroup(field: number, message: Message, reader: BinaryReadReader): void;
    getFieldDecoder(): BinaryDecoder;
    readInt32(): number;
    readInt32String(): string;
    readInt64(): number;
    readInt64String(): string;
    readUint32(): number;
    readUint32String(): string;
    readUint64(): number;
    readUint64String(): string;
    readSint32(): number;
    readSint64(): number;
    readSint64String(): string;
    readFixed32(): number;
    readFixed64(): number;
    readFixed64String(): string;
    readSfixed32(): number;
    readSfixed32String(): string;
    readSfixed64(): number;
    readSfixed64String(): string;
    readFloat(): number;
    readDouble(): number;
    readBool(): boolean;
    readEnum(): number;
    readString(): string;
    readBytes(): Uint8Array;
    readVarintHash64(): string;
    readFixedHash64(): string;
    readPackedInt32(): number[];
    readPackedInt32String(): string[];
    readPackedInt64(): number[];
    readPackedInt64String(): string[];
    readPackedUint32(): number[];
    readPackedUint32String(): string[];
    readPackedUint64(): number[];
    readPackedUint64String(): string[];
    readPackedSint32(): number[];
    readPackedSint64(): number[];
    readPackedSint64String(): string[];
    readPackedFixed32(): number[];
    readPackedFixed64(): number[];
    readPackedFixed64String(): string[];
    readPackedSfixed32(): number[];
    readPackedSfixed64(): number[];
    readPackedSfixed64String(): string[];
    readPackedFloat(): number[];
    readPackedDouble(): number[];
    readPackedBool(): boolean[];
    readPackedEnum(): number[];
    readPackedVarintHash64(): string[];
    readPackedFixedHash64(): string[];
  }
  declare export class BinaryWriter {
    constructor(): this;
    writeSerializedMessage(bytes: Uint8Array, start: number, end: number): void;
    maybeWriteSerializedMessage(
      bytes?: Uint8Array,
      start?: number,
      end?: number
    ): void;
    reset(): void;
    getResultBuffer(): Uint8Array;
    getResultBase64String(): string;
    beginSubMessage(field: number): void;
    endSubMessage(field: number): void;
    writeAny(
      fieldType: BinaryConstants$BinaryConstants$FieldType,
      field: number,
      value: AnyFieldType
    ): void;
    writeInt32(field: number, value?: number): void;
    writeInt32String(field: number, value?: string): void;
    writeInt64(field: number, value?: number): void;
    writeInt64String(field: number, value?: string): void;
    writeUint32(field: number, value?: number): void;
    writeUint32String(field: number, value?: string): void;
    writeUint64(field: number, value?: number): void;
    writeUint64String(field: number, value?: string): void;
    writeSint32(field: number, value?: number): void;
    writeSint64(field: number, value?: number): void;
    writeSint64String(field: number, value?: string): void;
    writeFixed32(field: number, value?: number): void;
    writeFixed64(field: number, value?: number): void;
    writeFixed64String(field: number, value?: string): void;
    writeSfixed32(field: number, value?: number): void;
    writeSfixed64(field: number, value?: number): void;
    writeSfixed64String(field: number, value?: string): void;
    writeFloat(field: number, value?: number): void;
    writeDouble(field: number, value?: number): void;
    writeBool(field: number, value?: boolean): void;
    writeEnum(field: number, value?: number): void;
    writeString(field: number, value?: string): void;
    writeBytes(field: number, value?: ByteSource): void;
    writeMessage: BinaryWrite;
    writeGroup(
      field: number,
      value: any,
      writeCallback: BinaryWriteCallback
    ): void;
    writeFixedHash64(field: number, value?: string): void;
    writeVarintHash64(field: number, value?: string): void;
    writeRepeatedInt32(field: number, value?: number[]): void;
    writeRepeatedInt32String(field: number, value?: string[]): void;
    writeRepeatedInt64(field: number, value?: number[]): void;
    writeRepeatedInt64String(field: number, value?: string[]): void;
    writeRepeatedUint32(field: number, value?: number[]): void;
    writeRepeatedUint32String(field: number, value?: string[]): void;
    writeRepeatedUint64(field: number, value?: number[]): void;
    writeRepeatedUint64String(field: number, value?: string[]): void;
    writeRepeatedSint32(field: number, value?: number[]): void;
    writeRepeatedSint64(field: number, value?: number[]): void;
    writeRepeatedSint64String(field: number, value?: string[]): void;
    writeRepeatedFixed32(field: number, value?: number[]): void;
    writeRepeatedFixed64(field: number, value?: number[]): void;
    writeRepeatedFixed64String(field: number, value?: string[]): void;
    writeRepeatedSfixed32(field: number, value?: number[]): void;
    writeRepeatedSfixed64(field: number, value?: number[]): void;
    writeRepeatedSfixed64String(field: number, value?: string[]): void;
    writeRepeatedFloat(field: number, value?: number[]): void;
    writeRepeatedDouble(field: number, value?: number[]): void;
    writeRepeatedBool(field: number, value?: boolean[]): void;
    writeRepeatedEnum(field: number, value?: number[]): void;
    writeRepeatedString(field: number, value?: string[]): void;
    writeRepeatedBytes(field: number, value?: ByteSource[]): void;
    writeRepeatedMessage(
      field: number,
      value: Message[],
      writerCallback: BinaryWriteCallback
    ): void;
    writeRepeatedGroup(
      field: number,
      value: Message[],
      writerCallback: BinaryWriteCallback
    ): void;
    writeRepeatedFixedHash64(field: number, value?: string[]): void;
    writeRepeatedVarintHash64(field: number, value?: string[]): void;
    writePackedInt32(field: number, value?: number[]): void;
    writePackedInt32String(field: number, value?: string[]): void;
    writePackedInt64(field: number, value?: number[]): void;
    writePackedInt64String(field: number, value?: string[]): void;
    writePackedUint32(field: number, value?: number[]): void;
    writePackedUint32String(field: number, value?: string[]): void;
    writePackedUint64(field: number, value?: number[]): void;
    writePackedUint64String(field: number, value?: string[]): void;
    writePackedSint32(field: number, value?: number[]): void;
    writePackedSint64(field: number, value?: number[]): void;
    writePackedSint64String(field: number, value?: string[]): void;
    writePackedFixed32(field: number, value?: number[]): void;
    writePackedFixed64(field: number, value?: number[]): void;
    writePackedFixed64String(field: number, value?: string[]): void;
    writePackedSfixed32(field: number, value?: number[]): void;
    writePackedSfixed64(field: number, value?: number[]): void;
    writePackedSfixed64String(field: number, value?: string[]): void;
    writePackedFloat(field: number, value?: number[]): void;
    writePackedDouble(field: number, value?: number[]): void;
    writePackedBool(field: number, value?: boolean[]): void;
    writePackedEnum(field: number, value?: number[]): void;
    writePackedFixedHash64(field: number, value?: string[]): void;
    writePackedVarintHash64(field: number, value?: string[]): void;
  }
  declare export class BinaryEncoder {
    constructor(): this;
    length(): number;
    end(): number[];
    writeSplitVarint64(lowBits: number, highBits: number): void;
    writeSplitFixed64(lowBits: number, highBits: number): void;
    writeUnsignedVarint32(value: number): void;
    writeSignedVarint32(value: number): void;
    writeUnsignedVarint64(value: number): void;
    writeSignedVarint64(value: number): void;
    writeZigzagVarint32(value: number): void;
    writeZigzagVarint64(value: number): void;
    writeZigzagVarint64String(value: string): void;
    writeUint8(value: number): void;
    writeUint16(value: number): void;
    writeUint32(value: number): void;
    writeUint64(value: number): void;
    writeInt8(value: number): void;
    writeInt16(value: number): void;
    writeInt32(value: number): void;
    writeInt64(value: number): void;
    writeInt64String(value: string): void;
    writeFloat(value: number): void;
    writeDouble(value: number): void;
    writeBool(value: boolean): void;
    writeEnum(value: number): void;
    writeBytes(bytes: Uint8Array): void;
    writeVarintHash64(hash: string): void;
    writeFixedHash64(hash: string): void;
    writeString(value: string): number;
  }
  declare export class BinaryDecoder {
    constructor(bytes?: ByteSource, start?: number, length?: number): this;
    static alloc(
      bytes?: ByteSource,
      start?: number,
      length?: number
    ): BinaryDecoder;
    free(): void;
    clone(): BinaryDecoder;
    clear(): void;
    getBuffer(): Uint8Array;
    setBlock(data: ByteSource, start?: number, length?: number): void;
    getEnd(): number;
    setEnd(end: number): void;
    reset(): void;
    getCursor(): number;
    setCursor(cursor: number): void;
    advance(count: number): void;
    atEnd(): boolean;
    pastEnd(): boolean;
    getError(): boolean;
    skipVarint(): void;
    unskipVarint(value: number): void;
    readUnsignedVarint32(): number;
    readSignedVarint32(): number;
    readUnsignedVarint32String(): number;
    readSignedVarint32String(): number;
    readZigzagVarint32(): number;
    readUnsignedVarint64(): number;
    readUnsignedVarint64String(): number;
    readSignedVarint64(): number;
    readSignedVarint64String(): number;
    readZigzagVarint64(): number;
    readZigzagVarint64String(): number;
    readUint8(): number;
    readUint16(): number;
    readUint32(): number;
    readUint64(): number;
    readUint64String(): string;
    readInt8(): number;
    readInt16(): number;
    readInt32(): number;
    readInt64(): number;
    readInt64String(): string;
    readFloat(): number;
    readDouble(): number;
    readBool(): boolean;
    readEnum(): number;
    readString(length: number): string;
    readStringWithLength(): string;
    readBytes(length: number): Uint8Array;
    readVarintHash64(): string;
    readFixedHash64(): string;
  }
  declare export class BinaryIterator {
    constructor(
      decoder?: BinaryDecoder,
      next?: () => number | boolean | string | null,
      elements?: Array<number | boolean | string>
    ): this;
    static alloc(
      decoder?: BinaryDecoder,
      next?: () => number | boolean | string | null,
      elements?: Array<number | boolean | string>
    ): BinaryIterator;
    free(): void;
    clear(): void;
    get(): ScalarFieldType | null;
    atEnd(): boolean;
    next(): ScalarFieldType | null;
  }

  declare var npm$namespace$BinaryConstants: {
    FieldTypeToWireType: typeof BinaryConstants$FieldTypeToWireType,
    INVALID_FIELD_NUMBER: typeof BinaryConstants$INVALID_FIELD_NUMBER,
    FLOAT32_EPS: typeof BinaryConstants$FLOAT32_EPS,
    FLOAT32_MIN: typeof BinaryConstants$FLOAT32_MIN,
    FLOAT32_MAX: typeof BinaryConstants$FLOAT32_MAX,
    FLOAT64_EPS: typeof BinaryConstants$FLOAT64_EPS,
    FLOAT64_MIN: typeof BinaryConstants$FLOAT64_MIN,
    FLOAT64_MAX: typeof BinaryConstants$FLOAT64_MAX,
    TWO_TO_20: typeof BinaryConstants$TWO_TO_20,
    TWO_TO_23: typeof BinaryConstants$TWO_TO_23,
    TWO_TO_31: typeof BinaryConstants$TWO_TO_31,
    TWO_TO_32: typeof BinaryConstants$TWO_TO_32,
    TWO_TO_52: typeof BinaryConstants$TWO_TO_52,
    TWO_TO_63: typeof BinaryConstants$TWO_TO_63,
    TWO_TO_64: typeof BinaryConstants$TWO_TO_64,
    ZERO_HASH: typeof BinaryConstants$ZERO_HASH
  };
  declare class BinaryConstants$FieldType {
    constructor(...args: empty): mixed;
    static +INVALID: Class<BinaryConstants$FieldType__INVALID> &
      BinaryConstants$FieldType__INVALID &
      -1; // -1
    static +DOUBLE: Class<BinaryConstants$FieldType__DOUBLE> &
      BinaryConstants$FieldType__DOUBLE &
      1; // 1
    static +FLOAT: Class<BinaryConstants$FieldType__FLOAT> &
      BinaryConstants$FieldType__FLOAT &
      2; // 2
    static +INT64: Class<BinaryConstants$FieldType__INT64> &
      BinaryConstants$FieldType__INT64 &
      3; // 3
    static +UINT64: Class<BinaryConstants$FieldType__UINT64> &
      BinaryConstants$FieldType__UINT64 &
      4; // 4
    static +INT32: Class<BinaryConstants$FieldType__INT32> &
      BinaryConstants$FieldType__INT32 &
      5; // 5
    static +FIXED64: Class<BinaryConstants$FieldType__FIXED64> &
      BinaryConstants$FieldType__FIXED64 &
      6; // 6
    static +FIXED32: Class<BinaryConstants$FieldType__FIXED32> &
      BinaryConstants$FieldType__FIXED32 &
      7; // 7
    static +BOOL: Class<BinaryConstants$FieldType__BOOL> &
      BinaryConstants$FieldType__BOOL &
      8; // 8
    static +STRING: Class<BinaryConstants$FieldType__STRING> &
      BinaryConstants$FieldType__STRING &
      9; // 9
    static +GROUP: Class<BinaryConstants$FieldType__GROUP> &
      BinaryConstants$FieldType__GROUP &
      10; // 10
    static +MESSAGE: Class<BinaryConstants$FieldType__MESSAGE> &
      BinaryConstants$FieldType__MESSAGE &
      11; // 11
    static +BYTES: Class<BinaryConstants$FieldType__BYTES> &
      BinaryConstants$FieldType__BYTES &
      12; // 12
    static +UINT32: Class<BinaryConstants$FieldType__UINT32> &
      BinaryConstants$FieldType__UINT32 &
      13; // 13
    static +ENUM: Class<BinaryConstants$FieldType__ENUM> &
      BinaryConstants$FieldType__ENUM &
      14; // 14
    static +SFIXED32: Class<BinaryConstants$FieldType__SFIXED32> &
      BinaryConstants$FieldType__SFIXED32 &
      15; // 15
    static +SFIXED64: Class<BinaryConstants$FieldType__SFIXED64> &
      BinaryConstants$FieldType__SFIXED64 &
      16; // 16
    static +SINT32: Class<BinaryConstants$FieldType__SINT32> &
      BinaryConstants$FieldType__SINT32 &
      17; // 17
    static +SINT64: Class<BinaryConstants$FieldType__SINT64> &
      BinaryConstants$FieldType__SINT64 &
      18; // 18
    static +FHASH64: Class<BinaryConstants$FieldType__FHASH64> &
      BinaryConstants$FieldType__FHASH64 &
      30; // 30
    static +VHASH64: Class<BinaryConstants$FieldType__VHASH64> &
      BinaryConstants$FieldType__VHASH64 &
      31; // 31
  }

  declare class BinaryConstants$FieldType__INVALID
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__DOUBLE
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__FLOAT
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__INT64
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__UINT64
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__INT32
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__FIXED64
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__FIXED32
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__BOOL
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__STRING
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__GROUP
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__MESSAGE
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__BYTES
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__UINT32
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__ENUM
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__SFIXED32
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__SFIXED64
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__SINT32
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__SINT64
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__FHASH64
    mixins BinaryConstants$FieldType {}
  declare class BinaryConstants$FieldType__VHASH64
    mixins BinaryConstants$FieldType {}

  declare class BinaryConstants$WireType {
    constructor(...args: empty): mixed;
    static +INVALID: Class<BinaryConstants$WireType__INVALID> &
      BinaryConstants$WireType__INVALID &
      -1; // -1
    static +VARINT: Class<BinaryConstants$WireType__VARINT> &
      BinaryConstants$WireType__VARINT &
      0; // 0
    static +FIXED64: Class<BinaryConstants$WireType__FIXED64> &
      BinaryConstants$WireType__FIXED64 &
      1; // 1
    static +DELIMITED: Class<BinaryConstants$WireType__DELIMITED> &
      BinaryConstants$WireType__DELIMITED &
      2; // 2
    static +START_GROUP: Class<BinaryConstants$WireType__START_GROUP> &
      BinaryConstants$WireType__START_GROUP &
      3; // 3
    static +END_GROUP: Class<BinaryConstants$WireType__END_GROUP> &
      BinaryConstants$WireType__END_GROUP &
      4; // 4
    static +FIXED32: Class<BinaryConstants$WireType__FIXED32> &
      BinaryConstants$WireType__FIXED32 &
      5; // 5
  }

  declare class BinaryConstants$WireType__INVALID
    mixins BinaryConstants$WireType {}
  declare class BinaryConstants$WireType__VARINT
    mixins BinaryConstants$WireType {}
  declare class BinaryConstants$WireType__FIXED64
    mixins BinaryConstants$WireType {}
  declare class BinaryConstants$WireType__DELIMITED
    mixins BinaryConstants$WireType {}
  declare class BinaryConstants$WireType__START_GROUP
    mixins BinaryConstants$WireType {}
  declare class BinaryConstants$WireType__END_GROUP
    mixins BinaryConstants$WireType {}
  declare class BinaryConstants$WireType__FIXED32
    mixins BinaryConstants$WireType {}

  declare var BinaryConstants$FieldTypeToWireType: (
    fieldType: BinaryConstants$FieldType
  ) => BinaryConstants$WireType;

  declare var BinaryConstants$INVALID_FIELD_NUMBER: number;

  declare var BinaryConstants$FLOAT32_EPS: number;

  declare var BinaryConstants$FLOAT32_MIN: number;

  declare var BinaryConstants$FLOAT32_MAX: number;

  declare var BinaryConstants$FLOAT64_EPS: number;

  declare var BinaryConstants$FLOAT64_MIN: number;

  declare var BinaryConstants$FLOAT64_MAX: number;

  declare var BinaryConstants$TWO_TO_20: number;

  declare var BinaryConstants$TWO_TO_23: number;

  declare var BinaryConstants$TWO_TO_31: number;

  declare var BinaryConstants$TWO_TO_32: number;

  declare var BinaryConstants$TWO_TO_52: number;

  declare var BinaryConstants$TWO_TO_63: number;

  declare var BinaryConstants$TWO_TO_64: number;

  declare var BinaryConstants$ZERO_HASH: string;
  declare class arith$UInt64 {
    lo: number;
    hi: number;
    constructor(lo: number, hi: number): this;
    cmp(other: arith$UInt64): number;
    rightShift(): arith$UInt64;
    leftShift(): arith$UInt64;
    msb(): boolean;
    lsb(): boolean;
    zero(): boolean;
    add(other: arith$UInt64): arith$UInt64;
    sub(other: arith$UInt64): arith$UInt64;
    static mul32x32(a: number, b: number): arith$UInt64;
    mul(a: number): arith$UInt64;
    div(divisor: number): [arith$UInt64, arith$UInt64];
    toString(): string;
    static fromString(str: string): arith$UInt64;
    clone(): arith$UInt64;
  }

  declare class arith$Int64 {
    lo: number;
    hi: number;
    constructor(lo: number, hi: number): this;
    add(other: arith$Int64): arith$Int64;
    sub(other: arith$Int64): arith$Int64;
    clone(): arith$Int64;
    toString(): string;
    static fromString(str: string): arith$Int64;
  }
}
