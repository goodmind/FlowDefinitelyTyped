declare module 'ignore-styles' {
        declare export type Handler = (m: NodeModule, filename: string) => any;
	declare export var DEFAULT_EXTENSIONS: string[];
	declare export var oldHandlers: {
[ext: string]: Handler
};
	declare export function noOp(): void

	declare export function restore(): void

	declare export default function register(extensions?: string[], handler?: Handler): void

    }
