declare module 'hdkey' {
        declare class HDNode  {
static fromMasterSeed(seed: Buffer): HDNode;
publicKey: Buffer;
privateKey: Buffer;
chainCode: Buffer;
constructor(): this;
derive(path: string): HDNode
}
	declare module.exports: typeof HDNode

    }
