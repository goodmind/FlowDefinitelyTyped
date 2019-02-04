declare module 'argon2-browser' {
        
      declare var npm$namespace$argon2: {
        hash: typeof argon2$hash,
        
      }
declare function argon2$hash(
options: argon2$Argon2BrowserHashOptions): Promise<argon2$Argon2BrowserHashResult>


declare interface argon2$Argon2BrowserHashOptions {
distPath?: string,
hashLen?: number,
mem?: number,
parallelism?: number,
pass: string,
salt: string,
time?: number,
type?: argon2$ArgonType
} 

declare interface argon2$Argon2BrowserHashResult {
encoded: string,
argon2$hash: Uint8Array,
hashHex: string
} 

declare  class argon2$ArgonType {
  constructor(...args: empty): mixed;
static +Argon2d: Class<argon2$ArgonType__Argon2d> & argon2$ArgonType__Argon2d & 0;// 0
static +Argon2i: Class<argon2$ArgonType__Argon2i> & argon2$ArgonType__Argon2i & 1;// 1

}

declare class argon2$ArgonType__Argon2d mixins argon2$ArgonType {}
declare class argon2$ArgonType__Argon2i mixins argon2$ArgonType {}

    }
