declare module "event-stream" {
  import typeof * as stream from "stream";

  declare type MapStream = {
    writable: boolean,
    readable: boolean,
    destroy: () => void,
    end: any,
    pause: () => void,
    resume: () => void,
    write: any
  } & stream.Stream;

  /**
   * Create a through stream from an asynchronous function
   * @param asyncFunction
   */
  declare export function map(asyncFunction: Function): MapStream;

  /**
   * Same as map, but the callback is called synchronously. Based on es.through
   * @param syncFunction
   */
  declare export function mapSync(syncFunction: Function): MapStream;

  /**
   * Break up a stream and reassemble it so that each line is a chunk. matcher may be a String, or a RegExp
   * @param matcher
   */
  declare export function split(matcher?: string | RegExp): MapStream;

  /**
   * Create a through stream that emits separator between each chunk, just like Array#join
   * @param separator
   */
  declare export function join(separator: string): MapStream;

  /**
   * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
   * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
   * Counts how many streams were passed to it and emits end only when all streams emitted end.
   * @param stream
   */
  declare export function concat(...stream: MapStream[]): MapStream;

  /**
   * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
   * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
   * Counts how many streams were passed to it and emits end only when all streams emitted end.
   * @param stream
   */
  declare export function concat(streamArray: MapStream[]): MapStream;

  /**
   * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
   * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
   * Counts how many streams were passed to it and emits end only when all streams emitted end.
   * @param stream
   */
  declare export function merge(...stream: MapStream[]): MapStream;

  /**
   * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
   * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
   * Counts how many streams were passed to it and emits end only when all streams emitted end.
   * @param stream
   */
  declare export function merge(streamArray: MapStream[]): MapStream;

  /**
   * Replace all occurrences of from with to
   * @param from
   * @param to
   */
  declare export function replace(
    from: string | RegExp,
    to: string | RegExp
  ): MapStream;

  /**
   * Convenience function for parsing JSON chunks. For newline separated JSON, use with es.split.
   * By default it logs parsing errors by console.error; for another behaviour, transforms created by es.parse({error: true})
   * will emit error events for exceptions thrown from JSON.parse, unmodified.
   */
  declare export function parse(): any;

  /**
   * convert javascript objects into lines of text. The text will have whitespace escaped and have a \n appended, so it will be compatible with es.parse
   */
  declare export function stringify(): MapStream;

  /**
   * create a readable stream (that respects pause) from an async function.
   * @param asyncFunction
   */
  declare export function readable(asyncFunction: Function): MapStream;

  /**
   * Create a readable stream from an Array.
   * @param array
   */
  declare export function readArray(array: any[]): MapStream;

  /**
   * create a writeable stream from a callback
   * @param callback
   */
  declare export function writeArray(callback: Function): MapStream;

  /**
   * A stream that buffers all chunks when paused
   */
  declare export function pause(): MapStream | void;

  /**
   * Takes a writable stream and a readable stream and makes them appear as a readable writable stream.
   * @param writeStream
   * @param readStream
   */
  declare export function duplex(
    writeStream: stream.Writable,
    readStream: stream.Readable
  ): MapStream;

  /**
   * Create a through stream from a child process
   * @param child_process
   */
  declare export function child(child_process: any): MapStream;

  /**
   * waits for stream to emit 'end'. joins chunks of a stream into a single string or buffer.
   * Takes an optional callback, which will be passed the complete string/buffer when it receives the 'end' event.
   * @param callback
   */
  declare export function wait(callback: Function): MapStream;
}
