declare module 'structured-source' {
        declare interface StructuredSource$SourcePosition {
line: number,
column: number
} 

declare interface StructuredSource$SourceLocation {
start: StructuredSource$SourcePosition,
end: StructuredSource$SourcePosition
} 
	declare class StructuredSource  {

/**
 * @param source - source code text.
 */
constructor(source: string): this;
locationToRange(loc: StructuredSource$StructuredSource$SourceLocation): [number, number];
rangeToLocation(range: [number, number]): StructuredSource$StructuredSource$SourceLocation;
positionToIndex(pos: StructuredSource$StructuredSource$SourcePosition): number;
indexToPosition(index: number): StructuredSource$StructuredSource$SourcePosition
}
	declare module.exports: typeof StructuredSource

    }
