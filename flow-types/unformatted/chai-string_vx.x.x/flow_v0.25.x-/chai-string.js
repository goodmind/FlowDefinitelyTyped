declare module 'chai-string' {
        declare module 'global' {
        declare type Chai$Assertion = {
startsWith(expected: string, message?: string): Chai$Assertion,
startWith(expected: string, message?: string): Chai$Assertion,
endsWith(expected: string, message?: string): Chai$Assertion,
endWith(expected: string, message?: string): Chai$Assertion,
equalIgnoreCase(expected: string, message?: string): Chai$Assertion,
equalIgnoreSpaces(expected: string, message?: string): Chai$Assertion,
containIgnoreCase(expected: string, msg?: string): Chai$Assertion,
containIgnoreSpaces(expected: string, msg?: string): Chai$Assertion,
singleLine(message?: string): Chai$Assertion,
reverseOf(message?: string): Chai$Assertion,
palindrome(message?: string): Chai$Assertion,
entriesCount(substr: string, expected: number, message?: string): Chai$Assertion,
indexOf(str: string, substr: string, index: number, msg?: string): Chai$Assertion
} & LanguageChains & NumericComparison & TypeComparison


declare interface Chai$Assert {
startsWith(val: string, exp: string, msg?: string): void,
notStartsWith(val: string, exp: string, msg?: string): void,
endsWith(val: string, exp: string, msg?: string): void,
notEndsWith(val: string, exp: string, msg?: string): void,
equalIgnoreCase(val: string, exp: string, msg?: string): void,
notEqualIgnoreCase(val: string, exp: string, msg?: string): void,
equalIgnoreSpaces(val: string, exp: string, msg?: string): void,
notEqualIgnoreSpaces(val: string, exp: string, msg?: string): void,
containIgnoreCase(val: string, exp: string, msg?: string): void,
notContainIgnoreCase(val: string, exp: string, msg?: string): void,
containIgnoreSpaces(val: string, exp: string, msg?: string): void,
notContainIgnoreSpaces(val: string, exp: string, msg?: string): void,
singleLine(val: string, msg?: string): void,
notSingleLine(val: string, msg?: string): void,
reverseOf(val: string, exp: string, msg?: string): void,
notReverseOf(val: string, exp: string, msg?: string): void,
palindrome(val: string, msg?: string): void,
notPalindrome(val: string, msg?: string): void,
entriesCount(str: string, substr: string, count: number, msg?: string): void,
indexOf(str: string, substr: string, index: number, msg?: string): void
} 
    }

	declare function chaiString(chai: any, utils: any): void

	
	declare module.exports: typeof chaiString

    }
