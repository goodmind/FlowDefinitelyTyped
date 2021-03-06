declare module "flowjs" {
  declare interface flowjs$IFlow {
    support: boolean;
    supportDirectory: boolean;
    opts: flowjs$IFlowOptions;
    files: flowjs$IFlowFile[];
    assignBrowse(
      domNodes: HTMLElement[],
      isDirectory: boolean,
      singleFile: boolean,
      attributes: Object
    ): void;
    assignDrop(domNodes: HTMLElement[]): void;
    unAssignDrop(domNodes: HTMLElement[]): void;
    on(event: string, callback: Function): void;
    off(event?: string, callback?: Function): void;
    upload(): void;
    pause(): void;
    resume(): void;
    cancel(): void;
    progress(): number;
    isUploading(): boolean;
    addFile(file: File): void;
    removeFile(file: flowjs$IFlowFile): void;
    getFromUniqueIdentifier(uniqueIdentifier: string): flowjs$IFlowFile;
    getSize(): number;
    sizeUploaded(): number;
    timeRemaining(): number;
  }

  declare interface flowjs$IFlowOptions {
    target?: string;
    singleFile?: boolean;
    chunkSize?: number;
    forceChunkSize?: boolean;
    simultaneousUploads?: number;
    fileParameterName?: string;
    query?: Object;
    headers?: Object;
    withCredentials?: boolean;
    method?: string;
    testMethod?: string;
    uploadMethod?: string;
    allowDuplicateUploads?: boolean;
    prioritizeFirstAndLastChunk?: boolean;
    testChunks?: boolean;
    preprocess?: Function;
    initFileFn?: Function;
    generateUniqueIdentifier?: Function;
    maxChunkRetries?: number;
    chunkRetryInterval?: number;
    progressCallbacksInterval?: number;
    speedSmoothingFactor?: number;
    successStatuses?: string[];
    permanentErrors?: string[];
  }

  declare interface flowjs$IFlowFile {
    flowObj: flowjs$IFlow;
    file: File;
    name: string;
    relativePath: string;
    size: number;
    uniqueIdentifier: string;
    averageSpeed: number;
    currentSpeed: number;
    chunks: any[];
    paused: boolean;
    error: boolean;
    progress(relative: boolean): number;
    pause(): void;
    resume(): void;
    cancel(): void;
    retry(): void;
    bootstrap(): void;
    isUploading(): boolean;
    isComplete(): boolean;
    sizeUploaded(): number;
    timeRemaining(): number;
    getExtension(): string;
    getType(): string;
  }
  declare module.exports: typeof flowjs;
}
