declare module 'google-maps' {
        
      declare var npm$namespace$GoogleMapsLoader: {
        release: typeof GoogleMapsLoader$release,
onLoad: typeof GoogleMapsLoader$onLoad,
load: typeof GoogleMapsLoader$load,
isLoaded: typeof GoogleMapsLoader$isLoaded,
createLoader: typeof GoogleMapsLoader$createLoader,
createUrl: typeof GoogleMapsLoader$createUrl,
makeMock: typeof GoogleMapsLoader$makeMock,
        KEY: typeof GoogleMapsLoader$KEY,
URL: typeof GoogleMapsLoader$URL,
LIBRARIES: typeof GoogleMapsLoader$LIBRARIES,
CLIENT: typeof GoogleMapsLoader$CLIENT,
CHANNEL: typeof GoogleMapsLoader$CHANNEL,
LANGUAGE: typeof GoogleMapsLoader$LANGUAGE,
REGION: typeof GoogleMapsLoader$REGION,
VERSION: typeof GoogleMapsLoader$VERSION,
WINDOW_CALLBACK_NAME: typeof GoogleMapsLoader$WINDOW_CALLBACK_NAME,
      }
declare type GoogleMapsLoader$google = {
maps: typeof undefined
};

declare interface GoogleMapsLoader$CallBack {
(GoogleMapsLoader$google: GoogleMapsLoader$google): void
} 

declare export var GoogleMapsLoader$KEY: string;

declare export var GoogleMapsLoader$URL: string;

declare export var GoogleMapsLoader$LIBRARIES: Array<string>;

declare export var GoogleMapsLoader$CLIENT: string;

declare export var GoogleMapsLoader$CHANNEL: string;

declare export var GoogleMapsLoader$LANGUAGE: string;

declare export var GoogleMapsLoader$REGION: string;

declare export var GoogleMapsLoader$VERSION: string;

declare export var GoogleMapsLoader$WINDOW_CALLBACK_NAME: string;

declare export function GoogleMapsLoader$release(callBack: Function): void


declare export function GoogleMapsLoader$onLoad(callBack?: GoogleMapsLoader$CallBack): void


declare export function GoogleMapsLoader$load(callBack?: GoogleMapsLoader$CallBack): void


declare export function GoogleMapsLoader$isLoaded(): boolean


declare export function GoogleMapsLoader$createLoader(): void


declare export function GoogleMapsLoader$createUrl(): string


declare export function GoogleMapsLoader$makeMock(): void

	declare module.exports: typeof GoogleMapsLoader

    }
