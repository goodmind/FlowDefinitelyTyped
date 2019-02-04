declare module 'cli-cursor' {
        
/**
 * Show cursor.
 * @param stream defaults to `process.stderr`
 */
declare export function show(stream?: NodeJS.WritableStream): void

	
/**
 * Hide cursor.
 * @param stream defaults to `process.stderr`
 */
declare export function hide(stream?: NodeJS.WritableStream): void

	
/**
 * Toggle cursor visibility.
 * @param force is useful to show or hide the cursor based on a boolean.
 * @param stream defaults to `process.stderr`
 */
declare export function toggle(force?: boolean, stream?: NodeJS.WritableStream): void

    }
