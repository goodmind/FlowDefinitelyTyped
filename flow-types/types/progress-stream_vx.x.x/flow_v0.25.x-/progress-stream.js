declare module "progress-stream" {
  import typeof * as stream from "stream";

  declare export default typeof progress_stream;

  declare function progress_stream(
    options: progress_stream$Options,
    progressListener: progress_stream$ProgressListener
  ): progress_stream$ProgressStream;

  declare function progress_stream(
    optionsOrProgressListener?:
      | progress_stream$Options
      | progress_stream$ProgressListener
  ): progress_stream$ProgressStream;

  declare interface progress_stream$Options {
    time?: number;
    speed?: number;
    length?: number;
    drain?: boolean;
    transferred?: number;
  }

  declare type progress_stream$ProgressListener = (
    progress: progress_stream$Progress
  ) => void;

  declare type progress_stream$ProgressStream = {
    on(event: "progress", listener: progress_stream$ProgressListener): this,
    on(event: "length", listener: (length: number) => void): this,
    once(event: "progress", listener: progress_stream$ProgressListener): this,
    once(event: "length", listener: (length: number) => void): this,
    setLength(length: number): void,
    progress(): progress_stream$Progress,
    on(event: "close", listener: () => void): this,
    on(event: "data", listener: (chunk: any) => void): this,
    on(event: "end", listener: () => void): this,
    on(event: "readable", listener: () => void): this,
    on(event: "error", listener: (err: Error) => void): this,
    once(event: "close", listener: () => void): this,
    once(event: "data", listener: (chunk: any) => void): this,
    once(event: "end", listener: () => void): this,
    once(event: "readable", listener: () => void): this,
    once(event: "error", listener: (err: Error) => void): this,
    on(event: "drain", listener: () => void): this,
    on(event: "finish", listener: () => void): this,
    on(event: "pipe", listener: (src: stream.Readable) => void): this,
    on(event: "unpipe", listener: (src: stream.Readable) => void): this,
    once(event: "drain", listener: () => void): this,
    once(event: "finish", listener: () => void): this,
    once(event: "pipe", listener: (src: stream.Readable) => void): this,
    once(event: "unpipe", listener: (src: stream.Readable) => void): this,
    on(event: string | Symbol, listener: (...args: any[]) => void): this,
    once(event: string | Symbol, listener: (...args: any[]) => void): this
  } & stream.Transform;

  declare interface progress_stream$Progress {
    percentage: number;
    transferred: number;
    length: number;
    remaining: number;
    eta: number;
    runtime: number;
    delta: number;
    speed: number;
  }
}
