declare module '@iarna/toml' {
        
/**
 * Synchronously parse a TOML string and return an object.
 */
declare export function parse(str: string): Record<string, any>

	declare export {
          async,stream
        }

    }
