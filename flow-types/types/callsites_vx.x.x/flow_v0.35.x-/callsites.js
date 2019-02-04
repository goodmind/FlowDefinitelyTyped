declare module 'callsites' {
        declare module.exports: typeof callsites

	declare function callsites(): callsites$callsites$CallSite[]

	declare interface callsites$CallSite {
getThis(): {[key: string]: any} | void,
getTypeName(): string,
getFunction(): Function | void,
getFunctionName(): string,
getMethodName(): string | null,
getFileName(): string | void,
getLineNumber(): number,
getColumnNumber(): number,
getEvalOrigin(): callsites$CallSite | string,
isToplevel(): boolean,
isEval(): boolean,
isNative(): boolean,
isConstructor(): boolean
} 
    }
