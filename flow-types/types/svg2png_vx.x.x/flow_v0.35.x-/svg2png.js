declare module 'svg2png' {
        declare interface opts {
fileName?: string,
width?: number,
height?: number,
url?: string
} 
	declare function svg2png(sourceBuffer: Buffer, opts?: opts): Promise<Buffer>

	
      declare var npm$namespace$svg2png: {
        sync: typeof svg2png$sync,
        
      }
declare function svg2png$sync(sourceBuffer: Buffer, opts?: opts): Buffer

	declare module.exports: typeof svg2png

    }
