declare module "leaflet" {
  declare var npm$namespace$TileLayer: {
    Provider: typeof TileLayer$Provider,
    Provider: typeof npm$namespace$TileLayer$Provider
  };
  declare class TileLayer$Provider mixins TileLayer {
    constructor(
      provider: string,
      options?: TileLayerOptions & {
        [name: string]: string
      }
    ): this;
  }

  declare var npm$namespace$TileLayer$Provider: {
    providers: typeof TileLayer$Provider$providers
  };
  declare var TileLayer$Provider$providers: Provider$ProvidersMap;

  declare interface TileLayer$Provider$ProvidersMap {
    [providerName: string]: Provider$ProviderConfig;
  }

  declare interface TileLayer$Provider$ProviderConfig {
    url: string;
    options?: TileLayerOptions;
    variants?: {
      [variantName: string]: string | TileLayer$Provider$ProviderConfig
    };
  }

  declare var npm$namespace$tileLayer: {
    provider: typeof tileLayer$provider
  };
  declare function tileLayer$provider(
    provider: string,
    options?: TileLayerOptions & {
      [name: string]: string
    }
  ): TileLayer$Provider;
}
declare module "leaflet-providers" {
  import typeof * as L from "leaflet";
}
