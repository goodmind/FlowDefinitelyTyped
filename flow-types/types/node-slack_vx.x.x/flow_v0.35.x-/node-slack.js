declare module 'node-slack' {
        declare class Slack  {
constructor(hookUrl: string, option?: Slack$Slack$Option): this;
send(message: Slack$Slack$Message): any;
send(
message: Slack$Slack$Message,
callback: Slack$Slack$SendCallback): request.Request;
respond(query: Slack$Slack$Query): Slack$Slack$TextResponse;
respond(
query: Slack$Slack$Query,
callback: Slack$Slack$ResponseCallback): Slack$Slack$TextResponse
}
	declare interface Slack$Option {
proxy: string
} 

declare interface Slack$Message {
text: string,
channel?: string,
username?: string,
icon_emoji?: string,
attachments?: any[],
unfurl_links?: boolean,
link_names?: number
} 

declare interface Slack$SendCallback {
(err: any, body: any): any
} 

declare interface Slack$Query {
token?: string,
team_id?: string,
channel_id?: string,
channel_name?: string,
timestamp?: number,
user_id?: string,
user_name?: string,
text: string
} 

declare interface Slack$TextResponse {
text: string
} 

declare interface Slack$ResponseCallback {
(err: any, query: Slack$Query): any
} 
	declare module.exports: typeof Slack

    }
