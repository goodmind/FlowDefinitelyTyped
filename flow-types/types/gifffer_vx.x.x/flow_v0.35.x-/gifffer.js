declare module 'gifffer' {
        
/**
 * @see {@link https://github.com/krasimir/gifffer#styling|Styling}
 */
declare interface Gifffer$GiffferOptions {
playButtonStyles: {
[style: string]: string
},
playButtonIconStyles: {
[style: string]: string
}
} 
	
/**
 * @see {@link https://github.com/krasimir/gifffer#usage|Usage}
 */
declare function Gifffer(options?: Gifffer$Gifffer$GiffferOptions): HTMLButtonElement[]

	declare module.exports: typeof Gifffer

    }
