declare module "spark-md5" {
  declare interface State {
    buff: Uint8Array;
    length: number;
    hash: number[];
  }
  declare type ArrayBufferCopy = {} & SparkMD5$ArrayBuffer;

  declare class SparkMD5 {
    constructor(): this;
    append(str: string): SparkMD5;
    appendBinary(contents: string): SparkMD5;
    end(raw?: boolean): string;
    reset(): SparkMD5;
    getState(): State;
    setState(state: State): State;
    destroy(): void;
    static hash(str: string, raw?: boolean): string;
    static hashBinary(content: string, raw?: boolean): string;
  }
  declare class SparkMD5$ArrayBuffer {
    constructor(): this;
    append(str: ArrayBufferCopy): SparkMD5$ArrayBuffer;
    end(raw?: boolean): string;
    reset(): SparkMD5$ArrayBuffer;
    getState(): State;
    setState(state: State): State;
    destroy(): void;
    static hash(arr: ArrayBufferCopy, raw?: boolean): string;
  }
  declare module.exports: typeof SparkMD5;
}
