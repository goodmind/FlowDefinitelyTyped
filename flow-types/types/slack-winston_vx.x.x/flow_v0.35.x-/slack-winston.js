declare module 'slack-winston' {
        declare export type SlackTransportOptions = {
domain: string,
token: string,
webhook_url: string,
channel: string,
username?: string,
icon_emoji?: string,
message?: string,
queueDelay?: number
} & Transport.TransportStreamOptions

	declare export class Slack mixins Transport {
constructor(options?: SlackTransportOptions): this
}
    }
