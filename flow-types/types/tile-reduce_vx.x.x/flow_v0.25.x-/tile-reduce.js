declare interface NodeJS$Global {
  mapOptions: any;
}
declare interface Events {
  /**
 * Start Event
 * @returns {Events}
 * @example tilereduce({...})
.on('start', () => {
console.log('starting')
})
 */
  on(type: "start", callback: () => void): Events;

  /**
 * Map Event
 * @param {TileReduce$Tile} tile
 * @param {number} workerId
 * @returns {Events}
 * @example tilereduce({...})
.on('map', (tile, workerId) => {
console.log(`about to process [${ tile }] on worker ${ workerId }`)
})
 */
  on(
    type: "map",
    callback: (tile: TileReduce$TileReduce$Tile, workerId: number) => void
  ): Events;

  /**
 * Reduce Event
 * @param {any} result
 * @param {TileReduce$Tile} tile
 * @returns {Events}
 * @example const count = 0
tilereduce({...})
.on('reduce', (result, tile) => {
console.log(`got a count of ${ result } from ${ tile }`
count ++
})
 */
  on(
    type: "reduce",
    callback: (result: any, tile: TileReduce$TileReduce$Tile) => void
  ): Events;

  /**
 * End Event
 * @returns {Events}
 * @example let count = 0
tilereduce({...})
.on('end', () => {
console.log(`Total count was: ${ count }`)
})
 */
  on(type: "end", callback: (error: any) => void): Events;
}
declare interface Options {
  map: string;
  zoom: number;
  sources: Array<TileReduce$TileReduce$Source>;
  bbox?: TileReduce$TileReduce$BBox;
  geojson?: any;
  log?: boolean;
  mapOptions?: any;
  maxWorkers?: number;
  output?: any;
  tiles?: Array<TileReduce$TileReduce$Tile>;
  tileStream?: any;
  sourceCover?: string;
}
/**
 * Tile Reduce
 * @param {Options} options Tile Reduce Options
 * @param {string} Path to the map script, which will be executed against each tile
 * @param {number} Zoom specifies the zoom level of tiles to retrieve from each source.
 * @param {Array<TileReduce$Source>} Sources are specified as an array
 * @param {TileReduce$BBox} BBox extent in [minX, minY, maxX, maxY] order
 * @param {GeoJSON} GeoJSON Feature or Feature Collection
 * @param {boolean} Disables logging and progress output
 * @param {any} Passes through arbitrary options to workers. Options are made available to map scripts as global.mapOptions
 * @param {number} By default, TileReduce creates one worker process per CPU. maxWorkers may be used to limit the number of workers created
 * @param {any} By default, any data written from workers is piped to process.stdout on the main process. You can pipe to an alternative writable stream using the output option.
 * @param {Array<TileReduce$Tile>} An array of quadtiles represented as xyz arrays.
 * @param {any} Tiles can be read from an object mode node stream. Each object in the stream should be either a string in the format x y z or an array in the format [x, y, z].
 * @param {string} When using MBTiles sources, a list of tiles to process can be automatically retrieved from the source metadata
 * @return {Events} TileReduce returns an EventEmitter.
 * @example tilereduce({...})
.on('start', () => {
console.log('starting')
})
 */
declare function TileReduce(options: Options): Events;
declare type TileReduce$BBox = [number, number, number, number];

declare type TileReduce$Tile = [number, number, number];

declare type TileReduce$Types = "start" | "map" | "reduce" | "end";

declare interface TileReduce$Source {
  name: string;
  mbtiles?: string;
  url?: string;
  layers?: Array<string>;
  maxrate?: number;
  raw?: boolean;
}
declare module "tile-reduce" {
  declare module.exports: typeof TileReduce;
}
