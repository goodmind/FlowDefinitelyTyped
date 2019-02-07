declare module 'express-ntlm' {
        import type {
          ConnectionOptions
        } from 'tls';

	import type {
          Handler
        } from 'express';

	declare function expressNtlm(options?: expressNtlm$expressNtlm$Options): Handler

	declare interface expressNtlm$Options {
prefix?: string,
badrequest?: Handler,
internalservererror?: Handler,
forbidden?: Handler,
unauthorized?: Handler,
domain?: string,
domaincontroller?: string,
tlsOptions?: ConnectionOptions,
debug?: (prefix: string, message: string) => void
} 

declare interface expressNtlm$RequestNtlm {
DomainName?: string,
UserName?: string,
Workstation?: string
} 
	declare module 'global' {
        declare interface Express$Request {
ntlm?: expressNtlm$expressNtlm$RequestNtlm
} 
    }

	declare module.exports: typeof expressNtlm

    }
