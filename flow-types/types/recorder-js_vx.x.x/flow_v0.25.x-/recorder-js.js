declare module "recorder-js" {
  declare export default typeof Recorder;

  declare class Recorder {
    constructor(
      audioContext: AudioContext,
      config?: Recorder$Recorder$RecorderConfig
    ): this;
    static download(blob: Blob, filename: string): void;
    init(stream: MediaStream): Promise<void>;
    start(): Promise<MediaStream | void>;
    stop(): Promise<Recorder$Recorder$RecorderResult>;
  }
  declare type Recorder$OnAnalysedHandler = (
    data: number[],
    lastNonZero: number
  ) => void;

  declare interface Recorder$RecorderConfig {
    onAnalysed?: Recorder$OnAnalysedHandler;
  }

  declare interface Recorder$RecorderResult {
    blob: Blob;
    buffer: Float32Array[];
  }
}
