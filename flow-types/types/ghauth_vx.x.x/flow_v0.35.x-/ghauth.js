declare module 'ghauth' {
        declare function ghauth(
authOptions: ghauth$ghauth$AuthOptions,
callback: (err: Error, tokenData: ghauth$ghauth$TokenData) => void): void

	declare interface ghauth$AuthOptions {
configName: string,

/**
 * @default false
 */
noSave?: boolean,

/**
 * @default "https://api.github.com/authorizations"
 */
authUrl?: string,

/**
 * @default "GitHub"
 */
promptName?: string,

/**
 * @default []
 */
scopes?: $ReadOnlyArray<string>,

/**
 * @default "Node.js command-line app with ghauth"
 */
note?: string,

/**
 * @default "Magic Node.js application that does magic things with ghauth"
 */
userAgent?: string
} 

declare interface ghauth$TokenData {
user: string,
token: string
} 
	declare module.exports: typeof ghauth

    }
