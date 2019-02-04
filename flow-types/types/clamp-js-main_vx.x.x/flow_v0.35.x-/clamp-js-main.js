declare module 'clamp-js-main' {
        declare export interface ClampOptions {
clamp?: number | string,
useNativeClamp?: boolean,
splitOnChars?: string[],
animate?: boolean,
truncationChar?: string,
truncationHTML?: string | null
} 
	declare export interface ClampResponse {
original: string,
clamped: string
} 
	declare export default function clamp(element: HTMLElement, options?: ClampOptions): ClampResponse

    }
