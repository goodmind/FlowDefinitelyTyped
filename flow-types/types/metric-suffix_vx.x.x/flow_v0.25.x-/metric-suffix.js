declare module "metric-suffix" {
  declare module.exports: typeof metric_suffix;

  declare function metric_suffix(value: number, precision?: number): string;
}
