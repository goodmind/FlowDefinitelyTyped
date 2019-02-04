declare module 'net-keepalive' {
        declare export type NodeJSSocketWithFileDescriptor = NodeJS.Socket | {
_handle: {
_fd: number
}
};
	declare export function setKeepAliveProbes(socket: NodeJSSocketWithFileDescriptor, cnt: number): number

	declare export function setKeepAliveInterval(socket: NodeJSSocketWithFileDescriptor, intvl: number): number

    }
