declare module "winrt" {
  declare var npm$namespace$Windows: {
    Foundation: typeof npm$namespace$Windows$Foundation,
    ApplicationModel: typeof npm$namespace$Windows$ApplicationModel,
    Data: typeof npm$namespace$Windows$Data,
    Devices: typeof npm$namespace$Windows$Devices,
    Globalization: typeof npm$namespace$Windows$Globalization,
    Graphics: typeof npm$namespace$Windows$Graphics,
    Management: typeof npm$namespace$Windows$Management,
    Media: typeof npm$namespace$Windows$Media,
    Networking: typeof npm$namespace$Windows$Networking,
    Security: typeof npm$namespace$Windows$Security,
    Storage: typeof npm$namespace$Windows$Storage,
    System: typeof npm$namespace$Windows$System,
    UI: typeof npm$namespace$Windows$UI,
    Web: typeof npm$namespace$Windows$Web
  };

  declare var npm$namespace$Windows$Foundation: {
    PropertyType: typeof Windows$Foundation$PropertyType,
    AsyncStatus: typeof Windows$Foundation$AsyncStatus,
    WwwFormUrlDecoder: typeof Windows$Foundation$WwwFormUrlDecoder,
    Uri: typeof Windows$Foundation$Uri,
    PropertyValue: typeof Windows$Foundation$PropertyValue,
    Collections: typeof npm$namespace$Windows$Foundation$Collections,
    Metadata: typeof npm$namespace$Windows$Foundation$Metadata,
    Diagnostics: typeof npm$namespace$Windows$Foundation$Diagnostics
  };

  declare var npm$namespace$Windows$Foundation$Collections: {
    CollectionChange: typeof Windows$Foundation$Collections$CollectionChange,
    PropertySet: typeof Windows$Foundation$Collections$PropertySet,
    ValueSet: typeof Windows$Foundation$Collections$ValueSet
  };

  declare export var Windows$Foundation$Collections$CollectionChange: {|
    +reset: 0, // 0
    +itemInserted: 1, // 1
    +itemRemoved: 2, // 2
    +itemChanged: 3 // 3
  |};

  declare export interface Windows$Foundation$Collections$IVectorChangedEventArgs {
    collectionChange: $Values<
      typeof Windows$Foundation$Collections$CollectionChange
    >;
    index: number;
  }

  declare export type Windows$Foundation$Collections$IPropertySet = {} & Windows$Foundation$Collections$IObservableMap<
    string,
    any
  > &
    Windows$Foundation$Collections$IMap<string, any> &
    Windows$Foundation$Collections$IIterable<
      Windows$Foundation$Collections$IKeyValuePair<string, any>
    >;

  declare export class Windows$Foundation$Collections$PropertySet
    mixins Windows$Foundation$Collections$IPropertySet,
      Windows$Foundation$Collections$IObservableMap<string, any>,
      Windows$Foundation$Collections$IMap<string, any>,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      > {
    size: number;
    onmapchanged: any;
    lookup(key: string): any;
    hasKey(key: string): boolean;
    getView(): Windows$Foundation$Collections$IMapView<string, any>;
    insert(key: string, value: any): boolean;
    remove(key: string): void;
    clear(): void;
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<string, any>
    >;
  }

  declare export class Windows$Foundation$Collections$ValueSet
    mixins Windows$Foundation$Collections$IPropertySet,
      Windows$Foundation$Collections$IObservableMap<string, any>,
      Windows$Foundation$Collections$IMap<string, any>,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      > {
    size: number;
    onmapchanged: any;
    lookup(key: string): any;
    hasKey(key: string): boolean;
    getView(): Windows$Foundation$Collections$IMapView<string, any>;
    insert(key: string, value: any): boolean;
    remove(key: string): void;
    clear(): void;
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<string, any>
    >;
  }

  declare export interface Windows$Foundation$Collections$IIterable<T> {
    first(): Windows$Foundation$Collections$IIterator<T>;
  }

  declare export interface Windows$Foundation$Collections$IIterator<T> {
    current: T;
    hasCurrent: boolean;
    moveNext(): boolean;
    getMany(): {
      items: T[],
      returnValue: number
    };
  }

  declare export type Windows$Foundation$Collections$IVectorView<T> = {
    size: number,
    getAt(index: number): T,
    indexOf(
      value: T
    ): {
      index: number,
      returnValue: boolean
    },
    getMany(
      startIndex: number
    ): {
      items: T[],
      returnValue: number
    },
    toString(): string,
    toLocaleString(): string,
    concat(...items: T[][]): T[],
    join(seperator: string): string,
    pop(): T,
    push(...items: T[]): void,
    reverse(): T[],
    shift(): T,
    slice(start: number): T[],
    slice(start: number, end: number): T[],
    sort(): T[],
    sort(compareFn: (a: T, b: T) => number): T[],
    splice(start: number): T[],
    splice(start: number, deleteCount: number, ...items: T[]): T[],
    unshift(...items: T[]): number,
    lastIndexOf(searchElement: T): number,
    lastIndexOf(searchElement: T, fromIndex: number): number,
    every(
      callbackfn: (value: T, index: number, array: T[]) => boolean
    ): boolean,
    every(
      callbackfn: (value: T, index: number, array: T[]) => boolean,
      thisArg: any
    ): boolean,
    some(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean,
    some(
      callbackfn: (value: T, index: number, array: T[]) => boolean,
      thisArg: any
    ): boolean,
    forEach(callbackfn: (value: T, index: number, array: T[]) => void): void,
    forEach(
      callbackfn: (value: T, index: number, array: T[]) => void,
      thisArg: any
    ): void,
    map(callbackfn: (value: T, index: number, array: T[]) => any): any[],
    map(
      callbackfn: (value: T, index: number, array: T[]) => any,
      thisArg: any
    ): any[],
    filter(callbackfn: (value: T, index: number, array: T[]) => boolean): T[],
    filter(
      callbackfn: (value: T, index: number, array: T[]) => boolean,
      thisArg: any
    ): T[],
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: T[]
      ) => any
    ): any,
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: T[]
      ) => any,
      initialValue: any
    ): any,
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: T[]
      ) => any
    ): any,
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: T[]
      ) => any,
      initialValue: any
    ): any,
    length: number
  } & Windows$Foundation$Collections$IIterable<T>;

  declare export type Windows$Foundation$Collections$IVector<T> = {
    size: number,
    getAt(index: number): T,
    getView(): Windows$Foundation$Collections$IVectorView<T>,
    indexOf(
      value: T
    ): {
      index: number,
      returnValue: boolean
    },
    setAt(index: number, value: T): void,
    insertAt(index: number, value: T): void,
    removeAt(index: number): void,
    append(value: T): void,
    removeAtEnd(): void,
    clear(): void,
    getMany(
      startIndex: number
    ): {
      items: T[],
      returnValue: number
    },
    replaceAll(items: T[]): void,
    toString(): string,
    toLocaleString(): string,
    concat(...items: T[][]): T[],
    join(seperator: string): string,
    pop(): T,
    push(...items: T[]): void,
    reverse(): T[],
    shift(): T,
    slice(start: number): T[],
    slice(start: number, end: number): T[],
    sort(): T[],
    sort(compareFn: (a: T, b: T) => number): T[],
    splice(start: number): T[],
    splice(start: number, deleteCount: number, ...items: T[]): T[],
    unshift(...items: T[]): number,
    lastIndexOf(searchElement: T): number,
    lastIndexOf(searchElement: T, fromIndex: number): number,
    every(
      callbackfn: (value: T, index: number, array: T[]) => boolean
    ): boolean,
    every(
      callbackfn: (value: T, index: number, array: T[]) => boolean,
      thisArg: any
    ): boolean,
    some(callbackfn: (value: T, index: number, array: T[]) => boolean): boolean,
    some(
      callbackfn: (value: T, index: number, array: T[]) => boolean,
      thisArg: any
    ): boolean,
    forEach(callbackfn: (value: T, index: number, array: T[]) => void): void,
    forEach(
      callbackfn: (value: T, index: number, array: T[]) => void,
      thisArg: any
    ): void,
    map(callbackfn: (value: T, index: number, array: T[]) => any): any[],
    map(
      callbackfn: (value: T, index: number, array: T[]) => any,
      thisArg: any
    ): any[],
    filter(callbackfn: (value: T, index: number, array: T[]) => boolean): T[],
    filter(
      callbackfn: (value: T, index: number, array: T[]) => boolean,
      thisArg: any
    ): T[],
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: T[]
      ) => any
    ): any,
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: T[]
      ) => any,
      initialValue: any
    ): any,
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: T[]
      ) => any
    ): any,
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: T[]
      ) => any,
      initialValue: any
    ): any,
    length: number
  } & Windows$Foundation$Collections$IIterable<T>;

  declare export interface Windows$Foundation$Collections$IKeyValuePair<K, V> {
    key: K;
    value: V;
  }

  declare export type Windows$Foundation$Collections$IMap<K, V> = {
    size: number,
    lookup(key: K): V,
    hasKey(key: K): boolean,
    getView(): Windows$Foundation$Collections$IMapView<K, V>,
    insert(key: K, value: V): boolean,
    remove(key: K): void,
    clear(): void
  } & Windows$Foundation$Collections$IIterable<
    Windows$Foundation$Collections$IKeyValuePair<K, V>
  >;

  declare export type Windows$Foundation$Collections$IMapView<K, V> = {
    size: number,
    lookup(key: K): V,
    hasKey(key: K): boolean,
    split(): {
      first: Windows$Foundation$Collections$IMapView<K, V>,
      second: Windows$Foundation$Collections$IMapView<K, V>
    }
  } & Windows$Foundation$Collections$IIterable<
    Windows$Foundation$Collections$IKeyValuePair<K, V>
  >;

  declare export interface Windows$Foundation$Collections$VectorChangedEventHandler<
    T
  > {
    (
      sender: Windows$Foundation$Collections$IObservableVector<T>,
      event: Windows$Foundation$Collections$IVectorChangedEventArgs
    ): void;
  }

  declare export type Windows$Foundation$Collections$IObservableVector<T> = {
    onvectorchanged: any
  } & Windows$Foundation$Collections$IVector<T> &
    Windows$Foundation$Collections$IIterable<T>;

  declare export interface Windows$Foundation$Collections$IMapChangedEventArgs<
    K
  > {
    collectionChange: $Values<
      typeof Windows$Foundation$Collections$CollectionChange
    >;
    key: K;
  }

  declare export interface Windows$Foundation$Collections$MapChangedEventHandler<
    K,
    V
  > {
    (
      sender: Windows$Foundation$Collections$IObservableMap<K, V>,
      event: Windows$Foundation$Collections$IMapChangedEventArgs<K>
    ): void;
  }

  declare export type Windows$Foundation$Collections$IObservableMap<K, V> = {
    onmapchanged: any
  } & Windows$Foundation$Collections$IMap<K, V> &
    Windows$Foundation$Collections$IIterable<
      Windows$Foundation$Collections$IKeyValuePair<K, V>
    >;

  declare export interface Windows$Foundation$IUriRuntimeClass {
    absoluteUri: string;
    displayUri: string;
    domain: string;
    extension: string;
    fragment: string;
    host: string;
    password: string;
    path: string;
    port: number;
    query: string;
    queryParsed: Windows$Foundation$WwwFormUrlDecoder;
    rawUri: string;
    schemeName: string;
    suspicious: boolean;
    userName: string;
    equals(pUri: Windows$Foundation$Uri): boolean;
    combineUri(relativeUri: string): Windows$Foundation$Uri;
  }

  declare export class Windows$Foundation$WwwFormUrlDecoder
    mixins Windows$Foundation$IWwwFormUrlDecoderRuntimeClass,
      Windows$Foundation$Collections$IIterable<Windows$Foundation$IWwwFormUrlDecoderEntry>,
      Windows$Foundation$Collections$IVectorView<Windows$Foundation$IWwwFormUrlDecoderEntry> {
    constructor(query: string): this;
    size: number;
    getFirstValueByName(name: string): string;
    first(): Windows$Foundation$Collections$IIterator<Windows$Foundation$IWwwFormUrlDecoderEntry>;
    getAt(index: number): Windows$Foundation$IWwwFormUrlDecoderEntry;
    indexOf(
      value: Windows$Foundation$IWwwFormUrlDecoderEntry
    ): {
      index: number,
      returnValue: boolean
    };
    getMany(
      startIndex: number
    ): {
      items: Windows$Foundation$IWwwFormUrlDecoderEntry[],
      returnValue: number
    };
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$Foundation$IWwwFormUrlDecoderEntry[][]
    ): Windows$Foundation$IWwwFormUrlDecoderEntry[];
    join(seperator: string): string;
    pop(): Windows$Foundation$IWwwFormUrlDecoderEntry;
    push(...items: Windows$Foundation$IWwwFormUrlDecoderEntry[]): void;
    reverse(): Windows$Foundation$IWwwFormUrlDecoderEntry[];
    shift(): Windows$Foundation$IWwwFormUrlDecoderEntry;
    slice(start: number): Windows$Foundation$IWwwFormUrlDecoderEntry[];
    slice(
      start: number,
      end: number
    ): Windows$Foundation$IWwwFormUrlDecoderEntry[];
    sort(): Windows$Foundation$IWwwFormUrlDecoderEntry[];
    sort(
      compareFn: (
        a: Windows$Foundation$IWwwFormUrlDecoderEntry,
        b: Windows$Foundation$IWwwFormUrlDecoderEntry
      ) => number
    ): Windows$Foundation$IWwwFormUrlDecoderEntry[];
    splice(start: number): Windows$Foundation$IWwwFormUrlDecoderEntry[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$Foundation$IWwwFormUrlDecoderEntry[]
    ): Windows$Foundation$IWwwFormUrlDecoderEntry[];
    unshift(...items: Windows$Foundation$IWwwFormUrlDecoderEntry[]): number;
    lastIndexOf(
      searchElement: Windows$Foundation$IWwwFormUrlDecoderEntry
    ): number;
    lastIndexOf(
      searchElement: Windows$Foundation$IWwwFormUrlDecoderEntry,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$Foundation$IWwwFormUrlDecoderEntry,
        index: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$Foundation$IWwwFormUrlDecoderEntry,
        index: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Foundation$IWwwFormUrlDecoderEntry,
        index: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Foundation$IWwwFormUrlDecoderEntry,
        index: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$Foundation$IWwwFormUrlDecoderEntry,
        index: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$Foundation$IWwwFormUrlDecoderEntry,
        index: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$Foundation$IWwwFormUrlDecoderEntry,
        index: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$Foundation$IWwwFormUrlDecoderEntry,
        index: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$Foundation$IWwwFormUrlDecoderEntry,
        index: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => boolean
    ): Windows$Foundation$IWwwFormUrlDecoderEntry[];
    filter(
      callbackfn: (
        value: Windows$Foundation$IWwwFormUrlDecoderEntry,
        index: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => boolean,
      thisArg: any
    ): Windows$Foundation$IWwwFormUrlDecoderEntry[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Foundation$IWwwFormUrlDecoderEntry[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare export class Windows$Foundation$Uri
    mixins Windows$Foundation$IUriRuntimeClass,
      Windows$Foundation$IUriRuntimeClassWithAbsoluteCanonicalUri {
    constructor(uri: string): this;
    constructor(baseUri: string, relativeUri: string): this;
    absoluteUri: string;
    displayUri: string;
    domain: string;
    extension: string;
    fragment: string;
    host: string;
    password: string;
    path: string;
    port: number;
    query: string;
    queryParsed: Windows$Foundation$WwwFormUrlDecoder;
    rawUri: string;
    schemeName: string;
    suspicious: boolean;
    userName: string;
    absoluteCanonicalUri: string;
    displayIri: string;
    equals(pUri: Windows$Foundation$Uri): boolean;
    combineUri(relativeUri: string): Windows$Foundation$Uri;
    static unescapeComponent(toUnescape: string): string;
    static escapeComponent(toEscape: string): string;
  }

  declare export interface Windows$Foundation$IUriRuntimeClassWithAbsoluteCanonicalUri {
    absoluteCanonicalUri: string;
    displayIri: string;
  }

  declare export interface Windows$Foundation$IUriEscapeStatics {
    unescapeComponent(toUnescape: string): string;
    escapeComponent(toEscape: string): string;
  }

  declare export interface Windows$Foundation$IUriRuntimeClassFactory {
    createUri(uri: string): Windows$Foundation$Uri;
    createUri(baseUri: string, relativeUri: string): Windows$Foundation$Uri;
  }

  declare export interface Windows$Foundation$IWwwFormUrlDecoderEntry {
    name: string;
    value: string;
  }

  declare export type Windows$Foundation$IWwwFormUrlDecoderRuntimeClass = {
    getFirstValueByName(name: string): string
  } & Windows$Foundation$Collections$IIterable<Windows$Foundation$IWwwFormUrlDecoderEntry> &
    Windows$Foundation$Collections$IVectorView<Windows$Foundation$IWwwFormUrlDecoderEntry>;

  declare export interface Windows$Foundation$IWwwFormUrlDecoderRuntimeClassFactory {
    createWwwFormUrlDecoder(
      query: string
    ): Windows$Foundation$WwwFormUrlDecoder;
  }

  declare export interface Windows$Foundation$IGetActivationFactory {
    getActivationFactory(activatableClassId: string): any;
  }

  declare export interface Windows$Foundation$IClosable {
    close(): void;
  }

  declare export var Windows$Foundation$PropertyType: {|
    +empty: 0, // 0
    +uInt8: 1, // 1
    +int16: 2, // 2
    +uInt16: 3, // 3
    +int32: 4, // 4
    +uInt32: 5, // 5
    +int64: 6, // 6
    +uInt64: 7, // 7
    +single: 8, // 8
    +double: 9, // 9
    +char16: 10, // 10
    +boolean: 11, // 11
    +string: 12, // 12
    +inspectable: 13, // 13
    +dateTime: 14, // 14
    +timeSpan: 15, // 15
    +guid: 16, // 16
    +point: 17, // 17
    +size: 18, // 18
    +rect: 19, // 19
    +otherType: 20, // 20
    +uInt8Array: 21, // 21
    +int16Array: 22, // 22
    +uInt16Array: 23, // 23
    +int32Array: 24, // 24
    +uInt32Array: 25, // 25
    +int64Array: 26, // 26
    +uInt64Array: 27, // 27
    +singleArray: 28, // 28
    +doubleArray: 29, // 29
    +char16Array: 30, // 30
    +booleanArray: 31, // 31
    +stringArray: 32, // 32
    +inspectableArray: 33, // 33
    +dateTimeArray: 34, // 34
    +timeSpanArray: 35, // 35
    +guidArray: 36, // 36
    +pointArray: 37, // 37
    +sizeArray: 38, // 38
    +rectArray: 39, // 39
    +otherTypeArray: 40 // 40
  |};

  declare export interface Windows$Foundation$Point {
    x: number;
    y: number;
  }

  declare export interface Windows$Foundation$Size {
    width: number;
    height: number;
  }

  declare export interface Windows$Foundation$Rect {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  declare export interface Windows$Foundation$DateTime {
    universalTime: number;
  }

  declare export interface Windows$Foundation$TimeSpan {
    duration: number;
  }

  declare export interface Windows$Foundation$IPropertyValue {
    isNumericScalar: boolean;
    type: $Values<typeof Windows$Foundation$PropertyType>;
    getUInt8(): number;
    getInt16(): number;
    getUInt16(): number;
    getInt32(): number;
    getUInt32(): number;
    getInt64(): number;
    getUInt64(): number;
    getSingle(): number;
    getDouble(): number;
    getChar16(): string;
    getBoolean(): boolean;
    getString(): string;
    getGuid(): string;
    getDateTime(): Date;
    getTimeSpan(): number;
    getPoint(): Windows$Foundation$Point;
    getSize(): Windows$Foundation$Size;
    getRect(): Windows$Foundation$Rect;
    getUInt8Array(): Uint8Array;
    getInt16Array(): Int16Array;
    getUInt16Array(): Uint16Array;
    getInt32Array(): Int32Array;
    getUInt32Array(): Uint32Array;
    getInt64Array(): number[];
    getUInt64Array(): number[];
    getSingleArray(): Float32Array;
    getDoubleArray(): Float64Array;
    getChar16Array(): string[];
    getBooleanArray(): boolean[];
    getStringArray(): string[];
    getInspectableArray(): any[];
    getGuidArray(): string[];
    getDateTimeArray(): Date[];
    getTimeSpanArray(): number[];
    getPointArray(): Windows$Foundation$Point[];
    getSizeArray(): Windows$Foundation$Size[];
    getRectArray(): Windows$Foundation$Rect[];
  }

  declare export interface Windows$Foundation$IPropertyValueStatics {
    createEmpty(): any;
    createUInt8(value: number): any;
    createInt16(value: number): any;
    createUInt16(value: number): any;
    createInt32(value: number): any;
    createUInt32(value: number): any;
    createInt64(value: number): any;
    createUInt64(value: number): any;
    createSingle(value: number): any;
    createDouble(value: number): any;
    createChar16(value: string): any;
    createBoolean(value: boolean): any;
    createString(value: string): any;
    createInspectable(value: any): any;
    createGuid(value: string): any;
    createDateTime(value: Date): any;
    createTimeSpan(value: number): any;
    createPoint(value: Windows$Foundation$Point): any;
    createSize(value: Windows$Foundation$Size): any;
    createRect(value: Windows$Foundation$Rect): any;
    createUInt8Array(value: Uint8Array): any;
    createInt16Array(value: Int16Array): any;
    createUInt16Array(value: Uint16Array): any;
    createInt32Array(value: Int32Array): any;
    createUInt32Array(value: Uint32Array): any;
    createInt64Array(value: number[]): any;
    createUInt64Array(value: number[]): any;
    createSingleArray(value: Float32Array): any;
    createDoubleArray(value: Float64Array): any;
    createChar16Array(value: string[]): any;
    createBooleanArray(value: boolean[]): any;
    createStringArray(value: string[]): any;
    createInspectableArray(value: any[]): any;
    createGuidArray(value: string[]): any;
    createDateTimeArray(value: Date[]): any;
    createTimeSpanArray(value: number[]): any;
    createPointArray(value: Windows$Foundation$Point[]): any;
    createSizeArray(value: Windows$Foundation$Size[]): any;
    createRectArray(value: Windows$Foundation$Rect[]): any;
  }

  declare export class Windows$Foundation$PropertyValue {
    static createEmpty(): any;
    static createUInt8(value: number): any;
    static createInt16(value: number): any;
    static createUInt16(value: number): any;
    static createInt32(value: number): any;
    static createUInt32(value: number): any;
    static createInt64(value: number): any;
    static createUInt64(value: number): any;
    static createSingle(value: number): any;
    static createDouble(value: number): any;
    static createChar16(value: string): any;
    static createBoolean(value: boolean): any;
    static createString(value: string): any;
    static createInspectable(value: any): any;
    static createGuid(value: string): any;
    static createDateTime(value: Date): any;
    static createTimeSpan(value: number): any;
    static createPoint(value: Windows$Foundation$Point): any;
    static createSize(value: Windows$Foundation$Size): any;
    static createRect(value: Windows$Foundation$Rect): any;
    static createUInt8Array(value: Uint8Array): any;
    static createInt16Array(value: Int16Array): any;
    static createUInt16Array(value: Uint16Array): any;
    static createInt32Array(value: Int32Array): any;
    static createUInt32Array(value: Uint32Array): any;
    static createInt64Array(value: number[]): any;
    static createUInt64Array(value: number[]): any;
    static createSingleArray(value: Float32Array): any;
    static createDoubleArray(value: Float64Array): any;
    static createChar16Array(value: string[]): any;
    static createBooleanArray(value: boolean[]): any;
    static createStringArray(value: string[]): any;
    static createInspectableArray(value: any[]): any;
    static createGuidArray(value: string[]): any;
    static createDateTimeArray(value: Date[]): any;
    static createTimeSpanArray(value: number[]): any;
    static createPointArray(value: Windows$Foundation$Point[]): any;
    static createSizeArray(value: Windows$Foundation$Size[]): any;
    static createRectArray(value: Windows$Foundation$Rect[]): any;
  }

  declare export interface Windows$Foundation$AsyncActionCompletedHandler {
    (
      asyncInfo: Windows$Foundation$IAsyncAction,
      asyncStatus: $Values<typeof Windows$Foundation$AsyncStatus>
    ): void;
  }

  declare export var Windows$Foundation$AsyncStatus: {|
    +canceled: 0, // 0
    +completed: 1, // 1
    +error: 2, // 2
    +started: 3 // 3
  |};

  declare export interface Windows$Foundation$EventRegistrationToken {
    value: number;
  }

  declare export interface Windows$Foundation$HResult {
    value: number;
  }

  declare export interface Windows$Foundation$IAsyncInfo {
    errorCode: number;
    id: number;
    status: $Values<typeof Windows$Foundation$AsyncStatus>;
    cancel(): void;
    close(): void;
  }

  declare export type Windows$Foundation$IAsyncAction = {
    then<U>(
      success?: () => Foundation$IPromise<U>,
      error?: (error: any) => Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Foundation$IPromise<U>,
    then<U>(
      success?: () => Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Foundation$IPromise<U>,
    then<U>(
      success?: () => U,
      error?: (error: any) => Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Foundation$IPromise<U>,
    then<U>(
      success?: () => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Foundation$IPromise<U>,
    done?: <U>(
      success?: () => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ) => void,
    cancel(): void,
    completed: Windows$Foundation$AsyncActionCompletedHandler,
    getResults(): void
  } & Windows$Foundation$IAsyncInfo;

  declare export interface Windows$Foundation$AsyncOperationWithProgressCompletedHandler<
    TResult,
    TProgress
  > {
    (
      asyncInfo: Windows$Foundation$IAsyncOperationWithProgress<
        TResult,
        TProgress
      >,
      asyncStatus: $Values<typeof Windows$Foundation$AsyncStatus>
    ): void;
  }

  declare export type Windows$Foundation$IAsyncOperationWithProgress<
    TResult,
    TProgress
  > = {
    operation: {
      progress: Windows$Foundation$AsyncOperationProgressHandler<
        TResult,
        TProgress
      >,
      completed: Windows$Foundation$AsyncOperationWithProgressCompletedHandler<
        TResult,
        TProgress
      >,
      getResults(): TResult
    }
  } & Windows$Foundation$IPromise<TResult>;

  declare export interface Windows$Foundation$AsyncOperationCompletedHandler<
    TResult
  > {
    (
      asyncInfo: Windows$Foundation$IAsyncOperation<TResult>,
      asyncStatus: $Values<typeof Windows$Foundation$AsyncStatus>
    ): void;
  }

  declare export type Windows$Foundation$IAsyncOperation<TResult> = {
    operation: {
      completed: Windows$Foundation$AsyncOperationCompletedHandler<TResult>,
      getResults(): TResult
    }
  } & Windows$Foundation$IPromise<TResult>;

  declare export interface Windows$Foundation$AsyncActionWithProgressCompletedHandler<
    TProgress
  > {
    (
      asyncInfo: Windows$Foundation$IAsyncActionWithProgress<TProgress>,
      asyncStatus: $Values<typeof Windows$Foundation$AsyncStatus>
    ): void;
  }

  declare export type Windows$Foundation$IAsyncActionWithProgress<TProgress> = {
    progress: Windows$Foundation$AsyncActionProgressHandler<TProgress>,
    completed: Windows$Foundation$AsyncActionWithProgressCompletedHandler<TProgress>,
    getResults(): void
  } & Windows$Foundation$IAsyncInfo &
    Windows$Foundation$IPromise<void>;

  declare export interface Windows$Foundation$AsyncOperationProgressHandler<
    TResult,
    TProgress
  > {
    (
      asyncInfo: Windows$Foundation$IAsyncOperationWithProgress<
        TResult,
        TProgress
      >,
      progressInfo: TProgress
    ): void;
  }

  declare export interface Windows$Foundation$AsyncActionProgressHandler<
    TProgress
  > {
    (
      asyncInfo: Windows$Foundation$IAsyncActionWithProgress<TProgress>,
      progressInfo: TProgress
    ): void;
  }

  declare export type Windows$Foundation$IReference<T> = {
    value: T
  } & Windows$Foundation$IPropertyValue;

  declare export type Windows$Foundation$IReferenceArray<T> = {
    value: T[]
  } & Windows$Foundation$IPropertyValue;

  declare export interface Windows$Foundation$TypedEventHandler<
    TSender,
    TResult
  > {
    (sender: TSender, args: TResult): void;
  }

  declare export interface Windows$Foundation$EventHandler<T> {
    (sender: any, args: T): void;
  }

  declare var npm$namespace$Windows$Foundation$Metadata: {
    GCPressureAmount: typeof Windows$Foundation$Metadata$GCPressureAmount,
    AttributeTargets: typeof Windows$Foundation$Metadata$AttributeTargets,
    CompositionType: typeof Windows$Foundation$Metadata$CompositionType,
    ThreadingModel: typeof Windows$Foundation$Metadata$ThreadingModel,
    MarshalingType: typeof Windows$Foundation$Metadata$MarshalingType,
    WebHostHiddenAttribute: typeof Windows$Foundation$Metadata$WebHostHiddenAttribute,
    VariantAttribute: typeof Windows$Foundation$Metadata$VariantAttribute,
    HasVariantAttribute: typeof Windows$Foundation$Metadata$HasVariantAttribute,
    DualApiPartitionAttribute: typeof Windows$Foundation$Metadata$DualApiPartitionAttribute,
    MuseAttribute: typeof Windows$Foundation$Metadata$MuseAttribute,
    GCPressureAttribute: typeof Windows$Foundation$Metadata$GCPressureAttribute,
    ActivatableAttribute: typeof Windows$Foundation$Metadata$ActivatableAttribute,
    VersionAttribute: typeof Windows$Foundation$Metadata$VersionAttribute,
    AllowMultipleAttribute: typeof Windows$Foundation$Metadata$AllowMultipleAttribute,
    AttributeUsageAttribute: typeof Windows$Foundation$Metadata$AttributeUsageAttribute,
    DefaultOverloadAttribute: typeof Windows$Foundation$Metadata$DefaultOverloadAttribute,
    DefaultAttribute: typeof Windows$Foundation$Metadata$DefaultAttribute,
    GuidAttribute: typeof Windows$Foundation$Metadata$GuidAttribute,
    ComposableAttribute: typeof Windows$Foundation$Metadata$ComposableAttribute,
    OverloadAttribute: typeof Windows$Foundation$Metadata$OverloadAttribute,
    StaticAttribute: typeof Windows$Foundation$Metadata$StaticAttribute,
    OverridableAttribute: typeof Windows$Foundation$Metadata$OverridableAttribute,
    ProtectedAttribute: typeof Windows$Foundation$Metadata$ProtectedAttribute,
    ThreadingAttribute: typeof Windows$Foundation$Metadata$ThreadingAttribute,
    MarshalingBehaviorAttribute: typeof Windows$Foundation$Metadata$MarshalingBehaviorAttribute,
    ExclusiveToAttribute: typeof Windows$Foundation$Metadata$ExclusiveToAttribute,
    LengthIsAttribute: typeof Windows$Foundation$Metadata$LengthIsAttribute,
    RangeAttribute: typeof Windows$Foundation$Metadata$RangeAttribute
  };
  declare export class Windows$Foundation$Metadata$WebHostHiddenAttribute {}

  declare export class Windows$Foundation$Metadata$VariantAttribute {}

  declare export class Windows$Foundation$Metadata$HasVariantAttribute {}

  declare export class Windows$Foundation$Metadata$DualApiPartitionAttribute {}

  declare export class Windows$Foundation$Metadata$MuseAttribute {}

  declare export var Windows$Foundation$Metadata$GCPressureAmount: {|
    +low: 0, // 0
    +medium: 1, // 1
    +high: 2 // 2
  |};

  declare export class Windows$Foundation$Metadata$GCPressureAttribute {}

  declare export class Windows$Foundation$Metadata$ActivatableAttribute {
    constructor(version: number): this;
    constructor(type: string, version: number): this;
  }

  declare export class Windows$Foundation$Metadata$VersionAttribute {
    constructor(version: number): this;
  }

  declare export class Windows$Foundation$Metadata$AllowMultipleAttribute {}

  declare export class Windows$Foundation$Metadata$AttributeUsageAttribute {
    constructor(
      targets: $Values<typeof Windows$Foundation$Metadata$AttributeTargets>
    ): this;
  }

  declare export var Windows$Foundation$Metadata$AttributeTargets: {|
    +all: 0, // 0
    +delegate: 1, // 1
    +enum: 2, // 2
    +event: 3, // 3
    +field: 4, // 4
    +interface: 5, // 5
    +method: 6, // 6
    +parameter: 7, // 7
    +property: 8, // 8
    +runtimeClass: 9, // 9
    +struct: 10, // 10
    +interfaceImpl: 11 // 11
  |};

  declare export class Windows$Foundation$Metadata$DefaultOverloadAttribute {}

  declare export class Windows$Foundation$Metadata$DefaultAttribute {}

  declare export class Windows$Foundation$Metadata$GuidAttribute {
    constructor(
      a: number,
      b: number,
      c: number,
      d: number,
      e: number,
      f: number,
      g: number,
      h: number,
      i: number,
      j: number,
      k: number
    ): this;
  }

  declare export class Windows$Foundation$Metadata$ComposableAttribute {
    constructor(
      type: string,
      compositionType: $Values<
        typeof Windows$Foundation$Metadata$CompositionType
      >,
      version: number
    ): this;
  }

  declare export var Windows$Foundation$Metadata$CompositionType: {|
    +protected: 0, // 0
    +public: 1 // 1
  |};

  declare export class Windows$Foundation$Metadata$OverloadAttribute {
    constructor(method: string): this;
  }

  declare export class Windows$Foundation$Metadata$StaticAttribute {
    constructor(type: string, version: number): this;
  }

  declare export class Windows$Foundation$Metadata$OverridableAttribute {}

  declare export class Windows$Foundation$Metadata$ProtectedAttribute {}

  declare export class Windows$Foundation$Metadata$ThreadingAttribute {
    constructor(
      model: $Values<typeof Windows$Foundation$Metadata$ThreadingModel>
    ): this;
  }

  declare export var Windows$Foundation$Metadata$ThreadingModel: {|
    +sTA: 0, // 0
    +mTA: 1, // 1
    +both: 2, // 2
    +invalidThreading: 3 // 3
  |};

  declare export class Windows$Foundation$Metadata$MarshalingBehaviorAttribute {
    constructor(
      behavior: $Values<typeof Windows$Foundation$Metadata$MarshalingType>
    ): this;
  }

  declare export var Windows$Foundation$Metadata$MarshalingType: {|
    +none: 0, // 0
    +agile: 1, // 1
    +standard: 2, // 2
    +invalidMarshaling: 3 // 3
  |};

  declare export class Windows$Foundation$Metadata$ExclusiveToAttribute {
    constructor(typeName: string): this;
  }

  declare export class Windows$Foundation$Metadata$LengthIsAttribute {
    constructor(indexLengthParameter: number): this;
  }

  declare export class Windows$Foundation$Metadata$RangeAttribute {
    constructor(minValue: number, maxValue: number): this;
  }

  declare var npm$namespace$Windows$Foundation$Diagnostics: {
    ErrorOptions: typeof Windows$Foundation$Diagnostics$ErrorOptions,
    RuntimeBrokerErrorSettings: typeof Windows$Foundation$Diagnostics$RuntimeBrokerErrorSettings
  };

  declare export var Windows$Foundation$Diagnostics$ErrorOptions: {|
    +none: 0, // 0
    +suppressExceptions: 1, // 1
    +forceExceptions: 2, // 2
    +useSetErrorInfo: 3, // 3
    +suppressSetErrorInfo: 4 // 4
  |};

  declare export interface Windows$Foundation$Diagnostics$IErrorReportingSettings {
    setErrorOptions(
      value: $Values<typeof Windows$Foundation$Diagnostics$ErrorOptions>
    ): void;
    getErrorOptions(): $Values<
      typeof Windows$Foundation$Diagnostics$ErrorOptions
    >;
  }

  declare export class Windows$Foundation$Diagnostics$RuntimeBrokerErrorSettings
    mixins Windows$Foundation$Diagnostics$IErrorReportingSettings {
    setErrorOptions(
      value: $Values<typeof Windows$Foundation$Diagnostics$ErrorOptions>
    ): void;
    getErrorOptions(): $Values<
      typeof Windows$Foundation$Diagnostics$ErrorOptions
    >;
  }

  declare export interface Windows$Foundation$IPromise<T> {
    then<U>(
      success?: (value: T) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: T) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: T) => U,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: T) => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    done<U>(
      success?: (value: T) => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ): void;
    cancel(): void;
    onerror?: (eventInfo: CustomEvent) => void;
    addEventListener?: (
      type: string,
      listener: Function,
      capture?: boolean
    ) => void;
    dispatchEvent?: (type: string, details: any) => boolean;
    removeEventListener?: (
      eventType: string,
      listener: Function,
      capture?: boolean
    ) => void;
  }

  declare var npm$namespace$Windows$ApplicationModel: {
    SuspendingEventArgs: typeof Windows$ApplicationModel$SuspendingEventArgs,
    SuspendingDeferral: typeof Windows$ApplicationModel$SuspendingDeferral,
    SuspendingOperation: typeof Windows$ApplicationModel$SuspendingOperation,
    PackageId: typeof Windows$ApplicationModel$PackageId,
    Package: typeof Windows$ApplicationModel$Package,
    DesignMode: typeof Windows$ApplicationModel$DesignMode,
    Background: typeof npm$namespace$Windows$ApplicationModel$Background,
    Contacts: typeof npm$namespace$Windows$ApplicationModel$Contacts,
    DataTransfer: typeof npm$namespace$Windows$ApplicationModel$DataTransfer,
    Search: typeof npm$namespace$Windows$ApplicationModel$Search,
    Activation: typeof npm$namespace$Windows$ApplicationModel$Activation,
    Core: typeof npm$namespace$Windows$ApplicationModel$Core,
    Resources: typeof npm$namespace$Windows$ApplicationModel$Resources,
    Store: typeof npm$namespace$Windows$ApplicationModel$Store
  };

  declare var npm$namespace$Windows$ApplicationModel$Background: {
    BackgroundAccessStatus: typeof Windows$ApplicationModel$Background$BackgroundAccessStatus,
    BackgroundTaskCancellationReason: typeof Windows$ApplicationModel$Background$BackgroundTaskCancellationReason,
    SystemTriggerType: typeof Windows$ApplicationModel$Background$SystemTriggerType,
    SystemConditionType: typeof Windows$ApplicationModel$Background$SystemConditionType,
    BackgroundExecutionManager: typeof Windows$ApplicationModel$Background$BackgroundExecutionManager,
    BackgroundTaskRegistration: typeof Windows$ApplicationModel$Background$BackgroundTaskRegistration,
    BackgroundTaskDeferral: typeof Windows$ApplicationModel$Background$BackgroundTaskDeferral,
    BackgroundTaskProgressEventArgs: typeof Windows$ApplicationModel$Background$BackgroundTaskProgressEventArgs,
    BackgroundTaskCompletedEventArgs: typeof Windows$ApplicationModel$Background$BackgroundTaskCompletedEventArgs,
    BackgroundTaskBuilder: typeof Windows$ApplicationModel$Background$BackgroundTaskBuilder,
    SystemTrigger: typeof Windows$ApplicationModel$Background$SystemTrigger,
    SystemCondition: typeof Windows$ApplicationModel$Background$SystemCondition,
    NetworkOperatorNotificationTrigger: typeof Windows$ApplicationModel$Background$NetworkOperatorNotificationTrigger,
    TimeTrigger: typeof Windows$ApplicationModel$Background$TimeTrigger,
    MaintenanceTrigger: typeof Windows$ApplicationModel$Background$MaintenanceTrigger,
    NetworkOperatorHotspotAuthenticationTrigger: typeof Windows$ApplicationModel$Background$NetworkOperatorHotspotAuthenticationTrigger,
    PushNotificationTrigger: typeof Windows$ApplicationModel$Background$PushNotificationTrigger
  };

  declare export var Windows$ApplicationModel$Background$BackgroundAccessStatus: {|
    +unspecified: 0, // 0
    +allowedWithAlwaysOnRealTimeConnectivity: 1, // 1
    +allowedMayUseActiveRealTimeConnectivity: 2, // 2
    +denied: 3 // 3
  |};

  declare export interface Windows$ApplicationModel$Background$IBackgroundExecutionManagerStatics {
    requestAccessAsync(): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$ApplicationModel$Background$BackgroundAccessStatus>
    >;
    requestAccessAsync(
      applicationId: string
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$ApplicationModel$Background$BackgroundAccessStatus>
    >;
    removeAccess(): void;
    removeAccess(applicationId: string): void;
    getAccessStatus(): $Values<
      typeof Windows$ApplicationModel$Background$BackgroundAccessStatus
    >;
    getAccessStatus(
      applicationId: string
    ): $Values<
      typeof Windows$ApplicationModel$Background$BackgroundAccessStatus
    >;
  }

  declare export class Windows$ApplicationModel$Background$BackgroundExecutionManager {
    static requestAccessAsync(): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$ApplicationModel$Background$BackgroundAccessStatus>
    >;
    static requestAccessAsync(
      applicationId: string
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$ApplicationModel$Background$BackgroundAccessStatus>
    >;
    static removeAccess(): void;
    static removeAccess(applicationId: string): void;
    static getAccessStatus(): $Values<
      typeof Windows$ApplicationModel$Background$BackgroundAccessStatus
    >;
    static getAccessStatus(
      applicationId: string
    ): $Values<
      typeof Windows$ApplicationModel$Background$BackgroundAccessStatus
    >;
  }

  declare export var Windows$ApplicationModel$Background$BackgroundTaskCancellationReason: {|
    +abort: 0, // 0
    +terminating: 1, // 1
    +loggingOff: 2, // 2
    +servicingUpdate: 3 // 3
  |};

  declare export interface Windows$ApplicationModel$Background$BackgroundTaskCanceledEventHandler {
    (
      sender: Windows$ApplicationModel$Background$IBackgroundTaskInstance,
      reason: $Values<
        typeof Windows$ApplicationModel$Background$BackgroundTaskCancellationReason
      >
    ): void;
  }

  declare export interface Windows$ApplicationModel$Background$IBackgroundTaskInstance {
    instanceId: string;
    progress: number;
    suspendedCount: number;
    task: Windows$ApplicationModel$Background$BackgroundTaskRegistration;
    triggerDetails: any;
    oncanceled: any;
    getDeferral(): Windows$ApplicationModel$Background$BackgroundTaskDeferral;
  }

  declare export class Windows$ApplicationModel$Background$BackgroundTaskRegistration
    mixins Windows$ApplicationModel$Background$IBackgroundTaskRegistration {
    name: string;
    taskId: string;
    onprogress: any;
    oncompleted: any;
    unregister(cancelTask: boolean): void;
    static allTasks: Windows$Foundation$Collections$IMapView<
      string,
      Windows$ApplicationModel$Background$IBackgroundTaskRegistration
    >;
  }

  declare export class Windows$ApplicationModel$Background$BackgroundTaskDeferral
    mixins Windows$ApplicationModel$Background$IBackgroundTaskDeferral {
    complete(): void;
  }

  declare export interface Windows$ApplicationModel$Background$BackgroundTaskProgressEventHandler {
    (
      sender: Windows$ApplicationModel$Background$BackgroundTaskRegistration,
      args: Windows$ApplicationModel$Background$BackgroundTaskProgressEventArgs
    ): void;
  }

  declare export class Windows$ApplicationModel$Background$BackgroundTaskProgressEventArgs
    mixins Windows$ApplicationModel$Background$IBackgroundTaskProgressEventArgs {
    instanceId: string;
    progress: number;
  }

  declare export interface Windows$ApplicationModel$Background$BackgroundTaskCompletedEventHandler {
    (
      sender: Windows$ApplicationModel$Background$BackgroundTaskRegistration,
      args: Windows$ApplicationModel$Background$BackgroundTaskCompletedEventArgs
    ): void;
  }

  declare export class Windows$ApplicationModel$Background$BackgroundTaskCompletedEventArgs
    mixins Windows$ApplicationModel$Background$IBackgroundTaskCompletedEventArgs {
    instanceId: string;
    checkResult(): void;
  }

  declare export interface Windows$ApplicationModel$Background$IBackgroundTaskDeferral {
    complete(): void;
  }

  declare export interface Windows$ApplicationModel$Background$IBackgroundTask {
    run(
      taskInstance: Windows$ApplicationModel$Background$IBackgroundTaskInstance
    ): void;
  }

  declare export interface Windows$ApplicationModel$Background$IBackgroundTaskRegistration {
    name: string;
    taskId: string;
    onprogress: any;
    oncompleted: any;
    unregister(cancelTask: boolean): void;
  }

  declare export interface Windows$ApplicationModel$Background$IBackgroundTaskRegistrationStatics {
    allTasks: Windows$Foundation$Collections$IMapView<
      string,
      Windows$ApplicationModel$Background$IBackgroundTaskRegistration
    >;
  }

  declare export interface Windows$ApplicationModel$Background$IBackgroundTaskBuilder {
    name: string;
    taskEntryPoint: string;
    setTrigger(
      trigger: Windows$ApplicationModel$Background$IBackgroundTrigger
    ): void;
    addCondition(
      condition: Windows$ApplicationModel$Background$IBackgroundCondition
    ): void;
    register(): Windows$ApplicationModel$Background$BackgroundTaskRegistration;
  }

  declare export interface Windows$ApplicationModel$Background$IBackgroundTrigger {}

  declare export interface Windows$ApplicationModel$Background$IBackgroundCondition {}

  declare export interface Windows$ApplicationModel$Background$IBackgroundTaskCompletedEventArgs {
    instanceId: string;
    checkResult(): void;
  }

  declare export interface Windows$ApplicationModel$Background$IBackgroundTaskProgressEventArgs {
    instanceId: string;
    progress: number;
  }

  declare export class Windows$ApplicationModel$Background$BackgroundTaskBuilder
    mixins Windows$ApplicationModel$Background$IBackgroundTaskBuilder {
    name: string;
    taskEntryPoint: string;
    setTrigger(
      trigger: Windows$ApplicationModel$Background$IBackgroundTrigger
    ): void;
    addCondition(
      condition: Windows$ApplicationModel$Background$IBackgroundCondition
    ): void;
    register(): Windows$ApplicationModel$Background$BackgroundTaskRegistration;
  }

  declare export var Windows$ApplicationModel$Background$SystemTriggerType: {|
    +invalid: 0, // 0
    +smsReceived: 1, // 1
    +userPresent: 2, // 2
    +userAway: 3, // 3
    +networkStateChange: 4, // 4
    +controlChannelReset: 5, // 5
    +internetAvailable: 6, // 6
    +sessionConnected: 7, // 7
    +servicingComplete: 8, // 8
    +lockScreenApplicationAdded: 9, // 9
    +lockScreenApplicationRemoved: 10, // 10
    +timeZoneChange: 11, // 11
    +onlineIdConnectedStateChange: 12 // 12
  |};

  declare export var Windows$ApplicationModel$Background$SystemConditionType: {|
    +invalid: 0, // 0
    +userPresent: 1, // 1
    +userNotPresent: 2, // 2
    +internetAvailable: 3, // 3
    +internetNotAvailable: 4, // 4
    +sessionConnected: 5, // 5
    +sessionDisconnected: 6 // 6
  |};

  declare export type Windows$ApplicationModel$Background$ISystemTrigger = {
    oneShot: boolean,
    triggerType: $Values<
      typeof Windows$ApplicationModel$Background$SystemTriggerType
    >
  } & Windows$ApplicationModel$Background$IBackgroundTrigger;

  declare export interface Windows$ApplicationModel$Background$ISystemTriggerFactory {
    create(
      triggerType: $Values<
        typeof Windows$ApplicationModel$Background$SystemTriggerType
      >,
      oneShot: boolean
    ): Windows$ApplicationModel$Background$SystemTrigger;
  }

  declare export class Windows$ApplicationModel$Background$SystemTrigger
    mixins Windows$ApplicationModel$Background$ISystemTrigger,
      Windows$ApplicationModel$Background$IBackgroundTrigger {
    constructor(
      triggerType: $Values<
        typeof Windows$ApplicationModel$Background$SystemTriggerType
      >,
      oneShot: boolean
    ): this;
    oneShot: boolean;
    triggerType: $Values<
      typeof Windows$ApplicationModel$Background$SystemTriggerType
    >;
  }

  declare export type Windows$ApplicationModel$Background$ISystemCondition = {
    conditionType: $Values<
      typeof Windows$ApplicationModel$Background$SystemConditionType
    >
  } & Windows$ApplicationModel$Background$IBackgroundCondition;

  declare export interface Windows$ApplicationModel$Background$ISystemConditionFactory {
    create(
      conditionType: $Values<
        typeof Windows$ApplicationModel$Background$SystemConditionType
      >
    ): Windows$ApplicationModel$Background$SystemCondition;
  }

  declare export class Windows$ApplicationModel$Background$SystemCondition
    mixins Windows$ApplicationModel$Background$ISystemCondition,
      Windows$ApplicationModel$Background$IBackgroundCondition {
    constructor(
      conditionType: $Values<
        typeof Windows$ApplicationModel$Background$SystemConditionType
      >
    ): this;
    conditionType: $Values<
      typeof Windows$ApplicationModel$Background$SystemConditionType
    >;
  }

  declare export type Windows$ApplicationModel$Background$INetworkOperatorNotificationTrigger = {
    networkAccountId: string
  } & Windows$ApplicationModel$Background$IBackgroundTrigger;

  declare export interface Windows$ApplicationModel$Background$INetworkOperatorNotificationTriggerFactory {
    create(
      networkAccountId: string
    ): Windows$ApplicationModel$Background$NetworkOperatorNotificationTrigger;
  }

  declare export class Windows$ApplicationModel$Background$NetworkOperatorNotificationTrigger
    mixins Windows$ApplicationModel$Background$INetworkOperatorNotificationTrigger,
      Windows$ApplicationModel$Background$IBackgroundTrigger {
    constructor(networkAccountId: string): this;
    networkAccountId: string;
  }

  declare export type Windows$ApplicationModel$Background$ITimeTrigger = {
    freshnessTime: number,
    oneShot: boolean
  } & Windows$ApplicationModel$Background$IBackgroundTrigger;

  declare export interface Windows$ApplicationModel$Background$ITimeTriggerFactory {
    create(
      freshnessTime: number,
      oneShot: boolean
    ): Windows$ApplicationModel$Background$TimeTrigger;
  }

  declare export class Windows$ApplicationModel$Background$TimeTrigger
    mixins Windows$ApplicationModel$Background$ITimeTrigger,
      Windows$ApplicationModel$Background$IBackgroundTrigger {
    constructor(freshnessTime: number, oneShot: boolean): this;
    freshnessTime: number;
    oneShot: boolean;
  }

  declare export type Windows$ApplicationModel$Background$IMaintenanceTrigger = {
    freshnessTime: number,
    oneShot: boolean
  } & Windows$ApplicationModel$Background$IBackgroundTrigger;

  declare export interface Windows$ApplicationModel$Background$IMaintenanceTriggerFactory {
    create(
      freshnessTime: number,
      oneShot: boolean
    ): Windows$ApplicationModel$Background$MaintenanceTrigger;
  }

  declare export class Windows$ApplicationModel$Background$MaintenanceTrigger
    mixins Windows$ApplicationModel$Background$IMaintenanceTrigger,
      Windows$ApplicationModel$Background$IBackgroundTrigger {
    constructor(freshnessTime: number, oneShot: boolean): this;
    freshnessTime: number;
    oneShot: boolean;
  }

  declare export type Windows$ApplicationModel$Background$INetworkOperatorHotspotAuthenticationTrigger = {} & Windows$ApplicationModel$Background$IBackgroundTrigger;

  declare export class Windows$ApplicationModel$Background$NetworkOperatorHotspotAuthenticationTrigger
    mixins Windows$ApplicationModel$Background$INetworkOperatorHotspotAuthenticationTrigger,
      Windows$ApplicationModel$Background$IBackgroundTrigger {}

  declare export interface Windows$ApplicationModel$Background$IPushNotificationTriggerFactory {
    create(
      applicationId: string
    ): Windows$ApplicationModel$Background$PushNotificationTrigger;
  }

  declare export class Windows$ApplicationModel$Background$PushNotificationTrigger
    mixins Windows$ApplicationModel$Background$IBackgroundTrigger {
    constructor(applicationId: string): this;
    constructor(): this;
  }

  declare var npm$namespace$Windows$ApplicationModel$Contacts: {
    ContactFieldType: typeof Windows$ApplicationModel$Contacts$ContactFieldType,
    ContactFieldCategory: typeof Windows$ApplicationModel$Contacts$ContactFieldCategory,
    ContactSelectionMode: typeof Windows$ApplicationModel$Contacts$ContactSelectionMode,
    ContactField: typeof Windows$ApplicationModel$Contacts$ContactField,
    ContactLocationField: typeof Windows$ApplicationModel$Contacts$ContactLocationField,
    ContactInstantMessageField: typeof Windows$ApplicationModel$Contacts$ContactInstantMessageField,
    KnownContactField: typeof Windows$ApplicationModel$Contacts$KnownContactField,
    ContactInformation: typeof Windows$ApplicationModel$Contacts$ContactInformation,
    ContactPicker: typeof Windows$ApplicationModel$Contacts$ContactPicker,
    Contact: typeof Windows$ApplicationModel$Contacts$Contact,
    ContactFieldFactory: typeof Windows$ApplicationModel$Contacts$ContactFieldFactory,
    Provider: typeof npm$namespace$Windows$ApplicationModel$Contacts$Provider
  };

  declare export var Windows$ApplicationModel$Contacts$ContactFieldType: {|
    +email: 0, // 0
    +phoneNumber: 1, // 1
    +location: 2, // 2
    +instantMessage: 3, // 3
    +custom: 4 // 4
  |};

  declare export var Windows$ApplicationModel$Contacts$ContactFieldCategory: {|
    +none: 0, // 0
    +home: 1, // 1
    +work: 2, // 2
    +mobile: 3, // 3
    +other: 4 // 4
  |};

  declare export var Windows$ApplicationModel$Contacts$ContactSelectionMode: {|
    +contacts: 0, // 0
    +fields: 1 // 1
  |};

  declare export interface Windows$ApplicationModel$Contacts$IContactField {
    category: $Values<
      typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
    >;
    name: string;
    type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>;
    value: string;
  }

  declare export class Windows$ApplicationModel$Contacts$ContactField
    mixins Windows$ApplicationModel$Contacts$IContactField {
    constructor(
      value: string,
      type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>
    ): this;
    constructor(
      value: string,
      type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): this;
    constructor(
      name: string,
      value: string,
      type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): this;
    category: $Values<
      typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
    >;
    name: string;
    type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>;
    value: string;
  }

  declare export type Windows$ApplicationModel$Contacts$IContactLocationField = {
    city: string,
    country: string,
    postalCode: string,
    region: string,
    street: string,
    unstructuredAddress: string
  } & Windows$ApplicationModel$Contacts$IContactField;

  declare export class Windows$ApplicationModel$Contacts$ContactLocationField
    mixins Windows$ApplicationModel$Contacts$IContactLocationField,
      Windows$ApplicationModel$Contacts$IContactField {
    constructor(unstructuredAddress: string): this;
    constructor(
      unstructuredAddress: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): this;
    constructor(
      unstructuredAddress: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >,
      street: string,
      city: string,
      region: string,
      country: string,
      postalCode: string
    ): this;
    city: string;
    country: string;
    postalCode: string;
    region: string;
    street: string;
    unstructuredAddress: string;
    category: $Values<
      typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
    >;
    name: string;
    type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>;
    value: string;
  }

  declare export type Windows$ApplicationModel$Contacts$IContactInstantMessageField = {
    displayText: string,
    launchUri: Windows$Foundation$Uri,
    service: string,
    userName: string
  } & Windows$ApplicationModel$Contacts$IContactField;

  declare export class Windows$ApplicationModel$Contacts$ContactInstantMessageField
    mixins Windows$ApplicationModel$Contacts$IContactInstantMessageField,
      Windows$ApplicationModel$Contacts$IContactField {
    constructor(userName: string): this;
    constructor(
      userName: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): this;
    constructor(
      userName: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >,
      service: string,
      displayText: string,
      verb: Windows$Foundation$Uri
    ): this;
    displayText: string;
    launchUri: Windows$Foundation$Uri;
    service: string;
    userName: string;
    category: $Values<
      typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
    >;
    name: string;
    type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>;
    value: string;
  }

  declare export interface Windows$ApplicationModel$Contacts$IKnownContactFieldStatics {
    email: string;
    instantMessage: string;
    location: string;
    phoneNumber: string;
    convertNameToType(
      name: string
    ): $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>;
    convertTypeToName(
      type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>
    ): string;
  }

  declare export class Windows$ApplicationModel$Contacts$KnownContactField {
    static email: string;
    static instantMessage: string;
    static location: string;
    static phoneNumber: string;
    static convertNameToType(
      name: string
    ): $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>;
    static convertTypeToName(
      type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>
    ): string;
  }

  declare export interface Windows$ApplicationModel$Contacts$IContactInformation {
    customFields: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactField>;
    emails: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactField>;
    instantMessages: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactInstantMessageField>;
    locations: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactLocationField>;
    name: string;
    phoneNumbers: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactField>;
    getThumbnailAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IRandomAccessStreamWithContentType>;
    queryCustomFields(
      customName: string
    ): Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactField>;
  }

  declare export class Windows$ApplicationModel$Contacts$ContactInformation
    mixins Windows$ApplicationModel$Contacts$IContactInformation {
    customFields: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactField>;
    emails: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactField>;
    instantMessages: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactInstantMessageField>;
    locations: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactLocationField>;
    name: string;
    phoneNumbers: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactField>;
    getThumbnailAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IRandomAccessStreamWithContentType>;
    queryCustomFields(
      customName: string
    ): Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactField>;
  }

  declare export interface Windows$ApplicationModel$Contacts$IContactPicker {
    commitButtonText: string;
    desiredFields: Windows$Foundation$Collections$IVector<string>;
    selectionMode: $Values<
      typeof Windows$ApplicationModel$Contacts$ContactSelectionMode
    >;
    pickSingleContactAsync(): Windows$Foundation$IAsyncOperation<Windows$ApplicationModel$Contacts$ContactInformation>;
    pickMultipleContactsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactInformation>
    >;
  }

  declare export class Windows$ApplicationModel$Contacts$ContactPicker
    mixins Windows$ApplicationModel$Contacts$IContactPicker {
    commitButtonText: string;
    desiredFields: Windows$Foundation$Collections$IVector<string>;
    selectionMode: $Values<
      typeof Windows$ApplicationModel$Contacts$ContactSelectionMode
    >;
    pickSingleContactAsync(): Windows$Foundation$IAsyncOperation<Windows$ApplicationModel$Contacts$ContactInformation>;
    pickMultipleContactsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Contacts$ContactInformation>
    >;
  }

  declare export interface Windows$ApplicationModel$Contacts$IContact {
    fields: Windows$Foundation$Collections$IVector<Windows$ApplicationModel$Contacts$IContactField>;
    name: string;
    thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference;
  }

  declare export class Windows$ApplicationModel$Contacts$Contact
    mixins Windows$ApplicationModel$Contacts$IContact {
    fields: Windows$Foundation$Collections$IVector<Windows$ApplicationModel$Contacts$IContactField>;
    name: string;
    thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference;
  }

  declare export interface Windows$ApplicationModel$Contacts$IContactFieldFactory {
    createField(
      value: string,
      type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>
    ): Windows$ApplicationModel$Contacts$ContactField;
    createField(
      value: string,
      type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): Windows$ApplicationModel$Contacts$ContactField;
    createField(
      name: string,
      value: string,
      type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): Windows$ApplicationModel$Contacts$ContactField;
  }

  declare export interface Windows$ApplicationModel$Contacts$IContactLocationFieldFactory {
    createLocation(
      unstructuredAddress: string
    ): Windows$ApplicationModel$Contacts$ContactLocationField;
    createLocation(
      unstructuredAddress: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): Windows$ApplicationModel$Contacts$ContactLocationField;
    createLocation(
      unstructuredAddress: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >,
      street: string,
      city: string,
      region: string,
      country: string,
      postalCode: string
    ): Windows$ApplicationModel$Contacts$ContactLocationField;
  }

  declare export interface Windows$ApplicationModel$Contacts$IContactInstantMessageFieldFactory {
    createInstantMessage(
      userName: string
    ): Windows$ApplicationModel$Contacts$ContactInstantMessageField;
    createInstantMessage(
      userName: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): Windows$ApplicationModel$Contacts$ContactInstantMessageField;
    createInstantMessage(
      userName: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >,
      service: string,
      displayText: string,
      verb: Windows$Foundation$Uri
    ): Windows$ApplicationModel$Contacts$ContactInstantMessageField;
  }

  declare export class Windows$ApplicationModel$Contacts$ContactFieldFactory
    mixins Windows$ApplicationModel$Contacts$IContactFieldFactory,
      Windows$ApplicationModel$Contacts$IContactLocationFieldFactory,
      Windows$ApplicationModel$Contacts$IContactInstantMessageFieldFactory {
    createField(
      value: string,
      type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>
    ): Windows$ApplicationModel$Contacts$ContactField;
    createField(
      value: string,
      type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): Windows$ApplicationModel$Contacts$ContactField;
    createField(
      name: string,
      value: string,
      type: $Values<typeof Windows$ApplicationModel$Contacts$ContactFieldType>,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): Windows$ApplicationModel$Contacts$ContactField;
    createLocation(
      unstructuredAddress: string
    ): Windows$ApplicationModel$Contacts$ContactLocationField;
    createLocation(
      unstructuredAddress: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): Windows$ApplicationModel$Contacts$ContactLocationField;
    createLocation(
      unstructuredAddress: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >,
      street: string,
      city: string,
      region: string,
      country: string,
      postalCode: string
    ): Windows$ApplicationModel$Contacts$ContactLocationField;
    createInstantMessage(
      userName: string
    ): Windows$ApplicationModel$Contacts$ContactInstantMessageField;
    createInstantMessage(
      userName: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >
    ): Windows$ApplicationModel$Contacts$ContactInstantMessageField;
    createInstantMessage(
      userName: string,
      category: $Values<
        typeof Windows$ApplicationModel$Contacts$ContactFieldCategory
      >,
      service: string,
      displayText: string,
      verb: Windows$Foundation$Uri
    ): Windows$ApplicationModel$Contacts$ContactInstantMessageField;
  }

  declare var npm$namespace$Windows$ApplicationModel$Contacts$Provider: {
    AddContactResult: typeof Windows$ApplicationModel$Contacts$Provider$AddContactResult,
    ContactRemovedEventArgs: typeof Windows$ApplicationModel$Contacts$Provider$ContactRemovedEventArgs,
    ContactPickerUI: typeof Windows$ApplicationModel$Contacts$Provider$ContactPickerUI
  };
  declare export interface Windows$ApplicationModel$Contacts$Provider$IContactRemovedEventArgs {
    id: string;
  }

  declare export class Windows$ApplicationModel$Contacts$Provider$ContactRemovedEventArgs
    mixins Windows$ApplicationModel$Contacts$Provider$IContactRemovedEventArgs {
    id: string;
  }

  declare export var Windows$ApplicationModel$Contacts$Provider$AddContactResult: {|
    +added: 0, // 0
    +alreadyAdded: 1, // 1
    +unavailable: 2 // 2
  |};

  declare export interface Windows$ApplicationModel$Contacts$Provider$IContactPickerUI {
    desiredFields: Windows$Foundation$Collections$IVectorView<string>;
    selectionMode: $Values<
      typeof Windows$ApplicationModel$Contacts$ContactSelectionMode
    >;
    addContact(
      id: string,
      contact: Windows$ApplicationModel$Contacts$Contact
    ): $Values<
      typeof Windows$ApplicationModel$Contacts$Provider$AddContactResult
    >;
    removeContact(id: string): void;
    containsContact(id: string): boolean;
    oncontactremoved: any;
  }

  declare export class Windows$ApplicationModel$Contacts$Provider$ContactPickerUI
    mixins Windows$ApplicationModel$Contacts$Provider$IContactPickerUI {
    desiredFields: Windows$Foundation$Collections$IVectorView<string>;
    selectionMode: $Values<
      typeof Windows$ApplicationModel$Contacts$ContactSelectionMode
    >;
    addContact(
      id: string,
      contact: Windows$ApplicationModel$Contacts$Contact
    ): $Values<
      typeof Windows$ApplicationModel$Contacts$Provider$AddContactResult
    >;
    removeContact(id: string): void;
    containsContact(id: string): boolean;
    oncontactremoved: any;
  }

  declare var npm$namespace$Windows$ApplicationModel$DataTransfer: {
    DataPackageOperation: typeof Windows$ApplicationModel$DataTransfer$DataPackageOperation,
    StandardDataFormats: typeof Windows$ApplicationModel$DataTransfer$StandardDataFormats,
    DataPackagePropertySetView: typeof Windows$ApplicationModel$DataTransfer$DataPackagePropertySetView,
    DataPackagePropertySet: typeof Windows$ApplicationModel$DataTransfer$DataPackagePropertySet,
    DataProviderDeferral: typeof Windows$ApplicationModel$DataTransfer$DataProviderDeferral,
    DataProviderRequest: typeof Windows$ApplicationModel$DataTransfer$DataProviderRequest,
    OperationCompletedEventArgs: typeof Windows$ApplicationModel$DataTransfer$OperationCompletedEventArgs,
    DataPackageView: typeof Windows$ApplicationModel$DataTransfer$DataPackageView,
    DataPackage: typeof Windows$ApplicationModel$DataTransfer$DataPackage,
    HtmlFormatHelper: typeof Windows$ApplicationModel$DataTransfer$HtmlFormatHelper,
    Clipboard: typeof Windows$ApplicationModel$DataTransfer$Clipboard,
    DataRequestDeferral: typeof Windows$ApplicationModel$DataTransfer$DataRequestDeferral,
    DataRequest: typeof Windows$ApplicationModel$DataTransfer$DataRequest,
    DataRequestedEventArgs: typeof Windows$ApplicationModel$DataTransfer$DataRequestedEventArgs,
    TargetApplicationChosenEventArgs: typeof Windows$ApplicationModel$DataTransfer$TargetApplicationChosenEventArgs,
    DataTransferManager: typeof Windows$ApplicationModel$DataTransfer$DataTransferManager,
    ShareTarget: typeof npm$namespace$Windows$ApplicationModel$DataTransfer$ShareTarget
  };
  declare export interface Windows$ApplicationModel$DataTransfer$IStandardDataFormatsStatics {
    bitmap: string;
    html: string;
    rtf: string;
    storageItems: string;
    text: string;
    uri: string;
  }

  declare export class Windows$ApplicationModel$DataTransfer$StandardDataFormats {
    static bitmap: string;
    static html: string;
    static rtf: string;
    static storageItems: string;
    static text: string;
    static uri: string;
  }

  declare export type Windows$ApplicationModel$DataTransfer$IDataPackagePropertySetView = {
    applicationListingUri: Windows$Foundation$Uri,
    applicationName: string,
    description: string,
    fileTypes: Windows$Foundation$Collections$IVectorView<string>,
    thumbnail: Windows$Storage$Streams$RandomAccessStreamReference,
    title: string
  } & Windows$Foundation$Collections$IMapView<string, any> &
    Windows$Foundation$Collections$IIterable<
      Windows$Foundation$Collections$IKeyValuePair<string, any>
    >;

  declare export type Windows$ApplicationModel$DataTransfer$IDataPackagePropertySet = {
    applicationListingUri: Windows$Foundation$Uri,
    applicationName: string,
    description: string,
    fileTypes: Windows$Foundation$Collections$IVector<string>,
    thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference,
    title: string
  } & Windows$Foundation$Collections$IMap<string, any> &
    Windows$Foundation$Collections$IIterable<
      Windows$Foundation$Collections$IKeyValuePair<string, any>
    >;

  declare export class Windows$ApplicationModel$DataTransfer$DataPackagePropertySetView
    mixins Windows$ApplicationModel$DataTransfer$IDataPackagePropertySetView,
      Windows$Foundation$Collections$IMapView<string, any>,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      > {
    applicationListingUri: Windows$Foundation$Uri;
    applicationName: string;
    description: string;
    fileTypes: Windows$Foundation$Collections$IVectorView<string>;
    thumbnail: Windows$Storage$Streams$RandomAccessStreamReference;
    title: string;
    size: number;
    lookup(key: string): any;
    hasKey(key: string): boolean;
    split(): {
      first: Windows$Foundation$Collections$IMapView<string, any>,
      second: Windows$Foundation$Collections$IMapView<string, any>
    };
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<string, any>
    >;
  }

  declare export class Windows$ApplicationModel$DataTransfer$DataPackagePropertySet
    mixins Windows$ApplicationModel$DataTransfer$IDataPackagePropertySet,
      Windows$Foundation$Collections$IMap<string, any>,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      > {
    applicationListingUri: Windows$Foundation$Uri;
    applicationName: string;
    description: string;
    fileTypes: Windows$Foundation$Collections$IVector<string>;
    thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference;
    title: string;
    size: number;
    lookup(key: string): any;
    hasKey(key: string): boolean;
    getView(): Windows$Foundation$Collections$IMapView<string, any>;
    insert(key: string, value: any): boolean;
    remove(key: string): void;
    clear(): void;
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<string, any>
    >;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$IDataProviderDeferral {
    complete(): void;
  }

  declare export class Windows$ApplicationModel$DataTransfer$DataProviderDeferral
    mixins Windows$ApplicationModel$DataTransfer$IDataProviderDeferral {
    complete(): void;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$IDataProviderRequest {
    deadline: Date;
    formatId: string;
    getDeferral(): Windows$ApplicationModel$DataTransfer$DataProviderDeferral;
    setData(value: any): void;
  }

  declare export class Windows$ApplicationModel$DataTransfer$DataProviderRequest
    mixins Windows$ApplicationModel$DataTransfer$IDataProviderRequest {
    deadline: Date;
    formatId: string;
    getDeferral(): Windows$ApplicationModel$DataTransfer$DataProviderDeferral;
    setData(value: any): void;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$DataProviderHandler {
    (request: Windows$ApplicationModel$DataTransfer$DataProviderRequest): void;
  }

  declare export var Windows$ApplicationModel$DataTransfer$DataPackageOperation: {|
    +none: 0, // 0
    +copy: 1, // 1
    +move: 2, // 2
    +link: 3 // 3
  |};

  declare export interface Windows$ApplicationModel$DataTransfer$IOperationCompletedEventArgs {
    operation: $Values<
      typeof Windows$ApplicationModel$DataTransfer$DataPackageOperation
    >;
  }

  declare export class Windows$ApplicationModel$DataTransfer$OperationCompletedEventArgs
    mixins Windows$ApplicationModel$DataTransfer$IOperationCompletedEventArgs {
    operation: $Values<
      typeof Windows$ApplicationModel$DataTransfer$DataPackageOperation
    >;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$IDataPackageView {
    availableFormats: Windows$Foundation$Collections$IVectorView<string>;
    properties: Windows$ApplicationModel$DataTransfer$DataPackagePropertySetView;
    requestedOperation: $Values<
      typeof Windows$ApplicationModel$DataTransfer$DataPackageOperation
    >;
    reportOperationCompleted(
      value: $Values<
        typeof Windows$ApplicationModel$DataTransfer$DataPackageOperation
      >
    ): void;
    contains(formatId: string): boolean;
    getDataAsync(formatId: string): Windows$Foundation$IAsyncOperation<any>;
    getTextAsync(): Windows$Foundation$IAsyncOperation<string>;
    getTextAsync(formatId: string): Windows$Foundation$IAsyncOperation<string>;
    getUriAsync(): Windows$Foundation$IAsyncOperation<Windows$Foundation$Uri>;
    getHtmlFormatAsync(): Windows$Foundation$IAsyncOperation<string>;
    getResourceMapAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IMapView<
        string,
        Windows$Storage$Streams$RandomAccessStreamReference
      >
    >;
    getRtfAsync(): Windows$Foundation$IAsyncOperation<string>;
    getBitmapAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$RandomAccessStreamReference>;
    getStorageItemsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$IDataPackage {
    properties: Windows$ApplicationModel$DataTransfer$DataPackagePropertySet;
    requestedOperation: $Values<
      typeof Windows$ApplicationModel$DataTransfer$DataPackageOperation
    >;
    resourceMap: Windows$Foundation$Collections$IMap<
      string,
      Windows$Storage$Streams$RandomAccessStreamReference
    >;
    getView(): Windows$ApplicationModel$DataTransfer$DataPackageView;
    onoperationcompleted: any;
    ondestroyed: any;
    setData(formatId: string, value: any): void;
    setDataProvider(
      formatId: string,
      delayRenderer: Windows$ApplicationModel$DataTransfer$DataProviderHandler
    ): void;
    setText(value: string): void;
    setUri(value: Windows$Foundation$Uri): void;
    setHtmlFormat(value: string): void;
    setRtf(value: string): void;
    setBitmap(value: Windows$Storage$Streams$RandomAccessStreamReference): void;
    setStorageItems(
      value: Windows$Foundation$Collections$IIterable<Windows$Storage$IStorageItem>
    ): void;
    setStorageItems(
      value: Windows$Foundation$Collections$IIterable<Windows$Storage$IStorageItem>,
      readOnly: boolean
    ): void;
  }

  declare export class Windows$ApplicationModel$DataTransfer$DataPackageView
    mixins Windows$ApplicationModel$DataTransfer$IDataPackageView {
    availableFormats: Windows$Foundation$Collections$IVectorView<string>;
    properties: Windows$ApplicationModel$DataTransfer$DataPackagePropertySetView;
    requestedOperation: $Values<
      typeof Windows$ApplicationModel$DataTransfer$DataPackageOperation
    >;
    reportOperationCompleted(
      value: $Values<
        typeof Windows$ApplicationModel$DataTransfer$DataPackageOperation
      >
    ): void;
    contains(formatId: string): boolean;
    getDataAsync(formatId: string): Windows$Foundation$IAsyncOperation<any>;
    getTextAsync(): Windows$Foundation$IAsyncOperation<string>;
    getTextAsync(formatId: string): Windows$Foundation$IAsyncOperation<string>;
    getUriAsync(): Windows$Foundation$IAsyncOperation<Windows$Foundation$Uri>;
    getHtmlFormatAsync(): Windows$Foundation$IAsyncOperation<string>;
    getResourceMapAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IMapView<
        string,
        Windows$Storage$Streams$RandomAccessStreamReference
      >
    >;
    getRtfAsync(): Windows$Foundation$IAsyncOperation<string>;
    getBitmapAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$RandomAccessStreamReference>;
    getStorageItemsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >;
  }

  declare export class Windows$ApplicationModel$DataTransfer$DataPackage
    mixins Windows$ApplicationModel$DataTransfer$IDataPackage {
    properties: Windows$ApplicationModel$DataTransfer$DataPackagePropertySet;
    requestedOperation: $Values<
      typeof Windows$ApplicationModel$DataTransfer$DataPackageOperation
    >;
    resourceMap: Windows$Foundation$Collections$IMap<
      string,
      Windows$Storage$Streams$RandomAccessStreamReference
    >;
    getView(): Windows$ApplicationModel$DataTransfer$DataPackageView;
    onoperationcompleted: any;
    ondestroyed: any;
    setData(formatId: string, value: any): void;
    setDataProvider(
      formatId: string,
      delayRenderer: Windows$ApplicationModel$DataTransfer$DataProviderHandler
    ): void;
    setText(value: string): void;
    setUri(value: Windows$Foundation$Uri): void;
    setHtmlFormat(value: string): void;
    setRtf(value: string): void;
    setBitmap(value: Windows$Storage$Streams$RandomAccessStreamReference): void;
    setStorageItems(
      value: Windows$Foundation$Collections$IIterable<Windows$Storage$IStorageItem>
    ): void;
    setStorageItems(
      value: Windows$Foundation$Collections$IIterable<Windows$Storage$IStorageItem>,
      readOnly: boolean
    ): void;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$IHtmlFormatHelperStatics {
    getStaticFragment(htmlFormat: string): string;
    createHtmlFormat(htmlFragment: string): string;
  }

  declare export class Windows$ApplicationModel$DataTransfer$HtmlFormatHelper {
    static getStaticFragment(htmlFormat: string): string;
    static createHtmlFormat(htmlFragment: string): string;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$IClipboardStatics {
    getContent(): Windows$ApplicationModel$DataTransfer$DataPackageView;
    setContent(
      content: Windows$ApplicationModel$DataTransfer$DataPackage
    ): void;
    flush(): void;
    clear(): void;
    oncontentchanged: any;
  }

  declare export class Windows$ApplicationModel$DataTransfer$Clipboard {
    static getContent(): Windows$ApplicationModel$DataTransfer$DataPackageView;
    static setContent(
      content: Windows$ApplicationModel$DataTransfer$DataPackage
    ): void;
    static flush(): void;
    static clear(): void;
    static oncontentchanged: any;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$IDataRequestDeferral {
    complete(): void;
  }

  declare export class Windows$ApplicationModel$DataTransfer$DataRequestDeferral
    mixins Windows$ApplicationModel$DataTransfer$IDataRequestDeferral {
    complete(): void;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$IDataRequest {
    data: Windows$ApplicationModel$DataTransfer$DataPackage;
    deadline: Date;
    failWithDisplayText(value: string): void;
    getDeferral(): Windows$ApplicationModel$DataTransfer$DataRequestDeferral;
  }

  declare export class Windows$ApplicationModel$DataTransfer$DataRequest
    mixins Windows$ApplicationModel$DataTransfer$IDataRequest {
    data: Windows$ApplicationModel$DataTransfer$DataPackage;
    deadline: Date;
    failWithDisplayText(value: string): void;
    getDeferral(): Windows$ApplicationModel$DataTransfer$DataRequestDeferral;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$IDataRequestedEventArgs {
    request: Windows$ApplicationModel$DataTransfer$DataRequest;
  }

  declare export class Windows$ApplicationModel$DataTransfer$DataRequestedEventArgs
    mixins Windows$ApplicationModel$DataTransfer$IDataRequestedEventArgs {
    request: Windows$ApplicationModel$DataTransfer$DataRequest;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$ITargetApplicationChosenEventArgs {
    applicationName: string;
  }

  declare export class Windows$ApplicationModel$DataTransfer$TargetApplicationChosenEventArgs
    mixins Windows$ApplicationModel$DataTransfer$ITargetApplicationChosenEventArgs {
    applicationName: string;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$IDataTransferManager {
    ondatarequested: any;
    ontargetapplicationchosen: any;
  }

  declare export class Windows$ApplicationModel$DataTransfer$DataTransferManager
    mixins Windows$ApplicationModel$DataTransfer$IDataTransferManager {
    ondatarequested: any;
    ontargetapplicationchosen: any;
    static showShareUI(): void;
    static getForCurrentView(): Windows$ApplicationModel$DataTransfer$DataTransferManager;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$IDataTransferManagerStatics {
    showShareUI(): void;
    getForCurrentView(): Windows$ApplicationModel$DataTransfer$DataTransferManager;
  }

  declare var npm$namespace$Windows$ApplicationModel$DataTransfer$ShareTarget: {
    QuickLink: typeof Windows$ApplicationModel$DataTransfer$ShareTarget$QuickLink,
    ShareOperation: typeof Windows$ApplicationModel$DataTransfer$ShareTarget$ShareOperation
  };
  declare export interface Windows$ApplicationModel$DataTransfer$ShareTarget$IQuickLink {
    id: string;
    supportedDataFormats: Windows$Foundation$Collections$IVector<string>;
    supportedFileTypes: Windows$Foundation$Collections$IVector<string>;
    thumbnail: Windows$Storage$Streams$RandomAccessStreamReference;
    title: string;
  }

  declare export class Windows$ApplicationModel$DataTransfer$ShareTarget$QuickLink
    mixins Windows$ApplicationModel$DataTransfer$ShareTarget$IQuickLink {
    id: string;
    supportedDataFormats: Windows$Foundation$Collections$IVector<string>;
    supportedFileTypes: Windows$Foundation$Collections$IVector<string>;
    thumbnail: Windows$Storage$Streams$RandomAccessStreamReference;
    title: string;
  }

  declare export interface Windows$ApplicationModel$DataTransfer$ShareTarget$IShareOperation {
    data: Windows$ApplicationModel$DataTransfer$DataPackageView;
    quickLinkId: string;
    removeThisQuickLink(): void;
    reportStarted(): void;
    reportDataRetrieved(): void;
    reportSubmittedBackgroundTask(): void;
    reportCompleted(
      quicklink: Windows$ApplicationModel$DataTransfer$ShareTarget$QuickLink
    ): void;
    reportCompleted(): void;
    reportError(value: string): void;
  }

  declare export class Windows$ApplicationModel$DataTransfer$ShareTarget$ShareOperation
    mixins Windows$ApplicationModel$DataTransfer$ShareTarget$IShareOperation {
    data: Windows$ApplicationModel$DataTransfer$DataPackageView;
    quickLinkId: string;
    removeThisQuickLink(): void;
    reportStarted(): void;
    reportDataRetrieved(): void;
    reportSubmittedBackgroundTask(): void;
    reportCompleted(
      quicklink: Windows$ApplicationModel$DataTransfer$ShareTarget$QuickLink
    ): void;
    reportCompleted(): void;
    reportError(value: string): void;
  }

  declare var npm$namespace$Windows$ApplicationModel$Search: {
    SearchPaneQueryLinguisticDetails: typeof Windows$ApplicationModel$Search$SearchPaneQueryLinguisticDetails,
    SearchPaneVisibilityChangedEventArgs: typeof Windows$ApplicationModel$Search$SearchPaneVisibilityChangedEventArgs,
    SearchPaneQueryChangedEventArgs: typeof Windows$ApplicationModel$Search$SearchPaneQueryChangedEventArgs,
    SearchPaneQuerySubmittedEventArgs: typeof Windows$ApplicationModel$Search$SearchPaneQuerySubmittedEventArgs,
    SearchPaneResultSuggestionChosenEventArgs: typeof Windows$ApplicationModel$Search$SearchPaneResultSuggestionChosenEventArgs,
    SearchSuggestionCollection: typeof Windows$ApplicationModel$Search$SearchSuggestionCollection,
    SearchPaneSuggestionsRequestDeferral: typeof Windows$ApplicationModel$Search$SearchPaneSuggestionsRequestDeferral,
    SearchPaneSuggestionsRequest: typeof Windows$ApplicationModel$Search$SearchPaneSuggestionsRequest,
    SearchPaneSuggestionsRequestedEventArgs: typeof Windows$ApplicationModel$Search$SearchPaneSuggestionsRequestedEventArgs,
    LocalContentSuggestionSettings: typeof Windows$ApplicationModel$Search$LocalContentSuggestionSettings,
    SearchPane: typeof Windows$ApplicationModel$Search$SearchPane
  };
  declare export interface Windows$ApplicationModel$Search$ISearchPaneQueryLinguisticDetails {
    queryTextAlternatives: Windows$Foundation$Collections$IVectorView<string>;
    queryTextCompositionLength: number;
    queryTextCompositionStart: number;
  }

  declare export class Windows$ApplicationModel$Search$SearchPaneQueryLinguisticDetails
    mixins Windows$ApplicationModel$Search$ISearchPaneQueryLinguisticDetails {
    queryTextAlternatives: Windows$Foundation$Collections$IVectorView<string>;
    queryTextCompositionLength: number;
    queryTextCompositionStart: number;
  }

  declare export interface Windows$ApplicationModel$Search$ISearchPaneVisibilityChangedEventArgs {
    visible: boolean;
  }

  declare export class Windows$ApplicationModel$Search$SearchPaneVisibilityChangedEventArgs
    mixins Windows$ApplicationModel$Search$ISearchPaneVisibilityChangedEventArgs {
    visible: boolean;
  }

  declare export interface Windows$ApplicationModel$Search$ISearchPaneQueryChangedEventArgs {
    language: string;
    linguisticDetails: Windows$ApplicationModel$Search$SearchPaneQueryLinguisticDetails;
    queryText: string;
  }

  declare export class Windows$ApplicationModel$Search$SearchPaneQueryChangedEventArgs
    mixins Windows$ApplicationModel$Search$ISearchPaneQueryChangedEventArgs {
    language: string;
    linguisticDetails: Windows$ApplicationModel$Search$SearchPaneQueryLinguisticDetails;
    queryText: string;
  }

  declare export interface Windows$ApplicationModel$Search$ISearchPaneQuerySubmittedEventArgs {
    language: string;
    queryText: string;
  }

  declare export class Windows$ApplicationModel$Search$SearchPaneQuerySubmittedEventArgs
    mixins Windows$ApplicationModel$Search$ISearchPaneQuerySubmittedEventArgs {
    language: string;
    queryText: string;
  }

  declare export interface Windows$ApplicationModel$Search$ISearchPaneResultSuggestionChosenEventArgs {
    tag: string;
  }

  declare export class Windows$ApplicationModel$Search$SearchPaneResultSuggestionChosenEventArgs
    mixins Windows$ApplicationModel$Search$ISearchPaneResultSuggestionChosenEventArgs {
    tag: string;
  }

  declare export interface Windows$ApplicationModel$Search$ISearchSuggestionCollection {
    size: number;
    appendQuerySuggestion(text: string): void;
    appendQuerySuggestions(
      suggestions: Windows$Foundation$Collections$IIterable<string>
    ): void;
    appendResultSuggestion(
      text: string,
      detailText: string,
      tag: string,
      image: Windows$Storage$Streams$IRandomAccessStreamReference,
      imageAlternateText: string
    ): void;
    appendSearchSeparator(label: string): void;
  }

  declare export class Windows$ApplicationModel$Search$SearchSuggestionCollection
    mixins Windows$ApplicationModel$Search$ISearchSuggestionCollection {
    size: number;
    appendQuerySuggestion(text: string): void;
    appendQuerySuggestions(
      suggestions: Windows$Foundation$Collections$IIterable<string>
    ): void;
    appendResultSuggestion(
      text: string,
      detailText: string,
      tag: string,
      image: Windows$Storage$Streams$IRandomAccessStreamReference,
      imageAlternateText: string
    ): void;
    appendSearchSeparator(label: string): void;
  }

  declare export interface Windows$ApplicationModel$Search$ISearchPaneSuggestionsRequestDeferral {
    complete(): void;
  }

  declare export interface Windows$ApplicationModel$Search$ISearchPaneSuggestionsRequest {
    isCanceled: boolean;
    searchSuggestionCollection: Windows$ApplicationModel$Search$SearchSuggestionCollection;
    getDeferral(): Windows$ApplicationModel$Search$SearchPaneSuggestionsRequestDeferral;
  }

  declare export class Windows$ApplicationModel$Search$SearchPaneSuggestionsRequestDeferral
    mixins Windows$ApplicationModel$Search$ISearchPaneSuggestionsRequestDeferral {
    complete(): void;
  }

  declare export class Windows$ApplicationModel$Search$SearchPaneSuggestionsRequest
    mixins Windows$ApplicationModel$Search$ISearchPaneSuggestionsRequest {
    isCanceled: boolean;
    searchSuggestionCollection: Windows$ApplicationModel$Search$SearchSuggestionCollection;
    getDeferral(): Windows$ApplicationModel$Search$SearchPaneSuggestionsRequestDeferral;
  }

  declare export type Windows$ApplicationModel$Search$ISearchPaneSuggestionsRequestedEventArgs = {
    request: Windows$ApplicationModel$Search$SearchPaneSuggestionsRequest
  } & Windows$ApplicationModel$Search$ISearchPaneQueryChangedEventArgs;

  declare export class Windows$ApplicationModel$Search$SearchPaneSuggestionsRequestedEventArgs
    mixins Windows$ApplicationModel$Search$ISearchPaneSuggestionsRequestedEventArgs,
      Windows$ApplicationModel$Search$ISearchPaneQueryChangedEventArgs {
    request: Windows$ApplicationModel$Search$SearchPaneSuggestionsRequest;
    language: string;
    linguisticDetails: Windows$ApplicationModel$Search$SearchPaneQueryLinguisticDetails;
    queryText: string;
  }

  declare export interface Windows$ApplicationModel$Search$ILocalContentSuggestionSettings {
    aqsFilter: string;
    enabled: boolean;
    locations: Windows$Foundation$Collections$IVector<Windows$Storage$StorageFolder>;
    propertiesToMatch: Windows$Foundation$Collections$IVector<string>;
  }

  declare export class Windows$ApplicationModel$Search$LocalContentSuggestionSettings
    mixins Windows$ApplicationModel$Search$ILocalContentSuggestionSettings {
    aqsFilter: string;
    enabled: boolean;
    locations: Windows$Foundation$Collections$IVector<Windows$Storage$StorageFolder>;
    propertiesToMatch: Windows$Foundation$Collections$IVector<string>;
  }

  declare export interface Windows$ApplicationModel$Search$ISearchPaneStatics {
    getForCurrentView(): Windows$ApplicationModel$Search$SearchPane;
  }

  declare export class Windows$ApplicationModel$Search$SearchPane
    mixins Windows$ApplicationModel$Search$ISearchPane {
    language: string;
    placeholderText: string;
    queryText: string;
    searchHistoryContext: string;
    searchHistoryEnabled: boolean;
    showOnKeyboardInput: boolean;
    visible: boolean;
    onvisibilitychanged: any;
    onquerychanged: any;
    onsuggestionsrequested: any;
    onquerysubmitted: any;
    onresultsuggestionchosen: any;
    setLocalContentSuggestionSettings(
      settings: Windows$ApplicationModel$Search$LocalContentSuggestionSettings
    ): void;
    show(): void;
    show(query: string): void;
    trySetQueryText(query: string): boolean;
    static getForCurrentView(): Windows$ApplicationModel$Search$SearchPane;
  }

  declare export interface Windows$ApplicationModel$Search$ISearchPane {
    language: string;
    placeholderText: string;
    queryText: string;
    searchHistoryContext: string;
    searchHistoryEnabled: boolean;
    showOnKeyboardInput: boolean;
    visible: boolean;
    onvisibilitychanged: any;
    onquerychanged: any;
    onsuggestionsrequested: any;
    onquerysubmitted: any;
    onresultsuggestionchosen: any;
    setLocalContentSuggestionSettings(
      settings: Windows$ApplicationModel$Search$LocalContentSuggestionSettings
    ): void;
    show(): void;
    show(query: string): void;
    trySetQueryText(query: string): boolean;
  }

  declare var npm$namespace$Windows$ApplicationModel$Activation: {
    ApplicationExecutionState: typeof Windows$ApplicationModel$Activation$ApplicationExecutionState,
    ActivationKind: typeof Windows$ApplicationModel$Activation$ActivationKind,
    SplashScreen: typeof Windows$ApplicationModel$Activation$SplashScreen,
    LaunchActivatedEventArgs: typeof Windows$ApplicationModel$Activation$LaunchActivatedEventArgs,
    SearchActivatedEventArgs: typeof Windows$ApplicationModel$Activation$SearchActivatedEventArgs,
    ShareTargetActivatedEventArgs: typeof Windows$ApplicationModel$Activation$ShareTargetActivatedEventArgs,
    FileActivatedEventArgs: typeof Windows$ApplicationModel$Activation$FileActivatedEventArgs,
    ProtocolActivatedEventArgs: typeof Windows$ApplicationModel$Activation$ProtocolActivatedEventArgs,
    FileOpenPickerActivatedEventArgs: typeof Windows$ApplicationModel$Activation$FileOpenPickerActivatedEventArgs,
    FileSavePickerActivatedEventArgs: typeof Windows$ApplicationModel$Activation$FileSavePickerActivatedEventArgs,
    CachedFileUpdaterActivatedEventArgs: typeof Windows$ApplicationModel$Activation$CachedFileUpdaterActivatedEventArgs,
    ContactPickerActivatedEventArgs: typeof Windows$ApplicationModel$Activation$ContactPickerActivatedEventArgs,
    DeviceActivatedEventArgs: typeof Windows$ApplicationModel$Activation$DeviceActivatedEventArgs,
    PrintTaskSettingsActivatedEventArgs: typeof Windows$ApplicationModel$Activation$PrintTaskSettingsActivatedEventArgs,
    CameraSettingsActivatedEventArgs: typeof Windows$ApplicationModel$Activation$CameraSettingsActivatedEventArgs
  };
  declare export interface Windows$ApplicationModel$Activation$ISplashScreen {
    imageLocation: Windows$Foundation$Rect;
    ondismissed: any;
  }

  declare export class Windows$ApplicationModel$Activation$SplashScreen
    mixins Windows$ApplicationModel$Activation$ISplashScreen {
    imageLocation: Windows$Foundation$Rect;
    ondismissed: any;
  }

  declare export var Windows$ApplicationModel$Activation$ApplicationExecutionState: {|
    +notRunning: 0, // 0
    +running: 1, // 1
    +suspended: 2, // 2
    +terminated: 3, // 3
    +closedByUser: 4 // 4
  |};

  declare export var Windows$ApplicationModel$Activation$ActivationKind: {|
    +launch: 0, // 0
    +search: 1, // 1
    +shareTarget: 2, // 2
    +file: 3, // 3
    +protocol: 4, // 4
    +fileOpenPicker: 5, // 5
    +fileSavePicker: 6, // 6
    +cachedFileUpdater: 7, // 7
    +contactPicker: 8, // 8
    +device: 9, // 9
    +printTaskSettings: 10, // 10
    +cameraSettings: 11, // 11
    +restrictedLaunch: 12, // 12
    +appointmentsProvider: 13, // 13
    +contact: 14, // 14
    +lockScreenCall: 15, // 15
    +voiceCommand: 16, // 16
    +lockScreen: 17, // 17
    +pickerReturned: 18, // 18
    +walletAction: 19, // 19
    +pickFileContinuation: 20, // 20
    +pickSaveFileContinuation: 21, // 21
    +pickFolderContinuation: 22, // 22
    +webAuthenticationBrokerContinuation: 23, // 23
    +webAccountProvider: 24, // 24
    +componentUI: 25, // 25
    +protocolForResults: 26, // 26
    +toastNotification: 27, // 27
    +print3DWorkflow: 28, // 28
    +dialReceiver: 29 // 29
  |};

  declare export interface Windows$ApplicationModel$Activation$IActivatedEventArgs {
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$ILaunchActivatedEventArgs = {
    arguments: string,
    tileId: string
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$LaunchActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$ILaunchActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    arguments: string;
    tileId: string;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$ISearchActivatedEventArgs = {
    language: string,
    queryText: string
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$SearchActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$ISearchActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    language: string;
    queryText: string;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$IShareTargetActivatedEventArgs = {
    shareOperation: Windows$ApplicationModel$DataTransfer$ShareTarget$ShareOperation
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$ShareTargetActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IShareTargetActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    shareOperation: Windows$ApplicationModel$DataTransfer$ShareTarget$ShareOperation;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$IFileActivatedEventArgs = {
    files: Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>,
    verb: string
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$FileActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IFileActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    files: Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>;
    verb: string;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$IProtocolActivatedEventArgs = {
    uri: Windows$Foundation$Uri
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$ProtocolActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IProtocolActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    uri: Windows$Foundation$Uri;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$IFileOpenPickerActivatedEventArgs = {
    fileOpenPickerUI: Windows$Storage$Pickers$Provider$FileOpenPickerUI
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$FileOpenPickerActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IFileOpenPickerActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    fileOpenPickerUI: Windows$Storage$Pickers$Provider$FileOpenPickerUI;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$IFileSavePickerActivatedEventArgs = {
    fileSavePickerUI: Windows$Storage$Pickers$Provider$FileSavePickerUI
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$FileSavePickerActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IFileSavePickerActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    fileSavePickerUI: Windows$Storage$Pickers$Provider$FileSavePickerUI;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$ICachedFileUpdaterActivatedEventArgs = {
    cachedFileUpdaterUI: Windows$Storage$Provider$CachedFileUpdaterUI
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$CachedFileUpdaterActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$ICachedFileUpdaterActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    cachedFileUpdaterUI: Windows$Storage$Provider$CachedFileUpdaterUI;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$IContactPickerActivatedEventArgs = {
    contactPickerUI: Windows$ApplicationModel$Contacts$Provider$ContactPickerUI
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$ContactPickerActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IContactPickerActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    contactPickerUI: Windows$ApplicationModel$Contacts$Provider$ContactPickerUI;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$IDeviceActivatedEventArgs = {
    deviceInformationId: string,
    verb: string
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$DeviceActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IDeviceActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    deviceInformationId: string;
    verb: string;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$IPrintTaskSettingsActivatedEventArgs = {
    configuration: Windows$Devices$Printers$Extensions$PrintTaskConfiguration
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$PrintTaskSettingsActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IPrintTaskSettingsActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    configuration: Windows$Devices$Printers$Extensions$PrintTaskConfiguration;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare export type Windows$ApplicationModel$Activation$ICameraSettingsActivatedEventArgs = {
    videoDeviceController: any,
    videoDeviceExtension: any
  } & Windows$ApplicationModel$Activation$IActivatedEventArgs;

  declare export class Windows$ApplicationModel$Activation$CameraSettingsActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$ICameraSettingsActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs {
    videoDeviceController: any;
    videoDeviceExtension: any;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
  }

  declare var npm$namespace$Windows$ApplicationModel$Core: {
    CoreApplication: typeof Windows$ApplicationModel$Core$CoreApplication,
    CoreApplicationView: typeof Windows$ApplicationModel$Core$CoreApplicationView
  };
  declare export class Windows$ApplicationModel$Core$CoreApplication {
    static mainView: Windows$ApplicationModel$Core$CoreApplicationView;
    static views: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Core$CoreApplicationView>;
    static id: string;
    static properties: Windows$Foundation$Collections$IPropertySet;
    static incrementApplicationUseCount(): void;
    static decrementApplicationUseCount(): void;
    static createNewView(
      runtimeType: string,
      entryPoint: string
    ): Windows$ApplicationModel$Core$CoreApplicationView;
    static exit(): void;
    static onexiting: any;
    static onsuspending: any;
    static onresuming: any;
    static getCurrentView(): Windows$ApplicationModel$Core$CoreApplicationView;
    static run(
      viewSource: Windows$ApplicationModel$Core$IFrameworkViewSource
    ): void;
    static runWithActivationFactories(
      activationFactoryCallback: Windows$Foundation$IGetActivationFactory
    ): void;
  }

  declare export class Windows$ApplicationModel$Core$CoreApplicationView
    mixins Windows$ApplicationModel$Core$ICoreApplicationView {
    coreWindow: Windows$UI$Core$CoreWindow;
    isHosted: boolean;
    isMain: boolean;
    onactivated: any;
  }

  declare export interface Windows$ApplicationModel$Core$IFrameworkView {
    initialize(
      applicationView: Windows$ApplicationModel$Core$CoreApplicationView
    ): void;
    setWindow(window: Windows$UI$Core$CoreWindow): void;
    load(entryPoint: string): void;
    run(): void;
    uninitialize(): void;
  }

  declare export interface Windows$ApplicationModel$Core$IFrameworkViewSource {
    createView(): Windows$ApplicationModel$Core$IFrameworkView;
  }

  declare export interface Windows$ApplicationModel$Core$ICoreApplication {
    id: string;
    properties: Windows$Foundation$Collections$IPropertySet;
    onsuspending: any;
    onresuming: any;
    getCurrentView(): Windows$ApplicationModel$Core$CoreApplicationView;
    run(viewSource: Windows$ApplicationModel$Core$IFrameworkViewSource): void;
    runWithActivationFactories(
      activationFactoryCallback: Windows$Foundation$IGetActivationFactory
    ): void;
  }

  declare export interface Windows$ApplicationModel$Core$ICoreApplicationUseCount {
    incrementApplicationUseCount(): void;
    decrementApplicationUseCount(): void;
  }

  declare export interface Windows$ApplicationModel$Core$ICoreApplicationExit {
    exit(): void;
    onexiting: any;
  }

  declare export interface Windows$ApplicationModel$Core$ICoreImmersiveApplication {
    mainView: Windows$ApplicationModel$Core$CoreApplicationView;
    views: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Core$CoreApplicationView>;
    createNewView(
      runtimeType: string,
      entryPoint: string
    ): Windows$ApplicationModel$Core$CoreApplicationView;
  }

  declare export interface Windows$ApplicationModel$Core$ICoreApplicationView {
    coreWindow: Windows$UI$Core$CoreWindow;
    isHosted: boolean;
    isMain: boolean;
    onactivated: any;
  }

  declare export class Windows$ApplicationModel$SuspendingEventArgs
    mixins Windows$ApplicationModel$ISuspendingEventArgs {
    suspendingOperation: Windows$ApplicationModel$SuspendingOperation;
  }

  declare export interface Windows$ApplicationModel$ISuspendingDeferral {
    complete(): void;
  }

  declare export class Windows$ApplicationModel$SuspendingDeferral
    mixins Windows$ApplicationModel$ISuspendingDeferral {
    complete(): void;
  }

  declare export interface Windows$ApplicationModel$ISuspendingOperation {
    deadline: Date;
    getDeferral(): Windows$ApplicationModel$SuspendingDeferral;
  }

  declare export class Windows$ApplicationModel$SuspendingOperation
    mixins Windows$ApplicationModel$ISuspendingOperation {
    deadline: Date;
    getDeferral(): Windows$ApplicationModel$SuspendingDeferral;
  }

  declare export interface Windows$ApplicationModel$ISuspendingEventArgs {
    suspendingOperation: Windows$ApplicationModel$SuspendingOperation;
  }

  declare export interface Windows$ApplicationModel$PackageVersion {
    major: number;
    minor: number;
    build: number;
    revision: number;
  }

  declare export interface Windows$ApplicationModel$IPackageId {
    architecture: $Values<typeof Windows$System$ProcessorArchitecture>;
    familyName: string;
    fullName: string;
    name: string;
    publisher: string;
    publisherId: string;
    resourceId: string;
    version: Windows$ApplicationModel$PackageVersion;
  }

  declare export class Windows$ApplicationModel$PackageId
    mixins Windows$ApplicationModel$IPackageId {
    architecture: $Values<typeof Windows$System$ProcessorArchitecture>;
    familyName: string;
    fullName: string;
    name: string;
    publisher: string;
    publisherId: string;
    resourceId: string;
    version: Windows$ApplicationModel$PackageVersion;
  }

  declare export interface Windows$ApplicationModel$IPackage {
    dependencies: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Package>;
    description: string;
    displayName: string;
    id: Windows$ApplicationModel$PackageId;
    installedLocation: Windows$Storage$StorageFolder;
    isBundle: boolean;
    isDevelopmentMode: boolean;
    isFramework: boolean;
    isResourcePackage: boolean;
    logo: Windows$Foundation$Uri;
    publisherDisplayName: string;
  }

  declare export class Windows$ApplicationModel$Package
    mixins Windows$ApplicationModel$IPackage {
    static current: Windows$ApplicationModel$Package;
    dependencies: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Package>;
    description: string;
    displayName: string;
    id: Windows$ApplicationModel$PackageId;
    installedLocation: Windows$Storage$StorageFolder;
    isBundle: boolean;
    isDevelopmentMode: boolean;
    isFramework: boolean;
    isResourcePackage: boolean;
    logo: Windows$Foundation$Uri;
    publisherDisplayName: string;
  }

  declare export interface Windows$ApplicationModel$IPackageStatics {
    current: Windows$ApplicationModel$Package;
  }

  declare export interface Windows$ApplicationModel$IDesignModeStatics {
    designModeEnabled: boolean;
  }

  declare export class Windows$ApplicationModel$DesignMode {
    static designModeEnabled: boolean;
  }

  declare var npm$namespace$Windows$ApplicationModel$Resources: {
    ResourceLoader: typeof Windows$ApplicationModel$Resources$ResourceLoader,
    Core: typeof npm$namespace$Windows$ApplicationModel$Resources$Core,
    Management: typeof npm$namespace$Windows$ApplicationModel$Resources$Management
  };
  declare export interface Windows$ApplicationModel$Resources$IResourceLoader {
    getString(resource: string): string;
  }

  declare export class Windows$ApplicationModel$Resources$ResourceLoader
    mixins Windows$ApplicationModel$Resources$IResourceLoader {
    constructor(name: string): this;
    constructor(): this;
    getString(resource: string): string;
    static getStringForReference(uri: Windows$Foundation$Uri): string;
  }

  declare export interface Windows$ApplicationModel$Resources$IResourceLoaderStatics {
    getStringForReference(uri: Windows$Foundation$Uri): string;
  }

  declare export interface Windows$ApplicationModel$Resources$IResourceLoaderFactory {
    createResourceLoaderByName(
      name: string
    ): Windows$ApplicationModel$Resources$ResourceLoader;
  }

  declare var npm$namespace$Windows$ApplicationModel$Resources$Core: {
    ResourceMap: typeof Windows$ApplicationModel$Resources$Core$ResourceMap,
    ResourceContext: typeof Windows$ApplicationModel$Resources$Core$ResourceContext,
    ResourceManager: typeof Windows$ApplicationModel$Resources$Core$ResourceManager,
    ResourceQualifier: typeof Windows$ApplicationModel$Resources$Core$ResourceQualifier,
    ResourceCandidate: typeof Windows$ApplicationModel$Resources$Core$ResourceCandidate,
    NamedResource: typeof Windows$ApplicationModel$Resources$Core$NamedResource,
    ResourceMapIterator: typeof Windows$ApplicationModel$Resources$Core$ResourceMapIterator,
    ResourceMapMapView: typeof Windows$ApplicationModel$Resources$Core$ResourceMapMapView,
    ResourceMapMapViewIterator: typeof Windows$ApplicationModel$Resources$Core$ResourceMapMapViewIterator,
    ResourceQualifierObservableMap: typeof Windows$ApplicationModel$Resources$Core$ResourceQualifierObservableMap,
    ResourceQualifierMapView: typeof Windows$ApplicationModel$Resources$Core$ResourceQualifierMapView,
    ResourceQualifierVectorView: typeof Windows$ApplicationModel$Resources$Core$ResourceQualifierVectorView,
    ResourceCandidateVectorView: typeof Windows$ApplicationModel$Resources$Core$ResourceCandidateVectorView,
    ResourceContextLanguagesVectorView: typeof Windows$ApplicationModel$Resources$Core$ResourceContextLanguagesVectorView
  };
  declare export interface Windows$ApplicationModel$Resources$Core$IResourceManager {
    allResourceMaps: Windows$Foundation$Collections$IMapView<
      string,
      Windows$ApplicationModel$Resources$Core$ResourceMap
    >;
    defaultContext: Windows$ApplicationModel$Resources$Core$ResourceContext;
    mainResourceMap: Windows$ApplicationModel$Resources$Core$ResourceMap;
    loadPriFiles(
      files: Windows$Foundation$Collections$IIterable<Windows$Storage$IStorageFile>
    ): void;
    unloadPriFiles(
      files: Windows$Foundation$Collections$IIterable<Windows$Storage$IStorageFile>
    ): void;
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceMap
    mixins Windows$ApplicationModel$Resources$Core$IResourceMap,
      Windows$Foundation$Collections$IMapView<
        string,
        Windows$ApplicationModel$Resources$Core$NamedResource
      >,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$ApplicationModel$Resources$Core$NamedResource
        >
      > {
    uri: Windows$Foundation$Uri;
    size: number;
    getValue(
      resource: string
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate;
    getValue(
      resource: string,
      context: Windows$ApplicationModel$Resources$Core$ResourceContext
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate;
    getSubtree(
      reference: string
    ): Windows$ApplicationModel$Resources$Core$ResourceMap;
    lookup(key: string): Windows$ApplicationModel$Resources$Core$NamedResource;
    hasKey(key: string): boolean;
    split(): {
      first: Windows$Foundation$Collections$IMapView<
        string,
        Windows$ApplicationModel$Resources$Core$NamedResource
      >,
      second: Windows$Foundation$Collections$IMapView<
        string,
        Windows$ApplicationModel$Resources$Core$NamedResource
      >
    };
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<
        string,
        Windows$ApplicationModel$Resources$Core$NamedResource
      >
    >;
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceContext
    mixins Windows$ApplicationModel$Resources$Core$IResourceContext {
    languages: Windows$Foundation$Collections$IVectorView<string>;
    qualifierValues: Windows$Foundation$Collections$IObservableMap<
      string,
      string
    >;
    reset(): void;
    reset(
      qualifierNames: Windows$Foundation$Collections$IIterable<string>
    ): void;
    overrideToMatch(
      result: Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Resources$Core$ResourceQualifier>
    ): void;
    clone(): Windows$ApplicationModel$Resources$Core$ResourceContext;
    static createMatchingContext(
      result: Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Resources$Core$ResourceQualifier>
    ): Windows$ApplicationModel$Resources$Core$ResourceContext;
  }

  declare export interface Windows$ApplicationModel$Resources$Core$IResourceManagerStatics {
    current: Windows$ApplicationModel$Resources$Core$ResourceManager;
    isResourceReference(resourceReference: string): boolean;
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceManager
    mixins Windows$ApplicationModel$Resources$Core$IResourceManager {
    allResourceMaps: Windows$Foundation$Collections$IMapView<
      string,
      Windows$ApplicationModel$Resources$Core$ResourceMap
    >;
    defaultContext: Windows$ApplicationModel$Resources$Core$ResourceContext;
    mainResourceMap: Windows$ApplicationModel$Resources$Core$ResourceMap;
    loadPriFiles(
      files: Windows$Foundation$Collections$IIterable<Windows$Storage$IStorageFile>
    ): void;
    unloadPriFiles(
      files: Windows$Foundation$Collections$IIterable<Windows$Storage$IStorageFile>
    ): void;
    static current: Windows$ApplicationModel$Resources$Core$ResourceManager;
    static isResourceReference(resourceReference: string): boolean;
  }

  declare export interface Windows$ApplicationModel$Resources$Core$IResourceQualifier {
    isDefault: boolean;
    isMatch: boolean;
    qualifierName: string;
    qualifierValue: string;
    score: number;
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceQualifier
    mixins Windows$ApplicationModel$Resources$Core$IResourceQualifier {
    isDefault: boolean;
    isMatch: boolean;
    qualifierName: string;
    qualifierValue: string;
    score: number;
  }

  declare export interface Windows$ApplicationModel$Resources$Core$IResourceContext {
    languages: Windows$Foundation$Collections$IVectorView<string>;
    qualifierValues: Windows$Foundation$Collections$IObservableMap<
      string,
      string
    >;
    reset(): void;
    reset(
      qualifierNames: Windows$Foundation$Collections$IIterable<string>
    ): void;
    overrideToMatch(
      result: Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Resources$Core$ResourceQualifier>
    ): void;
    clone(): Windows$ApplicationModel$Resources$Core$ResourceContext;
  }

  declare export interface Windows$ApplicationModel$Resources$Core$IResourceContextStatics {
    createMatchingContext(
      result: Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Resources$Core$ResourceQualifier>
    ): Windows$ApplicationModel$Resources$Core$ResourceContext;
  }

  declare export interface Windows$ApplicationModel$Resources$Core$IResourceCandidate {
    isDefault: boolean;
    isMatch: boolean;
    isMatchAsDefault: boolean;
    qualifiers: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Core$ResourceQualifier>;
    valueAsString: string;
    getValueAsFileAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    getQualifierValue(qualifierName: string): string;
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceCandidate
    mixins Windows$ApplicationModel$Resources$Core$IResourceCandidate {
    isDefault: boolean;
    isMatch: boolean;
    isMatchAsDefault: boolean;
    qualifiers: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Core$ResourceQualifier>;
    valueAsString: string;
    getValueAsFileAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    getQualifierValue(qualifierName: string): string;
  }

  declare export interface Windows$ApplicationModel$Resources$Core$INamedResource {
    candidates: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Core$ResourceCandidate>;
    uri: Windows$Foundation$Uri;
    resolve(): Windows$ApplicationModel$Resources$Core$ResourceCandidate;
    resolve(
      resourceContext: Windows$ApplicationModel$Resources$Core$ResourceContext
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate;
    resolveAll(): Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Core$ResourceCandidate>;
    resolveAll(
      resourceContext: Windows$ApplicationModel$Resources$Core$ResourceContext
    ): Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Core$ResourceCandidate>;
  }

  declare export class Windows$ApplicationModel$Resources$Core$NamedResource
    mixins Windows$ApplicationModel$Resources$Core$INamedResource {
    candidates: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Core$ResourceCandidate>;
    uri: Windows$Foundation$Uri;
    resolve(): Windows$ApplicationModel$Resources$Core$ResourceCandidate;
    resolve(
      resourceContext: Windows$ApplicationModel$Resources$Core$ResourceContext
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate;
    resolveAll(): Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Core$ResourceCandidate>;
    resolveAll(
      resourceContext: Windows$ApplicationModel$Resources$Core$ResourceContext
    ): Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Core$ResourceCandidate>;
  }

  declare export type Windows$ApplicationModel$Resources$Core$IResourceMap = {
    uri: Windows$Foundation$Uri,
    getValue(
      resource: string
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate,
    getValue(
      resource: string,
      context: Windows$ApplicationModel$Resources$Core$ResourceContext
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate,
    getSubtree(
      reference: string
    ): Windows$ApplicationModel$Resources$Core$ResourceMap
  } & Windows$Foundation$Collections$IMapView<
    string,
    Windows$ApplicationModel$Resources$Core$NamedResource
  > &
    Windows$Foundation$Collections$IIterable<
      Windows$Foundation$Collections$IKeyValuePair<
        string,
        Windows$ApplicationModel$Resources$Core$NamedResource
      >
    >;

  declare export class Windows$ApplicationModel$Resources$Core$ResourceMapIterator
    mixins Windows$Foundation$Collections$IIterator<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$ApplicationModel$Resources$Core$NamedResource
        >
      > {
    current: Windows$Foundation$Collections$IKeyValuePair<
      string,
      Windows$ApplicationModel$Resources$Core$NamedResource
    >;
    hasCurrent: boolean;
    moveNext(): boolean;
    getMany(): {
      items: Windows$Foundation$Collections$IKeyValuePair<
        string,
        Windows$ApplicationModel$Resources$Core$NamedResource
      >[],
      returnValue: number
    };
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceMapMapView
    mixins Windows$Foundation$Collections$IMapView<
        string,
        Windows$ApplicationModel$Resources$Core$ResourceMap
      >,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$ApplicationModel$Resources$Core$ResourceMap
        >
      > {
    size: number;
    lookup(key: string): Windows$ApplicationModel$Resources$Core$ResourceMap;
    hasKey(key: string): boolean;
    split(): {
      first: Windows$Foundation$Collections$IMapView<
        string,
        Windows$ApplicationModel$Resources$Core$ResourceMap
      >,
      second: Windows$Foundation$Collections$IMapView<
        string,
        Windows$ApplicationModel$Resources$Core$ResourceMap
      >
    };
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<
        string,
        Windows$ApplicationModel$Resources$Core$ResourceMap
      >
    >;
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceMapMapViewIterator
    mixins Windows$Foundation$Collections$IIterator<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$ApplicationModel$Resources$Core$ResourceMap
        >
      > {
    current: Windows$Foundation$Collections$IKeyValuePair<
      string,
      Windows$ApplicationModel$Resources$Core$ResourceMap
    >;
    hasCurrent: boolean;
    moveNext(): boolean;
    getMany(): {
      items: Windows$Foundation$Collections$IKeyValuePair<
        string,
        Windows$ApplicationModel$Resources$Core$ResourceMap
      >[],
      returnValue: number
    };
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceQualifierObservableMap
    mixins Windows$Foundation$Collections$IObservableMap<string, string>,
      Windows$Foundation$Collections$IMap<string, string>,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, string>
      > {
    size: number;
    onmapchanged: any;
    lookup(key: string): string;
    hasKey(key: string): boolean;
    getView(): Windows$Foundation$Collections$IMapView<string, string>;
    insert(key: string, value: string): boolean;
    remove(key: string): void;
    clear(): void;
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<string, string>
    >;
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceQualifierMapView
    mixins Windows$Foundation$Collections$IMapView<string, string>,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, string>
      > {
    size: number;
    lookup(key: string): string;
    hasKey(key: string): boolean;
    split(): {
      first: Windows$Foundation$Collections$IMapView<string, string>,
      second: Windows$Foundation$Collections$IMapView<string, string>
    };
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<string, string>
    >;
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceQualifierVectorView
    mixins Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Core$ResourceQualifier>,
      Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Resources$Core$ResourceQualifier> {
    size: number;
    getAt(
      index: number
    ): Windows$ApplicationModel$Resources$Core$ResourceQualifier;
    indexOf(
      value: Windows$ApplicationModel$Resources$Core$ResourceQualifier
    ): {
      index: number,
      returnValue: boolean
    };
    getMany(
      startIndex: number
    ): {
      items: Windows$ApplicationModel$Resources$Core$ResourceQualifier[],
      returnValue: number
    };
    first(): Windows$Foundation$Collections$IIterator<Windows$ApplicationModel$Resources$Core$ResourceQualifier>;
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$ApplicationModel$Resources$Core$ResourceQualifier[][]
    ): Windows$ApplicationModel$Resources$Core$ResourceQualifier[];
    join(seperator: string): string;
    pop(): Windows$ApplicationModel$Resources$Core$ResourceQualifier;
    push(
      ...items: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
    ): void;
    reverse(): Windows$ApplicationModel$Resources$Core$ResourceQualifier[];
    shift(): Windows$ApplicationModel$Resources$Core$ResourceQualifier;
    slice(
      start: number
    ): Windows$ApplicationModel$Resources$Core$ResourceQualifier[];
    slice(
      start: number,
      end: number
    ): Windows$ApplicationModel$Resources$Core$ResourceQualifier[];
    sort(): Windows$ApplicationModel$Resources$Core$ResourceQualifier[];
    sort(
      compareFn: (
        a: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
        b: Windows$ApplicationModel$Resources$Core$ResourceQualifier
      ) => number
    ): Windows$ApplicationModel$Resources$Core$ResourceQualifier[];
    splice(
      start: number
    ): Windows$ApplicationModel$Resources$Core$ResourceQualifier[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
    ): Windows$ApplicationModel$Resources$Core$ResourceQualifier[];
    unshift(
      ...items: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
    ): number;
    lastIndexOf(
      searchElement: Windows$ApplicationModel$Resources$Core$ResourceQualifier
    ): number;
    lastIndexOf(
      searchElement: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => boolean
    ): Windows$ApplicationModel$Resources$Core$ResourceQualifier[];
    filter(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceQualifier,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => boolean,
      thisArg: any
    ): Windows$ApplicationModel$Resources$Core$ResourceQualifier[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceQualifier[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceCandidateVectorView
    mixins Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Core$ResourceCandidate>,
      Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Resources$Core$ResourceCandidate> {
    size: number;
    getAt(
      index: number
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate;
    indexOf(
      value: Windows$ApplicationModel$Resources$Core$ResourceCandidate
    ): {
      index: number,
      returnValue: boolean
    };
    getMany(
      startIndex: number
    ): {
      items: Windows$ApplicationModel$Resources$Core$ResourceCandidate[],
      returnValue: number
    };
    first(): Windows$Foundation$Collections$IIterator<Windows$ApplicationModel$Resources$Core$ResourceCandidate>;
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$ApplicationModel$Resources$Core$ResourceCandidate[][]
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate[];
    join(seperator: string): string;
    pop(): Windows$ApplicationModel$Resources$Core$ResourceCandidate;
    push(
      ...items: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
    ): void;
    reverse(): Windows$ApplicationModel$Resources$Core$ResourceCandidate[];
    shift(): Windows$ApplicationModel$Resources$Core$ResourceCandidate;
    slice(
      start: number
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate[];
    slice(
      start: number,
      end: number
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate[];
    sort(): Windows$ApplicationModel$Resources$Core$ResourceCandidate[];
    sort(
      compareFn: (
        a: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
        b: Windows$ApplicationModel$Resources$Core$ResourceCandidate
      ) => number
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate[];
    splice(
      start: number
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate[];
    unshift(
      ...items: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
    ): number;
    lastIndexOf(
      searchElement: Windows$ApplicationModel$Resources$Core$ResourceCandidate
    ): number;
    lastIndexOf(
      searchElement: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => boolean
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate[];
    filter(
      callbackfn: (
        value: Windows$ApplicationModel$Resources$Core$ResourceCandidate,
        index: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => boolean,
      thisArg: any
    ): Windows$ApplicationModel$Resources$Core$ResourceCandidate[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$ApplicationModel$Resources$Core$ResourceCandidate[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare export class Windows$ApplicationModel$Resources$Core$ResourceContextLanguagesVectorView
    mixins Windows$Foundation$Collections$IVectorView<string>,
      Windows$Foundation$Collections$IIterable<string> {
    size: number;
    getAt(index: number): string;
    indexOf(
      value: string
    ): {
      index: number,
      returnValue: boolean
    };
    getMany(
      startIndex: number
    ): {
      items: string[],
      returnValue: number
    };
    first(): Windows$Foundation$Collections$IIterator<string>;
    toString(): string;
    toLocaleString(): string;
    concat(...items: string[][]): string[];
    join(seperator: string): string;
    pop(): string;
    push(...items: string[]): void;
    reverse(): string[];
    shift(): string;
    slice(start: number): string[];
    slice(start: number, end: number): string[];
    sort(): string[];
    sort(compareFn: (a: string, b: string) => number): string[];
    splice(start: number): string[];
    splice(start: number, deleteCount: number, ...items: string[]): string[];
    unshift(...items: string[]): number;
    lastIndexOf(searchElement: string): number;
    lastIndexOf(searchElement: string, fromIndex: number): number;
    every(
      callbackfn: (value: string, index: number, array: string[]) => boolean
    ): boolean;
    every(
      callbackfn: (value: string, index: number, array: string[]) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (value: string, index: number, array: string[]) => boolean
    ): boolean;
    some(
      callbackfn: (value: string, index: number, array: string[]) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (value: string, index: number, array: string[]) => void
    ): void;
    forEach(
      callbackfn: (value: string, index: number, array: string[]) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (value: string, index: number, array: string[]) => any
    ): any[];
    map(
      callbackfn: (value: string, index: number, array: string[]) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (value: string, index: number, array: string[]) => boolean
    ): string[];
    filter(
      callbackfn: (value: string, index: number, array: string[]) => boolean,
      thisArg: any
    ): string[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: string[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: string[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: string[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: string[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare var npm$namespace$Windows$ApplicationModel$Resources$Management: {
    IndexedResourceType: typeof Windows$ApplicationModel$Resources$Management$IndexedResourceType,
    IndexedResourceCandidate: typeof Windows$ApplicationModel$Resources$Management$IndexedResourceCandidate,
    ResourceIndexer: typeof Windows$ApplicationModel$Resources$Management$ResourceIndexer,
    IndexedResourceQualifier: typeof Windows$ApplicationModel$Resources$Management$IndexedResourceQualifier
  };

  declare export var Windows$ApplicationModel$Resources$Management$IndexedResourceType: {|
    +string: 0, // 0
    +path: 1 // 1
  |};

  declare export interface Windows$ApplicationModel$Resources$Management$IResourceIndexer {
    indexFilePath(
      filePath: Windows$Foundation$Uri
    ): Windows$ApplicationModel$Resources$Management$IndexedResourceCandidate;
    indexFileContentsAsync(
      file: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Management$IndexedResourceCandidate>
    >;
  }

  declare export class Windows$ApplicationModel$Resources$Management$IndexedResourceCandidate
    mixins Windows$ApplicationModel$Resources$Management$IIndexedResourceCandidate {
    metadata: Windows$Foundation$Collections$IMapView<string, string>;
    qualifiers: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Management$IndexedResourceQualifier>;
    type: $Values<
      typeof Windows$ApplicationModel$Resources$Management$IndexedResourceType
    >;
    uri: Windows$Foundation$Uri;
    valueAsString: string;
    getQualifierValue(qualifierName: string): string;
  }

  declare export interface Windows$ApplicationModel$Resources$Management$IResourceIndexerFactory {
    createResourceIndexer(
      projectRoot: Windows$Foundation$Uri
    ): Windows$ApplicationModel$Resources$Management$ResourceIndexer;
  }

  declare export class Windows$ApplicationModel$Resources$Management$ResourceIndexer
    mixins Windows$ApplicationModel$Resources$Management$IResourceIndexer {
    constructor(projectRoot: Windows$Foundation$Uri): this;
    indexFilePath(
      filePath: Windows$Foundation$Uri
    ): Windows$ApplicationModel$Resources$Management$IndexedResourceCandidate;
    indexFileContentsAsync(
      file: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Management$IndexedResourceCandidate>
    >;
  }

  declare export interface Windows$ApplicationModel$Resources$Management$IIndexedResourceQualifier {
    qualifierName: string;
    qualifierValue: string;
  }

  declare export interface Windows$ApplicationModel$Resources$Management$IIndexedResourceCandidate {
    metadata: Windows$Foundation$Collections$IMapView<string, string>;
    qualifiers: Windows$Foundation$Collections$IVectorView<Windows$ApplicationModel$Resources$Management$IndexedResourceQualifier>;
    type: $Values<
      typeof Windows$ApplicationModel$Resources$Management$IndexedResourceType
    >;
    uri: Windows$Foundation$Uri;
    valueAsString: string;
    getQualifierValue(qualifierName: string): string;
  }

  declare export class Windows$ApplicationModel$Resources$Management$IndexedResourceQualifier
    mixins Windows$ApplicationModel$Resources$Management$IIndexedResourceQualifier {
    qualifierName: string;
    qualifierValue: string;
  }

  declare var npm$namespace$Windows$ApplicationModel$Store: {
    LicenseInformation: typeof Windows$ApplicationModel$Store$LicenseInformation,
    ListingInformation: typeof Windows$ApplicationModel$Store$ListingInformation,
    ProductLicense: typeof Windows$ApplicationModel$Store$ProductLicense,
    ProductListing: typeof Windows$ApplicationModel$Store$ProductListing,
    CurrentApp: typeof Windows$ApplicationModel$Store$CurrentApp,
    CurrentAppSimulator: typeof Windows$ApplicationModel$Store$CurrentAppSimulator
  };
  declare export interface Windows$ApplicationModel$Store$LicenseChangedEventHandler {
    (): void;
  }

  declare export interface Windows$ApplicationModel$Store$ICurrentApp {
    appId: string;
    licenseInformation: Windows$ApplicationModel$Store$LicenseInformation;
    linkUri: Windows$Foundation$Uri;
    requestAppPurchaseAsync(
      includeReceipt: boolean
    ): Windows$Foundation$IAsyncOperation<string>;
    requestProductPurchaseAsync(
      productId: string,
      includeReceipt: boolean
    ): Windows$Foundation$IAsyncOperation<string>;
    loadListingInformationAsync(): Windows$Foundation$IAsyncOperation<Windows$ApplicationModel$Store$ListingInformation>;
    getAppReceiptAsync(): Windows$Foundation$IAsyncOperation<string>;
    getProductReceiptAsync(
      productId: string
    ): Windows$Foundation$IAsyncOperation<string>;
  }

  declare export class Windows$ApplicationModel$Store$LicenseInformation
    mixins Windows$ApplicationModel$Store$ILicenseInformation {
    expirationDate: Date;
    isActive: boolean;
    isTrial: boolean;
    productLicenses: Windows$Foundation$Collections$IMapView<
      string,
      Windows$ApplicationModel$Store$ProductLicense
    >;
    onlicensechanged: any;
  }

  declare export class Windows$ApplicationModel$Store$ListingInformation
    mixins Windows$ApplicationModel$Store$IListingInformation {
    ageRating: number;
    currentMarket: string;
    description: string;
    formattedPrice: string;
    name: string;
    productListings: Windows$Foundation$Collections$IMapView<
      string,
      Windows$ApplicationModel$Store$ProductListing
    >;
  }

  declare export interface Windows$ApplicationModel$Store$ICurrentAppSimulator {
    appId: string;
    licenseInformation: Windows$ApplicationModel$Store$LicenseInformation;
    linkUri: Windows$Foundation$Uri;
    requestAppPurchaseAsync(
      includeReceipt: boolean
    ): Windows$Foundation$IAsyncOperation<string>;
    requestProductPurchaseAsync(
      productId: string,
      includeReceipt: boolean
    ): Windows$Foundation$IAsyncOperation<string>;
    loadListingInformationAsync(): Windows$Foundation$IAsyncOperation<Windows$ApplicationModel$Store$ListingInformation>;
    getAppReceiptAsync(): Windows$Foundation$IAsyncOperation<string>;
    getProductReceiptAsync(
      productId: string
    ): Windows$Foundation$IAsyncOperation<string>;
    reloadSimulatorAsync(
      simulatorSettingsFile: Windows$Storage$StorageFile
    ): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$ApplicationModel$Store$ILicenseInformation {
    expirationDate: Date;
    isActive: boolean;
    isTrial: boolean;
    productLicenses: Windows$Foundation$Collections$IMapView<
      string,
      Windows$ApplicationModel$Store$ProductLicense
    >;
    onlicensechanged: any;
  }

  declare export class Windows$ApplicationModel$Store$ProductLicense
    mixins Windows$ApplicationModel$Store$IProductLicense {
    expirationDate: Date;
    isActive: boolean;
    productId: string;
  }

  declare export interface Windows$ApplicationModel$Store$IProductLicense {
    expirationDate: Date;
    isActive: boolean;
    productId: string;
  }

  declare export interface Windows$ApplicationModel$Store$IListingInformation {
    ageRating: number;
    currentMarket: string;
    description: string;
    formattedPrice: string;
    name: string;
    productListings: Windows$Foundation$Collections$IMapView<
      string,
      Windows$ApplicationModel$Store$ProductListing
    >;
  }

  declare export class Windows$ApplicationModel$Store$ProductListing
    mixins Windows$ApplicationModel$Store$IProductListing {
    formattedPrice: string;
    name: string;
    productId: string;
  }

  declare export interface Windows$ApplicationModel$Store$IProductListing {
    formattedPrice: string;
    name: string;
    productId: string;
  }

  declare export class Windows$ApplicationModel$Store$CurrentApp {
    static appId: string;
    static licenseInformation: Windows$ApplicationModel$Store$LicenseInformation;
    static linkUri: Windows$Foundation$Uri;
    static requestAppPurchaseAsync(
      includeReceipt: boolean
    ): Windows$Foundation$IAsyncOperation<string>;
    static requestProductPurchaseAsync(
      productId: string,
      includeReceipt: boolean
    ): Windows$Foundation$IAsyncOperation<string>;
    static loadListingInformationAsync(): Windows$Foundation$IAsyncOperation<Windows$ApplicationModel$Store$ListingInformation>;
    static getAppReceiptAsync(): Windows$Foundation$IAsyncOperation<string>;
    static getProductReceiptAsync(
      productId: string
    ): Windows$Foundation$IAsyncOperation<string>;
  }

  declare export class Windows$ApplicationModel$Store$CurrentAppSimulator {
    static appId: string;
    static licenseInformation: Windows$ApplicationModel$Store$LicenseInformation;
    static linkUri: Windows$Foundation$Uri;
    static requestAppPurchaseAsync(
      includeReceipt: boolean
    ): Windows$Foundation$IAsyncOperation<string>;
    static requestProductPurchaseAsync(
      productId: string,
      includeReceipt: boolean
    ): Windows$Foundation$IAsyncOperation<string>;
    static loadListingInformationAsync(): Windows$Foundation$IAsyncOperation<Windows$ApplicationModel$Store$ListingInformation>;
    static getAppReceiptAsync(): Windows$Foundation$IAsyncOperation<string>;
    static getProductReceiptAsync(
      productId: string
    ): Windows$Foundation$IAsyncOperation<string>;
    static reloadSimulatorAsync(
      simulatorSettingsFile: Windows$Storage$StorageFile
    ): Windows$Foundation$IAsyncAction;
  }

  declare var npm$namespace$Windows$Data: {
    Html: typeof npm$namespace$Windows$Data$Html,
    Json: typeof npm$namespace$Windows$Data$Json,
    Xml: typeof npm$namespace$Windows$Data$Xml
  };

  declare var npm$namespace$Windows$Data$Html: {
    HtmlUtilities: typeof Windows$Data$Html$HtmlUtilities
  };
  declare export interface Windows$Data$Html$IHtmlUtilities {
    convertToText(html: string): string;
  }

  declare export class Windows$Data$Html$HtmlUtilities {
    static convertToText(html: string): string;
  }

  declare var npm$namespace$Windows$Data$Json: {
    JsonValueType: typeof Windows$Data$Json$JsonValueType,
    JsonErrorStatus: typeof Windows$Data$Json$JsonErrorStatus,
    JsonArray: typeof Windows$Data$Json$JsonArray,
    JsonObject: typeof Windows$Data$Json$JsonObject,
    JsonValue: typeof Windows$Data$Json$JsonValue,
    JsonError: typeof Windows$Data$Json$JsonError
  };

  declare export var Windows$Data$Json$JsonValueType: {|
    +null_: 0, // 0
    +boolean: 1, // 1
    +number: 2, // 2
    +string: 3, // 3
    +array: 4, // 4
    +object: 5 // 5
  |};

  declare export var Windows$Data$Json$JsonErrorStatus: {|
    +unknown: 0, // 0
    +invalidJsonString: 1, // 1
    +invalidJsonNumber: 2, // 2
    +jsonValueNotFound: 3, // 3
    +implementationLimit: 4 // 4
  |};

  declare export interface Windows$Data$Json$IJsonValue {
    valueType: $Values<typeof Windows$Data$Json$JsonValueType>;
    stringify(): string;
    getString(): string;
    getNumber(): number;
    getBoolean(): boolean;
    getArray(): Windows$Data$Json$JsonArray;
    getObject(): Windows$Data$Json$JsonObject;
  }

  declare export class Windows$Data$Json$JsonArray
    mixins Windows$Data$Json$IJsonArray,
      Windows$Data$Json$IJsonValue,
      Windows$Foundation$Collections$IVector<Windows$Data$Json$IJsonValue>,
      Windows$Foundation$Collections$IIterable<Windows$Data$Json$IJsonValue> {
    valueType: $Values<typeof Windows$Data$Json$JsonValueType>;
    size: number;
    getObjectAt(index: number): Windows$Data$Json$JsonObject;
    getArrayAt(index: number): Windows$Data$Json$JsonArray;
    getStringAt(index: number): string;
    getNumberAt(index: number): number;
    getBooleanAt(index: number): boolean;
    stringify(): string;
    getString(): string;
    getNumber(): number;
    getBoolean(): boolean;
    getArray(): Windows$Data$Json$JsonArray;
    getObject(): Windows$Data$Json$JsonObject;
    getAt(index: number): Windows$Data$Json$IJsonValue;
    getView(): Windows$Foundation$Collections$IVectorView<Windows$Data$Json$IJsonValue>;
    indexOf(
      value: Windows$Data$Json$IJsonValue
    ): {
      index: number,
      returnValue: boolean
    };
    setAt(index: number, value: Windows$Data$Json$IJsonValue): void;
    insertAt(index: number, value: Windows$Data$Json$IJsonValue): void;
    removeAt(index: number): void;
    append(value: Windows$Data$Json$IJsonValue): void;
    removeAtEnd(): void;
    clear(): void;
    getMany(
      startIndex: number
    ): {
      items: Windows$Data$Json$IJsonValue[],
      returnValue: number
    };
    replaceAll(items: Windows$Data$Json$IJsonValue[]): void;
    first(): Windows$Foundation$Collections$IIterator<Windows$Data$Json$IJsonValue>;
    static parse(input: string): Windows$Data$Json$JsonArray;
    static tryParse(
      input: string
    ): {
      result: Windows$Data$Json$JsonArray,
      succeeded: boolean
    };
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$Data$Json$IJsonValue[][]
    ): Windows$Data$Json$IJsonValue[];
    join(seperator: string): string;
    pop(): Windows$Data$Json$IJsonValue;
    push(...items: Windows$Data$Json$IJsonValue[]): void;
    reverse(): Windows$Data$Json$IJsonValue[];
    shift(): Windows$Data$Json$IJsonValue;
    slice(start: number): Windows$Data$Json$IJsonValue[];
    slice(start: number, end: number): Windows$Data$Json$IJsonValue[];
    sort(): Windows$Data$Json$IJsonValue[];
    sort(
      compareFn: (
        a: Windows$Data$Json$IJsonValue,
        b: Windows$Data$Json$IJsonValue
      ) => number
    ): Windows$Data$Json$IJsonValue[];
    splice(start: number): Windows$Data$Json$IJsonValue[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$Data$Json$IJsonValue[]
    ): Windows$Data$Json$IJsonValue[];
    unshift(...items: Windows$Data$Json$IJsonValue[]): number;
    lastIndexOf(searchElement: Windows$Data$Json$IJsonValue): number;
    lastIndexOf(
      searchElement: Windows$Data$Json$IJsonValue,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$Data$Json$IJsonValue,
        index: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$Data$Json$IJsonValue,
        index: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Data$Json$IJsonValue,
        index: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Data$Json$IJsonValue,
        index: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$Data$Json$IJsonValue,
        index: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$Data$Json$IJsonValue,
        index: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$Data$Json$IJsonValue,
        index: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$Data$Json$IJsonValue,
        index: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$Data$Json$IJsonValue,
        index: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => boolean
    ): Windows$Data$Json$IJsonValue[];
    filter(
      callbackfn: (
        value: Windows$Data$Json$IJsonValue,
        index: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => boolean,
      thisArg: any
    ): Windows$Data$Json$IJsonValue[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Json$IJsonValue[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare export class Windows$Data$Json$JsonObject
    mixins Windows$Data$Json$IJsonObject,
      Windows$Data$Json$IJsonValue,
      Windows$Foundation$Collections$IMap<string, Windows$Data$Json$IJsonValue>,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$Data$Json$IJsonValue
        >
      > {
    valueType: $Values<typeof Windows$Data$Json$JsonValueType>;
    size: number;
    getNamedValue(name: string): Windows$Data$Json$JsonValue;
    setNamedValue(name: string, value: Windows$Data$Json$IJsonValue): void;
    getNamedObject(name: string): Windows$Data$Json$JsonObject;
    getNamedArray(name: string): Windows$Data$Json$JsonArray;
    getNamedString(name: string): string;
    getNamedNumber(name: string): number;
    getNamedBoolean(name: string): boolean;
    stringify(): string;
    getString(): string;
    getNumber(): number;
    getBoolean(): boolean;
    getArray(): Windows$Data$Json$JsonArray;
    getObject(): Windows$Data$Json$JsonObject;
    lookup(key: string): Windows$Data$Json$IJsonValue;
    hasKey(key: string): boolean;
    getView(): Windows$Foundation$Collections$IMapView<
      string,
      Windows$Data$Json$IJsonValue
    >;
    insert(key: string, value: Windows$Data$Json$IJsonValue): boolean;
    remove(key: string): void;
    clear(): void;
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<
        string,
        Windows$Data$Json$IJsonValue
      >
    >;
    static parse(input: string): Windows$Data$Json$JsonObject;
    static tryParse(
      input: string
    ): {
      result: Windows$Data$Json$JsonObject,
      succeeded: boolean
    };
  }

  declare export interface Windows$Data$Json$IJsonValueStatics {
    parse(input: string): Windows$Data$Json$JsonValue;
    tryParse(
      input: string
    ): {
      result: Windows$Data$Json$JsonValue,
      succeeded: boolean
    };
    createBooleanValue(input: boolean): Windows$Data$Json$JsonValue;
    createNumberValue(input: number): Windows$Data$Json$JsonValue;
    createStringValue(input: string): Windows$Data$Json$JsonValue;
  }

  declare export class Windows$Data$Json$JsonValue
    mixins Windows$Data$Json$IJsonValue {
    valueType: $Values<typeof Windows$Data$Json$JsonValueType>;
    stringify(): string;
    getString(): string;
    getNumber(): number;
    getBoolean(): boolean;
    getArray(): Windows$Data$Json$JsonArray;
    getObject(): Windows$Data$Json$JsonObject;
    static parse(input: string): Windows$Data$Json$JsonValue;
    static tryParse(
      input: string
    ): {
      result: Windows$Data$Json$JsonValue,
      succeeded: boolean
    };
    static createBooleanValue(input: boolean): Windows$Data$Json$JsonValue;
    static createNumberValue(input: number): Windows$Data$Json$JsonValue;
    static createStringValue(input: string): Windows$Data$Json$JsonValue;
  }

  declare export type Windows$Data$Json$IJsonObject = {
    getNamedValue(name: string): Windows$Data$Json$JsonValue,
    setNamedValue(name: string, value: Windows$Data$Json$IJsonValue): void,
    getNamedObject(name: string): Windows$Data$Json$JsonObject,
    getNamedArray(name: string): Windows$Data$Json$JsonArray,
    getNamedString(name: string): string,
    getNamedNumber(name: string): number,
    getNamedBoolean(name: string): boolean
  } & Windows$Data$Json$IJsonValue;

  declare export interface Windows$Data$Json$IJsonObjectStatics {
    parse(input: string): Windows$Data$Json$JsonObject;
    tryParse(
      input: string
    ): {
      result: Windows$Data$Json$JsonObject,
      succeeded: boolean
    };
  }

  declare export type Windows$Data$Json$IJsonArray = {
    getObjectAt(index: number): Windows$Data$Json$JsonObject,
    getArrayAt(index: number): Windows$Data$Json$JsonArray,
    getStringAt(index: number): string,
    getNumberAt(index: number): number,
    getBooleanAt(index: number): boolean
  } & Windows$Data$Json$IJsonValue;

  declare export interface Windows$Data$Json$IJsonArrayStatics {
    parse(input: string): Windows$Data$Json$JsonArray;
    tryParse(
      input: string
    ): {
      result: Windows$Data$Json$JsonArray,
      succeeded: boolean
    };
  }

  declare export interface Windows$Data$Json$IJsonErrorStatics {
    getStatus(
      hresult: number
    ): $Values<typeof Windows$Data$Json$JsonErrorStatus>;
  }

  declare export class Windows$Data$Json$JsonError {
    static getStatus(
      hresult: number
    ): $Values<typeof Windows$Data$Json$JsonErrorStatus>;
  }

  declare var npm$namespace$Windows$Data$Xml: {
    Dom: typeof npm$namespace$Windows$Data$Xml$Dom,
    Xsl: typeof npm$namespace$Windows$Data$Xml$Xsl
  };

  declare var npm$namespace$Windows$Data$Xml$Dom: {
    NodeType: typeof Windows$Data$Xml$Dom$NodeType,
    XmlNodeList: typeof Windows$Data$Xml$Dom$XmlNodeList,
    XmlNamedNodeMap: typeof Windows$Data$Xml$Dom$XmlNamedNodeMap,
    XmlDocument: typeof Windows$Data$Xml$Dom$XmlDocument,
    XmlAttribute: typeof Windows$Data$Xml$Dom$XmlAttribute,
    XmlDocumentType: typeof Windows$Data$Xml$Dom$XmlDocumentType,
    XmlDomImplementation: typeof Windows$Data$Xml$Dom$XmlDomImplementation,
    XmlElement: typeof Windows$Data$Xml$Dom$XmlElement,
    XmlDocumentFragment: typeof Windows$Data$Xml$Dom$XmlDocumentFragment,
    XmlText: typeof Windows$Data$Xml$Dom$XmlText,
    XmlComment: typeof Windows$Data$Xml$Dom$XmlComment,
    XmlProcessingInstruction: typeof Windows$Data$Xml$Dom$XmlProcessingInstruction,
    XmlEntityReference: typeof Windows$Data$Xml$Dom$XmlEntityReference,
    XmlCDataSection: typeof Windows$Data$Xml$Dom$XmlCDataSection,
    XmlLoadSettings: typeof Windows$Data$Xml$Dom$XmlLoadSettings,
    DtdNotation: typeof Windows$Data$Xml$Dom$DtdNotation,
    DtdEntity: typeof Windows$Data$Xml$Dom$DtdEntity
  };

  declare export var Windows$Data$Xml$Dom$NodeType: {|
    +invalid: 0, // 0
    +elementNode: 1, // 1
    +attributeNode: 2, // 2
    +textNode: 3, // 3
    +dataSectionNode: 4, // 4
    +entityReferenceNode: 5, // 5
    +entityNode: 6, // 6
    +processingInstructionNode: 7, // 7
    +commentNode: 8, // 8
    +documentNode: 9, // 9
    +documentTypeNode: 10, // 10
    +documentFragmentNode: 11, // 11
    +notationNode: 12 // 12
  |};

  declare export interface Windows$Data$Xml$Dom$IXmlNodeSelector {
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
  }

  declare export class Windows$Data$Xml$Dom$XmlNodeList
    mixins Windows$Data$Xml$Dom$IXmlNodeList,
      Windows$Foundation$Collections$IVectorView<Windows$Data$Xml$Dom$IXmlNode>,
      Windows$Foundation$Collections$IIterable<Windows$Data$Xml$Dom$IXmlNode> {
    length: number;
    size: number;
    item(index: number): Windows$Data$Xml$Dom$IXmlNode;
    getAt(index: number): Windows$Data$Xml$Dom$IXmlNode;
    indexOf(
      value: Windows$Data$Xml$Dom$IXmlNode
    ): {
      index: number,
      returnValue: boolean
    };
    getMany(
      startIndex: number
    ): {
      items: Windows$Data$Xml$Dom$IXmlNode[],
      returnValue: number
    };
    first(): Windows$Foundation$Collections$IIterator<Windows$Data$Xml$Dom$IXmlNode>;
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$Data$Xml$Dom$IXmlNode[][]
    ): Windows$Data$Xml$Dom$IXmlNode[];
    join(seperator: string): string;
    pop(): Windows$Data$Xml$Dom$IXmlNode;
    push(...items: Windows$Data$Xml$Dom$IXmlNode[]): void;
    reverse(): Windows$Data$Xml$Dom$IXmlNode[];
    shift(): Windows$Data$Xml$Dom$IXmlNode;
    slice(start: number): Windows$Data$Xml$Dom$IXmlNode[];
    slice(start: number, end: number): Windows$Data$Xml$Dom$IXmlNode[];
    sort(): Windows$Data$Xml$Dom$IXmlNode[];
    sort(
      compareFn: (
        a: Windows$Data$Xml$Dom$IXmlNode,
        b: Windows$Data$Xml$Dom$IXmlNode
      ) => number
    ): Windows$Data$Xml$Dom$IXmlNode[];
    splice(start: number): Windows$Data$Xml$Dom$IXmlNode[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$Data$Xml$Dom$IXmlNode[]
    ): Windows$Data$Xml$Dom$IXmlNode[];
    unshift(...items: Windows$Data$Xml$Dom$IXmlNode[]): number;
    lastIndexOf(searchElement: Windows$Data$Xml$Dom$IXmlNode): number;
    lastIndexOf(
      searchElement: Windows$Data$Xml$Dom$IXmlNode,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean
    ): Windows$Data$Xml$Dom$IXmlNode[];
    filter(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean,
      thisArg: any
    ): Windows$Data$Xml$Dom$IXmlNode[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any,
      initialValue: any
    ): any;
  }

  declare export class Windows$Data$Xml$Dom$XmlNamedNodeMap
    mixins Windows$Data$Xml$Dom$IXmlNamedNodeMap,
      Windows$Foundation$Collections$IVectorView<Windows$Data$Xml$Dom$IXmlNode>,
      Windows$Foundation$Collections$IIterable<Windows$Data$Xml$Dom$IXmlNode> {
    length: number;
    size: number;
    item(index: number): Windows$Data$Xml$Dom$IXmlNode;
    getNamedItem(name: string): Windows$Data$Xml$Dom$IXmlNode;
    setNamedItem(
      node: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeNamedItem(name: string): Windows$Data$Xml$Dom$IXmlNode;
    getNamedItemNS(
      namespaceUri: any,
      name: string
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeNamedItemNS(
      namespaceUri: any,
      name: string
    ): Windows$Data$Xml$Dom$IXmlNode;
    setNamedItemNS(
      node: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    getAt(index: number): Windows$Data$Xml$Dom$IXmlNode;
    indexOf(
      value: Windows$Data$Xml$Dom$IXmlNode
    ): {
      index: number,
      returnValue: boolean
    };
    getMany(
      startIndex: number
    ): {
      items: Windows$Data$Xml$Dom$IXmlNode[],
      returnValue: number
    };
    first(): Windows$Foundation$Collections$IIterator<Windows$Data$Xml$Dom$IXmlNode>;
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$Data$Xml$Dom$IXmlNode[][]
    ): Windows$Data$Xml$Dom$IXmlNode[];
    join(seperator: string): string;
    pop(): Windows$Data$Xml$Dom$IXmlNode;
    push(...items: Windows$Data$Xml$Dom$IXmlNode[]): void;
    reverse(): Windows$Data$Xml$Dom$IXmlNode[];
    shift(): Windows$Data$Xml$Dom$IXmlNode;
    slice(start: number): Windows$Data$Xml$Dom$IXmlNode[];
    slice(start: number, end: number): Windows$Data$Xml$Dom$IXmlNode[];
    sort(): Windows$Data$Xml$Dom$IXmlNode[];
    sort(
      compareFn: (
        a: Windows$Data$Xml$Dom$IXmlNode,
        b: Windows$Data$Xml$Dom$IXmlNode
      ) => number
    ): Windows$Data$Xml$Dom$IXmlNode[];
    splice(start: number): Windows$Data$Xml$Dom$IXmlNode[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$Data$Xml$Dom$IXmlNode[]
    ): Windows$Data$Xml$Dom$IXmlNode[];
    unshift(...items: Windows$Data$Xml$Dom$IXmlNode[]): number;
    lastIndexOf(searchElement: Windows$Data$Xml$Dom$IXmlNode): number;
    lastIndexOf(
      searchElement: Windows$Data$Xml$Dom$IXmlNode,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean
    ): Windows$Data$Xml$Dom$IXmlNode[];
    filter(
      callbackfn: (
        value: Windows$Data$Xml$Dom$IXmlNode,
        index: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => boolean,
      thisArg: any
    ): Windows$Data$Xml$Dom$IXmlNode[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Data$Xml$Dom$IXmlNode[]
      ) => any,
      initialValue: any
    ): any;
  }

  declare export class Windows$Data$Xml$Dom$XmlDocument
    mixins Windows$Data$Xml$Dom$IXmlDocument,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer,
      Windows$Data$Xml$Dom$IXmlDocumentIO {
    doctype: Windows$Data$Xml$Dom$XmlDocumentType;
    documentElement: Windows$Data$Xml$Dom$XmlElement;
    documentUri: string;
    implementation: Windows$Data$Xml$Dom$XmlDomImplementation;
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    createElement(tagName: string): Windows$Data$Xml$Dom$XmlElement;
    createDocumentFragment(): Windows$Data$Xml$Dom$XmlDocumentFragment;
    createTextNode(data: string): Windows$Data$Xml$Dom$XmlText;
    createComment(data: string): Windows$Data$Xml$Dom$XmlComment;
    createProcessingInstruction(
      target: string,
      data: string
    ): Windows$Data$Xml$Dom$XmlProcessingInstruction;
    createAttribute(name: string): Windows$Data$Xml$Dom$XmlAttribute;
    createEntityReference(
      name: string
    ): Windows$Data$Xml$Dom$XmlEntityReference;
    getElementsByTagName(tagName: string): Windows$Data$Xml$Dom$XmlNodeList;
    createCDataSection(data: string): Windows$Data$Xml$Dom$XmlCDataSection;
    createAttributeNS(
      namespaceUri: any,
      qualifiedName: string
    ): Windows$Data$Xml$Dom$XmlAttribute;
    createElementNS(
      namespaceUri: any,
      qualifiedName: string
    ): Windows$Data$Xml$Dom$XmlElement;
    getElementById(elementId: string): Windows$Data$Xml$Dom$XmlElement;
    importNode(
      node: Windows$Data$Xml$Dom$IXmlNode,
      deep: boolean
    ): Windows$Data$Xml$Dom$IXmlNode;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
    loadXml(xml: string): void;
    loadXml(
      xml: string,
      loadSettings: Windows$Data$Xml$Dom$XmlLoadSettings
    ): void;
    saveToFileAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
    static loadFromUriAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<Windows$Data$Xml$Dom$XmlDocument>;
    static loadFromUriAsync(
      uri: Windows$Foundation$Uri,
      loadSettings: Windows$Data$Xml$Dom$XmlLoadSettings
    ): Windows$Foundation$IAsyncOperation<Windows$Data$Xml$Dom$XmlDocument>;
    static loadFromFileAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<Windows$Data$Xml$Dom$XmlDocument>;
    static loadFromFileAsync(
      file: Windows$Storage$IStorageFile,
      loadSettings: Windows$Data$Xml$Dom$XmlLoadSettings
    ): Windows$Foundation$IAsyncOperation<Windows$Data$Xml$Dom$XmlDocument>;
  }

  declare export interface Windows$Data$Xml$Dom$IXmlNodeSerializer {
    innerText: string;
    getXml(): string;
  }

  declare export type Windows$Data$Xml$Dom$IXmlNode = {
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap,
    childNodes: Windows$Data$Xml$Dom$XmlNodeList,
    firstChild: Windows$Data$Xml$Dom$IXmlNode,
    lastChild: Windows$Data$Xml$Dom$IXmlNode,
    localName: any,
    namespaceUri: any,
    nextSibling: Windows$Data$Xml$Dom$IXmlNode,
    nodeName: string,
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>,
    nodeValue: any,
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument,
    parentNode: Windows$Data$Xml$Dom$IXmlNode,
    prefix: any,
    previousSibling: Windows$Data$Xml$Dom$IXmlNode,
    hasChildNodes(): boolean,
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode,
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode,
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode,
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode,
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode,
    normalize(): void
  } & Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export interface Windows$Data$Xml$Dom$IXmlDomImplementation {
    hasFeature(feature: string, version: any): boolean;
  }

  declare export type Windows$Data$Xml$Dom$IXmlDocumentType = {
    entities: Windows$Data$Xml$Dom$XmlNamedNodeMap,
    name: string,
    notations: Windows$Data$Xml$Dom$XmlNamedNodeMap
  } & Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export type Windows$Data$Xml$Dom$IXmlAttribute = {
    name: string,
    specified: boolean,
    value: string
  } & Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export type Windows$Data$Xml$Dom$IXmlDocumentFragment = {} & Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export type Windows$Data$Xml$Dom$IXmlElement = {
    tagName: string,
    getAttribute(attributeName: string): string,
    setAttribute(attributeName: string, attributeValue: string): void,
    removeAttribute(attributeName: string): void,
    getAttributeNode(attributeName: string): Windows$Data$Xml$Dom$XmlAttribute,
    setAttributeNode(
      newAttribute: Windows$Data$Xml$Dom$XmlAttribute
    ): Windows$Data$Xml$Dom$XmlAttribute,
    removeAttributeNode(
      attributeNode: Windows$Data$Xml$Dom$XmlAttribute
    ): Windows$Data$Xml$Dom$XmlAttribute,
    getElementsByTagName(tagName: string): Windows$Data$Xml$Dom$XmlNodeList,
    setAttributeNS(
      namespaceUri: any,
      qualifiedName: string,
      value: string
    ): void,
    getAttributeNS(namespaceUri: any, localName: string): string,
    removeAttributeNS(namespaceUri: any, localName: string): void,
    setAttributeNodeNS(
      newAttribute: Windows$Data$Xml$Dom$XmlAttribute
    ): Windows$Data$Xml$Dom$XmlAttribute,
    getAttributeNodeNS(
      namespaceUri: any,
      localName: string
    ): Windows$Data$Xml$Dom$XmlAttribute
  } & Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export class Windows$Data$Xml$Dom$XmlAttribute
    mixins Windows$Data$Xml$Dom$IXmlAttribute,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer {
    name: string;
    specified: boolean;
    value: string;
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
  }

  declare export type Windows$Data$Xml$Dom$IDtdNotation = {
    publicId: any,
    systemId: any
  } & Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export type Windows$Data$Xml$Dom$IDtdEntity = {
    notationName: any,
    publicId: any,
    systemId: any
  } & Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export type Windows$Data$Xml$Dom$IXmlEntityReference = {} & Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export type Windows$Data$Xml$Dom$IXmlProcessingInstruction = {
    data: string,
    target: string
  } & Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export type Windows$Data$Xml$Dom$IXmlCharacterData = {
    data: string,
    length: number,
    substringData(offset: number, count: number): string,
    appendData(data: string): void,
    insertData(offset: number, data: string): void,
    deleteData(offset: number, count: number): void,
    replaceData(offset: number, count: number, data: string): void
  } & Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export type Windows$Data$Xml$Dom$IXmlComment = {} & Windows$Data$Xml$Dom$IXmlCharacterData &
    Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export type Windows$Data$Xml$Dom$IXmlText = {
    splitText(offset: number): Windows$Data$Xml$Dom$IXmlText
  } & Windows$Data$Xml$Dom$IXmlCharacterData &
    Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export type Windows$Data$Xml$Dom$IXmlCDataSection = {} & Windows$Data$Xml$Dom$IXmlText &
    Windows$Data$Xml$Dom$IXmlCharacterData &
    Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export type Windows$Data$Xml$Dom$IXmlDocument = {
    doctype: Windows$Data$Xml$Dom$XmlDocumentType,
    documentElement: Windows$Data$Xml$Dom$XmlElement,
    documentUri: string,
    implementation: Windows$Data$Xml$Dom$XmlDomImplementation,
    createElement(tagName: string): Windows$Data$Xml$Dom$XmlElement,
    createDocumentFragment(): Windows$Data$Xml$Dom$XmlDocumentFragment,
    createTextNode(data: string): Windows$Data$Xml$Dom$XmlText,
    createComment(data: string): Windows$Data$Xml$Dom$XmlComment,
    createProcessingInstruction(
      target: string,
      data: string
    ): Windows$Data$Xml$Dom$XmlProcessingInstruction,
    createAttribute(name: string): Windows$Data$Xml$Dom$XmlAttribute,
    createEntityReference(
      name: string
    ): Windows$Data$Xml$Dom$XmlEntityReference,
    getElementsByTagName(tagName: string): Windows$Data$Xml$Dom$XmlNodeList,
    createCDataSection(data: string): Windows$Data$Xml$Dom$XmlCDataSection,
    createAttributeNS(
      namespaceUri: any,
      qualifiedName: string
    ): Windows$Data$Xml$Dom$XmlAttribute,
    createElementNS(
      namespaceUri: any,
      qualifiedName: string
    ): Windows$Data$Xml$Dom$XmlElement,
    getElementById(elementId: string): Windows$Data$Xml$Dom$XmlElement,
    importNode(
      node: Windows$Data$Xml$Dom$IXmlNode,
      deep: boolean
    ): Windows$Data$Xml$Dom$IXmlNode
  } & Windows$Data$Xml$Dom$IXmlNode &
    Windows$Data$Xml$Dom$IXmlNodeSelector &
    Windows$Data$Xml$Dom$IXmlNodeSerializer;

  declare export class Windows$Data$Xml$Dom$XmlDocumentType
    mixins Windows$Data$Xml$Dom$IXmlDocumentType,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer {
    entities: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    name: string;
    notations: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
  }

  declare export class Windows$Data$Xml$Dom$XmlDomImplementation
    mixins Windows$Data$Xml$Dom$IXmlDomImplementation {
    hasFeature(feature: string, version: any): boolean;
  }

  declare export class Windows$Data$Xml$Dom$XmlElement
    mixins Windows$Data$Xml$Dom$IXmlElement,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer {
    tagName: string;
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    getAttribute(attributeName: string): string;
    setAttribute(attributeName: string, attributeValue: string): void;
    removeAttribute(attributeName: string): void;
    getAttributeNode(attributeName: string): Windows$Data$Xml$Dom$XmlAttribute;
    setAttributeNode(
      newAttribute: Windows$Data$Xml$Dom$XmlAttribute
    ): Windows$Data$Xml$Dom$XmlAttribute;
    removeAttributeNode(
      attributeNode: Windows$Data$Xml$Dom$XmlAttribute
    ): Windows$Data$Xml$Dom$XmlAttribute;
    getElementsByTagName(tagName: string): Windows$Data$Xml$Dom$XmlNodeList;
    setAttributeNS(
      namespaceUri: any,
      qualifiedName: string,
      value: string
    ): void;
    getAttributeNS(namespaceUri: any, localName: string): string;
    removeAttributeNS(namespaceUri: any, localName: string): void;
    setAttributeNodeNS(
      newAttribute: Windows$Data$Xml$Dom$XmlAttribute
    ): Windows$Data$Xml$Dom$XmlAttribute;
    getAttributeNodeNS(
      namespaceUri: any,
      localName: string
    ): Windows$Data$Xml$Dom$XmlAttribute;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
  }

  declare export class Windows$Data$Xml$Dom$XmlDocumentFragment
    mixins Windows$Data$Xml$Dom$IXmlDocumentFragment,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer {
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
  }

  declare export class Windows$Data$Xml$Dom$XmlText
    mixins Windows$Data$Xml$Dom$IXmlText,
      Windows$Data$Xml$Dom$IXmlCharacterData,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer {
    data: string;
    length: number;
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    splitText(offset: number): Windows$Data$Xml$Dom$IXmlText;
    substringData(offset: number, count: number): string;
    appendData(data: string): void;
    insertData(offset: number, data: string): void;
    deleteData(offset: number, count: number): void;
    replaceData(offset: number, count: number, data: string): void;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
  }

  declare export class Windows$Data$Xml$Dom$XmlComment
    mixins Windows$Data$Xml$Dom$IXmlComment,
      Windows$Data$Xml$Dom$IXmlCharacterData,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer {
    data: string;
    length: number;
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    substringData(offset: number, count: number): string;
    appendData(data: string): void;
    insertData(offset: number, data: string): void;
    deleteData(offset: number, count: number): void;
    replaceData(offset: number, count: number, data: string): void;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
  }

  declare export class Windows$Data$Xml$Dom$XmlProcessingInstruction
    mixins Windows$Data$Xml$Dom$IXmlProcessingInstruction,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer {
    data: string;
    target: string;
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
  }

  declare export class Windows$Data$Xml$Dom$XmlEntityReference
    mixins Windows$Data$Xml$Dom$IXmlEntityReference,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer {
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
  }

  declare export class Windows$Data$Xml$Dom$XmlCDataSection
    mixins Windows$Data$Xml$Dom$IXmlCDataSection,
      Windows$Data$Xml$Dom$IXmlText,
      Windows$Data$Xml$Dom$IXmlCharacterData,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer {
    data: string;
    length: number;
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    splitText(offset: number): Windows$Data$Xml$Dom$IXmlText;
    substringData(offset: number, count: number): string;
    appendData(data: string): void;
    insertData(offset: number, data: string): void;
    deleteData(offset: number, count: number): void;
    replaceData(offset: number, count: number, data: string): void;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
  }

  declare export type Windows$Data$Xml$Dom$IXmlNamedNodeMap = {
    length: number,
    item(index: number): Windows$Data$Xml$Dom$IXmlNode,
    getNamedItem(name: string): Windows$Data$Xml$Dom$IXmlNode,
    setNamedItem(
      node: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode,
    removeNamedItem(name: string): Windows$Data$Xml$Dom$IXmlNode,
    getNamedItemNS(
      namespaceUri: any,
      name: string
    ): Windows$Data$Xml$Dom$IXmlNode,
    removeNamedItemNS(
      namespaceUri: any,
      name: string
    ): Windows$Data$Xml$Dom$IXmlNode,
    setNamedItemNS(
      node: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode
  } & Windows$Foundation$Collections$IVectorView<Windows$Data$Xml$Dom$IXmlNode> &
    Windows$Foundation$Collections$IIterable<Windows$Data$Xml$Dom$IXmlNode>;

  declare export type Windows$Data$Xml$Dom$IXmlNodeList = {
    length: number,
    item(index: number): Windows$Data$Xml$Dom$IXmlNode
  } & Windows$Foundation$Collections$IVectorView<Windows$Data$Xml$Dom$IXmlNode> &
    Windows$Foundation$Collections$IIterable<Windows$Data$Xml$Dom$IXmlNode>;

  declare export interface Windows$Data$Xml$Dom$IXmlLoadSettings {
    elementContentWhiteSpace: boolean;
    maxElementDepth: number;
    prohibitDtd: boolean;
    resolveExternals: boolean;
    validateOnParse: boolean;
  }

  declare export interface Windows$Data$Xml$Dom$IXmlDocumentIO {
    loadXml(xml: string): void;
    loadXml(
      xml: string,
      loadSettings: Windows$Data$Xml$Dom$XmlLoadSettings
    ): void;
    saveToFileAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
  }

  declare export class Windows$Data$Xml$Dom$XmlLoadSettings
    mixins Windows$Data$Xml$Dom$IXmlLoadSettings {
    elementContentWhiteSpace: boolean;
    maxElementDepth: number;
    prohibitDtd: boolean;
    resolveExternals: boolean;
    validateOnParse: boolean;
  }

  declare export interface Windows$Data$Xml$Dom$IXmlDocumentStatics {
    loadFromUriAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<Windows$Data$Xml$Dom$XmlDocument>;
    loadFromUriAsync(
      uri: Windows$Foundation$Uri,
      loadSettings: Windows$Data$Xml$Dom$XmlLoadSettings
    ): Windows$Foundation$IAsyncOperation<Windows$Data$Xml$Dom$XmlDocument>;
    loadFromFileAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<Windows$Data$Xml$Dom$XmlDocument>;
    loadFromFileAsync(
      file: Windows$Storage$IStorageFile,
      loadSettings: Windows$Data$Xml$Dom$XmlLoadSettings
    ): Windows$Foundation$IAsyncOperation<Windows$Data$Xml$Dom$XmlDocument>;
  }

  declare export class Windows$Data$Xml$Dom$DtdNotation
    mixins Windows$Data$Xml$Dom$IDtdNotation,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer {
    publicId: any;
    systemId: any;
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
  }

  declare export class Windows$Data$Xml$Dom$DtdEntity
    mixins Windows$Data$Xml$Dom$IDtdEntity,
      Windows$Data$Xml$Dom$IXmlNode,
      Windows$Data$Xml$Dom$IXmlNodeSelector,
      Windows$Data$Xml$Dom$IXmlNodeSerializer {
    notationName: any;
    publicId: any;
    systemId: any;
    attributes: Windows$Data$Xml$Dom$XmlNamedNodeMap;
    childNodes: Windows$Data$Xml$Dom$XmlNodeList;
    firstChild: Windows$Data$Xml$Dom$IXmlNode;
    lastChild: Windows$Data$Xml$Dom$IXmlNode;
    localName: any;
    namespaceUri: any;
    nextSibling: Windows$Data$Xml$Dom$IXmlNode;
    nodeName: string;
    nodeType: $Values<typeof Windows$Data$Xml$Dom$NodeType>;
    nodeValue: any;
    ownerDocument: Windows$Data$Xml$Dom$XmlDocument;
    parentNode: Windows$Data$Xml$Dom$IXmlNode;
    prefix: any;
    previousSibling: Windows$Data$Xml$Dom$IXmlNode;
    innerText: string;
    hasChildNodes(): boolean;
    insertBefore(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    replaceChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode,
      referenceChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    removeChild(
      childNode: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    appendChild(
      newChild: Windows$Data$Xml$Dom$IXmlNode
    ): Windows$Data$Xml$Dom$IXmlNode;
    cloneNode(deep: boolean): Windows$Data$Xml$Dom$IXmlNode;
    normalize(): void;
    selectSingleNode(xpath: string): Windows$Data$Xml$Dom$IXmlNode;
    selectNodes(xpath: string): Windows$Data$Xml$Dom$XmlNodeList;
    selectSingleNodeNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$IXmlNode;
    selectNodesNS(
      xpath: string,
      namespaces: any
    ): Windows$Data$Xml$Dom$XmlNodeList;
    getXml(): string;
  }

  declare var npm$namespace$Windows$Data$Xml$Xsl: {
    XsltProcessor: typeof Windows$Data$Xml$Xsl$XsltProcessor
  };
  declare export interface Windows$Data$Xml$Xsl$IXsltProcessor {
    transformToString(inputNode: Windows$Data$Xml$Dom$IXmlNode): string;
  }

  declare export interface Windows$Data$Xml$Xsl$IXsltProcessorFactory {
    createInstance(
      document: Windows$Data$Xml$Dom$XmlDocument
    ): Windows$Data$Xml$Xsl$XsltProcessor;
  }

  declare export class Windows$Data$Xml$Xsl$XsltProcessor
    mixins Windows$Data$Xml$Xsl$IXsltProcessor {
    constructor(document: Windows$Data$Xml$Dom$XmlDocument): this;
    transformToString(inputNode: Windows$Data$Xml$Dom$IXmlNode): string;
  }

  declare var npm$namespace$Windows$Devices: {
    Sms: typeof npm$namespace$Windows$Devices$Sms,
    Enumeration: typeof npm$namespace$Windows$Devices$Enumeration,
    Geolocation: typeof npm$namespace$Windows$Devices$Geolocation,
    Input: typeof npm$namespace$Windows$Devices$Input,
    Portable: typeof npm$namespace$Windows$Devices$Portable,
    Printers: typeof npm$namespace$Windows$Devices$Printers,
    Sensors: typeof npm$namespace$Windows$Devices$Sensors
  };

  declare var npm$namespace$Windows$Devices$Sms: {
    SmsMessageClass: typeof Windows$Devices$Sms$SmsMessageClass,
    SmsDataFormat: typeof Windows$Devices$Sms$SmsDataFormat,
    SmsEncoding: typeof Windows$Devices$Sms$SmsEncoding,
    SmsMessageFilter: typeof Windows$Devices$Sms$SmsMessageFilter,
    SmsMessageType: typeof Windows$Devices$Sms$SmsMessageType,
    CellularClass: typeof Windows$Devices$Sms$CellularClass,
    SmsDeviceStatus: typeof Windows$Devices$Sms$SmsDeviceStatus,
    SmsBinaryMessage: typeof Windows$Devices$Sms$SmsBinaryMessage,
    SmsTextMessage: typeof Windows$Devices$Sms$SmsTextMessage,
    DeleteSmsMessageOperation: typeof Windows$Devices$Sms$DeleteSmsMessageOperation,
    DeleteSmsMessagesOperation: typeof Windows$Devices$Sms$DeleteSmsMessagesOperation,
    GetSmsMessageOperation: typeof Windows$Devices$Sms$GetSmsMessageOperation,
    GetSmsMessagesOperation: typeof Windows$Devices$Sms$GetSmsMessagesOperation,
    SmsDeviceMessageStore: typeof Windows$Devices$Sms$SmsDeviceMessageStore,
    SendSmsMessageOperation: typeof Windows$Devices$Sms$SendSmsMessageOperation,
    SmsMessageReceivedEventArgs: typeof Windows$Devices$Sms$SmsMessageReceivedEventArgs,
    SmsDevice: typeof Windows$Devices$Sms$SmsDevice,
    GetSmsDeviceOperation: typeof Windows$Devices$Sms$GetSmsDeviceOperation,
    SmsReceivedEventDetails: typeof Windows$Devices$Sms$SmsReceivedEventDetails
  };

  declare export var Windows$Devices$Sms$SmsMessageClass: {|
    +none: 0, // 0
    +class0: 1, // 1
    +class1: 2, // 2
    +class2: 3, // 3
    +class3: 4 // 4
  |};

  declare export interface Windows$Devices$Sms$ISmsMessage {
    id: number;
    messageClass: $Values<typeof Windows$Devices$Sms$SmsMessageClass>;
  }

  declare export var Windows$Devices$Sms$SmsDataFormat: {|
    +unknown: 0, // 0
    +cdmaSubmit: 1, // 1
    +gsmSubmit: 2, // 2
    +cdmaDeliver: 3, // 3
    +gsmDeliver: 4 // 4
  |};

  declare export type Windows$Devices$Sms$ISmsBinaryMessage = {
    format: $Values<typeof Windows$Devices$Sms$SmsDataFormat>,
    getData(): Uint8Array,
    setData(value: Uint8Array): void
  } & Windows$Devices$Sms$ISmsMessage;

  declare export class Windows$Devices$Sms$SmsBinaryMessage
    mixins Windows$Devices$Sms$ISmsBinaryMessage,
      Windows$Devices$Sms$ISmsMessage {
    format: $Values<typeof Windows$Devices$Sms$SmsDataFormat>;
    id: number;
    messageClass: $Values<typeof Windows$Devices$Sms$SmsMessageClass>;
    getData(): Uint8Array;
    setData(value: Uint8Array): void;
  }

  declare export var Windows$Devices$Sms$SmsEncoding: {|
    +unknown: 0, // 0
    +optimal: 1, // 1
    +sevenBitAscii: 2, // 2
    +unicode: 3, // 3
    +gsmSevenBit: 4 // 4
  |};

  declare export type Windows$Devices$Sms$ISmsTextMessage = {
    body: string,
    encoding: $Values<typeof Windows$Devices$Sms$SmsEncoding>,
    from: string,
    partCount: number,
    partNumber: number,
    partReferenceId: number,
    timestamp: Date,
    to: string,
    toBinaryMessages(
      format: $Values<typeof Windows$Devices$Sms$SmsDataFormat>
    ): Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsBinaryMessage>
  } & Windows$Devices$Sms$ISmsMessage;

  declare export interface Windows$Devices$Sms$ISmsTextMessageStatics {
    fromBinaryMessage(
      binaryMessage: Windows$Devices$Sms$SmsBinaryMessage
    ): Windows$Devices$Sms$SmsTextMessage;
    fromBinaryData(
      format: $Values<typeof Windows$Devices$Sms$SmsDataFormat>,
      value: Uint8Array
    ): Windows$Devices$Sms$SmsTextMessage;
  }

  declare export class Windows$Devices$Sms$SmsTextMessage
    mixins Windows$Devices$Sms$ISmsTextMessage,
      Windows$Devices$Sms$ISmsMessage {
    body: string;
    encoding: $Values<typeof Windows$Devices$Sms$SmsEncoding>;
    from: string;
    partCount: number;
    partNumber: number;
    partReferenceId: number;
    timestamp: Date;
    to: string;
    id: number;
    messageClass: $Values<typeof Windows$Devices$Sms$SmsMessageClass>;
    toBinaryMessages(
      format: $Values<typeof Windows$Devices$Sms$SmsDataFormat>
    ): Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsBinaryMessage>;
    static fromBinaryMessage(
      binaryMessage: Windows$Devices$Sms$SmsBinaryMessage
    ): Windows$Devices$Sms$SmsTextMessage;
    static fromBinaryData(
      format: $Values<typeof Windows$Devices$Sms$SmsDataFormat>,
      value: Uint8Array
    ): Windows$Devices$Sms$SmsTextMessage;
  }

  declare export var Windows$Devices$Sms$SmsMessageFilter: {|
    +all: 0, // 0
    +unread: 1, // 1
    +read: 2, // 2
    +sent: 3, // 3
    +draft: 4 // 4
  |};

  declare export var Windows$Devices$Sms$SmsMessageType: {|
    +binary: 0, // 0
    +text: 1 // 1
  |};

  declare export class Windows$Devices$Sms$DeleteSmsMessageOperation
    mixins Windows$Foundation$IAsyncAction, Windows$Foundation$IAsyncInfo {
    completed: Windows$Foundation$AsyncActionCompletedHandler;
    errorCode: number;
    id: number;
    status: $Values<typeof Windows$Foundation$AsyncStatus>;
    getResults(): void;
    cancel(): void;
    close(): void;
    then<U>(
      success?: (value: any) => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: any) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: any) => U,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: any) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    done<U>(
      success?: (value: any) => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ): void;
    operation: {
      completed: Windows$Foundation$AsyncOperationCompletedHandler<any>,
      getResults(): any
    };
  }

  declare export class Windows$Devices$Sms$DeleteSmsMessagesOperation
    mixins Windows$Foundation$IAsyncAction, Windows$Foundation$IAsyncInfo {
    completed: Windows$Foundation$AsyncActionCompletedHandler;
    errorCode: number;
    id: number;
    status: $Values<typeof Windows$Foundation$AsyncStatus>;
    getResults(): void;
    cancel(): void;
    close(): void;
    then<U>(
      success?: (value: any) => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: any) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: any) => U,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: any) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    done<U>(
      success?: (value: any) => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ): void;
    operation: {
      completed: Windows$Foundation$AsyncOperationCompletedHandler<any>,
      getResults(): any
    };
  }

  declare export class Windows$Devices$Sms$GetSmsMessageOperation
    mixins Windows$Foundation$IAsyncOperation<Windows$Devices$Sms$ISmsMessage>,
      Windows$Foundation$IAsyncInfo {
    completed: Windows$Foundation$AsyncOperationCompletedHandler<Windows$Devices$Sms$ISmsMessage>;
    errorCode: number;
    id: number;
    status: $Values<typeof Windows$Foundation$AsyncStatus>;
    getResults(): Windows$Devices$Sms$ISmsMessage;
    cancel(): void;
    close(): void;
    then<U>(
      success?: (value: Windows$Devices$Sms$ISmsMessage) => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (
        value: Windows$Devices$Sms$ISmsMessage
      ) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: Windows$Devices$Sms$ISmsMessage) => U,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (
        value: Windows$Devices$Sms$ISmsMessage
      ) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    done<U>(
      success?: (value: Windows$Devices$Sms$ISmsMessage) => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ): void;
    operation: {
      completed: Windows$Foundation$AsyncOperationCompletedHandler<Windows$Devices$Sms$ISmsMessage>,
      getResults(): Windows$Devices$Sms$ISmsMessage
    };
  }

  declare export class Windows$Devices$Sms$GetSmsMessagesOperation
    mixins Windows$Foundation$IAsyncOperationWithProgress<
        Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>,
        number
      >,
      Windows$Foundation$IAsyncInfo {
    completed: Windows$Foundation$AsyncOperationWithProgressCompletedHandler<
      Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>,
      number
    >;
    progress: Windows$Foundation$AsyncOperationProgressHandler<
      Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>,
      number
    >;
    errorCode: number;
    id: number;
    status: $Values<typeof Windows$Foundation$AsyncStatus>;
    getResults(): Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>;
    cancel(): void;
    close(): void;
    then<U>(
      success?: (
        value: Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>
      ) => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (
        value: Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>
      ) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (
        value: Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>
      ) => U,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (
        value: Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>
      ) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    done<U>(
      success?: (
        value: Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>
      ) => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ): void;
    operation: {
      progress: Windows$Foundation$AsyncOperationProgressHandler<
        Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>,
        number
      >,
      completed: Windows$Foundation$AsyncOperationCompletedHandler<
        Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>
      >,
      getResults(): Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>
    };
  }

  declare export interface Windows$Devices$Sms$ISmsDeviceMessageStore {
    maxMessages: number;
    deleteMessageAsync(messageId: number): Windows$Foundation$IAsyncAction;
    deleteMessagesAsync(
      messageFilter: $Values<typeof Windows$Devices$Sms$SmsMessageFilter>
    ): Windows$Foundation$IAsyncAction;
    getMessageAsync(
      messageId: number
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Sms$ISmsMessage>;
    getMessagesAsync(
      messageFilter: $Values<typeof Windows$Devices$Sms$SmsMessageFilter>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>,
      number
    >;
  }

  declare export class Windows$Devices$Sms$SmsDeviceMessageStore
    mixins Windows$Devices$Sms$ISmsDeviceMessageStore {
    maxMessages: number;
    deleteMessageAsync(messageId: number): Windows$Foundation$IAsyncAction;
    deleteMessagesAsync(
      messageFilter: $Values<typeof Windows$Devices$Sms$SmsMessageFilter>
    ): Windows$Foundation$IAsyncAction;
    getMessageAsync(
      messageId: number
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Sms$ISmsMessage>;
    getMessagesAsync(
      messageFilter: $Values<typeof Windows$Devices$Sms$SmsMessageFilter>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Foundation$Collections$IVectorView<Windows$Devices$Sms$ISmsMessage>,
      number
    >;
  }

  declare export interface Windows$Devices$Sms$SmsEncodedLength {
    segmentCount: number;
    characterCountLastSegment: number;
    charactersPerSegment: number;
    byteCountLastSegment: number;
    bytesPerSegment: number;
  }

  declare export var Windows$Devices$Sms$CellularClass: {|
    +none: 0, // 0
    +gsm: 1, // 1
    +cdma: 2 // 2
  |};

  declare export var Windows$Devices$Sms$SmsDeviceStatus: {|
    +off: 0, // 0
    +ready: 1, // 1
    +simNotInserted: 2, // 2
    +badSim: 3, // 3
    +deviceFailure: 4, // 4
    +subscriptionNotActivated: 5, // 5
    +deviceLocked: 6, // 6
    +deviceBlocked: 7 // 7
  |};

  declare export class Windows$Devices$Sms$SendSmsMessageOperation
    mixins Windows$Foundation$IAsyncAction, Windows$Foundation$IAsyncInfo {
    completed: Windows$Foundation$AsyncActionCompletedHandler;
    errorCode: number;
    id: number;
    status: $Values<typeof Windows$Foundation$AsyncStatus>;
    getResults(): void;
    cancel(): void;
    close(): void;
    then<U>(
      success?: () => Windows$Foundation$IPromise<U>,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: () => Windows$Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: () => U,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: () => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    done<U>(
      success?: () => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ): void;
    operation: {
      completed: Windows$Foundation$AsyncOperationCompletedHandler<any>,
      getResults(): any
    };
  }

  declare export interface Windows$Devices$Sms$ISmsMessageReceivedEventArgs {
    binaryMessage: Windows$Devices$Sms$SmsBinaryMessage;
    textMessage: Windows$Devices$Sms$SmsTextMessage;
  }

  declare export class Windows$Devices$Sms$SmsMessageReceivedEventArgs
    mixins Windows$Devices$Sms$ISmsMessageReceivedEventArgs {
    binaryMessage: Windows$Devices$Sms$SmsBinaryMessage;
    textMessage: Windows$Devices$Sms$SmsTextMessage;
  }

  declare export interface Windows$Devices$Sms$SmsMessageReceivedEventHandler {
    (
      sender: Windows$Devices$Sms$SmsDevice,
      e: Windows$Devices$Sms$SmsMessageReceivedEventArgs
    ): void;
  }

  declare export class Windows$Devices$Sms$SmsDevice
    mixins Windows$Devices$Sms$ISmsDevice {
    accountPhoneNumber: string;
    cellularClass: $Values<typeof Windows$Devices$Sms$CellularClass>;
    deviceStatus: $Values<typeof Windows$Devices$Sms$SmsDeviceStatus>;
    messageStore: Windows$Devices$Sms$SmsDeviceMessageStore;
    sendMessageAsync(
      message: Windows$Devices$Sms$ISmsMessage
    ): Windows$Devices$Sms$SendSmsMessageOperation;
    calculateLength(
      message: Windows$Devices$Sms$SmsTextMessage
    ): Windows$Devices$Sms$SmsEncodedLength;
    onsmsmessagereceived: any;
    onsmsdevicestatuschanged: any;
    static getDeviceSelector(): string;
    static fromIdAsync(
      deviceInstanceId: string
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Sms$SmsDevice>;
    static getDefaultAsync(): Windows$Foundation$IAsyncOperation<Windows$Devices$Sms$SmsDevice>;
  }

  declare export interface Windows$Devices$Sms$SmsDeviceStatusChangedEventHandler {
    (sender: Windows$Devices$Sms$SmsDevice): void;
  }

  declare export class Windows$Devices$Sms$GetSmsDeviceOperation
    mixins Windows$Foundation$IAsyncOperation<Windows$Devices$Sms$SmsDevice>,
      Windows$Foundation$IAsyncInfo {
    completed: Windows$Foundation$AsyncOperationCompletedHandler<Windows$Devices$Sms$SmsDevice>;
    errorCode: number;
    id: number;
    status: $Values<typeof Windows$Foundation$AsyncStatus>;
    getResults(): Windows$Devices$Sms$SmsDevice;
    cancel(): void;
    close(): void;
    then<U>(
      success?: (value: Windows$Devices$Sms$SmsDevice) => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (
        value: Windows$Devices$Sms$SmsDevice
      ) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: Windows$Devices$Sms$SmsDevice) => U,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (
        value: Windows$Devices$Sms$SmsDevice
      ) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    done<U>(
      success?: (value: Windows$Devices$Sms$SmsDevice) => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ): void;
    operation: {
      completed: Windows$Foundation$AsyncOperationCompletedHandler<Windows$Devices$Sms$SmsDevice>,
      getResults(): Windows$Devices$Sms$SmsDevice
    };
  }

  declare export interface Windows$Devices$Sms$ISmsDeviceStatics {
    getDeviceSelector(): string;
    fromIdAsync(
      deviceInstanceId: string
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Sms$SmsDevice>;
    getDefaultAsync(): Windows$Foundation$IAsyncOperation<Windows$Devices$Sms$SmsDevice>;
  }

  declare export interface Windows$Devices$Sms$ISmsDevice {
    accountPhoneNumber: string;
    cellularClass: $Values<typeof Windows$Devices$Sms$CellularClass>;
    deviceStatus: $Values<typeof Windows$Devices$Sms$SmsDeviceStatus>;
    messageStore: Windows$Devices$Sms$SmsDeviceMessageStore;
    sendMessageAsync(
      message: Windows$Devices$Sms$ISmsMessage
    ): Windows$Devices$Sms$SendSmsMessageOperation;
    calculateLength(
      message: Windows$Devices$Sms$SmsTextMessage
    ): Windows$Devices$Sms$SmsEncodedLength;
    onsmsmessagereceived: any;
    onsmsdevicestatuschanged: any;
  }

  declare export interface Windows$Devices$Sms$ISmsReceivedEventDetails {
    deviceId: string;
    messageIndex: number;
  }

  declare export class Windows$Devices$Sms$SmsReceivedEventDetails
    mixins Windows$Devices$Sms$ISmsReceivedEventDetails {
    deviceId: string;
    messageIndex: number;
  }

  declare var npm$namespace$Windows$Devices$Enumeration: {
    DeviceClass: typeof Windows$Devices$Enumeration$DeviceClass,
    DeviceWatcherStatus: typeof Windows$Devices$Enumeration$DeviceWatcherStatus,
    Panel: typeof Windows$Devices$Enumeration$Panel,
    DeviceThumbnail: typeof Windows$Devices$Enumeration$DeviceThumbnail,
    EnclosureLocation: typeof Windows$Devices$Enumeration$EnclosureLocation,
    DeviceInformationUpdate: typeof Windows$Devices$Enumeration$DeviceInformationUpdate,
    DeviceInformationCollection: typeof Windows$Devices$Enumeration$DeviceInformationCollection,
    DeviceWatcher: typeof Windows$Devices$Enumeration$DeviceWatcher,
    DeviceInformation: typeof Windows$Devices$Enumeration$DeviceInformation,
    Pnp: typeof npm$namespace$Windows$Devices$Enumeration$Pnp
  };

  declare export var Windows$Devices$Enumeration$DeviceClass: {|
    +all: 0, // 0
    +audioCapture: 1, // 1
    +audioRender: 2, // 2
    +portableStorageDevice: 3, // 3
    +videoCapture: 4 // 4
  |};

  declare export var Windows$Devices$Enumeration$DeviceWatcherStatus: {|
    +created: 0, // 0
    +started: 1, // 1
    +enumerationCompleted: 2, // 2
    +stopping: 3, // 3
    +stopped: 4, // 4
    +aborted: 5 // 5
  |};

  declare export class Windows$Devices$Enumeration$DeviceThumbnail
    mixins Windows$Storage$Streams$IRandomAccessStreamWithContentType,
      Windows$Storage$Streams$IRandomAccessStream,
      Windows$Foundation$IClosable,
      Windows$Storage$Streams$IInputStream,
      Windows$Storage$Streams$IOutputStream,
      Windows$Storage$Streams$IContentTypeProvider {
    canRead: boolean;
    canWrite: boolean;
    position: number;
    size: number;
    contentType: string;
    getInputStreamAt(position: number): Windows$Storage$Streams$IInputStream;
    getOutputStreamAt(position: number): Windows$Storage$Streams$IOutputStream;
    seek(position: number): void;
    cloneStream(): Windows$Storage$Streams$IRandomAccessStream;
    dispose(): void;
    readAsync(
      buffer: Windows$Storage$Streams$IBuffer,
      count: number,
      options: $Values<typeof Windows$Storage$Streams$InputStreamOptions>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IBuffer,
      number
    >;
    writeAsync(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    close(): void;
  }

  declare export var Windows$Devices$Enumeration$Panel: {|
    +unknown: 0, // 0
    +front: 1, // 1
    +back: 2, // 2
    +top: 3, // 3
    +bottom: 4, // 4
    +left: 5, // 5
    +right: 6 // 6
  |};

  declare export interface Windows$Devices$Enumeration$IEnclosureLocation {
    inDock: boolean;
    inLid: boolean;
    panel: $Values<typeof Windows$Devices$Enumeration$Panel>;
  }

  declare export class Windows$Devices$Enumeration$EnclosureLocation
    mixins Windows$Devices$Enumeration$IEnclosureLocation {
    inDock: boolean;
    inLid: boolean;
    panel: $Values<typeof Windows$Devices$Enumeration$Panel>;
  }

  declare export interface Windows$Devices$Enumeration$IDeviceInformationUpdate {
    id: string;
    properties: Windows$Foundation$Collections$IMapView<string, any>;
  }

  declare export class Windows$Devices$Enumeration$DeviceInformationUpdate
    mixins Windows$Devices$Enumeration$IDeviceInformationUpdate {
    id: string;
    properties: Windows$Foundation$Collections$IMapView<string, any>;
  }

  declare export class Windows$Devices$Enumeration$DeviceInformationCollection
    mixins Windows$Foundation$Collections$IVectorView<Windows$Devices$Enumeration$DeviceInformation>,
      Windows$Foundation$Collections$IIterable<Windows$Devices$Enumeration$DeviceInformation> {
    size: number;
    getAt(index: number): Windows$Devices$Enumeration$DeviceInformation;
    indexOf(
      value: Windows$Devices$Enumeration$DeviceInformation
    ): {
      index: number,
      returnValue: boolean
    };
    getMany(
      startIndex: number
    ): {
      items: Windows$Devices$Enumeration$DeviceInformation[],
      returnValue: number
    };
    first(): Windows$Foundation$Collections$IIterator<Windows$Devices$Enumeration$DeviceInformation>;
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$Devices$Enumeration$DeviceInformation[][]
    ): Windows$Devices$Enumeration$DeviceInformation[];
    join(seperator: string): string;
    pop(): Windows$Devices$Enumeration$DeviceInformation;
    push(...items: Windows$Devices$Enumeration$DeviceInformation[]): void;
    reverse(): Windows$Devices$Enumeration$DeviceInformation[];
    shift(): Windows$Devices$Enumeration$DeviceInformation;
    slice(start: number): Windows$Devices$Enumeration$DeviceInformation[];
    slice(
      start: number,
      end: number
    ): Windows$Devices$Enumeration$DeviceInformation[];
    sort(): Windows$Devices$Enumeration$DeviceInformation[];
    sort(
      compareFn: (
        a: Windows$Devices$Enumeration$DeviceInformation,
        b: Windows$Devices$Enumeration$DeviceInformation
      ) => number
    ): Windows$Devices$Enumeration$DeviceInformation[];
    splice(start: number): Windows$Devices$Enumeration$DeviceInformation[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$Devices$Enumeration$DeviceInformation[]
    ): Windows$Devices$Enumeration$DeviceInformation[];
    unshift(...items: Windows$Devices$Enumeration$DeviceInformation[]): number;
    lastIndexOf(
      searchElement: Windows$Devices$Enumeration$DeviceInformation
    ): number;
    lastIndexOf(
      searchElement: Windows$Devices$Enumeration$DeviceInformation,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$Devices$Enumeration$DeviceInformation,
        index: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$Devices$Enumeration$DeviceInformation,
        index: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Devices$Enumeration$DeviceInformation,
        index: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Devices$Enumeration$DeviceInformation,
        index: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$Devices$Enumeration$DeviceInformation,
        index: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$Devices$Enumeration$DeviceInformation,
        index: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$Devices$Enumeration$DeviceInformation,
        index: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$Devices$Enumeration$DeviceInformation,
        index: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$Devices$Enumeration$DeviceInformation,
        index: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => boolean
    ): Windows$Devices$Enumeration$DeviceInformation[];
    filter(
      callbackfn: (
        value: Windows$Devices$Enumeration$DeviceInformation,
        index: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => boolean,
      thisArg: any
    ): Windows$Devices$Enumeration$DeviceInformation[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Devices$Enumeration$DeviceInformation[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare export interface Windows$Devices$Enumeration$IDeviceWatcher {
    status: $Values<typeof Windows$Devices$Enumeration$DeviceWatcherStatus>;
    onadded: any;
    onupdated: any;
    onremoved: any;
    onenumerationcompleted: any;
    onstopped: any;
    start(): void;
    stop(): void;
  }

  declare export class Windows$Devices$Enumeration$DeviceWatcher
    mixins Windows$Devices$Enumeration$IDeviceWatcher {
    status: $Values<typeof Windows$Devices$Enumeration$DeviceWatcherStatus>;
    onadded: any;
    onupdated: any;
    onremoved: any;
    onenumerationcompleted: any;
    onstopped: any;
    start(): void;
    stop(): void;
  }

  declare export class Windows$Devices$Enumeration$DeviceInformation
    mixins Windows$Devices$Enumeration$IDeviceInformation {
    enclosureLocation: Windows$Devices$Enumeration$EnclosureLocation;
    id: string;
    isDefault: boolean;
    isEnabled: boolean;
    name: string;
    properties: Windows$Foundation$Collections$IMapView<string, any>;
    update(
      updateInfo: Windows$Devices$Enumeration$DeviceInformationUpdate
    ): void;
    getThumbnailAsync(): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceThumbnail>;
    getGlyphThumbnailAsync(): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceThumbnail>;
    static createFromIdAsync(
      id: string
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformation>;
    static createFromIdAsync(
      id: string,
      additionalProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformation>;
    static findAllAsync(): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformationCollection>;
    static findAllAsync(
      deviceClass: $Values<typeof Windows$Devices$Enumeration$DeviceClass>
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformationCollection>;
    static findAllAsync(
      aqsFilter: string
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformationCollection>;
    static findAllAsync(
      aqsFilter: string,
      additionalProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformationCollection>;
    static createWatcher(): Windows$Devices$Enumeration$DeviceWatcher;
    static createWatcher(
      deviceClass: $Values<typeof Windows$Devices$Enumeration$DeviceClass>
    ): Windows$Devices$Enumeration$DeviceWatcher;
    static createWatcher(
      aqsFilter: string
    ): Windows$Devices$Enumeration$DeviceWatcher;
    static createWatcher(
      aqsFilter: string,
      additionalProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Devices$Enumeration$DeviceWatcher;
  }

  declare export interface Windows$Devices$Enumeration$IDeviceInformationStatics {
    createFromIdAsync(
      id: string
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformation>;
    createFromIdAsync(
      id: string,
      additionalProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformation>;
    findAllAsync(): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformationCollection>;
    findAllAsync(
      deviceClass: $Values<typeof Windows$Devices$Enumeration$DeviceClass>
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformationCollection>;
    findAllAsync(
      aqsFilter: string
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformationCollection>;
    findAllAsync(
      aqsFilter: string,
      additionalProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceInformationCollection>;
    createWatcher(): Windows$Devices$Enumeration$DeviceWatcher;
    createWatcher(
      deviceClass: $Values<typeof Windows$Devices$Enumeration$DeviceClass>
    ): Windows$Devices$Enumeration$DeviceWatcher;
    createWatcher(aqsFilter: string): Windows$Devices$Enumeration$DeviceWatcher;
    createWatcher(
      aqsFilter: string,
      additionalProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Devices$Enumeration$DeviceWatcher;
  }

  declare export interface Windows$Devices$Enumeration$IDeviceInformation {
    enclosureLocation: Windows$Devices$Enumeration$EnclosureLocation;
    id: string;
    isDefault: boolean;
    isEnabled: boolean;
    name: string;
    properties: Windows$Foundation$Collections$IMapView<string, any>;
    update(
      updateInfo: Windows$Devices$Enumeration$DeviceInformationUpdate
    ): void;
    getThumbnailAsync(): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceThumbnail>;
    getGlyphThumbnailAsync(): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$DeviceThumbnail>;
  }

  declare var npm$namespace$Windows$Devices$Enumeration$Pnp: {
    PnpObjectType: typeof Windows$Devices$Enumeration$Pnp$PnpObjectType,
    PnpObjectUpdate: typeof Windows$Devices$Enumeration$Pnp$PnpObjectUpdate,
    PnpObjectCollection: typeof Windows$Devices$Enumeration$Pnp$PnpObjectCollection,
    PnpObjectWatcher: typeof Windows$Devices$Enumeration$Pnp$PnpObjectWatcher,
    PnpObject: typeof Windows$Devices$Enumeration$Pnp$PnpObject
  };

  declare export var Windows$Devices$Enumeration$Pnp$PnpObjectType: {|
    +unknown: 0, // 0
    +deviceInterface: 1, // 1
    +deviceContainer: 2, // 2
    +device: 3, // 3
    +deviceInterfaceClass: 4 // 4
  |};

  declare export interface Windows$Devices$Enumeration$Pnp$IPnpObjectUpdate {
    id: string;
    properties: Windows$Foundation$Collections$IMapView<string, any>;
    type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>;
  }

  declare export class Windows$Devices$Enumeration$Pnp$PnpObjectUpdate
    mixins Windows$Devices$Enumeration$Pnp$IPnpObjectUpdate {
    id: string;
    properties: Windows$Foundation$Collections$IMapView<string, any>;
    type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>;
  }

  declare export class Windows$Devices$Enumeration$Pnp$PnpObjectCollection
    mixins Windows$Foundation$Collections$IVectorView<Windows$Devices$Enumeration$Pnp$PnpObject>,
      Windows$Foundation$Collections$IIterable<Windows$Devices$Enumeration$Pnp$PnpObject> {
    size: number;
    getAt(index: number): Windows$Devices$Enumeration$Pnp$PnpObject;
    indexOf(
      value: Windows$Devices$Enumeration$Pnp$PnpObject
    ): {
      index: number,
      returnValue: boolean
    };
    getMany(
      startIndex: number
    ): {
      items: Windows$Devices$Enumeration$Pnp$PnpObject[],
      returnValue: number
    };
    first(): Windows$Foundation$Collections$IIterator<Windows$Devices$Enumeration$Pnp$PnpObject>;
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$Devices$Enumeration$Pnp$PnpObject[][]
    ): Windows$Devices$Enumeration$Pnp$PnpObject[];
    join(seperator: string): string;
    pop(): Windows$Devices$Enumeration$Pnp$PnpObject;
    push(...items: Windows$Devices$Enumeration$Pnp$PnpObject[]): void;
    reverse(): Windows$Devices$Enumeration$Pnp$PnpObject[];
    shift(): Windows$Devices$Enumeration$Pnp$PnpObject;
    slice(start: number): Windows$Devices$Enumeration$Pnp$PnpObject[];
    slice(
      start: number,
      end: number
    ): Windows$Devices$Enumeration$Pnp$PnpObject[];
    sort(): Windows$Devices$Enumeration$Pnp$PnpObject[];
    sort(
      compareFn: (
        a: Windows$Devices$Enumeration$Pnp$PnpObject,
        b: Windows$Devices$Enumeration$Pnp$PnpObject
      ) => number
    ): Windows$Devices$Enumeration$Pnp$PnpObject[];
    splice(start: number): Windows$Devices$Enumeration$Pnp$PnpObject[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$Devices$Enumeration$Pnp$PnpObject[]
    ): Windows$Devices$Enumeration$Pnp$PnpObject[];
    unshift(...items: Windows$Devices$Enumeration$Pnp$PnpObject[]): number;
    lastIndexOf(
      searchElement: Windows$Devices$Enumeration$Pnp$PnpObject
    ): number;
    lastIndexOf(
      searchElement: Windows$Devices$Enumeration$Pnp$PnpObject,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$Devices$Enumeration$Pnp$PnpObject,
        index: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$Devices$Enumeration$Pnp$PnpObject,
        index: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Devices$Enumeration$Pnp$PnpObject,
        index: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Devices$Enumeration$Pnp$PnpObject,
        index: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$Devices$Enumeration$Pnp$PnpObject,
        index: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$Devices$Enumeration$Pnp$PnpObject,
        index: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$Devices$Enumeration$Pnp$PnpObject,
        index: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$Devices$Enumeration$Pnp$PnpObject,
        index: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$Devices$Enumeration$Pnp$PnpObject,
        index: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => boolean
    ): Windows$Devices$Enumeration$Pnp$PnpObject[];
    filter(
      callbackfn: (
        value: Windows$Devices$Enumeration$Pnp$PnpObject,
        index: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => boolean,
      thisArg: any
    ): Windows$Devices$Enumeration$Pnp$PnpObject[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Devices$Enumeration$Pnp$PnpObject[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare export interface Windows$Devices$Enumeration$Pnp$IPnpObjectWatcher {
    status: $Values<typeof Windows$Devices$Enumeration$DeviceWatcherStatus>;
    onadded: any;
    onupdated: any;
    onremoved: any;
    onenumerationcompleted: any;
    onstopped: any;
    start(): void;
    stop(): void;
  }

  declare export class Windows$Devices$Enumeration$Pnp$PnpObjectWatcher
    mixins Windows$Devices$Enumeration$Pnp$IPnpObjectWatcher {
    status: $Values<typeof Windows$Devices$Enumeration$DeviceWatcherStatus>;
    onadded: any;
    onupdated: any;
    onremoved: any;
    onenumerationcompleted: any;
    onstopped: any;
    start(): void;
    stop(): void;
  }

  declare export class Windows$Devices$Enumeration$Pnp$PnpObject
    mixins Windows$Devices$Enumeration$Pnp$IPnpObject {
    id: string;
    properties: Windows$Foundation$Collections$IMapView<string, any>;
    type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>;
    update(updateInfo: Windows$Devices$Enumeration$Pnp$PnpObjectUpdate): void;
    static createFromIdAsync(
      type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>,
      id: string,
      requestedProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$Pnp$PnpObject>;
    static findAllAsync(
      type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>,
      requestedProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$Pnp$PnpObjectCollection>;
    static findAllAsync(
      type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>,
      requestedProperties: Windows$Foundation$Collections$IIterable<string>,
      aqsFilter: string
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$Pnp$PnpObjectCollection>;
    static createWatcher(
      type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>,
      requestedProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Devices$Enumeration$Pnp$PnpObjectWatcher;
    static createWatcher(
      type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>,
      requestedProperties: Windows$Foundation$Collections$IIterable<string>,
      aqsFilter: string
    ): Windows$Devices$Enumeration$Pnp$PnpObjectWatcher;
  }

  declare export interface Windows$Devices$Enumeration$Pnp$IPnpObjectStatics {
    createFromIdAsync(
      type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>,
      id: string,
      requestedProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$Pnp$PnpObject>;
    findAllAsync(
      type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>,
      requestedProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$Pnp$PnpObjectCollection>;
    findAllAsync(
      type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>,
      requestedProperties: Windows$Foundation$Collections$IIterable<string>,
      aqsFilter: string
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Enumeration$Pnp$PnpObjectCollection>;
    createWatcher(
      type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>,
      requestedProperties: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Devices$Enumeration$Pnp$PnpObjectWatcher;
    createWatcher(
      type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>,
      requestedProperties: Windows$Foundation$Collections$IIterable<string>,
      aqsFilter: string
    ): Windows$Devices$Enumeration$Pnp$PnpObjectWatcher;
  }

  declare export interface Windows$Devices$Enumeration$Pnp$IPnpObject {
    id: string;
    properties: Windows$Foundation$Collections$IMapView<string, any>;
    type: $Values<typeof Windows$Devices$Enumeration$Pnp$PnpObjectType>;
    update(updateInfo: Windows$Devices$Enumeration$Pnp$PnpObjectUpdate): void;
  }

  declare var npm$namespace$Windows$Devices$Geolocation: {
    PositionAccuracy: typeof Windows$Devices$Geolocation$PositionAccuracy,
    PositionStatus: typeof Windows$Devices$Geolocation$PositionStatus,
    Geocoordinate: typeof Windows$Devices$Geolocation$Geocoordinate,
    CivicAddress: typeof Windows$Devices$Geolocation$CivicAddress,
    Geoposition: typeof Windows$Devices$Geolocation$Geoposition,
    PositionChangedEventArgs: typeof Windows$Devices$Geolocation$PositionChangedEventArgs,
    StatusChangedEventArgs: typeof Windows$Devices$Geolocation$StatusChangedEventArgs,
    Geolocator: typeof Windows$Devices$Geolocation$Geolocator
  };

  declare export var Windows$Devices$Geolocation$PositionAccuracy: {|
    +default: 0, // 0
    +high: 1 // 1
  |};

  declare export var Windows$Devices$Geolocation$PositionStatus: {|
    +ready: 0, // 0
    +initializing: 1, // 1
    +noData: 2, // 2
    +disabled: 3, // 3
    +notInitialized: 4, // 4
    +notAvailable: 5 // 5
  |};

  declare export interface Windows$Devices$Geolocation$IGeocoordinate {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
    timestamp: Date;
  }

  declare export class Windows$Devices$Geolocation$Geocoordinate
    mixins Windows$Devices$Geolocation$IGeocoordinate {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
    timestamp: Date;
  }

  declare export interface Windows$Devices$Geolocation$ICivicAddress {
    city: string;
    country: string;
    postalCode: string;
    state: string;
    timestamp: Date;
  }

  declare export class Windows$Devices$Geolocation$CivicAddress
    mixins Windows$Devices$Geolocation$ICivicAddress {
    city: string;
    country: string;
    postalCode: string;
    state: string;
    timestamp: Date;
  }

  declare export interface Windows$Devices$Geolocation$IGeoposition {
    civicAddress: Windows$Devices$Geolocation$CivicAddress;
    coordinate: Windows$Devices$Geolocation$Geocoordinate;
  }

  declare export class Windows$Devices$Geolocation$Geoposition
    mixins Windows$Devices$Geolocation$IGeoposition {
    civicAddress: Windows$Devices$Geolocation$CivicAddress;
    coordinate: Windows$Devices$Geolocation$Geocoordinate;
  }

  declare export interface Windows$Devices$Geolocation$IPositionChangedEventArgs {
    position: Windows$Devices$Geolocation$Geoposition;
  }

  declare export class Windows$Devices$Geolocation$PositionChangedEventArgs
    mixins Windows$Devices$Geolocation$IPositionChangedEventArgs {
    position: Windows$Devices$Geolocation$Geoposition;
  }

  declare export interface Windows$Devices$Geolocation$IStatusChangedEventArgs {
    status: $Values<typeof Windows$Devices$Geolocation$PositionStatus>;
  }

  declare export class Windows$Devices$Geolocation$StatusChangedEventArgs
    mixins Windows$Devices$Geolocation$IStatusChangedEventArgs {
    status: $Values<typeof Windows$Devices$Geolocation$PositionStatus>;
  }

  declare export interface Windows$Devices$Geolocation$IGeolocator {
    desiredAccuracy: $Values<
      typeof Windows$Devices$Geolocation$PositionAccuracy
    >;
    locationStatus: $Values<typeof Windows$Devices$Geolocation$PositionStatus>;
    movementThreshold: number;
    reportInterval: number;
    getGeopositionAsync(): Windows$Foundation$IAsyncOperation<Windows$Devices$Geolocation$Geoposition>;
    getGeopositionAsync(
      maximumAge: number,
      timeout: number
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Geolocation$Geoposition>;
    onpositionchanged: any;
    onstatuschanged: any;
  }

  declare export class Windows$Devices$Geolocation$Geolocator
    mixins Windows$Devices$Geolocation$IGeolocator {
    desiredAccuracy: $Values<
      typeof Windows$Devices$Geolocation$PositionAccuracy
    >;
    locationStatus: $Values<typeof Windows$Devices$Geolocation$PositionStatus>;
    movementThreshold: number;
    reportInterval: number;
    getGeopositionAsync(): Windows$Foundation$IAsyncOperation<Windows$Devices$Geolocation$Geoposition>;
    getGeopositionAsync(
      maximumAge: number,
      timeout: number
    ): Windows$Foundation$IAsyncOperation<Windows$Devices$Geolocation$Geoposition>;
    onpositionchanged: any;
    onstatuschanged: any;
  }

  declare var npm$namespace$Windows$Devices$Input: {
    PointerDeviceType: typeof Windows$Devices$Input$PointerDeviceType,
    PointerDevice: typeof Windows$Devices$Input$PointerDevice,
    MouseDevice: typeof Windows$Devices$Input$MouseDevice,
    MouseEventArgs: typeof Windows$Devices$Input$MouseEventArgs,
    MouseCapabilities: typeof Windows$Devices$Input$MouseCapabilities,
    KeyboardCapabilities: typeof Windows$Devices$Input$KeyboardCapabilities,
    TouchCapabilities: typeof Windows$Devices$Input$TouchCapabilities
  };

  declare export var Windows$Devices$Input$PointerDeviceType: {|
    +touch: 0, // 0
    +pen: 1, // 1
    +mouse: 2 // 2
  |};

  declare export interface Windows$Devices$Input$PointerDeviceUsage {
    usagePage: number;
    usage: number;
    minLogical: number;
    maxLogical: number;
    minPhysical: number;
    maxPhysical: number;
    unit: number;
    physicalMultiplier: number;
  }

  declare export interface Windows$Devices$Input$MouseDelta {
    x: number;
    y: number;
  }

  declare export interface Windows$Devices$Input$IMouseCapabilities {
    horizontalWheelPresent: number;
    mousePresent: number;
    numberOfButtons: number;
    swapButtons: number;
    verticalWheelPresent: number;
  }

  declare export interface Windows$Devices$Input$IKeyboardCapabilities {
    keyboardPresent: number;
  }

  declare export interface Windows$Devices$Input$ITouchCapabilities {
    contacts: number;
    touchPresent: number;
  }

  declare export interface Windows$Devices$Input$IPointerDeviceStatics {
    getPointerDevice(pointerId: number): Windows$Devices$Input$PointerDevice;
    getPointerDevices(): Windows$Foundation$Collections$IVectorView<Windows$Devices$Input$PointerDevice>;
  }

  declare export class Windows$Devices$Input$PointerDevice
    mixins Windows$Devices$Input$IPointerDevice {
    isIntegrated: boolean;
    maxContacts: number;
    physicalDeviceRect: Windows$Foundation$Rect;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    screenRect: Windows$Foundation$Rect;
    supportedUsages: Windows$Foundation$Collections$IVectorView<Windows$Devices$Input$PointerDeviceUsage>;
    static getPointerDevice(
      pointerId: number
    ): Windows$Devices$Input$PointerDevice;
    static getPointerDevices(): Windows$Foundation$Collections$IVectorView<Windows$Devices$Input$PointerDevice>;
  }

  declare export interface Windows$Devices$Input$IPointerDevice {
    isIntegrated: boolean;
    maxContacts: number;
    physicalDeviceRect: Windows$Foundation$Rect;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    screenRect: Windows$Foundation$Rect;
    supportedUsages: Windows$Foundation$Collections$IVectorView<Windows$Devices$Input$PointerDeviceUsage>;
  }

  declare export interface Windows$Devices$Input$IMouseEventArgs {
    mouseDelta: Windows$Devices$Input$MouseDelta;
  }

  declare export interface Windows$Devices$Input$IMouseDevice {
    onmousemoved: any;
  }

  declare export class Windows$Devices$Input$MouseDevice
    mixins Windows$Devices$Input$IMouseDevice {
    onmousemoved: any;
    static getForCurrentView(): Windows$Devices$Input$MouseDevice;
  }

  declare export class Windows$Devices$Input$MouseEventArgs
    mixins Windows$Devices$Input$IMouseEventArgs {
    mouseDelta: Windows$Devices$Input$MouseDelta;
  }

  declare export interface Windows$Devices$Input$IMouseDeviceStatics {
    getForCurrentView(): Windows$Devices$Input$MouseDevice;
  }

  declare export class Windows$Devices$Input$MouseCapabilities
    mixins Windows$Devices$Input$IMouseCapabilities {
    horizontalWheelPresent: number;
    mousePresent: number;
    numberOfButtons: number;
    swapButtons: number;
    verticalWheelPresent: number;
  }

  declare export class Windows$Devices$Input$KeyboardCapabilities
    mixins Windows$Devices$Input$IKeyboardCapabilities {
    keyboardPresent: number;
  }

  declare export class Windows$Devices$Input$TouchCapabilities
    mixins Windows$Devices$Input$ITouchCapabilities {
    contacts: number;
    touchPresent: number;
  }

  declare var npm$namespace$Windows$Devices$Portable: {
    ServiceDeviceType: typeof Windows$Devices$Portable$ServiceDeviceType,
    StorageDevice: typeof Windows$Devices$Portable$StorageDevice,
    ServiceDevice: typeof Windows$Devices$Portable$ServiceDevice
  };

  declare export var Windows$Devices$Portable$ServiceDeviceType: {|
    +calendarService: 0, // 0
    +contactsService: 1, // 1
    +deviceStatusService: 2, // 2
    +notesService: 3, // 3
    +ringtonesService: 4, // 4
    +smsService: 5, // 5
    +tasksService: 6 // 6
  |};

  declare export interface Windows$Devices$Portable$IStorageDeviceStatics {
    fromId(interfaceId: string): Windows$Storage$StorageFolder;
    getDeviceSelector(): string;
  }

  declare export interface Windows$Devices$Portable$IServiceDeviceStatics {
    getDeviceSelector(
      serviceType: $Values<typeof Windows$Devices$Portable$ServiceDeviceType>
    ): string;
    getDeviceSelectorFromServiceId(serviceId: string): string;
  }

  declare export class Windows$Devices$Portable$StorageDevice {
    static fromId(interfaceId: string): Windows$Storage$StorageFolder;
    static getDeviceSelector(): string;
  }

  declare export class Windows$Devices$Portable$ServiceDevice {
    static getDeviceSelector(
      serviceType: $Values<typeof Windows$Devices$Portable$ServiceDeviceType>
    ): string;
    static getDeviceSelectorFromServiceId(serviceId: string): string;
  }

  declare var npm$namespace$Windows$Devices$Printers: {
    Extensions: typeof npm$namespace$Windows$Devices$Printers$Extensions
  };

  declare var npm$namespace$Windows$Devices$Printers$Extensions: {
    PrintTaskConfigurationSaveRequestedDeferral: typeof Windows$Devices$Printers$Extensions$PrintTaskConfigurationSaveRequestedDeferral,
    PrintTaskConfigurationSaveRequest: typeof Windows$Devices$Printers$Extensions$PrintTaskConfigurationSaveRequest,
    PrintTaskConfigurationSaveRequestedEventArgs: typeof Windows$Devices$Printers$Extensions$PrintTaskConfigurationSaveRequestedEventArgs,
    PrintTaskConfiguration: typeof Windows$Devices$Printers$Extensions$PrintTaskConfiguration,
    PrintNotificationEventDetails: typeof Windows$Devices$Printers$Extensions$PrintNotificationEventDetails,
    PrintExtensionContext: typeof Windows$Devices$Printers$Extensions$PrintExtensionContext
  };
  declare export interface Windows$Devices$Printers$Extensions$IPrintTaskConfigurationSaveRequestedDeferral {
    complete(): void;
  }

  declare export class Windows$Devices$Printers$Extensions$PrintTaskConfigurationSaveRequestedDeferral
    mixins Windows$Devices$Printers$Extensions$IPrintTaskConfigurationSaveRequestedDeferral {
    complete(): void;
  }

  declare export interface Windows$Devices$Printers$Extensions$IPrintTaskConfigurationSaveRequest {
    deadline: Date;
    cancel(): void;
    save(printerExtensionContext: any): void;
    getDeferral(): Windows$Devices$Printers$Extensions$PrintTaskConfigurationSaveRequestedDeferral;
  }

  declare export class Windows$Devices$Printers$Extensions$PrintTaskConfigurationSaveRequest
    mixins Windows$Devices$Printers$Extensions$IPrintTaskConfigurationSaveRequest {
    deadline: Date;
    cancel(): void;
    save(printerExtensionContext: any): void;
    getDeferral(): Windows$Devices$Printers$Extensions$PrintTaskConfigurationSaveRequestedDeferral;
  }

  declare export interface Windows$Devices$Printers$Extensions$IPrintTaskConfigurationSaveRequestedEventArgs {
    request: Windows$Devices$Printers$Extensions$PrintTaskConfigurationSaveRequest;
  }

  declare export class Windows$Devices$Printers$Extensions$PrintTaskConfigurationSaveRequestedEventArgs
    mixins Windows$Devices$Printers$Extensions$IPrintTaskConfigurationSaveRequestedEventArgs {
    request: Windows$Devices$Printers$Extensions$PrintTaskConfigurationSaveRequest;
  }

  declare export interface Windows$Devices$Printers$Extensions$IPrintTaskConfiguration {
    printerExtensionContext: any;
    onsaverequested: any;
  }

  declare export class Windows$Devices$Printers$Extensions$PrintTaskConfiguration
    mixins Windows$Devices$Printers$Extensions$IPrintTaskConfiguration {
    printerExtensionContext: any;
    onsaverequested: any;
  }

  declare export interface Windows$Devices$Printers$Extensions$IPrintNotificationEventDetails {
    eventData: string;
    printerName: string;
  }

  declare export class Windows$Devices$Printers$Extensions$PrintNotificationEventDetails
    mixins Windows$Devices$Printers$Extensions$IPrintNotificationEventDetails {
    eventData: string;
    printerName: string;
  }

  declare export interface Windows$Devices$Printers$Extensions$IPrintExtensionContextStatic {
    fromDeviceId(deviceId: string): any;
  }

  declare export class Windows$Devices$Printers$Extensions$PrintExtensionContext {
    static fromDeviceId(deviceId: string): any;
  }

  declare var npm$namespace$Windows$Devices$Sensors: {
    SimpleOrientation: typeof Windows$Devices$Sensors$SimpleOrientation,
    Accelerometer: typeof Windows$Devices$Sensors$Accelerometer,
    AccelerometerReading: typeof Windows$Devices$Sensors$AccelerometerReading,
    AccelerometerReadingChangedEventArgs: typeof Windows$Devices$Sensors$AccelerometerReadingChangedEventArgs,
    AccelerometerShakenEventArgs: typeof Windows$Devices$Sensors$AccelerometerShakenEventArgs,
    Inclinometer: typeof Windows$Devices$Sensors$Inclinometer,
    InclinometerReading: typeof Windows$Devices$Sensors$InclinometerReading,
    InclinometerReadingChangedEventArgs: typeof Windows$Devices$Sensors$InclinometerReadingChangedEventArgs,
    Gyrometer: typeof Windows$Devices$Sensors$Gyrometer,
    GyrometerReading: typeof Windows$Devices$Sensors$GyrometerReading,
    GyrometerReadingChangedEventArgs: typeof Windows$Devices$Sensors$GyrometerReadingChangedEventArgs,
    Compass: typeof Windows$Devices$Sensors$Compass,
    CompassReading: typeof Windows$Devices$Sensors$CompassReading,
    CompassReadingChangedEventArgs: typeof Windows$Devices$Sensors$CompassReadingChangedEventArgs,
    LightSensor: typeof Windows$Devices$Sensors$LightSensor,
    LightSensorReading: typeof Windows$Devices$Sensors$LightSensorReading,
    LightSensorReadingChangedEventArgs: typeof Windows$Devices$Sensors$LightSensorReadingChangedEventArgs,
    SensorRotationMatrix: typeof Windows$Devices$Sensors$SensorRotationMatrix,
    SensorQuaternion: typeof Windows$Devices$Sensors$SensorQuaternion,
    OrientationSensor: typeof Windows$Devices$Sensors$OrientationSensor,
    OrientationSensorReading: typeof Windows$Devices$Sensors$OrientationSensorReading,
    OrientationSensorReadingChangedEventArgs: typeof Windows$Devices$Sensors$OrientationSensorReadingChangedEventArgs,
    SimpleOrientationSensor: typeof Windows$Devices$Sensors$SimpleOrientationSensor,
    SimpleOrientationSensorOrientationChangedEventArgs: typeof Windows$Devices$Sensors$SimpleOrientationSensorOrientationChangedEventArgs
  };
  declare export interface Windows$Devices$Sensors$IAccelerometerStatics {
    getDefault(): Windows$Devices$Sensors$Accelerometer;
  }

  declare export class Windows$Devices$Sensors$Accelerometer
    mixins Windows$Devices$Sensors$IAccelerometer {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$AccelerometerReading;
    onreadingchanged: any;
    onshaken: any;
    static getDefault(): Windows$Devices$Sensors$Accelerometer;
  }

  declare export interface Windows$Devices$Sensors$IAccelerometer {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$AccelerometerReading;
    onreadingchanged: any;
    onshaken: any;
  }

  declare export class Windows$Devices$Sensors$AccelerometerReading
    mixins Windows$Devices$Sensors$IAccelerometerReading {
    accelerationX: number;
    accelerationY: number;
    accelerationZ: number;
    timestamp: Date;
  }

  declare export class Windows$Devices$Sensors$AccelerometerReadingChangedEventArgs
    mixins Windows$Devices$Sensors$IAccelerometerReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$AccelerometerReading;
  }

  declare export class Windows$Devices$Sensors$AccelerometerShakenEventArgs
    mixins Windows$Devices$Sensors$IAccelerometerShakenEventArgs {
    timestamp: Date;
  }

  declare export interface Windows$Devices$Sensors$IAccelerometerReading {
    accelerationX: number;
    accelerationY: number;
    accelerationZ: number;
    timestamp: Date;
  }

  declare export interface Windows$Devices$Sensors$IAccelerometerReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$AccelerometerReading;
  }

  declare export interface Windows$Devices$Sensors$IAccelerometerShakenEventArgs {
    timestamp: Date;
  }

  declare export interface Windows$Devices$Sensors$IInclinometerStatics {
    getDefault(): Windows$Devices$Sensors$Inclinometer;
  }

  declare export class Windows$Devices$Sensors$Inclinometer
    mixins Windows$Devices$Sensors$IInclinometer {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$InclinometerReading;
    onreadingchanged: any;
    static getDefault(): Windows$Devices$Sensors$Inclinometer;
  }

  declare export interface Windows$Devices$Sensors$IInclinometer {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$InclinometerReading;
    onreadingchanged: any;
  }

  declare export class Windows$Devices$Sensors$InclinometerReading
    mixins Windows$Devices$Sensors$IInclinometerReading {
    pitchDegrees: number;
    rollDegrees: number;
    timestamp: Date;
    yawDegrees: number;
  }

  declare export class Windows$Devices$Sensors$InclinometerReadingChangedEventArgs
    mixins Windows$Devices$Sensors$IInclinometerReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$InclinometerReading;
  }

  declare export interface Windows$Devices$Sensors$IInclinometerReading {
    pitchDegrees: number;
    rollDegrees: number;
    timestamp: Date;
    yawDegrees: number;
  }

  declare export interface Windows$Devices$Sensors$IInclinometerReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$InclinometerReading;
  }

  declare export interface Windows$Devices$Sensors$IGyrometerStatics {
    getDefault(): Windows$Devices$Sensors$Gyrometer;
  }

  declare export class Windows$Devices$Sensors$Gyrometer
    mixins Windows$Devices$Sensors$IGyrometer {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$GyrometerReading;
    onreadingchanged: any;
    static getDefault(): Windows$Devices$Sensors$Gyrometer;
  }

  declare export interface Windows$Devices$Sensors$IGyrometer {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$GyrometerReading;
    onreadingchanged: any;
  }

  declare export class Windows$Devices$Sensors$GyrometerReading
    mixins Windows$Devices$Sensors$IGyrometerReading {
    angularVelocityX: number;
    angularVelocityY: number;
    angularVelocityZ: number;
    timestamp: Date;
  }

  declare export class Windows$Devices$Sensors$GyrometerReadingChangedEventArgs
    mixins Windows$Devices$Sensors$IGyrometerReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$GyrometerReading;
  }

  declare export interface Windows$Devices$Sensors$IGyrometerReading {
    angularVelocityX: number;
    angularVelocityY: number;
    angularVelocityZ: number;
    timestamp: Date;
  }

  declare export interface Windows$Devices$Sensors$IGyrometerReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$GyrometerReading;
  }

  declare export interface Windows$Devices$Sensors$ICompassStatics {
    getDefault(): Windows$Devices$Sensors$Compass;
  }

  declare export class Windows$Devices$Sensors$Compass
    mixins Windows$Devices$Sensors$ICompass {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$CompassReading;
    onreadingchanged: any;
    static getDefault(): Windows$Devices$Sensors$Compass;
  }

  declare export interface Windows$Devices$Sensors$ICompass {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$CompassReading;
    onreadingchanged: any;
  }

  declare export class Windows$Devices$Sensors$CompassReading
    mixins Windows$Devices$Sensors$ICompassReading {
    headingMagneticNorth: number;
    headingTrueNorth: number;
    timestamp: Date;
  }

  declare export class Windows$Devices$Sensors$CompassReadingChangedEventArgs
    mixins Windows$Devices$Sensors$ICompassReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$CompassReading;
  }

  declare export interface Windows$Devices$Sensors$ICompassReading {
    headingMagneticNorth: number;
    headingTrueNorth: number;
    timestamp: Date;
  }

  declare export interface Windows$Devices$Sensors$ICompassReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$CompassReading;
  }

  declare export interface Windows$Devices$Sensors$ILightSensorStatics {
    getDefault(): Windows$Devices$Sensors$LightSensor;
  }

  declare export class Windows$Devices$Sensors$LightSensor
    mixins Windows$Devices$Sensors$ILightSensor {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$LightSensorReading;
    onreadingchanged: any;
    static getDefault(): Windows$Devices$Sensors$LightSensor;
  }

  declare export interface Windows$Devices$Sensors$ILightSensor {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$LightSensorReading;
    onreadingchanged: any;
  }

  declare export class Windows$Devices$Sensors$LightSensorReading
    mixins Windows$Devices$Sensors$ILightSensorReading {
    illuminanceInLux: number;
    timestamp: Date;
  }

  declare export class Windows$Devices$Sensors$LightSensorReadingChangedEventArgs
    mixins Windows$Devices$Sensors$ILightSensorReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$LightSensorReading;
  }

  declare export interface Windows$Devices$Sensors$ILightSensorReading {
    illuminanceInLux: number;
    timestamp: Date;
  }

  declare export interface Windows$Devices$Sensors$ILightSensorReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$LightSensorReading;
  }

  declare export interface Windows$Devices$Sensors$ISensorRotationMatrix {
    m11: number;
    m12: number;
    m13: number;
    m21: number;
    m22: number;
    m23: number;
    m31: number;
    m32: number;
    m33: number;
  }

  declare export interface Windows$Devices$Sensors$ISensorQuaternion {
    w: number;
    x: number;
    y: number;
    z: number;
  }

  declare export class Windows$Devices$Sensors$SensorRotationMatrix
    mixins Windows$Devices$Sensors$ISensorRotationMatrix {
    m11: number;
    m12: number;
    m13: number;
    m21: number;
    m22: number;
    m23: number;
    m31: number;
    m32: number;
    m33: number;
  }

  declare export class Windows$Devices$Sensors$SensorQuaternion
    mixins Windows$Devices$Sensors$ISensorQuaternion {
    w: number;
    x: number;
    y: number;
    z: number;
  }

  declare export interface Windows$Devices$Sensors$IOrientationSensorStatics {
    getDefault(): Windows$Devices$Sensors$OrientationSensor;
  }

  declare export class Windows$Devices$Sensors$OrientationSensor
    mixins Windows$Devices$Sensors$IOrientationSensor {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$OrientationSensorReading;
    onreadingchanged: any;
    static getDefault(): Windows$Devices$Sensors$OrientationSensor;
  }

  declare export interface Windows$Devices$Sensors$IOrientationSensor {
    minimumReportInterval: number;
    reportInterval: number;
    getCurrentReading(): Windows$Devices$Sensors$OrientationSensorReading;
    onreadingchanged: any;
  }

  declare export class Windows$Devices$Sensors$OrientationSensorReading
    mixins Windows$Devices$Sensors$IOrientationSensorReading {
    quaternion: Windows$Devices$Sensors$SensorQuaternion;
    rotationMatrix: Windows$Devices$Sensors$SensorRotationMatrix;
    timestamp: Date;
  }

  declare export class Windows$Devices$Sensors$OrientationSensorReadingChangedEventArgs
    mixins Windows$Devices$Sensors$IOrientationSensorReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$OrientationSensorReading;
  }

  declare export interface Windows$Devices$Sensors$IOrientationSensorReading {
    quaternion: Windows$Devices$Sensors$SensorQuaternion;
    rotationMatrix: Windows$Devices$Sensors$SensorRotationMatrix;
    timestamp: Date;
  }

  declare export interface Windows$Devices$Sensors$IOrientationSensorReadingChangedEventArgs {
    reading: Windows$Devices$Sensors$OrientationSensorReading;
  }

  declare export var Windows$Devices$Sensors$SimpleOrientation: {|
    +notRotated: 0, // 0
    +rotated90DegreesCounterclockwise: 1, // 1
    +rotated180DegreesCounterclockwise: 2, // 2
    +rotated270DegreesCounterclockwise: 3, // 3
    +faceup: 4, // 4
    +facedown: 5 // 5
  |};

  declare export interface Windows$Devices$Sensors$ISimpleOrientationSensorStatics {
    getDefault(): Windows$Devices$Sensors$SimpleOrientationSensor;
  }

  declare export class Windows$Devices$Sensors$SimpleOrientationSensor
    mixins Windows$Devices$Sensors$ISimpleOrientationSensor {
    getCurrentOrientation(): $Values<
      typeof Windows$Devices$Sensors$SimpleOrientation
    >;
    onorientationchanged: any;
    static getDefault(): Windows$Devices$Sensors$SimpleOrientationSensor;
  }

  declare export interface Windows$Devices$Sensors$ISimpleOrientationSensor {
    getCurrentOrientation(): $Values<
      typeof Windows$Devices$Sensors$SimpleOrientation
    >;
    onorientationchanged: any;
  }

  declare export class Windows$Devices$Sensors$SimpleOrientationSensorOrientationChangedEventArgs
    mixins Windows$Devices$Sensors$ISimpleOrientationSensorOrientationChangedEventArgs {
    orientation: $Values<typeof Windows$Devices$Sensors$SimpleOrientation>;
    timestamp: Date;
  }

  declare export interface Windows$Devices$Sensors$ISimpleOrientationSensorOrientationChangedEventArgs {
    orientation: $Values<typeof Windows$Devices$Sensors$SimpleOrientation>;
    timestamp: Date;
  }

  declare var npm$namespace$Windows$Globalization: {
    DayOfWeek: typeof Windows$Globalization$DayOfWeek,
    CalendarIdentifiers: typeof Windows$Globalization$CalendarIdentifiers,
    ClockIdentifiers: typeof Windows$Globalization$ClockIdentifiers,
    GeographicRegion: typeof Windows$Globalization$GeographicRegion,
    Language: typeof Windows$Globalization$Language,
    Calendar: typeof Windows$Globalization$Calendar,
    ApplicationLanguages: typeof Windows$Globalization$ApplicationLanguages,
    Fonts: typeof npm$namespace$Windows$Globalization$Fonts,
    DateTimeFormatting: typeof npm$namespace$Windows$Globalization$DateTimeFormatting,
    NumberFormatting: typeof npm$namespace$Windows$Globalization$NumberFormatting,
    Collation: typeof npm$namespace$Windows$Globalization$Collation
  };

  declare var npm$namespace$Windows$Globalization$Fonts: {
    LanguageFont: typeof Windows$Globalization$Fonts$LanguageFont,
    LanguageFontGroup: typeof Windows$Globalization$Fonts$LanguageFontGroup
  };
  declare export interface Windows$Globalization$Fonts$ILanguageFontGroup {
    documentAlternate1Font: Windows$Globalization$Fonts$LanguageFont;
    documentAlternate2Font: Windows$Globalization$Fonts$LanguageFont;
    documentHeadingFont: Windows$Globalization$Fonts$LanguageFont;
    fixedWidthTextFont: Windows$Globalization$Fonts$LanguageFont;
    modernDocumentFont: Windows$Globalization$Fonts$LanguageFont;
    traditionalDocumentFont: Windows$Globalization$Fonts$LanguageFont;
    uICaptionFont: Windows$Globalization$Fonts$LanguageFont;
    uIHeadingFont: Windows$Globalization$Fonts$LanguageFont;
    uINotificationHeadingFont: Windows$Globalization$Fonts$LanguageFont;
    uITextFont: Windows$Globalization$Fonts$LanguageFont;
    uITitleFont: Windows$Globalization$Fonts$LanguageFont;
  }

  declare export class Windows$Globalization$Fonts$LanguageFont
    mixins Windows$Globalization$Fonts$ILanguageFont {
    fontFamily: string;
    fontStretch: $Values<typeof Windows$UI$Text$FontStretch>;
    fontStyle: $Values<typeof Windows$UI$Text$FontStyle>;
    fontWeight: Windows$UI$Text$FontWeight;
    scaleFactor: number;
  }

  declare export interface Windows$Globalization$Fonts$ILanguageFontGroupFactory {
    createLanguageFontGroup(
      languageTag: string
    ): Windows$Globalization$Fonts$LanguageFontGroup;
  }

  declare export class Windows$Globalization$Fonts$LanguageFontGroup
    mixins Windows$Globalization$Fonts$ILanguageFontGroup {
    constructor(languageTag: string): this;
    documentAlternate1Font: Windows$Globalization$Fonts$LanguageFont;
    documentAlternate2Font: Windows$Globalization$Fonts$LanguageFont;
    documentHeadingFont: Windows$Globalization$Fonts$LanguageFont;
    fixedWidthTextFont: Windows$Globalization$Fonts$LanguageFont;
    modernDocumentFont: Windows$Globalization$Fonts$LanguageFont;
    traditionalDocumentFont: Windows$Globalization$Fonts$LanguageFont;
    uICaptionFont: Windows$Globalization$Fonts$LanguageFont;
    uIHeadingFont: Windows$Globalization$Fonts$LanguageFont;
    uINotificationHeadingFont: Windows$Globalization$Fonts$LanguageFont;
    uITextFont: Windows$Globalization$Fonts$LanguageFont;
    uITitleFont: Windows$Globalization$Fonts$LanguageFont;
  }

  declare export interface Windows$Globalization$Fonts$ILanguageFont {
    fontFamily: string;
    fontStretch: $Values<typeof Windows$UI$Text$FontStretch>;
    fontStyle: $Values<typeof Windows$UI$Text$FontStyle>;
    fontWeight: Windows$UI$Text$FontWeight;
    scaleFactor: number;
  }

  declare export var Windows$Globalization$DayOfWeek: {|
    +sunday: 0, // 0
    +monday: 1, // 1
    +tuesday: 2, // 2
    +wednesday: 3, // 3
    +thursday: 4, // 4
    +friday: 5, // 5
    +saturday: 6 // 6
  |};

  declare export interface Windows$Globalization$ICalendarIdentifiersStatics {
    gregorian: string;
    hebrew: string;
    hijri: string;
    japanese: string;
    julian: string;
    korean: string;
    taiwan: string;
    thai: string;
    umAlQura: string;
  }

  declare export class Windows$Globalization$CalendarIdentifiers {
    static gregorian: string;
    static hebrew: string;
    static hijri: string;
    static japanese: string;
    static julian: string;
    static korean: string;
    static taiwan: string;
    static thai: string;
    static umAlQura: string;
  }

  declare export interface Windows$Globalization$IClockIdentifiersStatics {
    twelveHour: string;
    twentyFourHour: string;
  }

  declare export class Windows$Globalization$ClockIdentifiers {
    static twelveHour: string;
    static twentyFourHour: string;
  }

  declare export interface Windows$Globalization$IGeographicRegion {
    code: string;
    codeThreeDigit: string;
    codeThreeLetter: string;
    codeTwoLetter: string;
    currenciesInUse: Windows$Foundation$Collections$IVectorView<string>;
    displayName: string;
    nativeName: string;
  }

  declare export interface Windows$Globalization$IGeographicRegionFactory {
    createGeographicRegion(
      geographicRegionCode: string
    ): Windows$Globalization$GeographicRegion;
  }

  declare export class Windows$Globalization$GeographicRegion
    mixins Windows$Globalization$IGeographicRegion {
    constructor(geographicRegionCode: string): this;
    constructor(): this;
    code: string;
    codeThreeDigit: string;
    codeThreeLetter: string;
    codeTwoLetter: string;
    currenciesInUse: Windows$Foundation$Collections$IVectorView<string>;
    displayName: string;
    nativeName: string;
    static isSupported(geographicRegionCode: string): boolean;
  }

  declare export interface Windows$Globalization$IGeographicRegionStatics {
    isSupported(geographicRegionCode: string): boolean;
  }

  declare export interface Windows$Globalization$ILanguage {
    displayName: string;
    languageTag: string;
    nativeName: string;
    script: string;
  }

  declare export interface Windows$Globalization$ILanguageFactory {
    createLanguage(languageTag: string): Windows$Globalization$Language;
  }

  declare export class Windows$Globalization$Language
    mixins Windows$Globalization$ILanguage {
    constructor(languageTag: string): this;
    displayName: string;
    languageTag: string;
    nativeName: string;
    script: string;
    static currentInputMethodLanguageTag: string;
    static isWellFormed(languageTag: string): boolean;
  }

  declare export interface Windows$Globalization$ILanguageStatics {
    currentInputMethodLanguageTag: string;
    isWellFormed(languageTag: string): boolean;
  }

  declare export interface Windows$Globalization$ICalendar {
    day: number;
    dayOfWeek: $Values<typeof Windows$Globalization$DayOfWeek>;
    era: number;
    firstDayInThisMonth: number;
    firstEra: number;
    firstHourInThisPeriod: number;
    firstMinuteInThisHour: number;
    firstMonthInThisYear: number;
    firstPeriodInThisDay: number;
    firstSecondInThisMinute: number;
    firstYearInThisEra: number;
    hour: number;
    isDaylightSavingTime: boolean;
    languages: Windows$Foundation$Collections$IVectorView<string>;
    lastDayInThisMonth: number;
    lastEra: number;
    lastHourInThisPeriod: number;
    lastMinuteInThisHour: number;
    lastMonthInThisYear: number;
    lastPeriodInThisDay: number;
    lastSecondInThisMinute: number;
    lastYearInThisEra: number;
    minute: number;
    month: number;
    nanosecond: number;
    numberOfDaysInThisMonth: number;
    numberOfEras: number;
    numberOfHoursInThisPeriod: number;
    numberOfMinutesInThisHour: number;
    numberOfMonthsInThisYear: number;
    numberOfPeriodsInThisDay: number;
    numberOfSecondsInThisMinute: number;
    numberOfYearsInThisEra: number;
    numeralSystem: string;
    period: number;
    resolvedLanguage: string;
    second: number;
    year: number;
    clone(): Windows$Globalization$Calendar;
    setToMin(): void;
    setToMax(): void;
    getCalendarSystem(): string;
    changeCalendarSystem(value: string): void;
    getClock(): string;
    changeClock(value: string): void;
    getDateTime(): Date;
    setDateTime(value: Date): void;
    setToNow(): void;
    addEras(eras: number): void;
    eraAsString(): string;
    eraAsString(idealLength: number): string;
    addYears(years: number): void;
    yearAsString(): string;
    yearAsTruncatedString(remainingDigits: number): string;
    yearAsPaddedString(minDigits: number): string;
    addMonths(months: number): void;
    monthAsString(): string;
    monthAsString(idealLength: number): string;
    monthAsSoloString(): string;
    monthAsSoloString(idealLength: number): string;
    monthAsNumericString(): string;
    monthAsPaddedNumericString(minDigits: number): string;
    addWeeks(weeks: number): void;
    addDays(days: number): void;
    dayAsString(): string;
    dayAsPaddedString(minDigits: number): string;
    dayOfWeekAsString(): string;
    dayOfWeekAsString(idealLength: number): string;
    dayOfWeekAsSoloString(): string;
    dayOfWeekAsSoloString(idealLength: number): string;
    addPeriods(periods: number): void;
    periodAsString(): string;
    periodAsString(idealLength: number): string;
    addHours(hours: number): void;
    hourAsString(): string;
    hourAsPaddedString(minDigits: number): string;
    addMinutes(minutes: number): void;
    minuteAsString(): string;
    minuteAsPaddedString(minDigits: number): string;
    addSeconds(seconds: number): void;
    secondAsString(): string;
    secondAsPaddedString(minDigits: number): string;
    addNanoseconds(nanoseconds: number): void;
    nanosecondAsString(): string;
    nanosecondAsPaddedString(minDigits: number): string;
    compare(other: Windows$Globalization$Calendar): number;
    compareDateTime(other: Date): number;
    copyTo(other: Windows$Globalization$Calendar): void;
  }

  declare export class Windows$Globalization$Calendar
    mixins Windows$Globalization$ICalendar {
    constructor(
      languages: Windows$Foundation$Collections$IIterable<string>
    ): this;
    constructor(
      languages: Windows$Foundation$Collections$IIterable<string>,
      calendar: string,
      clock: string
    ): this;
    constructor(): this;
    day: number;
    dayOfWeek: $Values<typeof Windows$Globalization$DayOfWeek>;
    era: number;
    firstDayInThisMonth: number;
    firstEra: number;
    firstHourInThisPeriod: number;
    firstMinuteInThisHour: number;
    firstMonthInThisYear: number;
    firstPeriodInThisDay: number;
    firstSecondInThisMinute: number;
    firstYearInThisEra: number;
    hour: number;
    isDaylightSavingTime: boolean;
    languages: Windows$Foundation$Collections$IVectorView<string>;
    lastDayInThisMonth: number;
    lastEra: number;
    lastHourInThisPeriod: number;
    lastMinuteInThisHour: number;
    lastMonthInThisYear: number;
    lastPeriodInThisDay: number;
    lastSecondInThisMinute: number;
    lastYearInThisEra: number;
    minute: number;
    month: number;
    nanosecond: number;
    numberOfDaysInThisMonth: number;
    numberOfEras: number;
    numberOfHoursInThisPeriod: number;
    numberOfMinutesInThisHour: number;
    numberOfMonthsInThisYear: number;
    numberOfPeriodsInThisDay: number;
    numberOfSecondsInThisMinute: number;
    numberOfYearsInThisEra: number;
    numeralSystem: string;
    period: number;
    resolvedLanguage: string;
    second: number;
    year: number;
    clone(): Windows$Globalization$Calendar;
    setToMin(): void;
    setToMax(): void;
    getCalendarSystem(): string;
    changeCalendarSystem(value: string): void;
    getClock(): string;
    changeClock(value: string): void;
    getDateTime(): Date;
    setDateTime(value: Date): void;
    setToNow(): void;
    addEras(eras: number): void;
    eraAsString(): string;
    eraAsString(idealLength: number): string;
    addYears(years: number): void;
    yearAsString(): string;
    yearAsTruncatedString(remainingDigits: number): string;
    yearAsPaddedString(minDigits: number): string;
    addMonths(months: number): void;
    monthAsString(): string;
    monthAsString(idealLength: number): string;
    monthAsSoloString(): string;
    monthAsSoloString(idealLength: number): string;
    monthAsNumericString(): string;
    monthAsPaddedNumericString(minDigits: number): string;
    addWeeks(weeks: number): void;
    addDays(days: number): void;
    dayAsString(): string;
    dayAsPaddedString(minDigits: number): string;
    dayOfWeekAsString(): string;
    dayOfWeekAsString(idealLength: number): string;
    dayOfWeekAsSoloString(): string;
    dayOfWeekAsSoloString(idealLength: number): string;
    addPeriods(periods: number): void;
    periodAsString(): string;
    periodAsString(idealLength: number): string;
    addHours(hours: number): void;
    hourAsString(): string;
    hourAsPaddedString(minDigits: number): string;
    addMinutes(minutes: number): void;
    minuteAsString(): string;
    minuteAsPaddedString(minDigits: number): string;
    addSeconds(seconds: number): void;
    secondAsString(): string;
    secondAsPaddedString(minDigits: number): string;
    addNanoseconds(nanoseconds: number): void;
    nanosecondAsString(): string;
    nanosecondAsPaddedString(minDigits: number): string;
    compare(other: Windows$Globalization$Calendar): number;
    compareDateTime(other: Date): number;
    copyTo(other: Windows$Globalization$Calendar): void;
  }

  declare export interface Windows$Globalization$ICalendarFactory {
    createCalendarDefaultCalendarAndClock(
      languages: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Globalization$Calendar;
    createCalendar(
      languages: Windows$Foundation$Collections$IIterable<string>,
      calendar: string,
      clock: string
    ): Windows$Globalization$Calendar;
  }

  declare export interface Windows$Globalization$IApplicationLanguagesStatics {
    languages: Windows$Foundation$Collections$IVectorView<string>;
    manifestLanguages: Windows$Foundation$Collections$IVectorView<string>;
    primaryLanguageOverride: string;
  }

  declare export class Windows$Globalization$ApplicationLanguages {
    static languages: Windows$Foundation$Collections$IVectorView<string>;
    static manifestLanguages: Windows$Foundation$Collections$IVectorView<string>;
    static primaryLanguageOverride: string;
  }

  declare var npm$namespace$Windows$Globalization$DateTimeFormatting: {
    YearFormat: typeof Windows$Globalization$DateTimeFormatting$YearFormat,
    MonthFormat: typeof Windows$Globalization$DateTimeFormatting$MonthFormat,
    DayOfWeekFormat: typeof Windows$Globalization$DateTimeFormatting$DayOfWeekFormat,
    DayFormat: typeof Windows$Globalization$DateTimeFormatting$DayFormat,
    HourFormat: typeof Windows$Globalization$DateTimeFormatting$HourFormat,
    MinuteFormat: typeof Windows$Globalization$DateTimeFormatting$MinuteFormat,
    SecondFormat: typeof Windows$Globalization$DateTimeFormatting$SecondFormat,
    DateTimeFormatter: typeof Windows$Globalization$DateTimeFormatting$DateTimeFormatter
  };

  declare export var Windows$Globalization$DateTimeFormatting$YearFormat: {|
    +none: 0, // 0
    +default: 1, // 1
    +abbreviated: 2, // 2
    +full: 3 // 3
  |};

  declare export var Windows$Globalization$DateTimeFormatting$MonthFormat: {|
    +none: 0, // 0
    +default: 1, // 1
    +abbreviated: 2, // 2
    +full: 3, // 3
    +numeric: 4 // 4
  |};

  declare export var Windows$Globalization$DateTimeFormatting$DayOfWeekFormat: {|
    +none: 0, // 0
    +default: 1, // 1
    +abbreviated: 2, // 2
    +full: 3 // 3
  |};

  declare export var Windows$Globalization$DateTimeFormatting$DayFormat: {|
    +none: 0, // 0
    +default: 1 // 1
  |};

  declare export var Windows$Globalization$DateTimeFormatting$HourFormat: {|
    +none: 0, // 0
    +default: 1 // 1
  |};

  declare export var Windows$Globalization$DateTimeFormatting$MinuteFormat: {|
    +none: 0, // 0
    +default: 1 // 1
  |};

  declare export var Windows$Globalization$DateTimeFormatting$SecondFormat: {|
    +none: 0, // 0
    +default: 1 // 1
  |};

  declare export interface Windows$Globalization$DateTimeFormatting$IDateTimeFormatter {
    calendar: string;
    clock: string;
    geographicRegion: string;
    includeDay: $Values<
      typeof Windows$Globalization$DateTimeFormatting$DayFormat
    >;
    includeDayOfWeek: $Values<
      typeof Windows$Globalization$DateTimeFormatting$DayOfWeekFormat
    >;
    includeHour: $Values<
      typeof Windows$Globalization$DateTimeFormatting$HourFormat
    >;
    includeMinute: $Values<
      typeof Windows$Globalization$DateTimeFormatting$MinuteFormat
    >;
    includeMonth: $Values<
      typeof Windows$Globalization$DateTimeFormatting$MonthFormat
    >;
    includeSecond: $Values<
      typeof Windows$Globalization$DateTimeFormatting$SecondFormat
    >;
    includeYear: $Values<
      typeof Windows$Globalization$DateTimeFormatting$YearFormat
    >;
    languages: Windows$Foundation$Collections$IVectorView<string>;
    numeralSystem: string;
    patterns: Windows$Foundation$Collections$IVectorView<string>;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    template: string;
    format(value: Date): string;
  }

  declare export interface Windows$Globalization$DateTimeFormatting$IDateTimeFormatterFactory {
    createDateTimeFormatter(
      formatTemplate: string
    ): Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    createDateTimeFormatterLanguages(
      formatTemplate: string,
      languages: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    createDateTimeFormatterContext(
      formatTemplate: string,
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string,
      calendar: string,
      clock: string
    ): Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    createDateTimeFormatterDate(
      yearFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$YearFormat
      >,
      monthFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MonthFormat
      >,
      dayFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayFormat
      >,
      dayOfWeekFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayOfWeekFormat
      >
    ): Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    createDateTimeFormatterTime(
      hourFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$HourFormat
      >,
      minuteFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MinuteFormat
      >,
      secondFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$SecondFormat
      >
    ): Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    createDateTimeFormatterDateTimeLanguages(
      yearFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$YearFormat
      >,
      monthFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MonthFormat
      >,
      dayFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayFormat
      >,
      dayOfWeekFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayOfWeekFormat
      >,
      hourFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$HourFormat
      >,
      minuteFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MinuteFormat
      >,
      secondFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$SecondFormat
      >,
      languages: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    createDateTimeFormatterDateTimeContext(
      yearFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$YearFormat
      >,
      monthFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MonthFormat
      >,
      dayFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayFormat
      >,
      dayOfWeekFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayOfWeekFormat
      >,
      hourFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$HourFormat
      >,
      minuteFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MinuteFormat
      >,
      secondFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$SecondFormat
      >,
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string,
      calendar: string,
      clock: string
    ): Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
  }

  declare export class Windows$Globalization$DateTimeFormatting$DateTimeFormatter
    mixins Windows$Globalization$DateTimeFormatting$IDateTimeFormatter {
    constructor(formatTemplate: string): this;
    constructor(
      formatTemplate: string,
      languages: Windows$Foundation$Collections$IIterable<string>
    ): this;
    constructor(
      formatTemplate: string,
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string,
      calendar: string,
      clock: string
    ): this;
    constructor(
      yearFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$YearFormat
      >,
      monthFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MonthFormat
      >,
      dayFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayFormat
      >,
      dayOfWeekFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayOfWeekFormat
      >
    ): this;
    constructor(
      hourFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$HourFormat
      >,
      minuteFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MinuteFormat
      >,
      secondFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$SecondFormat
      >
    ): this;
    constructor(
      yearFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$YearFormat
      >,
      monthFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MonthFormat
      >,
      dayFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayFormat
      >,
      dayOfWeekFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayOfWeekFormat
      >,
      hourFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$HourFormat
      >,
      minuteFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MinuteFormat
      >,
      secondFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$SecondFormat
      >,
      languages: Windows$Foundation$Collections$IIterable<string>
    ): this;
    constructor(
      yearFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$YearFormat
      >,
      monthFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MonthFormat
      >,
      dayFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayFormat
      >,
      dayOfWeekFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$DayOfWeekFormat
      >,
      hourFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$HourFormat
      >,
      minuteFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$MinuteFormat
      >,
      secondFormat: $Values<
        typeof Windows$Globalization$DateTimeFormatting$SecondFormat
      >,
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string,
      calendar: string,
      clock: string
    ): this;
    calendar: string;
    clock: string;
    geographicRegion: string;
    includeDay: $Values<
      typeof Windows$Globalization$DateTimeFormatting$DayFormat
    >;
    includeDayOfWeek: $Values<
      typeof Windows$Globalization$DateTimeFormatting$DayOfWeekFormat
    >;
    includeHour: $Values<
      typeof Windows$Globalization$DateTimeFormatting$HourFormat
    >;
    includeMinute: $Values<
      typeof Windows$Globalization$DateTimeFormatting$MinuteFormat
    >;
    includeMonth: $Values<
      typeof Windows$Globalization$DateTimeFormatting$MonthFormat
    >;
    includeSecond: $Values<
      typeof Windows$Globalization$DateTimeFormatting$SecondFormat
    >;
    includeYear: $Values<
      typeof Windows$Globalization$DateTimeFormatting$YearFormat
    >;
    languages: Windows$Foundation$Collections$IVectorView<string>;
    numeralSystem: string;
    patterns: Windows$Foundation$Collections$IVectorView<string>;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    template: string;
    format(value: Date): string;
    static longDate: Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    static longTime: Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    static shortDate: Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    static shortTime: Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
  }

  declare export interface Windows$Globalization$DateTimeFormatting$IDateTimeFormatterStatics {
    longDate: Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    longTime: Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    shortDate: Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
    shortTime: Windows$Globalization$DateTimeFormatting$DateTimeFormatter;
  }

  declare var npm$namespace$Windows$Globalization$NumberFormatting: {
    DecimalFormatter: typeof Windows$Globalization$NumberFormatting$DecimalFormatter,
    PercentFormatter: typeof Windows$Globalization$NumberFormatting$PercentFormatter,
    PermilleFormatter: typeof Windows$Globalization$NumberFormatting$PermilleFormatter,
    CurrencyFormatter: typeof Windows$Globalization$NumberFormatting$CurrencyFormatter
  };
  declare export interface Windows$Globalization$NumberFormatting$INumberFormatter {
    format(value: number): string;
  }

  declare export interface Windows$Globalization$NumberFormatting$INumberFormatter2 {
    formatInt(value: number): string;
    formatUInt(value: number): string;
    formatDouble(value: number): string;
  }

  declare export interface Windows$Globalization$NumberFormatting$INumberParser {
    parseInt(text: string): number;
    parseUInt(text: string): number;
    parseDouble(text: string): number;
  }

  declare export interface Windows$Globalization$NumberFormatting$INumberFormatterOptions {
    fractionDigits: number;
    geographicRegion: string;
    integerDigits: number;
    isDecimalPointAlwaysDisplayed: boolean;
    isGrouped: boolean;
    languages: Windows$Foundation$Collections$IVectorView<string>;
    numeralSystem: string;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
  }

  declare export interface Windows$Globalization$NumberFormatting$IDecimalFormatterFactory {
    createDecimalFormatter(
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string
    ): Windows$Globalization$NumberFormatting$DecimalFormatter;
  }

  declare export class Windows$Globalization$NumberFormatting$DecimalFormatter
    mixins Windows$Globalization$NumberFormatting$INumberFormatterOptions,
      Windows$Globalization$NumberFormatting$INumberFormatter,
      Windows$Globalization$NumberFormatting$INumberFormatter2,
      Windows$Globalization$NumberFormatting$INumberParser {
    constructor(
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string
    ): this;
    constructor(): this;
    fractionDigits: number;
    geographicRegion: string;
    integerDigits: number;
    isDecimalPointAlwaysDisplayed: boolean;
    isGrouped: boolean;
    languages: Windows$Foundation$Collections$IVectorView<string>;
    numeralSystem: string;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    format(value: number): string;
    formatInt(value: number): string;
    formatUInt(value: number): string;
    formatDouble(value: number): string;
    parseInt(text: string): number;
    parseUInt(text: string): number;
    parseDouble(text: string): number;
  }

  declare export interface Windows$Globalization$NumberFormatting$IPercentFormatterFactory {
    createPercentFormatter(
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string
    ): Windows$Globalization$NumberFormatting$PercentFormatter;
  }

  declare export class Windows$Globalization$NumberFormatting$PercentFormatter
    mixins Windows$Globalization$NumberFormatting$INumberFormatterOptions,
      Windows$Globalization$NumberFormatting$INumberFormatter,
      Windows$Globalization$NumberFormatting$INumberFormatter2,
      Windows$Globalization$NumberFormatting$INumberParser {
    constructor(
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string
    ): this;
    constructor(): this;
    fractionDigits: number;
    geographicRegion: string;
    integerDigits: number;
    isDecimalPointAlwaysDisplayed: boolean;
    isGrouped: boolean;
    languages: Windows$Foundation$Collections$IVectorView<string>;
    numeralSystem: string;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    format(value: number): string;
    formatInt(value: number): string;
    formatUInt(value: number): string;
    formatDouble(value: number): string;
    parseInt(text: string): number;
    parseUInt(text: string): number;
    parseDouble(text: string): number;
  }

  declare export interface Windows$Globalization$NumberFormatting$IPermilleFormatterFactory {
    createPermilleFormatter(
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string
    ): Windows$Globalization$NumberFormatting$PermilleFormatter;
  }

  declare export class Windows$Globalization$NumberFormatting$PermilleFormatter
    mixins Windows$Globalization$NumberFormatting$INumberFormatterOptions,
      Windows$Globalization$NumberFormatting$INumberFormatter,
      Windows$Globalization$NumberFormatting$INumberFormatter2,
      Windows$Globalization$NumberFormatting$INumberParser {
    constructor(
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string
    ): this;
    constructor(): this;
    fractionDigits: number;
    geographicRegion: string;
    integerDigits: number;
    isDecimalPointAlwaysDisplayed: boolean;
    isGrouped: boolean;
    languages: Windows$Foundation$Collections$IVectorView<string>;
    numeralSystem: string;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    format(value: number): string;
    formatInt(value: number): string;
    formatUInt(value: number): string;
    formatDouble(value: number): string;
    parseInt(text: string): number;
    parseUInt(text: string): number;
    parseDouble(text: string): number;
  }

  declare export interface Windows$Globalization$NumberFormatting$ICurrencyFormatterFactory {
    createCurrencyFormatterCode(
      currencyCode: string
    ): Windows$Globalization$NumberFormatting$CurrencyFormatter;
    createCurrencyFormatterCodeContext(
      currencyCode: string,
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string
    ): Windows$Globalization$NumberFormatting$CurrencyFormatter;
  }

  declare export class Windows$Globalization$NumberFormatting$CurrencyFormatter
    mixins Windows$Globalization$NumberFormatting$ICurrencyFormatter,
      Windows$Globalization$NumberFormatting$INumberFormatterOptions,
      Windows$Globalization$NumberFormatting$INumberFormatter,
      Windows$Globalization$NumberFormatting$INumberFormatter2,
      Windows$Globalization$NumberFormatting$INumberParser {
    constructor(currencyCode: string): this;
    constructor(
      currencyCode: string,
      languages: Windows$Foundation$Collections$IIterable<string>,
      geographicRegion: string
    ): this;
    currency: string;
    fractionDigits: number;
    geographicRegion: string;
    integerDigits: number;
    isDecimalPointAlwaysDisplayed: boolean;
    isGrouped: boolean;
    languages: Windows$Foundation$Collections$IVectorView<string>;
    numeralSystem: string;
    resolvedGeographicRegion: string;
    resolvedLanguage: string;
    format(value: number): string;
    formatInt(value: number): string;
    formatUInt(value: number): string;
    formatDouble(value: number): string;
    parseInt(text: string): number;
    parseUInt(text: string): number;
    parseDouble(text: string): number;
  }

  declare export type Windows$Globalization$NumberFormatting$ICurrencyFormatter = {
    currency: string
  } & Windows$Globalization$NumberFormatting$INumberFormatterOptions &
    Windows$Globalization$NumberFormatting$INumberFormatter &
    Windows$Globalization$NumberFormatting$INumberFormatter2 &
    Windows$Globalization$NumberFormatting$INumberParser;

  declare var npm$namespace$Windows$Globalization$Collation: {
    CharacterGrouping: typeof Windows$Globalization$Collation$CharacterGrouping,
    CharacterGroupings: typeof Windows$Globalization$Collation$CharacterGroupings
  };
  declare export interface Windows$Globalization$Collation$ICharacterGrouping {
    first: string;
    label: string;
  }

  declare export class Windows$Globalization$Collation$CharacterGrouping
    mixins Windows$Globalization$Collation$ICharacterGrouping {
    first: string;
    label: string;
  }

  declare export type Windows$Globalization$Collation$ICharacterGroupings = {
    lookup(text: string): string
  } & Windows$Foundation$Collections$IVectorView<Windows$Globalization$Collation$CharacterGrouping> &
    Windows$Foundation$Collections$IIterable<Windows$Globalization$Collation$CharacterGrouping>;

  declare export class Windows$Globalization$Collation$CharacterGroupings
    mixins Windows$Globalization$Collation$ICharacterGroupings,
      Windows$Foundation$Collections$IVectorView<Windows$Globalization$Collation$CharacterGrouping>,
      Windows$Foundation$Collections$IIterable<Windows$Globalization$Collation$CharacterGrouping> {
    size: number;
    lookup(text: string): string;
    getAt(index: number): Windows$Globalization$Collation$CharacterGrouping;
    indexOf(
      value: Windows$Globalization$Collation$CharacterGrouping
    ): {
      index: number,
      returnValue: boolean
    };
    getMany(
      startIndex: number
    ): {
      items: Windows$Globalization$Collation$CharacterGrouping[],
      returnValue: number
    };
    first(): Windows$Foundation$Collections$IIterator<Windows$Globalization$Collation$CharacterGrouping>;
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$Globalization$Collation$CharacterGrouping[][]
    ): Windows$Globalization$Collation$CharacterGrouping[];
    join(seperator: string): string;
    pop(): Windows$Globalization$Collation$CharacterGrouping;
    push(...items: Windows$Globalization$Collation$CharacterGrouping[]): void;
    reverse(): Windows$Globalization$Collation$CharacterGrouping[];
    shift(): Windows$Globalization$Collation$CharacterGrouping;
    slice(start: number): Windows$Globalization$Collation$CharacterGrouping[];
    slice(
      start: number,
      end: number
    ): Windows$Globalization$Collation$CharacterGrouping[];
    sort(): Windows$Globalization$Collation$CharacterGrouping[];
    sort(
      compareFn: (
        a: Windows$Globalization$Collation$CharacterGrouping,
        b: Windows$Globalization$Collation$CharacterGrouping
      ) => number
    ): Windows$Globalization$Collation$CharacterGrouping[];
    splice(start: number): Windows$Globalization$Collation$CharacterGrouping[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$Globalization$Collation$CharacterGrouping[]
    ): Windows$Globalization$Collation$CharacterGrouping[];
    unshift(
      ...items: Windows$Globalization$Collation$CharacterGrouping[]
    ): number;
    lastIndexOf(
      searchElement: Windows$Globalization$Collation$CharacterGrouping
    ): number;
    lastIndexOf(
      searchElement: Windows$Globalization$Collation$CharacterGrouping,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$Globalization$Collation$CharacterGrouping,
        index: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$Globalization$Collation$CharacterGrouping,
        index: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Globalization$Collation$CharacterGrouping,
        index: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Globalization$Collation$CharacterGrouping,
        index: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$Globalization$Collation$CharacterGrouping,
        index: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$Globalization$Collation$CharacterGrouping,
        index: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$Globalization$Collation$CharacterGrouping,
        index: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$Globalization$Collation$CharacterGrouping,
        index: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$Globalization$Collation$CharacterGrouping,
        index: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => boolean
    ): Windows$Globalization$Collation$CharacterGrouping[];
    filter(
      callbackfn: (
        value: Windows$Globalization$Collation$CharacterGrouping,
        index: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => boolean,
      thisArg: any
    ): Windows$Globalization$Collation$CharacterGrouping[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Globalization$Collation$CharacterGrouping[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare var npm$namespace$Windows$Graphics: {
    Display: typeof npm$namespace$Windows$Graphics$Display,
    Imaging: typeof npm$namespace$Windows$Graphics$Imaging,
    Printing: typeof npm$namespace$Windows$Graphics$Printing
  };

  declare var npm$namespace$Windows$Graphics$Display: {
    DisplayOrientations: typeof Windows$Graphics$Display$DisplayOrientations,
    ResolutionScale: typeof Windows$Graphics$Display$ResolutionScale,
    DisplayProperties: typeof Windows$Graphics$Display$DisplayProperties
  };
  declare export interface Windows$Graphics$Display$DisplayPropertiesEventHandler {
    (sender: any): void;
  }

  declare export var Windows$Graphics$Display$DisplayOrientations: {|
    +none: 0, // 0
    +landscape: 1, // 1
    +portrait: 2, // 2
    +landscapeFlipped: 3, // 3
    +portraitFlipped: 4 // 4
  |};

  declare export var Windows$Graphics$Display$ResolutionScale: {|
    +invalid: 0, // 0
    +scale100Percent: 1, // 1
    +scale140Percent: 2, // 2
    +scale180Percent: 3 // 3
  |};

  declare export interface Windows$Graphics$Display$IDisplayPropertiesStatics {
    autoRotationPreferences: $Values<
      typeof Windows$Graphics$Display$DisplayOrientations
    >;
    currentOrientation: $Values<
      typeof Windows$Graphics$Display$DisplayOrientations
    >;
    logicalDpi: number;
    nativeOrientation: $Values<
      typeof Windows$Graphics$Display$DisplayOrientations
    >;
    resolutionScale: $Values<typeof Windows$Graphics$Display$ResolutionScale>;
    stereoEnabled: boolean;
    onorientationchanged: any;
    onlogicaldpichanged: any;
    onstereoenabledchanged: any;
    getColorProfileAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IRandomAccessStream>;
    oncolorprofilechanged: any;
    ondisplaycontentsinvalidated: any;
  }

  declare export class Windows$Graphics$Display$DisplayProperties {
    static autoRotationPreferences: $Values<
      typeof Windows$Graphics$Display$DisplayOrientations
    >;
    static currentOrientation: $Values<
      typeof Windows$Graphics$Display$DisplayOrientations
    >;
    static logicalDpi: number;
    static nativeOrientation: $Values<
      typeof Windows$Graphics$Display$DisplayOrientations
    >;
    static resolutionScale: $Values<
      typeof Windows$Graphics$Display$ResolutionScale
    >;
    static stereoEnabled: boolean;
    static onorientationchanged: any;
    static onlogicaldpichanged: any;
    static onstereoenabledchanged: any;
    static getColorProfileAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IRandomAccessStream>;
    static oncolorprofilechanged: any;
    static ondisplaycontentsinvalidated: any;
  }

  declare var npm$namespace$Windows$Graphics$Imaging: {
    BitmapPixelFormat: typeof Windows$Graphics$Imaging$BitmapPixelFormat,
    BitmapAlphaMode: typeof Windows$Graphics$Imaging$BitmapAlphaMode,
    BitmapInterpolationMode: typeof Windows$Graphics$Imaging$BitmapInterpolationMode,
    BitmapFlip: typeof Windows$Graphics$Imaging$BitmapFlip,
    BitmapRotation: typeof Windows$Graphics$Imaging$BitmapRotation,
    ColorManagementMode: typeof Windows$Graphics$Imaging$ColorManagementMode,
    ExifOrientationMode: typeof Windows$Graphics$Imaging$ExifOrientationMode,
    PngFilterMode: typeof Windows$Graphics$Imaging$PngFilterMode,
    TiffCompressionMode: typeof Windows$Graphics$Imaging$TiffCompressionMode,
    JpegSubsamplingMode: typeof Windows$Graphics$Imaging$JpegSubsamplingMode,
    BitmapTransform: typeof Windows$Graphics$Imaging$BitmapTransform,
    BitmapTypedValue: typeof Windows$Graphics$Imaging$BitmapTypedValue,
    BitmapPropertySet: typeof Windows$Graphics$Imaging$BitmapPropertySet,
    BitmapPropertiesView: typeof Windows$Graphics$Imaging$BitmapPropertiesView,
    BitmapProperties: typeof Windows$Graphics$Imaging$BitmapProperties,
    PixelDataProvider: typeof Windows$Graphics$Imaging$PixelDataProvider,
    ImageStream: typeof Windows$Graphics$Imaging$ImageStream,
    BitmapFrame: typeof Windows$Graphics$Imaging$BitmapFrame,
    BitmapCodecInformation: typeof Windows$Graphics$Imaging$BitmapCodecInformation,
    BitmapDecoder: typeof Windows$Graphics$Imaging$BitmapDecoder,
    BitmapEncoder: typeof Windows$Graphics$Imaging$BitmapEncoder
  };

  declare export var Windows$Graphics$Imaging$BitmapPixelFormat: {|
    +unknown: 0, // 0
    +rgba16: 1, // 1
    +rgba8: 2, // 2
    +bgra8: 3 // 3
  |};

  declare export var Windows$Graphics$Imaging$BitmapAlphaMode: {|
    +premultiplied: 0, // 0
    +straight: 1, // 1
    +ignore: 2 // 2
  |};

  declare export var Windows$Graphics$Imaging$BitmapInterpolationMode: {|
    +nearestNeighbor: 0, // 0
    +linear: 1, // 1
    +cubic: 2, // 2
    +fant: 3 // 3
  |};

  declare export var Windows$Graphics$Imaging$BitmapFlip: {|
    +none: 0, // 0
    +horizontal: 1, // 1
    +vertical: 2 // 2
  |};

  declare export var Windows$Graphics$Imaging$BitmapRotation: {|
    +none: 0, // 0
    +clockwise90Degrees: 1, // 1
    +clockwise180Degrees: 2, // 2
    +clockwise270Degrees: 3 // 3
  |};

  declare export interface Windows$Graphics$Imaging$BitmapBounds {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  declare export var Windows$Graphics$Imaging$ColorManagementMode: {|
    +doNotColorManage: 0, // 0
    +colorManageToSRgb: 1 // 1
  |};

  declare export var Windows$Graphics$Imaging$ExifOrientationMode: {|
    +ignoreExifOrientation: 0, // 0
    +respectExifOrientation: 1 // 1
  |};

  declare export var Windows$Graphics$Imaging$PngFilterMode: {|
    +automatic: 0, // 0
    +none: 1, // 1
    +sub: 2, // 2
    +up: 3, // 3
    +average: 4, // 4
    +paeth: 5, // 5
    +adaptive: 6 // 6
  |};

  declare export var Windows$Graphics$Imaging$TiffCompressionMode: {|
    +automatic: 0, // 0
    +none: 1, // 1
    +ccitt3: 2, // 2
    +ccitt4: 3, // 3
    +lzw: 4, // 4
    +rle: 5, // 5
    +zip: 6, // 6
    +lzwhDifferencing: 7 // 7
  |};

  declare export var Windows$Graphics$Imaging$JpegSubsamplingMode: {|
    +default: 0, // 0
    +y4Cb2Cr0: 1, // 1
    +y4Cb2Cr2: 2, // 2
    +y4Cb4Cr4: 3 // 3
  |};

  declare export interface Windows$Graphics$Imaging$IBitmapTransform {
    bounds: Windows$Graphics$Imaging$BitmapBounds;
    flip: $Values<typeof Windows$Graphics$Imaging$BitmapFlip>;
    interpolationMode: $Values<
      typeof Windows$Graphics$Imaging$BitmapInterpolationMode
    >;
    rotation: $Values<typeof Windows$Graphics$Imaging$BitmapRotation>;
    scaledHeight: number;
    scaledWidth: number;
  }

  declare export class Windows$Graphics$Imaging$BitmapTransform
    mixins Windows$Graphics$Imaging$IBitmapTransform {
    bounds: Windows$Graphics$Imaging$BitmapBounds;
    flip: $Values<typeof Windows$Graphics$Imaging$BitmapFlip>;
    interpolationMode: $Values<
      typeof Windows$Graphics$Imaging$BitmapInterpolationMode
    >;
    rotation: $Values<typeof Windows$Graphics$Imaging$BitmapRotation>;
    scaledHeight: number;
    scaledWidth: number;
  }

  declare export interface Windows$Graphics$Imaging$IBitmapTypedValue {
    type: $Values<typeof Windows$Foundation$PropertyType>;
    value: any;
  }

  declare export interface Windows$Graphics$Imaging$IBitmapTypedValueFactory {
    create(
      value: any,
      type: $Values<typeof Windows$Foundation$PropertyType>
    ): Windows$Graphics$Imaging$BitmapTypedValue;
  }

  declare export class Windows$Graphics$Imaging$BitmapTypedValue
    mixins Windows$Graphics$Imaging$IBitmapTypedValue {
    constructor(
      value: any,
      type: $Values<typeof Windows$Foundation$PropertyType>
    ): this;
    type: $Values<typeof Windows$Foundation$PropertyType>;
    value: any;
  }

  declare export class Windows$Graphics$Imaging$BitmapPropertySet
    mixins Windows$Foundation$Collections$IMap<
        string,
        Windows$Graphics$Imaging$BitmapTypedValue
      >,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$Graphics$Imaging$BitmapTypedValue
        >
      > {
    size: number;
    lookup(key: string): Windows$Graphics$Imaging$BitmapTypedValue;
    hasKey(key: string): boolean;
    getView(): Windows$Foundation$Collections$IMapView<
      string,
      Windows$Graphics$Imaging$BitmapTypedValue
    >;
    insert(
      key: string,
      value: Windows$Graphics$Imaging$BitmapTypedValue
    ): boolean;
    remove(key: string): void;
    clear(): void;
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<
        string,
        Windows$Graphics$Imaging$BitmapTypedValue
      >
    >;
  }

  declare export interface Windows$Graphics$Imaging$IBitmapPropertiesView {
    getPropertiesAsync(
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapPropertySet>;
  }

  declare export type Windows$Graphics$Imaging$IBitmapProperties = {
    setPropertiesAsync(
      propertiesToSet: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$Graphics$Imaging$BitmapTypedValue
        >
      >
    ): Windows$Foundation$IAsyncAction
  } & Windows$Graphics$Imaging$IBitmapPropertiesView;

  declare export class Windows$Graphics$Imaging$BitmapPropertiesView
    mixins Windows$Graphics$Imaging$IBitmapPropertiesView {
    getPropertiesAsync(
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapPropertySet>;
  }

  declare export class Windows$Graphics$Imaging$BitmapProperties
    mixins Windows$Graphics$Imaging$IBitmapProperties,
      Windows$Graphics$Imaging$IBitmapPropertiesView {
    setPropertiesAsync(
      propertiesToSet: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$Graphics$Imaging$BitmapTypedValue
        >
      >
    ): Windows$Foundation$IAsyncAction;
    getPropertiesAsync(
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapPropertySet>;
  }

  declare export interface Windows$Graphics$Imaging$IPixelDataProvider {
    detachPixelData(): Uint8Array;
  }

  declare export class Windows$Graphics$Imaging$PixelDataProvider
    mixins Windows$Graphics$Imaging$IPixelDataProvider {
    detachPixelData(): Uint8Array;
  }

  declare export class Windows$Graphics$Imaging$ImageStream
    mixins Windows$Storage$Streams$IRandomAccessStreamWithContentType,
      Windows$Storage$Streams$IRandomAccessStream,
      Windows$Foundation$IClosable,
      Windows$Storage$Streams$IInputStream,
      Windows$Storage$Streams$IOutputStream,
      Windows$Storage$Streams$IContentTypeProvider {
    canRead: boolean;
    canWrite: boolean;
    position: number;
    size: number;
    contentType: string;
    getInputStreamAt(position: number): Windows$Storage$Streams$IInputStream;
    getOutputStreamAt(position: number): Windows$Storage$Streams$IOutputStream;
    seek(position: number): void;
    cloneStream(): Windows$Storage$Streams$IRandomAccessStream;
    dispose(): void;
    readAsync(
      buffer: Windows$Storage$Streams$IBuffer,
      count: number,
      options: $Values<typeof Windows$Storage$Streams$InputStreamOptions>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IBuffer,
      number
    >;
    writeAsync(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    close(): void;
  }

  declare export interface Windows$Graphics$Imaging$IBitmapFrame {
    bitmapAlphaMode: $Values<typeof Windows$Graphics$Imaging$BitmapAlphaMode>;
    bitmapPixelFormat: $Values<
      typeof Windows$Graphics$Imaging$BitmapPixelFormat
    >;
    bitmapProperties: Windows$Graphics$Imaging$BitmapPropertiesView;
    dpiX: number;
    dpiY: number;
    orientedPixelHeight: number;
    orientedPixelWidth: number;
    pixelHeight: number;
    pixelWidth: number;
    getThumbnailAsync(): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$ImageStream>;
    getPixelDataAsync(): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$PixelDataProvider>;
    getPixelDataAsync(
      pixelFormat: $Values<typeof Windows$Graphics$Imaging$BitmapPixelFormat>,
      alphaMode: $Values<typeof Windows$Graphics$Imaging$BitmapAlphaMode>,
      transform: Windows$Graphics$Imaging$BitmapTransform,
      exifOrientationMode: $Values<
        typeof Windows$Graphics$Imaging$ExifOrientationMode
      >,
      colorManagementMode: $Values<
        typeof Windows$Graphics$Imaging$ColorManagementMode
      >
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$PixelDataProvider>;
  }

  declare export class Windows$Graphics$Imaging$BitmapFrame
    mixins Windows$Graphics$Imaging$IBitmapFrame {
    bitmapAlphaMode: $Values<typeof Windows$Graphics$Imaging$BitmapAlphaMode>;
    bitmapPixelFormat: $Values<
      typeof Windows$Graphics$Imaging$BitmapPixelFormat
    >;
    bitmapProperties: Windows$Graphics$Imaging$BitmapPropertiesView;
    dpiX: number;
    dpiY: number;
    orientedPixelHeight: number;
    orientedPixelWidth: number;
    pixelHeight: number;
    pixelWidth: number;
    getThumbnailAsync(): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$ImageStream>;
    getPixelDataAsync(): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$PixelDataProvider>;
    getPixelDataAsync(
      pixelFormat: $Values<typeof Windows$Graphics$Imaging$BitmapPixelFormat>,
      alphaMode: $Values<typeof Windows$Graphics$Imaging$BitmapAlphaMode>,
      transform: Windows$Graphics$Imaging$BitmapTransform,
      exifOrientationMode: $Values<
        typeof Windows$Graphics$Imaging$ExifOrientationMode
      >,
      colorManagementMode: $Values<
        typeof Windows$Graphics$Imaging$ColorManagementMode
      >
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$PixelDataProvider>;
  }

  declare export interface Windows$Graphics$Imaging$IBitmapCodecInformation {
    codecId: string;
    fileExtensions: Windows$Foundation$Collections$IVectorView<string>;
    friendlyName: string;
    mimeTypes: Windows$Foundation$Collections$IVectorView<string>;
  }

  declare export class Windows$Graphics$Imaging$BitmapCodecInformation
    mixins Windows$Graphics$Imaging$IBitmapCodecInformation {
    codecId: string;
    fileExtensions: Windows$Foundation$Collections$IVectorView<string>;
    friendlyName: string;
    mimeTypes: Windows$Foundation$Collections$IVectorView<string>;
  }

  declare export interface Windows$Graphics$Imaging$IBitmapDecoderStatics {
    bmpDecoderId: string;
    gifDecoderId: string;
    icoDecoderId: string;
    jpegDecoderId: string;
    jpegXRDecoderId: string;
    pngDecoderId: string;
    tiffDecoderId: string;
    getDecoderInformationEnumerator(): Windows$Foundation$Collections$IVectorView<Windows$Graphics$Imaging$BitmapCodecInformation>;
    createAsync(
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapDecoder>;
    createAsync(
      decoderId: string,
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapDecoder>;
  }

  declare export class Windows$Graphics$Imaging$BitmapDecoder
    mixins Windows$Graphics$Imaging$IBitmapDecoder,
      Windows$Graphics$Imaging$IBitmapFrame {
    bitmapContainerProperties: Windows$Graphics$Imaging$BitmapPropertiesView;
    decoderInformation: Windows$Graphics$Imaging$BitmapCodecInformation;
    frameCount: number;
    bitmapAlphaMode: $Values<typeof Windows$Graphics$Imaging$BitmapAlphaMode>;
    bitmapPixelFormat: $Values<
      typeof Windows$Graphics$Imaging$BitmapPixelFormat
    >;
    bitmapProperties: Windows$Graphics$Imaging$BitmapPropertiesView;
    dpiX: number;
    dpiY: number;
    orientedPixelHeight: number;
    orientedPixelWidth: number;
    pixelHeight: number;
    pixelWidth: number;
    getPreviewAsync(): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$ImageStream>;
    getFrameAsync(
      frameIndex: number
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapFrame>;
    getThumbnailAsync(): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$ImageStream>;
    getPixelDataAsync(): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$PixelDataProvider>;
    getPixelDataAsync(
      pixelFormat: $Values<typeof Windows$Graphics$Imaging$BitmapPixelFormat>,
      alphaMode: $Values<typeof Windows$Graphics$Imaging$BitmapAlphaMode>,
      transform: Windows$Graphics$Imaging$BitmapTransform,
      exifOrientationMode: $Values<
        typeof Windows$Graphics$Imaging$ExifOrientationMode
      >,
      colorManagementMode: $Values<
        typeof Windows$Graphics$Imaging$ColorManagementMode
      >
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$PixelDataProvider>;
    static bmpDecoderId: string;
    static gifDecoderId: string;
    static icoDecoderId: string;
    static jpegDecoderId: string;
    static jpegXRDecoderId: string;
    static pngDecoderId: string;
    static tiffDecoderId: string;
    static getDecoderInformationEnumerator(): Windows$Foundation$Collections$IVectorView<Windows$Graphics$Imaging$BitmapCodecInformation>;
    static createAsync(
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapDecoder>;
    static createAsync(
      decoderId: string,
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapDecoder>;
  }

  declare export interface Windows$Graphics$Imaging$IBitmapDecoder {
    bitmapContainerProperties: Windows$Graphics$Imaging$BitmapPropertiesView;
    decoderInformation: Windows$Graphics$Imaging$BitmapCodecInformation;
    frameCount: number;
    getPreviewAsync(): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$ImageStream>;
    getFrameAsync(
      frameIndex: number
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapFrame>;
  }

  declare export interface Windows$Graphics$Imaging$IBitmapEncoderStatics {
    bmpEncoderId: string;
    gifEncoderId: string;
    jpegEncoderId: string;
    jpegXREncoderId: string;
    pngEncoderId: string;
    tiffEncoderId: string;
    getEncoderInformationEnumerator(): Windows$Foundation$Collections$IVectorView<Windows$Graphics$Imaging$BitmapCodecInformation>;
    createAsync(
      encoderId: string,
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapEncoder>;
    createAsync(
      encoderId: string,
      stream: Windows$Storage$Streams$IRandomAccessStream,
      encodingOptions: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$Graphics$Imaging$BitmapTypedValue
        >
      >
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapEncoder>;
    createForTranscodingAsync(
      stream: Windows$Storage$Streams$IRandomAccessStream,
      bitmapDecoder: Windows$Graphics$Imaging$BitmapDecoder
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapEncoder>;
    createForInPlacePropertyEncodingAsync(
      bitmapDecoder: Windows$Graphics$Imaging$BitmapDecoder
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapEncoder>;
  }

  declare export class Windows$Graphics$Imaging$BitmapEncoder
    mixins Windows$Graphics$Imaging$IBitmapEncoder {
    bitmapContainerProperties: Windows$Graphics$Imaging$BitmapProperties;
    bitmapProperties: Windows$Graphics$Imaging$BitmapProperties;
    bitmapTransform: Windows$Graphics$Imaging$BitmapTransform;
    encoderInformation: Windows$Graphics$Imaging$BitmapCodecInformation;
    generatedThumbnailHeight: number;
    generatedThumbnailWidth: number;
    isThumbnailGenerated: boolean;
    setPixelData(
      pixelFormat: $Values<typeof Windows$Graphics$Imaging$BitmapPixelFormat>,
      alphaMode: $Values<typeof Windows$Graphics$Imaging$BitmapAlphaMode>,
      width: number,
      height: number,
      dpiX: number,
      dpiY: number,
      pixels: Uint8Array
    ): void;
    goToNextFrameAsync(): Windows$Foundation$IAsyncAction;
    goToNextFrameAsync(
      encodingOptions: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$Graphics$Imaging$BitmapTypedValue
        >
      >
    ): Windows$Foundation$IAsyncAction;
    flushAsync(): Windows$Foundation$IAsyncAction;
    static bmpEncoderId: string;
    static gifEncoderId: string;
    static jpegEncoderId: string;
    static jpegXREncoderId: string;
    static pngEncoderId: string;
    static tiffEncoderId: string;
    static getEncoderInformationEnumerator(): Windows$Foundation$Collections$IVectorView<Windows$Graphics$Imaging$BitmapCodecInformation>;
    static createAsync(
      encoderId: string,
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapEncoder>;
    static createAsync(
      encoderId: string,
      stream: Windows$Storage$Streams$IRandomAccessStream,
      encodingOptions: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$Graphics$Imaging$BitmapTypedValue
        >
      >
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapEncoder>;
    static createForTranscodingAsync(
      stream: Windows$Storage$Streams$IRandomAccessStream,
      bitmapDecoder: Windows$Graphics$Imaging$BitmapDecoder
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapEncoder>;
    static createForInPlacePropertyEncodingAsync(
      bitmapDecoder: Windows$Graphics$Imaging$BitmapDecoder
    ): Windows$Foundation$IAsyncOperation<Windows$Graphics$Imaging$BitmapEncoder>;
  }

  declare export interface Windows$Graphics$Imaging$IBitmapEncoder {
    bitmapContainerProperties: Windows$Graphics$Imaging$BitmapProperties;
    bitmapProperties: Windows$Graphics$Imaging$BitmapProperties;
    bitmapTransform: Windows$Graphics$Imaging$BitmapTransform;
    encoderInformation: Windows$Graphics$Imaging$BitmapCodecInformation;
    generatedThumbnailHeight: number;
    generatedThumbnailWidth: number;
    isThumbnailGenerated: boolean;
    setPixelData(
      pixelFormat: $Values<typeof Windows$Graphics$Imaging$BitmapPixelFormat>,
      alphaMode: $Values<typeof Windows$Graphics$Imaging$BitmapAlphaMode>,
      width: number,
      height: number,
      dpiX: number,
      dpiY: number,
      pixels: Uint8Array
    ): void;
    goToNextFrameAsync(): Windows$Foundation$IAsyncAction;
    goToNextFrameAsync(
      encodingOptions: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$Graphics$Imaging$BitmapTypedValue
        >
      >
    ): Windows$Foundation$IAsyncAction;
    flushAsync(): Windows$Foundation$IAsyncAction;
  }

  declare var npm$namespace$Windows$Graphics$Printing: {
    PrintMediaSize: typeof Windows$Graphics$Printing$PrintMediaSize,
    PrintMediaType: typeof Windows$Graphics$Printing$PrintMediaType,
    PrintOrientation: typeof Windows$Graphics$Printing$PrintOrientation,
    PrintQuality: typeof Windows$Graphics$Printing$PrintQuality,
    PrintColorMode: typeof Windows$Graphics$Printing$PrintColorMode,
    PrintDuplex: typeof Windows$Graphics$Printing$PrintDuplex,
    PrintCollation: typeof Windows$Graphics$Printing$PrintCollation,
    PrintStaple: typeof Windows$Graphics$Printing$PrintStaple,
    PrintHolePunch: typeof Windows$Graphics$Printing$PrintHolePunch,
    PrintBinding: typeof Windows$Graphics$Printing$PrintBinding,
    PrintTaskCompletion: typeof Windows$Graphics$Printing$PrintTaskCompletion,
    PrintTaskOptions: typeof Windows$Graphics$Printing$PrintTaskOptions,
    StandardPrintTaskOptions: typeof Windows$Graphics$Printing$StandardPrintTaskOptions,
    PrintTaskProgressingEventArgs: typeof Windows$Graphics$Printing$PrintTaskProgressingEventArgs,
    PrintTaskCompletedEventArgs: typeof Windows$Graphics$Printing$PrintTaskCompletedEventArgs,
    PrintTask: typeof Windows$Graphics$Printing$PrintTask,
    PrintTaskSourceRequestedDeferral: typeof Windows$Graphics$Printing$PrintTaskSourceRequestedDeferral,
    PrintTaskSourceRequestedArgs: typeof Windows$Graphics$Printing$PrintTaskSourceRequestedArgs,
    PrintTaskRequestedDeferral: typeof Windows$Graphics$Printing$PrintTaskRequestedDeferral,
    PrintTaskRequest: typeof Windows$Graphics$Printing$PrintTaskRequest,
    PrintTaskRequestedEventArgs: typeof Windows$Graphics$Printing$PrintTaskRequestedEventArgs,
    PrintManager: typeof Windows$Graphics$Printing$PrintManager,
    OptionDetails: typeof npm$namespace$Windows$Graphics$Printing$OptionDetails
  };

  declare var npm$namespace$Windows$Graphics$Printing$OptionDetails: {
    PrintOptionStates: typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates,
    PrintOptionType: typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType,
    PrintCopiesOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintCopiesOptionDetails,
    PrintMediaSizeOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintMediaSizeOptionDetails,
    PrintMediaTypeOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintMediaTypeOptionDetails,
    PrintOrientationOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintOrientationOptionDetails,
    PrintQualityOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintQualityOptionDetails,
    PrintColorModeOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintColorModeOptionDetails,
    PrintDuplexOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintDuplexOptionDetails,
    PrintCollationOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintCollationOptionDetails,
    PrintStapleOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintStapleOptionDetails,
    PrintHolePunchOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintHolePunchOptionDetails,
    PrintBindingOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintBindingOptionDetails,
    PrintCustomTextOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintCustomTextOptionDetails,
    PrintCustomItemDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintCustomItemDetails,
    PrintCustomItemListOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintCustomItemListOptionDetails,
    PrintTaskOptionChangedEventArgs: typeof Windows$Graphics$Printing$OptionDetails$PrintTaskOptionChangedEventArgs,
    PrintTaskOptionDetails: typeof Windows$Graphics$Printing$OptionDetails$PrintTaskOptionDetails
  };

  declare export var Windows$Graphics$Printing$OptionDetails$PrintOptionStates: {|
    +none: 0, // 0
    +enabled: 1, // 1
    +constrained: 2 // 2
  |};

  declare export var Windows$Graphics$Printing$OptionDetails$PrintOptionType: {|
    +unknown: 0, // 0
    +number: 1, // 1
    +text: 2, // 2
    +itemList: 3 // 3
  |};

  declare export interface Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    trySetValue(value: any): boolean;
  }

  declare export type Windows$Graphics$Printing$OptionDetails$IPrintNumberOptionDetails = {
    maxValue: number,
    minValue: number
  } & Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails;

  declare export type Windows$Graphics$Printing$OptionDetails$IPrintTextOptionDetails = {
    maxCharacters: number
  } & Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails;

  declare export type Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails = {
    items: Windows$Foundation$Collections$IVectorView<any>
  } & Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails;

  declare export class Windows$Graphics$Printing$OptionDetails$PrintCopiesOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintNumberOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    maxValue: number;
    minValue: number;
    trySetValue(value: any): boolean;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintMediaSizeOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    items: Windows$Foundation$Collections$IVectorView<any>;
    trySetValue(value: any): boolean;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintMediaTypeOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    items: Windows$Foundation$Collections$IVectorView<any>;
    trySetValue(value: any): boolean;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintOrientationOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    items: Windows$Foundation$Collections$IVectorView<any>;
    trySetValue(value: any): boolean;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintQualityOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    items: Windows$Foundation$Collections$IVectorView<any>;
    trySetValue(value: any): boolean;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintColorModeOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    items: Windows$Foundation$Collections$IVectorView<any>;
    trySetValue(value: any): boolean;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintDuplexOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    items: Windows$Foundation$Collections$IVectorView<any>;
    trySetValue(value: any): boolean;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintCollationOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    items: Windows$Foundation$Collections$IVectorView<any>;
    trySetValue(value: any): boolean;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintStapleOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    items: Windows$Foundation$Collections$IVectorView<any>;
    trySetValue(value: any): boolean;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintHolePunchOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    items: Windows$Foundation$Collections$IVectorView<any>;
    trySetValue(value: any): boolean;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintBindingOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    items: Windows$Foundation$Collections$IVectorView<any>;
    trySetValue(value: any): boolean;
  }

  declare export type Windows$Graphics$Printing$OptionDetails$IPrintCustomOptionDetails = {
    displayName: string
  } & Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails;

  declare export type Windows$Graphics$Printing$OptionDetails$IPrintCustomTextOptionDetails = {
    maxCharacters: number
  } & Windows$Graphics$Printing$OptionDetails$IPrintCustomOptionDetails &
    Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails;

  declare export class Windows$Graphics$Printing$OptionDetails$PrintCustomTextOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintCustomOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintCustomTextOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    displayName: string;
    maxCharacters: number;
    trySetValue(value: any): boolean;
  }

  declare export interface Windows$Graphics$Printing$OptionDetails$IPrintCustomItemDetails {
    itemDisplayName: string;
    itemId: string;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintCustomItemDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintCustomItemDetails {
    itemDisplayName: string;
    itemId: string;
  }

  declare export type Windows$Graphics$Printing$OptionDetails$IPrintCustomItemListOptionDetails = {
    addItem(itemId: string, displayName: string): void
  } & Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails &
    Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails &
    Windows$Graphics$Printing$OptionDetails$IPrintCustomOptionDetails;

  declare export class Windows$Graphics$Printing$OptionDetails$PrintCustomItemListOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintCustomOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintItemListOptionDetails,
      Windows$Graphics$Printing$OptionDetails$IPrintCustomItemListOptionDetails {
    errorText: string;
    optionId: string;
    optionType: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionType
    >;
    state: $Values<
      typeof Windows$Graphics$Printing$OptionDetails$PrintOptionStates
    >;
    value: any;
    displayName: string;
    items: Windows$Foundation$Collections$IVectorView<any>;
    trySetValue(value: any): boolean;
    addItem(itemId: string, displayName: string): void;
  }

  declare export interface Windows$Graphics$Printing$OptionDetails$IPrintTaskOptionChangedEventArgs {
    optionId: any;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintTaskOptionChangedEventArgs
    mixins Windows$Graphics$Printing$OptionDetails$IPrintTaskOptionChangedEventArgs {
    optionId: any;
  }

  declare export interface Windows$Graphics$Printing$OptionDetails$IPrintTaskOptionDetails {
    options: Windows$Foundation$Collections$IMapView<
      string,
      Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails
    >;
    createItemListOption(
      optionId: string,
      displayName: string
    ): Windows$Graphics$Printing$OptionDetails$PrintCustomItemListOptionDetails;
    createTextOption(
      optionId: string,
      displayName: string
    ): Windows$Graphics$Printing$OptionDetails$PrintCustomTextOptionDetails;
    onoptionchanged: any;
    onbeginvalidation: any;
  }

  declare export class Windows$Graphics$Printing$OptionDetails$PrintTaskOptionDetails
    mixins Windows$Graphics$Printing$OptionDetails$IPrintTaskOptionDetails,
      Windows$Graphics$Printing$IPrintTaskOptionsCore,
      Windows$Graphics$Printing$IPrintTaskOptionsCoreUIConfiguration {
    options: Windows$Foundation$Collections$IMapView<
      string,
      Windows$Graphics$Printing$OptionDetails$IPrintOptionDetails
    >;
    displayedOptions: Windows$Foundation$Collections$IVector<string>;
    createItemListOption(
      optionId: string,
      displayName: string
    ): Windows$Graphics$Printing$OptionDetails$PrintCustomItemListOptionDetails;
    createTextOption(
      optionId: string,
      displayName: string
    ): Windows$Graphics$Printing$OptionDetails$PrintCustomTextOptionDetails;
    onoptionchanged: any;
    onbeginvalidation: any;
    getPageDescription(
      jobPageNumber: number
    ): Windows$Graphics$Printing$PrintPageDescription;
    static getFromPrintTaskOptions(
      printTaskOptions: Windows$Graphics$Printing$PrintTaskOptions
    ): Windows$Graphics$Printing$OptionDetails$PrintTaskOptionDetails;
  }

  declare export interface Windows$Graphics$Printing$OptionDetails$IPrintTaskOptionDetailsStatic {
    getFromPrintTaskOptions(
      printTaskOptions: Windows$Graphics$Printing$PrintTaskOptions
    ): Windows$Graphics$Printing$OptionDetails$PrintTaskOptionDetails;
  }

  declare export interface Windows$Graphics$Printing$PrintPageDescription {
    pageSize: Windows$Foundation$Size;
    imageableRect: Windows$Foundation$Rect;
    dpiX: number;
    dpiY: number;
  }

  declare export var Windows$Graphics$Printing$PrintMediaSize: {|
    +default: 0, // 0
    +notAvailable: 1, // 1
    +printerCustom: 2, // 2
    +businessCard: 3, // 3
    +creditCard: 4, // 4
    +isoA0: 5, // 5
    +isoA1: 6, // 6
    +isoA10: 7, // 7
    +isoA2: 8, // 8
    +isoA3: 9, // 9
    +isoA3Extra: 10, // 10
    +isoA3Rotated: 11, // 11
    +isoA4: 12, // 12
    +isoA4Extra: 13, // 13
    +isoA4Rotated: 14, // 14
    +isoA5: 15, // 15
    +isoA5Extra: 16, // 16
    +isoA5Rotated: 17, // 17
    +isoA6: 18, // 18
    +isoA6Rotated: 19, // 19
    +isoA7: 20, // 20
    +isoA8: 21, // 21
    +isoA9: 22, // 22
    +isoB0: 23, // 23
    +isoB1: 24, // 24
    +isoB10: 25, // 25
    +isoB2: 26, // 26
    +isoB3: 27, // 27
    +isoB4: 28, // 28
    +isoB4Envelope: 29, // 29
    +isoB5Envelope: 30, // 30
    +isoB5Extra: 31, // 31
    +isoB7: 32, // 32
    +isoB8: 33, // 33
    +isoB9: 34, // 34
    +isoC0: 35, // 35
    +isoC1: 36, // 36
    +isoC10: 37, // 37
    +isoC2: 38, // 38
    +isoC3: 39, // 39
    +isoC3Envelope: 40, // 40
    +isoC4: 41, // 41
    +isoC4Envelope: 42, // 42
    +isoC5: 43, // 43
    +isoC5Envelope: 44, // 44
    +isoC6: 45, // 45
    +isoC6C5Envelope: 46, // 46
    +isoC6Envelope: 47, // 47
    +isoC7: 48, // 48
    +isoC8: 49, // 49
    +isoC9: 50, // 50
    +isoDLEnvelope: 51, // 51
    +isoDLEnvelopeRotated: 52, // 52
    +isoSRA3: 53, // 53
    +japan2LPhoto: 54, // 54
    +japanChou3Envelope: 55, // 55
    +japanChou3EnvelopeRotated: 56, // 56
    +japanChou4Envelope: 57, // 57
    +japanChou4EnvelopeRotated: 58, // 58
    +japanDoubleHagakiPostcard: 59, // 59
    +japanDoubleHagakiPostcardRotated: 60, // 60
    +japanHagakiPostcard: 61, // 61
    +japanHagakiPostcardRotated: 62, // 62
    +japanKaku2Envelope: 63, // 63
    +japanKaku2EnvelopeRotated: 64, // 64
    +japanKaku3Envelope: 65, // 65
    +japanKaku3EnvelopeRotated: 66, // 66
    +japanLPhoto: 67, // 67
    +japanQuadrupleHagakiPostcard: 68, // 68
    +japanYou1Envelope: 69, // 69
    +japanYou2Envelope: 70, // 70
    +japanYou3Envelope: 71, // 71
    +japanYou4Envelope: 72, // 72
    +japanYou4EnvelopeRotated: 73, // 73
    +japanYou6Envelope: 74, // 74
    +japanYou6EnvelopeRotated: 75, // 75
    +jisB0: 76, // 76
    +jisB1: 77, // 77
    +jisB10: 78, // 78
    +jisB2: 79, // 79
    +jisB3: 80, // 80
    +jisB4: 81, // 81
    +jisB4Rotated: 82, // 82
    +jisB5: 83, // 83
    +jisB5Rotated: 84, // 84
    +jisB6: 85, // 85
    +jisB6Rotated: 86, // 86
    +jisB7: 87, // 87
    +jisB8: 88, // 88
    +jisB9: 89, // 89
    +northAmerica10x11: 90, // 90
    +northAmerica10x12: 91, // 91
    +northAmerica10x14: 92, // 92
    +northAmerica11x17: 93, // 93
    +northAmerica14x17: 94, // 94
    +northAmerica4x6: 95, // 95
    +northAmerica4x8: 96, // 96
    +northAmerica5x7: 97, // 97
    +northAmerica8x10: 98, // 98
    +northAmerica9x11: 99, // 99
    +northAmericaArchitectureASheet: 100, // 100
    +northAmericaArchitectureBSheet: 101, // 101
    +northAmericaArchitectureCSheet: 102, // 102
    +northAmericaArchitectureDSheet: 103, // 103
    +northAmericaArchitectureESheet: 104, // 104
    +northAmericaCSheet: 105, // 105
    +northAmericaDSheet: 106, // 106
    +northAmericaESheet: 107, // 107
    +northAmericaExecutive: 108, // 108
    +northAmericaGermanLegalFanfold: 109, // 109
    +northAmericaGermanStandardFanfold: 110, // 110
    +northAmericaLegal: 111, // 111
    +northAmericaLegalExtra: 112, // 112
    +northAmericaLetter: 113, // 113
    +northAmericaLetterExtra: 114, // 114
    +northAmericaLetterPlus: 115, // 115
    +northAmericaLetterRotated: 116, // 116
    +northAmericaMonarchEnvelope: 117, // 117
    +northAmericaNote: 118, // 118
    +northAmericaNumber10Envelope: 119, // 119
    +northAmericaNumber10EnvelopeRotated: 120, // 120
    +northAmericaNumber11Envelope: 121, // 121
    +northAmericaNumber12Envelope: 122, // 122
    +northAmericaNumber14Envelope: 123, // 123
    +northAmericaNumber9Envelope: 124, // 124
    +northAmericaPersonalEnvelope: 125, // 125
    +northAmericaQuarto: 126, // 126
    +northAmericaStatement: 127, // 127
    +northAmericaSuperA: 128, // 128
    +northAmericaSuperB: 129, // 129
    +northAmericaTabloid: 130, // 130
    +northAmericaTabloidExtra: 131, // 131
    +otherMetricA3Plus: 132, // 132
    +otherMetricA4Plus: 133, // 133
    +otherMetricFolio: 134, // 134
    +otherMetricInviteEnvelope: 135, // 135
    +otherMetricItalianEnvelope: 136, // 136
    +prc10Envelope: 137, // 137
    +prc10EnvelopeRotated: 138, // 138
    +prc16K: 139, // 139
    +prc16KRotated: 140, // 140
    +prc1Envelope: 141, // 141
    +prc1EnvelopeRotated: 142, // 142
    +prc2Envelope: 143, // 143
    +prc2EnvelopeRotated: 144, // 144
    +prc32K: 145, // 145
    +prc32KBig: 146, // 146
    +prc32KRotated: 147, // 147
    +prc3Envelope: 148, // 148
    +prc3EnvelopeRotated: 149, // 149
    +prc4Envelope: 150, // 150
    +prc4EnvelopeRotated: 151, // 151
    +prc5Envelope: 152, // 152
    +prc5EnvelopeRotated: 153, // 153
    +prc6Envelope: 154, // 154
    +prc6EnvelopeRotated: 155, // 155
    +prc7Envelope: 156, // 156
    +prc7EnvelopeRotated: 157, // 157
    +prc8Envelope: 158, // 158
    +prc8EnvelopeRotated: 159, // 159
    +prc9Envelope: 160, // 160
    +prc9EnvelopeRotated: 161, // 161
    +roll04Inch: 162, // 162
    +roll06Inch: 163, // 163
    +roll08Inch: 164, // 164
    +roll12Inch: 165, // 165
    +roll15Inch: 166, // 166
    +roll18Inch: 167, // 167
    +roll22Inch: 168, // 168
    +roll24Inch: 169, // 169
    +roll30Inch: 170, // 170
    +roll36Inch: 171, // 171
    +roll54Inch: 172 // 172
  |};

  declare export var Windows$Graphics$Printing$PrintMediaType: {|
    +default: 0, // 0
    +notAvailable: 1, // 1
    +printerCustom: 2, // 2
    +autoSelect: 3, // 3
    +archival: 4, // 4
    +backPrintFilm: 5, // 5
    +bond: 6, // 6
    +cardStock: 7, // 7
    +continuous: 8, // 8
    +envelopePlain: 9, // 9
    +envelopeWindow: 10, // 10
    +fabric: 11, // 11
    +highResolution: 12, // 12
    +label: 13, // 13
    +multiLayerForm: 14, // 14
    +multiPartForm: 15, // 15
    +photographic: 16, // 16
    +photographicFilm: 17, // 17
    +photographicGlossy: 18, // 18
    +photographicHighGloss: 19, // 19
    +photographicMatte: 20, // 20
    +photographicSatin: 21, // 21
    +photographicSemiGloss: 22, // 22
    +plain: 23, // 23
    +screen: 24, // 24
    +screenPaged: 25, // 25
    +stationery: 26, // 26
    +tabStockFull: 27, // 27
    +tabStockPreCut: 28, // 28
    +transparency: 29, // 29
    +tShirtTransfer: 30, // 30
    +none: 31 // 31
  |};

  declare export var Windows$Graphics$Printing$PrintOrientation: {|
    +default: 0, // 0
    +notAvailable: 1, // 1
    +printerCustom: 2, // 2
    +portrait: 3, // 3
    +portraitFlipped: 4, // 4
    +landscape: 5, // 5
    +landscapeFlipped: 6 // 6
  |};

  declare export var Windows$Graphics$Printing$PrintQuality: {|
    +default: 0, // 0
    +notAvailable: 1, // 1
    +printerCustom: 2, // 2
    +automatic: 3, // 3
    +draft: 4, // 4
    +fax: 5, // 5
    +high: 6, // 6
    +normal: 7, // 7
    +photographic: 8, // 8
    +text: 9 // 9
  |};

  declare export var Windows$Graphics$Printing$PrintColorMode: {|
    +default: 0, // 0
    +notAvailable: 1, // 1
    +printerCustom: 2, // 2
    +color: 3, // 3
    +grayscale: 4, // 4
    +monochrome: 5 // 5
  |};

  declare export var Windows$Graphics$Printing$PrintDuplex: {|
    +default: 0, // 0
    +notAvailable: 1, // 1
    +printerCustom: 2, // 2
    +oneSided: 3, // 3
    +twoSidedShortEdge: 4, // 4
    +twoSidedLongEdge: 5 // 5
  |};

  declare export var Windows$Graphics$Printing$PrintCollation: {|
    +default: 0, // 0
    +notAvailable: 1, // 1
    +printerCustom: 2, // 2
    +collated: 3, // 3
    +uncollated: 4 // 4
  |};

  declare export var Windows$Graphics$Printing$PrintStaple: {|
    +default: 0, // 0
    +notAvailable: 1, // 1
    +printerCustom: 2, // 2
    +none: 3, // 3
    +stapleTopLeft: 4, // 4
    +stapleTopRight: 5, // 5
    +stapleBottomLeft: 6, // 6
    +stapleBottomRight: 7, // 7
    +stapleDualLeft: 8, // 8
    +stapleDualRight: 9, // 9
    +stapleDualTop: 10, // 10
    +stapleDualBottom: 11, // 11
    +saddleStitch: 12 // 12
  |};

  declare export var Windows$Graphics$Printing$PrintHolePunch: {|
    +default: 0, // 0
    +notAvailable: 1, // 1
    +printerCustom: 2, // 2
    +none: 3, // 3
    +leftEdge: 4, // 4
    +rightEdge: 5, // 5
    +topEdge: 6, // 6
    +bottomEdge: 7 // 7
  |};

  declare export var Windows$Graphics$Printing$PrintBinding: {|
    +default: 0, // 0
    +notAvailable: 1, // 1
    +printerCustom: 2, // 2
    +none: 3, // 3
    +bale: 4, // 4
    +bindBottom: 5, // 5
    +bindLeft: 6, // 6
    +bindRight: 7, // 7
    +bindTop: 8, // 8
    +booklet: 9, // 9
    +edgeStitchBottom: 10, // 10
    +edgeStitchLeft: 11, // 11
    +edgeStitchRight: 12, // 12
    +edgeStitchTop: 13, // 13
    +fold: 14, // 14
    +jogOffset: 15, // 15
    +trim: 16 // 16
  |};

  declare export interface Windows$Graphics$Printing$IPrintTaskOptionsCoreProperties {
    binding: $Values<typeof Windows$Graphics$Printing$PrintBinding>;
    collation: $Values<typeof Windows$Graphics$Printing$PrintCollation>;
    colorMode: $Values<typeof Windows$Graphics$Printing$PrintColorMode>;
    duplex: $Values<typeof Windows$Graphics$Printing$PrintDuplex>;
    holePunch: $Values<typeof Windows$Graphics$Printing$PrintHolePunch>;
    maxCopies: number;
    mediaSize: $Values<typeof Windows$Graphics$Printing$PrintMediaSize>;
    mediaType: $Values<typeof Windows$Graphics$Printing$PrintMediaType>;
    minCopies: number;
    numberOfCopies: number;
    orientation: $Values<typeof Windows$Graphics$Printing$PrintOrientation>;
    printQuality: $Values<typeof Windows$Graphics$Printing$PrintQuality>;
    staple: $Values<typeof Windows$Graphics$Printing$PrintStaple>;
  }

  declare export interface Windows$Graphics$Printing$IPrintTaskOptionsCoreUIConfiguration {
    displayedOptions: Windows$Foundation$Collections$IVector<string>;
  }

  declare export interface Windows$Graphics$Printing$IPrintTaskOptionsCore {
    getPageDescription(
      jobPageNumber: number
    ): Windows$Graphics$Printing$PrintPageDescription;
  }

  declare export class Windows$Graphics$Printing$PrintTaskOptions
    mixins Windows$Graphics$Printing$IPrintTaskOptionsCore,
      Windows$Graphics$Printing$IPrintTaskOptionsCoreProperties,
      Windows$Graphics$Printing$IPrintTaskOptionsCoreUIConfiguration {
    binding: $Values<typeof Windows$Graphics$Printing$PrintBinding>;
    collation: $Values<typeof Windows$Graphics$Printing$PrintCollation>;
    colorMode: $Values<typeof Windows$Graphics$Printing$PrintColorMode>;
    duplex: $Values<typeof Windows$Graphics$Printing$PrintDuplex>;
    holePunch: $Values<typeof Windows$Graphics$Printing$PrintHolePunch>;
    maxCopies: number;
    mediaSize: $Values<typeof Windows$Graphics$Printing$PrintMediaSize>;
    mediaType: $Values<typeof Windows$Graphics$Printing$PrintMediaType>;
    minCopies: number;
    numberOfCopies: number;
    orientation: $Values<typeof Windows$Graphics$Printing$PrintOrientation>;
    printQuality: $Values<typeof Windows$Graphics$Printing$PrintQuality>;
    staple: $Values<typeof Windows$Graphics$Printing$PrintStaple>;
    displayedOptions: Windows$Foundation$Collections$IVector<string>;
    getPageDescription(
      jobPageNumber: number
    ): Windows$Graphics$Printing$PrintPageDescription;
  }

  declare export interface Windows$Graphics$Printing$IStandardPrintTaskOptionsStatic {
    binding: string;
    collation: string;
    colorMode: string;
    copies: string;
    duplex: string;
    holePunch: string;
    inputBin: string;
    mediaSize: string;
    mediaType: string;
    nUp: string;
    orientation: string;
    printQuality: string;
    staple: string;
  }

  declare export class Windows$Graphics$Printing$StandardPrintTaskOptions {
    static binding: string;
    static collation: string;
    static colorMode: string;
    static copies: string;
    static duplex: string;
    static holePunch: string;
    static inputBin: string;
    static mediaSize: string;
    static mediaType: string;
    static nUp: string;
    static orientation: string;
    static printQuality: string;
    static staple: string;
  }

  declare export interface Windows$Graphics$Printing$IPrintDocumentSource {}

  declare export interface Windows$Graphics$Printing$IPrintTaskProgressingEventArgs {
    documentPageCount: number;
  }

  declare export class Windows$Graphics$Printing$PrintTaskProgressingEventArgs
    mixins Windows$Graphics$Printing$IPrintTaskProgressingEventArgs {
    documentPageCount: number;
  }

  declare export var Windows$Graphics$Printing$PrintTaskCompletion: {|
    +abandoned: 0, // 0
    +canceled: 1, // 1
    +failed: 2, // 2
    +submitted: 3 // 3
  |};

  declare export interface Windows$Graphics$Printing$IPrintTaskCompletedEventArgs {
    completion: $Values<typeof Windows$Graphics$Printing$PrintTaskCompletion>;
  }

  declare export class Windows$Graphics$Printing$PrintTaskCompletedEventArgs
    mixins Windows$Graphics$Printing$IPrintTaskCompletedEventArgs {
    completion: $Values<typeof Windows$Graphics$Printing$PrintTaskCompletion>;
  }

  declare export interface Windows$Graphics$Printing$IPrintTask {
    options: Windows$Graphics$Printing$PrintTaskOptions;
    properties: Windows$ApplicationModel$DataTransfer$DataPackagePropertySet;
    source: Windows$Graphics$Printing$IPrintDocumentSource;
    onpreviewing: any;
    onsubmitting: any;
    onprogressing: any;
    oncompleted: any;
  }

  declare export class Windows$Graphics$Printing$PrintTask
    mixins Windows$Graphics$Printing$IPrintTask {
    options: Windows$Graphics$Printing$PrintTaskOptions;
    properties: Windows$ApplicationModel$DataTransfer$DataPackagePropertySet;
    source: Windows$Graphics$Printing$IPrintDocumentSource;
    onpreviewing: any;
    onsubmitting: any;
    onprogressing: any;
    oncompleted: any;
  }

  declare export interface Windows$Graphics$Printing$IPrintTaskSourceRequestedDeferral {
    complete(): void;
  }

  declare export class Windows$Graphics$Printing$PrintTaskSourceRequestedDeferral
    mixins Windows$Graphics$Printing$IPrintTaskSourceRequestedDeferral {
    complete(): void;
  }

  declare export interface Windows$Graphics$Printing$IPrintTaskSourceRequestedArgs {
    deadline: Date;
    setSource(source: Windows$Graphics$Printing$IPrintDocumentSource): void;
    getDeferral(): Windows$Graphics$Printing$PrintTaskSourceRequestedDeferral;
  }

  declare export class Windows$Graphics$Printing$PrintTaskSourceRequestedArgs
    mixins Windows$Graphics$Printing$IPrintTaskSourceRequestedArgs {
    deadline: Date;
    setSource(source: Windows$Graphics$Printing$IPrintDocumentSource): void;
    getDeferral(): Windows$Graphics$Printing$PrintTaskSourceRequestedDeferral;
  }

  declare export interface Windows$Graphics$Printing$PrintTaskSourceRequestedHandler {
    (args: Windows$Graphics$Printing$PrintTaskSourceRequestedArgs): void;
  }

  declare export interface Windows$Graphics$Printing$IPrintTaskRequestedDeferral {
    complete(): void;
  }

  declare export class Windows$Graphics$Printing$PrintTaskRequestedDeferral
    mixins Windows$Graphics$Printing$IPrintTaskRequestedDeferral {
    complete(): void;
  }

  declare export interface Windows$Graphics$Printing$IPrintTaskRequest {
    deadline: Date;
    createPrintTask(
      title: string,
      handler: Windows$Graphics$Printing$PrintTaskSourceRequestedHandler
    ): Windows$Graphics$Printing$PrintTask;
    getDeferral(): Windows$Graphics$Printing$PrintTaskRequestedDeferral;
  }

  declare export class Windows$Graphics$Printing$PrintTaskRequest
    mixins Windows$Graphics$Printing$IPrintTaskRequest {
    deadline: Date;
    createPrintTask(
      title: string,
      handler: Windows$Graphics$Printing$PrintTaskSourceRequestedHandler
    ): Windows$Graphics$Printing$PrintTask;
    getDeferral(): Windows$Graphics$Printing$PrintTaskRequestedDeferral;
  }

  declare export interface Windows$Graphics$Printing$IPrintTaskRequestedEventArgs {
    request: Windows$Graphics$Printing$PrintTaskRequest;
  }

  declare export class Windows$Graphics$Printing$PrintTaskRequestedEventArgs
    mixins Windows$Graphics$Printing$IPrintTaskRequestedEventArgs {
    request: Windows$Graphics$Printing$PrintTaskRequest;
  }

  declare export interface Windows$Graphics$Printing$IPrintManagerStatic {
    getForCurrentView(): Windows$Graphics$Printing$PrintManager;
    showPrintUIAsync(): Windows$Foundation$IAsyncOperation<boolean>;
  }

  declare export class Windows$Graphics$Printing$PrintManager
    mixins Windows$Graphics$Printing$IPrintManager {
    onprinttaskrequested: any;
    static getForCurrentView(): Windows$Graphics$Printing$PrintManager;
    static showPrintUIAsync(): Windows$Foundation$IAsyncOperation<boolean>;
  }

  declare export interface Windows$Graphics$Printing$IPrintManager {
    onprinttaskrequested: any;
  }

  declare var npm$namespace$Windows$Management: {
    Deployment: typeof npm$namespace$Windows$Management$Deployment,
    Core: typeof npm$namespace$Windows$Management$Core
  };

  declare var npm$namespace$Windows$Management$Deployment: {
    DeploymentProgressState: typeof Windows$Management$Deployment$DeploymentProgressState,
    DeploymentOptions: typeof Windows$Management$Deployment$DeploymentOptions,
    PackageInstallState: typeof Windows$Management$Deployment$PackageInstallState,
    PackageState: typeof Windows$Management$Deployment$PackageState,
    DeploymentResult: typeof Windows$Management$Deployment$DeploymentResult,
    PackageUserInformation: typeof Windows$Management$Deployment$PackageUserInformation,
    PackageManager: typeof Windows$Management$Deployment$PackageManager
  };

  declare export var Windows$Management$Deployment$DeploymentProgressState: {|
    +queued: 0, // 0
    +processing: 1 // 1
  |};

  declare export interface Windows$Management$Deployment$DeploymentProgress {
    state: $Values<
      typeof Windows$Management$Deployment$DeploymentProgressState
    >;
    percentage: number;
  }

  declare export var Windows$Management$Deployment$DeploymentOptions: {|
    +none: 0, // 0
    +forceApplicationShutdown: 1, // 1
    +developmentMode: 2 // 2
  |};

  declare export interface Windows$Management$Deployment$IDeploymentResult {
    activityId: string;
    errorText: string;
    extendedErrorCode: number;
  }

  declare export class Windows$Management$Deployment$DeploymentResult
    mixins Windows$Management$Deployment$IDeploymentResult {
    activityId: string;
    errorText: string;
    extendedErrorCode: number;
  }

  declare export var Windows$Management$Deployment$PackageInstallState: {|
    +notInstalled: 0, // 0
    +staged: 1, // 1
    +installed: 2 // 2
  |};

  declare export interface Windows$Management$Deployment$IPackageUserInformation {
    installState: $Values<
      typeof Windows$Management$Deployment$PackageInstallState
    >;
    userSecurityId: string;
  }

  declare export class Windows$Management$Deployment$PackageUserInformation
    mixins Windows$Management$Deployment$IPackageUserInformation {
    installState: $Values<
      typeof Windows$Management$Deployment$PackageInstallState
    >;
    userSecurityId: string;
  }

  declare export var Windows$Management$Deployment$PackageState: {|
    +normal: 0, // 0
    +licenseInvalid: 1, // 1
    +modified: 2, // 2
    +tampered: 3 // 3
  |};

  declare export interface Windows$Management$Deployment$IPackageManager {
    addPackageAsync(
      packageUri: Windows$Foundation$Uri,
      dependencyPackageUris: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>,
      deploymentOptions: $Values<
        typeof Windows$Management$Deployment$DeploymentOptions
      >
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    updatePackageAsync(
      packageUri: Windows$Foundation$Uri,
      dependencyPackageUris: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>,
      deploymentOptions: $Values<
        typeof Windows$Management$Deployment$DeploymentOptions
      >
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    removePackageAsync(
      packageFullName: string
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    stagePackageAsync(
      packageUri: Windows$Foundation$Uri,
      dependencyPackageUris: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    registerPackageAsync(
      manifestUri: Windows$Foundation$Uri,
      dependencyPackageUris: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>,
      deploymentOptions: $Values<
        typeof Windows$Management$Deployment$DeploymentOptions
      >
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    findPackages(): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findPackagesForUser(
      userSecurityId: string
    ): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findPackages(
      packageName: string,
      packagePublisher: string
    ): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findPackagesForUser(
      userSecurityId: string,
      packageName: string,
      packagePublisher: string
    ): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findUsers(
      packageFullName: string
    ): Windows$Foundation$Collections$IIterable<Windows$Management$Deployment$PackageUserInformation>;
    setPackageState(
      packageFullName: string,
      packageState: $Values<typeof Windows$Management$Deployment$PackageState>
    ): void;
    findPackage(packageFullName: string): Windows$ApplicationModel$Package;
    cleanupPackageForUserAsync(
      packageName: string,
      userSecurityId: string
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    findPackages(
      packageFamilyName: string
    ): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findPackagesForUser(
      userSecurityId: string,
      packageFamilyName: string
    ): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findPackageForUser(
      userSecurityId: string,
      packageFullName: string
    ): Windows$ApplicationModel$Package;
  }

  declare export class Windows$Management$Deployment$PackageManager
    mixins Windows$Management$Deployment$IPackageManager {
    addPackageAsync(
      packageUri: Windows$Foundation$Uri,
      dependencyPackageUris: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>,
      deploymentOptions: $Values<
        typeof Windows$Management$Deployment$DeploymentOptions
      >
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    updatePackageAsync(
      packageUri: Windows$Foundation$Uri,
      dependencyPackageUris: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>,
      deploymentOptions: $Values<
        typeof Windows$Management$Deployment$DeploymentOptions
      >
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    removePackageAsync(
      packageFullName: string
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    stagePackageAsync(
      packageUri: Windows$Foundation$Uri,
      dependencyPackageUris: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    registerPackageAsync(
      manifestUri: Windows$Foundation$Uri,
      dependencyPackageUris: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>,
      deploymentOptions: $Values<
        typeof Windows$Management$Deployment$DeploymentOptions
      >
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    findPackages(): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findPackagesForUser(
      userSecurityId: string
    ): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findPackages(
      packageName: string,
      packagePublisher: string
    ): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findPackagesForUser(
      userSecurityId: string,
      packageName: string,
      packagePublisher: string
    ): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findUsers(
      packageFullName: string
    ): Windows$Foundation$Collections$IIterable<Windows$Management$Deployment$PackageUserInformation>;
    setPackageState(
      packageFullName: string,
      packageState: $Values<typeof Windows$Management$Deployment$PackageState>
    ): void;
    findPackage(packageFullName: string): Windows$ApplicationModel$Package;
    cleanupPackageForUserAsync(
      packageName: string,
      userSecurityId: string
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Management$Deployment$DeploymentResult,
      Windows$Management$Deployment$DeploymentProgress
    >;
    findPackages(
      packageFamilyName: string
    ): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findPackagesForUser(
      userSecurityId: string,
      packageFamilyName: string
    ): Windows$Foundation$Collections$IIterable<Windows$ApplicationModel$Package>;
    findPackageForUser(
      userSecurityId: string,
      packageFullName: string
    ): Windows$ApplicationModel$Package;
  }

  declare var npm$namespace$Windows$Management$Core: {
    ApplicationDataManager: typeof Windows$Management$Core$ApplicationDataManager
  };
  declare export interface Windows$Management$Core$IApplicationDataManagerStatics {
    createForPackageFamily(
      packageFamilyName: string
    ): Windows$Storage$ApplicationData;
  }

  declare export interface Windows$Management$Core$IApplicationDataManager {}

  declare export class Windows$Management$Core$ApplicationDataManager
    mixins Windows$Management$Core$IApplicationDataManager {
    static createForPackageFamily(
      packageFamilyName: string
    ): Windows$Storage$ApplicationData;
  }

  declare var npm$namespace$Windows$Media: {
    SoundLevel: typeof Windows$Media$SoundLevel,
    MediaControl: typeof Windows$Media$MediaControl,
    MediaExtensionManager: typeof Windows$Media$MediaExtensionManager,
    VideoEffects: typeof Windows$Media$VideoEffects,
    Capture: typeof npm$namespace$Windows$Media$Capture,
    Devices: typeof npm$namespace$Windows$Media$Devices,
    Playlists: typeof npm$namespace$Windows$Media$Playlists,
    PlayTo: typeof npm$namespace$Windows$Media$PlayTo,
    MediaProperties: typeof npm$namespace$Windows$Media$MediaProperties,
    Protection: typeof npm$namespace$Windows$Media$Protection,
    Transcoding: typeof npm$namespace$Windows$Media$Transcoding
  };

  declare var npm$namespace$Windows$Media$Capture: {
    CameraCaptureUIMode: typeof Windows$Media$Capture$CameraCaptureUIMode,
    CameraCaptureUIPhotoFormat: typeof Windows$Media$Capture$CameraCaptureUIPhotoFormat,
    CameraCaptureUIVideoFormat: typeof Windows$Media$Capture$CameraCaptureUIVideoFormat,
    CameraCaptureUIMaxVideoResolution: typeof Windows$Media$Capture$CameraCaptureUIMaxVideoResolution,
    CameraCaptureUIMaxPhotoResolution: typeof Windows$Media$Capture$CameraCaptureUIMaxPhotoResolution,
    MediaStreamType: typeof Windows$Media$Capture$MediaStreamType,
    StreamingCaptureMode: typeof Windows$Media$Capture$StreamingCaptureMode,
    VideoRotation: typeof Windows$Media$Capture$VideoRotation,
    PhotoCaptureSource: typeof Windows$Media$Capture$PhotoCaptureSource,
    VideoDeviceCharacteristic: typeof Windows$Media$Capture$VideoDeviceCharacteristic,
    PowerlineFrequency: typeof Windows$Media$Capture$PowerlineFrequency,
    CameraCaptureUIPhotoCaptureSettings: typeof Windows$Media$Capture$CameraCaptureUIPhotoCaptureSettings,
    CameraCaptureUIVideoCaptureSettings: typeof Windows$Media$Capture$CameraCaptureUIVideoCaptureSettings,
    CameraCaptureUI: typeof Windows$Media$Capture$CameraCaptureUI,
    CameraOptionsUI: typeof Windows$Media$Capture$CameraOptionsUI,
    MediaCaptureFailedEventArgs: typeof Windows$Media$Capture$MediaCaptureFailedEventArgs,
    MediaCapture: typeof Windows$Media$Capture$MediaCapture,
    MediaCaptureInitializationSettings: typeof Windows$Media$Capture$MediaCaptureInitializationSettings,
    MediaCaptureSettings: typeof Windows$Media$Capture$MediaCaptureSettings
  };

  declare export var Windows$Media$Capture$CameraCaptureUIMode: {|
    +photoOrVideo: 0, // 0
    +photo: 1, // 1
    +video: 2 // 2
  |};

  declare export var Windows$Media$Capture$CameraCaptureUIPhotoFormat: {|
    +jpeg: 0, // 0
    +png: 1, // 1
    +jpegXR: 2 // 2
  |};

  declare export var Windows$Media$Capture$CameraCaptureUIVideoFormat: {|
    +mp4: 0, // 0
    +wmv: 1 // 1
  |};

  declare export var Windows$Media$Capture$CameraCaptureUIMaxVideoResolution: {|
    +highestAvailable: 0, // 0
    +lowDefinition: 1, // 1
    +standardDefinition: 2, // 2
    +highDefinition: 3 // 3
  |};

  declare export var Windows$Media$Capture$CameraCaptureUIMaxPhotoResolution: {|
    +highestAvailable: 0, // 0
    +verySmallQvga: 1, // 1
    +smallVga: 2, // 2
    +mediumXga: 3, // 3
    +large3M: 4, // 4
    +veryLarge5M: 5 // 5
  |};

  declare export interface Windows$Media$Capture$ICameraCaptureUIPhotoCaptureSettings {
    allowCropping: boolean;
    croppedAspectRatio: Windows$Foundation$Size;
    croppedSizeInPixels: Windows$Foundation$Size;
    format: $Values<typeof Windows$Media$Capture$CameraCaptureUIPhotoFormat>;
    maxResolution: $Values<
      typeof Windows$Media$Capture$CameraCaptureUIMaxPhotoResolution
    >;
  }

  declare export class Windows$Media$Capture$CameraCaptureUIPhotoCaptureSettings
    mixins Windows$Media$Capture$ICameraCaptureUIPhotoCaptureSettings {
    allowCropping: boolean;
    croppedAspectRatio: Windows$Foundation$Size;
    croppedSizeInPixels: Windows$Foundation$Size;
    format: $Values<typeof Windows$Media$Capture$CameraCaptureUIPhotoFormat>;
    maxResolution: $Values<
      typeof Windows$Media$Capture$CameraCaptureUIMaxPhotoResolution
    >;
  }

  declare export interface Windows$Media$Capture$ICameraCaptureUIVideoCaptureSettings {
    allowTrimming: boolean;
    format: $Values<typeof Windows$Media$Capture$CameraCaptureUIVideoFormat>;
    maxDurationInSeconds: number;
    maxResolution: $Values<
      typeof Windows$Media$Capture$CameraCaptureUIMaxVideoResolution
    >;
  }

  declare export class Windows$Media$Capture$CameraCaptureUIVideoCaptureSettings
    mixins Windows$Media$Capture$ICameraCaptureUIVideoCaptureSettings {
    allowTrimming: boolean;
    format: $Values<typeof Windows$Media$Capture$CameraCaptureUIVideoFormat>;
    maxDurationInSeconds: number;
    maxResolution: $Values<
      typeof Windows$Media$Capture$CameraCaptureUIMaxVideoResolution
    >;
  }

  declare export interface Windows$Media$Capture$ICameraCaptureUI {
    photoSettings: Windows$Media$Capture$CameraCaptureUIPhotoCaptureSettings;
    videoSettings: Windows$Media$Capture$CameraCaptureUIVideoCaptureSettings;
    captureFileAsync(
      mode: $Values<typeof Windows$Media$Capture$CameraCaptureUIMode>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
  }

  declare export class Windows$Media$Capture$CameraCaptureUI
    mixins Windows$Media$Capture$ICameraCaptureUI {
    photoSettings: Windows$Media$Capture$CameraCaptureUIPhotoCaptureSettings;
    videoSettings: Windows$Media$Capture$CameraCaptureUIVideoCaptureSettings;
    captureFileAsync(
      mode: $Values<typeof Windows$Media$Capture$CameraCaptureUIMode>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
  }

  declare export interface Windows$Media$Capture$ICameraOptionsUIStatics {
    show(mediaCapture: Windows$Media$Capture$MediaCapture): void;
  }

  declare export class Windows$Media$Capture$CameraOptionsUI {
    static show(mediaCapture: Windows$Media$Capture$MediaCapture): void;
  }

  declare export var Windows$Media$Capture$MediaStreamType: {|
    +videoPreview: 0, // 0
    +videoRecord: 1, // 1
    +audio: 2, // 2
    +photo: 3 // 3
  |};

  declare export var Windows$Media$Capture$StreamingCaptureMode: {|
    +audioAndVideo: 0, // 0
    +audio: 1, // 1
    +video: 2 // 2
  |};

  declare export var Windows$Media$Capture$VideoRotation: {|
    +none: 0, // 0
    +clockwise90Degrees: 1, // 1
    +clockwise180Degrees: 2, // 2
    +clockwise270Degrees: 3 // 3
  |};

  declare export var Windows$Media$Capture$PhotoCaptureSource: {|
    +auto: 0, // 0
    +videoPreview: 1, // 1
    +photo: 2 // 2
  |};

  declare export var Windows$Media$Capture$VideoDeviceCharacteristic: {|
    +allStreamsIndependent: 0, // 0
    +previewRecordStreamsIdentical: 1, // 1
    +previewPhotoStreamsIdentical: 2, // 2
    +recordPhotoStreamsIdentical: 3, // 3
    +allStreamsIdentical: 4 // 4
  |};

  declare export var Windows$Media$Capture$PowerlineFrequency: {|
    +disabled: 0, // 0
    +fiftyHertz: 1, // 1
    +sixtyHertz: 2 // 2
  |};

  declare export interface Windows$Media$Capture$IMediaCaptureFailedEventArgs {
    code: number;
    message: string;
  }

  declare export class Windows$Media$Capture$MediaCaptureFailedEventArgs
    mixins Windows$Media$Capture$IMediaCaptureFailedEventArgs {
    code: number;
    message: string;
  }

  declare export interface Windows$Media$Capture$MediaCaptureFailedEventHandler {
    (
      sender: Windows$Media$Capture$MediaCapture,
      errorEventArgs: Windows$Media$Capture$MediaCaptureFailedEventArgs
    ): void;
  }

  declare export class Windows$Media$Capture$MediaCapture
    mixins Windows$Media$Capture$IMediaCapture,
      Windows$Media$Capture$IMediaCaptureVideoPreview {
    audioDeviceController: Windows$Media$Devices$AudioDeviceController;
    mediaCaptureSettings: Windows$Media$Capture$MediaCaptureSettings;
    videoDeviceController: Windows$Media$Devices$VideoDeviceController;
    initializeAsync(): Windows$Foundation$IAsyncAction;
    initializeAsync(
      mediaCaptureInitializationSettings: Windows$Media$Capture$MediaCaptureInitializationSettings
    ): Windows$Foundation$IAsyncAction;
    startRecordToStorageFileAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
    startRecordToStreamAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncAction;
    startRecordToCustomSinkAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      customMediaSink: Windows$Media$IMediaExtension
    ): Windows$Foundation$IAsyncAction;
    startRecordToCustomSinkAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      customSinkActivationId: string,
      customSinkSettings: Windows$Foundation$Collections$IPropertySet
    ): Windows$Foundation$IAsyncAction;
    stopRecordAsync(): Windows$Foundation$IAsyncAction;
    capturePhotoToStorageFileAsync(
      type: Windows$Media$MediaProperties$ImageEncodingProperties,
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
    capturePhotoToStreamAsync(
      type: Windows$Media$MediaProperties$ImageEncodingProperties,
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncAction;
    addEffectAsync(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>,
      effectActivationID: string,
      effectSettings: Windows$Foundation$Collections$IPropertySet
    ): Windows$Foundation$IAsyncAction;
    clearEffectsAsync(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>
    ): Windows$Foundation$IAsyncAction;
    setEncoderProperty(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>,
      propertyId: string,
      propertyValue: any
    ): void;
    getEncoderProperty(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>,
      propertyId: string
    ): any;
    onfailed: any;
    onrecordlimitationexceeded: any;
    setPreviewMirroring(value: boolean): void;
    getPreviewMirroring(): boolean;
    setPreviewRotation(
      value: $Values<typeof Windows$Media$Capture$VideoRotation>
    ): void;
    getPreviewRotation(): $Values<typeof Windows$Media$Capture$VideoRotation>;
    setRecordRotation(
      value: $Values<typeof Windows$Media$Capture$VideoRotation>
    ): void;
    getRecordRotation(): $Values<typeof Windows$Media$Capture$VideoRotation>;
    startPreviewAsync(): Windows$Foundation$IAsyncAction;
    startPreviewToCustomSinkAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      customMediaSink: Windows$Media$IMediaExtension
    ): Windows$Foundation$IAsyncAction;
    startPreviewToCustomSinkAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      customSinkActivationId: string,
      customSinkSettings: Windows$Foundation$Collections$IPropertySet
    ): Windows$Foundation$IAsyncAction;
    stopPreviewAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$Media$Capture$RecordLimitationExceededEventHandler {
    (sender: Windows$Media$Capture$MediaCapture): void;
  }

  declare export interface Windows$Media$Capture$IMediaCaptureInitializationSettings {
    audioDeviceId: string;
    photoCaptureSource: $Values<
      typeof Windows$Media$Capture$PhotoCaptureSource
    >;
    streamingCaptureMode: $Values<
      typeof Windows$Media$Capture$StreamingCaptureMode
    >;
    videoDeviceId: string;
  }

  declare export class Windows$Media$Capture$MediaCaptureInitializationSettings
    mixins Windows$Media$Capture$IMediaCaptureInitializationSettings {
    audioDeviceId: string;
    photoCaptureSource: $Values<
      typeof Windows$Media$Capture$PhotoCaptureSource
    >;
    streamingCaptureMode: $Values<
      typeof Windows$Media$Capture$StreamingCaptureMode
    >;
    videoDeviceId: string;
  }

  declare export interface Windows$Media$Capture$IMediaCapture {
    audioDeviceController: Windows$Media$Devices$AudioDeviceController;
    mediaCaptureSettings: Windows$Media$Capture$MediaCaptureSettings;
    videoDeviceController: Windows$Media$Devices$VideoDeviceController;
    initializeAsync(): Windows$Foundation$IAsyncAction;
    initializeAsync(
      mediaCaptureInitializationSettings: Windows$Media$Capture$MediaCaptureInitializationSettings
    ): Windows$Foundation$IAsyncAction;
    startRecordToStorageFileAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
    startRecordToStreamAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncAction;
    startRecordToCustomSinkAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      customMediaSink: Windows$Media$IMediaExtension
    ): Windows$Foundation$IAsyncAction;
    startRecordToCustomSinkAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      customSinkActivationId: string,
      customSinkSettings: Windows$Foundation$Collections$IPropertySet
    ): Windows$Foundation$IAsyncAction;
    stopRecordAsync(): Windows$Foundation$IAsyncAction;
    capturePhotoToStorageFileAsync(
      type: Windows$Media$MediaProperties$ImageEncodingProperties,
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
    capturePhotoToStreamAsync(
      type: Windows$Media$MediaProperties$ImageEncodingProperties,
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncAction;
    addEffectAsync(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>,
      effectActivationID: string,
      effectSettings: Windows$Foundation$Collections$IPropertySet
    ): Windows$Foundation$IAsyncAction;
    clearEffectsAsync(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>
    ): Windows$Foundation$IAsyncAction;
    setEncoderProperty(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>,
      propertyId: string,
      propertyValue: any
    ): void;
    getEncoderProperty(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>,
      propertyId: string
    ): any;
    onfailed: any;
    onrecordlimitationexceeded: any;
    setPreviewMirroring(value: boolean): void;
    getPreviewMirroring(): boolean;
    setPreviewRotation(
      value: $Values<typeof Windows$Media$Capture$VideoRotation>
    ): void;
    getPreviewRotation(): $Values<typeof Windows$Media$Capture$VideoRotation>;
    setRecordRotation(
      value: $Values<typeof Windows$Media$Capture$VideoRotation>
    ): void;
    getRecordRotation(): $Values<typeof Windows$Media$Capture$VideoRotation>;
  }

  declare export class Windows$Media$Capture$MediaCaptureSettings
    mixins Windows$Media$Capture$IMediaCaptureSettings {
    audioDeviceId: string;
    photoCaptureSource: $Values<
      typeof Windows$Media$Capture$PhotoCaptureSource
    >;
    streamingCaptureMode: $Values<
      typeof Windows$Media$Capture$StreamingCaptureMode
    >;
    videoDeviceCharacteristic: $Values<
      typeof Windows$Media$Capture$VideoDeviceCharacteristic
    >;
    videoDeviceId: string;
  }

  declare export interface Windows$Media$Capture$IMediaCaptureVideoPreview {
    startPreviewAsync(): Windows$Foundation$IAsyncAction;
    startPreviewToCustomSinkAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      customMediaSink: Windows$Media$IMediaExtension
    ): Windows$Foundation$IAsyncAction;
    startPreviewToCustomSinkAsync(
      encodingProfile: Windows$Media$MediaProperties$MediaEncodingProfile,
      customSinkActivationId: string,
      customSinkSettings: Windows$Foundation$Collections$IPropertySet
    ): Windows$Foundation$IAsyncAction;
    stopPreviewAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$Media$Capture$IMediaCaptureSettings {
    audioDeviceId: string;
    photoCaptureSource: $Values<
      typeof Windows$Media$Capture$PhotoCaptureSource
    >;
    streamingCaptureMode: $Values<
      typeof Windows$Media$Capture$StreamingCaptureMode
    >;
    videoDeviceCharacteristic: $Values<
      typeof Windows$Media$Capture$VideoDeviceCharacteristic
    >;
    videoDeviceId: string;
  }

  declare var npm$namespace$Windows$Media$Devices: {
    TelephonyKey: typeof Windows$Media$Devices$TelephonyKey,
    AudioDeviceRole: typeof Windows$Media$Devices$AudioDeviceRole,
    DialRequestedEventArgs: typeof Windows$Media$Devices$DialRequestedEventArgs,
    RedialRequestedEventArgs: typeof Windows$Media$Devices$RedialRequestedEventArgs,
    KeypadPressedEventArgs: typeof Windows$Media$Devices$KeypadPressedEventArgs,
    CallControl: typeof Windows$Media$Devices$CallControl,
    DefaultAudioCaptureDeviceChangedEventArgs: typeof Windows$Media$Devices$DefaultAudioCaptureDeviceChangedEventArgs,
    DefaultAudioRenderDeviceChangedEventArgs: typeof Windows$Media$Devices$DefaultAudioRenderDeviceChangedEventArgs,
    MediaDevice: typeof Windows$Media$Devices$MediaDevice,
    AudioDeviceController: typeof Windows$Media$Devices$AudioDeviceController,
    VideoDeviceController: typeof Windows$Media$Devices$VideoDeviceController,
    MediaDeviceControl: typeof Windows$Media$Devices$MediaDeviceControl,
    MediaDeviceControlCapabilities: typeof Windows$Media$Devices$MediaDeviceControlCapabilities
  };

  declare export var Windows$Media$Devices$TelephonyKey: {|
    +d0: 0, // 0
    +d1: 1, // 1
    +d2: 2, // 2
    +d3: 3, // 3
    +d4: 4, // 4
    +d5: 5, // 5
    +d6: 6, // 6
    +d7: 7, // 7
    +d8: 8, // 8
    +d9: 9, // 9
    +star: 10, // 10
    +pound: 11, // 11
    +a: 12, // 12
    +b: 13, // 13
    +c: 14, // 14
    +d: 15 // 15
  |};

  declare export interface Windows$Media$Devices$IDialRequestedEventArgs {
    contact: any;
    handled(): void;
  }

  declare export class Windows$Media$Devices$DialRequestedEventArgs
    mixins Windows$Media$Devices$IDialRequestedEventArgs {
    contact: any;
    handled(): void;
  }

  declare export interface Windows$Media$Devices$IRedialRequestedEventArgs {
    handled(): void;
  }

  declare export class Windows$Media$Devices$RedialRequestedEventArgs
    mixins Windows$Media$Devices$IRedialRequestedEventArgs {
    handled(): void;
  }

  declare export interface Windows$Media$Devices$IKeypadPressedEventArgs {
    telephonyKey: $Values<typeof Windows$Media$Devices$TelephonyKey>;
  }

  declare export class Windows$Media$Devices$KeypadPressedEventArgs
    mixins Windows$Media$Devices$IKeypadPressedEventArgs {
    telephonyKey: $Values<typeof Windows$Media$Devices$TelephonyKey>;
  }

  declare export interface Windows$Media$Devices$CallControlEventHandler {
    (sender: Windows$Media$Devices$CallControl): void;
  }

  declare export class Windows$Media$Devices$CallControl
    mixins Windows$Media$Devices$ICallControl {
    hasRinger: boolean;
    indicateNewIncomingCall(enableRinger: boolean, callerId: string): number;
    indicateNewOutgoingCall(): number;
    indicateActiveCall(callToken: number): void;
    endCall(callToken: number): void;
    onanswerrequested: any;
    onhanguprequested: any;
    ondialrequested: any;
    onredialrequested: any;
    onkeypadpressed: any;
    onaudiotransferrequested: any;
    static getDefault(): Windows$Media$Devices$CallControl;
    static fromId(deviceInterfaceId: string): Windows$Media$Devices$CallControl;
  }

  declare export interface Windows$Media$Devices$DialRequestedEventHandler {
    (
      sender: Windows$Media$Devices$CallControl,
      e: Windows$Media$Devices$DialRequestedEventArgs
    ): void;
  }

  declare export interface Windows$Media$Devices$RedialRequestedEventHandler {
    (
      sender: Windows$Media$Devices$CallControl,
      e: Windows$Media$Devices$RedialRequestedEventArgs
    ): void;
  }

  declare export interface Windows$Media$Devices$KeypadPressedEventHandler {
    (
      sender: Windows$Media$Devices$CallControl,
      e: Windows$Media$Devices$KeypadPressedEventArgs
    ): void;
  }

  declare export interface Windows$Media$Devices$ICallControl {
    hasRinger: boolean;
    indicateNewIncomingCall(enableRinger: boolean, callerId: string): number;
    indicateNewOutgoingCall(): number;
    indicateActiveCall(callToken: number): void;
    endCall(callToken: number): void;
    onanswerrequested: any;
    onhanguprequested: any;
    ondialrequested: any;
    onredialrequested: any;
    onkeypadpressed: any;
    onaudiotransferrequested: any;
  }

  declare export interface Windows$Media$Devices$ICallControlStatics {
    getDefault(): Windows$Media$Devices$CallControl;
    fromId(deviceInterfaceId: string): Windows$Media$Devices$CallControl;
  }

  declare export var Windows$Media$Devices$AudioDeviceRole: {|
    +default: 0, // 0
    +communications: 1 // 1
  |};

  declare export interface Windows$Media$Devices$IDefaultAudioDeviceChangedEventArgs {
    id: string;
    role: $Values<typeof Windows$Media$Devices$AudioDeviceRole>;
  }

  declare export interface Windows$Media$Devices$IMediaDeviceStatics {
    getAudioCaptureSelector(): string;
    getAudioRenderSelector(): string;
    getVideoCaptureSelector(): string;
    getDefaultAudioCaptureId(
      role: $Values<typeof Windows$Media$Devices$AudioDeviceRole>
    ): string;
    getDefaultAudioRenderId(
      role: $Values<typeof Windows$Media$Devices$AudioDeviceRole>
    ): string;
    ondefaultaudiocapturedevicechanged: any;
    ondefaultaudiorenderdevicechanged: any;
  }

  declare export class Windows$Media$Devices$DefaultAudioCaptureDeviceChangedEventArgs
    mixins Windows$Media$Devices$IDefaultAudioDeviceChangedEventArgs {
    id: string;
    role: $Values<typeof Windows$Media$Devices$AudioDeviceRole>;
  }

  declare export class Windows$Media$Devices$DefaultAudioRenderDeviceChangedEventArgs
    mixins Windows$Media$Devices$IDefaultAudioDeviceChangedEventArgs {
    id: string;
    role: $Values<typeof Windows$Media$Devices$AudioDeviceRole>;
  }

  declare export class Windows$Media$Devices$MediaDevice {
    static getAudioCaptureSelector(): string;
    static getAudioRenderSelector(): string;
    static getVideoCaptureSelector(): string;
    static getDefaultAudioCaptureId(
      role: $Values<typeof Windows$Media$Devices$AudioDeviceRole>
    ): string;
    static getDefaultAudioRenderId(
      role: $Values<typeof Windows$Media$Devices$AudioDeviceRole>
    ): string;
    static ondefaultaudiocapturedevicechanged: any;
    static ondefaultaudiorenderdevicechanged: any;
  }

  declare export class Windows$Media$Devices$AudioDeviceController
    mixins Windows$Media$Devices$IAudioDeviceController,
      Windows$Media$Devices$IMediaDeviceController {
    muted: boolean;
    volumePercent: number;
    getAvailableMediaStreamProperties(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>
    ): Windows$Foundation$Collections$IVectorView<Windows$Media$MediaProperties$IMediaEncodingProperties>;
    getMediaStreamProperties(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>
    ): Windows$Media$MediaProperties$IMediaEncodingProperties;
    setMediaStreamPropertiesAsync(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>,
      mediaEncodingProperties: Windows$Media$MediaProperties$IMediaEncodingProperties
    ): Windows$Foundation$IAsyncAction;
  }

  declare export class Windows$Media$Devices$VideoDeviceController
    mixins Windows$Media$Devices$IVideoDeviceController,
      Windows$Media$Devices$IMediaDeviceController,
      Windows$Media$Devices$IAdvancedVideoCaptureDeviceController {
    backlightCompensation: Windows$Media$Devices$MediaDeviceControl;
    brightness: Windows$Media$Devices$MediaDeviceControl;
    contrast: Windows$Media$Devices$MediaDeviceControl;
    exposure: Windows$Media$Devices$MediaDeviceControl;
    focus: Windows$Media$Devices$MediaDeviceControl;
    hue: Windows$Media$Devices$MediaDeviceControl;
    pan: Windows$Media$Devices$MediaDeviceControl;
    roll: Windows$Media$Devices$MediaDeviceControl;
    tilt: Windows$Media$Devices$MediaDeviceControl;
    whiteBalance: Windows$Media$Devices$MediaDeviceControl;
    zoom: Windows$Media$Devices$MediaDeviceControl;
    trySetPowerlineFrequency(
      value: $Values<typeof Windows$Media$Capture$PowerlineFrequency>
    ): boolean;
    tryGetPowerlineFrequency(): {
      value: $Values<typeof Windows$Media$Capture$PowerlineFrequency>,
      succeeded: boolean
    };
    getAvailableMediaStreamProperties(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>
    ): Windows$Foundation$Collections$IVectorView<Windows$Media$MediaProperties$IMediaEncodingProperties>;
    getMediaStreamProperties(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>
    ): Windows$Media$MediaProperties$IMediaEncodingProperties;
    setMediaStreamPropertiesAsync(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>,
      mediaEncodingProperties: Windows$Media$MediaProperties$IMediaEncodingProperties
    ): Windows$Foundation$IAsyncAction;
    setDeviceProperty(propertyId: string, propertyValue: any): void;
    getDeviceProperty(propertyId: string): any;
  }

  declare export interface Windows$Media$Devices$IMediaDeviceController {
    getAvailableMediaStreamProperties(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>
    ): Windows$Foundation$Collections$IVectorView<Windows$Media$MediaProperties$IMediaEncodingProperties>;
    getMediaStreamProperties(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>
    ): Windows$Media$MediaProperties$IMediaEncodingProperties;
    setMediaStreamPropertiesAsync(
      mediaStreamType: $Values<typeof Windows$Media$Capture$MediaStreamType>,
      mediaEncodingProperties: Windows$Media$MediaProperties$IMediaEncodingProperties
    ): Windows$Foundation$IAsyncAction;
  }

  declare export type Windows$Media$Devices$IAudioDeviceController = {
    muted: boolean,
    volumePercent: number
  } & Windows$Media$Devices$IMediaDeviceController;

  declare export type Windows$Media$Devices$IVideoDeviceController = {
    backlightCompensation: Windows$Media$Devices$MediaDeviceControl,
    brightness: Windows$Media$Devices$MediaDeviceControl,
    contrast: Windows$Media$Devices$MediaDeviceControl,
    exposure: Windows$Media$Devices$MediaDeviceControl,
    focus: Windows$Media$Devices$MediaDeviceControl,
    hue: Windows$Media$Devices$MediaDeviceControl,
    pan: Windows$Media$Devices$MediaDeviceControl,
    roll: Windows$Media$Devices$MediaDeviceControl,
    tilt: Windows$Media$Devices$MediaDeviceControl,
    whiteBalance: Windows$Media$Devices$MediaDeviceControl,
    zoom: Windows$Media$Devices$MediaDeviceControl,
    trySetPowerlineFrequency(
      value: $Values<typeof Windows$Media$Capture$PowerlineFrequency>
    ): boolean,
    tryGetPowerlineFrequency(): {
      value: $Values<typeof Windows$Media$Capture$PowerlineFrequency>,
      succeeded: boolean
    }
  } & Windows$Media$Devices$IMediaDeviceController;

  declare export class Windows$Media$Devices$MediaDeviceControl
    mixins Windows$Media$Devices$IMediaDeviceControl {
    capabilities: Windows$Media$Devices$MediaDeviceControlCapabilities;
    tryGetValue(): {
      value: number,
      succeeded: boolean
    };
    trySetValue(value: number): boolean;
    tryGetAuto(): {
      value: boolean,
      succeeded: boolean
    };
    trySetAuto(value: boolean): boolean;
  }

  declare export interface Windows$Media$Devices$IMediaDeviceControl {
    capabilities: Windows$Media$Devices$MediaDeviceControlCapabilities;
    tryGetValue(): {
      value: number,
      succeeded: boolean
    };
    trySetValue(value: number): boolean;
    tryGetAuto(): {
      value: boolean,
      succeeded: boolean
    };
    trySetAuto(value: boolean): boolean;
  }

  declare export class Windows$Media$Devices$MediaDeviceControlCapabilities
    mixins Windows$Media$Devices$IMediaDeviceControlCapabilities {
    autoModeSupported: boolean;
    default: number;
    max: number;
    min: number;
    step: number;
    supported: boolean;
  }

  declare export interface Windows$Media$Devices$IMediaDeviceControlCapabilities {
    autoModeSupported: boolean;
    default: number;
    max: number;
    min: number;
    step: number;
    supported: boolean;
  }

  declare export interface Windows$Media$Devices$IAdvancedVideoCaptureDeviceController {
    setDeviceProperty(propertyId: string, propertyValue: any): void;
    getDeviceProperty(propertyId: string): any;
  }

  declare export var Windows$Media$SoundLevel: {|
    +muted: 0, // 0
    +low: 1, // 1
    +full: 2 // 2
  |};

  declare export interface Windows$Media$IMediaControl {
    albumArt: Windows$Foundation$Uri;
    artistName: string;
    isPlaying: boolean;
    soundLevel: $Values<typeof Windows$Media$SoundLevel>;
    trackName: string;
    onsoundlevelchanged: any;
    onplaypressed: any;
    onpausepressed: any;
    onstoppressed: any;
    onplaypausetogglepressed: any;
    onrecordpressed: any;
    onnexttrackpressed: any;
    onprevioustrackpressed: any;
    onfastforwardpressed: any;
    onrewindpressed: any;
    onchanneluppressed: any;
    onchanneldownpressed: any;
  }

  declare export class Windows$Media$MediaControl {
    static albumArt: Windows$Foundation$Uri;
    static artistName: string;
    static isPlaying: boolean;
    static soundLevel: $Values<typeof Windows$Media$SoundLevel>;
    static trackName: string;
    static onsoundlevelchanged: any;
    static onplaypressed: any;
    static onpausepressed: any;
    static onstoppressed: any;
    static onplaypausetogglepressed: any;
    static onrecordpressed: any;
    static onnexttrackpressed: any;
    static onprevioustrackpressed: any;
    static onfastforwardpressed: any;
    static onrewindpressed: any;
    static onchanneluppressed: any;
    static onchanneldownpressed: any;
  }

  declare export interface Windows$Media$IMediaExtension {
    setProperties(
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
  }

  declare export interface Windows$Media$IMediaExtensionManager {
    registerSchemeHandler(activatableClassId: string, scheme: string): void;
    registerSchemeHandler(
      activatableClassId: string,
      scheme: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    registerByteStreamHandler(
      activatableClassId: string,
      fileExtension: string,
      mimeType: string
    ): void;
    registerByteStreamHandler(
      activatableClassId: string,
      fileExtension: string,
      mimeType: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    registerAudioDecoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string
    ): void;
    registerAudioDecoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    registerAudioEncoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string
    ): void;
    registerAudioEncoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    registerVideoDecoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string
    ): void;
    registerVideoDecoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    registerVideoEncoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string
    ): void;
    registerVideoEncoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
  }

  declare export class Windows$Media$MediaExtensionManager
    mixins Windows$Media$IMediaExtensionManager {
    registerSchemeHandler(activatableClassId: string, scheme: string): void;
    registerSchemeHandler(
      activatableClassId: string,
      scheme: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    registerByteStreamHandler(
      activatableClassId: string,
      fileExtension: string,
      mimeType: string
    ): void;
    registerByteStreamHandler(
      activatableClassId: string,
      fileExtension: string,
      mimeType: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    registerAudioDecoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string
    ): void;
    registerAudioDecoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    registerAudioEncoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string
    ): void;
    registerAudioEncoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    registerVideoDecoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string
    ): void;
    registerVideoDecoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    registerVideoEncoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string
    ): void;
    registerVideoEncoder(
      activatableClassId: string,
      inputSubtype: string,
      outputSubtype: string,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
  }

  declare export interface Windows$Media$IVideoEffectsStatics {
    videoStabilization: string;
  }

  declare export class Windows$Media$VideoEffects {
    static videoStabilization: string;
  }

  declare var npm$namespace$Windows$Media$Playlists: {
    PlaylistFormat: typeof Windows$Media$Playlists$PlaylistFormat,
    Playlist: typeof Windows$Media$Playlists$Playlist
  };

  declare export var Windows$Media$Playlists$PlaylistFormat: {|
    +windowsMedia: 0, // 0
    +zune: 1, // 1
    +m3u: 2 // 2
  |};

  declare export interface Windows$Media$Playlists$IPlaylist {
    files: Windows$Foundation$Collections$IVector<Windows$Storage$StorageFile>;
    saveAsync(): Windows$Foundation$IAsyncAction;
    saveAsAsync(
      saveLocation: Windows$Storage$IStorageFolder,
      desiredName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    saveAsAsync(
      saveLocation: Windows$Storage$IStorageFolder,
      desiredName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>,
      playlistFormat: $Values<typeof Windows$Media$Playlists$PlaylistFormat>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
  }

  declare export interface Windows$Media$Playlists$IPlaylistStatics {
    loadAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<Windows$Media$Playlists$Playlist>;
  }

  declare export class Windows$Media$Playlists$Playlist
    mixins Windows$Media$Playlists$IPlaylist {
    files: Windows$Foundation$Collections$IVector<Windows$Storage$StorageFile>;
    saveAsync(): Windows$Foundation$IAsyncAction;
    saveAsAsync(
      saveLocation: Windows$Storage$IStorageFolder,
      desiredName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    saveAsAsync(
      saveLocation: Windows$Storage$IStorageFolder,
      desiredName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>,
      playlistFormat: $Values<typeof Windows$Media$Playlists$PlaylistFormat>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    static loadAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<Windows$Media$Playlists$Playlist>;
  }

  declare var npm$namespace$Windows$Media$PlayTo: {
    PlayToConnectionState: typeof Windows$Media$PlayTo$PlayToConnectionState,
    PlayToConnectionError: typeof Windows$Media$PlayTo$PlayToConnectionError,
    PlayToConnection: typeof Windows$Media$PlayTo$PlayToConnection,
    PlayToSource: typeof Windows$Media$PlayTo$PlayToSource,
    PlayToConnectionStateChangedEventArgs: typeof Windows$Media$PlayTo$PlayToConnectionStateChangedEventArgs,
    PlayToConnectionTransferredEventArgs: typeof Windows$Media$PlayTo$PlayToConnectionTransferredEventArgs,
    PlayToConnectionErrorEventArgs: typeof Windows$Media$PlayTo$PlayToConnectionErrorEventArgs,
    SourceChangeRequestedEventArgs: typeof Windows$Media$PlayTo$SourceChangeRequestedEventArgs,
    PlaybackRateChangeRequestedEventArgs: typeof Windows$Media$PlayTo$PlaybackRateChangeRequestedEventArgs,
    CurrentTimeChangeRequestedEventArgs: typeof Windows$Media$PlayTo$CurrentTimeChangeRequestedEventArgs,
    MuteChangeRequestedEventArgs: typeof Windows$Media$PlayTo$MuteChangeRequestedEventArgs,
    VolumeChangeRequestedEventArgs: typeof Windows$Media$PlayTo$VolumeChangeRequestedEventArgs,
    PlayToReceiver: typeof Windows$Media$PlayTo$PlayToReceiver,
    PlayToSourceSelectedEventArgs: typeof Windows$Media$PlayTo$PlayToSourceSelectedEventArgs,
    PlayToSourceDeferral: typeof Windows$Media$PlayTo$PlayToSourceDeferral,
    PlayToSourceRequest: typeof Windows$Media$PlayTo$PlayToSourceRequest,
    PlayToSourceRequestedEventArgs: typeof Windows$Media$PlayTo$PlayToSourceRequestedEventArgs,
    PlayToManager: typeof Windows$Media$PlayTo$PlayToManager
  };
  declare export interface Windows$Media$PlayTo$IPlayToSource {
    connection: Windows$Media$PlayTo$PlayToConnection;
    next: Windows$Media$PlayTo$PlayToSource;
    playNext(): void;
  }

  declare export class Windows$Media$PlayTo$PlayToConnection
    mixins Windows$Media$PlayTo$IPlayToConnection {
    state: $Values<typeof Windows$Media$PlayTo$PlayToConnectionState>;
    onstatechanged: any;
    ontransferred: any;
    onerror: any;
  }

  declare export class Windows$Media$PlayTo$PlayToSource
    mixins Windows$Media$PlayTo$IPlayToSource {
    connection: Windows$Media$PlayTo$PlayToConnection;
    next: Windows$Media$PlayTo$PlayToSource;
    playNext(): void;
  }

  declare export var Windows$Media$PlayTo$PlayToConnectionState: {|
    +disconnected: 0, // 0
    +connected: 1, // 1
    +rendering: 2 // 2
  |};

  declare export interface Windows$Media$PlayTo$IPlayToConnectionStateChangedEventArgs {
    currentState: $Values<typeof Windows$Media$PlayTo$PlayToConnectionState>;
    previousState: $Values<typeof Windows$Media$PlayTo$PlayToConnectionState>;
  }

  declare export class Windows$Media$PlayTo$PlayToConnectionStateChangedEventArgs
    mixins Windows$Media$PlayTo$IPlayToConnectionStateChangedEventArgs {
    currentState: $Values<typeof Windows$Media$PlayTo$PlayToConnectionState>;
    previousState: $Values<typeof Windows$Media$PlayTo$PlayToConnectionState>;
  }

  declare export interface Windows$Media$PlayTo$IPlayToConnectionTransferredEventArgs {
    currentSource: Windows$Media$PlayTo$PlayToSource;
    previousSource: Windows$Media$PlayTo$PlayToSource;
  }

  declare export class Windows$Media$PlayTo$PlayToConnectionTransferredEventArgs
    mixins Windows$Media$PlayTo$IPlayToConnectionTransferredEventArgs {
    currentSource: Windows$Media$PlayTo$PlayToSource;
    previousSource: Windows$Media$PlayTo$PlayToSource;
  }

  declare export var Windows$Media$PlayTo$PlayToConnectionError: {|
    +none: 0, // 0
    +deviceNotResponding: 1, // 1
    +deviceError: 2, // 2
    +deviceLocked: 3 // 3
  |};

  declare export interface Windows$Media$PlayTo$IPlayToConnectionErrorEventArgs {
    code: $Values<typeof Windows$Media$PlayTo$PlayToConnectionError>;
    message: string;
  }

  declare export class Windows$Media$PlayTo$PlayToConnectionErrorEventArgs
    mixins Windows$Media$PlayTo$IPlayToConnectionErrorEventArgs {
    code: $Values<typeof Windows$Media$PlayTo$PlayToConnectionError>;
    message: string;
  }

  declare export interface Windows$Media$PlayTo$IPlayToConnection {
    state: $Values<typeof Windows$Media$PlayTo$PlayToConnectionState>;
    onstatechanged: any;
    ontransferred: any;
    onerror: any;
  }

  declare export interface Windows$Media$PlayTo$ISourceChangeRequestedEventArgs {
    album: string;
    author: string;
    date: Date;
    description: string;
    genre: string;
    properties: Windows$Foundation$Collections$IMapView<string, any>;
    rating: number;
    stream: Windows$Storage$Streams$IRandomAccessStreamWithContentType;
    thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference;
    title: string;
  }

  declare export class Windows$Media$PlayTo$SourceChangeRequestedEventArgs
    mixins Windows$Media$PlayTo$ISourceChangeRequestedEventArgs {
    album: string;
    author: string;
    date: Date;
    description: string;
    genre: string;
    properties: Windows$Foundation$Collections$IMapView<string, any>;
    rating: number;
    stream: Windows$Storage$Streams$IRandomAccessStreamWithContentType;
    thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference;
    title: string;
  }

  declare export interface Windows$Media$PlayTo$IPlaybackRateChangeRequestedEventArgs {
    rate: number;
  }

  declare export class Windows$Media$PlayTo$PlaybackRateChangeRequestedEventArgs
    mixins Windows$Media$PlayTo$IPlaybackRateChangeRequestedEventArgs {
    rate: number;
  }

  declare export interface Windows$Media$PlayTo$ICurrentTimeChangeRequestedEventArgs {
    time: number;
  }

  declare export class Windows$Media$PlayTo$CurrentTimeChangeRequestedEventArgs
    mixins Windows$Media$PlayTo$ICurrentTimeChangeRequestedEventArgs {
    time: number;
  }

  declare export interface Windows$Media$PlayTo$IMuteChangeRequestedEventArgs {
    mute: boolean;
  }

  declare export class Windows$Media$PlayTo$MuteChangeRequestedEventArgs
    mixins Windows$Media$PlayTo$IMuteChangeRequestedEventArgs {
    mute: boolean;
  }

  declare export interface Windows$Media$PlayTo$IVolumeChangeRequestedEventArgs {
    volume: number;
  }

  declare export class Windows$Media$PlayTo$VolumeChangeRequestedEventArgs
    mixins Windows$Media$PlayTo$IVolumeChangeRequestedEventArgs {
    volume: number;
  }

  declare export interface Windows$Media$PlayTo$IPlayToReceiver {
    friendlyName: string;
    properties: Windows$Foundation$Collections$IPropertySet;
    supportsAudio: boolean;
    supportsImage: boolean;
    supportsVideo: boolean;
    onplayrequested: any;
    onpauserequested: any;
    onsourcechangerequested: any;
    onplaybackratechangerequested: any;
    oncurrenttimechangerequested: any;
    onmutechangerequested: any;
    onvolumechangerequested: any;
    ontimeupdaterequested: any;
    onstoprequested: any;
    notifyVolumeChange(volume: number, mute: boolean): void;
    notifyRateChange(rate: number): void;
    notifyLoadedMetadata(): void;
    notifyTimeUpdate(currentTime: number): void;
    notifyDurationChange(duration: number): void;
    notifySeeking(): void;
    notifySeeked(): void;
    notifyPaused(): void;
    notifyPlaying(): void;
    notifyEnded(): void;
    notifyError(): void;
    notifyStopped(): void;
    startAsync(): Windows$Foundation$IAsyncAction;
    stopAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export class Windows$Media$PlayTo$PlayToReceiver
    mixins Windows$Media$PlayTo$IPlayToReceiver {
    friendlyName: string;
    properties: Windows$Foundation$Collections$IPropertySet;
    supportsAudio: boolean;
    supportsImage: boolean;
    supportsVideo: boolean;
    onplayrequested: any;
    onpauserequested: any;
    onsourcechangerequested: any;
    onplaybackratechangerequested: any;
    oncurrenttimechangerequested: any;
    onmutechangerequested: any;
    onvolumechangerequested: any;
    ontimeupdaterequested: any;
    onstoprequested: any;
    notifyVolumeChange(volume: number, mute: boolean): void;
    notifyRateChange(rate: number): void;
    notifyLoadedMetadata(): void;
    notifyTimeUpdate(currentTime: number): void;
    notifyDurationChange(duration: number): void;
    notifySeeking(): void;
    notifySeeked(): void;
    notifyPaused(): void;
    notifyPlaying(): void;
    notifyEnded(): void;
    notifyError(): void;
    notifyStopped(): void;
    startAsync(): Windows$Foundation$IAsyncAction;
    stopAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$Media$PlayTo$IPlayToSourceSelectedEventArgs {
    friendlyName: string;
    icon: Windows$Storage$Streams$IRandomAccessStreamWithContentType;
    supportsAudio: boolean;
    supportsImage: boolean;
    supportsVideo: boolean;
  }

  declare export class Windows$Media$PlayTo$PlayToSourceSelectedEventArgs
    mixins Windows$Media$PlayTo$IPlayToSourceSelectedEventArgs {
    friendlyName: string;
    icon: Windows$Storage$Streams$IRandomAccessStreamWithContentType;
    supportsAudio: boolean;
    supportsImage: boolean;
    supportsVideo: boolean;
  }

  declare export interface Windows$Media$PlayTo$IPlayToSourceDeferral {
    complete(): void;
  }

  declare export class Windows$Media$PlayTo$PlayToSourceDeferral
    mixins Windows$Media$PlayTo$IPlayToSourceDeferral {
    complete(): void;
  }

  declare export interface Windows$Media$PlayTo$IPlayToSourceRequest {
    deadline: Date;
    displayErrorString(errorString: string): void;
    getDeferral(): Windows$Media$PlayTo$PlayToSourceDeferral;
    setSource(value: Windows$Media$PlayTo$PlayToSource): void;
  }

  declare export class Windows$Media$PlayTo$PlayToSourceRequest
    mixins Windows$Media$PlayTo$IPlayToSourceRequest {
    deadline: Date;
    displayErrorString(errorString: string): void;
    getDeferral(): Windows$Media$PlayTo$PlayToSourceDeferral;
    setSource(value: Windows$Media$PlayTo$PlayToSource): void;
  }

  declare export interface Windows$Media$PlayTo$IPlayToSourceRequestedEventArgs {
    sourceRequest: Windows$Media$PlayTo$PlayToSourceRequest;
  }

  declare export class Windows$Media$PlayTo$PlayToSourceRequestedEventArgs
    mixins Windows$Media$PlayTo$IPlayToSourceRequestedEventArgs {
    sourceRequest: Windows$Media$PlayTo$PlayToSourceRequest;
  }

  declare export interface Windows$Media$PlayTo$IPlayToManager {
    defaultSourceSelection: boolean;
    onsourcerequested: any;
    onsourceselected: any;
  }

  declare export class Windows$Media$PlayTo$PlayToManager
    mixins Windows$Media$PlayTo$IPlayToManager {
    defaultSourceSelection: boolean;
    onsourcerequested: any;
    onsourceselected: any;
    static getForCurrentView(): Windows$Media$PlayTo$PlayToManager;
    static showPlayToUI(): void;
  }

  declare export interface Windows$Media$PlayTo$IPlayToManagerStatics {
    getForCurrentView(): Windows$Media$PlayTo$PlayToManager;
    showPlayToUI(): void;
  }

  declare var npm$namespace$Windows$Media$MediaProperties: {
    AudioEncodingQuality: typeof Windows$Media$MediaProperties$AudioEncodingQuality,
    VideoEncodingQuality: typeof Windows$Media$MediaProperties$VideoEncodingQuality,
    MediaRatio: typeof Windows$Media$MediaProperties$MediaRatio,
    MediaPropertySet: typeof Windows$Media$MediaProperties$MediaPropertySet,
    AudioEncodingProperties: typeof Windows$Media$MediaProperties$AudioEncodingProperties,
    VideoEncodingProperties: typeof Windows$Media$MediaProperties$VideoEncodingProperties,
    ImageEncodingProperties: typeof Windows$Media$MediaProperties$ImageEncodingProperties,
    ContainerEncodingProperties: typeof Windows$Media$MediaProperties$ContainerEncodingProperties,
    MediaEncodingProfile: typeof Windows$Media$MediaProperties$MediaEncodingProfile
  };
  declare export interface Windows$Media$MediaProperties$IMediaRatio {
    denominator: number;
    numerator: number;
  }

  declare export class Windows$Media$MediaProperties$MediaRatio
    mixins Windows$Media$MediaProperties$IMediaRatio {
    denominator: number;
    numerator: number;
  }

  declare export class Windows$Media$MediaProperties$MediaPropertySet
    mixins Windows$Foundation$Collections$IMap<string, any>,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      > {
    size: number;
    lookup(key: string): any;
    hasKey(key: string): boolean;
    getView(): Windows$Foundation$Collections$IMapView<string, any>;
    insert(key: string, value: any): boolean;
    remove(key: string): void;
    clear(): void;
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<string, any>
    >;
  }

  declare export interface Windows$Media$MediaProperties$IMediaEncodingProperties {
    properties: Windows$Media$MediaProperties$MediaPropertySet;
    subtype: string;
    type: string;
  }

  declare export type Windows$Media$MediaProperties$IAudioEncodingProperties = {
    bitrate: number,
    bitsPerSample: number,
    channelCount: number,
    sampleRate: number
  } & Windows$Media$MediaProperties$IMediaEncodingProperties;

  declare export class Windows$Media$MediaProperties$AudioEncodingProperties
    mixins Windows$Media$MediaProperties$IAudioEncodingProperties,
      Windows$Media$MediaProperties$IMediaEncodingProperties {
    bitrate: number;
    bitsPerSample: number;
    channelCount: number;
    sampleRate: number;
    properties: Windows$Media$MediaProperties$MediaPropertySet;
    subtype: string;
    type: string;
  }

  declare export type Windows$Media$MediaProperties$IVideoEncodingProperties = {
    bitrate: number,
    frameRate: Windows$Media$MediaProperties$MediaRatio,
    height: number,
    pixelAspectRatio: Windows$Media$MediaProperties$MediaRatio,
    width: number
  } & Windows$Media$MediaProperties$IMediaEncodingProperties;

  declare export class Windows$Media$MediaProperties$VideoEncodingProperties
    mixins Windows$Media$MediaProperties$IVideoEncodingProperties,
      Windows$Media$MediaProperties$IMediaEncodingProperties {
    bitrate: number;
    frameRate: Windows$Media$MediaProperties$MediaRatio;
    height: number;
    pixelAspectRatio: Windows$Media$MediaProperties$MediaRatio;
    width: number;
    properties: Windows$Media$MediaProperties$MediaPropertySet;
    subtype: string;
    type: string;
  }

  declare export type Windows$Media$MediaProperties$IImageEncodingProperties = {
    height: number,
    width: number
  } & Windows$Media$MediaProperties$IMediaEncodingProperties;

  declare export interface Windows$Media$MediaProperties$IImageEncodingPropertiesStatics {
    createJpeg(): Windows$Media$MediaProperties$ImageEncodingProperties;
    createPng(): Windows$Media$MediaProperties$ImageEncodingProperties;
    createJpegXR(): Windows$Media$MediaProperties$ImageEncodingProperties;
  }

  declare export class Windows$Media$MediaProperties$ImageEncodingProperties
    mixins Windows$Media$MediaProperties$IImageEncodingProperties,
      Windows$Media$MediaProperties$IMediaEncodingProperties {
    height: number;
    width: number;
    properties: Windows$Media$MediaProperties$MediaPropertySet;
    subtype: string;
    type: string;
    static createJpeg(): Windows$Media$MediaProperties$ImageEncodingProperties;
    static createPng(): Windows$Media$MediaProperties$ImageEncodingProperties;
    static createJpegXR(): Windows$Media$MediaProperties$ImageEncodingProperties;
  }

  declare export type Windows$Media$MediaProperties$IContainerEncodingProperties = {} & Windows$Media$MediaProperties$IMediaEncodingProperties;

  declare export class Windows$Media$MediaProperties$ContainerEncodingProperties
    mixins Windows$Media$MediaProperties$IContainerEncodingProperties,
      Windows$Media$MediaProperties$IMediaEncodingProperties {
    properties: Windows$Media$MediaProperties$MediaPropertySet;
    subtype: string;
    type: string;
  }

  declare export var Windows$Media$MediaProperties$AudioEncodingQuality: {|
    +auto: 0, // 0
    +high: 1, // 1
    +medium: 2, // 2
    +low: 3 // 3
  |};

  declare export var Windows$Media$MediaProperties$VideoEncodingQuality: {|
    +auto: 0, // 0
    +hD1080p: 1, // 1
    +hD720p: 2, // 2
    +wvga: 3, // 3
    +ntsc: 4, // 4
    +pal: 5, // 5
    +vga: 6, // 6
    +qvga: 7 // 7
  |};

  declare export interface Windows$Media$MediaProperties$IMediaEncodingProfileStatics {
    createM4a(
      quality: $Values<
        typeof Windows$Media$MediaProperties$AudioEncodingQuality
      >
    ): Windows$Media$MediaProperties$MediaEncodingProfile;
    createMp3(
      quality: $Values<
        typeof Windows$Media$MediaProperties$AudioEncodingQuality
      >
    ): Windows$Media$MediaProperties$MediaEncodingProfile;
    createWma(
      quality: $Values<
        typeof Windows$Media$MediaProperties$AudioEncodingQuality
      >
    ): Windows$Media$MediaProperties$MediaEncodingProfile;
    createMp4(
      quality: $Values<
        typeof Windows$Media$MediaProperties$VideoEncodingQuality
      >
    ): Windows$Media$MediaProperties$MediaEncodingProfile;
    createWmv(
      quality: $Values<
        typeof Windows$Media$MediaProperties$VideoEncodingQuality
      >
    ): Windows$Media$MediaProperties$MediaEncodingProfile;
    createFromFileAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<Windows$Media$MediaProperties$MediaEncodingProfile>;
    createFromStreamAsync(
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<Windows$Media$MediaProperties$MediaEncodingProfile>;
  }

  declare export class Windows$Media$MediaProperties$MediaEncodingProfile
    mixins Windows$Media$MediaProperties$IMediaEncodingProfile {
    audio: Windows$Media$MediaProperties$AudioEncodingProperties;
    container: Windows$Media$MediaProperties$ContainerEncodingProperties;
    video: Windows$Media$MediaProperties$VideoEncodingProperties;
    static createM4a(
      quality: $Values<
        typeof Windows$Media$MediaProperties$AudioEncodingQuality
      >
    ): Windows$Media$MediaProperties$MediaEncodingProfile;
    static createMp3(
      quality: $Values<
        typeof Windows$Media$MediaProperties$AudioEncodingQuality
      >
    ): Windows$Media$MediaProperties$MediaEncodingProfile;
    static createWma(
      quality: $Values<
        typeof Windows$Media$MediaProperties$AudioEncodingQuality
      >
    ): Windows$Media$MediaProperties$MediaEncodingProfile;
    static createMp4(
      quality: $Values<
        typeof Windows$Media$MediaProperties$VideoEncodingQuality
      >
    ): Windows$Media$MediaProperties$MediaEncodingProfile;
    static createWmv(
      quality: $Values<
        typeof Windows$Media$MediaProperties$VideoEncodingQuality
      >
    ): Windows$Media$MediaProperties$MediaEncodingProfile;
    static createFromFileAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<Windows$Media$MediaProperties$MediaEncodingProfile>;
    static createFromStreamAsync(
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<Windows$Media$MediaProperties$MediaEncodingProfile>;
  }

  declare export interface Windows$Media$MediaProperties$IMediaEncodingProfile {
    audio: Windows$Media$MediaProperties$AudioEncodingProperties;
    container: Windows$Media$MediaProperties$ContainerEncodingProperties;
    video: Windows$Media$MediaProperties$VideoEncodingProperties;
  }

  declare var npm$namespace$Windows$Media$Protection: {
    RevocationAndRenewalReasons: typeof Windows$Media$Protection$RevocationAndRenewalReasons,
    RenewalStatus: typeof Windows$Media$Protection$RenewalStatus,
    MediaProtectionManager: typeof Windows$Media$Protection$MediaProtectionManager,
    ServiceRequestedEventArgs: typeof Windows$Media$Protection$ServiceRequestedEventArgs,
    ComponentLoadFailedEventArgs: typeof Windows$Media$Protection$ComponentLoadFailedEventArgs,
    MediaProtectionServiceCompletion: typeof Windows$Media$Protection$MediaProtectionServiceCompletion,
    RevocationAndRenewalInformation: typeof Windows$Media$Protection$RevocationAndRenewalInformation,
    RevocationAndRenewalItem: typeof Windows$Media$Protection$RevocationAndRenewalItem,
    ComponentRenewal: typeof Windows$Media$Protection$ComponentRenewal
  };
  declare export class Windows$Media$Protection$MediaProtectionManager
    mixins Windows$Media$Protection$IMediaProtectionManager {
    properties: Windows$Foundation$Collections$IPropertySet;
    onservicerequested: any;
    onrebootneeded: any;
    oncomponentloadfailed: any;
  }

  declare export class Windows$Media$Protection$ServiceRequestedEventArgs
    mixins Windows$Media$Protection$IServiceRequestedEventArgs {
    completion: Windows$Media$Protection$MediaProtectionServiceCompletion;
    request: Windows$Media$Protection$IMediaProtectionServiceRequest;
  }

  declare export class Windows$Media$Protection$ComponentLoadFailedEventArgs
    mixins Windows$Media$Protection$IComponentLoadFailedEventArgs {
    completion: Windows$Media$Protection$MediaProtectionServiceCompletion;
    information: Windows$Media$Protection$RevocationAndRenewalInformation;
  }

  declare export class Windows$Media$Protection$MediaProtectionServiceCompletion
    mixins Windows$Media$Protection$IMediaProtectionServiceCompletion {
    complete(success: boolean): void;
  }

  declare export class Windows$Media$Protection$RevocationAndRenewalInformation
    mixins Windows$Media$Protection$IRevocationAndRenewalInformation {
    items: Windows$Foundation$Collections$IVector<Windows$Media$Protection$RevocationAndRenewalItem>;
  }

  declare export class Windows$Media$Protection$RevocationAndRenewalItem
    mixins Windows$Media$Protection$IRevocationAndRenewalItem {
    headerHash: string;
    name: string;
    publicKeyHash: string;
    reasons: $Values<
      typeof Windows$Media$Protection$RevocationAndRenewalReasons
    >;
    renewalId: string;
  }

  declare export interface Windows$Media$Protection$ServiceRequestedEventHandler {
    (
      sender: Windows$Media$Protection$MediaProtectionManager,
      e: Windows$Media$Protection$ServiceRequestedEventArgs
    ): void;
  }

  declare export interface Windows$Media$Protection$RebootNeededEventHandler {
    (sender: Windows$Media$Protection$MediaProtectionManager): void;
  }

  declare export interface Windows$Media$Protection$ComponentLoadFailedEventHandler {
    (
      sender: Windows$Media$Protection$MediaProtectionManager,
      e: Windows$Media$Protection$ComponentLoadFailedEventArgs
    ): void;
  }

  declare export interface Windows$Media$Protection$IMediaProtectionManager {
    properties: Windows$Foundation$Collections$IPropertySet;
    onservicerequested: any;
    onrebootneeded: any;
    oncomponentloadfailed: any;
  }

  declare export interface Windows$Media$Protection$IMediaProtectionServiceCompletion {
    complete(success: boolean): void;
  }

  declare export interface Windows$Media$Protection$IServiceRequestedEventArgs {
    completion: Windows$Media$Protection$MediaProtectionServiceCompletion;
    request: Windows$Media$Protection$IMediaProtectionServiceRequest;
  }

  declare export interface Windows$Media$Protection$IMediaProtectionServiceRequest {
    protectionSystem: string;
    type: string;
  }

  declare export interface Windows$Media$Protection$IComponentLoadFailedEventArgs {
    completion: Windows$Media$Protection$MediaProtectionServiceCompletion;
    information: Windows$Media$Protection$RevocationAndRenewalInformation;
  }

  declare export interface Windows$Media$Protection$IRevocationAndRenewalInformation {
    items: Windows$Foundation$Collections$IVector<Windows$Media$Protection$RevocationAndRenewalItem>;
  }

  declare export var Windows$Media$Protection$RevocationAndRenewalReasons: {|
    +userModeComponentLoad: 0, // 0
    +kernelModeComponentLoad: 1, // 1
    +appComponent: 2, // 2
    +globalRevocationListLoadFailed: 3, // 3
    +invalidGlobalRevocationListSignature: 4, // 4
    +globalRevocationListAbsent: 5, // 5
    +componentRevoked: 6, // 6
    +invalidComponentCertificateExtendedKeyUse: 7, // 7
    +componentCertificateRevoked: 8, // 8
    +invalidComponentCertificateRoot: 9, // 9
    +componentHighSecurityCertificateRevoked: 10, // 10
    +componentLowSecurityCertificateRevoked: 11, // 11
    +bootDriverVerificationFailed: 12, // 12
    +componentSignedWithTestCertificate: 13, // 13
    +encryptionFailure: 14 // 14
  |};

  declare export interface Windows$Media$Protection$IRevocationAndRenewalItem {
    headerHash: string;
    name: string;
    publicKeyHash: string;
    reasons: $Values<
      typeof Windows$Media$Protection$RevocationAndRenewalReasons
    >;
    renewalId: string;
  }

  declare export class Windows$Media$Protection$ComponentRenewal {
    static renewSystemComponentsAsync(
      information: Windows$Media$Protection$RevocationAndRenewalInformation
    ): Windows$Foundation$IAsyncOperationWithProgress<
      $Values<typeof Windows$Media$Protection$RenewalStatus>,
      number
    >;
  }

  declare export var Windows$Media$Protection$RenewalStatus: {|
    +notStarted: 0, // 0
    +updatesInProgress: 1, // 1
    +userCancelled: 2, // 2
    +appComponentsMayNeedUpdating: 3, // 3
    +noComponentsFound: 4 // 4
  |};

  declare export interface Windows$Media$Protection$IComponentRenewalStatics {
    renewSystemComponentsAsync(
      information: Windows$Media$Protection$RevocationAndRenewalInformation
    ): Windows$Foundation$IAsyncOperationWithProgress<
      $Values<typeof Windows$Media$Protection$RenewalStatus>,
      number
    >;
  }

  declare var npm$namespace$Windows$Media$Transcoding: {
    TranscodeFailureReason: typeof Windows$Media$Transcoding$TranscodeFailureReason,
    PrepareTranscodeResult: typeof Windows$Media$Transcoding$PrepareTranscodeResult,
    MediaTranscoder: typeof Windows$Media$Transcoding$MediaTranscoder
  };

  declare export var Windows$Media$Transcoding$TranscodeFailureReason: {|
    +none: 0, // 0
    +unknown: 1, // 1
    +invalidProfile: 2, // 2
    +codecNotFound: 3 // 3
  |};

  declare export interface Windows$Media$Transcoding$IMediaTranscoder {
    alwaysReencode: boolean;
    hardwareAccelerationEnabled: boolean;
    trimStartTime: number;
    trimStopTime: number;
    addAudioEffect(activatableClassId: string): void;
    addAudioEffect(
      activatableClassId: string,
      effectRequired: boolean,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    addVideoEffect(activatableClassId: string): void;
    addVideoEffect(
      activatableClassId: string,
      effectRequired: boolean,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    clearEffects(): void;
    prepareFileTranscodeAsync(
      source: Windows$Storage$IStorageFile,
      destination: Windows$Storage$IStorageFile,
      profile: Windows$Media$MediaProperties$MediaEncodingProfile
    ): Windows$Foundation$IAsyncOperation<Windows$Media$Transcoding$PrepareTranscodeResult>;
    prepareStreamTranscodeAsync(
      source: Windows$Storage$Streams$IRandomAccessStream,
      destination: Windows$Storage$Streams$IRandomAccessStream,
      profile: Windows$Media$MediaProperties$MediaEncodingProfile
    ): Windows$Foundation$IAsyncOperation<Windows$Media$Transcoding$PrepareTranscodeResult>;
  }

  declare export class Windows$Media$Transcoding$PrepareTranscodeResult
    mixins Windows$Media$Transcoding$IPrepareTranscodeResult {
    canTranscode: boolean;
    failureReason: $Values<
      typeof Windows$Media$Transcoding$TranscodeFailureReason
    >;
    transcodeAsync(): Windows$Foundation$IAsyncActionWithProgress<number>;
  }

  declare export interface Windows$Media$Transcoding$IPrepareTranscodeResult {
    canTranscode: boolean;
    failureReason: $Values<
      typeof Windows$Media$Transcoding$TranscodeFailureReason
    >;
    transcodeAsync(): Windows$Foundation$IAsyncActionWithProgress<number>;
  }

  declare export class Windows$Media$Transcoding$MediaTranscoder
    mixins Windows$Media$Transcoding$IMediaTranscoder {
    alwaysReencode: boolean;
    hardwareAccelerationEnabled: boolean;
    trimStartTime: number;
    trimStopTime: number;
    addAudioEffect(activatableClassId: string): void;
    addAudioEffect(
      activatableClassId: string,
      effectRequired: boolean,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    addVideoEffect(activatableClassId: string): void;
    addVideoEffect(
      activatableClassId: string,
      effectRequired: boolean,
      configuration: Windows$Foundation$Collections$IPropertySet
    ): void;
    clearEffects(): void;
    prepareFileTranscodeAsync(
      source: Windows$Storage$IStorageFile,
      destination: Windows$Storage$IStorageFile,
      profile: Windows$Media$MediaProperties$MediaEncodingProfile
    ): Windows$Foundation$IAsyncOperation<Windows$Media$Transcoding$PrepareTranscodeResult>;
    prepareStreamTranscodeAsync(
      source: Windows$Storage$Streams$IRandomAccessStream,
      destination: Windows$Storage$Streams$IRandomAccessStream,
      profile: Windows$Media$MediaProperties$MediaEncodingProfile
    ): Windows$Foundation$IAsyncOperation<Windows$Media$Transcoding$PrepareTranscodeResult>;
  }

  declare var npm$namespace$Windows$Networking: {
    HostNameSortOptions: typeof Windows$Networking$HostNameSortOptions,
    HostNameType: typeof Windows$Networking$HostNameType,
    HostName: typeof Windows$Networking$HostName,
    EndpointPair: typeof Windows$Networking$EndpointPair,
    NetworkOperators: typeof npm$namespace$Windows$Networking$NetworkOperators,
    BackgroundTransfer: typeof npm$namespace$Windows$Networking$BackgroundTransfer,
    Proximity: typeof npm$namespace$Windows$Networking$Proximity,
    Sockets: typeof npm$namespace$Windows$Networking$Sockets,
    Connectivity: typeof npm$namespace$Windows$Networking$Connectivity,
    PushNotifications: typeof npm$namespace$Windows$Networking$PushNotifications
  };

  declare var npm$namespace$Windows$Networking$NetworkOperators: {
    DataClasses: typeof Windows$Networking$NetworkOperators$DataClasses,
    MobileBroadbandDeviceType: typeof Windows$Networking$NetworkOperators$MobileBroadbandDeviceType,
    NetworkDeviceStatus: typeof Windows$Networking$NetworkOperators$NetworkDeviceStatus,
    NetworkRegistrationState: typeof Windows$Networking$NetworkOperators$NetworkRegistrationState,
    MobileBroadbandRadioState: typeof Windows$Networking$NetworkOperators$MobileBroadbandRadioState,
    NetworkOperatorEventMessageType: typeof Windows$Networking$NetworkOperators$NetworkOperatorEventMessageType,
    MobileBroadbandAccountWatcherStatus: typeof Windows$Networking$NetworkOperators$MobileBroadbandAccountWatcherStatus,
    ProfileMediaType: typeof Windows$Networking$NetworkOperators$ProfileMediaType,
    UssdResultCode: typeof Windows$Networking$NetworkOperators$UssdResultCode,
    MobileBroadbandAccount: typeof Windows$Networking$NetworkOperators$MobileBroadbandAccount,
    MobileBroadbandNetwork: typeof Windows$Networking$NetworkOperators$MobileBroadbandNetwork,
    MobileBroadbandDeviceInformation: typeof Windows$Networking$NetworkOperators$MobileBroadbandDeviceInformation,
    NetworkOperatorNotificationEventDetails: typeof Windows$Networking$NetworkOperators$NetworkOperatorNotificationEventDetails,
    MobileBroadbandAccountEventArgs: typeof Windows$Networking$NetworkOperators$MobileBroadbandAccountEventArgs,
    MobileBroadbandAccountUpdatedEventArgs: typeof Windows$Networking$NetworkOperators$MobileBroadbandAccountUpdatedEventArgs,
    MobileBroadbandAccountWatcher: typeof Windows$Networking$NetworkOperators$MobileBroadbandAccountWatcher,
    HotspotAuthenticationEventDetails: typeof Windows$Networking$NetworkOperators$HotspotAuthenticationEventDetails,
    HotspotAuthenticationContext: typeof Windows$Networking$NetworkOperators$HotspotAuthenticationContext,
    ProvisionFromXmlDocumentResults: typeof Windows$Networking$NetworkOperators$ProvisionFromXmlDocumentResults,
    ProvisionedProfile: typeof Windows$Networking$NetworkOperators$ProvisionedProfile,
    ProvisioningAgent: typeof Windows$Networking$NetworkOperators$ProvisioningAgent,
    UssdMessage: typeof Windows$Networking$NetworkOperators$UssdMessage,
    UssdReply: typeof Windows$Networking$NetworkOperators$UssdReply,
    UssdSession: typeof Windows$Networking$NetworkOperators$UssdSession
  };

  declare export var Windows$Networking$NetworkOperators$DataClasses: {|
    +none: 0, // 0
    +gprs: 1, // 1
    +edge: 2, // 2
    +umts: 3, // 3
    +hsdpa: 4, // 4
    +hsupa: 5, // 5
    +lteAdvanced: 6, // 6
    +cdma1xRtt: 7, // 7
    +cdma1xEvdo: 8, // 8
    +cdma1xEvdoRevA: 9, // 9
    +cdma1xEvdv: 10, // 10
    +cdma3xRtt: 11, // 11
    +cdma1xEvdoRevB: 12, // 12
    +cdmaUmb: 13, // 13
    +custom: 14 // 14
  |};

  declare export var Windows$Networking$NetworkOperators$MobileBroadbandDeviceType: {|
    +unknown: 0, // 0
    +embedded: 1, // 1
    +removable: 2, // 2
    +remote: 3 // 3
  |};

  declare export var Windows$Networking$NetworkOperators$NetworkDeviceStatus: {|
    +deviceNotReady: 0, // 0
    +deviceReady: 1, // 1
    +simNotInserted: 2, // 2
    +badSim: 3, // 3
    +deviceHardwareFailure: 4, // 4
    +accountNotActivated: 5, // 5
    +deviceLocked: 6, // 6
    +deviceBlocked: 7 // 7
  |};

  declare export var Windows$Networking$NetworkOperators$NetworkRegistrationState: {|
    +none: 0, // 0
    +deregistered: 1, // 1
    +searching: 2, // 2
    +home: 3, // 3
    +roaming: 4, // 4
    +partner: 5, // 5
    +denied: 6 // 6
  |};

  declare export var Windows$Networking$NetworkOperators$MobileBroadbandRadioState: {|
    +off: 0, // 0
    +on: 1 // 1
  |};

  declare export var Windows$Networking$NetworkOperators$NetworkOperatorEventMessageType: {|
    +gsm: 0, // 0
    +cdma: 1, // 1
    +ussd: 2, // 2
    +dataPlanThresholdReached: 3, // 3
    +dataPlanReset: 4, // 4
    +dataPlanDeleted: 5, // 5
    +profileConnected: 6, // 6
    +profileDisconnected: 7, // 7
    +registeredRoaming: 8, // 8
    +registeredHome: 9 // 9
  |};

  declare export var Windows$Networking$NetworkOperators$MobileBroadbandAccountWatcherStatus: {|
    +created: 0, // 0
    +started: 1, // 1
    +enumerationCompleted: 2, // 2
    +stopped: 3, // 3
    +aborted: 4 // 4
  |};

  declare export interface Windows$Networking$NetworkOperators$IMobileBroadbandAccountStatics {
    availableNetworkAccountIds: Windows$Foundation$Collections$IVectorView<string>;
    createFromNetworkAccountId(
      networkAccountId: string
    ): Windows$Networking$NetworkOperators$MobileBroadbandAccount;
  }

  declare export class Windows$Networking$NetworkOperators$MobileBroadbandAccount
    mixins Windows$Networking$NetworkOperators$IMobileBroadbandAccount {
    currentDeviceInformation: Windows$Networking$NetworkOperators$MobileBroadbandDeviceInformation;
    currentNetwork: Windows$Networking$NetworkOperators$MobileBroadbandNetwork;
    networkAccountId: string;
    serviceProviderGuid: string;
    serviceProviderName: string;
    static availableNetworkAccountIds: Windows$Foundation$Collections$IVectorView<string>;
    static createFromNetworkAccountId(
      networkAccountId: string
    ): Windows$Networking$NetworkOperators$MobileBroadbandAccount;
  }

  declare export interface Windows$Networking$NetworkOperators$IMobileBroadbandAccount {
    currentDeviceInformation: Windows$Networking$NetworkOperators$MobileBroadbandDeviceInformation;
    currentNetwork: Windows$Networking$NetworkOperators$MobileBroadbandNetwork;
    networkAccountId: string;
    serviceProviderGuid: string;
    serviceProviderName: string;
  }

  declare export class Windows$Networking$NetworkOperators$MobileBroadbandNetwork
    mixins Windows$Networking$NetworkOperators$IMobileBroadbandNetwork {
    accessPointName: string;
    activationNetworkError: number;
    networkAdapter: Windows$Networking$Connectivity$NetworkAdapter;
    networkRegistrationState: $Values<
      typeof Windows$Networking$NetworkOperators$NetworkRegistrationState
    >;
    packetAttachNetworkError: number;
    registeredDataClass: $Values<
      typeof Windows$Networking$NetworkOperators$DataClasses
    >;
    registeredProviderId: string;
    registeredProviderName: string;
    registrationNetworkError: number;
    showConnectionUI(): void;
  }

  declare export class Windows$Networking$NetworkOperators$MobileBroadbandDeviceInformation
    mixins Windows$Networking$NetworkOperators$IMobileBroadbandDeviceInformation {
    cellularClass: $Values<typeof Windows$Devices$Sms$CellularClass>;
    currentRadioState: $Values<
      typeof Windows$Networking$NetworkOperators$MobileBroadbandRadioState
    >;
    customDataClass: string;
    dataClasses: $Values<
      typeof Windows$Networking$NetworkOperators$DataClasses
    >;
    deviceId: string;
    deviceType: $Values<
      typeof Windows$Networking$NetworkOperators$MobileBroadbandDeviceType
    >;
    firmwareInformation: string;
    manufacturer: string;
    mobileEquipmentId: string;
    model: string;
    networkDeviceStatus: $Values<
      typeof Windows$Networking$NetworkOperators$NetworkDeviceStatus
    >;
    simIccId: string;
    subscriberId: string;
    telephoneNumbers: Windows$Foundation$Collections$IVectorView<string>;
  }

  declare export interface Windows$Networking$NetworkOperators$IMobileBroadbandDeviceInformation {
    cellularClass: $Values<typeof Windows$Devices$Sms$CellularClass>;
    currentRadioState: $Values<
      typeof Windows$Networking$NetworkOperators$MobileBroadbandRadioState
    >;
    customDataClass: string;
    dataClasses: $Values<
      typeof Windows$Networking$NetworkOperators$DataClasses
    >;
    deviceId: string;
    deviceType: $Values<
      typeof Windows$Networking$NetworkOperators$MobileBroadbandDeviceType
    >;
    firmwareInformation: string;
    manufacturer: string;
    mobileEquipmentId: string;
    model: string;
    networkDeviceStatus: $Values<
      typeof Windows$Networking$NetworkOperators$NetworkDeviceStatus
    >;
    simIccId: string;
    subscriberId: string;
    telephoneNumbers: Windows$Foundation$Collections$IVectorView<string>;
  }

  declare export interface Windows$Networking$NetworkOperators$IMobileBroadbandNetwork {
    accessPointName: string;
    activationNetworkError: number;
    networkAdapter: Windows$Networking$Connectivity$NetworkAdapter;
    networkRegistrationState: $Values<
      typeof Windows$Networking$NetworkOperators$NetworkRegistrationState
    >;
    packetAttachNetworkError: number;
    registeredDataClass: $Values<
      typeof Windows$Networking$NetworkOperators$DataClasses
    >;
    registeredProviderId: string;
    registeredProviderName: string;
    registrationNetworkError: number;
    showConnectionUI(): void;
  }

  declare export interface Windows$Networking$NetworkOperators$INetworkOperatorNotificationEventDetails {
    encodingType: number;
    message: string;
    networkAccountId: string;
    notificationType: $Values<
      typeof Windows$Networking$NetworkOperators$NetworkOperatorEventMessageType
    >;
    ruleId: string;
    smsMessage: Windows$Devices$Sms$ISmsMessage;
  }

  declare export class Windows$Networking$NetworkOperators$NetworkOperatorNotificationEventDetails
    mixins Windows$Networking$NetworkOperators$INetworkOperatorNotificationEventDetails {
    encodingType: number;
    message: string;
    networkAccountId: string;
    notificationType: $Values<
      typeof Windows$Networking$NetworkOperators$NetworkOperatorEventMessageType
    >;
    ruleId: string;
    smsMessage: Windows$Devices$Sms$ISmsMessage;
  }

  declare export interface Windows$Networking$NetworkOperators$IMobileBroadbandAccountEventArgs {
    networkAccountId: string;
  }

  declare export class Windows$Networking$NetworkOperators$MobileBroadbandAccountEventArgs
    mixins Windows$Networking$NetworkOperators$IMobileBroadbandAccountEventArgs {
    networkAccountId: string;
  }

  declare export interface Windows$Networking$NetworkOperators$IMobileBroadbandAccountUpdatedEventArgs {
    hasDeviceInformationChanged: boolean;
    hasNetworkChanged: boolean;
    networkAccountId: string;
  }

  declare export class Windows$Networking$NetworkOperators$MobileBroadbandAccountUpdatedEventArgs
    mixins Windows$Networking$NetworkOperators$IMobileBroadbandAccountUpdatedEventArgs {
    hasDeviceInformationChanged: boolean;
    hasNetworkChanged: boolean;
    networkAccountId: string;
  }

  declare export interface Windows$Networking$NetworkOperators$IMobileBroadbandAccountWatcher {
    status: $Values<
      typeof Windows$Networking$NetworkOperators$MobileBroadbandAccountWatcherStatus
    >;
    onaccountadded: any;
    onaccountupdated: any;
    onaccountremoved: any;
    onenumerationcompleted: any;
    onstopped: any;
    start(): void;
    stop(): void;
  }

  declare export class Windows$Networking$NetworkOperators$MobileBroadbandAccountWatcher
    mixins Windows$Networking$NetworkOperators$IMobileBroadbandAccountWatcher {
    status: $Values<
      typeof Windows$Networking$NetworkOperators$MobileBroadbandAccountWatcherStatus
    >;
    onaccountadded: any;
    onaccountupdated: any;
    onaccountremoved: any;
    onenumerationcompleted: any;
    onstopped: any;
    start(): void;
    stop(): void;
  }

  declare export interface Windows$Networking$NetworkOperators$IHotspotAuthenticationEventDetails {
    eventToken: string;
  }

  declare export class Windows$Networking$NetworkOperators$HotspotAuthenticationEventDetails
    mixins Windows$Networking$NetworkOperators$IHotspotAuthenticationEventDetails {
    eventToken: string;
  }

  declare export interface Windows$Networking$NetworkOperators$IHotspotAuthenticationContextStatics {
    tryGetAuthenticationContext(
      evenToken: string
    ): {
      context: Windows$Networking$NetworkOperators$HotspotAuthenticationContext,
      isValid: boolean
    };
  }

  declare export class Windows$Networking$NetworkOperators$HotspotAuthenticationContext
    mixins Windows$Networking$NetworkOperators$IHotspotAuthenticationContext {
    authenticationUrl: Windows$Foundation$Uri;
    networkAdapter: Windows$Networking$Connectivity$NetworkAdapter;
    redirectMessageUrl: Windows$Foundation$Uri;
    redirectMessageXml: Windows$Data$Xml$Dom$XmlDocument;
    wirelessNetworkId: Uint8Array;
    issueCredentials(
      userName: string,
      password: string,
      extraParameters: string,
      markAsManualConnectOnFailure: boolean
    ): void;
    abortAuthentication(markAsManual: boolean): void;
    skipAuthentication(): void;
    triggerAttentionRequired(
      packageRelativeApplicationId: string,
      applicationParameters: string
    ): void;
    static tryGetAuthenticationContext(
      evenToken: string
    ): {
      context: Windows$Networking$NetworkOperators$HotspotAuthenticationContext,
      isValid: boolean
    };
  }

  declare export interface Windows$Networking$NetworkOperators$IHotspotAuthenticationContext {
    authenticationUrl: Windows$Foundation$Uri;
    networkAdapter: Windows$Networking$Connectivity$NetworkAdapter;
    redirectMessageUrl: Windows$Foundation$Uri;
    redirectMessageXml: Windows$Data$Xml$Dom$XmlDocument;
    wirelessNetworkId: Uint8Array;
    issueCredentials(
      userName: string,
      password: string,
      extraParameters: string,
      markAsManualConnectOnFailure: boolean
    ): void;
    abortAuthentication(markAsManual: boolean): void;
    skipAuthentication(): void;
    triggerAttentionRequired(
      packageRelativeApplicationId: string,
      applicationParameters: string
    ): void;
  }

  declare export var Windows$Networking$NetworkOperators$ProfileMediaType: {|
    +wlan: 0, // 0
    +wwan: 1 // 1
  |};

  declare export interface Windows$Networking$NetworkOperators$IProvisionFromXmlDocumentResults {
    allElementsProvisioned: boolean;
    provisionResultsXml: string;
  }

  declare export class Windows$Networking$NetworkOperators$ProvisionFromXmlDocumentResults
    mixins Windows$Networking$NetworkOperators$IProvisionFromXmlDocumentResults {
    allElementsProvisioned: boolean;
    provisionResultsXml: string;
  }

  declare export interface Windows$Networking$NetworkOperators$ProfileUsage {
    usageInMegabytes: number;
    lastSyncTime: Date;
  }

  declare export interface Windows$Networking$NetworkOperators$IProvisionedProfile {
    updateCost(
      value: $Values<typeof Windows$Networking$Connectivity$NetworkCostType>
    ): void;
    updateUsage(value: Windows$Networking$NetworkOperators$ProfileUsage): void;
  }

  declare export class Windows$Networking$NetworkOperators$ProvisionedProfile
    mixins Windows$Networking$NetworkOperators$IProvisionedProfile {
    updateCost(
      value: $Values<typeof Windows$Networking$Connectivity$NetworkCostType>
    ): void;
    updateUsage(value: Windows$Networking$NetworkOperators$ProfileUsage): void;
  }

  declare export interface Windows$Networking$NetworkOperators$IProvisioningAgent {
    provisionFromXmlDocumentAsync(
      provisioningXmlDocument: string
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$NetworkOperators$ProvisionFromXmlDocumentResults>;
    getProvisionedProfile(
      mediaType: $Values<
        typeof Windows$Networking$NetworkOperators$ProfileMediaType
      >,
      profileName: string
    ): Windows$Networking$NetworkOperators$ProvisionedProfile;
  }

  declare export interface Windows$Networking$NetworkOperators$IProvisioningAgentStaticMethods {
    createFromNetworkAccountId(
      networkAccountId: string
    ): Windows$Networking$NetworkOperators$ProvisioningAgent;
  }

  declare export class Windows$Networking$NetworkOperators$ProvisioningAgent
    mixins Windows$Networking$NetworkOperators$IProvisioningAgent {
    provisionFromXmlDocumentAsync(
      provisioningXmlDocument: string
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$NetworkOperators$ProvisionFromXmlDocumentResults>;
    getProvisionedProfile(
      mediaType: $Values<
        typeof Windows$Networking$NetworkOperators$ProfileMediaType
      >,
      profileName: string
    ): Windows$Networking$NetworkOperators$ProvisionedProfile;
    static createFromNetworkAccountId(
      networkAccountId: string
    ): Windows$Networking$NetworkOperators$ProvisioningAgent;
  }

  declare export var Windows$Networking$NetworkOperators$UssdResultCode: {|
    +noActionRequired: 0, // 0
    +actionRequired: 1, // 1
    +terminated: 2, // 2
    +otherLocalClient: 3, // 3
    +operationNotSupported: 4, // 4
    +networkTimeout: 5 // 5
  |};

  declare export interface Windows$Networking$NetworkOperators$IUssdMessage {
    dataCodingScheme: number;
    payloadAsText: string;
    getPayload(): Uint8Array;
    setPayload(value: Uint8Array): void;
  }

  declare export interface Windows$Networking$NetworkOperators$IUssdMessageFactory {
    createMessage(
      messageText: string
    ): Windows$Networking$NetworkOperators$UssdMessage;
  }

  declare export class Windows$Networking$NetworkOperators$UssdMessage
    mixins Windows$Networking$NetworkOperators$IUssdMessage {
    constructor(messageText: string): this;
    dataCodingScheme: number;
    payloadAsText: string;
    getPayload(): Uint8Array;
    setPayload(value: Uint8Array): void;
  }

  declare export interface Windows$Networking$NetworkOperators$IUssdReply {
    message: Windows$Networking$NetworkOperators$UssdMessage;
    resultCode: $Values<
      typeof Windows$Networking$NetworkOperators$UssdResultCode
    >;
  }

  declare export class Windows$Networking$NetworkOperators$UssdReply
    mixins Windows$Networking$NetworkOperators$IUssdReply {
    message: Windows$Networking$NetworkOperators$UssdMessage;
    resultCode: $Values<
      typeof Windows$Networking$NetworkOperators$UssdResultCode
    >;
  }

  declare export interface Windows$Networking$NetworkOperators$IUssdSession {
    sendMessageAndGetReplyAsync(
      message: Windows$Networking$NetworkOperators$UssdMessage
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$NetworkOperators$UssdReply>;
    close(): void;
  }

  declare export interface Windows$Networking$NetworkOperators$IUssdSessionStatics {
    createFromNetworkAccountId(
      networkAccountId: string
    ): Windows$Networking$NetworkOperators$UssdSession;
    createFromNetworkInterfaceId(
      networkInterfaceId: string
    ): Windows$Networking$NetworkOperators$UssdSession;
  }

  declare export class Windows$Networking$NetworkOperators$UssdSession
    mixins Windows$Networking$NetworkOperators$IUssdSession {
    sendMessageAndGetReplyAsync(
      message: Windows$Networking$NetworkOperators$UssdMessage
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$NetworkOperators$UssdReply>;
    close(): void;
    static createFromNetworkAccountId(
      networkAccountId: string
    ): Windows$Networking$NetworkOperators$UssdSession;
    static createFromNetworkInterfaceId(
      networkInterfaceId: string
    ): Windows$Networking$NetworkOperators$UssdSession;
  }

  declare var npm$namespace$Windows$Networking$BackgroundTransfer: {
    BackgroundTransferStatus: typeof Windows$Networking$BackgroundTransfer$BackgroundTransferStatus,
    BackgroundTransferCostPolicy: typeof Windows$Networking$BackgroundTransfer$BackgroundTransferCostPolicy,
    DownloadOperation: typeof Windows$Networking$BackgroundTransfer$DownloadOperation,
    UploadOperation: typeof Windows$Networking$BackgroundTransfer$UploadOperation,
    BackgroundTransferContentPart: typeof Windows$Networking$BackgroundTransfer$BackgroundTransferContentPart,
    ResponseInformation: typeof Windows$Networking$BackgroundTransfer$ResponseInformation,
    BackgroundDownloader: typeof Windows$Networking$BackgroundTransfer$BackgroundDownloader,
    BackgroundUploader: typeof Windows$Networking$BackgroundTransfer$BackgroundUploader,
    BackgroundTransferError: typeof Windows$Networking$BackgroundTransfer$BackgroundTransferError
  };

  declare export var Windows$Networking$BackgroundTransfer$BackgroundTransferStatus: {|
    +idle: 0, // 0
    +running: 1, // 1
    +pausedByApplication: 2, // 2
    +pausedCostedNetwork: 3, // 3
    +pausedNoNetwork: 4, // 4
    +completed: 5, // 5
    +canceled: 6, // 6
    +error: 7 // 7
  |};

  declare export var Windows$Networking$BackgroundTransfer$BackgroundTransferCostPolicy: {|
    +default: 0, // 0
    +unrestrictedOnly: 1, // 1
    +always: 2 // 2
  |};

  declare export interface Windows$Networking$BackgroundTransfer$BackgroundDownloadProgress {
    bytesReceived: number;
    totalBytesToReceive: number;
    status: $Values<
      typeof Windows$Networking$BackgroundTransfer$BackgroundTransferStatus
    >;
    hasResponseChanged: boolean;
    hasRestarted: boolean;
  }

  declare export interface Windows$Networking$BackgroundTransfer$BackgroundUploadProgress {
    bytesReceived: number;
    bytesSent: number;
    totalBytesToReceive: number;
    totalBytesToSend: number;
    status: $Values<
      typeof Windows$Networking$BackgroundTransfer$BackgroundTransferStatus
    >;
    hasResponseChanged: boolean;
    hasRestarted: boolean;
  }

  declare export interface Windows$Networking$BackgroundTransfer$IBackgroundTransferBase {
    costPolicy: $Values<
      typeof Windows$Networking$BackgroundTransfer$BackgroundTransferCostPolicy
    >;
    group: string;
    method: string;
    proxyCredential: Windows$Security$Credentials$PasswordCredential;
    serverCredential: Windows$Security$Credentials$PasswordCredential;
    setRequestHeader(headerName: string, headerValue: string): void;
  }

  declare export type Windows$Networking$BackgroundTransfer$IBackgroundDownloader = {
    createDownload(
      uri: Windows$Foundation$Uri,
      resultFile: Windows$Storage$IStorageFile
    ): Windows$Networking$BackgroundTransfer$DownloadOperation,
    createDownload(
      uri: Windows$Foundation$Uri,
      resultFile: Windows$Storage$IStorageFile,
      requestBodyFile: Windows$Storage$IStorageFile
    ): Windows$Networking$BackgroundTransfer$DownloadOperation,
    createDownloadAsync(
      uri: Windows$Foundation$Uri,
      resultFile: Windows$Storage$IStorageFile,
      requestBodyStream: Windows$Storage$Streams$IInputStream
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$BackgroundTransfer$DownloadOperation>
  } & Windows$Networking$BackgroundTransfer$IBackgroundTransferBase;

  declare export class Windows$Networking$BackgroundTransfer$DownloadOperation
    mixins Windows$Networking$BackgroundTransfer$IDownloadOperation,
      Windows$Networking$BackgroundTransfer$IBackgroundTransferOperation {
    progress: Windows$Networking$BackgroundTransfer$BackgroundDownloadProgress;
    resultFile: Windows$Storage$IStorageFile;
    costPolicy: $Values<
      typeof Windows$Networking$BackgroundTransfer$BackgroundTransferCostPolicy
    >;
    group: string;
    guid: string;
    method: string;
    requestedUri: Windows$Foundation$Uri;
    startAsync(): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Networking$BackgroundTransfer$DownloadOperation,
      Windows$Networking$BackgroundTransfer$DownloadOperation
    >;
    attachAsync(): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Networking$BackgroundTransfer$DownloadOperation,
      Windows$Networking$BackgroundTransfer$DownloadOperation
    >;
    pause(): void;
    resume(): void;
    getResultStreamAt(position: number): Windows$Storage$Streams$IInputStream;
    getResponseInformation(): Windows$Networking$BackgroundTransfer$ResponseInformation;
  }

  declare export type Windows$Networking$BackgroundTransfer$IBackgroundUploader = {
    createUpload(
      uri: Windows$Foundation$Uri,
      sourceFile: Windows$Storage$IStorageFile
    ): Windows$Networking$BackgroundTransfer$UploadOperation,
    createUploadFromStreamAsync(
      uri: Windows$Foundation$Uri,
      sourceStream: Windows$Storage$Streams$IInputStream
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$BackgroundTransfer$UploadOperation>,
    createUploadAsync(
      uri: Windows$Foundation$Uri,
      parts: Windows$Foundation$Collections$IIterable<Windows$Networking$BackgroundTransfer$BackgroundTransferContentPart>
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$BackgroundTransfer$UploadOperation>,
    createUploadAsync(
      uri: Windows$Foundation$Uri,
      parts: Windows$Foundation$Collections$IIterable<Windows$Networking$BackgroundTransfer$BackgroundTransferContentPart>,
      subType: string
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$BackgroundTransfer$UploadOperation>,
    createUploadAsync(
      uri: Windows$Foundation$Uri,
      parts: Windows$Foundation$Collections$IIterable<Windows$Networking$BackgroundTransfer$BackgroundTransferContentPart>,
      subType: string,
      boundary: string
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$BackgroundTransfer$UploadOperation>
  } & Windows$Networking$BackgroundTransfer$IBackgroundTransferBase;

  declare export class Windows$Networking$BackgroundTransfer$UploadOperation
    mixins Windows$Networking$BackgroundTransfer$IUploadOperation,
      Windows$Networking$BackgroundTransfer$IBackgroundTransferOperation {
    progress: Windows$Networking$BackgroundTransfer$BackgroundUploadProgress;
    sourceFile: Windows$Storage$IStorageFile;
    costPolicy: $Values<
      typeof Windows$Networking$BackgroundTransfer$BackgroundTransferCostPolicy
    >;
    group: string;
    guid: string;
    method: string;
    requestedUri: Windows$Foundation$Uri;
    startAsync(): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Networking$BackgroundTransfer$UploadOperation,
      Windows$Networking$BackgroundTransfer$UploadOperation
    >;
    attachAsync(): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Networking$BackgroundTransfer$UploadOperation,
      Windows$Networking$BackgroundTransfer$UploadOperation
    >;
    getResultStreamAt(position: number): Windows$Storage$Streams$IInputStream;
    getResponseInformation(): Windows$Networking$BackgroundTransfer$ResponseInformation;
  }

  declare export class Windows$Networking$BackgroundTransfer$BackgroundTransferContentPart
    mixins Windows$Networking$BackgroundTransfer$IBackgroundTransferContentPart {
    constructor(name: string): this;
    constructor(name: string, fileName: string): this;
    constructor(): this;
    setHeader(headerName: string, headerValue: string): void;
    setText(value: string): void;
    setFile(value: Windows$Storage$IStorageFile): void;
  }

  declare export interface Windows$Networking$BackgroundTransfer$IBackgroundTransferOperation {
    costPolicy: $Values<
      typeof Windows$Networking$BackgroundTransfer$BackgroundTransferCostPolicy
    >;
    group: string;
    guid: string;
    method: string;
    requestedUri: Windows$Foundation$Uri;
    getResultStreamAt(position: number): Windows$Storage$Streams$IInputStream;
    getResponseInformation(): Windows$Networking$BackgroundTransfer$ResponseInformation;
  }

  declare export class Windows$Networking$BackgroundTransfer$ResponseInformation
    mixins Windows$Networking$BackgroundTransfer$IResponseInformation {
    actualUri: Windows$Foundation$Uri;
    headers: Windows$Foundation$Collections$IMapView<string, string>;
    isResumable: boolean;
    statusCode: number;
  }

  declare export type Windows$Networking$BackgroundTransfer$IDownloadOperation = {
    progress: Windows$Networking$BackgroundTransfer$BackgroundDownloadProgress,
    resultFile: Windows$Storage$IStorageFile,
    startAsync(): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Networking$BackgroundTransfer$DownloadOperation,
      Windows$Networking$BackgroundTransfer$DownloadOperation
    >,
    attachAsync(): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Networking$BackgroundTransfer$DownloadOperation,
      Windows$Networking$BackgroundTransfer$DownloadOperation
    >,
    pause(): void,
    resume(): void
  } & Windows$Networking$BackgroundTransfer$IBackgroundTransferOperation;

  declare export type Windows$Networking$BackgroundTransfer$IUploadOperation = {
    progress: Windows$Networking$BackgroundTransfer$BackgroundUploadProgress,
    sourceFile: Windows$Storage$IStorageFile,
    startAsync(): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Networking$BackgroundTransfer$UploadOperation,
      Windows$Networking$BackgroundTransfer$UploadOperation
    >,
    attachAsync(): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Networking$BackgroundTransfer$UploadOperation,
      Windows$Networking$BackgroundTransfer$UploadOperation
    >
  } & Windows$Networking$BackgroundTransfer$IBackgroundTransferOperation;

  declare export interface Windows$Networking$BackgroundTransfer$IBackgroundDownloaderStaticMethods {
    getCurrentDownloadsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$BackgroundTransfer$DownloadOperation>
    >;
    getCurrentDownloadsAsync(
      group: string
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$BackgroundTransfer$DownloadOperation>
    >;
  }

  declare export interface Windows$Networking$BackgroundTransfer$IBackgroundUploaderStaticMethods {
    getCurrentUploadsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$BackgroundTransfer$UploadOperation>
    >;
    getCurrentUploadsAsync(
      group: string
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$BackgroundTransfer$UploadOperation>
    >;
  }

  declare export interface Windows$Networking$BackgroundTransfer$IResponseInformation {
    actualUri: Windows$Foundation$Uri;
    headers: Windows$Foundation$Collections$IMapView<string, string>;
    isResumable: boolean;
    statusCode: number;
  }

  declare export interface Windows$Networking$BackgroundTransfer$IBackgroundTransferErrorStaticMethods {
    getStatus(hresult: number): $Values<typeof Windows$Web$WebErrorStatus>;
  }

  declare export interface Windows$Networking$BackgroundTransfer$IBackgroundTransferContentPart {
    setHeader(headerName: string, headerValue: string): void;
    setText(value: string): void;
    setFile(value: Windows$Storage$IStorageFile): void;
  }

  declare export interface Windows$Networking$BackgroundTransfer$IBackgroundTransferContentPartFactory {
    createWithName(
      name: string
    ): Windows$Networking$BackgroundTransfer$BackgroundTransferContentPart;
    createWithNameAndFileName(
      name: string,
      fileName: string
    ): Windows$Networking$BackgroundTransfer$BackgroundTransferContentPart;
  }

  declare export class Windows$Networking$BackgroundTransfer$BackgroundDownloader
    mixins Windows$Networking$BackgroundTransfer$IBackgroundDownloader,
      Windows$Networking$BackgroundTransfer$IBackgroundTransferBase {
    costPolicy: $Values<
      typeof Windows$Networking$BackgroundTransfer$BackgroundTransferCostPolicy
    >;
    group: string;
    method: string;
    proxyCredential: Windows$Security$Credentials$PasswordCredential;
    serverCredential: Windows$Security$Credentials$PasswordCredential;
    createDownload(
      uri: Windows$Foundation$Uri,
      resultFile: Windows$Storage$IStorageFile
    ): Windows$Networking$BackgroundTransfer$DownloadOperation;
    createDownload(
      uri: Windows$Foundation$Uri,
      resultFile: Windows$Storage$IStorageFile,
      requestBodyFile: Windows$Storage$IStorageFile
    ): Windows$Networking$BackgroundTransfer$DownloadOperation;
    createDownloadAsync(
      uri: Windows$Foundation$Uri,
      resultFile: Windows$Storage$IStorageFile,
      requestBodyStream: Windows$Storage$Streams$IInputStream
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$BackgroundTransfer$DownloadOperation>;
    setRequestHeader(headerName: string, headerValue: string): void;
    static getCurrentDownloadsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$BackgroundTransfer$DownloadOperation>
    >;
    static getCurrentDownloadsAsync(
      group: string
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$BackgroundTransfer$DownloadOperation>
    >;
  }

  declare export class Windows$Networking$BackgroundTransfer$BackgroundUploader
    mixins Windows$Networking$BackgroundTransfer$IBackgroundUploader,
      Windows$Networking$BackgroundTransfer$IBackgroundTransferBase {
    costPolicy: $Values<
      typeof Windows$Networking$BackgroundTransfer$BackgroundTransferCostPolicy
    >;
    group: string;
    method: string;
    proxyCredential: Windows$Security$Credentials$PasswordCredential;
    serverCredential: Windows$Security$Credentials$PasswordCredential;
    createUpload(
      uri: Windows$Foundation$Uri,
      sourceFile: Windows$Storage$IStorageFile
    ): Windows$Networking$BackgroundTransfer$UploadOperation;
    createUploadFromStreamAsync(
      uri: Windows$Foundation$Uri,
      sourceStream: Windows$Storage$Streams$IInputStream
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$BackgroundTransfer$UploadOperation>;
    createUploadAsync(
      uri: Windows$Foundation$Uri,
      parts: Windows$Foundation$Collections$IIterable<Windows$Networking$BackgroundTransfer$BackgroundTransferContentPart>
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$BackgroundTransfer$UploadOperation>;
    createUploadAsync(
      uri: Windows$Foundation$Uri,
      parts: Windows$Foundation$Collections$IIterable<Windows$Networking$BackgroundTransfer$BackgroundTransferContentPart>,
      subType: string
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$BackgroundTransfer$UploadOperation>;
    createUploadAsync(
      uri: Windows$Foundation$Uri,
      parts: Windows$Foundation$Collections$IIterable<Windows$Networking$BackgroundTransfer$BackgroundTransferContentPart>,
      subType: string,
      boundary: string
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$BackgroundTransfer$UploadOperation>;
    setRequestHeader(headerName: string, headerValue: string): void;
    static getCurrentUploadsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$BackgroundTransfer$UploadOperation>
    >;
    static getCurrentUploadsAsync(
      group: string
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$BackgroundTransfer$UploadOperation>
    >;
  }

  declare export class Windows$Networking$BackgroundTransfer$BackgroundTransferError {
    static getStatus(
      hresult: number
    ): $Values<typeof Windows$Web$WebErrorStatus>;
  }

  declare var npm$namespace$Windows$Networking$Proximity: {
    TriggeredConnectState: typeof Windows$Networking$Proximity$TriggeredConnectState,
    PeerDiscoveryTypes: typeof Windows$Networking$Proximity$PeerDiscoveryTypes,
    ProximityMessage: typeof Windows$Networking$Proximity$ProximityMessage,
    ProximityDevice: typeof Windows$Networking$Proximity$ProximityDevice,
    TriggeredConnectionStateChangedEventArgs: typeof Windows$Networking$Proximity$TriggeredConnectionStateChangedEventArgs,
    PeerInformation: typeof Windows$Networking$Proximity$PeerInformation,
    ConnectionRequestedEventArgs: typeof Windows$Networking$Proximity$ConnectionRequestedEventArgs,
    PeerFinder: typeof Windows$Networking$Proximity$PeerFinder
  };
  declare export interface Windows$Networking$Proximity$IProximityMessage {
    data: Windows$Storage$Streams$IBuffer;
    dataAsString: string;
    messageType: string;
    subscriptionId: number;
  }

  declare export class Windows$Networking$Proximity$ProximityMessage
    mixins Windows$Networking$Proximity$IProximityMessage {
    data: Windows$Storage$Streams$IBuffer;
    dataAsString: string;
    messageType: string;
    subscriptionId: number;
  }

  declare export interface Windows$Networking$Proximity$MessageReceivedHandler {
    (
      sender: Windows$Networking$Proximity$ProximityDevice,
      message: Windows$Networking$Proximity$ProximityMessage
    ): void;
  }

  declare export class Windows$Networking$Proximity$ProximityDevice
    mixins Windows$Networking$Proximity$IProximityDevice {
    bitsPerSecond: number;
    deviceId: string;
    maxMessageBytes: number;
    subscribeForMessage(
      messageType: string,
      messageReceivedHandler: Windows$Networking$Proximity$MessageReceivedHandler
    ): number;
    publishMessage(messageType: string, message: string): number;
    publishMessage(
      messageType: string,
      message: string,
      messageTransmittedHandler: Windows$Networking$Proximity$MessageTransmittedHandler
    ): number;
    publishBinaryMessage(
      messageType: string,
      message: Windows$Storage$Streams$IBuffer
    ): number;
    publishBinaryMessage(
      messageType: string,
      message: Windows$Storage$Streams$IBuffer,
      messageTransmittedHandler: Windows$Networking$Proximity$MessageTransmittedHandler
    ): number;
    publishUriMessage(message: Windows$Foundation$Uri): number;
    publishUriMessage(
      message: Windows$Foundation$Uri,
      messageTransmittedHandler: Windows$Networking$Proximity$MessageTransmittedHandler
    ): number;
    stopSubscribingForMessage(subscriptionId: number): void;
    stopPublishingMessage(messageId: number): void;
    ondevicearrived: any;
    ondevicedeparted: any;
    static getDeviceSelector(): string;
    static getDefault(): Windows$Networking$Proximity$ProximityDevice;
    static fromId(
      deviceInterfaceId: string
    ): Windows$Networking$Proximity$ProximityDevice;
  }

  declare export interface Windows$Networking$Proximity$MessageTransmittedHandler {
    (
      sender: Windows$Networking$Proximity$ProximityDevice,
      messageId: number
    ): void;
  }

  declare export interface Windows$Networking$Proximity$DeviceArrivedEventHandler {
    (sender: Windows$Networking$Proximity$ProximityDevice): void;
  }

  declare export interface Windows$Networking$Proximity$DeviceDepartedEventHandler {
    (sender: Windows$Networking$Proximity$ProximityDevice): void;
  }

  declare export interface Windows$Networking$Proximity$IProximityDevice {
    bitsPerSecond: number;
    deviceId: string;
    maxMessageBytes: number;
    subscribeForMessage(
      messageType: string,
      messageReceivedHandler: Windows$Networking$Proximity$MessageReceivedHandler
    ): number;
    publishMessage(messageType: string, message: string): number;
    publishMessage(
      messageType: string,
      message: string,
      messageTransmittedHandler: Windows$Networking$Proximity$MessageTransmittedHandler
    ): number;
    publishBinaryMessage(
      messageType: string,
      message: Windows$Storage$Streams$IBuffer
    ): number;
    publishBinaryMessage(
      messageType: string,
      message: Windows$Storage$Streams$IBuffer,
      messageTransmittedHandler: Windows$Networking$Proximity$MessageTransmittedHandler
    ): number;
    publishUriMessage(message: Windows$Foundation$Uri): number;
    publishUriMessage(
      message: Windows$Foundation$Uri,
      messageTransmittedHandler: Windows$Networking$Proximity$MessageTransmittedHandler
    ): number;
    stopSubscribingForMessage(subscriptionId: number): void;
    stopPublishingMessage(messageId: number): void;
    ondevicearrived: any;
    ondevicedeparted: any;
  }

  declare export interface Windows$Networking$Proximity$IProximityDeviceStatics {
    getDeviceSelector(): string;
    getDefault(): Windows$Networking$Proximity$ProximityDevice;
    fromId(
      deviceInterfaceId: string
    ): Windows$Networking$Proximity$ProximityDevice;
  }

  declare export var Windows$Networking$Proximity$TriggeredConnectState: {|
    +peerFound: 0, // 0
    +listening: 1, // 1
    +connecting: 2, // 2
    +completed: 3, // 3
    +canceled: 4, // 4
    +failed: 5 // 5
  |};

  declare export interface Windows$Networking$Proximity$ITriggeredConnectionStateChangedEventArgs {
    id: number;
    socket: Windows$Networking$Sockets$StreamSocket;
    state: $Values<typeof Windows$Networking$Proximity$TriggeredConnectState>;
  }

  declare export class Windows$Networking$Proximity$TriggeredConnectionStateChangedEventArgs
    mixins Windows$Networking$Proximity$ITriggeredConnectionStateChangedEventArgs {
    id: number;
    socket: Windows$Networking$Sockets$StreamSocket;
    state: $Values<typeof Windows$Networking$Proximity$TriggeredConnectState>;
  }

  declare export interface Windows$Networking$Proximity$IPeerInformation {
    displayName: string;
  }

  declare export class Windows$Networking$Proximity$PeerInformation
    mixins Windows$Networking$Proximity$IPeerInformation {
    displayName: string;
  }

  declare export interface Windows$Networking$Proximity$IConnectionRequestedEventArgs {
    peerInformation: Windows$Networking$Proximity$PeerInformation;
  }

  declare export class Windows$Networking$Proximity$ConnectionRequestedEventArgs
    mixins Windows$Networking$Proximity$IConnectionRequestedEventArgs {
    peerInformation: Windows$Networking$Proximity$PeerInformation;
  }

  declare export var Windows$Networking$Proximity$PeerDiscoveryTypes: {|
    +none: 0, // 0
    +browse: 1, // 1
    +triggered: 2 // 2
  |};

  declare export interface Windows$Networking$Proximity$IPeerFinderStatics {
    allowBluetooth: boolean;
    allowInfrastructure: boolean;
    allowWiFiDirect: boolean;
    alternateIdentities: Windows$Foundation$Collections$IMap<string, string>;
    displayName: string;
    supportedDiscoveryTypes: $Values<
      typeof Windows$Networking$Proximity$PeerDiscoveryTypes
    >;
    start(): void;
    start(peerMessage: string): void;
    stop(): void;
    ontriggeredconnectionstatechanged: any;
    onconnectionrequested: any;
    findAllPeersAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$Proximity$PeerInformation>
    >;
    connectAsync(
      peerInformation: Windows$Networking$Proximity$PeerInformation
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$Sockets$StreamSocket>;
  }

  declare export class Windows$Networking$Proximity$PeerFinder {
    static allowBluetooth: boolean;
    static allowInfrastructure: boolean;
    static allowWiFiDirect: boolean;
    static alternateIdentities: Windows$Foundation$Collections$IMap<
      string,
      string
    >;
    static displayName: string;
    static supportedDiscoveryTypes: $Values<
      typeof Windows$Networking$Proximity$PeerDiscoveryTypes
    >;
    static start(): void;
    static start(peerMessage: string): void;
    static stop(): void;
    static ontriggeredconnectionstatechanged: any;
    static onconnectionrequested: any;
    static findAllPeersAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$Proximity$PeerInformation>
    >;
    static connectAsync(
      peerInformation: Windows$Networking$Proximity$PeerInformation
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$Sockets$StreamSocket>;
  }

  declare var npm$namespace$Windows$Networking$Sockets: {
    ControlChannelTriggerStatus: typeof Windows$Networking$Sockets$ControlChannelTriggerStatus,
    ControlChannelTriggerResourceType: typeof Windows$Networking$Sockets$ControlChannelTriggerResourceType,
    ControlChannelTriggerResetReason: typeof Windows$Networking$Sockets$ControlChannelTriggerResetReason,
    SocketMessageType: typeof Windows$Networking$Sockets$SocketMessageType,
    SocketProtectionLevel: typeof Windows$Networking$Sockets$SocketProtectionLevel,
    SocketQualityOfService: typeof Windows$Networking$Sockets$SocketQualityOfService,
    SocketErrorStatus: typeof Windows$Networking$Sockets$SocketErrorStatus,
    ControlChannelTrigger: typeof Windows$Networking$Sockets$ControlChannelTrigger,
    DatagramSocketControl: typeof Windows$Networking$Sockets$DatagramSocketControl,
    DatagramSocketInformation: typeof Windows$Networking$Sockets$DatagramSocketInformation,
    DatagramSocket: typeof Windows$Networking$Sockets$DatagramSocket,
    DatagramSocketMessageReceivedEventArgs: typeof Windows$Networking$Sockets$DatagramSocketMessageReceivedEventArgs,
    StreamSocketControl: typeof Windows$Networking$Sockets$StreamSocketControl,
    StreamSocketInformation: typeof Windows$Networking$Sockets$StreamSocketInformation,
    StreamSocket: typeof Windows$Networking$Sockets$StreamSocket,
    StreamSocketListenerControl: typeof Windows$Networking$Sockets$StreamSocketListenerControl,
    StreamSocketListenerInformation: typeof Windows$Networking$Sockets$StreamSocketListenerInformation,
    StreamSocketListener: typeof Windows$Networking$Sockets$StreamSocketListener,
    StreamSocketListenerConnectionReceivedEventArgs: typeof Windows$Networking$Sockets$StreamSocketListenerConnectionReceivedEventArgs,
    WebSocketClosedEventArgs: typeof Windows$Networking$Sockets$WebSocketClosedEventArgs,
    MessageWebSocketControl: typeof Windows$Networking$Sockets$MessageWebSocketControl,
    MessageWebSocketInformation: typeof Windows$Networking$Sockets$MessageWebSocketInformation,
    MessageWebSocket: typeof Windows$Networking$Sockets$MessageWebSocket,
    MessageWebSocketMessageReceivedEventArgs: typeof Windows$Networking$Sockets$MessageWebSocketMessageReceivedEventArgs,
    StreamWebSocketControl: typeof Windows$Networking$Sockets$StreamWebSocketControl,
    StreamWebSocketInformation: typeof Windows$Networking$Sockets$StreamWebSocketInformation,
    StreamWebSocket: typeof Windows$Networking$Sockets$StreamWebSocket,
    WebSocketKeepAlive: typeof Windows$Networking$Sockets$WebSocketKeepAlive,
    SocketError: typeof Windows$Networking$Sockets$SocketError,
    WebSocketError: typeof Windows$Networking$Sockets$WebSocketError
  };

  declare export var Windows$Networking$Sockets$ControlChannelTriggerStatus: {|
    +hardwareSlotRequested: 0, // 0
    +softwareSlotAllocated: 1, // 1
    +hardwareSlotAllocated: 2, // 2
    +policyError: 3, // 3
    +systemError: 4, // 4
    +transportDisconnected: 5, // 5
    +serviceUnavailable: 6 // 6
  |};

  declare export var Windows$Networking$Sockets$ControlChannelTriggerResourceType: {|
    +requestSoftwareSlot: 0, // 0
    +requestHardwareSlot: 1 // 1
  |};

  declare export var Windows$Networking$Sockets$ControlChannelTriggerResetReason: {|
    +fastUserSwitched: 0, // 0
    +lowPowerExit: 1 // 1
  |};

  declare export type Windows$Networking$Sockets$IControlChannelTrigger = {
    controlChannelTriggerId: string,
    currentKeepAliveIntervalInMinutes: number,
    keepAliveTrigger: Windows$ApplicationModel$Background$IBackgroundTrigger,
    pushNotificationTrigger: Windows$ApplicationModel$Background$IBackgroundTrigger,
    serverKeepAliveIntervalInMinutes: number,
    transportObject: any,
    usingTransport(transport: any): void,
    waitForPushEnabled(): $Values<
      typeof Windows$Networking$Sockets$ControlChannelTriggerStatus
    >,
    decreaseNetworkKeepAliveInterval(): void,
    flushTransport(): void
  } & Windows$Foundation$IClosable;

  declare export interface Windows$Networking$Sockets$IControlChannelTriggerFactory {
    createControlChannelTrigger(
      channelId: string,
      serverKeepAliveIntervalInMinutes: number
    ): Windows$Networking$Sockets$ControlChannelTrigger;
    createControlChannelTrigger(
      channelId: string,
      serverKeepAliveIntervalInMinutes: number,
      resourceRequestType: $Values<
        typeof Windows$Networking$Sockets$ControlChannelTriggerResourceType
      >
    ): Windows$Networking$Sockets$ControlChannelTrigger;
  }

  declare export class Windows$Networking$Sockets$ControlChannelTrigger
    mixins Windows$Networking$Sockets$IControlChannelTrigger,
      Windows$Foundation$IClosable {
    constructor(
      channelId: string,
      serverKeepAliveIntervalInMinutes: number
    ): this;
    constructor(
      channelId: string,
      serverKeepAliveIntervalInMinutes: number,
      resourceRequestType: $Values<
        typeof Windows$Networking$Sockets$ControlChannelTriggerResourceType
      >
    ): this;
    controlChannelTriggerId: string;
    currentKeepAliveIntervalInMinutes: number;
    keepAliveTrigger: Windows$ApplicationModel$Background$IBackgroundTrigger;
    pushNotificationTrigger: Windows$ApplicationModel$Background$IBackgroundTrigger;
    serverKeepAliveIntervalInMinutes: number;
    transportObject: any;
    usingTransport(transport: any): void;
    waitForPushEnabled(): $Values<
      typeof Windows$Networking$Sockets$ControlChannelTriggerStatus
    >;
    decreaseNetworkKeepAliveInterval(): void;
    flushTransport(): void;
    dispose(): void;
    close(): void;
  }

  declare export interface Windows$Networking$Sockets$IControlChannelTriggerEventDetails {
    controlChannelTrigger: Windows$Networking$Sockets$ControlChannelTrigger;
  }

  declare export interface Windows$Networking$Sockets$IControlChannelTriggerResetEventDetails {
    hardwareSlotReset: boolean;
    resetReason: $Values<
      typeof Windows$Networking$Sockets$ControlChannelTriggerResetReason
    >;
    softwareSlotReset: boolean;
  }

  declare export var Windows$Networking$Sockets$SocketMessageType: {|
    +binary: 0, // 0
    +utf8: 1 // 1
  |};

  declare export var Windows$Networking$Sockets$SocketProtectionLevel: {|
    +plainSocket: 0, // 0
    +ssl: 1, // 1
    +sslAllowNullEncryption: 2 // 2
  |};

  declare export var Windows$Networking$Sockets$SocketQualityOfService: {|
    +normal: 0, // 0
    +lowLatency: 1 // 1
  |};

  declare export var Windows$Networking$Sockets$SocketErrorStatus: {|
    +unknown: 0, // 0
    +operationAborted: 1, // 1
    +httpInvalidServerResponse: 2, // 2
    +connectionTimedOut: 3, // 3
    +addressFamilyNotSupported: 4, // 4
    +socketTypeNotSupported: 5, // 5
    +hostNotFound: 6, // 6
    +noDataRecordOfRequestedType: 7, // 7
    +nonAuthoritativeHostNotFound: 8, // 8
    +classTypeNotFound: 9, // 9
    +addressAlreadyInUse: 10, // 10
    +cannotAssignRequestedAddress: 11, // 11
    +connectionRefused: 12, // 12
    +networkIsUnreachable: 13, // 13
    +unreachableHost: 14, // 14
    +networkIsDown: 15, // 15
    +networkDroppedConnectionOnReset: 16, // 16
    +softwareCausedConnectionAbort: 17, // 17
    +connectionResetByPeer: 18, // 18
    +hostIsDown: 19, // 19
    +noAddressesFound: 20, // 20
    +tooManyOpenFiles: 21, // 21
    +messageTooLong: 22, // 22
    +certificateExpired: 23, // 23
    +certificateUntrustedRoot: 24, // 24
    +certificateCommonNameIsIncorrect: 25, // 25
    +certificateWrongUsage: 26, // 26
    +certificateRevoked: 27, // 27
    +certificateNoRevocationCheck: 28, // 28
    +certificateRevocationServerOffline: 29, // 29
    +certificateIsInvalid: 30 // 30
  |};

  declare export interface Windows$Networking$Sockets$RoundTripTimeStatistics {
    variance: number;
    max: number;
    min: number;
    sum: number;
  }

  declare export interface Windows$Networking$Sockets$BandwidthStatistics {
    outboundBitsPerSecond: number;
    inboundBitsPerSecond: number;
    outboundBitsPerSecondInstability: number;
    inboundBitsPerSecondInstability: number;
    outboundBandwidthPeaked: boolean;
    inboundBandwidthPeaked: boolean;
  }

  declare export interface Windows$Networking$Sockets$IDatagramSocketMessageReceivedEventArgs {
    localAddress: Windows$Networking$HostName;
    remoteAddress: Windows$Networking$HostName;
    remotePort: string;
    getDataReader(): Windows$Storage$Streams$DataReader;
    getDataStream(): Windows$Storage$Streams$IInputStream;
  }

  declare export interface Windows$Networking$Sockets$IMessageWebSocketMessageReceivedEventArgs {
    messageType: $Values<typeof Windows$Networking$Sockets$SocketMessageType>;
    getDataReader(): Windows$Storage$Streams$DataReader;
    getDataStream(): Windows$Storage$Streams$IInputStream;
  }

  declare export interface Windows$Networking$Sockets$IWebSocketClosedEventArgs {
    code: number;
    reason: string;
  }

  declare export interface Windows$Networking$Sockets$IDatagramSocketInformation {
    localAddress: Windows$Networking$HostName;
    localPort: string;
    remoteAddress: Windows$Networking$HostName;
    remotePort: string;
  }

  declare export interface Windows$Networking$Sockets$IDatagramSocketControl {
    outboundUnicastHopLimit: number;
    qualityOfService: $Values<
      typeof Windows$Networking$Sockets$SocketQualityOfService
    >;
  }

  declare export interface Windows$Networking$Sockets$IDatagramSocketStatics {
    getEndpointPairsAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$EndpointPair>
    >;
    getEndpointPairsAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string,
      sortOptions: $Values<typeof Windows$Networking$HostNameSortOptions>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$EndpointPair>
    >;
  }

  declare export type Windows$Networking$Sockets$IDatagramSocket = {
    control: Windows$Networking$Sockets$DatagramSocketControl,
    information: Windows$Networking$Sockets$DatagramSocketInformation,
    outputStream: Windows$Storage$Streams$IOutputStream,
    connectAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string
    ): Windows$Foundation$IAsyncAction,
    connectAsync(
      endpointPair: Windows$Networking$EndpointPair
    ): Windows$Foundation$IAsyncAction,
    bindServiceNameAsync(
      localServiceName: string
    ): Windows$Foundation$IAsyncAction,
    bindEndpointAsync(
      localHostName: Windows$Networking$HostName,
      localServiceName: string
    ): Windows$Foundation$IAsyncAction,
    joinMulticastGroup(host: Windows$Networking$HostName): void,
    getOutputStreamAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IOutputStream>,
    getOutputStreamAsync(
      endpointPair: Windows$Networking$EndpointPair
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IOutputStream>,
    onmessagereceived: any
  } & Windows$Foundation$IClosable;

  declare export class Windows$Networking$Sockets$DatagramSocketControl
    mixins Windows$Networking$Sockets$IDatagramSocketControl {
    outboundUnicastHopLimit: number;
    qualityOfService: $Values<
      typeof Windows$Networking$Sockets$SocketQualityOfService
    >;
  }

  declare export class Windows$Networking$Sockets$DatagramSocketInformation
    mixins Windows$Networking$Sockets$IDatagramSocketInformation {
    localAddress: Windows$Networking$HostName;
    localPort: string;
    remoteAddress: Windows$Networking$HostName;
    remotePort: string;
  }

  declare export class Windows$Networking$Sockets$DatagramSocket
    mixins Windows$Networking$Sockets$IDatagramSocket,
      Windows$Foundation$IClosable {
    control: Windows$Networking$Sockets$DatagramSocketControl;
    information: Windows$Networking$Sockets$DatagramSocketInformation;
    outputStream: Windows$Storage$Streams$IOutputStream;
    connectAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string
    ): Windows$Foundation$IAsyncAction;
    connectAsync(
      endpointPair: Windows$Networking$EndpointPair
    ): Windows$Foundation$IAsyncAction;
    bindServiceNameAsync(
      localServiceName: string
    ): Windows$Foundation$IAsyncAction;
    bindEndpointAsync(
      localHostName: Windows$Networking$HostName,
      localServiceName: string
    ): Windows$Foundation$IAsyncAction;
    joinMulticastGroup(host: Windows$Networking$HostName): void;
    getOutputStreamAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IOutputStream>;
    getOutputStreamAsync(
      endpointPair: Windows$Networking$EndpointPair
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IOutputStream>;
    onmessagereceived: any;
    dispose(): void;
    static getEndpointPairsAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$EndpointPair>
    >;
    static getEndpointPairsAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string,
      sortOptions: $Values<typeof Windows$Networking$HostNameSortOptions>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Networking$EndpointPair>
    >;
    close(): void;
  }

  declare export class Windows$Networking$Sockets$DatagramSocketMessageReceivedEventArgs
    mixins Windows$Networking$Sockets$IDatagramSocketMessageReceivedEventArgs {
    localAddress: Windows$Networking$HostName;
    remoteAddress: Windows$Networking$HostName;
    remotePort: string;
    getDataReader(): Windows$Storage$Streams$DataReader;
    getDataStream(): Windows$Storage$Streams$IInputStream;
  }

  declare export interface Windows$Networking$Sockets$IStreamSocketInformation {
    bandwidthStatistics: Windows$Networking$Sockets$BandwidthStatistics;
    localAddress: Windows$Networking$HostName;
    localPort: string;
    protectionLevel: $Values<
      typeof Windows$Networking$Sockets$SocketProtectionLevel
    >;
    remoteAddress: Windows$Networking$HostName;
    remoteHostName: Windows$Networking$HostName;
    remotePort: string;
    remoteServiceName: string;
    roundTripTimeStatistics: Windows$Networking$Sockets$RoundTripTimeStatistics;
    sessionKey: Windows$Storage$Streams$IBuffer;
  }

  declare export interface Windows$Networking$Sockets$IStreamSocketControl {
    keepAlive: boolean;
    noDelay: boolean;
    outboundBufferSizeInBytes: number;
    outboundUnicastHopLimit: number;
    qualityOfService: $Values<
      typeof Windows$Networking$Sockets$SocketQualityOfService
    >;
  }

  declare export type Windows$Networking$Sockets$IStreamSocket = {
    control: Windows$Networking$Sockets$StreamSocketControl,
    information: Windows$Networking$Sockets$StreamSocketInformation,
    inputStream: Windows$Storage$Streams$IInputStream,
    outputStream: Windows$Storage$Streams$IOutputStream,
    connectAsync(
      endpointPair: Windows$Networking$EndpointPair
    ): Windows$Foundation$IAsyncAction,
    connectAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string
    ): Windows$Foundation$IAsyncAction,
    connectAsync(
      endpointPair: Windows$Networking$EndpointPair,
      protectionLevel: $Values<
        typeof Windows$Networking$Sockets$SocketProtectionLevel
      >
    ): Windows$Foundation$IAsyncAction,
    connectAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string,
      protectionLevel: $Values<
        typeof Windows$Networking$Sockets$SocketProtectionLevel
      >
    ): Windows$Foundation$IAsyncAction,
    upgradeToSslAsync(
      protectionLevel: $Values<
        typeof Windows$Networking$Sockets$SocketProtectionLevel
      >,
      validationHostName: Windows$Networking$HostName
    ): Windows$Foundation$IAsyncAction
  } & Windows$Foundation$IClosable;

  declare export class Windows$Networking$Sockets$StreamSocketControl
    mixins Windows$Networking$Sockets$IStreamSocketControl {
    keepAlive: boolean;
    noDelay: boolean;
    outboundBufferSizeInBytes: number;
    outboundUnicastHopLimit: number;
    qualityOfService: $Values<
      typeof Windows$Networking$Sockets$SocketQualityOfService
    >;
  }

  declare export class Windows$Networking$Sockets$StreamSocketInformation
    mixins Windows$Networking$Sockets$IStreamSocketInformation {
    bandwidthStatistics: Windows$Networking$Sockets$BandwidthStatistics;
    localAddress: Windows$Networking$HostName;
    localPort: string;
    protectionLevel: $Values<
      typeof Windows$Networking$Sockets$SocketProtectionLevel
    >;
    remoteAddress: Windows$Networking$HostName;
    remoteHostName: Windows$Networking$HostName;
    remotePort: string;
    remoteServiceName: string;
    roundTripTimeStatistics: Windows$Networking$Sockets$RoundTripTimeStatistics;
    sessionKey: Windows$Storage$Streams$IBuffer;
  }

  declare export interface Windows$Networking$Sockets$IStreamSocketListenerControl {
    qualityOfService: $Values<
      typeof Windows$Networking$Sockets$SocketQualityOfService
    >;
  }

  declare export interface Windows$Networking$Sockets$IStreamSocketListenerInformation {
    localPort: string;
  }

  declare export interface Windows$Networking$Sockets$IStreamSocketListenerConnectionReceivedEventArgs {
    socket: Windows$Networking$Sockets$StreamSocket;
  }

  declare export class Windows$Networking$Sockets$StreamSocket
    mixins Windows$Networking$Sockets$IStreamSocket,
      Windows$Foundation$IClosable {
    control: Windows$Networking$Sockets$StreamSocketControl;
    information: Windows$Networking$Sockets$StreamSocketInformation;
    inputStream: Windows$Storage$Streams$IInputStream;
    outputStream: Windows$Storage$Streams$IOutputStream;
    connectAsync(
      endpointPair: Windows$Networking$EndpointPair
    ): Windows$Foundation$IAsyncAction;
    connectAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string
    ): Windows$Foundation$IAsyncAction;
    connectAsync(
      endpointPair: Windows$Networking$EndpointPair,
      protectionLevel: $Values<
        typeof Windows$Networking$Sockets$SocketProtectionLevel
      >
    ): Windows$Foundation$IAsyncAction;
    connectAsync(
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string,
      protectionLevel: $Values<
        typeof Windows$Networking$Sockets$SocketProtectionLevel
      >
    ): Windows$Foundation$IAsyncAction;
    upgradeToSslAsync(
      protectionLevel: $Values<
        typeof Windows$Networking$Sockets$SocketProtectionLevel
      >,
      validationHostName: Windows$Networking$HostName
    ): Windows$Foundation$IAsyncAction;
    dispose(): void;
    close(): void;
  }

  declare export type Windows$Networking$Sockets$IStreamSocketListener = {
    control: Windows$Networking$Sockets$StreamSocketListenerControl,
    information: Windows$Networking$Sockets$StreamSocketListenerInformation,
    bindServiceNameAsync(
      localServiceName: string
    ): Windows$Foundation$IAsyncAction,
    bindEndpointAsync(
      localHostName: Windows$Networking$HostName,
      localServiceName: string
    ): Windows$Foundation$IAsyncAction,
    onconnectionreceived: any
  } & Windows$Foundation$IClosable;

  declare export class Windows$Networking$Sockets$StreamSocketListenerControl
    mixins Windows$Networking$Sockets$IStreamSocketListenerControl {
    qualityOfService: $Values<
      typeof Windows$Networking$Sockets$SocketQualityOfService
    >;
  }

  declare export class Windows$Networking$Sockets$StreamSocketListenerInformation
    mixins Windows$Networking$Sockets$IStreamSocketListenerInformation {
    localPort: string;
  }

  declare export class Windows$Networking$Sockets$StreamSocketListener
    mixins Windows$Networking$Sockets$IStreamSocketListener,
      Windows$Foundation$IClosable {
    control: Windows$Networking$Sockets$StreamSocketListenerControl;
    information: Windows$Networking$Sockets$StreamSocketListenerInformation;
    bindServiceNameAsync(
      localServiceName: string
    ): Windows$Foundation$IAsyncAction;
    bindEndpointAsync(
      localHostName: Windows$Networking$HostName,
      localServiceName: string
    ): Windows$Foundation$IAsyncAction;
    onconnectionreceived: any;
    dispose(): void;
    close(): void;
  }

  declare export class Windows$Networking$Sockets$StreamSocketListenerConnectionReceivedEventArgs
    mixins Windows$Networking$Sockets$IStreamSocketListenerConnectionReceivedEventArgs {
    socket: Windows$Networking$Sockets$StreamSocket;
  }

  declare export interface Windows$Networking$Sockets$IWebSocketControl {
    outboundBufferSizeInBytes: number;
    proxyCredential: Windows$Security$Credentials$PasswordCredential;
    serverCredential: Windows$Security$Credentials$PasswordCredential;
    supportedProtocols: Windows$Foundation$Collections$IVector<string>;
  }

  declare export interface Windows$Networking$Sockets$IWebSocketInformation {
    bandwidthStatistics: Windows$Networking$Sockets$BandwidthStatistics;
    localAddress: Windows$Networking$HostName;
    protocol: string;
  }

  declare export type Windows$Networking$Sockets$IWebSocket = {
    outputStream: Windows$Storage$Streams$IOutputStream,
    connectAsync(uri: Windows$Foundation$Uri): Windows$Foundation$IAsyncAction,
    setRequestHeader(headerName: string, headerValue: string): void,
    onclosed: any,
    close(): void,
    close(code: number, reason: string): void
  } & Windows$Foundation$IClosable;

  declare export class Windows$Networking$Sockets$WebSocketClosedEventArgs
    mixins Windows$Networking$Sockets$IWebSocketClosedEventArgs {
    code: number;
    reason: string;
  }

  declare export type Windows$Networking$Sockets$IMessageWebSocketControl = {
    maxMessageSize: number,
    messageType: $Values<typeof Windows$Networking$Sockets$SocketMessageType>
  } & Windows$Networking$Sockets$IWebSocketControl;

  declare export type Windows$Networking$Sockets$IMessageWebSocket = {
    control: Windows$Networking$Sockets$MessageWebSocketControl,
    information: Windows$Networking$Sockets$MessageWebSocketInformation,
    onmessagereceived: any,
    close(): void,
    close(code: number, reason: string): void
  } & Windows$Networking$Sockets$IWebSocket &
    Windows$Foundation$IClosable;

  declare export class Windows$Networking$Sockets$MessageWebSocketControl
    mixins Windows$Networking$Sockets$IMessageWebSocketControl,
      Windows$Networking$Sockets$IWebSocketControl {
    maxMessageSize: number;
    messageType: $Values<typeof Windows$Networking$Sockets$SocketMessageType>;
    outboundBufferSizeInBytes: number;
    proxyCredential: Windows$Security$Credentials$PasswordCredential;
    serverCredential: Windows$Security$Credentials$PasswordCredential;
    supportedProtocols: Windows$Foundation$Collections$IVector<string>;
  }

  declare export class Windows$Networking$Sockets$MessageWebSocketInformation
    mixins Windows$Networking$Sockets$IWebSocketInformation {
    bandwidthStatistics: Windows$Networking$Sockets$BandwidthStatistics;
    localAddress: Windows$Networking$HostName;
    protocol: string;
  }

  declare export class Windows$Networking$Sockets$MessageWebSocket
    mixins Windows$Networking$Sockets$IMessageWebSocket,
      Windows$Networking$Sockets$IWebSocket,
      Windows$Foundation$IClosable {
    control: Windows$Networking$Sockets$MessageWebSocketControl;
    information: Windows$Networking$Sockets$MessageWebSocketInformation;
    outputStream: Windows$Storage$Streams$IOutputStream;
    onmessagereceived: any;
    connectAsync(uri: Windows$Foundation$Uri): Windows$Foundation$IAsyncAction;
    setRequestHeader(headerName: string, headerValue: string): void;
    onclosed: any;
    close(code: number, reason: string): void;
    dispose(): void;
    close(): void;
  }

  declare export class Windows$Networking$Sockets$MessageWebSocketMessageReceivedEventArgs
    mixins Windows$Networking$Sockets$IMessageWebSocketMessageReceivedEventArgs {
    messageType: $Values<typeof Windows$Networking$Sockets$SocketMessageType>;
    getDataReader(): Windows$Storage$Streams$DataReader;
    getDataStream(): Windows$Storage$Streams$IInputStream;
  }

  declare export type Windows$Networking$Sockets$IStreamWebSocketControl = {
    noDelay: boolean
  } & Windows$Networking$Sockets$IWebSocketControl;

  declare export type Windows$Networking$Sockets$IStreamWebSocket = {
    control: Windows$Networking$Sockets$StreamWebSocketControl,
    information: Windows$Networking$Sockets$StreamWebSocketInformation,
    inputStream: Windows$Storage$Streams$IInputStream,
    close(): void,
    close(code: number, reason: string): void
  } & Windows$Networking$Sockets$IWebSocket &
    Windows$Foundation$IClosable;

  declare export class Windows$Networking$Sockets$StreamWebSocketControl
    mixins Windows$Networking$Sockets$IStreamWebSocketControl,
      Windows$Networking$Sockets$IWebSocketControl {
    noDelay: boolean;
    outboundBufferSizeInBytes: number;
    proxyCredential: Windows$Security$Credentials$PasswordCredential;
    serverCredential: Windows$Security$Credentials$PasswordCredential;
    supportedProtocols: Windows$Foundation$Collections$IVector<string>;
  }

  declare export class Windows$Networking$Sockets$StreamWebSocketInformation
    mixins Windows$Networking$Sockets$IWebSocketInformation {
    bandwidthStatistics: Windows$Networking$Sockets$BandwidthStatistics;
    localAddress: Windows$Networking$HostName;
    protocol: string;
  }

  declare export interface Windows$Networking$Sockets$ISocketErrorStatics {
    getStatus(
      hresult: number
    ): $Values<typeof Windows$Networking$Sockets$SocketErrorStatus>;
  }

  declare export interface Windows$Networking$Sockets$IWebSocketErrorStatics {
    getStatus(hresult: number): $Values<typeof Windows$Web$WebErrorStatus>;
  }

  declare export class Windows$Networking$Sockets$StreamWebSocket
    mixins Windows$Networking$Sockets$IStreamWebSocket,
      Windows$Networking$Sockets$IWebSocket,
      Windows$Foundation$IClosable {
    control: Windows$Networking$Sockets$StreamWebSocketControl;
    information: Windows$Networking$Sockets$StreamWebSocketInformation;
    inputStream: Windows$Storage$Streams$IInputStream;
    outputStream: Windows$Storage$Streams$IOutputStream;
    connectAsync(uri: Windows$Foundation$Uri): Windows$Foundation$IAsyncAction;
    setRequestHeader(headerName: string, headerValue: string): void;
    onclosed: any;
    close(code: number, reason: string): void;
    dispose(): void;
    close(): void;
  }

  declare export class Windows$Networking$Sockets$WebSocketKeepAlive
    mixins Windows$ApplicationModel$Background$IBackgroundTask {
    run(
      taskInstance: Windows$ApplicationModel$Background$IBackgroundTaskInstance
    ): void;
  }

  declare export class Windows$Networking$Sockets$SocketError {
    static getStatus(
      hresult: number
    ): $Values<typeof Windows$Networking$Sockets$SocketErrorStatus>;
  }

  declare export class Windows$Networking$Sockets$WebSocketError {
    static getStatus(
      hresult: number
    ): $Values<typeof Windows$Web$WebErrorStatus>;
  }

  declare export var Windows$Networking$HostNameSortOptions: {|
    +none: 0, // 0
    +optimizeForLongConnections: 1 // 1
  |};

  declare export var Windows$Networking$HostNameType: {|
    +domainName: 0, // 0
    +ipv4: 1, // 1
    +ipv6: 2, // 2
    +bluetooth: 3 // 3
  |};

  declare export interface Windows$Networking$IHostNameStatics {
    compare(value1: string, value2: string): number;
  }

  declare export interface Windows$Networking$IHostName {
    canonicalName: string;
    displayName: string;
    iPInformation: Windows$Networking$Connectivity$IPInformation;
    rawName: string;
    type: $Values<typeof Windows$Networking$HostNameType>;
    isEqual(hostName: Windows$Networking$HostName): boolean;
  }

  declare export class Windows$Networking$HostName
    mixins Windows$Networking$IHostName {
    constructor(hostName: string): this;
    canonicalName: string;
    displayName: string;
    iPInformation: Windows$Networking$Connectivity$IPInformation;
    rawName: string;
    type: $Values<typeof Windows$Networking$HostNameType>;
    isEqual(hostName: Windows$Networking$HostName): boolean;
    static compare(value1: string, value2: string): number;
  }

  declare export interface Windows$Networking$IHostNameFactory {
    createHostName(hostName: string): Windows$Networking$HostName;
  }

  declare export interface Windows$Networking$IEndpointPair {
    localHostName: Windows$Networking$HostName;
    localServiceName: string;
    remoteHostName: Windows$Networking$HostName;
    remoteServiceName: string;
  }

  declare export interface Windows$Networking$IEndpointPairFactory {
    createEndpointPair(
      localHostName: Windows$Networking$HostName,
      localServiceName: string,
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string
    ): Windows$Networking$EndpointPair;
  }

  declare export class Windows$Networking$EndpointPair
    mixins Windows$Networking$IEndpointPair {
    constructor(
      localHostName: Windows$Networking$HostName,
      localServiceName: string,
      remoteHostName: Windows$Networking$HostName,
      remoteServiceName: string
    ): this;
    localHostName: Windows$Networking$HostName;
    localServiceName: string;
    remoteHostName: Windows$Networking$HostName;
    remoteServiceName: string;
  }

  declare var npm$namespace$Windows$Networking$Connectivity: {
    NetworkCostType: typeof Windows$Networking$Connectivity$NetworkCostType,
    NetworkConnectivityLevel: typeof Windows$Networking$Connectivity$NetworkConnectivityLevel,
    NetworkTypes: typeof Windows$Networking$Connectivity$NetworkTypes,
    RoamingStates: typeof Windows$Networking$Connectivity$RoamingStates,
    NetworkAuthenticationType: typeof Windows$Networking$Connectivity$NetworkAuthenticationType,
    NetworkEncryptionType: typeof Windows$Networking$Connectivity$NetworkEncryptionType,
    IPInformation: typeof Windows$Networking$Connectivity$IPInformation,
    DataPlanUsage: typeof Windows$Networking$Connectivity$DataPlanUsage,
    ConnectionCost: typeof Windows$Networking$Connectivity$ConnectionCost,
    DataPlanStatus: typeof Windows$Networking$Connectivity$DataPlanStatus,
    NetworkAdapter: typeof Windows$Networking$Connectivity$NetworkAdapter,
    DataUsage: typeof Windows$Networking$Connectivity$DataUsage,
    NetworkSecuritySettings: typeof Windows$Networking$Connectivity$NetworkSecuritySettings,
    LanIdentifierData: typeof Windows$Networking$Connectivity$LanIdentifierData,
    ConnectionProfile: typeof Windows$Networking$Connectivity$ConnectionProfile,
    LanIdentifier: typeof Windows$Networking$Connectivity$LanIdentifier,
    ProxyConfiguration: typeof Windows$Networking$Connectivity$ProxyConfiguration,
    NetworkItem: typeof Windows$Networking$Connectivity$NetworkItem,
    NetworkInformation: typeof Windows$Networking$Connectivity$NetworkInformation
  };
  declare export class Windows$Networking$Connectivity$IPInformation
    mixins Windows$Networking$Connectivity$IIPInformation {
    networkAdapter: Windows$Networking$Connectivity$NetworkAdapter;
    prefixLength: number;
  }

  declare export var Windows$Networking$Connectivity$NetworkCostType: {|
    +unknown: 0, // 0
    +unrestricted: 1, // 1
    +fixed: 2, // 2
    +variable: 3 // 3
  |};

  declare export var Windows$Networking$Connectivity$NetworkConnectivityLevel: {|
    +none: 0, // 0
    +localAccess: 1, // 1
    +constrainedInternetAccess: 2, // 2
    +internetAccess: 3 // 3
  |};

  declare export var Windows$Networking$Connectivity$NetworkTypes: {|
    +none: 0, // 0
    +internet: 1, // 1
    +privateNetwork: 2 // 2
  |};

  declare export var Windows$Networking$Connectivity$RoamingStates: {|
    +none: 0, // 0
    +notRoaming: 1, // 1
    +roaming: 2 // 2
  |};

  declare export var Windows$Networking$Connectivity$NetworkAuthenticationType: {|
    +none: 0, // 0
    +unknown: 1, // 1
    +open80211: 2, // 2
    +sharedKey80211: 3, // 3
    +wpa: 4, // 4
    +wpaPsk: 5, // 5
    +wpaNone: 6, // 6
    +rsna: 7, // 7
    +rsnaPsk: 8, // 8
    +ihv: 9 // 9
  |};

  declare export var Windows$Networking$Connectivity$NetworkEncryptionType: {|
    +none: 0, // 0
    +unknown: 1, // 1
    +wep: 2, // 2
    +wep40: 3, // 3
    +wep104: 4, // 4
    +tkip: 5, // 5
    +ccmp: 6, // 6
    +wpaUseGroup: 7, // 7
    +rsnUseGroup: 8, // 8
    +ihv: 9 // 9
  |};

  declare export interface Windows$Networking$Connectivity$IDataUsage {
    bytesReceived: number;
    bytesSent: number;
  }

  declare export interface Windows$Networking$Connectivity$IDataPlanUsage {
    lastSyncTime: Date;
    megabytesUsed: number;
  }

  declare export interface Windows$Networking$Connectivity$IDataPlanStatus {
    dataLimitInMegabytes: number;
    dataPlanUsage: Windows$Networking$Connectivity$DataPlanUsage;
    inboundBitsPerSecond: number;
    maxTransferSizeInMegabytes: number;
    nextBillingCycle: Date;
    outboundBitsPerSecond: number;
  }

  declare export class Windows$Networking$Connectivity$DataPlanUsage
    mixins Windows$Networking$Connectivity$IDataPlanUsage {
    lastSyncTime: Date;
    megabytesUsed: number;
  }

  declare export interface Windows$Networking$Connectivity$IConnectionCost {
    approachingDataLimit: boolean;
    networkCostType: $Values<
      typeof Windows$Networking$Connectivity$NetworkCostType
    >;
    overDataLimit: boolean;
    roaming: boolean;
  }

  declare export interface Windows$Networking$Connectivity$INetworkSecuritySettings {
    networkAuthenticationType: $Values<
      typeof Windows$Networking$Connectivity$NetworkAuthenticationType
    >;
    networkEncryptionType: $Values<
      typeof Windows$Networking$Connectivity$NetworkEncryptionType
    >;
  }

  declare export interface Windows$Networking$Connectivity$IConnectionProfile {
    networkAdapter: Windows$Networking$Connectivity$NetworkAdapter;
    networkSecuritySettings: Windows$Networking$Connectivity$NetworkSecuritySettings;
    profileName: string;
    getNetworkConnectivityLevel(): $Values<
      typeof Windows$Networking$Connectivity$NetworkConnectivityLevel
    >;
    getNetworkNames(): Windows$Foundation$Collections$IVectorView<string>;
    getConnectionCost(): Windows$Networking$Connectivity$ConnectionCost;
    getDataPlanStatus(): Windows$Networking$Connectivity$DataPlanStatus;
    getLocalUsage(
      StartTime: Date,
      EndTime: Date
    ): Windows$Networking$Connectivity$DataUsage;
    getLocalUsage(
      StartTime: Date,
      EndTime: Date,
      States: $Values<typeof Windows$Networking$Connectivity$RoamingStates>
    ): Windows$Networking$Connectivity$DataUsage;
    getSignalBars(): Windows$Foundation$IReference<number>;
  }

  declare export class Windows$Networking$Connectivity$ConnectionCost
    mixins Windows$Networking$Connectivity$IConnectionCost {
    approachingDataLimit: boolean;
    networkCostType: $Values<
      typeof Windows$Networking$Connectivity$NetworkCostType
    >;
    overDataLimit: boolean;
    roaming: boolean;
  }

  declare export class Windows$Networking$Connectivity$DataPlanStatus
    mixins Windows$Networking$Connectivity$IDataPlanStatus {
    dataLimitInMegabytes: number;
    dataPlanUsage: Windows$Networking$Connectivity$DataPlanUsage;
    inboundBitsPerSecond: number;
    maxTransferSizeInMegabytes: number;
    nextBillingCycle: Date;
    outboundBitsPerSecond: number;
  }

  declare export class Windows$Networking$Connectivity$NetworkAdapter
    mixins Windows$Networking$Connectivity$INetworkAdapter {
    ianaInterfaceType: number;
    inboundMaxBitsPerSecond: number;
    networkAdapterId: string;
    networkItem: Windows$Networking$Connectivity$NetworkItem;
    outboundMaxBitsPerSecond: number;
    getConnectedProfileAsync(): Windows$Foundation$IAsyncOperation<Windows$Networking$Connectivity$ConnectionProfile>;
  }

  declare export class Windows$Networking$Connectivity$DataUsage
    mixins Windows$Networking$Connectivity$IDataUsage {
    bytesReceived: number;
    bytesSent: number;
  }

  declare export class Windows$Networking$Connectivity$NetworkSecuritySettings
    mixins Windows$Networking$Connectivity$INetworkSecuritySettings {
    networkAuthenticationType: $Values<
      typeof Windows$Networking$Connectivity$NetworkAuthenticationType
    >;
    networkEncryptionType: $Values<
      typeof Windows$Networking$Connectivity$NetworkEncryptionType
    >;
  }

  declare export interface Windows$Networking$Connectivity$ILanIdentifierData {
    type: number;
    value: Windows$Foundation$Collections$IVectorView<number>;
  }

  declare export interface Windows$Networking$Connectivity$ILanIdentifier {
    infrastructureId: Windows$Networking$Connectivity$LanIdentifierData;
    networkAdapterId: string;
    portId: Windows$Networking$Connectivity$LanIdentifierData;
  }

  declare export class Windows$Networking$Connectivity$LanIdentifierData
    mixins Windows$Networking$Connectivity$ILanIdentifierData {
    type: number;
    value: Windows$Foundation$Collections$IVectorView<number>;
  }

  declare export interface Windows$Networking$Connectivity$NetworkStatusChangedEventHandler {
    (sender: any): void;
  }

  declare export interface Windows$Networking$Connectivity$INetworkInformationStatics {
    getConnectionProfiles(): Windows$Foundation$Collections$IVectorView<Windows$Networking$Connectivity$ConnectionProfile>;
    getInternetConnectionProfile(): Windows$Networking$Connectivity$ConnectionProfile;
    getLanIdentifiers(): Windows$Foundation$Collections$IVectorView<Windows$Networking$Connectivity$LanIdentifier>;
    getHostNames(): Windows$Foundation$Collections$IVectorView<Windows$Networking$HostName>;
    getProxyConfigurationAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$Connectivity$ProxyConfiguration>;
    getSortedEndpointPairs(
      destinationList: Windows$Foundation$Collections$IIterable<Windows$Networking$EndpointPair>,
      sortOptions: $Values<typeof Windows$Networking$HostNameSortOptions>
    ): Windows$Foundation$Collections$IVectorView<Windows$Networking$EndpointPair>;
    onnetworkstatuschanged: any;
  }

  declare export class Windows$Networking$Connectivity$ConnectionProfile
    mixins Windows$Networking$Connectivity$IConnectionProfile {
    networkAdapter: Windows$Networking$Connectivity$NetworkAdapter;
    networkSecuritySettings: Windows$Networking$Connectivity$NetworkSecuritySettings;
    profileName: string;
    getNetworkConnectivityLevel(): $Values<
      typeof Windows$Networking$Connectivity$NetworkConnectivityLevel
    >;
    getNetworkNames(): Windows$Foundation$Collections$IVectorView<string>;
    getConnectionCost(): Windows$Networking$Connectivity$ConnectionCost;
    getDataPlanStatus(): Windows$Networking$Connectivity$DataPlanStatus;
    getLocalUsage(
      StartTime: Date,
      EndTime: Date
    ): Windows$Networking$Connectivity$DataUsage;
    getLocalUsage(
      StartTime: Date,
      EndTime: Date,
      States: $Values<typeof Windows$Networking$Connectivity$RoamingStates>
    ): Windows$Networking$Connectivity$DataUsage;
    getSignalBars(): Windows$Foundation$IReference<number>;
  }

  declare export class Windows$Networking$Connectivity$LanIdentifier
    mixins Windows$Networking$Connectivity$ILanIdentifier {
    infrastructureId: Windows$Networking$Connectivity$LanIdentifierData;
    networkAdapterId: string;
    portId: Windows$Networking$Connectivity$LanIdentifierData;
  }

  declare export class Windows$Networking$Connectivity$ProxyConfiguration
    mixins Windows$Networking$Connectivity$IProxyConfiguration {
    canConnectDirectly: boolean;
    proxyUris: Windows$Foundation$Collections$IVectorView<Windows$Foundation$Uri>;
  }

  declare export interface Windows$Networking$Connectivity$INetworkItem {
    networkId: string;
    getNetworkTypes(): $Values<
      typeof Windows$Networking$Connectivity$NetworkTypes
    >;
  }

  declare export interface Windows$Networking$Connectivity$INetworkAdapter {
    ianaInterfaceType: number;
    inboundMaxBitsPerSecond: number;
    networkAdapterId: string;
    networkItem: Windows$Networking$Connectivity$NetworkItem;
    outboundMaxBitsPerSecond: number;
    getConnectedProfileAsync(): Windows$Foundation$IAsyncOperation<Windows$Networking$Connectivity$ConnectionProfile>;
  }

  declare export class Windows$Networking$Connectivity$NetworkItem
    mixins Windows$Networking$Connectivity$INetworkItem {
    networkId: string;
    getNetworkTypes(): $Values<
      typeof Windows$Networking$Connectivity$NetworkTypes
    >;
  }

  declare export interface Windows$Networking$Connectivity$IIPInformation {
    networkAdapter: Windows$Networking$Connectivity$NetworkAdapter;
    prefixLength: number;
  }

  declare export interface Windows$Networking$Connectivity$IProxyConfiguration {
    canConnectDirectly: boolean;
    proxyUris: Windows$Foundation$Collections$IVectorView<Windows$Foundation$Uri>;
  }

  declare export class Windows$Networking$Connectivity$NetworkInformation {
    static getConnectionProfiles(): Windows$Foundation$Collections$IVectorView<Windows$Networking$Connectivity$ConnectionProfile>;
    static getInternetConnectionProfile(): Windows$Networking$Connectivity$ConnectionProfile;
    static getLanIdentifiers(): Windows$Foundation$Collections$IVectorView<Windows$Networking$Connectivity$LanIdentifier>;
    static getHostNames(): Windows$Foundation$Collections$IVectorView<Windows$Networking$HostName>;
    static getProxyConfigurationAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$Connectivity$ProxyConfiguration>;
    static getSortedEndpointPairs(
      destinationList: Windows$Foundation$Collections$IIterable<Windows$Networking$EndpointPair>,
      sortOptions: $Values<typeof Windows$Networking$HostNameSortOptions>
    ): Windows$Foundation$Collections$IVectorView<Windows$Networking$EndpointPair>;
    static onnetworkstatuschanged: any;
  }

  declare var npm$namespace$Windows$Networking$PushNotifications: {
    PushNotificationType: typeof Windows$Networking$PushNotifications$PushNotificationType,
    PushNotificationChannel: typeof Windows$Networking$PushNotifications$PushNotificationChannel,
    PushNotificationReceivedEventArgs: typeof Windows$Networking$PushNotifications$PushNotificationReceivedEventArgs,
    RawNotification: typeof Windows$Networking$PushNotifications$RawNotification,
    PushNotificationChannelManager: typeof Windows$Networking$PushNotifications$PushNotificationChannelManager
  };

  declare export var Windows$Networking$PushNotifications$PushNotificationType: {|
    +toast: 0, // 0
    +tile: 1, // 1
    +badge: 2, // 2
    +raw: 3 // 3
  |};

  declare export interface Windows$Networking$PushNotifications$IPushNotificationChannelManagerStatics {
    createPushNotificationChannelForApplicationAsync(): Windows$Foundation$IAsyncOperation<Windows$Networking$PushNotifications$PushNotificationChannel>;
    createPushNotificationChannelForApplicationAsync(
      applicationId: string
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$PushNotifications$PushNotificationChannel>;
    createPushNotificationChannelForSecondaryTileAsync(
      tileId: string
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$PushNotifications$PushNotificationChannel>;
  }

  declare export class Windows$Networking$PushNotifications$PushNotificationChannel
    mixins Windows$Networking$PushNotifications$IPushNotificationChannel {
    expirationTime: Date;
    uri: string;
    close(): void;
    onpushnotificationreceived: any;
  }

  declare export interface Windows$Networking$PushNotifications$IPushNotificationChannel {
    expirationTime: Date;
    uri: string;
    close(): void;
    onpushnotificationreceived: any;
  }

  declare export class Windows$Networking$PushNotifications$PushNotificationReceivedEventArgs
    mixins Windows$Networking$PushNotifications$IPushNotificationReceivedEventArgs {
    badgeNotification: Windows$UI$Notifications$BadgeNotification;
    cancel: boolean;
    notificationType: $Values<
      typeof Windows$Networking$PushNotifications$PushNotificationType
    >;
    rawNotification: Windows$Networking$PushNotifications$RawNotification;
    tileNotification: Windows$UI$Notifications$TileNotification;
    toastNotification: Windows$UI$Notifications$ToastNotification;
  }

  declare export interface Windows$Networking$PushNotifications$IPushNotificationReceivedEventArgs {
    badgeNotification: Windows$UI$Notifications$BadgeNotification;
    cancel: boolean;
    notificationType: $Values<
      typeof Windows$Networking$PushNotifications$PushNotificationType
    >;
    rawNotification: Windows$Networking$PushNotifications$RawNotification;
    tileNotification: Windows$UI$Notifications$TileNotification;
    toastNotification: Windows$UI$Notifications$ToastNotification;
  }

  declare export class Windows$Networking$PushNotifications$RawNotification
    mixins Windows$Networking$PushNotifications$IRawNotification {
    content: string;
  }

  declare export interface Windows$Networking$PushNotifications$IRawNotification {
    content: string;
  }

  declare export class Windows$Networking$PushNotifications$PushNotificationChannelManager {
    static createPushNotificationChannelForApplicationAsync(): Windows$Foundation$IAsyncOperation<Windows$Networking$PushNotifications$PushNotificationChannel>;
    static createPushNotificationChannelForApplicationAsync(
      applicationId: string
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$PushNotifications$PushNotificationChannel>;
    static createPushNotificationChannelForSecondaryTileAsync(
      tileId: string
    ): Windows$Foundation$IAsyncOperation<Windows$Networking$PushNotifications$PushNotificationChannel>;
  }

  declare var npm$namespace$Windows$Security: {
    Authentication: typeof npm$namespace$Windows$Security$Authentication,
    Credentials: typeof npm$namespace$Windows$Security$Credentials,
    Cryptography: typeof npm$namespace$Windows$Security$Cryptography,
    ExchangeActiveSyncProvisioning: typeof npm$namespace$Windows$Security$ExchangeActiveSyncProvisioning
  };

  declare var npm$namespace$Windows$Security$Authentication: {
    OnlineId: typeof npm$namespace$Windows$Security$Authentication$OnlineId,
    Web: typeof npm$namespace$Windows$Security$Authentication$Web
  };

  declare var npm$namespace$Windows$Security$Authentication$OnlineId: {
    CredentialPromptType: typeof Windows$Security$Authentication$OnlineId$CredentialPromptType,
    OnlineIdServiceTicketRequest: typeof Windows$Security$Authentication$OnlineId$OnlineIdServiceTicketRequest,
    OnlineIdServiceTicket: typeof Windows$Security$Authentication$OnlineId$OnlineIdServiceTicket,
    UserAuthenticationOperation: typeof Windows$Security$Authentication$OnlineId$UserAuthenticationOperation,
    SignOutUserOperation: typeof Windows$Security$Authentication$OnlineId$SignOutUserOperation,
    UserIdentity: typeof Windows$Security$Authentication$OnlineId$UserIdentity,
    OnlineIdAuthenticator: typeof Windows$Security$Authentication$OnlineId$OnlineIdAuthenticator
  };

  declare export var Windows$Security$Authentication$OnlineId$CredentialPromptType: {|
    +promptIfNeeded: 0, // 0
    +retypeCredentials: 1, // 1
    +doNotPrompt: 2 // 2
  |};

  declare export interface Windows$Security$Authentication$OnlineId$IOnlineIdServiceTicketRequest {
    policy: string;
    service: string;
  }

  declare export interface Windows$Security$Authentication$OnlineId$IOnlineIdServiceTicketRequestFactory {
    createOnlineIdServiceTicketRequest(
      service: string,
      policy: string
    ): Windows$Security$Authentication$OnlineId$OnlineIdServiceTicketRequest;
    createOnlineIdServiceTicketRequest(
      service: string
    ): Windows$Security$Authentication$OnlineId$OnlineIdServiceTicketRequest;
  }

  declare export class Windows$Security$Authentication$OnlineId$OnlineIdServiceTicketRequest
    mixins Windows$Security$Authentication$OnlineId$IOnlineIdServiceTicketRequest {
    constructor(service: string, policy: string): this;
    constructor(service: string): this;
    policy: string;
    service: string;
  }

  declare export interface Windows$Security$Authentication$OnlineId$IOnlineIdServiceTicket {
    errorCode: number;
    request: Windows$Security$Authentication$OnlineId$OnlineIdServiceTicketRequest;
    value: string;
  }

  declare export interface Windows$Security$Authentication$OnlineId$IUserIdentity {
    firstName: string;
    id: string;
    isBetaAccount: boolean;
    isConfirmedPC: boolean;
    lastName: string;
    safeCustomerId: string;
    signInName: string;
    tickets: Windows$Foundation$Collections$IVectorView<Windows$Security$Authentication$OnlineId$OnlineIdServiceTicket>;
  }

  declare export class Windows$Security$Authentication$OnlineId$OnlineIdServiceTicket
    mixins Windows$Security$Authentication$OnlineId$IOnlineIdServiceTicket {
    errorCode: number;
    request: Windows$Security$Authentication$OnlineId$OnlineIdServiceTicketRequest;
    value: string;
  }

  declare export interface Windows$Security$Authentication$OnlineId$IOnlineIdAuthenticator {
    applicationId: string;
    authenticatedSafeCustomerId: string;
    canSignOut: boolean;
    authenticateUserAsync(
      request: Windows$Security$Authentication$OnlineId$OnlineIdServiceTicketRequest
    ): Windows$Security$Authentication$OnlineId$UserAuthenticationOperation;
    authenticateUserAsync(
      requests: Windows$Foundation$Collections$IIterable<Windows$Security$Authentication$OnlineId$OnlineIdServiceTicketRequest>,
      credentialPromptType: $Values<
        typeof Windows$Security$Authentication$OnlineId$CredentialPromptType
      >
    ): Windows$Security$Authentication$OnlineId$UserAuthenticationOperation;
    signOutUserAsync(): Windows$Security$Authentication$OnlineId$SignOutUserOperation;
  }

  declare export class Windows$Security$Authentication$OnlineId$UserAuthenticationOperation
    mixins Windows$Foundation$IAsyncOperation<Windows$Security$Authentication$OnlineId$UserIdentity>,
      Windows$Foundation$IAsyncInfo {
    completed: Windows$Foundation$AsyncOperationCompletedHandler<Windows$Security$Authentication$OnlineId$UserIdentity>;
    errorCode: number;
    id: number;
    status: $Values<typeof Windows$Foundation$AsyncStatus>;
    getResults(): Windows$Security$Authentication$OnlineId$UserIdentity;
    cancel(): void;
    close(): void;
    then<U>(
      success?: (
        value: Windows$Security$Authentication$OnlineId$UserIdentity
      ) => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (
        value: Windows$Security$Authentication$OnlineId$UserIdentity
      ) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (
        value: Windows$Security$Authentication$OnlineId$UserIdentity
      ) => U,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (
        value: Windows$Security$Authentication$OnlineId$UserIdentity
      ) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    done<U>(
      success?: (
        value: Windows$Security$Authentication$OnlineId$UserIdentity
      ) => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ): void;
    operation: {
      completed: Windows$Foundation$AsyncOperationCompletedHandler<Windows$Security$Authentication$OnlineId$UserIdentity>,
      getResults(): Windows$Security$Authentication$OnlineId$UserIdentity
    };
  }

  declare export class Windows$Security$Authentication$OnlineId$SignOutUserOperation
    mixins Windows$Foundation$IAsyncAction, Windows$Foundation$IAsyncInfo {
    completed: Windows$Foundation$AsyncActionCompletedHandler;
    errorCode: number;
    id: number;
    status: $Values<typeof Windows$Foundation$AsyncStatus>;
    getResults(): void;
    cancel(): void;
    close(): void;
    then<U>(
      success?: () => Windows$Foundation$IPromise<U>,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: () => Windows$Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: () => U,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: () => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    done<U>(
      success?: () => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ): void;
    operation: {
      completed: Windows$Foundation$AsyncOperationCompletedHandler<any>,
      getResults(): any
    };
  }

  declare export class Windows$Security$Authentication$OnlineId$UserIdentity
    mixins Windows$Security$Authentication$OnlineId$IUserIdentity {
    firstName: string;
    id: string;
    isBetaAccount: boolean;
    isConfirmedPC: boolean;
    lastName: string;
    safeCustomerId: string;
    signInName: string;
    tickets: Windows$Foundation$Collections$IVectorView<Windows$Security$Authentication$OnlineId$OnlineIdServiceTicket>;
  }

  declare export class Windows$Security$Authentication$OnlineId$OnlineIdAuthenticator
    mixins Windows$Security$Authentication$OnlineId$IOnlineIdAuthenticator {
    applicationId: string;
    authenticatedSafeCustomerId: string;
    canSignOut: boolean;
    authenticateUserAsync(
      request: Windows$Security$Authentication$OnlineId$OnlineIdServiceTicketRequest
    ): Windows$Security$Authentication$OnlineId$UserAuthenticationOperation;
    authenticateUserAsync(
      requests: Windows$Foundation$Collections$IIterable<Windows$Security$Authentication$OnlineId$OnlineIdServiceTicketRequest>,
      credentialPromptType: $Values<
        typeof Windows$Security$Authentication$OnlineId$CredentialPromptType
      >
    ): Windows$Security$Authentication$OnlineId$UserAuthenticationOperation;
    signOutUserAsync(): Windows$Security$Authentication$OnlineId$SignOutUserOperation;
  }

  declare var npm$namespace$Windows$Security$Authentication$Web: {
    WebAuthenticationStatus: typeof Windows$Security$Authentication$Web$WebAuthenticationStatus,
    WebAuthenticationOptions: typeof Windows$Security$Authentication$Web$WebAuthenticationOptions,
    WebAuthenticationResult: typeof Windows$Security$Authentication$Web$WebAuthenticationResult,
    WebAuthenticationBroker: typeof Windows$Security$Authentication$Web$WebAuthenticationBroker
  };

  declare export var Windows$Security$Authentication$Web$WebAuthenticationStatus: {|
    +success: 0, // 0
    +userCancel: 1, // 1
    +errorHttp: 2 // 2
  |};

  declare export var Windows$Security$Authentication$Web$WebAuthenticationOptions: {|
    +none: 0, // 0
    +silentMode: 1, // 1
    +useTitle: 2, // 2
    +useHttpPost: 3, // 3
    +useCorporateNetwork: 4 // 4
  |};

  declare export interface Windows$Security$Authentication$Web$IWebAuthenticationResult {
    responseData: string;
    responseErrorDetail: number;
    responseStatus: $Values<
      typeof Windows$Security$Authentication$Web$WebAuthenticationStatus
    >;
  }

  declare export class Windows$Security$Authentication$Web$WebAuthenticationResult
    mixins Windows$Security$Authentication$Web$IWebAuthenticationResult {
    responseData: string;
    responseErrorDetail: number;
    responseStatus: $Values<
      typeof Windows$Security$Authentication$Web$WebAuthenticationStatus
    >;
  }

  declare export interface Windows$Security$Authentication$Web$IWebAuthenticationBrokerStatics {
    authenticateAsync(
      options: $Values<
        typeof Windows$Security$Authentication$Web$WebAuthenticationOptions
      >,
      requestUri: Windows$Foundation$Uri,
      callbackUri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<Windows$Security$Authentication$Web$WebAuthenticationResult>;
    authenticateAsync(
      options: $Values<
        typeof Windows$Security$Authentication$Web$WebAuthenticationOptions
      >,
      requestUri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<Windows$Security$Authentication$Web$WebAuthenticationResult>;
    authenticateAndContinue(requestUri: Windows$Foundation$Uri): void;
    authenticateAndContinue(
      requestUri: Windows$Foundation$Uri,
      callbackUri: Windows$Foundation$Uri
    ): void;
    authenticateAndContinue(
      requestUri: Windows$Foundation$Uri,
      callbackUri: Windows$Foundation$Uri,
      continuationData: Windows$Foundation$Collections$ValueSet,
      options: $Values<
        typeof Windows$Security$Authentication$Web$WebAuthenticationOptions
      >
    ): void;
    getCurrentApplicationCallbackUri(): Windows$Foundation$Uri;
  }

  declare export class Windows$Security$Authentication$Web$WebAuthenticationBroker {
    static authenticateAsync(
      options: $Values<
        typeof Windows$Security$Authentication$Web$WebAuthenticationOptions
      >,
      requestUri: Windows$Foundation$Uri,
      callbackUri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<Windows$Security$Authentication$Web$WebAuthenticationResult>;
    static authenticateAsync(
      options: $Values<
        typeof Windows$Security$Authentication$Web$WebAuthenticationOptions
      >,
      requestUri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<Windows$Security$Authentication$Web$WebAuthenticationResult>;
    static authenticateAndContinue(requestUri: Windows$Foundation$Uri): void;
    static authenticateAndContinue(
      requestUri: Windows$Foundation$Uri,
      callbackUri: Windows$Foundation$Uri
    ): void;
    static authenticateAndContinue(
      requestUri: Windows$Foundation$Uri,
      callbackUri: Windows$Foundation$Uri,
      continuationData: Windows$Foundation$Collections$ValueSet,
      options: $Values<
        typeof Windows$Security$Authentication$Web$WebAuthenticationOptions
      >
    ): void;
    static getCurrentApplicationCallbackUri(): Windows$Foundation$Uri;
  }

  declare var npm$namespace$Windows$Security$Credentials: {
    PasswordCredential: typeof Windows$Security$Credentials$PasswordCredential,
    PasswordVault: typeof Windows$Security$Credentials$PasswordVault,
    PasswordCredentialPropertyStore: typeof Windows$Security$Credentials$PasswordCredentialPropertyStore,
    UI: typeof npm$namespace$Windows$Security$Credentials$UI
  };

  declare var npm$namespace$Windows$Security$Credentials$UI: {
    AuthenticationProtocol: typeof Windows$Security$Credentials$UI$AuthenticationProtocol,
    CredentialSaveOption: typeof Windows$Security$Credentials$UI$CredentialSaveOption,
    CredentialPickerOptions: typeof Windows$Security$Credentials$UI$CredentialPickerOptions,
    CredentialPickerResults: typeof Windows$Security$Credentials$UI$CredentialPickerResults,
    CredentialPicker: typeof Windows$Security$Credentials$UI$CredentialPicker
  };

  declare export var Windows$Security$Credentials$UI$AuthenticationProtocol: {|
    +basic: 0, // 0
    +digest: 1, // 1
    +ntlm: 2, // 2
    +kerberos: 3, // 3
    +negotiate: 4, // 4
    +credSsp: 5, // 5
    +custom: 6 // 6
  |};

  declare export var Windows$Security$Credentials$UI$CredentialSaveOption: {|
    +unselected: 0, // 0
    +selected: 1, // 1
    +hidden: 2 // 2
  |};

  declare export interface Windows$Security$Credentials$UI$ICredentialPickerOptions {
    alwaysDisplayDialog: boolean;
    authenticationProtocol: $Values<
      typeof Windows$Security$Credentials$UI$AuthenticationProtocol
    >;
    callerSavesCredential: boolean;
    caption: string;
    credentialSaveOption: $Values<
      typeof Windows$Security$Credentials$UI$CredentialSaveOption
    >;
    customAuthenticationProtocol: string;
    errorCode: number;
    message: string;
    previousCredential: Windows$Storage$Streams$IBuffer;
    targetName: string;
  }

  declare export class Windows$Security$Credentials$UI$CredentialPickerOptions
    mixins Windows$Security$Credentials$UI$ICredentialPickerOptions {
    alwaysDisplayDialog: boolean;
    authenticationProtocol: $Values<
      typeof Windows$Security$Credentials$UI$AuthenticationProtocol
    >;
    callerSavesCredential: boolean;
    caption: string;
    credentialSaveOption: $Values<
      typeof Windows$Security$Credentials$UI$CredentialSaveOption
    >;
    customAuthenticationProtocol: string;
    errorCode: number;
    message: string;
    previousCredential: Windows$Storage$Streams$IBuffer;
    targetName: string;
  }

  declare export interface Windows$Security$Credentials$UI$ICredentialPickerStatics {
    pickAsync(
      options: Windows$Security$Credentials$UI$CredentialPickerOptions
    ): Windows$Foundation$IAsyncOperation<Windows$Security$Credentials$UI$CredentialPickerResults>;
    pickAsync(
      targetName: string,
      message: string
    ): Windows$Foundation$IAsyncOperation<Windows$Security$Credentials$UI$CredentialPickerResults>;
    pickAsync(
      targetName: string,
      message: string,
      caption: string
    ): Windows$Foundation$IAsyncOperation<Windows$Security$Credentials$UI$CredentialPickerResults>;
  }

  declare export class Windows$Security$Credentials$UI$CredentialPickerResults
    mixins Windows$Security$Credentials$UI$ICredentialPickerResults {
    credential: Windows$Storage$Streams$IBuffer;
    credentialDomainName: string;
    credentialPassword: string;
    credentialSaveOption: $Values<
      typeof Windows$Security$Credentials$UI$CredentialSaveOption
    >;
    credentialSaved: boolean;
    credentialUserName: string;
    errorCode: number;
  }

  declare export class Windows$Security$Credentials$UI$CredentialPicker {
    static pickAsync(
      options: Windows$Security$Credentials$UI$CredentialPickerOptions
    ): Windows$Foundation$IAsyncOperation<Windows$Security$Credentials$UI$CredentialPickerResults>;
    static pickAsync(
      targetName: string,
      message: string
    ): Windows$Foundation$IAsyncOperation<Windows$Security$Credentials$UI$CredentialPickerResults>;
    static pickAsync(
      targetName: string,
      message: string,
      caption: string
    ): Windows$Foundation$IAsyncOperation<Windows$Security$Credentials$UI$CredentialPickerResults>;
  }

  declare export interface Windows$Security$Credentials$UI$ICredentialPickerResults {
    credential: Windows$Storage$Streams$IBuffer;
    credentialDomainName: string;
    credentialPassword: string;
    credentialSaveOption: $Values<
      typeof Windows$Security$Credentials$UI$CredentialSaveOption
    >;
    credentialSaved: boolean;
    credentialUserName: string;
    errorCode: number;
  }

  declare export interface Windows$Security$Credentials$IPasswordCredential {
    password: string;
    properties: Windows$Foundation$Collections$IPropertySet;
    resource: string;
    userName: string;
    retrievePassword(): void;
  }

  declare export class Windows$Security$Credentials$PasswordCredential
    mixins Windows$Security$Credentials$IPasswordCredential {
    constructor(resource: string, userName: string, password: string): this;
    constructor(): this;
    password: string;
    properties: Windows$Foundation$Collections$IPropertySet;
    resource: string;
    userName: string;
    retrievePassword(): void;
  }

  declare export interface Windows$Security$Credentials$ICredentialFactory {
    createPasswordCredential(
      resource: string,
      userName: string,
      password: string
    ): Windows$Security$Credentials$PasswordCredential;
  }

  declare export interface Windows$Security$Credentials$IPasswordVault {
    add(credential: Windows$Security$Credentials$PasswordCredential): void;
    remove(credential: Windows$Security$Credentials$PasswordCredential): void;
    retrieve(
      resource: string,
      userName: string
    ): Windows$Security$Credentials$PasswordCredential;
    findAllByResource(
      resource: string
    ): Windows$Foundation$Collections$IVectorView<Windows$Security$Credentials$PasswordCredential>;
    findAllByUserName(
      userName: string
    ): Windows$Foundation$Collections$IVectorView<Windows$Security$Credentials$PasswordCredential>;
    retrieveAll(): Windows$Foundation$Collections$IVectorView<Windows$Security$Credentials$PasswordCredential>;
  }

  declare export class Windows$Security$Credentials$PasswordVault
    mixins Windows$Security$Credentials$IPasswordVault {
    add(credential: Windows$Security$Credentials$PasswordCredential): void;
    remove(credential: Windows$Security$Credentials$PasswordCredential): void;
    retrieve(
      resource: string,
      userName: string
    ): Windows$Security$Credentials$PasswordCredential;
    findAllByResource(
      resource: string
    ): Windows$Foundation$Collections$IVectorView<Windows$Security$Credentials$PasswordCredential>;
    findAllByUserName(
      userName: string
    ): Windows$Foundation$Collections$IVectorView<Windows$Security$Credentials$PasswordCredential>;
    retrieveAll(): Windows$Foundation$Collections$IVectorView<Windows$Security$Credentials$PasswordCredential>;
  }

  declare export class Windows$Security$Credentials$PasswordCredentialPropertyStore
    mixins Windows$Foundation$Collections$IPropertySet,
      Windows$Foundation$Collections$IObservableMap<string, any>,
      Windows$Foundation$Collections$IMap<string, any>,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      > {
    size: number;
    onmapchanged: any;
    lookup(key: string): any;
    hasKey(key: string): boolean;
    getView(): Windows$Foundation$Collections$IMapView<string, any>;
    insert(key: string, value: any): boolean;
    remove(key: string): void;
    clear(): void;
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<string, any>
    >;
  }

  declare var npm$namespace$Windows$Security$Cryptography: {
    BinaryStringEncoding: typeof Windows$Security$Cryptography$BinaryStringEncoding,
    CryptographicBuffer: typeof Windows$Security$Cryptography$CryptographicBuffer,
    Certificates: typeof npm$namespace$Windows$Security$Cryptography$Certificates,
    Core: typeof npm$namespace$Windows$Security$Cryptography$Core,
    DataProtection: typeof npm$namespace$Windows$Security$Cryptography$DataProtection
  };

  declare var npm$namespace$Windows$Security$Cryptography$Certificates: {
    EnrollKeyUsages: typeof Windows$Security$Cryptography$Certificates$EnrollKeyUsages,
    KeyProtectionLevel: typeof Windows$Security$Cryptography$Certificates$KeyProtectionLevel,
    ExportOption: typeof Windows$Security$Cryptography$Certificates$ExportOption,
    KeySize: typeof Windows$Security$Cryptography$Certificates$KeySize,
    InstallOptions: typeof Windows$Security$Cryptography$Certificates$InstallOptions,
    CertificateRequestProperties: typeof Windows$Security$Cryptography$Certificates$CertificateRequestProperties,
    CertificateEnrollmentManager: typeof Windows$Security$Cryptography$Certificates$CertificateEnrollmentManager,
    KeyAlgorithmNames: typeof Windows$Security$Cryptography$Certificates$KeyAlgorithmNames,
    KeyStorageProviderNames: typeof Windows$Security$Cryptography$Certificates$KeyStorageProviderNames
  };

  declare export var Windows$Security$Cryptography$Certificates$EnrollKeyUsages: {|
    +none: 0, // 0
    +decryption: 1, // 1
    +signing: 2, // 2
    +keyAgreement: 3, // 3
    +all: 4 // 4
  |};

  declare export var Windows$Security$Cryptography$Certificates$KeyProtectionLevel: {|
    +noConsent: 0, // 0
    +consentOnly: 1, // 1
    +consentWithPassword: 2 // 2
  |};

  declare export var Windows$Security$Cryptography$Certificates$ExportOption: {|
    +notExportable: 0, // 0
    +exportable: 1 // 1
  |};

  declare export var Windows$Security$Cryptography$Certificates$KeySize: {|
    +invalid: 0, // 0
    +rsa2048: 1, // 1
    +rsa4096: 2 // 2
  |};

  declare export var Windows$Security$Cryptography$Certificates$InstallOptions: {|
    +none: 0, // 0
    +deleteExpired: 1 // 1
  |};

  declare export interface Windows$Security$Cryptography$Certificates$ICertificateRequestProperties {
    exportable: $Values<
      typeof Windows$Security$Cryptography$Certificates$ExportOption
    >;
    friendlyName: string;
    hashAlgorithmName: string;
    keyAlgorithmName: string;
    keyProtectionLevel: $Values<
      typeof Windows$Security$Cryptography$Certificates$KeyProtectionLevel
    >;
    keySize: number;
    keyStorageProviderName: string;
    keyUsages: $Values<
      typeof Windows$Security$Cryptography$Certificates$EnrollKeyUsages
    >;
    subject: string;
  }

  declare export class Windows$Security$Cryptography$Certificates$CertificateRequestProperties
    mixins Windows$Security$Cryptography$Certificates$ICertificateRequestProperties {
    exportable: $Values<
      typeof Windows$Security$Cryptography$Certificates$ExportOption
    >;
    friendlyName: string;
    hashAlgorithmName: string;
    keyAlgorithmName: string;
    keyProtectionLevel: $Values<
      typeof Windows$Security$Cryptography$Certificates$KeyProtectionLevel
    >;
    keySize: number;
    keyStorageProviderName: string;
    keyUsages: $Values<
      typeof Windows$Security$Cryptography$Certificates$EnrollKeyUsages
    >;
    subject: string;
  }

  declare export interface Windows$Security$Cryptography$Certificates$ICertificateEnrollmentManagerStatics {
    createRequestAsync(
      request: Windows$Security$Cryptography$Certificates$CertificateRequestProperties
    ): Windows$Foundation$IAsyncOperation<string>;
    installCertificateAsync(
      certificate: string,
      installOption: $Values<
        typeof Windows$Security$Cryptography$Certificates$InstallOptions
      >
    ): Windows$Foundation$IAsyncAction;
    importPfxDataAsync(
      pfxData: string,
      password: string,
      exportable: $Values<
        typeof Windows$Security$Cryptography$Certificates$ExportOption
      >,
      keyProtectionLevel: $Values<
        typeof Windows$Security$Cryptography$Certificates$KeyProtectionLevel
      >,
      installOption: $Values<
        typeof Windows$Security$Cryptography$Certificates$InstallOptions
      >,
      friendlyName: string
    ): Windows$Foundation$IAsyncAction;
  }

  declare export class Windows$Security$Cryptography$Certificates$CertificateEnrollmentManager {
    static createRequestAsync(
      request: Windows$Security$Cryptography$Certificates$CertificateRequestProperties
    ): Windows$Foundation$IAsyncOperation<string>;
    static installCertificateAsync(
      certificate: string,
      installOption: $Values<
        typeof Windows$Security$Cryptography$Certificates$InstallOptions
      >
    ): Windows$Foundation$IAsyncAction;
    static importPfxDataAsync(
      pfxData: string,
      password: string,
      exportable: $Values<
        typeof Windows$Security$Cryptography$Certificates$ExportOption
      >,
      keyProtectionLevel: $Values<
        typeof Windows$Security$Cryptography$Certificates$KeyProtectionLevel
      >,
      installOption: $Values<
        typeof Windows$Security$Cryptography$Certificates$InstallOptions
      >,
      friendlyName: string
    ): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$Security$Cryptography$Certificates$IKeyAlgorithmNamesStatics {
    dsa: string;
    ecdh256: string;
    ecdh384: string;
    ecdh521: string;
    ecdsa256: string;
    ecdsa384: string;
    ecdsa521: string;
    rsa: string;
  }

  declare export class Windows$Security$Cryptography$Certificates$KeyAlgorithmNames {
    static dsa: string;
    static ecdh256: string;
    static ecdh384: string;
    static ecdh521: string;
    static ecdsa256: string;
    static ecdsa384: string;
    static ecdsa521: string;
    static rsa: string;
  }

  declare export interface Windows$Security$Cryptography$Certificates$IKeyStorageProviderNamesStatics {
    platformKeyStorageProvider: string;
    smartcardKeyStorageProvider: string;
    softwareKeyStorageProvider: string;
  }

  declare export class Windows$Security$Cryptography$Certificates$KeyStorageProviderNames {
    static platformKeyStorageProvider: string;
    static smartcardKeyStorageProvider: string;
    static softwareKeyStorageProvider: string;
  }

  declare var npm$namespace$Windows$Security$Cryptography$Core: {
    CryptographicPrivateKeyBlobType: typeof Windows$Security$Cryptography$Core$CryptographicPrivateKeyBlobType,
    CryptographicPublicKeyBlobType: typeof Windows$Security$Cryptography$Core$CryptographicPublicKeyBlobType,
    KeyDerivationParameters: typeof Windows$Security$Cryptography$Core$KeyDerivationParameters,
    CryptographicKey: typeof Windows$Security$Cryptography$Core$CryptographicKey,
    CryptographicHash: typeof Windows$Security$Cryptography$Core$CryptographicHash,
    EncryptedAndAuthenticatedData: typeof Windows$Security$Cryptography$Core$EncryptedAndAuthenticatedData,
    CryptographicEngine: typeof Windows$Security$Cryptography$Core$CryptographicEngine,
    HashAlgorithmProvider: typeof Windows$Security$Cryptography$Core$HashAlgorithmProvider,
    MacAlgorithmProvider: typeof Windows$Security$Cryptography$Core$MacAlgorithmProvider,
    KeyDerivationAlgorithmProvider: typeof Windows$Security$Cryptography$Core$KeyDerivationAlgorithmProvider,
    SymmetricKeyAlgorithmProvider: typeof Windows$Security$Cryptography$Core$SymmetricKeyAlgorithmProvider,
    AsymmetricKeyAlgorithmProvider: typeof Windows$Security$Cryptography$Core$AsymmetricKeyAlgorithmProvider,
    HashAlgorithmNames: typeof Windows$Security$Cryptography$Core$HashAlgorithmNames,
    MacAlgorithmNames: typeof Windows$Security$Cryptography$Core$MacAlgorithmNames,
    SymmetricAlgorithmNames: typeof Windows$Security$Cryptography$Core$SymmetricAlgorithmNames,
    AsymmetricAlgorithmNames: typeof Windows$Security$Cryptography$Core$AsymmetricAlgorithmNames,
    KeyDerivationAlgorithmNames: typeof Windows$Security$Cryptography$Core$KeyDerivationAlgorithmNames
  };

  declare export var Windows$Security$Cryptography$Core$CryptographicPrivateKeyBlobType: {|
    +pkcs8RawPrivateKeyInfo: 0, // 0
    +pkcs1RsaPrivateKey: 1, // 1
    +bCryptPrivateKey: 2, // 2
    +capi1PrivateKey: 3 // 3
  |};

  declare export var Windows$Security$Cryptography$Core$CryptographicPublicKeyBlobType: {|
    +x509SubjectPublicKeyInfo: 0, // 0
    +pkcs1RsaPublicKey: 1, // 1
    +bCryptPublicKey: 2, // 2
    +capi1PublicKey: 3 // 3
  |};

  declare export interface Windows$Security$Cryptography$Core$IKeyDerivationParameters {
    iterationCount: number;
    kdfGenericBinary: Windows$Storage$Streams$IBuffer;
  }

  declare export interface Windows$Security$Cryptography$Core$IKeyDerivationParametersStatics {
    buildForPbkdf2(
      pbkdf2Salt: Windows$Storage$Streams$IBuffer,
      iterationCount: number
    ): Windows$Security$Cryptography$Core$KeyDerivationParameters;
    buildForSP800108(
      label: Windows$Storage$Streams$IBuffer,
      context: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$KeyDerivationParameters;
    buildForSP80056a(
      algorithmId: Windows$Storage$Streams$IBuffer,
      partyUInfo: Windows$Storage$Streams$IBuffer,
      partyVInfo: Windows$Storage$Streams$IBuffer,
      suppPubInfo: Windows$Storage$Streams$IBuffer,
      suppPrivInfo: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$KeyDerivationParameters;
  }

  declare export class Windows$Security$Cryptography$Core$KeyDerivationParameters
    mixins Windows$Security$Cryptography$Core$IKeyDerivationParameters {
    iterationCount: number;
    kdfGenericBinary: Windows$Storage$Streams$IBuffer;
    static buildForPbkdf2(
      pbkdf2Salt: Windows$Storage$Streams$IBuffer,
      iterationCount: number
    ): Windows$Security$Cryptography$Core$KeyDerivationParameters;
    static buildForSP800108(
      label: Windows$Storage$Streams$IBuffer,
      context: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$KeyDerivationParameters;
    static buildForSP80056a(
      algorithmId: Windows$Storage$Streams$IBuffer,
      partyUInfo: Windows$Storage$Streams$IBuffer,
      partyVInfo: Windows$Storage$Streams$IBuffer,
      suppPubInfo: Windows$Storage$Streams$IBuffer,
      suppPrivInfo: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$KeyDerivationParameters;
  }

  declare export interface Windows$Security$Cryptography$Core$ICryptographicKey {
    keySize: number;
    export(): Windows$Storage$Streams$IBuffer;
    export(
      BlobType: $Values<
        typeof Windows$Security$Cryptography$Core$CryptographicPrivateKeyBlobType
      >
    ): Windows$Storage$Streams$IBuffer;
    exportPublicKey(): Windows$Storage$Streams$IBuffer;
    exportPublicKey(
      BlobType: $Values<
        typeof Windows$Security$Cryptography$Core$CryptographicPublicKeyBlobType
      >
    ): Windows$Storage$Streams$IBuffer;
  }

  declare export class Windows$Security$Cryptography$Core$CryptographicKey
    mixins Windows$Security$Cryptography$Core$ICryptographicKey {
    keySize: number;
    export(): Windows$Storage$Streams$IBuffer;
    export(
      BlobType: $Values<
        typeof Windows$Security$Cryptography$Core$CryptographicPrivateKeyBlobType
      >
    ): Windows$Storage$Streams$IBuffer;
    exportPublicKey(): Windows$Storage$Streams$IBuffer;
    exportPublicKey(
      BlobType: $Values<
        typeof Windows$Security$Cryptography$Core$CryptographicPublicKeyBlobType
      >
    ): Windows$Storage$Streams$IBuffer;
  }

  declare export interface Windows$Security$Cryptography$Core$IHashComputation {
    append(data: Windows$Storage$Streams$IBuffer): void;
    getValueAndReset(): Windows$Storage$Streams$IBuffer;
  }

  declare export class Windows$Security$Cryptography$Core$CryptographicHash
    mixins Windows$Security$Cryptography$Core$IHashComputation {
    append(data: Windows$Storage$Streams$IBuffer): void;
    getValueAndReset(): Windows$Storage$Streams$IBuffer;
  }

  declare export interface Windows$Security$Cryptography$Core$IHashAlgorithmProvider {
    algorithmName: string;
    hashLength: number;
    hashData(
      data: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$IBuffer;
    createHash(): Windows$Security$Cryptography$Core$CryptographicHash;
  }

  declare export interface Windows$Security$Cryptography$Core$IMacAlgorithmProvider {
    algorithmName: string;
    macLength: number;
    createKey(
      keyMaterial: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$CryptographicKey;
  }

  declare export interface Windows$Security$Cryptography$Core$IKeyDerivationAlgorithmProvider {
    algorithmName: string;
    createKey(
      keyMaterial: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$CryptographicKey;
  }

  declare export interface Windows$Security$Cryptography$Core$ISymmetricKeyAlgorithmProvider {
    algorithmName: string;
    blockLength: number;
    createSymmetricKey(
      keyMaterial: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$CryptographicKey;
  }

  declare export interface Windows$Security$Cryptography$Core$IAsymmetricKeyAlgorithmProvider {
    algorithmName: string;
    createKeyPair(
      keySize: number
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    importKeyPair(
      keyBlob: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    importKeyPair(
      keyBlob: Windows$Storage$Streams$IBuffer,
      BlobType: $Values<
        typeof Windows$Security$Cryptography$Core$CryptographicPrivateKeyBlobType
      >
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    importPublicKey(
      keyBlob: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    importPublicKey(
      keyBlob: Windows$Storage$Streams$IBuffer,
      BlobType: $Values<
        typeof Windows$Security$Cryptography$Core$CryptographicPublicKeyBlobType
      >
    ): Windows$Security$Cryptography$Core$CryptographicKey;
  }

  declare export interface Windows$Security$Cryptography$Core$IEncryptedAndAuthenticatedData {
    authenticationTag: Windows$Storage$Streams$IBuffer;
    encryptedData: Windows$Storage$Streams$IBuffer;
  }

  declare export class Windows$Security$Cryptography$Core$EncryptedAndAuthenticatedData
    mixins Windows$Security$Cryptography$Core$IEncryptedAndAuthenticatedData {
    authenticationTag: Windows$Storage$Streams$IBuffer;
    encryptedData: Windows$Storage$Streams$IBuffer;
  }

  declare export interface Windows$Security$Cryptography$Core$ICryptographicEngineStatics {
    encrypt(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer,
      iv: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$IBuffer;
    decrypt(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer,
      iv: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$IBuffer;
    encryptAndAuthenticate(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer,
      nonce: Windows$Storage$Streams$IBuffer,
      authenticatedData: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$EncryptedAndAuthenticatedData;
    decryptAndAuthenticate(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer,
      nonce: Windows$Storage$Streams$IBuffer,
      authenticationTag: Windows$Storage$Streams$IBuffer,
      authenticatedData: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$IBuffer;
    sign(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$IBuffer;
    verifySignature(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer,
      signature: Windows$Storage$Streams$IBuffer
    ): boolean;
    deriveKeyMaterial(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      parameters: Windows$Security$Cryptography$Core$KeyDerivationParameters,
      desiredKeySize: number
    ): Windows$Storage$Streams$IBuffer;
  }

  declare export class Windows$Security$Cryptography$Core$CryptographicEngine {
    static encrypt(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer,
      iv: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$IBuffer;
    static decrypt(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer,
      iv: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$IBuffer;
    static encryptAndAuthenticate(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer,
      nonce: Windows$Storage$Streams$IBuffer,
      authenticatedData: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$EncryptedAndAuthenticatedData;
    static decryptAndAuthenticate(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer,
      nonce: Windows$Storage$Streams$IBuffer,
      authenticationTag: Windows$Storage$Streams$IBuffer,
      authenticatedData: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$IBuffer;
    static sign(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$IBuffer;
    static verifySignature(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      data: Windows$Storage$Streams$IBuffer,
      signature: Windows$Storage$Streams$IBuffer
    ): boolean;
    static deriveKeyMaterial(
      key: Windows$Security$Cryptography$Core$CryptographicKey,
      parameters: Windows$Security$Cryptography$Core$KeyDerivationParameters,
      desiredKeySize: number
    ): Windows$Storage$Streams$IBuffer;
  }

  declare export interface Windows$Security$Cryptography$Core$IHashAlgorithmProviderStatics {
    openAlgorithm(
      algorithm: string
    ): Windows$Security$Cryptography$Core$HashAlgorithmProvider;
  }

  declare export class Windows$Security$Cryptography$Core$HashAlgorithmProvider
    mixins Windows$Security$Cryptography$Core$IHashAlgorithmProvider {
    algorithmName: string;
    hashLength: number;
    hashData(
      data: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$IBuffer;
    createHash(): Windows$Security$Cryptography$Core$CryptographicHash;
    static openAlgorithm(
      algorithm: string
    ): Windows$Security$Cryptography$Core$HashAlgorithmProvider;
  }

  declare export interface Windows$Security$Cryptography$Core$IMacAlgorithmProviderStatics {
    openAlgorithm(
      algorithm: string
    ): Windows$Security$Cryptography$Core$MacAlgorithmProvider;
  }

  declare export class Windows$Security$Cryptography$Core$MacAlgorithmProvider
    mixins Windows$Security$Cryptography$Core$IMacAlgorithmProvider {
    algorithmName: string;
    macLength: number;
    createKey(
      keyMaterial: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    static openAlgorithm(
      algorithm: string
    ): Windows$Security$Cryptography$Core$MacAlgorithmProvider;
  }

  declare export interface Windows$Security$Cryptography$Core$IKeyDerivationAlgorithmProviderStatics {
    openAlgorithm(
      algorithm: string
    ): Windows$Security$Cryptography$Core$KeyDerivationAlgorithmProvider;
  }

  declare export class Windows$Security$Cryptography$Core$KeyDerivationAlgorithmProvider
    mixins Windows$Security$Cryptography$Core$IKeyDerivationAlgorithmProvider {
    algorithmName: string;
    createKey(
      keyMaterial: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    static openAlgorithm(
      algorithm: string
    ): Windows$Security$Cryptography$Core$KeyDerivationAlgorithmProvider;
  }

  declare export interface Windows$Security$Cryptography$Core$ISymmetricKeyAlgorithmProviderStatics {
    openAlgorithm(
      algorithm: string
    ): Windows$Security$Cryptography$Core$SymmetricKeyAlgorithmProvider;
  }

  declare export class Windows$Security$Cryptography$Core$SymmetricKeyAlgorithmProvider
    mixins Windows$Security$Cryptography$Core$ISymmetricKeyAlgorithmProvider {
    algorithmName: string;
    blockLength: number;
    createSymmetricKey(
      keyMaterial: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    static openAlgorithm(
      algorithm: string
    ): Windows$Security$Cryptography$Core$SymmetricKeyAlgorithmProvider;
  }

  declare export interface Windows$Security$Cryptography$Core$IAsymmetricKeyAlgorithmProviderStatics {
    openAlgorithm(
      algorithm: string
    ): Windows$Security$Cryptography$Core$AsymmetricKeyAlgorithmProvider;
  }

  declare export class Windows$Security$Cryptography$Core$AsymmetricKeyAlgorithmProvider
    mixins Windows$Security$Cryptography$Core$IAsymmetricKeyAlgorithmProvider {
    algorithmName: string;
    createKeyPair(
      keySize: number
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    importKeyPair(
      keyBlob: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    importKeyPair(
      keyBlob: Windows$Storage$Streams$IBuffer,
      BlobType: $Values<
        typeof Windows$Security$Cryptography$Core$CryptographicPrivateKeyBlobType
      >
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    importPublicKey(
      keyBlob: Windows$Storage$Streams$IBuffer
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    importPublicKey(
      keyBlob: Windows$Storage$Streams$IBuffer,
      BlobType: $Values<
        typeof Windows$Security$Cryptography$Core$CryptographicPublicKeyBlobType
      >
    ): Windows$Security$Cryptography$Core$CryptographicKey;
    static openAlgorithm(
      algorithm: string
    ): Windows$Security$Cryptography$Core$AsymmetricKeyAlgorithmProvider;
  }

  declare export interface Windows$Security$Cryptography$Core$IHashAlgorithmNamesStatics {
    md5: string;
    sha1: string;
    sha256: string;
    sha384: string;
    sha512: string;
  }

  declare export class Windows$Security$Cryptography$Core$HashAlgorithmNames {
    static md5: string;
    static sha1: string;
    static sha256: string;
    static sha384: string;
    static sha512: string;
  }

  declare export interface Windows$Security$Cryptography$Core$IMacAlgorithmNamesStatics {
    aesCmac: string;
    hmacMd5: string;
    hmacSha1: string;
    hmacSha256: string;
    hmacSha384: string;
    hmacSha512: string;
  }

  declare export class Windows$Security$Cryptography$Core$MacAlgorithmNames {
    static aesCmac: string;
    static hmacMd5: string;
    static hmacSha1: string;
    static hmacSha256: string;
    static hmacSha384: string;
    static hmacSha512: string;
  }

  declare export interface Windows$Security$Cryptography$Core$ISymmetricAlgorithmNamesStatics {
    aesCbc: string;
    aesCbcPkcs7: string;
    aesCcm: string;
    aesEcb: string;
    aesEcbPkcs7: string;
    aesGcm: string;
    desCbc: string;
    desCbcPkcs7: string;
    desEcb: string;
    desEcbPkcs7: string;
    rc2Cbc: string;
    rc2CbcPkcs7: string;
    rc2Ecb: string;
    rc2EcbPkcs7: string;
    rc4: string;
    tripleDesCbc: string;
    tripleDesCbcPkcs7: string;
    tripleDesEcb: string;
    tripleDesEcbPkcs7: string;
  }

  declare export class Windows$Security$Cryptography$Core$SymmetricAlgorithmNames {
    static aesCbc: string;
    static aesCbcPkcs7: string;
    static aesCcm: string;
    static aesEcb: string;
    static aesEcbPkcs7: string;
    static aesGcm: string;
    static desCbc: string;
    static desCbcPkcs7: string;
    static desEcb: string;
    static desEcbPkcs7: string;
    static rc2Cbc: string;
    static rc2CbcPkcs7: string;
    static rc2Ecb: string;
    static rc2EcbPkcs7: string;
    static rc4: string;
    static tripleDesCbc: string;
    static tripleDesCbcPkcs7: string;
    static tripleDesEcb: string;
    static tripleDesEcbPkcs7: string;
  }

  declare export interface Windows$Security$Cryptography$Core$IAsymmetricAlgorithmNamesStatics {
    dsaSha1: string;
    dsaSha256: string;
    ecdsaP256Sha256: string;
    ecdsaP384Sha384: string;
    ecdsaP521Sha512: string;
    rsaOaepSha1: string;
    rsaOaepSha256: string;
    rsaOaepSha384: string;
    rsaOaepSha512: string;
    rsaPkcs1: string;
    rsaSignPkcs1Sha1: string;
    rsaSignPkcs1Sha256: string;
    rsaSignPkcs1Sha384: string;
    rsaSignPkcs1Sha512: string;
    rsaSignPssSha1: string;
    rsaSignPssSha256: string;
    rsaSignPssSha384: string;
    rsaSignPssSha512: string;
  }

  declare export class Windows$Security$Cryptography$Core$AsymmetricAlgorithmNames {
    static dsaSha1: string;
    static dsaSha256: string;
    static ecdsaP256Sha256: string;
    static ecdsaP384Sha384: string;
    static ecdsaP521Sha512: string;
    static rsaOaepSha1: string;
    static rsaOaepSha256: string;
    static rsaOaepSha384: string;
    static rsaOaepSha512: string;
    static rsaPkcs1: string;
    static rsaSignPkcs1Sha1: string;
    static rsaSignPkcs1Sha256: string;
    static rsaSignPkcs1Sha384: string;
    static rsaSignPkcs1Sha512: string;
    static rsaSignPssSha1: string;
    static rsaSignPssSha256: string;
    static rsaSignPssSha384: string;
    static rsaSignPssSha512: string;
  }

  declare export interface Windows$Security$Cryptography$Core$IKeyDerivationAlgorithmNamesStatics {
    pbkdf2Md5: string;
    pbkdf2Sha1: string;
    pbkdf2Sha256: string;
    pbkdf2Sha384: string;
    pbkdf2Sha512: string;
    sp800108CtrHmacMd5: string;
    sp800108CtrHmacSha1: string;
    sp800108CtrHmacSha256: string;
    sp800108CtrHmacSha384: string;
    sp800108CtrHmacSha512: string;
    sp80056aConcatMd5: string;
    sp80056aConcatSha1: string;
    sp80056aConcatSha256: string;
    sp80056aConcatSha384: string;
    sp80056aConcatSha512: string;
  }

  declare export class Windows$Security$Cryptography$Core$KeyDerivationAlgorithmNames {
    static pbkdf2Md5: string;
    static pbkdf2Sha1: string;
    static pbkdf2Sha256: string;
    static pbkdf2Sha384: string;
    static pbkdf2Sha512: string;
    static sp800108CtrHmacMd5: string;
    static sp800108CtrHmacSha1: string;
    static sp800108CtrHmacSha256: string;
    static sp800108CtrHmacSha384: string;
    static sp800108CtrHmacSha512: string;
    static sp80056aConcatMd5: string;
    static sp80056aConcatSha1: string;
    static sp80056aConcatSha256: string;
    static sp80056aConcatSha384: string;
    static sp80056aConcatSha512: string;
  }

  declare var npm$namespace$Windows$Security$Cryptography$DataProtection: {
    DataProtectionProvider: typeof Windows$Security$Cryptography$DataProtection$DataProtectionProvider
  };
  declare export interface Windows$Security$Cryptography$DataProtection$IDataProtectionProvider {
    protectAsync(
      data: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IBuffer>;
    unprotectAsync(
      data: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IBuffer>;
    protectStreamAsync(
      src: Windows$Storage$Streams$IInputStream,
      dest: Windows$Storage$Streams$IOutputStream
    ): Windows$Foundation$IAsyncAction;
    unprotectStreamAsync(
      src: Windows$Storage$Streams$IInputStream,
      dest: Windows$Storage$Streams$IOutputStream
    ): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$Security$Cryptography$DataProtection$IDataProtectionProviderFactory {
    createOverloadExplicit(
      protectionDescriptor: string
    ): Windows$Security$Cryptography$DataProtection$DataProtectionProvider;
  }

  declare export class Windows$Security$Cryptography$DataProtection$DataProtectionProvider
    mixins Windows$Security$Cryptography$DataProtection$IDataProtectionProvider {
    constructor(protectionDescriptor: string): this;
    constructor(): this;
    protectAsync(
      data: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IBuffer>;
    unprotectAsync(
      data: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IBuffer>;
    protectStreamAsync(
      src: Windows$Storage$Streams$IInputStream,
      dest: Windows$Storage$Streams$IOutputStream
    ): Windows$Foundation$IAsyncAction;
    unprotectStreamAsync(
      src: Windows$Storage$Streams$IInputStream,
      dest: Windows$Storage$Streams$IOutputStream
    ): Windows$Foundation$IAsyncAction;
  }

  declare export var Windows$Security$Cryptography$BinaryStringEncoding: {|
    +utf8: 0, // 0
    +utf16LE: 1, // 1
    +utf16BE: 2 // 2
  |};

  declare export interface Windows$Security$Cryptography$ICryptographicBufferStatics {
    compare(
      object1: Windows$Storage$Streams$IBuffer,
      object2: Windows$Storage$Streams$IBuffer
    ): boolean;
    generateRandom(length: number): Windows$Storage$Streams$IBuffer;
    generateRandomNumber(): number;
    createFromByteArray(value: Uint8Array): Windows$Storage$Streams$IBuffer;
    copyToByteArray(buffer: Windows$Storage$Streams$IBuffer): Uint8Array;
    decodeFromHexString(value: string): Windows$Storage$Streams$IBuffer;
    encodeToHexString(buffer: Windows$Storage$Streams$IBuffer): string;
    decodeFromBase64String(value: string): Windows$Storage$Streams$IBuffer;
    encodeToBase64String(buffer: Windows$Storage$Streams$IBuffer): string;
    convertStringToBinary(
      value: string,
      encoding: $Values<
        typeof Windows$Security$Cryptography$BinaryStringEncoding
      >
    ): Windows$Storage$Streams$IBuffer;
    convertBinaryToString(
      encoding: $Values<
        typeof Windows$Security$Cryptography$BinaryStringEncoding
      >,
      buffer: Windows$Storage$Streams$IBuffer
    ): string;
  }

  declare export class Windows$Security$Cryptography$CryptographicBuffer {
    static compare(
      object1: Windows$Storage$Streams$IBuffer,
      object2: Windows$Storage$Streams$IBuffer
    ): boolean;
    static generateRandom(length: number): Windows$Storage$Streams$IBuffer;
    static generateRandomNumber(): number;
    static createFromByteArray(
      value: Uint8Array
    ): Windows$Storage$Streams$IBuffer;
    static copyToByteArray(buffer: Windows$Storage$Streams$IBuffer): Uint8Array;
    static decodeFromHexString(value: string): Windows$Storage$Streams$IBuffer;
    static encodeToHexString(buffer: Windows$Storage$Streams$IBuffer): string;
    static decodeFromBase64String(
      value: string
    ): Windows$Storage$Streams$IBuffer;
    static encodeToBase64String(
      buffer: Windows$Storage$Streams$IBuffer
    ): string;
    static convertStringToBinary(
      value: string,
      encoding: $Values<
        typeof Windows$Security$Cryptography$BinaryStringEncoding
      >
    ): Windows$Storage$Streams$IBuffer;
    static convertBinaryToString(
      encoding: $Values<
        typeof Windows$Security$Cryptography$BinaryStringEncoding
      >,
      buffer: Windows$Storage$Streams$IBuffer
    ): string;
  }

  declare var npm$namespace$Windows$Security$ExchangeActiveSyncProvisioning: {
    EasRequireEncryptionResult: typeof Windows$Security$ExchangeActiveSyncProvisioning$EasRequireEncryptionResult,
    EasMinPasswordLengthResult: typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMinPasswordLengthResult,
    EasDisallowConvenienceLogonResult: typeof Windows$Security$ExchangeActiveSyncProvisioning$EasDisallowConvenienceLogonResult,
    EasMinPasswordComplexCharactersResult: typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMinPasswordComplexCharactersResult,
    EasPasswordExpirationResult: typeof Windows$Security$ExchangeActiveSyncProvisioning$EasPasswordExpirationResult,
    EasPasswordHistoryResult: typeof Windows$Security$ExchangeActiveSyncProvisioning$EasPasswordHistoryResult,
    EasMaxPasswordFailedAttemptsResult: typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMaxPasswordFailedAttemptsResult,
    EasMaxInactivityTimeLockResult: typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMaxInactivityTimeLockResult,
    EasComplianceResults: typeof Windows$Security$ExchangeActiveSyncProvisioning$EasComplianceResults,
    EasClientSecurityPolicy: typeof Windows$Security$ExchangeActiveSyncProvisioning$EasClientSecurityPolicy,
    EasClientDeviceInformation: typeof Windows$Security$ExchangeActiveSyncProvisioning$EasClientDeviceInformation
  };

  declare export var Windows$Security$ExchangeActiveSyncProvisioning$EasRequireEncryptionResult: {|
    +notEvaluated: 0, // 0
    +compliant: 1, // 1
    +canBeCompliant: 2, // 2
    +notProvisionedOnAllVolumes: 3, // 3
    +deFixedDataNotSupported: 4, // 4
    +deHardwareNotCompliant: 5, // 5
    +deWinReNotConfigured: 6, // 6
    +deProtectionSuspended: 7, // 7
    +deOsVolumeNotProtected: 8, // 8
    +deProtectionNotYetEnabled: 9, // 9
    +noFeatureLicense: 10, // 10
    +osNotProtected: 11 // 11
  |};

  declare export var Windows$Security$ExchangeActiveSyncProvisioning$EasMinPasswordLengthResult: {|
    +notEvaluated: 0, // 0
    +compliant: 1, // 1
    +canBeCompliant: 2, // 2
    +requestedPolicyIsStricter: 3, // 3
    +requestedPolicyNotEnforceable: 4, // 4
    +invalidParameter: 5, // 5
    +currentUserHasBlankPassword: 6, // 6
    +adminsHaveBlankPassword: 7, // 7
    +userCannotChangePassword: 8, // 8
    +adminsCannotChangePassword: 9, // 9
    +localControlledUsersCannotChangePassword: 10, // 10
    +connectedAdminsProviderPolicyIsWeak: 11, // 11
    +connectedUserProviderPolicyIsWeak: 12, // 12
    +changeConnectedAdminsPassword: 13, // 13
    +changeConnectedUserPassword: 14 // 14
  |};

  declare export var Windows$Security$ExchangeActiveSyncProvisioning$EasDisallowConvenienceLogonResult: {|
    +notEvaluated: 0, // 0
    +compliant: 1, // 1
    +canBeCompliant: 2, // 2
    +requestedPolicyIsStricter: 3 // 3
  |};

  declare export var Windows$Security$ExchangeActiveSyncProvisioning$EasMinPasswordComplexCharactersResult: {|
    +notEvaluated: 0, // 0
    +compliant: 1, // 1
    +canBeCompliant: 2, // 2
    +requestedPolicyIsStricter: 3, // 3
    +requestedPolicyNotEnforceable: 4, // 4
    +invalidParameter: 5, // 5
    +currentUserHasBlankPassword: 6, // 6
    +adminsHaveBlankPassword: 7, // 7
    +userCannotChangePassword: 8, // 8
    +adminsCannotChangePassword: 9, // 9
    +localControlledUsersCannotChangePassword: 10, // 10
    +connectedAdminsProviderPolicyIsWeak: 11, // 11
    +connectedUserProviderPolicyIsWeak: 12, // 12
    +changeConnectedAdminsPassword: 13, // 13
    +changeConnectedUserPassword: 14 // 14
  |};

  declare export var Windows$Security$ExchangeActiveSyncProvisioning$EasPasswordExpirationResult: {|
    +notEvaluated: 0, // 0
    +compliant: 1, // 1
    +canBeCompliant: 2, // 2
    +requestedPolicyIsStricter: 3, // 3
    +requestedExpirationIncompatible: 4, // 4
    +invalidParameter: 5, // 5
    +userCannotChangePassword: 6, // 6
    +adminsCannotChangePassword: 7, // 7
    +localControlledUsersCannotChangePassword: 8 // 8
  |};

  declare export var Windows$Security$ExchangeActiveSyncProvisioning$EasPasswordHistoryResult: {|
    +notEvaluated: 0, // 0
    +compliant: 1, // 1
    +canBeCompliant: 2, // 2
    +requestedPolicyIsStricter: 3, // 3
    +invalidParameter: 4 // 4
  |};

  declare export var Windows$Security$ExchangeActiveSyncProvisioning$EasMaxPasswordFailedAttemptsResult: {|
    +notEvaluated: 0, // 0
    +compliant: 1, // 1
    +canBeCompliant: 2, // 2
    +requestedPolicyIsStricter: 3, // 3
    +invalidParameter: 4 // 4
  |};

  declare export var Windows$Security$ExchangeActiveSyncProvisioning$EasMaxInactivityTimeLockResult: {|
    +notEvaluated: 0, // 0
    +compliant: 1, // 1
    +canBeCompliant: 2, // 2
    +requestedPolicyIsStricter: 3, // 3
    +invalidParameter: 4 // 4
  |};

  declare export interface Windows$Security$ExchangeActiveSyncProvisioning$IEasClientDeviceInformation {
    friendlyName: string;
    id: string;
    operatingSystem: string;
    systemManufacturer: string;
    systemProductName: string;
    systemSku: string;
  }

  declare export interface Windows$Security$ExchangeActiveSyncProvisioning$IEasClientSecurityPolicy {
    disallowConvenienceLogon: boolean;
    maxInactivityTimeLock: number;
    maxPasswordFailedAttempts: number;
    minPasswordComplexCharacters: number;
    minPasswordLength: number;
    passwordExpiration: number;
    passwordHistory: number;
    requireEncryption: boolean;
    checkCompliance(): Windows$Security$ExchangeActiveSyncProvisioning$EasComplianceResults;
    applyAsync(): Windows$Foundation$IAsyncOperation<Windows$Security$ExchangeActiveSyncProvisioning$EasComplianceResults>;
  }

  declare export class Windows$Security$ExchangeActiveSyncProvisioning$EasComplianceResults
    mixins Windows$Security$ExchangeActiveSyncProvisioning$IEasComplianceResults {
    compliant: boolean;
    disallowConvenienceLogonResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasDisallowConvenienceLogonResult
    >;
    maxInactivityTimeLockResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMaxInactivityTimeLockResult
    >;
    maxPasswordFailedAttemptsResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMaxPasswordFailedAttemptsResult
    >;
    minPasswordComplexCharactersResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMinPasswordComplexCharactersResult
    >;
    minPasswordLengthResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMinPasswordLengthResult
    >;
    passwordExpirationResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasPasswordExpirationResult
    >;
    passwordHistoryResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasPasswordHistoryResult
    >;
    requireEncryptionResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasRequireEncryptionResult
    >;
  }

  declare export interface Windows$Security$ExchangeActiveSyncProvisioning$IEasComplianceResults {
    compliant: boolean;
    disallowConvenienceLogonResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasDisallowConvenienceLogonResult
    >;
    maxInactivityTimeLockResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMaxInactivityTimeLockResult
    >;
    maxPasswordFailedAttemptsResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMaxPasswordFailedAttemptsResult
    >;
    minPasswordComplexCharactersResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMinPasswordComplexCharactersResult
    >;
    minPasswordLengthResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasMinPasswordLengthResult
    >;
    passwordExpirationResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasPasswordExpirationResult
    >;
    passwordHistoryResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasPasswordHistoryResult
    >;
    requireEncryptionResult: $Values<
      typeof Windows$Security$ExchangeActiveSyncProvisioning$EasRequireEncryptionResult
    >;
  }

  declare export class Windows$Security$ExchangeActiveSyncProvisioning$EasClientSecurityPolicy
    mixins Windows$Security$ExchangeActiveSyncProvisioning$IEasClientSecurityPolicy {
    disallowConvenienceLogon: boolean;
    maxInactivityTimeLock: number;
    maxPasswordFailedAttempts: number;
    minPasswordComplexCharacters: number;
    minPasswordLength: number;
    passwordExpiration: number;
    passwordHistory: number;
    requireEncryption: boolean;
    checkCompliance(): Windows$Security$ExchangeActiveSyncProvisioning$EasComplianceResults;
    applyAsync(): Windows$Foundation$IAsyncOperation<Windows$Security$ExchangeActiveSyncProvisioning$EasComplianceResults>;
  }

  declare export class Windows$Security$ExchangeActiveSyncProvisioning$EasClientDeviceInformation
    mixins Windows$Security$ExchangeActiveSyncProvisioning$IEasClientDeviceInformation {
    friendlyName: string;
    id: string;
    operatingSystem: string;
    systemManufacturer: string;
    systemProductName: string;
    systemSku: string;
  }

  declare var npm$namespace$Windows$Storage: {
    CreationCollisionOption: typeof Windows$Storage$CreationCollisionOption,
    NameCollisionOption: typeof Windows$Storage$NameCollisionOption,
    StorageDeleteOption: typeof Windows$Storage$StorageDeleteOption,
    StorageItemTypes: typeof Windows$Storage$StorageItemTypes,
    FileAttributes: typeof Windows$Storage$FileAttributes,
    FileAccessMode: typeof Windows$Storage$FileAccessMode,
    StreamedFileFailureMode: typeof Windows$Storage$StreamedFileFailureMode,
    ApplicationDataLocality: typeof Windows$Storage$ApplicationDataLocality,
    ApplicationDataCreateDisposition: typeof Windows$Storage$ApplicationDataCreateDisposition,
    StorageFolder: typeof Windows$Storage$StorageFolder,
    KnownFolders: typeof Windows$Storage$KnownFolders,
    StorageFile: typeof Windows$Storage$StorageFile,
    DownloadsFolder: typeof Windows$Storage$DownloadsFolder,
    StreamedFileDataRequest: typeof Windows$Storage$StreamedFileDataRequest,
    StorageStreamTransaction: typeof Windows$Storage$StorageStreamTransaction,
    FileIO: typeof Windows$Storage$FileIO,
    PathIO: typeof Windows$Storage$PathIO,
    CachedFileManager: typeof Windows$Storage$CachedFileManager,
    ApplicationData: typeof Windows$Storage$ApplicationData,
    SetVersionRequest: typeof Windows$Storage$SetVersionRequest,
    ApplicationDataContainer: typeof Windows$Storage$ApplicationDataContainer,
    SetVersionDeferral: typeof Windows$Storage$SetVersionDeferral,
    ApplicationDataContainerSettings: typeof Windows$Storage$ApplicationDataContainerSettings,
    ApplicationDataCompositeValue: typeof Windows$Storage$ApplicationDataCompositeValue,
    Streams: typeof npm$namespace$Windows$Storage$Streams,
    Pickers: typeof npm$namespace$Windows$Storage$Pickers,
    Provider: typeof npm$namespace$Windows$Storage$Provider,
    FileProperties: typeof npm$namespace$Windows$Storage$FileProperties,
    Search: typeof npm$namespace$Windows$Storage$Search,
    AccessCache: typeof npm$namespace$Windows$Storage$AccessCache,
    BulkAccess: typeof npm$namespace$Windows$Storage$BulkAccess,
    Compression: typeof npm$namespace$Windows$Storage$Compression
  };

  declare var npm$namespace$Windows$Storage$Streams: {
    ByteOrder: typeof Windows$Storage$Streams$ByteOrder,
    UnicodeEncoding: typeof Windows$Storage$Streams$UnicodeEncoding,
    InputStreamOptions: typeof Windows$Storage$Streams$InputStreamOptions,
    DataReaderLoadOperation: typeof Windows$Storage$Streams$DataReaderLoadOperation,
    DataReader: typeof Windows$Storage$Streams$DataReader,
    DataWriterStoreOperation: typeof Windows$Storage$Streams$DataWriterStoreOperation,
    DataWriter: typeof Windows$Storage$Streams$DataWriter,
    RandomAccessStream: typeof Windows$Storage$Streams$RandomAccessStream,
    Buffer: typeof Windows$Storage$Streams$Buffer,
    RandomAccessStreamReference: typeof Windows$Storage$Streams$RandomAccessStreamReference,
    FileRandomAccessStream: typeof Windows$Storage$Streams$FileRandomAccessStream,
    FileInputStream: typeof Windows$Storage$Streams$FileInputStream,
    FileOutputStream: typeof Windows$Storage$Streams$FileOutputStream,
    RandomAccessStreamOverStream: typeof Windows$Storage$Streams$RandomAccessStreamOverStream,
    InputStreamOverStream: typeof Windows$Storage$Streams$InputStreamOverStream,
    OutputStreamOverStream: typeof Windows$Storage$Streams$OutputStreamOverStream,
    InMemoryRandomAccessStream: typeof Windows$Storage$Streams$InMemoryRandomAccessStream
  };

  declare export var Windows$Storage$Streams$ByteOrder: {|
    +littleEndian: 0, // 0
    +bigEndian: 1 // 1
  |};

  declare export var Windows$Storage$Streams$UnicodeEncoding: {|
    +utf8: 0, // 0
    +utf16LE: 1, // 1
    +utf16BE: 2 // 2
  |};

  declare export class Windows$Storage$Streams$DataReaderLoadOperation
    mixins Windows$Foundation$IAsyncOperation<number>,
      Windows$Foundation$IAsyncInfo {
    completed: Windows$Foundation$AsyncOperationCompletedHandler<number>;
    errorCode: number;
    id: number;
    status: $Values<typeof Windows$Foundation$AsyncStatus>;
    getResults(): number;
    cancel(): void;
    close(): void;
    then<U>(
      success?: (value: number) => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: number) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: number) => U,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: number) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    done<U>(
      success?: (value: number) => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ): void;
    operation: {
      completed: Windows$Foundation$AsyncOperationCompletedHandler<number>,
      getResults(): number
    };
  }

  declare export interface Windows$Storage$Streams$IDataReader {
    byteOrder: $Values<typeof Windows$Storage$Streams$ByteOrder>;
    inputStreamOptions: $Values<
      typeof Windows$Storage$Streams$InputStreamOptions
    >;
    unconsumedBufferLength: number;
    unicodeEncoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>;
    readByte(): number;
    readBytes(value: number[]): void;
    readBytes(value: Uint8Array): void;
    readBuffer(length: number): Windows$Storage$Streams$IBuffer;
    readBoolean(): boolean;
    readGuid(): string;
    readInt16(): number;
    readInt32(): number;
    readInt64(): number;
    readUInt16(): number;
    readUInt32(): number;
    readUInt64(): number;
    readSingle(): number;
    readDouble(): number;
    readString(codeUnitCount: number): string;
    readDateTime(): Date;
    readTimeSpan(): number;
    loadAsync(count: number): Windows$Storage$Streams$DataReaderLoadOperation;
    detachBuffer(): Windows$Storage$Streams$IBuffer;
    detachStream(): Windows$Storage$Streams$IInputStream;
  }

  declare export interface Windows$Storage$Streams$IDataReaderFactory {
    createDataReader(
      inputStream: Windows$Storage$Streams$IInputStream
    ): Windows$Storage$Streams$DataReader;
  }

  declare export class Windows$Storage$Streams$DataReader
    mixins Windows$Storage$Streams$IDataReader, Windows$Foundation$IClosable {
    constructor(inputStream: Windows$Storage$Streams$IInputStream): this;
    byteOrder: $Values<typeof Windows$Storage$Streams$ByteOrder>;
    inputStreamOptions: $Values<
      typeof Windows$Storage$Streams$InputStreamOptions
    >;
    unconsumedBufferLength: number;
    unicodeEncoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>;
    readByte(): number;
    readBytes(value: number[]): void;
    readBytes(value: Uint8Array): void;
    readBuffer(length: number): Windows$Storage$Streams$IBuffer;
    readBoolean(): boolean;
    readGuid(): string;
    readInt16(): number;
    readInt32(): number;
    readInt64(): number;
    readUInt16(): number;
    readUInt32(): number;
    readUInt64(): number;
    readSingle(): number;
    readDouble(): number;
    readString(codeUnitCount: number): string;
    readDateTime(): Date;
    readTimeSpan(): number;
    loadAsync(count: number): Windows$Storage$Streams$DataReaderLoadOperation;
    detachBuffer(): Windows$Storage$Streams$IBuffer;
    detachStream(): Windows$Storage$Streams$IInputStream;
    dispose(): void;
    static fromBuffer(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$DataReader;
    close(): void;
  }

  declare export interface Windows$Storage$Streams$IDataReaderStatics {
    fromBuffer(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Storage$Streams$DataReader;
  }

  declare export class Windows$Storage$Streams$DataWriterStoreOperation
    mixins Windows$Foundation$IAsyncOperation<number>,
      Windows$Foundation$IAsyncInfo {
    completed: Windows$Foundation$AsyncOperationCompletedHandler<number>;
    errorCode: number;
    id: number;
    status: $Values<typeof Windows$Foundation$AsyncStatus>;
    getResults(): number;
    cancel(): void;
    close(): void;
    then<U>(
      success?: (value: number) => U,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: number) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => U,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: number) => U,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    then<U>(
      success?: (value: number) => Windows$Foundation$IPromise<U>,
      error?: (error: any) => Windows$Foundation$IPromise<U>,
      progress?: (progress: any) => void
    ): Windows$Foundation$IPromise<U>;
    done<U>(
      success?: (value: number) => any,
      error?: (error: any) => any,
      progress?: (progress: any) => void
    ): void;
    operation: {
      completed: Windows$Foundation$AsyncOperationCompletedHandler<number>,
      getResults(): number
    };
  }

  declare export interface Windows$Storage$Streams$IDataWriter {
    byteOrder: $Values<typeof Windows$Storage$Streams$ByteOrder>;
    unicodeEncoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>;
    unstoredBufferLength: number;
    writeByte(value: number): void;
    writeBytes(value: number[]): void;
    writeBytes(value: Uint8Array): void;
    writeBuffer(buffer: Windows$Storage$Streams$IBuffer): void;
    writeBuffer(
      buffer: Windows$Storage$Streams$IBuffer,
      start: number,
      count: number
    ): void;
    writeBoolean(value: boolean): void;
    writeGuid(value: string): void;
    writeInt16(value: number): void;
    writeInt32(value: number): void;
    writeInt64(value: number): void;
    writeUInt16(value: number): void;
    writeUInt32(value: number): void;
    writeUInt64(value: number): void;
    writeSingle(value: number): void;
    writeDouble(value: number): void;
    writeDateTime(value: Date): void;
    writeTimeSpan(value: number): void;
    writeString(value: string): number;
    measureString(value: string): number;
    storeAsync(): Windows$Storage$Streams$DataWriterStoreOperation;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    detachBuffer(): Windows$Storage$Streams$IBuffer;
    detachStream(): Windows$Storage$Streams$IOutputStream;
  }

  declare export interface Windows$Storage$Streams$IDataWriterFactory {
    createDataWriter(
      outputStream: Windows$Storage$Streams$IOutputStream
    ): Windows$Storage$Streams$DataWriter;
  }

  declare export class Windows$Storage$Streams$DataWriter
    mixins Windows$Storage$Streams$IDataWriter, Windows$Foundation$IClosable {
    constructor(outputStream: Windows$Storage$Streams$IOutputStream): this;
    constructor(): this;
    byteOrder: $Values<typeof Windows$Storage$Streams$ByteOrder>;
    unicodeEncoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>;
    unstoredBufferLength: number;
    writeByte(value: number): void;
    writeBytes(value: number[]): void;
    writeBytes(value: Uint8Array): void;
    writeBuffer(buffer: Windows$Storage$Streams$IBuffer): void;
    writeBuffer(
      buffer: Windows$Storage$Streams$IBuffer,
      start: number,
      count: number
    ): void;
    writeBoolean(value: boolean): void;
    writeGuid(value: string): void;
    writeInt16(value: number): void;
    writeInt32(value: number): void;
    writeInt64(value: number): void;
    writeUInt16(value: number): void;
    writeUInt32(value: number): void;
    writeUInt64(value: number): void;
    writeSingle(value: number): void;
    writeDouble(value: number): void;
    writeDateTime(value: Date): void;
    writeTimeSpan(value: number): void;
    writeString(value: string): number;
    measureString(value: string): number;
    storeAsync(): Windows$Storage$Streams$DataWriterStoreOperation;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    detachBuffer(): Windows$Storage$Streams$IBuffer;
    detachStream(): Windows$Storage$Streams$IOutputStream;
    dispose(): void;
    close(): void;
  }

  declare export interface Windows$Storage$Streams$IRandomAccessStreamStatics {
    copyAsync(
      source: Windows$Storage$Streams$IInputStream,
      destination: Windows$Storage$Streams$IOutputStream
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    copyAsync(
      source: Windows$Storage$Streams$IInputStream,
      destination: Windows$Storage$Streams$IOutputStream,
      bytesToCopy: number
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    copyAndCloseAsync(
      source: Windows$Storage$Streams$IInputStream,
      destination: Windows$Storage$Streams$IOutputStream
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
  }

  declare export class Windows$Storage$Streams$RandomAccessStream {
    static copyAsync(
      source: Windows$Storage$Streams$IInputStream,
      destination: Windows$Storage$Streams$IOutputStream
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    static copyAsync(
      source: Windows$Storage$Streams$IInputStream,
      destination: Windows$Storage$Streams$IOutputStream,
      bytesToCopy: number
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    static copyAndCloseAsync(
      source: Windows$Storage$Streams$IInputStream,
      destination: Windows$Storage$Streams$IOutputStream
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
  }

  declare export interface Windows$Storage$Streams$IBufferFactory {
    create(capacity: number): Windows$Storage$Streams$Buffer;
  }

  declare export class Windows$Storage$Streams$Buffer
    mixins Windows$Storage$Streams$IBuffer {
    constructor(capacity: number): this;
    capacity: number;
    length: number;
  }

  declare export interface Windows$Storage$Streams$IBuffer {
    capacity: number;
    length: number;
  }

  declare export var Windows$Storage$Streams$InputStreamOptions: {|
    +none: 0, // 0
    +partial: 1, // 1
    +readAhead: 2 // 2
  |};

  declare export interface Windows$Storage$Streams$IContentTypeProvider {
    contentType: string;
  }

  declare export interface Windows$Storage$Streams$IRandomAccessStreamReference {
    openReadAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IRandomAccessStreamWithContentType>;
  }

  declare export interface Windows$Storage$Streams$IInputStreamReference {
    openSequentialReadAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IInputStream>;
  }

  declare export interface Windows$Storage$Streams$IRandomAccessStreamReferenceStatics {
    createFromFile(
      file: Windows$Storage$IStorageFile
    ): Windows$Storage$Streams$RandomAccessStreamReference;
    createFromUri(
      uri: Windows$Foundation$Uri
    ): Windows$Storage$Streams$RandomAccessStreamReference;
    createFromStream(
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Storage$Streams$RandomAccessStreamReference;
  }

  declare export class Windows$Storage$Streams$RandomAccessStreamReference
    mixins Windows$Storage$Streams$IRandomAccessStreamReference {
    openReadAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IRandomAccessStreamWithContentType>;
    static createFromFile(
      file: Windows$Storage$IStorageFile
    ): Windows$Storage$Streams$RandomAccessStreamReference;
    static createFromUri(
      uri: Windows$Foundation$Uri
    ): Windows$Storage$Streams$RandomAccessStreamReference;
    static createFromStream(
      stream: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Storage$Streams$RandomAccessStreamReference;
  }

  declare export class Windows$Storage$Streams$FileRandomAccessStream
    mixins Windows$Storage$Streams$IRandomAccessStream,
      Windows$Foundation$IClosable,
      Windows$Storage$Streams$IInputStream,
      Windows$Storage$Streams$IOutputStream {
    canRead: boolean;
    canWrite: boolean;
    position: number;
    size: number;
    getInputStreamAt(position: number): Windows$Storage$Streams$IInputStream;
    getOutputStreamAt(position: number): Windows$Storage$Streams$IOutputStream;
    seek(position: number): void;
    cloneStream(): Windows$Storage$Streams$IRandomAccessStream;
    dispose(): void;
    readAsync(
      buffer: Windows$Storage$Streams$IBuffer,
      count: number,
      options: $Values<typeof Windows$Storage$Streams$InputStreamOptions>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IBuffer,
      number
    >;
    writeAsync(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    close(): void;
  }

  declare export class Windows$Storage$Streams$FileInputStream
    mixins Windows$Storage$Streams$IInputStream, Windows$Foundation$IClosable {
    readAsync(
      buffer: Windows$Storage$Streams$IBuffer,
      count: number,
      options: $Values<typeof Windows$Storage$Streams$InputStreamOptions>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IBuffer,
      number
    >;
    dispose(): void;
    close(): void;
  }

  declare export class Windows$Storage$Streams$FileOutputStream
    mixins Windows$Storage$Streams$IOutputStream, Windows$Foundation$IClosable {
    writeAsync(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    dispose(): void;
    close(): void;
  }

  declare export class Windows$Storage$Streams$RandomAccessStreamOverStream
    mixins Windows$Storage$Streams$IRandomAccessStream,
      Windows$Foundation$IClosable,
      Windows$Storage$Streams$IInputStream,
      Windows$Storage$Streams$IOutputStream {
    canRead: boolean;
    canWrite: boolean;
    position: number;
    size: number;
    getInputStreamAt(position: number): Windows$Storage$Streams$IInputStream;
    getOutputStreamAt(position: number): Windows$Storage$Streams$IOutputStream;
    seek(position: number): void;
    cloneStream(): Windows$Storage$Streams$IRandomAccessStream;
    dispose(): void;
    readAsync(
      buffer: Windows$Storage$Streams$IBuffer,
      count: number,
      options: $Values<typeof Windows$Storage$Streams$InputStreamOptions>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IBuffer,
      number
    >;
    writeAsync(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    close(): void;
  }

  declare export class Windows$Storage$Streams$InputStreamOverStream
    mixins Windows$Storage$Streams$IInputStream, Windows$Foundation$IClosable {
    readAsync(
      buffer: Windows$Storage$Streams$IBuffer,
      count: number,
      options: $Values<typeof Windows$Storage$Streams$InputStreamOptions>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IBuffer,
      number
    >;
    dispose(): void;
    close(): void;
  }

  declare export class Windows$Storage$Streams$OutputStreamOverStream
    mixins Windows$Storage$Streams$IOutputStream, Windows$Foundation$IClosable {
    writeAsync(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    dispose(): void;
    close(): void;
  }

  declare export class Windows$Storage$Streams$InMemoryRandomAccessStream
    mixins Windows$Storage$Streams$IRandomAccessStream,
      Windows$Foundation$IClosable,
      Windows$Storage$Streams$IInputStream,
      Windows$Storage$Streams$IOutputStream {
    canRead: boolean;
    canWrite: boolean;
    position: number;
    size: number;
    getInputStreamAt(position: number): Windows$Storage$Streams$IInputStream;
    getOutputStreamAt(position: number): Windows$Storage$Streams$IOutputStream;
    seek(position: number): void;
    cloneStream(): Windows$Storage$Streams$IRandomAccessStream;
    dispose(): void;
    readAsync(
      buffer: Windows$Storage$Streams$IBuffer,
      count: number,
      options: $Values<typeof Windows$Storage$Streams$InputStreamOptions>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IBuffer,
      number
    >;
    writeAsync(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    close(): void;
  }

  declare export type Windows$Storage$Streams$IInputStream = {
    readAsync(
      buffer: Windows$Storage$Streams$IBuffer,
      count: number,
      options: $Values<typeof Windows$Storage$Streams$InputStreamOptions>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IBuffer,
      number
    >
  } & Windows$Foundation$IClosable;

  declare export type Windows$Storage$Streams$IOutputStream = {
    writeAsync(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>,
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>
  } & Windows$Foundation$IClosable;

  declare export type Windows$Storage$Streams$IRandomAccessStream = {
    canRead: boolean,
    canWrite: boolean,
    position: number,
    size: number,
    getInputStreamAt(position: number): Windows$Storage$Streams$IInputStream,
    getOutputStreamAt(position: number): Windows$Storage$Streams$IOutputStream,
    seek(position: number): void,
    cloneStream(): Windows$Storage$Streams$IRandomAccessStream
  } & Windows$Foundation$IClosable &
    Windows$Storage$Streams$IInputStream &
    Windows$Storage$Streams$IOutputStream;

  declare export type Windows$Storage$Streams$IRandomAccessStreamWithContentType = {} & Windows$Storage$Streams$IRandomAccessStream &
    Windows$Foundation$IClosable &
    Windows$Storage$Streams$IInputStream &
    Windows$Storage$Streams$IOutputStream &
    Windows$Storage$Streams$IContentTypeProvider;

  declare var npm$namespace$Windows$Storage$Pickers: {
    PickerViewMode: typeof Windows$Storage$Pickers$PickerViewMode,
    PickerLocationId: typeof Windows$Storage$Pickers$PickerLocationId,
    FilePickerSelectedFilesArray: typeof Windows$Storage$Pickers$FilePickerSelectedFilesArray,
    FilePickerFileTypesOrderedMap: typeof Windows$Storage$Pickers$FilePickerFileTypesOrderedMap,
    FileExtensionVector: typeof Windows$Storage$Pickers$FileExtensionVector,
    FileOpenPicker: typeof Windows$Storage$Pickers$FileOpenPicker,
    FileSavePicker: typeof Windows$Storage$Pickers$FileSavePicker,
    FolderPicker: typeof Windows$Storage$Pickers$FolderPicker,
    Provider: typeof npm$namespace$Windows$Storage$Pickers$Provider
  };

  declare var npm$namespace$Windows$Storage$Pickers$Provider: {
    AddFileResult: typeof Windows$Storage$Pickers$Provider$AddFileResult,
    FileSelectionMode: typeof Windows$Storage$Pickers$Provider$FileSelectionMode,
    SetFileNameResult: typeof Windows$Storage$Pickers$Provider$SetFileNameResult,
    FileRemovedEventArgs: typeof Windows$Storage$Pickers$Provider$FileRemovedEventArgs,
    FileOpenPickerUI: typeof Windows$Storage$Pickers$Provider$FileOpenPickerUI,
    PickerClosingEventArgs: typeof Windows$Storage$Pickers$Provider$PickerClosingEventArgs,
    PickerClosingOperation: typeof Windows$Storage$Pickers$Provider$PickerClosingOperation,
    PickerClosingDeferral: typeof Windows$Storage$Pickers$Provider$PickerClosingDeferral,
    FileSavePickerUI: typeof Windows$Storage$Pickers$Provider$FileSavePickerUI,
    TargetFileRequestedEventArgs: typeof Windows$Storage$Pickers$Provider$TargetFileRequestedEventArgs,
    TargetFileRequest: typeof Windows$Storage$Pickers$Provider$TargetFileRequest,
    TargetFileRequestDeferral: typeof Windows$Storage$Pickers$Provider$TargetFileRequestDeferral
  };
  declare export interface Windows$Storage$Pickers$Provider$IFileRemovedEventArgs {
    id: string;
  }

  declare export class Windows$Storage$Pickers$Provider$FileRemovedEventArgs
    mixins Windows$Storage$Pickers$Provider$IFileRemovedEventArgs {
    id: string;
  }

  declare export var Windows$Storage$Pickers$Provider$AddFileResult: {|
    +added: 0, // 0
    +alreadyAdded: 1, // 1
    +notAllowed: 2, // 2
    +unavailable: 3 // 3
  |};

  declare export var Windows$Storage$Pickers$Provider$FileSelectionMode: {|
    +single: 0, // 0
    +multiple: 1 // 1
  |};

  declare export interface Windows$Storage$Pickers$Provider$IFileOpenPickerUI {
    allowedFileTypes: Windows$Foundation$Collections$IVectorView<string>;
    selectionMode: $Values<
      typeof Windows$Storage$Pickers$Provider$FileSelectionMode
    >;
    settingsIdentifier: string;
    title: string;
    addFile(
      id: string,
      file: Windows$Storage$IStorageFile
    ): $Values<typeof Windows$Storage$Pickers$Provider$AddFileResult>;
    removeFile(id: string): void;
    containsFile(id: string): boolean;
    canAddFile(file: Windows$Storage$IStorageFile): boolean;
    onfileremoved: any;
    onclosing: any;
  }

  declare export class Windows$Storage$Pickers$Provider$FileOpenPickerUI
    mixins Windows$Storage$Pickers$Provider$IFileOpenPickerUI {
    allowedFileTypes: Windows$Foundation$Collections$IVectorView<string>;
    selectionMode: $Values<
      typeof Windows$Storage$Pickers$Provider$FileSelectionMode
    >;
    settingsIdentifier: string;
    title: string;
    addFile(
      id: string,
      file: Windows$Storage$IStorageFile
    ): $Values<typeof Windows$Storage$Pickers$Provider$AddFileResult>;
    removeFile(id: string): void;
    containsFile(id: string): boolean;
    canAddFile(file: Windows$Storage$IStorageFile): boolean;
    onfileremoved: any;
    onclosing: any;
  }

  declare export class Windows$Storage$Pickers$Provider$PickerClosingEventArgs
    mixins Windows$Storage$Pickers$Provider$IPickerClosingEventArgs {
    closingOperation: Windows$Storage$Pickers$Provider$PickerClosingOperation;
    isCanceled: boolean;
  }

  declare export interface Windows$Storage$Pickers$Provider$IPickerClosingEventArgs {
    closingOperation: Windows$Storage$Pickers$Provider$PickerClosingOperation;
    isCanceled: boolean;
  }

  declare export class Windows$Storage$Pickers$Provider$PickerClosingOperation
    mixins Windows$Storage$Pickers$Provider$IPickerClosingOperation {
    deadline: Date;
    getDeferral(): Windows$Storage$Pickers$Provider$PickerClosingDeferral;
  }

  declare export interface Windows$Storage$Pickers$Provider$IPickerClosingOperation {
    deadline: Date;
    getDeferral(): Windows$Storage$Pickers$Provider$PickerClosingDeferral;
  }

  declare export class Windows$Storage$Pickers$Provider$PickerClosingDeferral
    mixins Windows$Storage$Pickers$Provider$IPickerClosingDeferral {
    complete(): void;
  }

  declare export interface Windows$Storage$Pickers$Provider$IPickerClosingDeferral {
    complete(): void;
  }

  declare export var Windows$Storage$Pickers$Provider$SetFileNameResult: {|
    +succeeded: 0, // 0
    +notAllowed: 1, // 1
    +unavailable: 2 // 2
  |};

  declare export interface Windows$Storage$Pickers$Provider$IFileSavePickerUI {
    allowedFileTypes: Windows$Foundation$Collections$IVectorView<string>;
    fileName: string;
    settingsIdentifier: string;
    title: string;
    trySetFileName(
      value: string
    ): $Values<typeof Windows$Storage$Pickers$Provider$SetFileNameResult>;
    onfilenamechanged: any;
    ontargetfilerequested: any;
  }

  declare export class Windows$Storage$Pickers$Provider$FileSavePickerUI
    mixins Windows$Storage$Pickers$Provider$IFileSavePickerUI {
    allowedFileTypes: Windows$Foundation$Collections$IVectorView<string>;
    fileName: string;
    settingsIdentifier: string;
    title: string;
    trySetFileName(
      value: string
    ): $Values<typeof Windows$Storage$Pickers$Provider$SetFileNameResult>;
    onfilenamechanged: any;
    ontargetfilerequested: any;
  }

  declare export class Windows$Storage$Pickers$Provider$TargetFileRequestedEventArgs
    mixins Windows$Storage$Pickers$Provider$ITargetFileRequestedEventArgs {
    request: Windows$Storage$Pickers$Provider$TargetFileRequest;
  }

  declare export interface Windows$Storage$Pickers$Provider$ITargetFileRequestedEventArgs {
    request: Windows$Storage$Pickers$Provider$TargetFileRequest;
  }

  declare export class Windows$Storage$Pickers$Provider$TargetFileRequest
    mixins Windows$Storage$Pickers$Provider$ITargetFileRequest {
    targetFile: Windows$Storage$IStorageFile;
    getDeferral(): Windows$Storage$Pickers$Provider$TargetFileRequestDeferral;
  }

  declare export interface Windows$Storage$Pickers$Provider$ITargetFileRequest {
    targetFile: Windows$Storage$IStorageFile;
    getDeferral(): Windows$Storage$Pickers$Provider$TargetFileRequestDeferral;
  }

  declare export class Windows$Storage$Pickers$Provider$TargetFileRequestDeferral
    mixins Windows$Storage$Pickers$Provider$ITargetFileRequestDeferral {
    complete(): void;
  }

  declare export interface Windows$Storage$Pickers$Provider$ITargetFileRequestDeferral {
    complete(): void;
  }

  declare export var Windows$Storage$Pickers$PickerViewMode: {|
    +list: 0, // 0
    +thumbnail: 1 // 1
  |};

  declare export var Windows$Storage$Pickers$PickerLocationId: {|
    +documentsLibrary: 0, // 0
    +computerFolder: 1, // 1
    +desktop: 2, // 2
    +downloads: 3, // 3
    +homeGroup: 4, // 4
    +musicLibrary: 5, // 5
    +picturesLibrary: 6, // 6
    +videosLibrary: 7 // 7
  |};

  declare export class Windows$Storage$Pickers$FilePickerSelectedFilesArray
    mixins Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>,
      Windows$Foundation$Collections$IIterable<Windows$Storage$StorageFile> {
    size: number;
    getAt(index: number): Windows$Storage$StorageFile;
    indexOf(
      value: Windows$Storage$StorageFile
    ): {
      index: number,
      returnValue: boolean
    };
    getMany(
      startIndex: number
    ): {
      items: Windows$Storage$StorageFile[],
      returnValue: number
    };
    first(): Windows$Foundation$Collections$IIterator<Windows$Storage$StorageFile>;
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$Storage$StorageFile[][]
    ): Windows$Storage$StorageFile[];
    join(seperator: string): string;
    pop(): Windows$Storage$StorageFile;
    push(...items: Windows$Storage$StorageFile[]): void;
    reverse(): Windows$Storage$StorageFile[];
    shift(): Windows$Storage$StorageFile;
    slice(start: number): Windows$Storage$StorageFile[];
    slice(start: number, end: number): Windows$Storage$StorageFile[];
    sort(): Windows$Storage$StorageFile[];
    sort(
      compareFn: (
        a: Windows$Storage$StorageFile,
        b: Windows$Storage$StorageFile
      ) => number
    ): Windows$Storage$StorageFile[];
    splice(start: number): Windows$Storage$StorageFile[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$Storage$StorageFile[]
    ): Windows$Storage$StorageFile[];
    unshift(...items: Windows$Storage$StorageFile[]): number;
    lastIndexOf(searchElement: Windows$Storage$StorageFile): number;
    lastIndexOf(
      searchElement: Windows$Storage$StorageFile,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$Storage$StorageFile,
        index: number,
        array: Windows$Storage$StorageFile[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$Storage$StorageFile,
        index: number,
        array: Windows$Storage$StorageFile[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Storage$StorageFile,
        index: number,
        array: Windows$Storage$StorageFile[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Storage$StorageFile,
        index: number,
        array: Windows$Storage$StorageFile[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$Storage$StorageFile,
        index: number,
        array: Windows$Storage$StorageFile[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$Storage$StorageFile,
        index: number,
        array: Windows$Storage$StorageFile[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$Storage$StorageFile,
        index: number,
        array: Windows$Storage$StorageFile[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$Storage$StorageFile,
        index: number,
        array: Windows$Storage$StorageFile[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$Storage$StorageFile,
        index: number,
        array: Windows$Storage$StorageFile[]
      ) => boolean
    ): Windows$Storage$StorageFile[];
    filter(
      callbackfn: (
        value: Windows$Storage$StorageFile,
        index: number,
        array: Windows$Storage$StorageFile[]
      ) => boolean,
      thisArg: any
    ): Windows$Storage$StorageFile[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$StorageFile[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$StorageFile[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$StorageFile[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$StorageFile[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare export class Windows$Storage$Pickers$FilePickerFileTypesOrderedMap
    mixins Windows$Foundation$Collections$IMap<
        string,
        Windows$Foundation$Collections$IVector<string>
      >,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<
          string,
          Windows$Foundation$Collections$IVector<string>
        >
      > {
    size: number;
    lookup(key: string): Windows$Foundation$Collections$IVector<string>;
    hasKey(key: string): boolean;
    getView(): Windows$Foundation$Collections$IMapView<
      string,
      Windows$Foundation$Collections$IVector<string>
    >;
    insert(
      key: string,
      value: Windows$Foundation$Collections$IVector<string>
    ): boolean;
    remove(key: string): void;
    clear(): void;
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<
        string,
        Windows$Foundation$Collections$IVector<string>
      >
    >;
  }

  declare export class Windows$Storage$Pickers$FileExtensionVector
    mixins Windows$Foundation$Collections$IVector<string>,
      Windows$Foundation$Collections$IIterable<string> {
    size: number;
    getAt(index: number): string;
    getView(): Windows$Foundation$Collections$IVectorView<string>;
    indexOf(
      value: string
    ): {
      index: number,
      returnValue: boolean
    };
    setAt(index: number, value: string): void;
    insertAt(index: number, value: string): void;
    removeAt(index: number): void;
    append(value: string): void;
    removeAtEnd(): void;
    clear(): void;
    getMany(
      startIndex: number
    ): {
      items: string[],
      returnValue: number
    };
    replaceAll(items: string[]): void;
    first(): Windows$Foundation$Collections$IIterator<string>;
    toString(): string;
    toLocaleString(): string;
    concat(...items: string[][]): string[];
    join(seperator: string): string;
    pop(): string;
    push(...items: string[]): void;
    reverse(): string[];
    shift(): string;
    slice(start: number): string[];
    slice(start: number, end: number): string[];
    sort(): string[];
    sort(compareFn: (a: string, b: string) => number): string[];
    splice(start: number): string[];
    splice(start: number, deleteCount: number, ...items: string[]): string[];
    unshift(...items: string[]): number;
    lastIndexOf(searchElement: string): number;
    lastIndexOf(searchElement: string, fromIndex: number): number;
    every(
      callbackfn: (value: string, index: number, array: string[]) => boolean
    ): boolean;
    every(
      callbackfn: (value: string, index: number, array: string[]) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (value: string, index: number, array: string[]) => boolean
    ): boolean;
    some(
      callbackfn: (value: string, index: number, array: string[]) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (value: string, index: number, array: string[]) => void
    ): void;
    forEach(
      callbackfn: (value: string, index: number, array: string[]) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (value: string, index: number, array: string[]) => any
    ): any[];
    map(
      callbackfn: (value: string, index: number, array: string[]) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (value: string, index: number, array: string[]) => boolean
    ): string[];
    filter(
      callbackfn: (value: string, index: number, array: string[]) => boolean,
      thisArg: any
    ): string[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: string[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: string[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: string[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: string[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare export interface Windows$Storage$Pickers$IFileOpenPicker {
    commitButtonText: string;
    continuationData: Windows$Foundation$Collections$ValueSet;
    fileTypeFilter: Windows$Foundation$Collections$IVector<string>;
    settingsIdentifier: string;
    suggestedStartLocation: $Values<
      typeof Windows$Storage$Pickers$PickerLocationId
    >;
    viewMode: $Values<typeof Windows$Storage$Pickers$PickerViewMode>;
    pickMultipleFilesAndContinue(): void;
    pickMultipleFilesAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
    pickSingleFileAndContinue(): void;
    pickSingleFileAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
  }

  declare export interface Windows$Storage$Pickers$IFileSavePicker {
    commitButtonText: string;
    continuationData: Windows$Foundation$Collections$ValueSet;
    defaultFileExtension: string;
    fileTypeChoices: Windows$Foundation$Collections$IMap<
      string,
      Windows$Foundation$Collections$IVector<string>
    >;
    settingsIdentifier: string;
    suggestedFileName: string;
    suggestedSaveFile: Windows$Storage$StorageFile;
    suggestedStartLocation: $Values<
      typeof Windows$Storage$Pickers$PickerLocationId
    >;
    pickSaveFileAndContinue(): void;
    pickSaveFileAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
  }

  declare export interface Windows$Storage$Pickers$IFolderPicker {
    commitButtonText: string;
    continuationData: Windows$Foundation$Collections$ValueSet;
    fileTypeFilter: Windows$Foundation$Collections$IVector<string>;
    settingsIdentifier: string;
    suggestedStartLocation: $Values<
      typeof Windows$Storage$Pickers$PickerLocationId
    >;
    viewMode: $Values<typeof Windows$Storage$Pickers$PickerViewMode>;
    pickFolderAndContinue(): void;
    pickSingleFolderAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
  }

  declare export class Windows$Storage$Pickers$FileOpenPicker
    mixins Windows$Storage$Pickers$IFileOpenPicker {
    commitButtonText: string;
    fileTypeFilter: Windows$Foundation$Collections$IVector<string>;
    settingsIdentifier: string;
    suggestedStartLocation: $Values<
      typeof Windows$Storage$Pickers$PickerLocationId
    >;
    viewMode: $Values<typeof Windows$Storage$Pickers$PickerViewMode>;
    continuationData: Windows$Foundation$Collections$ValueSet;
    pickSingleFileAndContinue(): void;
    pickSingleFileAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    pickMultipleFilesAndContinue(): void;
    pickMultipleFilesAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
  }

  declare export class Windows$Storage$Pickers$FileSavePicker
    mixins Windows$Storage$Pickers$IFileSavePicker {
    commitButtonText: string;
    defaultFileExtension: string;
    fileTypeChoices: Windows$Foundation$Collections$IMap<
      string,
      Windows$Foundation$Collections$IVector<string>
    >;
    settingsIdentifier: string;
    suggestedFileName: string;
    suggestedSaveFile: Windows$Storage$StorageFile;
    suggestedStartLocation: $Values<
      typeof Windows$Storage$Pickers$PickerLocationId
    >;
    continuationData: Windows$Foundation$Collections$ValueSet;
    pickSaveFileAndContinue(): void;
    pickSaveFileAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
  }

  declare export class Windows$Storage$Pickers$FolderPicker
    mixins Windows$Storage$Pickers$IFolderPicker {
    commitButtonText: string;
    fileTypeFilter: Windows$Foundation$Collections$IVector<string>;
    settingsIdentifier: string;
    suggestedStartLocation: $Values<
      typeof Windows$Storage$Pickers$PickerLocationId
    >;
    viewMode: $Values<typeof Windows$Storage$Pickers$PickerViewMode>;
    continuationData: Windows$Foundation$Collections$ValueSet;
    pickFolderAndContinue(): void;
    pickSingleFolderAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
  }

  declare var npm$namespace$Windows$Storage$Provider: {
    CachedFileTarget: typeof Windows$Storage$Provider$CachedFileTarget,
    UIStatus: typeof Windows$Storage$Provider$UIStatus,
    FileUpdateStatus: typeof Windows$Storage$Provider$FileUpdateStatus,
    CachedFileOptions: typeof Windows$Storage$Provider$CachedFileOptions,
    ReadActivationMode: typeof Windows$Storage$Provider$ReadActivationMode,
    WriteActivationMode: typeof Windows$Storage$Provider$WriteActivationMode,
    CachedFileUpdaterUI: typeof Windows$Storage$Provider$CachedFileUpdaterUI,
    FileUpdateRequestedEventArgs: typeof Windows$Storage$Provider$FileUpdateRequestedEventArgs,
    FileUpdateRequest: typeof Windows$Storage$Provider$FileUpdateRequest,
    FileUpdateRequestDeferral: typeof Windows$Storage$Provider$FileUpdateRequestDeferral,
    CachedFileUpdater: typeof Windows$Storage$Provider$CachedFileUpdater
  };

  declare export var Windows$Storage$Provider$CachedFileTarget: {|
    +local: 0, // 0
    +remote: 1 // 1
  |};

  declare export var Windows$Storage$Provider$UIStatus: {|
    +unavailable: 0, // 0
    +hidden: 1, // 1
    +visible: 2, // 2
    +complete: 3 // 3
  |};

  declare export interface Windows$Storage$Provider$ICachedFileUpdaterUI {
    title: string;
    uIStatus: $Values<typeof Windows$Storage$Provider$UIStatus>;
    updateTarget: $Values<typeof Windows$Storage$Provider$CachedFileTarget>;
    onfileupdaterequested: any;
    onuirequested: any;
  }

  declare export class Windows$Storage$Provider$CachedFileUpdaterUI
    mixins Windows$Storage$Provider$ICachedFileUpdaterUI {
    title: string;
    uIStatus: $Values<typeof Windows$Storage$Provider$UIStatus>;
    updateTarget: $Values<typeof Windows$Storage$Provider$CachedFileTarget>;
    onfileupdaterequested: any;
    onuirequested: any;
  }

  declare export class Windows$Storage$Provider$FileUpdateRequestedEventArgs
    mixins Windows$Storage$Provider$IFileUpdateRequestedEventArgs {
    request: Windows$Storage$Provider$FileUpdateRequest;
  }

  declare export interface Windows$Storage$Provider$IFileUpdateRequestedEventArgs {
    request: Windows$Storage$Provider$FileUpdateRequest;
  }

  declare export class Windows$Storage$Provider$FileUpdateRequest
    mixins Windows$Storage$Provider$IFileUpdateRequest {
    contentId: string;
    file: Windows$Storage$StorageFile;
    status: $Values<typeof Windows$Storage$Provider$FileUpdateStatus>;
    getDeferral(): Windows$Storage$Provider$FileUpdateRequestDeferral;
    updateLocalFile(value: Windows$Storage$IStorageFile): void;
  }

  declare export interface Windows$Storage$Provider$IFileUpdateRequest {
    contentId: string;
    file: Windows$Storage$StorageFile;
    status: $Values<typeof Windows$Storage$Provider$FileUpdateStatus>;
    getDeferral(): Windows$Storage$Provider$FileUpdateRequestDeferral;
    updateLocalFile(value: Windows$Storage$IStorageFile): void;
  }

  declare export class Windows$Storage$Provider$FileUpdateRequestDeferral
    mixins Windows$Storage$Provider$IFileUpdateRequestDeferral {
    complete(): void;
  }

  declare export interface Windows$Storage$Provider$IFileUpdateRequestDeferral {
    complete(): void;
  }

  declare export var Windows$Storage$Provider$FileUpdateStatus: {|
    +incomplete: 0, // 0
    +complete: 1, // 1
    +userInputNeeded: 2, // 2
    +currentlyUnavailable: 3, // 3
    +failed: 4, // 4
    +completeAndRenamed: 5 // 5
  |};

  declare export var Windows$Storage$Provider$CachedFileOptions: {|
    +none: 0, // 0
    +requireUpdateOnAccess: 1, // 1
    +useCachedFileWhenOffline: 2, // 2
    +denyAccessWhenOffline: 3 // 3
  |};

  declare export var Windows$Storage$Provider$ReadActivationMode: {|
    +notNeeded: 0, // 0
    +beforeAccess: 1 // 1
  |};

  declare export var Windows$Storage$Provider$WriteActivationMode: {|
    +readOnly: 0, // 0
    +notNeeded: 1, // 1
    +afterWrite: 2 // 2
  |};

  declare export interface Windows$Storage$Provider$ICachedFileUpdaterStatics {
    setUpdateInformation(
      file: Windows$Storage$IStorageFile,
      contentId: string,
      readMode: $Values<typeof Windows$Storage$Provider$ReadActivationMode>,
      writeMode: $Values<typeof Windows$Storage$Provider$WriteActivationMode>,
      options: $Values<typeof Windows$Storage$Provider$CachedFileOptions>
    ): void;
  }

  declare export class Windows$Storage$Provider$CachedFileUpdater {
    static setUpdateInformation(
      file: Windows$Storage$IStorageFile,
      contentId: string,
      readMode: $Values<typeof Windows$Storage$Provider$ReadActivationMode>,
      writeMode: $Values<typeof Windows$Storage$Provider$WriteActivationMode>,
      options: $Values<typeof Windows$Storage$Provider$CachedFileOptions>
    ): void;
  }

  declare var npm$namespace$Windows$Storage$FileProperties: {
    PropertyPrefetchOptions: typeof Windows$Storage$FileProperties$PropertyPrefetchOptions,
    ThumbnailType: typeof Windows$Storage$FileProperties$ThumbnailType,
    ThumbnailMode: typeof Windows$Storage$FileProperties$ThumbnailMode,
    ThumbnailOptions: typeof Windows$Storage$FileProperties$ThumbnailOptions,
    PhotoOrientation: typeof Windows$Storage$FileProperties$PhotoOrientation,
    VideoOrientation: typeof Windows$Storage$FileProperties$VideoOrientation,
    StorageItemThumbnail: typeof Windows$Storage$FileProperties$StorageItemThumbnail,
    MusicProperties: typeof Windows$Storage$FileProperties$MusicProperties,
    VideoProperties: typeof Windows$Storage$FileProperties$VideoProperties,
    ImageProperties: typeof Windows$Storage$FileProperties$ImageProperties,
    DocumentProperties: typeof Windows$Storage$FileProperties$DocumentProperties,
    StorageItemContentProperties: typeof Windows$Storage$FileProperties$StorageItemContentProperties,
    BasicProperties: typeof Windows$Storage$FileProperties$BasicProperties
  };

  declare export var Windows$Storage$FileProperties$PropertyPrefetchOptions: {|
    +none: 0, // 0
    +musicProperties: 1, // 1
    +videoProperties: 2, // 2
    +imageProperties: 3, // 3
    +documentProperties: 4, // 4
    +basicProperties: 5 // 5
  |};

  declare export var Windows$Storage$FileProperties$ThumbnailType: {|
    +image: 0, // 0
    +icon: 1 // 1
  |};

  declare export interface Windows$Storage$FileProperties$IThumbnailProperties {
    originalHeight: number;
    originalWidth: number;
    returnedSmallerCachedSize: boolean;
    type: $Values<typeof Windows$Storage$FileProperties$ThumbnailType>;
  }

  declare export class Windows$Storage$FileProperties$StorageItemThumbnail
    mixins Windows$Storage$Streams$IRandomAccessStreamWithContentType,
      Windows$Storage$Streams$IRandomAccessStream,
      Windows$Foundation$IClosable,
      Windows$Storage$Streams$IInputStream,
      Windows$Storage$Streams$IOutputStream,
      Windows$Storage$Streams$IContentTypeProvider,
      Windows$Storage$FileProperties$IThumbnailProperties {
    canRead: boolean;
    canWrite: boolean;
    position: number;
    size: number;
    contentType: string;
    originalHeight: number;
    originalWidth: number;
    returnedSmallerCachedSize: boolean;
    type: $Values<typeof Windows$Storage$FileProperties$ThumbnailType>;
    getInputStreamAt(position: number): Windows$Storage$Streams$IInputStream;
    getOutputStreamAt(position: number): Windows$Storage$Streams$IOutputStream;
    seek(position: number): void;
    cloneStream(): Windows$Storage$Streams$IRandomAccessStream;
    dispose(): void;
    readAsync(
      buffer: Windows$Storage$Streams$IBuffer,
      count: number,
      options: $Values<typeof Windows$Storage$Streams$InputStreamOptions>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IBuffer,
      number
    >;
    writeAsync(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    close(): void;
  }

  declare export var Windows$Storage$FileProperties$ThumbnailMode: {|
    +picturesView: 0, // 0
    +videosView: 1, // 1
    +musicView: 2, // 2
    +documentsView: 3, // 3
    +listView: 4, // 4
    +singleItem: 5 // 5
  |};

  declare export var Windows$Storage$FileProperties$ThumbnailOptions: {|
    +none: 0, // 0
    +returnOnlyIfCached: 1, // 1
    +resizeThumbnail: 2, // 2
    +useCurrentScale: 3 // 3
  |};

  declare export var Windows$Storage$FileProperties$PhotoOrientation: {|
    +unspecified: 0, // 0
    +normal: 1, // 1
    +flipHorizontal: 2, // 2
    +rotate180: 3, // 3
    +flipVertical: 4, // 4
    +transpose: 5, // 5
    +rotate270: 6, // 6
    +transverse: 7, // 7
    +rotate90: 8 // 8
  |};

  declare export var Windows$Storage$FileProperties$VideoOrientation: {|
    +normal: 0, // 0
    +rotate90: 1, // 1
    +rotate180: 2, // 2
    +rotate270: 3 // 3
  |};

  declare export interface Windows$Storage$FileProperties$IStorageItemExtraProperties {
    retrievePropertiesAsync(
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IMap<string, any>
    >;
    savePropertiesAsync(
      propertiesToSave: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      >
    ): Windows$Foundation$IAsyncAction;
    savePropertiesAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export type Windows$Storage$FileProperties$IStorageItemContentProperties = {
    getMusicPropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$MusicProperties>,
    getVideoPropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$VideoProperties>,
    getImagePropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$ImageProperties>,
    getDocumentPropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$DocumentProperties>
  } & Windows$Storage$FileProperties$IStorageItemExtraProperties;

  declare export class Windows$Storage$FileProperties$MusicProperties
    mixins Windows$Storage$FileProperties$IMusicProperties,
      Windows$Storage$FileProperties$IStorageItemExtraProperties {
    album: string;
    albumArtist: string;
    artist: string;
    bitrate: number;
    composers: Windows$Foundation$Collections$IVector<string>;
    conductors: Windows$Foundation$Collections$IVector<string>;
    duration: number;
    genre: Windows$Foundation$Collections$IVector<string>;
    producers: Windows$Foundation$Collections$IVector<string>;
    publisher: string;
    rating: number;
    subtitle: string;
    title: string;
    trackNumber: number;
    writers: Windows$Foundation$Collections$IVector<string>;
    year: number;
    retrievePropertiesAsync(
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IMap<string, any>
    >;
    savePropertiesAsync(
      propertiesToSave: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      >
    ): Windows$Foundation$IAsyncAction;
    savePropertiesAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export class Windows$Storage$FileProperties$VideoProperties
    mixins Windows$Storage$FileProperties$IVideoProperties,
      Windows$Storage$FileProperties$IStorageItemExtraProperties {
    bitrate: number;
    directors: Windows$Foundation$Collections$IVector<string>;
    duration: number;
    height: number;
    keywords: Windows$Foundation$Collections$IVector<string>;
    latitude: number;
    longitude: number;
    orientation: $Values<
      typeof Windows$Storage$FileProperties$VideoOrientation
    >;
    producers: Windows$Foundation$Collections$IVector<string>;
    publisher: string;
    rating: number;
    subtitle: string;
    title: string;
    width: number;
    writers: Windows$Foundation$Collections$IVector<string>;
    year: number;
    retrievePropertiesAsync(
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IMap<string, any>
    >;
    savePropertiesAsync(
      propertiesToSave: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      >
    ): Windows$Foundation$IAsyncAction;
    savePropertiesAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export class Windows$Storage$FileProperties$ImageProperties
    mixins Windows$Storage$FileProperties$IImageProperties,
      Windows$Storage$FileProperties$IStorageItemExtraProperties {
    cameraManufacturer: string;
    cameraModel: string;
    dateTaken: Date;
    height: number;
    keywords: Windows$Foundation$Collections$IVector<string>;
    latitude: number;
    longitude: number;
    orientation: $Values<
      typeof Windows$Storage$FileProperties$PhotoOrientation
    >;
    peopleNames: Windows$Foundation$Collections$IVectorView<string>;
    rating: number;
    title: string;
    width: number;
    retrievePropertiesAsync(
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IMap<string, any>
    >;
    savePropertiesAsync(
      propertiesToSave: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      >
    ): Windows$Foundation$IAsyncAction;
    savePropertiesAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export class Windows$Storage$FileProperties$DocumentProperties
    mixins Windows$Storage$FileProperties$IDocumentProperties,
      Windows$Storage$FileProperties$IStorageItemExtraProperties {
    author: Windows$Foundation$Collections$IVector<string>;
    comment: string;
    keywords: Windows$Foundation$Collections$IVector<string>;
    title: string;
    retrievePropertiesAsync(
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IMap<string, any>
    >;
    savePropertiesAsync(
      propertiesToSave: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      >
    ): Windows$Foundation$IAsyncAction;
    savePropertiesAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export type Windows$Storage$FileProperties$IMusicProperties = {
    album: string,
    albumArtist: string,
    artist: string,
    bitrate: number,
    composers: Windows$Foundation$Collections$IVector<string>,
    conductors: Windows$Foundation$Collections$IVector<string>,
    duration: number,
    genre: Windows$Foundation$Collections$IVector<string>,
    producers: Windows$Foundation$Collections$IVector<string>,
    publisher: string,
    rating: number,
    subtitle: string,
    title: string,
    trackNumber: number,
    writers: Windows$Foundation$Collections$IVector<string>,
    year: number
  } & Windows$Storage$FileProperties$IStorageItemExtraProperties;

  declare export type Windows$Storage$FileProperties$IImageProperties = {
    cameraManufacturer: string,
    cameraModel: string,
    dateTaken: Date,
    height: number,
    keywords: Windows$Foundation$Collections$IVector<string>,
    latitude: number,
    longitude: number,
    orientation: $Values<
      typeof Windows$Storage$FileProperties$PhotoOrientation
    >,
    peopleNames: Windows$Foundation$Collections$IVectorView<string>,
    rating: number,
    title: string,
    width: number
  } & Windows$Storage$FileProperties$IStorageItemExtraProperties;

  declare export type Windows$Storage$FileProperties$IVideoProperties = {
    bitrate: number,
    directors: Windows$Foundation$Collections$IVector<string>,
    duration: number,
    height: number,
    keywords: Windows$Foundation$Collections$IVector<string>,
    latitude: number,
    longitude: number,
    orientation: $Values<
      typeof Windows$Storage$FileProperties$VideoOrientation
    >,
    producers: Windows$Foundation$Collections$IVector<string>,
    publisher: string,
    rating: number,
    subtitle: string,
    title: string,
    width: number,
    writers: Windows$Foundation$Collections$IVector<string>,
    year: number
  } & Windows$Storage$FileProperties$IStorageItemExtraProperties;

  declare export type Windows$Storage$FileProperties$IDocumentProperties = {
    author: Windows$Foundation$Collections$IVector<string>,
    comment: string,
    keywords: Windows$Foundation$Collections$IVector<string>,
    title: string
  } & Windows$Storage$FileProperties$IStorageItemExtraProperties;

  declare export interface Windows$Storage$FileProperties$IBasicProperties {
    dateModified: Date;
    itemDate: Date;
    size: number;
  }

  declare export class Windows$Storage$FileProperties$StorageItemContentProperties
    mixins Windows$Storage$FileProperties$IStorageItemContentProperties,
      Windows$Storage$FileProperties$IStorageItemExtraProperties {
    getMusicPropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$MusicProperties>;
    getVideoPropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$VideoProperties>;
    getImagePropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$ImageProperties>;
    getDocumentPropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$DocumentProperties>;
    retrievePropertiesAsync(
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IMap<string, any>
    >;
    savePropertiesAsync(
      propertiesToSave: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      >
    ): Windows$Foundation$IAsyncAction;
    savePropertiesAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export class Windows$Storage$FileProperties$BasicProperties
    mixins Windows$Storage$FileProperties$IBasicProperties,
      Windows$Storage$FileProperties$IStorageItemExtraProperties {
    dateModified: Date;
    itemDate: Date;
    size: number;
    retrievePropertiesAsync(
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IMap<string, any>
    >;
    savePropertiesAsync(
      propertiesToSave: Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      >
    ): Windows$Foundation$IAsyncAction;
    savePropertiesAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$Storage$IKnownFoldersStatics {
    documentsLibrary: Windows$Storage$StorageFolder;
    homeGroup: Windows$Storage$StorageFolder;
    mediaServerDevices: Windows$Storage$StorageFolder;
    musicLibrary: Windows$Storage$StorageFolder;
    picturesLibrary: Windows$Storage$StorageFolder;
    removableDevices: Windows$Storage$StorageFolder;
    videosLibrary: Windows$Storage$StorageFolder;
  }

  declare export class Windows$Storage$StorageFolder
    mixins Windows$Storage$IStorageFolder,
      Windows$Storage$IStorageFolder2,
      Windows$Storage$IStorageItem,
      Windows$Storage$Search$IStorageFolderQueryOperations,
      Windows$Storage$IStorageItemProperties {
    attributes: $Values<typeof Windows$Storage$FileAttributes>;
    dateCreated: Date;
    name: string;
    path: string;
    displayName: string;
    displayType: string;
    folderRelativeId: string;
    properties: Windows$Storage$FileProperties$StorageItemContentProperties;
    createFileAsync(
      desiredName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    createFileAsync(
      desiredName: string,
      options: $Values<typeof Windows$Storage$CreationCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    createFolderAsync(
      desiredName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    createFolderAsync(
      desiredName: string,
      options: $Values<typeof Windows$Storage$CreationCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    getFileAsync(
      name: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    getFolderAsync(
      name: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    getItemAsync(
      name: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$IStorageItem>;
    getFilesAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
    getFoldersAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >;
    getItemsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >;
    renameAsync(desiredName: string): Windows$Foundation$IAsyncAction;
    renameAsync(
      desiredName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncAction;
    deleteAsync(): Windows$Foundation$IAsyncAction;
    deleteAsync(
      option: $Values<typeof Windows$Storage$StorageDeleteOption>
    ): Windows$Foundation$IAsyncAction;
    getBasicPropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$BasicProperties>;
    isOfType(type: $Values<typeof Windows$Storage$StorageItemTypes>): boolean;
    getIndexedStateAsync(): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$Storage$Search$IndexedState>
    >;
    createFileQuery(): Windows$Storage$Search$StorageFileQueryResult;
    createFileQuery(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>
    ): Windows$Storage$Search$StorageFileQueryResult;
    createFileQueryWithOptions(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): Windows$Storage$Search$StorageFileQueryResult;
    createFolderQuery(): Windows$Storage$Search$StorageFolderQueryResult;
    createFolderQuery(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>
    ): Windows$Storage$Search$StorageFolderQueryResult;
    createFolderQueryWithOptions(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): Windows$Storage$Search$StorageFolderQueryResult;
    createItemQuery(): Windows$Storage$Search$StorageItemQueryResult;
    createItemQueryWithOptions(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): Windows$Storage$Search$StorageItemQueryResult;
    getFilesAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>,
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
    getFilesAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
    getFoldersAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>,
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >;
    getFoldersAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >;
    getItemsAsync(
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >;
    areQueryOptionsSupported(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): boolean;
    isCommonFolderQuerySupported(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>
    ): boolean;
    isCommonFileQuerySupported(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>
    ): boolean;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number,
      options: $Values<typeof Windows$Storage$FileProperties$ThumbnailOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    static getFolderFromPathAsync(
      path: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    tryGetItemAsync(
      name: string
    ): Windows$Foundation$IAsyncOperation<Storage$IStorageItem>;
  }

  declare export class Windows$Storage$KnownFolders {
    static documentsLibrary: Windows$Storage$StorageFolder;
    static homeGroup: Windows$Storage$StorageFolder;
    static mediaServerDevices: Windows$Storage$StorageFolder;
    static musicLibrary: Windows$Storage$StorageFolder;
    static picturesLibrary: Windows$Storage$StorageFolder;
    static removableDevices: Windows$Storage$StorageFolder;
    static videosLibrary: Windows$Storage$StorageFolder;
  }

  declare export var Windows$Storage$CreationCollisionOption: {|
    +generateUniqueName: 0, // 0
    +replaceExisting: 1, // 1
    +failIfExists: 2, // 2
    +openIfExists: 3 // 3
  |};

  declare export interface Windows$Storage$IDownloadsFolderStatics {
    createFileAsync(
      desiredName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    createFolderAsync(
      desiredName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    createFileAsync(
      desiredName: string,
      option: $Values<typeof Windows$Storage$CreationCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    createFolderAsync(
      desiredName: string,
      option: $Values<typeof Windows$Storage$CreationCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
  }

  declare export class Windows$Storage$StorageFile
    mixins Windows$Storage$IStorageFile,
      Windows$Storage$IStorageItem,
      Windows$Storage$Streams$IRandomAccessStreamReference,
      Windows$Storage$Streams$IInputStreamReference,
      Windows$Storage$IStorageItemProperties {
    contentType: string;
    fileType: string;
    attributes: $Values<typeof Windows$Storage$FileAttributes>;
    dateCreated: Date;
    name: string;
    path: string;
    displayName: string;
    displayType: string;
    folderRelativeId: string;
    properties: Windows$Storage$FileProperties$StorageItemContentProperties;
    openAsync(
      accessMode: $Values<typeof Windows$Storage$FileAccessMode>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IRandomAccessStream>;
    openTransactedWriteAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageStreamTransaction>;
    copyAsync(
      destinationFolder: Windows$Storage$IStorageFolder
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    copyAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    copyAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    copyAndReplaceAsync(
      fileToReplace: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
    moveAsync(
      destinationFolder: Windows$Storage$IStorageFolder
    ): Windows$Foundation$IAsyncAction;
    moveAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string
    ): Windows$Foundation$IAsyncAction;
    moveAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncAction;
    moveAndReplaceAsync(
      fileToReplace: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
    renameAsync(desiredName: string): Windows$Foundation$IAsyncAction;
    renameAsync(
      desiredName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncAction;
    deleteAsync(): Windows$Foundation$IAsyncAction;
    deleteAsync(
      option: $Values<typeof Windows$Storage$StorageDeleteOption>
    ): Windows$Foundation$IAsyncAction;
    getBasicPropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$BasicProperties>;
    isOfType(type: $Values<typeof Windows$Storage$StorageItemTypes>): boolean;
    openReadAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IRandomAccessStreamWithContentType>;
    openSequentialReadAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IInputStream>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number,
      options: $Values<typeof Windows$Storage$FileProperties$ThumbnailOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    static getFileFromPathAsync(
      path: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    static getFileFromApplicationUriAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    static createStreamedFileAsync(
      displayNameWithExtension: string,
      dataRequested: Windows$Storage$StreamedFileDataRequestedHandler,
      thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    static replaceWithStreamedFileAsync(
      fileToReplace: Windows$Storage$IStorageFile,
      dataRequested: Windows$Storage$StreamedFileDataRequestedHandler,
      thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    static createStreamedFileFromUriAsync(
      displayNameWithExtension: string,
      uri: Windows$Foundation$Uri,
      thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    static replaceWithStreamedFileFromUriAsync(
      fileToReplace: Windows$Storage$IStorageFile,
      uri: Windows$Foundation$Uri,
      thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
  }

  declare export class Windows$Storage$DownloadsFolder {
    static createFileAsync(
      desiredName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    static createFolderAsync(
      desiredName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    static createFileAsync(
      desiredName: string,
      option: $Values<typeof Windows$Storage$CreationCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    static createFolderAsync(
      desiredName: string,
      option: $Values<typeof Windows$Storage$CreationCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
  }

  declare export var Windows$Storage$NameCollisionOption: {|
    +generateUniqueName: 0, // 0
    +replaceExisting: 1, // 1
    +failIfExists: 2 // 2
  |};

  declare export var Windows$Storage$StorageDeleteOption: {|
    +default: 0, // 0
    +permanentDelete: 1 // 1
  |};

  declare export var Windows$Storage$StorageItemTypes: {|
    +none: 0, // 0
    +file: 1, // 1
    +folder: 2 // 2
  |};

  declare export var Windows$Storage$FileAttributes: {|
    +normal: 0, // 0
    +readOnly: 1, // 1
    +directory: 2, // 2
    +archive: 3, // 3
    +temporary: 4 // 4
  |};

  declare export var Windows$Storage$FileAccessMode: {|
    +read: 0, // 0
    +readWrite: 1 // 1
  |};

  declare export var Windows$Storage$StreamedFileFailureMode: {|
    +failed: 0, // 0
    +currentlyUnavailable: 1, // 1
    +incomplete: 2 // 2
  |};

  declare export interface Windows$Storage$IStreamedFileDataRequest {
    failAndClose(
      failureMode: $Values<typeof Windows$Storage$StreamedFileFailureMode>
    ): void;
  }

  declare export class Windows$Storage$StreamedFileDataRequest
    mixins Windows$Storage$Streams$IOutputStream,
      Windows$Foundation$IClosable,
      Windows$Storage$IStreamedFileDataRequest {
    writeAsync(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    dispose(): void;
    failAndClose(
      failureMode: $Values<typeof Windows$Storage$StreamedFileFailureMode>
    ): void;
    close(): void;
  }

  declare export interface Windows$Storage$StreamedFileDataRequestedHandler {
    (stream: Windows$Storage$StreamedFileDataRequest): void;
  }

  declare export interface Windows$Storage$IStorageFileStatics {
    getFileFromPathAsync(
      path: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    getFileFromApplicationUriAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    createStreamedFileAsync(
      displayNameWithExtension: string,
      dataRequested: Windows$Storage$StreamedFileDataRequestedHandler,
      thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    replaceWithStreamedFileAsync(
      fileToReplace: Windows$Storage$IStorageFile,
      dataRequested: Windows$Storage$StreamedFileDataRequestedHandler,
      thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    createStreamedFileFromUriAsync(
      displayNameWithExtension: string,
      uri: Windows$Foundation$Uri,
      thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    replaceWithStreamedFileFromUriAsync(
      fileToReplace: Windows$Storage$IStorageFile,
      uri: Windows$Foundation$Uri,
      thumbnail: Windows$Storage$Streams$IRandomAccessStreamReference
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
  }

  declare export class Windows$Storage$StorageStreamTransaction
    mixins Windows$Storage$IStorageStreamTransaction,
      Windows$Foundation$IClosable {
    stream: Windows$Storage$Streams$IRandomAccessStream;
    commitAsync(): Windows$Foundation$IAsyncAction;
    dispose(): void;
    close(): void;
  }

  declare export interface Windows$Storage$IStorageItem {
    attributes: $Values<typeof Windows$Storage$FileAttributes>;
    dateCreated: Date;
    name: string;
    path: string;
    renameAsync(desiredName: string): Windows$Foundation$IAsyncAction;
    renameAsync(
      desiredName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncAction;
    deleteAsync(): Windows$Foundation$IAsyncAction;
    deleteAsync(
      option: $Values<typeof Windows$Storage$StorageDeleteOption>
    ): Windows$Foundation$IAsyncAction;
    getBasicPropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$BasicProperties>;
    isOfType(type: $Values<typeof Windows$Storage$StorageItemTypes>): boolean;
  }

  declare export type Windows$Storage$IStorageFolder = {
    createFileAsync(
      desiredName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>,
    createFileAsync(
      desiredName: string,
      options: $Values<typeof Windows$Storage$CreationCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>,
    createFolderAsync(
      desiredName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>,
    createFolderAsync(
      desiredName: string,
      options: $Values<typeof Windows$Storage$CreationCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>,
    getFileAsync(
      name: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>,
    getFolderAsync(
      name: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>,
    getItemAsync(
      name: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$IStorageItem>,
    getFilesAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >,
    getFoldersAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >,
    getItemsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >,
    getItemsAsync(
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >
  } & Windows$Storage$IStorageItem;

  declare export interface Windows$Storage$IStorageFolder2 {
    tryGetItemAsync(
      name: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$IStorageItem>;
  }

  declare export type Windows$Storage$IStorageFile = {
    contentType: string,
    fileType: string,
    openAsync(
      accessMode: $Values<typeof Windows$Storage$FileAccessMode>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IRandomAccessStream>,
    openTransactedWriteAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageStreamTransaction>,
    copyAsync(
      destinationFolder: Windows$Storage$IStorageFolder
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>,
    copyAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>,
    copyAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>,
    copyAndReplaceAsync(
      fileToReplace: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction,
    moveAsync(
      destinationFolder: Windows$Storage$IStorageFolder
    ): Windows$Foundation$IAsyncAction,
    moveAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string
    ): Windows$Foundation$IAsyncAction,
    moveAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncAction,
    moveAndReplaceAsync(
      fileToReplace: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction
  } & Windows$Storage$IStorageItem &
    Windows$Storage$Streams$IRandomAccessStreamReference &
    Windows$Storage$Streams$IInputStreamReference;

  declare export interface Windows$Storage$IStorageFolderStatics {
    getFolderFromPathAsync(
      path: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
  }

  declare export interface Windows$Storage$IStorageItemProperties {
    displayName: string;
    displayType: string;
    folderRelativeId: string;
    properties: Windows$Storage$FileProperties$StorageItemContentProperties;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number,
      options: $Values<typeof Windows$Storage$FileProperties$ThumbnailOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
  }

  declare export interface Windows$Storage$IFileIOStatics {
    readTextAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<string>;
    readTextAsync(
      file: Windows$Storage$IStorageFile,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncOperation<string>;
    writeTextAsync(
      file: Windows$Storage$IStorageFile,
      contents: string
    ): Windows$Foundation$IAsyncAction;
    writeTextAsync(
      file: Windows$Storage$IStorageFile,
      contents: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    appendTextAsync(
      file: Windows$Storage$IStorageFile,
      contents: string
    ): Windows$Foundation$IAsyncAction;
    appendTextAsync(
      file: Windows$Storage$IStorageFile,
      contents: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    readLinesAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVector<string>
    >;
    readLinesAsync(
      file: Windows$Storage$IStorageFile,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVector<string>
    >;
    writeLinesAsync(
      file: Windows$Storage$IStorageFile,
      lines: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncAction;
    writeLinesAsync(
      file: Windows$Storage$IStorageFile,
      lines: Windows$Foundation$Collections$IIterable<string>,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    appendLinesAsync(
      file: Windows$Storage$IStorageFile,
      lines: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncAction;
    appendLinesAsync(
      file: Windows$Storage$IStorageFile,
      lines: Windows$Foundation$Collections$IIterable<string>,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    readBufferAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IBuffer>;
    writeBufferAsync(
      file: Windows$Storage$IStorageFile,
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncAction;
    writeBytesAsync(
      file: Windows$Storage$IStorageFile,
      buffer: Uint8Array
    ): Windows$Foundation$IAsyncAction;
  }

  declare export class Windows$Storage$FileIO {
    static readTextAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<string>;
    static readTextAsync(
      file: Windows$Storage$IStorageFile,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncOperation<string>;
    static writeTextAsync(
      file: Windows$Storage$IStorageFile,
      contents: string
    ): Windows$Foundation$IAsyncAction;
    static writeTextAsync(
      file: Windows$Storage$IStorageFile,
      contents: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    static appendTextAsync(
      file: Windows$Storage$IStorageFile,
      contents: string
    ): Windows$Foundation$IAsyncAction;
    static appendTextAsync(
      file: Windows$Storage$IStorageFile,
      contents: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    static readLinesAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVector<string>
    >;
    static readLinesAsync(
      file: Windows$Storage$IStorageFile,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVector<string>
    >;
    static writeLinesAsync(
      file: Windows$Storage$IStorageFile,
      lines: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncAction;
    static writeLinesAsync(
      file: Windows$Storage$IStorageFile,
      lines: Windows$Foundation$Collections$IIterable<string>,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    static appendLinesAsync(
      file: Windows$Storage$IStorageFile,
      lines: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncAction;
    static appendLinesAsync(
      file: Windows$Storage$IStorageFile,
      lines: Windows$Foundation$Collections$IIterable<string>,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    static readBufferAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IBuffer>;
    static writeBufferAsync(
      file: Windows$Storage$IStorageFile,
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncAction;
    static writeBytesAsync(
      file: Windows$Storage$IStorageFile,
      buffer: Uint8Array
    ): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$Storage$IPathIOStatics {
    readTextAsync(
      absolutePath: string
    ): Windows$Foundation$IAsyncOperation<string>;
    readTextAsync(
      absolutePath: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncOperation<string>;
    writeTextAsync(
      absolutePath: string,
      contents: string
    ): Windows$Foundation$IAsyncAction;
    writeTextAsync(
      absolutePath: string,
      contents: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    appendTextAsync(
      absolutePath: string,
      contents: string
    ): Windows$Foundation$IAsyncAction;
    appendTextAsync(
      absolutePath: string,
      contents: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    readLinesAsync(
      absolutePath: string
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVector<string>
    >;
    readLinesAsync(
      absolutePath: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVector<string>
    >;
    writeLinesAsync(
      absolutePath: string,
      lines: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncAction;
    writeLinesAsync(
      absolutePath: string,
      lines: Windows$Foundation$Collections$IIterable<string>,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    appendLinesAsync(
      absolutePath: string,
      lines: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncAction;
    appendLinesAsync(
      absolutePath: string,
      lines: Windows$Foundation$Collections$IIterable<string>,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    readBufferAsync(
      absolutePath: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IBuffer>;
    writeBufferAsync(
      absolutePath: string,
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncAction;
    writeBytesAsync(
      absolutePath: string,
      buffer: Uint8Array
    ): Windows$Foundation$IAsyncAction;
  }

  declare export class Windows$Storage$PathIO {
    static readTextAsync(
      absolutePath: string
    ): Windows$Foundation$IAsyncOperation<string>;
    static readTextAsync(
      absolutePath: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncOperation<string>;
    static writeTextAsync(
      absolutePath: string,
      contents: string
    ): Windows$Foundation$IAsyncAction;
    static writeTextAsync(
      absolutePath: string,
      contents: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    static appendTextAsync(
      absolutePath: string,
      contents: string
    ): Windows$Foundation$IAsyncAction;
    static appendTextAsync(
      absolutePath: string,
      contents: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    static readLinesAsync(
      absolutePath: string
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVector<string>
    >;
    static readLinesAsync(
      absolutePath: string,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVector<string>
    >;
    static writeLinesAsync(
      absolutePath: string,
      lines: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncAction;
    static writeLinesAsync(
      absolutePath: string,
      lines: Windows$Foundation$Collections$IIterable<string>,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    static appendLinesAsync(
      absolutePath: string,
      lines: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Foundation$IAsyncAction;
    static appendLinesAsync(
      absolutePath: string,
      lines: Windows$Foundation$Collections$IIterable<string>,
      encoding: $Values<typeof Windows$Storage$Streams$UnicodeEncoding>
    ): Windows$Foundation$IAsyncAction;
    static readBufferAsync(
      absolutePath: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IBuffer>;
    static writeBufferAsync(
      absolutePath: string,
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncAction;
    static writeBytesAsync(
      absolutePath: string,
      buffer: Uint8Array
    ): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$Storage$ICachedFileManagerStatics {
    deferUpdates(file: Windows$Storage$IStorageFile): void;
    completeUpdatesAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$Storage$Provider$FileUpdateStatus>
    >;
  }

  declare export class Windows$Storage$CachedFileManager {
    static deferUpdates(file: Windows$Storage$IStorageFile): void;
    static completeUpdatesAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$Storage$Provider$FileUpdateStatus>
    >;
  }

  declare export type Windows$Storage$IStorageStreamTransaction = {
    stream: Windows$Storage$Streams$IRandomAccessStream,
    commitAsync(): Windows$Foundation$IAsyncAction
  } & Windows$Foundation$IClosable;

  declare export var Windows$Storage$ApplicationDataLocality: {|
    +local: 0, // 0
    +roaming: 1, // 1
    +temporary: 2 // 2
  |};

  declare export var Windows$Storage$ApplicationDataCreateDisposition: {|
    +always: 0, // 0
    +existing: 1 // 1
  |};

  declare export interface Windows$Storage$IApplicationDataStatics {
    current: Windows$Storage$ApplicationData;
  }

  declare export class Windows$Storage$ApplicationData
    mixins Windows$Storage$IApplicationData {
    localFolder: Windows$Storage$StorageFolder;
    localSettings: Windows$Storage$ApplicationDataContainer;
    roamingFolder: Windows$Storage$StorageFolder;
    roamingSettings: Windows$Storage$ApplicationDataContainer;
    roamingStorageQuota: number;
    temporaryFolder: Windows$Storage$StorageFolder;
    version: number;
    setVersionAsync(
      desiredVersion: number,
      handler: Windows$Storage$ApplicationDataSetVersionHandler
    ): Windows$Foundation$IAsyncAction;
    clearAsync(): Windows$Foundation$IAsyncAction;
    clearAsync(
      locality: $Values<typeof Windows$Storage$ApplicationDataLocality>
    ): Windows$Foundation$IAsyncAction;
    ondatachanged: any;
    signalDataChanged(): void;
    static current: Windows$Storage$ApplicationData;
  }

  declare export interface Windows$Storage$IApplicationData {
    localFolder: Windows$Storage$StorageFolder;
    localSettings: Windows$Storage$ApplicationDataContainer;
    roamingFolder: Windows$Storage$StorageFolder;
    roamingSettings: Windows$Storage$ApplicationDataContainer;
    roamingStorageQuota: number;
    temporaryFolder: Windows$Storage$StorageFolder;
    version: number;
    setVersionAsync(
      desiredVersion: number,
      handler: Windows$Storage$ApplicationDataSetVersionHandler
    ): Windows$Foundation$IAsyncAction;
    clearAsync(): Windows$Foundation$IAsyncAction;
    clearAsync(
      locality: $Values<typeof Windows$Storage$ApplicationDataLocality>
    ): Windows$Foundation$IAsyncAction;
    ondatachanged: any;
    signalDataChanged(): void;
  }

  declare export interface Windows$Storage$ApplicationDataSetVersionHandler {
    (setVersionRequest: Windows$Storage$SetVersionRequest): void;
  }

  declare export class Windows$Storage$SetVersionRequest
    mixins Windows$Storage$ISetVersionRequest {
    currentVersion: number;
    desiredVersion: number;
    getDeferral(): Windows$Storage$SetVersionDeferral;
  }

  declare export class Windows$Storage$ApplicationDataContainer
    mixins Windows$Storage$IApplicationDataContainer {
    containers: Windows$Foundation$Collections$IMapView<
      string,
      Windows$Storage$ApplicationDataContainer
    >;
    locality: $Values<typeof Windows$Storage$ApplicationDataLocality>;
    name: string;
    values: Windows$Foundation$Collections$IPropertySet;
    createContainer(
      name: string,
      disposition: $Values<
        typeof Windows$Storage$ApplicationDataCreateDisposition
      >
    ): Windows$Storage$ApplicationDataContainer;
    deleteContainer(name: string): void;
  }

  declare export interface Windows$Storage$ISetVersionRequest {
    currentVersion: number;
    desiredVersion: number;
    getDeferral(): Windows$Storage$SetVersionDeferral;
  }

  declare export class Windows$Storage$SetVersionDeferral
    mixins Windows$Storage$ISetVersionDeferral {
    complete(): void;
  }

  declare export interface Windows$Storage$ISetVersionDeferral {
    complete(): void;
  }

  declare export interface Windows$Storage$IApplicationDataContainer {
    containers: Windows$Foundation$Collections$IMapView<
      string,
      Windows$Storage$ApplicationDataContainer
    >;
    locality: $Values<typeof Windows$Storage$ApplicationDataLocality>;
    name: string;
    values: Windows$Foundation$Collections$IPropertySet;
    createContainer(
      name: string,
      disposition: $Values<
        typeof Windows$Storage$ApplicationDataCreateDisposition
      >
    ): Windows$Storage$ApplicationDataContainer;
    deleteContainer(name: string): void;
  }

  declare export class Windows$Storage$ApplicationDataContainerSettings
    mixins Windows$Foundation$Collections$IPropertySet,
      Windows$Foundation$Collections$IObservableMap<string, any>,
      Windows$Foundation$Collections$IMap<string, any>,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      > {
    size: number;
    onmapchanged: any;
    lookup(key: string): any;
    hasKey(key: string): boolean;
    getView(): Windows$Foundation$Collections$IMapView<string, any>;
    insert(key: string, value: any): boolean;
    remove(key: string): void;
    clear(): void;
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<string, any>
    >;
  }

  declare export class Windows$Storage$ApplicationDataCompositeValue
    mixins Windows$Foundation$Collections$IPropertySet,
      Windows$Foundation$Collections$IObservableMap<string, any>,
      Windows$Foundation$Collections$IMap<string, any>,
      Windows$Foundation$Collections$IIterable<
        Windows$Foundation$Collections$IKeyValuePair<string, any>
      > {
    size: number;
    onmapchanged: any;
    lookup(key: string): any;
    hasKey(key: string): boolean;
    getView(): Windows$Foundation$Collections$IMapView<string, any>;
    insert(key: string, value: any): boolean;
    remove(key: string): void;
    clear(): void;
    first(): Windows$Foundation$Collections$IIterator<
      Windows$Foundation$Collections$IKeyValuePair<string, any>
    >;
  }

  declare var npm$namespace$Windows$Storage$Search: {
    DateStackOption: typeof Windows$Storage$Search$DateStackOption,
    IndexerOption: typeof Windows$Storage$Search$IndexerOption,
    FolderDepth: typeof Windows$Storage$Search$FolderDepth,
    CommonFileQuery: typeof Windows$Storage$Search$CommonFileQuery,
    CommonFolderQuery: typeof Windows$Storage$Search$CommonFolderQuery,
    IndexedState: typeof Windows$Storage$Search$IndexedState,
    QueryOptions: typeof Windows$Storage$Search$QueryOptions,
    StorageFileQueryResult: typeof Windows$Storage$Search$StorageFileQueryResult,
    StorageFolderQueryResult: typeof Windows$Storage$Search$StorageFolderQueryResult,
    StorageItemQueryResult: typeof Windows$Storage$Search$StorageItemQueryResult,
    SortEntryVector: typeof Windows$Storage$Search$SortEntryVector
  };
  declare export interface Windows$Storage$Search$SortEntry {
    propertyName: string;
    ascendingOrder: boolean;
  }

  declare export var Windows$Storage$Search$DateStackOption: {|
    +none: 0, // 0
    +year: 1, // 1
    +month: 2 // 2
  |};

  declare export var Windows$Storage$Search$IndexerOption: {|
    +useIndexerWhenAvailable: 0, // 0
    +onlyUseIndexer: 1, // 1
    +doNotUseIndexer: 2 // 2
  |};

  declare export var Windows$Storage$Search$FolderDepth: {|
    +shallow: 0, // 0
    +deep: 1 // 1
  |};

  declare export var Windows$Storage$Search$CommonFileQuery: {|
    +defaultQuery: 0, // 0
    +orderByName: 1, // 1
    +orderByTitle: 2, // 2
    +orderByMusicProperties: 3, // 3
    +orderBySearchRank: 4, // 4
    +orderByDate: 5 // 5
  |};

  declare export var Windows$Storage$Search$CommonFolderQuery: {|
    +defaultQuery: 0, // 0
    +groupByYear: 1, // 1
    +groupByMonth: 2, // 2
    +groupByArtist: 3, // 3
    +groupByAlbum: 4, // 4
    +groupByAlbumArtist: 5, // 5
    +groupByComposer: 6, // 6
    +groupByGenre: 7, // 7
    +groupByPublishedYear: 8, // 8
    +groupByRating: 9, // 9
    +groupByTag: 10, // 10
    +groupByAuthor: 11, // 11
    +groupByType: 12 // 12
  |};

  declare export var Windows$Storage$Search$IndexedState: {|
    +unknown: 0, // 0
    +notIndexed: 1, // 1
    +partiallyIndexed: 2, // 2
    +fullyIndexed: 3 // 3
  |};

  declare export interface Windows$Storage$Search$IQueryOptions {
    applicationSearchFilter: string;
    dateStackOption: $Values<typeof Windows$Storage$Search$DateStackOption>;
    fileTypeFilter: Windows$Foundation$Collections$IVector<string>;
    folderDepth: $Values<typeof Windows$Storage$Search$FolderDepth>;
    groupPropertyName: string;
    indexerOption: $Values<typeof Windows$Storage$Search$IndexerOption>;
    language: string;
    sortOrder: Windows$Foundation$Collections$IVector<Windows$Storage$Search$SortEntry>;
    userSearchFilter: string;
    saveToString(): string;
    loadFromString(value: string): void;
    setThumbnailPrefetch(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number,
      options: $Values<typeof Windows$Storage$FileProperties$ThumbnailOptions>
    ): void;
    setPropertyPrefetch(
      options: $Values<
        typeof Windows$Storage$FileProperties$PropertyPrefetchOptions
      >,
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): void;
  }

  declare export interface Windows$Storage$Search$IQueryOptionsFactory {
    createCommonFileQuery(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>,
      fileTypeFilter: Windows$Foundation$Collections$IIterable<string>
    ): Windows$Storage$Search$QueryOptions;
    createCommonFolderQuery(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>
    ): Windows$Storage$Search$QueryOptions;
  }

  declare export class Windows$Storage$Search$QueryOptions
    mixins Windows$Storage$Search$IQueryOptions {
    constructor(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>,
      fileTypeFilter: Windows$Foundation$Collections$IIterable<string>
    ): this;
    constructor(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>
    ): this;
    constructor(): this;
    applicationSearchFilter: string;
    dateStackOption: $Values<typeof Windows$Storage$Search$DateStackOption>;
    fileTypeFilter: Windows$Foundation$Collections$IVector<string>;
    folderDepth: $Values<typeof Windows$Storage$Search$FolderDepth>;
    groupPropertyName: string;
    indexerOption: $Values<typeof Windows$Storage$Search$IndexerOption>;
    language: string;
    sortOrder: Windows$Foundation$Collections$IVector<Windows$Storage$Search$SortEntry>;
    userSearchFilter: string;
    saveToString(): string;
    loadFromString(value: string): void;
    setThumbnailPrefetch(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number,
      options: $Values<typeof Windows$Storage$FileProperties$ThumbnailOptions>
    ): void;
    setPropertyPrefetch(
      options: $Values<
        typeof Windows$Storage$FileProperties$PropertyPrefetchOptions
      >,
      propertiesToRetrieve: Windows$Foundation$Collections$IIterable<string>
    ): void;
  }

  declare export interface Windows$Storage$Search$IStorageQueryResultBase {
    folder: Windows$Storage$StorageFolder;
    getItemCountAsync(): Windows$Foundation$IAsyncOperation<number>;
    oncontentschanged: any;
    onoptionschanged: any;
    findStartIndexAsync(value: any): Windows$Foundation$IAsyncOperation<number>;
    getCurrentQueryOptions(): Windows$Storage$Search$QueryOptions;
    applyNewQueryOptions(
      newQueryOptions: Windows$Storage$Search$QueryOptions
    ): void;
  }

  declare export type Windows$Storage$Search$IStorageFileQueryResult = {
    getFilesAsync(
      startIndex: number,
      maxNumberOfItems: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >,
    getFilesAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >
  } & Windows$Storage$Search$IStorageQueryResultBase;

  declare export type Windows$Storage$Search$IStorageFolderQueryResult = {
    getFoldersAsync(
      startIndex: number,
      maxNumberOfItems: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >,
    getFoldersAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >
  } & Windows$Storage$Search$IStorageQueryResultBase;

  declare export type Windows$Storage$Search$IStorageItemQueryResult = {
    getItemsAsync(
      startIndex: number,
      maxNumberOfItems: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >,
    getItemsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >
  } & Windows$Storage$Search$IStorageQueryResultBase;

  declare export interface Windows$Storage$Search$IStorageFolderQueryOperations {
    getIndexedStateAsync(): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$Storage$Search$IndexedState>
    >;
    createFileQuery(): Windows$Storage$Search$StorageFileQueryResult;
    createFileQuery(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>
    ): Windows$Storage$Search$StorageFileQueryResult;
    createFileQueryWithOptions(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): Windows$Storage$Search$StorageFileQueryResult;
    createFolderQuery(): Windows$Storage$Search$StorageFolderQueryResult;
    createFolderQuery(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>
    ): Windows$Storage$Search$StorageFolderQueryResult;
    createFolderQueryWithOptions(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): Windows$Storage$Search$StorageFolderQueryResult;
    createItemQuery(): Windows$Storage$Search$StorageItemQueryResult;
    createItemQueryWithOptions(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): Windows$Storage$Search$StorageItemQueryResult;
    getFilesAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>,
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
    getFilesAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
    getFoldersAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>,
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >;
    getFoldersAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >;
    getItemsAsync(
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >;
    areQueryOptionsSupported(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): boolean;
    isCommonFolderQuerySupported(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>
    ): boolean;
    isCommonFileQuerySupported(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>
    ): boolean;
  }

  declare export class Windows$Storage$Search$StorageFileQueryResult
    mixins Windows$Storage$Search$IStorageFileQueryResult,
      Windows$Storage$Search$IStorageQueryResultBase {
    folder: Windows$Storage$StorageFolder;
    getFilesAsync(
      startIndex: number,
      maxNumberOfItems: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
    getFilesAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
    getItemCountAsync(): Windows$Foundation$IAsyncOperation<number>;
    oncontentschanged: any;
    onoptionschanged: any;
    findStartIndexAsync(value: any): Windows$Foundation$IAsyncOperation<number>;
    getCurrentQueryOptions(): Windows$Storage$Search$QueryOptions;
    applyNewQueryOptions(
      newQueryOptions: Windows$Storage$Search$QueryOptions
    ): void;
  }

  declare export class Windows$Storage$Search$StorageFolderQueryResult
    mixins Windows$Storage$Search$IStorageFolderQueryResult,
      Windows$Storage$Search$IStorageQueryResultBase {
    folder: Windows$Storage$StorageFolder;
    getFoldersAsync(
      startIndex: number,
      maxNumberOfItems: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >;
    getFoldersAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >;
    getItemCountAsync(): Windows$Foundation$IAsyncOperation<number>;
    oncontentschanged: any;
    onoptionschanged: any;
    findStartIndexAsync(value: any): Windows$Foundation$IAsyncOperation<number>;
    getCurrentQueryOptions(): Windows$Storage$Search$QueryOptions;
    applyNewQueryOptions(
      newQueryOptions: Windows$Storage$Search$QueryOptions
    ): void;
  }

  declare export class Windows$Storage$Search$StorageItemQueryResult
    mixins Windows$Storage$Search$IStorageItemQueryResult,
      Windows$Storage$Search$IStorageQueryResultBase {
    folder: Windows$Storage$StorageFolder;
    getItemsAsync(
      startIndex: number,
      maxNumberOfItems: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >;
    getItemsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >;
    getItemCountAsync(): Windows$Foundation$IAsyncOperation<number>;
    oncontentschanged: any;
    onoptionschanged: any;
    findStartIndexAsync(value: any): Windows$Foundation$IAsyncOperation<number>;
    getCurrentQueryOptions(): Windows$Storage$Search$QueryOptions;
    applyNewQueryOptions(
      newQueryOptions: Windows$Storage$Search$QueryOptions
    ): void;
  }

  declare export class Windows$Storage$Search$SortEntryVector
    mixins Windows$Foundation$Collections$IVector<Windows$Storage$Search$SortEntry>,
      Windows$Foundation$Collections$IIterable<Windows$Storage$Search$SortEntry> {
    size: number;
    getAt(index: number): Windows$Storage$Search$SortEntry;
    getView(): Windows$Foundation$Collections$IVectorView<Windows$Storage$Search$SortEntry>;
    indexOf(
      value: Windows$Storage$Search$SortEntry
    ): {
      index: number,
      returnValue: boolean
    };
    setAt(index: number, value: Windows$Storage$Search$SortEntry): void;
    insertAt(index: number, value: Windows$Storage$Search$SortEntry): void;
    removeAt(index: number): void;
    append(value: Windows$Storage$Search$SortEntry): void;
    removeAtEnd(): void;
    clear(): void;
    getMany(
      startIndex: number
    ): {
      items: Windows$Storage$Search$SortEntry[],
      returnValue: number
    };
    replaceAll(items: Windows$Storage$Search$SortEntry[]): void;
    first(): Windows$Foundation$Collections$IIterator<Windows$Storage$Search$SortEntry>;
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$Storage$Search$SortEntry[][]
    ): Windows$Storage$Search$SortEntry[];
    join(seperator: string): string;
    pop(): Windows$Storage$Search$SortEntry;
    push(...items: Windows$Storage$Search$SortEntry[]): void;
    reverse(): Windows$Storage$Search$SortEntry[];
    shift(): Windows$Storage$Search$SortEntry;
    slice(start: number): Windows$Storage$Search$SortEntry[];
    slice(start: number, end: number): Windows$Storage$Search$SortEntry[];
    sort(): Windows$Storage$Search$SortEntry[];
    sort(
      compareFn: (
        a: Windows$Storage$Search$SortEntry,
        b: Windows$Storage$Search$SortEntry
      ) => number
    ): Windows$Storage$Search$SortEntry[];
    splice(start: number): Windows$Storage$Search$SortEntry[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$Storage$Search$SortEntry[]
    ): Windows$Storage$Search$SortEntry[];
    unshift(...items: Windows$Storage$Search$SortEntry[]): number;
    lastIndexOf(searchElement: Windows$Storage$Search$SortEntry): number;
    lastIndexOf(
      searchElement: Windows$Storage$Search$SortEntry,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$Storage$Search$SortEntry,
        index: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$Storage$Search$SortEntry,
        index: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Storage$Search$SortEntry,
        index: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Storage$Search$SortEntry,
        index: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$Storage$Search$SortEntry,
        index: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$Storage$Search$SortEntry,
        index: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$Storage$Search$SortEntry,
        index: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$Storage$Search$SortEntry,
        index: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$Storage$Search$SortEntry,
        index: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => boolean
    ): Windows$Storage$Search$SortEntry[];
    filter(
      callbackfn: (
        value: Windows$Storage$Search$SortEntry,
        index: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => boolean,
      thisArg: any
    ): Windows$Storage$Search$SortEntry[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$Search$SortEntry[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare var npm$namespace$Windows$Storage$AccessCache: {
    AccessCacheOptions: typeof Windows$Storage$AccessCache$AccessCacheOptions,
    AccessListEntryView: typeof Windows$Storage$AccessCache$AccessListEntryView,
    StorageItemMostRecentlyUsedList: typeof Windows$Storage$AccessCache$StorageItemMostRecentlyUsedList,
    ItemRemovedEventArgs: typeof Windows$Storage$AccessCache$ItemRemovedEventArgs,
    StorageItemAccessList: typeof Windows$Storage$AccessCache$StorageItemAccessList,
    StorageApplicationPermissions: typeof Windows$Storage$AccessCache$StorageApplicationPermissions
  };
  declare export interface Windows$Storage$AccessCache$AccessListEntry {
    token: string;
    metadata: string;
  }

  declare export interface Windows$Storage$AccessCache$IItemRemovedEventArgs {
    removedEntry: Windows$Storage$AccessCache$AccessListEntry;
  }

  declare export class Windows$Storage$AccessCache$AccessListEntryView
    mixins Windows$Foundation$Collections$IVectorView<Windows$Storage$AccessCache$AccessListEntry>,
      Windows$Foundation$Collections$IIterable<Windows$Storage$AccessCache$AccessListEntry> {
    size: number;
    getAt(index: number): Windows$Storage$AccessCache$AccessListEntry;
    indexOf(
      value: Windows$Storage$AccessCache$AccessListEntry
    ): {
      index: number,
      returnValue: boolean
    };
    getMany(
      startIndex: number
    ): {
      items: Windows$Storage$AccessCache$AccessListEntry[],
      returnValue: number
    };
    first(): Windows$Foundation$Collections$IIterator<Windows$Storage$AccessCache$AccessListEntry>;
    toString(): string;
    toLocaleString(): string;
    concat(
      ...items: Windows$Storage$AccessCache$AccessListEntry[][]
    ): Windows$Storage$AccessCache$AccessListEntry[];
    join(seperator: string): string;
    pop(): Windows$Storage$AccessCache$AccessListEntry;
    push(...items: Windows$Storage$AccessCache$AccessListEntry[]): void;
    reverse(): Windows$Storage$AccessCache$AccessListEntry[];
    shift(): Windows$Storage$AccessCache$AccessListEntry;
    slice(start: number): Windows$Storage$AccessCache$AccessListEntry[];
    slice(
      start: number,
      end: number
    ): Windows$Storage$AccessCache$AccessListEntry[];
    sort(): Windows$Storage$AccessCache$AccessListEntry[];
    sort(
      compareFn: (
        a: Windows$Storage$AccessCache$AccessListEntry,
        b: Windows$Storage$AccessCache$AccessListEntry
      ) => number
    ): Windows$Storage$AccessCache$AccessListEntry[];
    splice(start: number): Windows$Storage$AccessCache$AccessListEntry[];
    splice(
      start: number,
      deleteCount: number,
      ...items: Windows$Storage$AccessCache$AccessListEntry[]
    ): Windows$Storage$AccessCache$AccessListEntry[];
    unshift(...items: Windows$Storage$AccessCache$AccessListEntry[]): number;
    lastIndexOf(
      searchElement: Windows$Storage$AccessCache$AccessListEntry
    ): number;
    lastIndexOf(
      searchElement: Windows$Storage$AccessCache$AccessListEntry,
      fromIndex: number
    ): number;
    every(
      callbackfn: (
        value: Windows$Storage$AccessCache$AccessListEntry,
        index: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => boolean
    ): boolean;
    every(
      callbackfn: (
        value: Windows$Storage$AccessCache$AccessListEntry,
        index: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => boolean,
      thisArg: any
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Storage$AccessCache$AccessListEntry,
        index: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => boolean
    ): boolean;
    some(
      callbackfn: (
        value: Windows$Storage$AccessCache$AccessListEntry,
        index: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => boolean,
      thisArg: any
    ): boolean;
    forEach(
      callbackfn: (
        value: Windows$Storage$AccessCache$AccessListEntry,
        index: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => void
    ): void;
    forEach(
      callbackfn: (
        value: Windows$Storage$AccessCache$AccessListEntry,
        index: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => void,
      thisArg: any
    ): void;
    map(
      callbackfn: (
        value: Windows$Storage$AccessCache$AccessListEntry,
        index: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => any
    ): any[];
    map(
      callbackfn: (
        value: Windows$Storage$AccessCache$AccessListEntry,
        index: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => any,
      thisArg: any
    ): any[];
    filter(
      callbackfn: (
        value: Windows$Storage$AccessCache$AccessListEntry,
        index: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => boolean
    ): Windows$Storage$AccessCache$AccessListEntry[];
    filter(
      callbackfn: (
        value: Windows$Storage$AccessCache$AccessListEntry,
        index: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => boolean,
      thisArg: any
    ): Windows$Storage$AccessCache$AccessListEntry[];
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => any
    ): any;
    reduce(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => any,
      initialValue: any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => any
    ): any;
    reduceRight(
      callbackfn: (
        previousValue: any,
        currentValue: any,
        currentIndex: number,
        array: Windows$Storage$AccessCache$AccessListEntry[]
      ) => any,
      initialValue: any
    ): any;
    length: number;
  }

  declare export var Windows$Storage$AccessCache$AccessCacheOptions: {|
    +none: 0, // 0
    +disallowUserInput: 1, // 1
    +fastLocationsOnly: 2, // 2
    +useReadOnlyCachedCopy: 3, // 3
    +suppressAccessTimeUpdate: 4 // 4
  |};

  declare export interface Windows$Storage$AccessCache$IStorageItemAccessList {
    entries: Windows$Storage$AccessCache$AccessListEntryView;
    maximumItemsAllowed: number;
    add(file: Windows$Storage$IStorageItem): string;
    add(file: Windows$Storage$IStorageItem, metadata: string): string;
    addOrReplace(token: string, file: Windows$Storage$IStorageItem): void;
    addOrReplace(
      token: string,
      file: Windows$Storage$IStorageItem,
      metadata: string
    ): void;
    getItemAsync(
      token: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$IStorageItem>;
    getFileAsync(
      token: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    getFolderAsync(
      token: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    getItemAsync(
      token: string,
      options: $Values<typeof Windows$Storage$AccessCache$AccessCacheOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$IStorageItem>;
    getFileAsync(
      token: string,
      options: $Values<typeof Windows$Storage$AccessCache$AccessCacheOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    getFolderAsync(
      token: string,
      options: $Values<typeof Windows$Storage$AccessCache$AccessCacheOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    remove(token: string): void;
    containsItem(token: string): boolean;
    clear(): void;
    checkAccess(file: Windows$Storage$IStorageItem): boolean;
  }

  declare export type Windows$Storage$AccessCache$IStorageItemMostRecentlyUsedList = {
    onitemremoved: any
  } & Windows$Storage$AccessCache$IStorageItemAccessList;

  declare export class Windows$Storage$AccessCache$StorageItemMostRecentlyUsedList
    mixins Windows$Storage$AccessCache$IStorageItemMostRecentlyUsedList,
      Windows$Storage$AccessCache$IStorageItemAccessList {
    entries: Windows$Storage$AccessCache$AccessListEntryView;
    maximumItemsAllowed: number;
    onitemremoved: any;
    add(file: Windows$Storage$IStorageItem): string;
    add(file: Windows$Storage$IStorageItem, metadata: string): string;
    addOrReplace(token: string, file: Windows$Storage$IStorageItem): void;
    addOrReplace(
      token: string,
      file: Windows$Storage$IStorageItem,
      metadata: string
    ): void;
    getItemAsync(
      token: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$IStorageItem>;
    getFileAsync(
      token: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    getFolderAsync(
      token: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    getItemAsync(
      token: string,
      options: $Values<typeof Windows$Storage$AccessCache$AccessCacheOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$IStorageItem>;
    getFileAsync(
      token: string,
      options: $Values<typeof Windows$Storage$AccessCache$AccessCacheOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    getFolderAsync(
      token: string,
      options: $Values<typeof Windows$Storage$AccessCache$AccessCacheOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    remove(token: string): void;
    containsItem(token: string): boolean;
    clear(): void;
    checkAccess(file: Windows$Storage$IStorageItem): boolean;
  }

  declare export class Windows$Storage$AccessCache$ItemRemovedEventArgs
    mixins Windows$Storage$AccessCache$IItemRemovedEventArgs {
    removedEntry: Windows$Storage$AccessCache$AccessListEntry;
  }

  declare export interface Windows$Storage$AccessCache$IStorageApplicationPermissionsStatics {
    futureAccessList: Windows$Storage$AccessCache$StorageItemAccessList;
    mostRecentlyUsedList: Windows$Storage$AccessCache$StorageItemMostRecentlyUsedList;
  }

  declare export class Windows$Storage$AccessCache$StorageItemAccessList
    mixins Windows$Storage$AccessCache$IStorageItemAccessList {
    entries: Windows$Storage$AccessCache$AccessListEntryView;
    maximumItemsAllowed: number;
    add(file: Windows$Storage$IStorageItem): string;
    add(file: Windows$Storage$IStorageItem, metadata: string): string;
    addOrReplace(token: string, file: Windows$Storage$IStorageItem): void;
    addOrReplace(
      token: string,
      file: Windows$Storage$IStorageItem,
      metadata: string
    ): void;
    getItemAsync(
      token: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$IStorageItem>;
    getFileAsync(
      token: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    getFolderAsync(
      token: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    getItemAsync(
      token: string,
      options: $Values<typeof Windows$Storage$AccessCache$AccessCacheOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$IStorageItem>;
    getFileAsync(
      token: string,
      options: $Values<typeof Windows$Storage$AccessCache$AccessCacheOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    getFolderAsync(
      token: string,
      options: $Values<typeof Windows$Storage$AccessCache$AccessCacheOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    remove(token: string): void;
    containsItem(token: string): boolean;
    clear(): void;
    checkAccess(file: Windows$Storage$IStorageItem): boolean;
  }

  declare export class Windows$Storage$AccessCache$StorageApplicationPermissions {
    static futureAccessList: Windows$Storage$AccessCache$StorageItemAccessList;
    static mostRecentlyUsedList: Windows$Storage$AccessCache$StorageItemMostRecentlyUsedList;
  }

  declare var npm$namespace$Windows$Storage$BulkAccess: {
    FileInformationFactory: typeof Windows$Storage$BulkAccess$FileInformationFactory,
    FileInformation: typeof Windows$Storage$BulkAccess$FileInformation,
    FolderInformation: typeof Windows$Storage$BulkAccess$FolderInformation
  };
  declare export interface Windows$Storage$BulkAccess$IStorageItemInformation {
    basicProperties: Windows$Storage$FileProperties$BasicProperties;
    documentProperties: Windows$Storage$FileProperties$DocumentProperties;
    imageProperties: Windows$Storage$FileProperties$ImageProperties;
    musicProperties: Windows$Storage$FileProperties$MusicProperties;
    thumbnail: Windows$Storage$FileProperties$StorageItemThumbnail;
    videoProperties: Windows$Storage$FileProperties$VideoProperties;
    onthumbnailupdated: any;
    onpropertiesupdated: any;
  }

  declare export interface Windows$Storage$BulkAccess$IFileInformationFactoryFactory {
    createWithMode(
      queryResult: Windows$Storage$Search$IStorageQueryResultBase,
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>
    ): Windows$Storage$BulkAccess$FileInformationFactory;
    createWithModeAndSize(
      queryResult: Windows$Storage$Search$IStorageQueryResultBase,
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedThumbnailSize: number
    ): Windows$Storage$BulkAccess$FileInformationFactory;
    createWithModeAndSizeAndOptions(
      queryResult: Windows$Storage$Search$IStorageQueryResultBase,
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedThumbnailSize: number,
      thumbnailOptions: $Values<
        typeof Windows$Storage$FileProperties$ThumbnailOptions
      >
    ): Windows$Storage$BulkAccess$FileInformationFactory;
    createWithModeAndSizeAndOptionsAndFlags(
      queryResult: Windows$Storage$Search$IStorageQueryResultBase,
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedThumbnailSize: number,
      thumbnailOptions: $Values<
        typeof Windows$Storage$FileProperties$ThumbnailOptions
      >,
      delayLoad: boolean
    ): Windows$Storage$BulkAccess$FileInformationFactory;
  }

  declare export class Windows$Storage$BulkAccess$FileInformationFactory
    mixins Windows$Storage$BulkAccess$IFileInformationFactory {
    constructor(
      queryResult: Windows$Storage$Search$IStorageQueryResultBase,
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>
    ): this;
    constructor(
      queryResult: Windows$Storage$Search$IStorageQueryResultBase,
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedThumbnailSize: number
    ): this;
    constructor(
      queryResult: Windows$Storage$Search$IStorageQueryResultBase,
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedThumbnailSize: number,
      thumbnailOptions: $Values<
        typeof Windows$Storage$FileProperties$ThumbnailOptions
      >
    ): this;
    constructor(
      queryResult: Windows$Storage$Search$IStorageQueryResultBase,
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedThumbnailSize: number,
      thumbnailOptions: $Values<
        typeof Windows$Storage$FileProperties$ThumbnailOptions
      >,
      delayLoad: boolean
    ): this;
    getItemsAsync(
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$IStorageItemInformation>
    >;
    getItemsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$IStorageItemInformation>
    >;
    getFilesAsync(
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$FileInformation>
    >;
    getFilesAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$FileInformation>
    >;
    getFoldersAsync(
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$FolderInformation>
    >;
    getFoldersAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$FolderInformation>
    >;
    getVirtualizedItemsVector(): any;
    getVirtualizedFilesVector(): any;
    getVirtualizedFoldersVector(): any;
  }

  declare export interface Windows$Storage$BulkAccess$IFileInformationFactory {
    getItemsAsync(
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$IStorageItemInformation>
    >;
    getItemsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$IStorageItemInformation>
    >;
    getFilesAsync(
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$FileInformation>
    >;
    getFilesAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$FileInformation>
    >;
    getFoldersAsync(
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$FolderInformation>
    >;
    getFoldersAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$BulkAccess$FolderInformation>
    >;
    getVirtualizedItemsVector(): any;
    getVirtualizedFilesVector(): any;
    getVirtualizedFoldersVector(): any;
  }

  declare export class Windows$Storage$BulkAccess$FileInformation
    mixins Windows$Storage$BulkAccess$IStorageItemInformation,
      Windows$Storage$IStorageFile,
      Windows$Storage$IStorageItem,
      Windows$Storage$Streams$IRandomAccessStreamReference,
      Windows$Storage$Streams$IInputStreamReference,
      Windows$Storage$IStorageItemProperties {
    basicProperties: Windows$Storage$FileProperties$BasicProperties;
    documentProperties: Windows$Storage$FileProperties$DocumentProperties;
    imageProperties: Windows$Storage$FileProperties$ImageProperties;
    musicProperties: Windows$Storage$FileProperties$MusicProperties;
    thumbnail: Windows$Storage$FileProperties$StorageItemThumbnail;
    videoProperties: Windows$Storage$FileProperties$VideoProperties;
    contentType: string;
    fileType: string;
    attributes: $Values<typeof Windows$Storage$FileAttributes>;
    dateCreated: Date;
    name: string;
    path: string;
    displayName: string;
    displayType: string;
    folderRelativeId: string;
    properties: Windows$Storage$FileProperties$StorageItemContentProperties;
    onthumbnailupdated: any;
    onpropertiesupdated: any;
    openAsync(
      accessMode: $Values<typeof Windows$Storage$FileAccessMode>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IRandomAccessStream>;
    openTransactedWriteAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageStreamTransaction>;
    copyAsync(
      destinationFolder: Windows$Storage$IStorageFolder
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    copyAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    copyAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    copyAndReplaceAsync(
      fileToReplace: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
    moveAsync(
      destinationFolder: Windows$Storage$IStorageFolder
    ): Windows$Foundation$IAsyncAction;
    moveAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string
    ): Windows$Foundation$IAsyncAction;
    moveAsync(
      destinationFolder: Windows$Storage$IStorageFolder,
      desiredNewName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncAction;
    moveAndReplaceAsync(
      fileToReplace: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
    renameAsync(desiredName: string): Windows$Foundation$IAsyncAction;
    renameAsync(
      desiredName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncAction;
    deleteAsync(): Windows$Foundation$IAsyncAction;
    deleteAsync(
      option: $Values<typeof Windows$Storage$StorageDeleteOption>
    ): Windows$Foundation$IAsyncAction;
    getBasicPropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$BasicProperties>;
    isOfType(type: $Values<typeof Windows$Storage$StorageItemTypes>): boolean;
    openReadAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IRandomAccessStreamWithContentType>;
    openSequentialReadAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$Streams$IInputStream>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number,
      options: $Values<typeof Windows$Storage$FileProperties$ThumbnailOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
  }

  declare export class Windows$Storage$BulkAccess$FolderInformation
    mixins Windows$Storage$BulkAccess$IStorageItemInformation,
      Windows$Storage$IStorageFolder,
      Windows$Storage$IStorageItem,
      Windows$Storage$IStorageItemProperties,
      Windows$Storage$Search$IStorageFolderQueryOperations {
    basicProperties: Windows$Storage$FileProperties$BasicProperties;
    documentProperties: Windows$Storage$FileProperties$DocumentProperties;
    imageProperties: Windows$Storage$FileProperties$ImageProperties;
    musicProperties: Windows$Storage$FileProperties$MusicProperties;
    thumbnail: Windows$Storage$FileProperties$StorageItemThumbnail;
    videoProperties: Windows$Storage$FileProperties$VideoProperties;
    attributes: $Values<typeof Windows$Storage$FileAttributes>;
    dateCreated: Date;
    name: string;
    path: string;
    displayName: string;
    displayType: string;
    folderRelativeId: string;
    properties: Windows$Storage$FileProperties$StorageItemContentProperties;
    onthumbnailupdated: any;
    onpropertiesupdated: any;
    createFileAsync(
      desiredName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    createFileAsync(
      desiredName: string,
      options: $Values<typeof Windows$Storage$CreationCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    createFolderAsync(
      desiredName: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    createFolderAsync(
      desiredName: string,
      options: $Values<typeof Windows$Storage$CreationCollisionOption>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    getFileAsync(
      name: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFile>;
    getFolderAsync(
      name: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$StorageFolder>;
    getItemAsync(
      name: string
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$IStorageItem>;
    getFilesAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
    getFoldersAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >;
    getItemsAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >;
    renameAsync(desiredName: string): Windows$Foundation$IAsyncAction;
    renameAsync(
      desiredName: string,
      option: $Values<typeof Windows$Storage$NameCollisionOption>
    ): Windows$Foundation$IAsyncAction;
    deleteAsync(): Windows$Foundation$IAsyncAction;
    deleteAsync(
      option: $Values<typeof Windows$Storage$StorageDeleteOption>
    ): Windows$Foundation$IAsyncAction;
    getBasicPropertiesAsync(): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$BasicProperties>;
    isOfType(type: $Values<typeof Windows$Storage$StorageItemTypes>): boolean;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    getThumbnailAsync(
      mode: $Values<typeof Windows$Storage$FileProperties$ThumbnailMode>,
      requestedSize: number,
      options: $Values<typeof Windows$Storage$FileProperties$ThumbnailOptions>
    ): Windows$Foundation$IAsyncOperation<Windows$Storage$FileProperties$StorageItemThumbnail>;
    getIndexedStateAsync(): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$Storage$Search$IndexedState>
    >;
    createFileQuery(): Windows$Storage$Search$StorageFileQueryResult;
    createFileQuery(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>
    ): Windows$Storage$Search$StorageFileQueryResult;
    createFileQueryWithOptions(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): Windows$Storage$Search$StorageFileQueryResult;
    createFolderQuery(): Windows$Storage$Search$StorageFolderQueryResult;
    createFolderQuery(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>
    ): Windows$Storage$Search$StorageFolderQueryResult;
    createFolderQueryWithOptions(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): Windows$Storage$Search$StorageFolderQueryResult;
    createItemQuery(): Windows$Storage$Search$StorageItemQueryResult;
    createItemQueryWithOptions(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): Windows$Storage$Search$StorageItemQueryResult;
    getFilesAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>,
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
    getFilesAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFile>
    >;
    getFoldersAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>,
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >;
    getFoldersAsync(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$StorageFolder>
    >;
    getItemsAsync(
      startIndex: number,
      maxItemsToRetrieve: number
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>
    >;
    areQueryOptionsSupported(
      queryOptions: Windows$Storage$Search$QueryOptions
    ): boolean;
    isCommonFolderQuerySupported(
      query: $Values<typeof Windows$Storage$Search$CommonFolderQuery>
    ): boolean;
    isCommonFileQuerySupported(
      query: $Values<typeof Windows$Storage$Search$CommonFileQuery>
    ): boolean;
  }

  declare var npm$namespace$Windows$Storage$Compression: {
    CompressAlgorithm: typeof Windows$Storage$Compression$CompressAlgorithm,
    Compressor: typeof Windows$Storage$Compression$Compressor,
    Decompressor: typeof Windows$Storage$Compression$Decompressor
  };

  declare export var Windows$Storage$Compression$CompressAlgorithm: {|
    +invalidAlgorithm: 0, // 0
    +nullAlgorithm: 1, // 1
    +mszip: 2, // 2
    +xpress: 3, // 3
    +xpressHuff: 4, // 4
    +lzms: 5 // 5
  |};

  declare export type Windows$Storage$Compression$ICompressor = {
    finishAsync(): Windows$Foundation$IAsyncOperation<boolean>,
    detachStream(): Windows$Storage$Streams$IOutputStream
  } & Windows$Storage$Streams$IOutputStream &
    Windows$Foundation$IClosable;

  declare export class Windows$Storage$Compression$Compressor
    mixins Windows$Storage$Compression$ICompressor,
      Windows$Storage$Streams$IOutputStream,
      Windows$Foundation$IClosable {
    constructor(underlyingStream: Windows$Storage$Streams$IOutputStream): this;
    constructor(
      underlyingStream: Windows$Storage$Streams$IOutputStream,
      algorithm: $Values<typeof Windows$Storage$Compression$CompressAlgorithm>,
      blockSize: number
    ): this;
    finishAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    detachStream(): Windows$Storage$Streams$IOutputStream;
    writeAsync(
      buffer: Windows$Storage$Streams$IBuffer
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    flushAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    dispose(): void;
    close(): void;
  }

  declare export type Windows$Storage$Compression$IDecompressor = {
    detachStream(): Windows$Storage$Streams$IInputStream
  } & Windows$Storage$Streams$IInputStream &
    Windows$Foundation$IClosable;

  declare export class Windows$Storage$Compression$Decompressor
    mixins Windows$Storage$Compression$IDecompressor,
      Windows$Storage$Streams$IInputStream,
      Windows$Foundation$IClosable {
    constructor(underlyingStream: Windows$Storage$Streams$IInputStream): this;
    detachStream(): Windows$Storage$Streams$IInputStream;
    readAsync(
      buffer: Windows$Storage$Streams$IBuffer,
      count: number,
      options: $Values<typeof Windows$Storage$Streams$InputStreamOptions>
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IBuffer,
      number
    >;
    dispose(): void;
    close(): void;
  }

  declare export interface Windows$Storage$Compression$ICompressorFactory {
    createCompressor(
      underlyingStream: Windows$Storage$Streams$IOutputStream
    ): Windows$Storage$Compression$Compressor;
    createCompressorEx(
      underlyingStream: Windows$Storage$Streams$IOutputStream,
      algorithm: $Values<typeof Windows$Storage$Compression$CompressAlgorithm>,
      blockSize: number
    ): Windows$Storage$Compression$Compressor;
  }

  declare export interface Windows$Storage$Compression$IDecompressorFactory {
    createDecompressor(
      underlyingStream: Windows$Storage$Streams$IInputStream
    ): Windows$Storage$Compression$Decompressor;
  }

  declare var npm$namespace$Windows$System: {
    ProcessorArchitecture: typeof Windows$System$ProcessorArchitecture,
    VirtualKeyModifiers: typeof Windows$System$VirtualKeyModifiers,
    VirtualKey: typeof Windows$System$VirtualKey,
    LauncherUIOptions: typeof Windows$System$LauncherUIOptions,
    LauncherOptions: typeof Windows$System$LauncherOptions,
    Launcher: typeof Windows$System$Launcher,
    Profile: typeof npm$namespace$Windows$System$Profile,
    Threading: typeof npm$namespace$Windows$System$Threading,
    UserProfile: typeof npm$namespace$Windows$System$UserProfile,
    Display: typeof npm$namespace$Windows$System$Display,
    RemoteDesktop: typeof npm$namespace$Windows$System$RemoteDesktop
  };

  declare var npm$namespace$Windows$System$Profile: {
    HardwareToken: typeof Windows$System$Profile$HardwareToken,
    HardwareIdentification: typeof Windows$System$Profile$HardwareIdentification
  };
  declare export interface Windows$System$Profile$IHardwareToken {
    certificate: Windows$Storage$Streams$IBuffer;
    id: Windows$Storage$Streams$IBuffer;
    signature: Windows$Storage$Streams$IBuffer;
  }

  declare export class Windows$System$Profile$HardwareToken
    mixins Windows$System$Profile$IHardwareToken {
    certificate: Windows$Storage$Streams$IBuffer;
    id: Windows$Storage$Streams$IBuffer;
    signature: Windows$Storage$Streams$IBuffer;
  }

  declare export interface Windows$System$Profile$IHardwareIdentificationStatics {
    getPackageSpecificToken(
      nonce: Windows$Storage$Streams$IBuffer
    ): Windows$System$Profile$HardwareToken;
  }

  declare export class Windows$System$Profile$HardwareIdentification {
    static getPackageSpecificToken(
      nonce: Windows$Storage$Streams$IBuffer
    ): Windows$System$Profile$HardwareToken;
  }

  declare var npm$namespace$Windows$System$Threading: {
    WorkItemPriority: typeof Windows$System$Threading$WorkItemPriority,
    WorkItemOptions: typeof Windows$System$Threading$WorkItemOptions,
    ThreadPoolTimer: typeof Windows$System$Threading$ThreadPoolTimer,
    ThreadPool: typeof Windows$System$Threading$ThreadPool,
    Core: typeof npm$namespace$Windows$System$Threading$Core
  };

  declare export var Windows$System$Threading$WorkItemPriority: {|
    +low: 0, // 0
    +normal: 1, // 1
    +high: 2 // 2
  |};

  declare export var Windows$System$Threading$WorkItemOptions: {|
    +none: 0, // 0
    +timeSliced: 1 // 1
  |};

  declare export interface Windows$System$Threading$TimerElapsedHandler {
    (timer: Windows$System$Threading$ThreadPoolTimer): void;
  }

  declare export class Windows$System$Threading$ThreadPoolTimer
    mixins Windows$System$Threading$IThreadPoolTimer {
    delay: number;
    period: number;
    cancel(): void;
    static createPeriodicTimer(
      handler: Windows$System$Threading$TimerElapsedHandler,
      period: number
    ): Windows$System$Threading$ThreadPoolTimer;
    static createTimer(
      handler: Windows$System$Threading$TimerElapsedHandler,
      delay: number
    ): Windows$System$Threading$ThreadPoolTimer;
    static createPeriodicTimer(
      handler: Windows$System$Threading$TimerElapsedHandler,
      period: number,
      destroyed: Windows$System$Threading$TimerDestroyedHandler
    ): Windows$System$Threading$ThreadPoolTimer;
    static createTimer(
      handler: Windows$System$Threading$TimerElapsedHandler,
      delay: number,
      destroyed: Windows$System$Threading$TimerDestroyedHandler
    ): Windows$System$Threading$ThreadPoolTimer;
  }

  declare export interface Windows$System$Threading$TimerDestroyedHandler {
    (timer: Windows$System$Threading$ThreadPoolTimer): void;
  }

  declare export interface Windows$System$Threading$WorkItemHandler {
    (operation: Windows$Foundation$IAsyncAction): void;
  }

  declare export interface Windows$System$Threading$IThreadPoolStatics {
    runAsync(
      handler: Windows$System$Threading$WorkItemHandler
    ): Windows$Foundation$IAsyncAction;
    runAsync(
      handler: Windows$System$Threading$WorkItemHandler,
      priority: $Values<typeof Windows$System$Threading$WorkItemPriority>
    ): Windows$Foundation$IAsyncAction;
    runAsync(
      handler: Windows$System$Threading$WorkItemHandler,
      priority: $Values<typeof Windows$System$Threading$WorkItemPriority>,
      options: $Values<typeof Windows$System$Threading$WorkItemOptions>
    ): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$System$Threading$IThreadPoolTimer {
    delay: number;
    period: number;
    cancel(): void;
  }

  declare export interface Windows$System$Threading$IThreadPoolTimerStatics {
    createPeriodicTimer(
      handler: Windows$System$Threading$TimerElapsedHandler,
      period: number
    ): Windows$System$Threading$ThreadPoolTimer;
    createTimer(
      handler: Windows$System$Threading$TimerElapsedHandler,
      delay: number
    ): Windows$System$Threading$ThreadPoolTimer;
    createPeriodicTimer(
      handler: Windows$System$Threading$TimerElapsedHandler,
      period: number,
      destroyed: Windows$System$Threading$TimerDestroyedHandler
    ): Windows$System$Threading$ThreadPoolTimer;
    createTimer(
      handler: Windows$System$Threading$TimerElapsedHandler,
      delay: number,
      destroyed: Windows$System$Threading$TimerDestroyedHandler
    ): Windows$System$Threading$ThreadPoolTimer;
  }

  declare export class Windows$System$Threading$ThreadPool {
    static runAsync(
      handler: Windows$System$Threading$WorkItemHandler
    ): Windows$Foundation$IAsyncAction;
    static runAsync(
      handler: Windows$System$Threading$WorkItemHandler,
      priority: $Values<typeof Windows$System$Threading$WorkItemPriority>
    ): Windows$Foundation$IAsyncAction;
    static runAsync(
      handler: Windows$System$Threading$WorkItemHandler,
      priority: $Values<typeof Windows$System$Threading$WorkItemPriority>,
      options: $Values<typeof Windows$System$Threading$WorkItemOptions>
    ): Windows$Foundation$IAsyncAction;
  }

  declare var npm$namespace$Windows$System$Threading$Core: {
    SignalNotifier: typeof Windows$System$Threading$Core$SignalNotifier,
    PreallocatedWorkItem: typeof Windows$System$Threading$Core$PreallocatedWorkItem
  };
  declare export interface Windows$System$Threading$Core$SignalHandler {
    (
      signalNotifier: Windows$System$Threading$Core$SignalNotifier,
      timedOut: boolean
    ): void;
  }

  declare export class Windows$System$Threading$Core$SignalNotifier
    mixins Windows$System$Threading$Core$ISignalNotifier {
    enable(): void;
    terminate(): void;
    static attachToEvent(
      name: string,
      handler: Windows$System$Threading$Core$SignalHandler
    ): Windows$System$Threading$Core$SignalNotifier;
    static attachToEvent(
      name: string,
      handler: Windows$System$Threading$Core$SignalHandler,
      timeout: number
    ): Windows$System$Threading$Core$SignalNotifier;
    static attachToSemaphore(
      name: string,
      handler: Windows$System$Threading$Core$SignalHandler
    ): Windows$System$Threading$Core$SignalNotifier;
    static attachToSemaphore(
      name: string,
      handler: Windows$System$Threading$Core$SignalHandler,
      timeout: number
    ): Windows$System$Threading$Core$SignalNotifier;
  }

  declare export interface Windows$System$Threading$Core$ISignalNotifierStatics {
    attachToEvent(
      name: string,
      handler: Windows$System$Threading$Core$SignalHandler
    ): Windows$System$Threading$Core$SignalNotifier;
    attachToEvent(
      name: string,
      handler: Windows$System$Threading$Core$SignalHandler,
      timeout: number
    ): Windows$System$Threading$Core$SignalNotifier;
    attachToSemaphore(
      name: string,
      handler: Windows$System$Threading$Core$SignalHandler
    ): Windows$System$Threading$Core$SignalNotifier;
    attachToSemaphore(
      name: string,
      handler: Windows$System$Threading$Core$SignalHandler,
      timeout: number
    ): Windows$System$Threading$Core$SignalNotifier;
  }

  declare export interface Windows$System$Threading$Core$IPreallocatedWorkItemFactory {
    createWorkItem(
      handler: Windows$System$Threading$WorkItemHandler
    ): Windows$System$Threading$Core$PreallocatedWorkItem;
    createWorkItemWithPriority(
      handler: Windows$System$Threading$WorkItemHandler,
      priority: $Values<typeof Windows$System$Threading$WorkItemPriority>
    ): Windows$System$Threading$Core$PreallocatedWorkItem;
    createWorkItemWithPriorityAndOptions(
      handler: Windows$System$Threading$WorkItemHandler,
      priority: $Values<typeof Windows$System$Threading$WorkItemPriority>,
      options: $Values<typeof Windows$System$Threading$WorkItemOptions>
    ): Windows$System$Threading$Core$PreallocatedWorkItem;
  }

  declare export class Windows$System$Threading$Core$PreallocatedWorkItem
    mixins Windows$System$Threading$Core$IPreallocatedWorkItem {
    constructor(handler: Windows$System$Threading$WorkItemHandler): this;
    constructor(
      handler: Windows$System$Threading$WorkItemHandler,
      priority: $Values<typeof Windows$System$Threading$WorkItemPriority>
    ): this;
    constructor(
      handler: Windows$System$Threading$WorkItemHandler,
      priority: $Values<typeof Windows$System$Threading$WorkItemPriority>,
      options: $Values<typeof Windows$System$Threading$WorkItemOptions>
    ): this;
    runAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$System$Threading$Core$IPreallocatedWorkItem {
    runAsync(): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$System$Threading$Core$ISignalNotifier {
    enable(): void;
    terminate(): void;
  }

  declare var npm$namespace$Windows$System$UserProfile: {
    AccountPictureKind: typeof Windows$System$UserProfile$AccountPictureKind,
    SetAccountPictureResult: typeof Windows$System$UserProfile$SetAccountPictureResult,
    UserInformation: typeof Windows$System$UserProfile$UserInformation,
    LockScreen: typeof Windows$System$UserProfile$LockScreen,
    GlobalizationPreferences: typeof Windows$System$UserProfile$GlobalizationPreferences
  };

  declare export var Windows$System$UserProfile$AccountPictureKind: {|
    +smallImage: 0, // 0
    +largeImage: 1, // 1
    +video: 2 // 2
  |};

  declare export var Windows$System$UserProfile$SetAccountPictureResult: {|
    +success: 0, // 0
    +changeDisabled: 1, // 1
    +largeOrDynamicError: 2, // 2
    +videoFrameSizeError: 3, // 3
    +fileSizeError: 4, // 4
    +failure: 5 // 5
  |};

  declare export interface Windows$System$UserProfile$IUserInformationStatics {
    accountPictureChangeEnabled: boolean;
    nameAccessAllowed: boolean;
    getAccountPicture(
      kind: $Values<typeof Windows$System$UserProfile$AccountPictureKind>
    ): Windows$Storage$IStorageFile;
    setAccountPictureAsync(
      image: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$System$UserProfile$SetAccountPictureResult>
    >;
    setAccountPicturesAsync(
      smallImage: Windows$Storage$IStorageFile,
      largeImage: Windows$Storage$IStorageFile,
      video: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$System$UserProfile$SetAccountPictureResult>
    >;
    setAccountPictureFromStreamAsync(
      image: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$System$UserProfile$SetAccountPictureResult>
    >;
    setAccountPicturesFromStreamsAsync(
      smallImage: Windows$Storage$Streams$IRandomAccessStream,
      largeImage: Windows$Storage$Streams$IRandomAccessStream,
      video: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$System$UserProfile$SetAccountPictureResult>
    >;
    onaccountpicturechanged: any;
    getDisplayNameAsync(): Windows$Foundation$IAsyncOperation<string>;
    getFirstNameAsync(): Windows$Foundation$IAsyncOperation<string>;
    getLastNameAsync(): Windows$Foundation$IAsyncOperation<string>;
    getPrincipalNameAsync(): Windows$Foundation$IAsyncOperation<string>;
    getSessionInitiationProtocolUriAsync(): Windows$Foundation$IAsyncOperation<Windows$Foundation$Uri>;
    getDomainNameAsync(): Windows$Foundation$IAsyncOperation<string>;
  }

  declare export class Windows$System$UserProfile$UserInformation {
    static accountPictureChangeEnabled: boolean;
    static nameAccessAllowed: boolean;
    static getAccountPicture(
      kind: $Values<typeof Windows$System$UserProfile$AccountPictureKind>
    ): Windows$Storage$IStorageFile;
    static setAccountPictureAsync(
      image: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$System$UserProfile$SetAccountPictureResult>
    >;
    static setAccountPicturesAsync(
      smallImage: Windows$Storage$IStorageFile,
      largeImage: Windows$Storage$IStorageFile,
      video: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$System$UserProfile$SetAccountPictureResult>
    >;
    static setAccountPictureFromStreamAsync(
      image: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$System$UserProfile$SetAccountPictureResult>
    >;
    static setAccountPicturesFromStreamsAsync(
      smallImage: Windows$Storage$Streams$IRandomAccessStream,
      largeImage: Windows$Storage$Streams$IRandomAccessStream,
      video: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncOperation<
      $Values<typeof Windows$System$UserProfile$SetAccountPictureResult>
    >;
    static onaccountpicturechanged: any;
    static getDisplayNameAsync(): Windows$Foundation$IAsyncOperation<string>;
    static getFirstNameAsync(): Windows$Foundation$IAsyncOperation<string>;
    static getLastNameAsync(): Windows$Foundation$IAsyncOperation<string>;
    static getPrincipalNameAsync(): Windows$Foundation$IAsyncOperation<string>;
    static getSessionInitiationProtocolUriAsync(): Windows$Foundation$IAsyncOperation<Windows$Foundation$Uri>;
    static getDomainNameAsync(): Windows$Foundation$IAsyncOperation<string>;
  }

  declare export interface Windows$System$UserProfile$ILockScreenStatics {
    originalImageFile: Windows$Foundation$Uri;
    getImageStream(): Windows$Storage$Streams$IRandomAccessStream;
    setImageFileAsync(
      value: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
    setImageStreamAsync(
      value: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncAction;
  }

  declare export class Windows$System$UserProfile$LockScreen {
    static originalImageFile: Windows$Foundation$Uri;
    static getImageStream(): Windows$Storage$Streams$IRandomAccessStream;
    static setImageFileAsync(
      value: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncAction;
    static setImageStreamAsync(
      value: Windows$Storage$Streams$IRandomAccessStream
    ): Windows$Foundation$IAsyncAction;
  }

  declare export interface Windows$System$UserProfile$IGlobalizationPreferencesStatics {
    calendars: Windows$Foundation$Collections$IVectorView<string>;
    clocks: Windows$Foundation$Collections$IVectorView<string>;
    currencies: Windows$Foundation$Collections$IVectorView<string>;
    homeGeographicRegion: string;
    languages: Windows$Foundation$Collections$IVectorView<string>;
    weekStartsOn: $Values<typeof Windows$Globalization$DayOfWeek>;
  }

  declare export class Windows$System$UserProfile$GlobalizationPreferences {
    static calendars: Windows$Foundation$Collections$IVectorView<string>;
    static clocks: Windows$Foundation$Collections$IVectorView<string>;
    static currencies: Windows$Foundation$Collections$IVectorView<string>;
    static homeGeographicRegion: string;
    static languages: Windows$Foundation$Collections$IVectorView<string>;
    static weekStartsOn: $Values<typeof Windows$Globalization$DayOfWeek>;
  }

  declare export interface Windows$System$ILauncherUIOptions {
    invocationPoint: Windows$Foundation$Point;
    preferredPlacement: $Values<typeof Windows$UI$Popups$Placement>;
    selectionRect: Windows$Foundation$Rect;
  }

  declare export class Windows$System$LauncherUIOptions
    mixins Windows$System$ILauncherUIOptions {
    invocationPoint: Windows$Foundation$Point;
    preferredPlacement: $Values<typeof Windows$UI$Popups$Placement>;
    selectionRect: Windows$Foundation$Rect;
  }

  declare export interface Windows$System$ILauncherOptions {
    contentType: string;
    desiredRemainingView: $Values<
      typeof Windows$UI$ViewManagement$ViewSizePreference
    >;
    displayApplicationPicker: boolean;
    fallbackUri: Windows$Foundation$Uri;
    preferredApplicationDisplayName: string;
    preferredApplicationPackageFamilyName: string;
    treatAsUntrusted: boolean;
    uI: Windows$System$LauncherUIOptions;
  }

  declare export class Windows$System$LauncherOptions
    mixins Windows$System$ILauncherOptions {
    contentType: string;
    desiredRemainingView: $Values<
      typeof Windows$UI$ViewManagement$ViewSizePreference
    >;
    displayApplicationPicker: boolean;
    fallbackUri: Windows$Foundation$Uri;
    preferredApplicationDisplayName: string;
    preferredApplicationPackageFamilyName: string;
    treatAsUntrusted: boolean;
    uI: Windows$System$LauncherUIOptions;
  }

  declare export interface Windows$System$ILauncherStatics {
    launchFileAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<boolean>;
    launchFileAsync(
      file: Windows$Storage$IStorageFile,
      options: Windows$System$LauncherOptions
    ): Windows$Foundation$IAsyncOperation<boolean>;
    launchUriAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<boolean>;
    launchUriAsync(
      uri: Windows$Foundation$Uri,
      options: Windows$System$LauncherOptions
    ): Windows$Foundation$IAsyncOperation<boolean>;
  }

  declare export class Windows$System$Launcher {
    static launchFileAsync(
      file: Windows$Storage$IStorageFile
    ): Windows$Foundation$IAsyncOperation<boolean>;
    static launchFileAsync(
      file: Windows$Storage$IStorageFile,
      options: Windows$System$LauncherOptions
    ): Windows$Foundation$IAsyncOperation<boolean>;
    static launchUriAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperation<boolean>;
    static launchUriAsync(
      uri: Windows$Foundation$Uri,
      options: Windows$System$LauncherOptions
    ): Windows$Foundation$IAsyncOperation<boolean>;
  }

  declare export var Windows$System$ProcessorArchitecture: {|
    +x86: 0, // 0
    +arm: 1, // 1
    +x64: 2, // 2
    +neutral: 3, // 3
    +unknown: 4 // 4
  |};

  declare export var Windows$System$VirtualKeyModifiers: {|
    +none: 0, // 0
    +control: 1, // 1
    +menu: 2, // 2
    +shift: 3, // 3
    +windows: 4 // 4
  |};

  declare export var Windows$System$VirtualKey: {|
    +none: 0, // 0
    +leftButton: 1, // 1
    +rightButton: 2, // 2
    +cancel: 3, // 3
    +middleButton: 4, // 4
    +xButton1: 5, // 5
    +xButton2: 6, // 6
    +back: 7, // 7
    +tab: 8, // 8
    +clear: 9, // 9
    +enter: 10, // 10
    +shift: 11, // 11
    +control: 12, // 12
    +menu: 13, // 13
    +pause: 14, // 14
    +capitalLock: 15, // 15
    +kana: 16, // 16
    +hangul: 17, // 17
    +junja: 18, // 18
    +final: 19, // 19
    +hanja: 20, // 20
    +kanji: 21, // 21
    +escape: 22, // 22
    +convert: 23, // 23
    +nonConvert: 24, // 24
    +accept: 25, // 25
    +modeChange: 26, // 26
    +space: 27, // 27
    +pageUp: 28, // 28
    +pageDown: 29, // 29
    +end: 30, // 30
    +home: 31, // 31
    +left: 32, // 32
    +up: 33, // 33
    +right: 34, // 34
    +down: 35, // 35
    +select: 36, // 36
    +print: 37, // 37
    +execute: 38, // 38
    +snapshot: 39, // 39
    +insert: 40, // 40
    +delete_: 41, // 41
    +help: 42, // 42
    +number0: 43, // 43
    +number1: 44, // 44
    +number2: 45, // 45
    +number3: 46, // 46
    +number4: 47, // 47
    +number5: 48, // 48
    +number6: 49, // 49
    +number7: 50, // 50
    +number8: 51, // 51
    +number9: 52, // 52
    +a: 53, // 53
    +b: 54, // 54
    +c: 55, // 55
    +d: 56, // 56
    +e: 57, // 57
    +f: 58, // 58
    +g: 59, // 59
    +h: 60, // 60
    +i: 61, // 61
    +j: 62, // 62
    +k: 63, // 63
    +l: 64, // 64
    +m: 65, // 65
    +n: 66, // 66
    +o: 67, // 67
    +p: 68, // 68
    +q: 69, // 69
    +r: 70, // 70
    +s: 71, // 71
    +t: 72, // 72
    +u: 73, // 73
    +v: 74, // 74
    +w: 75, // 75
    +x: 76, // 76
    +y: 77, // 77
    +z: 78, // 78
    +leftWindows: 79, // 79
    +rightWindows: 80, // 80
    +application: 81, // 81
    +sleep: 82, // 82
    +numberPad0: 83, // 83
    +numberPad1: 84, // 84
    +numberPad2: 85, // 85
    +numberPad3: 86, // 86
    +numberPad4: 87, // 87
    +numberPad5: 88, // 88
    +numberPad6: 89, // 89
    +numberPad7: 90, // 90
    +numberPad8: 91, // 91
    +numberPad9: 92, // 92
    +multiply: 93, // 93
    +add: 94, // 94
    +separator: 95, // 95
    +subtract: 96, // 96
    +decimal: 97, // 97
    +divide: 98, // 98
    +f1: 99, // 99
    +f2: 100, // 100
    +f3: 101, // 101
    +f4: 102, // 102
    +f5: 103, // 103
    +f6: 104, // 104
    +f7: 105, // 105
    +f8: 106, // 106
    +f9: 107, // 107
    +f10: 108, // 108
    +f11: 109, // 109
    +f12: 110, // 110
    +f13: 111, // 111
    +f14: 112, // 112
    +f15: 113, // 113
    +f16: 114, // 114
    +f17: 115, // 115
    +f18: 116, // 116
    +f19: 117, // 117
    +f20: 118, // 118
    +f21: 119, // 119
    +f22: 120, // 120
    +f23: 121, // 121
    +f24: 122, // 122
    +numberKeyLock: 123, // 123
    +scroll: 124, // 124
    +leftShift: 125, // 125
    +rightShift: 126, // 126
    +leftControl: 127, // 127
    +rightControl: 128, // 128
    +leftMenu: 129, // 129
    +rightMenu: 130 // 130
  |};

  declare var npm$namespace$Windows$System$Display: {
    DisplayRequest: typeof Windows$System$Display$DisplayRequest
  };
  declare export interface Windows$System$Display$IDisplayRequest {
    requestActive(): void;
    requestRelease(): void;
  }

  declare export class Windows$System$Display$DisplayRequest
    mixins Windows$System$Display$IDisplayRequest {
    requestActive(): void;
    requestRelease(): void;
  }

  declare var npm$namespace$Windows$System$RemoteDesktop: {
    InteractiveSession: typeof Windows$System$RemoteDesktop$InteractiveSession
  };
  declare export interface Windows$System$RemoteDesktop$IInteractiveSessionStatics {
    isRemote: boolean;
  }

  declare export class Windows$System$RemoteDesktop$InteractiveSession {
    static isRemote: boolean;
  }

  declare var npm$namespace$Windows$UI: {
    Colors: typeof Windows$UI$Colors,
    ColorHelper: typeof Windows$UI$ColorHelper,
    ApplicationSettings: typeof npm$namespace$Windows$UI$ApplicationSettings,
    ViewManagement: typeof npm$namespace$Windows$UI$ViewManagement,
    Input: typeof npm$namespace$Windows$UI$Input,
    Popups: typeof npm$namespace$Windows$UI$Popups,
    StartScreen: typeof npm$namespace$Windows$UI$StartScreen,
    Text: typeof npm$namespace$Windows$UI$Text,
    Core: typeof npm$namespace$Windows$UI$Core,
    WebUI: typeof npm$namespace$Windows$UI$WebUI,
    Notifications: typeof npm$namespace$Windows$UI$Notifications
  };

  declare var npm$namespace$Windows$UI$ApplicationSettings: {
    SettingsEdgeLocation: typeof Windows$UI$ApplicationSettings$SettingsEdgeLocation,
    SettingsCommand: typeof Windows$UI$ApplicationSettings$SettingsCommand,
    SettingsPaneCommandsRequest: typeof Windows$UI$ApplicationSettings$SettingsPaneCommandsRequest,
    SettingsPaneCommandsRequestedEventArgs: typeof Windows$UI$ApplicationSettings$SettingsPaneCommandsRequestedEventArgs,
    SettingsPane: typeof Windows$UI$ApplicationSettings$SettingsPane
  };
  declare export interface Windows$UI$ApplicationSettings$ISettingsCommandFactory {
    create(
      settingsCommandId: any,
      label: string,
      handler: Windows$UI$Popups$UICommandInvokedHandler
    ): Windows$UI$ApplicationSettings$SettingsCommand;
  }

  declare export class Windows$UI$ApplicationSettings$SettingsCommand
    mixins Windows$UI$Popups$IUICommand {
    constructor(
      settingsCommandId: any,
      label: string,
      handler: Windows$UI$Popups$UICommandInvokedHandler
    ): this;
    id: any;
    invoked: Windows$UI$Popups$UICommandInvokedHandler;
    label: string;
  }

  declare export interface Windows$UI$ApplicationSettings$ISettingsPaneCommandsRequest {
    applicationCommands: Windows$Foundation$Collections$IVector<Windows$UI$ApplicationSettings$SettingsCommand>;
  }

  declare export class Windows$UI$ApplicationSettings$SettingsPaneCommandsRequest
    mixins Windows$UI$ApplicationSettings$ISettingsPaneCommandsRequest {
    applicationCommands: Windows$Foundation$Collections$IVector<Windows$UI$ApplicationSettings$SettingsCommand>;
  }

  declare export interface Windows$UI$ApplicationSettings$ISettingsPaneCommandsRequestedEventArgs {
    request: Windows$UI$ApplicationSettings$SettingsPaneCommandsRequest;
  }

  declare export class Windows$UI$ApplicationSettings$SettingsPaneCommandsRequestedEventArgs
    mixins Windows$UI$ApplicationSettings$ISettingsPaneCommandsRequestedEventArgs {
    request: Windows$UI$ApplicationSettings$SettingsPaneCommandsRequest;
  }

  declare export var Windows$UI$ApplicationSettings$SettingsEdgeLocation: {|
    +right: 0, // 0
    +left: 1 // 1
  |};

  declare export interface Windows$UI$ApplicationSettings$ISettingsPaneStatics {
    edge: $Values<typeof Windows$UI$ApplicationSettings$SettingsEdgeLocation>;
    getForCurrentView(): Windows$UI$ApplicationSettings$SettingsPane;
    show(): void;
  }

  declare export class Windows$UI$ApplicationSettings$SettingsPane
    mixins Windows$UI$ApplicationSettings$ISettingsPane {
    oncommandsrequested: any;
    static edge: $Values<
      typeof Windows$UI$ApplicationSettings$SettingsEdgeLocation
    >;
    static getForCurrentView(): Windows$UI$ApplicationSettings$SettingsPane;
    static show(): void;
  }

  declare export interface Windows$UI$ApplicationSettings$ISettingsPane {
    oncommandsrequested: any;
  }

  declare var npm$namespace$Windows$UI$ViewManagement: {
    ViewSizePreference: typeof Windows$UI$ViewManagement$ViewSizePreference,
    ApplicationViewState: typeof Windows$UI$ViewManagement$ApplicationViewState,
    ApplicationViewOrientation: typeof Windows$UI$ViewManagement$ApplicationViewOrientation,
    HandPreference: typeof Windows$UI$ViewManagement$HandPreference,
    UIElementType: typeof Windows$UI$ViewManagement$UIElementType,
    ApplicationView: typeof Windows$UI$ViewManagement$ApplicationView,
    InputPaneVisibilityEventArgs: typeof Windows$UI$ViewManagement$InputPaneVisibilityEventArgs,
    InputPane: typeof Windows$UI$ViewManagement$InputPane,
    AccessibilitySettings: typeof Windows$UI$ViewManagement$AccessibilitySettings,
    UISettings: typeof Windows$UI$ViewManagement$UISettings,
    ApplicationViewTitleBar: typeof Windows$UI$ViewManagement$ApplicationViewTitleBar
  };

  declare export var Windows$UI$ViewManagement$ViewSizePreference: {|
    +default: 0, // 0
    +useLess: 1, // 1
    +useHalf: 2, // 2
    +useMore: 3, // 3
    +useMinimum: 4, // 4
    +useNone: 5 // 5
  |};

  declare export var Windows$UI$ViewManagement$ApplicationViewState: {|
    +fullScreenLandscape: 0, // 0
    +filled: 1, // 1
    +snapped: 2, // 2
    +fullScreenPortrait: 3 // 3
  |};

  /**
   * Defines an instance of a window (app view) and the information that describes it.
   */
  declare export class Windows$UI$ViewManagement$ApplicationView {
    /**
     * Gets the window (app view) for the current app.
     */
    static getForCurrentView(): Windows$UI$ViewManagement$ApplicationView;

    /**
     * Attempts to unsnap a previously snapped app. This call will only succeed when the app is running in the foreground.
     */
    static tryUnsnap(): boolean;

    /**
     * Gets the state of the current app view.
     */
    static value: $Values<
      typeof Windows$UI$ViewManagement$ApplicationViewState
    >;

    /**
     * Indicates whether the app terminates when the last window is closed.
     */
    static terminateAppOnFinalViewClose: boolean;

    /**
     * Gets the current orientation of the window (app view) with respect to the display.
     */
    orientation: $Values<
      typeof Windows$UI$ViewManagement$ApplicationViewOrientation
    >;

    /**
     * Gets or sets the displayed title of the window.
     */
    title: string;

    /**
     * Gets or sets whether screen capture is enabled for the window (app view).
     */
    isScreenCaptureEnabled: boolean;

    /**
     * Gets whether the window (app view) is on the Windows lock screen.
     */
    isOnLockScreen: boolean;

    /**
     * Gets whether the window(app view) is full screen or not.
     */
    isFullScreen: boolean;

    /**
     * Gets the current ID of the window (app view) .
     */
    id: number;

    /**
     * Gets whether the current window (app view) is adjacent to the right edge of the screen.
     */
    adjacentToRightDisplayEdge: boolean;

    /**
     * Gets whether the current window (app view) is adjacent to the left edge of the screen.
     */
    adjacentToLeftDisplayEdge: number;

    /**
     * Gets the title bar of the app.
     */
    titleBar: ViewManagement$ApplicationViewTitleBar;
  }

  /**
   * Defines the set of display orientation modes for a window (app view).
   */

  declare export var Windows$UI$ViewManagement$ApplicationViewOrientation: {|
    +landscape: 0, // 0
    +portrait: 1 // 1
  |};

  declare export interface Windows$UI$ViewManagement$IInputPaneVisibilityEventArgs {
    ensuredFocusedElementInView: boolean;
    occludedRect: Windows$Foundation$Rect;
  }

  declare export class Windows$UI$ViewManagement$InputPaneVisibilityEventArgs
    mixins Windows$UI$ViewManagement$IInputPaneVisibilityEventArgs {
    ensuredFocusedElementInView: boolean;
    occludedRect: Windows$Foundation$Rect;
  }

  declare export interface Windows$UI$ViewManagement$IInputPane {
    occludedRect: Windows$Foundation$Rect;
    onshowing: any;
    onhiding: any;
  }

  declare export class Windows$UI$ViewManagement$InputPane
    mixins Windows$UI$ViewManagement$IInputPane {
    occludedRect: Windows$Foundation$Rect;
    onshowing: any;
    onhiding: any;
    static getForCurrentView(): Windows$UI$ViewManagement$InputPane;
  }

  declare export interface Windows$UI$ViewManagement$IInputPaneStatics {
    getForCurrentView(): Windows$UI$ViewManagement$InputPane;
  }

  declare export var Windows$UI$ViewManagement$HandPreference: {|
    +leftHanded: 0, // 0
    +rightHanded: 1 // 1
  |};

  declare export var Windows$UI$ViewManagement$UIElementType: {|
    +activeCaption: 0, // 0
    +background: 1, // 1
    +buttonFace: 2, // 2
    +buttonText: 3, // 3
    +captionText: 4, // 4
    +grayText: 5, // 5
    +highlight: 6, // 6
    +highlightText: 7, // 7
    +hotlight: 8, // 8
    +inactiveCaption: 9, // 9
    +inactiveCaptionText: 10, // 10
    +window: 11, // 11
    +windowText: 12 // 12
  |};

  declare export interface Windows$UI$ViewManagement$IAccessibilitySettings {
    highContrast: boolean;
    highContrastScheme: string;
    onhighcontrastchanged: any;
  }

  declare export class Windows$UI$ViewManagement$AccessibilitySettings
    mixins Windows$UI$ViewManagement$IAccessibilitySettings {
    highContrast: boolean;
    highContrastScheme: string;
    onhighcontrastchanged: any;
  }

  declare export interface Windows$UI$ViewManagement$IUISettings {
    animationsEnabled: boolean;
    caretBlinkRate: number;
    caretBrowsingEnabled: boolean;
    caretWidth: number;
    cursorSize: Windows$Foundation$Size;
    doubleClickTime: number;
    handPreference: $Values<typeof Windows$UI$ViewManagement$HandPreference>;
    messageDuration: number;
    mouseHoverTime: number;
    scrollBarArrowSize: Windows$Foundation$Size;
    scrollBarSize: Windows$Foundation$Size;
    scrollBarThumbBoxSize: Windows$Foundation$Size;
    uIElementColor(
      desiredElement: $Values<typeof Windows$UI$ViewManagement$UIElementType>
    ): Windows$UI$Color;
  }

  declare export class Windows$UI$ViewManagement$UISettings
    mixins Windows$UI$ViewManagement$IUISettings {
    animationsEnabled: boolean;
    caretBlinkRate: number;
    caretBrowsingEnabled: boolean;
    caretWidth: number;
    cursorSize: Windows$Foundation$Size;
    doubleClickTime: number;
    handPreference: $Values<typeof Windows$UI$ViewManagement$HandPreference>;
    messageDuration: number;
    mouseHoverTime: number;
    scrollBarArrowSize: Windows$Foundation$Size;
    scrollBarSize: Windows$Foundation$Size;
    scrollBarThumbBoxSize: Windows$Foundation$Size;
    uIElementColor(
      desiredElement: $Values<typeof Windows$UI$ViewManagement$UIElementType>
    ): Windows$UI$Color;
  }

  declare export class Windows$UI$ViewManagement$ApplicationViewTitleBar {
    /**
     * Gets or sets the color of the title bar background.
     */
    backgroundColor: UI$Color;

    /**
     * Gets or sets the background color of the title bar buttons.
     */
    buttonBackgroundColor: UI$Color;

    /**
     * Gets or sets the foreground color of the title bar buttons.
     */
    buttonForegroundColor: UI$Color;

    /**
     * Gets or sets the background color of a title bar button when the pointer is over it.
     */
    buttonHoverBackgroundColor: UI$Color;

    /**
     * Gets or sets the foreground color of a title bar button when the pointer is over it.
     */
    buttonHoverForegroundColor: UI$Color;

    /**
     * Gets or sets the background color of a title bar button when it's inactive.
     */
    buttonInactiveBackgroundColor: UI$Color;

    /**
     * Gets or sets the foreground color of a title bar button when it's inactive.
     */
    buttonInactiveForegroundColor: UI$Color;

    /**
     * Gets or sets the background color of a title bar button when it's pressed.
     */
    buttonPressedBackgroundColor: UI$Color;

    /**
     * Gets or sets the foreground color of a title bar button when it's pressed.
     */
    buttonPressedForegroundColor: UI$Color;

    /**
     * Gets or sets the color of the title bar foreground.
     */
    foregroundColor: UI$Color;

    /**
     * Gets or sets the color of the title bar background when it's inactive.
     */
    inactiveBackgroundColor: UI$Color;

    /**
     * Gets or sets the color of the title bar foreground when it's inactive.
     */
    inactiveForegroundColor: UI$Color;
  }

  declare var npm$namespace$Windows$UI$Input: {
    EdgeGestureKind: typeof Windows$UI$Input$EdgeGestureKind,
    HoldingState: typeof Windows$UI$Input$HoldingState,
    DraggingState: typeof Windows$UI$Input$DraggingState,
    CrossSlidingState: typeof Windows$UI$Input$CrossSlidingState,
    GestureSettings: typeof Windows$UI$Input$GestureSettings,
    PointerUpdateKind: typeof Windows$UI$Input$PointerUpdateKind,
    EdgeGestureEventArgs: typeof Windows$UI$Input$EdgeGestureEventArgs,
    EdgeGesture: typeof Windows$UI$Input$EdgeGesture,
    MouseWheelParameters: typeof Windows$UI$Input$MouseWheelParameters,
    GestureRecognizer: typeof Windows$UI$Input$GestureRecognizer,
    TappedEventArgs: typeof Windows$UI$Input$TappedEventArgs,
    RightTappedEventArgs: typeof Windows$UI$Input$RightTappedEventArgs,
    HoldingEventArgs: typeof Windows$UI$Input$HoldingEventArgs,
    DraggingEventArgs: typeof Windows$UI$Input$DraggingEventArgs,
    ManipulationStartedEventArgs: typeof Windows$UI$Input$ManipulationStartedEventArgs,
    ManipulationUpdatedEventArgs: typeof Windows$UI$Input$ManipulationUpdatedEventArgs,
    ManipulationInertiaStartingEventArgs: typeof Windows$UI$Input$ManipulationInertiaStartingEventArgs,
    ManipulationCompletedEventArgs: typeof Windows$UI$Input$ManipulationCompletedEventArgs,
    CrossSlidingEventArgs: typeof Windows$UI$Input$CrossSlidingEventArgs,
    PointerPoint: typeof Windows$UI$Input$PointerPoint,
    PointerPointProperties: typeof Windows$UI$Input$PointerPointProperties,
    PointerVisualizationSettings: typeof Windows$UI$Input$PointerVisualizationSettings,
    Inking: typeof npm$namespace$Windows$UI$Input$Inking
  };

  declare export var Windows$UI$Input$EdgeGestureKind: {|
    +touch: 0, // 0
    +keyboard: 1, // 1
    +mouse: 2 // 2
  |};

  declare export interface Windows$UI$Input$IEdgeGestureEventArgs {
    kind: $Values<typeof Windows$UI$Input$EdgeGestureKind>;
  }

  declare export class Windows$UI$Input$EdgeGestureEventArgs
    mixins Windows$UI$Input$IEdgeGestureEventArgs {
    kind: $Values<typeof Windows$UI$Input$EdgeGestureKind>;
  }

  declare export interface Windows$UI$Input$IEdgeGestureStatics {
    getForCurrentView(): Windows$UI$Input$EdgeGesture;
  }

  declare export class Windows$UI$Input$EdgeGesture
    mixins Windows$UI$Input$IEdgeGesture {
    onstarting: any;
    oncompleted: any;
    oncanceled: any;
    static getForCurrentView(): Windows$UI$Input$EdgeGesture;
  }

  declare export interface Windows$UI$Input$IEdgeGesture {
    onstarting: any;
    oncompleted: any;
    oncanceled: any;
  }

  declare export var Windows$UI$Input$HoldingState: {|
    +started: 0, // 0
    +completed: 1, // 1
    +canceled: 2 // 2
  |};

  declare export var Windows$UI$Input$DraggingState: {|
    +started: 0, // 0
    +continuing: 1, // 1
    +completed: 2 // 2
  |};

  declare export var Windows$UI$Input$CrossSlidingState: {|
    +started: 0, // 0
    +dragging: 1, // 1
    +selecting: 2, // 2
    +selectSpeedBumping: 3, // 3
    +speedBumping: 4, // 4
    +rearranging: 5, // 5
    +completed: 6 // 6
  |};

  declare export var Windows$UI$Input$GestureSettings: {|
    +none: 0, // 0
    +tap: 1, // 1
    +doubleTap: 2, // 2
    +hold: 3, // 3
    +holdWithMouse: 4, // 4
    +rightTap: 5, // 5
    +drag: 6, // 6
    +manipulationTranslateX: 7, // 7
    +manipulationTranslateY: 8, // 8
    +manipulationTranslateRailsX: 9, // 9
    +manipulationTranslateRailsY: 10, // 10
    +manipulationRotate: 11, // 11
    +manipulationScale: 12, // 12
    +manipulationTranslateInertia: 13, // 13
    +manipulationRotateInertia: 14, // 14
    +manipulationScaleInertia: 15, // 15
    +crossSlide: 16 // 16
  |};

  declare export interface Windows$UI$Input$ManipulationDelta {
    translation: Windows$Foundation$Point;
    scale: number;
    rotation: number;
    expansion: number;
  }

  declare export interface Windows$UI$Input$ManipulationVelocities {
    linear: Windows$Foundation$Point;
    angular: number;
    expansion: number;
  }

  declare export interface Windows$UI$Input$CrossSlideThresholds {
    selectionStart: number;
    speedBumpStart: number;
    speedBumpEnd: number;
    rearrangeStart: number;
  }

  declare export interface Windows$UI$Input$ITappedEventArgs {
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
    tapCount: number;
  }

  declare export interface Windows$UI$Input$IRightTappedEventArgs {
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
  }

  declare export interface Windows$UI$Input$IHoldingEventArgs {
    holdingState: $Values<typeof Windows$UI$Input$HoldingState>;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
  }

  declare export interface Windows$UI$Input$IDraggingEventArgs {
    draggingState: $Values<typeof Windows$UI$Input$DraggingState>;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
  }

  declare export interface Windows$UI$Input$IManipulationStartedEventArgs {
    cumulative: Windows$UI$Input$ManipulationDelta;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
  }

  declare export interface Windows$UI$Input$IManipulationUpdatedEventArgs {
    cumulative: Windows$UI$Input$ManipulationDelta;
    delta: Windows$UI$Input$ManipulationDelta;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
    velocities: Windows$UI$Input$ManipulationVelocities;
  }

  declare export interface Windows$UI$Input$IManipulationInertiaStartingEventArgs {
    cumulative: Windows$UI$Input$ManipulationDelta;
    delta: Windows$UI$Input$ManipulationDelta;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
    velocities: Windows$UI$Input$ManipulationVelocities;
  }

  declare export interface Windows$UI$Input$IManipulationCompletedEventArgs {
    cumulative: Windows$UI$Input$ManipulationDelta;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
    velocities: Windows$UI$Input$ManipulationVelocities;
  }

  declare export interface Windows$UI$Input$ICrossSlidingEventArgs {
    crossSlidingState: $Values<typeof Windows$UI$Input$CrossSlidingState>;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
  }

  declare export interface Windows$UI$Input$IMouseWheelParameters {
    charTranslation: Windows$Foundation$Point;
    deltaRotationAngle: number;
    deltaScale: number;
    pageTranslation: Windows$Foundation$Point;
  }

  declare export interface Windows$UI$Input$IGestureRecognizer {
    autoProcessInertia: boolean;
    crossSlideExact: boolean;
    crossSlideHorizontally: boolean;
    crossSlideThresholds: Windows$UI$Input$CrossSlideThresholds;
    gestureSettings: $Values<typeof Windows$UI$Input$GestureSettings>;
    inertiaExpansion: number;
    inertiaExpansionDeceleration: number;
    inertiaRotationAngle: number;
    inertiaRotationDeceleration: number;
    inertiaTranslationDeceleration: number;
    inertiaTranslationDisplacement: number;
    isActive: boolean;
    isInertial: boolean;
    manipulationExact: boolean;
    mouseWheelParameters: Windows$UI$Input$MouseWheelParameters;
    pivotCenter: Windows$Foundation$Point;
    pivotRadius: number;
    showGestureFeedback: boolean;
    canBeDoubleTap(value: Windows$UI$Input$PointerPoint): boolean;
    processDownEvent(value: Windows$UI$Input$PointerPoint): void;
    processMoveEvents(
      value: Windows$Foundation$Collections$IVector<Windows$UI$Input$PointerPoint>
    ): void;
    processUpEvent(value: Windows$UI$Input$PointerPoint): void;
    processMouseWheelEvent(
      value: Windows$UI$Input$PointerPoint,
      isShiftKeyDown: boolean,
      isControlKeyDown: boolean
    ): void;
    processInertia(): void;
    completeGesture(): void;
    ontapped: any;
    onrighttapped: any;
    onholding: any;
    ondragging: any;
    onmanipulationstarted: any;
    onmanipulationupdated: any;
    onmanipulationinertiastarting: any;
    onmanipulationcompleted: any;
    oncrosssliding: any;
  }

  declare export class Windows$UI$Input$MouseWheelParameters
    mixins Windows$UI$Input$IMouseWheelParameters {
    charTranslation: Windows$Foundation$Point;
    deltaRotationAngle: number;
    deltaScale: number;
    pageTranslation: Windows$Foundation$Point;
  }

  declare export class Windows$UI$Input$GestureRecognizer
    mixins Windows$UI$Input$IGestureRecognizer {
    autoProcessInertia: boolean;
    crossSlideExact: boolean;
    crossSlideHorizontally: boolean;
    crossSlideThresholds: Windows$UI$Input$CrossSlideThresholds;
    gestureSettings: $Values<typeof Windows$UI$Input$GestureSettings>;
    inertiaExpansion: number;
    inertiaExpansionDeceleration: number;
    inertiaRotationAngle: number;
    inertiaRotationDeceleration: number;
    inertiaTranslationDeceleration: number;
    inertiaTranslationDisplacement: number;
    isActive: boolean;
    isInertial: boolean;
    manipulationExact: boolean;
    mouseWheelParameters: Windows$UI$Input$MouseWheelParameters;
    pivotCenter: Windows$Foundation$Point;
    pivotRadius: number;
    showGestureFeedback: boolean;
    canBeDoubleTap(value: Windows$UI$Input$PointerPoint): boolean;
    processDownEvent(value: Windows$UI$Input$PointerPoint): void;
    processMoveEvents(
      value: Windows$Foundation$Collections$IVector<Windows$UI$Input$PointerPoint>
    ): void;
    processUpEvent(value: Windows$UI$Input$PointerPoint): void;
    processMouseWheelEvent(
      value: Windows$UI$Input$PointerPoint,
      isShiftKeyDown: boolean,
      isControlKeyDown: boolean
    ): void;
    processInertia(): void;
    completeGesture(): void;
    ontapped: any;
    onrighttapped: any;
    onholding: any;
    ondragging: any;
    onmanipulationstarted: any;
    onmanipulationupdated: any;
    onmanipulationinertiastarting: any;
    onmanipulationcompleted: any;
    oncrosssliding: any;
  }

  declare export class Windows$UI$Input$TappedEventArgs
    mixins Windows$UI$Input$ITappedEventArgs {
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
    tapCount: number;
  }

  declare export class Windows$UI$Input$RightTappedEventArgs
    mixins Windows$UI$Input$IRightTappedEventArgs {
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
  }

  declare export class Windows$UI$Input$HoldingEventArgs
    mixins Windows$UI$Input$IHoldingEventArgs {
    holdingState: $Values<typeof Windows$UI$Input$HoldingState>;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
  }

  declare export class Windows$UI$Input$DraggingEventArgs
    mixins Windows$UI$Input$IDraggingEventArgs {
    draggingState: $Values<typeof Windows$UI$Input$DraggingState>;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
  }

  declare export class Windows$UI$Input$ManipulationStartedEventArgs
    mixins Windows$UI$Input$IManipulationStartedEventArgs {
    cumulative: Windows$UI$Input$ManipulationDelta;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
  }

  declare export class Windows$UI$Input$ManipulationUpdatedEventArgs
    mixins Windows$UI$Input$IManipulationUpdatedEventArgs {
    cumulative: Windows$UI$Input$ManipulationDelta;
    delta: Windows$UI$Input$ManipulationDelta;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
    velocities: Windows$UI$Input$ManipulationVelocities;
  }

  declare export class Windows$UI$Input$ManipulationInertiaStartingEventArgs
    mixins Windows$UI$Input$IManipulationInertiaStartingEventArgs {
    cumulative: Windows$UI$Input$ManipulationDelta;
    delta: Windows$UI$Input$ManipulationDelta;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
    velocities: Windows$UI$Input$ManipulationVelocities;
  }

  declare export class Windows$UI$Input$ManipulationCompletedEventArgs
    mixins Windows$UI$Input$IManipulationCompletedEventArgs {
    cumulative: Windows$UI$Input$ManipulationDelta;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
    velocities: Windows$UI$Input$ManipulationVelocities;
  }

  declare export class Windows$UI$Input$CrossSlidingEventArgs
    mixins Windows$UI$Input$ICrossSlidingEventArgs {
    crossSlidingState: $Values<typeof Windows$UI$Input$CrossSlidingState>;
    pointerDeviceType: $Values<typeof Windows$Devices$Input$PointerDeviceType>;
    position: Windows$Foundation$Point;
  }

  declare export interface Windows$UI$Input$IPointerPointStatics {
    getCurrentPoint(pointerId: number): Windows$UI$Input$PointerPoint;
    getIntermediatePoints(
      pointerId: number
    ): Windows$Foundation$Collections$IVector<Windows$UI$Input$PointerPoint>;
    getCurrentPoint(
      pointerId: number,
      transform: Windows$UI$Input$IPointerPointTransform
    ): Windows$UI$Input$PointerPoint;
    getIntermediatePoints(
      pointerId: number,
      transform: Windows$UI$Input$IPointerPointTransform
    ): Windows$Foundation$Collections$IVector<Windows$UI$Input$PointerPoint>;
  }

  declare export class Windows$UI$Input$PointerPoint
    mixins Windows$UI$Input$IPointerPoint {
    frameId: number;
    isInContact: boolean;
    pointerDevice: Windows$Devices$Input$PointerDevice;
    pointerId: number;
    position: Windows$Foundation$Point;
    properties: Windows$UI$Input$PointerPointProperties;
    rawPosition: Windows$Foundation$Point;
    timestamp: number;
    static getCurrentPoint(pointerId: number): Windows$UI$Input$PointerPoint;
    static getIntermediatePoints(
      pointerId: number
    ): Windows$Foundation$Collections$IVector<Windows$UI$Input$PointerPoint>;
    static getCurrentPoint(
      pointerId: number,
      transform: Windows$UI$Input$IPointerPointTransform
    ): Windows$UI$Input$PointerPoint;
    static getIntermediatePoints(
      pointerId: number,
      transform: Windows$UI$Input$IPointerPointTransform
    ): Windows$Foundation$Collections$IVector<Windows$UI$Input$PointerPoint>;
  }

  declare export interface Windows$UI$Input$IPointerPointTransform {
    inverse: Windows$UI$Input$IPointerPointTransform;
    tryTransform(
      inPoint: Windows$Foundation$Point
    ): {
      outPoint: Windows$Foundation$Point,
      returnValue: boolean
    };
    transformBounds(rect: Windows$Foundation$Rect): Windows$Foundation$Rect;
  }

  declare export interface Windows$UI$Input$IPointerPoint {
    frameId: number;
    isInContact: boolean;
    pointerDevice: Windows$Devices$Input$PointerDevice;
    pointerId: number;
    position: Windows$Foundation$Point;
    properties: Windows$UI$Input$PointerPointProperties;
    rawPosition: Windows$Foundation$Point;
    timestamp: number;
  }

  declare export class Windows$UI$Input$PointerPointProperties
    mixins Windows$UI$Input$IPointerPointProperties {
    contactRect: Windows$Foundation$Rect;
    contactRectRaw: Windows$Foundation$Rect;
    isBarrelButtonPressed: boolean;
    isCanceled: boolean;
    isEraser: boolean;
    isHorizontalMouseWheel: boolean;
    isInRange: boolean;
    isInverted: boolean;
    isLeftButtonPressed: boolean;
    isMiddleButtonPressed: boolean;
    isPrimary: boolean;
    isRightButtonPressed: boolean;
    isXButton1Pressed: boolean;
    isXButton2Pressed: boolean;
    mouseWheelDelta: number;
    orientation: number;
    pointerUpdateKind: $Values<typeof Windows$UI$Input$PointerUpdateKind>;
    pressure: number;
    touchConfidence: boolean;
    twist: number;
    xTilt: number;
    yTilt: number;
    hasUsage(usagePage: number, usageId: number): boolean;
    getUsageValue(usagePage: number, usageId: number): number;
  }

  declare export var Windows$UI$Input$PointerUpdateKind: {|
    +other: 0, // 0
    +leftButtonPressed: 1, // 1
    +leftButtonReleased: 2, // 2
    +rightButtonPressed: 3, // 3
    +rightButtonReleased: 4, // 4
    +middleButtonPressed: 5, // 5
    +middleButtonReleased: 6, // 6
    +xButton1Pressed: 7, // 7
    +xButton1Released: 8, // 8
    +xButton2Pressed: 9, // 9
    +xButton2Released: 10 // 10
  |};

  declare export interface Windows$UI$Input$IPointerPointProperties {
    contactRect: Windows$Foundation$Rect;
    contactRectRaw: Windows$Foundation$Rect;
    isBarrelButtonPressed: boolean;
    isCanceled: boolean;
    isEraser: boolean;
    isHorizontalMouseWheel: boolean;
    isInRange: boolean;
    isInverted: boolean;
    isLeftButtonPressed: boolean;
    isMiddleButtonPressed: boolean;
    isPrimary: boolean;
    isRightButtonPressed: boolean;
    isXButton1Pressed: boolean;
    isXButton2Pressed: boolean;
    mouseWheelDelta: number;
    orientation: number;
    pointerUpdateKind: $Values<typeof Windows$UI$Input$PointerUpdateKind>;
    pressure: number;
    touchConfidence: boolean;
    twist: number;
    xTilt: number;
    yTilt: number;
    hasUsage(usagePage: number, usageId: number): boolean;
    getUsageValue(usagePage: number, usageId: number): number;
  }

  declare export interface Windows$UI$Input$IPointerVisualizationSettings {
    isBarrelButtonFeedbackEnabled: boolean;
    isContactFeedbackEnabled: boolean;
  }

  declare export interface Windows$UI$Input$IPointerVisualizationSettingsStatics {
    getForCurrentView(): Windows$UI$Input$PointerVisualizationSettings;
  }

  declare export class Windows$UI$Input$PointerVisualizationSettings
    mixins Windows$UI$Input$IPointerVisualizationSettings {
    isBarrelButtonFeedbackEnabled: boolean;
    isContactFeedbackEnabled: boolean;
    static getForCurrentView(): Windows$UI$Input$PointerVisualizationSettings;
  }

  declare var npm$namespace$Windows$UI$Input$Inking: {
    InkManipulationMode: typeof Windows$UI$Input$Inking$InkManipulationMode,
    InkRecognitionTarget: typeof Windows$UI$Input$Inking$InkRecognitionTarget,
    PenTipShape: typeof Windows$UI$Input$Inking$PenTipShape,
    InkDrawingAttributes: typeof Windows$UI$Input$Inking$InkDrawingAttributes,
    InkStrokeRenderingSegment: typeof Windows$UI$Input$Inking$InkStrokeRenderingSegment,
    InkStroke: typeof Windows$UI$Input$Inking$InkStroke,
    InkStrokeBuilder: typeof Windows$UI$Input$Inking$InkStrokeBuilder,
    InkRecognitionResult: typeof Windows$UI$Input$Inking$InkRecognitionResult,
    InkStrokeContainer: typeof Windows$UI$Input$Inking$InkStrokeContainer,
    InkRecognizer: typeof Windows$UI$Input$Inking$InkRecognizer,
    InkRecognizerContainer: typeof Windows$UI$Input$Inking$InkRecognizerContainer,
    InkManager: typeof Windows$UI$Input$Inking$InkManager
  };

  declare export var Windows$UI$Input$Inking$InkManipulationMode: {|
    +inking: 0, // 0
    +erasing: 1, // 1
    +selecting: 2 // 2
  |};

  declare export var Windows$UI$Input$Inking$InkRecognitionTarget: {|
    +all: 0, // 0
    +selected: 1, // 1
    +recent: 2 // 2
  |};

  declare export var Windows$UI$Input$Inking$PenTipShape: {|
    +circle: 0, // 0
    +rectangle: 1 // 1
  |};

  declare export interface Windows$UI$Input$Inking$IInkDrawingAttributes {
    color: Windows$UI$Color;
    fitToCurve: boolean;
    ignorePressure: boolean;
    penTip: $Values<typeof Windows$UI$Input$Inking$PenTipShape>;
    size: Windows$Foundation$Size;
  }

  declare export class Windows$UI$Input$Inking$InkDrawingAttributes
    mixins Windows$UI$Input$Inking$IInkDrawingAttributes {
    color: Windows$UI$Color;
    fitToCurve: boolean;
    ignorePressure: boolean;
    penTip: $Values<typeof Windows$UI$Input$Inking$PenTipShape>;
    size: Windows$Foundation$Size;
  }

  declare export interface Windows$UI$Input$Inking$IInkStrokeRenderingSegment {
    bezierControlPoint1: Windows$Foundation$Point;
    bezierControlPoint2: Windows$Foundation$Point;
    position: Windows$Foundation$Point;
    pressure: number;
    tiltX: number;
    tiltY: number;
    twist: number;
  }

  declare export class Windows$UI$Input$Inking$InkStrokeRenderingSegment
    mixins Windows$UI$Input$Inking$IInkStrokeRenderingSegment {
    bezierControlPoint1: Windows$Foundation$Point;
    bezierControlPoint2: Windows$Foundation$Point;
    position: Windows$Foundation$Point;
    pressure: number;
    tiltX: number;
    tiltY: number;
    twist: number;
  }

  declare export interface Windows$UI$Input$Inking$IInkStroke {
    boundingRect: Windows$Foundation$Rect;
    drawingAttributes: Windows$UI$Input$Inking$InkDrawingAttributes;
    recognized: boolean;
    selected: boolean;
    getRenderingSegments(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkStrokeRenderingSegment>;
    clone(): Windows$UI$Input$Inking$InkStroke;
  }

  declare export class Windows$UI$Input$Inking$InkStroke
    mixins Windows$UI$Input$Inking$IInkStroke {
    boundingRect: Windows$Foundation$Rect;
    drawingAttributes: Windows$UI$Input$Inking$InkDrawingAttributes;
    recognized: boolean;
    selected: boolean;
    getRenderingSegments(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkStrokeRenderingSegment>;
    clone(): Windows$UI$Input$Inking$InkStroke;
  }

  declare export interface Windows$UI$Input$Inking$IInkStrokeBuilder {
    beginStroke(pointerPoint: Windows$UI$Input$PointerPoint): void;
    appendToStroke(
      pointerPoint: Windows$UI$Input$PointerPoint
    ): Windows$UI$Input$PointerPoint;
    endStroke(
      pointerPoint: Windows$UI$Input$PointerPoint
    ): Windows$UI$Input$Inking$InkStroke;
    createStroke(
      points: Windows$Foundation$Collections$IIterable<Windows$Foundation$Point>
    ): Windows$UI$Input$Inking$InkStroke;
    setDefaultDrawingAttributes(
      drawingAttributes: Windows$UI$Input$Inking$InkDrawingAttributes
    ): void;
  }

  declare export class Windows$UI$Input$Inking$InkStrokeBuilder
    mixins Windows$UI$Input$Inking$IInkStrokeBuilder {
    beginStroke(pointerPoint: Windows$UI$Input$PointerPoint): void;
    appendToStroke(
      pointerPoint: Windows$UI$Input$PointerPoint
    ): Windows$UI$Input$PointerPoint;
    endStroke(
      pointerPoint: Windows$UI$Input$PointerPoint
    ): Windows$UI$Input$Inking$InkStroke;
    createStroke(
      points: Windows$Foundation$Collections$IIterable<Windows$Foundation$Point>
    ): Windows$UI$Input$Inking$InkStroke;
    setDefaultDrawingAttributes(
      drawingAttributes: Windows$UI$Input$Inking$InkDrawingAttributes
    ): void;
  }

  declare export interface Windows$UI$Input$Inking$IInkRecognitionResult {
    boundingRect: Windows$Foundation$Rect;
    getTextCandidates(): Windows$Foundation$Collections$IVectorView<string>;
    getStrokes(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkStroke>;
  }

  declare export class Windows$UI$Input$Inking$InkRecognitionResult
    mixins Windows$UI$Input$Inking$IInkRecognitionResult {
    boundingRect: Windows$Foundation$Rect;
    getTextCandidates(): Windows$Foundation$Collections$IVectorView<string>;
    getStrokes(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkStroke>;
  }

  declare export interface Windows$UI$Input$Inking$IInkStrokeContainer {
    boundingRect: Windows$Foundation$Rect;
    addStroke(stroke: Windows$UI$Input$Inking$InkStroke): void;
    deleteSelected(): Windows$Foundation$Rect;
    moveSelected(
      translation: Windows$Foundation$Point
    ): Windows$Foundation$Rect;
    selectWithPolyLine(
      polyline: Windows$Foundation$Collections$IIterable<Windows$Foundation$Point>
    ): Windows$Foundation$Rect;
    selectWithLine(
      from: Windows$Foundation$Point,
      to: Windows$Foundation$Point
    ): Windows$Foundation$Rect;
    copySelectedToClipboard(): void;
    pasteFromClipboard(
      position: Windows$Foundation$Point
    ): Windows$Foundation$Rect;
    canPasteFromClipboard(): boolean;
    loadAsync(
      inputStream: Windows$Storage$Streams$IInputStream
    ): Windows$Foundation$IAsyncActionWithProgress<number>;
    saveAsync(
      outputStream: Windows$Storage$Streams$IOutputStream
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    updateRecognitionResults(
      recognitionResults: Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>
    ): void;
    getStrokes(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkStroke>;
    getRecognitionResults(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>;
  }

  declare export class Windows$UI$Input$Inking$InkStrokeContainer
    mixins Windows$UI$Input$Inking$IInkStrokeContainer {
    boundingRect: Windows$Foundation$Rect;
    addStroke(stroke: Windows$UI$Input$Inking$InkStroke): void;
    deleteSelected(): Windows$Foundation$Rect;
    moveSelected(
      translation: Windows$Foundation$Point
    ): Windows$Foundation$Rect;
    selectWithPolyLine(
      polyline: Windows$Foundation$Collections$IIterable<Windows$Foundation$Point>
    ): Windows$Foundation$Rect;
    selectWithLine(
      from: Windows$Foundation$Point,
      to: Windows$Foundation$Point
    ): Windows$Foundation$Rect;
    copySelectedToClipboard(): void;
    pasteFromClipboard(
      position: Windows$Foundation$Point
    ): Windows$Foundation$Rect;
    canPasteFromClipboard(): boolean;
    loadAsync(
      inputStream: Windows$Storage$Streams$IInputStream
    ): Windows$Foundation$IAsyncActionWithProgress<number>;
    saveAsync(
      outputStream: Windows$Storage$Streams$IOutputStream
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    updateRecognitionResults(
      recognitionResults: Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>
    ): void;
    getStrokes(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkStroke>;
    getRecognitionResults(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>;
  }

  declare export interface Windows$UI$Input$Inking$IInkRecognizer {
    name: string;
  }

  declare export class Windows$UI$Input$Inking$InkRecognizer
    mixins Windows$UI$Input$Inking$IInkRecognizer {
    name: string;
  }

  declare export interface Windows$UI$Input$Inking$IInkRecognizerContainer {
    setDefaultRecognizer(
      recognizer: Windows$UI$Input$Inking$InkRecognizer
    ): void;
    recognizeAsync(
      strokeCollection: Windows$UI$Input$Inking$InkStrokeContainer,
      recognitionTarget: $Values<
        typeof Windows$UI$Input$Inking$InkRecognitionTarget
      >
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>
    >;
    getRecognizers(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognizer>;
  }

  declare export class Windows$UI$Input$Inking$InkRecognizerContainer
    mixins Windows$UI$Input$Inking$IInkRecognizerContainer {
    setDefaultRecognizer(
      recognizer: Windows$UI$Input$Inking$InkRecognizer
    ): void;
    recognizeAsync(
      strokeCollection: Windows$UI$Input$Inking$InkStrokeContainer,
      recognitionTarget: $Values<
        typeof Windows$UI$Input$Inking$InkRecognitionTarget
      >
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>
    >;
    getRecognizers(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognizer>;
  }

  declare export type Windows$UI$Input$Inking$IInkManager = {
    mode: $Values<typeof Windows$UI$Input$Inking$InkManipulationMode>,
    processPointerDown(pointerPoint: Windows$UI$Input$PointerPoint): void,
    processPointerUpdate(pointerPoint: Windows$UI$Input$PointerPoint): any,
    processPointerUp(
      pointerPoint: Windows$UI$Input$PointerPoint
    ): Windows$Foundation$Rect,
    setDefaultDrawingAttributes(
      drawingAttributes: Windows$UI$Input$Inking$InkDrawingAttributes
    ): void,
    recognizeAsync(
      strokeCollection: Windows$UI$Input$Inking$InkStrokeContainer,
      recognitionTarget: $Values<
        typeof Windows$UI$Input$Inking$InkRecognitionTarget
      >
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>
    >,
    recognizeAsync(
      recognitionTarget: $Values<
        typeof Windows$UI$Input$Inking$InkRecognitionTarget
      >
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>
    >
  } & Windows$UI$Input$Inking$IInkStrokeContainer &
    Windows$UI$Input$Inking$IInkRecognizerContainer;

  declare export class Windows$UI$Input$Inking$InkManager
    mixins Windows$UI$Input$Inking$IInkManager,
      Windows$UI$Input$Inking$IInkStrokeContainer,
      Windows$UI$Input$Inking$IInkRecognizerContainer {
    mode: $Values<typeof Windows$UI$Input$Inking$InkManipulationMode>;
    boundingRect: Windows$Foundation$Rect;
    processPointerDown(pointerPoint: Windows$UI$Input$PointerPoint): void;
    processPointerUpdate(pointerPoint: Windows$UI$Input$PointerPoint): any;
    processPointerUp(
      pointerPoint: Windows$UI$Input$PointerPoint
    ): Windows$Foundation$Rect;
    setDefaultDrawingAttributes(
      drawingAttributes: Windows$UI$Input$Inking$InkDrawingAttributes
    ): void;
    recognizeAsync(
      recognitionTarget: $Values<
        typeof Windows$UI$Input$Inking$InkRecognitionTarget
      >
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>
    >;
    addStroke(stroke: Windows$UI$Input$Inking$InkStroke): void;
    deleteSelected(): Windows$Foundation$Rect;
    moveSelected(
      translation: Windows$Foundation$Point
    ): Windows$Foundation$Rect;
    selectWithPolyLine(
      polyline: Windows$Foundation$Collections$IIterable<Windows$Foundation$Point>
    ): Windows$Foundation$Rect;
    selectWithLine(
      from: Windows$Foundation$Point,
      to: Windows$Foundation$Point
    ): Windows$Foundation$Rect;
    copySelectedToClipboard(): void;
    pasteFromClipboard(
      position: Windows$Foundation$Point
    ): Windows$Foundation$Rect;
    canPasteFromClipboard(): boolean;
    loadAsync(
      inputStream: Windows$Storage$Streams$IInputStream
    ): Windows$Foundation$IAsyncActionWithProgress<number>;
    saveAsync(
      outputStream: Windows$Storage$Streams$IOutputStream
    ): Windows$Foundation$IAsyncOperationWithProgress<number, number>;
    updateRecognitionResults(
      recognitionResults: Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>
    ): void;
    getStrokes(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkStroke>;
    getRecognitionResults(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>;
    setDefaultRecognizer(
      recognizer: Windows$UI$Input$Inking$InkRecognizer
    ): void;
    recognizeAsync(
      strokeCollection: Windows$UI$Input$Inking$InkStrokeContainer,
      recognitionTarget: $Values<
        typeof Windows$UI$Input$Inking$InkRecognitionTarget
      >
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognitionResult>
    >;
    getRecognizers(): Windows$Foundation$Collections$IVectorView<Windows$UI$Input$Inking$InkRecognizer>;
  }

  declare var npm$namespace$Windows$UI$Popups: {
    MessageDialogOptions: typeof Windows$UI$Popups$MessageDialogOptions,
    Placement: typeof Windows$UI$Popups$Placement,
    MessageDialog: typeof Windows$UI$Popups$MessageDialog,
    UICommand: typeof Windows$UI$Popups$UICommand,
    UICommandSeparator: typeof Windows$UI$Popups$UICommandSeparator,
    PopupMenu: typeof Windows$UI$Popups$PopupMenu
  };

  declare export var Windows$UI$Popups$MessageDialogOptions: {|
    +none: 0, // 0
    +acceptUserInputAfterDelay: 1 // 1
  |};

  declare export interface Windows$UI$Popups$IMessageDialog {
    cancelCommandIndex: number;
    commands: Windows$Foundation$Collections$IVector<Windows$UI$Popups$IUICommand>;
    content: string;
    defaultCommandIndex: number;
    options: $Values<typeof Windows$UI$Popups$MessageDialogOptions>;
    title: string;
    showAsync(): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
  }

  declare export interface Windows$UI$Popups$IMessageDialogFactory {
    create(content: string): Windows$UI$Popups$MessageDialog;
    createWithTitle(
      content: string,
      title: string
    ): Windows$UI$Popups$MessageDialog;
  }

  declare export class Windows$UI$Popups$MessageDialog
    mixins Windows$UI$Popups$IMessageDialog {
    constructor(content: string): this;
    constructor(content: string, title: string): this;
    cancelCommandIndex: number;
    commands: Windows$Foundation$Collections$IVector<Windows$UI$Popups$IUICommand>;
    content: string;
    defaultCommandIndex: number;
    options: $Values<typeof Windows$UI$Popups$MessageDialogOptions>;
    title: string;
    showAsync(): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
  }

  declare export var Windows$UI$Popups$Placement: {|
    +default: 0, // 0
    +above: 1, // 1
    +below: 2, // 2
    +left: 3, // 3
    +right: 4 // 4
  |};

  declare export interface Windows$UI$Popups$UICommandInvokedHandler {
    (command: Windows$UI$Popups$IUICommand): void;
  }

  declare export interface Windows$UI$Popups$IUICommand {
    id: any;
    invoked: Windows$UI$Popups$UICommandInvokedHandler;
    label: string;
  }

  declare export interface Windows$UI$Popups$IUICommandFactory {
    create(label: string): Windows$UI$Popups$UICommand;
    createWithHandler(
      label: string,
      action: Windows$UI$Popups$UICommandInvokedHandler
    ): Windows$UI$Popups$UICommand;
    createWithHandlerAndId(
      label: string,
      action: Windows$UI$Popups$UICommandInvokedHandler,
      commandId: any
    ): Windows$UI$Popups$UICommand;
  }

  declare export class Windows$UI$Popups$UICommand
    mixins Windows$UI$Popups$IUICommand {
    constructor(label: string): this;
    constructor(
      label: string,
      action: Windows$UI$Popups$UICommandInvokedHandler
    ): this;
    constructor(
      label: string,
      action: Windows$UI$Popups$UICommandInvokedHandler,
      commandId: any
    ): this;
    constructor(): this;
    id: any;
    invoked: Windows$UI$Popups$UICommandInvokedHandler;
    label: string;
  }

  declare export class Windows$UI$Popups$UICommandSeparator
    mixins Windows$UI$Popups$IUICommand {
    id: any;
    invoked: Windows$UI$Popups$UICommandInvokedHandler;
    label: string;
  }

  declare export interface Windows$UI$Popups$IPopupMenu {
    commands: Windows$Foundation$Collections$IVector<Windows$UI$Popups$IUICommand>;
    showAsync(
      invocationPoint: Windows$Foundation$Point
    ): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
    showForSelectionAsync(
      selection: Windows$Foundation$Rect
    ): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
    showForSelectionAsync(
      selection: Windows$Foundation$Rect,
      preferredPlacement: $Values<typeof Windows$UI$Popups$Placement>
    ): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
  }

  declare export class Windows$UI$Popups$PopupMenu
    mixins Windows$UI$Popups$IPopupMenu {
    commands: Windows$Foundation$Collections$IVector<Windows$UI$Popups$IUICommand>;
    showAsync(
      invocationPoint: Windows$Foundation$Point
    ): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
    showForSelectionAsync(
      selection: Windows$Foundation$Rect
    ): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
    showForSelectionAsync(
      selection: Windows$Foundation$Rect,
      preferredPlacement: $Values<typeof Windows$UI$Popups$Placement>
    ): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
  }

  declare var npm$namespace$Windows$UI$StartScreen: {
    TileOptions: typeof Windows$UI$StartScreen$TileOptions,
    ForegroundText: typeof Windows$UI$StartScreen$ForegroundText,
    SecondaryTile: typeof Windows$UI$StartScreen$SecondaryTile
  };

  declare export var Windows$UI$StartScreen$TileOptions: {|
    +none: 0, // 0
    +showNameOnLogo: 1, // 1
    +showNameOnWideLogo: 2, // 2
    +copyOnDeployment: 3 // 3
  |};

  declare export var Windows$UI$StartScreen$ForegroundText: {|
    +dark: 0, // 0
    +light: 1 // 1
  |};

  declare export interface Windows$UI$StartScreen$ISecondaryTile {
    arguments: string;
    backgroundColor: Windows$UI$Color;
    displayName: string;
    foregroundText: $Values<typeof Windows$UI$StartScreen$ForegroundText>;
    lockScreenBadgeLogo: Windows$Foundation$Uri;
    lockScreenDisplayBadgeAndTileText: boolean;
    logo: Windows$Foundation$Uri;
    shortName: string;
    smallLogo: Windows$Foundation$Uri;
    tileId: string;
    tileOptions: $Values<typeof Windows$UI$StartScreen$TileOptions>;
    wideLogo: Windows$Foundation$Uri;
    requestCreateAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    requestCreateAsync(
      invocationPoint: Windows$Foundation$Point
    ): Windows$Foundation$IAsyncOperation<boolean>;
    requestCreateForSelectionAsync(
      selection: Windows$Foundation$Rect
    ): Windows$Foundation$IAsyncOperation<boolean>;
    requestCreateForSelectionAsync(
      selection: Windows$Foundation$Rect,
      preferredPlacement: $Values<typeof Windows$UI$Popups$Placement>
    ): Windows$Foundation$IAsyncOperation<boolean>;
    requestDeleteAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    requestDeleteAsync(
      invocationPoint: Windows$Foundation$Point
    ): Windows$Foundation$IAsyncOperation<boolean>;
    requestDeleteForSelectionAsync(
      selection: Windows$Foundation$Rect
    ): Windows$Foundation$IAsyncOperation<boolean>;
    requestDeleteForSelectionAsync(
      selection: Windows$Foundation$Rect,
      preferredPlacement: $Values<typeof Windows$UI$Popups$Placement>
    ): Windows$Foundation$IAsyncOperation<boolean>;
    updateAsync(): Windows$Foundation$IAsyncOperation<boolean>;
  }

  declare export interface Windows$UI$StartScreen$ISecondaryTileFactory {
    createTile(
      tileId: string,
      shortName: string,
      displayName: string,
      arguments: string,
      tileOptions: $Values<typeof Windows$UI$StartScreen$TileOptions>,
      logoReference: Windows$Foundation$Uri
    ): Windows$UI$StartScreen$SecondaryTile;
    createWideTile(
      tileId: string,
      shortName: string,
      displayName: string,
      arguments: string,
      tileOptions: $Values<typeof Windows$UI$StartScreen$TileOptions>,
      logoReference: Windows$Foundation$Uri,
      wideLogoReference: Windows$Foundation$Uri
    ): Windows$UI$StartScreen$SecondaryTile;
    createWithId(tileId: string): Windows$UI$StartScreen$SecondaryTile;
  }

  declare export class Windows$UI$StartScreen$SecondaryTile
    mixins Windows$UI$StartScreen$ISecondaryTile {
    constructor(
      tileId: string,
      shortName: string,
      displayName: string,
      args: string,
      tileOptions: $Values<typeof Windows$UI$StartScreen$TileOptions>,
      logoReference: Windows$Foundation$Uri
    ): this;
    constructor(
      tileId: string,
      shortName: string,
      displayName: string,
      args: string,
      tileOptions: $Values<typeof Windows$UI$StartScreen$TileOptions>,
      logoReference: Windows$Foundation$Uri,
      wideLogoReference: Windows$Foundation$Uri
    ): this;
    constructor(tileId: string): this;
    constructor(): this;
    arguments: string;
    backgroundColor: Windows$UI$Color;
    displayName: string;
    foregroundText: $Values<typeof Windows$UI$StartScreen$ForegroundText>;
    lockScreenBadgeLogo: Windows$Foundation$Uri;
    lockScreenDisplayBadgeAndTileText: boolean;
    logo: Windows$Foundation$Uri;
    shortName: string;
    smallLogo: Windows$Foundation$Uri;
    tileId: string;
    tileOptions: $Values<typeof Windows$UI$StartScreen$TileOptions>;
    wideLogo: Windows$Foundation$Uri;
    requestCreateAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    requestCreateAsync(
      invocationPoint: Windows$Foundation$Point
    ): Windows$Foundation$IAsyncOperation<boolean>;
    requestCreateForSelectionAsync(
      selection: Windows$Foundation$Rect
    ): Windows$Foundation$IAsyncOperation<boolean>;
    requestCreateForSelectionAsync(
      selection: Windows$Foundation$Rect,
      preferredPlacement: $Values<typeof Windows$UI$Popups$Placement>
    ): Windows$Foundation$IAsyncOperation<boolean>;
    requestDeleteAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    requestDeleteAsync(
      invocationPoint: Windows$Foundation$Point
    ): Windows$Foundation$IAsyncOperation<boolean>;
    requestDeleteForSelectionAsync(
      selection: Windows$Foundation$Rect
    ): Windows$Foundation$IAsyncOperation<boolean>;
    requestDeleteForSelectionAsync(
      selection: Windows$Foundation$Rect,
      preferredPlacement: $Values<typeof Windows$UI$Popups$Placement>
    ): Windows$Foundation$IAsyncOperation<boolean>;
    updateAsync(): Windows$Foundation$IAsyncOperation<boolean>;
    static exists(tileId: string): boolean;
    static findAllAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$StartScreen$SecondaryTile>
    >;
    static findAllAsync(
      applicationId: string
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$StartScreen$SecondaryTile>
    >;
    static findAllForPackageAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$StartScreen$SecondaryTile>
    >;
  }

  declare export interface Windows$UI$StartScreen$ISecondaryTileStatics {
    exists(tileId: string): boolean;
    findAllAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$StartScreen$SecondaryTile>
    >;
    findAllAsync(
      applicationId: string
    ): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$StartScreen$SecondaryTile>
    >;
    findAllForPackageAsync(): Windows$Foundation$IAsyncOperation<
      Windows$Foundation$Collections$IVectorView<Windows$UI$StartScreen$SecondaryTile>
    >;
  }

  declare var npm$namespace$Windows$UI$Text: {
    CaretType: typeof Windows$UI$Text$CaretType,
    FindOptions: typeof Windows$UI$Text$FindOptions,
    FormatEffect: typeof Windows$UI$Text$FormatEffect,
    HorizontalCharacterAlignment: typeof Windows$UI$Text$HorizontalCharacterAlignment,
    LetterCase: typeof Windows$UI$Text$LetterCase,
    LineSpacingRule: typeof Windows$UI$Text$LineSpacingRule,
    LinkType: typeof Windows$UI$Text$LinkType,
    MarkerAlignment: typeof Windows$UI$Text$MarkerAlignment,
    MarkerStyle: typeof Windows$UI$Text$MarkerStyle,
    MarkerType: typeof Windows$UI$Text$MarkerType,
    ParagraphAlignment: typeof Windows$UI$Text$ParagraphAlignment,
    ParagraphStyle: typeof Windows$UI$Text$ParagraphStyle,
    PointOptions: typeof Windows$UI$Text$PointOptions,
    RangeGravity: typeof Windows$UI$Text$RangeGravity,
    SelectionOptions: typeof Windows$UI$Text$SelectionOptions,
    SelectionType: typeof Windows$UI$Text$SelectionType,
    TabAlignment: typeof Windows$UI$Text$TabAlignment,
    TabLeader: typeof Windows$UI$Text$TabLeader,
    TextGetOptions: typeof Windows$UI$Text$TextGetOptions,
    TextSetOptions: typeof Windows$UI$Text$TextSetOptions,
    TextRangeUnit: typeof Windows$UI$Text$TextRangeUnit,
    TextScript: typeof Windows$UI$Text$TextScript,
    UnderlineType: typeof Windows$UI$Text$UnderlineType,
    VerticalCharacterAlignment: typeof Windows$UI$Text$VerticalCharacterAlignment,
    FontStyle: typeof Windows$UI$Text$FontStyle,
    FontStretch: typeof Windows$UI$Text$FontStretch,
    TextConstants: typeof Windows$UI$Text$TextConstants,
    FontWeights: typeof Windows$UI$Text$FontWeights
  };

  declare export var Windows$UI$Text$CaretType: {|
    +normal: 0, // 0
    +null_: 1 // 1
  |};

  declare export var Windows$UI$Text$FindOptions: {|
    +none: 0, // 0
    +word: 1, // 1
    +case_: 2 // 2
  |};

  declare export var Windows$UI$Text$FormatEffect: {|
    +off: 0, // 0
    +on: 1, // 1
    +toggle: 2, // 2
    +undefined: 3 // 3
  |};

  declare export var Windows$UI$Text$HorizontalCharacterAlignment: {|
    +left: 0, // 0
    +right: 1, // 1
    +center: 2 // 2
  |};

  declare export var Windows$UI$Text$LetterCase: {|
    +lower: 0, // 0
    +upper: 1 // 1
  |};

  declare export var Windows$UI$Text$LineSpacingRule: {|
    +undefined: 0, // 0
    +single: 1, // 1
    +oneAndHalf: 2, // 2
    +double: 3, // 3
    +atLeast: 4, // 4
    +exactly: 5, // 5
    +multiple: 6, // 6
    +percent: 7 // 7
  |};

  declare export var Windows$UI$Text$LinkType: {|
    +undefined: 0, // 0
    +notALink: 1, // 1
    +clientLink: 2, // 2
    +friendlyLinkName: 3, // 3
    +friendlyLinkAddress: 4, // 4
    +autoLink: 5, // 5
    +autoLinkEmail: 6, // 6
    +autoLinkPhone: 7, // 7
    +autoLinkPath: 8 // 8
  |};

  declare export var Windows$UI$Text$MarkerAlignment: {|
    +undefined: 0, // 0
    +left: 1, // 1
    +center: 2, // 2
    +right: 3 // 3
  |};

  declare export var Windows$UI$Text$MarkerStyle: {|
    +undefined: 0, // 0
    +parenthesis: 1, // 1
    +parentheses: 2, // 2
    +period: 3, // 3
    +plain: 4, // 4
    +minus: 5, // 5
    +noNumber: 6 // 6
  |};

  declare export var Windows$UI$Text$MarkerType: {|
    +undefined: 0, // 0
    +none: 1, // 1
    +bullet: 2, // 2
    +arabic: 3, // 3
    +lowercaseEnglishLetter: 4, // 4
    +uppercaseEnglishLetter: 5, // 5
    +lowercaseRoman: 6, // 6
    +uppercaseRoman: 7, // 7
    +unicodeSequence: 8, // 8
    +circledNumber: 9, // 9
    +blackCircleWingding: 10, // 10
    +whiteCircleWingding: 11, // 11
    +arabicWide: 12, // 12
    +simplifiedChinese: 13, // 13
    +traditionalChinese: 14, // 14
    +japanSimplifiedChinese: 15, // 15
    +japanKorea: 16, // 16
    +arabicDictionary: 17, // 17
    +arabicAbjad: 18, // 18
    +hebrew: 19, // 19
    +thaiAlphabetic: 20, // 20
    +thaiNumeric: 21, // 21
    +devanagariVowel: 22, // 22
    +devanagariConsonant: 23, // 23
    +devanagariNumeric: 24 // 24
  |};

  declare export var Windows$UI$Text$ParagraphAlignment: {|
    +undefined: 0, // 0
    +left: 1, // 1
    +center: 2, // 2
    +right: 3, // 3
    +justify: 4 // 4
  |};

  declare export var Windows$UI$Text$ParagraphStyle: {|
    +undefined: 0, // 0
    +none: 1, // 1
    +normal: 2, // 2
    +heading1: 3, // 3
    +heading2: 4, // 4
    +heading3: 5, // 5
    +heading4: 6, // 6
    +heading5: 7, // 7
    +heading6: 8, // 8
    +heading7: 9, // 9
    +heading8: 10, // 10
    +heading9: 11 // 11
  |};

  declare export var Windows$UI$Text$PointOptions: {|
    +none: 0, // 0
    +includeInset: 1, // 1
    +start: 2, // 2
    +clientCoordinates: 3, // 3
    +allowOffClient: 4, // 4
    +transform: 5, // 5
    +noHorizontalScroll: 6, // 6
    +noVerticalScroll: 7 // 7
  |};

  declare export var Windows$UI$Text$RangeGravity: {|
    +uIBehavior: 0, // 0
    +backward: 1, // 1
    +forward: 2, // 2
    +inward: 3, // 3
    +outward: 4 // 4
  |};

  declare export var Windows$UI$Text$SelectionOptions: {|
    +startActive: 0, // 0
    +atEndOfLine: 1, // 1
    +overtype: 2, // 2
    +active: 3, // 3
    +replace: 4 // 4
  |};

  declare export var Windows$UI$Text$SelectionType: {|
    +none: 0, // 0
    +insertionPoint: 1, // 1
    +normal: 2, // 2
    +inlineShape: 3, // 3
    +shape: 4 // 4
  |};

  declare export var Windows$UI$Text$TabAlignment: {|
    +left: 0, // 0
    +center: 1, // 1
    +right: 2, // 2
    +decimal: 3, // 3
    +bar: 4 // 4
  |};

  declare export var Windows$UI$Text$TabLeader: {|
    +spaces: 0, // 0
    +dots: 1, // 1
    +dashes: 2, // 2
    +lines: 3, // 3
    +thickLines: 4, // 4
    +equals: 5 // 5
  |};

  declare export var Windows$UI$Text$TextGetOptions: {|
    +none: 0, // 0
    +adjustCrlf: 1, // 1
    +useCrlf: 2, // 2
    +useObjectText: 3, // 3
    +allowFinalEop: 4, // 4
    +noHidden: 5, // 5
    +includeNumbering: 6, // 6
    +formatRtf: 7 // 7
  |};

  declare export var Windows$UI$Text$TextSetOptions: {|
    +none: 0, // 0
    +unicodeBidi: 1, // 1
    +unlink: 2, // 2
    +unhide: 3, // 3
    +checkTextLimit: 4, // 4
    +formatRtf: 5, // 5
    +applyRtfDocumentDefaults: 6 // 6
  |};

  declare export var Windows$UI$Text$TextRangeUnit: {|
    +character: 0, // 0
    +word: 1, // 1
    +sentence: 2, // 2
    +paragraph: 3, // 3
    +line: 4, // 4
    +story: 5, // 5
    +screen: 6, // 6
    +section: 7, // 7
    +window: 8, // 8
    +characterFormat: 9, // 9
    +paragraphFormat: 10, // 10
    +object: 11, // 11
    +hardParagraph: 12, // 12
    +cluster: 13, // 13
    +bold: 14, // 14
    +italic: 15, // 15
    +underline: 16, // 16
    +strikethrough: 17, // 17
    +protectedText: 18, // 18
    +link: 19, // 19
    +smallCaps: 20, // 20
    +allCaps: 21, // 21
    +hidden: 22, // 22
    +outline: 23, // 23
    +shadow: 24, // 24
    +imprint: 25, // 25
    +disabled: 26, // 26
    +revised: 27, // 27
    +subscript: 28, // 28
    +superscript: 29, // 29
    +fontBound: 30, // 30
    +linkProtected: 31 // 31
  |};

  declare export var Windows$UI$Text$TextScript: {|
    +undefined: 0, // 0
    +ansi: 1, // 1
    +eastEurope: 2, // 2
    +cyrillic: 3, // 3
    +greek: 4, // 4
    +turkish: 5, // 5
    +hebrew: 6, // 6
    +arabic: 7, // 7
    +baltic: 8, // 8
    +vietnamese: 9, // 9
    +default: 10, // 10
    +symbol: 11, // 11
    +thai: 12, // 12
    +shiftJis: 13, // 13
    +gB2312: 14, // 14
    +hangul: 15, // 15
    +big5: 16, // 16
    +pC437: 17, // 17
    +oem: 18, // 18
    +mac: 19, // 19
    +armenian: 20, // 20
    +syriac: 21, // 21
    +thaana: 22, // 22
    +devanagari: 23, // 23
    +bengali: 24, // 24
    +gurmukhi: 25, // 25
    +gujarati: 26, // 26
    +oriya: 27, // 27
    +tamil: 28, // 28
    +telugu: 29, // 29
    +kannada: 30, // 30
    +malayalam: 31, // 31
    +sinhala: 32, // 32
    +lao: 33, // 33
    +tibetan: 34, // 34
    +myanmar: 35, // 35
    +georgian: 36, // 36
    +jamo: 37, // 37
    +ethiopic: 38, // 38
    +cherokee: 39, // 39
    +aboriginal: 40, // 40
    +ogham: 41, // 41
    +runic: 42, // 42
    +khmer: 43, // 43
    +mongolian: 44, // 44
    +braille: 45, // 45
    +yi: 46, // 46
    +limbu: 47, // 47
    +taiLe: 48, // 48
    +newTaiLue: 49, // 49
    +sylotiNagri: 50, // 50
    +kharoshthi: 51, // 51
    +kayahli: 52, // 52
    +unicodeSymbol: 53, // 53
    +emoji: 54, // 54
    +glagolitic: 55, // 55
    +lisu: 56, // 56
    +vai: 57, // 57
    +nKo: 58, // 58
    +osmanya: 59, // 59
    +phagsPa: 60, // 60
    +gothic: 61, // 61
    +deseret: 62, // 62
    +tifinagh: 63 // 63
  |};

  declare export var Windows$UI$Text$UnderlineType: {|
    +undefined: 0, // 0
    +none: 1, // 1
    +single: 2, // 2
    +words: 3, // 3
    +double: 4, // 4
    +dotted: 5, // 5
    +dash: 6, // 6
    +dashDot: 7, // 7
    +dashDotDot: 8, // 8
    +wave: 9, // 9
    +thick: 10, // 10
    +thin: 11, // 11
    +doubleWave: 12, // 12
    +heavyWave: 13, // 13
    +longDash: 14, // 14
    +thickDash: 15, // 15
    +thickDashDot: 16, // 16
    +thickDashDotDot: 17, // 17
    +thickDotted: 18, // 18
    +thickLongDash: 19 // 19
  |};

  declare export var Windows$UI$Text$VerticalCharacterAlignment: {|
    +top: 0, // 0
    +baseline: 1, // 1
    +bottom: 2 // 2
  |};

  declare export class Windows$UI$Text$TextConstants {
    static autoColor: Windows$UI$Color;
    static maxUnitCount: number;
    static minUnitCount: number;
    static undefinedColor: Windows$UI$Color;
    static undefinedFloatValue: number;
    static undefinedFontStretch: $Values<typeof Windows$UI$Text$FontStretch>;
    static undefinedFontStyle: $Values<typeof Windows$UI$Text$FontStyle>;
    static undefinedInt32Value: number;
  }

  declare export interface Windows$UI$Text$ITextConstantsStatics {
    autoColor: Windows$UI$Color;
    maxUnitCount: number;
    minUnitCount: number;
    undefinedColor: Windows$UI$Color;
    undefinedFloatValue: number;
    undefinedFontStretch: $Values<typeof Windows$UI$Text$FontStretch>;
    undefinedFontStyle: $Values<typeof Windows$UI$Text$FontStyle>;
    undefinedInt32Value: number;
  }

  declare export interface Windows$UI$Text$ITextDocument {
    caretType: $Values<typeof Windows$UI$Text$CaretType>;
    defaultTabStop: number;
    selection: Windows$UI$Text$ITextSelection;
    undoLimit: number;
    canCopy(): boolean;
    canPaste(): boolean;
    canRedo(): boolean;
    canUndo(): boolean;
    applyDisplayUpdates(): number;
    batchDisplayUpdates(): number;
    beginUndoGroup(): void;
    endUndoGroup(): void;
    getDefaultCharacterFormat(): Windows$UI$Text$ITextCharacterFormat;
    getDefaultParagraphFormat(): Windows$UI$Text$ITextParagraphFormat;
    getRange(
      startPosition: number,
      endPosition: number
    ): Windows$UI$Text$ITextRange;
    getRangeFromPoint(
      point: Windows$Foundation$Point,
      options: $Values<typeof Windows$UI$Text$PointOptions>
    ): Windows$UI$Text$ITextRange;
    getText(options: $Values<typeof Windows$UI$Text$TextGetOptions>): string;
    loadFromStream(
      options: $Values<typeof Windows$UI$Text$TextSetOptions>,
      value: Windows$Storage$Streams$IRandomAccessStream
    ): void;
    redo(): void;
    saveToStream(
      options: $Values<typeof Windows$UI$Text$TextGetOptions>,
      value: Windows$Storage$Streams$IRandomAccessStream
    ): void;
    setDefaultCharacterFormat(
      value: Windows$UI$Text$ITextCharacterFormat
    ): void;
    setDefaultParagraphFormat(
      value: Windows$UI$Text$ITextParagraphFormat
    ): void;
    setText(
      options: $Values<typeof Windows$UI$Text$TextSetOptions>,
      value: string
    ): void;
    undo(): void;
  }

  declare export interface Windows$UI$Text$ITextRange {
    character: string;
    characterFormat: Windows$UI$Text$ITextCharacterFormat;
    endPosition: number;
    formattedText: Windows$UI$Text$ITextRange;
    gravity: $Values<typeof Windows$UI$Text$RangeGravity>;
    length: number;
    link: string;
    paragraphFormat: Windows$UI$Text$ITextParagraphFormat;
    startPosition: number;
    storyLength: number;
    text: string;
    canPaste(format: number): boolean;
    changeCase(value: $Values<typeof Windows$UI$Text$LetterCase>): void;
    collapse(value: boolean): void;
    copy(): void;
    cut(): void;
    delete_(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      count: number
    ): number;
    endOf(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      extend: boolean
    ): number;
    expand(unit: $Values<typeof Windows$UI$Text$TextRangeUnit>): number;
    findText(
      value: string,
      scanLength: number,
      options: $Values<typeof Windows$UI$Text$FindOptions>
    ): number;
    getCharacterUtf32(offset: number): number;
    getClone(): Windows$UI$Text$ITextRange;
    getIndex(unit: $Values<typeof Windows$UI$Text$TextRangeUnit>): number;
    getPoint(
      horizontalAlign: $Values<
        typeof Windows$UI$Text$HorizontalCharacterAlignment
      >,
      verticalAlign: $Values<typeof Windows$UI$Text$VerticalCharacterAlignment>,
      options: $Values<typeof Windows$UI$Text$PointOptions>
    ): Windows$Foundation$Point;
    getRect(
      options: $Values<typeof Windows$UI$Text$PointOptions>
    ): {
      rect: Windows$Foundation$Rect,
      hit: number
    };
    getText(options: $Values<typeof Windows$UI$Text$TextGetOptions>): string;
    getTextViaStream(
      options: $Values<typeof Windows$UI$Text$TextGetOptions>,
      value: Windows$Storage$Streams$IRandomAccessStream
    ): void;
    inRange(range: Windows$UI$Text$ITextRange): boolean;
    insertImage(
      width: number,
      height: number,
      ascent: number,
      verticalAlign: $Values<typeof Windows$UI$Text$VerticalCharacterAlignment>,
      alternateText: string,
      value: Windows$Storage$Streams$IRandomAccessStream
    ): void;
    inStory(range: Windows$UI$Text$ITextRange): boolean;
    isEqual(range: Windows$UI$Text$ITextRange): boolean;
    move(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      count: number
    ): number;
    moveEnd(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      count: number
    ): number;
    moveStart(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      count: number
    ): number;
    paste(format: number): void;
    scrollIntoView(value: $Values<typeof Windows$UI$Text$PointOptions>): void;
    matchSelection(): void;
    setIndex(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      index: number,
      extend: boolean
    ): void;
    setPoint(
      point: Windows$Foundation$Point,
      options: $Values<typeof Windows$UI$Text$PointOptions>,
      extend: boolean
    ): void;
    setRange(startPosition: number, endPosition: number): void;
    setText(
      options: $Values<typeof Windows$UI$Text$TextSetOptions>,
      value: string
    ): void;
    setTextViaStream(
      options: $Values<typeof Windows$UI$Text$TextSetOptions>,
      value: Windows$Storage$Streams$IRandomAccessStream
    ): void;
    startOf(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      extend: boolean
    ): number;
  }

  declare export type Windows$UI$Text$ITextSelection = {
    options: $Values<typeof Windows$UI$Text$SelectionOptions>,
    type: $Values<typeof Windows$UI$Text$SelectionType>,
    endKey(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      extend: boolean
    ): number,
    homeKey(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      extend: boolean
    ): number,
    moveDown(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      count: number,
      extend: boolean
    ): number,
    moveLeft(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      count: number,
      extend: boolean
    ): number,
    moveRight(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      count: number,
      extend: boolean
    ): number,
    moveUp(
      unit: $Values<typeof Windows$UI$Text$TextRangeUnit>,
      count: number,
      extend: boolean
    ): number,
    typeText(value: string): void
  } & Windows$UI$Text$ITextRange;

  declare export interface Windows$UI$Text$ITextCharacterFormat {
    allCaps: $Values<typeof Windows$UI$Text$FormatEffect>;
    backgroundColor: Windows$UI$Color;
    bold: $Values<typeof Windows$UI$Text$FormatEffect>;
    fontStretch: $Values<typeof Windows$UI$Text$FontStretch>;
    fontStyle: $Values<typeof Windows$UI$Text$FontStyle>;
    foregroundColor: Windows$UI$Color;
    hidden: $Values<typeof Windows$UI$Text$FormatEffect>;
    italic: $Values<typeof Windows$UI$Text$FormatEffect>;
    kerning: number;
    languageTag: string;
    linkType: $Values<typeof Windows$UI$Text$LinkType>;
    name: string;
    outline: $Values<typeof Windows$UI$Text$FormatEffect>;
    position: number;
    protectedText: $Values<typeof Windows$UI$Text$FormatEffect>;
    size: number;
    smallCaps: $Values<typeof Windows$UI$Text$FormatEffect>;
    spacing: number;
    strikethrough: $Values<typeof Windows$UI$Text$FormatEffect>;
    subscript: $Values<typeof Windows$UI$Text$FormatEffect>;
    superscript: $Values<typeof Windows$UI$Text$FormatEffect>;
    textScript: $Values<typeof Windows$UI$Text$TextScript>;
    underline: $Values<typeof Windows$UI$Text$UnderlineType>;
    weight: number;
    setClone(value: Windows$UI$Text$ITextCharacterFormat): void;
    getClone(): Windows$UI$Text$ITextCharacterFormat;
    isEqual(format: Windows$UI$Text$ITextCharacterFormat): boolean;
  }

  declare export interface Windows$UI$Text$ITextParagraphFormat {
    alignment: $Values<typeof Windows$UI$Text$ParagraphAlignment>;
    firstLineIndent: number;
    keepTogether: $Values<typeof Windows$UI$Text$FormatEffect>;
    keepWithNext: $Values<typeof Windows$UI$Text$FormatEffect>;
    leftIndent: number;
    lineSpacing: number;
    lineSpacingRule: $Values<typeof Windows$UI$Text$LineSpacingRule>;
    listAlignment: $Values<typeof Windows$UI$Text$MarkerAlignment>;
    listLevelIndex: number;
    listStart: number;
    listStyle: $Values<typeof Windows$UI$Text$MarkerStyle>;
    listTab: number;
    listType: $Values<typeof Windows$UI$Text$MarkerType>;
    noLineNumber: $Values<typeof Windows$UI$Text$FormatEffect>;
    pageBreakBefore: $Values<typeof Windows$UI$Text$FormatEffect>;
    rightIndent: number;
    rightToLeft: $Values<typeof Windows$UI$Text$FormatEffect>;
    spaceAfter: number;
    spaceBefore: number;
    style: $Values<typeof Windows$UI$Text$ParagraphStyle>;
    tabCount: number;
    widowControl: $Values<typeof Windows$UI$Text$FormatEffect>;
    addTab(
      position: number,
      align: $Values<typeof Windows$UI$Text$TabAlignment>,
      leader: $Values<typeof Windows$UI$Text$TabLeader>
    ): void;
    clearAllTabs(): void;
    deleteTab(position: number): void;
    getClone(): Windows$UI$Text$ITextParagraphFormat;
    getTab(
      index: number
    ): {
      position: number,
      align: $Values<typeof Windows$UI$Text$TabAlignment>,
      leader: $Values<typeof Windows$UI$Text$TabLeader>
    };
    isEqual(format: Windows$UI$Text$ITextParagraphFormat): boolean;
    setClone(format: Windows$UI$Text$ITextParagraphFormat): void;
    setIndents(start: number, left: number, right: number): void;
    setLineSpacing(
      rule: $Values<typeof Windows$UI$Text$LineSpacingRule>,
      spacing: number
    ): void;
  }

  declare export var Windows$UI$Text$FontStyle: {|
    +normal: 0, // 0
    +oblique: 1, // 1
    +italic: 2 // 2
  |};

  declare export var Windows$UI$Text$FontStretch: {|
    +undefined: 0, // 0
    +ultraCondensed: 1, // 1
    +extraCondensed: 2, // 2
    +condensed: 3, // 3
    +semiCondensed: 4, // 4
    +normal: 5, // 5
    +semiExpanded: 6, // 6
    +expanded: 7, // 7
    +extraExpanded: 8, // 8
    +ultraExpanded: 9 // 9
  |};

  declare export interface Windows$UI$Text$FontWeight {
    weight: number;
  }

  declare export interface Windows$UI$Text$IFontWeights {}

  declare export interface Windows$UI$Text$IFontWeightsStatics {
    black: Windows$UI$Text$FontWeight;
    bold: Windows$UI$Text$FontWeight;
    extraBlack: Windows$UI$Text$FontWeight;
    extraBold: Windows$UI$Text$FontWeight;
    extraLight: Windows$UI$Text$FontWeight;
    light: Windows$UI$Text$FontWeight;
    medium: Windows$UI$Text$FontWeight;
    normal: Windows$UI$Text$FontWeight;
    semiBold: Windows$UI$Text$FontWeight;
    semiLight: Windows$UI$Text$FontWeight;
    thin: Windows$UI$Text$FontWeight;
  }

  declare export class Windows$UI$Text$FontWeights
    mixins Windows$UI$Text$IFontWeights {
    static black: Windows$UI$Text$FontWeight;
    static bold: Windows$UI$Text$FontWeight;
    static extraBlack: Windows$UI$Text$FontWeight;
    static extraBold: Windows$UI$Text$FontWeight;
    static extraLight: Windows$UI$Text$FontWeight;
    static light: Windows$UI$Text$FontWeight;
    static medium: Windows$UI$Text$FontWeight;
    static normal: Windows$UI$Text$FontWeight;
    static semiBold: Windows$UI$Text$FontWeight;
    static semiLight: Windows$UI$Text$FontWeight;
    static thin: Windows$UI$Text$FontWeight;
  }

  declare var npm$namespace$Windows$UI$Core: {
    CoreWindowActivationState: typeof Windows$UI$Core$CoreWindowActivationState,
    CoreCursorType: typeof Windows$UI$Core$CoreCursorType,
    CoreDispatcherPriority: typeof Windows$UI$Core$CoreDispatcherPriority,
    CoreProcessEventsOption: typeof Windows$UI$Core$CoreProcessEventsOption,
    CoreWindowFlowDirection: typeof Windows$UI$Core$CoreWindowFlowDirection,
    CoreVirtualKeyStates: typeof Windows$UI$Core$CoreVirtualKeyStates,
    CoreAcceleratorKeyEventType: typeof Windows$UI$Core$CoreAcceleratorKeyEventType,
    CoreProximityEvaluationScore: typeof Windows$UI$Core$CoreProximityEvaluationScore,
    CoreDispatcher: typeof Windows$UI$Core$CoreDispatcher,
    CoreCursor: typeof Windows$UI$Core$CoreCursor,
    CoreWindow: typeof Windows$UI$Core$CoreWindow,
    WindowActivatedEventArgs: typeof Windows$UI$Core$WindowActivatedEventArgs,
    AutomationProviderRequestedEventArgs: typeof Windows$UI$Core$AutomationProviderRequestedEventArgs,
    CharacterReceivedEventArgs: typeof Windows$UI$Core$CharacterReceivedEventArgs,
    CoreWindowEventArgs: typeof Windows$UI$Core$CoreWindowEventArgs,
    InputEnabledEventArgs: typeof Windows$UI$Core$InputEnabledEventArgs,
    KeyEventArgs: typeof Windows$UI$Core$KeyEventArgs,
    PointerEventArgs: typeof Windows$UI$Core$PointerEventArgs,
    TouchHitTestingEventArgs: typeof Windows$UI$Core$TouchHitTestingEventArgs,
    WindowSizeChangedEventArgs: typeof Windows$UI$Core$WindowSizeChangedEventArgs,
    VisibilityChangedEventArgs: typeof Windows$UI$Core$VisibilityChangedEventArgs,
    IdleDispatchedHandlerArgs: typeof Windows$UI$Core$IdleDispatchedHandlerArgs,
    AcceleratorKeyEventArgs: typeof Windows$UI$Core$AcceleratorKeyEventArgs,
    CoreAcceleratorKeys: typeof Windows$UI$Core$CoreAcceleratorKeys,
    CoreWindowResizeManager: typeof Windows$UI$Core$CoreWindowResizeManager,
    CoreWindowPopupShowingEventArgs: typeof Windows$UI$Core$CoreWindowPopupShowingEventArgs,
    CoreWindowDialog: typeof Windows$UI$Core$CoreWindowDialog,
    CoreWindowFlyout: typeof Windows$UI$Core$CoreWindowFlyout,
    AnimationMetrics: typeof npm$namespace$Windows$UI$Core$AnimationMetrics
  };

  declare var npm$namespace$Windows$UI$Core$AnimationMetrics: {
    PropertyAnimationType: typeof Windows$UI$Core$AnimationMetrics$PropertyAnimationType,
    AnimationEffect: typeof Windows$UI$Core$AnimationMetrics$AnimationEffect,
    AnimationEffectTarget: typeof Windows$UI$Core$AnimationMetrics$AnimationEffectTarget,
    AnimationDescription: typeof Windows$UI$Core$AnimationMetrics$AnimationDescription,
    PropertyAnimation: typeof Windows$UI$Core$AnimationMetrics$PropertyAnimation,
    ScaleAnimation: typeof Windows$UI$Core$AnimationMetrics$ScaleAnimation,
    TranslationAnimation: typeof Windows$UI$Core$AnimationMetrics$TranslationAnimation,
    OpacityAnimation: typeof Windows$UI$Core$AnimationMetrics$OpacityAnimation
  };

  declare export var Windows$UI$Core$AnimationMetrics$PropertyAnimationType: {|
    +scale: 0, // 0
    +translation: 1, // 1
    +opacity: 2 // 2
  |};

  declare export interface Windows$UI$Core$AnimationMetrics$IPropertyAnimation {
    control1: Windows$Foundation$Point;
    control2: Windows$Foundation$Point;
    delay: number;
    duration: number;
    type: $Values<
      typeof Windows$UI$Core$AnimationMetrics$PropertyAnimationType
    >;
  }

  declare export type Windows$UI$Core$AnimationMetrics$IScaleAnimation = {
    finalScaleX: number,
    finalScaleY: number,
    initialScaleX: number,
    initialScaleY: number,
    normalizedOrigin: Windows$Foundation$Point
  } & Windows$UI$Core$AnimationMetrics$IPropertyAnimation;

  declare export type Windows$UI$Core$AnimationMetrics$IOpacityAnimation = {
    finalOpacity: number,
    initialOpacity: number
  } & Windows$UI$Core$AnimationMetrics$IPropertyAnimation;

  declare export var Windows$UI$Core$AnimationMetrics$AnimationEffect: {|
    +expand: 0, // 0
    +collapse: 1, // 1
    +reposition: 2, // 2
    +fadeIn: 3, // 3
    +fadeOut: 4, // 4
    +addToList: 5, // 5
    +deleteFromList: 6, // 6
    +addToGrid: 7, // 7
    +deleteFromGrid: 8, // 8
    +addToSearchGrid: 9, // 9
    +deleteFromSearchGrid: 10, // 10
    +addToSearchList: 11, // 11
    +deleteFromSearchList: 12, // 12
    +showEdgeUI: 13, // 13
    +showPanel: 14, // 14
    +hideEdgeUI: 15, // 15
    +hidePanel: 16, // 16
    +showPopup: 17, // 17
    +hidePopup: 18, // 18
    +pointerDown: 19, // 19
    +pointerUp: 20, // 20
    +dragSourceStart: 21, // 21
    +dragSourceEnd: 22, // 22
    +transitionContent: 23, // 23
    +reveal: 24, // 24
    +hide: 25, // 25
    +dragBetweenEnter: 26, // 26
    +dragBetweenLeave: 27, // 27
    +swipeSelect: 28, // 28
    +swipeDeselect: 29, // 29
    +swipeReveal: 30, // 30
    +enterPage: 31, // 31
    +transitionPage: 32, // 32
    +crossFade: 33, // 33
    +peek: 34, // 34
    +updateBadge: 35 // 35
  |};

  declare export var Windows$UI$Core$AnimationMetrics$AnimationEffectTarget: {|
    +primary: 0, // 0
    +added: 1, // 1
    +affected: 2, // 2
    +background: 3, // 3
    +content: 4, // 4
    +deleted: 5, // 5
    +deselected: 6, // 6
    +dragSource: 7, // 7
    +hidden: 8, // 8
    +incoming: 9, // 9
    +outgoing: 10, // 10
    +outline: 11, // 11
    +remaining: 12, // 12
    +revealed: 13, // 13
    +rowIn: 14, // 14
    +rowOut: 15, // 15
    +selected: 16, // 16
    +selection: 17, // 17
    +shown: 18, // 18
    +tapped: 19 // 19
  |};

  declare export interface Windows$UI$Core$AnimationMetrics$IAnimationDescription {
    animations: Windows$Foundation$Collections$IVectorView<Windows$UI$Core$AnimationMetrics$IPropertyAnimation>;
    delayLimit: number;
    staggerDelay: number;
    staggerDelayFactor: number;
    zOrder: number;
  }

  declare export interface Windows$UI$Core$AnimationMetrics$IAnimationDescriptionFactory {
    createInstance(
      effect: $Values<typeof Windows$UI$Core$AnimationMetrics$AnimationEffect>,
      target: $Values<
        typeof Windows$UI$Core$AnimationMetrics$AnimationEffectTarget
      >
    ): Windows$UI$Core$AnimationMetrics$AnimationDescription;
  }

  declare export class Windows$UI$Core$AnimationMetrics$AnimationDescription
    mixins Windows$UI$Core$AnimationMetrics$IAnimationDescription {
    constructor(
      effect: $Values<typeof Windows$UI$Core$AnimationMetrics$AnimationEffect>,
      target: $Values<
        typeof Windows$UI$Core$AnimationMetrics$AnimationEffectTarget
      >
    ): this;
    animations: Windows$Foundation$Collections$IVectorView<Windows$UI$Core$AnimationMetrics$IPropertyAnimation>;
    delayLimit: number;
    staggerDelay: number;
    staggerDelayFactor: number;
    zOrder: number;
  }

  declare export class Windows$UI$Core$AnimationMetrics$PropertyAnimation
    mixins Windows$UI$Core$AnimationMetrics$IPropertyAnimation {
    control1: Windows$Foundation$Point;
    control2: Windows$Foundation$Point;
    delay: number;
    duration: number;
    type: $Values<
      typeof Windows$UI$Core$AnimationMetrics$PropertyAnimationType
    >;
  }

  declare export class Windows$UI$Core$AnimationMetrics$ScaleAnimation
    mixins Windows$UI$Core$AnimationMetrics$IScaleAnimation,
      Windows$UI$Core$AnimationMetrics$IPropertyAnimation {
    finalScaleX: number;
    finalScaleY: number;
    initialScaleX: number;
    initialScaleY: number;
    normalizedOrigin: Windows$Foundation$Point;
    control1: Windows$Foundation$Point;
    control2: Windows$Foundation$Point;
    delay: number;
    duration: number;
    type: $Values<
      typeof Windows$UI$Core$AnimationMetrics$PropertyAnimationType
    >;
  }

  declare export class Windows$UI$Core$AnimationMetrics$TranslationAnimation
    mixins Windows$UI$Core$AnimationMetrics$IPropertyAnimation {
    control1: Windows$Foundation$Point;
    control2: Windows$Foundation$Point;
    delay: number;
    duration: number;
    type: $Values<
      typeof Windows$UI$Core$AnimationMetrics$PropertyAnimationType
    >;
  }

  declare export class Windows$UI$Core$AnimationMetrics$OpacityAnimation
    mixins Windows$UI$Core$AnimationMetrics$IOpacityAnimation,
      Windows$UI$Core$AnimationMetrics$IPropertyAnimation {
    finalOpacity: number;
    initialOpacity: number;
    control1: Windows$Foundation$Point;
    control2: Windows$Foundation$Point;
    delay: number;
    duration: number;
    type: $Values<
      typeof Windows$UI$Core$AnimationMetrics$PropertyAnimationType
    >;
  }

  declare export var Windows$UI$Core$CoreWindowActivationState: {|
    +codeActivated: 0, // 0
    +deactivated: 1, // 1
    +pointerActivated: 2 // 2
  |};

  declare export var Windows$UI$Core$CoreCursorType: {|
    +arrow: 0, // 0
    +cross: 1, // 1
    +custom: 2, // 2
    +hand: 3, // 3
    +help: 4, // 4
    +iBeam: 5, // 5
    +sizeAll: 6, // 6
    +sizeNortheastSouthwest: 7, // 7
    +sizeNorthSouth: 8, // 8
    +sizeNorthwestSoutheast: 9, // 9
    +sizeWestEast: 10, // 10
    +universalNo: 11, // 11
    +upArrow: 12, // 12
    +wait: 13 // 13
  |};

  declare export var Windows$UI$Core$CoreDispatcherPriority: {|
    +low: 0, // 0
    +normal: 1, // 1
    +high: 2 // 2
  |};

  declare export var Windows$UI$Core$CoreProcessEventsOption: {|
    +processOneAndAllPending: 0, // 0
    +processOneIfPresent: 1, // 1
    +processUntilQuit: 2, // 2
    +processAllIfPresent: 3 // 3
  |};

  declare export var Windows$UI$Core$CoreWindowFlowDirection: {|
    +leftToRight: 0, // 0
    +rightToLeft: 1 // 1
  |};

  declare export var Windows$UI$Core$CoreVirtualKeyStates: {|
    +none: 0, // 0
    +down: 1, // 1
    +locked: 2 // 2
  |};

  declare export var Windows$UI$Core$CoreAcceleratorKeyEventType: {|
    +character: 0, // 0
    +deadCharacter: 1, // 1
    +keyDown: 2, // 2
    +keyUp: 3, // 3
    +systemCharacter: 4, // 4
    +systemDeadCharacter: 5, // 5
    +systemKeyDown: 6, // 6
    +systemKeyUp: 7, // 7
    +unicodeCharacter: 8 // 8
  |};

  declare export var Windows$UI$Core$CoreProximityEvaluationScore: {|
    +closest: 0, // 0
    +farthest: 1 // 1
  |};

  declare export interface Windows$UI$Core$CorePhysicalKeyStatus {
    repeatCount: number;
    scanCode: number;
    isExtendedKey: boolean;
    isMenuKeyDown: boolean;
    wasKeyDown: boolean;
    isKeyReleased: boolean;
  }

  declare export interface Windows$UI$Core$CoreProximityEvaluation {
    score: number;
    adjustedPoint: Windows$Foundation$Point;
  }

  declare export interface Windows$UI$Core$ICoreWindowEventArgs {
    handled: boolean;
  }

  declare export type Windows$UI$Core$IAutomationProviderRequestedEventArgs = {
    automationProvider: any
  } & Windows$UI$Core$ICoreWindowEventArgs;

  declare export type Windows$UI$Core$ICharacterReceivedEventArgs = {
    keyCode: number,
    keyStatus: Windows$UI$Core$CorePhysicalKeyStatus
  } & Windows$UI$Core$ICoreWindowEventArgs;

  declare export type Windows$UI$Core$IInputEnabledEventArgs = {
    inputEnabled: boolean
  } & Windows$UI$Core$ICoreWindowEventArgs;

  declare export type Windows$UI$Core$IKeyEventArgs = {
    keyStatus: Windows$UI$Core$CorePhysicalKeyStatus,
    virtualKey: $Values<typeof Windows$System$VirtualKey>
  } & Windows$UI$Core$ICoreWindowEventArgs;

  declare export type Windows$UI$Core$IPointerEventArgs = {
    currentPoint: Windows$UI$Input$PointerPoint,
    keyModifiers: $Values<typeof Windows$System$VirtualKeyModifiers>,
    getIntermediatePoints(): Windows$Foundation$Collections$IVector<Windows$UI$Input$PointerPoint>
  } & Windows$UI$Core$ICoreWindowEventArgs;

  declare export type Windows$UI$Core$ITouchHitTestingEventArgs = {
    boundingBox: Windows$Foundation$Rect,
    point: Windows$Foundation$Point,
    proximityEvaluation: Windows$UI$Core$CoreProximityEvaluation,
    evaluateProximity(
      controlBoundingBox: Windows$Foundation$Rect
    ): Windows$UI$Core$CoreProximityEvaluation,
    evaluateProximity(
      controlVertices: Windows$Foundation$Point[]
    ): Windows$UI$Core$CoreProximityEvaluation
  } & Windows$UI$Core$ICoreWindowEventArgs;

  declare export type Windows$UI$Core$IWindowActivatedEventArgs = {
    windowActivationState: $Values<
      typeof Windows$UI$Core$CoreWindowActivationState
    >
  } & Windows$UI$Core$ICoreWindowEventArgs;

  declare export type Windows$UI$Core$IWindowSizeChangedEventArgs = {
    size: Windows$Foundation$Size
  } & Windows$UI$Core$ICoreWindowEventArgs;

  declare export type Windows$UI$Core$IVisibilityChangedEventArgs = {
    visible: boolean
  } & Windows$UI$Core$ICoreWindowEventArgs;

  declare export interface Windows$UI$Core$ICoreWindow {
    automationHostProvider: any;
    bounds: Windows$Foundation$Rect;
    customProperties: Windows$Foundation$Collections$IPropertySet;
    dispatcher: Windows$UI$Core$CoreDispatcher;
    flowDirection: $Values<typeof Windows$UI$Core$CoreWindowFlowDirection>;
    isInputEnabled: boolean;
    pointerCursor: Windows$UI$Core$CoreCursor;
    pointerPosition: Windows$Foundation$Point;
    visible: boolean;
    activate(): void;
    close(): void;
    getAsyncKeyState(
      virtualKey: $Values<typeof Windows$System$VirtualKey>
    ): $Values<typeof Windows$UI$Core$CoreVirtualKeyStates>;
    getKeyState(
      virtualKey: $Values<typeof Windows$System$VirtualKey>
    ): $Values<typeof Windows$UI$Core$CoreVirtualKeyStates>;
    releasePointerCapture(): void;
    setPointerCapture(): void;
    onactivated: any;
    onautomationproviderrequested: any;
    oncharacterreceived: any;
    onclosed: any;
    oninputenabled: any;
    onkeydown: any;
    onkeyup: any;
    onpointercapturelost: any;
    onpointerentered: any;
    onpointerexited: any;
    onpointermoved: any;
    onpointerpressed: any;
    onpointerreleased: any;
    ontouchhittesting: any;
    onpointerwheelchanged: any;
    onsizechanged: any;
    onvisibilitychanged: any;
  }

  declare export class Windows$UI$Core$CoreDispatcher
    mixins Windows$UI$Core$ICoreDispatcher,
      Windows$UI$Core$ICoreAcceleratorKeys {
    hasThreadAccess: boolean;
    processEvents(
      options: $Values<typeof Windows$UI$Core$CoreProcessEventsOption>
    ): void;
    runAsync(
      priority: $Values<typeof Windows$UI$Core$CoreDispatcherPriority>,
      agileCallback: Windows$UI$Core$DispatchedHandler
    ): Windows$Foundation$IAsyncAction;
    runIdleAsync(
      agileCallback: Windows$UI$Core$IdleDispatchedHandler
    ): Windows$Foundation$IAsyncAction;
    onacceleratorkeyactivated: any;
  }

  declare export class Windows$UI$Core$CoreCursor
    mixins Windows$UI$Core$ICoreCursor {
    constructor(
      type: $Values<typeof Windows$UI$Core$CoreCursorType>,
      id: number
    ): this;
    id: number;
    type: $Values<typeof Windows$UI$Core$CoreCursorType>;
  }

  declare export class Windows$UI$Core$CoreWindow
    mixins Windows$UI$Core$ICoreWindow {
    automationHostProvider: any;
    bounds: Windows$Foundation$Rect;
    customProperties: Windows$Foundation$Collections$IPropertySet;
    dispatcher: Windows$UI$Core$CoreDispatcher;
    flowDirection: $Values<typeof Windows$UI$Core$CoreWindowFlowDirection>;
    isInputEnabled: boolean;
    pointerCursor: Windows$UI$Core$CoreCursor;
    pointerPosition: Windows$Foundation$Point;
    visible: boolean;
    activate(): void;
    close(): void;
    getAsyncKeyState(
      virtualKey: $Values<typeof Windows$System$VirtualKey>
    ): $Values<typeof Windows$UI$Core$CoreVirtualKeyStates>;
    getKeyState(
      virtualKey: $Values<typeof Windows$System$VirtualKey>
    ): $Values<typeof Windows$UI$Core$CoreVirtualKeyStates>;
    releasePointerCapture(): void;
    setPointerCapture(): void;
    onactivated: any;
    onautomationproviderrequested: any;
    oncharacterreceived: any;
    onclosed: any;
    oninputenabled: any;
    onkeydown: any;
    onkeyup: any;
    onpointercapturelost: any;
    onpointerentered: any;
    onpointerexited: any;
    onpointermoved: any;
    onpointerpressed: any;
    onpointerreleased: any;
    ontouchhittesting: any;
    onpointerwheelchanged: any;
    onsizechanged: any;
    onvisibilitychanged: any;
    static getForCurrentThread(): Windows$UI$Core$CoreWindow;
  }

  declare export class Windows$UI$Core$WindowActivatedEventArgs
    mixins Windows$UI$Core$IWindowActivatedEventArgs,
      Windows$UI$Core$ICoreWindowEventArgs {
    windowActivationState: $Values<
      typeof Windows$UI$Core$CoreWindowActivationState
    >;
    handled: boolean;
  }

  declare export class Windows$UI$Core$AutomationProviderRequestedEventArgs
    mixins Windows$UI$Core$IAutomationProviderRequestedEventArgs,
      Windows$UI$Core$ICoreWindowEventArgs {
    automationProvider: any;
    handled: boolean;
  }

  declare export class Windows$UI$Core$CharacterReceivedEventArgs
    mixins Windows$UI$Core$ICharacterReceivedEventArgs,
      Windows$UI$Core$ICoreWindowEventArgs {
    keyCode: number;
    keyStatus: Windows$UI$Core$CorePhysicalKeyStatus;
    handled: boolean;
  }

  declare export class Windows$UI$Core$CoreWindowEventArgs
    mixins Windows$UI$Core$ICoreWindowEventArgs {
    handled: boolean;
  }

  declare export class Windows$UI$Core$InputEnabledEventArgs
    mixins Windows$UI$Core$IInputEnabledEventArgs,
      Windows$UI$Core$ICoreWindowEventArgs {
    inputEnabled: boolean;
    handled: boolean;
  }

  declare export class Windows$UI$Core$KeyEventArgs
    mixins Windows$UI$Core$IKeyEventArgs, Windows$UI$Core$ICoreWindowEventArgs {
    keyStatus: Windows$UI$Core$CorePhysicalKeyStatus;
    virtualKey: $Values<typeof Windows$System$VirtualKey>;
    handled: boolean;
  }

  declare export class Windows$UI$Core$PointerEventArgs
    mixins Windows$UI$Core$IPointerEventArgs,
      Windows$UI$Core$ICoreWindowEventArgs {
    currentPoint: Windows$UI$Input$PointerPoint;
    keyModifiers: $Values<typeof Windows$System$VirtualKeyModifiers>;
    handled: boolean;
    getIntermediatePoints(): Windows$Foundation$Collections$IVector<Windows$UI$Input$PointerPoint>;
  }

  declare export class Windows$UI$Core$TouchHitTestingEventArgs
    mixins Windows$UI$Core$ITouchHitTestingEventArgs,
      Windows$UI$Core$ICoreWindowEventArgs {
    boundingBox: Windows$Foundation$Rect;
    point: Windows$Foundation$Point;
    proximityEvaluation: Windows$UI$Core$CoreProximityEvaluation;
    handled: boolean;
    evaluateProximity(
      controlBoundingBox: Windows$Foundation$Rect
    ): Windows$UI$Core$CoreProximityEvaluation;
    evaluateProximity(
      controlVertices: Windows$Foundation$Point[]
    ): Windows$UI$Core$CoreProximityEvaluation;
  }

  declare export class Windows$UI$Core$WindowSizeChangedEventArgs
    mixins Windows$UI$Core$IWindowSizeChangedEventArgs,
      Windows$UI$Core$ICoreWindowEventArgs {
    size: Windows$Foundation$Size;
    handled: boolean;
  }

  declare export class Windows$UI$Core$VisibilityChangedEventArgs
    mixins Windows$UI$Core$IVisibilityChangedEventArgs,
      Windows$UI$Core$ICoreWindowEventArgs {
    visible: boolean;
    handled: boolean;
  }

  declare export interface Windows$UI$Core$ICoreWindowStatic {
    getForCurrentThread(): Windows$UI$Core$CoreWindow;
  }

  declare export interface Windows$UI$Core$DispatchedHandler {
    (): void;
  }

  declare export interface Windows$UI$Core$IdleDispatchedHandler {
    (e: Windows$UI$Core$IdleDispatchedHandlerArgs): void;
  }

  declare export class Windows$UI$Core$IdleDispatchedHandlerArgs
    mixins Windows$UI$Core$IIdleDispatchedHandlerArgs {
    isDispatcherIdle: boolean;
  }

  declare export type Windows$UI$Core$IAcceleratorKeyEventArgs = {
    eventType: $Values<typeof Windows$UI$Core$CoreAcceleratorKeyEventType>,
    keyStatus: Windows$UI$Core$CorePhysicalKeyStatus,
    virtualKey: $Values<typeof Windows$System$VirtualKey>
  } & Windows$UI$Core$ICoreWindowEventArgs;

  declare export interface Windows$UI$Core$ICoreAcceleratorKeys {
    onacceleratorkeyactivated: any;
  }

  declare export class Windows$UI$Core$AcceleratorKeyEventArgs
    mixins Windows$UI$Core$IAcceleratorKeyEventArgs,
      Windows$UI$Core$ICoreWindowEventArgs {
    eventType: $Values<typeof Windows$UI$Core$CoreAcceleratorKeyEventType>;
    keyStatus: Windows$UI$Core$CorePhysicalKeyStatus;
    virtualKey: $Values<typeof Windows$System$VirtualKey>;
    handled: boolean;
  }

  declare export type Windows$UI$Core$ICoreDispatcher = {
    hasThreadAccess: boolean,
    processEvents(
      options: $Values<typeof Windows$UI$Core$CoreProcessEventsOption>
    ): void,
    runAsync(
      priority: $Values<typeof Windows$UI$Core$CoreDispatcherPriority>,
      agileCallback: Windows$UI$Core$DispatchedHandler
    ): Windows$Foundation$IAsyncAction,
    runIdleAsync(
      agileCallback: Windows$UI$Core$IdleDispatchedHandler
    ): Windows$Foundation$IAsyncAction
  } & Windows$UI$Core$ICoreAcceleratorKeys;

  declare export interface Windows$UI$Core$IIdleDispatchedHandlerArgs {
    isDispatcherIdle: boolean;
  }

  declare export class Windows$UI$Core$CoreAcceleratorKeys
    mixins Windows$UI$Core$ICoreAcceleratorKeys {
    onacceleratorkeyactivated: any;
  }

  declare export interface Windows$UI$Core$ICoreCursor {
    id: number;
    type: $Values<typeof Windows$UI$Core$CoreCursorType>;
  }

  declare export interface Windows$UI$Core$ICoreCursorFactory {
    createCursor(
      type: $Values<typeof Windows$UI$Core$CoreCursorType>,
      id: number
    ): Windows$UI$Core$CoreCursor;
  }

  declare export interface Windows$UI$Core$IInitializeWithCoreWindow {
    initialize(window: Windows$UI$Core$CoreWindow): void;
  }

  declare export interface Windows$UI$Core$ICoreWindowResizeManager {
    notifyLayoutCompleted(): void;
  }

  declare export interface Windows$UI$Core$ICoreWindowResizeManagerStatics {
    getForCurrentView(): Windows$UI$Core$CoreWindowResizeManager;
  }

  declare export class Windows$UI$Core$CoreWindowResizeManager
    mixins Windows$UI$Core$ICoreWindowResizeManager {
    notifyLayoutCompleted(): void;
    static getForCurrentView(): Windows$UI$Core$CoreWindowResizeManager;
  }

  declare export interface Windows$UI$Core$ICoreWindowPopupShowingEventArgs {
    setDesiredSize(value: Windows$Foundation$Size): void;
  }

  declare export class Windows$UI$Core$CoreWindowPopupShowingEventArgs
    mixins Windows$UI$Core$ICoreWindowPopupShowingEventArgs {
    setDesiredSize(value: Windows$Foundation$Size): void;
  }

  declare export interface Windows$UI$Core$ICoreWindowDialog {
    backButtonCommand: Windows$UI$Popups$UICommandInvokedHandler;
    cancelCommandIndex: number;
    commands: Windows$Foundation$Collections$IVector<Windows$UI$Popups$IUICommand>;
    defaultCommandIndex: number;
    isInteractionDelayed: number;
    maxSize: Windows$Foundation$Size;
    minSize: Windows$Foundation$Size;
    title: string;
    onshowing: any;
    showAsync(): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
  }

  declare export interface Windows$UI$Core$ICoreWindowDialogFactory {
    createWithTitle(title: string): Windows$UI$Core$CoreWindowDialog;
  }

  declare export class Windows$UI$Core$CoreWindowDialog
    mixins Windows$UI$Core$ICoreWindowDialog {
    constructor(title: string): this;
    constructor(): this;
    backButtonCommand: Windows$UI$Popups$UICommandInvokedHandler;
    cancelCommandIndex: number;
    commands: Windows$Foundation$Collections$IVector<Windows$UI$Popups$IUICommand>;
    defaultCommandIndex: number;
    isInteractionDelayed: number;
    maxSize: Windows$Foundation$Size;
    minSize: Windows$Foundation$Size;
    title: string;
    onshowing: any;
    showAsync(): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
  }

  declare export interface Windows$UI$Core$ICoreWindowFlyout {
    backButtonCommand: Windows$UI$Popups$UICommandInvokedHandler;
    commands: Windows$Foundation$Collections$IVector<Windows$UI$Popups$IUICommand>;
    defaultCommandIndex: number;
    isInteractionDelayed: number;
    maxSize: Windows$Foundation$Size;
    minSize: Windows$Foundation$Size;
    title: string;
    onshowing: any;
    showAsync(): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
  }

  declare export interface Windows$UI$Core$ICoreWindowFlyoutFactory {
    create(
      position: Windows$Foundation$Point
    ): Windows$UI$Core$CoreWindowFlyout;
    createWithTitle(
      position: Windows$Foundation$Point,
      title: string
    ): Windows$UI$Core$CoreWindowFlyout;
  }

  declare export class Windows$UI$Core$CoreWindowFlyout
    mixins Windows$UI$Core$ICoreWindowFlyout {
    constructor(position: Windows$Foundation$Point): this;
    constructor(position: Windows$Foundation$Point, title: string): this;
    backButtonCommand: Windows$UI$Popups$UICommandInvokedHandler;
    commands: Windows$Foundation$Collections$IVector<Windows$UI$Popups$IUICommand>;
    defaultCommandIndex: number;
    isInteractionDelayed: number;
    maxSize: Windows$Foundation$Size;
    minSize: Windows$Foundation$Size;
    title: string;
    onshowing: any;
    showAsync(): Windows$Foundation$IAsyncOperation<Windows$UI$Popups$IUICommand>;
  }

  declare var npm$namespace$Windows$UI$WebUI: {
    ActivatedDeferral: typeof Windows$UI$WebUI$ActivatedDeferral,
    ActivatedOperation: typeof Windows$UI$WebUI$ActivatedOperation,
    WebUILaunchActivatedEventArgs: typeof Windows$UI$WebUI$WebUILaunchActivatedEventArgs,
    WebUISearchActivatedEventArgs: typeof Windows$UI$WebUI$WebUISearchActivatedEventArgs,
    WebUIShareTargetActivatedEventArgs: typeof Windows$UI$WebUI$WebUIShareTargetActivatedEventArgs,
    WebUIFileActivatedEventArgs: typeof Windows$UI$WebUI$WebUIFileActivatedEventArgs,
    WebUIProtocolActivatedEventArgs: typeof Windows$UI$WebUI$WebUIProtocolActivatedEventArgs,
    WebUIFileOpenPickerActivatedEventArgs: typeof Windows$UI$WebUI$WebUIFileOpenPickerActivatedEventArgs,
    WebUIFileSavePickerActivatedEventArgs: typeof Windows$UI$WebUI$WebUIFileSavePickerActivatedEventArgs,
    WebUICachedFileUpdaterActivatedEventArgs: typeof Windows$UI$WebUI$WebUICachedFileUpdaterActivatedEventArgs,
    WebUIContactPickerActivatedEventArgs: typeof Windows$UI$WebUI$WebUIContactPickerActivatedEventArgs,
    WebUIDeviceActivatedEventArgs: typeof Windows$UI$WebUI$WebUIDeviceActivatedEventArgs,
    WebUIPrintTaskSettingsActivatedEventArgs: typeof Windows$UI$WebUI$WebUIPrintTaskSettingsActivatedEventArgs,
    WebUICameraSettingsActivatedEventArgs: typeof Windows$UI$WebUI$WebUICameraSettingsActivatedEventArgs,
    WebUINavigatedOperation: typeof Windows$UI$WebUI$WebUINavigatedOperation,
    SuspendingDeferral: typeof Windows$UI$WebUI$SuspendingDeferral,
    SuspendingOperation: typeof Windows$UI$WebUI$SuspendingOperation,
    SuspendingEventArgs: typeof Windows$UI$WebUI$SuspendingEventArgs,
    WebUIBackgroundTaskInstanceRuntimeClass: typeof Windows$UI$WebUI$WebUIBackgroundTaskInstanceRuntimeClass,
    WebUIBackgroundTaskInstance: typeof Windows$UI$WebUI$WebUIBackgroundTaskInstance,
    WebUINavigatedDeferral: typeof Windows$UI$WebUI$WebUINavigatedDeferral,
    WebUINavigatedEventArgs: typeof Windows$UI$WebUI$WebUINavigatedEventArgs,
    WebUIApplication: typeof Windows$UI$WebUI$WebUIApplication
  };
  declare export interface Windows$UI$WebUI$IActivatedDeferral {
    complete(): void;
  }

  declare export class Windows$UI$WebUI$ActivatedDeferral
    mixins Windows$UI$WebUI$IActivatedDeferral {
    complete(): void;
  }

  declare export interface Windows$UI$WebUI$IActivatedOperation {
    getDeferral(): Windows$UI$WebUI$ActivatedDeferral;
  }

  declare export class Windows$UI$WebUI$ActivatedOperation
    mixins Windows$UI$WebUI$IActivatedOperation {
    getDeferral(): Windows$UI$WebUI$ActivatedDeferral;
  }

  declare export interface Windows$UI$WebUI$IActivatedEventArgsDeferral {
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUILaunchActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$ILaunchActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    arguments: string;
    tileId: string;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUISearchActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$ISearchActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    language: string;
    queryText: string;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUIShareTargetActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IShareTargetActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    shareOperation: Windows$ApplicationModel$DataTransfer$ShareTarget$ShareOperation;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUIFileActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IFileActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    files: Windows$Foundation$Collections$IVectorView<Windows$Storage$IStorageItem>;
    verb: string;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUIProtocolActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IProtocolActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    uri: Windows$Foundation$Uri;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUIFileOpenPickerActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IFileOpenPickerActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    fileOpenPickerUI: Windows$Storage$Pickers$Provider$FileOpenPickerUI;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUIFileSavePickerActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IFileSavePickerActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    fileSavePickerUI: Windows$Storage$Pickers$Provider$FileSavePickerUI;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUICachedFileUpdaterActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$ICachedFileUpdaterActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    cachedFileUpdaterUI: Windows$Storage$Provider$CachedFileUpdaterUI;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUIContactPickerActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IContactPickerActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    contactPickerUI: Windows$ApplicationModel$Contacts$Provider$ContactPickerUI;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUIDeviceActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IDeviceActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    deviceInformationId: string;
    verb: string;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUIPrintTaskSettingsActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$IPrintTaskSettingsActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    configuration: Windows$Devices$Printers$Extensions$PrintTaskConfiguration;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUICameraSettingsActivatedEventArgs
    mixins Windows$ApplicationModel$Activation$ICameraSettingsActivatedEventArgs,
      Windows$ApplicationModel$Activation$IActivatedEventArgs,
      Windows$UI$WebUI$IActivatedEventArgsDeferral {
    videoDeviceController: any;
    videoDeviceExtension: any;
    kind: $Values<typeof Windows$ApplicationModel$Activation$ActivationKind>;
    previousExecutionState: $Values<
      typeof Windows$ApplicationModel$Activation$ApplicationExecutionState
    >;
    splashScreen: Windows$ApplicationModel$Activation$SplashScreen;
    activatedOperation: Windows$UI$WebUI$ActivatedOperation;
  }

  declare export interface Windows$UI$WebUI$ActivatedEventHandler {
    (
      sender: any,
      eventArgs: Windows$ApplicationModel$Activation$IActivatedEventArgs
    ): void;
  }

  declare export interface Windows$UI$WebUI$ResumingEventHandler {
    (sender: any): void;
  }

  declare export interface Windows$UI$WebUI$SuspendingEventHandler {
    (sender: any, e: Windows$ApplicationModel$ISuspendingEventArgs): void;
  }

  declare export interface Windows$UI$WebUI$NavigatedEventHandler {
    (sender: any, e: Windows$UI$WebUI$IWebUINavigatedEventArgs): void;
  }

  declare export interface Windows$UI$WebUI$IWebUINavigatedEventArgs {
    navigatedOperation: Windows$UI$WebUI$WebUINavigatedOperation;
  }

  declare export class Windows$UI$WebUI$WebUINavigatedOperation
    mixins Windows$UI$WebUI$IWebUINavigatedOperation {
    getDeferral(): Windows$UI$WebUI$WebUINavigatedDeferral;
  }

  declare export class Windows$UI$WebUI$SuspendingDeferral
    mixins Windows$ApplicationModel$ISuspendingDeferral {
    complete(): void;
  }

  declare export class Windows$UI$WebUI$SuspendingOperation
    mixins Windows$ApplicationModel$ISuspendingOperation {
    deadline: Date;
    getDeferral(): Windows$ApplicationModel$SuspendingDeferral;
  }

  declare export class Windows$UI$WebUI$SuspendingEventArgs
    mixins Windows$ApplicationModel$ISuspendingEventArgs {
    suspendingOperation: Windows$ApplicationModel$SuspendingOperation;
  }

  declare export interface Windows$UI$WebUI$IWebUIBackgroundTaskInstance {
    succeeded: boolean;
  }

  declare export interface Windows$UI$WebUI$IWebUIBackgroundTaskInstanceStatics {
    current: Windows$UI$WebUI$IWebUIBackgroundTaskInstance;
  }

  declare export class Windows$UI$WebUI$WebUIBackgroundTaskInstanceRuntimeClass
    mixins Windows$UI$WebUI$IWebUIBackgroundTaskInstance,
      Windows$ApplicationModel$Background$IBackgroundTaskInstance {
    succeeded: boolean;
    instanceId: string;
    progress: number;
    suspendedCount: number;
    task: Windows$ApplicationModel$Background$BackgroundTaskRegistration;
    triggerDetails: any;
    oncanceled: any;
    getDeferral(): Windows$ApplicationModel$Background$BackgroundTaskDeferral;
  }

  declare export class Windows$UI$WebUI$WebUIBackgroundTaskInstance {
    static current: Windows$UI$WebUI$IWebUIBackgroundTaskInstance;
  }

  declare export interface Windows$UI$WebUI$IWebUINavigatedDeferral {
    complete(): void;
  }

  declare export class Windows$UI$WebUI$WebUINavigatedDeferral
    mixins Windows$UI$WebUI$IWebUINavigatedDeferral {
    complete(): void;
  }

  declare export interface Windows$UI$WebUI$IWebUINavigatedOperation {
    getDeferral(): Windows$UI$WebUI$WebUINavigatedDeferral;
  }

  declare export class Windows$UI$WebUI$WebUINavigatedEventArgs
    mixins Windows$UI$WebUI$IWebUINavigatedEventArgs {
    navigatedOperation: Windows$UI$WebUI$WebUINavigatedOperation;
  }

  declare export interface Windows$UI$WebUI$IWebUIActivationStatics {
    onactivated: any;
    onsuspending: any;
    onresuming: any;
    onnavigated: any;
  }

  declare export class Windows$UI$WebUI$WebUIApplication {
    static onactivated: any;
    static onsuspending: any;
    static onresuming: any;
    static onnavigated: any;
  }

  declare export interface Windows$UI$IColors {}

  declare export interface Windows$UI$IColorsStatics {
    aliceBlue: Windows$UI$Color;
    antiqueWhite: Windows$UI$Color;
    aqua: Windows$UI$Color;
    aquamarine: Windows$UI$Color;
    azure: Windows$UI$Color;
    beige: Windows$UI$Color;
    bisque: Windows$UI$Color;
    black: Windows$UI$Color;
    blanchedAlmond: Windows$UI$Color;
    blue: Windows$UI$Color;
    blueViolet: Windows$UI$Color;
    brown: Windows$UI$Color;
    burlyWood: Windows$UI$Color;
    cadetBlue: Windows$UI$Color;
    chartreuse: Windows$UI$Color;
    chocolate: Windows$UI$Color;
    coral: Windows$UI$Color;
    cornflowerBlue: Windows$UI$Color;
    cornsilk: Windows$UI$Color;
    crimson: Windows$UI$Color;
    cyan: Windows$UI$Color;
    darkBlue: Windows$UI$Color;
    darkCyan: Windows$UI$Color;
    darkGoldenrod: Windows$UI$Color;
    darkGray: Windows$UI$Color;
    darkGreen: Windows$UI$Color;
    darkKhaki: Windows$UI$Color;
    darkMagenta: Windows$UI$Color;
    darkOliveGreen: Windows$UI$Color;
    darkOrange: Windows$UI$Color;
    darkOrchid: Windows$UI$Color;
    darkRed: Windows$UI$Color;
    darkSalmon: Windows$UI$Color;
    darkSeaGreen: Windows$UI$Color;
    darkSlateBlue: Windows$UI$Color;
    darkSlateGray: Windows$UI$Color;
    darkTurquoise: Windows$UI$Color;
    darkViolet: Windows$UI$Color;
    deepPink: Windows$UI$Color;
    deepSkyBlue: Windows$UI$Color;
    dimGray: Windows$UI$Color;
    dodgerBlue: Windows$UI$Color;
    firebrick: Windows$UI$Color;
    floralWhite: Windows$UI$Color;
    forestGreen: Windows$UI$Color;
    fuchsia: Windows$UI$Color;
    gainsboro: Windows$UI$Color;
    ghostWhite: Windows$UI$Color;
    gold: Windows$UI$Color;
    goldenrod: Windows$UI$Color;
    gray: Windows$UI$Color;
    green: Windows$UI$Color;
    greenYellow: Windows$UI$Color;
    honeydew: Windows$UI$Color;
    hotPink: Windows$UI$Color;
    indianRed: Windows$UI$Color;
    indigo: Windows$UI$Color;
    ivory: Windows$UI$Color;
    khaki: Windows$UI$Color;
    lavender: Windows$UI$Color;
    lavenderBlush: Windows$UI$Color;
    lawnGreen: Windows$UI$Color;
    lemonChiffon: Windows$UI$Color;
    lightBlue: Windows$UI$Color;
    lightCoral: Windows$UI$Color;
    lightCyan: Windows$UI$Color;
    lightGoldenrodYellow: Windows$UI$Color;
    lightGray: Windows$UI$Color;
    lightGreen: Windows$UI$Color;
    lightPink: Windows$UI$Color;
    lightSalmon: Windows$UI$Color;
    lightSeaGreen: Windows$UI$Color;
    lightSkyBlue: Windows$UI$Color;
    lightSlateGray: Windows$UI$Color;
    lightSteelBlue: Windows$UI$Color;
    lightYellow: Windows$UI$Color;
    lime: Windows$UI$Color;
    limeGreen: Windows$UI$Color;
    linen: Windows$UI$Color;
    magenta: Windows$UI$Color;
    maroon: Windows$UI$Color;
    mediumAquamarine: Windows$UI$Color;
    mediumBlue: Windows$UI$Color;
    mediumOrchid: Windows$UI$Color;
    mediumPurple: Windows$UI$Color;
    mediumSeaGreen: Windows$UI$Color;
    mediumSlateBlue: Windows$UI$Color;
    mediumSpringGreen: Windows$UI$Color;
    mediumTurquoise: Windows$UI$Color;
    mediumVioletRed: Windows$UI$Color;
    midnightBlue: Windows$UI$Color;
    mintCream: Windows$UI$Color;
    mistyRose: Windows$UI$Color;
    moccasin: Windows$UI$Color;
    navajoWhite: Windows$UI$Color;
    navy: Windows$UI$Color;
    oldLace: Windows$UI$Color;
    olive: Windows$UI$Color;
    oliveDrab: Windows$UI$Color;
    orange: Windows$UI$Color;
    orangeRed: Windows$UI$Color;
    orchid: Windows$UI$Color;
    paleGoldenrod: Windows$UI$Color;
    paleGreen: Windows$UI$Color;
    paleTurquoise: Windows$UI$Color;
    paleVioletRed: Windows$UI$Color;
    papayaWhip: Windows$UI$Color;
    peachPuff: Windows$UI$Color;
    peru: Windows$UI$Color;
    pink: Windows$UI$Color;
    plum: Windows$UI$Color;
    powderBlue: Windows$UI$Color;
    purple: Windows$UI$Color;
    red: Windows$UI$Color;
    rosyBrown: Windows$UI$Color;
    royalBlue: Windows$UI$Color;
    saddleBrown: Windows$UI$Color;
    salmon: Windows$UI$Color;
    sandyBrown: Windows$UI$Color;
    seaGreen: Windows$UI$Color;
    seaShell: Windows$UI$Color;
    sienna: Windows$UI$Color;
    silver: Windows$UI$Color;
    skyBlue: Windows$UI$Color;
    slateBlue: Windows$UI$Color;
    slateGray: Windows$UI$Color;
    snow: Windows$UI$Color;
    springGreen: Windows$UI$Color;
    steelBlue: Windows$UI$Color;
    tan: Windows$UI$Color;
    teal: Windows$UI$Color;
    thistle: Windows$UI$Color;
    tomato: Windows$UI$Color;
    transparent: Windows$UI$Color;
    turquoise: Windows$UI$Color;
    violet: Windows$UI$Color;
    wheat: Windows$UI$Color;
    white: Windows$UI$Color;
    whiteSmoke: Windows$UI$Color;
    yellow: Windows$UI$Color;
    yellowGreen: Windows$UI$Color;
  }

  declare export class Windows$UI$Colors mixins Windows$UI$IColors {
    static aliceBlue: Windows$UI$Color;
    static antiqueWhite: Windows$UI$Color;
    static aqua: Windows$UI$Color;
    static aquamarine: Windows$UI$Color;
    static azure: Windows$UI$Color;
    static beige: Windows$UI$Color;
    static bisque: Windows$UI$Color;
    static black: Windows$UI$Color;
    static blanchedAlmond: Windows$UI$Color;
    static blue: Windows$UI$Color;
    static blueViolet: Windows$UI$Color;
    static brown: Windows$UI$Color;
    static burlyWood: Windows$UI$Color;
    static cadetBlue: Windows$UI$Color;
    static chartreuse: Windows$UI$Color;
    static chocolate: Windows$UI$Color;
    static coral: Windows$UI$Color;
    static cornflowerBlue: Windows$UI$Color;
    static cornsilk: Windows$UI$Color;
    static crimson: Windows$UI$Color;
    static cyan: Windows$UI$Color;
    static darkBlue: Windows$UI$Color;
    static darkCyan: Windows$UI$Color;
    static darkGoldenrod: Windows$UI$Color;
    static darkGray: Windows$UI$Color;
    static darkGreen: Windows$UI$Color;
    static darkKhaki: Windows$UI$Color;
    static darkMagenta: Windows$UI$Color;
    static darkOliveGreen: Windows$UI$Color;
    static darkOrange: Windows$UI$Color;
    static darkOrchid: Windows$UI$Color;
    static darkRed: Windows$UI$Color;
    static darkSalmon: Windows$UI$Color;
    static darkSeaGreen: Windows$UI$Color;
    static darkSlateBlue: Windows$UI$Color;
    static darkSlateGray: Windows$UI$Color;
    static darkTurquoise: Windows$UI$Color;
    static darkViolet: Windows$UI$Color;
    static deepPink: Windows$UI$Color;
    static deepSkyBlue: Windows$UI$Color;
    static dimGray: Windows$UI$Color;
    static dodgerBlue: Windows$UI$Color;
    static firebrick: Windows$UI$Color;
    static floralWhite: Windows$UI$Color;
    static forestGreen: Windows$UI$Color;
    static fuchsia: Windows$UI$Color;
    static gainsboro: Windows$UI$Color;
    static ghostWhite: Windows$UI$Color;
    static gold: Windows$UI$Color;
    static goldenrod: Windows$UI$Color;
    static gray: Windows$UI$Color;
    static green: Windows$UI$Color;
    static greenYellow: Windows$UI$Color;
    static honeydew: Windows$UI$Color;
    static hotPink: Windows$UI$Color;
    static indianRed: Windows$UI$Color;
    static indigo: Windows$UI$Color;
    static ivory: Windows$UI$Color;
    static khaki: Windows$UI$Color;
    static lavender: Windows$UI$Color;
    static lavenderBlush: Windows$UI$Color;
    static lawnGreen: Windows$UI$Color;
    static lemonChiffon: Windows$UI$Color;
    static lightBlue: Windows$UI$Color;
    static lightCoral: Windows$UI$Color;
    static lightCyan: Windows$UI$Color;
    static lightGoldenrodYellow: Windows$UI$Color;
    static lightGray: Windows$UI$Color;
    static lightGreen: Windows$UI$Color;
    static lightPink: Windows$UI$Color;
    static lightSalmon: Windows$UI$Color;
    static lightSeaGreen: Windows$UI$Color;
    static lightSkyBlue: Windows$UI$Color;
    static lightSlateGray: Windows$UI$Color;
    static lightSteelBlue: Windows$UI$Color;
    static lightYellow: Windows$UI$Color;
    static lime: Windows$UI$Color;
    static limeGreen: Windows$UI$Color;
    static linen: Windows$UI$Color;
    static magenta: Windows$UI$Color;
    static maroon: Windows$UI$Color;
    static mediumAquamarine: Windows$UI$Color;
    static mediumBlue: Windows$UI$Color;
    static mediumOrchid: Windows$UI$Color;
    static mediumPurple: Windows$UI$Color;
    static mediumSeaGreen: Windows$UI$Color;
    static mediumSlateBlue: Windows$UI$Color;
    static mediumSpringGreen: Windows$UI$Color;
    static mediumTurquoise: Windows$UI$Color;
    static mediumVioletRed: Windows$UI$Color;
    static midnightBlue: Windows$UI$Color;
    static mintCream: Windows$UI$Color;
    static mistyRose: Windows$UI$Color;
    static moccasin: Windows$UI$Color;
    static navajoWhite: Windows$UI$Color;
    static navy: Windows$UI$Color;
    static oldLace: Windows$UI$Color;
    static olive: Windows$UI$Color;
    static oliveDrab: Windows$UI$Color;
    static orange: Windows$UI$Color;
    static orangeRed: Windows$UI$Color;
    static orchid: Windows$UI$Color;
    static paleGoldenrod: Windows$UI$Color;
    static paleGreen: Windows$UI$Color;
    static paleTurquoise: Windows$UI$Color;
    static paleVioletRed: Windows$UI$Color;
    static papayaWhip: Windows$UI$Color;
    static peachPuff: Windows$UI$Color;
    static peru: Windows$UI$Color;
    static pink: Windows$UI$Color;
    static plum: Windows$UI$Color;
    static powderBlue: Windows$UI$Color;
    static purple: Windows$UI$Color;
    static red: Windows$UI$Color;
    static rosyBrown: Windows$UI$Color;
    static royalBlue: Windows$UI$Color;
    static saddleBrown: Windows$UI$Color;
    static salmon: Windows$UI$Color;
    static sandyBrown: Windows$UI$Color;
    static seaGreen: Windows$UI$Color;
    static seaShell: Windows$UI$Color;
    static sienna: Windows$UI$Color;
    static silver: Windows$UI$Color;
    static skyBlue: Windows$UI$Color;
    static slateBlue: Windows$UI$Color;
    static slateGray: Windows$UI$Color;
    static snow: Windows$UI$Color;
    static springGreen: Windows$UI$Color;
    static steelBlue: Windows$UI$Color;
    static tan: Windows$UI$Color;
    static teal: Windows$UI$Color;
    static thistle: Windows$UI$Color;
    static tomato: Windows$UI$Color;
    static transparent: Windows$UI$Color;
    static turquoise: Windows$UI$Color;
    static violet: Windows$UI$Color;
    static wheat: Windows$UI$Color;
    static white: Windows$UI$Color;
    static whiteSmoke: Windows$UI$Color;
    static yellow: Windows$UI$Color;
    static yellowGreen: Windows$UI$Color;
  }

  declare export interface Windows$UI$Color {
    a: number;
    r: number;
    g: number;
    b: number;
  }

  declare export interface Windows$UI$IColorHelper {}

  declare export interface Windows$UI$IColorHelperStatics {
    fromArgb(a: number, r: number, g: number, b: number): Windows$UI$Color;
  }

  declare export class Windows$UI$ColorHelper mixins Windows$UI$IColorHelper {
    static fromArgb(
      a: number,
      r: number,
      g: number,
      b: number
    ): Windows$UI$Color;
  }

  declare var npm$namespace$Windows$UI$Notifications: {
    NotificationSetting: typeof Windows$UI$Notifications$NotificationSetting,
    ToastDismissalReason: typeof Windows$UI$Notifications$ToastDismissalReason,
    BadgeTemplateType: typeof Windows$UI$Notifications$BadgeTemplateType,
    TileTemplateType: typeof Windows$UI$Notifications$TileTemplateType,
    ToastTemplateType: typeof Windows$UI$Notifications$ToastTemplateType,
    PeriodicUpdateRecurrence: typeof Windows$UI$Notifications$PeriodicUpdateRecurrence,
    TileUpdater: typeof Windows$UI$Notifications$TileUpdater,
    TileNotification: typeof Windows$UI$Notifications$TileNotification,
    ScheduledTileNotification: typeof Windows$UI$Notifications$ScheduledTileNotification,
    BadgeUpdater: typeof Windows$UI$Notifications$BadgeUpdater,
    BadgeNotification: typeof Windows$UI$Notifications$BadgeNotification,
    ToastNotifier: typeof Windows$UI$Notifications$ToastNotifier,
    ToastNotification: typeof Windows$UI$Notifications$ToastNotification,
    ScheduledToastNotification: typeof Windows$UI$Notifications$ScheduledToastNotification,
    ToastDismissedEventArgs: typeof Windows$UI$Notifications$ToastDismissedEventArgs,
    ToastFailedEventArgs: typeof Windows$UI$Notifications$ToastFailedEventArgs,
    TileUpdateManager: typeof Windows$UI$Notifications$TileUpdateManager,
    BadgeUpdateManager: typeof Windows$UI$Notifications$BadgeUpdateManager,
    ToastNotificationManager: typeof Windows$UI$Notifications$ToastNotificationManager
  };

  declare export var Windows$UI$Notifications$NotificationSetting: {|
    +enabled: 0, // 0
    +disabledForApplication: 1, // 1
    +disabledForUser: 2, // 2
    +disabledByGroupPolicy: 3, // 3
    +disabledByManifest: 4 // 4
  |};

  declare export var Windows$UI$Notifications$ToastDismissalReason: {|
    +userCanceled: 0, // 0
    +applicationHidden: 1, // 1
    +timedOut: 2 // 2
  |};

  declare export var Windows$UI$Notifications$BadgeTemplateType: {|
    +badgeGlyph: 0, // 0
    +badgeNumber: 1 // 1
  |};

  declare export var Windows$UI$Notifications$TileTemplateType: {|
    +tileSquareImage: 0, // 0
    +tileSquareBlock: 1, // 1
    +tileSquareText01: 2, // 2
    +tileSquareText02: 3, // 3
    +tileSquareText03: 4, // 4
    +tileSquareText04: 5, // 5
    +tileSquarePeekImageAndText01: 6, // 6
    +tileSquarePeekImageAndText02: 7, // 7
    +tileSquarePeekImageAndText03: 8, // 8
    +tileSquarePeekImageAndText04: 9, // 9
    +tileWideImage: 10, // 10
    +tileWideImageCollection: 11, // 11
    +tileWideImageAndText01: 12, // 12
    +tileWideImageAndText02: 13, // 13
    +tileWideBlockAndText01: 14, // 14
    +tileWideBlockAndText02: 15, // 15
    +tileWidePeekImageCollection01: 16, // 16
    +tileWidePeekImageCollection02: 17, // 17
    +tileWidePeekImageCollection03: 18, // 18
    +tileWidePeekImageCollection04: 19, // 19
    +tileWidePeekImageCollection05: 20, // 20
    +tileWidePeekImageCollection06: 21, // 21
    +tileWidePeekImageAndText01: 22, // 22
    +tileWidePeekImageAndText02: 23, // 23
    +tileWidePeekImage01: 24, // 24
    +tileWidePeekImage02: 25, // 25
    +tileWidePeekImage03: 26, // 26
    +tileWidePeekImage04: 27, // 27
    +tileWidePeekImage05: 28, // 28
    +tileWidePeekImage06: 29, // 29
    +tileWideSmallImageAndText01: 30, // 30
    +tileWideSmallImageAndText02: 31, // 31
    +tileWideSmallImageAndText03: 32, // 32
    +tileWideSmallImageAndText04: 33, // 33
    +tileWideSmallImageAndText05: 34, // 34
    +tileWideText01: 35, // 35
    +tileWideText02: 36, // 36
    +tileWideText03: 37, // 37
    +tileWideText04: 38, // 38
    +tileWideText05: 39, // 39
    +tileWideText06: 40, // 40
    +tileWideText07: 41, // 41
    +tileWideText08: 42, // 42
    +tileWideText09: 43, // 43
    +tileWideText10: 44, // 44
    +tileWideText11: 45 // 45
  |};

  declare export var Windows$UI$Notifications$ToastTemplateType: {|
    +toastImageAndText01: 0, // 0
    +toastImageAndText02: 1, // 1
    +toastImageAndText03: 2, // 2
    +toastImageAndText04: 3, // 3
    +toastText01: 4, // 4
    +toastText02: 5, // 5
    +toastText03: 6, // 6
    +toastText04: 7 // 7
  |};

  declare export var Windows$UI$Notifications$PeriodicUpdateRecurrence: {|
    +halfHour: 0, // 0
    +hour: 1, // 1
    +sixHours: 2, // 2
    +twelveHours: 3, // 3
    +daily: 4 // 4
  |};

  declare export interface Windows$UI$Notifications$IToastDismissedEventArgs {
    reason: $Values<typeof Windows$UI$Notifications$ToastDismissalReason>;
  }

  declare export interface Windows$UI$Notifications$IToastFailedEventArgs {
    errorCode: number;
  }

  declare export interface Windows$UI$Notifications$ITileUpdateManagerStatics {
    createTileUpdaterForApplication(): Windows$UI$Notifications$TileUpdater;
    createTileUpdaterForApplication(
      applicationId: string
    ): Windows$UI$Notifications$TileUpdater;
    createTileUpdaterForSecondaryTile(
      tileId: string
    ): Windows$UI$Notifications$TileUpdater;
    getTemplateContent(
      type: $Values<typeof Windows$UI$Notifications$TileTemplateType>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export class Windows$UI$Notifications$TileUpdater
    mixins Windows$UI$Notifications$ITileUpdater {
    setting: $Values<typeof Windows$UI$Notifications$NotificationSetting>;
    update(notification: Windows$UI$Notifications$TileNotification): void;
    clear(): void;
    enableNotificationQueue(enable: boolean): void;
    addToSchedule(
      scheduledTile: Windows$UI$Notifications$ScheduledTileNotification
    ): void;
    removeFromSchedule(
      scheduledTile: Windows$UI$Notifications$ScheduledTileNotification
    ): void;
    getScheduledTileNotifications(): Windows$Foundation$Collections$IVectorView<Windows$UI$Notifications$ScheduledTileNotification>;
    startPeriodicUpdate(
      tileContent: Windows$Foundation$Uri,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
    startPeriodicUpdate(
      tileContent: Windows$Foundation$Uri,
      startTime: Date,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
    stopPeriodicUpdate(): void;
    startPeriodicUpdateBatch(
      tileContents: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
    startPeriodicUpdateBatch(
      tileContents: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>,
      startTime: Date,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
  }

  declare export interface Windows$UI$Notifications$ITileUpdater {
    setting: $Values<typeof Windows$UI$Notifications$NotificationSetting>;
    update(notification: Windows$UI$Notifications$TileNotification): void;
    clear(): void;
    enableNotificationQueue(enable: boolean): void;
    addToSchedule(
      scheduledTile: Windows$UI$Notifications$ScheduledTileNotification
    ): void;
    removeFromSchedule(
      scheduledTile: Windows$UI$Notifications$ScheduledTileNotification
    ): void;
    getScheduledTileNotifications(): Windows$Foundation$Collections$IVectorView<Windows$UI$Notifications$ScheduledTileNotification>;
    startPeriodicUpdate(
      tileContent: Windows$Foundation$Uri,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
    startPeriodicUpdate(
      tileContent: Windows$Foundation$Uri,
      startTime: Date,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
    stopPeriodicUpdate(): void;
    startPeriodicUpdateBatch(
      tileContents: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
    startPeriodicUpdateBatch(
      tileContents: Windows$Foundation$Collections$IIterable<Windows$Foundation$Uri>,
      startTime: Date,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
  }

  declare export class Windows$UI$Notifications$TileNotification
    mixins Windows$UI$Notifications$ITileNotification {
    constructor(content: Windows$Data$Xml$Dom$XmlDocument): this;
    content: Windows$Data$Xml$Dom$XmlDocument;
    expirationTime: Date;
    tag: string;
  }

  declare export class Windows$UI$Notifications$ScheduledTileNotification
    mixins Windows$UI$Notifications$IScheduledTileNotification {
    constructor(
      content: Windows$Data$Xml$Dom$XmlDocument,
      deliveryTime: Date
    ): this;
    content: Windows$Data$Xml$Dom$XmlDocument;
    deliveryTime: Date;
    expirationTime: Date;
    id: string;
    tag: string;
  }

  declare export interface Windows$UI$Notifications$IBadgeUpdateManagerStatics {
    createBadgeUpdaterForApplication(): Windows$UI$Notifications$BadgeUpdater;
    createBadgeUpdaterForApplication(
      applicationId: string
    ): Windows$UI$Notifications$BadgeUpdater;
    createBadgeUpdaterForSecondaryTile(
      tileId: string
    ): Windows$UI$Notifications$BadgeUpdater;
    getTemplateContent(
      type: $Values<typeof Windows$UI$Notifications$BadgeTemplateType>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export class Windows$UI$Notifications$BadgeUpdater
    mixins Windows$UI$Notifications$IBadgeUpdater {
    update(notification: Windows$UI$Notifications$BadgeNotification): void;
    clear(): void;
    startPeriodicUpdate(
      badgeContent: Windows$Foundation$Uri,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
    startPeriodicUpdate(
      badgeContent: Windows$Foundation$Uri,
      startTime: Date,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
    stopPeriodicUpdate(): void;
  }

  declare export interface Windows$UI$Notifications$IBadgeUpdater {
    update(notification: Windows$UI$Notifications$BadgeNotification): void;
    clear(): void;
    startPeriodicUpdate(
      badgeContent: Windows$Foundation$Uri,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
    startPeriodicUpdate(
      badgeContent: Windows$Foundation$Uri,
      startTime: Date,
      requestedInterval: $Values<
        typeof Windows$UI$Notifications$PeriodicUpdateRecurrence
      >
    ): void;
    stopPeriodicUpdate(): void;
  }

  declare export class Windows$UI$Notifications$BadgeNotification
    mixins Windows$UI$Notifications$IBadgeNotification {
    constructor(content: Windows$Data$Xml$Dom$XmlDocument): this;
    content: Windows$Data$Xml$Dom$XmlDocument;
    expirationTime: Date;
  }

  declare export interface Windows$UI$Notifications$IToastNotificationManagerStatics {
    createToastNotifier(): Windows$UI$Notifications$ToastNotifier;
    createToastNotifier(
      applicationId: string
    ): Windows$UI$Notifications$ToastNotifier;
    getTemplateContent(
      type: $Values<typeof Windows$UI$Notifications$ToastTemplateType>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export class Windows$UI$Notifications$ToastNotifier
    mixins Windows$UI$Notifications$IToastNotifier {
    setting: $Values<typeof Windows$UI$Notifications$NotificationSetting>;
    show(notification: Windows$UI$Notifications$ToastNotification): void;
    hide(notification: Windows$UI$Notifications$ToastNotification): void;
    addToSchedule(
      scheduledToast: Windows$UI$Notifications$ScheduledToastNotification
    ): void;
    removeFromSchedule(
      scheduledToast: Windows$UI$Notifications$ScheduledToastNotification
    ): void;
    getScheduledToastNotifications(): Windows$Foundation$Collections$IVectorView<Windows$UI$Notifications$ScheduledToastNotification>;
  }

  declare export interface Windows$UI$Notifications$IToastNotifier {
    setting: $Values<typeof Windows$UI$Notifications$NotificationSetting>;
    show(notification: Windows$UI$Notifications$ToastNotification): void;
    hide(notification: Windows$UI$Notifications$ToastNotification): void;
    addToSchedule(
      scheduledToast: Windows$UI$Notifications$ScheduledToastNotification
    ): void;
    removeFromSchedule(
      scheduledToast: Windows$UI$Notifications$ScheduledToastNotification
    ): void;
    getScheduledToastNotifications(): Windows$Foundation$Collections$IVectorView<Windows$UI$Notifications$ScheduledToastNotification>;
  }

  declare export class Windows$UI$Notifications$ToastNotification
    mixins Windows$UI$Notifications$IToastNotification {
    constructor(content: Windows$Data$Xml$Dom$XmlDocument): this;
    content: Windows$Data$Xml$Dom$XmlDocument;
    expirationTime: Date;
    ondismissed: any;
    onactivated: any;
    onfailed: any;
  }

  declare export class Windows$UI$Notifications$ScheduledToastNotification
    mixins Windows$UI$Notifications$IScheduledToastNotification {
    constructor(
      content: Windows$Data$Xml$Dom$XmlDocument,
      deliveryTime: Date
    ): this;
    constructor(
      content: Windows$Data$Xml$Dom$XmlDocument,
      deliveryTime: Date,
      snoozeInterval: number,
      maximumSnoozeCount: number
    ): this;
    content: Windows$Data$Xml$Dom$XmlDocument;
    deliveryTime: Date;
    id: string;
    maximumSnoozeCount: number;
    snoozeInterval: number;
  }

  declare export interface Windows$UI$Notifications$ITileNotificationFactory {
    createTileNotification(
      content: Windows$Data$Xml$Dom$XmlDocument
    ): Windows$UI$Notifications$TileNotification;
  }

  declare export interface Windows$UI$Notifications$ITileNotification {
    content: Windows$Data$Xml$Dom$XmlDocument;
    expirationTime: Date;
    tag: string;
  }

  declare export interface Windows$UI$Notifications$IBadgeNotificationFactory {
    createBadgeNotification(
      content: Windows$Data$Xml$Dom$XmlDocument
    ): Windows$UI$Notifications$BadgeNotification;
  }

  declare export interface Windows$UI$Notifications$IBadgeNotification {
    content: Windows$Data$Xml$Dom$XmlDocument;
    expirationTime: Date;
  }

  declare export interface Windows$UI$Notifications$IToastNotificationFactory {
    createToastNotification(
      content: Windows$Data$Xml$Dom$XmlDocument
    ): Windows$UI$Notifications$ToastNotification;
  }

  declare export interface Windows$UI$Notifications$IToastNotification {
    content: Windows$Data$Xml$Dom$XmlDocument;
    expirationTime: Date;
    ondismissed: any;
    onactivated: any;
    onfailed: any;
  }

  declare export class Windows$UI$Notifications$ToastDismissedEventArgs
    mixins Windows$UI$Notifications$IToastDismissedEventArgs {
    reason: $Values<typeof Windows$UI$Notifications$ToastDismissalReason>;
  }

  declare export class Windows$UI$Notifications$ToastFailedEventArgs
    mixins Windows$UI$Notifications$IToastFailedEventArgs {
    errorCode: number;
  }

  declare export interface Windows$UI$Notifications$IScheduledToastNotificationFactory {
    createScheduledToastNotification(
      content: Windows$Data$Xml$Dom$XmlDocument,
      deliveryTime: Date
    ): Windows$UI$Notifications$ScheduledToastNotification;
    createScheduledToastNotification(
      content: Windows$Data$Xml$Dom$XmlDocument,
      deliveryTime: Date,
      snoozeInterval: number,
      maximumSnoozeCount: number
    ): Windows$UI$Notifications$ScheduledToastNotification;
  }

  declare export interface Windows$UI$Notifications$IScheduledToastNotification {
    content: Windows$Data$Xml$Dom$XmlDocument;
    deliveryTime: Date;
    id: string;
    maximumSnoozeCount: number;
    snoozeInterval: number;
  }

  declare export interface Windows$UI$Notifications$IScheduledTileNotificationFactory {
    createScheduledTileNotification(
      content: Windows$Data$Xml$Dom$XmlDocument,
      deliveryTime: Date
    ): Windows$UI$Notifications$ScheduledTileNotification;
  }

  declare export interface Windows$UI$Notifications$IScheduledTileNotification {
    content: Windows$Data$Xml$Dom$XmlDocument;
    deliveryTime: Date;
    expirationTime: Date;
    id: string;
    tag: string;
  }

  declare export class Windows$UI$Notifications$TileUpdateManager {
    static createTileUpdaterForApplication(): Windows$UI$Notifications$TileUpdater;
    static createTileUpdaterForApplication(
      applicationId: string
    ): Windows$UI$Notifications$TileUpdater;
    static createTileUpdaterForSecondaryTile(
      tileId: string
    ): Windows$UI$Notifications$TileUpdater;
    static getTemplateContent(
      type: $Values<typeof Windows$UI$Notifications$TileTemplateType>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export class Windows$UI$Notifications$BadgeUpdateManager {
    static createBadgeUpdaterForApplication(): Windows$UI$Notifications$BadgeUpdater;
    static createBadgeUpdaterForApplication(
      applicationId: string
    ): Windows$UI$Notifications$BadgeUpdater;
    static createBadgeUpdaterForSecondaryTile(
      tileId: string
    ): Windows$UI$Notifications$BadgeUpdater;
    static getTemplateContent(
      type: $Values<typeof Windows$UI$Notifications$BadgeTemplateType>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export class Windows$UI$Notifications$ToastNotificationManager {
    static createToastNotifier(): Windows$UI$Notifications$ToastNotifier;
    static createToastNotifier(
      applicationId: string
    ): Windows$UI$Notifications$ToastNotifier;
    static getTemplateContent(
      type: $Values<typeof Windows$UI$Notifications$ToastTemplateType>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare var npm$namespace$Windows$Web: {
    WebErrorStatus: typeof Windows$Web$WebErrorStatus,
    WebError: typeof Windows$Web$WebError,
    Syndication: typeof npm$namespace$Windows$Web$Syndication,
    AtomPub: typeof npm$namespace$Windows$Web$AtomPub
  };

  declare export var Windows$Web$WebErrorStatus: {|
    +unknown: 0, // 0
    +certificateCommonNameIsIncorrect: 1, // 1
    +certificateExpired: 2, // 2
    +certificateContainsErrors: 3, // 3
    +certificateRevoked: 4, // 4
    +certificateIsInvalid: 5, // 5
    +serverUnreachable: 6, // 6
    +timeout: 7, // 7
    +errorHttpInvalidServerResponse: 8, // 8
    +connectionAborted: 9, // 9
    +connectionReset: 10, // 10
    +disconnected: 11, // 11
    +httpToHttpsOnRedirection: 12, // 12
    +httpsToHttpOnRedirection: 13, // 13
    +cannotConnect: 14, // 14
    +hostNameNotResolved: 15, // 15
    +operationCanceled: 16, // 16
    +redirectFailed: 17, // 17
    +unexpectedStatusCode: 18, // 18
    +unexpectedRedirection: 19, // 19
    +unexpectedClientError: 20, // 20
    +unexpectedServerError: 21, // 21
    +multipleChoices: 22, // 22
    +movedPermanently: 23, // 23
    +found: 24, // 24
    +seeOther: 25, // 25
    +notModified: 26, // 26
    +useProxy: 27, // 27
    +temporaryRedirect: 28, // 28
    +badRequest: 29, // 29
    +unauthorized: 30, // 30
    +paymentRequired: 31, // 31
    +forbidden: 32, // 32
    +notFound: 33, // 33
    +methodNotAllowed: 34, // 34
    +notAcceptable: 35, // 35
    +proxyAuthenticationRequired: 36, // 36
    +requestTimeout: 37, // 37
    +conflict: 38, // 38
    +gone: 39, // 39
    +lengthRequired: 40, // 40
    +preconditionFailed: 41, // 41
    +requestEntityTooLarge: 42, // 42
    +requestUriTooLong: 43, // 43
    +unsupportedMediaType: 44, // 44
    +requestedRangeNotSatisfiable: 45, // 45
    +expectationFailed: 46, // 46
    +internalServerError: 47, // 47
    +notImplemented: 48, // 48
    +badGateway: 49, // 49
    +serviceUnavailable: 50, // 50
    +gatewayTimeout: 51, // 51
    +httpVersionNotSupported: 52 // 52
  |};

  declare export interface Windows$Web$IWebErrorStatics {
    getStatus(hresult: number): $Values<typeof Windows$Web$WebErrorStatus>;
  }

  declare export class Windows$Web$WebError {
    static getStatus(
      hresult: number
    ): $Values<typeof Windows$Web$WebErrorStatus>;
  }

  declare var npm$namespace$Windows$Web$Syndication: {
    SyndicationFormat: typeof Windows$Web$Syndication$SyndicationFormat,
    SyndicationErrorStatus: typeof Windows$Web$Syndication$SyndicationErrorStatus,
    SyndicationTextType: typeof Windows$Web$Syndication$SyndicationTextType,
    SyndicationAttribute: typeof Windows$Web$Syndication$SyndicationAttribute,
    SyndicationNode: typeof Windows$Web$Syndication$SyndicationNode,
    SyndicationGenerator: typeof Windows$Web$Syndication$SyndicationGenerator,
    SyndicationText: typeof Windows$Web$Syndication$SyndicationText,
    SyndicationContent: typeof Windows$Web$Syndication$SyndicationContent,
    SyndicationLink: typeof Windows$Web$Syndication$SyndicationLink,
    SyndicationPerson: typeof Windows$Web$Syndication$SyndicationPerson,
    SyndicationCategory: typeof Windows$Web$Syndication$SyndicationCategory,
    SyndicationFeed: typeof Windows$Web$Syndication$SyndicationFeed,
    SyndicationItem: typeof Windows$Web$Syndication$SyndicationItem,
    SyndicationClient: typeof Windows$Web$Syndication$SyndicationClient,
    SyndicationError: typeof Windows$Web$Syndication$SyndicationError
  };
  declare export interface Windows$Web$Syndication$RetrievalProgress {
    bytesRetrieved: number;
    totalBytesToRetrieve: number;
  }

  declare export interface Windows$Web$Syndication$TransferProgress {
    bytesSent: number;
    totalBytesToSend: number;
    bytesRetrieved: number;
    totalBytesToRetrieve: number;
  }

  declare export var Windows$Web$Syndication$SyndicationFormat: {|
    +atom10: 0, // 0
    +rss20: 1, // 1
    +rss10: 2, // 2
    +rss092: 3, // 3
    +rss091: 4, // 4
    +atom03: 5 // 5
  |};

  declare export var Windows$Web$Syndication$SyndicationErrorStatus: {|
    +unknown: 0, // 0
    +missingRequiredElement: 1, // 1
    +missingRequiredAttribute: 2, // 2
    +invalidXml: 3, // 3
    +unexpectedContent: 4, // 4
    +unsupportedFormat: 5 // 5
  |};

  declare export interface Windows$Web$Syndication$ISyndicationAttribute {
    name: string;
    namespace: string;
    value: string;
  }

  declare export class Windows$Web$Syndication$SyndicationAttribute
    mixins Windows$Web$Syndication$ISyndicationAttribute {
    constructor(
      attributeName: string,
      attributeNamespace: string,
      attributeValue: string
    ): this;
    constructor(): this;
    name: string;
    namespace: string;
    value: string;
  }

  declare export interface Windows$Web$Syndication$ISyndicationAttributeFactory {
    createSyndicationAttribute(
      attributeName: string,
      attributeNamespace: string,
      attributeValue: string
    ): Windows$Web$Syndication$SyndicationAttribute;
  }

  declare export interface Windows$Web$Syndication$ISyndicationNode {
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export class Windows$Web$Syndication$SyndicationNode
    mixins Windows$Web$Syndication$ISyndicationNode {
    constructor(
      nodeName: string,
      nodeNamespace: string,
      nodeValue: string
    ): this;
    constructor(): this;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export interface Windows$Web$Syndication$ISyndicationNodeFactory {
    createSyndicationNode(
      nodeName: string,
      nodeNamespace: string,
      nodeValue: string
    ): Windows$Web$Syndication$SyndicationNode;
  }

  declare export interface Windows$Web$Syndication$ISyndicationGenerator {
    text: string;
    uri: Windows$Foundation$Uri;
    version: string;
  }

  declare export class Windows$Web$Syndication$SyndicationGenerator
    mixins Windows$Web$Syndication$ISyndicationGenerator,
      Windows$Web$Syndication$ISyndicationNode {
    constructor(text: string): this;
    constructor(): this;
    text: string;
    uri: Windows$Foundation$Uri;
    version: string;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export interface Windows$Web$Syndication$ISyndicationGeneratorFactory {
    createSyndicationGenerator(
      text: string
    ): Windows$Web$Syndication$SyndicationGenerator;
  }

  declare export type Windows$Web$Syndication$ISyndicationText = {
    text: string,
    type: string,
    xml: Windows$Data$Xml$Dom$XmlDocument
  } & Windows$Web$Syndication$ISyndicationNode;

  declare export class Windows$Web$Syndication$SyndicationText
    mixins Windows$Web$Syndication$ISyndicationText,
      Windows$Web$Syndication$ISyndicationNode {
    constructor(text: string): this;
    constructor(
      text: string,
      type: $Values<typeof Windows$Web$Syndication$SyndicationTextType>
    ): this;
    constructor(): this;
    text: string;
    type: string;
    xml: Windows$Data$Xml$Dom$XmlDocument;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export var Windows$Web$Syndication$SyndicationTextType: {|
    +text: 0, // 0
    +html: 1, // 1
    +xhtml: 2 // 2
  |};

  declare export interface Windows$Web$Syndication$ISyndicationTextFactory {
    createSyndicationText(
      text: string
    ): Windows$Web$Syndication$SyndicationText;
    createSyndicationText(
      text: string,
      type: $Values<typeof Windows$Web$Syndication$SyndicationTextType>
    ): Windows$Web$Syndication$SyndicationText;
  }

  declare export type Windows$Web$Syndication$ISyndicationContent = {
    sourceUri: Windows$Foundation$Uri
  } & Windows$Web$Syndication$ISyndicationText &
    Windows$Web$Syndication$ISyndicationNode;

  declare export class Windows$Web$Syndication$SyndicationContent
    mixins Windows$Web$Syndication$ISyndicationText,
      Windows$Web$Syndication$ISyndicationNode,
      Windows$Web$Syndication$ISyndicationContent {
    constructor(
      text: string,
      type: $Values<typeof Windows$Web$Syndication$SyndicationTextType>
    ): this;
    constructor(sourceUri: Windows$Foundation$Uri): this;
    constructor(): this;
    text: string;
    type: string;
    xml: Windows$Data$Xml$Dom$XmlDocument;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    sourceUri: Windows$Foundation$Uri;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export interface Windows$Web$Syndication$ISyndicationContentFactory {
    createSyndicationContent(
      text: string,
      type: $Values<typeof Windows$Web$Syndication$SyndicationTextType>
    ): Windows$Web$Syndication$SyndicationContent;
    createSyndicationContent(
      sourceUri: Windows$Foundation$Uri
    ): Windows$Web$Syndication$SyndicationContent;
  }

  declare export type Windows$Web$Syndication$ISyndicationLink = {
    length: number,
    mediaType: string,
    relationship: string,
    resourceLanguage: string,
    title: string,
    uri: Windows$Foundation$Uri
  } & Windows$Web$Syndication$ISyndicationNode;

  declare export class Windows$Web$Syndication$SyndicationLink
    mixins Windows$Web$Syndication$ISyndicationLink,
      Windows$Web$Syndication$ISyndicationNode {
    constructor(uri: Windows$Foundation$Uri): this;
    constructor(
      uri: Windows$Foundation$Uri,
      relationship: string,
      title: string,
      mediaType: string,
      length: number
    ): this;
    constructor(): this;
    length: number;
    mediaType: string;
    relationship: string;
    resourceLanguage: string;
    title: string;
    uri: Windows$Foundation$Uri;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export interface Windows$Web$Syndication$ISyndicationLinkFactory {
    createSyndicationLink(
      uri: Windows$Foundation$Uri
    ): Windows$Web$Syndication$SyndicationLink;
    createSyndicationLink(
      uri: Windows$Foundation$Uri,
      relationship: string,
      title: string,
      mediaType: string,
      length: number
    ): Windows$Web$Syndication$SyndicationLink;
  }

  declare export type Windows$Web$Syndication$ISyndicationPerson = {
    email: string,
    name: string,
    uri: Windows$Foundation$Uri
  } & Windows$Web$Syndication$ISyndicationNode;

  declare export class Windows$Web$Syndication$SyndicationPerson
    mixins Windows$Web$Syndication$ISyndicationPerson,
      Windows$Web$Syndication$ISyndicationNode {
    constructor(name: string): this;
    constructor(name: string, email: string, uri: Windows$Foundation$Uri): this;
    constructor(): this;
    email: string;
    name: string;
    uri: Windows$Foundation$Uri;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export interface Windows$Web$Syndication$ISyndicationPersonFactory {
    createSyndicationPerson(
      name: string
    ): Windows$Web$Syndication$SyndicationPerson;
    createSyndicationPerson(
      name: string,
      email: string,
      uri: Windows$Foundation$Uri
    ): Windows$Web$Syndication$SyndicationPerson;
  }

  declare export type Windows$Web$Syndication$ISyndicationCategory = {
    label: string,
    scheme: string,
    term: string
  } & Windows$Web$Syndication$ISyndicationNode;

  declare export class Windows$Web$Syndication$SyndicationCategory
    mixins Windows$Web$Syndication$ISyndicationCategory,
      Windows$Web$Syndication$ISyndicationNode {
    constructor(term: string): this;
    constructor(term: string, scheme: string, label: string): this;
    constructor(): this;
    label: string;
    scheme: string;
    term: string;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export interface Windows$Web$Syndication$ISyndicationCategoryFactory {
    createSyndicationCategory(
      term: string
    ): Windows$Web$Syndication$SyndicationCategory;
    createSyndicationCategory(
      term: string,
      scheme: string,
      label: string
    ): Windows$Web$Syndication$SyndicationCategory;
  }

  declare export type Windows$Web$Syndication$ISyndicationItem = {
    authors: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationPerson>,
    categories: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationCategory>,
    commentsUri: Windows$Foundation$Uri,
    content: Windows$Web$Syndication$SyndicationContent,
    contributors: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationPerson>,
    eTag: string,
    editMediaUri: Windows$Foundation$Uri,
    editUri: Windows$Foundation$Uri,
    id: string,
    itemUri: Windows$Foundation$Uri,
    lastUpdatedTime: Date,
    links: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationLink>,
    publishedDate: Date,
    rights: Windows$Web$Syndication$ISyndicationText,
    source: Windows$Web$Syndication$SyndicationFeed,
    summary: Windows$Web$Syndication$ISyndicationText,
    title: Windows$Web$Syndication$ISyndicationText,
    load(item: string): void,
    loadFromXml(itemDocument: Windows$Data$Xml$Dom$XmlDocument): void
  } & Windows$Web$Syndication$ISyndicationNode;

  declare export class Windows$Web$Syndication$SyndicationFeed
    mixins Windows$Web$Syndication$ISyndicationFeed,
      Windows$Web$Syndication$ISyndicationNode {
    constructor(
      title: string,
      subtitle: string,
      uri: Windows$Foundation$Uri
    ): this;
    constructor(): this;
    authors: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationPerson>;
    categories: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationCategory>;
    contributors: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationPerson>;
    firstUri: Windows$Foundation$Uri;
    generator: Windows$Web$Syndication$SyndicationGenerator;
    iconUri: Windows$Foundation$Uri;
    id: string;
    imageUri: Windows$Foundation$Uri;
    items: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationItem>;
    lastUpdatedTime: Date;
    lastUri: Windows$Foundation$Uri;
    links: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationLink>;
    nextUri: Windows$Foundation$Uri;
    previousUri: Windows$Foundation$Uri;
    rights: Windows$Web$Syndication$ISyndicationText;
    sourceFormat: $Values<typeof Windows$Web$Syndication$SyndicationFormat>;
    subtitle: Windows$Web$Syndication$ISyndicationText;
    title: Windows$Web$Syndication$ISyndicationText;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    load(feed: string): void;
    loadFromXml(feedDocument: Windows$Data$Xml$Dom$XmlDocument): void;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export class Windows$Web$Syndication$SyndicationItem
    mixins Windows$Web$Syndication$ISyndicationItem,
      Windows$Web$Syndication$ISyndicationNode {
    constructor(
      title: string,
      content: Windows$Web$Syndication$SyndicationContent,
      uri: Windows$Foundation$Uri
    ): this;
    constructor(): this;
    authors: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationPerson>;
    categories: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationCategory>;
    commentsUri: Windows$Foundation$Uri;
    content: Windows$Web$Syndication$SyndicationContent;
    contributors: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationPerson>;
    eTag: string;
    editMediaUri: Windows$Foundation$Uri;
    editUri: Windows$Foundation$Uri;
    id: string;
    itemUri: Windows$Foundation$Uri;
    lastUpdatedTime: Date;
    links: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationLink>;
    publishedDate: Date;
    rights: Windows$Web$Syndication$ISyndicationText;
    source: Windows$Web$Syndication$SyndicationFeed;
    summary: Windows$Web$Syndication$ISyndicationText;
    title: Windows$Web$Syndication$ISyndicationText;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    load(item: string): void;
    loadFromXml(itemDocument: Windows$Data$Xml$Dom$XmlDocument): void;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export interface Windows$Web$Syndication$ISyndicationItemFactory {
    createSyndicationItem(
      title: string,
      content: Windows$Web$Syndication$SyndicationContent,
      uri: Windows$Foundation$Uri
    ): Windows$Web$Syndication$SyndicationItem;
  }

  declare export type Windows$Web$Syndication$ISyndicationFeed = {
    authors: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationPerson>,
    categories: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationCategory>,
    contributors: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationPerson>,
    firstUri: Windows$Foundation$Uri,
    generator: Windows$Web$Syndication$SyndicationGenerator,
    iconUri: Windows$Foundation$Uri,
    id: string,
    imageUri: Windows$Foundation$Uri,
    items: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationItem>,
    lastUpdatedTime: Date,
    lastUri: Windows$Foundation$Uri,
    links: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationLink>,
    nextUri: Windows$Foundation$Uri,
    previousUri: Windows$Foundation$Uri,
    rights: Windows$Web$Syndication$ISyndicationText,
    sourceFormat: $Values<typeof Windows$Web$Syndication$SyndicationFormat>,
    subtitle: Windows$Web$Syndication$ISyndicationText,
    title: Windows$Web$Syndication$ISyndicationText,
    load(feed: string): void,
    loadFromXml(feedDocument: Windows$Data$Xml$Dom$XmlDocument): void
  } & Windows$Web$Syndication$ISyndicationNode;

  declare export interface Windows$Web$Syndication$ISyndicationFeedFactory {
    createSyndicationFeed(
      title: string,
      subtitle: string,
      uri: Windows$Foundation$Uri
    ): Windows$Web$Syndication$SyndicationFeed;
  }

  declare export interface Windows$Web$Syndication$ISyndicationClient {
    bypassCacheOnRetrieve: boolean;
    maxResponseBufferSize: number;
    proxyCredential: Windows$Security$Credentials$PasswordCredential;
    serverCredential: Windows$Security$Credentials$PasswordCredential;
    timeout: number;
    setRequestHeader(name: string, value: string): void;
    retrieveFeedAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Web$Syndication$SyndicationFeed,
      Windows$Web$Syndication$RetrievalProgress
    >;
  }

  declare export class Windows$Web$Syndication$SyndicationClient
    mixins Windows$Web$Syndication$ISyndicationClient {
    constructor(
      serverCredential: Windows$Security$Credentials$PasswordCredential
    ): this;
    constructor(): this;
    bypassCacheOnRetrieve: boolean;
    maxResponseBufferSize: number;
    proxyCredential: Windows$Security$Credentials$PasswordCredential;
    serverCredential: Windows$Security$Credentials$PasswordCredential;
    timeout: number;
    setRequestHeader(name: string, value: string): void;
    retrieveFeedAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Web$Syndication$SyndicationFeed,
      Windows$Web$Syndication$RetrievalProgress
    >;
  }

  declare export interface Windows$Web$Syndication$ISyndicationClientFactory {
    createSyndicationClient(
      serverCredential: Windows$Security$Credentials$PasswordCredential
    ): Windows$Web$Syndication$SyndicationClient;
  }

  declare export interface Windows$Web$Syndication$ISyndicationErrorStatics {
    getStatus(
      hresult: number
    ): $Values<typeof Windows$Web$Syndication$SyndicationErrorStatus>;
  }

  declare export class Windows$Web$Syndication$SyndicationError {
    static getStatus(
      hresult: number
    ): $Values<typeof Windows$Web$Syndication$SyndicationErrorStatus>;
  }

  declare var npm$namespace$Windows$Web$AtomPub: {
    ResourceCollection: typeof Windows$Web$AtomPub$ResourceCollection,
    Workspace: typeof Windows$Web$AtomPub$Workspace,
    ServiceDocument: typeof Windows$Web$AtomPub$ServiceDocument,
    AtomPubClient: typeof Windows$Web$AtomPub$AtomPubClient
  };
  declare export type Windows$Web$AtomPub$IResourceCollection = {
    accepts: Windows$Foundation$Collections$IVectorView<string>,
    categories: Windows$Foundation$Collections$IVectorView<Windows$Web$Syndication$SyndicationCategory>,
    title: Windows$Web$Syndication$ISyndicationText,
    uri: Windows$Foundation$Uri
  } & Windows$Web$Syndication$ISyndicationNode;

  declare export class Windows$Web$AtomPub$ResourceCollection
    mixins Windows$Web$AtomPub$IResourceCollection,
      Windows$Web$Syndication$ISyndicationNode {
    accepts: Windows$Foundation$Collections$IVectorView<string>;
    categories: Windows$Foundation$Collections$IVectorView<Windows$Web$Syndication$SyndicationCategory>;
    title: Windows$Web$Syndication$ISyndicationText;
    uri: Windows$Foundation$Uri;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export type Windows$Web$AtomPub$IWorkspace = {
    collections: Windows$Foundation$Collections$IVectorView<Windows$Web$AtomPub$ResourceCollection>,
    title: Windows$Web$Syndication$ISyndicationText
  } & Windows$Web$Syndication$ISyndicationNode;

  declare export class Windows$Web$AtomPub$Workspace
    mixins Windows$Web$AtomPub$IWorkspace,
      Windows$Web$Syndication$ISyndicationNode {
    collections: Windows$Foundation$Collections$IVectorView<Windows$Web$AtomPub$ResourceCollection>;
    title: Windows$Web$Syndication$ISyndicationText;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export type Windows$Web$AtomPub$IServiceDocument = {
    workspaces: Windows$Foundation$Collections$IVectorView<Windows$Web$AtomPub$Workspace>
  } & Windows$Web$Syndication$ISyndicationNode;

  declare export class Windows$Web$AtomPub$ServiceDocument
    mixins Windows$Web$AtomPub$IServiceDocument,
      Windows$Web$Syndication$ISyndicationNode {
    workspaces: Windows$Foundation$Collections$IVectorView<Windows$Web$AtomPub$Workspace>;
    attributeExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$SyndicationAttribute>;
    baseUri: Windows$Foundation$Uri;
    elementExtensions: Windows$Foundation$Collections$IVector<Windows$Web$Syndication$ISyndicationNode>;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    getXmlDocument(
      format: $Values<typeof Windows$Web$Syndication$SyndicationFormat>
    ): Windows$Data$Xml$Dom$XmlDocument;
  }

  declare export type Windows$Web$AtomPub$IAtomPubClient = {
    retrieveServiceDocumentAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Web$AtomPub$ServiceDocument,
      Windows$Web$Syndication$RetrievalProgress
    >,
    retrieveMediaResourceAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IInputStream,
      Windows$Web$Syndication$RetrievalProgress
    >,
    retrieveResourceAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Web$Syndication$SyndicationItem,
      Windows$Web$Syndication$RetrievalProgress
    >,
    createResourceAsync(
      uri: Windows$Foundation$Uri,
      description: string,
      item: Windows$Web$Syndication$SyndicationItem
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Web$Syndication$SyndicationItem,
      Windows$Web$Syndication$TransferProgress
    >,
    createMediaResourceAsync(
      uri: Windows$Foundation$Uri,
      mediaType: string,
      description: string,
      mediaStream: Windows$Storage$Streams$IInputStream
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Web$Syndication$SyndicationItem,
      Windows$Web$Syndication$TransferProgress
    >,
    updateMediaResourceAsync(
      uri: Windows$Foundation$Uri,
      mediaType: string,
      mediaStream: Windows$Storage$Streams$IInputStream
    ): Windows$Foundation$IAsyncActionWithProgress<Windows$Web$Syndication$TransferProgress>,
    updateResourceAsync(
      uri: Windows$Foundation$Uri,
      item: Windows$Web$Syndication$SyndicationItem
    ): Windows$Foundation$IAsyncActionWithProgress<Windows$Web$Syndication$TransferProgress>,
    updateResourceItemAsync(
      item: Windows$Web$Syndication$SyndicationItem
    ): Windows$Foundation$IAsyncActionWithProgress<Windows$Web$Syndication$TransferProgress>,
    deleteResourceAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncActionWithProgress<Windows$Web$Syndication$TransferProgress>,
    deleteResourceItemAsync(
      item: Windows$Web$Syndication$SyndicationItem
    ): Windows$Foundation$IAsyncActionWithProgress<Windows$Web$Syndication$TransferProgress>,
    cancelAsyncOperations(): void
  } & Windows$Web$Syndication$ISyndicationClient;

  declare export class Windows$Web$AtomPub$AtomPubClient
    mixins Windows$Web$AtomPub$IAtomPubClient,
      Windows$Web$Syndication$ISyndicationClient {
    constructor(
      serverCredential: Windows$Security$Credentials$PasswordCredential
    ): this;
    constructor(): this;
    bypassCacheOnRetrieve: boolean;
    maxResponseBufferSize: number;
    proxyCredential: Windows$Security$Credentials$PasswordCredential;
    serverCredential: Windows$Security$Credentials$PasswordCredential;
    timeout: number;
    retrieveServiceDocumentAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Web$AtomPub$ServiceDocument,
      Windows$Web$Syndication$RetrievalProgress
    >;
    retrieveMediaResourceAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Storage$Streams$IInputStream,
      Windows$Web$Syndication$RetrievalProgress
    >;
    retrieveResourceAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Web$Syndication$SyndicationItem,
      Windows$Web$Syndication$RetrievalProgress
    >;
    createResourceAsync(
      uri: Windows$Foundation$Uri,
      description: string,
      item: Windows$Web$Syndication$SyndicationItem
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Web$Syndication$SyndicationItem,
      Windows$Web$Syndication$TransferProgress
    >;
    createMediaResourceAsync(
      uri: Windows$Foundation$Uri,
      mediaType: string,
      description: string,
      mediaStream: Windows$Storage$Streams$IInputStream
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Web$Syndication$SyndicationItem,
      Windows$Web$Syndication$TransferProgress
    >;
    updateMediaResourceAsync(
      uri: Windows$Foundation$Uri,
      mediaType: string,
      mediaStream: Windows$Storage$Streams$IInputStream
    ): Windows$Foundation$IAsyncActionWithProgress<Windows$Web$Syndication$TransferProgress>;
    updateResourceAsync(
      uri: Windows$Foundation$Uri,
      item: Windows$Web$Syndication$SyndicationItem
    ): Windows$Foundation$IAsyncActionWithProgress<Windows$Web$Syndication$TransferProgress>;
    updateResourceItemAsync(
      item: Windows$Web$Syndication$SyndicationItem
    ): Windows$Foundation$IAsyncActionWithProgress<Windows$Web$Syndication$TransferProgress>;
    deleteResourceAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncActionWithProgress<Windows$Web$Syndication$TransferProgress>;
    deleteResourceItemAsync(
      item: Windows$Web$Syndication$SyndicationItem
    ): Windows$Foundation$IAsyncActionWithProgress<Windows$Web$Syndication$TransferProgress>;
    cancelAsyncOperations(): void;
    setRequestHeader(name: string, value: string): void;
    retrieveFeedAsync(
      uri: Windows$Foundation$Uri
    ): Windows$Foundation$IAsyncOperationWithProgress<
      Windows$Web$Syndication$SyndicationFeed,
      Windows$Web$Syndication$RetrievalProgress
    >;
  }

  declare export interface Windows$Web$AtomPub$IAtomPubClientFactory {
    createAtomPubClientWithCredentials(
      serverCredential: Windows$Security$Credentials$PasswordCredential
    ): Windows$Web$AtomPub$AtomPubClient;
  }
}
