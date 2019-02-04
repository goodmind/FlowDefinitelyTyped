declare module 'xxhashjs' {
        declare export interface HashObject {
init(seed: number): this,
update(data: string | ArrayBuffer): this,
digest(): number
} 
	declare export interface HashInterface {
(seed?: number): HashObject,
(data: string | ArrayBuffer, seed: number): number
} 
	declare export var h32: HashInterface;
	declare export var h64: HashInterface;
	declare var defaultExport: {
h32: typeof h32,
h64: typeof h64
};
	declare export default typeof defaultExport

    }
