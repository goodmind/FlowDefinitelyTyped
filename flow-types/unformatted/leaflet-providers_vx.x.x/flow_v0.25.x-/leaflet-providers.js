declare module 'leaflet-providers' {
        import typeof * as L from 'leaflet';

	declare module 'leaflet' {
        declare class TileLayer$Provider mixins TileLayer {
constructor(tileLayer$provider: string, options?: TileLayerOptions & {
[name: string]: string
}): this
}


      declare var npm$namespace$Provider: {
        
        providers: typeof Provider$providers,
      }
declare var Provider$providers: Provider$ProvidersMap;

declare interface Provider$ProvidersMap {
[providerName: string]: Provider$ProviderConfig
} 

declare interface Provider$ProviderConfig {
url: string,
options?: TileLayerOptions,
variants?: {
[variantName: string]: string | Provider$ProviderConfig
}
} 
	
      declare var npm$namespace$tileLayer: {
        provider: typeof tileLayer$provider,
        
      }
declare function tileLayer$provider(
tileLayer$provider: string,
options?: TileLayerOptions & {
[name: string]: string
}): TileLayer$TileLayer$Provider

    }

    }
