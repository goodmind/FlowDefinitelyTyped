declare module 'find-up' {
        declare module.exports: typeof findUp

	declare function findUp(
filename: string | string[],
options?: findUp$findUp$Options): Promise<string | null>

	
      declare var npm$namespace$findUp: {
        sync: typeof findUp$sync,
        
      }
declare function findUp$sync(filename: string | string[], options?: findUp$Options): string | null


declare interface findUp$Options {
cwd?: string
} 
    }
