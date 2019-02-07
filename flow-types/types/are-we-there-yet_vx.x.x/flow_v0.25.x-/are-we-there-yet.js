declare module "are-we-there-yet" {
  import type { EventEmitter } from "events";

  import type { Transform, TransformOptions } from "stream";

  declare export type TrackerObject = Tracker | TrackerGroup | TrackerStream;
  declare export type TrackerEventListener = (
    name: string,
    completed: number,
    tracker: TrackerObject
  ) => void;
  declare export type GenericEventListener = (...args: any[]) => void;
  declare export class TrackerBase mixins EventEmitter {
    constructor(name?: string): this;
    addListener(event: "change", listener: TrackerEventListener): this;
    addListener(event: string, listener: GenericEventListener): this;
    on(event: "change", listener: TrackerEventListener): this;
    on(event: string, listener: GenericEventListener): this;
    once(event: "change", listener: TrackerEventListener): this;
    once(event: string, listener: GenericEventListener): this;
    prependListener(event: "change", listener: TrackerEventListener): this;
    prependListener(event: string, listener: GenericEventListener): this;
    prependOnceListener(event: "change", listener: TrackerEventListener): this;
    prependOnceListener(event: string, listener: GenericEventListener): this;
    removeListener(event: "change", listener: TrackerEventListener): this;
    removeListener(event: string, listener: GenericEventListener): this;
  }
  declare export class Tracker mixins TrackerBase {
    constructor(name?: string, todo?: number): this;
    addWork(work: number): void;
    completeWork(completed: number): void;
    completed(): number;
    finish(): void;
  }
  declare export class TrackerGroup mixins TrackerBase {
    constructor(name?: string): this;
    addUnit(tracker: TrackerBase, weight?: number): TrackerObject;
    completed(): number;
    debug(): string;
    finish(): void;
    newGroup(name?: string, weight?: number): TrackerGroup;
    newItem(name?: string, todo?: number, weight?: number): Tracker;
    newStream(name?: string, todo?: number, weight?: number): TrackerStream;
  }
  declare export class TrackerStream mixins Transform {
    constructor(name?: string, size?: number, options?: TransformOptions): this;
    addWork(work: number): void;
    completed(): number;
    addListener(event: "change", listener: TrackerEventListener): this;
    addListener(
      event: "data",
      listener: (chunk: Buffer | string) => void
    ): this;
    addListener(
      event: "readable" | "end" | "close",
      listener: () => void
    ): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: string, listener: GenericEventListener): this;
    on(event: "change", listener: TrackerEventListener): this;
    on(event: "data", listener: (chunk: Buffer | string) => void): this;
    on(event: "readable" | "end" | "close", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: string, listener: GenericEventListener): this;
    once(event: "change", listener: TrackerEventListener): this;
    once(event: "data", listener: (chunk: Buffer | string) => void): this;
    once(event: "readable" | "end" | "close", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: string, listener: GenericEventListener): this;
    prependListener(event: "change", listener: TrackerEventListener): this;
    prependListener(
      event: "data",
      listener: (chunk: Buffer | string) => void
    ): this;
    prependListener(
      event: "readable" | "end" | "close",
      listener: () => void
    ): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: string, listener: GenericEventListener): this;
    prependOnceListener(event: "change", listener: TrackerEventListener): this;
    prependOnceListener(
      event: "data",
      listener: (chunk: Buffer | string) => void
    ): this;
    prependOnceListener(
      event: "readable" | "end" | "close",
      listener: () => void
    ): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: string, listener: GenericEventListener): this;
    removeListener(event: "change", listener: TrackerEventListener): this;
    removeListener(
      event: "data",
      listener: (chunk: Buffer | string) => void
    ): this;
    removeListener(
      event: "readable" | "end" | "close",
      listener: () => void
    ): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: string, listener: GenericEventListener): this;
  }
}
