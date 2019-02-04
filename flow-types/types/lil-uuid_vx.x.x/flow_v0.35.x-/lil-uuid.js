declare module 'lil-uuid' {
        
/**
 * Generate a random UUID
 * @returns UUID string.
 */
declare export function uuid(): string

	
/**
 * Check if a given string has a valid UUID format. It supports multiple version (3, 4 and 5).
 * @param uuid UUID string.
 * @returns True if string is valid UUID, false otherwise.
 */
declare export function isUUID(uuid: string): boolean

    }
