declare module "angular" {
  declare export interface progressLite$INgProgressLite {
    set(num: number): progressLite$INgProgressLite;
    get(): number;
    start(): progressLite$INgProgressLite;
    inc(amount?: number): progressLite$INgProgressLite;
    done(): void;
  }

  declare export interface progressLite$IConfigurationOptions {
    minimum: number;
    speed: number;
    ease: string;
    trickleRate: number;
    trickleSpeed: number;
    template: string;
  }

  declare export interface progressLite$INgProgressLiteProvider {
    settings: progressLite$IConfigurationOptions;
  }
}
declare module "ngprogress-lite" {
  import typeof * as angular from "angular";
}
