declare module 'backlog-js' {
        declare class Request  {
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
request(
options: {
method: string,
path: string,
params?: Params | FormData
}): Promise<Response>;
checkStatus(response: Response): Promise<Response>;
parseJSON<T>(response: Response): Promise<T>;
webAppBaseURL: string;
restBaseURL: string
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
getSpaceActivities(params: Option$Space.Space$GetActivitiesParams): Promise<any>;
getSpaceNotification(): Promise<any>;
putSpaceNotification(params: Option$Space.Space$PutSpaceNotificationParams): Promise<any>;
getSpaceDiskUsage(): Promise<any>;
getSpaceIcon(): Promise<Entity$File.File$FileData>;
postSpaceAttachment(form: FormData): Promise<Response>;
getUsers(): Promise<any>;
getUser(userId: number): Promise<any>;
postUser(params: Option$User.User$PostUserParams): Promise<any>;
patchUser(userId: number, params: Option$User.User$PatchUserParams): Promise<any>;
deleteUser(userId: number): Promise<any>;
getMyself(): Promise<any>;
getUserActivities(userId: number, params: Option$User.User$GetUserActivitiesParams): Promise<any>;
getUserStars(userId: number, params: Option$User.User$GetUserStarsParams): Promise<any>;
getUserStarsCount(userId: number, params: Option$User.User$GetUserStarsCountParams): Promise<any>;
getRecentlyViewedIssues(params: Option$User.User$GetRecentlyViewedParams): Promise<any>;
getRecentlyViewedProjects(params: Option$User.User$GetRecentlyViewedParams): Promise<any>;
getRecentlyViewedWikis(params: Option$User.User$GetRecentlyViewedParams): Promise<any>;
getUserIcon(userId: number): Promise<Entity$File.File$FileData>;
getGroups(params: Option$Group.Group$GetGroupsParams): Promise<any>;
postGroups(params: Option$Group.Group$PostGroupsParams): Promise<any>;
getGroup(groupId: number): Promise<any>;
patchGroup(groupId: number, params: Option$Group.Group$PatchGroupParams): Promise<any>;
deleteGroup(groupId: number): Promise<any>;
getStatuses(): Promise<any>;
getResolutions(): Promise<any>;
getPriorities(): Promise<any>;
postProject(params: Option$Project.Project$PostProjectParams): Promise<any>;
getProjects(params?: Option$Project.Project$GetProjectsParams): Promise<any>;
getProject(projectIdOrKey: string): Promise<any>;
patchProject(
projectIdOrKey: string,
params: Option$Project.Project$PatchProjectParams): Promise<any>;
deleteProject(projectIdOrKey: string): Promise<any>;
getProjectActivities(
projectIdOrKey: string,
params: Option$Space.Space$GetActivitiesParams): Promise<any>;
getProjectUsers(projectIdOrKey: string): Promise<any>;
deleteProjectUsers(
projectIdOrKey: string,
params: Option$Project.Project$DeleteProjectUsersParams): Promise<any>;
postProjectAdministrators(
projectIdOrKey: string,
params: Option$Project.Project$PostProjectAdministrators): Promise<any>;
getProjectAdministrators(projectIdOrKey: string): Promise<any>;
deleteProjectAdministrators(
projectIdOrKey: string,
params: Option$Project.Project$DeleteProjectAdministrators): Promise<any>;
getIssueTypes(projectIdOrKey: string): Promise<any>;
postIssueType(
projectIdOrKey: string,
params: Option$Project.Project$PostIssueTypeParams): Promise<any>;
patchIssueType(
projectIdOrKey: string,
id: number,
params: Option$Project.Project$PatchIssueTypeParams): Promise<any>;
deleteIssueType(
projectIdOrKey: string,
id: number,
params: Option$Project.Project$DeleteIssueTypeParams): Promise<any>;
getCategories(projectIdOrKey: string): Promise<any>;
postCategories(
projectIdOrKey: string,
params: Option$Project.Project$PostCategoriesParams): Promise<any>;
patchCategories(
projectIdOrKey: string,
id: number,
params: Option$Project.Project$PatchCategoriesParams): Promise<any>;
deleteCategories(projectIdOrKey: string, id: number): Promise<any>;
getVersions(projectIdOrKey: string): Promise<any>;
postVersions(
projectIdOrKey: string,
params: Option$Project.Project$PostVersionsParams): Promise<any>;
patchVersions(
projectIdOrKey: string,
id: number,
params: Option$Project.Project$PatchVersionsParams): Promise<any>;
deleteVersions(projectIdOrKey: string, id: number): Promise<any>;
getCustomFields(projectIdOrKey: string): Promise<any>;
postCustomField(
projectIdOrKey: string,
params: Option$Project.Project$PostCustomFieldParams | Option$Project.Project$PostCustomFieldWithNumericParams | Option$Project.Project$PostCustomFieldWithDateParams | Option$Project.Project$PostCustomFieldWithListParams): Promise<any>;
patchCustomField(
projectIdOrKey: string,
id: number,
params: Option$Project.Project$PatchCustomFieldParams | Option$Project.Project$PatchCustomFieldWithNumericParams | Option$Project.Project$PatchCustomFieldWithDateParams | Option$Project.Project$PatchCustomFieldWithListParams): Promise<any>;
deleteCustomField(projectIdOrKey: string, id: number): Promise<any>;
postCustomFieldItem(
projectIdOrKey: string,
id: number,
params: Option$Project.Project$PostCustomFieldItemParams): Promise<any>;
patchCustomFieldItem(
projectIdOrKey: string,
id: number,
itemId: number,
params: Option$Project.Project$PatchCustomFieldItemParams): Promise<any>;
deleteCustomFieldItem(
projectIdOrKey: string,
id: number,
params: Option$Project.Project$PostCustomFieldItemParams): Promise<any>;
getSharedFiles(
projectIdOrKey: string,
path: string,
params: Option$Project.Project$GetSharedFilesParams): Promise<any>;
getProjectsDiskUsage(projectIdOrKey: string): Promise<any>;
getWebhooks(projectIdOrKey: string): Promise<any>;
postWebhook(
projectIdOrKey: string,
params: Option$Project.Project$PostWebhookParams): Promise<any>;
getWebhook(projectIdOrKey: string, webhookId: string): Promise<any>;
patchWebhook(
projectIdOrKey: string,
webhookId: string,
params: Option$Project.Project$PatchWebhookParams): Promise<any>;
deleteWebhook(projectIdOrKey: string, webhookId: string): Promise<any>;
postIssue(params: Option$Issue.Issue$PostIssueParams): Promise<any>;
patchIssue(
issueIdOrKey: string,
params: Option$Issue.Issue$PatchIssueParams): Promise<any>;
getIssues(params?: Option$Issue.Issue$GetIssuesParams): Promise<any>;
getIssue(issueIdOrKey: string): Promise<any>;
getIssuesCount(params?: Option$Issue.Issue$GetIssuesParams): Promise<any>;
deleteIssuesCount(issueIdOrKey: string): Promise<any>;
getIssueComments(
issueIdOrKey: string,
params: Option$Issue.Issue$GetIssueCommentsParams): Promise<any>;
postIssueComments(
issueIdOrKey: string,
params: Option$Issue.Issue$PostIssueCommentsParams): Promise<any>;
getIssueCommentsCount(issueIdOrKey: string): Promise<any>;
getIssueComment(issueIdOrKey: string, commentId: number): Promise<any>;
patchIssueComment(
issueIdOrKey: string,
commentId: number,
params: Option$Issue.Issue$PatchIssueCommentParams): Promise<any>;
getIssueCommentNotifications(issueIdOrKey: string, commentId: number): Promise<any>;
postIssueCommentNotifications(
issueIdOrKey: string,
commentId: number,
prams: Option$Issue.Issue$IssueCommentNotifications): Promise<any>;
getIssueAttachments(issueIdOrKey: string): Promise<any>;
deleteIssueAttachment(issueIdOrKey: string, attachmentId: string): Promise<any>;
getIssueSharedFiles(issueIdOrKey: string): Promise<any>;
linkIssueSharedFiles(
issueIdOrKey: string,
params: Option$Issue.Issue$LinkIssueSharedFilesParams): Promise<any>;
unlinkIssueSharedFile(issueIdOrKey: string, id: number): Promise<any>;
getWikis(projectIdOrKey: number): Promise<any>;
getWikisCount(projectIdOrKey: number): Promise<any>;
getWikisTags(projectIdOrKey: number): Promise<any>;
postWiki(params: Option$Wiki.Wiki$PostWikiParams): Promise<any>;
getWiki(wikiId: number): Promise<any>;
patchWiki(wikiId: number, params: Option$Wiki.Wiki$PatchWikiParams): Promise<any>;
deleteWiki(wikiId: number, mailNotify: boolean): Promise<any>;
getWikisAttachments(wikiId: number): Promise<any>;
postWikisAttachments(wikiId: number, attachmentId: number[]): Promise<any>;
deleteWikisAttachments(wikiId: number, attachmentId: number): Promise<any>;
getWikisSharedFiles(wikiId: number): Promise<any>;
linkWikisSharedFiles(wikiId: number, fileId: number[]): Promise<any>;
unlinkWikisSharedFiles(wikiId: number, id: number): Promise<any>;
getWikisHistory(wikiId: number, params: Option$Wiki.Wiki$GetWikisHistoryParams): Promise<any>;
getWikisStars(wikiId: number): Promise<any>;
postStar(params: Option$Project.Project$PostStarParams): Promise<any>;
getNotifications(params: Option$Notification.Notification$GetNotificationsParams): Promise<any>;
getNotificationsCount(
params: Option$Notification.Notification$GetNotificationsCountParams): Promise<any>;
resetNotificationsMarkAsRead(): Promise<any>;
markAsReadNotification(id: number): Promise<any>;
getGitRepositories(projectIdOrKey: string): Promise<any>;
getGitRepository(projectIdOrKey: string, repoIdOrName: string): Promise<any>;
getPullRequests(
projectIdOrKey: string,
repoIdOrName: string,
params: Option$PullRequest.PullRequest$GetPullRequestsParams): Promise<any>;
getPullRequestsCount(
projectIdOrKey: string,
repoIdOrName: string,
params: Option$PullRequest.PullRequest$GetPullRequestsParams): Promise<any>;
postPullRequest(
projectIdOrKey: string,
repoIdOrName: string,
params: Option$PullRequest.PullRequest$PostPullRequestParams): Promise<any>;
getPullRequest(projectIdOrKey: string, repoIdOrName: string, number: number): Promise<any>;
patchPullRequest(
projectIdOrKey: string,
repoIdOrName: string,
number: number,
params: Option$PullRequest.PullRequest$PatchPullRequestParams): Promise<any>;
getPullRequestComments(
projectIdOrKey: string,
repoIdOrName: string,
number: number,
params: Option$PullRequest.PullRequest$GetPullRequestCommentsParams): Promise<any>;
postPullRequestComments(
projectIdOrKey: string,
repoIdOrName: string,
number: number,
params: Option$PullRequest.PullRequest$PostPullRequestCommentsParams): Promise<any>;
getPullRequestCommentsCount(projectIdOrKey: string, repoIdOrName: string, number: number): Promise<any>;
patchPullRequestComments(
projectIdOrKey: string,
repoIdOrName: string,
number: number,
commentId: number,
params: Option$PullRequest.PullRequest$PatchPullRequestCommentsParams): Promise<any>;
getPullRequestAttachments(projectIdOrKey: string, repoIdOrName: string, number: number): Promise<any>;
deletePullRequestAttachment(
projectIdOrKey: string,
repoIdOrName: string,
number: number,
attachmentId: number): Promise<any>;
getProjectIcon(projectIdOrKey: string): Promise<Entity$File.File$FileData>;
getSharedFile(
projectIdOrKey: string,
sharedFileId: number): Promise<Entity$File.File$FileData>;
getIssueAttachment(issueIdOrKey: string, attachmentId: number): Promise<Entity$File.File$FileData>;
getWikiAttachment(wikiId: number, attachmentId: number): Promise<Entity$File.File$FileData>;
getPullRequestAttachment(
projectIdOrKey: string,
repoIdOrName: string,
number: number,
attachmentId: number): Promise<Entity$File.File$FileData>
}
	declare export class OAuth2  {
constructor(credentials: Option$OAuth2.OAuth2$Credentials, timeout?: number): this;
getAuthorizationURL(options: {
host: string,
redirectUri?: string,
state?: string
}): string;
getAccessToken(
options: {
host: string,
code: string,
redirectUri?: string
}): Promise<Entity$OAuth2.OAuth2$AccessToken>;
refreshAccessToken(
options: {
host: string,
refreshToken: string
}): Promise<Entity$OAuth2.OAuth2$AccessToken>
}
	import type {
          PassThrough
        } from 'stream';

