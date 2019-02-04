declare module 'jira-client' {
        import type {
          CoreOptions,RequestResponse
        } from 'request';

	import type {
          ReadStream
        } from 'fs';

	declare class JiraApi  {
constructor(options: JiraApi$JiraApi$JiraApiOptions): this;
findIssue(
issueNumber: string,
expand?: string,
fields?: string,
properties?: string,
fieldsByKeys?: boolean): Promise<JiraApi$JiraApi$JsonResponse>;
getUnresolvedIssueCount(version: string): Promise<number>;
getProject(project: string): Promise<JiraApi$JiraApi$JsonResponse>;
createProject(project: string): Promise<JiraApi$JiraApi$JsonResponse>;
findRapidView(projectName: string): Promise<JiraApi$JiraApi$JsonResponse[]>;
getLastSprintForRapidView(rapidViewId: string): Promise<JiraApi$JiraApi$JsonResponse>;
getSprintIssues(rapidViewId: string, sprintId: string): Promise<JiraApi$JiraApi$JsonResponse>;
listSprints(rapidViewId: string): Promise<JiraApi$JiraApi$JsonResponse>;
addIssueToSprint(issueId: string, sprintId: string): Promise<JiraApi$JiraApi$JsonResponse>;
issueLink(link: JiraApi$JiraApi$LinkObject): Promise<JiraApi$JiraApi$JsonResponse>;
getRemoteLinks(issueNumber: string): Promise<JiraApi$JiraApi$JsonResponse>;
createRemoteLink(
issueNumber: string,
remoteLink: JiraApi$JiraApi$LinkObject): Promise<JiraApi$JiraApi$JsonResponse>;
getVersions(project: string): Promise<JiraApi$JiraApi$JsonResponse>;
createVersion(version: string): Promise<JiraApi$JiraApi$JsonResponse>;
updateVersion(version: string): Promise<JiraApi$JiraApi$JsonResponse>;
deleteVersion(
versionId: string,
moveFixIssuesToId: string,
moveAffectedIssuesToId: string): Promise<JiraApi$JiraApi$JsonResponse>;
searchJira(
searchString: string,
optional?: JiraApi$JiraApi$SearchQuery): Promise<JiraApi$JiraApi$JsonResponse>;
createUser(user: JiraApi$JiraApi$UserObject): Promise<JiraApi$JiraApi$JsonResponse>;
searchUsers(
options: JiraApi$JiraApi$SearchUserOptions): Promise<JiraApi$JiraApi$JsonResponse>;
getUsersInGroup(
groupname: string,
startAt?: number,
maxResults?: number): Promise<JiraApi$JiraApi$JsonResponse>;
addNewIssue(issue: JiraApi$JiraApi$IssueObject): Promise<JiraApi$JiraApi$JsonResponse>;
addWatcher(issueKey: string, username: string): Promise<JiraApi$JiraApi$JsonResponse>;
deleteIssue(issueId: string): Promise<JiraApi$JiraApi$JsonResponse>;
updateIssue(
issueId: string,
issueUpdate: JiraApi$JiraApi$IssueObject): Promise<JiraApi$JiraApi$JsonResponse>;
listComponents(project: string): Promise<JiraApi$JiraApi$JsonResponse>;
addNewComponent(
component: JiraApi$JiraApi$ComponentObject): Promise<JiraApi$JiraApi$JsonResponse>;
deleteComponent(componentId: string): Promise<JiraApi$JiraApi$JsonResponse>;
createCustomField(field: JiraApi$JiraApi$FieldObject): Promise<JiraApi$JiraApi$JsonResponse>;
listFields(): Promise<JiraApi$JiraApi$FieldObject[]>;
createFieldOption(
fieldKey: string,
option: JiraApi$JiraApi$FieldOptionObject): Promise<JiraApi$JiraApi$JsonResponse>;
listFieldOptions(fieldKey: string): Promise<JiraApi$JiraApi$JsonResponse>;
upsertFieldOption(
fieldKey: string,
optionId: string,
option: JiraApi$JiraApi$FieldOptionObject): Promise<JiraApi$JiraApi$JsonResponse>;
getFieldOption(fieldKey: string, optionId: string): Promise<JiraApi$JiraApi$JsonResponse>;
deleteFieldOption(fieldKey: string, optionId: string): Promise<JiraApi$JiraApi$JsonResponse>;
getIssueProperty(issueNumber: string, property: string): Promise<JiraApi$JiraApi$JsonResponse>;
listPriorities(): Promise<JiraApi$JiraApi$JsonResponse>;
listTransitions(issueId: string): Promise<JiraApi$JiraApi$JsonResponse>;
transitionIssue(
issueId: string,
issueTransition: JiraApi$JiraApi$TransitionObject): Promise<JiraApi$JiraApi$JsonResponse>;
listProjects(): Promise<JiraApi$JiraApi$JsonResponse>;
addComment(issueId: string, comment: string): Promise<JiraApi$JiraApi$JsonResponse>;
updateComment(
issueId: string,
commentId: string,
comment: string,
options?: any): Promise<JiraApi$JiraApi$JsonResponse>;
addWorklog(
issueId: string,
worklog: JiraApi$JiraApi$WorklogObject,
newEstimate: JiraApi$JiraApi$EstimateObject): Promise<JiraApi$JiraApi$JsonResponse>;
deleteWorklog(issueId: string, worklogId: string): Promise<JiraApi$JiraApi$JsonResponse>;
listIssueTypes(): Promise<JiraApi$JiraApi$JsonResponse>;
registerWebhook(webhook: JiraApi$JiraApi$WebhookObject): Promise<JiraApi$JiraApi$JsonResponse>;
listWebhooks(): Promise<JiraApi$JiraApi$JsonResponse>;
getWebhook(webhookID: string): Promise<JiraApi$JiraApi$JsonResponse>;
deleteWebhook(webhookID: string): Promise<JiraApi$JiraApi$JsonResponse>;
getCurrentUser(): Promise<JiraApi$JiraApi$JsonResponse>;
getBacklogForRapidView(rapidViewId: string): Promise<JiraApi$JiraApi$JsonResponse>;
addAttachmentOnIssue(issueId: string, readStream: ReadStream): Promise<JiraApi$JiraApi$JsonResponse>;
issueNotify(
issueId: string,
notificationBody: JiraApi$JiraApi$NotificationObject): Promise<JiraApi$JiraApi$JsonResponse>;
listStatus(): Promise<JiraApi$JiraApi$JsonResponse>;
getDevStatusSummary(issueId: string): Promise<JiraApi$JiraApi$JsonResponse>;
getDevStatusDetail(
issueId: string,
applicationType: string,
dataType: string): Promise<JiraApi$JiraApi$JsonResponse>;
moveToBacklog(issues: string[]): Promise<JiraApi$JiraApi$JsonResponse>;
getAllBoards(
startAt?: number,
maxResults?: number,
type?: string,
name?: string,
projectKeyOrId?: string): Promise<JiraApi$JiraApi$JsonResponse>;
createBoard(boardBody: JiraApi$JiraApi$BoardObject): Promise<JiraApi$JiraApi$JsonResponse>;
getBoard(boardId: string): Promise<JiraApi$JiraApi$JsonResponse>;
deleteBoard(boardId: string): Promise<JiraApi$JiraApi$JsonResponse>;
getIssuesForBacklog(
boardId: string,
startAt?: number,
maxResults?: number,
jql?: string,
validateQuery?: boolean,
fields?: string): Promise<JiraApi$JiraApi$JsonResponse>;
getConfiguration(boardId: string): Promise<JiraApi$JiraApi$JsonResponse>;
getIssuesForBoard(
boardId: string,
startAt?: number,
maxResults?: number,
jql?: string,
validateQuery?: boolean,
fields?: string): Promise<JiraApi$JiraApi$JsonResponse>;
getEpics(
boardId: string,
startAt?: number,
maxResults?: number,
done?: "true" | "false"): Promise<JiraApi$JiraApi$JsonResponse>;
getBoardIssuesForEpic(
boardId: string,
epicId: string,
startAt?: number,
maxResults?: number,
jql?: string,
validateQuery?: boolean,
fields?: string): Promise<JiraApi$JiraApi$JsonResponse>;
getProjects(
boardId: string,
startAt?: number,
maxResults?: number): Promise<JiraApi$JiraApi$JsonResponse>;
getProjectsFull(boardId: string): Promise<JiraApi$JiraApi$JsonResponse>;
getBoardPropertiesKeys(boardId: string): Promise<JiraApi$JiraApi$JsonResponse>;
deleteBoardProperty(boardId: string, propertyKey: string): Promise<JiraApi$JiraApi$JsonResponse>;
setBoardProperty(
boardId: string,
propertyKey: string,
body: string): Promise<JiraApi$JiraApi$JsonResponse>;
getBoardProperty(boardId: string, propertyKey: string): Promise<JiraApi$JiraApi$JsonResponse>;
getAllSprints(
boardId: string,
startAt?: number,
maxResults?: number,
state?: "future" | "active" | "closed"): Promise<JiraApi$JiraApi$JsonResponse>;
getBoardIssuesForSprint(
boardId: string,
sprintId: string,
startAt?: number,
maxResults?: number,
jql?: string,
validateQuery?: boolean,
fields?: string): Promise<JiraApi$JiraApi$JsonResponse>;
getAllVersions(
boardId: string,
startAt?: number,
maxResults?: number,
released?: "true" | "false"): Promise<JiraApi$JiraApi$JsonResponse>
}
	declare interface JiraApi$JiraApiOptions {
protocol?: string,
host: string,
port?: string,
username?: string,
password?: string,
apiVersion?: string,
base?: string,
intermediatePath?: string,
strictSSL?: boolean,
request?: any,
timeout?: number,
webhookVersion?: string,
greenhopperVersion?: string,
bearer?: string,
oauth?: JiraApi$OAuth
} 

declare interface JiraApi$OAuth {
consumer_key: string,
consumer_secret: string,
access_token: string,
access_token_secret: string,
signature_method?: string
} 

declare interface JiraApi$LinkObject {
[name: string]: any
} 

declare interface JiraApi$Query {
[name: string]: any
} 

declare interface JiraApi$JsonResponse {
[name: string]: any
} 

declare interface JiraApi$UserObject {
[name: string]: any
} 

declare interface JiraApi$IssueObject {
[name: string]: any
} 

declare interface JiraApi$ComponentObject {
[name: string]: any
} 

declare interface JiraApi$FieldObject {
[name: string]: any
} 

declare interface JiraApi$FieldOptionObject {
[name: string]: any
} 

declare interface JiraApi$TransitionObject {
[name: string]: any
} 

declare interface JiraApi$WorklogObject {
[name: string]: any
} 

declare interface JiraApi$EstimateObject {
[name: string]: any
} 

declare interface JiraApi$WebhookObject {
[name: string]: any
} 

declare interface JiraApi$NotificationObject {
[name: string]: any
} 

declare interface JiraApi$BoardObject {
[name: string]: any
} 

declare interface JiraApi$SearchUserOptions {
username: string,
startAt?: number,
maxResults?: number,
includeActive?: boolean,
includeInactive?: boolean
} 

declare interface JiraApi$SearchQuery {
startAt?: number,
maxResults?: number,
fields?: string[],
startAt?: number,
maxResults?: number,
fields?: string[]
} 

declare interface JiraApi$UriOptions {
pathname: string,
query?: JiraApi$Query,
intermediatePath?: string
} 
	declare export default typeof JiraApi

    }
