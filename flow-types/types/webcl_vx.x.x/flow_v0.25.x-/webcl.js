declare module "webcl" {
  declare interface Window {
    webcl: WEBCL$WEBCL$WebCL;
  }
  declare var WEBCL$WebCLEvent: {
    new(): WEBCL$WEBCL$WebCLEvent
  };
  declare type WEBCL$WebCLBuffer = {
    createSubBuffer(
      memFlags: WEBCL$MemFlagsBits,
      origin: number,
      sizeInBytes: number
    ): WEBCL$WebCLBuffer
  } & WEBCL$WebCLMemoryObject;

  declare interface WEBCL$WebCLCallback {
    (event: WEBCL$WebCLEvent): void;
  }

  declare interface WEBCL$WebCLCommandQueue {
    enqueueCopyBuffer(
      srcBuffer: WEBCL$WebCLBuffer,
      dstBuffer: WEBCL$WebCLBuffer,
      srcOffset: number,
      dstOffset: number,
      numBytes: number,
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueCopyBufferRect(
      srcBuffer: WEBCL$WebCLBuffer,
      dstBuffer: WEBCL$WebCLBuffer,
      srcOrigin: number[],
      dstOrigin: number[],
      region: number[],
      srcRowPitch: number,
      srcSlicePitch: number,
      dstRowPitch: number,
      dstSlicePitch: number,
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueCopyImage(
      srcImage: WEBCL$WebCLImage,
      dstImage: WEBCL$WebCLImage,
      srcOrigin: number[],
      dstOrigin: number[],
      region: number[],
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueCopyImageToBuffer(
      srcImage: WEBCL$WebCLImage,
      dstBuffer: WEBCL$WebCLBuffer,
      srcOrigin: number[],
      srcRegion: number[],
      dstOffset: number,
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueCopyBufferToImage(
      srcBuffer: WEBCL$WebCLBuffer,
      dstImage: WEBCL$WebCLImage,
      srcOffset: number,
      dstOrigin: number[],
      dstRegion: number[],
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueReadBuffer(
      buffer: WEBCL$WebCLBuffer,
      blockingRead: boolean,
      bufferOffset: number,
      numBytes: number,
      hostPtr: ArrayBufferView,
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueReadBufferRect(
      buffer: WEBCL$WebCLBuffer,
      blockingRead: boolean,
      bufferOrigin: number[],
      hostOrigin: number[],
      region: number[],
      bufferRowPitch: number,
      bufferSlicePitch: number,
      hostRowPitch: number,
      hostSlicePitch: number,
      hostPtr: ArrayBufferView,
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueReadImage(
      image: WEBCL$WebCLImage,
      blockingRead: boolean,
      origin: number[],
      region: number[],
      hostRowPitch: number,
      hostPtr: ArrayBufferView,
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueWriteBuffer(
      buffer: WEBCL$WebCLBuffer,
      blockingWrite: boolean,
      bufferOffset: number,
      numBytes: number,
      hostPtr: ArrayBufferView,
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueWriteBufferRect(
      buffer: WEBCL$WebCLBuffer,
      blockingWrite: boolean,
      bufferOrigin: number[],
      hostOrigin: number[],
      region: number[],
      bufferRowPitch: number,
      bufferSlicePitch: number,
      hostRowPitch: number,
      hostSlicePitch: number,
      hostPtr: ArrayBufferView,
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueWriteImage(
      image: WEBCL$WebCLImage,
      blockingWrite: boolean,
      origin: number[],
      region: number[],
      hostRowPitch: number,
      hostPtr: ArrayBufferView,
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueNDRangeKernel(
      kernel: WEBCL$WebCLKernel,
      workDim: number,
      globalWorkOffset: number[],
      globalWorkSize: number[],
      localWorkSize?: number[],
      eventWaitList?: WEBCL$WebCLEvent[],
      event?: WEBCL$WebCLEvent
    ): void;
    enqueueMarker(event: WEBCL$WebCLEvent): void;
    enqueueBarrier(): void;
    enqueueWaitForEvents(eventWaitList: WEBCL$WebCLEvent[]): void;
    finish(whenFinished?: WEBCL$WebCLCallback): void;
    flush(): void;
    getInfo(name: WEBCL$ContextProperties): any;
    release(): void;
  }

  declare interface WEBCL$WebCLContext {
    createBuffer(
      memFlags: WEBCL$MemFlagsBits,
      sizeInBytes: number,
      hostPtr?: ArrayBufferView
    ): WEBCL$WebCLBuffer;
    createCommandQueue(
      device: WEBCL$WebCLDevice,
      properties?: WEBCL$CommandQueueProperties
    ): WEBCL$WebCLCommandQueue;
    createImage(
      memFlags: WEBCL$MemFlagsBits,
      descriptor: WEBCL$WebCLImageDescriptor,
      hostPtr?: ArrayBufferView
    ): WEBCL$WebCLImage;
    createProgram(source: string): WEBCL$WebCLProgram;
    createSampler(
      normalizedCoords: number,
      addressingMode: WEBCL$AddressingMode,
      filterMode: WEBCL$FilterMode
    ): WEBCL$WebCLSampler;
    createUserEvent(): WEBCL$WebCLUserEvent;
    getInfo(name: WEBCL$ContextInfo): any;
    getSupportedImageFormats(
      memFlags?: WEBCL$MemFlagsBits
    ): WEBCL$WebCLImageDescriptor[];
    release(): void;
    releaseAll(): void;
  }

  declare interface WEBCL$WebCLDevice {
    getInfo(name: WEBCL$DeviceInfo): any;
    getSupportedExtensions(): string[];
    enableExtension(extensionName: string): boolean;
  }

  declare interface WEBCL$WebCLEvent {
    getInfo(name: WEBCL$EventInfo): any;
    getProfilingInfo(name: WEBCL$ProfilingInfo): number;
    setCallback(
      commandExecCallbackType: WEBCL$CommandExecutionStatus,
      notify: WEBCL$WebCLCallback
    ): void;
    release(): void;
  }

  declare type WEBCL$WebCLException = {
    name: string,
    message: string
  } & DOMException;

  declare type WEBCL$WebCLImage = {
    getInfo(): WEBCL$WebCLImageDescriptor
  } & WEBCL$WebCLMemoryObject;

  declare interface WEBCL$WebCLImageDescriptor {
    channelOrder: WEBCL$ChannelOrder;
    channelType: WEBCL$ChannelType;
    width: number;
    height: number;
    rowPitch: number;
  }

  declare interface WEBCL$WebCLKernel {
    getInfo(name: WEBCL$KernelInfo): any;
    getWorkGroupInfo(
      device: WEBCL$WebCLDevice,
      name: WEBCL$KernelWorkGroupInfo
    ): any;
    getArgInfo(index: number): WEBCL$WebCLKernelArgInfo;
    setArg(index: number, buffer: WEBCL$WebCLBuffer): void;
    setArg(index: number, image: WEBCL$WebCLImage): void;
    setArg(index: number, value: WEBCL$WebCLSampler): void;
    setArg(index: number, value: ArrayBufferView): void;
    release(): void;
  }

  declare interface WEBCL$WebCLKernelArgInfo {
    name: string;
    typeName: string;
    addressQualifier: string;
    accessQualifier: string;
  }

  declare interface WEBCL$WebCLMemoryObject {
    getInfo(name: WEBCL$MemInfo): any;
    release(): void;
  }

  declare interface WEBCL$WebCLPlatform {
    getInfo(name: WEBCL$PlatformInfo): any;
    getDevices(deviceType?: WEBCL$DeviceTypeBits): WEBCL$WebCLDevice[];
    getSupportedExtensions(): string[];
    enableExtension(extensionName: string): boolean;
  }

  declare interface WEBCL$WebCLProgram {
    getInfo(name: WEBCL$ProgramInfo): any;
    getBuildInfo(device: WEBCL$WebCLDevice, name: WEBCL$ProgramBuildInfo): any;
    build(
      devices?: WEBCL$WebCLDevice[],
      options?: string,
      whenFinished?: WEBCL$WebCLCallback
    ): void;
    createKernel(kernelName: string): WEBCL$WebCLKernel;
    createKernelsInProgram(): WEBCL$WebCLKernel[];
    release(): void;
  }

  declare interface WEBCL$WebCLSampler {
    getInfo(name: WEBCL$SamplerInfo): any;
    release(): void;
  }

  declare type WEBCL$WebCLUserEvent = {
    setStatus(executionStatus: WEBCL$CommandExecutionStatus): void
  } & WEBCL$WebCLEvent;

  declare class WEBCL$ErrorCodes {
    constructor(...args: empty): mixed;
    static +SUCCESS: Class<WEBCL$ErrorCodes__SUCCESS> &
      WEBCL$ErrorCodes__SUCCESS &
      0; // 0
    static +DEVICE_NOT_FOUND: Class<WEBCL$ErrorCodes__DEVICE_NOT_FOUND> &
      WEBCL$ErrorCodes__DEVICE_NOT_FOUND &
      -1; // -1
    static +DEVICE_NOT_AVAILABLE: Class<WEBCL$ErrorCodes__DEVICE_NOT_AVAILABLE> &
      WEBCL$ErrorCodes__DEVICE_NOT_AVAILABLE &
      -2; // -2
    static +COMPILER_NOT_AVAILABLE: Class<WEBCL$ErrorCodes__COMPILER_NOT_AVAILABLE> &
      WEBCL$ErrorCodes__COMPILER_NOT_AVAILABLE &
      -3; // -3
    static +MEM_OBJECT_ALLOCATION_FAILURE: Class<WEBCL$ErrorCodes__MEM_OBJECT_ALLOCATION_FAILURE> &
      WEBCL$ErrorCodes__MEM_OBJECT_ALLOCATION_FAILURE &
      -4; // -4
    static +OUT_OF_RESOURCES: Class<WEBCL$ErrorCodes__OUT_OF_RESOURCES> &
      WEBCL$ErrorCodes__OUT_OF_RESOURCES &
      -5; // -5
    static +OUT_OF_HOST_MEMORY: Class<WEBCL$ErrorCodes__OUT_OF_HOST_MEMORY> &
      WEBCL$ErrorCodes__OUT_OF_HOST_MEMORY &
      -6; // -6
    static +PROFILING_INFO_NOT_AVAILABLE: Class<WEBCL$ErrorCodes__PROFILING_INFO_NOT_AVAILABLE> &
      WEBCL$ErrorCodes__PROFILING_INFO_NOT_AVAILABLE &
      -7; // -7
    static +MEM_COPY_OVERLAP: Class<WEBCL$ErrorCodes__MEM_COPY_OVERLAP> &
      WEBCL$ErrorCodes__MEM_COPY_OVERLAP &
      -8; // -8
    static +IMAGE_FORMAT_MISMATCH: Class<WEBCL$ErrorCodes__IMAGE_FORMAT_MISMATCH> &
      WEBCL$ErrorCodes__IMAGE_FORMAT_MISMATCH &
      -9; // -9
    static +IMAGE_FORMAT_NOT_SUPPORTED: Class<WEBCL$ErrorCodes__IMAGE_FORMAT_NOT_SUPPORTED> &
      WEBCL$ErrorCodes__IMAGE_FORMAT_NOT_SUPPORTED &
      -10; // -10
    static +BUILD_PROGRAM_FAILURE: Class<WEBCL$ErrorCodes__BUILD_PROGRAM_FAILURE> &
      WEBCL$ErrorCodes__BUILD_PROGRAM_FAILURE &
      -11; // -11
    static +MAP_FAILURE: Class<WEBCL$ErrorCodes__MAP_FAILURE> &
      WEBCL$ErrorCodes__MAP_FAILURE &
      -12; // -12
    static +MISALIGNED_SUB_BUFFER_OFFSET: Class<WEBCL$ErrorCodes__MISALIGNED_SUB_BUFFER_OFFSET> &
      WEBCL$ErrorCodes__MISALIGNED_SUB_BUFFER_OFFSET &
      -13; // -13
    static +EXEC_STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST: Class<WEBCL$ErrorCodes__EXEC_STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST> &
      WEBCL$ErrorCodes__EXEC_STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST &
      -14; // -14
    static +INVALID_VALUE: Class<WEBCL$ErrorCodes__INVALID_VALUE> &
      WEBCL$ErrorCodes__INVALID_VALUE &
      -30; // -30
    static +INVALID_DEVICE_TYPE: Class<WEBCL$ErrorCodes__INVALID_DEVICE_TYPE> &
      WEBCL$ErrorCodes__INVALID_DEVICE_TYPE &
      -31; // -31
    static +INVALID_PLATFORM: Class<WEBCL$ErrorCodes__INVALID_PLATFORM> &
      WEBCL$ErrorCodes__INVALID_PLATFORM &
      -32; // -32
    static +INVALID_DEVICE: Class<WEBCL$ErrorCodes__INVALID_DEVICE> &
      WEBCL$ErrorCodes__INVALID_DEVICE &
      -33; // -33
    static +INVALID_CONTEXT: Class<WEBCL$ErrorCodes__INVALID_CONTEXT> &
      WEBCL$ErrorCodes__INVALID_CONTEXT &
      -34; // -34
    static +INVALID_QUEUE_PROPERTIES: Class<WEBCL$ErrorCodes__INVALID_QUEUE_PROPERTIES> &
      WEBCL$ErrorCodes__INVALID_QUEUE_PROPERTIES &
      -35; // -35
    static +INVALID_COMMAND_QUEUE: Class<WEBCL$ErrorCodes__INVALID_COMMAND_QUEUE> &
      WEBCL$ErrorCodes__INVALID_COMMAND_QUEUE &
      -36; // -36
    static +INVALID_HOST_PTR: Class<WEBCL$ErrorCodes__INVALID_HOST_PTR> &
      WEBCL$ErrorCodes__INVALID_HOST_PTR &
      -37; // -37
    static +INVALID_MEM_OBJECT: Class<WEBCL$ErrorCodes__INVALID_MEM_OBJECT> &
      WEBCL$ErrorCodes__INVALID_MEM_OBJECT &
      -38; // -38
    static +INVALID_IMAGE_FORMAT_DESCRIPTOR: Class<WEBCL$ErrorCodes__INVALID_IMAGE_FORMAT_DESCRIPTOR> &
      WEBCL$ErrorCodes__INVALID_IMAGE_FORMAT_DESCRIPTOR &
      -39; // -39
    static +INVALID_IMAGE_SIZE: Class<WEBCL$ErrorCodes__INVALID_IMAGE_SIZE> &
      WEBCL$ErrorCodes__INVALID_IMAGE_SIZE &
      -40; // -40
    static +INVALID_SAMPLER: Class<WEBCL$ErrorCodes__INVALID_SAMPLER> &
      WEBCL$ErrorCodes__INVALID_SAMPLER &
      -41; // -41
    static +INVALID_BINARY: Class<WEBCL$ErrorCodes__INVALID_BINARY> &
      WEBCL$ErrorCodes__INVALID_BINARY &
      -42; // -42
    static +INVALID_BUILD_OPTIONS: Class<WEBCL$ErrorCodes__INVALID_BUILD_OPTIONS> &
      WEBCL$ErrorCodes__INVALID_BUILD_OPTIONS &
      -43; // -43
    static +INVALID_PROGRAM: Class<WEBCL$ErrorCodes__INVALID_PROGRAM> &
      WEBCL$ErrorCodes__INVALID_PROGRAM &
      -44; // -44
    static +INVALID_PROGRAM_EXECUTABLE: Class<WEBCL$ErrorCodes__INVALID_PROGRAM_EXECUTABLE> &
      WEBCL$ErrorCodes__INVALID_PROGRAM_EXECUTABLE &
      -45; // -45
    static +INVALID_KERNEL_NAME: Class<WEBCL$ErrorCodes__INVALID_KERNEL_NAME> &
      WEBCL$ErrorCodes__INVALID_KERNEL_NAME &
      -46; // -46
    static +INVALID_KERNEL_DEFINITION: Class<WEBCL$ErrorCodes__INVALID_KERNEL_DEFINITION> &
      WEBCL$ErrorCodes__INVALID_KERNEL_DEFINITION &
      -47; // -47
    static +INVALID_KERNEL: Class<WEBCL$ErrorCodes__INVALID_KERNEL> &
      WEBCL$ErrorCodes__INVALID_KERNEL &
      -48; // -48
    static +INVALID_ARG_INDEX: Class<WEBCL$ErrorCodes__INVALID_ARG_INDEX> &
      WEBCL$ErrorCodes__INVALID_ARG_INDEX &
      -49; // -49
    static +INVALID_ARG_VALUE: Class<WEBCL$ErrorCodes__INVALID_ARG_VALUE> &
      WEBCL$ErrorCodes__INVALID_ARG_VALUE &
      -50; // -50
    static +INVALID_ARG_SIZE: Class<WEBCL$ErrorCodes__INVALID_ARG_SIZE> &
      WEBCL$ErrorCodes__INVALID_ARG_SIZE &
      -51; // -51
    static +INVALID_KERNEL_ARGS: Class<WEBCL$ErrorCodes__INVALID_KERNEL_ARGS> &
      WEBCL$ErrorCodes__INVALID_KERNEL_ARGS &
      -52; // -52
    static +INVALID_WORK_DIMENSION: Class<WEBCL$ErrorCodes__INVALID_WORK_DIMENSION> &
      WEBCL$ErrorCodes__INVALID_WORK_DIMENSION &
      -53; // -53
    static +INVALID_WORK_GROUP_SIZE: Class<WEBCL$ErrorCodes__INVALID_WORK_GROUP_SIZE> &
      WEBCL$ErrorCodes__INVALID_WORK_GROUP_SIZE &
      -54; // -54
    static +INVALID_WORK_ITEM_SIZE: Class<WEBCL$ErrorCodes__INVALID_WORK_ITEM_SIZE> &
      WEBCL$ErrorCodes__INVALID_WORK_ITEM_SIZE &
      -55; // -55
    static +INVALID_GLOBAL_OFFSET: Class<WEBCL$ErrorCodes__INVALID_GLOBAL_OFFSET> &
      WEBCL$ErrorCodes__INVALID_GLOBAL_OFFSET &
      -56; // -56
    static +INVALID_EVENT_WAIT_LIST: Class<WEBCL$ErrorCodes__INVALID_EVENT_WAIT_LIST> &
      WEBCL$ErrorCodes__INVALID_EVENT_WAIT_LIST &
      -57; // -57
    static +INVALID_EVENT: Class<WEBCL$ErrorCodes__INVALID_EVENT> &
      WEBCL$ErrorCodes__INVALID_EVENT &
      -58; // -58
    static +INVALID_OPERATION: Class<WEBCL$ErrorCodes__INVALID_OPERATION> &
      WEBCL$ErrorCodes__INVALID_OPERATION &
      -59; // -59
    static +INVALID_BUFFER_SIZE: Class<WEBCL$ErrorCodes__INVALID_BUFFER_SIZE> &
      WEBCL$ErrorCodes__INVALID_BUFFER_SIZE &
      -61; // -61
    static +INVALID_GLOBAL_WORK_SIZE: Class<WEBCL$ErrorCodes__INVALID_GLOBAL_WORK_SIZE> &
      WEBCL$ErrorCodes__INVALID_GLOBAL_WORK_SIZE &
      -63; // -63
    static +INVALID_PROPERTY: Class<WEBCL$ErrorCodes__INVALID_PROPERTY> &
      WEBCL$ErrorCodes__INVALID_PROPERTY &
      -64; // -64
  }

  declare class WEBCL$ErrorCodes__SUCCESS mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__DEVICE_NOT_FOUND mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__DEVICE_NOT_AVAILABLE
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__COMPILER_NOT_AVAILABLE
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__MEM_OBJECT_ALLOCATION_FAILURE
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__OUT_OF_RESOURCES mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__OUT_OF_HOST_MEMORY mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__PROFILING_INFO_NOT_AVAILABLE
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__MEM_COPY_OVERLAP mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__IMAGE_FORMAT_MISMATCH
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__IMAGE_FORMAT_NOT_SUPPORTED
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__BUILD_PROGRAM_FAILURE
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__MAP_FAILURE mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__MISALIGNED_SUB_BUFFER_OFFSET
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__EXEC_STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_VALUE mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_DEVICE_TYPE mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_PLATFORM mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_DEVICE mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_CONTEXT mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_QUEUE_PROPERTIES
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_COMMAND_QUEUE
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_HOST_PTR mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_MEM_OBJECT mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_IMAGE_FORMAT_DESCRIPTOR
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_IMAGE_SIZE mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_SAMPLER mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_BINARY mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_BUILD_OPTIONS
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_PROGRAM mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_PROGRAM_EXECUTABLE
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_KERNEL_NAME mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_KERNEL_DEFINITION
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_KERNEL mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_ARG_INDEX mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_ARG_VALUE mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_ARG_SIZE mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_KERNEL_ARGS mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_WORK_DIMENSION
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_WORK_GROUP_SIZE
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_WORK_ITEM_SIZE
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_GLOBAL_OFFSET
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_EVENT_WAIT_LIST
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_EVENT mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_OPERATION mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_BUFFER_SIZE mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_GLOBAL_WORK_SIZE
    mixins WEBCL$ErrorCodes {}
  declare class WEBCL$ErrorCodes__INVALID_PROPERTY mixins WEBCL$ErrorCodes {}

  declare class WEBCL$Bool {
    constructor(...args: empty): mixed;
    static +FALSE: Class<WEBCL$Bool__FALSE> & WEBCL$Bool__FALSE & 0; // 0
    static +TRUE: Class<WEBCL$Bool__TRUE> & WEBCL$Bool__TRUE & 1; // 1
  }

  declare class WEBCL$Bool__FALSE mixins WEBCL$Bool {}
  declare class WEBCL$Bool__TRUE mixins WEBCL$Bool {}

  declare class WEBCL$PlatformInfo {
    constructor(...args: empty): mixed;
    static +PLATFORM_PROFILE: Class<WEBCL$PlatformInfo__PLATFORM_PROFILE> &
      WEBCL$PlatformInfo__PLATFORM_PROFILE &
      2304; // 2304
    static +PLATFORM_VERSION: Class<WEBCL$PlatformInfo__PLATFORM_VERSION> &
      WEBCL$PlatformInfo__PLATFORM_VERSION &
      2305; // 2305
    static +PLATFORM_NAME: Class<WEBCL$PlatformInfo__PLATFORM_NAME> &
      WEBCL$PlatformInfo__PLATFORM_NAME &
      2306; // 2306
    static +PLATFORM_VENDOR: Class<WEBCL$PlatformInfo__PLATFORM_VENDOR> &
      WEBCL$PlatformInfo__PLATFORM_VENDOR &
      2307; // 2307
    static +PLATFORM_EXTENSIONS: Class<WEBCL$PlatformInfo__PLATFORM_EXTENSIONS> &
      WEBCL$PlatformInfo__PLATFORM_EXTENSIONS &
      2308; // 2308
  }

  declare class WEBCL$PlatformInfo__PLATFORM_PROFILE
    mixins WEBCL$PlatformInfo {}
  declare class WEBCL$PlatformInfo__PLATFORM_VERSION
    mixins WEBCL$PlatformInfo {}
  declare class WEBCL$PlatformInfo__PLATFORM_NAME mixins WEBCL$PlatformInfo {}
  declare class WEBCL$PlatformInfo__PLATFORM_VENDOR mixins WEBCL$PlatformInfo {}
  declare class WEBCL$PlatformInfo__PLATFORM_EXTENSIONS
    mixins WEBCL$PlatformInfo {}

  declare class WEBCL$DeviceTypeBits {
    constructor(...args: empty): mixed;
    static +DEVICE_TYPE_DEFAULT: Class<WEBCL$DeviceTypeBits__DEVICE_TYPE_DEFAULT> &
      WEBCL$DeviceTypeBits__DEVICE_TYPE_DEFAULT &
      1; // 1
    static +DEVICE_TYPE_CPU: Class<WEBCL$DeviceTypeBits__DEVICE_TYPE_CPU> &
      WEBCL$DeviceTypeBits__DEVICE_TYPE_CPU &
      2; // 2
    static +DEVICE_TYPE_GPU: Class<WEBCL$DeviceTypeBits__DEVICE_TYPE_GPU> &
      WEBCL$DeviceTypeBits__DEVICE_TYPE_GPU &
      4; // 4
    static +DEVICE_TYPE_ACCELERATOR: Class<WEBCL$DeviceTypeBits__DEVICE_TYPE_ACCELERATOR> &
      WEBCL$DeviceTypeBits__DEVICE_TYPE_ACCELERATOR &
      8; // 8
    static +DEVICE_TYPE_ALL: Class<WEBCL$DeviceTypeBits__DEVICE_TYPE_ALL> &
      WEBCL$DeviceTypeBits__DEVICE_TYPE_ALL &
      4294967295; // 4294967295
  }

  declare class WEBCL$DeviceTypeBits__DEVICE_TYPE_DEFAULT
    mixins WEBCL$DeviceTypeBits {}
  declare class WEBCL$DeviceTypeBits__DEVICE_TYPE_CPU
    mixins WEBCL$DeviceTypeBits {}
  declare class WEBCL$DeviceTypeBits__DEVICE_TYPE_GPU
    mixins WEBCL$DeviceTypeBits {}
  declare class WEBCL$DeviceTypeBits__DEVICE_TYPE_ACCELERATOR
    mixins WEBCL$DeviceTypeBits {}
  declare class WEBCL$DeviceTypeBits__DEVICE_TYPE_ALL
    mixins WEBCL$DeviceTypeBits {}

  declare class WEBCL$DeviceInfo {
    constructor(...args: empty): mixed;
    static +DEVICE_TYPE: Class<WEBCL$DeviceInfo__DEVICE_TYPE> &
      WEBCL$DeviceInfo__DEVICE_TYPE &
      4096; // 4096
    static +DEVICE_VENDOR_ID: Class<WEBCL$DeviceInfo__DEVICE_VENDOR_ID> &
      WEBCL$DeviceInfo__DEVICE_VENDOR_ID &
      4097; // 4097
    static +DEVICE_MAX_COMPUTE_UNITS: Class<WEBCL$DeviceInfo__DEVICE_MAX_COMPUTE_UNITS> &
      WEBCL$DeviceInfo__DEVICE_MAX_COMPUTE_UNITS &
      4098; // 4098
    static +DEVICE_MAX_WORK_ITEM_DIMENSIONS: Class<WEBCL$DeviceInfo__DEVICE_MAX_WORK_ITEM_DIMENSIONS> &
      WEBCL$DeviceInfo__DEVICE_MAX_WORK_ITEM_DIMENSIONS &
      4099; // 4099
    static +DEVICE_MAX_WORK_GROUP_SIZE: Class<WEBCL$DeviceInfo__DEVICE_MAX_WORK_GROUP_SIZE> &
      WEBCL$DeviceInfo__DEVICE_MAX_WORK_GROUP_SIZE &
      4100; // 4100
    static +DEVICE_MAX_WORK_ITEM_SIZES: Class<WEBCL$DeviceInfo__DEVICE_MAX_WORK_ITEM_SIZES> &
      WEBCL$DeviceInfo__DEVICE_MAX_WORK_ITEM_SIZES &
      4101; // 4101
    static +DEVICE_PREFERRED_VECTOR_WIDTH_CHAR: Class<WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_CHAR> &
      WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_CHAR &
      4102; // 4102
    static +DEVICE_PREFERRED_VECTOR_WIDTH_SHORT: Class<WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_SHORT> &
      WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_SHORT &
      4103; // 4103
    static +DEVICE_PREFERRED_VECTOR_WIDTH_INT: Class<WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_INT> &
      WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_INT &
      4104; // 4104
    static +DEVICE_PREFERRED_VECTOR_WIDTH_LONG: Class<WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_LONG> &
      WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_LONG &
      4105; // 4105
    static +DEVICE_PREFERRED_VECTOR_WIDTH_FLOAT: Class<WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_FLOAT> &
      WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_FLOAT &
      4106; // 4106
    static +DEVICE_MAX_CLOCK_FREQUENCY: Class<WEBCL$DeviceInfo__DEVICE_MAX_CLOCK_FREQUENCY> &
      WEBCL$DeviceInfo__DEVICE_MAX_CLOCK_FREQUENCY &
      4108; // 4108
    static +DEVICE_ADDRESS_BITS: Class<WEBCL$DeviceInfo__DEVICE_ADDRESS_BITS> &
      WEBCL$DeviceInfo__DEVICE_ADDRESS_BITS &
      4109; // 4109
    static +DEVICE_MAX_READ_IMAGE_ARGS: Class<WEBCL$DeviceInfo__DEVICE_MAX_READ_IMAGE_ARGS> &
      WEBCL$DeviceInfo__DEVICE_MAX_READ_IMAGE_ARGS &
      4110; // 4110
    static +DEVICE_MAX_WRITE_IMAGE_ARGS: Class<WEBCL$DeviceInfo__DEVICE_MAX_WRITE_IMAGE_ARGS> &
      WEBCL$DeviceInfo__DEVICE_MAX_WRITE_IMAGE_ARGS &
      4111; // 4111
    static +DEVICE_MAX_MEM_ALLOC_SIZE: Class<WEBCL$DeviceInfo__DEVICE_MAX_MEM_ALLOC_SIZE> &
      WEBCL$DeviceInfo__DEVICE_MAX_MEM_ALLOC_SIZE &
      4112; // 4112
    static +DEVICE_IMAGE2D_MAX_WIDTH: Class<WEBCL$DeviceInfo__DEVICE_IMAGE2D_MAX_WIDTH> &
      WEBCL$DeviceInfo__DEVICE_IMAGE2D_MAX_WIDTH &
      4113; // 4113
    static +DEVICE_IMAGE2D_MAX_HEIGHT: Class<WEBCL$DeviceInfo__DEVICE_IMAGE2D_MAX_HEIGHT> &
      WEBCL$DeviceInfo__DEVICE_IMAGE2D_MAX_HEIGHT &
      4114; // 4114
    static +DEVICE_IMAGE3D_MAX_WIDTH: Class<WEBCL$DeviceInfo__DEVICE_IMAGE3D_MAX_WIDTH> &
      WEBCL$DeviceInfo__DEVICE_IMAGE3D_MAX_WIDTH &
      4115; // 4115
    static +DEVICE_IMAGE3D_MAX_HEIGHT: Class<WEBCL$DeviceInfo__DEVICE_IMAGE3D_MAX_HEIGHT> &
      WEBCL$DeviceInfo__DEVICE_IMAGE3D_MAX_HEIGHT &
      4116; // 4116
    static +DEVICE_IMAGE3D_MAX_DEPTH: Class<WEBCL$DeviceInfo__DEVICE_IMAGE3D_MAX_DEPTH> &
      WEBCL$DeviceInfo__DEVICE_IMAGE3D_MAX_DEPTH &
      4117; // 4117
    static +DEVICE_IMAGE_SUPPORT: Class<WEBCL$DeviceInfo__DEVICE_IMAGE_SUPPORT> &
      WEBCL$DeviceInfo__DEVICE_IMAGE_SUPPORT &
      4118; // 4118
    static +DEVICE_MAX_PARAMETER_SIZE: Class<WEBCL$DeviceInfo__DEVICE_MAX_PARAMETER_SIZE> &
      WEBCL$DeviceInfo__DEVICE_MAX_PARAMETER_SIZE &
      4119; // 4119
    static +DEVICE_MAX_SAMPLERS: Class<WEBCL$DeviceInfo__DEVICE_MAX_SAMPLERS> &
      WEBCL$DeviceInfo__DEVICE_MAX_SAMPLERS &
      4120; // 4120
    static +DEVICE_MEM_BASE_ADDR_ALIGN: Class<WEBCL$DeviceInfo__DEVICE_MEM_BASE_ADDR_ALIGN> &
      WEBCL$DeviceInfo__DEVICE_MEM_BASE_ADDR_ALIGN &
      4121; // 4121
    static +DEVICE_SINGLE_FP_CONFIG: Class<WEBCL$DeviceInfo__DEVICE_SINGLE_FP_CONFIG> &
      WEBCL$DeviceInfo__DEVICE_SINGLE_FP_CONFIG &
      4123; // 4123
    static +DEVICE_GLOBAL_MEM_CACHE_TYPE: Class<WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_CACHE_TYPE> &
      WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_CACHE_TYPE &
      4124; // 4124
    static +DEVICE_GLOBAL_MEM_CACHELINE_SIZE: Class<WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_CACHELINE_SIZE> &
      WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_CACHELINE_SIZE &
      4125; // 4125
    static +DEVICE_GLOBAL_MEM_CACHE_SIZE: Class<WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_CACHE_SIZE> &
      WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_CACHE_SIZE &
      4126; // 4126
    static +DEVICE_GLOBAL_MEM_SIZE: Class<WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_SIZE> &
      WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_SIZE &
      4127; // 4127
    static +DEVICE_MAX_CONSTANT_BUFFER_SIZE: Class<WEBCL$DeviceInfo__DEVICE_MAX_CONSTANT_BUFFER_SIZE> &
      WEBCL$DeviceInfo__DEVICE_MAX_CONSTANT_BUFFER_SIZE &
      4128; // 4128
    static +DEVICE_MAX_CONSTANT_ARGS: Class<WEBCL$DeviceInfo__DEVICE_MAX_CONSTANT_ARGS> &
      WEBCL$DeviceInfo__DEVICE_MAX_CONSTANT_ARGS &
      4129; // 4129
    static +DEVICE_LOCAL_MEM_TYPE: Class<WEBCL$DeviceInfo__DEVICE_LOCAL_MEM_TYPE> &
      WEBCL$DeviceInfo__DEVICE_LOCAL_MEM_TYPE &
      4130; // 4130
    static +DEVICE_LOCAL_MEM_SIZE: Class<WEBCL$DeviceInfo__DEVICE_LOCAL_MEM_SIZE> &
      WEBCL$DeviceInfo__DEVICE_LOCAL_MEM_SIZE &
      4131; // 4131
    static +DEVICE_ERROR_CORRECTION_SUPPORT: Class<WEBCL$DeviceInfo__DEVICE_ERROR_CORRECTION_SUPPORT> &
      WEBCL$DeviceInfo__DEVICE_ERROR_CORRECTION_SUPPORT &
      4132; // 4132
    static +DEVICE_PROFILING_TIMER_RESOLUTION: Class<WEBCL$DeviceInfo__DEVICE_PROFILING_TIMER_RESOLUTION> &
      WEBCL$DeviceInfo__DEVICE_PROFILING_TIMER_RESOLUTION &
      4133; // 4133
    static +DEVICE_ENDIAN_LITTLE: Class<WEBCL$DeviceInfo__DEVICE_ENDIAN_LITTLE> &
      WEBCL$DeviceInfo__DEVICE_ENDIAN_LITTLE &
      4134; // 4134
    static +DEVICE_AVAILABLE: Class<WEBCL$DeviceInfo__DEVICE_AVAILABLE> &
      WEBCL$DeviceInfo__DEVICE_AVAILABLE &
      4135; // 4135
    static +DEVICE_COMPILER_AVAILABLE: Class<WEBCL$DeviceInfo__DEVICE_COMPILER_AVAILABLE> &
      WEBCL$DeviceInfo__DEVICE_COMPILER_AVAILABLE &
      4136; // 4136
    static +DEVICE_EXECUTION_CAPABILITIES: Class<WEBCL$DeviceInfo__DEVICE_EXECUTION_CAPABILITIES> &
      WEBCL$DeviceInfo__DEVICE_EXECUTION_CAPABILITIES &
      4137; // 4137
    static +DEVICE_QUEUE_PROPERTIES: Class<WEBCL$DeviceInfo__DEVICE_QUEUE_PROPERTIES> &
      WEBCL$DeviceInfo__DEVICE_QUEUE_PROPERTIES &
      4138; // 4138
    static +DEVICE_NAME: Class<WEBCL$DeviceInfo__DEVICE_NAME> &
      WEBCL$DeviceInfo__DEVICE_NAME &
      4139; // 4139
    static +DEVICE_VENDOR: Class<WEBCL$DeviceInfo__DEVICE_VENDOR> &
      WEBCL$DeviceInfo__DEVICE_VENDOR &
      4140; // 4140
    static +DRIVER_VERSION: Class<WEBCL$DeviceInfo__DRIVER_VERSION> &
      WEBCL$DeviceInfo__DRIVER_VERSION &
      4141; // 4141
    static +DEVICE_PROFILE: Class<WEBCL$DeviceInfo__DEVICE_PROFILE> &
      WEBCL$DeviceInfo__DEVICE_PROFILE &
      4142; // 4142
    static +DEVICE_VERSION: Class<WEBCL$DeviceInfo__DEVICE_VERSION> &
      WEBCL$DeviceInfo__DEVICE_VERSION &
      4143; // 4143
    static +DEVICE_EXTENSIONS: Class<WEBCL$DeviceInfo__DEVICE_EXTENSIONS> &
      WEBCL$DeviceInfo__DEVICE_EXTENSIONS &
      4144; // 4144
    static +DEVICE_PLATFORM: Class<WEBCL$DeviceInfo__DEVICE_PLATFORM> &
      WEBCL$DeviceInfo__DEVICE_PLATFORM &
      4145; // 4145
    static +DEVICE_HOST_UNIFIED_MEMORY: Class<WEBCL$DeviceInfo__DEVICE_HOST_UNIFIED_MEMORY> &
      WEBCL$DeviceInfo__DEVICE_HOST_UNIFIED_MEMORY &
      4149; // 4149
    static +DEVICE_NATIVE_VECTOR_WIDTH_CHAR: Class<WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_CHAR> &
      WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_CHAR &
      4150; // 4150
    static +DEVICE_NATIVE_VECTOR_WIDTH_SHORT: Class<WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_SHORT> &
      WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_SHORT &
      4151; // 4151
    static +DEVICE_NATIVE_VECTOR_WIDTH_INT: Class<WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_INT> &
      WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_INT &
      4152; // 4152
    static +DEVICE_NATIVE_VECTOR_WIDTH_LONG: Class<WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_LONG> &
      WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_LONG &
      4153; // 4153
    static +DEVICE_NATIVE_VECTOR_WIDTH_FLOAT: Class<WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_FLOAT> &
      WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_FLOAT &
      4154; // 4154
    static +DEVICE_OPENCL_C_VERSION: Class<WEBCL$DeviceInfo__DEVICE_OPENCL_C_VERSION> &
      WEBCL$DeviceInfo__DEVICE_OPENCL_C_VERSION &
      4157; // 4157
  }

  declare class WEBCL$DeviceInfo__DEVICE_TYPE mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_VENDOR_ID mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_COMPUTE_UNITS
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_WORK_ITEM_DIMENSIONS
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_WORK_GROUP_SIZE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_WORK_ITEM_SIZES
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_CHAR
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_SHORT
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_INT
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_LONG
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_PREFERRED_VECTOR_WIDTH_FLOAT
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_CLOCK_FREQUENCY
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_ADDRESS_BITS mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_READ_IMAGE_ARGS
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_WRITE_IMAGE_ARGS
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_MEM_ALLOC_SIZE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_IMAGE2D_MAX_WIDTH
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_IMAGE2D_MAX_HEIGHT
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_IMAGE3D_MAX_WIDTH
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_IMAGE3D_MAX_HEIGHT
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_IMAGE3D_MAX_DEPTH
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_IMAGE_SUPPORT
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_PARAMETER_SIZE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_SAMPLERS mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MEM_BASE_ADDR_ALIGN
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_SINGLE_FP_CONFIG
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_CACHE_TYPE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_CACHELINE_SIZE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_CACHE_SIZE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_GLOBAL_MEM_SIZE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_CONSTANT_BUFFER_SIZE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_MAX_CONSTANT_ARGS
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_LOCAL_MEM_TYPE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_LOCAL_MEM_SIZE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_ERROR_CORRECTION_SUPPORT
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_PROFILING_TIMER_RESOLUTION
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_ENDIAN_LITTLE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_AVAILABLE mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_COMPILER_AVAILABLE
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_EXECUTION_CAPABILITIES
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_QUEUE_PROPERTIES
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_NAME mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_VENDOR mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DRIVER_VERSION mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_PROFILE mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_VERSION mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_EXTENSIONS mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_PLATFORM mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_HOST_UNIFIED_MEMORY
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_CHAR
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_SHORT
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_INT
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_LONG
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_NATIVE_VECTOR_WIDTH_FLOAT
    mixins WEBCL$DeviceInfo {}
  declare class WEBCL$DeviceInfo__DEVICE_OPENCL_C_VERSION
    mixins WEBCL$DeviceInfo {}

  declare class WEBCL$DeviceFPConfigBits {
    constructor(...args: empty): mixed;
    static +FP_DENORM: Class<WEBCL$DeviceFPConfigBits__FP_DENORM> &
      WEBCL$DeviceFPConfigBits__FP_DENORM &
      1; // 1
    static +FP_INF_NAN: Class<WEBCL$DeviceFPConfigBits__FP_INF_NAN> &
      WEBCL$DeviceFPConfigBits__FP_INF_NAN &
      2; // 2
    static +FP_ROUND_TO_NEAREST: Class<WEBCL$DeviceFPConfigBits__FP_ROUND_TO_NEAREST> &
      WEBCL$DeviceFPConfigBits__FP_ROUND_TO_NEAREST &
      4; // 4
    static +FP_ROUND_TO_ZERO: Class<WEBCL$DeviceFPConfigBits__FP_ROUND_TO_ZERO> &
      WEBCL$DeviceFPConfigBits__FP_ROUND_TO_ZERO &
      8; // 8
    static +FP_ROUND_TO_INF: Class<WEBCL$DeviceFPConfigBits__FP_ROUND_TO_INF> &
      WEBCL$DeviceFPConfigBits__FP_ROUND_TO_INF &
      16; // 16
    static +FP_FMA: Class<WEBCL$DeviceFPConfigBits__FP_FMA> &
      WEBCL$DeviceFPConfigBits__FP_FMA &
      32; // 32
    static +FP_SOFT_FLOAT: Class<WEBCL$DeviceFPConfigBits__FP_SOFT_FLOAT> &
      WEBCL$DeviceFPConfigBits__FP_SOFT_FLOAT &
      64; // 64
  }

  declare class WEBCL$DeviceFPConfigBits__FP_DENORM
    mixins WEBCL$DeviceFPConfigBits {}
  declare class WEBCL$DeviceFPConfigBits__FP_INF_NAN
    mixins WEBCL$DeviceFPConfigBits {}
  declare class WEBCL$DeviceFPConfigBits__FP_ROUND_TO_NEAREST
    mixins WEBCL$DeviceFPConfigBits {}
  declare class WEBCL$DeviceFPConfigBits__FP_ROUND_TO_ZERO
    mixins WEBCL$DeviceFPConfigBits {}
  declare class WEBCL$DeviceFPConfigBits__FP_ROUND_TO_INF
    mixins WEBCL$DeviceFPConfigBits {}
  declare class WEBCL$DeviceFPConfigBits__FP_FMA
    mixins WEBCL$DeviceFPConfigBits {}
  declare class WEBCL$DeviceFPConfigBits__FP_SOFT_FLOAT
    mixins WEBCL$DeviceFPConfigBits {}

  declare class WEBCL$DeviceMemCacheType {
    constructor(...args: empty): mixed;
    static +NONE: Class<WEBCL$DeviceMemCacheType__NONE> &
      WEBCL$DeviceMemCacheType__NONE &
      0; // 0
    static +READ_ONLY_CACHE: Class<WEBCL$DeviceMemCacheType__READ_ONLY_CACHE> &
      WEBCL$DeviceMemCacheType__READ_ONLY_CACHE &
      1; // 1
    static +READ_WRITE_CACHE: Class<WEBCL$DeviceMemCacheType__READ_WRITE_CACHE> &
      WEBCL$DeviceMemCacheType__READ_WRITE_CACHE &
      2; // 2
  }

  declare class WEBCL$DeviceMemCacheType__NONE
    mixins WEBCL$DeviceMemCacheType {}
  declare class WEBCL$DeviceMemCacheType__READ_ONLY_CACHE
    mixins WEBCL$DeviceMemCacheType {}
  declare class WEBCL$DeviceMemCacheType__READ_WRITE_CACHE
    mixins WEBCL$DeviceMemCacheType {}

  declare class WEBCL$DeviceLocalMemType {
    constructor(...args: empty): mixed;
    static +LOCAL: Class<WEBCL$DeviceLocalMemType__LOCAL> &
      WEBCL$DeviceLocalMemType__LOCAL &
      1; // 1
    static +GLOBAL: Class<WEBCL$DeviceLocalMemType__GLOBAL> &
      WEBCL$DeviceLocalMemType__GLOBAL &
      2; // 2
  }

  declare class WEBCL$DeviceLocalMemType__LOCAL
    mixins WEBCL$DeviceLocalMemType {}
  declare class WEBCL$DeviceLocalMemType__GLOBAL
    mixins WEBCL$DeviceLocalMemType {}

  declare class WEBCL$DeviceExecCapabilitiesBits {
    constructor(...args: empty): mixed;
    static +EXEC_KERNEL: Class<WEBCL$DeviceExecCapabilitiesBits__EXEC_KERNEL> &
      WEBCL$DeviceExecCapabilitiesBits__EXEC_KERNEL &
      1; // 1
  }

  declare class WEBCL$DeviceExecCapabilitiesBits__EXEC_KERNEL
    mixins WEBCL$DeviceExecCapabilitiesBits {}

  declare class WEBCL$CommandQueueProperties {
    constructor(...args: empty): mixed;
    static +QUEUE_OUT_OF_ORDER_EXEC_MODE_ENABLE: Class<WEBCL$CommandQueueProperties__QUEUE_OUT_OF_ORDER_EXEC_MODE_ENABLE> &
      WEBCL$CommandQueueProperties__QUEUE_OUT_OF_ORDER_EXEC_MODE_ENABLE &
      1; // 1
    static +QUEUE_PROFILING_ENABLE: Class<WEBCL$CommandQueueProperties__QUEUE_PROFILING_ENABLE> &
      WEBCL$CommandQueueProperties__QUEUE_PROFILING_ENABLE &
      2; // 2
  }

  declare class WEBCL$CommandQueueProperties__QUEUE_OUT_OF_ORDER_EXEC_MODE_ENABLE
    mixins WEBCL$CommandQueueProperties {}
  declare class WEBCL$CommandQueueProperties__QUEUE_PROFILING_ENABLE
    mixins WEBCL$CommandQueueProperties {}

  declare class WEBCL$ContextInfo {
    constructor(...args: empty): mixed;
    static +CONTEXT_DEVICES: Class<WEBCL$ContextInfo__CONTEXT_DEVICES> &
      WEBCL$ContextInfo__CONTEXT_DEVICES &
      4225; // 4225
  }

  declare class WEBCL$ContextInfo__CONTEXT_DEVICES mixins WEBCL$ContextInfo {}

  declare class WEBCL$ContextProperties {
    constructor(...args: empty): mixed;
    static +QUEUE_CONTEXT: Class<WEBCL$ContextProperties__QUEUE_CONTEXT> &
      WEBCL$ContextProperties__QUEUE_CONTEXT &
      4240; // 4240
    static +QUEUE_DEVICE: Class<WEBCL$ContextProperties__QUEUE_DEVICE> &
      WEBCL$ContextProperties__QUEUE_DEVICE &
      4241; // 4241
    static +QUEUE_PROPERTIES: Class<WEBCL$ContextProperties__QUEUE_PROPERTIES> &
      WEBCL$ContextProperties__QUEUE_PROPERTIES &
      4243; // 4243
  }

  declare class WEBCL$ContextProperties__QUEUE_CONTEXT
    mixins WEBCL$ContextProperties {}
  declare class WEBCL$ContextProperties__QUEUE_DEVICE
    mixins WEBCL$ContextProperties {}
  declare class WEBCL$ContextProperties__QUEUE_PROPERTIES
    mixins WEBCL$ContextProperties {}

  declare class WEBCL$MemFlagsBits {
    constructor(...args: empty): mixed;
    static +MEM_READ_WRITE: Class<WEBCL$MemFlagsBits__MEM_READ_WRITE> &
      WEBCL$MemFlagsBits__MEM_READ_WRITE &
      1; // 1
    static +MEM_WRITE_ONLY: Class<WEBCL$MemFlagsBits__MEM_WRITE_ONLY> &
      WEBCL$MemFlagsBits__MEM_WRITE_ONLY &
      2; // 2
    static +MEM_READ_ONLY: Class<WEBCL$MemFlagsBits__MEM_READ_ONLY> &
      WEBCL$MemFlagsBits__MEM_READ_ONLY &
      4; // 4
  }

  declare class WEBCL$MemFlagsBits__MEM_READ_WRITE mixins WEBCL$MemFlagsBits {}
  declare class WEBCL$MemFlagsBits__MEM_WRITE_ONLY mixins WEBCL$MemFlagsBits {}
  declare class WEBCL$MemFlagsBits__MEM_READ_ONLY mixins WEBCL$MemFlagsBits {}

  declare class WEBCL$ChannelOrder {
    constructor(...args: empty): mixed;
    static +R: Class<WEBCL$ChannelOrder__R> & WEBCL$ChannelOrder__R & 4272; // 4272
    static +A: Class<WEBCL$ChannelOrder__A> & WEBCL$ChannelOrder__A & 4273; // 4273
    static +RG: Class<WEBCL$ChannelOrder__RG> & WEBCL$ChannelOrder__RG & 4274; // 4274
    static +RA: Class<WEBCL$ChannelOrder__RA> & WEBCL$ChannelOrder__RA & 4275; // 4275
    static +RGB: Class<WEBCL$ChannelOrder__RGB> &
      WEBCL$ChannelOrder__RGB &
      4276; // 4276
    static +RGBA: Class<WEBCL$ChannelOrder__RGBA> &
      WEBCL$ChannelOrder__RGBA &
      4277; // 4277
    static +BGRA: Class<WEBCL$ChannelOrder__BGRA> &
      WEBCL$ChannelOrder__BGRA &
      4278; // 4278
    static +ARGB: Class<WEBCL$ChannelOrder__ARGB> &
      WEBCL$ChannelOrder__ARGB &
      4279; // 4279
    static +INTENSITY: Class<WEBCL$ChannelOrder__INTENSITY> &
      WEBCL$ChannelOrder__INTENSITY &
      4280; // 4280
    static +LUMINANCE: Class<WEBCL$ChannelOrder__LUMINANCE> &
      WEBCL$ChannelOrder__LUMINANCE &
      4281; // 4281
    static +Rx: Class<WEBCL$ChannelOrder__Rx> & WEBCL$ChannelOrder__Rx & 4282; // 4282
    static +RGx: Class<WEBCL$ChannelOrder__RGx> &
      WEBCL$ChannelOrder__RGx &
      4283; // 4283
    static +RGBx: Class<WEBCL$ChannelOrder__RGBx> &
      WEBCL$ChannelOrder__RGBx &
      4284; // 4284
  }

  declare class WEBCL$ChannelOrder__R mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__A mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__RG mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__RA mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__RGB mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__RGBA mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__BGRA mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__ARGB mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__INTENSITY mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__LUMINANCE mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__Rx mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__RGx mixins WEBCL$ChannelOrder {}
  declare class WEBCL$ChannelOrder__RGBx mixins WEBCL$ChannelOrder {}

  declare class WEBCL$ChannelType {
    constructor(...args: empty): mixed;
    static +SNORM_INT8: Class<WEBCL$ChannelType__SNORM_INT8> &
      WEBCL$ChannelType__SNORM_INT8 &
      4304; // 4304
    static +SNORM_INT16: Class<WEBCL$ChannelType__SNORM_INT16> &
      WEBCL$ChannelType__SNORM_INT16 &
      4305; // 4305
    static +UNORM_INT8: Class<WEBCL$ChannelType__UNORM_INT8> &
      WEBCL$ChannelType__UNORM_INT8 &
      4306; // 4306
    static +UNORM_INT16: Class<WEBCL$ChannelType__UNORM_INT16> &
      WEBCL$ChannelType__UNORM_INT16 &
      4307; // 4307
    static +UNORM_SHORT_565: Class<WEBCL$ChannelType__UNORM_SHORT_565> &
      WEBCL$ChannelType__UNORM_SHORT_565 &
      4308; // 4308
    static +UNORM_SHORT_555: Class<WEBCL$ChannelType__UNORM_SHORT_555> &
      WEBCL$ChannelType__UNORM_SHORT_555 &
      4309; // 4309
    static +UNORM_INT_101010: Class<WEBCL$ChannelType__UNORM_INT_101010> &
      WEBCL$ChannelType__UNORM_INT_101010 &
      4310; // 4310
    static +SIGNED_INT8: Class<WEBCL$ChannelType__SIGNED_INT8> &
      WEBCL$ChannelType__SIGNED_INT8 &
      4311; // 4311
    static +SIGNED_INT16: Class<WEBCL$ChannelType__SIGNED_INT16> &
      WEBCL$ChannelType__SIGNED_INT16 &
      4312; // 4312
    static +SIGNED_INT32: Class<WEBCL$ChannelType__SIGNED_INT32> &
      WEBCL$ChannelType__SIGNED_INT32 &
      4313; // 4313
    static +UNSIGNED_INT8: Class<WEBCL$ChannelType__UNSIGNED_INT8> &
      WEBCL$ChannelType__UNSIGNED_INT8 &
      4314; // 4314
    static +UNSIGNED_INT16: Class<WEBCL$ChannelType__UNSIGNED_INT16> &
      WEBCL$ChannelType__UNSIGNED_INT16 &
      4315; // 4315
    static +UNSIGNED_INT32: Class<WEBCL$ChannelType__UNSIGNED_INT32> &
      WEBCL$ChannelType__UNSIGNED_INT32 &
      4316; // 4316
    static +HALF_FLOAT: Class<WEBCL$ChannelType__HALF_FLOAT> &
      WEBCL$ChannelType__HALF_FLOAT &
      4317; // 4317
    static +FLOAT: Class<WEBCL$ChannelType__FLOAT> &
      WEBCL$ChannelType__FLOAT &
      4318; // 4318
  }

  declare class WEBCL$ChannelType__SNORM_INT8 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__SNORM_INT16 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__UNORM_INT8 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__UNORM_INT16 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__UNORM_SHORT_565 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__UNORM_SHORT_555 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__UNORM_INT_101010 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__SIGNED_INT8 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__SIGNED_INT16 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__SIGNED_INT32 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__UNSIGNED_INT8 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__UNSIGNED_INT16 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__UNSIGNED_INT32 mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__HALF_FLOAT mixins WEBCL$ChannelType {}
  declare class WEBCL$ChannelType__FLOAT mixins WEBCL$ChannelType {}

  declare class WEBCL$MemObjectType {
    constructor(...args: empty): mixed;
    static +MEM_OBJECT_BUFFER: Class<WEBCL$MemObjectType__MEM_OBJECT_BUFFER> &
      WEBCL$MemObjectType__MEM_OBJECT_BUFFER &
      4336; // 4336
    static +MEM_OBJECT_IMAGE2D: Class<WEBCL$MemObjectType__MEM_OBJECT_IMAGE2D> &
      WEBCL$MemObjectType__MEM_OBJECT_IMAGE2D &
      4337; // 4337
    static +MEM_OBJECT_IMAGE3D: Class<WEBCL$MemObjectType__MEM_OBJECT_IMAGE3D> &
      WEBCL$MemObjectType__MEM_OBJECT_IMAGE3D &
      4338; // 4338
  }

  declare class WEBCL$MemObjectType__MEM_OBJECT_BUFFER
    mixins WEBCL$MemObjectType {}
  declare class WEBCL$MemObjectType__MEM_OBJECT_IMAGE2D
    mixins WEBCL$MemObjectType {}
  declare class WEBCL$MemObjectType__MEM_OBJECT_IMAGE3D
    mixins WEBCL$MemObjectType {}

  declare class WEBCL$MemInfo {
    constructor(...args: empty): mixed;
    static +MEM_TYPE: Class<WEBCL$MemInfo__MEM_TYPE> &
      WEBCL$MemInfo__MEM_TYPE &
      4352; // 4352
    static +MEM_FLAGS: Class<WEBCL$MemInfo__MEM_FLAGS> &
      WEBCL$MemInfo__MEM_FLAGS &
      4353; // 4353
    static +MEM_SIZE: Class<WEBCL$MemInfo__MEM_SIZE> &
      WEBCL$MemInfo__MEM_SIZE &
      4354; // 4354
    static +MEM_CONTEXT: Class<WEBCL$MemInfo__MEM_CONTEXT> &
      WEBCL$MemInfo__MEM_CONTEXT &
      4358; // 4358
    static +MEM_ASSOCIATED_MEMOBJECT: Class<WEBCL$MemInfo__MEM_ASSOCIATED_MEMOBJECT> &
      WEBCL$MemInfo__MEM_ASSOCIATED_MEMOBJECT &
      4359; // 4359
    static +MEM_OFFSET: Class<WEBCL$MemInfo__MEM_OFFSET> &
      WEBCL$MemInfo__MEM_OFFSET &
      4360; // 4360
  }

  declare class WEBCL$MemInfo__MEM_TYPE mixins WEBCL$MemInfo {}
  declare class WEBCL$MemInfo__MEM_FLAGS mixins WEBCL$MemInfo {}
  declare class WEBCL$MemInfo__MEM_SIZE mixins WEBCL$MemInfo {}
  declare class WEBCL$MemInfo__MEM_CONTEXT mixins WEBCL$MemInfo {}
  declare class WEBCL$MemInfo__MEM_ASSOCIATED_MEMOBJECT mixins WEBCL$MemInfo {}
  declare class WEBCL$MemInfo__MEM_OFFSET mixins WEBCL$MemInfo {}

  declare class WEBCL$ImageInfo {
    constructor(...args: empty): mixed;
    static +IMAGE_FORMAT: Class<WEBCL$ImageInfo__IMAGE_FORMAT> &
      WEBCL$ImageInfo__IMAGE_FORMAT &
      4368; // 4368
    static +IMAGE_ELEMENT_SIZE: Class<WEBCL$ImageInfo__IMAGE_ELEMENT_SIZE> &
      WEBCL$ImageInfo__IMAGE_ELEMENT_SIZE &
      4369; // 4369
    static +IMAGE_ROW_PITCH: Class<WEBCL$ImageInfo__IMAGE_ROW_PITCH> &
      WEBCL$ImageInfo__IMAGE_ROW_PITCH &
      4370; // 4370
    static +IMAGE_WIDTH: Class<WEBCL$ImageInfo__IMAGE_WIDTH> &
      WEBCL$ImageInfo__IMAGE_WIDTH &
      4372; // 4372
    static +IMAGE_HEIGHT: Class<WEBCL$ImageInfo__IMAGE_HEIGHT> &
      WEBCL$ImageInfo__IMAGE_HEIGHT &
      4373; // 4373
  }

  declare class WEBCL$ImageInfo__IMAGE_FORMAT mixins WEBCL$ImageInfo {}
  declare class WEBCL$ImageInfo__IMAGE_ELEMENT_SIZE mixins WEBCL$ImageInfo {}
  declare class WEBCL$ImageInfo__IMAGE_ROW_PITCH mixins WEBCL$ImageInfo {}
  declare class WEBCL$ImageInfo__IMAGE_WIDTH mixins WEBCL$ImageInfo {}
  declare class WEBCL$ImageInfo__IMAGE_HEIGHT mixins WEBCL$ImageInfo {}

  declare class WEBCL$AddressingMode {
    constructor(...args: empty): mixed;
    static +ADDRESS_CLAMP_TO_EDGE: Class<WEBCL$AddressingMode__ADDRESS_CLAMP_TO_EDGE> &
      WEBCL$AddressingMode__ADDRESS_CLAMP_TO_EDGE &
      4401; // 4401
    static +ADDRESS_CLAMP: Class<WEBCL$AddressingMode__ADDRESS_CLAMP> &
      WEBCL$AddressingMode__ADDRESS_CLAMP &
      4402; // 4402
    static +ADDRESS_REPEAT: Class<WEBCL$AddressingMode__ADDRESS_REPEAT> &
      WEBCL$AddressingMode__ADDRESS_REPEAT &
      4403; // 4403
    static +ADDRESS_MIRRORED_REPEAT: Class<WEBCL$AddressingMode__ADDRESS_MIRRORED_REPEAT> &
      WEBCL$AddressingMode__ADDRESS_MIRRORED_REPEAT &
      4404; // 4404
  }

  declare class WEBCL$AddressingMode__ADDRESS_CLAMP_TO_EDGE
    mixins WEBCL$AddressingMode {}
  declare class WEBCL$AddressingMode__ADDRESS_CLAMP
    mixins WEBCL$AddressingMode {}
  declare class WEBCL$AddressingMode__ADDRESS_REPEAT
    mixins WEBCL$AddressingMode {}
  declare class WEBCL$AddressingMode__ADDRESS_MIRRORED_REPEAT
    mixins WEBCL$AddressingMode {}

  declare class WEBCL$FilterMode {
    constructor(...args: empty): mixed;
    static +FILTER_NEAREST: Class<WEBCL$FilterMode__FILTER_NEAREST> &
      WEBCL$FilterMode__FILTER_NEAREST &
      4416; // 4416
    static +FILTER_LINEAR: Class<WEBCL$FilterMode__FILTER_LINEAR> &
      WEBCL$FilterMode__FILTER_LINEAR &
      4417; // 4417
  }

  declare class WEBCL$FilterMode__FILTER_NEAREST mixins WEBCL$FilterMode {}
  declare class WEBCL$FilterMode__FILTER_LINEAR mixins WEBCL$FilterMode {}

  declare class WEBCL$SamplerInfo {
    constructor(...args: empty): mixed;
    static +SAMPLER_CONTEXT: Class<WEBCL$SamplerInfo__SAMPLER_CONTEXT> &
      WEBCL$SamplerInfo__SAMPLER_CONTEXT &
      4433; // 4433
    static +SAMPLER_NORMALIZED_COORDS: Class<WEBCL$SamplerInfo__SAMPLER_NORMALIZED_COORDS> &
      WEBCL$SamplerInfo__SAMPLER_NORMALIZED_COORDS &
      4434; // 4434
    static +SAMPLER_ADDRESSING_MODE: Class<WEBCL$SamplerInfo__SAMPLER_ADDRESSING_MODE> &
      WEBCL$SamplerInfo__SAMPLER_ADDRESSING_MODE &
      4435; // 4435
    static +SAMPLER_FILTER_MODE: Class<WEBCL$SamplerInfo__SAMPLER_FILTER_MODE> &
      WEBCL$SamplerInfo__SAMPLER_FILTER_MODE &
      4436; // 4436
  }

  declare class WEBCL$SamplerInfo__SAMPLER_CONTEXT mixins WEBCL$SamplerInfo {}
  declare class WEBCL$SamplerInfo__SAMPLER_NORMALIZED_COORDS
    mixins WEBCL$SamplerInfo {}
  declare class WEBCL$SamplerInfo__SAMPLER_ADDRESSING_MODE
    mixins WEBCL$SamplerInfo {}
  declare class WEBCL$SamplerInfo__SAMPLER_FILTER_MODE
    mixins WEBCL$SamplerInfo {}

  declare class WEBCL$ProgramInfo {
    constructor(...args: empty): mixed;
    static +PROGRAM_CONTEXT: Class<WEBCL$ProgramInfo__PROGRAM_CONTEXT> &
      WEBCL$ProgramInfo__PROGRAM_CONTEXT &
      4449; // 4449
    static +PROGRAM_NUM_DEVICES: Class<WEBCL$ProgramInfo__PROGRAM_NUM_DEVICES> &
      WEBCL$ProgramInfo__PROGRAM_NUM_DEVICES &
      4450; // 4450
    static +PROGRAM_DEVICES: Class<WEBCL$ProgramInfo__PROGRAM_DEVICES> &
      WEBCL$ProgramInfo__PROGRAM_DEVICES &
      4451; // 4451
    static +PROGRAM_SOURCE: Class<WEBCL$ProgramInfo__PROGRAM_SOURCE> &
      WEBCL$ProgramInfo__PROGRAM_SOURCE &
      4452; // 4452
  }

  declare class WEBCL$ProgramInfo__PROGRAM_CONTEXT mixins WEBCL$ProgramInfo {}
  declare class WEBCL$ProgramInfo__PROGRAM_NUM_DEVICES
    mixins WEBCL$ProgramInfo {}
  declare class WEBCL$ProgramInfo__PROGRAM_DEVICES mixins WEBCL$ProgramInfo {}
  declare class WEBCL$ProgramInfo__PROGRAM_SOURCE mixins WEBCL$ProgramInfo {}

  declare class WEBCL$ProgramBuildInfo {
    constructor(...args: empty): mixed;
    static +PROGRAM_BUILD_STATUS: Class<WEBCL$ProgramBuildInfo__PROGRAM_BUILD_STATUS> &
      WEBCL$ProgramBuildInfo__PROGRAM_BUILD_STATUS &
      4481; // 4481
    static +PROGRAM_BUILD_OPTIONS: Class<WEBCL$ProgramBuildInfo__PROGRAM_BUILD_OPTIONS> &
      WEBCL$ProgramBuildInfo__PROGRAM_BUILD_OPTIONS &
      4482; // 4482
    static +PROGRAM_BUILD_LOG: Class<WEBCL$ProgramBuildInfo__PROGRAM_BUILD_LOG> &
      WEBCL$ProgramBuildInfo__PROGRAM_BUILD_LOG &
      4483; // 4483
  }

  declare class WEBCL$ProgramBuildInfo__PROGRAM_BUILD_STATUS
    mixins WEBCL$ProgramBuildInfo {}
  declare class WEBCL$ProgramBuildInfo__PROGRAM_BUILD_OPTIONS
    mixins WEBCL$ProgramBuildInfo {}
  declare class WEBCL$ProgramBuildInfo__PROGRAM_BUILD_LOG
    mixins WEBCL$ProgramBuildInfo {}

  declare class WEBCL$BuildStatus {
    constructor(...args: empty): mixed;
    static +BUILD_SUCCESS: Class<WEBCL$BuildStatus__BUILD_SUCCESS> &
      WEBCL$BuildStatus__BUILD_SUCCESS &
      0; // 0
    static +BUILD_NONE: Class<WEBCL$BuildStatus__BUILD_NONE> &
      WEBCL$BuildStatus__BUILD_NONE &
      -1; // -1
    static +BUILD_ERROR: Class<WEBCL$BuildStatus__BUILD_ERROR> &
      WEBCL$BuildStatus__BUILD_ERROR &
      -2; // -2
    static +BUILD_IN_PROGRESS: Class<WEBCL$BuildStatus__BUILD_IN_PROGRESS> &
      WEBCL$BuildStatus__BUILD_IN_PROGRESS &
      -3; // -3
  }

  declare class WEBCL$BuildStatus__BUILD_SUCCESS mixins WEBCL$BuildStatus {}
  declare class WEBCL$BuildStatus__BUILD_NONE mixins WEBCL$BuildStatus {}
  declare class WEBCL$BuildStatus__BUILD_ERROR mixins WEBCL$BuildStatus {}
  declare class WEBCL$BuildStatus__BUILD_IN_PROGRESS mixins WEBCL$BuildStatus {}

  declare class WEBCL$KernelInfo {
    constructor(...args: empty): mixed;
    static +KERNEL_FUNCTION_NAME: Class<WEBCL$KernelInfo__KERNEL_FUNCTION_NAME> &
      WEBCL$KernelInfo__KERNEL_FUNCTION_NAME &
      4496; // 4496
    static +KERNEL_NUM_RGS: Class<WEBCL$KernelInfo__KERNEL_NUM_RGS> &
      WEBCL$KernelInfo__KERNEL_NUM_RGS &
      4497; // 4497
    static +KERNEL_CONTEXT: Class<WEBCL$KernelInfo__KERNEL_CONTEXT> &
      WEBCL$KernelInfo__KERNEL_CONTEXT &
      4499; // 4499
    static +KERNEL_PROGRAM: Class<WEBCL$KernelInfo__KERNEL_PROGRAM> &
      WEBCL$KernelInfo__KERNEL_PROGRAM &
      4500; // 4500
  }

  declare class WEBCL$KernelInfo__KERNEL_FUNCTION_NAME
    mixins WEBCL$KernelInfo {}
  declare class WEBCL$KernelInfo__KERNEL_NUM_RGS mixins WEBCL$KernelInfo {}
  declare class WEBCL$KernelInfo__KERNEL_CONTEXT mixins WEBCL$KernelInfo {}
  declare class WEBCL$KernelInfo__KERNEL_PROGRAM mixins WEBCL$KernelInfo {}

  declare class WEBCL$KernelWorkGroupInfo {
    constructor(...args: empty): mixed;
    static +KERNEL_WORK_GROUP_SIZE: Class<WEBCL$KernelWorkGroupInfo__KERNEL_WORK_GROUP_SIZE> &
      WEBCL$KernelWorkGroupInfo__KERNEL_WORK_GROUP_SIZE &
      4528; // 4528
    static +KERNEL_COMPILE_WORK_GROUP_SIZE: Class<WEBCL$KernelWorkGroupInfo__KERNEL_COMPILE_WORK_GROUP_SIZE> &
      WEBCL$KernelWorkGroupInfo__KERNEL_COMPILE_WORK_GROUP_SIZE &
      4529; // 4529
    static +KERNEL_LOCAL_MEM_SIZE: Class<WEBCL$KernelWorkGroupInfo__KERNEL_LOCAL_MEM_SIZE> &
      WEBCL$KernelWorkGroupInfo__KERNEL_LOCAL_MEM_SIZE &
      4530; // 4530
    static +KERNEL_PREFERRED_WORK_GROUP_SIZE_MULTIPLE: Class<WEBCL$KernelWorkGroupInfo__KERNEL_PREFERRED_WORK_GROUP_SIZE_MULTIPLE> &
      WEBCL$KernelWorkGroupInfo__KERNEL_PREFERRED_WORK_GROUP_SIZE_MULTIPLE &
      4531; // 4531
    static +KERNEL_PRIVATE_MEM_SIZE: Class<WEBCL$KernelWorkGroupInfo__KERNEL_PRIVATE_MEM_SIZE> &
      WEBCL$KernelWorkGroupInfo__KERNEL_PRIVATE_MEM_SIZE &
      4532; // 4532
  }

  declare class WEBCL$KernelWorkGroupInfo__KERNEL_WORK_GROUP_SIZE
    mixins WEBCL$KernelWorkGroupInfo {}
  declare class WEBCL$KernelWorkGroupInfo__KERNEL_COMPILE_WORK_GROUP_SIZE
    mixins WEBCL$KernelWorkGroupInfo {}
  declare class WEBCL$KernelWorkGroupInfo__KERNEL_LOCAL_MEM_SIZE
    mixins WEBCL$KernelWorkGroupInfo {}
  declare class WEBCL$KernelWorkGroupInfo__KERNEL_PREFERRED_WORK_GROUP_SIZE_MULTIPLE
    mixins WEBCL$KernelWorkGroupInfo {}
  declare class WEBCL$KernelWorkGroupInfo__KERNEL_PRIVATE_MEM_SIZE
    mixins WEBCL$KernelWorkGroupInfo {}

  declare class WEBCL$EventInfo {
    constructor(...args: empty): mixed;
    static +EVENT_COMMAND_QUEUE: Class<WEBCL$EventInfo__EVENT_COMMAND_QUEUE> &
      WEBCL$EventInfo__EVENT_COMMAND_QUEUE &
      4560; // 4560
    static +EVENT_COMMAND_TYPE: Class<WEBCL$EventInfo__EVENT_COMMAND_TYPE> &
      WEBCL$EventInfo__EVENT_COMMAND_TYPE &
      4561; // 4561
    static +EVENT_COMMAND_EXECUTION_STATUS: Class<WEBCL$EventInfo__EVENT_COMMAND_EXECUTION_STATUS> &
      WEBCL$EventInfo__EVENT_COMMAND_EXECUTION_STATUS &
      4563; // 4563
    static +EVENT_CONTEXT: Class<WEBCL$EventInfo__EVENT_CONTEXT> &
      WEBCL$EventInfo__EVENT_CONTEXT &
      4564; // 4564
  }

  declare class WEBCL$EventInfo__EVENT_COMMAND_QUEUE mixins WEBCL$EventInfo {}
  declare class WEBCL$EventInfo__EVENT_COMMAND_TYPE mixins WEBCL$EventInfo {}
  declare class WEBCL$EventInfo__EVENT_COMMAND_EXECUTION_STATUS
    mixins WEBCL$EventInfo {}
  declare class WEBCL$EventInfo__EVENT_CONTEXT mixins WEBCL$EventInfo {}

  declare class WEBCL$CommandType {
    constructor(...args: empty): mixed;
    static +COMMAND_NDRANGE_KERNEL: Class<WEBCL$CommandType__COMMAND_NDRANGE_KERNEL> &
      WEBCL$CommandType__COMMAND_NDRANGE_KERNEL &
      4592; // 4592
    static +COMMAND_TASK: Class<WEBCL$CommandType__COMMAND_TASK> &
      WEBCL$CommandType__COMMAND_TASK &
      4593; // 4593
    static +COMMAND_READ_BUFFER: Class<WEBCL$CommandType__COMMAND_READ_BUFFER> &
      WEBCL$CommandType__COMMAND_READ_BUFFER &
      4595; // 4595
    static +COMMAND_WRITE_BUFFER: Class<WEBCL$CommandType__COMMAND_WRITE_BUFFER> &
      WEBCL$CommandType__COMMAND_WRITE_BUFFER &
      4596; // 4596
    static +COMMAND_COPY_BUFFER: Class<WEBCL$CommandType__COMMAND_COPY_BUFFER> &
      WEBCL$CommandType__COMMAND_COPY_BUFFER &
      4597; // 4597
    static +COMMAND_READ_IMAGE: Class<WEBCL$CommandType__COMMAND_READ_IMAGE> &
      WEBCL$CommandType__COMMAND_READ_IMAGE &
      4598; // 4598
    static +COMMAND_WRITE_IMAGE: Class<WEBCL$CommandType__COMMAND_WRITE_IMAGE> &
      WEBCL$CommandType__COMMAND_WRITE_IMAGE &
      4599; // 4599
    static +COMMAND_COPY_IMAGE: Class<WEBCL$CommandType__COMMAND_COPY_IMAGE> &
      WEBCL$CommandType__COMMAND_COPY_IMAGE &
      4600; // 4600
    static +COMMAND_COPY_IMAGE_TO_BUFFER: Class<WEBCL$CommandType__COMMAND_COPY_IMAGE_TO_BUFFER> &
      WEBCL$CommandType__COMMAND_COPY_IMAGE_TO_BUFFER &
      4601; // 4601
    static +COMMAND_COPY_BUFFER_TO_IMAGE: Class<WEBCL$CommandType__COMMAND_COPY_BUFFER_TO_IMAGE> &
      WEBCL$CommandType__COMMAND_COPY_BUFFER_TO_IMAGE &
      4602; // 4602
    static +COMMAND_MARKER: Class<WEBCL$CommandType__COMMAND_MARKER> &
      WEBCL$CommandType__COMMAND_MARKER &
      4606; // 4606
    static +COMMAND_READ_BUFFER_RECT: Class<WEBCL$CommandType__COMMAND_READ_BUFFER_RECT> &
      WEBCL$CommandType__COMMAND_READ_BUFFER_RECT &
      4609; // 4609
    static +COMMAND_WRITE_BUFFER_RECT: Class<WEBCL$CommandType__COMMAND_WRITE_BUFFER_RECT> &
      WEBCL$CommandType__COMMAND_WRITE_BUFFER_RECT &
      4610; // 4610
    static +COMMAND_COPY_BUFFER_RECT: Class<WEBCL$CommandType__COMMAND_COPY_BUFFER_RECT> &
      WEBCL$CommandType__COMMAND_COPY_BUFFER_RECT &
      4611; // 4611
    static +COMMAND_USER: Class<WEBCL$CommandType__COMMAND_USER> &
      WEBCL$CommandType__COMMAND_USER &
      4612; // 4612
  }

  declare class WEBCL$CommandType__COMMAND_NDRANGE_KERNEL
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_TASK mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_READ_BUFFER
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_WRITE_BUFFER
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_COPY_BUFFER
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_READ_IMAGE
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_WRITE_IMAGE
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_COPY_IMAGE
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_COPY_IMAGE_TO_BUFFER
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_COPY_BUFFER_TO_IMAGE
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_MARKER mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_READ_BUFFER_RECT
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_WRITE_BUFFER_RECT
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_COPY_BUFFER_RECT
    mixins WEBCL$CommandType {}
  declare class WEBCL$CommandType__COMMAND_USER mixins WEBCL$CommandType {}

  declare class WEBCL$CommandExecutionStatus {
    constructor(...args: empty): mixed;
    static +COMPLETE: Class<WEBCL$CommandExecutionStatus__COMPLETE> &
      WEBCL$CommandExecutionStatus__COMPLETE &
      0; // 0
    static +RUNNING: Class<WEBCL$CommandExecutionStatus__RUNNING> &
      WEBCL$CommandExecutionStatus__RUNNING &
      1; // 1
    static +SUBMITTED: Class<WEBCL$CommandExecutionStatus__SUBMITTED> &
      WEBCL$CommandExecutionStatus__SUBMITTED &
      2; // 2
    static +QUEUED: Class<WEBCL$CommandExecutionStatus__QUEUED> &
      WEBCL$CommandExecutionStatus__QUEUED &
      3; // 3
  }

  declare class WEBCL$CommandExecutionStatus__COMPLETE
    mixins WEBCL$CommandExecutionStatus {}
  declare class WEBCL$CommandExecutionStatus__RUNNING
    mixins WEBCL$CommandExecutionStatus {}
  declare class WEBCL$CommandExecutionStatus__SUBMITTED
    mixins WEBCL$CommandExecutionStatus {}
  declare class WEBCL$CommandExecutionStatus__QUEUED
    mixins WEBCL$CommandExecutionStatus {}

  declare class WEBCL$ProfilingInfo {
    constructor(...args: empty): mixed;
    static +PROFILING_COMMAND_QUEUED: Class<WEBCL$ProfilingInfo__PROFILING_COMMAND_QUEUED> &
      WEBCL$ProfilingInfo__PROFILING_COMMAND_QUEUED &
      4736; // 4736
    static +PROFILING_COMMAND_SUBMIT: Class<WEBCL$ProfilingInfo__PROFILING_COMMAND_SUBMIT> &
      WEBCL$ProfilingInfo__PROFILING_COMMAND_SUBMIT &
      4737; // 4737
    static +PROFILING_COMMAND_START: Class<WEBCL$ProfilingInfo__PROFILING_COMMAND_START> &
      WEBCL$ProfilingInfo__PROFILING_COMMAND_START &
      4738; // 4738
    static +PROFILING_COMMAND_END: Class<WEBCL$ProfilingInfo__PROFILING_COMMAND_END> &
      WEBCL$ProfilingInfo__PROFILING_COMMAND_END &
      4739; // 4739
  }

  declare class WEBCL$ProfilingInfo__PROFILING_COMMAND_QUEUED
    mixins WEBCL$ProfilingInfo {}
  declare class WEBCL$ProfilingInfo__PROFILING_COMMAND_SUBMIT
    mixins WEBCL$ProfilingInfo {}
  declare class WEBCL$ProfilingInfo__PROFILING_COMMAND_START
    mixins WEBCL$ProfilingInfo {}
  declare class WEBCL$ProfilingInfo__PROFILING_COMMAND_END
    mixins WEBCL$ProfilingInfo {}

  declare interface WEBCL$WebCL {
    getPlatforms(): WEBCL$WebCLPlatform[];
    createContext(deviceType?: WEBCL$DeviceTypeBits): WEBCL$WebCLContext;
    createContext(
      platform: WEBCL$WebCLPlatform,
      deviceType?: WEBCL$DeviceTypeBits
    ): WEBCL$WebCLContext;
    createContext(device: WEBCL$WebCLDevice): WEBCL$WebCLContext;
    createContext(devices: WEBCL$WebCLDevice[]): WEBCL$WebCLContext;
    getSupportedExtensions(): string[];
    enableExtension(extensionName: string): boolean;
    waitForEvents(
      eventWaitList: WEBCL$WebCLEvent[],
      whenFinished?: WEBCL$WebCLCallback
    ): void;
    releaseAll(): void;
  }
}
