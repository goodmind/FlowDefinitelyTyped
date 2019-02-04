declare module 'open-editor' {
        import type {
          PathSpec
        } from 'line-column-path';

	declare module.exports: typeof openEditor

	declare function openEditor(files: PathSpec[], options?: openEditor$openEditor$Options): void

	
      declare var npm$namespace$openEditor: {
        make: typeof openEditor$make,
        
      }
declare function openEditor$make(files: PathSpec[], options?: openEditor$Options): openEditor$EditorRunConfig


declare interface openEditor$Options {
editor?: string
} 

declare interface openEditor$EditorRunConfig {
bin: string,
args: string[],
isTerminalEditor: boolean
} 
    }
