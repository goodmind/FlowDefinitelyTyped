declare module "kdbxweb" {
  declare export type KdbxObject = Entry | Group;
  declare export type StringProtected = ProtectedValue | string;
  declare export interface Settings {
    binaries?: boolean;
    customIcons?: boolean;
    historyRules?: boolean;
  }
  declare export interface ObjectMap {
    objects: KdbxObject[];
    remote: KdbxObject[];
    deleted: KdbxObject[];
  }
  declare export interface BinaryInforamtion {
    ref: string;
    value: ProtectedValue | ArrayBuffer;
  }
  declare export interface editingState {
    added: [Date];
    deleted: [Date];
  }
  declare export interface editingStateDict {
    meta: editingState;
    [uuid: string]: editingState;
  }
  declare export class Credentials {
    constructor(
      password: ProtectedValue,
      keyFile: string | ArrayBuffer | Uint8Array
    ): this;
    getHash(): Promise<ArrayBuffer>;
    setKeyFile(keyFile: ArrayBuffer | Uint8Array | null): Promise<void>;
    setPassword(password: ProtectedValue | null): Promise<void>;
    static createKeyFileWithHash(hash: string): Uint8Array;
    static createRandomKeyFile(): Uint8Array;
  }
  declare export class Int64 {
    constructor(lo: number, hi: number): this;
    lo: number;
    hi: number;
    valueOf(): number;
    static from(value: number): Int64;
  }
  declare export class Kdbx {
    constructor(): this;
    header: Header;
    credentials: Credentials;
    meta: Meta;
    xml: Document;
    binaries: Binaries;
    groups: Group[];
    deletedObjects: KdbxObject[];
    addDeletedObject(uuid: KdbxUuid, dt: Date): void;
    cleanup(settings: Settings): void;
    createBinary(
      value: ProtectedValue | ArrayBuffer
    ): Promise<ProtectedValue | ArrayBuffer>;
    createDefaultGroup(): void;
    createEntry(group: Group): Entry;
    createGroup(group: Group, name: StringProtected): Group;
    createRecycleBin(): void;
    getDefaultGroup(): Group;
    getGroup(uuid: KdbxUuid | string, parentGroup?: Group): Group | void;
    getLocalEditState(): editingStateDict;
    merge(remote: Kdbx): void;
    move(object: KdbxObject, toGroup: Group, atIndex?: number): void;
    remove(object: KdbxObject): void;
    removeLocalEditState(): void;
    save(): Promise<ArrayBuffer>;
    saveXml(): Promise<string>;
    setLocalEditState(editingState: editingStateDict): void;
    upgrade(): void;
    static create(credentials: Credentials, name: string): Kdbx;
    static load(data: ArrayBuffer, credentials: Credentials): Promise<Kdbx>;
    static loadXml(data: string, credentials: Credentials): Promise<Kdbx>;
  }
  declare export class KdbxError {
    constructor(code: number, message: string): this;
    name: "KdbxError";
    code: number;
    message: string;
    toString(): string;
  }
  declare export class KdbxUuid {
    constructor(ab: string | ArrayBuffer): this;
    id: string | void;
    empty: boolean;
    equals(other: KdbxUuid): boolean;
    toBytes(): Uint8Array | void;
    toString(): string;
    valueOf(): string | void;
    static random(): KdbxUuid;
  }
  declare export class ProtectedValue {
    constructor(value: ArrayBuffer, salt: ArrayBuffer): this;
    clone(): ProtectedValue;
    getBinary(): Uint8Array;
    getHash(): Promise<ArrayBuffer>;
    getText(): string;
    includes(str: string): boolean;
    setSalt(newSalt: ArrayBuffer): void;
    toString(): string;
    static fromBinary(binary: ArrayBuffer): ProtectedValue;
    static fromString(str: string): ProtectedValue;
  }
  declare export class VarDictionary {
    constructor(): this;
    get(key: string): { [key: string]: any };
    keys(): string[];
    remove(key: string): void;
    set(key: string, type: number, value: { [key: string]: any }): void;
    write(stm: BinaryStream): void;
    static ValueType: {
      Bool: number,
      Bytes: number,
      Int32: number,
      Int64: number,
      String: number,
      UInt32: number,
      UInt64: number
    };
    static read(stm: BinaryStream): VarDictionary;
  }
  declare export var Consts: {
    AutoTypeObfuscationOptions: {
      None: number,
      UseClipboard: number
    },
    CipherId: {
      Aes: string,
      ChaCha20: string
    },
    CompressionAlgorithm: {
      GZip: number,
      None: number
    },
    CrsAlgorithm: {
      ArcFourVariant: number,
      ChaCha20: number,
      Null: number,
      Salsa20: number
    },
    Defaults: {
      HistoryMaxItems: number,
      HistoryMaxSize: number,
      KeyEncryptionRounds: number,
      MntncHistoryDays: number,
      RecycleBinName: string
    },
    ErrorCodes: {
      BadSignature: string,
      FileCorrupt: string,
      InvalidArg: string,
      InvalidKey: string,
      InvalidVersion: string,
      MergeError: string,
      NotImplemented: string,
      Unsupported: string
    },
    Icons: {
      Apple: number,
      Archive: number,
      BlackBerry: number,
      Book: number,
      CDRom: number,
      Certificate: number,
      Checked: number,
      ClipboardReady: number,
      Clock: number,
      Configuration: number,
      Console: number,
      Digicam: number,
      Disk: number,
      Drive: number,
      DriveWindows: number,
      EMail: number,
      EMailBox: number,
      EMailSearch: number,
      Energy: number,
      EnergyCareful: number,
      Expired: number,
      Feather: number,
      Folder: number,
      FolderOpen: number,
      FolderPackage: number,
      Home: number,
      Homebanking: number,
      IRCommunication: number,
      Identity: number,
      Info: number,
      Key: number,
      List: number,
      LockOpen: number,
      MarkedDirectory: number,
      Memory: number,
      Money: number,
      Monitor: number,
      MultiKeys: number,
      NetworkServer: number,
      Note: number,
      Notepad: number,
      Package: number,
      PaperFlag: number,
      PaperLocked: number,
      PaperNew: number,
      PaperQ: number,
      PaperReady: number,
      Parts: number,
      Pen: number,
      Printer: number,
      ProgramIcons: number,
      Run: number,
      Scanner: number,
      Screen: number,
      Settings: number,
      Star: number,
      TerminalEncrypted: number,
      Thumbnail: number,
      Tool: number,
      TrashBin: number,
      Tux: number,
      UserCommunication: number,
      UserKey: number,
      Warning: number,
      Wiki: number,
      World: number,
      WorldComputer: number,
      WorldSocket: number,
      WorldStar: number
    },
    KdfId: {
      Aes: string,
      Argon2: string
    },
    Signatures: {
      FileMagic: number,
      Sig2Kdb: number,
      Sig2Kdbx: number
    }
  };

  declare var npm$namespace$ByteUtils: {
    arrayBufferEquals: typeof ByteUtils$arrayBufferEquals,
    arrayToBuffer: typeof ByteUtils$arrayToBuffer,
    base64ToBytes: typeof ByteUtils$base64ToBytes,
    bytesToBase64: typeof ByteUtils$bytesToBase64,
    bytesToHex: typeof ByteUtils$bytesToHex,
    bytesToString: typeof ByteUtils$bytesToString,
    hexToBytes: typeof ByteUtils$hexToBytes,
    stringToBytes: typeof ByteUtils$stringToBytes,
    zeroBuffer: typeof ByteUtils$zeroBuffer
  };
  declare function ByteUtils$arrayBufferEquals(
    ab1: ArrayBuffer,
    ab2: ArrayBuffer
  ): boolean;

  declare function ByteUtils$arrayToBuffer(
    arr: Uint8Array | ArrayBuffer
  ): ArrayBuffer;

  declare function ByteUtils$base64ToBytes(str: string): Uint8Array;

  declare function ByteUtils$bytesToBase64(
    arr: Uint8Array | ArrayBuffer
  ): string;

  declare function ByteUtils$bytesToHex(arr: Uint8Array | ArrayBuffer): string;

  declare function ByteUtils$bytesToString(
    arr: Uint8Array | ArrayBuffer
  ): string;

  declare function ByteUtils$hexToBytes(hex: string): Uint8Array;

  declare function ByteUtils$stringToBytes(str: string): Uint8Array;

  declare function ByteUtils$zeroBuffer(buffer: Uint8Array | ArrayBuffer): void;

  declare var npm$namespace$CryptoEngine: {
    argon2: typeof CryptoEngine$argon2,
    chacha20: typeof CryptoEngine$chacha20,
    configure: typeof CryptoEngine$configure,
    createAesCbc: typeof CryptoEngine$createAesCbc,
    hmacSha256: typeof CryptoEngine$hmacSha256,
    random: typeof CryptoEngine$random,
    sha256: typeof CryptoEngine$sha256,
    sha512: typeof CryptoEngine$sha512,
    subtle: typeof CryptoEngine$subtle,
    webCrypto: typeof CryptoEngine$webCrypto,
    NodeCrypto: typeof CryptoEngine$NodeCrypto
  };
  declare var CryptoEngine$subtle: SubtleCrypto | null;

  declare var CryptoEngine$webCrypto: Crypto | null;

  declare var CryptoEngine$NodeCrypto: Crypto | null;

  declare function CryptoEngine$argon2(
    password: ArrayBuffer,
    salt: ArrayBuffer,
    memory: number,
    iterations: number,
    length: number,
    parallelism: number,
    type: number,
    version: number
  ): Promise<ArrayBuffer>;

  declare function CryptoEngine$chacha20(
    data: ArrayBuffer,
    key: ArrayBuffer,
    iv: ArrayBuffer
  ): Promise<ArrayBuffer>;

  declare function CryptoEngine$configure(
    newSubtle: SubtleCrypto | null,
    newWebCrypto: Crypto | null,
    newNodeCrypto: Crypto | null
  ): void;

  declare function CryptoEngine$createAesCbc(): any;

  declare function CryptoEngine$hmacSha256(
    key: ArrayBuffer,
    data: ArrayBuffer
  ): Promise<ArrayBuffer>;

  declare function CryptoEngine$random(len: number): Uint8Array;

  declare function CryptoEngine$sha256(data: ArrayBuffer): Promise<ArrayBuffer>;

  declare function CryptoEngine$sha512(data: ArrayBuffer): Promise<ArrayBuffer>;

  declare var npm$namespace$Random: {
    getBytes: typeof Random$getBytes
  };
  declare function Random$getBytes(len: number): Uint8Array;

  declare export class BinaryStream {
    constructor(arrayBuffer: ArrayBuffer): this;
    getByteLength(): number;
    getFloat32(littleEdian?: boolean): number;
    getFloat64(littleEdian?: boolean): number;
    getInt16(littleEdian?: boolean): number;
    getInt32(littleEdian?: boolean): number;
    getInt8(littleEdian?: boolean): number;
    getPos(): number;
    getUint16(littleEdian?: boolean): number;
    getUint32(littleEdian?: boolean): number;
    getUint64(littleEdian?: boolean): number;
    getUint8(littleEdian?: boolean): number;
    getWrittenBytes(): ArrayBuffer;
    readBytes(size: number): ArrayBuffer;
    readBytesNoAdvance(startPos: number, endPos: number): ArrayBuffer;
    readBytesToEnd(): ArrayBuffer;
    setFloat32(value: number, littleEdian?: boolean): void;
    setFloat64(value: number, littleEdian?: boolean): void;
    setInt16(value: number, littleEdian?: boolean): void;
    setInt32(value: number, littleEdian?: boolean): void;
    setInt8(value: number, littleEdian?: boolean): void;
    setUint16(value: number, littleEdian?: boolean): void;
    setUint32(value: number, littleEdian?: boolean): void;
    setUint64(value: number, littleEdian?: boolean): void;
    setUint8(value: number, littleEdian?: boolean): void;
    writeBytes(bytes: ArrayBuffer | Uint8Array): void;
  }
  declare export class Binaries {
    constructor(): this;
    hash(): Promise<any[]>;
    getBinaryHash(
      binary: ProtectedValue | ArrayBuffer | Uint8Array
    ): Promise<string>;
    assignIds(): void;
    add(value: ProtectedValue | ArrayBuffer): Promise<BinaryInforamtion>;
  }
  declare export class Context {
    constructor(opts: Kdbx): this;
    setXmlDate(node: Node, dt: Date): void;
  }
  declare export class Group {
    constructor(): this;
    uuid: KdbxUuid;
    name: StringProtected;
    notes: StringProtected;
    icon: number;
    customIcon: KdbxUuid;
    times: Times;
    expanded: boolean;
    defaultAutoTypeSeq: StringProtected;
    enableAutoType: boolean;
    enableSearching: boolean;
    lastTopVisibleEntry: KdbxUuid;
    groups: Group[];
    entries: Entry[];
    parentGroup: Group;
    customData: {};
    static create(name: StringProtected, parentGroup: Group): Group;
    static read(xmlNode: Node, ctx: Context, parentGroup: Group): Group;
    write(parentNode: Node, ctx: Context): void;
    forEach(
      callback: (thisArg: (value: any) => void, entry: Entry | void) => void,
      thisArg: (value: any) => void
    ): void;
    merge(objectMap: ObjectMap): void;
    copyFrom(group: Group): void;
  }
  declare export class Entry {
    constructor(): this;
    uuid: KdbxUuid;
    icon: number;
    customIcon: KdbxUuid;
    fgColor: StringProtected;
    bgColor: StringProtected;
    overrideUrl: StringProtected;
    tags: string[];
    times: Times;
    fields: {
      [key: string]: StringProtected
    };
    binaries: {};
    autoType: {
      enabled: boolean,
      obfuscation: number,
      defaultSequence: string,
      items: {
        windows: string,
        keystrokeSequence: string
      }
    };
    history: Entry[];
    parentGroup: Group;
    customData: {};
    static create(meta: Meta, parentGroup: Group): Entry;
    static read(xmlNode: Node, ctx: Context, parentGroup: Group): Entry;
    write(parentNode: Node, ctx: Context): void;
    pushHistory(): void;
    removeHistory(index: number, count: number): void;
    copyFrom(entry: Entry): void;
    merge(objectMap: ObjectMap): void;
  }
  declare export class Meta {
    constructor(): this;
    static create(): Meta;
    static read(xmlNode: Node, ctx: Context): Meta;
    write(parentNode: Node, ctx: Context): void;
    merge(remote: Meta, objectMap: ObjectMap): void;
  }
  declare export class Header {
    constructor(): this;
    compression: number;
    crsAlgorithm: number;
    dataCipherUuid: KdbxUuid;
    encryptionIV: any;
    endPos: number;
    kdfParameters: VarDictionary;
    keyEncryptionRounds: number;
    masterSeed: Uint8Array;
    protectedStreamKey: any;
    publicCustomData: any;
    streamStartBytes: any;
    transformSeed: any;
    versionMajor: number;
    versionMinor: number;
    static read(stm: BinaryStream, ctx: Context): Header;
    static create(): Header;
    generateSalts(): void;
    readInnerHeader(stm: BinaryStream, ctx: Context): void;
    upgrade(): void;
    write(stm: BinaryStream): void;
    writeInnerHeader(stm: BinaryStream, ctx: Context): void;
  }
  declare export class Times {
    constructor(): this;
    creationTime: Date;
    lastModTime: Date;
    lastAccessTime: Date;
    expiryTime: Date;
    expires: boolean;
    usageCount: number;
    locationChanged: Date;
    static create(): Times;
    static read(xmlNode: Node): Times;
    clone(): Times;
    update(): void;
    write(parentNode: Node, ctx: Context): void;
  }
}
