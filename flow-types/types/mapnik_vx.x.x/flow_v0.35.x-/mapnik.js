declare module 'mapnik' {
        declare export var settings: any;
	declare export function register_default_fonts(): void

	declare export function register_default_input_plugins(): void

	declare export function register_datasource(path: string): void

	declare export class VectorTile  {
constructor(z: number, x: number, y: number): this;
addDataSync(vectorTile: any): void
}
	declare export class Datasource  {
constructor(datasource: any): this;
featureset(): Featureset
}
	declare export class Featureset  {
constructor(): this;
next(): FeaturesetNext
}
	declare export class FeaturesetNext  {
constructor(): this;
toJSON(): string
}
	declare export interface Image {
new (x: number, y: number): () => void,
encode(type: string, callback?: (err: Error, buffer: Buffer) => void): void,
getData(): Buffer,
save(fp: string): () => void,
open(fp: string): () => void
} 
	declare export class Map  {
constructor(x: number, y: number): this;
load(xml: string, callback?: (err: Error, map: Map) => void): void;
zoomAll(): void;
render(images: Image | VectorTile, callback?: (err: Error, map: Image) => void): void
}
    }
