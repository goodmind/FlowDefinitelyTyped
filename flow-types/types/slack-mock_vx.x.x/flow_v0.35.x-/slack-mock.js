declare module 'slack-mock' {
        import type {
          IncomingHttpHeaders
        } from 'http';

	import typeof * as nock from 'nock';

	import type {
          Url
        } from 'url';

	import typeof * as WebSocket from 'ws';

	declare module.exports: typeof SlackMock

	declare function SlackMock(config?: SlackMock$SlackMock$ConfigOptions): SlackMock$SlackMock$Instance

	
      declare var npm$namespace$SlackMock: {
        
        instance: typeof SlackMock$instance,
      }
declare var SlackMock$instance: SlackMock$Instance;

declare interface SlackMock$Instance {
events: SlackMock$Events<any>,
incomingWebhooks: SlackMock$IncomingWebhooks<any>,
interactiveButtons: SlackMock$InteractiveButtons<any>,
outgoingWebhooks: SlackMock$OutgoingWebhooks<any>,
rtm: SlackMock$Rtm<any>,
slashCommands: SlackMock$SlashCommands<any>,
web: SlackMock$Web<any>,
reset: () => void
} 

declare interface SlackMock$ConfigOptions {
rtmPort?: number,
logLevel?: string
} 

declare type SlackMock$EventUrl = string | Url;

declare type SlackMock$EventHttpHeaders = IncomingHttpHeaders;

declare interface SlackMock$Events<T> {
send: (targetUrl: SlackMock$EventUrl, body: T) => Promise<void>,
reset: () => void,
calls: Array<SlackMock$EventCall<T>>
} 

declare interface SlackMock$EventCall<T> {
url: SlackMock$EventUrl,
params: T,
headers: SlackMock$EventHttpHeaders,
statusCode: number
} 

declare type SlackMock$IncomingWebhookUrl = string;

declare type SlackMock$IncomingWebhookHttpHeaders = nock.HttpHeaders;

declare interface SlackMock$IncomingWebhooks<T> {
addResponse: (opts: SlackMock$IncomingWebhookOptions<T>) => void,
reset: () => void,
calls: Array<SlackMock$IncomingWebhookCall<T>>
} 

declare interface SlackMock$IncomingWebhookOptions<T> {
url?: SlackMock$IncomingWebhookUrl,
statusCode?: number,
body?: T,
headers?: SlackMock$IncomingWebhookHttpHeaders
} 

declare interface SlackMock$IncomingWebhookCall<T> {
url: SlackMock$IncomingWebhookUrl,
params: T,
headers: SlackMock$IncomingWebhookHttpHeaders
} 

declare type SlackMock$InteractiveButtonUrl = string | Url;

declare type SlackMock$InteractiveButtonHttpHeaders = nock.HttpHeaders;

declare interface SlackMock$InteractiveButtons<T> {
send: (targetUrl: SlackMock$InteractiveButtonUrl, body: T) => Promise<void>,
addResponse: (opts: SlackMock$InteractiveButtonOptions<T>) => void,
reset: () => void,
calls: Array<SlackMock$InteractiveButtonCall<T>>
} 

declare interface SlackMock$InteractiveButtonOptions<T> {
url?: SlackMock$InteractiveButtonUrl,
statusCode?: number,
body?: T,
headers?: SlackMock$InteractiveButtonHttpHeaders
} 

declare interface SlackMock$InteractiveButtonCall<T> {
url: SlackMock$InteractiveButtonUrl,
params: T,
headers: SlackMock$InteractiveButtonHttpHeaders,
statusCode: number,
type: SlackMock$InteractiveButtonCallType
} 

declare  class SlackMock$InteractiveButtonCallType {
  constructor(...args: empty): mixed;
static +response: Class<SlackMock$InteractiveButtonCallType__response> & SlackMock$InteractiveButtonCallType__response & "response";// "response"
static +response_url: Class<SlackMock$InteractiveButtonCallType__response_url> & SlackMock$InteractiveButtonCallType__response_url & "response_url";// "response_url"

}

declare class SlackMock$InteractiveButtonCallType__response mixins SlackMock$InteractiveButtonCallType {}
declare class SlackMock$InteractiveButtonCallType__response_url mixins SlackMock$InteractiveButtonCallType {}


declare type SlackMock$OutgoingWebhookUrl = string | Url;

declare type SlackMock$OutgoingWebhookHttpHeaders = IncomingHttpHeaders;

declare interface SlackMock$OutgoingWebhooks<T> {
send: (targetUrl: SlackMock$OutgoingWebhookUrl, body: T) => Promise<void>,
reset: () => void,
calls: Array<SlackMock$OutgoingWebhookCall<T>>
} 

declare interface SlackMock$OutgoingWebhookCall<T> {
url: SlackMock$OutgoingWebhookUrl,
params: T,
headers: SlackMock$OutgoingWebhookHttpHeaders,
statusCode: number
} 

declare interface SlackMock$Rtm<T> {
clients: WebSocket[],
send: (token: string, message: T) => Promise<void>,
reset: () => void,
calls: Array<SlackMock$RtmCall<T>>,
startServer: (token: string) => void,
stopServer: (token: string) => void
} 

declare interface SlackMock$RtmCall<T> {
message: T,
token: string,
rawMessage: WebSocket.Data
} 

declare type SlackMock$SlashCommandUrl = string | Url;

declare type SlackMock$SlashCommandHttpHeaders = IncomingHttpHeaders;

declare interface SlackMock$SlashCommands<T> {
send: (targetUrl: SlackMock$SlashCommandUrl, body: T) => Promise<void>,
addResponse: (opts: SlackMock$SlashCommandOptions<T>) => void,
reset: () => void,
calls: Array<SlackMock$SlashCommandCall<T>>
} 

declare interface SlackMock$SlashCommandOptions<T> {
url?: SlackMock$SlashCommandUrl,
statusCode?: number,
body?: T,
headers?: SlackMock$SlashCommandHttpHeaders
} 

declare interface SlackMock$SlashCommandCall<T> {
url: SlackMock$SlashCommandUrl,
params: T,
headers: SlackMock$SlashCommandHttpHeaders,
statusCode: number,
type: SlackMock$SlashCommandCallType
} 

declare  class SlackMock$SlashCommandCallType {
  constructor(...args: empty): mixed;
static +response: Class<SlackMock$SlashCommandCallType__response> & SlackMock$SlashCommandCallType__response & "response";// "response"
static +response_url: Class<SlackMock$SlashCommandCallType__response_url> & SlackMock$SlashCommandCallType__response_url & "response_url";// "response_url"

}

declare class SlackMock$SlashCommandCallType__response mixins SlackMock$SlashCommandCallType {}
declare class SlackMock$SlashCommandCallType__response_url mixins SlackMock$SlashCommandCallType {}


declare type SlackMock$WebUrl = string;

declare type SlackMock$WebHttpHeaders = nock.HttpHeaders;

declare interface SlackMock$Web<T> {
addResponse: (opts: SlackMock$WebOptions<T>) => void,
reset: () => void,
calls: Array<SlackMock$WebCall<T>>
} 

declare interface SlackMock$WebOptions<T> {
url?: SlackMock$WebUrl,
statusCode?: number,
body?: T,
headers?: SlackMock$WebHttpHeaders
} 

declare interface SlackMock$WebCall<T> {
url: SlackMock$WebUrl,
params: T,
headers: SlackMock$WebHttpHeaders
} 
    }
