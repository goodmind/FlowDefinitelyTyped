declare module 'socketio-wildcard' {
        declare module.exports: typeof sioWildcard

	declare function sioWildcard(
emitterCtor?: {
prototype: typeof undefined
}): (socket: Socket | ClientSocket, next?: (err?: any) => void) => void

    }
