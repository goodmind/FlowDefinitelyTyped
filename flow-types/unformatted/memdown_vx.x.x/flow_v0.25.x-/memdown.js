declare module 'memdown' {
        import type {
          AbstractLevelDOWN
        } from 'abstract-leveldown';

	declare export type MemDown<K, V> = {} & AbstractLevelDOWN<K, V>

	declare export interface MemDownConstructor {
new <K= any, V= any>(): MemDown<K, V>,
<K= any, V= any>(): MemDown<K, V>
} 
	declare export var MemDown: MemDownConstructor;
	declare export default typeof MemDown

    }
