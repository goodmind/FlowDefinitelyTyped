declare module 'apigee-access' {
        
      declare var npm$namespace$ApigeeAccess: {
        getVariable: typeof ApigeeAccess$getVariable,
setVariable: typeof ApigeeAccess$setVariable,
setIntVariable: typeof ApigeeAccess$setIntVariable,
deleteVariable: typeof ApigeeAccess$deleteVariable,
getCache: typeof ApigeeAccess$getCache,
getVault: typeof ApigeeAccess$getVault,
getQuota: typeof ApigeeAccess$getQuota,
getMode: typeof ApigeeAccess$getMode,
        
      }
declare function ApigeeAccess$getVariable(request: any, name: string): string | number | boolean


declare function ApigeeAccess$setVariable(request: any, name: string, value: string | number | boolean): void


declare function ApigeeAccess$setIntVariable(request: any, name: string, value: string | number): void


declare function ApigeeAccess$deleteVariable(request: any, name: string): void


declare function ApigeeAccess$getCache(name: string, options?: ApigeeAccess$CacheOptions): any


declare function ApigeeAccess$getVault(name: string, scope?: "organization" | "environment"): ApigeeAccess$SecureVault


declare function ApigeeAccess$getQuota(options?: any): ApigeeAccess$QuotaService


declare function ApigeeAccess$getMode(): "apigee" | "standalone"


declare interface ApigeeAccess$CacheOptions {
resource?: string,
scope?: "global" | "application" | "exclusive",
defaultTtl?: number,
timeout?: number
} 

declare interface ApigeeAccess$Cache {
put(key: string, data: any, ttl?: number, callback?: (err: any) => void): void,
get(key: string, callback: (err: any, data: any) => void): void,
remove(key: string, callback?: (err: any) => void): void
} 

declare interface ApigeeAccess$SecureVault {
getKeys(callback: (err: any, data: any) => void): void,
get(key: string, callback: (err: any, data: any) => void): void
} 

declare interface ApigeeAccess$QuotaService {
apply(
options?: ApigeeAccess$QuotaServiceApplyOptions,
callback?: (err: any, data: ApigeeAccess$QuotaServiceApplyCallbackData) => void): void
} 

declare interface ApigeeAccess$QuotaServiceApplyOptions {
identifier: string,
timeUnit: "minute"
| "hour"
| "day"
| "week"
| "month",
allow: number,
interval?: number,
weight?: number
} 

declare interface ApigeeAccess$QuotaServiceApplyCallbackData {
used: number,
allowed: number,
isAllowed: boolean,
expiryTime: number,
timestamp: number
} 
	declare export default typeof ApigeeAccess

    }
