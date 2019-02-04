declare module 'ripemd160' {
        import type {
          Hash
        } from 'crypto';

	declare module.exports: typeof RIPEMD160

	declare var RIPEMD160: RIPEMD160Static;
	declare interface RIPEMD160Static {
new (): Hash
} 
    }
