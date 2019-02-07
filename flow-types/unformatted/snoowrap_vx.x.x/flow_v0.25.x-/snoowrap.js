declare module 'snoowrap' {
        import type {
          Options as RequestOptions
        } from 'request';

	import type {
          Comment as _Comment,Listing as _Listing,ListingOptions,SortedListingOptions,LiveThread as _LiveThread,LiveThreadSettings,MultiReddit as _MultiReddit,MultiRedditProperties,PrivateMessage as _PrivateMessage,RedditContent as _RedditContent,RedditUser as _RedditUser,ReplyableContent as _ReplyableContent,Submission as _Submission,Subreddit as _Subreddit,SubredditSettings,VoteableContent as _VoteableContent,WikiPage as _WikiPage
        } from './dist/objects';

	declare module.exports: typeof Snoowrap

	declare class Snoowrap  {
static getAuthUrl(options: Snoowrap$Snoowrap$AuthUrlOptions): string;
static fromAuthCode(options: Snoowrap$Snoowrap$AuthCodeOptions): Snoowrap;
static noConflict(): typeof Snoowrap;
accessToken: string;
clientId: string;
clientSecret: string;
password: string;
ratelimitExpiration: number;
ratelimitRemaining: number;
refreshToken: string;
scope: string[];
tokenExpiration: number;
userAgent: string;
username: string;
constructor(options: Snoowrap$Snoowrap$SnoowrapOptions): this;
checkCaptchaRequirement(): Promise<boolean>;
checkUsernameAvailability(name: string): Promise<boolean>;
composeMessage(options: Snoowrap$Snoowrap$ComposeMessageParams): Promise<any>;
config(opts?: Snoowrap$Snoowrap$ConfigOptions): Snoowrap$Snoowrap$ConfigOptions;
createLivethread(options: LiveThreadSettings): Promise<_LiveThread>;
createMultireddit(
options: MultiRedditProperties & {
name: string,
subreddits: _Subreddit[] | string[]
}): Promise<_MultiReddit>;
createSubreddit(options: SubredditSettings): Promise<_Subreddit>;
credentialedClientRequest(options?: RequestOptions): Promise<any>;
getBlockedUsers(): Promise<_RedditUser[]>;
getCaptchaImage(identifier: string): Promise<string>;
getComment(commentId: string): _Comment;
getContributorSubreddits(options?: ListingOptions): Promise<_Listing<_Subreddit>>;
getControversial(
subredditName?: string,
options?: SortedListingOptions): Promise<_Listing<_Submission>>;
getDefaultSubreddits(options?: ListingOptions): Promise<_Listing<_Subreddit>>;
getFriends(): Promise<_RedditUser[]>;
getGoldSubreddits(options?: ListingOptions): Promise<_Listing<_Subreddit>>;
getHot(
subredditName?: string,
options?: ListingOptions): Promise<_Listing<_Submission>>;
getInbox(options?: {
filter?: string
}): Promise<_Listing<_PrivateMessage | _Comment>>;
getKarma(
): Promise<Array<{
sr: _Subreddit,
comment_karma: number,
link_karma: number
}>>;
getLivethread(threadId: string): _LiveThread;
getMe(): _RedditUser;
getMessage(messageId: string): _PrivateMessage;
getModeratedSubreddits(options?: ListingOptions): Promise<_Listing<_Subreddit>>;
getModmail(options?: ListingOptions): Promise<_Listing<_PrivateMessage>>;
getMyMultireddits(): Promise<_MultiReddit[]>;
getMyTrophies(): Promise<Snoowrap$Snoowrap$Trophy[]>;
getNew(
subredditName?: string,
options?: ListingOptions): Promise<_Listing<_Submission>>;
getNewCaptchaIdentifier(): Promise<string>;
getNewComments(subredditName?: string, options?: ListingOptions): Promise<_Listing<_Comment>>;
getNewSubreddits(options?: ListingOptions): Promise<_Listing<_Subreddit>>;
getOauthScopeList(
): Promise<{
[key: string]: {
description: string,
id: string,
name: string
}
}>;
getPopularSubreddit(options?: ListingOptions): Promise<_Listing<_Subreddit>>;
getPreferences(): Promise<any>;
getRandomSubmission(subredditName?: string): Promise<_Submission>;
getRising(
subredditName?: string,
options?: ListingOptions): Promise<_Listing<_Submission>>;
getSavedCategories(): Promise<any[]>;
getSentMessages(options?: ListingOptions): Promise<_Listing<_PrivateMessage>>;
getStickiedLivethread(): Promise<_LiveThread | void>;
getSubmission(submissionId: string): _Submission;
getSubreddit(displayName: string): _Subreddit;
getSubscriptions(options?: ListingOptions): _Listing<_Subreddit>;
getTop(
subredditName?: string,
options?: SortedListingOptions): Promise<_Listing<_Submission>>;
getUnreadMessages(options?: ListingOptions): Promise<_Listing<_PrivateMessage>>;
getUser(name: string): _RedditUser;
markAsVisited(links: _Submission[]): Promise<void>;
markMessagesAsRead(messages: _PrivateMessage[] | string[]): Promise<void>;
markMessagesAsUnread(messages: _PrivateMessage[] | string[]): Promise<void>;
oauthRequest(options: RequestOptions): Promise<any>;
rawRequest(options: RequestOptions): Promise<any>;
readAllMessages(): Promise<void>;
revokeRefreshToken(): Promise<void>;
search(options: Snoowrap$Snoowrap$SearchOptions): Promise<_Listing<_Submission>>;
searchSubredditNames(
options: {
query: string,
exact?: boolean,
includeNsfw?: boolean
}): Promise<string[]>;
searchSubreddits(options: ListingOptions & {
query: string
}): Promise<_Listing<_Subreddit>>;
searchSubredditTopics(options: {
query: string
}): Promise<_Subreddit[]>;
submitLink(options: Snoowrap$Snoowrap$SubmitLinkOptions): Promise<_Submission>;
submitSelfpost(options: Snoowrap$Snoowrap$SubmitSelfPostOptions): Promise<_Submission>;
unauthenticatedRequest(options: RequestOptions): Promise<any>;
updateAccessToken(): Promise<string>;
updatePreferences(updatedPreferences: any): Promise<void>
}
	declare export interface Snoowrap$SnoowrapOptions {
userAgent: string,
clientId?: string,
clientSecret?: string,
username?: string,
password?: string,
refreshToken?: string,
accessToken?: string
} 

declare export interface Snoowrap$ConfigOptions {
endpointDomain?: string,
requestDelay?: number,
requestTimeout?: number,
continueAfterRatelimitError?: boolean,
retryErrorCodes?: number[],
maxRetryAttempts?: number,
warnings?: boolean,
debug?: boolean,
proxies?: boolean
} 

declare export interface Snoowrap$AuthUrlOptions {
clientId: string,
scope: string[],
redirectUri: string,
permanent?: boolean,
state?: string,
endpointDomain?: string
} 

declare export interface Snoowrap$AuthCodeOptions {
code: string,
userAgent: string,
clientId: string,
clientSecret?: string,
redirectUri: string,
endpointDomain?: string
} 

declare export type Snoowrap$Sort = "confidence"
| "top"
| "new"
| "controversial"
| "old"
| "random"
| "qa";

declare export type Snoowrap$ModAction = {
target_body: string,
mod_id36: string,
created_utc: number,
subreddit: Subreddit,
target_title: string | null,
target_permalink: string,
subreddit_name_prefixed: string,
details: string | null,
action: string,
target_author: string,
target_fullname: string,
sr_id36: string,
id: string,
mod: string,
description: string | null
} & RedditContent<Snoowrap$ModAction>


declare export interface Snoowrap$SubmitSelfPostOptions {
text?: string,
subredditName: string,
title: string,
sendReplies?: boolean,
captchaIden?: string,
captchaResponse?: string
} 

declare export interface Snoowrap$SubmitLinkOptions {
url: string,
resubmit?: boolean
} 

declare export interface Snoowrap$ComposeMessageParams {
to: RedditUser | Subreddit | string,
subject: string,
text: string,
fromSubreddit?: Subreddit | string,
captchaIden?: string,
captchaResponse?: string
} 

declare export interface Snoowrap$BaseSearchOptions {
query: string,
time?: "hour"
| "day"
| "week"
| "month"
| "year"
| "all",
sort?: "relevance"
| "hot"
| "top"
| "new"
| "comments",
syntax?: "cloudsearch" | "lucene" | "plain"
} 

declare export type Snoowrap$SearchOptions = {
subreddit?: Subreddit | string,
restrictSr?: boolean
} & Snoowrap$BaseSearchOptions


declare export interface Snoowrap$Trophy {
icon_70: string,
icon_40: string,
name: string,
url: string,
award_id: string,
id: string,
description: string
} 

declare export {
        _Comment as Comment,_Listing as Listing,_LiveThread as LiveThread,_MultiReddit as MultiReddit,_PrivateMessage as PrivateMessage,_RedditContent as RedditContent,_RedditUser as RedditUser,_ReplyableContent as ReplyableContent,_Submission as Submission,_Subreddit as Subreddit,_VoteableContent as VoteableContent,_WikiPage as WikiPage
      }

    }
