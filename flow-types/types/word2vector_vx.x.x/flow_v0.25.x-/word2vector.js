declare module "word2vector" {
  declare export function w2v(): any;

  declare export function load(modelfile: string, filetype?: string): boolean;

  declare export function getVector(word: string): number[];

  declare export function getVectors(words: string[]): number[][];

  declare export function getNeighbors(
    vector: number[],
    opt?: { [key: string]: any }
  ): { [key: string]: any }[];

  declare export function getSimilarWords(
    word: string,
    options?: { [key: string]: any }
  ): { [key: string]: any }[];

  declare export function bin2txt(binFile: string): boolean;

  declare export function add(
    p1: number[],
    p2: number[],
    opt?: { [key: string]: any }
  ): any;

  declare export function add(
    p1: string,
    p2: string,
    opt?: { [key: string]: any }
  ): any;

  declare export function substract(
    p1: string,
    p2: string,
    opt?: { [key: string]: any }
  ): any;

  declare export function substract(
    p1: number[],
    p2: number[],
    opt?: { [key: string]: any }
  ): any;

  declare export function similarity(
    w1: string,
    w2: string,
    options?: { [key: string]: any }
  ): any;

  declare export function train(
    trainFile: string,
    modelFile: string,
    options?: { [key: string]: any },
    callback?: () => void
  ): void;
}
