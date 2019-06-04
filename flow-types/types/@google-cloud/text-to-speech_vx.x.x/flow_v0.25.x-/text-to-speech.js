declare module "@google-cloud/text-to-speech" {
  declare export type GoogleError = any;
  declare export type APICallback<T = any> = (
    err: GoogleError | null,
    response?: T
  ) => void;
  declare export type PromiseLike<T> = {
    /**
     * Cancel the ongoing promise
     */
    cancel(): void
  } & Promise<T>;

  declare export interface MethodOverload<T, R> {
    (data: T, options?: CallOptions): PromiseLike<[R]>;
    (data: T, options: CallOptions, callback: APICallback<R>): void;
    (data: T, callback: APICallback<R>): void;
  }
  declare export interface CallOptions {
    timeout?: number;
    retry?: any;
    autoPaginate?: boolean;
    pageToken?: any;
    isBundling: boolean;
    longrunning?: any;
    promise?: any;
  }
  declare export interface ClientOptionsCredentials {
    client_email: string;
    private_key: string;
  }
  declare export interface ClientOptions {
    credentials?: ClientOptionsCredentials;
    email?: string;
    keyFilename?: string;
    port?: number;
    projectId?: string;
    promise?: any;
    servicePath?: string;
  }
  declare export interface ListVoicesRequest {
    languageCode?: string;
  }
  declare export type ListVoicesOptions = CallOptions;
  declare export type SsmlVoiceGender =
    | "SSML_VOICE_GENDER_UNSPECIFIED"
    | "MALE"
    | "FEMALE"
    | "NEUTRAL";
  declare export interface Voice {
    language_codes: string[];
    name: string;
    ssmlGender: SsmlVoiceGender;
    naturalSampleRateHertz: number;
  }
  declare export type ListVoicesResponse = Voice[];
  declare export type SynthesisInput =
    | {
        text: string
      }
    | {
        ssml: string
      };
  declare export interface VoiceSelectionParams {
    languageCode?: string;
    name?: string;
    ssmlGender?: SsmlVoiceGender;
  }
  declare export type AudioEncoding =
    | "AUDIO_ENCODING_UNSPECIFIED"
    | "LINEAR16"
    | "MP3"
    | "OGG_OPUS";
  declare export interface AudioConfig {
    audioEncoding: AudioEncoding;
    effectsProfileId?: string[];
    pitch?: number;
    sampleRateHertz?: number;
    speakingRate?: number;
    volumeGainDb?: number;
  }
  declare export interface SynthesizeSpeechRequest {
    input: SynthesisInput;
    voice: VoiceSelectionParams;
    audioConfig: AudioConfig;
  }
  declare export type SynthesizeSpeechOptions = CallOptions;
  declare export interface SynthesizeSpeechResponse {
    audioContent: Buffer;
  }
  declare class TextToSpeechClient {
    constructor(options?: ClientOptions): this;
    listVoices: MethodOverload<ListVoicesRequest, ListVoicesResponse>;
    synthesizeSpeech: MethodOverload<
      SynthesizeSpeechRequest,
      SynthesizeSpeechResponse
    >;
  }
  declare var TextToSpeech: {
    TextToSpeechClient: typeof TextToSpeechClient
  };
  declare export default typeof TextToSpeech;
}
