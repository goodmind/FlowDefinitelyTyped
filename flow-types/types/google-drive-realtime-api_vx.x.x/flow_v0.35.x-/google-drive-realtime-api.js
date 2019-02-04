declare module 'google-drive-realtime-api' {
        
      declare var npm$namespace$databinding: {
        bindString: typeof databinding$bindString,
        
      }
declare export interface databinding$Binding {
collaborativeObject: realtime$CollaborativeObject,
domElement: Element,
unbind(): void
} 

declare export function databinding$bindString(
s: realtime$CollaborativeString,
textinput: HTMLInputElement): databinding$Binding

	
      declare var npm$namespace$rtclient: {
        createRealtimeFile: typeof rtclient$createRealtimeFile,
        RealtimeLoader: typeof rtclient$RealtimeLoader,
      }
declare export interface rtclient$RealtimeLoader {
start(): void,
load(): void,
handleErrors(e: gapi$gapi$drive.realtime.realtime$Error): void
} 

declare interface rtclient$RealtimeLoaderFactory {
new (options: rtclient$LoaderOptions): rtclient$RealtimeLoader
} 

declare export interface rtclient$LoaderOptions {
appId: string,
autoCreate: boolean,
clientId: string,
authButtonElementId: string,
newFileMimeType: string,
registerTypes: () => void,
defaultTitle: string,
afterAuth: () => void,
initializeModel: (model: gapi$gapi$drive.realtime.realtime$Model) => void,
onFileLoaded: (rtdoc: gapi$gapi$drive.realtime.realtime$Document) => void
} 

declare export interface rtclient$DriveAPIFileResource {
id: string
} 

declare export interface rtclient$ClientUtils {
rtclient$params: {
fileIds: string
},
rtclient$RealtimeLoader: rtclient$RealtimeLoaderFactory,

/**
 * Creates a new Realtime file.
 * @param {string} title title of the newly created file.
 * @param {string} mimeType the MIME type of the new file.
 * @param {(file: rtclient$DriveAPIFileResource) => void} callback the callback to call after creation.
 */
createRealtimeFile(
title: string,
mimeType: string,
callback: (file: rtclient$DriveAPIFileResource) => void): void
} 

declare export var rtclient$RealtimeLoader: rtclient$RealtimeLoaderFactory;


/**
 * Creates a new Realtime file.
 * @param {string} title title of the newly created file.
 * @param {string} mimeType the MIME type of the new file.
 * @param {(file: rtclient$DriveAPIFileResource) => void} callback the callback to call after creation.
 */
declare export function rtclient$createRealtimeFile(
title: string,
mimeType: string,
callback: (file: rtclient$DriveAPIFileResource) => void): void



      declare var npm$namespace$params: {
        
        fileIds: typeof params$fileIds,
      }
declare export var params$fileIds: string;
    }
