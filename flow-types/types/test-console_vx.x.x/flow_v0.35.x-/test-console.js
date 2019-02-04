declare module 'test-console' {
        declare export var stdout: TestStream;
	declare export var stderr: TestStream;
	declare export type Output = $ReadOnlyArray<string>;
	declare export type OutputCallback = (output: Output) => void;
	declare export type NoOutputCallback = () => void;
	declare export type Restore = () => void;
	declare export interface Options {
isTTY?: boolean
} 
	declare export interface Inspector {
output: Output,
restore: Restore
} 
	declare export interface TestStream {
inspect(options?: Options): Inspector,
inspectSync(fn: OutputCallback): Output,
inspectSync(options: Options, fn: OutputCallback): Output,
ignore(options?: Options): Restore,
ignoreSync(fn: NoOutputCallback): void,
ignoreSync(options: Options, fn: NoOutputCallback): void
} 
    }
