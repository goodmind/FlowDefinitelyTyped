declare module 'vfile-location' {
        import typeof * as VFile from 'vfile';

	declare function vfileLocation(vfile: string | VFile.VFile): vfileLocation$vfileLocation$Location

	declare interface vfileLocation$Location {

/**
 * Get the `offset` (`number`) for a line and column-based `position` in the bound file.
 * Returns `-1` when given invalid or out of bounds input.
 */
toOffset(position: {
line: number,
column: number
}): number,

/**
 * Get the line and column-based `position` for `offset` in the bound file.
 */
toPosition(offset: number): {
line: number,
column: number,
offset: number
}
} 
	declare module.exports: typeof vfileLocation

    }
