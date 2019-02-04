declare module 'through' {
        declare function through(
write?: (data: any) => void,
end?: () => void,
opts?: {
autoDestroy: boolean
}): through$through$ThroughStream

	declare export type through$ThroughStream = {
autoDestroy: boolean
} & stream.Transform

	declare module.exports: typeof through

    }
