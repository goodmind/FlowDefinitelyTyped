declare module "probability-distributions" {
  declare export function prng(len: number): number;

  declare export function rbeta(
    n: number,
    alpha: number,
    beta: number,
    loc: number
  ): number[];

  declare export function rbinom(n: number, size: number, p: number): number[];

  declare export function rcauchy(
    n: number,
    loc: number,
    scale: number
  ): number[];

  declare export function rchisq(n: number, df: number, ncp: number): number[];

  declare export function dexp(x: number, rate: number): number;

  declare export function rexp(n: number, rate: number): number[];

  declare export function rf(n: number, df1: number, df2: number): number[];

  declare export function rgamma(
    n: number,
    alpha: number,
    rate: number
  ): number[];

  declare export function rint(
    n: number,
    min: number,
    max: number,
    inclusive: number
  ): number[];

  declare export function rlaplace(
    n: number,
    loc: number,
    scale: number
  ): number[];

  declare export function rlnorm(
    n: number,
    meanlog: number,
    sdlog: number
  ): number[];

  declare export function rnbinom(
    n: number,
    size: number,
    p: number,
    mu: number
  ): number[];

  declare export function dnorm(x: number, mean: number, sd: number): number[];

  declare export function rnorm(n: number, mean: number, sd: number): number[];

  declare export function dpois(x: number, lambda: number): number[];

  declare export function rpois(n: number, lambda: number): number[];

  declare export function dunif(x: number, min: number, max: number): number;

  declare export function runif(n: number, min: number, max: number): number[];

  declare export function rword(len: number, alphabet: string): string;

  declare export function sample(
    collection: any[],
    n: number,
    replace: boolean,
    ratios: number
  ): any[];

  declare export function visualize(
    data: any[],
    domID: string,
    options: any
  ): any;

  declare export function rfml(
    n: number,
    loc: number,
    p: number,
    cap: number,
    trace: any
  ): number[];

  declare export function ruf(n: number): number[];
}
