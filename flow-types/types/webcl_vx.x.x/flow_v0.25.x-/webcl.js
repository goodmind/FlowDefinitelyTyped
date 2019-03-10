declare module "webcl" {
  declare interface Window {
    webcl: WEBCL$WebCL;
  }
  declare var WEBCL$WebCLEvent: {
    new(): WEBCL$WebCLEvent
  };

  declare var npm$namespace$WEBCL: {
    ErrorCodes: typeof WEBCL$ErrorCodes,
    Bool: typeof WEBCL$Bool,
    PlatformInfo: typeof WEBCL$PlatformInfo,
    DeviceTypeBits: typeof WEBCL$DeviceTypeBits,
    DeviceInfo: typeof WEBCL$DeviceInfo,
    DeviceFPConfigBits: typeof WEBCL$DeviceFPConfigBits,
    DeviceMemCacheType: typeof WEBCL$DeviceMemCacheType,
    DeviceLocalMemType: typeof WEBCL$DeviceLocalMemType,
    DeviceExecCapabilitiesBits: typeof WEBCL$DeviceExecCapabilitiesBits,
    CommandQueueProperties: typeof WEBCL$CommandQueueProperties,
    ContextInfo: typeof WEBCL$ContextInfo,
    ContextProperties: typeof WEBCL$ContextProperties,
    MemFlagsBits: typeof WEBCL$MemFlagsBits,
    ChannelOrder: typeof WEBCL$ChannelOrder,
    ChannelType: typeof WEBCL$ChannelType,
    MemObjectType: typeof WEBCL$MemObjectType,
    MemInfo: typeof WEBCL$MemInfo,
    ImageInfo: typeof WEBCL$ImageInfo,
    AddressingMode: typeof WEBCL$AddressingMode,
    FilterMode: typeof WEBCL$FilterMode,
    SamplerInfo: typeof WEBCL$SamplerInfo,
    ProgramInfo: typeof WEBCL$ProgramInfo,
    ProgramBuildInfo: typeof WEBCL$ProgramBuildInfo,
    BuildStatus: typeof WEBCL$BuildStatus,
    KernelInfo: typeof WEBCL$KernelInfo,
    KernelWorkGroupInfo: typeof WEBCL$KernelWorkGroupInfo,
    EventInfo: typeof WEBCL$EventInfo,
    CommandType: typeof WEBCL$CommandType,
    CommandExecutionStatus: typeof WEBCL$CommandExecutionStatus,
    ProfilingInfo: typeof WEBCL$ProfilingInfo
  };
  declare type WEBCL$WebCLBuffer = {
    createSubBuffer(
      memFlags: $Values<typeof WEBCL$MemFlagsBits>,
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
    getInfo(name: $Values<typeof WEBCL$ContextProperties>): any;
    release(): void;
  }

  declare interface WEBCL$WebCLContext {
    createBuffer(
      memFlags: $Values<typeof WEBCL$MemFlagsBits>,
      sizeInBytes: number,
      hostPtr?: ArrayBufferView
    ): WEBCL$WebCLBuffer;
    createCommandQueue(
      device: WEBCL$WebCLDevice,
      properties?: $Values<typeof WEBCL$CommandQueueProperties>
    ): WEBCL$WebCLCommandQueue;
    createImage(
      memFlags: $Values<typeof WEBCL$MemFlagsBits>,
      descriptor: WEBCL$WebCLImageDescriptor,
      hostPtr?: ArrayBufferView
    ): WEBCL$WebCLImage;
    createProgram(source: string): WEBCL$WebCLProgram;
    createSampler(
      normalizedCoords: number,
      addressingMode: $Values<typeof WEBCL$AddressingMode>,
      filterMode: $Values<typeof WEBCL$FilterMode>
    ): WEBCL$WebCLSampler;
    createUserEvent(): WEBCL$WebCLUserEvent;
    getInfo(name: $Values<typeof WEBCL$ContextInfo>): any;
    getSupportedImageFormats(
      memFlags?: $Values<typeof WEBCL$MemFlagsBits>
    ): WEBCL$WebCLImageDescriptor[];
    release(): void;
    releaseAll(): void;
  }

  declare interface WEBCL$WebCLDevice {
    getInfo(name: $Values<typeof WEBCL$DeviceInfo>): any;
    getSupportedExtensions(): string[];
    enableExtension(extensionName: string): boolean;
  }

  declare interface WEBCL$WebCLEvent {
    getInfo(name: $Values<typeof WEBCL$EventInfo>): any;
    getProfilingInfo(name: $Values<typeof WEBCL$ProfilingInfo>): number;
    setCallback(
      commandExecCallbackType: $Values<typeof WEBCL$CommandExecutionStatus>,
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
    channelOrder: $Values<typeof WEBCL$ChannelOrder>;
    channelType: $Values<typeof WEBCL$ChannelType>;
    width: number;
    height: number;
    rowPitch: number;
  }

  declare interface WEBCL$WebCLKernel {
    getInfo(name: $Values<typeof WEBCL$KernelInfo>): any;
    getWorkGroupInfo(
      device: WEBCL$WebCLDevice,
      name: $Values<typeof WEBCL$KernelWorkGroupInfo>
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
    getInfo(name: $Values<typeof WEBCL$MemInfo>): any;
    release(): void;
  }

  declare interface WEBCL$WebCLPlatform {
    getInfo(name: $Values<typeof WEBCL$PlatformInfo>): any;
    getDevices(
      deviceType?: $Values<typeof WEBCL$DeviceTypeBits>
    ): WEBCL$WebCLDevice[];
    getSupportedExtensions(): string[];
    enableExtension(extensionName: string): boolean;
  }

  declare interface WEBCL$WebCLProgram {
    getInfo(name: $Values<typeof WEBCL$ProgramInfo>): any;
    getBuildInfo(
      device: WEBCL$WebCLDevice,
      name: $Values<typeof WEBCL$ProgramBuildInfo>
    ): any;
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
    getInfo(name: $Values<typeof WEBCL$SamplerInfo>): any;
    release(): void;
  }

  declare type WEBCL$WebCLUserEvent = {
    setStatus(
      executionStatus: $Values<typeof WEBCL$CommandExecutionStatus>
    ): void
  } & WEBCL$WebCLEvent;

  declare var WEBCL$ErrorCodes: {|
    +SUCCESS: 0, // 0
    +DEVICE_NOT_FOUND: -1, // -1
    +DEVICE_NOT_AVAILABLE: -2, // -2
    +COMPILER_NOT_AVAILABLE: -3, // -3
    +MEM_OBJECT_ALLOCATION_FAILURE: -4, // -4
    +OUT_OF_RESOURCES: -5, // -5
    +OUT_OF_HOST_MEMORY: -6, // -6
    +PROFILING_INFO_NOT_AVAILABLE: -7, // -7
    +MEM_COPY_OVERLAP: -8, // -8
    +IMAGE_FORMAT_MISMATCH: -9, // -9
    +IMAGE_FORMAT_NOT_SUPPORTED: -10, // -10
    +BUILD_PROGRAM_FAILURE: -11, // -11
    +MAP_FAILURE: -12, // -12
    +MISALIGNED_SUB_BUFFER_OFFSET: -13, // -13
    +EXEC_STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST: -14, // -14
    +INVALID_VALUE: -30, // -30
    +INVALID_DEVICE_TYPE: -31, // -31
    +INVALID_PLATFORM: -32, // -32
    +INVALID_DEVICE: -33, // -33
    +INVALID_CONTEXT: -34, // -34
    +INVALID_QUEUE_PROPERTIES: -35, // -35
    +INVALID_COMMAND_QUEUE: -36, // -36
    +INVALID_HOST_PTR: -37, // -37
    +INVALID_MEM_OBJECT: -38, // -38
    +INVALID_IMAGE_FORMAT_DESCRIPTOR: -39, // -39
    +INVALID_IMAGE_SIZE: -40, // -40
    +INVALID_SAMPLER: -41, // -41
    +INVALID_BINARY: -42, // -42
    +INVALID_BUILD_OPTIONS: -43, // -43
    +INVALID_PROGRAM: -44, // -44
    +INVALID_PROGRAM_EXECUTABLE: -45, // -45
    +INVALID_KERNEL_NAME: -46, // -46
    +INVALID_KERNEL_DEFINITION: -47, // -47
    +INVALID_KERNEL: -48, // -48
    +INVALID_ARG_INDEX: -49, // -49
    +INVALID_ARG_VALUE: -50, // -50
    +INVALID_ARG_SIZE: -51, // -51
    +INVALID_KERNEL_ARGS: -52, // -52
    +INVALID_WORK_DIMENSION: -53, // -53
    +INVALID_WORK_GROUP_SIZE: -54, // -54
    +INVALID_WORK_ITEM_SIZE: -55, // -55
    +INVALID_GLOBAL_OFFSET: -56, // -56
    +INVALID_EVENT_WAIT_LIST: -57, // -57
    +INVALID_EVENT: -58, // -58
    +INVALID_OPERATION: -59, // -59
    +INVALID_BUFFER_SIZE: -61, // -61
    +INVALID_GLOBAL_WORK_SIZE: -63, // -63
    +INVALID_PROPERTY: -64 // -64
  |};

  declare var WEBCL$Bool: {|
    +FALSE: 0, // 0
    +TRUE: 1 // 1
  |};

  declare var WEBCL$PlatformInfo: {|
    +PLATFORM_PROFILE: 2304, // 2304
    +PLATFORM_VERSION: 2305, // 2305
    +PLATFORM_NAME: 2306, // 2306
    +PLATFORM_VENDOR: 2307, // 2307
    +PLATFORM_EXTENSIONS: 2308 // 2308
  |};

  declare var WEBCL$DeviceTypeBits: {|
    +DEVICE_TYPE_DEFAULT: 1, // 1
    +DEVICE_TYPE_CPU: 2, // 2
    +DEVICE_TYPE_GPU: 4, // 4
    +DEVICE_TYPE_ACCELERATOR: 8, // 8
    +DEVICE_TYPE_ALL: 4294967295 // 4294967295
  |};

  declare var WEBCL$DeviceInfo: {|
    +DEVICE_TYPE: 4096, // 4096
    +DEVICE_VENDOR_ID: 4097, // 4097
    +DEVICE_MAX_COMPUTE_UNITS: 4098, // 4098
    +DEVICE_MAX_WORK_ITEM_DIMENSIONS: 4099, // 4099
    +DEVICE_MAX_WORK_GROUP_SIZE: 4100, // 4100
    +DEVICE_MAX_WORK_ITEM_SIZES: 4101, // 4101
    +DEVICE_PREFERRED_VECTOR_WIDTH_CHAR: 4102, // 4102
    +DEVICE_PREFERRED_VECTOR_WIDTH_SHORT: 4103, // 4103
    +DEVICE_PREFERRED_VECTOR_WIDTH_INT: 4104, // 4104
    +DEVICE_PREFERRED_VECTOR_WIDTH_LONG: 4105, // 4105
    +DEVICE_PREFERRED_VECTOR_WIDTH_FLOAT: 4106, // 4106
    +DEVICE_MAX_CLOCK_FREQUENCY: 4108, // 4108
    +DEVICE_ADDRESS_BITS: 4109, // 4109
    +DEVICE_MAX_READ_IMAGE_ARGS: 4110, // 4110
    +DEVICE_MAX_WRITE_IMAGE_ARGS: 4111, // 4111
    +DEVICE_MAX_MEM_ALLOC_SIZE: 4112, // 4112
    +DEVICE_IMAGE2D_MAX_WIDTH: 4113, // 4113
    +DEVICE_IMAGE2D_MAX_HEIGHT: 4114, // 4114
    +DEVICE_IMAGE3D_MAX_WIDTH: 4115, // 4115
    +DEVICE_IMAGE3D_MAX_HEIGHT: 4116, // 4116
    +DEVICE_IMAGE3D_MAX_DEPTH: 4117, // 4117
    +DEVICE_IMAGE_SUPPORT: 4118, // 4118
    +DEVICE_MAX_PARAMETER_SIZE: 4119, // 4119
    +DEVICE_MAX_SAMPLERS: 4120, // 4120
    +DEVICE_MEM_BASE_ADDR_ALIGN: 4121, // 4121
    +DEVICE_SINGLE_FP_CONFIG: 4123, // 4123
    +DEVICE_GLOBAL_MEM_CACHE_TYPE: 4124, // 4124
    +DEVICE_GLOBAL_MEM_CACHELINE_SIZE: 4125, // 4125
    +DEVICE_GLOBAL_MEM_CACHE_SIZE: 4126, // 4126
    +DEVICE_GLOBAL_MEM_SIZE: 4127, // 4127
    +DEVICE_MAX_CONSTANT_BUFFER_SIZE: 4128, // 4128
    +DEVICE_MAX_CONSTANT_ARGS: 4129, // 4129
    +DEVICE_LOCAL_MEM_TYPE: 4130, // 4130
    +DEVICE_LOCAL_MEM_SIZE: 4131, // 4131
    +DEVICE_ERROR_CORRECTION_SUPPORT: 4132, // 4132
    +DEVICE_PROFILING_TIMER_RESOLUTION: 4133, // 4133
    +DEVICE_ENDIAN_LITTLE: 4134, // 4134
    +DEVICE_AVAILABLE: 4135, // 4135
    +DEVICE_COMPILER_AVAILABLE: 4136, // 4136
    +DEVICE_EXECUTION_CAPABILITIES: 4137, // 4137
    +DEVICE_QUEUE_PROPERTIES: 4138, // 4138
    +DEVICE_NAME: 4139, // 4139
    +DEVICE_VENDOR: 4140, // 4140
    +DRIVER_VERSION: 4141, // 4141
    +DEVICE_PROFILE: 4142, // 4142
    +DEVICE_VERSION: 4143, // 4143
    +DEVICE_EXTENSIONS: 4144, // 4144
    +DEVICE_PLATFORM: 4145, // 4145
    +DEVICE_HOST_UNIFIED_MEMORY: 4149, // 4149
    +DEVICE_NATIVE_VECTOR_WIDTH_CHAR: 4150, // 4150
    +DEVICE_NATIVE_VECTOR_WIDTH_SHORT: 4151, // 4151
    +DEVICE_NATIVE_VECTOR_WIDTH_INT: 4152, // 4152
    +DEVICE_NATIVE_VECTOR_WIDTH_LONG: 4153, // 4153
    +DEVICE_NATIVE_VECTOR_WIDTH_FLOAT: 4154, // 4154
    +DEVICE_OPENCL_C_VERSION: 4157 // 4157
  |};

  declare var WEBCL$DeviceFPConfigBits: {|
    +FP_DENORM: 1, // 1
    +FP_INF_NAN: 2, // 2
    +FP_ROUND_TO_NEAREST: 4, // 4
    +FP_ROUND_TO_ZERO: 8, // 8
    +FP_ROUND_TO_INF: 16, // 16
    +FP_FMA: 32, // 32
    +FP_SOFT_FLOAT: 64 // 64
  |};

  declare var WEBCL$DeviceMemCacheType: {|
    +NONE: 0, // 0
    +READ_ONLY_CACHE: 1, // 1
    +READ_WRITE_CACHE: 2 // 2
  |};

  declare var WEBCL$DeviceLocalMemType: {|
    +LOCAL: 1, // 1
    +GLOBAL: 2 // 2
  |};

  declare var WEBCL$DeviceExecCapabilitiesBits: {|
    +EXEC_KERNEL: 1 // 1
  |};

  declare var WEBCL$CommandQueueProperties: {|
    +QUEUE_OUT_OF_ORDER_EXEC_MODE_ENABLE: 1, // 1
    +QUEUE_PROFILING_ENABLE: 2 // 2
  |};

  declare var WEBCL$ContextInfo: {|
    +CONTEXT_DEVICES: 4225 // 4225
  |};

  declare var WEBCL$ContextProperties: {|
    +QUEUE_CONTEXT: 4240, // 4240
    +QUEUE_DEVICE: 4241, // 4241
    +QUEUE_PROPERTIES: 4243 // 4243
  |};

  declare var WEBCL$MemFlagsBits: {|
    +MEM_READ_WRITE: 1, // 1
    +MEM_WRITE_ONLY: 2, // 2
    +MEM_READ_ONLY: 4 // 4
  |};

  declare var WEBCL$ChannelOrder: {|
    +R: 4272, // 4272
    +A: 4273, // 4273
    +RG: 4274, // 4274
    +RA: 4275, // 4275
    +RGB: 4276, // 4276
    +RGBA: 4277, // 4277
    +BGRA: 4278, // 4278
    +ARGB: 4279, // 4279
    +INTENSITY: 4280, // 4280
    +LUMINANCE: 4281, // 4281
    +Rx: 4282, // 4282
    +RGx: 4283, // 4283
    +RGBx: 4284 // 4284
  |};

  declare var WEBCL$ChannelType: {|
    +SNORM_INT8: 4304, // 4304
    +SNORM_INT16: 4305, // 4305
    +UNORM_INT8: 4306, // 4306
    +UNORM_INT16: 4307, // 4307
    +UNORM_SHORT_565: 4308, // 4308
    +UNORM_SHORT_555: 4309, // 4309
    +UNORM_INT_101010: 4310, // 4310
    +SIGNED_INT8: 4311, // 4311
    +SIGNED_INT16: 4312, // 4312
    +SIGNED_INT32: 4313, // 4313
    +UNSIGNED_INT8: 4314, // 4314
    +UNSIGNED_INT16: 4315, // 4315
    +UNSIGNED_INT32: 4316, // 4316
    +HALF_FLOAT: 4317, // 4317
    +FLOAT: 4318 // 4318
  |};

  declare var WEBCL$MemObjectType: {|
    +MEM_OBJECT_BUFFER: 4336, // 4336
    +MEM_OBJECT_IMAGE2D: 4337, // 4337
    +MEM_OBJECT_IMAGE3D: 4338 // 4338
  |};

  declare var WEBCL$MemInfo: {|
    +MEM_TYPE: 4352, // 4352
    +MEM_FLAGS: 4353, // 4353
    +MEM_SIZE: 4354, // 4354
    +MEM_CONTEXT: 4358, // 4358
    +MEM_ASSOCIATED_MEMOBJECT: 4359, // 4359
    +MEM_OFFSET: 4360 // 4360
  |};

  declare var WEBCL$ImageInfo: {|
    +IMAGE_FORMAT: 4368, // 4368
    +IMAGE_ELEMENT_SIZE: 4369, // 4369
    +IMAGE_ROW_PITCH: 4370, // 4370
    +IMAGE_WIDTH: 4372, // 4372
    +IMAGE_HEIGHT: 4373 // 4373
  |};

  declare var WEBCL$AddressingMode: {|
    +ADDRESS_CLAMP_TO_EDGE: 4401, // 4401
    +ADDRESS_CLAMP: 4402, // 4402
    +ADDRESS_REPEAT: 4403, // 4403
    +ADDRESS_MIRRORED_REPEAT: 4404 // 4404
  |};

  declare var WEBCL$FilterMode: {|
    +FILTER_NEAREST: 4416, // 4416
    +FILTER_LINEAR: 4417 // 4417
  |};

  declare var WEBCL$SamplerInfo: {|
    +SAMPLER_CONTEXT: 4433, // 4433
    +SAMPLER_NORMALIZED_COORDS: 4434, // 4434
    +SAMPLER_ADDRESSING_MODE: 4435, // 4435
    +SAMPLER_FILTER_MODE: 4436 // 4436
  |};

  declare var WEBCL$ProgramInfo: {|
    +PROGRAM_CONTEXT: 4449, // 4449
    +PROGRAM_NUM_DEVICES: 4450, // 4450
    +PROGRAM_DEVICES: 4451, // 4451
    +PROGRAM_SOURCE: 4452 // 4452
  |};

  declare var WEBCL$ProgramBuildInfo: {|
    +PROGRAM_BUILD_STATUS: 4481, // 4481
    +PROGRAM_BUILD_OPTIONS: 4482, // 4482
    +PROGRAM_BUILD_LOG: 4483 // 4483
  |};

  declare var WEBCL$BuildStatus: {|
    +BUILD_SUCCESS: 0, // 0
    +BUILD_NONE: -1, // -1
    +BUILD_ERROR: -2, // -2
    +BUILD_IN_PROGRESS: -3 // -3
  |};

  declare var WEBCL$KernelInfo: {|
    +KERNEL_FUNCTION_NAME: 4496, // 4496
    +KERNEL_NUM_RGS: 4497, // 4497
    +KERNEL_CONTEXT: 4499, // 4499
    +KERNEL_PROGRAM: 4500 // 4500
  |};

  declare var WEBCL$KernelWorkGroupInfo: {|
    +KERNEL_WORK_GROUP_SIZE: 4528, // 4528
    +KERNEL_COMPILE_WORK_GROUP_SIZE: 4529, // 4529
    +KERNEL_LOCAL_MEM_SIZE: 4530, // 4530
    +KERNEL_PREFERRED_WORK_GROUP_SIZE_MULTIPLE: 4531, // 4531
    +KERNEL_PRIVATE_MEM_SIZE: 4532 // 4532
  |};

  declare var WEBCL$EventInfo: {|
    +EVENT_COMMAND_QUEUE: 4560, // 4560
    +EVENT_COMMAND_TYPE: 4561, // 4561
    +EVENT_COMMAND_EXECUTION_STATUS: 4563, // 4563
    +EVENT_CONTEXT: 4564 // 4564
  |};

  declare var WEBCL$CommandType: {|
    +COMMAND_NDRANGE_KERNEL: 4592, // 4592
    +COMMAND_TASK: 4593, // 4593
    +COMMAND_READ_BUFFER: 4595, // 4595
    +COMMAND_WRITE_BUFFER: 4596, // 4596
    +COMMAND_COPY_BUFFER: 4597, // 4597
    +COMMAND_READ_IMAGE: 4598, // 4598
    +COMMAND_WRITE_IMAGE: 4599, // 4599
    +COMMAND_COPY_IMAGE: 4600, // 4600
    +COMMAND_COPY_IMAGE_TO_BUFFER: 4601, // 4601
    +COMMAND_COPY_BUFFER_TO_IMAGE: 4602, // 4602
    +COMMAND_MARKER: 4606, // 4606
    +COMMAND_READ_BUFFER_RECT: 4609, // 4609
    +COMMAND_WRITE_BUFFER_RECT: 4610, // 4610
    +COMMAND_COPY_BUFFER_RECT: 4611, // 4611
    +COMMAND_USER: 4612 // 4612
  |};

  declare var WEBCL$CommandExecutionStatus: {|
    +COMPLETE: 0, // 0
    +RUNNING: 1, // 1
    +SUBMITTED: 2, // 2
    +QUEUED: 3 // 3
  |};

  declare var WEBCL$ProfilingInfo: {|
    +PROFILING_COMMAND_QUEUED: 4736, // 4736
    +PROFILING_COMMAND_SUBMIT: 4737, // 4737
    +PROFILING_COMMAND_START: 4738, // 4738
    +PROFILING_COMMAND_END: 4739 // 4739
  |};

  declare interface WEBCL$WebCL {
    getPlatforms(): WEBCL$WebCLPlatform[];
    createContext(
      deviceType?: $Values<typeof WEBCL$DeviceTypeBits>
    ): WEBCL$WebCLContext;
    createContext(
      platform: WEBCL$WebCLPlatform,
      deviceType?: $Values<typeof WEBCL$DeviceTypeBits>
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
