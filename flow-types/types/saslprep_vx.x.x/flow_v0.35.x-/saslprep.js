declare module 'saslprep' {
        declare module.exports: typeof saslPrep

	declare function saslPrep(input: string, options?: saslPrep$saslPrep$Options): string

	declare interface saslPrep$Options {
allowUnassigned?: boolean
} 
    }
