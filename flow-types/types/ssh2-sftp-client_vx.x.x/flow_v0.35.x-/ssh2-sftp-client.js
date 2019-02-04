declare module 'ssh2-sftp-client' {
        import typeof * as ssh2 from 'ssh2';

	import typeof * as ssh2Stream from 'ssh2-streams';

	declare module.exports: typeof sftp

	declare class sftp  {
connect(options: ssh2.ConnectConfig): Promise<void>;
list(remoteFilePath: string): Promise<sftp$sftp$FileInfo[]>;
exists(remotePath: string): Promise<string>;
stat(remotePath: string): Promise<sftp$sftp$FileStats>;
get(
remoteFilePath: string,
useCompression?: boolean,
encoding?: string | null): Promise<NodeJS.ReadableStream>;
fastGet(
remoteFilePath: string,
localPath: string,
options?: ssh2Stream.TransferOptions): Promise<string>;
put(
input: string | Buffer | NodeJS.ReadableStream,
remoteFilePath: string,
useCompression?: boolean,
encoding?: string): Promise<void>;
fastPut(
localPath: string,
emoteFilePath: string,
options?: ssh2Stream.TransferOptions): Promise<string>;
mkdir(remoteFilePath: string, recursive?: boolean): Promise<void>;
rmdir(remoteFilePath: string, recursive?: boolean): Promise<void>;
delete(remoteFilePath: string): Promise<void>;
rename(remoteSourcePath: string, remoteDestPath: string): Promise<void>;
chmod(remotePath: string, mode: number | string): Promise<string>;
end(): Promise<void>;
on(event: string, callback: (...args: any[]) => void): void
}
	declare interface sftp$FileInfo {
type: string,
name: string,
size: number,
modifyTime: number,
accessTime: number,
rights: {
user: string,
group: string,
other: string
},
owner: number,
group: number
} 

declare interface sftp$FileStats {
mode: number,
permissions?: any,
owner: number,
group: number,
size: number,
accessTime: number,
modifyTime: number
} 
    }
