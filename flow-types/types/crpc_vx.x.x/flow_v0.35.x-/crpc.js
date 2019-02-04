declare module 'crpc' {
        declare export type Client = <TRes>(path: string, body: any, options?: {} | null) => Promise<TRes>;
	declare export default function crpc(baseUrl: string, options?: {}): Client

    }
