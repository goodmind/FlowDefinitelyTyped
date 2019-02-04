declare module 'picturefill' {
        declare type Picturefill$ElementNullable = Element | null;

declare interface Picturefill$EvaluateArg {
reevaluate?: boolean,
elements: NodeList | Picturefill$ElementNullable[]
} 
	declare function picturefill(arg?: Picturefill$Picturefill$EvaluateArg): void

	declare module.exports: typeof picturefill

    }
