declare module "combined-stream" {
  import type { Stream } from "stream";

  declare type Appendable =
    | NodeJS.ReadableStream
    | NodeJS.WritableStream
    | Buffer
    | string
    | NextFunction;
  declare type NextFunction = (next: (stream: Appendable) => any) => any;
  declare interface Options {
    maxDataSize?: number;
    pauseStreams?: boolean;
  }
  declare class CombinedStream mixins Stream, Options {
    writable: boolean;
    readable: boolean;
    dataSize: number;
    maxDataSize: number;
    pauseStreams: boolean;
    append(stream: Appendable): this;
    write(data: any): void;
    pause(): void;
    resume(): void;
    end(): void;
    destroy(): void;
    _released: boolean;
    _streams: Array<Stream | Buffer | string>;
    _currentStream: Stream | Buffer | string | null;
    _getNext(): void;
    _pipeNext(): void;
    _handleErrors(stream: NodeJS.EventEmitter): void;
    _reset(): void;
    _checkDataSize(): void;
    _updateDataSize(): void;
    _emitError(error: Error): void;
    on(event: "close" | "end" | "resume" | "pause", cb: () => void): this;
    on(event: "error", cb: (err: Error) => void): this;
    on(event: "data", cb: (data: any) => void): this;
    once(event: "close" | "end" | "resume" | "pause", cb: () => void): this;
    once(event: "error", cb: (err: Error) => void): this;
    once(event: "data", cb: (data: any) => void): this;
    static create(options?: Options): CombinedStream;
    static isStreamLike(stream: any): boolean;
  }
  declare module.exports: typeof CombinedStream;
}
