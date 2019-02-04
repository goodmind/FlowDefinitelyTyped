declare module 'bytewise' {
        declare interface Bytewise {
encode: (value: any) => Buffer,
decode: (value: Buffer) => any,
[k: string]: any
} 
	declare var bytewise: Bytewise;
	declare module.exports: typeof bytewise

    }
