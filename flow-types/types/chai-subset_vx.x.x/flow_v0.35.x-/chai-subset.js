declare module 'chai-subset' {
        declare module 'global' {
        declare interface Chai$Assertion {
containSubset(expected: any): Chai$Assertion
} 

declare interface Chai$Assert {
containSubset(val: any, exp: any, msg?: string): void
} 
    }

	declare function chaiSubset(chai: any, utils: any): void

	declare module.exports: typeof chaiSubset

    }
