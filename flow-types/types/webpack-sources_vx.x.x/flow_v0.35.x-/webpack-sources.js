declare module 'webpack-sources' {
        import type {
          Hash
        } from 'crypto';

	import type {
          SourceNode,RawSourceMap,SourceMapGenerator
        } from 'source-map';

	import type {
          SourceListMap
        } from 'source-list-map';

	declare export class Source  {
size(): number;
map(options?: any): any;
sourceAndMap(options?: any): {
source: string,
map: RawSourceMap
};
updateHash(hash: Hash): void;
source(options?: any): string;
node(options?: any): any;
listNode(options?: any): any;
listMap(options?: any): any
}
	declare export interface SourceAndMapMixin {
map(options: {
columns?: boolean
}): RawSourceMap,
sourceAndMap(options: {
columns?: boolean
}): {
source: string,
map: RawSourceMap
}
} 
	declare export class CachedSource  {
_source: Source;
_cachedSource: string;
_cachedSize: number;
_cachedMaps: {
[prop: string]: RawSourceMap
};
node: (options: any) => SourceNode;
listMap: (options: any) => SourceListMap;
constructor(source: Source): this;
source(): string;
size(): number;
sourceAndMap(options: any): {
source: string,
map: RawSourceMap
};
map(options: any): RawSourceMap;
updateHash(hash: Hash): void
}
	declare export class ConcatSource mixins Source, SourceAndMapMixin {
children: Array<(string | Source)>;
constructor(...args: Array<(string | Source)>): this;
add(item: string | Source): void;
source(): string;
size(): number;
node(options: any): SourceNode;
listMap(options: any): SourceListMap;
updateHash(hash: Hash): void
}
	declare export class LineToLineMappedSource mixins Source, SourceAndMapMixin {
_value: string;
_name: string;
_originalSource: string;
constructor(value: string, name: string, originalSource: string): this;
source(): string;
node(options: any): SourceNode;
listMap(options: any): SourceListMap;
updateHash(hash: Hash): void
}
	declare export class OriginalSource mixins Source, SourceAndMapMixin {
_value: string;
_name: string;
constructor(value: string, name: string): this;
source(): string;
node(options?: {
columns?: boolean
}): SourceNode;
listMap(options: any): SourceListMap;
updateHash(hash: Hash): void
}
	declare export class PrefixSource mixins Source, SourceAndMapMixin {
_source: Source | string;
_prefix: Source | string;
constructor(prefix: Source | string, source: Source | string): this;
source(): string;
node(options: any): SourceNode;
listMap(options: any): SourceListMap;
updateHash(hash: Hash): void
}
	declare export class RawSource mixins Source {
_value: string;
constructor(value: string): this;
source(): string;
map(options: any): null;
node(options: any): SourceNode;
listMap(options: any): SourceListMap;
updateHash(hash: Hash): void
}
	declare export class ReplaceSource mixins Source, SourceAndMapMixin {
_source: Source;
_name: string;
replacements: any[][];
constructor(source: Source, name?: string): this;
replace(start: number, end: number, newValue: string): void;
insert(pos: number, newValue: string): void;
source(): string;
_sortReplacements(): void;
_replaceString(str: string): string;
node(options: any): SourceNode;
listMap(options: any): SourceListMap;
_replacementToSourceNode(oldNode: SourceNode, newString: string): string | SourceNode;
_splitSourceNode(node: SourceNode, position: SourceNode[]): SourceNode[];
_splitSourceNode(node: string, position: number): number;
_splitString(str: string, position: number): string[]
}
	declare export class SourceMapSource mixins Source, SourceAndMapMixin {
_value: string;
_name: string;
_sourceMap: SourceMapGenerator | RawSourceMap;
_originalSource: string;
_innerSourceMap: RawSourceMap;
constructor(value: string, name: string, sourceMap: SourceMapGenerator | RawSourceMap, originalSource?: string, innerSourceMap?: RawSourceMap): this;
source(): string;
node(): SourceNode;
listMap(options: {
module?: boolean
}): SourceListMap;
updateHash(hash: Hash): void
}
    }
