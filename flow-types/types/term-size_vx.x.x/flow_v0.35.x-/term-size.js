declare module 'term-size' {
        declare module.exports: typeof termSize

	declare function termSize(): termSize$termSize$TermSize

	declare interface termSize$TermSize {
columns: number,
rows: number
} 
    }
