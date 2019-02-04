declare module 'terminal-image' {
        declare export function buffer(imageBuffer: Buffer): Promise<string>

	declare export function file(filePath: string): Promise<string>

    }
