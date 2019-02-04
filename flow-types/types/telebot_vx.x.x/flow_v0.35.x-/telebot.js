declare module 'telebot' {
        declare module.exports: typeof telebot

	declare interface telebot$config {
token: string,
polling?: {
interval?: number,
timeout?: number,
limit?: number,
retryTimeout?: number,
proxy?: string
},
webhook?: {
key?: string,
cert?: string,
url?: string,
host?: string,
port?: number,
maxConnections?: number
},
allowedUpdates?: string[],
usePlugins?: string[],
pluginFolder?: string,
pluginConfig?: any
} 

declare interface telebot$module {
id: string,
defaultConfig: any,
plugin(...args: any[]): void
} 

declare type telebot$genericCb = (...args: any[]) => any;

declare class telebot$AnswerList  {
constructor(id: string, opt?: any): this;
add(type: string, set?: any): any;
results(): string;
addArticle(set?: any): any;
addPhoto(set?: any): any;
addVideo(set?: any): any;
addGif(set?: any): any;
addVideoGif(set?: any): any;
addSticker(set?: any): any;
addVoice(set?: any): any;
addDocument(set?: any): any;
addLocation(set?: any): any;
addVenue(set?: any): any;
addGame(set?: any): any;
cachedPhoto(set?: any): any;
cachedGif(set?: any): any;
cachedVideoGif(set?: any): any;
cachedSticker(set?: any): any;
cachedDocument(set?: any): any;
cachedVideo(set?: any): any;
cachedVoice(set?: any): any;
cachedAudio(set?: any): any
}
	declare class telebot  {
constructor(telebot$config: string | telebot$telebot$config): this;
plug(telebot$module: telebot$telebot$module): void;
use(telebot$module: telebot$telebot$module): void;
start(...args: any[]): void;
connect(...args: any[]): void;
stop(message: string): void;
getUpdates(
offset: number,
limit: number,
timeout: number,
allowed_updates: string | string[]): void;
receiveUpdates(updateList: any[]): Promise<any>;
request(url: string, form: any, data: any): Promise<any>;
mod(names: string | string[], fn: telebot$telebot$genericCb): any;
modRun(name: string, data: any): any;
removeMod(name: string, fn: telebot$telebot$genericCb): boolean;
on(
types: string | string[] | RegExp,
fn: telebot$telebot$genericCb,
opt?: any): boolean;
event(types: string | string[], data: any, self?: any): Promise<any>;
cleanEvent(type: string): boolean;
removeEvent(type: string, fn: telebot$telebot$genericCb): boolean;
destroyEvent(type: string): boolean;
properties(form: any, opt: any): any;
static addMethods(...methods: Array<telebot$telebot$genericCb | any>): any;
keyboard(buttons: any[][], opt?: any): any;
button(type: string, text?: string): any;
inlineKeyboard(inlineButtons: any[][]): any;
inlineQueryKeyboard(telebot$config: any[][]): any;
inlineButton(text: string, opt?: any): any;
answerList(id: string, opt?: any): telebot$telebot$AnswerList;
getMe(): any;
answerQuery(...param: any[]): boolean;
sendMessage(
chat_id: number | string,
text: string,
opt?: {
parseMode?: string,
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean,
webPreview?: boolean
}): any;
forwardMessage(
chat_id: number | string,
from_chat_id: number | string,
message_id: number,
opt?: {
notification?: boolean
}): any;
deleteMessage(chat_id: number | string, from_message_id: number): boolean;
sendPhoto(
chat_id: number | string,
file: string | Buffer | NodeJS.ReadableStream | any,
opt?: {
caption?: string,
fileName?: string,
serverDownload?: boolean,
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean
}): any;
sendAudio(
chat_id: number | string,
file: string | Buffer | NodeJS.ReadableStream | any,
opt?: {
title?: string,
performer?: string,
duration?: number,
caption?: string,
fileName?: string,
serverDownload?: boolean,
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean
}): any;
sendDocument(
chat_id: number | string,
file: string | Buffer | NodeJS.ReadableStream | any,
opt?: {
caption?: string,
fileName?: string,
serverDownload?: boolean,
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean
}): any;
sendSticker(
chat_id: number | string,
file: string | Buffer | NodeJS.ReadableStream | any,
opt?: {
fileName?: string,
serverDownload?: boolean,
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean
}): any;
sendVideo(
chat_id: number | string,
file: string | Buffer | NodeJS.ReadableStream | any,
opt?: {
duration?: number,
width?: number,
height?: number,
caption?: string,
fileName?: string,
serverDownload?: boolean,
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean
}): any;
sendVideoNote(
chat_id: number | string,
file: string | Buffer | NodeJS.ReadableStream | any,
opt?: {
duration?: number,
fileName?: string,
serverDownload?: boolean,
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean
}): any;
sendVoice(
chat_id: number | string,
file: string | Buffer | NodeJS.ReadableStream | any,
opt?: {
duration?: number,
caption?: string,
fileName?: string,
serverDownload?: boolean,
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean
}): any;
sendLocation(
chat_id: number | string,
coords: [number, number],
opt?: {
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean
}): any;
sendVenue(
chat_id: number | string,
coords: [number, number],
title: string,
address: string,
opt?: {
foursquareId?: string,
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean
}): any;
sendContact(
chat_id: number | string,
number: string,
firstName: string,
lastName?: string,
opt?: {
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean
}): any;
sendAction(chat_id: number | string, action: string): boolean;
sendGame(
chat_id: number | string,
game_short_name: string,
opt?: {
replyToMessage?: number,
replyMarkup?: any,
notification?: boolean
}): any;
setGameScore(
user_id: number,
score: number,
opt?: {
force?: boolean,
disableEditMessage?: boolean,
chatId?: number,
messageId?: number,
inlineMessageId?: string
}): boolean | Error | any;
getGameHighScores(
user_id: number,
opt?: {
chatId?: number,
messageId?: number,
inlineMessageId?: string
}): any[];
getUserProfilePhotos(user_id: number, opt?: {
offset?: number,
limit?: number
}): any;
getFile(file_id: string): any;
sendInvoice(
chat_id: number | string,
invoiceDetails: {
title: string,
description: string,
payload: string,
providerToken: string,
startParameter: string,
currency: string,
prices: any[],
photo?: {
url?: string,
width?: number,
height?: number
},
need?: {
name?: boolean,
phoneNumber?: boolean,
email?: boolean,
shippingAddress?: boolean
},
isFlexible?: boolean,
notification?: boolean,
replyToMessage?: number,
replyMarkup?: any
}): any;
getChat(chat_id: number | string): any;
leaveChat(chat_id: number | string): boolean;
getChatAdministrators(chat_id: number | string): any[] | any;
getChatMembersCount(chat_id: number | string): number;
getChatMember(chat_id: number | string, user_id: number): any;
kickChatMember(chat_id: number | string, user_id: number): boolean;
unbanChatMember(chat_id: number | string, user_id: number): boolean;
editMessageText(
telebot$config: {
chatId: number | string,
messageId: number,
inlineMsgId?: number
} | {
chatId?: number | string,
messageId?: number,
inlineMsgId: number
},
text: string): any | boolean;
editMessageCaption(
telebot$config: {
chatId: number | string,
messageId: number,
inlineMsgId?: number
} | {
chatId?: number | string,
messageId?: number,
inlineMsgId: number
},
caption: string): any | boolean;
editMessageReplyMarkup(
telebot$config: {
chatId: number | string,
messageId: number,
inlineMsgId?: number
} | {
chatId?: number | string,
messageId?: number,
inlineMsgId: number
},
replyMarkup: any): any | boolean;
answerCallbackQuery(
callback_query_id: string,
opt?: {
text?: string,
url?: string,
showAlert?: boolean,
cacheTime?: number
}): boolean;
answerShippingQuery(
shipping_query_id: string,
ok: boolean,
opt?: {
shippingOptions?: any[],
errorMessage?: string
}): boolean;
answerPreCheckoutQuery(
pre_checkout_query_id: string,
ok: boolean,
opt?: {
errorMessage?: string
}): boolean;
setWebhook(
url: string,
certificate?: any,
allowed_updates?: string[],
max_connections?: number): boolean;
getWebhookInfo(): any;
deleteWebhook(): boolean
}
    }
