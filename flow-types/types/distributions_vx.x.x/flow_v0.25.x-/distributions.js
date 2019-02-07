declare module "distributions" {
  declare export function Normal(mean?: number, sd?: number): Distribution;

  declare export function Studentt(df: number): Distribution;

  declare export function Uniform(a?: number, b?: number): Distribution;

  declare export function Binomial(
    properbility: number,
    size: number
  ): Distribution;

  declare export interface Distribution {
    pdf: (x: number) => number;
    cdf: (x: number) => number;
    inv: (p: number) => number;
    mean: () => number;
    median: () => number;
    variance: () => number;
  }
}
