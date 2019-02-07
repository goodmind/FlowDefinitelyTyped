declare module "redis-scripto" {
  import typeof * as redis from "redis";

  declare class Scripto {
    constructor(redisClient: redis.RedisClient): this;
    eval(
      scriptName: string,
      keys: string[],
      args: any[],
      callback: (err: Error, result: any) => void
    ): void;
    evalSha(
      scriptName: string,
      keys: string[],
      args: any[],
      callback: (err: Error, result: any) => void
    ): void;
    load(scripts: Scripto$Scripto$Scripts): void;
    loadFromDir(scriptsDir: string): void;
    loadFromFile(name: string, filepath: string): void;
    run(
      scriptName: string,
      keys: string[],
      args: any[],
      callback: (err: Error, result: any) => void
    ): void;
  }
  declare export type Scripto$Script = string;

  declare export interface Scripto$Scripts {
    [scriptName: string]: Scripto$Script;
  }
  declare module.exports: typeof Scripto;
}
