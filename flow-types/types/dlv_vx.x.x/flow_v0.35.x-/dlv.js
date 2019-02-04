declare module 'dlv' {
        
/**
 * Safely get a dot-notated path within a nested object, with ability to
 * return a default if the full key path does not exist or the value is
 * undefined
 */
declare export default function dlv(object: {[key: string]: any}, key: string | string[], defaultValue?: any): any

    }
