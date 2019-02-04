declare module 'expectations' {
        declare var expect: Expectations$Expectations$IExpectations;
	declare interface Expectations$IExpectations {
(value: any): Expectations$Expect,
addAssertion(name: string, matcher: Function): void
} 

declare interface Expectations$IAssertions {
pass(message?: string): any,
fail(message: string): any
} 

declare class Expectations$Expect  {
value: any;
assertions: Expectations$IAssertions;
expr: any;
parent: Expectations$Expect;
not: Expectations$Expect;
constructor(value: any, assertions?: Expectations$IAssertions, expr?: any, parent?: Expectations$Expect): this;
generateMessage(value: any, expr: any, toDo: string, otherVal?: any): string;
toEqual(val: any): any;
toNotEqual(val: any): any;
toBe(val: any): any;
toBeTruthy(): any;
toBeFalsey(): any;
toBeFalsy(): any;
toBeGreaterThan(val: any): any;
toBeLessThan(val: any): any;
toContain(val: any): any;
toMatch(val: any): any;
toBeDefined(): any;
toBeUndefined(): any;
toBeNull(): any;
toThrow(): any;
pass(): any;
fail(why?: string, what?: any): any
}
    }
