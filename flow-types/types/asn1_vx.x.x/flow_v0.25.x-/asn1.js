declare module "asn1" {
  declare export class BerReader {
    buffer: Buffer;
    offset: number;
    length: number;
    remain: number;
    _buf: Buffer;
    _size: number;
    _offset: number;
    constructor(data: Buffer): this;
    peek(): number | null;
    readBoolean(): boolean;
    readByte(peek: boolean): number | null;
    readEnumeration(): number;
    readInt(): number;
    readLength(offset?: number): number;
    readOID(tag?: number): string;
    readSequence(tag?: number): number | null;
    readString(tag?: number): string;
    readString(tag: number, retbuf: boolean): Buffer;
    _readTag(tag?: number): number;
  }
  declare export class BerWriter {
    buffer: Buffer;
    _buf: Buffer;
    _size: number;
    _offset: number;
    constructor(options?: {
      size: number,
      growthFactor: number
    }): this;
    endSequence(): void;
    startSequence(tag?: number): void;
    writeBoolean(b: boolean, tag?: number): void;
    writeBuffer(buf: Buffer, tag: number): void;
    writeByte(b: number): void;
    writeEnumeration(i: number, tag?: number): void;
    writeInt(i: number, tag?: number): void;
    writeLength(len: number): void;
    writeNull(): void;
    writeOID(s: string, tag: number): void;
    writeString(s: string, tag?: number): void;
    writeStringArray(strings: $ReadOnlyArray<string>): void;
    _ensure(length: number): void;
  }

  declare var npm$namespace$Ber: {
    BMPString: typeof Ber$BMPString,
    BitString: typeof Ber$BitString,
    Boolean: typeof Ber$Boolean,
    CharacterString: typeof Ber$CharacterString,
    Constructor: typeof Ber$Constructor,
    Context: typeof Ber$Context,
    EOC: typeof Ber$EOC,
    Enumeration: typeof Ber$Enumeration,
    External: typeof Ber$External,
    GeneralString: typeof Ber$GeneralString,
    GeneralizedTime: typeof Ber$GeneralizedTime,
    GraphicString: typeof Ber$GraphicString,
    IA5String: typeof Ber$IA5String,
    Integer: typeof Ber$Integer,
    Null: typeof Ber$Null,
    NumericString: typeof Ber$NumericString,
    OID: typeof Ber$OID,
    ObjectDescriptor: typeof Ber$ObjectDescriptor,
    OctetString: typeof Ber$OctetString,
    PDV: typeof Ber$PDV,
    PrintableString: typeof Ber$PrintableString,
    Real: typeof Ber$Real,
    RelativeOID: typeof Ber$RelativeOID,
    Sequence: typeof Ber$Sequence,
    Set: typeof Ber$Set,
    T61String: typeof Ber$T61String,
    UTCTime: typeof Ber$UTCTime,
    UniversalString: typeof Ber$UniversalString,
    Utf8String: typeof Ber$Utf8String,
    VideotexString: typeof Ber$VideotexString,
    VisibleString: typeof Ber$VisibleString
  };
  declare var Ber$BMPString: number;

  declare var Ber$BitString: number;

  declare var Ber$Boolean: number;

  declare var Ber$CharacterString: number;

  declare var Ber$Constructor: number;

  declare var Ber$Context: number;

  declare var Ber$EOC: number;

  declare var Ber$Enumeration: number;

  declare var Ber$External: number;

  declare var Ber$GeneralString: number;

  declare var Ber$GeneralizedTime: number;

  declare var Ber$GraphicString: number;

  declare var Ber$IA5String: number;

  declare var Ber$Integer: number;

  declare var Ber$Null: number;

  declare var Ber$NumericString: number;

  declare var Ber$OID: number;

  declare var Ber$ObjectDescriptor: number;

  declare var Ber$OctetString: number;

  declare var Ber$PDV: number;

  declare var Ber$PrintableString: number;

  declare var Ber$Real: number;

  declare var Ber$RelativeOID: number;

  declare var Ber$Sequence: number;

  declare var Ber$Set: number;

  declare var Ber$T61String: number;

  declare var Ber$UTCTime: number;

  declare var Ber$UniversalString: number;

  declare var Ber$Utf8String: number;

  declare var Ber$VideotexString: number;

  declare var Ber$VisibleString: number;
}
