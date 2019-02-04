declare module 'js-md5' {
        declare type md5$message = string | any[] | Uint8Array | ArrayBuffer;

declare interface md5$Md5 {
array(): number[],
arrayBuffer(): ArrayBuffer,
buffer(): ArrayBuffer,
digest(): number[],
hex(): string,
toString(): string,
update(md5$message: md5$message): md5$Md5,
base64(): string
} 

declare interface md5$md5 {
(md5$message: md5$message): string,
hex(md5$message: md5$message): string,
array(md5$message: md5$message): number[],
digest(md5$message: md5$message): number[],
arrayBuffer(md5$message: md5$message): ArrayBuffer,
buffer(md5$message: md5$message): ArrayBuffer,
create(): md5$Md5,
update(md5$message: md5$message): md5$Md5,
base64(md5$message: md5$message): string
} 
	declare var md5$md5: md5$md5.md5$md5;
	declare module.exports: typeof md5$md5

    }
