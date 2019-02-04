declare module 'find-process' {
        declare function find(
by: string,
value: string | number): Promise<Array<{
pid: string,
ppid: string,
uid: string,
gid: string,
name: string,
cmd: string
}>>

	
	declare module.exports: typeof find

    }
