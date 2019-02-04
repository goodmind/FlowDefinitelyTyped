declare module 'read' {
        declare function Read(
options: Read$Read$Options,
callback: (error: any, result: string, isDefault: boolean) => any): void

	declare interface Read$Options {
prompt?: string,
silent?: boolean,
replace?: string,
timeout?: number,
default?: string,
edit?: boolean,
terminal?: boolean,
input?: any,
output?: any
} 
	declare module.exports: typeof Read

    }
