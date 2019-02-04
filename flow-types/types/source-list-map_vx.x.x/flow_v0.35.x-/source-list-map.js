declare module 'source-list-map' {
        declare export class CodeNode  {
generatedCode: string;
constructor(generatedCode: string): this;
clone(): CodeNode;
getGeneratedCode(): string;
getMappings(mappingsContext?: MappingsContext): string;
addGeneratedCode(generatedCode: string): void;
mapGeneratedCode(fn: (code: string) => string): void
}
	declare export class MappingsContext  {
sources: string[];
sourcesContent: string[];
hasSourceContent: boolean;
currentOriginalLine: number;
currentSource: number;
constructor(): this;
ensureSource(source: string, originalSource: string): number
}
	declare export class SourceNode  {
generatedCode: string;
source: string;
originalSource: string;
startingLine: number;
constructor(generatedCode: string, source: string, originalSource: string, startingLine?: number): this;
clone(): SourceNode;
getGeneratedCode(): string;
getMappings(mappingsContext: MappingsContext): string;
mapGeneratedCode(fn: (code: string) => string): void
}
	declare export class SourceListMap  {
children: (SourceNode | CodeNode)[];
constructor(generatedCode: (SourceNode | CodeNode)[]): this;
constructor(generatedCode?: string | SourceNode | CodeNode | SourceListMap, source?: string, originalSource?: string): this;
add(
generatedCode: string | CodeNode | SourceNode | SourceListMap,
source?: string,
originalSource?: string): void;
prepend(
generatedCode: SourceListMap | SourceNode | CodeNode,
source?: string,
originalSource?: string): void;
mapGeneratedCode(fn: (code: string) => string): void;
toString(): string;
toStringWithSourceMap(
options: {
file: any
}): {
source: string,
map: {
version: number,
file: any,
sources: string[],
sourcesContent: string[],
mappings: string
}
}
}
	declare export function fromStringWithSourceMap(
code: string,
map: {
sources: (string | SourceNode | CodeNode)[],
sourcesContent: string[],
mappings: string
}): SourceListMap

    }
