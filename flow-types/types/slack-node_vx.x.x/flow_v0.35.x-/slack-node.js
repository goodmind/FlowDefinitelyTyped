declare module 'slack-node' {
        import typeof * as request from 'request';

	declare class Slack  {
token: string;
domain: string;
apiMode: boolean;
url: string;
timeout: number;
maxAttempts: number;
constructor(token?: string, domain?: string): this;
composeUrl(): string;
setWebhook(url: string): this;
detectEmoji(emoji: string): {
key: "icon_url" | "icon_emoji",
val: string
};
webhook(
options: Slack$Slack$WebhookOptions,
callback: (err: any, response: Slack$Slack$WebhookResponse) => void): void;
api(method: string, callback: (err: any, response: any) => void): this;
api(
method: string,
options: any,
callback: (err: any, response: any) => void): this
}
	declare export interface Slack$WebhookOptions {
icon_emoji?: string,
response_type?: string,
channel?: string,
text?: string,
username?: string,
attachments?: any[],
link_names?: any
} 

declare export interface Slack$WebhookResponse {
status: "fail" | "ok",
statusCode: number,
headers: any,
response: any
} 
	declare module.exports: typeof Slack

    }
