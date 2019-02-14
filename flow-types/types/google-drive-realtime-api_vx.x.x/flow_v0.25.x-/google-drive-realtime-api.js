declare module "google-drive-realtime-api" {
  declare var npm$namespace$gapi: {
    drive: typeof npm$namespace$gapi$drive
  };

  declare var npm$namespace$gapi$drive: {
    realtime: typeof npm$namespace$gapi$drive$realtime
  };

  declare var npm$namespace$gapi$drive$realtime: {
    databinding: typeof npm$namespace$gapi$drive$realtime$databinding
  };

  declare var npm$namespace$gapi$drive$realtime$databinding: {
    bindString: typeof gapi$drive$realtime$databinding$bindString
  };
  declare export interface gapi$drive$realtime$databinding$Binding {
    collaborativeObject: realtime$CollaborativeObject;
    domElement: Element;
    unbind(): void;
  }

  declare export function gapi$drive$realtime$databinding$bindString(
    s: realtime$CollaborativeString,
    textinput: HTMLInputElement
  ): gapi$drive$realtime$databinding$Binding;

  declare var npm$namespace$rtclient: {
    createRealtimeFile: typeof rtclient$createRealtimeFile,
    RealtimeLoader: typeof rtclient$RealtimeLoader,

    params: typeof npm$namespace$rtclient$params
  };
  declare export interface rtclient$RealtimeLoader {
    start(): void;
    load(): void;
    handleErrors(e: gapi$drive$realtime$Error): void;
  }

  declare interface rtclient$RealtimeLoaderFactory {
    new(options: rtclient$LoaderOptions): rtclient$RealtimeLoader;
  }

  declare export interface rtclient$LoaderOptions {
    appId: string;
    autoCreate: boolean;
    clientId: string;
    authButtonElementId: string;
    newFileMimeType: string;
    registerTypes: () => void;
    defaultTitle: string;
    afterAuth: () => void;
    initializeModel: (model: gapi$drive$realtime$Model) => void;
    onFileLoaded: (rtdoc: gapi$drive$realtime$Document) => void;
  }

  declare export interface rtclient$DriveAPIFileResource {
    id: string;
  }

  declare export interface rtclient$ClientUtils {
    params: {
      fileIds: string
    };
    RealtimeLoader: rtclient$RealtimeLoaderFactory;

    /**
     * Creates a new Realtime file.
     * @param {string} title title of the newly created file.
     * @param {string} mimeType the MIME type of the new file.
     * @param {(file: rtclient$DriveAPIFileResource) => void} callback the callback to call after creation.
     */
    createRealtimeFile(
      title: string,
      mimeType: string,
      callback: (file: rtclient$DriveAPIFileResource) => void
    ): void;
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
    callback: (file: rtclient$DriveAPIFileResource) => void
  ): void;

  declare var npm$namespace$rtclient$params: {
    fileIds: typeof rtclient$params$fileIds
  };
  declare export var rtclient$params$fileIds: string;
}
