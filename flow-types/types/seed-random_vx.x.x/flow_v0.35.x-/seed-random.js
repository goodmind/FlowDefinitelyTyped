declare module 'seed-random' {
        declare module.exports: typeof SeedRandom

	declare function SeedRandom(seed?: string, options?: SeedRandom$SeedRandom$Options): () => number

	
      declare var npm$namespace$SeedRandom: {
        resetGlobal: typeof SeedRandom$resetGlobal,
        
      }
declare interface SeedRandom$Options {
global?: boolean,
entropy?: boolean
} 

declare function SeedRandom$resetGlobal(): void

    }
