declare module 'ityped' {
        declare export interface Configuration {
strings?: string[],
typeSpeed?: number,
pause?: number,
loop?: boolean
} 
	declare export function init(element: string, config: Configuration): void

    }
