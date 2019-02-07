declare module "hasher" {
  import typeof * as signal from "signals";

  declare export interface HasherJs$HasherStatic {
    appendHash: string;
    changed: signal.Signal;
    initialized: signal.Signal;
    prependHash: string;
    separator: string;
    stopped: signal.Signal;
    VERSION: string;
    dispose(): void;
    getBaseURL(): string;
    getHash(): string;
    getHashAsArray(): string[];
    getURL(): string;
    init(): void;
    isActive(): boolean;
    replaceHash(...path: string[]): void;
    setHash(...path: string[]): void;
    stop(): void;
    toString(): string;
  }
  declare var hasher: HasherJs$HasherJs$HasherStatic;
  declare module.exports: typeof hasher;
}
