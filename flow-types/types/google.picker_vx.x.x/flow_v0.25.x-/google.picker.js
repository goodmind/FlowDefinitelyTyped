declare module "google.picker" {
  declare var npm$namespace$google: {
    picker: typeof npm$namespace$google$picker
  };

  declare var npm$namespace$google$picker: {
    DocsViewMode: typeof google$picker$DocsViewMode,
    Feature: typeof google$picker$Feature,
    ViewId: typeof google$picker$ViewId,
    Action: typeof google$picker$Action,
    Document: typeof google$picker$Document,
    Response: typeof google$picker$Response,
    Type: typeof google$picker$Type,

    PickerBuilder: typeof google$picker$PickerBuilder,
    DocsUploadView: typeof google$picker$DocsUploadView,
    DocsView: typeof google$picker$DocsView
  };
  declare export class google$picker$PickerBuilder {
    constructor(): this;
    addView(viewOrId: any): google$picker$PickerBuilder;
    addViewGroup(viewGroup: any): google$picker$PickerBuilder;
    disableFeature(feature: string): google$picker$PickerBuilder;
    enableFeature(feature: string): google$picker$PickerBuilder;
    getRelayUrl(): string;
    getTitle(): string;
    hideTitleBar(): google$picker$PickerBuilder;
    isFeatureEnabled(feature: string): boolean;
    setAppId(appId: string): google$picker$PickerBuilder;
    setCallback(method: Function): google$picker$PickerBuilder;
    setDeveloperKey(key: string): google$picker$PickerBuilder;
    setDocument(document: string): google$picker$PickerBuilder;
    setLocale(locale: string): google$picker$PickerBuilder;
    setMaxItems(max: number): google$picker$PickerBuilder;
    setOAuthToken(token: string): google$picker$PickerBuilder;
    setOrigin(origin: string): google$picker$PickerBuilder;
    setRelayUrl(url: string): google$picker$PickerBuilder;
    setSelectableMimeTypes(type: string): google$picker$PickerBuilder;
    setSize(width: number, height: number): google$picker$PickerBuilder;
    setTitle(title: string): google$picker$PickerBuilder;
    setUploadToAlbumId(albumId: string): google$picker$PickerBuilder;
    toUri(): string;
    build(): picker$Picker;
  }

  /**
   * Picker is the top level object representing the UI action with the user. These objects are not created directly, but instead use the PickerBuilder object.
   */
  declare export interface google$picker$Picker {
    isVisible(): boolean;
    setCallback(method: Function): google$picker$Picker;
    setRelayUrl(url: string): google$picker$Picker;
    setVisible(visible: boolean): google$picker$Picker;
  }

  /**
   * Use DocsUploadView to upload documents to Google Drive.
   */
  declare export class google$picker$DocsUploadView {
    constructor(): this;
    setIncludeFolders(included: boolean): google$picker$DocsUploadView;
    setParent(parentId: string): google$picker$DocsUploadView;
  }

  /**
   * DocsView is a subclass of View that can be used for Google Drive views.
   */
  declare export class google$picker$DocsView {
    constructor(viewId?: string): this;
    setIncludeFolders(included: boolean): google$picker$DocsView;
    setSelectFolderEnabled(enabled: boolean): google$picker$DocsView;
    setMode(mode: string): google$picker$DocsView;
    setOwnedByMe(me?: boolean): google$picker$DocsView;
    setParent(parentId: string): google$picker$DocsView;
    setStarred(starred: boolean): google$picker$DocsView;
    setEnableTeamDrives(enabled: boolean): google$picker$DocsView;
  }

  /**
   * DocsViewMode is an enumerated type for displaying data within a DocsView. Use these values in calls to DocsView.setMode.
   */
  declare export var google$picker$DocsViewMode: {
    GRID: string,
    LIST: string
  };

  declare export var google$picker$Feature: {
    MINE_ONLY: string,
    MULTISELECT_ENABLED: string,
    NAV_HIDDEN: string,
    SIMPLE_UPLOAD_ENABLED: string,
    SUPPORT_TEAM_DRIVES: string
  };

  declare export var google$picker$ViewId: {
    DOCS: string,
    DOCS_IMAGES: string,
    DOCS_IMAGES_AND_VIDEOS: string,
    DOCS_VIDEOS: string,
    DOCUMENTS: string,
    DRAWINGS: string,
    FOLDERS: string,
    FORMS: string,
    IMAGE_SEARCH: string,
    MAPS: string,
    PDFS: string,
    PHOTOS: string,
    PHOTO_ALBUMS: string,
    PHOTO_UPLOAD: string,
    PRESENTATIONS: string,
    RECENTLY_PICKED: string,
    SPREADSHEETS: string,
    VIDEO_SEARCH: string,
    WEBCAM: string,
    YOUTUBE: string
  };

  declare export var google$picker$Action: {
    CANCEL: string,
    PICKED: string
  };

  /**
   * Document is an enumerated type used to convey information about a specific picked item. Only fields which are relevant to the selected item are returned. This value will be in the Response.DOCUMENTS field in the callback data.
   */
  declare export var google$picker$Document: {
    ADDRESS_LINES: string,
    AUDIENCE: string,
    DESCRIPTION: string,
    DURATION: string,
    EMBEDDABLE_URL: string,
    ICON_URL: string,
    ID: string,
    IS_NEW: string,
    LAST_EDITED_UTC: string,
    LATITUDE: string,
    LONGITUDE: string,
    MIME_TYPE: string,
    NAME: string,
    NUM_CHILDREN: string,
    PARENT_ID: string,
    PHONE_NUMBERS: string,
    SERVICE_ID: string,
    THUMBNAILS: string,
    TYPE: string,
    URL: string
  };

  /**
   * Response is an enumerated type used to convey information about the user's picked items.
   */
  declare export var google$picker$Response: {
    ACTION: string,
    DOCUMENTS: string,
    PARENTS: string,
    VIEW: string
  };

  declare export var google$picker$Type: {
    ALBUM: string,
    DOCUMENT: string,
    LOCATION: string,
    PHOTO: string,
    URL: string,
    VIDEO: string
  };
}
