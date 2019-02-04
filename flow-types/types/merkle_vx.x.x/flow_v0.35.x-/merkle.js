declare module 'merkle' {
        declare function merkle(
hashname: "sha512"
| "sha256"
| "sha1"
| "md5"
| "ripemd160"
| "whirlpool"
| "none",
useUpperCaseForHash?: boolean): MerkleStream

	declare class MerkleStream mixins stream.Transform {
sync(leaves: any[]): MerkleTree;
async(leaves: any[], callback: (err: string, tree: MerkleTree) => void): void;
json(): MerkleStream
}
	declare class MerkleTree  {
root(): string;
level(level: number): number | void;
depth(): number;
levels(): number;
nodes(): number
}
	declare module.exports: typeof merkle

    }
