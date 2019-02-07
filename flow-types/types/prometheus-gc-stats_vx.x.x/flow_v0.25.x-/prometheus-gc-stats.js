declare module "prometheus-gc-stats" {
  declare function gcStats(register: any): () => void;

  declare module.exports: typeof gcStats;
}
