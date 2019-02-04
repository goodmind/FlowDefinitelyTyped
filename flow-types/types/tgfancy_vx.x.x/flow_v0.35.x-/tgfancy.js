declare module 'tgfancy' {
        import typeof * as TelegramBot from 'node-telegram-bot-api';

	declare interface Tgfancy$ChatIdResolutionOptions {
resolve(
token: string,
chatId: number | string,
callback: ((error: Error | null, target: any) => void)): void
} 

declare interface Tgfancy$EmojificationOptions {
emojify(text: string): string
} 

declare interface Tgfancy$RatelimitingOptions {
maxRetries?: number,
timeout?: number,
notify(methodName: string, ...args: any[]): void,
maxBackoff?: number
} 

declare interface Tgfancy$WebSocketOptions {
url: string,
autoOpen?: boolean
} 

declare interface Tgfancy$TgfancyOptions {
chatIdResolution?: boolean | Tgfancy$ChatIdResolutionOptions,
emojification?: boolean | Tgfancy$EmojificationOptions,
kickWithoutBan?: boolean,
openshiftWebHook?: boolean,
orderedSending?: boolean,
ratelimiting?: boolean | Tgfancy$RatelimitingOptions,
textPaging?: boolean,
webSocket?: boolean | Tgfancy$WebSocketOptions
} 

declare type Tgfancy$ConstructorOptions = {
tgfancy?: Tgfancy$TgfancyOptions
} & TelegramBot.Tgfancy$ConstructorOptions


declare interface Tgfancy$ResolvedChat {
id: number | string,
username: string,
type: string,
when: string
} 

declare type Tgfancy$ResolvedGroupOrChannel = {
title: string
} & Tgfancy$ResolvedChat


declare type Tgfancy$ResolvedUser = {
first_name: string,
last_name?: string
} & Tgfancy$ResolvedChat

	declare class Tgfancy mixins TelegramBot {
constructor(token: string, options?: Tgfancy$Tgfancy$ConstructorOptions): this;
resolveChatId(chatId: string): Promise<Tgfancy$Tgfancy$ResolvedChat>;
openWebSocket(): Promise<void>;
closeWebSocket(): Promise<void>;
hasOpenWebSocket(): boolean;
kickChatMember(
chatId: number | string,
userId: number | string,
ban?: boolean): Promise<boolean>
}
	declare module.exports: typeof Tgfancy

    }
