declare module 'image-type' {
        declare function ImageType(buf: Buffer | Uint8Array): FileType.FileTypeResult | null

	declare module.exports: typeof ImageType

    }
