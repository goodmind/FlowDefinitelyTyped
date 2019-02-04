declare module 'memdown' {
        import type {
          AbstractLevelDOWN
        } from 'abstract-leveldown';

	declare export type MemDown<K, V> = {} & AbstractLevelDOWN<K, V>

	declare export interface MemDownConstructor {
new <K, V>(): MemDown<K, V>,
(): MemDown<K, V>
} 
	declare export var MemDown: MemDownConstructor;
	declare export default typeof MemDown

    }
