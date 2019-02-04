declare module 'wtfnode' {
        declare export function dump(): void

	declare export function init(): void

	declare export function setLogger(
type: "info" | "warn" | "error",
fn: (message?: any, ...optionalParams: any[]) => void): void

	declare export function resetLoggers(): void

    }
