declare module 'extsprintf' {
        declare export interface Stream {
write(str: string): void
} 
	declare export function fprintf(stream: Stream, format: string, ...args: any[]): any

	declare export function printf(format: string, ...args: any[]): any

	declare export function sprintf(format: string, ...args: any[]): string

    }
