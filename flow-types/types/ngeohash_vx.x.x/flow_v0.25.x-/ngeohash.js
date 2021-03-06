declare var npm$namespace$ngeohash: {
  encode: typeof ngeohash$encode,
  decode: typeof ngeohash$decode,
  decode_bbox: typeof ngeohash$decode_bbox,
  bboxes: typeof ngeohash$bboxes,
  neighbor: typeof ngeohash$neighbor,
  neighbors: typeof ngeohash$neighbors,
  encode_int: typeof ngeohash$encode_int,
  decode_int: typeof ngeohash$decode_int,
  decode_bbox_int: typeof ngeohash$decode_bbox_int,
  bboxes_int: typeof ngeohash$bboxes_int,
  neighbor_int: typeof ngeohash$neighbor_int,
  neighbors_int: typeof ngeohash$neighbors_int
};
declare interface ngeohash$GeographicPoint {
  latitude: number;
  longitude: number;
}

declare type ngeohash$GeographicBoundingBox = [number, number, number, number];

declare type ngeohash$NSEW = [number, number];

declare function ngeohash$encode(
  latitude: number | string,
  longitude: number | string,
  precision?: number
): string;

declare function ngeohash$decode(hashstring: string): ngeohash$GeographicPoint;

declare function ngeohash$decode_bbox(
  hashstring: string
): ngeohash$GeographicBoundingBox;

declare function ngeohash$bboxes(
  minlat: number,
  minlon: number,
  maxlat: number,
  maxlon: number,
  precision?: number
): Array<string>;

declare function ngeohash$neighbor(
  hashstring: string,
  direction: ngeohash$NSEW
): string;

declare function ngeohash$neighbors(hashstring: string): Array<string>;

declare function ngeohash$encode_int(
  latitude: number,
  longitude: number,
  bitDepth?: number
): number;

declare function ngeohash$decode_int(
  hashinteger: number,
  bitDepth?: number
): ngeohash$GeographicPoint;

declare function ngeohash$decode_bbox_int(
  hashinteger: number,
  bitDepth?: number
): ngeohash$GeographicBoundingBox;

declare function ngeohash$bboxes_int(
  minlat: number,
  minlon: number,
  maxlat: number,
  maxlon: number,
  bitDepth?: number
): number;

declare function ngeohash$neighbor_int(
  hashinteger: number,
  direction: ngeohash$NSEW,
  bitDepth?: number
): number;

declare function ngeohash$neighbors_int(
  hashinteger: number,
  bitDepth?: number
): number;
declare module "ngeohash" {
  declare export default typeof ngeohash;
}
