declare module 'slice-ansi' {
        declare function sliceAnsi(input: string, beginSlice: number, endSlice?: number): string

	declare module.exports: typeof sliceAnsi

    }
