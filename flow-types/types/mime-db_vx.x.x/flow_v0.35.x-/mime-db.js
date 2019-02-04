declare module 'mime-db' {
        
/**
 * Data Structure
 * If unknown, every property could be undefined.
 * @see {@link https://github.com/jshttp/mime-db#data-structure}
 */
declare export interface DataStructure {

/**
 * where the mime type is defined. If not set, it's probably a custom media type.
 */
source?: string,

/**
 * known extensions associated with this mime type.
 */
extensions?: string[],

/**
 * whether a file of this type can be gzipped.
 */
compressible?: boolean,

/**
 * the default charset associated with this type, if any.
 */
charset?: string
} 
    }
