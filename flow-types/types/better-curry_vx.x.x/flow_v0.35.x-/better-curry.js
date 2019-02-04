declare var BetterCurryModule$BetterCurry: BetterCurryModule$BetterCurryModule$BetterCurry;declare export interface BetterCurryModule$DelegateOptions {
as?: string,
len?: number,
args?: any[],
name?: string
} 

declare export class BetterCurryModule$Delegate<T>  {
proto: T;
target: string;
methods: any[];
getters: any[];
setters: any[];
all: (skip?: string[]) => void;
method: (
name: string | BetterCurryModule$DelegateOptions) => BetterCurryModule$Delegate<T>;
getter: (
name: string | BetterCurryModule$DelegateOptions) => BetterCurryModule$Delegate<T>;
setter: (
name: string | BetterCurryModule$DelegateOptions) => BetterCurryModule$Delegate<T>;
access: (
name: string | BetterCurryModule$DelegateOptions) => BetterCurryModule$Delegate<T>;
revoke: (name: string) => BetterCurryModule$Delegate<T>;
constructor(proto: T, target: string): this
}

declare export type BetterCurryModule$OriginalFunctionReminder<T> = {
__length: number
} & Function


declare export interface BetterCurryModule$BetterCurry {
predefine: <T: Function>(
fn: T,
args: any[],
context?: Object,
len?: number,
checkArguments?: boolean) => BetterCurryModule$OriginalFunctionReminder<T>,
wrap: <T: Function>(
fn: T,
context?: Object,
len?: number,
checkArguments?: boolean) => BetterCurryModule$OriginalFunctionReminder<T>,
flatten: (...args: Array<Array<any> | any>) => any[],
delegate: <T>(proto: T, target: string) => BetterCurryModule$Delegate<T>,
MAX_OPTIMIZED: number
} declare module 'better-curry' {
        declare var bc: BetterCurryModule$BetterCurryModule$BetterCurry;
	declare module.exports: typeof bc

    }
