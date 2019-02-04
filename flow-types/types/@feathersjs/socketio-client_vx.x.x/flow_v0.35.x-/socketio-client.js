declare module '@feathersjs/socketio-client' {
        declare export default function feathersSocketIOClient(
socket: SocketIOClient.Socket,
options?: FeathersSocketIOClientOptions): () => void

	declare export interface FeathersSocketIOClientOptions {
timeout?: number
} 
    }
