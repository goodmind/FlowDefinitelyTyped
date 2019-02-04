declare module 'alexa-voice-service' {
        declare module.exports: typeof AVS

	declare  class AVS$EventTypes {
  constructor(...args: empty): mixed;
static +RECORD_STOP: Class<AVS$EventTypes__RECORD_STOP> & AVS$EventTypes__RECORD_STOP & 0;// 0
static +RECORD_START: Class<AVS$EventTypes__RECORD_START> & AVS$EventTypes__RECORD_START & 1;// 1
static +ERROR: Class<AVS$EventTypes__ERROR> & AVS$EventTypes__ERROR & 2;// 2
static +TOKEN_INVALID: Class<AVS$EventTypes__TOKEN_INVALID> & AVS$EventTypes__TOKEN_INVALID & 3;// 3
static +LOG: Class<AVS$EventTypes__LOG> & AVS$EventTypes__LOG & 4;// 4
static +LOGIN: Class<AVS$EventTypes__LOGIN> & AVS$EventTypes__LOGIN & 5;// 5
static +LOGOUT: Class<AVS$EventTypes__LOGOUT> & AVS$EventTypes__LOGOUT & 6;// 6
static +TOKEN_SET: Class<AVS$EventTypes__TOKEN_SET> & AVS$EventTypes__TOKEN_SET & 7;// 7
static +REFRESH_TOKEN_SET: Class<AVS$EventTypes__REFRESH_TOKEN_SET> & AVS$EventTypes__REFRESH_TOKEN_SET & 8;// 8

}

declare class AVS$EventTypes__RECORD_STOP mixins AVS$EventTypes {}
declare class AVS$EventTypes__RECORD_START mixins AVS$EventTypes {}
declare class AVS$EventTypes__ERROR mixins AVS$EventTypes {}
declare class AVS$EventTypes__TOKEN_INVALID mixins AVS$EventTypes {}
declare class AVS$EventTypes__LOG mixins AVS$EventTypes {}
declare class AVS$EventTypes__LOGIN mixins AVS$EventTypes {}
declare class AVS$EventTypes__LOGOUT mixins AVS$EventTypes {}
declare class AVS$EventTypes__TOKEN_SET mixins AVS$EventTypes {}
declare class AVS$EventTypes__REFRESH_TOKEN_SET mixins AVS$EventTypes {}


declare interface AVS$AVSParams {
debug: boolean,
clientId: string,
clientSecret: string,
deviceId: string,
refreshToken: string
} 

declare interface AVS$TokenResponse {
token: string,
refreshToken: string
} 

declare class AVS$Player  {
on(eventType: AVS$Player.AVS$EventTypes, callback?: () => void): void
}

declare  class Player$EventTypes {
  constructor(...args: empty): mixed;
static +LOG: Class<Player$EventTypes__LOG> & Player$EventTypes__LOG & 0;// 0
static +ERROR: Class<Player$EventTypes__ERROR> & Player$EventTypes__ERROR & 1;// 1
static +PLAY: Class<Player$EventTypes__PLAY> & Player$EventTypes__PLAY & 2;// 2
static +REPLAY: Class<Player$EventTypes__REPLAY> & Player$EventTypes__REPLAY & 3;// 3
static +PAUSE: Class<Player$EventTypes__PAUSE> & Player$EventTypes__PAUSE & 4;// 4
static +STOP: Class<Player$EventTypes__STOP> & Player$EventTypes__STOP & 5;// 5
static +ENQUEUE: Class<Player$EventTypes__ENQUEUE> & Player$EventTypes__ENQUEUE & 6;// 6
static +DEQUE: Class<Player$EventTypes__DEQUE> & Player$EventTypes__DEQUE & 7;// 7

}

declare class Player$EventTypes__LOG mixins Player$EventTypes {}
declare class Player$EventTypes__ERROR mixins Player$EventTypes {}
declare class Player$EventTypes__PLAY mixins Player$EventTypes {}
declare class Player$EventTypes__REPLAY mixins Player$EventTypes {}
declare class Player$EventTypes__PAUSE mixins Player$EventTypes {}
declare class Player$EventTypes__STOP mixins Player$EventTypes {}
declare class Player$EventTypes__ENQUEUE mixins Player$EventTypes {}
declare class Player$EventTypes__DEQUE mixins Player$EventTypes {}

	declare class AVS  {
player: AVS$AVS$Player;
constructor(params: AVS$AVS$AVSParams): this;
on(eventType: AVS$Player$EventTypes, callback?: () => void): void;
refreshToken(): Promise<AVS$AVS$TokenResponse>;
requestMic(): Promise<any>;
startRecording(): Promise<void>;
stopRecording(): Promise<DataView | void>;
sendAudio(
dataView: DataView): Promise<{
xhr: any,
response: {
httpVersion: string,
statusCode: string,
statusMessage: string,
method: string,
url: string,
headers: string,
body: string,
boundary: string,
multipart: string
}
}>
}
    }
