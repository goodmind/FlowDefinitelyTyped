declare module 'jjve' {
        declare function jjve(jjv: jjv.jjve$Env): jjve$jjve$Env

	declare interface jjve$Issue {
code: string,
message: string,
data: any,
path: string
} 

declare interface jjve$Env {
(schema: Object, data: any, errors: jjv.Errors): jjve$Issue[]
} 
	declare module.exports: typeof jjve

    }
