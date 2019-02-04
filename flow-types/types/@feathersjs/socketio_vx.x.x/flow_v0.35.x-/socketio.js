declare module '@feathersjs/socketio' {
        declare export default function feathersSocketIO(callback?: (io: SocketIO.Server) => void): () => void

	declare export default function feathersSocketIO(
options: number | SocketIO.ServerOptions,
callback?: (io: SocketIO.Server) => void): () => void

	declare export default function feathersSocketIO(
port: number,
options?: SocketIO.ServerOptions,
callback?: (io: SocketIO.Server) => void): () => void

    }
