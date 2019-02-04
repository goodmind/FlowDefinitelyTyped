declare module 'cp-file' {
        declare module.exports: typeof cpFile

	declare function cpFile(
source: string,
destination: string,
options?: cpFile$cpFile$Options): Promise<void> & cpFile$cpFile$ProgressEmitter

	
      declare var npm$namespace$cpFile: {
        sync: typeof cpFile$sync,
        
      }
declare function cpFile$sync(source: string, destination: string, options?: cpFile$Options): void


declare interface cpFile$ProgressEmitter {
on(event: "progress", handler: (data: cpFile$ProgressData) => void): Promise<void>
} 

declare interface cpFile$Options {
overwrite?: boolean
} 

declare interface cpFile$ProgressData {
src: string,
dest: string,
size: number,
written: number,
percent: number
} 
    }
