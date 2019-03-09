declare module "baidu-app" {
  declare var npm$namespace$swan: {
    request: typeof swan$request,
    uploadFile: typeof swan$uploadFile,
    downloadFile: typeof swan$downloadFile,
    connectSocket: typeof swan$connectSocket,
    onSocketOpen: typeof swan$onSocketOpen,
    onSocketError: typeof swan$onSocketError,
    sendSocketMessage: typeof swan$sendSocketMessage,
    onSocketMessage: typeof swan$onSocketMessage,
    closeSocket: typeof swan$closeSocket,
    onSocketClose: typeof swan$onSocketClose,
    chooseImage: typeof swan$chooseImage,
    previewImage: typeof swan$previewImage,
    getImageInfo: typeof swan$getImageInfo,
    saveImageToPhotosAlbum: typeof swan$saveImageToPhotosAlbum,
    startRecord: typeof swan$startRecord,
    stopRecord: typeof swan$stopRecord,
    getRecorderManager: typeof swan$getRecorderManager,
    playVoice: typeof swan$playVoice,
    pauseVoice: typeof swan$pauseVoice,
    stopVoice: typeof swan$stopVoice,
    getBackgroundAudioPlayerState: typeof swan$getBackgroundAudioPlayerState,
    playBackgroundAudio: typeof swan$playBackgroundAudio,
    pauseBackgroundAudio: typeof swan$pauseBackgroundAudio,
    seekBackgroundAudio: typeof swan$seekBackgroundAudio,
    stopBackgroundAudio: typeof swan$stopBackgroundAudio,
    onBackgroundAudioPlay: typeof swan$onBackgroundAudioPlay,
    onBackgroundAudioPause: typeof swan$onBackgroundAudioPause,
    onBackgroundAudioStop: typeof swan$onBackgroundAudioStop,
    getBackgroundAudioManager: typeof swan$getBackgroundAudioManager,
    createInnerAudioContext: typeof swan$createInnerAudioContext,
    chooseVideo: typeof swan$chooseVideo,
    saveVideoToPhotosAlbum: typeof swan$saveVideoToPhotosAlbum,
    createVideoContext: typeof swan$createVideoContext,
    createCameraContext: typeof swan$createCameraContext,
    createLivePlayerContext: typeof swan$createLivePlayerContext,
    saveFile: typeof swan$saveFile,
    getFileInfo: typeof swan$getFileInfo,
    getSavedFileList: typeof swan$getSavedFileList,
    getSavedFileInfo: typeof swan$getSavedFileInfo,
    removeSavedFile: typeof swan$removeSavedFile,
    openDocument: typeof swan$openDocument,
    setStorage: typeof swan$setStorage,
    setStorageSync: typeof swan$setStorageSync,
    getStorage: typeof swan$getStorage,
    getStorageSync: typeof swan$getStorageSync,
    getStorageInfo: typeof swan$getStorageInfo,
    getStorageInfoSync: typeof swan$getStorageInfoSync,
    removeStorage: typeof swan$removeStorage,
    removeStorageSync: typeof swan$removeStorageSync,
    clearStorage: typeof swan$clearStorage,
    clearStorageSync: typeof swan$clearStorageSync,
    getLocation: typeof swan$getLocation,
    chooseLocation: typeof swan$chooseLocation,
    openLocation: typeof swan$openLocation,
    createMapContext: typeof swan$createMapContext,
    getSystemInfo: typeof swan$getSystemInfo,
    getSystemInfoSync: typeof swan$getSystemInfoSync,
    getEnvInfoSync: typeof swan$getEnvInfoSync,
    canIUse: typeof swan$canIUse,
    onMemoryWarning: typeof swan$onMemoryWarning,
    getNetworkType: typeof swan$getNetworkType,
    onNetworkStatusChange: typeof swan$onNetworkStatusChange,
    onAccelerometerChange: typeof swan$onAccelerometerChange,
    startAccelerometer: typeof swan$startAccelerometer,
    stopAccelerometer: typeof swan$stopAccelerometer,
    onCompassChange: typeof swan$onCompassChange,
    startCompass: typeof swan$startCompass,
    stopCompass: typeof swan$stopCompass,
    makePhoneCall: typeof swan$makePhoneCall,
    scanCode: typeof swan$scanCode,
    setClipboardData: typeof swan$setClipboardData,
    getClipboardData: typeof swan$getClipboardData,
    openBluetoothAdapter: typeof swan$openBluetoothAdapter,
    closeBluetoothAdapter: typeof swan$closeBluetoothAdapter,
    getBluetoothAdapterState: typeof swan$getBluetoothAdapterState,
    onBluetoothAdapterStateChange: typeof swan$onBluetoothAdapterStateChange,
    stopBluetoothDevicesDiscovery: typeof swan$stopBluetoothDevicesDiscovery,
    getBluetoothDevices: typeof swan$getBluetoothDevices,
    onBluetoothDeviceFound: typeof swan$onBluetoothDeviceFound,
    getConnectedBluetoothDevices: typeof swan$getConnectedBluetoothDevices,
    createBLEConnection: typeof swan$createBLEConnection,
    closeBLEConnection: typeof swan$closeBLEConnection,
    getBLEDeviceServices: typeof swan$getBLEDeviceServices,
    getBLEDeviceCharacteristics: typeof swan$getBLEDeviceCharacteristics,
    readBLECharacteristicValue: typeof swan$readBLECharacteristicValue,
    writeBLECharacteristicValue: typeof swan$writeBLECharacteristicValue,
    notifyBLECharacteristicValueChanged: typeof swan$notifyBLECharacteristicValueChanged,
    onBLEConnectionStateChanged: typeof swan$onBLEConnectionStateChanged,
    onBLECharacteristicValueChange: typeof swan$onBLECharacteristicValueChange,
    startBeaconDiscovery: typeof swan$startBeaconDiscovery,
    stopBeaconDiscovery: typeof swan$stopBeaconDiscovery,
    getBeacons: typeof swan$getBeacons,
    onBeaconUpdate: typeof swan$onBeaconUpdate,
    onBeaconServiceChange: typeof swan$onBeaconServiceChange,
    setScreenBrightness: typeof swan$setScreenBrightness,
    getScreenBrightness: typeof swan$getScreenBrightness,
    setKeepScreenOn: typeof swan$setKeepScreenOn,
    vibrateLong: typeof swan$vibrateLong,
    vibrateShort: typeof swan$vibrateShort,
    onUserCaptureScreen: typeof swan$onUserCaptureScreen,
    addPhoneContact: typeof swan$addPhoneContact,
    startWifi: typeof swan$startWifi,
    stopWifi: typeof swan$stopWifi,
    connectWifi: typeof swan$connectWifi,
    getWifiList: typeof swan$getWifiList,
    onGetWifiList: typeof swan$onGetWifiList,
    setWifiList: typeof swan$setWifiList,
    onWifiConnected: typeof swan$onWifiConnected,
    getConnectedWifi: typeof swan$getConnectedWifi,
    showToast: typeof swan$showToast,
    hideToast: typeof swan$hideToast,
    showLoading: typeof swan$showLoading,
    hideLoading: typeof swan$hideLoading,
    showModal: typeof swan$showModal,
    showActionSheet: typeof swan$showActionSheet,
    setTopBarText: typeof swan$setTopBarText,
    setNavigationBarTitle: typeof swan$setNavigationBarTitle,
    setNavigationBarColor: typeof swan$setNavigationBarColor,
    showNavigationBarLoading: typeof swan$showNavigationBarLoading,
    hideNavigationBarLoading: typeof swan$hideNavigationBarLoading,
    setTabBarBadge: typeof swan$setTabBarBadge,
    removeTabBarBadge: typeof swan$removeTabBarBadge,
    showTabBarRedDot: typeof swan$showTabBarRedDot,
    hideTabBarRedDot: typeof swan$hideTabBarRedDot,
    setTabBarStyle: typeof swan$setTabBarStyle,
    setTabBarItem: typeof swan$setTabBarItem,
    showTabBar: typeof swan$showTabBar,
    hideTabBar: typeof swan$hideTabBar,
    navigateTo: typeof swan$navigateTo,
    switchTab: typeof swan$switchTab,
    redirectTo: typeof swan$redirectTo,
    navigateBack: typeof swan$navigateBack,
    reLaunch: typeof swan$reLaunch,
    createAnimation: typeof swan$createAnimation,
    pageScrollTo: typeof swan$pageScrollTo,
    createSelectorQuery: typeof swan$createSelectorQuery,
    createIntersectionObserver: typeof swan$createIntersectionObserver,
    createCanvasContext: typeof swan$createCanvasContext,
    drawCanvas: typeof swan$drawCanvas,
    canvasToTempFilePath: typeof swan$canvasToTempFilePath,
    canvasGetImageData: typeof swan$canvasGetImageData,
    canvasPutImageData: typeof swan$canvasPutImageData,
    startPullDownRefresh: typeof swan$startPullDownRefresh,
    stopPullDownRefresh: typeof swan$stopPullDownRefresh,
    getExtConfig: typeof swan$getExtConfig,
    getExtConfigSync: typeof swan$getExtConfigSync,
    login: typeof swan$login,
    checkSession: typeof swan$checkSession,
    isLoginSync: typeof swan$isLoginSync,
    authorize: typeof swan$authorize,
    getSwanId: typeof swan$getSwanId,
    getUserInfo: typeof swan$getUserInfo,
    verify: typeof swan$verify,
    requestPayment: typeof swan$requestPayment,
    showShareMenu: typeof swan$showShareMenu,
    hideShareMenu: typeof swan$hideShareMenu,
    updateShareMenu: typeof swan$updateShareMenu,
    getShareInfo: typeof swan$getShareInfo,
    chooseAddress: typeof swan$chooseAddress,
    addCard: typeof swan$addCard,
    openCard: typeof swan$openCard,
    openSetting: typeof swan$openSetting,
    getSetting: typeof swan$getSetting,
    openShare: typeof swan$openShare,
    requestPolymerPayment: typeof swan$requestPolymerPayment,
    navigateToSmartProgram: typeof swan$navigateToSmartProgram,
    navigateBackSmartProgram: typeof swan$navigateBackSmartProgram,
    setMetaDescription: typeof swan$setMetaDescription,
    setMetaKeywords: typeof swan$setMetaKeywords,
    setDocumentTitle: typeof swan$setDocumentTitle,
    loadSubPackage: typeof swan$loadSubPackage,
    getUpdateManager: typeof swan$getUpdateManager,
    chooseInvoiceTitle: typeof swan$chooseInvoiceTitle,
    navigateToMiniProgram: typeof swan$navigateToMiniProgram,
    navigateBackMiniProgram: typeof swan$navigateBackMiniProgram,
    arrayBufferToBase64: typeof swan$arrayBufferToBase64,
    base64ToArrayBuffer: typeof swan$base64ToArrayBuffer,
    hideKeyboard: typeof swan$hideKeyboard,
    getLogManager: typeof swan$getLogManager,
    reportMonitor: typeof swan$reportMonitor,
    reportAnalytics: typeof swan$reportAnalytics,
    nextTick: typeof swan$nextTick,
    setEnableDebug: typeof swan$setEnableDebug,
    getAccountInfoSync: typeof swan$getAccountInfoSync,

    ai: typeof npm$namespace$swan$ai
  };
  declare interface swan$DataResponse {
    /**
     * 回调函数返回的内容
     */
    data: string | ArrayBuffer;
    statusCode: number;
    header: any;
    result: string;
  }

  declare interface swan$ErrMsgResponse {
    /**
     * 成功：ok，错误：详细信息
     */
    errMsg: "ok" | string;
  }

  declare interface swan$TempFileResponse {
    /**
     * 文件的临时路径
     */
    tempFilePath: string;

    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    statusCode: number;
  }

  declare interface swan$BaseOptions<R = any, E = any> {
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: R) => void;

    /**
     * 接口调用失败的回调函数
     */
    fail?: (res: E) => void;

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (res: any) => void;
  }

  declare interface swan$ErrCodeResponse {
    errCode: number;
  }

  declare interface swan$RequestHeader {
    [key: string]: string;
  }

  declare type swan$RequestOptions = {
    /**
     * 开发者服务器接口地址
     */
    url: string,

    /**
     * 请求的参数
     */
    data?: string | { [key: string]: any },

    /**
     * 设置请求的 header , header 中不能设置 Referer
     */
    header?: swan$RequestHeader,

    /**
     * 默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     */
    method?: "GET" | "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE",

    /**
     * 如果设为json，会尝试对返回的数据做一次 JSON.parse  默认值为json
     */
    dataType?: string,

    /**
     * 设置响应的数据类型。合法值：text、arraybuffer  默认值为text
     * @version 1.7.0
     */
    responseType?: string,

    /**
     * 收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
     */
    success?: (res: swan$DataResponse) => void,
    fail?: (err: {
      errCode: number,
      errMsg: string
    }) => void
  } & swan$BaseOptions<swan$DataResponse>;

  /**
   * swan.request发起的是https请求。一个微信小程序，同时只能有5个网络请求连接。
   */
  declare function swan$request(options: swan$RequestOptions): swan$RequestTask;

  /**
   * 返回一个 requestTask 对象，通过 requestTask，可中断请求任务。
   */
  declare interface swan$RequestTask {
    abort(): void;
  }

  declare interface swan$UploadTask {
    /**
     * 监听上传进度变化
     * @version 1.4.0
     */
    onProgressUpdate(
      callback?: (res: {
        /**
         * 上传进度百分比
         */
        progress: number,

        /**
         * 已经上传的数据长度，单位 Bytes
         */
        totalBytesSent: number,

        /**
         * 预期需要上传的数据总长度，单位 Bytes
         */
        totalBytesExpectedToSend: number
      }) => void
    ): void;

    /**
     * 中断下载任务
     * @version 1.4.0
     */
    abort(): void;
  }

  declare type swan$UploadFileOptions = {
    /**
     * 开发者服务器 url
     */
    url: string,

    /**
     * 要上传文件资源的路径
     */
    filePath: string,

    /**
     * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     */
    name: string,

    /**
     * HTTP 请求 Header , header 中不能设置 Referer
     */
    header?: swan$RequestHeader,

    /**
     * HTTP 请求中其他额外的 form data
     */
    formData?: any
  } & swan$BaseOptions;

  declare interface swan$UploadFileResponse {
    data: string;
    statusCode: number;
  }

  /**
   * 将本地资源上传到开发者服务器。
   * 如页面通过 swan.chooseImage 等接口获取到一个本地资源的临时文件路径后，
   * 可通过此接口将本地资源上传到指定服务器。
   * 客户端发起一个 HTTPS POST 请求，
   * 其中 Content-Type 为 multipart/form-data 。
   */
  declare function swan$uploadFile(
    options: swan$UploadFileOptions
  ): swan$UploadTask;

  declare interface swan$DownloadTask {
    /**
     * 监听下载进度变化
     * @version 1.4.0
     */
    onProgressUpdate(
      callback?: (res: {
        /**
         * 下载进度百分比
         */
        progress: number,

        /**
         * 已经下载的数据长度，单位 Bytes
         */
        totalBytesWritten: number,

        /**
         * 预期需要下载的数据总长度，单位 Bytes
         */
        totalBytesExpectedToWrite: number
      }) => void
    ): void;

    /**
     * 中断下载任务
     * @version 1.4.0
     */
    abort(): void;
  }

  declare type swan$DownloadFileOptions = {
    /**
     * 下载资源的 url
     */
    url: string,

    /**
     * HTTP 请求 Header
     */
    header?: swan$RequestHeader,

    /**
     * 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
     */
    success?: (res: swan$TempFileResponse) => void
  } & swan$BaseOptions;

  /**
   * 下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，
   * 把下载到的资源根据 type 进行处理，并返回文件的本地临时路径。
   */
  declare function swan$downloadFile(
    options: swan$DownloadFileOptions
  ): swan$DownloadTask;

  declare type swan$ConnectSocketOptions = {
    /**
     * 开发者服务器接口地址，必须是 HTTPS 协议，且域名必须是后台配置的合法域名
     */
    url: string,

    /**
     * HTTP Header , header 中不能设置 Referer
     */
    header?: swan$RequestHeader,

    /**
     * 默认是GET，有效值为： OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     */
    method?: string,

    /**
     * 子协议数组
     * @version 1.4.0
     */
    protocols?: string[]
  } & swan$BaseOptions;

  /**
   * 创建一个 WebSocket 连接；
   * 一个微信小程序同时只能有一个 WebSocket 连接，
   * 如果当前已存在一个 WebSocket 连接，
   * 会自动关闭该连接，并重新创建一个 WebSocket 连接。
   */
  declare function swan$connectSocket(options: swan$ConnectSocketOptions): void;

  /**
   * 监听WebSocket连接打开事件。
   */
  declare function swan$onSocketOpen(callback: (res: any) => void): void;

  /**
   * 监听WebSocket错误。
   */
  declare function swan$onSocketError(callback: (error: any) => void): void;

  declare type swan$SendSocketMessageOptions = {
    /**
     * 需要发送的内容
     */
    data: string | ArrayBuffer
  } & swan$BaseOptions;

  /**
   * 通过 WebSocket 连接发送数据，需要先 swan.connectSocket，
   * 并在 swan.onSocketOpen 回调之后才能发送。
   */
  declare function swan$sendSocketMessage(
    options: swan$SendSocketMessageOptions
  ): void;

  /**
   * 监听WebSocket接受到服务器的消息事件。
   */
  declare function swan$onSocketMessage(
    callback: (res: swan$DataResponse) => void
  ): void;

  /**
   * 关闭WebSocket连接。
   */
  declare type swan$CloseSocketOptions = {
    code?: number,
    reason?: string
  } & swan$BaseOptions;

  /**
   * 关闭WebSocket连接。
   */
  declare function swan$closeSocket(options?: swan$CloseSocketOptions): void;

  /**
   * 监听WebSocket关闭。
   */
  declare function swan$onSocketClose(callback: (res: any) => void): void;

  declare var npm$namespace$swan$ai: {
    ocrIdCard: typeof swan$ai$ocrIdCard,
    ocrBankCard: typeof swan$ai$ocrBankCard,
    ocrDrivingLicense: typeof swan$ai$ocrDrivingLicense,
    ocrVehicleLicense: typeof swan$ai$ocrVehicleLicense,
    textReview: typeof swan$ai$textReview,
    textToAudio: typeof swan$ai$textToAudio,
    imageAudit: typeof swan$ai$imageAudit,
    advancedGeneralIdentify: typeof swan$ai$advancedGeneralIdentify,
    objectDetectIdentify: typeof swan$ai$objectDetectIdentify,
    carClassify: typeof swan$ai$carClassify,
    dishClassify: typeof swan$ai$dishClassify,
    logoClassify: typeof swan$ai$logoClassify,
    animalClassify: typeof swan$ai$animalClassify,
    plantClassify: typeof swan$ai$plantClassify,
    getVoiceRecognizer: typeof swan$ai$getVoiceRecognizer
  };

  /**
   * 用户向服务请求识别身份证，身份证识别包括正面和背面。
   */
  declare type swan$ai$ocrIdCardOptions = {
    image: string,
    detect_direction?: boolean,
    id_card_side?: string,
    detect_risk?: boolean,
    success?: (res: ai$ocrIdCardResponse) => void
  } & swan$BaseOptions;

  /**
   * 识别银行卡并返回卡号、发卡行和卡片类型。
   */
  declare type swan$ai$ocrBankCardOptions = {
    image: string,
    success?: (res: ai$ocrBankCardResponse) => void
  } & swan$BaseOptions;

  /**
   * 对机动车驾驶证所有关键字段进行识别。
   */
  declare type swan$ai$ocrDrivingLicenseOptions = {
    image: string,
    detect_direction?: boolean,
    unified_valid_period?: boolean,
    success?: (res: ai$ocrDrivingLicenseResponse) => void
  } & swan$BaseOptions;

  /**
   * 对机动车行驶证正本所有关键字段进行识别
   */
  declare type swan$ai$ocrVehicleLicenseOptions = {
    image: string,
    detect_direction?: boolean,
    accuracy?: string,
    success?: (res: ai$ocrVehicleLicenseResponse) => void
  } & swan$BaseOptions;

  declare interface swan$ai$ocrIdCardResponse {
    direction: number;
    image_status: string;
    risk_type: string;
    edit_tool: string;
    log_id: string;
    words_result_num: number;
    words_result: {
      [key: string]: {
        location: {
          left: number,
          top: number,
          width: number,
          height: number
        },
        words: string
      }
    };
  }

  declare interface swan$ai$ocrBankCardResponse {
    log_id: string;
    result: {
      bank_card_number: string,
      bank_name: string,
      bank_card_type: string
    };
  }

  declare interface swan$ai$ocrDrivingLicenseResponse {
    log_id: string;
    words_result_num: number;
    words_result: {
      [key: string]: {
        words: string
      }
    };
  }

  declare interface swan$ai$ocrVehicleLicenseResponse {
    log_id: string;
    words_result_num: number;
    words_result: {
      [key: string]: {
        words: string
      }
    };
  }

  /**
   * 用户向服务请求识别身份证，身份证识别包括正面和背面。
   */
  declare function swan$ai$ocrIdCard(options: swan$ai$ocrIdCardOptions): void;

  /**
   * 识别银行卡并返回卡号、发卡行和卡片类型。
   */
  declare function swan$ai$ocrBankCard(
    options: swan$ai$ocrBankCardOptions
  ): void;

  /**
   * 对机动车驾驶证所有关键字段进行识别。
   */
  declare function swan$ai$ocrDrivingLicense(
    options: swan$ai$ocrDrivingLicenseOptions
  ): void;

  /**
   * 对机动车行驶证正本所有关键字段进行识别
   */
  declare function swan$ai$ocrVehicleLicense(
    options: swan$ai$ocrVehicleLicenseOptions
  ): void;

  /**
   * 运用业界领先的深度学习技术，判断一段文本内容是否符合网络发文规范，实现
   * 自动化、智能化的文本审核。
   */
  declare type swan$ai$textReviewOptions = {
    content: string,
    success?: (res: ai$textReviewResponse) => void
  } & swan$BaseOptions;

  declare interface swan$ai$textReviewResponse {
    log_id: string;
    result: {
      spam: number,
      reject: any[],
      review: any[],
      pass: Array<{
        label: number,
        score: number,
        hit: string[]
      }>
    };
  }

  /**
   * 运用业界领先的深度学习技术，判断一段文本内容是否符合网络发文规范，实现
   * 自动化、智能化的文本审核。
   */
  declare function swan$ai$textReview(options: swan$ai$textReviewOptions): void;

  /**
   * 将文本转换为可以播放的mp3文件。
   */
  declare type swan$ai$textToAudioOptions = {
    tex: string,
    ctp?: string | number,
    lan?: string,
    spd?: string,
    pit?: string,
    vol?: string,
    per?: string,
    success?: (res: ai$textToAudioResponse) => void
  } & swan$BaseOptions;

  declare interface swan$ai$textToAudioResponse {
    filePath: string;
  }

  /**
   * 将文本转换为可以播放的mp3文件。
   */
  declare function swan$ai$textToAudio(
    options: swan$ai$textToAudioOptions
  ): void;

  /**
   * 自定义图像审核。
   */
  declare type swan$ai$imageAuditOptions = {
    image: string,
    imgUrl?: string,
    success?: (res: ai$imageAuditResponse) => void
  } & swan$BaseOptions;

  declare interface swan$ai$imageAuditResponse {
    log_id: string;
    conclusion: string;
    conclusionType: number;
    data: ai$imageAuditdata[];
  }

  declare interface swan$ai$imageAuditdata {
    type: number;
    msg: number;
    probability: number;
    stars: swan$ai$imageAuditdata[];
    words: number;
  }

  /**
   * 自定义图像审核。
   */
  declare function swan$ai$imageAudit(options: swan$ai$imageAuditOptions): void;

  /**
   * 通用物体及场景识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中的多个物体及场景标签。
   */
  declare type swan$ai$GeneralIdentifyOptions = {
    image: string,
    success?: (res: ai$GeneralIdentifyResponse) => void
  } & swan$BaseOptions;

  declare interface swan$ai$GeneralIdentifyResponse {
    log_id: number;
    result_num: number;
    result: Array<{
      keyword: string,
      score: number,
      root: string
    }>;
  }

  /**
   * 通用物体及场景识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图片中的多个物体及场景标签。
   */
  declare function swan$ai$advancedGeneralIdentify(
    options: swan$ai$GeneralIdentifyOptions
  ): void;

  /**
   * 用户向服务请求检测图像中的主体位置。
   */
  declare type swan$ai$DetectIdentifyOptions = {
    image: string,
    with_face?: number,
    success?: (res: ai$DetectIdentifyResponse) => void
  } & swan$BaseOptions;

  declare interface swan$ai$DetectIdentifyResponse {
    log_id: number;
    result: {
      left: number,
      top: number,
      width: number,
      height: number
    };
  }

  /**
   * 用户向服务请求检测图像中的主体位置。
   */
  declare function swan$ai$objectDetectIdentify(
    options: swan$ai$DetectIdentifyOptions
  ): void;

  /**
   * 用于检测一张车辆图片的具体车型，即对于输入的一张图片（可正常解码，且长
   * 宽比适宜），输出图片的车辆品牌及型号、颜色及年份、位置信息。
   */
  declare type swan$ai$carClassifyOptions = {
    image: string,
    color_result?: string,
    top_num?: number,
    success?: (res: ai$carClassifyResponse) => void
  } & swan$BaseOptions;

  declare interface swan$ai$carClassifyResponse {
    log_id: number;
    result: Array<{
      name: string,
      score: number,
      year: string
    }>;
    location_result: {
      left: number,
      top: number,
      width: number,
      height: number
    };
  }

  /**
   * 用于检测一张车辆图片的具体车型，即对于输入的一张图片（可正常解码，且长
   * 宽比适宜），输出图片的车辆品牌及型号、颜色及年份、位置信息。
   */
  declare function swan$ai$carClassify(
    options: swan$ai$carClassifyOptions
  ): void;

  /**
   * 用于菜品识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图
   * 片的菜品名称、卡路里信息、置信度。
   */
  declare type swan$ai$dishClassifyOptions = {
    image: string,
    filter_threshold?: number,
    top_num?: number,
    success?: (res: ai$dishClassifyResponse) => void
  } & swan$BaseOptions;

  declare interface swan$ai$dishClassifyResponse {
    log_id: number;
    result_num: number;
    result: Array<{
      name: string,
      calorie: number,
      probability: number
    }>;
  }

  /**
   * 用于菜品识别，即对于输入的一张图片（可正常解码，且长宽比适宜），输出图
   * 片的菜品名称、卡路里信息、置信度。
   */
  declare function swan$ai$dishClassify(
    options: swan$ai$dishClassifyOptions
  ): void;

  /**
   * 用于检测和识别图片中的品牌 LOGO 信息
   */
  declare type swan$ai$logoClassifyOptions = {
    image: string,
    custom_lib?: boolean,
    success?: (res: ai$logoClassifyResponse) => void
  } & swan$BaseOptions;

  declare interface swan$ai$logoClassifyResponse {
    log_id: number;
    result_num: number;
    result: Array<{
      type: number,
      name: number,
      probability: number,
      location: {
        left: number,
        top: number,
        width: number,
        height: number
      }
    }>;
  }

  /**
   * 用于检测和识别图片中的品牌 LOGO 信息
   */
  declare function swan$ai$logoClassify(
    options: swan$ai$logoClassifyOptions
  ): void;

  /**
   * 用于检测和识别图片中的动物信息
   */
  declare type swan$ai$animalClassifyOptions = {
    image: string,
    top_num?: number,
    success?: (res: ai$animalClassifyResponse) => void
  } & swan$BaseOptions;

  declare interface swan$ai$animalClassifyResponse {
    log_id: number;
    result_num: number;
    result: Array<{
      name: number,
      score: number
    }>;
  }

  /**
   * 用于检测和识别图片中的动物信息
   */
  declare function swan$ai$animalClassify(
    options: swan$ai$animalClassifyOptions
  ): void;

  /**
   * 用于检测和识别图片中的植物信息
   */
  declare type swan$ai$plantClassifyOptions = {
    image: string,
    success?: (res: ai$plantClassifyResponse) => void
  } & swan$BaseOptions;

  declare interface swan$ai$plantClassifyResponse {
    log_id: number;
    result: Array<{
      name: number,
      score: number
    }>;
  }

  /**
   * 用于检测和识别图片中的植物信息
   */
  declare function swan$ai$plantClassify(
    options: swan$ai$plantClassifyOptions
  ): void;

  /**
   * 获取全局唯一的语音识别器voiceRecognizer。
   */
  declare interface swan$ai$VoiceRecognizerStart {
    mode?: string;
    longSpeech?: boolean;
    context?: string;
  }

  declare interface swan$ai$VoiceRecognizeResponse {
    result: string;
  }

  declare interface swan$ai$VoiceErrorResponse {
    result: string;
  }

  declare interface swan$ai$VoiceRecognizerTask {
    start(options: swan$ai$VoiceRecognizerStart): void;
    stop(): void;
    cancel(): void;
    onStart(callback: () => void): void;
    onRecognize(callback: (res: swan$ai$VoiceRecognizeResponse) => void): void;
    onFinish(callback: (res: swan$DataResponse) => void): void;
    onError(callback: (res: swan$ai$VoiceErrorResponse) => void): void;
  }

  /**
   * 获取全局唯一的语音识别器voiceRecognizer。
   */
  declare function swan$ai$getVoiceRecognizer(): swan$ai$VoiceRecognizerTask;

  declare type swan$ImageSizeType = "original" | "compressed";

  declare type swan$ImageSourceType = "album" | "camera";

  declare type swan$VideoSourceType = "album" | "camera";

  declare type swan$CameraDevice = "front" | "back";

  declare interface swan$TempFile {
    /**
     * 本地文件路径
     */
    path: string;

    /**
     * 本地文件大小，单位：B
     */
    size: number;
  }

  declare interface swan$TempFilesData {
    /**
     * 文件的临时路径
     */
    tempFilePaths: string;

    /**
     * 图片的本地文件列表，每一项是一个 File 对象
     * @version 1.2.0
     */
    tempFiles: swan$TempFile[];
  }

  declare type swan$ChooseImageOptions = {
    /**
     * 最多可以选择的图片张数，默认9
     */
    count?: number,

    /**
     * original 原图，compressed 压缩图，默认二者都有
     */
    sizeType?: swan$ImageSizeType[],

    /**
     * album 从相册选图，camera 使用相机，默认二者都有
     */
    sourceType?: swan$ImageSourceType[],

    /**
     * 成功则返回图片的本地文件路径列表 tempFilePaths
     */
    success(res: swan$TempFilesData): void
  } & swan$BaseOptions;

  /**
   * 从本地相册选择图片或使用相机拍照。
   */
  declare function swan$chooseImage(options: swan$ChooseImageOptions): void;

  declare type swan$PreviewImageOptions = {
    /**
     * 当前显示图片的链接，不填则默认为 urls 的第一张
     */
    current?: string,

    /**
     * 需要预览的图片链接列表
     */
    urls: string[]
  } & swan$BaseOptions;

  /**
   * 预览图片。
   */
  declare function swan$previewImage(options: swan$PreviewImageOptions): void;

  declare type swan$GetImageInfoOptions = {
    /**
     * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
     */
    src: string
  } & swan$BaseOptions;

  /**
   * 获取图片信息
   */
  declare function swan$getImageInfo(options: swan$GetImageInfoOptions): void;

  declare type swan$SaveImageToPhotosAlbumOptions = {
    /**
     * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
     */
    filePath: string,
    success(res: {
      errMsg: string
    }): void
  } & swan$BaseOptions;

  /**
   * 保存图片到系统相册。
   * 需要用户授权 scope.writePhotosAlbum
   * @version 1.2.0
   */
  declare function swan$saveImageToPhotosAlbum(
    options: swan$SaveImageToPhotosAlbumOptions
  ): void;

  declare type swan$StartRecordAudioOptions = {
    /**
     * 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'}
     */
    success?: (res: swan$TempFileResponse) => void
  } & swan$BaseOptions;

  /**
   * 开始录音。当主动调用swan.stopRecord，
   * 或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。
   * 注：文件的临时路径，在小程序本次启动期间可以正常使用，
   * 如需持久保存，需在主动调用swan.saveFile，在小程序下次启动时才能访问得到。
   * @deprecated 1.6.0
   */
  declare function swan$startRecord(
    options: swan$StartRecordAudioOptions
  ): void;

  declare type swan$StopRecordAudioOptions = {
    success?: (res: swan$TempFileResponse) => void
  } & swan$BaseOptions;

  /**
   * 主动调用停止录音。
   */
  declare function swan$stopRecord(options?: swan$StopRecordAudioOptions): void;

  declare type swan$EncodeBitRate =
    | 8000
    | 11025
    | 12000
    | 16000
    | 22050
    | 24000
    | 32000
    | 44100
    | 48000;

  declare interface swan$RecorderManagerStartOptions {
    /**
     * 指定录音的时长，单位 ms
     * 如果传入了合法的 duration
     * 在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）
     */
    duration?: number;

    /**
     * 采样率，有效值 8000/16000/44100
     */
    sampleRate?: number;

    /**
     * 否 录音通道数，有效值 1/2
     */
    numberOfChannels?: number;

    /**
     * 编码码率
     * 采样率和码率有一定要求，具体有效值如下：
     * 采样率 编码码率
     * + 8000 16000 ~ 48000
     * + 11025 16000 ~ 48000
     * + 12000 24000 ~ 64000
     * + 16000 24000 ~ 96000
     * + 22050 32000 ~ 128000
     * + 24000 32000 ~ 128000
     * + 32000 48000 ~ 192000
     * + 44100 64000 ~ 320000
     * + 48000 64000 ~ 320000
     */
    encodeBitRate: number;

    /**
     * 音频格式，有效值 aac/mp3
     */
    format: string;
  }

  declare interface swan$OnRecorderManagerStopOptions {
    tempFilePath: string;
  }

  declare interface swan$OnFrameRecordedOptions {
    /**
     * 录音分片结果数据
     */
    frameBuffer: ArrayBuffer;

    /**
     * 当前帧是否正常录音结束前的最后一帧
     */
    isLastFrame: boolean;
  }

  declare interface swan$RecorderManager {
    /**
     * 开始录音
     */
    start(options?: swan$RecorderManagerStartOptions): void;

    /**
     * 暂停录音
     */
    pause(): void;

    /**
     * 继续录音
     */
    resume(): void;

    /**
     * 停止录音
     */
    stop(): void;

    /**
     * 录音开始事件
     */
    onStart(callback?: () => void): void;

    /**
     * 录音暂停事件
     */
    onPause(callback?: () => void): void;

    /**
     * 录音恢复事件
     */
    onResume(callback?: () => void): void;

    /**
     * 录音停止事件，会回调文件地址
     */
    onStop(
      callback?: (options: swan$OnRecorderManagerStopOptions) => void
    ): void;

    /**
     * 已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件
     */
    onFrameRecorded(
      callback?: (options: swan$OnFrameRecordedOptions) => void
    ): void;

    /**
     * 录音错误事件, 会回调错误信息
     */
    onError(callback?: (err: swan$ErrMsgResponse) => void): void;
  }

  /**
   * 获取全局唯一的录音管理器 recorderManager
   * @version 1.6.0
   */
  declare function swan$getRecorderManager(): swan$RecorderManager;

  declare type swan$PlayVoiceOptions = {
    /**
     * 需要播放的语音文件的文件路径
     */
    filePath: string
  } & swan$BaseOptions;

  /**
   * 开始播放语音，同时只允许一个语音文件正在播放，
   * 如果前一个语音文件还没播放完，将中断前一个语音播放。
   * @deprecated 1.6.0
   */
  declare function swan$playVoice(options: swan$PlayVoiceOptions): void;

  /**
   * 暂停正在播放的语音。
   * 再次调用swan.playVoice播放同一个文件时，会从暂停处开始播放。
   * 如果想从头开始播放，需要先调用 swan.stopVoice。
   * @deprecated 1.6.0
   */
  declare function swan$pauseVoice(): void;

  /**
   * 结束播放语音。
   * @deprecated 1.6.0
   */
  declare function swan$stopVoice(): void;

  declare interface swan$BackgroundAudioPlayerState {
    /**
     * 选定音频的长度（单位：s），只有在当前有音乐播放时返回
     */
    duration: number;

    /**
     * 选定音频的播放位置（单位：s），只有在当前有音乐播放时返回
     */
    currentPosition: number;

    /**
     * 播放状态（2：没有音乐在播放，1：播放中，0：暂停中）
     */
    status: number;

    /**
     * 音频的下载进度（整数，80 代表 80%），只有在当前有音乐播放时返回
     */
    downloadPercent: number;

    /**
     * 歌曲数据链接，只有在当前有音乐播放时返回
     */
    dataUrl: string;
  }

  declare type swan$GetBackgroundAudioPlayerStateOptions = {
    /**
     * 接口调用成功的回调函数
     */
    success?: (state: swan$BackgroundAudioPlayerState) => void,

    /**
     * 接口调用失败的回调函数
     */
    fail?: () => void,

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void
  } & swan$BaseOptions;

  /**
   * 获取音乐播放状态。
   * @deprecated 1.2.0
   */
  declare function swan$getBackgroundAudioPlayerState(
    options: swan$GetBackgroundAudioPlayerStateOptions
  ): void;

  declare type swan$PlayBackgroundAudioOptions = {
    /**
     * 音乐链接
     */
    dataUrl: string,

    /**
     * 音乐标题
     */
    title?: string,

    /**
     * 封面URL
     */
    coverImgUrl?: string
  } & swan$BaseOptions;

  /**
   * 播放音乐，同时只能有一首音乐正在播放。
   * @deprecated 1.2.0
   */
  declare function swan$playBackgroundAudio(
    options: swan$PlayBackgroundAudioOptions
  ): void;

  /**
   * 暂停播放音乐。
   * @deprecated 1.2.0
   */
  declare function swan$pauseBackgroundAudio(
    options?: swan$PlayBackgroundAudioOptions
  ): void;

  declare type swan$SeekBackgroundAudioOptions = {
    /**
     * 音乐位置，单位：秒
     */
    position: number
  } & swan$BaseOptions;

  /**
   * 控制音乐播放进度。
   * @deprecated 1.2.0
   */
  declare function swan$seekBackgroundAudio(
    options: swan$SeekBackgroundAudioOptions
  ): void;

  /**
   * 停止播放音乐。
   * @deprecated 1.2.0
   */
  declare function swan$stopBackgroundAudio(
    options?: swan$PlayBackgroundAudioOptions
  ): void;

  /**
   * 监听音乐播放。
   * @deprecated 1.2.0
   */
  declare function swan$onBackgroundAudioPlay(callback: () => void): void;

  /**
   * 监听音乐暂停。
   * @deprecated 1.2.0
   */
  declare function swan$onBackgroundAudioPause(callback: () => void): void;

  /**
   * 监听音乐停止。
   * @deprecated 1.2.0
   */
  declare function swan$onBackgroundAudioStop(callback: () => void): void;

  declare interface swan$BackgroundAudioManager {
    /**
     * 当前音频的长度（单位：s），只有在当前有合法的 src 时返回
     */
    +duration: number;

    /**
     * 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回
     */
    +currentTime: number;

    /**
     * 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放
     */
    +paused: boolean;

    /**
     * 音频的数据源，默认为空字符串，当设置了新的 src 时，会自动开始播放 ，目前支持的格式有 m4a, aac, mp3, wav
     */
    src?: string;

    /**
     * 音频开始播放的位置（单位：s）
     */
    startTime?: number;

    /**
     * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。 是
     */
    buffered: number;

    /**
     * 音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。
     */
    title?: string;

    /**
     * 专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
     */
    epname?: string;

    /**
     * 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
     */
    singer?: string;

    /**
     * 封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。
     */
    coverImgUrl?: string;

    /**
     * 播放
     */
    play(): void;

    /**
     * 暂停
     */
    pause(): void;

    /**
     * 停止
     */
    stop(): void;

    /**
     * 跳转到指定位置，单位 s
     */
    seek(position: number): void;

    /**
     * 背景音频进入可以播放状态，但不保证后面可以流畅播放
     */
    onCanplay(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 背景音频播放事件
     */
    onPlay(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 背景音频暂停事件
     */
    onPause(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 背景音频停止事件
     */
    onStop(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 背景音频自然播放结束事件
     */
    onEnded(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 背景音频播放进度更新事件
     */
    onTimeUpdate(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 背景音频播放错误事件
     */
    onError(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
     */
    onWaiting(callback: (res: swan$ErrCodeResponse) => void): void;
  }

  /**
   * 获取全局唯一的背景音频管理器 backgroundAudioManager。
   * @version 1.2.0
   */
  declare function swan$getBackgroundAudioManager(): swan$BackgroundAudioManager;

  /**
   * audioContext 通过 audioId 跟一个 <audio/> 组件绑定，通过它可以操作对应的 <audio/> 组件。
   */
  declare interface swan$AudioContext {
    /**
     * 音频的地址
     */
    setSrc(src: string): void;

    /**
     * 播放
     */
    play(): void;

    /**
     * 暂停
     */
    pause(): void;

    /**
     * 跳转到指定位置，单位 s
     */
    seek(position: number): void;
  }

  declare interface swan$InnerAudioContext {
    /**
     * 当前音频的长度（单位：s），只有在当前有合法的 src 时返
     */
    +duration: number;

    /**
     * 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6
     */
    +currentTime: number;

    /**
     * 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播
     */
    +paused: boolean;

    /**
     * 音频的数据链接，用于直接播放。
     */
    src?: string;

    /**
     * 开始播放的位置（单位：s），默认 0
     */
    startTime?: number;

    /**
     * 是否自动开始播放，默认 false
     */
    autoplay?: boolean;

    /**
     * 是否循环播放，默认 false
     */
    loop?: boolean;

    /**
     * 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音，默认值 true
     */
    obeyMuteSwitch?: boolean;

    /**
     * 音量，范围 0~1。
     */
    volume?: number;

    /**
     * 播放
     */
    play(): void;

    /**
     * 暂停
     */
    pause(): void;

    /**
     * 停止
     */
    stop(): void;

    /**
     * 跳转到指定位置，单位 s
     */
    seek(options: {
      position: number
    }): void;

    /**
     * 销毁当前实例
     */
    destroy(): void;

    /**
     * 音频进入可以播放状态，但不保证后面可以流畅播放
     */
    onCanplay(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 音频播放事件
     */
    onPlay(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 音频暂停事件
     */
    onPause(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 音频停止事件
     */
    onStop(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 音频自然播放结束事件
     */
    onEnded(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 音频播放进度更新事件
     */
    onTimeUpdate(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 音频播放错误事件
     */
    onError(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
     */
    onWaiting(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 音频进行 seek 操作事件
     */
    onSeeking(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 音频完成 seek 操作事件
     */
    onSeeked(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 取消监听 onCanplay 事件
     */
    offCanplay(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 取消监听 onPlay 事件
     */
    offPlay(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 取消监听 offPause 事件
     */
    offPause(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 取消监听 onStop 事件
     */
    offStop(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 取消监听 onEnded 事件
     */
    offEnded(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 取消监听 onTimeUpdate 事件
     */
    offTimeUpdate(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 取消监听 onError 事件
     */
    offError(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 取消监听 onWaiting 事件
     */
    offWaiting(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 取消监听 onSeeking  事件
     */
    offSeeking(callback: (res: swan$ErrCodeResponse) => void): void;

    /**
     * 取消监听 onSeeked  事件
     */
    offSeeked(callback: (res: swan$ErrCodeResponse) => void): void;
  }

  /**
   * 创建并返回内部 audio 上下文 innerAudioContext 对象。
   */
  declare function swan$createInnerAudioContext(): swan$InnerAudioContext;

  declare type swan$ChooseVideoOptions = {
    /**
     * album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
     */
    sourceType?: swan$VideoSourceType[],

    /**
     * 是否压缩所选的视频源文件，默认值为true，需要压缩
     */
    compressed?: boolean,

    /**
     * 拍摄视频最长拍摄时间，单位秒。最长支持60秒
     */
    maxDuration?: number,

    /**
     * 前置或者后置摄像头，默认为前后都有，即：['front', 'back']
     */
    camera?: swan$CameraDevice,

    /**
     * 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
     */
    success?: (res: swan$VideoData) => void
  } & swan$BaseOptions;

  /**
   * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
   */
  declare function swan$chooseVideo(options: swan$ChooseVideoOptions): void;

  declare type swan$SaveVideoOptions = {
    filePath: string,
    success(errMsg: string): void
  } & swan$BaseOptions;

  /**
   * 保存视频到系统相册。需要用户授权 scope.writePhotosAlbum
   */
  declare function swan$saveVideoToPhotosAlbum(
    options: swan$SaveVideoOptions
  ): void;

  declare interface swan$VideoContext {
    /**
     * 播放
     */
    play(): void;

    /**
     * 暂停
     */
    pause(): void;

    /**
     * 跳转到指定位置，单位 s
     */
    seek(position: number): void;

    /**
     * 发送弹幕，danmu 包含两个属性 text, color。
     */
    sendDanmu(danmu: {
      text: string,
      color: number | string
    }): void;

    /**
     * 设置倍速播放，支持的倍率有 0.5/0.8/1.0/1.25/1.5
     */
    playbackRate(rate: 0.5 | 0.8 | 1 | 1.25 | 1.5): void;

    /**
     * 进入全屏
     */
    requestFullScreen(): void;

    /**
     * 退出全屏
     */
    exitFullScreen(): void;

    /**
     * 显示状态栏，仅在iOS全屏下有效
     */
    showStatusBar(): void;

    /**
     * 隐藏状态栏，仅在iOS全屏下有效
     */
    hideStatusBar(): void;
  }

  declare interface swan$VideoData {
    /**
     * 选定视频的临时文件路径
     */
    tempFilePath: string;

    /**
     * 选定视频的时间长度
     */
    duration: number;

    /**
     * 选定视频的数据量大小
     */
    size: number;

    /**
     * 返回选定视频的长
     */
    height: number;

    /**
     * 返回选定视频的宽
     */
    width: number;
  }

  /**
   * 创建并返回 video 上下文 videoContext 对象
   * @param videoId video标签id <video  src="{{src}}" id="myVideo" ></video>
   */
  declare function swan$createVideoContext(videoId: string): swan$VideoContext;

  declare type swan$TakePhotoOptions = {
    /**
     * 成像质量，值为high, normal, low，默认normal
     */
    quality?: string,
    success?: (res: {
      tempImagePath: string
    }) => void
  } & swan$BaseOptions;

  declare interface swan$RecordResponse {
    tempThumbPath: string;
    tempVideoPath: string;
  }

  declare type swan$StartRecordOptions = {
    /**
     * 超过30s或页面onHide时会结束录像
     */
    timeoutCallback?: (res: swan$RecordResponse) => void
  } & swan$BaseOptions;

  declare type swan$StopRecordOptions = {
    success?: (res: swan$RecordResponse) => void
  } & swan$BaseOptions;

  declare interface swan$CameraContext {
    /**
     * 拍照，可指定质量，成功则返回图片
     */
    takePhoto(options: swan$TakePhotoOptions): void;

    /**
     * 开始录像
     */
    startRecord(options: swan$StartRecordOptions): void;

    /**
     * 结束录像，成功则返回封面与视频
     */
    stopRecord(options: swan$StopRecordOptions): void;
  }

  /**
   * 创建并返回 camera 上下文 cameraContext 对象
   * cameraContext 与页面的 camera 组件绑定
   * 一个页面只能有一个camera，通过它可以操作对应的 <camera/> 组件。
   * 在自定义组件下，第一个参数传入组件实例this，以操作组件内 <camera/> 组件
   * @version 1.6.0
   */
  declare function swan$createCameraContext(instance?: any): swan$CameraContext;

  declare type swan$RequestFullScreenOptions = {
    /**
     * 有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）
     */
    direction: number
  } & swan$BaseOptions;

  declare interface swan$LivePlayerContext {
    /**
     * 播放
     */
    play(options: swan$BaseOptions<>): void;

    /**
     * 停止
     */
    stop(options: swan$BaseOptions<>): void;

    /**
     * 静音
     */
    mute(options: swan$BaseOptions<>): void;

    /**
     * 暂停
     */
    pause(options: swan$BaseOptions<>): void;

    /**
     * 回复
     */
    resume(options: swan$BaseOptions<>): void;

    /**
     * 进入全屏
     */
    requestFullScreen(options: swan$RequestFullScreenOptions): void;

    /**
     * 退出全屏
     */
    exitFullScreen(options: swan$BaseOptions<>): void;
  }

  /**
   * 操作对应的 <live-player/> 组件。
   * 创建并返回 live-player 上下文 LivePlayerContext 对象。
   * 在自定义组件下，第二个参数传入组件实例this，以操作组件内 <live-player/> 组件
   * @version 1.7.0
   */
  declare function swan$createLivePlayerContext(
    id: string,
    instance: any
  ): swan$LivePlayerContext;

  declare interface swan$SavedFileData {
    /**
     * 文件的保存路径
     */
    savedFilePath: string;
  }

  declare type swan$SaveFileOptions = {
    /**
     * 需要保存的文件的临时路径
     */
    tempFilePath: string,

    /**
     * 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}
     */
    success?: (res: swan$SavedFileData) => void
  } & swan$BaseOptions;

  /**
   * 保存文件到本地。
   * 本地文件存储的大小限制为 10M
   */
  declare function swan$saveFile(options: swan$SaveFileOptions): void;

  declare interface swan$File {
    /**
     * 文件的本地路径
     */
    filePath: string;

    /**
     * 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
     */
    createTime: number;

    /**
     * 文件大小，单位B
     */
    size: number;
  }

  declare type swan$GetFileInfoOptions = {
    /**
     * 本地文件路径
     */
    filePath: string,

    /**
     * 计算文件摘要的算法，默认值 md5，有效值：md5，sha1
     */
    digestAlgorithm?: string,
    success?: (options: swan$GetFileInfoSuccess) => void
  } & swan$BaseOptions;

  declare interface swan$GetFileInfoSuccess {
    /**
     * 文件大小，单位：B
     */
    size: number;

    /**
     * 按照传入的 digestAlgorithm 计算得出的的文件摘要
     */
    digest: string;
  }

  /**
   * 获取文件信息
   * @version 1.4.0
   */
  declare function swan$getFileInfo(options: swan$GetFileInfoOptions): void;

  declare interface swan$GetSavedFileListData {
    /**
     * 文件列表
     */
    fileList: swan$File[];
  }

  declare type swan$GetSavedFileListOptions = {
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: swan$GetSavedFileListData) => void
  } & swan$BaseOptions;

  /**
   * 获取本地已保存的文件列表
   */
  declare function swan$getSavedFileList(
    options: swan$GetSavedFileListOptions
  ): void;

  declare interface swan$SavedFileInfoData {
    size: number;
    createTime: number;
  }

  declare type swan$GetSavedFileInfoOptions = {
    filePath: string,

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: swan$SavedFileInfoData) => void
  } & swan$BaseOptions;

  /**
   * 获取本地文件的文件信息
   */
  declare function swan$getSavedFileInfo(
    options: swan$GetSavedFileInfoOptions
  ): void;

  declare type swan$RemoveSavedFileOptions = {
    filePath: string,

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: {
      filePath: string
    }) => void
  } & swan$BaseOptions;

  /**
   * 删除本地存储的文件
   */
  declare function swan$removeSavedFile(
    options: swan$RemoveSavedFileOptions
  ): void;

  declare type swan$OpenDocumentOptions = {
    /**
     * 文件路径，可通过 downFile 获得
     */
    filePath: string,

    /**
     * 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx
     */
    fileType?: "doc" | "xls" | "ppt" | "pdf" | "docx" | "xlsx" | "pptx"
  } & swan$BaseOptions;

  /**
   * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
   */
  declare function swan$openDocument(options: swan$OpenDocumentOptions): void;

  declare type swan$SetStorageOptions = {
    /**
     * 本地缓存中的指定的 key
     */
    key: string,

    /**
     * 需要存储的内容
     */
    data: any
  } & swan$BaseOptions;

  /**
   * 将数据存储在本地缓存中指定的 key 中，
   * 会覆盖掉原来该 key 对应的内容，这是一个异步接口。
   */
  declare function swan$setStorage(options: swan$SetStorageOptions): void;

  /**
   * 将 data 存储在本地缓存中指定的 key 中，
   * 会覆盖掉原来该 key 对应的内容，这是一个同步接口。
   * @param key 本地缓存中的指定的 key
   * @param data 需要存储的内容
   */
  declare function swan$setStorageSync(key: string, data: any): void;

  declare type swan$GetStorageOptions = {
    /**
     * 本地缓存中的指定的 key
     */
    key: string,

    /**
     * 接口调用的回调函数,res = {data: key对应的内容}
     */
    success(res: swan$DataResponse): void
  } & swan$BaseOptions;

  /**
   * 从本地缓存中异步获取指定 key 对应的内容。
   */
  declare function swan$getStorage(options: swan$GetStorageOptions): void;

  /**
   * 从本地缓存中同步获取指定 key 对应的内容。
   */
  declare function swan$getStorageSync(key: string): any;

  declare interface swan$StorageInfo {
    /**
     * 当前storage中所有的key
     */
    keys: string[];

    /**
     * 当前占用的空间大小, 单位kb
     */
    currentSize: number;

    /**
     * 限制的空间大小，单位kb
     */
    limitSize: number;
  }

  declare type swan$GetStorageInfoOptions = {
    success(res: swan$StorageInfo): void
  } & swan$BaseOptions;

  /**
   * 异步获取当前storage的相关信息
   */
  declare function swan$getStorageInfo(
    options: swan$GetStorageInfoOptions
  ): void;

  declare function swan$getStorageInfoSync(): swan$StorageInfo;

  declare type swan$RemoveStorageOptions = {
    key: string,
    success?: (res: swan$DataResponse) => void
  } & swan$BaseOptions;

  declare function swan$removeStorage(options: swan$RemoveStorageOptions): void;

  declare function swan$removeStorageSync(key: string): swan$DataResponse;

  /**
   * 清理本地数据缓存。
   */
  declare function swan$clearStorage(): void;

  /**
   * 同步清理本地数据缓存
   */
  declare function swan$clearStorageSync(): void;

  declare interface swan$LocationData {
    /**
     * 纬度，浮点数，范围为-90~90，负数表示南纬
     */
    latitude: number;

    /**
     * 经度，浮点数，范围为-180~180，负数表示西经
     */
    longitude: number;

    /**
     * 速度，浮点数，单位m/s
     */
    speed: number;

    /**
     * 位置的精确度
     */
    accuracy: number;
  }

  declare type swan$GetLocationOptions = {
    /**
     * 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于swan.openLocation的坐标
     */
    type?: "wgs84" | "gcj02",
    altitude?: boolean,

    /**
     * 接口调用成功的回调函数，返回内容详见返回参数说明。
     */
    success?: (res: swan$LocationData) => void
  } & swan$BaseOptions;

  /**
   * 获取当前的地理位置、速度。
   */
  declare function swan$getLocation(options?: swan$GetLocationOptions): void;

  declare interface swan$ChooseLocationData {
    /**
     * 位置名称
     */
    name: string;

    /**
     * 详细地址
     */
    address: string;

    /**
     * 纬度，浮点数，范围为-90~90，负数表示南纬
     */
    latitude: number;

    /**
     * 经度，浮点数，范围为-180~180，负数表示西经
     */
    longitude: number;
  }

  declare type swan$ChooseLocationOptions = {
    success(res: swan$ChooseLocationData): void
  } & swan$BaseOptions;

  /**
   * 打开地图选择位置
   */
  declare function swan$chooseLocation(
    options: swan$ChooseLocationOptions
  ): void;

  declare type swan$OpenLocationOptions = {
    /**
     * 纬度，范围为-90~90，负数表示南纬
     */
    latitude: number,

    /**
     * 经度，范围为-180~180，负数表示西经
     */
    longitude: number,

    /**
     * 缩放比例，范围1~28，默认为28
     */
    scale?: number,

    /**
     * 位置名
     */
    name?: string,

    /**
     * 地址的详细说明
     */
    address?: string
  } & swan$BaseOptions;

  /**
   * 使用微信内置地图查看位置
   */
  declare function swan$openLocation(options: swan$OpenLocationOptions): void;

  declare type swan$GetCenterLocationOptions = {
    success(res: {
      longitude: number,
      latitude: number
    }): void
  } & swan$BaseOptions;

  declare type swan$TranslateMarkerOptions = {
    markerId: number,
    destination: {
      latitude: number,
      longitude: number
    },
    autoRotate: boolean,
    rotate: number,
    duration?: number,
    animationEnd?: () => void
  } & swan$BaseOptions;

  declare type swan$GetRegionOptions = {
    success(res: {
      southwest: {
        latitude: number,
        longitude: number
      },
      northeast: {
        latitude: number,
        longitude: number
      }
    }): void
  } & swan$BaseOptions;

  /**
   * mapContext 通过 mapId 跟一个 <map/> 组件绑定，通过它可以操作对应的 <map/> 组件。
   */
  declare interface swan$MapContext {
    /**
     * 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 swan.openLocation
     */
    getCenterLocation(
      options: swan$GetCenterLocationOptions
    ): swan$OpenLocationOptions;

    /**
     * 将地图中心移动到当前定位点，需要配合map组件的show-location使用
     */
    moveToLocation(): void;
    translateMarker(options: swan$TranslateMarkerOptions): void;
    includePoints(options: {
      points: Array<{
        latitude: number,
        longitude: number
      }>,
      padding?: number[]
    }): void;
    getRegion(options: swan$GetRegionOptions): void;
  }

  /**
   * 创建并返回 map 上下文 mapContext 对象
   */
  declare function swan$createMapContext(mapId: string): swan$MapContext;

  declare interface swan$SystemInfo {
    /**
     * 手机品牌
     */
    brand: string;

    /**
     * 手机型号
     */
    model: string;

    /**
     * 设备像素比
     */
    pixelRatio: number;

    /**
     * 屏幕宽度
     */
    screenWidth: number;

    /**
     * 屏幕高度
     */
    screenHeight: number;

    /**
     * 窗口宽度
     */
    windowWidth: number;

    /**
     * 窗口高度
     */
    windowHeight: number;

    /**
     * 状态栏的高度
     */
    statusBarHeight: number;

    /**
     * 微信设置的语言
     */
    language: string;

    /**
     * 微信版本号
     */
    version: string;

    /**
     * 操作系统版本
     */
    system: string;

    /**
     * 客户端平台
     */
    platform: string;

    /**
     * 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。
     */
    fontSizeSetting: number;

    /**
     * 客户端基础库版本
     */
    SDKVersion: string;
  }

  declare type swan$GetSystemInfoOptions = {
    /**
     * 成功获取系统信息的回调
     */
    success(res: swan$SystemInfo): void
  } & swan$BaseOptions;

  /**
   * 获取系统信息。
   */
  declare function swan$getSystemInfo(options: swan$GetSystemInfoOptions): void;

  declare function swan$getSystemInfoSync(): swan$SystemInfo;

  declare interface swan$EnvInfo {
    appKey: string;
    appName: string;
    lastAppURL: string;
    sdkVersion: string;
    scheme: string;
  }

  declare function swan$getEnvInfoSync(): swan$EnvInfo;

  /**
   * 判断小程序的API，回调，参数，组件等是否在当前版本可用。
   * String参数说明：
   * 使用 ${API}.${method}.${param}.${options}
   * 或者 ${component}.${attribute}.${option}方式来调用
   * 例如：
   * ${API} 代表 API 名字
   * ${method} 代表调用方式，有效值为return, success, object, callback
   * ${param} 代表参数或者返回值
   * ${options} 代表参数的可选值
   * ${component} 代表组件名字
   * ${attribute} 代表组件属性
   * ${option} 代表组件属性的可选值
   */
  declare function swan$canIUse(api: string): boolean;

  declare function swan$onMemoryWarning(
    callback: (res: {
      /**
       * TRIM_MEMORY_RUNNING_MODERATE = 5
       * TRIM_MEMORY_RUNNING_LOW = 10
       * TRIM_MEMORY_RUNNING_CRITICAL = 15
       */
      level: number
    }) => void
  ): void;

  declare type swan$networkType =
    | "2g"
    | "3g"
    | "4g"
    | "wifi"
    | "unknown"
    | "none";

  declare interface swan$NetworkTypeData {
    /**
     * 返回网络类型2g，3g，4g，wifi
     */
    networkType: swan$networkType;
  }

  declare type swan$GetNetworkTypeOptions = {
    /**
     * 接口调用成功，返回网络类型 networkType
     */
    success(res: swan$NetworkTypeData): void
  } & swan$BaseOptions;

  /**
   * 获取网络类型。
   */
  declare function swan$getNetworkType(
    options: swan$GetNetworkTypeOptions
  ): void;

  /**
   * 监听网络状态变化。
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  declare function swan$onNetworkStatusChange(
    callback: (res: {
      isConnected: boolean,
      networkType: swan$networkType
    }) => void
  ): void;

  declare interface swan$AccelerometerData {
    /**
     * X 轴
     */
    x: number;

    /**
     * Y 轴
     */
    y: number;

    /**
     * Z 轴
     */
    z: number;
  }

  declare type swan$AccelerometerChangeCallback = (
    res: swan$AccelerometerData
  ) => void;

  /**
   * 监听重力感应数据，频率：5次/秒
   */
  declare function swan$onAccelerometerChange(
    callback: swan$AccelerometerChangeCallback
  ): void;

  declare type swan$AccelerometerOptions = {
    interval: "game" | "ui" | "normal"
  } & swan$BaseOptions;

  /**
   * 开始监听加速度数据。
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  declare function swan$startAccelerometer(
    options: swan$AccelerometerOptions
  ): void;

  /**
   * 停止监听加速度数据。
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  declare function swan$stopAccelerometer(
    options?: swan$AccelerometerOptions
  ): void;

  declare interface swan$CompassData {
    /**
     * 面对的方向度数
     */
    direction: number;
  }

  declare type swan$CompassChangeCallback = (res: swan$CompassData) => void;

  /**
   * 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用swan.stopCompass停止监听。
   */
  declare function swan$onCompassChange(
    callback: swan$CompassChangeCallback
  ): void;

  declare type swan$CompassOptions = swan$BaseOptions<>;

  /**
   * 开始监听罗盘数据。
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  declare function swan$startCompass(options?: swan$CompassOptions): void;

  declare function swan$stopCompass(options?: swan$CompassOptions): void;

  declare type swan$MakePhoneCallOptions = {
    /**
     * 需要拨打的电话号码
     */
    phoneNumber: string
  } & swan$BaseOptions;

  /**
   * 拨打电话
   */
  declare function swan$makePhoneCall(options: swan$MakePhoneCallOptions): void;

  declare type swan$scanType = "qrCode" | "barCode";

  declare interface swan$ScanCodeData {
    /**
     * 所扫码的内容
     */
    result: string;

    /**
     * 所扫码的类型
     */
    scanType: swan$scanType;

    /**
     * 所扫码的字符集
     */
    charSet: string;

    /**
     * 当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path
     */
    path: string;
  }

  declare type swan$ScanCodeOptions = {
    /**
     * 是否只能从相机扫码，不允许从相册选择图片
     * @version 1.2.0
     */
    onlyFromCamera?: boolean,

    /**
     * 扫码类型，参数类型是数组
     * 二维码是'qrCode'，一维码是'barCode'，DataMatrix是‘datamatrix’，pdf417是‘pdf417’。
     * @version 1.7.0
     */
    scanType?: string[],
    success(res: swan$ScanCodeData): void
  } & swan$BaseOptions;

  /**
   * 调起客户端扫码界面，扫码成功后返回对应的结果
   */
  declare function swan$scanCode(options: swan$ScanCodeOptions): void;

  declare type swan$SetClipboardDataOptions = {
    data: string
  } & swan$BaseOptions;

  /**
   * 设置系统剪贴板的内容
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  declare function swan$setClipboardData(
    options: swan$SetClipboardDataOptions
  ): void;

  /**
   * 获取系统剪贴板内容
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  declare function swan$getClipboardData(options: swan$BaseOptions<>): void;

  declare type swan$OpenBluetoothAdapterOptions = {
    success(res: any): void
  } & swan$BaseOptions;

  /**
   * 初始化蓝牙适配器
   * @version 1.1.0
   */
  declare function swan$openBluetoothAdapter(
    options: swan$OpenBluetoothAdapterOptions
  ): void;

  declare type swan$CloseBluetoothAdapterOptions = {
    success(res: any): void
  } & swan$BaseOptions;

  /**
   * 关闭蓝牙模块。调用该方法将断开所有已建立的链接并释放系统资源
   * @version 1.1.0
   */
  declare function swan$closeBluetoothAdapter(
    options: swan$CloseBluetoothAdapterOptions
  ): void;

  declare interface swan$BluetoothAdapterState {
    /**
     * 蓝牙适配器是否可用
     */
    available: boolean;

    /**
     * 蓝牙适配器是否处于搜索状态
     */
    discovering: boolean;
  }

  declare type swan$BluetoothAdapterStateData = {
    /**
     * 蓝牙适配器信息
     */
    adapterState: swan$BluetoothAdapterState
  } & swan$ErrMsgResponse;

  declare type swan$GetBluetoothAdapterStateOptions = {
    success(res: swan$BluetoothAdapterStateData): void
  } & swan$BaseOptions;

  /**
   * 获取本机蓝牙适配器状态
   * @version 1.1.0
   */
  declare function swan$getBluetoothAdapterState(
    options: swan$GetBluetoothAdapterStateOptions
  ): void;

  /**
   * 监听蓝牙适配器状态变化事件
   * @version 1.1.0
   */
  declare function swan$onBluetoothAdapterStateChange(
    callback: (res: swan$BluetoothAdapterState) => void
  ): void;

  declare type swan$StopBluetoothDevicesDiscoveryOptions = {
    success(res: swan$ErrMsgResponse): void
  } & swan$BaseOptions;

  /**
   * 停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。
   * @version 1.1.0
   */
  declare function swan$stopBluetoothDevicesDiscovery(
    options: swan$StopBluetoothDevicesDiscoveryOptions
  ): void;

  /**
   * 蓝牙设备信息
   */
  declare interface swan$BluetoothDevice {
    /**
     * 蓝牙设备名称，某些设备可能没有
     */
    name: string;

    /**
     * 用于区分设备的 id
     */
    deviceId: string;

    /**
     * int 当前蓝牙设备的信号强度
     */
    RSSI: number;

    /**
     * 当前蓝牙设备的广播内容
     */
    advertisData: ArrayBuffer;
  }

  declare type swan$GetBluetoothDevicesOptions = {
    success(
      res: {
        devices: swan$BluetoothDevice[]
      } & swan$ErrMsgResponse
    ): void
  } & swan$BaseOptions;

  /**
   * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
   */
  declare function swan$getBluetoothDevices(
    options: swan$GetBluetoothDevicesOptions
  ): void;

  /**
   * 监听寻找到新设备的事件
   * @version 1.1.0
   */
  declare function swan$onBluetoothDeviceFound(
    callback: (res: {
      devices: swan$BluetoothDevice[]
    }) => void
  ): void;

  declare type swan$GetConnectedBluetoothDevicesOptions = {
    services: string[],
    success(
      res: {
        devices: swan$BluetoothDevice[]
      } & swan$ErrMsgResponse
    ): void
  } & swan$BaseOptions;

  /**
   * 根据 uuid 获取处于已连接状态的设备
   * @version 1.1.0
   */
  declare function swan$getConnectedBluetoothDevices(
    options: swan$GetConnectedBluetoothDevicesOptions
  ): void;

  declare type swan$CreateBLEConnectionOptions = {
    /**
     * 蓝牙设备 id，参考 getDevices 接口
     */
    deviceId: string,
    success(res: swan$ErrMsgResponse): void
  } & swan$BaseOptions;

  /**
   * 低功耗蓝牙接口
   * @version 1.1.0
   */
  declare function swan$createBLEConnection(
    options: swan$CreateBLEConnectionOptions
  ): void;

  declare type swan$CloseBLEConnectionOptions = {
    /**
     * 蓝牙设备 id，参考 getDevices 接口
     */
    deviceId: string,
    success(res: swan$ErrMsgResponse): void
  } & swan$BaseOptions;

  /**
   * 断开与低功耗蓝牙设备的连接
   * @version 1.1.0
   */
  declare function swan$closeBLEConnection(
    options: swan$CloseBLEConnectionOptions
  ): void;

  declare type swan$GetBLEDeviceServicesOptions = {
    /**
     * 蓝牙设备 id，参考 getDevices 接口
     */
    deviceId: string,

    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success(
      res: {
        services: Array<{
          uuid: string,
          isPrimary: boolean
        }>
      } & swan$ErrMsgResponse
    ): void
  } & swan$BaseOptions;

  /**
   * 获取蓝牙设备所有 service（服务）
   */
  declare function swan$getBLEDeviceServices(
    options: swan$GetBLEDeviceServicesOptions
  ): void;

  declare type swan$GetBLEDeviceCharacteristicsOptions = {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string,

    /**
     * 蓝牙服务 uuid
     */
    serviceId: string,

    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success(
      res: {
        characteristics: Array<{
          uuid: string,
          properties: Array<{
            /**
             * 该特征值是否支持 read 操作
             */
            read: boolean,

            /**
             * 该特征值是否支持 write 操作
             */
            write: boolean,

            /**
             * 该特征值是否支持 notify 操作
             */
            notify: boolean,

            /**
             * 该特征值是否支持 indicate 操作
             */
            indicate: boolean
          }>
        }>
      } & swan$ErrMsgResponse
    ): void
  } & swan$BaseOptions;

  /**
   * 获取蓝牙设备所有 characteristic（特征值）
   */
  declare function swan$getBLEDeviceCharacteristics(
    options: swan$GetBLEDeviceCharacteristicsOptions
  ): void;

  declare type swan$WriteBLECharacteristicValue = {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string,

    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId: string,

    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string,

    /**
     * 蓝牙设备特征值对应的二进制值
     */
    value: ArrayBuffer,
    fail?: () => void,
    success(res: swan$ErrMsgResponse): void,
    complete?: () => void
  } & swan$BaseOptions;

  declare type swan$NotifyBLECharacteristicValueChanged = {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string,

    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId: string,

    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string,

    /**
     * true: 启用 notify; false: 停用 notify
     */
    state: boolean,
    success(res: swan$ErrMsgResponse): void
  } & swan$BaseOptions;

  declare type swan$ReadBLECharacteristicValue = {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string,

    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId: string,

    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string,
    success(
      res: {
        characteristic: {
          /**
           * 蓝牙设备特征值的 uuid
           */
          characteristicId: string,

          /**
           * 蓝牙设备特征值对应服务的 uuid
           */
          serviceId: string,

          /**
           * 蓝牙设备特征值对应的二进制值
           */
          value: ArrayBuffer
        }
      } & swan$ErrMsgResponse
    ): void
  } & swan$BaseOptions;

  /**
   * 读取低功耗蓝牙设备的特征值的二进制数据值。
   * 注意：必须设备的特征值支持read才可以成功调用，具体参照 characteristic 的 properties 属性
   */
  declare function swan$readBLECharacteristicValue(
    options: swan$ReadBLECharacteristicValue
  ): void;

  /**
   * 向低功耗蓝牙设备特征值中写入二进制数据。
   * 注意：必须设备的特征值支持write才可以成功调用，具体参照 characteristic 的 properties 属性
   * tips: 并行调用多次读写接口存在读写失败的可能性
   */
  declare function swan$writeBLECharacteristicValue(
    options: swan$WriteBLECharacteristicValue
  ): void;

  /**
   * 启用低功耗蓝牙设备特征值变化时的 notify 功能。
   * 注意：必须设备的特征值支持notify才可以成功调用，具体参照 characteristic 的 properties 属性
   * 另外，必须先启用notify才能监听到设备 characteristicValueChange 事件
   */
  declare function swan$notifyBLECharacteristicValueChanged(
    options: swan$NotifyBLECharacteristicValueChanged
  ): void;

  /**
   * 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。
   */
  declare function swan$onBLEConnectionStateChanged(
    callback: (res: {
      /**
       * 蓝牙设备 id，参考 device 对象
       */
      deviceId: string,

      /**
       * 连接目前的状态
       */
      connected: boolean
    }) => void
  ): void;

  /**
   * 监听低功耗蓝牙设备的特征值变化。必须先启用notify接口才能接收到设备推送的notification。
   */
  declare function swan$onBLECharacteristicValueChange(
    callback: (res: {
      /**
       * 蓝牙设备 id，参考 device 对象
       */
      deviceId: string,

      /**
       * 特征值所属服务 uuid
       */
      serviceId: string,

      /**
       * 特征值 uuid
       */
      characteristicId: string,

      /**
       * 特征值最新的值
       */
      value: ArrayBuffer
    }) => void
  ): void;

  declare type swan$StartBeaconDiscoveryOptions = {
    /**
     * iBeacon设备广播的 uuids
     */
    uuids: string | string[],
    success?: (res: swan$ErrMsgResponse) => void
  } & swan$BaseOptions;

  declare type swan$StopBeaconDiscoveryOptions = {
    fail?: () => void,
    success?: (res: swan$ErrMsgResponse) => void,
    complete?: () => void
  } & swan$BaseOptions;

  /**
   * 开始搜索附近的iBeacon设备
   * @version 1.2.0
   */
  declare function swan$startBeaconDiscovery(
    options: swan$StartBeaconDiscoveryOptions
  ): void;

  /**
   * 停止搜索附近的iBeacon设备
   * @version 1.2.0
   */
  declare function swan$stopBeaconDiscovery(
    options: swan$StopBeaconDiscoveryOptions
  ): void;

  declare interface swan$Beacon {
    /**
     * iBeacon 设备广播的 uuid
     */
    uuid: string;

    /**
     * iBeacon 设备的主 id
     */
    major: string;

    /**
     * iBeacon 设备的次 id
     */
    minor: string;

    /**
     * 表示设备距离的枚举值
     */
    proximity: number;

    /**
     * iBeacon 设备的距离
     */
    accuracy: number;

    /**
     * 表示设备的信号强度
     */
    rssi: number;
  }

  declare interface swan$GetBeaconsSuccess {
    beacons: swan$Beacon[];
    errMsg: string;
  }

  declare type swan$GetBeaconsOptions = {
    success?: (options: swan$GetBeaconsSuccess) => void
  } & swan$BaseOptions;

  /**
   * 获取所有已搜索到的iBeacon设备
   * @version 1.2.0
   */
  declare function swan$getBeacons(options: swan$GetBeaconsOptions): void;

  /**
   * 监听 iBeacon 设备的更新事件
   * @version 1.2.0
   */
  declare function swan$onBeaconUpdate(
    callback?: (beacons: swan$Beacon[]) => void
  ): void;

  /**
   * 监听 iBeacon 服务的状态变化
   * @version 1.2.0
   */
  declare function swan$onBeaconServiceChange(
    callback?: (available: boolean, discovering: boolean) => void
  ): void;

  declare type swan$SetScreenBrightnessOptions = {
    /**
     * 屏幕亮度值，范围 0~1，0 最暗，1 最亮
     */
    value: number
  } & swan$BaseOptions;

  /**
   * 设置屏幕亮度
   * @version 1.2.0
   */
  declare function swan$setScreenBrightness(
    options: swan$SetScreenBrightnessOptions
  ): void;

  declare type swan$GetScreenBrightnessOptions = {
    /**
     * 屏幕亮度值，范围 0~1，0 最暗，1 最亮
     */
    success(value: number): void
  } & swan$BaseOptions;

  /**
   * 获取屏幕亮度
   * @version 1.2.0
   */
  declare function swan$getScreenBrightness(
    options?: swan$GetScreenBrightnessOptions
  ): void;

  declare type swan$SetKeepScreenOnOptions = {
    /**
     * 是否保持屏幕常亮
     */
    keepScreenOn: boolean,
    success?: (res: {
      errMsg: string
    }) => void
  } & swan$BaseOptions;

  /**
   * 设置是否保持常亮状态。
   * 仅在当前小程序生效，离开小程序后设置失效。
   * @version 1.4.0
   */
  declare function swan$setKeepScreenOn(
    options?: swan$SetKeepScreenOnOptions
  ): void;

  /**
   * 使手机发生较长时间的振动（400ms）
   * @version 1.2.0
   */
  declare function swan$vibrateLong(options?: swan$BaseOptions<>): void;

  /**
   * 使手机发生较短时间的振动（15ms）
   * @version 1.2.0
   */
  declare function swan$vibrateShort(options?: swan$BaseOptions<>): void;

  /**
   * 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件
   * @version 1.4.0
   */
  declare function swan$onUserCaptureScreen(
    callback?: (res: any) => void
  ): void;

  declare type swan$PhoneContact = {
    /**
     * 头像本地文件路径
     */
    photoFilePath?: string,

    /**
     * 昵称
     */
    nickName?: string,

    /**
     * 姓氏
     */
    lastName?: string,

    /**
     * 中间名
     */
    middleName?: string,

    /**
     * 名字
     */
    firstName: string,

    /**
     * 备注
     */
    remark?: string,

    /**
     * 手机号
     */
    mobilePhoneNumber?: string,

    /**
     * 微信号
     */
    weChatNumber?: string,

    /**
     * 联系地址国家
     */
    addressCountry?: string,

    /**
     * 联系地址省份
     */
    addressState?: string,

    /**
     * 联系地址城市
     */
    addressCity?: string,

    /**
     * 联系地址街道
     */
    addressStreet?: string,

    /**
     * 联系地址邮政编码
     */
    addressPostalCode?: string,

    /**
     * 公司
     */
    organization?: string,

    /**
     * 职位
     */
    title?: string,

    /**
     * 工作传真
     */
    workFaxNumber?: string,

    /**
     * 工作电话
     */
    workPhoneNumber?: string,

    /**
     * 公司电话
     */
    hostNumber?: string,

    /**
     * 电子邮件
     */
    email?: string,

    /**
     * 网站
     */
    url?: string,

    /**
     * 工作地址国家
     */
    workAddressCountry?: string,

    /**
     * 工作地址省份
     */
    workAddressState?: string,

    /**
     * 工作地址城市
     */
    workAddressCity?: string,

    /**
     * 工作地址街道
     */
    workAddressStreet?: string,

    /**
     * 工作地址邮政编码
     */
    workAddressPostalCode?: string,

    /**
     * 住宅传真
     */
    homeFaxNumber?: string,

    /**
     * 住宅电话
     */
    homePhoneNumber?: string,

    /**
     * 住宅地址国家
     */
    homeAddressCountry?: string,

    /**
     * 住宅地址省份
     */
    homeAddressState?: string,

    /**
     * 住宅地址城市
     */
    homeAddressCity?: string,

    /**
     * 住宅地址街道
     */
    homeAddressStreet?: string,

    /**
     * 住宅地址邮政编码
     */
    homeAddressPostalCode?: string
  } & swan$BaseOptions;

  /**
   * 增加 手机联系人
   * 调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式
   * 写入手机系统通讯录
   * 完成手机通讯录联系人和联系方式的增加。
   * @version 1.2.0
   */
  declare function swan$addPhoneContact(options: swan$PhoneContact): void;

  /**
   * 初始化 Wi-Fi 模块。
   * @version 1.6.0
   */
  declare function swan$startWifi(options?: swan$BaseOptions<>): void;

  /**
   * 关闭 Wi-Fi 模块。
   * @version 1.6.0
   */
  declare function swan$stopWifi(options?: swan$BaseOptions<>): void;

  declare type swan$ConnectWiFiOptions = {
    /**
     * Wi-Fi 设备ssid
     */
    SSID: string,

    /**
     * Wi-Fi 设备bssid
     */
    BSSID: string,

    /**
     * Wi-Fi 设备密码
     */
    password?: string
  } & swan$BaseOptions;

  /**
   * 连接 Wi-Fi。
   * 若已知 Wi-Fi 信息，可以直接利用该接口连接。
   * 仅 Android 与 iOS 11 以上版本支持。
   * @version 1.6.0
   */
  declare function swan$connectWifi(options?: swan$ConnectWiFiOptions): void;

  /**
   * 请求获取 Wi-Fi 列表
   * 在 onGetWifiList 注册的回调中返回 wifiList 数据。
   * iOS 将跳转到系统的 Wi-Fi 界面，Android 不会跳转。
   * iOS 11.0 及 iOS 11.1 两个版本因系统问题，该方法失效。但在 iOS 11.2 中已修复。
   * @version 1.6.0
   */
  declare function swan$getWifiList(options?: swan$BaseOptions<>): void;

  declare interface swan$WiFi {
    /**
     * Wi-Fi 的SSID
     */
    SSID: string;

    /**
     * Wi-Fi 的BSSID
     */
    BSSID: string;

    /**
     * Wi-Fi 是否安全
     */
    secure: boolean;

    /**
     * Wi-Fi 信号强度
     */
    signalStrength: number;
  }

  declare interface swan$GetWifiListOptions {
    /**
     * Wi-Fi 列表数据
     */
    wifiList: swan$WiFi[];
  }

  /**
   * 监听在获取到 Wi-Fi 列表数据时的事件，在回调中将返回 wifiList。
   * @version 1.6.0
   */
  declare function swan$onGetWifiList(
    callback?: (res: swan$GetWifiListOptions) => void
  ): void;

  declare interface swan$SetWifiList {
    /**
     * Wi-Fi 设备ssid
     */
    SSID: string;

    /**
     * Wi-Fi 设备bssid
     */
    BSSID: string;

    /**
     * Wi-Fi 设备密码
     */
    password: string;
  }

  declare type swan$SetWifiListOptions = {
    /**
     * 提供预设的 Wi-Fi 信息列表
     */
    wifiList: swan$SetWifiList[]
  } & swan$BaseOptions;

  /**
   * iOS特有接口 在 onGetWifiList 回调后，利用接口设置 wifiList 中 AP 的相关信息。
   * 注意：
   * + 该接口只能在 onGetWifiList 回调之后才能调用。
   * + 此时客户端会挂起，等待小程序设置 Wi-Fi 信息，请务必尽快调用该接口，若无数据请传入一个空数组。
   * + 有可能随着周边 Wi-Fi 列表的刷新，单个流程内收到多次带有存在重复的 Wi-Fi 列表的回调。
   * @version 1.6.0
   */
  declare function swan$setWifiList(options: swan$SetWifiListOptions): void;

  /**
   * 监听连接上 Wi-Fi 的事件。
   * @version 1.6.0
   */
  declare function swan$onWifiConnected(
    callback?: (wifi: swan$WiFi) => void
  ): void;

  declare type swan$GetConnectedWifiOptions = {
    success(wifi: swan$WiFi): void
  } & swan$BaseOptions;

  /**
   * 获取已连接中的 Wi-Fi 信息
   * @version 1.6.0
   */
  declare function swan$getConnectedWifi(
    options?: swan$GetConnectedWifiOptions
  ): void;

  declare type swan$ToastOptions = {
    /**
     * 提示的内容
     */
    title: string,

    /**
     * 图标，只支持"success"、"loading"
     */
    icon?: "success" | "loading",

    /**
     * 自定义图标的本地路径，image 的优先级高于 icon
     */
    image?: string,

    /**
     * 提示的延迟时间，单位毫秒，默认：1500
     */
    duration?: number,

    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean
  } & swan$BaseOptions;

  /**
   * 显示消息提示框
   */
  declare function swan$showToast(options: swan$ToastOptions): void;

  declare function swan$hideToast(): void;

  declare type swan$LoadingOptions = {
    /**
     * 提示的内容
     */
    title: string,

    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean | "true" | "false"
  } & swan$BaseOptions;

  /**
   * 显示 loading 提示框, 需主动调用 swan.hideLoading 才能关闭提示框
   */
  declare function swan$showLoading(options: swan$LoadingOptions): void;

  /**
   * 隐藏消息提示框
   */
  declare function swan$hideLoading(): void;

  declare type swan$ModalOptions = {
    /**
     * 提示的标题
     */
    title: string,

    /**
     * 提示的内容
     */
    content: string,

    /**
     * 是否显示取消按钮，默认为 true
     */
    showCancel?: boolean,

    /**
     * 取消按钮的文字，默认为"取消"，最多 4 个字符
     */
    cancelText?: string,

    /**
     * 取消按钮的文字颜色，默认为"#000000"
     */
    cancelColor?: string,

    /**
     * 确定按钮的文字，默认为"确定"，最多 4 个字符
     */
    confirmText?: string,

    /**
     * 确定按钮的文字颜色，默认为"#3CC51F"
     */
    confirmColor?: string,
    success?: (res: {
      /**
       * 为 true 时，表示用户点击了确定按钮
       */
      confirm: boolean,

      /**
       * 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
       */
      cancel: boolean
    }) => void
  } & swan$BaseOptions;

  /**
   * 显示模态弹窗
   */
  declare function swan$showModal(options: swan$ModalOptions): void;

  declare type swan$ActionSheetOptions = {
    /**
     * 按钮的文字数组，数组长度最大为6个
     */
    itemList: string[],

    /**
     * 按钮的文字颜色，默认为"#000000"
     */
    itemColor?: string,

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: {
      /**
       * 用户点击的按钮，从上到下的顺序，从0开始
       */
      tapIndex: number
    }) => void
  } & swan$BaseOptions;

  /**
   * 显示操作菜单
   */
  declare function swan$showActionSheet(options: swan$ActionSheetOptions): void;

  declare type swan$SetTopBarTextOptions = {
    /**
     * 置顶栏文字内容
     */
    text: string
  } & swan$BaseOptions;

  /**
   * 动态设置置顶栏文字内容
   * 只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效
   * 只有在用户将这个小程序置顶后才换上设置的文字内容。
   * 注意：调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调
   * fail，errMsg："setTopBarText: fail invoke too frequently"
   * @version 1.4.3
   */
  declare function swan$setTopBarText(
    options?: swan$SetTopBarTextOptions
  ): void;

  declare type swan$SetNavigationBarTitleOptions = {
    /**
     * 页面标题
     */
    title: string
  } & swan$BaseOptions;

  /**
   * 动态设置当前页面的标题。
   * @version 1.4.3
   */
  declare function swan$setNavigationBarTitle(
    options: swan$SetNavigationBarTitleOptions
  ): void;

  declare type swan$SetNavigationBarColorOptions = {
    /**
     * 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
     */
    frontColor: "#ffffff" | "#000000",

    /**
     * 背景颜色值，有效值为十六进制颜色
     */
    backgroundColor: string,

    /**
     * 动画效果
     */
    animation?: {
      duration?: number,

      /**
       * 动画变化方式，默认 linear
       * 值	说明
       * 有效值：
       * linear	动画从头到尾的速度是相同的。
       * easeIn	动画以低速开始
       * easeOut	动画以低速结束。
       * easeInOut	动画以低速开始和结束。
       */
      timingFunc?: "linear" | "easeIn" | "easeOut" | "easeInOut"
    }
  } & swan$BaseOptions;

  /**
   * 设置导航颜色
   * @version 1.4.3
   */
  declare function swan$setNavigationBarColor(
    options: swan$SetNavigationBarColorOptions
  ): void;

  /**
   * 在当前页面显示导航条加载动画。
   * @version 1.4.3
   */
  declare function swan$showNavigationBarLoading(): void;

  /**
   * 隐藏导航条加载动画。
   * @version 1.4.3
   */
  declare function swan$hideNavigationBarLoading(): void;

  declare type swan$SetTabBarBadgeOptions = {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number,

    /**
     * 显示的文本，超过 3 个字符则显示成“…”
     */
    text: string
  } & swan$BaseOptions;

  /**
   * 为 tabBar 某一项的右上角添加文本
   * @version 1.9.0
   */
  declare function swan$setTabBarBadge(
    options: swan$SetTabBarBadgeOptions
  ): void;

  declare type swan$TabBarBadgeOptions = {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number
  } & swan$BaseOptions;

  /**
   * 移除 tabBar 某一项右上角的文本
   * @version 1.9.0
   */
  declare function swan$removeTabBarBadge(
    options: swan$TabBarBadgeOptions
  ): void;

  /**
   * 显示 tabBar 某一项的右上角的红点
   * @version 1.9.0
   */
  declare function swan$showTabBarRedDot(option: swan$TabBarBadgeOptions): void;

  /**
   * 隐藏 tabBar 某一项的右上角的红点
   * @version 1.9.0
   */
  declare function swan$hideTabBarRedDot(option: swan$TabBarBadgeOptions): void;

  declare type swan$SetTabBarStyleOptions = {
    /**
     * tab 上的文字默认颜色
     */
    color: string,

    /**
     * tab 上的文字选中时的颜色
     */
    selectedColor: string,

    /**
     * tab 的背景色
     */
    backgroundColor: string,

    /**
     * tabbar上边框的颜色， 仅支持 black/white
     */
    borderStyle: string
  } & swan$BaseOptions;

  /**
   * 动态设置 tabBar 的整体样式
   * @version 1.9.0
   */
  declare function swan$setTabBarStyle(
    options: swan$SetTabBarStyleOptions
  ): void;

  declare type swan$SetTabBarItemOptions = {
    /**
     * tabBar 的哪一项，从左边算起
     */
    index: number,

    /**
     * tab 上按钮文字
     */
    text?: string,

    /**
     * 图片路径, icon 大小限制为40kb
     * 建议尺寸为 81px * 81px
     * 当 postion 为 top 时，此参数无效，不支持网络图片
     */
    iconPath?: string,

    /**
     * 选中时的图片路径
     * icon 大小限制为40kb，建议尺寸为 81px * 81px
     * 当 postion 为 top
     */
    selectedIconPath?: string
  } & swan$BaseOptions;

  /**
   * 动态设置 tabBar 某一项的内容
   * @version 1.9.0
   */
  declare function swan$setTabBarItem(options: swan$SetTabBarItemOptions): void;

  declare type swan$ShowTabBarOptions = {
    /**
     * 是否需要动画效果，默认无
     */
    aniamtion?: boolean
  } & swan$BaseOptions;

  /**
   * 显示 tabBar
   * @version 1.9.0
   */
  declare function swan$showTabBar(options: swan$ShowTabBarOptions): void;

  /**
   * 隐藏 tabBar
   * @version 1.9.0
   */
  declare function swan$hideTabBar(options: swan$ShowTabBarOptions): void;

  declare type swan$NavigateToOptions = {
    /**
     * 需要跳转的应用内页面的路径
     */
    url: string
  } & swan$BaseOptions;

  /**
   * 保留当前页面，跳转到应用内的某个页面，使用swan.navigateBack可以返回到原页面。
   *
   * 注意：为了不让用户在使用小程序时造成困扰，
   * 我们规定页面路径只能是五层，请尽量避免多层级的交互方式。
   */
  declare function swan$navigateTo(options: swan$NavigateToOptions): void;

  declare type swan$SwitchTabOptions = {
    /**
     * 需要跳转的 tabBar 页面的路径
     * （需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
     */
    url: string
  } & swan$BaseOptions;

  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   */
  declare function swan$switchTab(options: swan$SwitchTabOptions): void;

  declare type swan$RedirectToOptions = {
    /**
     * 需要跳转的应用内页面的路径
     */
    url: string
  } & swan$BaseOptions;

  /**
   * 关闭当前页面，跳转到应用内的某个页面。
   */
  declare function swan$redirectTo(options: swan$RedirectToOptions): void;

  declare type swan$NavigateBackOptions = {
    /**
     * 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
     */
    delta: number
  } & swan$BaseOptions;

  /**
   * 关闭当前页面，回退前一页面。
   */
  declare function swan$navigateBack(options?: swan$NavigateBackOptions): void;

  declare type swan$ReLaunchOptions = {
    /**
     * 需要跳转的应用内页面路径 , 路径后可以带参数。
     * 参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔
     * 如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数
     */
    url: string
  } & swan$BaseOptions;

  /**
   * 关闭所有页面，打开到应用内的某个页面。
   * @version 1.1.0
   */
  declare function swan$reLaunch(options?: swan$ReLaunchOptions): void;

  declare type swan$TimingFunction =
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-in-out"
    | "ease-out"
    | "step-start"
    | "step-end";

  declare interface swan$CreateAnimationOptions {
    /**
     * 动画持续时间，单位ms，默认值 400
     */
    duration?: number;

    /**
     * 定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
     */
    timingFunction?: swan$TimingFunction;

    /**
     * 动画持续时间，单位 ms，默认值 0
     */
    delay?: number;

    /**
     * 设置transform-origin，默认为"50% 50% 0"
     */
    transformOrigin?: string;
  }

  declare interface swan$Animator {
    actions: swan$AnimationAction[];
  }

  declare interface swan$AnimationAction {
    animates: swan$Animate[];
    option: swan$AnimationActionOption;
  }

  declare interface swan$AnimationActionOption {
    transformOrigin: string;
    transition: swan$AnimationTransition;
  }

  declare interface swan$AnimationTransition {
    delay: number;
    duration: number;
    timingFunction: swan$TimingFunction;
  }

  declare interface swan$Animate {
    type: string;
    args: any[];
  }

  /**
   * 创建一个动画实例animation。调用实例的方法来描述动画。
   * 最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
   *
   * 注意: export 方法每次调用后会清掉之前的动画操作
   */
  declare function swan$createAnimation(
    options?: swan$CreateAnimationOptions
  ): swan$Animation;

  /**
   * 动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。
   */
  declare interface swan$Animation {
    /**
     * 调用动画操作方法后要调用 step() 来表示一组动画完成，
     * 可以在一组动画中调用任意多个动画方法，
     * 一组动画中的所有动画会同时开始，
     * 一组动画完成后才会进行下一组动画。
     * @param options 指定当前组动画的配置
     */
    step(options?: swan$CreateAnimationOptions): void;

    /**
     * 导出动画操作
     *
     * 注意: export 方法每次调用后会清掉之前的动画操作
     */
    export(): swan$Animator;

    /**
     * 透明度，参数范围 0~1
     */
    opacity(value: number): swan$Animation;

    /**
     * 颜色值
     */
    backgroundColor(color: string): swan$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    width(length: number): swan$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    height(length: number): swan$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    top(length: number): swan$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    left(length: number): swan$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    bottom(length: number): swan$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    right(length: number): swan$Animation;

    /**
     * deg的范围-180~180，从原点顺时针旋转一个deg角度
     */
    rotate(deg: number): swan$Animation;

    /**
     * deg的范围-180~180，在X轴旋转一个deg角度
     */
    rotateX(deg: number): swan$Animation;

    /**
     * deg的范围-180~180，在Y轴旋转一个deg角度
     */
    rotateY(deg: number): swan$Animation;

    /**
     * deg的范围-180~180，在Z轴旋转一个deg角度
     */
    rotateZ(deg: number): swan$Animation;

    /**
     * 同transform-function rotate3d
     */
    rotate3d(x: number, y: number, z: number, deg: number): swan$Animation;

    /**
     * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；
     * 两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
     */
    scale(sx: number, sy?: number): swan$Animation;

    /**
     * 在X轴缩放sx倍数
     */
    scaleX(sx: number): swan$Animation;

    /**
     * 在Y轴缩放sy倍数
     */
    scaleY(sy: number): swan$Animation;

    /**
     * 在Z轴缩放sy倍数
     */
    scaleZ(sz: number): swan$Animation;

    /**
     * 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数
     */
    scale3d(sx: number, sy: number, sz: number): swan$Animation;

    /**
     * 一个参数时，表示在X轴偏移tx，单位px；
     * 两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
     */
    translate(tx: number, ty?: number): swan$Animation;

    /**
     * 在X轴偏移tx，单位px
     */
    translateX(tx: number): swan$Animation;

    /**
     * 在Y轴偏移tx，单位px
     */
    translateY(ty: number): swan$Animation;

    /**
     * 在Z轴偏移tx，单位px
     */
    translateZ(tz: number): swan$Animation;

    /**
     * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
     */
    translate3d(tx: number, ty: number, tz: number): swan$Animation;

    /**
     * 参数范围-180~180；
     * 一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；
     * 两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
     */
    skew(ax: number, ay?: number): swan$Animation;

    /**
     * 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度
     */
    skewX(ax: number): swan$Animation;

    /**
     * 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度
     */
    skewY(ay: number): swan$Animation;

    /**
     * 同transform-function matrix
     */
    matrix(
      a: number,
      b: number,
      c: number,
      d: number,
      tx: number,
      ty: number
    ): swan$Animation;

    /**
     * 同transform-function matrix3d
     */
    matrix3d(
      a1: number,
      b1: number,
      c1: number,
      d1: number,
      a2: number,
      b2: number,
      c2: number,
      d2: number,
      a3: number,
      b3: number,
      c3: number,
      d3: number,
      a4: number,
      b4: number,
      c4: number,
      d4: number
    ): swan$Animation;
  }

  declare interface swan$PageScrollToOptions {
    /**
     * 滚动到页面的目标位置（单位px
     */
    scrollTop: number;

    /**
     * 滚动动画的时长，默认300ms，单位 ms
     */
    duration?: number;
  }

  declare function swan$pageScrollTo(options: swan$PageScrollToOptions): void;

  /**
   * 返回一个SelectorQuery对象实例。
   * 可以在这个实例上使用select等方法选择节点，并使用boundingClientRect等方法选择需要查询的信息。
   * @version 1.4.0
   */
  declare function swan$createSelectorQuery(): swan$SelectorQuery;

  /**
   * swan节点布局相交状态
   */
  declare interface swan$CreateIntersectionObserverOption {
    thresholds?: [number, number];
    initialRatio?: number;
    selectAll?: boolean;
  }

  declare interface swan$Margins {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  }

  declare interface swan$RectArea {
    /**
     * 节点的左边界坐标
     */
    left: number;

    /**
     * 节点的右边界坐标
     */
    right: number;

    /**
     * 节点的上边界坐标
     */
    top: number;

    /**
     * 节点的下边界坐标
     */
    bottom: number;

    /**
     * 节点的宽度
     */
    width: number;

    /**
     * 节点的高度
     */
    height: number;
  }

  declare interface swan$ObserveResponse {
    id: string;
    dataset: any;
    time: number;
    intersectionRatio: number;
    boundingClientRect: swan$RectArea;
    intersectionRect: swan$RectArea;
    relativeRect: swan$RectArea;
  }

  declare interface swan$IntersectionObserver {
    relativeTo(
      selector?: string,
      margins?: swan$Margins
    ): swan$IntersectionObserver;
    relativeToViewport(margins?: swan$Margins): swan$IntersectionObserver;
    observe(
      selector?: string,
      callback?: (response: swan$ObserveResponse) => void
    ): swan$IntersectionObserver;
    disconnect(): void;
  }

  declare function swan$createIntersectionObserver(
    context: swan$Component<any, any>,
    options?: swan$CreateIntersectionObserverOption
  ): swan$IntersectionObserver;

  declare type swan$NodesRefRect = {
    /**
     * 节点的ID
     */
    id: string,

    /**
     * 节点的dataset
     */
    dataset: any
  } & swan$RectArea;

  declare interface swan$NodeRefOffset {
    /**
     * 节点的ID
     */
    id: string;

    /**
     * 节点的dataset
     */
    dataset: any;

    /**
     * 节点的水平滚动位置
     */
    scrollLeft: number;

    /**
     * 节点的竖直滚动位置
     */
    scrollTop: number;
  }

  declare interface swan$NodeRefFieldsOptions {
    /**
     * 是否返回节点id
     */
    id?: boolean;

    /**
     * 是否返回节点dataset
     */
    dataset?: boolean;

    /**
     * 是否返回节点布局位置（left right top bottom
     */
    rect?: boolean;

    /**
     * 是否返回节点尺寸（width height）
     */
    size?: boolean;

    /**
     * 是否返回节点的 scrollLeft scrollTop ，节点必须是scroll-view或者viewport
     */
    scrollOffset?: boolean;

    /**
     * 指定属性名列表
     * 返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值， id class style 和事件绑定的属性值不可获取
     */
    properties?: string[];
    computedStyle?: string[];
  }

  declare interface swan$NodeRefFieldsValue {
    id: {
      id: boolean
    };
    dataset: {
      dataset: string
    };
    rect: {
      left: number,
      right: number,
      top: number,
      bottom: number
    };
    size: {
      width: number,
      height: number
    };
    scrollOffset: {
      scrollLeft: number,
      scrollTop: number
    };
    properties: {
      properties: any
    };
  }

  declare interface swan$NodesRef {
    /**
     * 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。
     * 其功能类似于DOM的getBoundingClientRect。
     * 返回值是nodesRef对应的selectorQuery。
     * 返回的节点信息中，每个节点的位置用
     * left、right、top、bottom、width、height字段描述。
     * 如果提供了callback回调函数，在执行selectQuery的exec方法后
     * 节点信息会在callback中返回。
     */
    boundingClientRect(
      callback?: (rect: swan$NodesRefRect | swan$NodesRefRect[]) => void
    ): swan$SelectorQuery;

    /**
     * 添加节点的滚动位置查询请求，以像素为单位。
     * 节点必须是scroll-view或者viewport。
     * 返回值是nodesRef对应的selectorQuery。
     * 返回的节点信息中，每个节点的滚动位置用scrollLeft、scrollHeight字段描述。
     * 如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回。
     */
    scrollOffset(
      callback?: (rect: swan$NodeRefOffset) => void
    ): swan$SelectorQuery;

    /**
     * 获取节点的相关信息，需要获取的字段在fields中指定。
     * 返回值是nodesRef对应的selectorQuery。
     */
    fields(
      fields: swan$NodeRefFieldsOptions,
      callback?: (result: any) => void
    ): swan$SelectorQuery;
  }

  /**
   * SelectorQuery对象实例
   */
  declare interface swan$SelectorQuery {
    /**
     * 将选择器的选取范围更改为自定义组件component内
     * （初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点
     * @version 1.6.0
     */
    in(
      component: swan$Component<{ [key: string]: any }, { [key: string]: any }>
    ): swan$SelectorQuery;

    /**
     * 在当前页面下选择第一个匹配选择器selector的节点，返回一个NodesRef对象实例，可以用于获取节点信息。
     * selector类似于CSS的选择器，但仅支持下列语法。
     * + ID选择器：#the-id
     * + class选择器（可以连续指定多个）：.a-class.another-class
     * + 子元素选择器：.the-parent > .the-child
     * + 后代选择器：.the-ancestor .the-descendant
     * + 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
     * + 多选择器的并集：#a-node, .some-other-nodes
     */
    select(selector: string): swan$NodesRef;

    /**
     * 在当前页面下选择匹配选择器selector的节点，返回一个NodesRef对象实例。
     * 与selectorQuery.selectNode(selector)不同的是，它选择所有匹配选择器的节点。
     */
    selectAll(selector: string): swan$NodesRef;

    /**
     * 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息
     * 返回一个NodesRef对象实例。
     */
    selectViewport(): swan$NodesRef;

    /**
     * 执行所有的请求
     * 请求结果按请求次序构成数组，在callback的第一个参数中返回。
     */
    exec(callback?: (result: any[]) => void): void;
  }

  declare interface swan$CanvasAction {
    method: string;
    data: swan$CanvasAction[] | Array<number | string>;
  }

  declare type swan$LineCapType = "butt" | "round" | "square";

  declare type swan$LineJoinType = "bevel" | "round" | "miter";

  declare interface swan$CanvasGradient {
    addColorStop(index: number, color: string): void;
  }

  declare interface swan$Transformoptions {
    scaleX: number;
    scaleY: number;
    skewX: number;
    skewY: number;
    translateX: number;
    translateY: number;
  }

  /**
   * context只是一个记录方法调用的容器，用于生成记录绘制行为的actions数组。context跟<canvas/>不存在对应关系，一个context生成画布的绘制动作数组可以应用于多个<canvas/>。
   */
  declare interface swan$CanvasContext {
    font: string;
    fillStyle: string;

    /**
     * 获取当前context上存储的绘图动作(不推荐使用)
     */
    getActions(): swan$CanvasAction[];

    /**
     * 清空当前的存储绘图动作(不推荐使用)
     */
    clearActions(): void;

    /**
     * 对横纵坐标进行缩放
     * 在调用scale方法后，之后创建的路径其横纵坐标会被缩放。
     * 多次调用scale，倍数会相乘。
     * @param scaleWidth 横坐标缩放的倍数
     * @param scaleHeight 纵坐标轴缩放的倍数
     */
    scale(scaleWidth: number, scaleHeight?: number): void;

    /**
     * 对坐标轴进行顺时针旋转
     * 以原点为中心，原点可以用 translate方法修改。
     * 顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
     * @param rotate 旋转角度，以弧度计。
     */
    rotate(rotate: number): void;

    /**
     * 对坐标原点进行缩放
     * 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。
     * @param x 水平坐标平移量
     * @param y 竖直坐标平移量
     */
    translate(x: number, y: number): void;

    /**
     * clip() 方法从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则
     * 所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区
     * 域）。可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域
     * 进行保存，并在以后的任意时间对其进行恢复（通过 “restore()” 方法）
     */
    clip(): void;

    /**
     * 保存当前的绘图上下文。
     */
    save(): void;

    /**
     * 恢复之前保存的绘图上下文。
     */
    restore(): void;

    /**
     * 在给定的矩形区域内，清除画布上的像素
     * 清除画布上在该矩形区域内的内容。
     * @param x 矩形区域左上角的x坐标
     * @param y 矩形区域左上角的y坐标
     * @param width 矩形区域的宽度
     * @param height 矩形区域的高度
     */
    clearRect(x: number, y: number, width: number, height: number): void;

    /**
     * 在画布上绘制被填充的文本
     * @param text 在画布上输出的文本
     * @param x 绘制文本的左上角x坐标位置
     * @param y 绘制文本的左上角y坐标位置
     */
    fillText(text: string, x: number, y: number): void;

    /**
     * 用于设置文字的对齐
     */
    setTextAlign(align: "left" | "center" | "right"): void;

    /**
     * 用于设置文字的水平对齐
     */
    setTextBaseline(textBaseline: "top" | "bottom" | "middle" | "normal"): void;

    /**
     * 绘制图像，图像保持原始尺寸。
     * @param imageResource 所要绘制的图片资源, 通过chooseImage得到一个文件路径或者一个项目目录内的图片
     * @param dx 源图像的矩形选择框的左上角 X 坐标
     * @param dy 源图像的矩形选择框的左上角 Y 坐标
     */
    drawImage(imageResource: string, dx: number, dy: number): void;

    /**
     * 绘制图像，图像保持原始尺寸。
     * @param imageResource 所要绘制的图片资源, 通过chooseImage得到一个文件路径或者一个项目目录内的图片
     * @param dx 源图像的矩形选择框的左上角 X 坐标
     * @param dy 源图像的矩形选择框的左上角 Y 坐标
     * @param dWidth 源图像的矩形选择框的高度
     * @param dHeight 源图像的矩形选择框的高度
     */
    drawImage(
      imageResource: string,
      dx: number,
      dy: number,
      dWidth: number,
      dHeight: number
    ): void;

    /**
     * 绘制图像，图像保持原始尺寸。
     * @param imageResource 所要绘制的图片资源, 通过chooseImage得到一个文件路径或者一个项目目录内的图片
     * @param sx 图像的左上角在目标canvas上 X 轴的位置
     * @param sy 图像的左上角在目标canvas上 Y 轴的位置
     * @param sWidth 在目标画布上绘制图像的宽度，允许对绘制的图像进行缩放
     * @param sHeight 在目标画布上绘制图像的高度，允许对绘制的图像进行缩放
     * @param dx 源图像的矩形选择框的左上角 X 坐标
     * @param dy 源图像的矩形选择框的左上角 Y 坐标
     * @param dWidth 源图像的矩形选择框的高度
     * @param dHeight 源图像的矩形选择框的高度
     * @version 1.9.0
     */
    drawImage(
      imageResource: string,
      sx: number,
      sy: number,
      sWidth: number,
      sHeight: number,
      dx: number,
      dy: number,
      dWidth: number,
      dHeight: number
    ): void;

    /**
     * 设置全局画笔透明度。
     * @param alpha 0~1  透明度，0 表示完全透明，1 表示完全不透明
     */
    setGlobalAlpha(alpha: number): void;

    /**
     * 测量文本尺寸信息，目前仅返回文本宽度。同步接口。
     * @param text 要测量的文本
     */
    measureText(
      text: string
    ): {
      width: string
    };

    /**
     * 根据控制点和半径绘制圆弧路径。
     * @param x1 第一个控制点的 x 轴坐标
     * @param y1 第一个控制点的 y 轴坐标
     * @param x2 第二个控制点的 x 轴坐标
     * @param y2 第二个控制点的 y 轴坐标
     * @param radius 圆弧的半径
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

    /**
     * 给定的 (x, y) 位置绘制文本描边的方法。
     * @param text 要绘制的文本
     * @param x 文本起始点的 x 轴坐标
     * @param y 文本起始点的 y 轴坐标
     * @param maxWidth 需要绘制的最大宽度，可选
     */
    strokeText(text: number, x: number, y: number, maxWidth?: number): void;

    /**
     * 设置虚线偏移量的属性。
     * 偏移量，初始值为 0 。
     */
    setLineDashOffset: number;

    /**
     * 对指定的图像创建模式的方法，可在指定的方向上重复元图像。
     * @param image 重复的图像源，仅支持包内路径和临时路径
     * @param repetition 指定如何重复图像，有效值有: repeat,
     * repeat-x, repeat-y, no-repeat。
     */
    createPattern(image: string, repetition: string): string;

    /**
     * 对当前路径进行填充
     */
    fill(): void;

    /**
     * 对当前路径进行描边
     */
    stroke(): void;

    /**
     * 开始创建一个路径，需要调用fill或者stroke才会使用路径进行填充或描边。
     * Tip: 在最开始的时候相当于调用了一次 beginPath()。
     * Tip: 同一个路径内的多次setFillStyle、setStrokeStyle、setLineWidth等设置，
     * 以最后一次设置为准。
     */
    beginPath(): void;

    /**
     * 关闭一个路径
     * Tip: 关闭路径会连接起点和终点。
     * Tip: 如果关闭路径后没有调用 fill() 或者 stroke() 并开启了新的路径，那之前的路径将不会被渲染。
     */
    closePath(): void;

    /**
     * 把路径移动到画布中的指定点，但不创建线条。
     * @param x 目标位置的x坐标
     * @param y 目标位置的y坐标
     */
    moveTo(x: number, y: number): void;

    /**
     * 在当前位置添加一个新点，然后在画布中创建从该点到最后指定点的路径。
     * @param x 目标位置的x坐标
     * @param y 目标位置的y坐标
     */
    lineTo(x: number, y: number): void;

    /**
     * 添加一个矩形路径到当前路径。
     * @param x 矩形路径左上角的x坐标
     * @param y 矩形路径左上角的y坐标
     * @param width 矩形路径的宽度
     * @param height 矩形路径的高度
     */
    rect(x: number, y: number, width: number, height: number): void;

    /**
     * 填充一个矩形。
     * Tip: 用 setFillStyle() 设置矩形的填充色，如果没设置默认是黑色。
     * @param x 矩形路径左上角的x坐标
     * @param y 矩形路径左上角的y坐标
     * @param width 矩形路径的宽度
     * @param height 矩形路径的高度
     */
    fillRect(x: number, y: number, width: number, height: number): void;

    /**
     * 画一个矩形(非填充)。
     * Tip: 用 setFillStroke() 设置矩形线条的颜色，如果没设置默认是黑色。
     * @param x 矩形路径左上角的x坐标
     * @param y 矩形路径左上角的y坐标
     * @param width 矩形路径的宽度
     * @param height 矩形路径的高度
     */
    strokeRect(x: number, y: number, width: number, height: number): void;

    /**
     * 添加一个弧形路径到当前路径，顺时针绘制。
     * @param x 圆的x坐标
     * @param y 圆的y坐标
     * @param radius 圆的半径
     * @param startAngle 起始弧度，单位弧度（在3点钟方向）
     * @param endAngle 终止弧度
     * @param counterclockwise 指定弧度的方向是逆时针还是顺时针。默认是false，即顺时针。
     */
    arc(
      x: number,
      y: number,
      radius: number,
      startAngle: number,
      endAngle: number,
      counterclockwise?: boolean
    ): void;

    /**
     * 创建二次方贝塞尔曲线
     * @param cpx 贝塞尔控制点的x坐标
     * @param cpy 贝塞尔控制点的y坐标
     * @param x 结束点的x坐标
     * @param y 结束点的y坐标
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

    /**
     * 创建三次方贝塞尔曲线
     * @param cp1x 第一个贝塞尔控制点的 x 坐标
     * @param cp1y 第一个贝塞尔控制点的 y 坐标
     * @param cp2x 第二个贝塞尔控制点的 x 坐标
     * @param cp2y 第二个贝塞尔控制点的 y 坐标
     * @param x 结束点的x坐标
     * @param y 结束点的y坐标
     */
    bezierCurveTo(
      cp1x: number,
      cp1y: number,
      cp2x: number,
      cp2y: number,
      x: number,
      y: number
    ): void;

    /**
     * 设置填充样式
     * @param color 设置为填充样式的颜色。'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
     */
    setFillStyle(color: string | swan$CanvasGradient): void;

    /**
     * 设置线条样式
     * @param color 设置为填充样式的颜色。'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
     */
    setStrokeStyle(color: string | swan$CanvasGradient): void;

    /**
     * 设置阴影
     * @param offsetX 阴影相对于形状在水平方向的偏移
     * @param offsetY 阴影相对于形状在竖直方向的偏移
     * @param blur 阴影的模糊级别，数值越大越模糊 0~100
     * @param color 阴影的颜色。 'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
     */
    setShadow(
      offsetX: number,
      offsetY: number,
      blur: number,
      color: string
    ): void;

    /**
     * 创建一个线性的渐变颜色。
     * Tip: 需要使用 addColorStop() 来指定渐变点，至少要两个。
     * @param x0 起点的x坐标
     * @param y0 起点的y坐标
     * @param x1 终点的x坐标
     * @param y1 终点的y坐标
     */
    createLinearGradient(
      x0: number,
      y0: number,
      x1: number,
      y1: number
    ): swan$CanvasGradient;

    /**
     * 创建一个颜色的渐变点。
     * Tip: 小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。
     * Tip: 需要使用 addColorStop() 来指定渐变点，至少要两个。
     * @param stop (0-1)  表示渐变点在起点和终点中的位置
     * @param color 渐变点的颜色
     */
    addColorStop(stop: number, color: string): void;

    /**
     * 创建一个圆形的渐变颜色。
     * @param x 圆心的x坐标
     * @param y 圆心的y坐标
     * @param r 圆的半径
     */
    createCircularGradient(
      x: number,
      y: number,
      r: number
    ): swan$CanvasGradient;

    /**
     * 设置字体大小
     * @param fontSize 字体的字号
     */
    setFontSize(fontSize: number): void;

    /**
     * 设置线条端点的样式
     * @param lineCap 线条的结束端点样式。 'butt'、'round'、'square'
     */
    setLineCap(lineCap: swan$LineCapType): void;

    /**
     * 设置两线相交处的样式
     * @param lineJoin 两条线相交时，所创建的拐角类型
     */
    setLineJoin(lineJoin: swan$LineJoinType): void;

    /**
     * 设置线条的宽度
     * @param pattern 一组描述交替绘制线段和间距（坐标空间单位）长度的数字。
     * @param offset 虚线偏移量
     */
    setLineDash(pattern: number[], offset: number): void;

    /**
     * 设置线条宽度
     * @param lineWidth 线条的宽度
     */
    setLineWidth(lineWidth: number): void;

    /**
     * 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。
     * 当 setLineJoin为 miter 时才有效。
     * 超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示
     * @param miterLimit 最大斜接长度
     */
    setMiterLimit(miterLimit: number): void;

    /**
     * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
     * Tip: 绘图上下文需要由 swan.createCanvasContext(canvasId) 来创建。
     * @param reserve 非必填。本次绘制是否接着上一次绘制，即reserve参数为false，则在本次调用drawCanvas绘制之前native层应先清空画布再继续绘制；若reserver参数为true，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false
     */
    draw(reserve?: boolean): void;

    /**
     * 使用矩阵重新设置（覆盖）当前变换的方法。
     */
    setTransform(opt?: swan$Transformoptions): void;
  }

  /**
   * 创建并返回绘图上下文context对象。
   * context只是一个记录方法调用的容器，
   * 用于生成记录绘制行为的actions数组。c
   * ontext跟<canvas/>不存在对应关系，
   * 一个context生成画布的绘制动作数组可以应用于多个<canvas/>。
   */
  declare function swan$createCanvasContext(
    selector: string
  ): swan$CanvasContext;

  declare interface swan$DrawCanvasOptions {
    /**
     * 画布标识，传入 <canvas/> 的 cavas-id
     */
    canvasId: number | string;

    /**
     * 绘图动作数组，由 swan.createCanvasContext 创建的 context，
     * 调用 getActions 方法导出绘图动作数组。
     */
    actions: swan$CanvasAction[];
  }

  /**
   * 绘制画布
   */
  declare function swan$drawCanvas(options: swan$DrawCanvasOptions): void;

  declare type swan$CanvasToTempFilePathOptions = {
    /**
     * 画布标识，传入 <canvas/> 的 cavas-id
     */
    canvasId: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    destWidth?: number,
    destHeight?: number,
    fileType?: string
  } & swan$BaseOptions;

  /**
   * 把当前画布的内容导出生成图片，并返回文件路径
   */
  declare function swan$canvasToTempFilePath(
    options: $Shape<swan$CanvasToTempFilePathOptions>
  ): void;

  declare type swan$CanvasImageDataOptions = {
    /**
     * 画布标识，传入 <canvas /> 的 canvas-id
     */
    canvasId: string,

    /**
     * 将要被提取的图像数据矩形区域的左上角 x 坐标
     */
    x: number,

    /**
     * 将要被提取的图像数据矩形区域的左上角 y 坐标
     */
    y: number,

    /**
     * 将要被提取的图像数据矩形区域的宽度
     */
    width: number,

    /**
     * 将要被提取的图像数据矩形区域的高度
     */
    height: number
  } & swan$BaseOptions;

  /**
   * 返回一个数组，用来描述 canvas 区域隐含的像素数据
   * @version 1.9.0
   */
  declare function swan$canvasGetImageData(
    options: swan$CanvasImageDataOptions
  ): void;

  declare type swan$CanvasPutImageDataOptions = {
    data: Uint8ClampedArray
  } & swan$CanvasImageDataOptions;

  /**
   * 将像素数据绘制到画布的方法
   * @version 1.9.0
   */
  declare function swan$canvasPutImageData(
    options: swan$CanvasPutImageDataOptions
  ): void;

  /**
   * 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
   * @version 1.5.0
   */
  declare function swan$startPullDownRefresh(
    options?: swan$BaseOptions<>
  ): void;

  /**
   * 停止当前页面下拉刷新
   * @version 1.5.0
   */
  declare function swan$stopPullDownRefresh(options?: swan$BaseOptions<>): void;

  declare interface swan$ExtConfig {
    /**
     * 第三方平台自定义的数据
     */
    extConfig: any;
  }

  declare type swan$GetExtConfigOptions = {
    success(
      res: {
        errMsg: string
      } & swan$ExtConfig
    ): void
  } & swan$BaseOptions;

  /**
   * 获取第三方平台自定义的数据字段。
   * @version 1.1.0
   */
  declare function swan$getExtConfig(options?: swan$GetExtConfigOptions): void;

  /**
   * 获取第三方平台自定义的数据字段的同步接口。
   * @version 1.1.0
   */
  declare function swan$getExtConfigSync(): swan$ExtConfig;

  /**
   * 登录态维护
   * 通过 swan.login() 获取到用户登录态之后，需要维护登录态。
   * 开发者要注意不应该直接把 session_key、openid 等字段作为用户的标识
   * 或者 session 的标识，而应该自己派发一个 session 登录态（请参考登录时序图）。
   * 对于开发者自己生成的 session，应该保证其安全性且不应该设置较长的过期时间。
   * session 派发到小程序客户端之后，可将其存储在 storage ，用于后续通信使用。
   * 通过swan.checkSession() 检测用户登录态是否失效。并决定是否调用swan.login()
   * 重新获取登录态
   */
  declare interface swan$LoginResponse {
    /**
     * 调用结果
     */
    errMsg: string;

    /**
     * 用户允许登录后，回调内容会带上 code（有效期五分钟），
     * 开发者需要将 code 发送到开发者服务器后台，
     * 使用code 换取 session_key api，
     * 将 code 换成 openid 和 session_key
     */
    code: string;
  }

  declare type swan$LoginOptions = {
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: swan$LoginResponse) => void
  } & swan$BaseOptions;

  /**
   * 调用接口获取登录凭证（code）进而换取用户登录态信息，
   * 包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）。
   * 用户数据的加解密通讯需要依赖会话密钥完成。
   */
  declare function swan$login(option: swan$LoginOptions): void;

  declare type swan$CheckSessionOption = swan$BaseOptions<>;

  /**
   * 调用接口 swan.login 获取 Authorization Code，智能小程序可以使用
   * swan.login()接口获取Authorization Code。
   */
  declare function swan$checkSession(options: swan$CheckSessionOption): void;

  /**
   * 获取手百登录状态。手百登录状态 true: 已登录，false: 未登录
   */
  declare function swan$isLoginSync(): boolean;

  declare type swan$AuthorizeOptions = {
    scope: swan$Scope
  } & swan$BaseOptions;

  /**
   * 提前向用户发起授权请求。
   * 调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，
   * 但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
   */
  declare function swan$authorize(options: swan$AuthorizeOptions): void;

  declare interface swan$UserInfo {
    nickName: string;
    avatarUrl: string;
    gender: number;
    province: string;
    city: string;
    country: string;
  }

  declare interface swan$UserInfoResponse {
    /**
     * 用户信息对象，不包含 openid 等敏感信息
     */
    userInfo: swan$UserInfo;

    /**
     * 不包括敏感信息的原始数据字符串，用于计算签名。
     */
    rawData: string;

    /**
     * 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息。
     */
    signature: string;

    /**
     * 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法
     */
    encryptData: string;
    data: any;
    iv: any;
  }

  declare type swan$GetUserInfoOptions = {
    withCredentials?: boolean,
    lang?: string,

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: swan$UserInfoResponse) => void
  } & swan$BaseOptions;

  declare type swan$SwanIdOptions = {
    success?: (res: swan$SwanIdTask) => void
  } & swan$BaseOptions;

  declare interface swan$SwanIdTask {
    errno: string;
    data: {
      swanid: string
    };
  }

  declare type swan$verifyOptions = {
    success?: (res: swan$verifyTask) => void
  } & swan$BaseOptions;

  declare interface swan$verifyTask {
    errmsg: string;
    errno: string;
    data: {
      result: boolean
    };
  }

  /**
   * 获取 swanid。
   */
  declare function swan$getSwanId(opt: swan$SwanIdOptions): void;

  /**
   * 获取用户信息，需要先调用 swan.login 接口。
   */
  declare function swan$getUserInfo(options: swan$GetUserInfoOptions): void;

  /**
   * swanid有效性校验接口：true表示有效，false表示无效。
   */
  declare function swan$verify(options: swan$verifyOptions): void;

  declare type swan$PaymentSignType = "MD5" | "HMAC-SHA256";

  declare type swan$RequestPaymentOptions = {
    /**
     * 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
     */
    timeStamp: string | number,

    /**
     * 随机字符串，长度为32个字符以下。
     */
    nonceStr: string,

    /**
     * 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
     */
    package: string,

    /**
     * 签名算法，默认为MD5，支持HMAC-SHA256和MD5
     */
    signType: swan$PaymentSignType,

    /**
     * 签名,具体签名方案参见微信公众号支付帮助文档;
     */
    paySign: string
  } & swan$BaseOptions;

  /**
   * 发起微信支付。
   */
  declare function swan$requestPayment(
    options: swan$RequestPaymentOptions
  ): void;

  declare type swan$ShareAppMessage = {
    /**
     * 分享标题  默认为当前小程序名称
     */
    title?: string,

    /**
     * 分享描述, 默认为当前小程序名称
     */
    desc?: string,

    /**
     * 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG
     * 不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
     * @version 1.5.0
     */
    imageUrl?: string,

    /**
     * 分享路径  当默认为前页面 path ，
     * 必须是以 / 开头的完整路径
     */
    path?: string,
    success?: (res: {
      /**
       * 每一项是一个 shareTicket ，对应一个转发对象
       */
      shareTickets: string[]
    }) => void
  } & swan$BaseOptions;

  declare type swan$ShareMenuOptions = {
    withShareTicket?: boolean
  } & swan$BaseOptions;

  /**
   * 显示分享按钮
   */
  declare function swan$showShareMenu(options?: swan$ShareMenuOptions): void;

  /**
   * 隐藏分享按钮
   * @version 1.1.0
   */
  declare function swan$hideShareMenu(options?: swan$ShareMenuOptions): void;

  declare type swan$UpdateShareMenuOptions = {
    /**
     * 是否使用带 shareTicket 的转发详情
     */
    withShareTicket?: boolean
  } & swan$BaseOptions;

  /**
   * 更新转发属性
   * @version 1.2.0
   */
  declare function swan$updateShareMenu(
    options?: swan$UpdateShareMenuOptions
  ): void;

  declare type swan$GetShareInfoOptions = {
    /**
     * shareTicket
     */
    shareTicket: string,
    success(res: {
      /**
       * 错误信息
       */
      errMsg: string,

      /**
       * 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://smartprogram.baidu.com/docs/develop/api/open_log/#login/)
       */
      encryptedData: string,

      /**
       * 加密算法的初始向量，详细见[加密数据解密算法](https://smartprogram.baidu.com/docs/develop/api/open_log/#login/)
       */
      iv: string
    }): void
  } & swan$BaseOptions;

  /**
   * 获取转发详细信息
   * @version 1.1.0
   */
  declare function swan$getShareInfo(options?: swan$GetShareInfoOptions): void;

  declare type swan$ChooseAddressOptions = {
    success?: (res: {
      /**
       * 调用结果
       */
      errMsg: string,

      /**
       * 收货人姓名
       */
      userName: string,

      /**
       * 邮编
       */
      postalCode: string,

      /**
       * 国标收货地址第一级地址
       */
      provinceName: string,

      /**
       * 国标收货地址第二级地址
       */
      cityName: string,

      /**
       * 国标收货地址第三级地址
       */
      countyName: string,

      /**
       * 详细收货地址信息
       */
      detailInfo: string,

      /**
       * 收货地址国家码
       */
      nationalCode: string,

      /**
       * 收货人手机号码
       */
      telNumber: string
    }) => void
  } & swan$BaseOptions;

  declare function swan$chooseAddress(options: swan$ChooseAddressOptions): void;

  declare interface swan$Card {
    cardId: string;
    cardExt: string;
    code?: string;
  }

  declare type swan$CardOptions = {
    cardList: swan$Card[],
    fail?: () => void,
    success?: () => void,
    complete?: () => void
  } & swan$BaseOptions;

  declare type swan$CardExe = {
    code?: string,
    openid?: string,
    timestamp: number,

    /**
     * 随机字符串，由开发者设置传入，加强安全性（若不填写可能被重放请求）。随机字符串，不长于 32 位。
     * 推荐使用大小写字母和数字，不同添加请求的 nonce_str 须动态生成，若重复将会导致领取失败。
     */
    nonce_str?: string,

    /**
     * 卡券在第三方系统的实际领取时间，为东八区时间戳（UTC+8,精确到秒）。
     * 当卡券的有效期类为 DATE_TYPE_FIX_TERM 时专用，标识卡券的实际生效时间，
     * 用于解决商户系统内起始时间和领取微信卡券时间不同步的问题。
     */
    fixed_begintimestamp?: number,
    outer_str?: string,
    signature: string
  } & swan$BaseOptions;

  /**
   * 批量添加卡券。
   */
  declare function swan$addCard(options: swan$CardOptions): void;

  declare type swan$OpenCardOptions = {
    cardList: Array<{
      cardId: string,
      code: string
    }>
  } & swan$BaseOptions;

  /**
   * 查看微信卡包中的卡券。
   */
  declare function swan$openCard(options: swan$OpenCardOptions): void;

  declare type swan$Scope =
    | "scope.userInfo"
    | "scope.userLocation"
    | "scope.address"
    | "scope.invoiceTitle"
    | "scope.werun"
    | "scope.record"
    | "scope.writePhotosAlbum";

  declare interface swan$AuthSetting {
    "scope.userInfo": string;
    "scope.userLocation": string;
    "scope.address": string;
    "scope.invoiceTitle": string;
    "scope.werun": string;
    "scope.record": string;
    "scope.writePhotosAlbum": string;
    success?: (res: swan$ErrMsgResponse) => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare type swan$OpenSettingOptions = {
    success?: (res: {
      authSetting: swan$AuthSetting
    }) => void
  } & swan$BaseOptions;

  declare type swan$openShareOptions = {
    title?: string,
    content?: string,
    imageUrl?: string,
    path?: string,
    success?: (res: {
      authSetting: swan$AuthSetting
    }) => void
  } & swan$BaseOptions;

  /**
   * 调起客户端小程序设置界面，返回用户设置的操作结果。
   * 注：设置界面只会出现小程序已经向用户请求过的权限。
   * @version 1.1.0
   */
  declare function swan$openSetting(options: swan$OpenSettingOptions): void;

  /**
   * 获取用户的当前设置。
   * 注：返回值中只会出现小程序已经向用户请求过的权限。
   * @version 1.2.0
   */
  declare function swan$getSetting(options: swan$OpenSettingOptions): void;

  /**
   * 调起分享面板。
   * bug : 百度App Android 客户端 10.13 以下版本，点击分享
   * 面板的取消时,不会执行 fail 回调。
   */
  declare function swan$openShare(options: swan$openShareOptions): void;

  /**
   * 百度收银台。
   * @version 1.8.5
   */
  declare type swan$requestPolymerPaymentOptions = {
    orderInfo: swan$orderInfoOptions,

    /**
     * bannedChannels参数说明
     * Alipay	支付宝
     * BDWallet	百度钱包
     * WeChat	微信支付
     */
    bannedChannels?: string[],
    success?: (res: {
      authSetting: swan$AuthSetting
    }) => void
  } & swan$BaseOptions;

  declare type swan$orderInfoOptions = {
    /**
     * 跳转百度收银台支付必带参数之一,是百度收银台的财务结算凭
     * 证,与账号绑定的结算协议一一对应,每笔交易将结算到dealId对
     * 应的协议主体。详见
     * https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/mini_program_cashier/parameter.md
     */
    dealId: string,

    /**
     * https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/term_v2.md
     * 用以表示应用身份的唯一ID,在应用审
     * 核通过后进行分配,一经分配后不会发生更改,来唯一确定一个应
     * 用。详见核心参数
     * https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/mini_program_cashier/parameter.md
     */
    appKey: string,

    /**
     * 订单金额，单位为人民币分。
     */
    totalAmount: string,

    /**
     * 商户平台自己记录的订单ID，当支付状态发生变化时，会通过此订
     * 单ID通知商户。
     */
    tpOrderId: string,

    /**
     * 订单的名称
     */
    dealTitle: string,

    /**
     * 固定值1
     */
    signFieldsRange: 1,

    /**
     * 对appKey+dealId+tpOrderId+totalAmount进行RSA加密后的签
     * 名，防止订单被伪造。签名过程见 百度电商开放平台：https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/sign_v2.md
     */
    rsaSign: string,

    /**
     * 订单详细信息，需要是一个可解析为JSON Object的字符串。字段
     * 内容见： https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/mini_program_cashier/parameter.md
     */
    bizInfo: string
  } & swan$BaseOptions;

  /**
   * 百度收银台。
   * @version 1.8.5
   */
  declare function swan$requestPolymerPayment(
    options: swan$requestPolymerPaymentOptions
  ): void;

  /**
   * 打开另一个小程序。(参数)
   */
  declare type swan$navigateToSmartProgramOptions = {
    /**
     * 要打开的小程序App Key
     */
    appKey: string,

    /**
     * 打开的页面路径，如果为空则打开首页 。
     */
    path?: string,

    /**
     * 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()
     * App.onShow() 中获取到这份数据。
     */
    extraData?: any
  } & swan$BaseOptions;

  /**
   * 返回上一个小程序(参数)
   */
  declare type swan$navigateBackSmartProgramOptions = {
    /**
     * 需要返回给上一个小程序的数据，上一个小程序可在
     * App.onLaunch()，App.onShow() 中获取到这份数据。
     */
    extraData?: any
  } & swan$BaseOptions;

  /**
   * 打开另一个小程序。
   */
  declare function swan$navigateToSmartProgram(
    options: swan$navigateToSmartProgramOptions
  ): void;

  /**
   * 返回上一个小程序
   */
  declare function swan$navigateBackSmartProgram(
    options: swan$navigateBackSmartProgramOptions
  ): void;

  declare type swan$MetaDescription = {
    content?: string
  } & swan$BaseOptions;

  /**
   * 设置 web 版小程序 description meta 信息。此方法为 web 版小
   * 程序专用方法，使用前需判断方法是否存在。
   */
  declare function swan$setMetaDescription(
    content?: swan$MetaDescription
  ): void;

  declare type swan$MetaKeywords = {
    content?: string
  } & swan$BaseOptions;

  /**
   * 设置 web 版小程序 keywords meta 信息。此方法为 web 版小程序专
   * 用方法，使用前需判断方法是否存在。
   */
  declare function swan$setMetaKeywords(content?: swan$MetaKeywords): void;

  /**
   * 动态设置当前页面的标题。此方法为 web 版小程序专用方法，使用前需
   * 判断方法是否存在。
   */
  declare function swan$setDocumentTitle(options?: {
    title: string
  }): void;

  declare type swan$LoadSubPackageOptions = {
    root: string
  } & swan$BaseOptions;

  /**
   * 提前下载好子包的资源，目录结构配置参考(https://smartprogram.baidu.com/docs/develop/framework/subpackages/)。
   */
  declare function swan$loadSubPackage(
    options: swan$LoadSubPackageOptions
  ): void;

  declare interface swan$UpdateManager {
    onCheckForUpdate(
      callback: (res: {
        hasUpdate: boolean
      }) => void
    ): void;
    onUpdateReady(
      callback: (res: {
        confirm: boolean
      }) => void
    ): void;
    applyUpdate(): void;
    onUpdateFailed(callback: (res: any) => void): void;
  }

  declare function swan$getUpdateManager(): swan$UpdateManager;

  declare type swan$ChooseInvoiceTitleOptions = {
    success?: (res: {
      type: string,
      title: string,
      taxNumber: string,
      companyAddress: string,
      telephone: string,
      bankName: string,
      bankAccount: string,
      errMsg: string
    }) => void
  } & swan$BaseOptions;

  /**
   * 选择用户的发票抬头。
   */
  declare function swan$chooseInvoiceTitle(
    options: swan$ChooseInvoiceTitleOptions
  ): void;

  declare type swan$NavigateToMiniProgramOptions = {
    appId: string,
    path?: string,
    extraData?: any,
    envVersion?: string,
    success?: (res: {
      errMsg: string
    }) => void
  } & swan$BaseOptions;

  /**
   * 打开同一公众号下关联的另一个小程序。
   */
  declare function swan$navigateToMiniProgram(
    options: swan$NavigateToMiniProgramOptions
  ): void;

  declare type swan$NavigateBackMiniProgramOptions = {
    extraData?: any,
    success?: (res: {
      errMsg: string
    }) => void
  } & swan$BaseOptions;

  /**
   * 返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功
   */
  declare function swan$navigateBackMiniProgram(
    options: swan$NavigateBackMiniProgramOptions
  ): void;

  /**
   * 将 ArrayBuffer 数据转成 Base64 字符串
   */
  declare function swan$arrayBufferToBase64(arrayBuffer: ArrayBuffer): string;

  /**
   * 将 Base64 字符串转成 ArrayBuffer 数据
   */
  declare function swan$base64ToArrayBuffer(base64: string): ArrayBuffer;

  /**
   * 收起键盘。
   */
  declare function swan$hideKeyboard(): void;

  declare interface swan$EventTarget {
    id: string;
    tagName: string;
    dataset: {
      [name: string]: string
    };
  }

  declare type swan$TouchEventType =
    | "tap"
    | "touchstart"
    | "touchmove"
    | "touchcancel"
    | "touchend"
    | "touchforcechange";

  declare type swan$TransitionEventType =
    | "transitionend"
    | "animationstart"
    | "animationiteration"
    | "animationend";

  declare type swan$EventType =
    | "input"
    | "form"
    | "submit"
    | "scroll"
    | swan$TouchEventType
    | swan$TransitionEventType
    | "tap"
    | "longpress";

  declare interface swan$BaseEvent<T: string, Detail> {
    type: T;
    timeStamp: number;
    currentTarget: swan$EventTarget;
    target: swan$EventTarget;
    detail: Detail;
  }

  declare type swan$BuiltInEvent<
    T: swan$EventType,
    Detail
  > = {} & swan$BaseEvent<T, Detail>;

  declare type swan$CustomEvent<T: string, Detail> = {} & swan$BaseEvent<
    T,
    Detail
  >;

  /**
   * 指定focus时的光标位置
   * @version 1.5.0
   */
  declare type swan$InputEvent = {} & swan$BuiltInEvent<
    "input",
    {
      value: string,
      cursor: number
    }
  >;

  declare type swan$FormEvent = {} & swan$BuiltInEvent<
    "form",
    {
      value: {
        [name: string]: string | boolean | number
      }
    }
  >;

  declare type swan$ScrollEvent = {} & swan$BuiltInEvent<"scroll", {}>;

  declare interface swan$Touch {
    identifier: number;
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
  }

  declare type swan$TouchEvent<T: swan$TouchEventType> = {
    touches: swan$Touch[],
    changedTouches: swan$Touch[]
  } & swan$BuiltInEvent<
    T,
    {
      x: number,
      y: number
    }
  >;

  declare type swan$TapEvent = {} & swan$TouchEvent<"tap">;

  declare type swan$TouchStartEvent = {} & swan$TouchEvent<"touchstart">;

  declare type swan$TouchEndEvent = {} & swan$TouchEvent<"touchend">;

  declare type swan$TouchMoveEvent = {} & swan$TouchEvent<"touchmove">;

  declare type swan$TouchCancelEvent = {} & swan$TouchEvent<"touchcancel">;

  declare type swan$TouchForceChangeEvent = {} & swan$TouchEvent<
    "touchforcechange"
  >;

  declare interface swan$Logger {
    /**
     * 写log日志，可以提供任意个参数，每个参数的类型为Object/Array/Number/String，参数p1到pN的内容会写入日志
     */
    log(...args: any[]): void;

    /**
     * 写warn日志，参数同log方法
     */
    warn(...args: any[]): void;

    /**
     * 写debug日志，参数同log方法
     */
    debug(...args: any[]): void;

    /**
     * 写info日志，参数同log方法
     */
    info(...args: any[]): void;
  }

  /**
   * 获取日志管理器 logManager 对象。logManager提供log、info、warn、debug四个方法写日志到文件，
   * 这四个方法接受任意个类型为Object/Array/Number/String的参数，
   * 每次调用的参数的总大小不超过100Kb。最多保存5M的日志内容，超过5M后，旧的日志内容会被删除。
   * 用户可以通过设置Button组件的open-type为feedback来上传打印的日志。
   * 用户上传的日志可以通过登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到。
   */
  declare function swan$getLogManager(): swan$Logger;

  /**
   * 自定义业务数据监控上报接口。使用前，需要在小程序管理后台-运维中心-性能监控-业务数据监控中新建监控事件，
   * 配置监控描述与告警类型。每一个监控事件对应唯一的监控ID，开发者最多可以创建128个监控事件。
   * @param name 监控ID，在小程序管理后台新建数据指标后获得
   * @param value 上报数值，经处理后会在小程序管理后台上展示每分钟的上报总量
   */
  declare function swan$reportMonitor(name: string, value: number): void;

  /**
   * 自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。
   * @param eventName 事件名
   * @param data 上报的自定义数据
   */
  declare function swan$reportAnalytics(
    eventName: string,
    data: { [key: string]: any }
  ): void;

  /**
   * 用于延迟一部分操作到下一个时间片再执行（类似于 setTimeout）。
   * @param func
   * @version 2.2.3
   */
  declare function swan$nextTick(func: () => any): void;

  declare function swan$setEnableDebug(options: swan$EnableDebugOptions): void;

  declare type swan$EnableDebugOptions = {
    enableDebug: boolean
  } & swan$BaseOptions;

  declare interface swan$AccountInfo {
    miniProgram: {
      appId: string
    };
    plugin?: {
      appId: string,
      version: string
    };
  }

  /**
   * 获取当前账号信息
   * @version >= 2.2.2
   */
  declare function swan$getAccountInfoSync(): swan$AccountInfo;

  /**
   * App 实现的接口对象
   * 开发者可以添加任意的函数或数据到 Object 参数中，用 this 可以访问
   */
  declare interface swan$AppOptions {
    /**
     * 监听小程序初始化。
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     * 生命周期函数
     */
    onLaunch?: (option: swan$LaunchOptions) => void;

    /**
     * 监听小程序显示。
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     * 生命周期函数
     */
    onShow?: (option: swan$LaunchOptions) => void;

    /**
     * 监听小程序隐藏。
     * 当小程序从前台进入后台，会触发 onHide
     * 生命周期函数
     */
    onHide?: () => void;

    /**
     * 错误监听函数
     * 当小程序发生脚本错误或者 api 调用失败时
     * 会触发 onError 并带上错误信息
     */
    onError?: (msg: string) => void;

    /**
     * 小程序退出时触发
     */
    onUnlaunch?: () => void;

    /**
     * 全局Data
     */
    globalData?: { [key: string]: any };
  }

  declare interface swan$App {
    /**
     * 获取当前页面
     */
    getCurrentPage(): swan$Page<>;
  }

  declare type swan$DefaultData<V> =
    | { [key: string]: any }
    | (() => { [key: string]: any });

  declare type swan$DefaultProps = { [key: string]: any } | Record<string, any>;

  declare type swan$ExtendedComponent<
    Instance: swan$Component<Data, Props>,
    Data,
    Methods,
    Props
  > = swan$CombinedInstance<Instance, Data, Methods, Props> &
    swan$Component<Data, Props>;

  declare type swan$CombinedInstance<
    Instance: swan$Component<Data, Props>,
    Data,
    Methods,
    Props
  > = Methods & Instance;

  declare type swan$Prop<T> =
    | (() => T)
    | {
        new(...args: any[]): T & { [key: string]: any }
      };

  declare type swan$PropValidator<T> =
    | swan$PropOptions<T>
    | swan$Prop<T>
    | Array<swan$Prop<T>>;

  declare interface swan$DefaultMethods<V> {
    [key: string]: (...args: any[]) => any;
  }

  declare interface swan$PropOptions<T = any> {
    type?: swan$Prop<T> | Array<swan$Prop<T>>;
    value?: T | null | (() => { [key: string]: any });
    observer?: (value: T, old: T, changedPath: string) => void;
  }

  declare type swan$RecordPropsDefinition<T> = $ObjMapi<
    T,
    <K>(K) => swan$PropValidator<$ElementType<T, K>>
  >;

  declare type swan$ArrayPropsDefinition<T> = Array<$Keys<T>>;

  declare type swan$PropsDefinition<T> =
    | swan$ArrayPropsDefinition<T>
    | swan$RecordPropsDefinition<T>;

  declare interface swan$ComponentRelation<D = any, P = any> {
    /**
     * 目标组件的相对关系，可选的值为 parent 、 child 、 ancestor 、 descendant
     */
    type: "parent" | "child" | "ancestor" | "descendant";

    /**
     * 如果这一项被设置，则它表示关联的目标节点所应具有的behavior，所有拥有这一behavior的组件节点都会被关联
     */
    target?: string;

    /**
     * 关系生命周期函数，当关系被建立在页面节点树中时触发，触发时机在组件attached生命周期之后
     */
    linked?: (target: swan$Component<D, P>) => void;

    /**
     * 关系生命周期函数，当关系在页面节点树中发生改变时触发，触发时机在组件moved生命周期之后
     */
    linkChanged?: (target: swan$Component<D, P>) => void;

    /**
     * 关系生命周期函数，当关系脱离页面节点树时触发，触发时机在组件detached生命周期之后
     */
    unlinked?: (target: swan$Component<D, P>) => void;

    /**
     * 目标组件的相对关系，可选的值为 parent 、 child 、 ancestor 、 descendant
     */
    type: "parent" | "child" | "ancestor" | "descendant";

    /**
     * 如果这一项被设置，则它表示关联的目标节点所应具有的behavior，所有拥有这一behavior的组件节点都会被关联
     */
    target?: string;

    /**
     * 关系生命周期函数，当关系被建立在页面节点树中时触发，触发时机在组件attached生命周期之后
     */
    linked?: (target: swan$Component<D, P>) => void;

    /**
     * 关系生命周期函数，当关系在页面节点树中发生改变时触发，触发时机在组件moved生命周期之后
     */
    linkChanged?: (target: swan$Component<D, P>) => void;

    /**
     * 关系生命周期函数，当关系脱离页面节点树时触发，触发时机在组件detached生命周期之后
     */
    unlinked?: (target: swan$Component<D, P>) => void;
  }

  declare type swan$ThisTypedComponentOptionsWithRecordProps<
    V: swan$Component<Data, Props>,
    Data,
    Methods,
    Props
  > = { [key: string]: any } & swan$ComponentOptions<
    V,
    Data | (() => Data),
    Methods,
    Props
  > &
    ThisType<swan$CombinedInstance<V, Data, Methods, $ReadOnly<Props>>>;

  /**
   * 组件所在页面的生命周期声明对象，目前仅支持页面的show和hide两个生命周期
   */
  declare interface swan$PageLifetimes {
    show(): void;
    hide(): void;
  }

  /**
   * 组件生命周期声明对象，组件的生命周期：created、attached、ready、moved、detached将收归到lifetimes字段内进行声明，
   * 原有声明方式仍旧有效，如同时存在两种声明方式，则lifetimes字段内声明方式优先级最高
   */
  declare interface swan$Lifetimes {
    /**
     * 组件生命周期函数，在组件实例进入页面节点树时执行
     * 注意此时不能调用 setData
     */
    created(): void;

    /**
     * 组件生命周期函数，在组件实例进入页面节点树时执行
     */
    attached(): void;

    /**
     * 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息
     * 使用 [SelectorQuery](https://smartprogram.baidu.com/docs/develop/api/show_query/)
     */
    ready(): void;

    /**
     * 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
     */
    moved(): void;

    /**
     * 组件生命周期函数，在组件实例被从页面节点树移除时执行
     */
    detached(): void;
  }

  /**
   * Component组件参数
   */
  declare type swan$ComponentOptions<
    Instance: swan$Component<Data, Props>,
    Data = swan$DefaultData<Instance>,
    Methods = swan$DefaultMethods<Instance>,
    Props = swan$PropsDefinition<swan$DefaultProps>
  > = {
    /**
     * 组件的对外属性，是属性名到属性设置的映射表
     * 属性设置中可包含三个字段:
     * type 表示属性类型、 value 表示属性初始值、 observer 表示属性值被更改时的响应函数
     */
    properties?: Props,

    /**
     * 组件的内部数据，和 properties 一同用于组件的模版渲染
     */
    data?: Data,

    /**
     * 组件的方法，包括事件响应函数和任意的自定义方法
     * 关于事件响应函数的使用
     * 参见[组件事件](https://smartprogram.baidu.com/docs/develop/framework/custom-component_cont/)
     */
    methods?: Methods,

    /**
     * 一些组件选项，请参见文档其他部分的说明
     */
    options?: $Shape<{
      /**
       * 使用外部样式类可以让组件使用指定的组件外样式类，如果希望组件外样式类能够完全影响组件内部，
       * 可以将组件构造器中的options.addGlobalClass字段置为true。这个特性从小程序基础库版本 2.2.3 开始支持。
       * @version 2.2.3
       */
      addGlobalClass: boolean,

      /**
       * 在组件的swan中可以包含 slot 节点，用于承载组件使用者提供的swan结构。
       * 默认情况下，一个组件的swan中只能有一个slot。需要使用多slot时，可以在组件js中声明启用。
       */
      multipleSlots: boolean
    }>,

    /**
     * 组件接受的外部样式类，参见 外部样式类
     *
     * 有时，组件希望接受外部传入的样式类（类似于 view 组件的 hover-class 属性）。
     * 此时可以在 Component 中用 externalClasses 定义段定义若干个外部样式类。这个特性从小程序基础库版本 1.9.90 开始支持。
     * @version 1.9.90
     */
    externalClasses?: string[],

    /**
     * 类似于mixins和traits的组件间代码复用机制
     * 参见 [behaviors](https://smartprogram.baidu.com/docs/develop/framework/custom-component_behaviors/)
     */
    behaviors?: Array<
      | swan$ComponentOptions<
          swan$Component<{ [key: string]: any }, { [key: string]: any }>
        >
      | string
    >,

    /**
     * 组件生命周期声明对象，组件的生命周期：created、attached、ready、moved、detached将收归到lifetimes字段内进行声明，
     * 原有声明方式仍旧有效，如同时存在两种声明方式，则lifetimes字段内声明方式优先级最高
     */
    lifetimes?: $Shape<swan$Lifetimes>,

    /**
     * 组件所在页面的生命周期声明对象，目前仅支持页面的show和hide两个生命周期
     */
    pageLifetimes?: $Shape<swan$PageLifetimes>
  } & $Shape<swan$Lifetimes>;

  /**
   * There are two valid ways to define the type of data / properties:
   *
   * 1. { name: valueType }
   * 2. { name: { type: valueType, value?: value } }
   *
   * and this conditional type will extract that out so the call-site will typecheck.
   *
   * Note this is different from PropOptions as it is the definitions you passed to Component function
   * whereas this type is for call-site.
   */
  declare type swan$DataValueType<
    Def
  > = /* Flow doesn't support conditional types, use $Call utility type */ any;

  /**
   * Component实例方法
   */
  declare interface swan$Component<D, P> {
    /**
     * 组件的文件路径
     */
    is: string;

    /**
     * 节点id
     */
    id: string;

    /**
     * 节点dataset
     */
    dataset: string;

    /**
     * 组件数据，包括内部数据和属性值
     */
    data: $ObjMapi<
      D & P,
      <key>(key) => swan$DataValueType<$ElementType<D & P, key>>
    >;

    /**
     * 组件数据，包括内部数据和属性值（与 data 一致）
     */
    properties: $ObjMapi<
      D & P,
      <key>(key) => swan$DataValueType<$ElementType<D & P, key>>
    >;

    /**
     * 将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
     * 1. 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
     * 2. 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
     * 3. 请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题
     * @param data object 以 key，value 的形式表示将 this.data 中的 key 对应的值改变成 value
     * @param callback callback 是一个回调函数，在这次setData对界面渲染完毕后调用
     */
    setData(
      key:
        | string
        | $ObjMapi<
            D,
            <key>(
              key
            ) =>
              | string
              | number
              | boolean
              | Symbol
              | { [key: string]: any }
              | null
              | any[]
          >,
      value?: any,
      callback?: () => void
    ): void;
    getData(key: string): any;

    /**
     * 检查组件是否具有 behavior
     * 检查时会递归检查被直接或间接引入的所有behavior
     */
    hasBehavior(behavior: any): boolean;

    /**
     * 触发事件，参见 [组件事件](https://smartprogram.baidu.com/docs/develop/framework/custom-component_cont/)
     */
    triggerEvent(
      name: string,
      details?: any,
      options?: $Shape<{
        bubbles: boolean,
        composed: boolean,
        capturePhase: boolean
      }>
    ): void;

    /**
     * 创建一个 SelectorQuery 对象
     * 选择器选取范围为这个[组件实例](https://smartprogram.baidu.com/docs/develop/api/show_query/)内
     */
    createSelectorQuery(): swan$SelectorQuery;

    /**
     * 节点布局交叉状态API可用于监听两个或多个组件节点在布局位置上的相交状态。这一组API常常可以用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。
     * https://smartprogram.baidu.com/docs/develop/api/show_query/
     */
    createIntersectionObserver(
      options?: swan$CreateIntersectionObserverOption
    ): swan$IntersectionObserver;

    /**
     * 使用选择器选择组件实例节点
     * 返回匹配到的第一个组件实例对象
     */
    selectComponent(selector: string): swan$Component<any, any>;

    /**
     * selector  使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
     */
    selectAllComponents(selector: string): Array<swan$Component<any, any>>;
  }

  declare interface swan$PageShareAppMessageOptions {
    /**
     * 转发事件来源。button：页面内转发按钮；menu：右上角转发菜单
     */
    from: "button" | "menu";

    /**
     * 如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined
     */
    target: { [key: string]: any } | void;
  }

  /**
   * Page 实现的接口对象
   */
  declare interface swan$PageOptions {
    /**
     * 页面的初始数据
     */
    data?: any;

    /**
     * 生命周期函数--监听页面加载
     * @param options 接收页面参数可以获取swan.navigateTo和swan.redirectTo及<navigator/>中的 query
     */
    onLoad?: (options: { [key: string]: any }) => void;

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady?: () => void;

    /**
     * 生命周期函数--监听页面显示
     */
    onShow?: () => void;

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide?: () => void;

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload?: () => void;

    /**
     * 下拉刷新
     * 在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。
     * 需要在 config 的window选项中开启 enablePullDownRefresh。
     * 当处理完数据刷新后，swan.stopPullDownRefresh可以停止当前页面的下拉刷新。
     */
    onPullDownRefresh?: () => void;

    /**
     * 页面上拉触底事件的处理函数
     * 监听用户上拉触底事件。
     * 可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
     * 在触发距离内滑动期间，本事件只会被触发一次。
     */
    onReachBottom?: () => void;

    /**
     * 在 Page 中定义 onShareAppMessage 函数，设置该页面的转发信息。
     * + 只有定义了此事件处理函数，右上角菜单才会显示 “转发” 按
     * + 用户点击转发按钮的时候会调
     * + 此事件需要 return 一个 Object，用于自定义转发内容
     */
    onShareAppMessage?: (
      options?: swan$PageShareAppMessageOptions
    ) => swan$ShareAppMessage;

    /**
     * 页面滚动触发事件的处理函数
     * 监听用户滑动页面事件。
     * 参数为 Object，包含以下字段：
     */
    onPageScroll?: (option: {
      scrollTop: number
    }) => void;

    /**
     * 当前是 tab 页时，点击 tab 时触发
     */
    onTabItemTap?: (item: any) => void;
  }

  declare type swan$Page<
    D = { [key: string]: any },
    P = { [key: string]: any }
  > = {
    /**
     * data
     */
    data: any,

    /**
     * 强制更新
     */
    forceUpdate(): void,

    /**
     * 字段可以获取到当前页面的路径。
     */
    route(): void,

    /**
     * 更新
     */
    update(): void,

    /**
     * 将页面滚动到目标位置。
     *
     * scrollTop 滚动到页面的目标位置（单位px）
     * [duration] 滚动动画的时长，默认300ms，单位 ms
     * @version 1.4.0
     */
    pageScrollTo(option?: swan$PageScrollToOptions): void,
    createCanvasContext(selector: string): swan$CanvasContext
  } & swan$Component<D, P>;

  declare interface swan$LaunchOptions {
    /**
     * 打开小程序的路径
     */
    path: string;

    /**
     * 打开小程序的query
     */
    query: { [key: string]: any };

    /**
     * 打开小程序的[场景值](https://smartprogram.baidu.com/docs/data/scene/)
     */
    scene: number;

    /**
     * shareTicket，详见 获取更多[转发信息](https://smartprogram.baidu.com/docs/develop/api/open_share/)
     */
    shareTicket: string;

    /**
     * 当场景为由从另一个小程序或公众号或App打开时，返回此字段
     */
    referrerInfo: {
      appId: string,
      extraData: { [key: string]: any }
    };
  }

  declare interface swan$Cloud {
    /**
     * 初始化方法（全局只需一次）
     */
    init: (options: swan$InitCloudOptions) => void;

    /**
     * 接受一个可选对象参数 env：环境 ID，获取数据库的引用
     */
    database: (options: {
      env: string
    }) => {};

    /**
     * 接受一个 name 参数，指定需引用的集合名称
     */
    collection: (name: string) => {};
  }

  /**
   * 定义了云开发的默认配置，该配置会作为之后调用其他所有云 API 的默认配置
   */
  declare interface swan$InitCloudOptions {
    /**
     * 默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象 initCloudEnvOptions 可以分别指定各个服务的默认环境
     * 默认值： default
     */
    env?: string | swan$InitCloudEnvOptions;

    /**
     * 是否在将用户访问记录到用户管理中，在控制台中可见
     * 默认值： false
     */
    traceUser?: boolean;
  }

  /**
   * initCloudOptions 的 env 参数，可以指定各个服务的默认环境
   */
  declare interface swan$InitCloudEnvOptions {
    /**
     * 数据库 API 默认环境配置
     * 默认值： default
     */
    database?: string;

    /**
     * 存储 API 默认环境配置
     * 默认值： default
     */
    storage?: string;

    /**
     * 云函数 API 默认环境配置
     * 默认值： default
     */
    functions?: string;
  }

  /**
   * App() 函数用来注册一个小程序。
   * 接受一个 object 参数，其指定小程序的生命周期函数等。
   */
  declare function App<T: swan$AppOptions>(
    app: T & ThisType<T & swan$App>
  ): void;

  /**
   * 获取小程序实例
   */
  declare function getApp(): swan$App;

  declare function Component<D, M, P>(
    options?: swan$ThisTypedComponentOptionsWithRecordProps<
      swan$Component<D, P>,
      D,
      M,
      P
    >
  ): swan$ExtendedComponent<swan$Component<D, P>, D, M, P>;

  /**
   * behaviors 是用于组件间代码共享的特性
   * 类似于一些编程语言中的“mixins”或“traits”
   * 每个 behavior 可以包含一组属性、数据、生命周期函数和方法
   * 组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用
   * 每个组件可以引用多个 behavior
   * behavior 也可以引用其他 behavior
   */
  declare function Behavior<D, M, P>(
    options?: swan$ThisTypedComponentOptionsWithRecordProps<
      swan$Component<D, P>,
      D,
      M,
      P
    >
  ): swan$ExtendedComponent<swan$Component<D, P>, D, M, P>;

  /**
   * Page() 函数用来注册一个页面。
   * 接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
   */
  declare function Page<T: swan$PageOptions & { [key: string]: any }>(
    page: T & ThisType<T & swan$Page<>>
  ): void;

  /**
   * getCurrentPages() 函数用于获取当前页面栈的实例，
   * 以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
   */
  declare function getCurrentPages(): swan$Page<>[];
}
