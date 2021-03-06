declare module "d3" {
  declare var npm$namespace$layout: {
    cloud: typeof layout$cloud
  };
  declare export function layout$cloud(): layout$Cloud<cloud$Word>;

  declare export function layout$cloud<T: cloud$Word>(): layout$Cloud<T>;

  declare interface layout$cloud$Word {
    text?: string;
    font?: string;
    style?: string;
    weight?: string | number;
    rotate?: number;
    size?: number;
    padding?: number;
    x?: number;
    y?: number;
  }

  declare interface layout$Cloud<T: cloud$Word> {
    start(): layout$Cloud<T>;
    stop(): layout$Cloud<T>;
    timeInterval(): number;
    timeInterval(interval: number): layout$Cloud<T>;
    words(): T[];
    words(words: T[]): layout$Cloud<T>;
    size(): [number, number];
    size(size: [number, number]): layout$Cloud<T>;
    font(): (datum: T, index: number) => string;
    font(font: string): layout$Cloud<T>;
    font(font: (datum: T, index: number) => string): layout$Cloud<T>;
    fontStyle(): (datum: T, index: number) => string;
    fontStyle(style: string): layout$Cloud<T>;
    fontStyle(style: (datum: T, index: number) => string): layout$Cloud<T>;
    fontWeight(): (datum: T, index: number) => string | number;
    fontWeight(weight: string | number): layout$Cloud<T>;
    fontWeight(
      weight: (datum: T, index: number) => string | number
    ): layout$Cloud<T>;
    rotate(): (datum: T, index: number) => number;
    rotate(rotate: number): layout$Cloud<T>;
    rotate(rotate: (datum: T, index: number) => number): layout$Cloud<T>;
    text(): (datum: T, index: number) => string;
    text(text: string): layout$Cloud<T>;
    text(text: (datum: T, index: number) => string): layout$Cloud<T>;
    spiral(): (size: number) => (t: number) => [number, number];
    spiral(name: string): layout$Cloud<T>;
    spiral(
      spiral: (size: number) => (t: number) => [number, number]
    ): layout$Cloud<T>;
    fontSize(): (datum: T, index: number) => number;
    fontSize(size: number): layout$Cloud<T>;
    fontSize(size: (datum: T, index: number) => number): layout$Cloud<T>;
    padding(): (datum: T, index: number) => number;
    padding(padding: number): layout$Cloud<T>;
    padding(padding: (datum: T, index: number) => number): layout$Cloud<T>;
    on(type: "word", listener: (word: T) => void): layout$Cloud<T>;
    on(
      type: "end",
      listener: (
        tags: T[],
        bounds: {
          x: number,
          y: number
        }[]
      ) => void
    ): layout$Cloud<T>;
    on(type: string, listener: (...args: any[]) => void): layout$Cloud<T>;
    on(type: "word"): (word: T) => void;
    on(
      type: "end"
    ): (
      tags: T[],
      bounds: {
        x: number,
        y: number
      }[]
    ) => void;
    on(type: string): (...args: any[]) => void;
  }
}
declare module "d3-cloud" {
  import typeof * as d3 from "d3";

  declare export default typeof undefined.cloud;
}
