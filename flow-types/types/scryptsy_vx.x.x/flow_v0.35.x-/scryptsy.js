declare module 'scryptsy' {
        declare module.exports: typeof scryptsy

	declare function scryptsy(
key: Buffer | string,
salt: Buffer | string,
N: number,
r: number,
p: number,
dkLen: number,
progressCallback?: (status: {
current: number,
total: number,
percent: number
}) => void): Buffer

	
      declare var npm$namespace$scryptsy: {
        
        prototype: typeof scryptsy$prototype,
      }
declare var scryptsy$prototype: {};
    }
