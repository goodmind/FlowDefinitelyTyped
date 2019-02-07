declare module "mochaccino" {
  import typeof * as Sinon from "sinon";

  declare export interface Expect {
    not: Expect;
    toBe(arg: any): void;
    toContain(arg: any): void;
    toEqual(arg: any): void;
    toHaveBeenCalled(): void;
    toHaveBeenCalledWith(...arg: any[]): void;
    toHaveBeenCalledTimes(callCount: number): void;
    toBeDefined(): void;
    toBeUndefined(): void;
    toBeNull(): void;
    toBeTruthy(): void;
    toBeFalsy(): void;
    toBeLessThan(other: number): void;
    toBeGreaterThan(other: number): void;
    toThrow(): void;
    toThrowError(errType: any): void;
    toMatch(matchExpression: any): void;
  }
  declare export interface SpyProxy {
    and: SpyProxy;
    spyProxy: true;
    getSubject: () => Sinon.SinonStub;
    callThrough: () => void;
    returnValue: (obj: any) => void;
    callFake: (fake: (...args: any[]) => any) => void;
  }
  declare export interface Dom {
    exposedProperties: ["window", "navigator", "document"];
    create: () => void;
    destroy: () => void;
    clear: () => void;
  }
  declare export function expect(value: any): Expect;

  declare export function spy(...config: any[]): (...args: any[]) => SpyProxy;

  declare export var dom: Dom;
}
