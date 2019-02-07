declare module "write-file-atomically" {
  declare module.exports: typeof WriteFileAtomically;

  declare function WriteFileAtomically(
    path: string,
    data: WriteFileAtomically$WriteFileAtomically$Data,
    options?: writeFileAtomic.Options
  ): Promise<void>;

  declare type WriteFileAtomically$Data = string | Buffer | Uint8Array;
}
