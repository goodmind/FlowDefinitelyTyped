declare module 'intercom-client' {
        import type {
          UserList,User,UserIdentifier
        } from './User';

	import type {
          LeadList,Lead,LeadIdentifier
        } from './Lead';

	import type {
          CompanyIdentifier,CompanyList,Company
        } from './Company';

	import type {
          TagIdentifier,TagList,Tag,TagOper
        } from './Tag';

	import type {
          EventList,Event,EventListParam
        } from './Event';

	import type {
          Scroll
        } from './Scroll';

	import type {
          IntercomError
        } from './IntercomError';

	import type {
          IncomingMessage
        } from 'http';

	declare export {
          IntercomError
        }

	declare export interface IdentityVerificationOptions {
secretKey: string,
identifier: string
} 
	declare export var IdentityVerification: {
userHash(opts: IdentityVerificationOptions): string
};
	declare export class Client  {
constructor(auth: {
token: string
} | {
appId: string,
appApiKey: string
}): this;
constructor(username: string, password: string): this;
users: Users;
companies: Companies;
tags: Tags;
events: Events;
contacts: Leads;
leads: Leads
}
	declare export class ApiResponse<T> mixins IncomingMessage {
body: T
}
	declare export type callback<T> = ((d: T) => void) | ((err: IntercomError, d: T) => void);
	declare export class Users  {
create(user: $Shape<User>): Promise<ApiResponse<User>>;
create(user: $Shape<User>, cb: callback<ApiResponse<User>>): void;
update(user: UserIdentifier & $Shape<User>): Promise<ApiResponse<User>>;
update(user: UserIdentifier & $Shape<User>, cb: callback<ApiResponse<User>>): void;
find(identifier: UserIdentifier): Promise<ApiResponse<User>>;
find(identifier: UserIdentifier, cb: callback<ApiResponse<User>>): void;
list(): Promise<ApiResponse<UserList>>;
list(cb: callback<ApiResponse<UserList>>): void;
listBy(
params: {
tag_id?: string,
segment_id?: string
}): Promise<ApiResponse<UserList>>;
listBy(
params: {
tag_id?: string,
segment_id?: string
},
cb: callback<ApiResponse<UserList>>): void;
scroll: Scroll<User>;
archive(identifier: UserIdentifier): Promise<ApiResponse<User>>;
archive(identifier: UserIdentifier, cb: callback<ApiResponse<User>>): void;
requestPermanentDeletion(id: string): Promise<{
id: number
}>;
requestPermanentDeletion(id: string, cb: callback<{
id: number
}>): void;
requestPermanentDeletionByParams(identifier: UserIdentifier): Promise<{
id: number
}>;
requestPermanentDeletionByParams(identifier: UserIdentifier, cb: callback<{
id: number
}>): void
}
	declare export class Leads  {
create(lead: $Shape<Lead>): Promise<ApiResponse<Lead>>;
create(lead: $Shape<Lead>, cb: callback<ApiResponse<Lead>>): void;
update(lead: UserIdentifier & $Shape<Lead>): Promise<ApiResponse<Lead>>;
update(lead: UserIdentifier & $Shape<Lead>, cb: callback<ApiResponse<Lead>>): void;
list(): Promise<ApiResponse<LeadList>>;
list(cb: callback<ApiResponse<LeadList>>): void;
listBy(
params: {
email?: string,
tag_id?: string,
segment_id?: string
}): Promise<ApiResponse<LeadList>>;
listBy(
params: {
email?: string,
tag_id?: string,
segment_id?: string
},
cb: callback<ApiResponse<LeadList>>): void;
find(identifier: LeadIdentifier): Promise<ApiResponse<Lead>>;
find(identifier: LeadIdentifier, cb: callback<ApiResponse<Lead>>): void;
delete(id: string): Promise<ApiResponse<Lead>>;
delete(id: string, cb: callback<ApiResponse<Lead>>): void;
convert(
params: {
contact: LeadIdentifier,
user: UserIdentifier
}): Promise<ApiResponse<Lead>>;
convert(
params: {
contact: LeadIdentifier,
user: UserIdentifier
},
cb: callback<ApiResponse<Lead>>): void
}
	declare export class Companies  {
create(company: CompanyIdentifier & $Shape<Company>): Promise<ApiResponse<Company>>;
create(
company: CompanyIdentifier & $Shape<Company>,
cb: callback<ApiResponse<Company>>): void;
update(company: CompanyIdentifier & $Shape<Company>): Promise<ApiResponse<Company>>;
update(
company: CompanyIdentifier & $Shape<Company>,
cb: callback<ApiResponse<Company>>): void;
find(identifier: CompanyIdentifier): Promise<ApiResponse<Company>>;
find(identifier: CompanyIdentifier, cb: callback<ApiResponse<Company>>): void;
list(): Promise<ApiResponse<CompanyList>>;
list(cb: callback<ApiResponse<CompanyList>>): void;
listBy(
params: {
tag_id?: string,
segment_id?: string
}): Promise<ApiResponse<CompanyList>>;
listBy(
params: {
tag_id?: string,
segment_id?: string
},
cb: callback<ApiResponse<CompanyList>>): void;
scroll: Scroll<Company>;
archive(): Promise<Company>
}
	declare export class Tags  {
create(tag: $Shape<Tag>): Promise<ApiResponse<Tag>>;
create(tag: $Shape<Tag>, cb: callback<ApiResponse<Tag>>): void;
tag(tagOper: TagOper): Promise<ApiResponse<Tag>>;
tag(tagOper: TagOper, cb: callback<ApiResponse<Tag>>): void;
untag(tagOper: TagOper): Promise<ApiResponse<Tag>>;
untag(tagOper: TagOper, cb: callback<ApiResponse<Tag>>): void;
delete(tag: TagIdentifier): Promise<IncomingMessage>;
delete(tag: TagIdentifier, cb: callback<IncomingMessage>): void;
list(): Promise<ApiResponse<TagList>>;
list(cb: callback<ApiResponse<TagList>>): void
}
	declare export class Events  {
create(event: $Shape<Event>): Promise<IncomingMessage>;
create(event: $Shape<Event>, cb: callback<IncomingMessage>): void;
listBy(params: EventListParam): Promise<ApiResponse<CompanyList>>;
listBy(params: EventListParam, cb: callback<ApiResponse<CompanyList>>): void
}
    }
