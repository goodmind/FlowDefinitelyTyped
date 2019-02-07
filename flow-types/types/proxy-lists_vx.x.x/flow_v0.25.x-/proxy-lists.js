declare module "proxy-lists" {
  import type { CoreOptions as RequestOptions } from "request";

  import type { EventEmitter } from "events";

  declare export function getProxies(
    options?: $Shape<Options>
  ): GetProxiesEventEmitter;

  declare export function getProxiesFromSource(
    name: string,
    options?: Options
  ): GetProxiesEventEmitter;

  declare export function addSource(name: string, source: AddSource): void;

  declare export function listSources(options?: ListSourcesOptions): Source[];

  declare export class GetProxiesEventEmitter mixins EventEmitter {
    on(event: "data", listener: (proxies: Proxy[]) => void): this;
    on(event: "error", listener: (error: any) => void): this;
    on(event: "end", listener: () => void): this;
  }
  declare export interface Options {
    filterMode?: "strict" | "loose";
    countries?: string[];
    countriesBlackList?: string[];
    protocols?: Protocol[];
    anonymityLevels?: AnonymityLevel[];
    sourcesWhiteList?: string[];
    sourcesBlackList?: string[];
    series?: boolean;
    ipTypes?: IPType[];
    defaultRequestOptions?: RequestOptions;
  }
  declare export type Protocol = "http" | "https" | "socks5" | "socks4";
  declare export type AnonymityLevel = "transparent" | "anonymous" | "elite";
  declare export type IPType = "ipv4" | "ipv6";
  declare export interface Proxy {
    ipAddress: string;
    port: number;
    country: string;
    anonymityLevel?: AnonymityLevel;
    protocols?: Protocol[];
    source: string;
    tunnel?: boolean;
  }
  declare export type InternalOptions = {
    sample?: boolean
  } & Options;

  declare export interface AddSource {
    homeUrl: string;
    getProxies(options: InternalOptions): GetProxiesEventEmitter;
  }
  declare export interface ListSourcesOptions {
    sourcesWhiteList?: string[];
    sourcesBlackList?: string[];
  }
  declare export interface Source {
    name: string;
    homeUrl: string;
  }
}
