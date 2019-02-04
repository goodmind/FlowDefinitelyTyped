declare module 'rechoir' {
        import type {
          Extensions
        } from 'interpret';

	declare export function prepare(config: Extensions, filepath: string, requireFrom?: string): true | Attempt[]

	declare export interface Attempt {
moduleName: string,
module: any,
error: Error | null
} 
    }
