declare module 'uid-safe' {
        declare export interface UID$Generate {
(byteLength: number, callback: (err: any, str: string) => any): void,
(byteLength: number): Promise<string>,
sync(byteLength: number): string
} 
	declare var UID: UID$UID$Generate;
	declare module.exports: typeof UID

    }
