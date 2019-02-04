declare module 'proxy-addr' {
        import type {
          IncomingMessage
        } from 'http';

	declare module.exports: typeof proxyAddr

	declare function proxyAddr(
req: IncomingMessage,
trust: proxyAddr$proxyAddr$Address | proxyAddr$proxyAddr$Address[] | ((addr: string, i: number) => boolean)): string

	
      declare var npm$namespace$proxyAddr: {
        all: typeof proxyAddr$all,
compile: typeof proxyAddr$compile,
        
      }
declare function proxyAddr$all(
req: IncomingMessage,
trust?: proxyAddr$Address | proxyAddr$Address[] | ((addr: string, i: number) => boolean)): string[]


declare function proxyAddr$compile(
val: proxyAddr$Address | proxyAddr$Address[]): (addr: string, i: number) => boolean


declare type proxyAddr$Address = "loopback" | "linklocal" | "uniquelocal" | string;
    }
