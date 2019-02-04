declare module 'pangu' {
        declare export function spacing(text: string): string

	declare export function spacingFile(path: string, callback: (error: Error, data: string) => void): void

	declare export function spacingFile(path: string): Promise<string>

	declare export function spacingFileSync(path: string): string

	declare export function spacingText(text: string, callback: (error: Error, data: string) => void): void

	declare export function spacingText(text: string): Promise<string>

	declare export function spacingPage(): void

	declare export function spacingElementById(id: string): void

	declare export function spacingElementByClassName(className: string): void

	declare export function spacingElementByTagName(tagName: string): void

    }
