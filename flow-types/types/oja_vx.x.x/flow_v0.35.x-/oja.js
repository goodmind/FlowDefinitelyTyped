declare module 'oja' {
        import type {
          Readable
        } from 'stream';

	import type {
          EventEmitter
        } from 'events';

	declare export type ConsumerCallback = (payload: any, runtime: Flow) => void;
	declare export type Primitive = boolean
| number
| string
| Symbol
| null
| void;
	declare export interface State {
queue: string[],
pending: string[]
} 
	declare export type DefinitionFunction = (publisher: StageContext, runtime: Flow) => any;
	declare export type AddableFunction = (runtime: Flow) => void;
	declare export type AddableToAction = Action | AddableFunction;
	declare export class EventContext  {
new(context: EventContext | {[key: string]: any}): this;
stageContext(topics: string | $ReadOnlyArray<string>): StageContext;
state(): State;
repub(type: string, handler: (event: any) => void): void;
on(type: string, handler: (event: any) => void): this;
once(type: string, handler: (event: any) => void): this;
emit(name: string, value: any): this;
get(name: string): any
}
	declare export class StageContext mixins EventContext {
pub(data: any): void
}
	declare export class ReadableStream mixins Readable {
new(topic: string, emitter: EventEmitter): this;
push(data: any): boolean
}
	declare export class Flow  {
constructor(baseFlow?: Flow): this;
consume(topic: string | $ReadOnlyArray<string>, callback: ConsumerCallback): this;
consume(topic: string): Promise<any>;
consume(topics: $ReadOnlyArray<string>): Promise<{
[key: string]: string
}>;
consumeStream(topic: string, callback: (stream: ReadableStream) => void): this;
consumeStream(topic: string): ReadableStream;
getReader(topic: string): {
next(): Promise<any>
};
define(topics: string | $ReadOnlyArray<string>): StageContext;
define(
topic: string,
data: Promise<Primitive> | DefinitionFunction | {[key: string]: any} | Primitive): this;
catch(callback: (err: any) => void): this;
timeout(topics: string | $ReadOnlyArray<string>, ms: number): this;
state(): State
}
	declare export class Action mixins Flow {
constructor(): this;
activate(): this;
execute(): void;
add(...child: AddableToAction[]): this
}
	declare export class FunctionAction mixins Action {
constructor(callback: (runtime: FunctionAction) => any): this;
execute(): any
}
    }
