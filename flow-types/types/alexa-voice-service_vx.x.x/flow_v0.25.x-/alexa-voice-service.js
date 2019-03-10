declare module "alexa-voice-service" {
  declare export default typeof AVS;

  declare var npm$namespace$AVS: {
    EventTypes: typeof AVS$EventTypes,
    Player: typeof AVS$Player,
    Player: typeof npm$namespace$AVS$Player
  };

  declare var AVS$EventTypes: {|
    +RECORD_STOP: 0, // 0
    +RECORD_START: 1, // 1
    +ERROR: 2, // 2
    +TOKEN_INVALID: 3, // 3
    +LOG: 4, // 4
    +LOGIN: 5, // 5
    +LOGOUT: 6, // 6
    +TOKEN_SET: 7, // 7
    +REFRESH_TOKEN_SET: 8 // 8
  |};

  declare interface AVS$AVSParams {
    debug: boolean;
    clientId: string;
    clientSecret: string;
    deviceId: string;
    refreshToken: string;
  }

  declare interface AVS$TokenResponse {
    token: string;
    refreshToken: string;
  }

  declare class AVS$Player {
    on(
      eventType: $Values<typeof AVS$Player$EventTypes>,
      callback?: () => void
    ): void;
  }

  declare var npm$namespace$AVS$Player: {
    EventTypes: typeof AVS$Player$EventTypes
  };

  declare var AVS$Player$EventTypes: {|
    +LOG: 0, // 0
    +ERROR: 1, // 1
    +PLAY: 2, // 2
    +REPLAY: 3, // 3
    +PAUSE: 4, // 4
    +STOP: 5, // 5
    +ENQUEUE: 6, // 6
    +DEQUE: 7 // 7
  |};

  declare class AVS {
    player: AVS$Player;
    constructor(params: AVS$AVSParams): this;
    on(eventType: $Values<typeof AVS$EventTypes>, callback?: () => void): void;
    refreshToken(): Promise<AVS$TokenResponse>;
    requestMic(): Promise<any>;
    startRecording(): Promise<void>;
    stopRecording(): Promise<DataView | void>;
    sendAudio(
      dataView: DataView
    ): Promise<{
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
    }>;
  }
}
