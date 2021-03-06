declare module "doublearray" {
  declare var npm$namespace$doublearray: {
    builder: typeof doublearray$builder,
    load: typeof doublearray$load
  };
  declare interface doublearray$KeyValue {
    k: string;
    v: number;
  }

  declare interface doublearray$BaseAndCheck {
    getBaseBuffer(): any;
    getCheckBuffer(): any;
    loadBaseBuffer(base_buffer: Int8Array): doublearray$BaseAndCheck;
    loadBaseBuffer(base_buffer: Int16Array): doublearray$BaseAndCheck;
    loadBaseBuffer(base_buffer: Int32Array): doublearray$BaseAndCheck;
    loadBaseBuffer(base_buffer: Uint8Array): doublearray$BaseAndCheck;
    loadBaseBuffer(base_buffer: Uint16Array): doublearray$BaseAndCheck;
    loadBaseBuffer(base_buffer: Uint32Array): doublearray$BaseAndCheck;
    loadCheckBuffer(check_buffer: Int8Array): doublearray$BaseAndCheck;
    loadCheckBuffer(check_buffer: Int16Array): doublearray$BaseAndCheck;
    loadCheckBuffer(check_buffer: Int32Array): doublearray$BaseAndCheck;
    loadCheckBuffer(check_buffer: Uint8Array): doublearray$BaseAndCheck;
    loadCheckBuffer(check_buffer: Uint16Array): doublearray$BaseAndCheck;
    loadCheckBuffer(check_buffer: Uint32Array): doublearray$BaseAndCheck;
    size(): number;
    getBase(): number;
    getCheck(): number;
    setBase(index: number, base_value: number): void;
    setCheck(index: number, check_value: number): void;
    setFirstUnusedNode(index: number): void;
    getFirstUnusedNode(): number;
    shrink(): void;
    calc(): {
      all: number,
      unused: number,
      efficiency: number
    };
    dump(): string;
  }

  declare interface doublearray$DoubleArrayBuilder {
    bc: doublearray$BaseAndCheck;
    keys: doublearray$KeyValue[];
    append(key: string, record: number): doublearray$DoubleArrayBuilder;
    build(
      keys?: doublearray$KeyValue[],
      sorted?: boolean
    ): doublearray$DoubleArray;
    getChildrenInfo(
      position: number,
      start: number,
      length: number
    ): Int32Array;
    setBC(parent_id: number, children_info: Int32Array, _base: number): void;
    findAllocatableBase(children_info: Int32Array): number;
    isUnusedNode(index: number): boolean;
  }

  declare interface doublearray$DoubleArray {
    bc: doublearray$BaseAndCheck;
    contain(key: string): boolean;
    lookup(key: string): number;
    commonPrefixSearch(key: string): doublearray$KeyValue;
    traverse(parent: number, code: number): number;
    size(): number;
    calc(): {
      all: number,
      unused: number,
      efficiency: number
    };
    dump(): string;
  }

  declare export function doublearray$builder(
    initial_size?: number
  ): doublearray$DoubleArrayBuilder;

  declare export function doublearray$load(
    base_buffer: Int8Array,
    check_buffer: Int8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int8Array,
    check_buffer: Int16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int8Array,
    check_buffer: Int32Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int8Array,
    check_buffer: Uint8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int8Array,
    check_buffer: Uint16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int8Array,
    check_buffer: Uint32Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int16Array,
    check_buffer: Int8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int16Array,
    check_buffer: Int16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int16Array,
    check_buffer: Int32Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int16Array,
    check_buffer: Uint8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int16Array,
    check_buffer: Uint16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int16Array,
    check_buffer: Uint32Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int32Array,
    check_buffer: Int8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int32Array,
    check_buffer: Int16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int32Array,
    check_buffer: Int32Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int32Array,
    check_buffer: Uint8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int32Array,
    check_buffer: Uint16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Int32Array,
    check_buffer: Uint32Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint8Array,
    check_buffer: Int8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint8Array,
    check_buffer: Int16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint8Array,
    check_buffer: Int32Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint8Array,
    check_buffer: Uint8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint8Array,
    check_buffer: Uint16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint8Array,
    check_buffer: Uint32Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint16Array,
    check_buffer: Int8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint16Array,
    check_buffer: Int16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint16Array,
    check_buffer: Int32Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint16Array,
    check_buffer: Uint8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint16Array,
    check_buffer: Uint16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint16Array,
    check_buffer: Uint32Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint32Array,
    check_buffer: Int8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint32Array,
    check_buffer: Int16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint32Array,
    check_buffer: Int32Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint32Array,
    check_buffer: Uint8Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint32Array,
    check_buffer: Uint16Array
  ): doublearray$DoubleArray;

  declare export function doublearray$load(
    base_buffer: Uint32Array,
    check_buffer: Uint32Array
  ): doublearray$DoubleArray;
}
