declare module "reconnectingwebsocket" {
  declare export interface Options {
    automaticOpen?: boolean;
    binaryType?: "blob" | "arraybuffer";
    debug?: boolean;
    maxReconnectAttempts?: number | null;
    maxReconnectInterval?: number;
    reconnectDecay?: number;
    reconnectInterval?: number;
    timeoutInterval?: number;
  }
  declare export default class ReconnectingWebSocket {
    constructor(url: string, protocols?: string[], options?: Options): this;
    static debugAll: boolean;
    static CONNECTING: number;
    static OPEN: number;
    static CLOSING: number;
    static CLOSED: number;
    onclose: (event: any) => void;
    onconnecting: (event: any) => void;
    onerror: (event: any) => void;
    onmessage: (event: any) => void;
    onopen: (event: any) => void;
    close(code?: number, reason?: string): void;
    open(reconnectAttempt?: boolean): void;
    refresh(): void;
    send(data: any): void;
    maxReconnectAttempts: number;
    protocol: string | null;
    readyState: number;
    reconnectAttempts: number;
    url: string;
  }
}
