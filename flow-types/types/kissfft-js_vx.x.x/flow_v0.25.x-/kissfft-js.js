declare module "kissfft-js" {
  declare export class FFT {
    constructor(size: number): this;
    forward(input: number[]): number[];
    inverse(input: number[]): number[];
    dispose(): void;
  }
  declare export class FFTR {
    constructor(size: number): this;
    forward(input: number[]): number[];
    inverse(input: number[]): number[];
    dispose(): void;
  }
}
