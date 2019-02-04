declare module 'jschannel' {
        declare export function build(config: ChannelConfiguration): MessagingChannel

	declare export interface MessagingChannel {
unbind: (method: string, doNotPublish?: boolean) => boolean,
bind: (
method: string,
callback?: (transaction: MessageTransaction, params: any) => void,
doNotPublish?: boolean) => MessagingChannel,
call: (message: Message) => void,
notify: (message: Message) => void,
destroy: () => void
} 
	declare export interface Message {
method: string,
success?: (result: any) => void,
params?: any,
timeout?: number,
error?: (error: any, message: string) => void
} 
	declare export interface ChannelConfiguration {
window: Window,
origin: string,
scope: string,
debugOutput?: boolean,
postMessageObserver?: (origin: string, message: Message) => void,
gotMessageObserver?: (origin: string, message: Message) => void,
onReady?: (channel: MessagingChannel) => void,
reconnect?: boolean,
publish?: boolean,
remote?: string | $ReadOnlyArray<string>
} 
	declare export interface MessageTransaction {
delayReturn: (delay: boolean) => boolean,
complete: (result: any) => void,
error: (error: any, message: string) => void,
invoke: (callbackName: string, params: any) => void,
completed: () => boolean
} 
    }
