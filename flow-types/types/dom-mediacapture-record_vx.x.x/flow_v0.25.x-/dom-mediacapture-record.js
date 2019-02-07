declare module "dom-mediacapture-record" {
  declare type MediaRecorderErrorEventInit = {
    error: DOMException
  } & EventInit;

  declare class MediaRecorderErrorEvent mixins Event {
    constructor(type: string, eventInitDict: MediaRecorderErrorEventInit): this;
    error: DOMException;
  }
  declare type BlobEventInit = {
    data: Blob,
    timecode?: number
  } & EventInit;

  declare class BlobEvent mixins Event {
    constructor(type: string, eventInitDict: BlobEventInit): this;
    data: Blob;
    timecode: number;
  }
  declare interface MediaRecorderOptions {
    mimeType?: string;
    audioBitsPerSecond?: number;
    videoBitsPerSecond?: number;
    bitsPerSecond?: number;
  }
  declare type RecordingState = "inactive" | "recording" | "paused";
  declare class MediaRecorder mixins EventTarget {
    stream: MediaStream;
    mimeType: string;
    state: RecordingState;
    videoBitsPerSecond: number;
    audioBitsPerSecond: number;
    ondataavailable: (event: BlobEvent) => void;
    onerror: (event: MediaRecorderErrorEvent) => void;
    onpause: EventListener;
    onresume: EventListener;
    onstart: EventListener;
    onstop: EventListener;
    constructor(stream: MediaStream, options?: MediaRecorderOptions): this;
    start(timeslice?: number): void;
    stop(): void;
    resume(): void;
    pause(): void;
    requestData(): void;
    static isTypeSupported(type: string): boolean;
  }
  declare interface Window {
    MediaRecorder: typeof MediaRecorder;
    BlobEvent: typeof BlobEvent;
    MediaRecorderErrorEvent: typeof MediaRecorderErrorEvent;
  }
}
