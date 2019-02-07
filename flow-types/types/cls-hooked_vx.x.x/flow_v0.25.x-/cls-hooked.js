declare module "cls-hooked" {
  import type { EventEmitter } from "events";

  declare export interface Namespace {
    active: any;
    set<T>(key: string, value: T): T;
    get(key: string): any;
    run(fn: (...args: any[]) => void): void;
    runAndReturn<T>(fn: (...args: any[]) => T): T;
    runPromise<T>(fn: (...args: any[]) => Promise<T>): Promise<T>;
    bind<F: Function>(fn: F, context?: any): F;
    bindEmitter(emitter: EventEmitter): void;
    createContext(): any;
  }
  declare export function createNamespace(name: string): Namespace;

  declare export function getNamespace(name: string): Namespace;

  declare export function destroyNamespace(name: string): void;

  declare export function reset(): void;
}
