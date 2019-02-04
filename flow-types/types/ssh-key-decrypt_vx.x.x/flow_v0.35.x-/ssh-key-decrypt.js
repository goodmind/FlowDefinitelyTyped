declare module 'ssh-key-decrypt' {
        declare module.exports: typeof decrypt

	declare function decrypt(data: string | Buffer, passphrase: string, outEnc?: "buffer"): Buffer

	declare function decrypt(data: string | Buffer, passphrase: string, outEnc: BufferEncoding): string

    }
