declare module "architect" {
  import type { EventEmitter } from "events";

  declare export type Config = any;
  declare export type Service = any;
  declare export type Plugin = any;
  declare export function loadConfig(
    configPath: string,
    callback?: (err: Error, config: Config) => void
  ): void;

  declare export function createApp(
    config: Config,
    callback?: (err: Error, app: Architect) => void
  ): Architect;

  declare export type Architect = {
    on(
      event: "service",
      listener: (name: string, service: Service, plugin: Plugin) => void
    ): this,
    on(event: "plugin", listener: (plugin: Plugin) => void): this,
    on(event: "ready", listener: (app: Architect) => void): this,
    on(event: "error", listener: (error: Error) => void): this,
    getService(name: string): any
  } & EventEmitter;
}
