declare module 'gapi.drive' {
        declare module 'drive' {
        declare var files: {
get: (parameters: GetParameters) => HttpRequest<FileResource>,
patch: (parameters: PatchParameters) => HttpRequest<FileResource>,
copy: (parameters: CopyParameters) => HttpRequest<FileResource>,
delete: (parameters: DeleteParameters) => HttpRequest<any>,
emptyTrash: () => HttpRequest<any>,
export: (parameters: ExportParameters) => HttpRequest<FileResource>,
generateIds: (parameters: GenerateIdsParameters) => HttpRequest<IdsResource>,
insert: (parameters: InsertParameters) => HttpRequest<FileResource>,
list: (parameters: ListParameters) => HttpRequest<FileListResource>,
touch: (parameters: TouchParameters) => HttpRequest<FileResource>,
trash: (parameters: TrashParameters) => HttpRequest<FileResource>,
untrash: (parameters: UntrashParameters) => HttpRequest<FileResource>,
watch: (parameters: WatchParameters) => HttpRequest<ChannelResource>
};
	declare interface GetParameters {
fileId: string,
acknowledgeAbuse?: boolean,
projection?: string,
revisionId?: string,
supportsTeamDrives?: boolean,
updateViewedDate?: boolean
} 
	declare interface PatchParameters {
fileId: string,
resource?: FileResource,
convert?: boolean,
modifiedDateBehavior?: string,
newRevision?: boolean,
ocr?: boolean,
ocrLanguage?: string,
pinned?: boolean,
removeParents?: string,
setModifiedDate?: boolean,
supportsTeamDrives?: boolean,
timedTextLanguage?: string,
timedTextTrackName?: string,
updateViewedData?: boolean,
useContentAsIndexableText?: boolean
} 
	declare interface CopyParameters {
fileId: string,
resource?: FileResource,
convert?: boolean,
ocr?: boolean,
ocrLanguage?: string,
pinned?: boolean,
supportsTeamDrives?: boolean,
timedTextLanguage?: string,
timedTextTrackName?: string,
visibility?: string
} 
	declare interface DeleteParameters {
fileId: string,
supportsTeamDrives?: boolean
} 
	declare interface ExportParameters {
fileId: string,
mimeType: string
} 
	declare interface GenerateIdsParameters {
maxResults?: number,
space?: string
} 
	declare interface InsertParameters {
uploadType: string,
convert?: boolean,
ocr?: boolean,
ocrLanguage?: string,
pinned?: boolean,
supportsTeamDrives?: boolean,
timedTextLanguage?: string,
timedTextTrackName?: string,
usecontentAsIndexableText?: boolean,
visibility?: string
} 
	declare interface ListParameters {
corpora?: string,
corpus?: string,
includeTeamDriveItems?: boolean,
maxResults?: number,
orderBy?: string,
pageToken?: string,
projection?: string,
q?: string,
spaces?: string,
supportsTeamDrives?: boolean,
teamDriveId?: string
} 
	declare interface TouchParameters {
fileId: string,
supportsTeamDrives?: boolean
} 
	declare interface TrashParameters {
fileId: string,
supportsTeamDrives?: boolean
} 
	declare interface UntrashParameters {
fileId: string,
supportsTeamDrives?: boolean
} 
	declare interface WatchParameters {
fileId: string,
resource?: WatchResource,
revisionId?: string,
supportsTeamDrives?: boolean
} 
	declare interface FileResource {
kind: "drive#file",
id: string,
etag: string,
selfLink: string,
webContentLink: string,
webViewLink: string,
alternateLink: string,
embedLink: string,
defaultOpenWithLink: string,
iconLink: string,
hasThumbnail: boolean,
thumbnailLink: string,
thumbnail: {
image: Uint8Array,
mimType: string
},
title: string,
mimeType: string,
description: string,
labels: {
starred: boolean,
hidden: boolean,
trashed: boolean,
restricted: boolean,
viewed: boolean,
modified: boolean
},
createdDate: Date,
modifiedDate: Date,
modifiedByMeDate: Date,
lastViewedByMeDate: Date,
markedViewedByMeDate: Date,
sharedWithMeDate: Date,
version: number,
sharingUser: {
kind: "drive#user",
displayName: string,
picture: {
url: string
},
isAuthenticatedUser: boolean,
permissionId: string,
emailAddress: string
},
parents: ParentResource[],
downloadUrl: string,
indexableText: {
text: string
},
userPermission: PermissionResource,
permissions: PermissionResource[],
hasAugmentedPermissions: boolean,
originalFilename: string,
fileExtension: string,
fullFileExtension: string,
md5Checksum: string,
fileSize: number,
quotaBytesUsed: number,
ownerNames: string[],
owners: {
kind: "drive#user",
displayName: string,
picture: {
url: string
},
isAuthenticatedUser: boolean,
permissionId: string,
emailAddress: string
}[],
teamDriveId: string,
lastModifyingUserName: string,
lastModifyingUser: {
kind: "drive#user",
displayName: string,
picture: {
url: string
},
isAuthenticatedUser: boolean,
permissionId: string,
emailAddress: string
},
ownedByMe: boolean,
capabilities: {
canAddChildren: boolean,
canChangeRestrictedDownload: boolean,
canComment: boolean,
canCopy: boolean,
canDelete: boolean,
canDownload: boolean,
canEdit: boolean,
canListChildren: boolean,
canMoveItemIntoTeamDrive: boolean,
canMoveTeamDriveItem: boolean,
canReadRevisions: boolean,
canReadTeamDrive: boolean,
canRemoveChildren: boolean,
canRename: boolean,
canShare: boolean,
canTrash: boolean,
canUntrash: boolean
},
editable: boolean,
canComment: boolean,
canReadRevisions: boolean,
shareable: boolean,
copyable: boolean,
writersCanShare: boolean,
shared: boolean,
explicitlyTrashed: boolean,
trashingUser: {
kind: "drive#user",
displayName: string,
picture: {
url: string
},
isAuthenticatedUser: boolean,
permissionId: string,
emailAddress: string
},
trashedDate: Date,
appDataContents: boolean,
headRevisionId: string,
properties: PropertiesResource[],
folderColorRgb: string,
imageMediaMetadata: {
width: number,
height: number,
rotation: number,
location: {
latitude: number,
longitude: number,
altitude: number
},
date: string,
cameraMake: string,
cameraModel: string,
exposureTime: number,
aperture: number,
flashUsed: boolean,
focalLength: number,
isoSpeed: number,
meteringMode: string,
sensor: string,
exposureMode: string,
colorSpace: string,
whiteBalance: string,
exposureBias: number,
maxApertureValue: number,
subjectDistance: number,
lens: string
},
videoMediaMetadata: {
width: number,
height: number,
durationMillis: number
},
spaces: string[],
isAppAuthorized: boolean
} 
	declare interface FileListResource {
kind: "drive#fileList",
etag: string,
selfLink: string,
nextPageToken: string,
nextLink: string,
incompleteSearch: boolean,
items: FileResource[]
} 
	declare interface ParentResource {
kind: "drive#parentReference",
id: string,
selfLink: string,
parentLink: string,
isRoot: boolean
} 
	declare interface PermissionResource {
kind: "drive#permission",
etag: string,
id: string,
selfLink: string,
name: string,
emailAddress: string,
domain: string,
role: string,
additionalRoles: string[],
type: string,
value: string,
authKey: string,
withLink: boolean,
photoLink: string,
expirationDate: Date,
teamDrivePermissionDetails: {
teamDrivePermissionType: string,
role: string,
additionalRoles: string[],
inheritedFrom: string,
inherited: boolean
}[],
deleted: boolean
} 
	declare interface PropertiesResource {
kind: "drive$property",
etag: string,
selfLink: string,
key: string,
visibility: string,
value: string
} 
	declare interface WatchResource {
id: string,
expiration: number,
token: string,
type: string,
address: string
} 
	declare interface ChannelResource {
kind: "api#channel",
id: string,
resourceId: string,
resourceUri: string,
token: string,
expiration: number
} 
	declare interface IdsResource {
kind: "drive#generatedIds",
space: string,
ids: string[]
} 
    }

    }
