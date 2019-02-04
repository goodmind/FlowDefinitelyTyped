declare module 'format-io' {
        
/**
 * Appends a '/' to the end of the path unless it exists.
 * @param path A path.
 * @returns The path with a '/' appended to it.
 */
declare export function addSlashToEnd(path: string): string

	
/**
 * Returns a short string representing the size of bytes in unit symbols up to petabytes.
 * @param size Size in bytes.
 * @returns A string representing the size in the matching unit symbol.
 */
declare export function size(size: number): string

	
      declare var npm$namespace$permissions: {
        symbolic: typeof permissions$symbolic,
numeric: typeof permissions$numeric,
        
      }

/**
 * Converts Unix-like permissions from numeric to symbolic notation.
 * @param perm A string of Unix-like permission in numeric notation.
 * @returns A representation of the permissions in symbolic notation.
 */
declare function permissions$symbolic(perm: string): string



/**
 * Converts Unix-like permissions from symbolic to numeric notation.
 * @param perm A string of Unix-like permission in symbolic notation.
 * @returns A representation of the permissions in numeric notation.
 */
declare function permissions$numeric(perm: string): string

    }
