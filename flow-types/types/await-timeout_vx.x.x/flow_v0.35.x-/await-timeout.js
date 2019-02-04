declare module 'await-timeout' {
        declare export default typeof Timeout

	declare class Timeout  {
static set(delay: number): Promise<void>;
static set(delay: number, message: string): Promise<empty>;
static wrap(promise: Promise<any>, delay: number, error?: string): Promise<any>;
set(delay: number): Promise<void>;
set(delay: number, message: string): Promise<empty>;
clear(): void
}
    }
