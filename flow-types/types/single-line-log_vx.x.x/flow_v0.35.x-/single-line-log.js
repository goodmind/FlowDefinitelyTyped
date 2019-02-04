declare module 'single-line-log' {
        declare export interface SingleLineLog {
(data: string): void,
clear(): void,
write(data: string): void
} 
	declare export var stdout: SingleLineLog;
	declare export var stderr: SingleLineLog;
    }
