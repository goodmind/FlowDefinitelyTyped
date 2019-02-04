declare module 'google.picker' {
        
      declare var npm$namespace$picker: {
        
        DocsViewMode: typeof picker$DocsViewMode,
Feature: typeof picker$Feature,
ViewId: typeof picker$ViewId,
Action: typeof picker$Action,
Document: typeof picker$Document,
Response: typeof picker$Response,
Type: typeof picker$Type,
      }
declare export class picker$PickerBuilder  {
constructor(): this;
addView(viewOrId: any): picker$PickerBuilder;
addViewGroup(viewGroup: any): picker$PickerBuilder;
disableFeature(feature: string): picker$PickerBuilder;
enableFeature(feature: string): picker$PickerBuilder;
getRelayUrl(): string;
getTitle(): string;
hideTitleBar(): picker$PickerBuilder;
isFeatureEnabled(feature: string): boolean;
setAppId(appId: string): picker$PickerBuilder;
setCallback(method: Function): picker$PickerBuilder;
setDeveloperKey(key: string): picker$PickerBuilder;
setDocument(document: string): picker$PickerBuilder;
setLocale(locale: string): picker$PickerBuilder;
setMaxItems(max: number): picker$PickerBuilder;
setOAuthToken(token: string): picker$PickerBuilder;
setOrigin(origin: string): picker$PickerBuilder;
setRelayUrl(url: string): picker$PickerBuilder;
setSelectableMimeTypes(type: string): picker$PickerBuilder;
setSize(width: number, height: number): picker$PickerBuilder;
setTitle(title: string): picker$PickerBuilder;
setUploadToAlbumId(albumId: string): picker$PickerBuilder;
toUri(): string;
build(): picker$Picker
}


/**
 * Picker is the top level object representing the UI action with the user. These objects are not created directly, but instead use the PickerBuilder object.
 */
declare export interface picker$Picker {
isVisible(): boolean,
setCallback(method: Function): picker$Picker,
setRelayUrl(url: string): picker$Picker,
setVisible(visible: boolean): picker$Picker
} 


/**
 * Use DocsUploadView to upload documents to Google Drive.
 */
declare export class picker$DocsUploadView  {
constructor(): this;
setIncludeFolders(included: boolean): picker$DocsUploadView;
setParent(parentId: string): picker$DocsUploadView
}


/**
 * DocsView is a subclass of View that can be used for Google Drive views.
 */
declare export class picker$DocsView  {
constructor(viewId?: string): this;
setIncludeFolders(included: boolean): picker$DocsView;
setSelectFolderEnabled(enabled: boolean): picker$DocsView;
setMode(mode: string): picker$DocsView;
setOwnedByMe(me?: boolean): picker$DocsView;
setParent(parentId: string): picker$DocsView;
setStarred(starred: boolean): picker$DocsView;
setEnableTeamDrives(enabled: boolean): picker$DocsView
}


/**
 * DocsViewMode is an enumerated type for displaying data within a DocsView. Use these values in calls to DocsView.setMode.
 */
declare export var picker$DocsViewMode: {
GRID: string,
LIST: string
};

declare export var picker$Feature: {
MINE_ONLY: string,
MULTISELECT_ENABLED: string,
NAV_HIDDEN: string,
SIMPLE_UPLOAD_ENABLED: string,
SUPPORT_TEAM_DRIVES: string
};

declare export var picker$ViewId: {
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

declare export var picker$Action: {
CANCEL: string,
PICKED: string
};


/**
 * Document is an enumerated type used to convey information about a specific picked item. Only fields which are relevant to the selected item are returned. This value will be in the Response.DOCUMENTS field in the callback data.
 */
declare export var picker$Document: {
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
declare export var picker$Response: {
ACTION: string,
DOCUMENTS: string,
PARENTS: string,
VIEW: string
};

declare export var picker$Type: {
ALBUM: string,
DOCUMENT: string,
LOCATION: string,
PHOTO: string,
URL: string,
VIDEO: string
};
    }
