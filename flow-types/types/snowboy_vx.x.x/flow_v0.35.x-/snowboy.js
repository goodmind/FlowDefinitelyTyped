declare module 'snowboy' {
        import type {
          Stream
        } from 'stream';

	declare export type State = "sound" | "silence" | "hotword" | "error";
	declare export class Detector mixins Stream {
constructor(params: any): this;
on(
event: State | Symbol,
callback: (index: any, hotword?: any, buffer?: Buffer) => void): this
}
	declare export class Models  {
add(params: any): void
}
    }
