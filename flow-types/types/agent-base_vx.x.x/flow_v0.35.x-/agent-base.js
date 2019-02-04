declare module 'agent-base' {
        import type {
          EventEmitter
        } from 'events';

	declare type Agent$AgentCallback = (req?: any, opts?: {
secureEndpoint: boolean
}) => void;

declare interface Agent$AgentOptions {
timeout?: number,
host?: string,
port?: number,
[key: string]: any
} 

declare type Agent$Agent = {
_promisifiedCallback: boolean,
timeout: number | null,
options?: Agent$AgentOptions,
callback: Agent$AgentCallback,
addRequest: (req?: any, opts?: any) => void,
freeSocket: (socket: any, opts: any) => void
} & EventEmitter

	
/**
 * Base `http.Agent` implementation.
 * No pooling/keep-alive is implemented by default.
 */
declare function Agent(opts?: Agent$Agent.Agent$AgentOptions): Agent$Agent.Agent$Agent

	declare function Agent(
callback: Agent$Agent.Agent$AgentCallback,
opts?: Agent$Agent.Agent$AgentOptions): Agent$Agent.Agent$Agent

	declare module.exports: typeof Agent$Agent

    }