	declare export type File$FileData = File$NodeFileData | File$BrowserFileData;

declare export interface File$NodeFileData {
body: PassThrough,
url: string,
filename: string
} 

declare export interface File$BrowserFileData {
body: any,
url: string,
blob?: () => Promise<Blob>
} 

declare export interface OAuth2$AccessToken {
access_token: string,
token_type: string,
expires_in: number,
refresh_token: string
} 
	declare export type Option$Order = "asc" | "desc";

declare export  class Option$ActivityType {
  constructor(...args: empty): mixed;
static +Undefined: Class<Option$ActivityType__Undefined> & Option$ActivityType__Undefined & -1;// -1
static +IssueCreated: Class<Option$ActivityType__IssueCreated> & Option$ActivityType__IssueCreated & 1;// 1
static +IssueUpdated: Class<Option$ActivityType__IssueUpdated> & Option$ActivityType__IssueUpdated & 2;// 2
static +IssueCommented: Class<Option$ActivityType__IssueCommented> & Option$ActivityType__IssueCommented & 3;// 3
static +IssueDeleted: Class<Option$ActivityType__IssueDeleted> & Option$ActivityType__IssueDeleted & 4;// 4
static +WikiCreated: Class<Option$ActivityType__WikiCreated> & Option$ActivityType__WikiCreated & 5;// 5
static +WikiUpdated: Class<Option$ActivityType__WikiUpdated> & Option$ActivityType__WikiUpdated & 6;// 6
static +WikiDeleted: Class<Option$ActivityType__WikiDeleted> & Option$ActivityType__WikiDeleted & 7;// 7
static +FileAdded: Class<Option$ActivityType__FileAdded> & Option$ActivityType__FileAdded & 8;// 8
static +FileUpdated: Class<Option$ActivityType__FileUpdated> & Option$ActivityType__FileUpdated & 9;// 9
static +FileDeleted: Class<Option$ActivityType__FileDeleted> & Option$ActivityType__FileDeleted & 10;// 10
static +SvnCommitted: Class<Option$ActivityType__SvnCommitted> & Option$ActivityType__SvnCommitted & 11;// 11
static +GitPushed: Class<Option$ActivityType__GitPushed> & Option$ActivityType__GitPushed & 12;// 12
static +GitRepositoryCreated: Class<Option$ActivityType__GitRepositoryCreated> & Option$ActivityType__GitRepositoryCreated & 13;// 13
static +IssueMultiUpdated: Class<Option$ActivityType__IssueMultiUpdated> & Option$ActivityType__IssueMultiUpdated & 14;// 14
static +ProjectUserAdded: Class<Option$ActivityType__ProjectUserAdded> & Option$ActivityType__ProjectUserAdded & 15;// 15
static +ProjectUserRemoved: Class<Option$ActivityType__ProjectUserRemoved> & Option$ActivityType__ProjectUserRemoved & 16;// 16
static +NotifyAdded: Class<Option$ActivityType__NotifyAdded> & Option$ActivityType__NotifyAdded & 17;// 17
static +PullRequestAdded: Class<Option$ActivityType__PullRequestAdded> & Option$ActivityType__PullRequestAdded & 18;// 18
static +PullRequestUpdated: Class<Option$ActivityType__PullRequestUpdated> & Option$ActivityType__PullRequestUpdated & 19;// 19
static +PullRequestCommented: Class<Option$ActivityType__PullRequestCommented> & Option$ActivityType__PullRequestCommented & 20;// 20
static +PullRequestMerged: Class<Option$ActivityType__PullRequestMerged> & Option$ActivityType__PullRequestMerged & 21;// 21

}

declare class Option$ActivityType__Undefined mixins Option$ActivityType {}
declare class Option$ActivityType__IssueCreated mixins Option$ActivityType {}
declare class Option$ActivityType__IssueUpdated mixins Option$ActivityType {}
declare class Option$ActivityType__IssueCommented mixins Option$ActivityType {}
declare class Option$ActivityType__IssueDeleted mixins Option$ActivityType {}
declare class Option$ActivityType__WikiCreated mixins Option$ActivityType {}
declare class Option$ActivityType__WikiUpdated mixins Option$ActivityType {}
declare class Option$ActivityType__WikiDeleted mixins Option$ActivityType {}
declare class Option$ActivityType__FileAdded mixins Option$ActivityType {}
declare class Option$ActivityType__FileUpdated mixins Option$ActivityType {}
declare class Option$ActivityType__FileDeleted mixins Option$ActivityType {}
declare class Option$ActivityType__SvnCommitted mixins Option$ActivityType {}
declare class Option$ActivityType__GitPushed mixins Option$ActivityType {}
declare class Option$ActivityType__GitRepositoryCreated mixins Option$ActivityType {}
declare class Option$ActivityType__IssueMultiUpdated mixins Option$ActivityType {}
declare class Option$ActivityType__ProjectUserAdded mixins Option$ActivityType {}
declare class Option$ActivityType__ProjectUserRemoved mixins Option$ActivityType {}
declare class Option$ActivityType__NotifyAdded mixins Option$ActivityType {}
declare class Option$ActivityType__PullRequestAdded mixins Option$ActivityType {}
declare class Option$ActivityType__PullRequestUpdated mixins Option$ActivityType {}
declare class Option$ActivityType__PullRequestCommented mixins Option$ActivityType {}
declare class Option$ActivityType__PullRequestMerged mixins Option$ActivityType {}


declare export interface Notification$GetNotificationsParams {
minId?: number,
maxId?: number,
count?: number,
order?: Option$Order
} 

declare export interface Notification$GetNotificationsCountParams {
alreadyRead: boolean,
resourceAlreadyRead: boolean
} 

declare export interface Space$GetActivitiesParams {
activityTypeId?: Option$ActivityType[],
minId?: number,
maxId?: number,
count?: number,
order?: Option$Order
} 

declare export interface Space$PutSpaceNotificationParams {
content: string
} 

declare export interface User$PostUserParams {
userId: string,
password: string,
name: string,
mailAddress: string,
roleType: User$RoleType
} 

declare export interface User$PatchUserParams {
password?: string,
name?: string,
mailAddress?: string,
roleType?: User$RoleType
} 

declare export  class User$RoleType {
  constructor(...args: empty): mixed;
static +Admin: Class<User$RoleType__Admin> & User$RoleType__Admin & 1;// 1
static +User: Class<User$RoleType__User> & User$RoleType__User & 2;// 2
static +Reporter: Class<User$RoleType__Reporter> & User$RoleType__Reporter & 3;// 3
static +Viewer: Class<User$RoleType__Viewer> & User$RoleType__Viewer & 4;// 4
static +GuestReporter: Class<User$RoleType__GuestReporter> & User$RoleType__GuestReporter & 5;// 5
static +GuestViewer: Class<User$RoleType__GuestViewer> & User$RoleType__GuestViewer & 6;// 6

}

declare class User$RoleType__Admin mixins User$RoleType {}
declare class User$RoleType__User mixins User$RoleType {}
declare class User$RoleType__Reporter mixins User$RoleType {}
declare class User$RoleType__Viewer mixins User$RoleType {}
declare class User$RoleType__GuestReporter mixins User$RoleType {}
declare class User$RoleType__GuestViewer mixins User$RoleType {}


declare export interface User$GetUserActivitiesParams {
activityTypeId?: Option$ActivityType[],
minId?: number,
maxId?: number,
count?: number,
order?: Option$Order
} 

declare export interface User$GetUserStarsParams {
minId?: number,
maxId?: number,
count?: number,
order?: Option$Order
} 

declare export interface User$GetUserStarsCountParams {
since?: string,
until?: string
} 

declare export interface User$GetRecentlyViewedParams {
order?: Option$Order,
offset?: number,
count?: number
} 

declare export interface Group$GetGroupsParams {
order?: Option$Order,
offset?: number,
count?: number
} 

declare export interface Group$PostGroupsParams {
name: string,
members?: string[]
} 

declare export interface Group$PatchGroupParams {
name?: string,
members?: string[]
} 

declare export type Project$TextFormattingRule = "backlog" | "markdown";

declare export interface Project$PostProjectParams {
name: string,
key: string,
chartEnabled: boolean,
projectLeaderCanEditProjectLeader?: boolean,
subtaskingEnabled: boolean,
textFormattingRule: Project$TextFormattingRule
} 

declare export interface Project$PatchProjectParams {
name?: string,
key?: string,
chartEnabled?: boolean,
subtaskingEnabled?: boolean,
projectLeaderCanEditProjectLeader?: boolean,
textFormattingRule?: Project$TextFormattingRule,
archived?: boolean
} 

declare export interface Project$GetProjectsParams {
archived?: boolean,
all?: boolean
} 

declare export interface Project$DeleteProjectUsersParams {
userId: number
} 

declare export interface Project$PostProjectAdministrators {
userId: number
} 

declare export interface Project$DeleteProjectAdministrators {
userId: number
} 

declare export type Project$IssueTypeColor = "#e30000"
| "#990000"
| "#934981"
| "#814fbc"
| "#2779ca"
| "#007e9a"
| "#7ea800"
| "#ff9200"
| "#ff3265"
| "#666665";

declare export interface Project$PostIssueTypeParams {
name: string,
color: Project$IssueTypeColor
} 

declare export interface Project$PatchIssueTypeParams {
name?: string,
color?: Project$IssueTypeColor
} 

declare export interface Project$DeleteIssueTypeParams {
substituteIssueTypeId: number
} 

declare export interface Project$PostCategoriesParams {
name: string
} 

declare export interface Project$PatchCategoriesParams {
name: string
} 

declare export interface Project$PostVersionsParams {
name: string,
description: string,
startDate: string,
releaseDueDate: string
} 

declare export interface Project$PatchVersionsParams {
name: string,
description?: string,
startDate?: string,
releaseDueDate?: string,
archived?: boolean
} 

declare export interface Project$PostCustomFieldParams {
typeId: Project$FieldType,
name: string,
applicableIssueTypes?: number[],
description?: string,
required?: boolean
} 

declare export type Project$PostCustomFieldWithNumericParams = {
min?: number,
max?: number,
initialValue?: number,
unit?: string
} & Project$PostCustomFieldParams


declare export type Project$PostCustomFieldWithDateParams = {
min?: string,
max?: string,
initialValueType?: number,
initialDate?: string,
initialShift?: number
} & Project$PostCustomFieldParams


declare export type Project$PostCustomFieldWithListParams = {
items?: string[],
allowInput?: boolean,
allowAddItem?: boolean
} & Project$PostCustomFieldParams


declare export interface Project$PatchCustomFieldParams {
name?: string,
applicableIssueTypes?: number[],
description?: string,
required?: boolean
} 

declare export type Project$PatchCustomFieldWithNumericParams = {
min?: number,
max?: number,
initialValue?: number,
unit?: string
} & Project$PatchCustomFieldParams


declare export type Project$PatchCustomFieldWithDateParams = {
min?: string,
max?: string,
initialValueType?: number,
initialDate?: string,
initialShift?: number
} & Project$PatchCustomFieldParams


declare export type Project$PatchCustomFieldWithListParams = {
items?: string[],
allowInput?: boolean,
allowAddItem?: boolean
} & Project$PatchCustomFieldParams


declare export interface Project$PostCustomFieldItemParams {
name: string
} 

declare export interface Project$PatchCustomFieldItemParams {
name: string
} 

declare export interface Project$GetSharedFilesParams {
order?: Option$Order,
offset?: number,
count?: number
} 

declare export interface Project$PostWebhookParams {
name?: string,
description?: string,
hookUrl?: string,
allEvent?: boolean,
activityTypeIds?: number[]
} 

declare export interface Project$PatchWebhookParams {
name?: string,
description?: string,
hookUrl?: string,
allEvent?: boolean,
activityTypeIds?: number[]
} 

declare export  class Project$FieldType {
  constructor(...args: empty): mixed;
static +Text: Class<Project$FieldType__Text> & Project$FieldType__Text & 1;// 1
static +TextArea: Class<Project$FieldType__TextArea> & Project$FieldType__TextArea & 2;// 2
static +Numeric: Class<Project$FieldType__Numeric> & Project$FieldType__Numeric & 3;// 3
static +Date: Class<Project$FieldType__Date> & Project$FieldType__Date & 4;// 4
static +SingleList: Class<Project$FieldType__SingleList> & Project$FieldType__SingleList & 5;// 5
static +MultipleList: Class<Project$FieldType__MultipleList> & Project$FieldType__MultipleList & 6;// 6
static +CheckBox: Class<Project$FieldType__CheckBox> & Project$FieldType__CheckBox & 7;// 7
static +Radio: Class<Project$FieldType__Radio> & Project$FieldType__Radio & 8;// 8

}

declare class Project$FieldType__Text mixins Project$FieldType {}
declare class Project$FieldType__TextArea mixins Project$FieldType {}
declare class Project$FieldType__Numeric mixins Project$FieldType {}
declare class Project$FieldType__Date mixins Project$FieldType {}
declare class Project$FieldType__SingleList mixins Project$FieldType {}
declare class Project$FieldType__MultipleList mixins Project$FieldType {}
declare class Project$FieldType__CheckBox mixins Project$FieldType {}
declare class Project$FieldType__Radio mixins Project$FieldType {}


declare export interface Project$PostStarParams {
issueId?: number,
commentId?: number,
wikiId?: number,
pullRequestId?: number,
pullRequestCommentId?: number
} 

declare export interface Issue$PostIssueParams {
projectId: number,
summary: string,
priorityId: number,
issueTypeId: number,
parentIssueId?: number,
description?: string,
startDate?: string,
dueDate?: string,
estimatedHours?: number,
actualHours?: number,
categoryId?: number[],
versionId?: number[],
milestoneId?: number[],
assigneeId?: number,
notifiedUserId?: number[],
attachmentId?: number[],
[customField_: string]: any
} 

declare export interface Issue$PatchIssueParams {
summary?: string,
parentIssueId?: number,
description?: string,
statusId?: number,
resolutionId?: number,
startDate?: string,
dueDate?: string,
estimatedHours?: number,
actualHours?: number,
issueTypeId?: number,
categoryId?: number[],
versionId?: number[],
milestoneId?: number[],
priorityId?: number,
assigneeId?: number,
notifiedUserId?: number[],
attachmentId?: number[],
comment?: string,
[customField_: string]: any
} 

declare export interface Issue$GetIssuesParams {
projectId?: number[],
issueTypeId?: number[],
categoryId?: number[],
versionId?: number[],
milestoneId?: number[],
statusId?: number[],
priorityId?: number[],
assigneeId?: number[],
createdUserId?: number[],
resolutionId?: number[],
parentChild?: Issue$ParentChildType,
attachment?: boolean,
sharedFile?: boolean,
sort?: Issue$SortKey,
order?: Option$Order,
offset?: number,
count?: number,
createdSince?: string,
createdUntil?: string,
updatedSince?: string,
updatedUntil?: string,
startDateSince?: string,
startDateUntil?: string,
dueDateSince?: string,
dueDateUntil?: string,
id?: number[],
parentIssueId?: number[],
keyword: string,
[customField_: string]: any
} 

declare export  class Issue$ParentChildType {
  constructor(...args: empty): mixed;
static +All: Class<Issue$ParentChildType__All> & Issue$ParentChildType__All & 0;// 0
static +NotChild: Class<Issue$ParentChildType__NotChild> & Issue$ParentChildType__NotChild & 1;// 1
static +Child: Class<Issue$ParentChildType__Child> & Issue$ParentChildType__Child & 2;// 2
static +NotChildNotParent: Class<Issue$ParentChildType__NotChildNotParent> & Issue$ParentChildType__NotChildNotParent & 3;// 3
static +Parent: Class<Issue$ParentChildType__Parent> & Issue$ParentChildType__Parent & 4;// 4

}

declare class Issue$ParentChildType__All mixins Issue$ParentChildType {}
declare class Issue$ParentChildType__NotChild mixins Issue$ParentChildType {}
declare class Issue$ParentChildType__Child mixins Issue$ParentChildType {}
declare class Issue$ParentChildType__NotChildNotParent mixins Issue$ParentChildType {}
declare class Issue$ParentChildType__Parent mixins Issue$ParentChildType {}


declare export type Issue$SortKey = "issueType"
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

declare export interface Issue$GetIssueCommentsParams {
minId?: number,
maxId?: number,
count?: number,
order?: Option$Order
} 

declare export interface Issue$PostIssueCommentsParams {
content: string,
notifiedUserId?: number[],
attachmentId?: number[]
} 

declare export interface Issue$PatchIssueCommentParams {
content: string
} 

declare export interface Issue$IssueCommentNotifications {
notifiedUserId: number[]
} 

declare export interface Issue$LinkIssueSharedFilesParams {
fileId: number[]
} 

declare export interface PullRequest$GetPullRequestsParams {
statusId?: number[],
assigneeId?: number[],
issueId?: number[],
createdUserId?: number[],
offset?: number,
count?: number
} 

declare export interface PullRequest$PostPullRequestParams {
summary: string,
description: string,
base: string,
branch: string,
issueId?: number,
assigneeId?: number,
notifiedUserId?: number[],
attachmentId?: number[]
} 

declare export interface PullRequest$PatchPullRequestParams {
summary?: string,
description?: string,
issueId?: number,
assigneeId?: number,
notifiedUserId?: number[],
comment?: string[]
} 

declare export interface PullRequest$GetPullRequestCommentsParams {
minId?: number,
maxId?: number,
count?: number,
order?: Option$Order
} 

declare export interface PullRequest$PostPullRequestCommentsParams {
content: string,
notifiedUserId?: number[]
} 

declare export interface PullRequest$PatchPullRequestCommentsParams {
content: string
} 

declare export interface Wiki$PostWikiParams {
projectId: number,
name: string,
content: string,
mailNotify?: boolean
} 

declare export interface Wiki$PatchWikiParams {
name?: string,
content?: string,
mailNotify?: boolean
} 

declare export interface Wiki$GetWikisHistoryParams {
minId?: number,
maxId?: number,
count?: number,
order?: Option$Order
} 

declare export interface OAuth2$Credentials {
clientId: string,
clientSecret: string
} 
	declare export class Error$BacklogError mixins global.Error {
constructor(name: Error$BacklogErrorNameType, response: Response, body?: {
errors: Error$BacklogErrorMessage[]
}): this;
name: Error$BacklogErrorNameType;
url: string;
status: number;
body: {
errors: Error$BacklogErrorMessage[]
};
response: Response
}

declare export class Error$BacklogApiError mixins Error$BacklogError {
constructor(response: Response, body?: {
errors: Error$BacklogErrorMessage[]
}): this
}

declare export class Error$BacklogAuthError mixins Error$BacklogError {
constructor(response: Response, body?: {
errors: Error$BacklogErrorMessage[]
}): this
}

declare export class Error$UnexpectedError mixins Error$BacklogError {
constructor(response: Response): this
}

declare export interface Error$BacklogErrorMessage {
message: string,
code: number,
errorInfo: string,
moreInfo: string
} 

declare export type Error$BacklogErrorNameType = "BacklogApiError" | "BacklogAuthError" | "UnexpectedError";
    }
