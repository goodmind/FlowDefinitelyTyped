declare module "line-by-line" {
  import type { EventEmitter } from "events";

  declare module.exports: typeof LineByLineReader;

  declare type LineByLineReader = {
    /**
     * subscribe to an event emitted by reader
     * @param listener A void function with one param
     */
    on(event: LineByLineReaderEvent, listener: (value: any) => void): this,

    /**
     * Pauses the reader
     */
    pause(): void,

    /**
     * Resumes the reader
     */
    resume(): void,

    /**
     * Finishes the reader
     */
    end(): void,

    /**
     * Closes the file stream
     */
    close(): void
  } & EventEmitter;

  declare interface LineByLineReaderOptions {
    encoding?: string;
    skipEmptyLines?: boolean;
    start?: number;
  }
  declare interface LineByLineReaderConstructor {
    /**
     * Constructs a new LineByLineReader object
     * @param filename filename to read
     * @param options Optional. {@link LineByLineReaderOptions}
     */
    new(filename: string, options?: LineByLineReaderOptions): LineByLineReader;
    +prototype: LineByLineReader;
  }
  declare type LineByLineReaderEvent = "line" | "end" | "error";
  declare var LineByLineReader: LineByLineReaderConstructor;
}
