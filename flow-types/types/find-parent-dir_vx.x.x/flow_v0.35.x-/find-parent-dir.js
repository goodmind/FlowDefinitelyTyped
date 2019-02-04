declare module 'find-parent-dir' {
        
/**
 * Finds the first parent directory that contains a given file or directory.
 */
declare function findParentDir(
currentFullPath: string,
clue: string,
cb: (err: any, dir: string | null) => void): void

	
      declare var npm$namespace$findParentDir: {
        sync: typeof findParentDir$sync,
        
      }
declare function findParentDir$sync(currentFullPath: string, clue: string): string | null

	declare module.exports: typeof findParentDir

    }
