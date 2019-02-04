declare module 'cli-truncate' {
        declare module.exports: typeof cliTruncate

	declare function cliTruncate(
input: string,
columns: number,
options?: {
position?: "start" | "middle" | "end"
}): string

    }
