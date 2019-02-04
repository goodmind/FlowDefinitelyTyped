declare module 'franc' {
        declare type ISO6393 = string;
	declare type Confidence = number;
	declare interface Options {
minLength?: number,
whitelist?: ISO6393[],
blacklist?: ISO6393[]
} 
	declare function detect(text: string, options?: Options): ISO6393

	
      declare var npm$namespace$detect: {
        all: typeof detect$all,
        
      }
declare function detect$all(text: string, options?: Options): [ISO6393, number]

	declare module.exports: typeof detect

    }
