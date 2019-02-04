declare module '@feathersjs/primus-client' {
        declare export default function feathersPrimusClient(socket: any, options?: FeathersPrimusClientOptions): () => void

	declare export interface FeathersPrimusClientOptions {
timeout?: number
} 
    }
