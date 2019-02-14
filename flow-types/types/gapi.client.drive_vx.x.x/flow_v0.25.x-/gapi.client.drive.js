declare module "gapi.client.drive" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,

    drive: typeof npm$namespace$gapi$client$drive
  };

  /**
   * Load Drive API v3
   */
  declare function gapi$client$load(
    name: "drive",
    version: "v3"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "drive",
    version: "v3",
    callback: () => any
  ): void;

  declare var npm$namespace$gapi$client$drive: {
    about: typeof gapi$client$drive$about,
    changes: typeof gapi$client$drive$changes,
    channels: typeof gapi$client$drive$channels,
    comments: typeof gapi$client$drive$comments,
    files: typeof gapi$client$drive$files,
    permissions: typeof gapi$client$drive$permissions,
    replies: typeof gapi$client$drive$replies,
    revisions: typeof gapi$client$drive$revisions,
    teamdrives: typeof gapi$client$drive$teamdrives
  };
  declare interface gapi$client$drive$About {
    /**
     * Whether the user has installed the requesting app.
     */
    appInstalled?: boolean;

    /**
     * Whether the user can create Team Drives.
     */
    canCreateTeamDrives?: boolean;

    /**
     * A map of source MIME type to possible targets for all supported exports.
     */
    exportFormats?: Record<string, string[]>;

    /**
     * The currently supported folder colors as RGB hex strings.
     */
    folderColorPalette?: string[];

    /**
     * A map of source MIME type to possible targets for all supported imports.
     */
    importFormats?: Record<string, string[]>;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#about".
     */
    kind?: string;

    /**
     * A map of maximum import sizes by MIME type, in bytes.
     */
    maxImportSizes?: Record<string, string>;

    /**
     * The maximum upload size in bytes.
     */
    maxUploadSize?: string;

    /**
     * The user's storage quota limits and usage. All fields are measured in bytes.
     */
    storageQuota?: {
      /**
       * The usage limit, if applicable. This will not be present if the user has unlimited storage.
       */
      limit?: string,

      /**
       * The total usage across all services.
       */
      usage?: string,

      /**
       * The usage by all files in Google Drive.
       */
      usageInDrive?: string,

      /**
       * The usage by trashed files in Google Drive.
       */
      usageInDriveTrash?: string
    };

    /**
     * A list of themes that are supported for Team Drives.
     */
    teamDriveThemes?: Array<{
      /**
       * A link to this Team Drive theme's background image.
       */
      backgroundImageLink?: string,

      /**
       * The color of this Team Drive theme as an RGB hex string.
       */
      colorRgb?: string,

      /**
       * The ID of the theme.
       */
      id?: string
    }>;

    /**
     * The authenticated user.
     */
    user?: drive$User;
  }

  declare interface gapi$client$drive$Change {
    /**
     * The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.
     */
    file?: drive$File;

    /**
     * The ID of the file which has changed.
     */
    fileId?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#change".
     */
    kind?: string;

    /**
     * Whether the file or Team Drive has been removed from this list of changes, for example by deletion or loss of access.
     */
    removed?: boolean;

    /**
     * The updated state of the Team Drive. Present if the type is teamDrive, the user is still a member of the Team Drive, and the Team Drive has not been
     * removed.
     */
    teamDrive?: drive$TeamDrive;

    /**
     * The ID of the Team Drive associated with this change.
     */
    teamDriveId?: string;

    /**
     * The time of this change (RFC 3339 date-time).
     */
    time?: string;

    /**
     * The type of the change. Possible values are file and teamDrive.
     */
    type?: string;
  }

  declare interface gapi$client$drive$ChangeList {
    /**
     * The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    changes?: gapi$client$drive$Change[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#changeList".
     */
    kind?: string;

    /**
     * The starting page token for future changes. This will be present only if the end of the current changes list has been reached.
     */
    newStartPageToken?: string;

    /**
     * The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any
     * reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$drive$Channel {
    /**
     * The address where notifications are delivered for this channel.
     */
    address?: string;

    /**
     * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
     */
    expiration?: string;

    /**
     * A UUID or similar unique string that identifies this channel.
     */
    id?: string;

    /**
     * Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
     */
    kind?: string;

    /**
     * Additional parameters controlling delivery channel behavior. Optional.
     */
    params?: Record<string, string>;

    /**
     * A Boolean value to indicate whether payload is wanted. Optional.
     */
    payload?: boolean;

    /**
     * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
     */
    resourceId?: string;

    /**
     * A version-specific identifier for the watched resource.
     */
    resourceUri?: string;

    /**
     * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
     */
    token?: string;

    /**
     * The type of delivery mechanism used for this channel.
     */
    type?: string;
  }

  declare interface gapi$client$drive$Comment {
    /**
     * A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties.
     */
    anchor?: string;

    /**
     * The user who created the comment.
     */
    author?: drive$User;

    /**
     * The plain text content of the comment. This field is used for setting the content, while htmlContent should be displayed.
     */
    content?: string;

    /**
     * The time at which the comment was created (RFC 3339 date-time).
     */
    createdTime?: string;

    /**
     * Whether the comment has been deleted. A deleted comment has no content.
     */
    deleted?: boolean;

    /**
     * The content of the comment with HTML formatting.
     */
    htmlContent?: string;

    /**
     * The ID of the comment.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#comment".
     */
    kind?: string;

    /**
     * The last time the comment or any of its replies was modified (RFC 3339 date-time).
     */
    modifiedTime?: string;

    /**
     * The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location
     * of the comment.
     */
    quotedFileContent?: {
      /**
       * The MIME type of the quoted content.
       */
      mimeType?: string,

      /**
       * The quoted content itself. This is interpreted as plain text if set through the API.
       */
      value?: string
    };

    /**
     * The full list of replies to the comment in chronological order.
     */
    replies?: drive$Reply[];

    /**
     * Whether the comment has been resolved by one of its replies.
     */
    resolved?: boolean;
  }

  declare interface gapi$client$drive$CommentList {
    /**
     * The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    comments?: gapi$client$drive$Comment[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#commentList".
     */
    kind?: string;

    /**
     * The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any
     * reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$drive$File {
    /**
     * A collection of arbitrary key-value pairs which are private to the requesting app.
     * Entries with null values are cleared in update and copy requests.
     */
    appProperties?: Record<string, string>;

    /**
     * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
     */
    capabilities?: {
      /**
       * Whether the current user can add children to this folder. This is always false when the item is not a folder.
       */
      canAddChildren?: boolean,

      /**
       * Whether the current user can change whether viewers can copy the contents of this file.
       */
      canChangeViewersCanCopyContent?: boolean,

      /**
       * Whether the current user can comment on this file.
       */
      canComment?: boolean,

      /**
       * Whether the current user can copy this file. For a Team Drive item, whether the current user can copy non-folder descendants of this item, or this item
       * itself if it is not a folder.
       */
      canCopy?: boolean,

      /**
       * Whether the current user can delete this file.
       */
      canDelete?: boolean,

      /**
       * Whether the current user can download this file.
       */
      canDownload?: boolean,

      /**
       * Whether the current user can edit this file.
       */
      canEdit?: boolean,

      /**
       * Whether the current user can list the children of this folder. This is always false when the item is not a folder.
       */
      canListChildren?: boolean,

      /**
       * Whether the current user can move this item into a Team Drive. If the item is in a Team Drive, this field is equivalent to canMoveTeamDriveItem.
       */
      canMoveItemIntoTeamDrive?: boolean,

      /**
       * Whether the current user can move this Team Drive item by changing its parent. Note that a request to change the parent for this item may still fail
       * depending on the new parent that is being added. Only populated for Team Drive files.
       */
      canMoveTeamDriveItem?: boolean,

      /**
       * Whether the current user can read the revisions resource of this file. For a Team Drive item, whether revisions of non-folder descendants of this item,
       * or this item itself if it is not a folder, can be read.
       */
      canReadRevisions?: boolean,

      /**
       * Whether the current user can read the Team Drive to which this file belongs. Only populated for Team Drive files.
       */
      canReadTeamDrive?: boolean,

      /**
       * Whether the current user can remove children from this folder. This is always false when the item is not a folder.
       */
      canRemoveChildren?: boolean,

      /**
       * Whether the current user can rename this file.
       */
      canRename?: boolean,

      /**
       * Whether the current user can modify the sharing settings for this file.
       */
      canShare?: boolean,

      /**
       * Whether the current user can move this file to trash.
       */
      canTrash?: boolean,

      /**
       * Whether the current user can restore this file from trash.
       */
      canUntrash?: boolean
    };

    /**
     * Additional information about the content of the file. These fields are never populated in responses.
     */
    contentHints?: {
      /**
       * Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.
       */
      indexableText?: string,

      /**
       * A thumbnail for the file. This will only be used if Drive cannot generate a standard thumbnail.
       */
      thumbnail?: {
        /**
         * The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).
         */
        image?: string,

        /**
         * The MIME type of the thumbnail.
         */
        mimeType?: string
      }
    };

    /**
     * The time at which the file was created (RFC 3339 date-time).
     */
    createdTime?: string;

    /**
     * A short description of the file.
     */
    description?: string;

    /**
     * Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
     */
    explicitlyTrashed?: boolean;

    /**
     * The final component of fullFileExtension. This is only available for files with binary content in Drive.
     */
    fileExtension?: string;

    /**
     * The color for a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource.
     * If an unsupported color is specified, the closest color in the palette will be used instead.
     */
    folderColorRgb?: string;

    /**
     * The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files
     * with binary content in Drive.
     * This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.
     */
    fullFileExtension?: string;

    /**
     * Whether any users are granted file access directly on this file. This field is only populated for Team Drive files.
     */
    hasAugmentedPermissions?: boolean;

    /**
     * Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the
     * presence of the thumbnailLink field.
     */
    hasThumbnail?: boolean;

    /**
     * The ID of the file's head revision. This is currently only available for files with binary content in Drive.
     */
    headRevisionId?: string;

    /**
     * A static, unauthenticated link to the file's icon.
     */
    iconLink?: string;

    /**
     * The ID of the file.
     */
    id?: string;

    /**
     * Additional metadata about image media, if available.
     */
    imageMediaMetadata?: {
      /**
       * The aperture used to create the photo (f-number).
       */
      aperture?: number,

      /**
       * The make of the camera used to create the photo.
       */
      cameraMake?: string,

      /**
       * The model of the camera used to create the photo.
       */
      cameraModel?: string,

      /**
       * The color space of the photo.
       */
      colorSpace?: string,

      /**
       * The exposure bias of the photo (APEX value).
       */
      exposureBias?: number,

      /**
       * The exposure mode used to create the photo.
       */
      exposureMode?: string,

      /**
       * The length of the exposure, in seconds.
       */
      exposureTime?: number,

      /**
       * Whether a flash was used to create the photo.
       */
      flashUsed?: boolean,

      /**
       * The focal length used to create the photo, in millimeters.
       */
      focalLength?: number,

      /**
       * The height of the image in pixels.
       */
      height?: number,

      /**
       * The ISO speed used to create the photo.
       */
      isoSpeed?: number,

      /**
       * The lens used to create the photo.
       */
      lens?: string,

      /**
       * Geographic location information stored in the image.
       */
      location?: {
        /**
         * The altitude stored in the image.
         */
        altitude?: number,

        /**
         * The latitude stored in the image.
         */
        latitude?: number,

        /**
         * The longitude stored in the image.
         */
        longitude?: number
      },

      /**
       * The smallest f-number of the lens at the focal length used to create the photo (APEX value).
       */
      maxApertureValue?: number,

      /**
       * The metering mode used to create the photo.
       */
      meteringMode?: string,

      /**
       * The rotation in clockwise degrees from the image's original orientation.
       */
      rotation?: number,

      /**
       * The type of sensor used to create the photo.
       */
      sensor?: string,

      /**
       * The distance to the subject of the photo, in meters.
       */
      subjectDistance?: number,

      /**
       * The date and time the photo was taken (EXIF DateTime).
       */
      time?: string,

      /**
       * The white balance mode used to create the photo.
       */
      whiteBalance?: string,

      /**
       * The width of the image in pixels.
       */
      width?: number
    };

    /**
     * Whether the file was created or opened by the requesting app.
     */
    isAppAuthorized?: boolean;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#file".
     */
    kind?: string;

    /**
     * The last user to modify the file.
     */
    lastModifyingUser?: drive$User;

    /**
     * The MD5 checksum for the content of the file. This is only applicable to files with binary content in Drive.
     */
    md5Checksum?: string;

    /**
     * The MIME type of the file.
     * Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new
     * revision is uploaded.
     * If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the
     * About resource.
     */
    mimeType?: string;

    /**
     * Whether the file has been modified by this user.
     */
    modifiedByMe?: boolean;

    /**
     * The last time the file was modified by the user (RFC 3339 date-time).
     */
    modifiedByMeTime?: string;

    /**
     * The last time the file was modified by anyone (RFC 3339 date-time).
     * Note that setting modifiedTime will also update modifiedByMeTime for the user.
     */
    modifiedTime?: string;

    /**
     * The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of Team Drives, My
     * Drive root folder, and Application Data folder the name is constant.
     */
    name?: string;

    /**
     * The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary
     * content in Drive.
     */
    originalFilename?: string;

    /**
     * Whether the user owns the file. Not populated for Team Drive files.
     */
    ownedByMe?: boolean;

    /**
     * The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for Team Drive files.
     */
    owners?: drive$User[];

    /**
     * The IDs of the parent folders which contain the file.
     * If not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy
     * request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to
     * modify the parents list.
     */
    parents?: string[];

    /**
     * List of permission IDs for users with access to this file.
     */
    permissionIds?: string[];

    /**
     * The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for Team Drive files.
     */
    permissions?: drive$Permission[];

    /**
     * A collection of arbitrary key-value pairs which are visible to all apps.
     * Entries with null values are cleared in update and copy requests.
     */
    properties?: Record<string, string>;

    /**
     * The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.
     */
    quotaBytesUsed?: string;

    /**
     * Whether the file has been shared. Not populated for Team Drive files.
     */
    shared?: boolean;

    /**
     * The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
     */
    sharedWithMeTime?: string;

    /**
     * The user who shared the file with the requesting user, if applicable.
     */
    sharingUser?: drive$User;

    /**
     * The size of the file's content in bytes. This is only applicable to files with binary content in Drive.
     */
    size?: string;

    /**
     * The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
     */
    spaces?: string[];

    /**
     * Whether the user has starred the file.
     */
    starred?: boolean;

    /**
     * ID of the Team Drive the file resides in.
     */
    teamDriveId?: string;

    /**
     * A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the
     * file's content.
     */
    thumbnailLink?: string;

    /**
     * The thumbnail version for use in thumbnail cache invalidation.
     */
    thumbnailVersion?: string;

    /**
     * Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files
     * in the owner's trash.
     */
    trashed?: boolean;

    /**
     * The time that the item was trashed (RFC 3339 date-time). Only populated for Team Drive files.
     */
    trashedTime?: string;

    /**
     * If the file has been explicitly trashed, the user who trashed it. Only populated for Team Drive files.
     */
    trashingUser?: drive$User;

    /**
     * A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
     */
    version?: string;

    /**
     * Additional metadata about video media. This may not be available immediately upon upload.
     */
    videoMediaMetadata?: {
      /**
       * The duration of the video in milliseconds.
       */
      durationMillis?: string,

      /**
       * The height of the video in pixels.
       */
      height?: number,

      /**
       * The width of the video in pixels.
       */
      width?: number
    };

    /**
     * Whether the file has been viewed by this user.
     */
    viewedByMe?: boolean;

    /**
     * The last time the file was viewed by the user (RFC 3339 date-time).
     */
    viewedByMeTime?: string;

    /**
     * Whether users with only reader or commenter permission can copy the file's content. This affects copy, download, and print operations.
     */
    viewersCanCopyContent?: boolean;

    /**
     * A link for downloading the content of the file in a browser. This is only available for files with binary content in Drive.
     */
    webContentLink?: string;

    /**
     * A link for opening the file in a relevant Google editor or viewer in a browser.
     */
    webViewLink?: string;

    /**
     * Whether users with only writer permission can modify the file's permissions. Not populated for Team Drive files.
     */
    writersCanShare?: boolean;
  }

  declare interface gapi$client$drive$FileList {
    /**
     * The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    files?: gapi$client$drive$File[];

    /**
     * Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when
     * searching multiple Team Drives with the "user,allTeamDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that
     * clients narrow their query by choosing a different corpus such as "user" or "teamDrive".
     */
    incompleteSearch?: boolean;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#fileList".
     */
    kind?: string;

    /**
     * The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason,
     * it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$drive$GeneratedIds {
    /**
     * The IDs generated for the requesting user in the specified space.
     */
    ids?: string[];

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#generatedIds".
     */
    kind?: string;

    /**
     * The type of file that can be created with these IDs.
     */
    space?: string;
  }

  declare interface gapi$client$drive$Permission {
    /**
     * Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.
     */
    allowFileDiscovery?: boolean;

    /**
     * Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
     */
    deleted?: boolean;

    /**
     * A displayable name for users, groups or domains.
     */
    displayName?: string;

    /**
     * The domain to which this permission refers.
     */
    domain?: string;

    /**
     * The email address of the user or group to which this permission refers.
     */
    emailAddress?: string;

    /**
     * The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:
     * - They can only be set on user and group permissions
     * - The time must be in the future
     * - The time cannot be more than a year in the future
     */
    expirationTime?: string;

    /**
     * The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#permission".
     */
    kind?: string;

    /**
     * A link to the user's profile photo, if available.
     */
    photoLink?: string;

    /**
     * The role granted by this permission. While new values may be supported in the future, the following are currently allowed:
     * - organizer
     * - owner
     * - writer
     * - commenter
     * - reader
     */
    role?: string;

    /**
     * Details of whether the permissions on this Team Drive item are inherited or directly on this item. This is an output-only field which is present only
     * for Team Drive items.
     */
    teamDrivePermissionDetails?: Array<{
      /**
       * Whether this permission is inherited. This field is always populated. This is an output-only field.
       */
      inherited?: boolean,

      /**
       * The ID of the item from which this permission is inherited. This is an output-only field and is only populated for members of the Team Drive.
       */
      inheritedFrom?: string,

      /**
       * The primary role for this user. While new values may be added in the future, the following are currently possible:
       * - organizer
       * - writer
       * - commenter
       * - reader
       */
      role?: string,

      /**
       * The Team Drive permission type for this user. While new values may be added in future, the following are currently possible:
       * - file
       * - member
       */
      teamDrivePermissionType?: string
    }>;

    /**
     * The type of the grantee. Valid values are:
     * - user
     * - group
     * - domain
     * - anyone
     */
    type?: string;
  }

  declare interface gapi$client$drive$PermissionList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#permissionList".
     */
    kind?: string;

    /**
     * The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is
     * rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;

    /**
     * The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    permissions?: gapi$client$drive$Permission[];
  }

  declare interface gapi$client$drive$Reply {
    /**
     * The action the reply performed to the parent comment. Valid values are:
     * - resolve
     * - reopen
     */
    action?: string;

    /**
     * The user who created the reply.
     */
    author?: drive$User;

    /**
     * The plain text content of the reply. This field is used for setting the content, while htmlContent should be displayed. This is required on creates if
     * no action is specified.
     */
    content?: string;

    /**
     * The time at which the reply was created (RFC 3339 date-time).
     */
    createdTime?: string;

    /**
     * Whether the reply has been deleted. A deleted reply has no content.
     */
    deleted?: boolean;

    /**
     * The content of the reply with HTML formatting.
     */
    htmlContent?: string;

    /**
     * The ID of the reply.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#reply".
     */
    kind?: string;

    /**
     * The last time the reply was modified (RFC 3339 date-time).
     */
    modifiedTime?: string;
  }

  declare interface gapi$client$drive$ReplyList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#replyList".
     */
    kind?: string;

    /**
     * The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any
     * reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;

    /**
     * The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    replies?: gapi$client$drive$Reply[];
  }

  declare interface gapi$client$drive$Revision {
    /**
     * The ID of the revision.
     */
    id?: string;

    /**
     * Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after
     * newer content is uploaded. This can be set on a maximum of 200 revisions for a file.
     * This field is only applicable to files with binary content in Drive.
     */
    keepForever?: boolean;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#revision".
     */
    kind?: string;

    /**
     * The last user to modify this revision.
     */
    lastModifyingUser?: drive$User;

    /**
     * The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.
     */
    md5Checksum?: string;

    /**
     * The MIME type of the revision.
     */
    mimeType?: string;

    /**
     * The last time the revision was modified (RFC 3339 date-time).
     */
    modifiedTime?: string;

    /**
     * The original filename used to create this revision. This is only applicable to files with binary content in Drive.
     */
    originalFilename?: string;

    /**
     * Whether subsequent revisions will be automatically republished. This is only applicable to Google Docs.
     */
    publishAuto?: boolean;

    /**
     * Whether this revision is published. This is only applicable to Google Docs.
     */
    published?: boolean;

    /**
     * Whether this revision is published outside the domain. This is only applicable to Google Docs.
     */
    publishedOutsideDomain?: boolean;

    /**
     * The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.
     */
    size?: string;
  }

  declare interface gapi$client$drive$RevisionList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#revisionList".
     */
    kind?: string;

    /**
     * The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any
     * reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;

    /**
     * The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    revisions?: gapi$client$drive$Revision[];
  }

  declare interface gapi$client$drive$StartPageToken {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken".
     */
    kind?: string;

    /**
     * The starting page token for listing changes.
     */
    startPageToken?: string;
  }

  declare interface gapi$client$drive$TeamDrive {
    /**
     * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on
     * drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
     */
    backgroundImageFile?: {
      /**
       * The ID of an image file in Drive to use for the background image.
       */
      id?: string,

      /**
       * The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire
       * image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144
       * pixels high.
       */
      width?: number,

      /**
       * The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value
       * represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire
       * image.
       */
      xCoordinate?: number,

      /**
       * The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value
       * represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.
       */
      yCoordinate?: number
    };

    /**
     * A short-lived link to this Team Drive's background image.
     */
    backgroundImageLink?: string;

    /**
     * Capabilities the current user has on this Team Drive.
     */
    capabilities?: {
      /**
       * Whether the current user can add children to folders in this Team Drive.
       */
      canAddChildren?: boolean,

      /**
       * Whether the current user can change the background of this Team Drive.
       */
      canChangeTeamDriveBackground?: boolean,

      /**
       * Whether the current user can comment on files in this Team Drive.
       */
      canComment?: boolean,

      /**
       * Whether the current user can copy files in this Team Drive.
       */
      canCopy?: boolean,

      /**
       * Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team
       * Drive.
       */
      canDeleteTeamDrive?: boolean,

      /**
       * Whether the current user can download files in this Team Drive.
       */
      canDownload?: boolean,

      /**
       * Whether the current user can edit files in this Team Drive
       */
      canEdit?: boolean,

      /**
       * Whether the current user can list the children of folders in this Team Drive.
       */
      canListChildren?: boolean,

      /**
       * Whether the current user can add members to this Team Drive or remove them or change their role.
       */
      canManageMembers?: boolean,

      /**
       * Whether the current user can read the revisions resource of files in this Team Drive.
       */
      canReadRevisions?: boolean,

      /**
       * Whether the current user can remove children from folders in this Team Drive.
       */
      canRemoveChildren?: boolean,

      /**
       * Whether the current user can rename files or folders in this Team Drive.
       */
      canRename?: boolean,

      /**
       * Whether the current user can rename this Team Drive.
       */
      canRenameTeamDrive?: boolean,

      /**
       * Whether the current user can share files or folders in this Team Drive.
       */
      canShare?: boolean
    };

    /**
     * The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId.
     */
    colorRgb?: string;

    /**
     * The time at which the Team Drive was created (RFC 3339 date-time).
     */
    createdTime?: string;

    /**
     * The ID of this Team Drive which is also the ID of the top level folder for this Team Drive.
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#teamDrive".
     */
    kind?: string;

    /**
     * The name of this Team Drive.
     */
    name?: string;

    /**
     * The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get
     * response. When not specified on a drive.teamdrives.create request, a random theme is chosen from which the background image and color are set. This is
     * a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile.
     */
    themeId?: string;
  }

  declare interface gapi$client$drive$TeamDriveList {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#teamDriveList".
     */
    kind?: string;

    /**
     * The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for
     * any reason, it should be discarded, and pagination should be restarted from the first page of results.
     */
    nextPageToken?: string;

    /**
     * The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
     */
    teamDrives?: gapi$client$drive$TeamDrive[];
  }

  declare interface gapi$client$drive$User {
    /**
     * A plain text displayable name for this user.
     */
    displayName?: string;

    /**
     * The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
     */
    emailAddress?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#user".
     */
    kind?: string;

    /**
     * Whether this user is the requesting user.
     */
    me?: boolean;

    /**
     * The user's ID as visible in Permission resources.
     */
    permissionId?: string;

    /**
     * A link to the user's profile photo, if available.
     */
    photoLink?: string;
  }

  declare interface gapi$client$drive$AboutResource {
    /**
     * Gets information about the user, the user's Drive, and system capabilities.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$About>;
  }

  declare interface gapi$client$drive$ChangesResource {
    /**
     * Gets the starting pageToken for listing future changes.
     */
    getStartPageToken(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * The ID of the Team Drive for which the starting pageToken for listing future changes from that Team Drive will be returned.
       */
      teamDriveId?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$StartPageToken>;

    /**
     * Lists the changes for a user or Team Drive.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed
       * from the list of changes and there will be no further change entries for this file.
       */
      includeCorpusRemovals?: boolean,

      /**
       * Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
       */
      includeRemoved?: boolean,

      /**
       * Whether Team Drive files or changes should be included in results.
       */
      includeTeamDriveItems?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The maximum number of changes to return per page.
       */
      pageSize?: number,

      /**
       * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to
       * the response from the getStartPageToken method.
       */
      pageToken: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or
       * shared files which have not been added to My Drive.
       */
      restrictToMyDrive?: boolean,

      /**
       * A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
       */
      spaces?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID
       * and change ID as an identifier.
       */
      teamDriveId?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$ChangeList>;

    /**
     * Subscribes to changes for a user.
     */
    watch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed
       * from the list of changes and there will be no further change entries for this file.
       */
      includeCorpusRemovals?: boolean,

      /**
       * Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
       */
      includeRemoved?: boolean,

      /**
       * Whether Team Drive files or changes should be included in results.
       */
      includeTeamDriveItems?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The maximum number of changes to return per page.
       */
      pageSize?: number,

      /**
       * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to
       * the response from the getStartPageToken method.
       */
      pageToken: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or
       * shared files which have not been added to My Drive.
       */
      restrictToMyDrive?: boolean,

      /**
       * A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
       */
      spaces?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID
       * and change ID as an identifier.
       */
      teamDriveId?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Channel>;
  }

  declare interface gapi$client$drive$ChannelsResource {
    /**
     * Stop watching resources through this channel
     */
    stop(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;
  }

  declare interface gapi$client$drive$CommentsResource {
    /**
     * Creates a new comment on a file.
     */
    create(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Comment>;

    /**
     * Deletes a comment.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the comment.
       */
      commentId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets a comment by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the comment.
       */
      commentId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * Whether to return deleted comments. Deleted comments will not include their original content.
       */
      includeDeleted?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Comment>;

    /**
     * Lists a file's comments.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * Whether to include deleted comments. Deleted comments will not include their original content.
       */
      includeDeleted?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The maximum number of comments to return per page.
       */
      pageSize?: number,

      /**
       * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
       */
      startModifiedTime?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$CommentList>;

    /**
     * Updates a comment with patch semantics.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the comment.
       */
      commentId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Comment>;
  }

  declare interface gapi$client$drive$FilesResource {
    /**
     * Creates a copy of a file and applies any requested updates with patch semantics.
     */
    copy(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to
       * the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
       */
      ignoreDefaultVisibility?: boolean,

      /**
       * Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
       */
      keepRevisionForever?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A language hint for OCR processing during image import (ISO 639-1 code).
       */
      ocrLanguage?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$File>;

    /**
     * Creates a new file.
     */
    create(request: {
      /**
       * Resource Parameter for folder creation
       */
      resource?: any,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to
       * the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
       */
      ignoreDefaultVisibility?: boolean,

      /**
       * Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
       */
      keepRevisionForever?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A language hint for OCR processing during image import (ISO 639-1 code).
       */
      ocrLanguage?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * Whether to use the uploaded content as indexable text.
       */
      useContentAsIndexableText?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$File>;

    /**
     * Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a Team Drive the user must be an organizer on the
     * parent. If the target is a folder, all descendants owned by the user are also deleted.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Permanently deletes all of the user's trashed files.
     */
    emptyTrash(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.
     */
    export(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The MIME type of the format requested for this export.
       */
      mimeType: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Generates a set of file IDs which can be provided in create requests.
     */
    generateIds(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The number of IDs to return.
       */
      count?: number,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
       */
      space?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$GeneratedIds>;

    /**
     * Gets a file's metadata or content by ID.
     */
    get(request: {
      /**
       * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
       */
      acknowledgeAbuse?: boolean,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$File>;

    /**
     * Lists or searches files.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Comma-separated list of bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'teamDrive' and
       * 'allTeamDrives'. 'allTeamDrives' must be combined with 'user'; all other values must be used in isolation. Prefer 'user' or 'teamDrive' to
       * 'allTeamDrives' for efficiency.
       */
      corpora?: string,

      /**
       * The source of files to list. Deprecated: use 'corpora' instead.
       */
      corpus?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Whether Team Drive items should be included in results.
       */
      includeTeamDriveItems?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural',
       * 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the
       * 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one
       * million files in which the requested sort order is ignored.
       */
      orderBy?: string,

      /**
       * The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
       */
      pageSize?: number,

      /**
       * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * A query for filtering the file results. See the "Search for Files" guide for supported syntax.
       */
      q?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
       */
      spaces?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * ID of Team Drive to search.
       */
      teamDriveId?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$FileList>;

    /**
     * Updates a file's metadata and/or content with patch semantics.
     */
    update(request: {
      /**
       * A comma-separated list of parent IDs to add.
       */
      addParents?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
       */
      keepRevisionForever?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A language hint for OCR processing during image import (ISO 639-1 code).
       */
      ocrLanguage?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * A comma-separated list of parent IDs to remove.
       */
      removeParents?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * Whether to use the uploaded content as indexable text.
       */
      useContentAsIndexableText?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$File>;

    /**
     * Subscribes to changes to a file
     */
    watch(request: {
      /**
       * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
       */
      acknowledgeAbuse?: boolean,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Channel>;
  }

  declare interface gapi$client$drive$PermissionsResource {
    /**
     * Creates a permission for a file or Team Drive.
     */
    create(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * A plain text custom message to include in the notification email.
       */
      emailMessage?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file or Team Drive.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other
       * requests. It must not be disabled for ownership transfers.
       */
      sendNotificationEmail?: boolean,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of
       * the side effect.
       */
      transferOwnership?: boolean,

      /**
       * Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they
       * are an administrator of the domain to which the item belongs.
       */
      useDomainAdminAccess?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Permission>;

    /**
     * Deletes a permission.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file or Team Drive.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The ID of the permission.
       */
      permissionId: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they
       * are an administrator of the domain to which the item belongs.
       */
      useDomainAdminAccess?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets a permission by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The ID of the permission.
       */
      permissionId: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they
       * are an administrator of the domain to which the item belongs.
       */
      useDomainAdminAccess?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Permission>;

    /**
     * Lists a file's or Team Drive's permissions.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file or Team Drive.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The maximum number of permissions to return per page. When not set for files in a Team Drive, at most 100 results will be returned. When not set for
       * files that are not in a Team Drive, the entire list will be returned.
       */
      pageSize?: number,

      /**
       * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they
       * are an administrator of the domain to which the item belongs.
       */
      useDomainAdminAccess?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$PermissionList>;

    /**
     * Updates a permission with patch semantics.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file or Team Drive.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The ID of the permission.
       */
      permissionId: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether to remove the expiration date.
       */
      removeExpiration?: boolean,

      /**
       * Whether the requesting application supports Team Drives.
       */
      supportsTeamDrives?: boolean,

      /**
       * Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of
       * the side effect.
       */
      transferOwnership?: boolean,

      /**
       * Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they
       * are an administrator of the domain to which the item belongs.
       */
      useDomainAdminAccess?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Permission>;
  }

  declare interface gapi$client$drive$RepliesResource {
    /**
     * Creates a new reply to a comment.
     */
    create(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the comment.
       */
      commentId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Reply>;

    /**
     * Deletes a reply.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the comment.
       */
      commentId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the reply.
       */
      replyId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets a reply by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the comment.
       */
      commentId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * Whether to return deleted replies. Deleted replies will not include their original content.
       */
      includeDeleted?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the reply.
       */
      replyId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Reply>;

    /**
     * Lists a comment's replies.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the comment.
       */
      commentId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * Whether to include deleted replies. Deleted replies will not include their original content.
       */
      includeDeleted?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The maximum number of replies to return per page.
       */
      pageSize?: number,

      /**
       * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$ReplyList>;

    /**
     * Updates a reply with patch semantics.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the comment.
       */
      commentId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the reply.
       */
      replyId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Reply>;
  }

  declare interface gapi$client$drive$RevisionsResource {
    /**
     * Permanently deletes a revision. This method is only applicable to files with binary content in Drive.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the revision.
       */
      revisionId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets a revision's metadata or content by ID.
     */
    get(request: {
      /**
       * Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
       */
      acknowledgeAbuse?: boolean,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the revision.
       */
      revisionId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Revision>;

    /**
     * Lists a file's revisions.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The maximum number of revisions to return per page.
       */
      pageSize?: number,

      /**
       * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$RevisionList>;

    /**
     * Updates a revision with patch semantics.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the file.
       */
      fileId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the revision.
       */
      revisionId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$Revision>;
  }

  declare interface gapi$client$drive$TeamdrivesResource {
    /**
     * Creates a new Team Drive.
     */
    create(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same
       * user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409
       * error will be returned.
       */
      requestId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$TeamDrive>;

    /**
     * Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the Team Drive
       */
      teamDriveId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Gets a Team Drive's metadata by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the Team Drive
       */
      teamDriveId: string,

      /**
       * Whether the request should be treated as if it was issued by a domain administrator; if set to true, then the requester will be granted access if they
       * are an administrator of the domain to which the Team Drive belongs.
       */
      useDomainAdminAccess?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$TeamDrive>;

    /**
     * Lists the user's Team Drives.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Maximum number of Team Drives to return.
       */
      pageSize?: number,

      /**
       * Page token for Team Drives.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Query string for searching Team Drives.
       */
      q?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether the request should be treated as if it was issued by a domain administrator; if set to true, then all Team Drives of the domain in which the
       * requester is an administrator are returned.
       */
      useDomainAdminAccess?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$TeamDriveList>;

    /**
     * Updates a Team Drive's metadata
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the Team Drive
       */
      teamDriveId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$drive$TeamDrive>;
  }

  declare var gapi$client$drive$about: gapi$client$drive$AboutResource;

  declare var gapi$client$drive$changes: gapi$client$drive$ChangesResource;

  declare var gapi$client$drive$channels: gapi$client$drive$ChannelsResource;

  declare var gapi$client$drive$comments: gapi$client$drive$CommentsResource;

  declare var gapi$client$drive$files: gapi$client$drive$FilesResource;

  declare var gapi$client$drive$permissions: gapi$client$drive$PermissionsResource;

  declare var gapi$client$drive$replies: gapi$client$drive$RepliesResource;

  declare var gapi$client$drive$revisions: gapi$client$drive$RevisionsResource;

  declare var gapi$client$drive$teamdrives: gapi$client$drive$TeamdrivesResource;
}
