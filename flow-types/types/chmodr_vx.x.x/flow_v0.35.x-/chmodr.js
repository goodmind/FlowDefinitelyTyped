declare module 'chmodr' {
        import type {
          URL
        } from 'url';

	declare module.exports: typeof chmodr

	declare function chmodr(
path: chmodr$chmodr$PathLike,
mode: string | number,
callback: (err: NodeJS.ErrnoException) => void): void

	
      declare var npm$namespace$chmodr: {
        sync: typeof chmodr$sync,
        
      }
declare function chmodr$sync(path: chmodr$PathLike, mode: string | number): void


declare type chmodr$PathLike = string | Buffer | URL;
    }
