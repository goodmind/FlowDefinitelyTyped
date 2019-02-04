declare module 'active-win' {
        declare module.exports: typeof activeWin

	declare function activeWin(): Promise<activeWin$activeWin$Result>

	
      declare var npm$namespace$activeWin: {
        sync: typeof activeWin$sync,
        
      }
declare function activeWin$sync(): activeWin$Result


declare interface activeWin$Result {
title: string,
id: number,
bounds?: {
x: number,
y: number,
width: number,
height: number
},
owner: {
name: string,
processId: number,
bundleId?: number,
path?: string
},
memoryUsage?: number
} 
    }
