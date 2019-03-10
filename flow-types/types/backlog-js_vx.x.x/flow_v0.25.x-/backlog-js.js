declare module "backlog-js" {
  declare class Request {
    constructor(configure: {
      host: string,
      apiKey?: string,
      accessToken?: string,
      timeout?: number
    }): this;
    get<T>(path: string, params?: any): Promise<T>;
    post<T>(path: string, params?: any): Promise<T>;
    put<T>(path: string, params: any): Promise<T>;
    patch<T>(path: string, params: any): Promise<T>;
    delete<T>(path: string, params?: any): Promise<T>;
    request(options: {
      method: string,
      path: string,
      params?: Params | FormData
    }): Promise<Response>;
    checkStatus(response: Response): Promise<Response>;
    parseJSON<T>(response: Response): Promise<T>;
    webAppBaseURL: string;
    restBaseURL: string;
  }
  declare type Params = {
    [index: string]: number | string | number[] | string[]
  };
  declare export class Backlog mixins Request {
    constructor(configure: {
      host: string,
      apiKey?: string,
      accessToken?: string,
      timeout?: number
    }): this;
    getSpace(): Promise<any>;
    getSpaceActivities(params: Option$Space$GetActivitiesParams): Promise<any>;
    getSpaceNotification(): Promise<any>;
    putSpaceNotification(
      params: Option$Space$PutSpaceNotificationParams
    ): Promise<any>;
    getSpaceDiskUsage(): Promise<any>;
    getSpaceIcon(): Promise<Entity$File$FileData>;
    postSpaceAttachment(form: FormData): Promise<Response>;
    getUsers(): Promise<any>;
    getUser(userId: number): Promise<any>;
    postUser(params: Option$User$PostUserParams): Promise<any>;
    patchUser(
      userId: number,
      params: Option$User$PatchUserParams
    ): Promise<any>;
    deleteUser(userId: number): Promise<any>;
    getMyself(): Promise<any>;
    getUserActivities(
      userId: number,
      params: Option$User$GetUserActivitiesParams
    ): Promise<any>;
    getUserStars(
      userId: number,
      params: Option$User$GetUserStarsParams
    ): Promise<any>;
    getUserStarsCount(
      userId: number,
      params: Option$User$GetUserStarsCountParams
    ): Promise<any>;
    getRecentlyViewedIssues(
      params: Option$User$GetRecentlyViewedParams
    ): Promise<any>;
    getRecentlyViewedProjects(
      params: Option$User$GetRecentlyViewedParams
    ): Promise<any>;
    getRecentlyViewedWikis(
      params: Option$User$GetRecentlyViewedParams
    ): Promise<any>;
    getUserIcon(userId: number): Promise<Entity$File$FileData>;
    getGroups(params: Option$Group$GetGroupsParams): Promise<any>;
    postGroups(params: Option$Group$PostGroupsParams): Promise<any>;
    getGroup(groupId: number): Promise<any>;
    patchGroup(
      groupId: number,
      params: Option$Group$PatchGroupParams
    ): Promise<any>;
    deleteGroup(groupId: number): Promise<any>;
    getStatuses(): Promise<any>;
    getResolutions(): Promise<any>;
    getPriorities(): Promise<any>;
    postProject(params: Option$Project$PostProjectParams): Promise<any>;
    getProjects(params?: Option$Project$GetProjectsParams): Promise<any>;
    getProject(projectIdOrKey: string): Promise<any>;
    patchProject(
      projectIdOrKey: string,
      params: Option$Project$PatchProjectParams
    ): Promise<any>;
    deleteProject(projectIdOrKey: string): Promise<any>;
    getProjectActivities(
      projectIdOrKey: string,
      params: Option$Space$GetActivitiesParams
    ): Promise<any>;
    getProjectUsers(projectIdOrKey: string): Promise<any>;
    deleteProjectUsers(
      projectIdOrKey: string,
      params: Option$Project$DeleteProjectUsersParams
    ): Promise<any>;
    postProjectAdministrators(
      projectIdOrKey: string,
      params: Option$Project$PostProjectAdministrators
    ): Promise<any>;
    getProjectAdministrators(projectIdOrKey: string): Promise<any>;
    deleteProjectAdministrators(
      projectIdOrKey: string,
      params: Option$Project$DeleteProjectAdministrators
    ): Promise<any>;
    getIssueTypes(projectIdOrKey: string): Promise<any>;
    postIssueType(
      projectIdOrKey: string,
      params: Option$Project$PostIssueTypeParams
    ): Promise<any>;
    patchIssueType(
      projectIdOrKey: string,
      id: number,
      params: Option$Project$PatchIssueTypeParams
    ): Promise<any>;
    deleteIssueType(
      projectIdOrKey: string,
      id: number,
      params: Option$Project$DeleteIssueTypeParams
    ): Promise<any>;
    getCategories(projectIdOrKey: string): Promise<any>;
    postCategories(
      projectIdOrKey: string,
      params: Option$Project$PostCategoriesParams
    ): Promise<any>;
    patchCategories(
      projectIdOrKey: string,
      id: number,
      params: Option$Project$PatchCategoriesParams
    ): Promise<any>;
    deleteCategories(projectIdOrKey: string, id: number): Promise<any>;
    getVersions(projectIdOrKey: string): Promise<any>;
    postVersions(
      projectIdOrKey: string,
      params: Option$Project$PostVersionsParams
    ): Promise<any>;
    patchVersions(
      projectIdOrKey: string,
      id: number,
      params: Option$Project$PatchVersionsParams
    ): Promise<any>;
    deleteVersions(projectIdOrKey: string, id: number): Promise<any>;
    getCustomFields(projectIdOrKey: string): Promise<any>;
    postCustomField(
      projectIdOrKey: string,
      params:
        | Option$Project$PostCustomFieldParams
        | Option$Project$PostCustomFieldWithNumericParams
        | Option$Project$PostCustomFieldWithDateParams
        | Option$Project$PostCustomFieldWithListParams
    ): Promise<any>;
    patchCustomField(
      projectIdOrKey: string,
      id: number,
      params:
        | Option$Project$PatchCustomFieldParams
        | Option$Project$PatchCustomFieldWithNumericParams
        | Option$Project$PatchCustomFieldWithDateParams
        | Option$Project$PatchCustomFieldWithListParams
    ): Promise<any>;
    deleteCustomField(projectIdOrKey: string, id: number): Promise<any>;
    postCustomFieldItem(
      projectIdOrKey: string,
      id: number,
      params: Option$Project$PostCustomFieldItemParams
    ): Promise<any>;
    patchCustomFieldItem(
      projectIdOrKey: string,
      id: number,
      itemId: number,
      params: Option$Project$PatchCustomFieldItemParams
    ): Promise<any>;
    deleteCustomFieldItem(
      projectIdOrKey: string,
      id: number,
      params: Option$Project$PostCustomFieldItemParams
    ): Promise<any>;
    getSharedFiles(
      projectIdOrKey: string,
      path: string,
      params: Option$Project$GetSharedFilesParams
    ): Promise<any>;
    getProjectsDiskUsage(projectIdOrKey: string): Promise<any>;
    getWebhooks(projectIdOrKey: string): Promise<any>;
    postWebhook(
      projectIdOrKey: string,
      params: Option$Project$PostWebhookParams
    ): Promise<any>;
    getWebhook(projectIdOrKey: string, webhookId: string): Promise<any>;
    patchWebhook(
      projectIdOrKey: string,
      webhookId: string,
      params: Option$Project$PatchWebhookParams
    ): Promise<any>;
    deleteWebhook(projectIdOrKey: string, webhookId: string): Promise<any>;
    postIssue(params: Option$Issue$PostIssueParams): Promise<any>;
    patchIssue(
      issueIdOrKey: string,
      params: Option$Issue$PatchIssueParams
    ): Promise<any>;
    getIssues(params?: Option$Issue$GetIssuesParams): Promise<any>;
    getIssue(issueIdOrKey: string): Promise<any>;
    getIssuesCount(params?: Option$Issue$GetIssuesParams): Promise<any>;
    deleteIssuesCount(issueIdOrKey: string): Promise<any>;
    getIssueComments(
      issueIdOrKey: string,
      params: Option$Issue$GetIssueCommentsParams
    ): Promise<any>;
    postIssueComments(
      issueIdOrKey: string,
      params: Option$Issue$PostIssueCommentsParams
    ): Promise<any>;
    getIssueCommentsCount(issueIdOrKey: string): Promise<any>;
    getIssueComment(issueIdOrKey: string, commentId: number): Promise<any>;
    patchIssueComment(
      issueIdOrKey: string,
      commentId: number,
      params: Option$Issue$PatchIssueCommentParams
    ): Promise<any>;
    getIssueCommentNotifications(
      issueIdOrKey: string,
      commentId: number
    ): Promise<any>;
    postIssueCommentNotifications(
      issueIdOrKey: string,
      commentId: number,
      prams: Option$Issue$IssueCommentNotifications
    ): Promise<any>;
    getIssueAttachments(issueIdOrKey: string): Promise<any>;
    deleteIssueAttachment(
      issueIdOrKey: string,
      attachmentId: string
    ): Promise<any>;
    getIssueSharedFiles(issueIdOrKey: string): Promise<any>;
    linkIssueSharedFiles(
      issueIdOrKey: string,
      params: Option$Issue$LinkIssueSharedFilesParams
    ): Promise<any>;
    unlinkIssueSharedFile(issueIdOrKey: string, id: number): Promise<any>;
    getWikis(projectIdOrKey: number): Promise<any>;
    getWikisCount(projectIdOrKey: number): Promise<any>;
    getWikisTags(projectIdOrKey: number): Promise<any>;
    postWiki(params: Option$Wiki$PostWikiParams): Promise<any>;
    getWiki(wikiId: number): Promise<any>;
    patchWiki(
      wikiId: number,
      params: Option$Wiki$PatchWikiParams
    ): Promise<any>;
    deleteWiki(wikiId: number, mailNotify: boolean): Promise<any>;
    getWikisAttachments(wikiId: number): Promise<any>;
    postWikisAttachments(wikiId: number, attachmentId: number[]): Promise<any>;
    deleteWikisAttachments(wikiId: number, attachmentId: number): Promise<any>;
    getWikisSharedFiles(wikiId: number): Promise<any>;
    linkWikisSharedFiles(wikiId: number, fileId: number[]): Promise<any>;
    unlinkWikisSharedFiles(wikiId: number, id: number): Promise<any>;
    getWikisHistory(
      wikiId: number,
      params: Option$Wiki$GetWikisHistoryParams
    ): Promise<any>;
    getWikisStars(wikiId: number): Promise<any>;
    postStar(params: Option$Project$PostStarParams): Promise<any>;
    getNotifications(
      params: Option$Notification$GetNotificationsParams
    ): Promise<any>;
    getNotificationsCount(
      params: Option$Notification$GetNotificationsCountParams
    ): Promise<any>;
    resetNotificationsMarkAsRead(): Promise<any>;
    markAsReadNotification(id: number): Promise<any>;
    getGitRepositories(projectIdOrKey: string): Promise<any>;
    getGitRepository(
      projectIdOrKey: string,
      repoIdOrName: string
    ): Promise<any>;
    getPullRequests(
      projectIdOrKey: string,
      repoIdOrName: string,
      params: Option$PullRequest$GetPullRequestsParams
    ): Promise<any>;
    getPullRequestsCount(
      projectIdOrKey: string,
      repoIdOrName: string,
      params: Option$PullRequest$GetPullRequestsParams
    ): Promise<any>;
    postPullRequest(
      projectIdOrKey: string,
      repoIdOrName: string,
      params: Option$PullRequest$PostPullRequestParams
    ): Promise<any>;
    getPullRequest(
      projectIdOrKey: string,
      repoIdOrName: string,
      number: number
    ): Promise<any>;
    patchPullRequest(
      projectIdOrKey: string,
      repoIdOrName: string,
      number: number,
      params: Option$PullRequest$PatchPullRequestParams
    ): Promise<any>;
    getPullRequestComments(
      projectIdOrKey: string,
      repoIdOrName: string,
      number: number,
      params: Option$PullRequest$GetPullRequestCommentsParams
    ): Promise<any>;
    postPullRequestComments(
      projectIdOrKey: string,
      repoIdOrName: string,
      number: number,
      params: Option$PullRequest$PostPullRequestCommentsParams
    ): Promise<any>;
    getPullRequestCommentsCount(
      projectIdOrKey: string,
      repoIdOrName: string,
      number: number
    ): Promise<any>;
    patchPullRequestComments(
      projectIdOrKey: string,
      repoIdOrName: string,
      number: number,
      commentId: number,
      params: Option$PullRequest$PatchPullRequestCommentsParams
    ): Promise<any>;
    getPullRequestAttachments(
      projectIdOrKey: string,
      repoIdOrName: string,
      number: number
    ): Promise<any>;
    deletePullRequestAttachment(
      projectIdOrKey: string,
      repoIdOrName: string,
      number: number,
      attachmentId: number
    ): Promise<any>;
    getProjectIcon(projectIdOrKey: string): Promise<Entity$File$FileData>;
    getSharedFile(
      projectIdOrKey: string,
      sharedFileId: number
    ): Promise<Entity$File$FileData>;
    getIssueAttachment(
      issueIdOrKey: string,
      attachmentId: number
    ): Promise<Entity$File$FileData>;
    getWikiAttachment(
      wikiId: number,
      attachmentId: number
    ): Promise<Entity$File$FileData>;
    getPullRequestAttachment(
      projectIdOrKey: string,
      repoIdOrName: string,
      number: number,
      attachmentId: number
    ): Promise<Entity$File$FileData>;
  }
  declare export class OAuth2 {
    constructor(credentials: Option$OAuth2$Credentials, timeout?: number): this;
    getAuthorizationURL(options: {
      host: string,
      redirectUri?: string,
      state?: string
    }): string;
    getAccessToken(options: {
      host: string,
      code: string,
      redirectUri?: string
    }): Promise<Entity$OAuth2$AccessToken>;
    refreshAccessToken(options: {
      host: string,
      refreshToken: string
    }): Promise<Entity$OAuth2$AccessToken>;
  }
  import type { PassThrough } from "stream";

  declare export type Entity$File$FileData =
    | File$NodeFileData
    | File$BrowserFileData;

  declare export interface Entity$File$NodeFileData {
    body: PassThrough;
    url: string;
    filename: string;
  }

  declare export interface Entity$File$BrowserFileData {
    body: any;
    url: string;
    blob?: () => Promise<Blob>;
  }

  declare export interface Entity$OAuth2$AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
  }

  declare var npm$namespace$Option: {
    ActivityType: typeof Option$ActivityType,

    User: typeof npm$namespace$Option$User,
    Project: typeof npm$namespace$Option$Project,
    Issue: typeof npm$namespace$Option$Issue
  };
  declare export type Option$Order = "asc" | "desc";

  declare export var Option$ActivityType: {|
    +Undefined: -1, // -1
    +IssueCreated: 1, // 1
    +IssueUpdated: 2, // 2
    +IssueCommented: 3, // 3
    +IssueDeleted: 4, // 4
    +WikiCreated: 5, // 5
    +WikiUpdated: 6, // 6
    +WikiDeleted: 7, // 7
    +FileAdded: 8, // 8
    +FileUpdated: 9, // 9
    +FileDeleted: 10, // 10
    +SvnCommitted: 11, // 11
    +GitPushed: 12, // 12
    +GitRepositoryCreated: 13, // 13
    +IssueMultiUpdated: 14, // 14
    +ProjectUserAdded: 15, // 15
    +ProjectUserRemoved: 16, // 16
    +NotifyAdded: 17, // 17
    +PullRequestAdded: 18, // 18
    +PullRequestUpdated: 19, // 19
    +PullRequestCommented: 20, // 20
    +PullRequestMerged: 21 // 21
  |};

  declare export interface Option$Notification$GetNotificationsParams {
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Option$Order;
  }

  declare export interface Option$Notification$GetNotificationsCountParams {
    alreadyRead: boolean;
    resourceAlreadyRead: boolean;
  }

  declare export interface Option$Space$GetActivitiesParams {
    activityTypeId?: $Values<typeof Option$ActivityType>[];
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Option$Order;
  }

  declare export interface Option$Space$PutSpaceNotificationParams {
    content: string;
  }

  declare var npm$namespace$Option$User: {
    RoleType: typeof Option$User$RoleType
  };
  declare export interface Option$User$PostUserParams {
    userId: string;
    password: string;
    name: string;
    mailAddress: string;
    roleType: $Values<typeof Option$User$RoleType>;
  }

  declare export interface Option$User$PatchUserParams {
    password?: string;
    name?: string;
    mailAddress?: string;
    roleType?: $Values<typeof Option$User$RoleType>;
  }

  declare export var Option$User$RoleType: {|
    +Admin: 1, // 1
    +User: 2, // 2
    +Reporter: 3, // 3
    +Viewer: 4, // 4
    +GuestReporter: 5, // 5
    +GuestViewer: 6 // 6
  |};

  declare export interface Option$User$GetUserActivitiesParams {
    activityTypeId?: $Values<typeof Option$ActivityType>[];
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Option$Order;
  }

  declare export interface Option$User$GetUserStarsParams {
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Option$Order;
  }

  declare export interface Option$User$GetUserStarsCountParams {
    since?: string;
    until?: string;
  }

  declare export interface Option$User$GetRecentlyViewedParams {
    order?: Option$Order;
    offset?: number;
    count?: number;
  }

  declare export interface Option$Group$GetGroupsParams {
    order?: Option$Order;
    offset?: number;
    count?: number;
  }

  declare export interface Option$Group$PostGroupsParams {
    name: string;
    members?: string[];
  }

  declare export interface Option$Group$PatchGroupParams {
    name?: string;
    members?: string[];
  }

  declare var npm$namespace$Option$Project: {
    FieldType: typeof Option$Project$FieldType
  };
  declare export type Option$Project$TextFormattingRule =
    | "backlog"
    | "markdown";

  declare export interface Option$Project$PostProjectParams {
    name: string;
    key: string;
    chartEnabled: boolean;
    projectLeaderCanEditProjectLeader?: boolean;
    subtaskingEnabled: boolean;
    textFormattingRule: Option$Project$TextFormattingRule;
  }

  declare export interface Option$Project$PatchProjectParams {
    name?: string;
    key?: string;
    chartEnabled?: boolean;
    subtaskingEnabled?: boolean;
    projectLeaderCanEditProjectLeader?: boolean;
    textFormattingRule?: Option$Project$TextFormattingRule;
    archived?: boolean;
  }

  declare export interface Option$Project$GetProjectsParams {
    archived?: boolean;
    all?: boolean;
  }

  declare export interface Option$Project$DeleteProjectUsersParams {
    userId: number;
  }

  declare export interface Option$Project$PostProjectAdministrators {
    userId: number;
  }

  declare export interface Option$Project$DeleteProjectAdministrators {
    userId: number;
  }

  declare export type Option$Project$IssueTypeColor =
    | "#e30000"
    | "#990000"
    | "#934981"
    | "#814fbc"
    | "#2779ca"
    | "#007e9a"
    | "#7ea800"
    | "#ff9200"
    | "#ff3265"
    | "#666665";

  declare export interface Option$Project$PostIssueTypeParams {
    name: string;
    color: Option$Project$IssueTypeColor;
  }

  declare export interface Option$Project$PatchIssueTypeParams {
    name?: string;
    color?: Option$Project$IssueTypeColor;
  }

  declare export interface Option$Project$DeleteIssueTypeParams {
    substituteIssueTypeId: number;
  }

  declare export interface Option$Project$PostCategoriesParams {
    name: string;
  }

  declare export interface Option$Project$PatchCategoriesParams {
    name: string;
  }

  declare export interface Option$Project$PostVersionsParams {
    name: string;
    description: string;
    startDate: string;
    releaseDueDate: string;
  }

  declare export interface Option$Project$PatchVersionsParams {
    name: string;
    description?: string;
    startDate?: string;
    releaseDueDate?: string;
    archived?: boolean;
  }

  declare export interface Option$Project$PostCustomFieldParams {
    typeId: $Values<typeof Option$Project$FieldType>;
    name: string;
    applicableIssueTypes?: number[];
    description?: string;
    required?: boolean;
  }

  declare export type Option$Project$PostCustomFieldWithNumericParams = {
    min?: number,
    max?: number,
    initialValue?: number,
    unit?: string
  } & Option$Project$PostCustomFieldParams;

  declare export type Option$Project$PostCustomFieldWithDateParams = {
    min?: string,
    max?: string,
    initialValueType?: number,
    initialDate?: string,
    initialShift?: number
  } & Option$Project$PostCustomFieldParams;

  declare export type Option$Project$PostCustomFieldWithListParams = {
    items?: string[],
    allowInput?: boolean,
    allowAddItem?: boolean
  } & Option$Project$PostCustomFieldParams;

  declare export interface Option$Project$PatchCustomFieldParams {
    name?: string;
    applicableIssueTypes?: number[];
    description?: string;
    required?: boolean;
  }

  declare export type Option$Project$PatchCustomFieldWithNumericParams = {
    min?: number,
    max?: number,
    initialValue?: number,
    unit?: string
  } & Option$Project$PatchCustomFieldParams;

  declare export type Option$Project$PatchCustomFieldWithDateParams = {
    min?: string,
    max?: string,
    initialValueType?: number,
    initialDate?: string,
    initialShift?: number
  } & Option$Project$PatchCustomFieldParams;

  declare export type Option$Project$PatchCustomFieldWithListParams = {
    items?: string[],
    allowInput?: boolean,
    allowAddItem?: boolean
  } & Option$Project$PatchCustomFieldParams;

  declare export interface Option$Project$PostCustomFieldItemParams {
    name: string;
  }

  declare export interface Option$Project$PatchCustomFieldItemParams {
    name: string;
  }

  declare export interface Option$Project$GetSharedFilesParams {
    order?: Option$Order;
    offset?: number;
    count?: number;
  }

  declare export interface Option$Project$PostWebhookParams {
    name?: string;
    description?: string;
    hookUrl?: string;
    allEvent?: boolean;
    activityTypeIds?: number[];
  }

  declare export interface Option$Project$PatchWebhookParams {
    name?: string;
    description?: string;
    hookUrl?: string;
    allEvent?: boolean;
    activityTypeIds?: number[];
  }

  declare export var Option$Project$FieldType: {|
    +Text: 1, // 1
    +TextArea: 2, // 2
    +Numeric: 3, // 3
    +Date: 4, // 4
    +SingleList: 5, // 5
    +MultipleList: 6, // 6
    +CheckBox: 7, // 7
    +Radio: 8 // 8
  |};

  declare export interface Option$Project$PostStarParams {
    issueId?: number;
    commentId?: number;
    wikiId?: number;
    pullRequestId?: number;
    pullRequestCommentId?: number;
  }

  declare var npm$namespace$Option$Issue: {
    ParentChildType: typeof Option$Issue$ParentChildType
  };
  declare export interface Option$Issue$PostIssueParams {
    projectId: number;
    summary: string;
    priorityId: number;
    issueTypeId: number;
    parentIssueId?: number;
    description?: string;
    startDate?: string;
    dueDate?: string;
    estimatedHours?: number;
    actualHours?: number;
    categoryId?: number[];
    versionId?: number[];
    milestoneId?: number[];
    assigneeId?: number;
    notifiedUserId?: number[];
    attachmentId?: number[];
    [customField_: string]: any;
  }

  declare export interface Option$Issue$PatchIssueParams {
    summary?: string;
    parentIssueId?: number;
    description?: string;
    statusId?: number;
    resolutionId?: number;
    startDate?: string;
    dueDate?: string;
    estimatedHours?: number;
    actualHours?: number;
    issueTypeId?: number;
    categoryId?: number[];
    versionId?: number[];
    milestoneId?: number[];
    priorityId?: number;
    assigneeId?: number;
    notifiedUserId?: number[];
    attachmentId?: number[];
    comment?: string;
    [customField_: string]: any;
  }

  declare export interface Option$Issue$GetIssuesParams {
    projectId?: number[];
    issueTypeId?: number[];
    categoryId?: number[];
    versionId?: number[];
    milestoneId?: number[];
    statusId?: number[];
    priorityId?: number[];
    assigneeId?: number[];
    createdUserId?: number[];
    resolutionId?: number[];
    parentChild?: $Values<typeof Option$Issue$ParentChildType>;
    attachment?: boolean;
    sharedFile?: boolean;
    sort?: Issue$SortKey;
    order?: Option$Order;
    offset?: number;
    count?: number;
    createdSince?: string;
    createdUntil?: string;
    updatedSince?: string;
    updatedUntil?: string;
    startDateSince?: string;
    startDateUntil?: string;
    dueDateSince?: string;
    dueDateUntil?: string;
    id?: number[];
    parentIssueId?: number[];
    keyword: string;
    [customField_: string]: any;
  }

  declare export var Option$Issue$ParentChildType: {|
    +All: 0, // 0
    +NotChild: 1, // 1
    +Child: 2, // 2
    +NotChildNotParent: 3, // 3
    +Parent: 4 // 4
  |};

  declare export type Option$Issue$SortKey =
    | "issueType"
    | "category"
    | "version"
    | "milestone"
    | "summary"
    | "status"
    | "priority"
    | "attachment"
    | "sharedFile"
    | "created"
    | "createdUser"
    | "updated"
    | "updatedUser"
    | "assignee"
    | "startDate"
    | "dueDate"
    | "estimatedHours"
    | "actualHours"
    | "childIssue";

  declare export interface Option$Issue$GetIssueCommentsParams {
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Option$Order;
  }

  declare export interface Option$Issue$PostIssueCommentsParams {
    content: string;
    notifiedUserId?: number[];
    attachmentId?: number[];
  }

  declare export interface Option$Issue$PatchIssueCommentParams {
    content: string;
  }

  declare export interface Option$Issue$IssueCommentNotifications {
    notifiedUserId: number[];
  }

  declare export interface Option$Issue$LinkIssueSharedFilesParams {
    fileId: number[];
  }

  declare export interface Option$PullRequest$GetPullRequestsParams {
    statusId?: number[];
    assigneeId?: number[];
    issueId?: number[];
    createdUserId?: number[];
    offset?: number;
    count?: number;
  }

  declare export interface Option$PullRequest$PostPullRequestParams {
    summary: string;
    description: string;
    base: string;
    branch: string;
    issueId?: number;
    assigneeId?: number;
    notifiedUserId?: number[];
    attachmentId?: number[];
  }

  declare export interface Option$PullRequest$PatchPullRequestParams {
    summary?: string;
    description?: string;
    issueId?: number;
    assigneeId?: number;
    notifiedUserId?: number[];
    comment?: string[];
  }

  declare export interface Option$PullRequest$GetPullRequestCommentsParams {
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Option$Order;
  }

  declare export interface Option$PullRequest$PostPullRequestCommentsParams {
    content: string;
    notifiedUserId?: number[];
  }

  declare export interface Option$PullRequest$PatchPullRequestCommentsParams {
    content: string;
  }

  declare export interface Option$Wiki$PostWikiParams {
    projectId: number;
    name: string;
    content: string;
    mailNotify?: boolean;
  }

  declare export interface Option$Wiki$PatchWikiParams {
    name?: string;
    content?: string;
    mailNotify?: boolean;
  }

  declare export interface Option$Wiki$GetWikisHistoryParams {
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Option$Order;
  }

  declare export interface Option$OAuth2$Credentials {
    clientId: string;
    clientSecret: string;
  }

  declare var npm$namespace$Error: {
    BacklogError: typeof Error$BacklogError,
    BacklogApiError: typeof Error$BacklogApiError,
    BacklogAuthError: typeof Error$BacklogAuthError,
    UnexpectedError: typeof Error$UnexpectedError
  };
  declare export class Error$BacklogError mixins NodeJS$Global$Error {
    constructor(
      name: Error$BacklogErrorNameType,
      response: Response,
      body?: {
        errors: Error$BacklogErrorMessage[]
      }
    ): this;
    name: Error$BacklogErrorNameType;
    url: string;
    status: number;
    body: {
      errors: Error$BacklogErrorMessage[]
    };
    response: Response;
  }

  declare export class Error$BacklogApiError mixins Error$BacklogError {
    constructor(
      response: Response,
      body?: {
        errors: Error$BacklogErrorMessage[]
      }
    ): this;
  }

  declare export class Error$BacklogAuthError mixins Error$BacklogError {
    constructor(
      response: Response,
      body?: {
        errors: Error$BacklogErrorMessage[]
      }
    ): this;
  }

  declare export class Error$UnexpectedError mixins Error$BacklogError {
    constructor(response: Response): this;
  }

  declare export interface Error$BacklogErrorMessage {
    message: string;
    code: number;
    errorInfo: string;
    moreInfo: string;
  }

  declare export type Error$BacklogErrorNameType =
    | "BacklogApiError"
    | "BacklogAuthError"
    | "UnexpectedError";
}
