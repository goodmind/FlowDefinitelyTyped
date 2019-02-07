declare module 'weixin-app' {
        
      declare var npm$namespace$wx: {
        request: typeof wx$request,
uploadFile: typeof wx$uploadFile,
downloadFile: typeof wx$downloadFile,
connectSocket: typeof wx$connectSocket,
onSocketOpen: typeof wx$onSocketOpen,
onSocketError: typeof wx$onSocketError,
sendSocketMessage: typeof wx$sendSocketMessage,
onSocketMessage: typeof wx$onSocketMessage,
closeSocket: typeof wx$closeSocket,
onSocketClose: typeof wx$onSocketClose,
chooseImage: typeof wx$chooseImage,
previewImage: typeof wx$previewImage,
getImageInfo: typeof wx$getImageInfo,
saveImageToPhotosAlbum: typeof wx$saveImageToPhotosAlbum,
startRecord: typeof wx$startRecord,
stopRecord: typeof wx$stopRecord,
getRecorderManager: typeof wx$getRecorderManager,
playVoice: typeof wx$playVoice,
pauseVoice: typeof wx$pauseVoice,
stopVoice: typeof wx$stopVoice,
getBackgroundAudioPlayerState: typeof wx$getBackgroundAudioPlayerState,
playBackgroundAudio: typeof wx$playBackgroundAudio,
pauseBackgroundAudio: typeof wx$pauseBackgroundAudio,
seekBackgroundAudio: typeof wx$seekBackgroundAudio,
stopBackgroundAudio: typeof wx$stopBackgroundAudio,
onBackgroundAudioPlay: typeof wx$onBackgroundAudioPlay,
onBackgroundAudioPause: typeof wx$onBackgroundAudioPause,
onBackgroundAudioStop: typeof wx$onBackgroundAudioStop,
getBackgroundAudioManager: typeof wx$getBackgroundAudioManager,
createAudioContext: typeof wx$createAudioContext,
createInnerAudioContext: typeof wx$createInnerAudioContext,
chooseVideo: typeof wx$chooseVideo,
saveVideoToPhotosAlbum: typeof wx$saveVideoToPhotosAlbum,
createVideoContext: typeof wx$createVideoContext,
createCameraContext: typeof wx$createCameraContext,
createLivePlayerContext: typeof wx$createLivePlayerContext,
saveFile: typeof wx$saveFile,
getFileInfo: typeof wx$getFileInfo,
getSavedFileList: typeof wx$getSavedFileList,
getSavedFileInfo: typeof wx$getSavedFileInfo,
removeSavedFile: typeof wx$removeSavedFile,
openDocument: typeof wx$openDocument,
setStorage: typeof wx$setStorage,
setStorageSync: typeof wx$setStorageSync,
getStorage: typeof wx$getStorage,
getStorageSync: typeof wx$getStorageSync,
getStorageInfo: typeof wx$getStorageInfo,
getStorageInfoSync: typeof wx$getStorageInfoSync,
removeStorage: typeof wx$removeStorage,
removeStorageSync: typeof wx$removeStorageSync,
clearStorage: typeof wx$clearStorage,
clearStorageSync: typeof wx$clearStorageSync,
getLocation: typeof wx$getLocation,
chooseLocation: typeof wx$chooseLocation,
openLocation: typeof wx$openLocation,
createMapContext: typeof wx$createMapContext,
getSystemInfo: typeof wx$getSystemInfo,
getSystemInfoSync: typeof wx$getSystemInfoSync,
canIUse: typeof wx$canIUse,
getNetworkType: typeof wx$getNetworkType,
onNetworkStatusChange: typeof wx$onNetworkStatusChange,
onAccelerometerChange: typeof wx$onAccelerometerChange,
startAccelerometer: typeof wx$startAccelerometer,
stopAccelerometer: typeof wx$stopAccelerometer,
onCompassChange: typeof wx$onCompassChange,
startCompass: typeof wx$startCompass,
stopCompass: typeof wx$stopCompass,
makePhoneCall: typeof wx$makePhoneCall,
scanCode: typeof wx$scanCode,
setClipboardData: typeof wx$setClipboardData,
getClipboardData: typeof wx$getClipboardData,
openBluetoothAdapter: typeof wx$openBluetoothAdapter,
closeBluetoothAdapter: typeof wx$closeBluetoothAdapter,
getBluetoothAdapterState: typeof wx$getBluetoothAdapterState,
onBluetoothAdapterStateChange: typeof wx$onBluetoothAdapterStateChange,
startBluetoothDevicesDiscovery: typeof wx$startBluetoothDevicesDiscovery,
stopBluetoothDevicesDiscovery: typeof wx$stopBluetoothDevicesDiscovery,
getBluetoothDevices: typeof wx$getBluetoothDevices,
onBluetoothDeviceFound: typeof wx$onBluetoothDeviceFound,
getConnectedBluetoothDevices: typeof wx$getConnectedBluetoothDevices,
createBLEConnection: typeof wx$createBLEConnection,
closeBLEConnection: typeof wx$closeBLEConnection,
getBLEDeviceServices: typeof wx$getBLEDeviceServices,
getBLEDeviceCharacteristics: typeof wx$getBLEDeviceCharacteristics,
readBLECharacteristicValue: typeof wx$readBLECharacteristicValue,
writeBLECharacteristicValue: typeof wx$writeBLECharacteristicValue,
notifyBLECharacteristicValueChanged: typeof wx$notifyBLECharacteristicValueChanged,
onBLEConnectionStateChanged: typeof wx$onBLEConnectionStateChanged,
onBLECharacteristicValueChange: typeof wx$onBLECharacteristicValueChange,
startBeaconDiscovery: typeof wx$startBeaconDiscovery,
stopBeaconDiscovery: typeof wx$stopBeaconDiscovery,
getBeacons: typeof wx$getBeacons,
onBeaconUpdate: typeof wx$onBeaconUpdate,
onBeaconServiceChange: typeof wx$onBeaconServiceChange,
setScreenBrightness: typeof wx$setScreenBrightness,
getScreenBrightness: typeof wx$getScreenBrightness,
setKeepScreenOn: typeof wx$setKeepScreenOn,
vibrateLong: typeof wx$vibrateLong,
vibrateShort: typeof wx$vibrateShort,
onUserCaptureScreen: typeof wx$onUserCaptureScreen,
addPhoneContact: typeof wx$addPhoneContact,
startWifi: typeof wx$startWifi,
stopWifi: typeof wx$stopWifi,
connectWifi: typeof wx$connectWifi,
getWifiList: typeof wx$getWifiList,
onGetWifiList: typeof wx$onGetWifiList,
setWifiList: typeof wx$setWifiList,
onWifiConnected: typeof wx$onWifiConnected,
getConnectedWifi: typeof wx$getConnectedWifi,
showToast: typeof wx$showToast,
hideToast: typeof wx$hideToast,
showLoading: typeof wx$showLoading,
hideLoading: typeof wx$hideLoading,
showModal: typeof wx$showModal,
showActionSheet: typeof wx$showActionSheet,
setTopBarText: typeof wx$setTopBarText,
setNavigationBarTitle: typeof wx$setNavigationBarTitle,
setNavigationBarColor: typeof wx$setNavigationBarColor,
showNavigationBarLoading: typeof wx$showNavigationBarLoading,
hideNavigationBarLoading: typeof wx$hideNavigationBarLoading,
setTabBarBadge: typeof wx$setTabBarBadge,
removeTabBarBadge: typeof wx$removeTabBarBadge,
showTabBarRedDot: typeof wx$showTabBarRedDot,
hideTabBarRedDot: typeof wx$hideTabBarRedDot,
setTabBarStyle: typeof wx$setTabBarStyle,
setTabBarItem: typeof wx$setTabBarItem,
showTabBar: typeof wx$showTabBar,
hideTabBar: typeof wx$hideTabBar,
navigateTo: typeof wx$navigateTo,
switchTab: typeof wx$switchTab,
redirectTo: typeof wx$redirectTo,
navigateBack: typeof wx$navigateBack,
reLaunch: typeof wx$reLaunch,
createAnimation: typeof wx$createAnimation,
pageScrollTo: typeof wx$pageScrollTo,
createSelectorQuery: typeof wx$createSelectorQuery,
createIntersectionObserver: typeof wx$createIntersectionObserver,
createContext: typeof wx$createContext,
drawCanvas: typeof wx$drawCanvas,
canvasToTempFilePath: typeof wx$canvasToTempFilePath,
canvasGetImageData: typeof wx$canvasGetImageData,
canvasPutImageData: typeof wx$canvasPutImageData,
startPullDownRefresh: typeof wx$startPullDownRefresh,
stopPullDownRefresh: typeof wx$stopPullDownRefresh,
getExtConfig: typeof wx$getExtConfig,
getExtConfigSync: typeof wx$getExtConfigSync,
login: typeof wx$login,
checkSession: typeof wx$checkSession,
authorize: typeof wx$authorize,
getUserInfo: typeof wx$getUserInfo,
requestPayment: typeof wx$requestPayment,
showShareMenu: typeof wx$showShareMenu,
hideShareMenu: typeof wx$hideShareMenu,
updateShareMenu: typeof wx$updateShareMenu,
getShareInfo: typeof wx$getShareInfo,
chooseAddress: typeof wx$chooseAddress,
addCard: typeof wx$addCard,
openCard: typeof wx$openCard,
openSetting: typeof wx$openSetting,
getSetting: typeof wx$getSetting,
getWeRunData: typeof wx$getWeRunData,
checkIsSupportSoterAuthentication: typeof wx$checkIsSupportSoterAuthentication,
startSoterAuthentication: typeof wx$startSoterAuthentication,
checkIsSoterEnrolledInDevice: typeof wx$checkIsSoterEnrolledInDevice,
chooseInvoiceTitle: typeof wx$chooseInvoiceTitle,
getUpdateManager: typeof wx$getUpdateManager,
navigateToMiniProgram: typeof wx$navigateToMiniProgram,
navigateBackMiniProgram: typeof wx$navigateBackMiniProgram,
arrayBufferToBase64: typeof wx$arrayBufferToBase64,
base64ToArrayBuffer: typeof wx$base64ToArrayBuffer,
hideKeyboard: typeof wx$hideKeyboard,
getLogManager: typeof wx$getLogManager,
reportMonitor: typeof wx$reportMonitor,
reportAnalytics: typeof wx$reportAnalytics,
nextTick: typeof wx$nextTick,
setEnableDebug: typeof wx$setEnableDebug,
getAccountInfoSync: typeof wx$getAccountInfoSync,
        
      }
declare interface wx$DataResponse {

/**
 * 回调函数返回的内容
 */
data: {[key: string]: any} | string | ArrayBuffer,

/**
 * 开发者服务器返回的 HTTP 状态码
 */
statusCode: number,

/**
 * 开发者服务器返回的 HTTP Response Header
 */
header: {[key: string]: any}
} 

declare interface wx$ErrMsgResponse {

/**
 * 成功：ok，错误：详细信息
 */
errMsg: "ok" | string
} 

declare interface wx$TempFileResponse {

/**
 * 文件的临时路径
 */
tempFilePath: string
} 

declare interface wx$BaseOptions<R= any, E= any> {

/**
 * 接口调用成功的回调函数
 */
success?: (res: R) => void,

/**
 * 接口调用失败的回调函数
 */
fail?: (res: E) => void,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: (res: any) => void
} 

declare interface wx$ErrCodeResponse {
errCode: number
} 

declare interface wx$RequestHeader {
[key: string]: string
} 

declare type wx$RequestOptions = {

/**
 * 开发者服务器接口地址
 */
url: string,

/**
 * 请求的参数
 */
data?: string | {[key: string]: any} | ArrayBuffer,

/**
 * 设置请求的 header , header 中不能设置 Referer
 */
header?: wx$RequestHeader,

/**
 * 默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
 */
method?: "GET"
| "OPTIONS"
| "GET"
| "HEAD"
| "POST"
| "PUT"
| "DELETE"
| "TRACE"
| "CONNECT",

/**
 * 如果设为json，会尝试对返回的数据做一次 JSON.parse
 */
dataType?: string,

/**
 * 设置响应的数据类型。合法值：text、arraybuffer
 * @version 1.7.0
 */
responseType?: string,

/**
 * 收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
 */
success?: (res: wx$DataResponse) => void
} & wx$BaseOptions<wx$DataResponse>



/**
 * wx.request发起的是https请求。一个微信小程序，同时只能有5个网络请求连接。
 */
declare function wx$request(options: wx$RequestOptions): wx$RequestTask



/**
 * 返回一个 requestTask 对象，通过 requestTask，可中断请求任务。
 */
declare interface wx$RequestTask {
abort(): void
} 

declare interface wx$UploadTask {

/**
 * 监听上传进度变化
 * @version 1.4.0
 */
onProgressUpdate(
callback?: (
res: {

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
}) => void): void,

/**
 * 中断下载任务
 * @version 1.4.0
 */
abort(): void
} 

declare type wx$UploadFileOptions = {

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
header?: wx$RequestHeader,

/**
 * HTTP 请求中其他额外的 form data
 */
formData?: any
} & wx$BaseOptions


declare interface wx$UploadFileResponse {
data: string,
statusCode: number
} 


/**
 * 将本地资源上传到开发者服务器。
 * 如页面通过 wx.chooseImage 等接口获取到一个本地资源的临时文件路径后，
 * 可通过此接口将本地资源上传到指定服务器。
 * 客户端发起一个 HTTPS POST 请求，
 * 其中 Content-Type 为 multipart/form-data 。
 */
declare function wx$uploadFile(options: wx$UploadFileOptions): wx$UploadTask


declare interface wx$DownloadTask {

/**
 * 监听下载进度变化
 * @version 1.4.0
 */
onProgressUpdate(
callback?: (
res: {

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
}) => void): void,

/**
 * 中断下载任务
 * @version 1.4.0
 */
abort(): void
} 

declare type wx$DownloadFileOptions = {

/**
 * 下载资源的 url
 */
url: string,

/**
 * 下载资源的类型，用于客户端识别处理，有效值：image/audio/video
 */
type?: string,

/**
 * HTTP 请求 Header
 */
header?: wx$RequestHeader,

/**
 * 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
 */
success?: (res: wx$TempFileResponse) => void
} & wx$BaseOptions



/**
 * 下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，
 * 把下载到的资源根据 type 进行处理，并返回文件的本地临时路径。
 */
declare function wx$downloadFile(options: wx$DownloadFileOptions): wx$DownloadTask


declare type wx$ConnectSocketOptions = {

/**
 * 开发者服务器接口地址，必须是 HTTPS 协议，且域名必须是后台配置的合法域名
 */
url: string,

/**
 * 请求的数据
 */
data?: any,

/**
 * HTTP Header , header 中不能设置 Referer
 */
header?: wx$RequestHeader,

/**
 * 默认是GET，有效值为： OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
 */
method?: string,

/**
 * 子协议数组
 * @version 1.4.0
 */
protocols?: string[]
} & wx$BaseOptions



/**
 * 创建一个 WebSocket 连接；
 * 一个微信小程序同时只能有一个 WebSocket 连接，
 * 如果当前已存在一个 WebSocket 连接，
 * 会自动关闭该连接，并重新创建一个 WebSocket 连接。
 */
declare function wx$connectSocket(options: wx$ConnectSocketOptions): void



/**
 * 监听WebSocket连接打开事件。
 */
declare function wx$onSocketOpen(callback: () => void): void



/**
 * 监听WebSocket错误。
 */
declare function wx$onSocketError(callback: (error: any) => void): void


declare type wx$SendSocketMessageOptions = {

/**
 * 需要发送的内容
 */
data: string | ArrayBuffer
} & wx$BaseOptions



/**
 * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，
 * 并在 wx.onSocketOpen 回调之后才能发送。
 */
declare function wx$sendSocketMessage(options: wx$SendSocketMessageOptions): void



/**
 * 监听WebSocket接受到服务器的消息事件。
 */
declare function wx$onSocketMessage(callback: (res: wx$DataResponse) => void): void



/**
 * 关闭WebSocket连接。
 */
declare type wx$CloseSocketOptions = {
code?: number,
reason?: string
} & wx$BaseOptions



/**
 * 关闭WebSocket连接。
 */
declare function wx$closeSocket(options: wx$CloseSocketOptions): void



/**
 * 监听WebSocket关闭。
 */
declare function wx$onSocketClose(callback: () => void): void


declare type wx$ImageSizeType = "original" | "compressed";

declare type wx$ImageSourceType = "album" | "camera";

declare type wx$VideoSourceType = "album" | "camera";

declare type wx$CameraDevice = "front" | "back";

declare interface wx$TempFile {

/**
 * 本地文件路径
 */
path: string,

/**
 * 本地文件大小，单位：B
 */
size: number
} 

declare interface wx$TempFilesData {

/**
 * 文件的临时路径
 */
tempFilePaths: string,

/**
 * 图片的本地文件列表，每一项是一个 File 对象
 * @version 1.2.0
 */
tempFiles: wx$TempFile[]
} 

declare type wx$ChooseImageOptions = {

/**
 * 最多可以选择的图片张数，默认9
 */
count?: number,

/**
 * original 原图，compressed 压缩图，默认二者都有
 */
sizeType?: wx$ImageSizeType[],

/**
 * album 从相册选图，camera 使用相机，默认二者都有
 */
sourceType?: wx$ImageSourceType[],

/**
 * 成功则返回图片的本地文件路径列表 tempFilePaths
 */
success(res: wx$TempFilesData): void
} & wx$BaseOptions



/**
 * 从本地相册选择图片或使用相机拍照。
 */
declare function wx$chooseImage(options: wx$ChooseImageOptions): void


declare type wx$PreviewImageOptions = {

/**
 * 当前显示图片的链接，不填则默认为 urls 的第一张
 */
current?: string,

/**
 * 需要预览的图片链接列表
 */
urls: string[]
} & wx$BaseOptions



/**
 * 预览图片。
 */
declare function wx$previewImage(options: wx$PreviewImageOptions): void


declare type wx$GetImageInfoOptions = {

/**
 * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
 */
src: string
} & wx$BaseOptions



/**
 * 获取图片信息
 */
declare function wx$getImageInfo(options: wx$GetImageInfoOptions): void


declare type wx$SaveImageToPhotosAlbumOptions = {

/**
 * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
 */
filePath: string,
success(res: {
errMsg: string
}): void
} & wx$BaseOptions



/**
 * 保存图片到系统相册。
 * 需要用户授权 scope.writePhotosAlbum
 * @version 1.2.0
 */
declare function wx$saveImageToPhotosAlbum(options: wx$SaveImageToPhotosAlbumOptions): void


declare type wx$StartRecordAudioOptions = {

/**
 * 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'}
 */
success?: (res: wx$TempFileResponse) => void
} & wx$BaseOptions



/**
 * 开始录音。当主动调用wx.stopRecord，
 * 或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。
 * 注：文件的临时路径，在小程序本次启动期间可以正常使用，
 * 如需持久保存，需在主动调用wx.saveFile，在小程序下次启动时才能访问得到。
 * @deprecated 1.6.0
 */
declare function wx$startRecord(options: wx$StartRecordAudioOptions): void


declare type wx$StopRecordAudioOptions = {
success?: (res: wx$TempFileResponse) => void
} & wx$BaseOptions



/**
 * 主动调用停止录音。
 */
declare function wx$stopRecord(options?: wx$StopRecordAudioOptions): void


declare type wx$EncodeBitRate = 8000
| 11025
| 12000
| 16000
| 22050
| 24000
| 32000
| 44100
| 48000;

declare interface wx$RecorderManagerStartOptions {

/**
 * 指定录音的时长，单位 ms
 * 如果传入了合法的 duration
 * 在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）
 */
duration?: number,

/**
 * 采样率，有效值 8000/16000/44100
 */
sampleRate?: number,

/**
 * 否 录音通道数，有效值 1/2
 */
numberOfChannels?: number,

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
encodeBitRate: number,

/**
 * 音频格式，有效值 aac/mp3
 */
format: string,

/**
 * 指定帧大小，单位 KB
 * 传入 frameSize 后，每录制指定帧大小的内容后
 * 会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。
 */
frameSize: number
} 

declare interface wx$OnRecorderManagerStopOptions {
tempFilePath: string
} 

declare interface wx$OnFrameRecordedOptions {

/**
 * 录音分片结果数据
 */
frameBuffer: ArrayBuffer,

/**
 * 当前帧是否正常录音结束前的最后一帧
 */
isLastFrame: boolean
} 

declare interface wx$RecorderManager {

/**
 * 开始录音
 */
start(options?: wx$RecorderManagerStartOptions): void,

/**
 * 暂停录音
 */
pause(): void,

/**
 * 继续录音
 */
resume(): void,

/**
 * 停止录音
 */
stop(): void,

/**
 * 录音开始事件
 */
onStart(callback?: () => void): void,

/**
 * 录音暂停事件
 */
onPause(callback?: () => void): void,

/**
 * 录音恢复事件
 */
onResume(callback?: () => void): void,

/**
 * 录音停止事件，会回调文件地址
 */
onStop(callback?: (options: wx$OnRecorderManagerStopOptions) => void): void,

/**
 * 已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件
 */
onFrameRecorded(callback?: (options: wx$OnFrameRecordedOptions) => void): void,

/**
 * 录音错误事件, 会回调错误信息
 */
onError(callback?: (err: wx$ErrMsgResponse) => void): void
} 


/**
 * 获取全局唯一的录音管理器 recorderManager
 * @version 1.6.0
 */
declare function wx$getRecorderManager(): wx$RecorderManager


declare type wx$PlayVoiceOptions = {

/**
 * 需要播放的语音文件的文件路径
 */
filePath: string
} & wx$BaseOptions



/**
 * 开始播放语音，同时只允许一个语音文件正在播放，
 * 如果前一个语音文件还没播放完，将中断前一个语音播放。
 * @deprecated 1.6.0
 */
declare function wx$playVoice(options: wx$PlayVoiceOptions): void



/**
 * 暂停正在播放的语音。
 * 再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。
 * 如果想从头开始播放，需要先调用 wx.stopVoice。
 * @deprecated 1.6.0
 */
declare function wx$pauseVoice(): void



/**
 * 结束播放语音。
 * @deprecated 1.6.0
 */
declare function wx$stopVoice(): void


declare interface wx$BackgroundAudioPlayerState {

/**
 * 选定音频的长度（单位：s），只有在当前有音乐播放时返回
 */
duration: number,

/**
 * 选定音频的播放位置（单位：s），只有在当前有音乐播放时返回
 */
currentPosition: number,

/**
 * 播放状态（2：没有音乐在播放，1：播放中，0：暂停中）
 */
status: number,

/**
 * 音频的下载进度（整数，80 代表 80%），只有在当前有音乐播放时返回
 */
downloadPercent: number,

/**
 * 歌曲数据链接，只有在当前有音乐播放时返回
 */
dataUrl: string
} 

declare type wx$GetBackgroundAudioPlayerStateOptions = {

/**
 * 接口调用成功的回调函数
 */
success?: (state: wx$BackgroundAudioPlayerState) => void,

/**
 * 接口调用失败的回调函数
 */
fail?: () => void,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: () => void
} & wx$BaseOptions



/**
 * 获取音乐播放状态。
 * @deprecated 1.2.0
 */
declare function wx$getBackgroundAudioPlayerState(options: wx$GetBackgroundAudioPlayerStateOptions): void


declare type wx$PlayBackgroundAudioOptions = {

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
} & wx$BaseOptions



/**
 * 播放音乐，同时只能有一首音乐正在播放。
 * @deprecated 1.2.0
 */
declare function wx$playBackgroundAudio(options: wx$PlayBackgroundAudioOptions): void



/**
 * 暂停播放音乐。
 * @deprecated 1.2.0
 */
declare function wx$pauseBackgroundAudio(options?: wx$PlayBackgroundAudioOptions): void


declare type wx$SeekBackgroundAudioOptions = {

/**
 * 音乐位置，单位：秒
 */
position: number
} & wx$BaseOptions



/**
 * 控制音乐播放进度。
 * @deprecated 1.2.0
 */
declare function wx$seekBackgroundAudio(options: wx$SeekBackgroundAudioOptions): void



/**
 * 停止播放音乐。
 * @deprecated 1.2.0
 */
declare function wx$stopBackgroundAudio(options?: wx$PlayBackgroundAudioOptions): void



/**
 * 监听音乐播放。
 * @deprecated 1.2.0
 */
declare function wx$onBackgroundAudioPlay(callback: () => void): void



/**
 * 监听音乐暂停。
 * @deprecated 1.2.0
 */
declare function wx$onBackgroundAudioPause(callback: () => void): void



/**
 * 监听音乐停止。
 * @deprecated 1.2.0
 */
declare function wx$onBackgroundAudioStop(callback: () => void): void


declare interface wx$BackgroundAudioManager {

/**
 * 当前音频的长度（单位：s），只有在当前有合法的 src 时返回
 */
+duration: number,

/**
 * 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回
 */
+currentTime: number,

/**
 * 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放
 */
+paused: boolean,

/**
 * 音频的数据源，默认为空字符串，当设置了新的 src 时，会自动开始播放 ，目前支持的格式有 m4a, aac, mp3, wav
 */
src: string,

/**
 * 音频开始播放的位置（单位：s）
 */
startTime: number,

/**
 * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。 是
 */
buffered: number,

/**
 * 音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。
 */
title: string,

/**
 * 专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
 */
epname: string,

/**
 * 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
 */
singer: string,

/**
 * 封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。
 */
coverImgUrl: string,

/**
 * 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
 */
webUrl: string,

/**
 * 播放
 */
play(): void,

/**
 * 暂停
 */
pause(): void,

/**
 * 停止
 */
stop(): void,

/**
 * 跳转到指定位置，单位 s
 */
seek(position: number): void,

/**
 * 背景音频进入可以播放状态，但不保证后面可以流畅播放
 */
onCanplay(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 背景音频播放事件
 */
onPlay(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 背景音频暂停事件
 */
onPause(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 背景音频停止事件
 */
onStop(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 背景音频自然播放结束事件
 */
onEnded(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 背景音频播放进度更新事件
 */
onTimeUpdate(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 用户在系统音乐播放面板点击上一曲事件（iOS only）
 */
onPrev(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 用户在系统音乐播放面板点击下一曲事件（iOS only）
 */
onNext(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 背景音频播放错误事件
 */
onError(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
 */
onWaiting(callback: (res: wx$ErrCodeResponse) => void): void
} 


/**
 * 获取全局唯一的背景音频管理器 backgroundAudioManager。
 * @version 1.2.0
 */
declare function wx$getBackgroundAudioManager(): wx$BackgroundAudioManager



/**
 * audioContext 通过 audioId 跟一个 <audio/> 组件绑定，通过它可以操作对应的 <audio/> 组件。
 */
declare interface wx$AudioContext {

/**
 * 音频的地址
 */
setSrc(src: string): void,

/**
 * 播放
 */
play(): void,

/**
 * 暂停
 */
pause(): void,

/**
 * 跳转到指定位置，单位 s
 */
seek(position: number): void
} 


/**
 * 创建并返回 audio 上下文 audioContext 对象
 * @param audioId audio标签id <audio  src="{{src}}" id="myAudio" ></audio>
 * @example <!-- audio.wxml -->
<audio  src="{{src}}" id="myAudio" ></audio>
<button type="primary" bindtap="audioPlay">播放</button>
<button type="primary" bindtap="audioPause">暂停</button>
<button type="primary" bindtap="audio14">设置当前播放时间为14秒</button>
<button type="primary" bindtap="audioStart">回到开头</button>
// audio.js
Page({
onReady: function (e) {
// 使用 wx.createAudioContext 获取 audio 上下文 context
this.audioCtx = wx.createAudioContext('myAudio')
this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/
M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&
uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&
fromtag=46')
this.audioCtx.play()
},
data: {
src: ''
},
audioPlay: function () {
this.audioCtx.play()
},
audioPause: function () {
this.audioCtx.pause()
},
audio14: function () {
this.audioCtx.seek(14)
},
audioStart: function () {
this.audioCtx.seek(0)
}
})
 * @deprecated 1.6.0
 */
declare function wx$createAudioContext(audioId: string, instance: any): wx$AudioContext


declare interface wx$InnerAudioContext {

/**
 * 当前音频的长度（单位：s），只有在当前有合法的 src 时返
 */
+duration: number,

/**
 * 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6
 */
+currentTime: number,

/**
 * 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播
 */
+paused: boolean,

/**
 * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲
 */
+buffered: number,

/**
 * 音频的数据链接，用于直接播放。
 */
src: string,

/**
 * 开始播放的位置（单位：s），默认 0
 */
startTime: number,

/**
 * 是否自动开始播放，默认 false
 */
autoplay: boolean,

/**
 * 是否循环播放，默认 false
 */
loop: boolean,

/**
 * 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音，默认值 true
 */
obeyMuteSwitch: boolean,

/**
 * 播放
 */
play(): void,

/**
 * 暂停
 */
pause(): void,

/**
 * 停止
 */
stop(): void,

/**
 * 跳转到指定位置，单位 s
 */
seek(position: number): void,

/**
 * 销毁当前实例
 */
destroy(): void,

/**
 * 音频进入可以播放状态，但不保证后面可以流畅播放
 */
onCanplay(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 音频播放事件
 */
onPlay(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 音频暂停事件
 */
onPause(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 音频停止事件
 */
onStop(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 音频自然播放结束事件
 */
onEnded(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 音频播放进度更新事件
 */
onTimeUpdate(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 音频播放错误事件
 */
onError(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
 */
onWaiting(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 音频进行 seek 操作事件
 */
onSeeking(callback: (res: wx$ErrCodeResponse) => void): void,

/**
 * 音频完成 seek 操作事件
 */
onSeeked(callback: (res: wx$ErrCodeResponse) => void): void
} 


/**
 * 创建并返回内部 audio 上下文 innerAudioContext 对象。
 * 本接口是 wx.createAudioContext 升级版。
 * @version 1.6.0
 */
declare function wx$createInnerAudioContext(): wx$InnerAudioContext


declare type wx$ChooseVideoOptions = {

/**
 * album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
 */
sourceType?: wx$VideoSourceType[],

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
camera?: wx$CameraDevice,

/**
 * 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
 */
success?: (res: wx$VideoData) => void
} & wx$BaseOptions



/**
 * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
 */
declare function wx$chooseVideo(options: wx$ChooseVideoOptions): void


declare type wx$SaveVideoOptions = {
filePath: string,
success(errMsg: string): void
} & wx$BaseOptions



/**
 * 保存视频到系统相册。需要用户授权 scope.writePhotosAlbum
 */
declare function wx$saveVideoToPhotosAlbum(options: wx$SaveVideoOptions): void


declare interface wx$VideoContext {

/**
 * 播放
 */
play(): void,

/**
 * 暂停
 */
pause(): void,

/**
 * 跳转到指定位置，单位 s
 */
seek(position: number): void,

/**
 * 发送弹幕，danmu 包含两个属性 text, color。
 */
sendDanmu(danmu: {
text: string,
color: number | string
}): void,

/**
 * 设置倍速播放，支持的倍率有 0.5/0.8/1.0/1.25/1.5
 */
playbackRate(rate: 0.5
| 0.8
| 1
| 1.25
| 1.5): void,

/**
 * 进入全屏
 */
requestFullScreen(options?: {
direction: 0 | 90 | -90
}): void,

/**
 * 退出全屏
 */
exitFullScreen(): void
} 

declare interface wx$VideoData {

/**
 * 选定视频的临时文件路径
 */
tempFilePath: string,

/**
 * 选定视频的时间长度
 */
duration: number,

/**
 * 选定视频的数据量大小
 */
size: number,

/**
 * 返回选定视频的长
 */
height: number,

/**
 * 返回选定视频的宽
 */
width: number
} 


/**
 * 创建并返回 video 上下文 videoContext 对象
 * @param videoId video标签id <video  src="{{src}}" id="myVideo" ></video>
 */
declare function wx$createVideoContext(videoId: string): wx$VideoContext


declare type wx$TakePhotoOptions = {

/**
 * 成像质量，值为high, normal, low，默认normal
 */
quality?: string,
success?: (res: {
tempImagePath: string
}) => void
} & wx$BaseOptions


declare interface wx$RecordResponse {
tempThumbPath: string,
tempVideoPath: string
} 

declare type wx$StartRecordOptions = {

/**
 * 超过30s或页面onHide时会结束录像
 */
timeoutCallback?: (res: wx$RecordResponse) => void
} & wx$BaseOptions


declare type wx$StopRecordOptions = {
success?: (res: wx$RecordResponse) => void
} & wx$BaseOptions


declare interface wx$CameraContext {

/**
 * 拍照，可指定质量，成功则返回图片
 */
takePhoto(options: wx$TakePhotoOptions): void,

/**
 * 开始录像
 */
wx$startRecord(options: wx$StartRecordOptions): void,

/**
 * 结束录像，成功则返回封面与视频
 */
wx$stopRecord(options: wx$StopRecordOptions): void
} 


/**
 * 创建并返回 camera 上下文 cameraContext 对象
 * cameraContext 与页面的 camera 组件绑定
 * 一个页面只能有一个camera，通过它可以操作对应的 <camera/> 组件。
 * 在自定义组件下，第一个参数传入组件实例this，以操作组件内 <camera/> 组件
 * @version 1.6.0
 */
declare function wx$createCameraContext(instance?: any): wx$CameraContext


declare type wx$RequestFullScreenOptions = {

/**
 * 有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）
 */
direction: number
} & wx$BaseOptions


declare interface wx$LivePlayerContext {

/**
 * 播放
 */
play(options: wx$BaseOptions): void,

/**
 * 停止
 */
stop(options: wx$BaseOptions): void,

/**
 * 静音
 */
mute(options: wx$BaseOptions): void,

/**
 * 进入全屏
 */
requestFullScreen(options: wx$RequestFullScreenOptions): void,

/**
 * 退出全屏
 */
exitFullScreen(options: wx$BaseOptions): void
} 


/**
 * 操作对应的 <live-player/> 组件。
 * 创建并返回 live-player 上下文 LivePlayerContext 对象。
 * 在自定义组件下，第二个参数传入组件实例this，以操作组件内 <live-player/> 组件
 * @version 1.7.0
 */
declare function wx$createLivePlayerContext(id: string, instance: any): wx$LivePlayerContext


declare interface wx$SavedFileData {

/**
 * 文件的保存路径
 */
savedFilePath: string
} 

declare type wx$SaveFileOptions = {

/**
 * 需要保存的文件的临时路径
 */
tempFilePath: string,

/**
 * 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}
 */
success?: (res: wx$SavedFileData) => void
} & wx$BaseOptions



/**
 * 保存文件到本地。
 * 本地文件存储的大小限制为 10M
 */
declare function wx$saveFile(options: wx$SaveFileOptions): void


declare interface wx$File {

/**
 * 文件的本地路径
 */
filePath: string,

/**
 * 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
 */
createTime: number,

/**
 * 文件大小，单位B
 */
size: number
} 

declare type wx$GetFileInfoOptions = {

/**
 * 本地文件路径
 */
filePath: string,

/**
 * 计算文件摘要的算法，默认值 md5，有效值：md5，sha1
 */
digestAlgorithm?: string,
success?: (options: wx$GetFileInfoSuccess) => void
} & wx$BaseOptions


declare interface wx$GetFileInfoSuccess {

/**
 * 文件大小，单位：B
 */
size: number,

/**
 * 按照传入的 digestAlgorithm 计算得出的的文件摘要
 */
digest: string,

/**
 * 调用结果
 */
errMsg: string
} 


/**
 * 获取文件信息
 * @version 1.4.0
 */
declare function wx$getFileInfo(options: wx$GetFileInfoOptions): void


declare interface wx$GetSavedFileListData {

/**
 * 接口调用结果
 */
errMsg: string,

/**
 * 文件列表
 */
fileList: wx$File[]
} 

declare type wx$GetSavedFileListOptions = {

/**
 * 接口调用成功的回调函数
 */
success?: (res: wx$GetSavedFileListData) => void
} & wx$BaseOptions



/**
 * 获取本地已保存的文件列表
 */
declare function wx$getSavedFileList(options: wx$GetSavedFileListOptions): void


declare interface wx$SavedFileInfoData {

/**
 * 接口调用结果
 */
errMsg: string,

/**
 * 文件大小，单位B
 */
size: number,

/**
 * 文件的保存是的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
 */
createTime: number
} 

declare type wx$GetSavedFileInfoOptions = {
filePath: string,

/**
 * 接口调用成功的回调函数
 */
success?: (res: wx$SavedFileInfoData) => void
} & wx$BaseOptions



/**
 * 获取本地文件的文件信息
 */
declare function wx$getSavedFileInfo(options: wx$GetSavedFileInfoOptions): void


declare type wx$RemoveSavedFileOptions = wx$GetSavedFileInfoOptions;


/**
 * 删除本地存储的文件
 */
declare function wx$removeSavedFile(options: wx$RemoveSavedFileOptions): void


declare type wx$OpenDocumentOptions = {

/**
 * 文件路径，可通过 downFile 获得
 */
filePath: string,

/**
 * 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx
 */
fileType?: "doc"
| "xls"
| "ppt"
| "pdf"
| "docx"
| "xlsx"
| "pptx"
} & wx$BaseOptions



/**
 * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
 */
declare function wx$openDocument(options: wx$OpenDocumentOptions): void


declare type wx$SetStorageOptions = {

/**
 * 本地缓存中的指定的 key
 */
key: string,

/**
 * 需要存储的内容
 */
data: any | string
} & wx$BaseOptions



/**
 * 将数据存储在本地缓存中指定的 key 中，
 * 会覆盖掉原来该 key 对应的内容，这是一个异步接口。
 */
declare function wx$setStorage(options: wx$SetStorageOptions): void



/**
 * 将 data 存储在本地缓存中指定的 key 中，
 * 会覆盖掉原来该 key 对应的内容，这是一个同步接口。
 * @param key 本地缓存中的指定的 key
 * @param data 需要存储的内容
 */
declare function wx$setStorageSync(key: string, data: any | string): void


declare type wx$GetStorageOptions = {

/**
 * 本地缓存中的指定的 key
 */
key: string,

/**
 * 接口调用的回调函数,res = {data: key对应的内容}
 */
success(res: {
data: Record<string, any> | string | void
}): void
} & wx$BaseOptions



/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 */
declare function wx$getStorage(options: wx$GetStorageOptions): void



/**
 * 从本地缓存中同步获取指定 key 对应的内容。
 */
declare function wx$getStorageSync(key: string): any | string


declare interface wx$StorageInfo {

/**
 * 当前storage中所有的key
 */
keys: string[],

/**
 * 当前占用的空间大小, 单位kb
 */
currentSize: number,

/**
 * 限制的空间大小，单位kb
 */
limitSize: number
} 

declare type wx$GetStorageInfoOptions = {
success(res: wx$StorageInfo): void
} & wx$BaseOptions



/**
 * 异步获取当前storage的相关信息
 */
declare function wx$getStorageInfo(options: wx$GetStorageInfoOptions): void


declare function wx$getStorageInfoSync(): wx$StorageInfo


declare type wx$RemoveStorageOptions = {
key: string,
success?: (res: wx$DataResponse) => void
} & wx$BaseOptions


declare function wx$removeStorage(options: wx$RemoveStorageOptions): void


declare function wx$removeStorageSync(key: string): wx$DataResponse



/**
 * 清理本地数据缓存。
 */
declare function wx$clearStorage(): void



/**
 * 同步清理本地数据缓存
 */
declare function wx$clearStorageSync(): void


declare interface wx$LocationData {

/**
 * 纬度，浮点数，范围为-90~90，负数表示南纬
 */
latitude: number,

/**
 * 经度，浮点数，范围为-180~180，负数表示西经
 */
longitude: number,

/**
 * 速度，浮点数，单位m/s
 */
speed: number,

/**
 * 位置的精确度
 */
accuracy: number
} 

declare type wx$GetLocationOptions = {

/**
 * 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
 */
type?: "wgs84" | "gcj02",
altitude?: boolean,

/**
 * 接口调用成功的回调函数，返回内容详见返回参数说明。
 */
success(res: wx$LocationData): void
} & wx$BaseOptions



/**
 * 获取当前的地理位置、速度。
 */
declare function wx$getLocation(options: wx$GetLocationOptions): void


declare interface wx$ChooseLocationData {

/**
 * 位置名称
 */
name: string,

/**
 * 详细地址
 */
address: string,

/**
 * 纬度，浮点数，范围为-90~90，负数表示南纬
 */
latitude: number,

/**
 * 经度，浮点数，范围为-180~180，负数表示西经
 */
longitude: number
} 

declare type wx$ChooseLocationOptions = {
success(res: wx$ChooseLocationData): void
} & wx$BaseOptions



/**
 * 打开地图选择位置
 */
declare function wx$chooseLocation(options: wx$ChooseLocationOptions): void


declare type wx$OpenLocationOptions = {

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
} & wx$BaseOptions



/**
 * 使用微信内置地图查看位置
 */
declare function wx$openLocation(options: wx$OpenLocationOptions): void


declare type wx$GetCenterLocationOptions = {
success(res: {
longitude: number,
latitude: number
}): void
} & wx$BaseOptions



/**
 * mapContext 通过 mapId 跟一个 <map/> 组件绑定，通过它可以操作对应的 <map/> 组件。
 */
declare interface wx$MapContext {

/**
 * 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 wx.openLocation
 */
getCenterLocation(options: wx$GetCenterLocationOptions): wx$OpenLocationOptions,

/**
 * 将地图中心移动到当前定位点，需要配合map组件的show-location使用
 */
moveToLocation(): void
} 


/**
 * 创建并返回 map 上下文 mapContext 对象
 */
declare function wx$createMapContext(mapId: string): wx$MapContext


declare interface wx$SystemInfo {

/**
 * 手机品牌
 */
brand: string,

/**
 * 手机型号
 */
model: string,

/**
 * 设备像素比
 */
pixelRatio: number,

/**
 * 屏幕宽度
 */
screenWidth: number,

/**
 * 屏幕高度
 */
screenHeight: number,

/**
 * 窗口宽度
 */
windowWidth: number,

/**
 * 窗口高度
 */
windowHeight: number,

/**
 * 状态栏的高度
 */
statusBarHeight: number,

/**
 * 微信设置的语言
 */
language: string,

/**
 * 微信版本号
 */
version: string,

/**
 * 操作系统版本
 */
system: string,

/**
 * 客户端平台
 */
platform: string,

/**
 * 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。
 */
fontSizeSetting: number,

/**
 * 客户端基础库版本
 */
SDKVersion: string
} 

declare type wx$GetSystemInfoOptions = {

/**
 * 成功获取系统信息的回调
 */
success(res: wx$SystemInfo): void
} & wx$BaseOptions



/**
 * 获取系统信息。
 */
declare function wx$getSystemInfo(options: wx$GetSystemInfoOptions): void


declare function wx$getSystemInfoSync(): wx$SystemInfo



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
declare function wx$canIUse(api: string): boolean


declare type wx$networkType = "2g"
| "3g"
| "4g"
| "wifi"
| "unknown"
| "none";

declare interface wx$NetworkTypeData {

/**
 * 返回网络类型2g，3g，4g，wifi
 */
wx$networkType: wx$networkType
} 

declare type wx$GetNetworkTypeOptions = {

/**
 * 接口调用成功，返回网络类型 networkType
 */
success(res: wx$NetworkTypeData): void
} & wx$BaseOptions



/**
 * 获取网络类型。
 */
declare function wx$getNetworkType(options: wx$GetNetworkTypeOptions): void



/**
 * 监听网络状态变化。
 * 微信客户端 6.5.6 版本开始支持
 * @version 1.1.0
 */
declare function wx$onNetworkStatusChange(
callback: (res: {
isConnected: boolean,
wx$networkType: wx$networkType
}) => void): void


declare interface wx$AccelerometerData {

/**
 * X 轴
 */
x: number,

/**
 * Y 轴
 */
y: number,

/**
 * Z 轴
 */
z: number
} 

declare type wx$AccelerometerChangeCallback = (res: wx$AccelerometerData) => void;


/**
 * 监听重力感应数据，频率：5次/秒
 */
declare function wx$onAccelerometerChange(callback: wx$AccelerometerChangeCallback): void


declare type wx$AccelerometerOptions = wx$BaseOptions;


/**
 * 开始监听加速度数据。
 * 微信客户端 6.5.6 版本开始支持
 * @version 1.1.0
 */
declare function wx$startAccelerometer(options: wx$AccelerometerOptions): void



/**
 * 停止监听加速度数据。
 * 微信客户端 6.5.6 版本开始支持
 * @version 1.1.0
 */
declare function wx$stopAccelerometer(options: wx$AccelerometerOptions): void


declare interface wx$CompassData {

/**
 * 面对的方向度数
 */
direction: number
} 

declare type wx$CompassChangeCallback = (res: wx$CompassData) => void;


/**
 * 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用wx.stopCompass停止监听。
 */
declare function wx$onCompassChange(callback: wx$CompassChangeCallback): void


declare type wx$CompassOptions = wx$BaseOptions;


/**
 * 开始监听罗盘数据。
 * 微信客户端 6.5.6 版本开始支持
 * @version 1.1.0
 */
declare function wx$startCompass(options: wx$CompassOptions): void


declare function wx$stopCompass(options: wx$CompassOptions): void


declare type wx$MakePhoneCallOptions = {

/**
 * 需要拨打的电话号码
 */
phoneNumber: string
} & wx$BaseOptions



/**
 * 拨打电话
 */
declare function wx$makePhoneCall(options: wx$MakePhoneCallOptions): void


declare type wx$scanType = "qrCode" | "barCode";

declare interface wx$ScanCodeData {

/**
 * 所扫码的内容
 */
result: string,

/**
 * 所扫码的类型
 */
wx$scanType: wx$scanType,

/**
 * 所扫码的字符集
 */
charSet: string,

/**
 * 当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path
 */
path: string
} 

declare type wx$ScanCodeOptions = {

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
wx$scanType?: string[],
success(res: wx$ScanCodeData): void
} & wx$BaseOptions



/**
 * 调起客户端扫码界面，扫码成功后返回对应的结果
 */
declare function wx$scanCode(options: wx$ScanCodeOptions): void


declare type wx$SetClipboardDataOptions = {
data: string
} & wx$BaseOptions



/**
 * 设置系统剪贴板的内容
 * 微信客户端 6.5.6 版本开始支持
 * @version 1.1.0
 */
declare function wx$setClipboardData(options: wx$SetClipboardDataOptions): void



/**
 * 获取系统剪贴板内容
 * 微信客户端 6.5.6 版本开始支持
 * @version 1.1.0
 */
declare function wx$getClipboardData(options: wx$BaseOptions): void


declare type wx$OpenBluetoothAdapterOptions = {
success(res: any): void
} & wx$BaseOptions



/**
 * 初始化蓝牙适配器
 * @version 1.1.0
 */
declare function wx$openBluetoothAdapter(options: wx$OpenBluetoothAdapterOptions): void


declare type wx$CloseBluetoothAdapterOptions = {
success(res: any): void
} & wx$BaseOptions



/**
 * 关闭蓝牙模块。调用该方法将断开所有已建立的链接并释放系统资源
 * @version 1.1.0
 */
declare function wx$closeBluetoothAdapter(options: wx$CloseBluetoothAdapterOptions): void


declare interface wx$BluetoothAdapterState {

/**
 * 蓝牙适配器是否可用
 */
available: boolean,

/**
 * 蓝牙适配器是否处于搜索状态
 */
discovering: boolean
} 

declare type wx$BluetoothAdapterStateData = {

/**
 * 蓝牙适配器信息
 */
adapterState: wx$BluetoothAdapterState
} & wx$ErrMsgResponse


declare type wx$GetBluetoothAdapterStateOptions = {
success(res: wx$BluetoothAdapterStateData): void
} & wx$BaseOptions



/**
 * 获取本机蓝牙适配器状态
 * @version 1.1.0
 */
declare function wx$getBluetoothAdapterState(options: wx$GetBluetoothAdapterStateOptions): void



/**
 * 监听蓝牙适配器状态变化事件
 * @version 1.1.0
 */
declare function wx$onBluetoothAdapterStateChange(callback: (res: wx$BluetoothAdapterState) => void): void


declare type wx$StartBluetoothDevicesDiscoveryOptions = {

/**
 * 蓝牙设备主 service 的 uuid 列表
 * 某些蓝牙设备会广播自己的主 service 的 uuid。如果这里传入该数组，那么根据该 uuid 列表，只搜索有这个主服务的设备。
 */
services?: string[],

/**
 * 否允许重复上报同一设备， 如果允许重复上报，则onDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同
 */
allowDuplicatesKey?: boolean,

/**
 * 上报设备的间隔，默认为0，意思是找到新设备立即上报，否则根据传入的间隔上报
 */
interval?: number
} & wx$BaseOptions



/**
 * 开始搜寻附近的蓝牙外围设备。
 * 注意，该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。
 * @example // 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
wx.startBluetoothDevicesDiscovery({
services: ['FEE7'],
success: function (res) {
console.log(res)
}
});
 */
declare function wx$startBluetoothDevicesDiscovery(options: wx$StartBluetoothDevicesDiscoveryOptions): void


declare type wx$StopBluetoothDevicesDiscoveryOptions = {
success(res: wx$ErrMsgResponse): void
} & wx$BaseOptions



/**
 * 停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。
 * @version 1.1.0
 */
declare function wx$stopBluetoothDevicesDiscovery(options: wx$StopBluetoothDevicesDiscoveryOptions): void



/**
 * 蓝牙设备信息
 */
declare interface wx$BluetoothDevice {

/**
 * 蓝牙设备名称，某些设备可能没有
 */
name: string,

/**
 * 用于区分设备的 id
 */
deviceId: string,

/**
 * int 当前蓝牙设备的信号强度
 */
RSSI: number,

/**
 * 当前蓝牙设备的广播内容
 */
advertisData: ArrayBuffer
} 

declare type wx$GetBluetoothDevicesOptions = {
success(res: {
devices: wx$BluetoothDevice[]
} & wx$ErrMsgResponse): void
} & wx$BaseOptions



/**
 * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
 */
declare function wx$getBluetoothDevices(options: wx$GetBluetoothDevicesOptions): void



/**
 * 监听寻找到新设备的事件
 * @version 1.1.0
 */
declare function wx$onBluetoothDeviceFound(callback: (res: {
devices: wx$BluetoothDevice[]
}) => void): void


declare type wx$GetConnectedBluetoothDevicesOptions = {
services: string[],
success(res: {
devices: wx$BluetoothDevice[]
} & wx$ErrMsgResponse): void
} & wx$BaseOptions



/**
 * 根据 uuid 获取处于已连接状态的设备
 * @version 1.1.0
 */
declare function wx$getConnectedBluetoothDevices(options: wx$GetConnectedBluetoothDevicesOptions): void


declare type wx$CreateBLEConnectionOptions = {

/**
 * 蓝牙设备 id，参考 getDevices 接口
 */
deviceId: string,
success(res: wx$ErrMsgResponse): void
} & wx$BaseOptions



/**
 * 低功耗蓝牙接口
 * @version 1.1.0
 */
declare function wx$createBLEConnection(options: wx$CreateBLEConnectionOptions): void


declare type wx$CloseBLEConnectionOptions = {

/**
 * 蓝牙设备 id，参考 getDevices 接口
 */
deviceId: string,
success(res: wx$ErrMsgResponse): void
} & wx$BaseOptions



/**
 * 断开与低功耗蓝牙设备的连接
 * @version 1.1.0
 */
declare function wx$closeBLEConnection(options: wx$CloseBLEConnectionOptions): void


declare type wx$GetBLEDeviceServicesOptions = {

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
} & wx$ErrMsgResponse): void
} & wx$BaseOptions



/**
 * 获取蓝牙设备所有 service（服务）
 */
declare function wx$getBLEDeviceServices(options: wx$GetBLEDeviceServicesOptions): void


declare type wx$GetBLEDeviceCharacteristicsOptions = {

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
} & wx$ErrMsgResponse): void
} & wx$BaseOptions



/**
 * 获取蓝牙设备所有 characteristic（特征值）
 */
declare function wx$getBLEDeviceCharacteristics(options: wx$GetBLEDeviceCharacteristicsOptions): void


declare type wx$WriteBLECharacteristicValue = {

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
success(res: wx$ErrMsgResponse): void,
complete?: () => void
} & wx$BaseOptions


declare type wx$NotifyBLECharacteristicValueChanged = {

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
success(res: wx$ErrMsgResponse): void
} & wx$BaseOptions


declare type wx$ReadBLECharacteristicValue = {

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
} & wx$ErrMsgResponse): void
} & wx$BaseOptions



/**
 * 读取低功耗蓝牙设备的特征值的二进制数据值。
 * 注意：必须设备的特征值支持read才可以成功调用，具体参照 characteristic 的 properties 属性
 */
declare function wx$readBLECharacteristicValue(options: wx$ReadBLECharacteristicValue): void



/**
 * 向低功耗蓝牙设备特征值中写入二进制数据。
 * 注意：必须设备的特征值支持write才可以成功调用，具体参照 characteristic 的 properties 属性
 * tips: 并行调用多次读写接口存在读写失败的可能性
 */
declare function wx$writeBLECharacteristicValue(options: wx$WriteBLECharacteristicValue): void



/**
 * 启用低功耗蓝牙设备特征值变化时的 notify 功能。
 * 注意：必须设备的特征值支持notify才可以成功调用，具体参照 characteristic 的 properties 属性
 * 另外，必须先启用notify才能监听到设备 characteristicValueChange 事件
 */
declare function wx$notifyBLECharacteristicValueChanged(options: wx$NotifyBLECharacteristicValueChanged): void



/**
 * 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。
 */
declare function wx$onBLEConnectionStateChanged(
callback: (
res: {

/**
 * 蓝牙设备 id，参考 device 对象
 */
deviceId: string,

/**
 * 连接目前的状态
 */
connected: boolean
}) => void): void



/**
 * 监听低功耗蓝牙设备的特征值变化。必须先启用notify接口才能接收到设备推送的notification。
 */
declare function wx$onBLECharacteristicValueChange(
callback: (
res: {

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
}) => void): void


declare type wx$StartBeaconDiscoveryOptions = {

/**
 * iBeacon设备广播的 uuids
 */
uuids: string | string[],
success?: (res: wx$ErrMsgResponse) => void
} & wx$BaseOptions


declare type wx$StopBeaconDiscoveryOptions = {
fail?: () => void,
success?: (res: wx$ErrMsgResponse) => void,
complete?: () => void
} & wx$BaseOptions



/**
 * 开始搜索附近的iBeacon设备
 * @version 1.2.0
 */
declare function wx$startBeaconDiscovery(options: wx$StartBeaconDiscoveryOptions): void



/**
 * 停止搜索附近的iBeacon设备
 * @version 1.2.0
 */
declare function wx$stopBeaconDiscovery(options: wx$StopBeaconDiscoveryOptions): void


declare interface wx$Beacon {

/**
 * iBeacon 设备广播的 uuid
 */
uuid: string,

/**
 * iBeacon 设备的主 id
 */
major: string,

/**
 * iBeacon 设备的次 id
 */
minor: string,

/**
 * 表示设备距离的枚举值
 */
proximity: number,

/**
 * iBeacon 设备的距离
 */
accuracy: number,

/**
 * 表示设备的信号强度
 */
rssi: number
} 

declare interface wx$GetBeaconsSuccess {
beacons: wx$Beacon[],
errMsg: string
} 

declare type wx$GetBeaconsOptions = {
success?: (options: wx$GetBeaconsSuccess) => void
} & wx$BaseOptions



/**
 * 获取所有已搜索到的iBeacon设备
 * @version 1.2.0
 */
declare function wx$getBeacons(options: wx$GetBeaconsOptions): void



/**
 * 监听 iBeacon 设备的更新事件
 * @version 1.2.0
 */
declare function wx$onBeaconUpdate(callback?: (beacons: wx$Beacon[]) => void): void



/**
 * 监听 iBeacon 服务的状态变化
 * @version 1.2.0
 */
declare function wx$onBeaconServiceChange(callback?: (available: boolean, discovering: boolean) => void): void


declare type wx$SetScreenBrightnessOptions = {

/**
 * 屏幕亮度值，范围 0~1，0 最暗，1 最亮
 */
value: number
} & wx$BaseOptions



/**
 * 设置屏幕亮度
 * @version 1.2.0
 */
declare function wx$setScreenBrightness(options: wx$SetScreenBrightnessOptions): void


declare type wx$GetScreenBrightnessOptions = {

/**
 * 屏幕亮度值，范围 0~1，0 最暗，1 最亮
 */
success(value: number): void
} & wx$BaseOptions



/**
 * 获取屏幕亮度
 * @version 1.2.0
 */
declare function wx$getScreenBrightness(options?: wx$GetScreenBrightnessOptions): void


declare type wx$SetKeepScreenOnOptions = {

/**
 * 是否保持屏幕常亮
 */
keepScreenOn: boolean,
success?: (res: {
errMsg: string
}) => void
} & wx$BaseOptions



/**
 * 设置是否保持常亮状态。
 * 仅在当前小程序生效，离开小程序后设置失效。
 * @version 1.4.0
 */
declare function wx$setKeepScreenOn(options?: wx$SetKeepScreenOnOptions): void



/**
 * 使手机发生较长时间的振动（400ms）
 * @version 1.2.0
 */
declare function wx$vibrateLong(options?: wx$BaseOptions): void



/**
 * 使手机发生较短时间的振动（15ms）
 * @version 1.2.0
 */
declare function wx$vibrateShort(options?: wx$BaseOptions): void



/**
 * 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件
 * @version 1.4.0
 */
declare function wx$onUserCaptureScreen(callback?: (res: any) => void): void


declare type wx$PhoneContact = {

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
} & wx$BaseOptions



/**
 * 增加 手机联系人
 * 调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式
 * 写入手机系统通讯录
 * 完成手机通讯录联系人和联系方式的增加。
 * @version 1.2.0
 */
declare function wx$addPhoneContact(options: wx$PhoneContact): void



/**
 * 初始化 Wi-Fi 模块。
 * @version 1.6.0
 */
declare function wx$startWifi(options?: wx$BaseOptions): void



/**
 * 关闭 Wi-Fi 模块。
 * @version 1.6.0
 */
declare function wx$stopWifi(options?: wx$BaseOptions): void


declare type wx$ConnectWiFiOptions = {

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
} & wx$BaseOptions



/**
 * 连接 Wi-Fi。
 * 若已知 Wi-Fi 信息，可以直接利用该接口连接。
 * 仅 Android 与 iOS 11 以上版本支持。
 * @version 1.6.0
 */
declare function wx$connectWifi(options?: wx$ConnectWiFiOptions): void



/**
 * 请求获取 Wi-Fi 列表
 * 在 onGetWifiList 注册的回调中返回 wifiList 数据。
 * iOS 将跳转到系统的 Wi-Fi 界面，Android 不会跳转。
 * iOS 11.0 及 iOS 11.1 两个版本因系统问题，该方法失效。但在 iOS 11.2 中已修复。
 * @version 1.6.0
 */
declare function wx$getWifiList(options?: wx$BaseOptions): void


declare interface wx$WiFi {

/**
 * Wi-Fi 的SSID
 */
SSID: string,

/**
 * Wi-Fi 的BSSID
 */
BSSID: string,

/**
 * Wi-Fi 是否安全
 */
secure: boolean,

/**
 * Wi-Fi 信号强度
 */
signalStrength: number
} 

declare interface wx$GetWifiListOptions {

/**
 * Wi-Fi 列表数据
 */
wifiList: wx$WiFi[]
} 


/**
 * 监听在获取到 Wi-Fi 列表数据时的事件，在回调中将返回 wifiList。
 * @version 1.6.0
 */
declare function wx$onGetWifiList(callback?: (res: wx$GetWifiListOptions) => void): void


declare interface wx$SetWifiList {

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
password: string
} 

declare type wx$SetWifiListOptions = {

/**
 * 提供预设的 Wi-Fi 信息列表
 */
wifiList: wx$SetWifiList[]
} & wx$BaseOptions



/**
 * iOS特有接口 在 onGetWifiList 回调后，利用接口设置 wifiList 中 AP 的相关信息。
 * 注意：
 * + 该接口只能在 onGetWifiList 回调之后才能调用。
 * + 此时客户端会挂起，等待小程序设置 Wi-Fi 信息，请务必尽快调用该接口，若无数据请传入一个空数组。
 * + 有可能随着周边 Wi-Fi 列表的刷新，单个流程内收到多次带有存在重复的 Wi-Fi 列表的回调。
 * @version 1.6.0
 */
declare function wx$setWifiList(options: wx$SetWifiListOptions): void



/**
 * 监听连接上 Wi-Fi 的事件。
 * @version 1.6.0
 */
declare function wx$onWifiConnected(callback?: (wifi: wx$WiFi) => void): void


declare type wx$GetConnectedWifiOptions = {
success(wifi: wx$WiFi): void
} & wx$BaseOptions



/**
 * 获取已连接中的 Wi-Fi 信息
 * @version 1.6.0
 */
declare function wx$getConnectedWifi(options?: wx$GetConnectedWifiOptions): void


declare type wx$ToastOptions = {

/**
 * 提示的内容
 */
title: string,

/**
 * 图标，只支持 "success", "loading", "none"
 */
icon?: "success" | "loading" | "none",

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
} & wx$BaseOptions



/**
 * 显示消息提示框
 */
declare function wx$showToast(options: wx$ToastOptions): void


declare function wx$hideToast(): void


declare type wx$LoadingOptions = {

/**
 * 提示的内容
 */
title: string,

/**
 * 是否显示透明蒙层，防止触摸穿透，默认：false
 */
mask?: boolean
} & wx$BaseOptions



/**
 * 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
 */
declare function wx$showLoading(options: wx$LoadingOptions): void



/**
 * 隐藏消息提示框
 */
declare function wx$hideLoading(): void


declare type wx$ModalOptions = {

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
success?: (
res: {

/**
 * 为 true 时，表示用户点击了确定按钮
 */
confirm: boolean,

/**
 * 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
 */
cancel: boolean
}) => void
} & wx$BaseOptions



/**
 * 显示模态弹窗
 */
declare function wx$showModal(options: wx$ModalOptions): void


declare type wx$ActionSheetOptions = {

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
} & wx$BaseOptions



/**
 * 显示操作菜单
 */
declare function wx$showActionSheet(options: wx$ActionSheetOptions): void


declare type wx$SetTopBarTextOptions = {

/**
 * 置顶栏文字内容
 */
text: string
} & wx$BaseOptions



/**
 * 动态设置置顶栏文字内容
 * 只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效
 * 只有在用户将这个小程序置顶后才换上设置的文字内容。
 * 注意：调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调
 * fail，errMsg："setTopBarText: fail invoke too frequently"
 * @version 1.4.3
 */
declare function wx$setTopBarText(options?: wx$SetTopBarTextOptions): void


declare type wx$SetNavigationBarTitleOptions = {

/**
 * 页面标题
 */
title: string
} & wx$BaseOptions



/**
 * 动态设置当前页面的标题。
 * @version 1.4.3
 */
declare function wx$setNavigationBarTitle(options: wx$SetNavigationBarTitleOptions): void


declare type wx$SetNavigationBarColorOptions = {

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
duratio?: number,

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
} & wx$BaseOptions



/**
 * 设置导航颜色
 * @version 1.4.3
 */
declare function wx$setNavigationBarColor(options: wx$SetNavigationBarColorOptions): void



/**
 * 在当前页面显示导航条加载动画。
 * @version 1.4.3
 */
declare function wx$showNavigationBarLoading(): void



/**
 * 隐藏导航条加载动画。
 * @version 1.4.3
 */
declare function wx$hideNavigationBarLoading(): void


declare type wx$SetTabBarBadgeOptions = {

/**
 * tabBar的哪一项，从左边算起
 */
index: number,

/**
 * 显示的文本，超过 3 个字符则显示成“…”
 */
text: string
} & wx$BaseOptions



/**
 * 为 tabBar 某一项的右上角添加文本
 * @version 1.9.0
 */
declare function wx$setTabBarBadge(options: wx$SetTabBarBadgeOptions): void


declare type wx$TabBarBadgeOptions = {

/**
 * tabBar的哪一项，从左边算起
 */
index: number
} & wx$BaseOptions



/**
 * 移除 tabBar 某一项右上角的文本
 * @version 1.9.0
 */
declare function wx$removeTabBarBadge(options: wx$TabBarBadgeOptions): void



/**
 * 显示 tabBar 某一项的右上角的红点
 * @version 1.9.0
 */
declare function wx$showTabBarRedDot(option: wx$TabBarBadgeOptions): void



/**
 * 隐藏 tabBar 某一项的右上角的红点
 * @version 1.9.0
 */
declare function wx$hideTabBarRedDot(option: wx$TabBarBadgeOptions): void


declare type wx$SetTabBarStyleOptions = {

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
} & wx$BaseOptions



/**
 * 动态设置 tabBar 的整体样式
 * @version 1.9.0
 */
declare function wx$setTabBarStyle(options: wx$SetTabBarStyleOptions): void


declare type wx$SetTabBarItemOptions = {

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
} & wx$BaseOptions



/**
 * 动态设置 tabBar 某一项的内容
 * @version 1.9.0
 */
declare function wx$setTabBarItem(options: wx$SetTabBarItemOptions): void


declare type wx$ShowTabBarOptions = {

/**
 * 是否需要动画效果，默认无
 */
aniamtion?: boolean
} & wx$BaseOptions



/**
 * 显示 tabBar
 * @version 1.9.0
 */
declare function wx$showTabBar(options: wx$ShowTabBarOptions): void



/**
 * 隐藏 tabBar
 * @version 1.9.0
 */
declare function wx$hideTabBar(options: wx$ShowTabBarOptions): void


declare type wx$NavigateToOptions = {

/**
 * 需要跳转的应用内页面的路径
 */
url: string
} & wx$BaseOptions



/**
 * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
 * 
 * 注意：为了不让用户在使用小程序时造成困扰，
 * 我们规定页面路径只能是五层，请尽量避免多层级的交互方式。
 */
declare function wx$navigateTo(options: wx$NavigateToOptions): void


declare type wx$SwitchTabOptions = {

/**
 * 需要跳转的 tabBar 页面的路径
 * （需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
 */
url: string
} & wx$BaseOptions



/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 */
declare function wx$switchTab(options: wx$SwitchTabOptions): void


declare type wx$RedirectToOptions = {

/**
 * 需要跳转的应用内页面的路径
 */
url: string
} & wx$BaseOptions



/**
 * 关闭当前页面，跳转到应用内的某个页面。
 */
declare function wx$redirectTo(options: wx$RedirectToOptions): void


declare type wx$NavigateBackOptions = {

/**
 * 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
 */
delta: number
} & wx$BaseOptions



/**
 * 关闭当前页面，回退前一页面。
 */
declare function wx$navigateBack(options?: wx$NavigateBackOptions): void


declare type wx$ReLaunchOptions = {

/**
 * 需要跳转的应用内页面路径 , 路径后可以带参数。
 * 参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔
 * 如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数
 */
url: string
} & wx$BaseOptions



/**
 * 关闭所有页面，打开到应用内的某个页面。
 * @version 1.1.0
 */
declare function wx$reLaunch(options?: wx$ReLaunchOptions): void


declare type wx$TimingFunction = "linear"
| "ease"
| "ease-in"
| "ease-in-out"
| "ease-out"
| "step-start"
| "step-end";

declare interface wx$CreateAnimationOptions {

/**
 * 动画持续时间，单位ms，默认值 400
 */
duration?: number,

/**
 * 定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
 */
timingFunction?: wx$TimingFunction,

/**
 * 动画持续时间，单位 ms，默认值 0
 */
delay?: number,

/**
 * 设置transform-origin，默认为"50% 50% 0"
 */
transformOrigin?: string
} 

declare interface wx$Animator {
actions: wx$AnimationAction[]
} 

declare interface wx$AnimationAction {
animates: wx$Animate[],
option: wx$AnimationActionOption
} 

declare interface wx$AnimationActionOption {
transformOrigin: string,
transition: wx$AnimationTransition
} 

declare interface wx$AnimationTransition {
delay: number,
duration: number,
timingFunction: wx$TimingFunction
} 

declare interface wx$Animate {
type: string,
args: any[]
} 


/**
 * 创建一个动画实例animation。调用实例的方法来描述动画。
 * 最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
 * 
 * 注意: export 方法每次调用后会清掉之前的动画操作
 */
declare function wx$createAnimation(options?: wx$CreateAnimationOptions): wx$Animation



/**
 * 动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。
 */
declare interface wx$Animation {

/**
 * 调用动画操作方法后要调用 step() 来表示一组动画完成，
 * 可以在一组动画中调用任意多个动画方法，
 * 一组动画中的所有动画会同时开始，
 * 一组动画完成后才会进行下一组动画。
 * @param options 指定当前组动画的配置
 */
step(options?: wx$CreateAnimationOptions): void,

/**
 * 导出动画操作
 * 
 * 注意: export 方法每次调用后会清掉之前的动画操作
 */
export(): wx$Animator,

/**
 * 透明度，参数范围 0~1
 */
opacity(value: number): wx$Animation,

/**
 * 颜色值
 */
backgroundColor(color: string): wx$Animation,

/**
 * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 */
width(length: number): wx$Animation,

/**
 * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 */
height(length: number): wx$Animation,

/**
 * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 */
top(length: number): wx$Animation,

/**
 * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 */
left(length: number): wx$Animation,

/**
 * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 */
bottom(length: number): wx$Animation,

/**
 * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
 */
right(length: number): wx$Animation,

/**
 * deg的范围-180~180，从原点顺时针旋转一个deg角度
 */
rotate(deg: number): wx$Animation,

/**
 * deg的范围-180~180，在X轴旋转一个deg角度
 */
rotateX(deg: number): wx$Animation,

/**
 * deg的范围-180~180，在Y轴旋转一个deg角度
 */
rotateY(deg: number): wx$Animation,

/**
 * deg的范围-180~180，在Z轴旋转一个deg角度
 */
rotateZ(deg: number): wx$Animation,

/**
 * 同transform-function rotate3d
 */
rotate3d(x: number, y: number, z: number, deg: number): wx$Animation,

/**
 * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；
 * 两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
 */
scale(sx: number, sy?: number): wx$Animation,

/**
 * 在X轴缩放sx倍数
 */
scaleX(sx: number): wx$Animation,

/**
 * 在Y轴缩放sy倍数
 */
scaleY(sy: number): wx$Animation,

/**
 * 在Z轴缩放sy倍数
 */
scaleZ(sz: number): wx$Animation,

/**
 * 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数
 */
scale3d(sx: number, sy: number, sz: number): wx$Animation,

/**
 * 一个参数时，表示在X轴偏移tx，单位px；
 * 两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
 */
translate(tx: number, ty?: number): wx$Animation,

/**
 * 在X轴偏移tx，单位px
 */
translateX(tx: number): wx$Animation,

/**
 * 在Y轴偏移tx，单位px
 */
translateY(ty: number): wx$Animation,

/**
 * 在Z轴偏移tx，单位px
 */
translateZ(tz: number): wx$Animation,

/**
 * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
 */
translate3d(tx: number, ty: number, tz: number): wx$Animation,

/**
 * 参数范围-180~180；
 * 一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；
 * 两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
 */
skew(ax: number, ay?: number): wx$Animation,

/**
 * 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度
 */
skewX(ax: number): wx$Animation,

/**
 * 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度
 */
skewY(ay: number): wx$Animation,

/**
 * 同transform-function matrix
 */
matrix(
a: number,
b: number,
c: number,
d: number,
tx: number,
ty: number): wx$Animation,

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
d4: number): wx$Animation
} 

declare interface wx$PageScrollToOptions {

/**
 * 滚动到页面的目标位置（单位px
 */
scrollTop: number,

/**
 * 滚动动画的时长，默认300ms，单位 ms
 */
duration?: number
} 

declare function wx$pageScrollTo(options: wx$PageScrollToOptions): void



/**
 * 返回一个SelectorQuery对象实例。
 * 可以在这个实例上使用select等方法选择节点，并使用boundingClientRect等方法选择需要查询的信息。
 * @version 1.4.0
 */
declare function wx$createSelectorQuery(): wx$SelectorQuery



/**
 * WXML节点布局相交状态
 */
declare interface wx$CreateIntersectionObserverOption {
thresholds?: [number, number],
initialRatio?: number,
selectAll?: boolean
} 

declare interface wx$Margins {
left?: number,
right?: number,
top?: number,
bottom?: number
} 

declare interface wx$RectArea {

/**
 * 节点的左边界坐标
 */
left: number,

/**
 * 节点的右边界坐标
 */
right: number,

/**
 * 节点的上边界坐标
 */
top: number,

/**
 * 节点的下边界坐标
 */
bottom: number,

/**
 * 节点的宽度
 */
width: number,

/**
 * 节点的高度
 */
height: number
} 

declare interface wx$ObserveResponse {
id: string,
dataset: any,
time: number,
intersectionRatio: number,
boundingClientRect: wx$RectArea,
intersectionRect: wx$RectArea,
relativeRect: wx$RectArea
} 

declare interface wx$IntersectionObserver {
relativeTo(selector?: string, margins?: wx$Margins): wx$IntersectionObserver,
relativeToViewport(margins?: wx$Margins): wx$IntersectionObserver,
observe(
selector?: string,
callback?: (response: wx$ObserveResponse) => void): wx$IntersectionObserver,
disconnect(): void
} 

declare function wx$createIntersectionObserver(
context: wx$Component<any, any>,
options?: wx$CreateIntersectionObserverOption): wx$IntersectionObserver


declare type wx$NodesRefRect = {

/**
 * 节点的ID
 */
id: string,

/**
 * 节点的dataset
 */
dataset: any
} & wx$RectArea


declare interface wx$NodeRefOffset {

/**
 * 节点的ID
 */
id: string,

/**
 * 节点的dataset
 */
dataset: any,

/**
 * 节点的水平滚动位置
 */
scrollLeft: number,

/**
 * 节点的竖直滚动位置
 */
scrollTop: number
} 

declare interface wx$NodeRefFieldsOptions {

/**
 * 是否返回节点id
 */
id?: boolean,

/**
 * 是否返回节点dataset
 */
dataset?: boolean,

/**
 * 是否返回节点布局位置（left right top bottom
 */
rect?: boolean,

/**
 * 是否返回节点尺寸（width height）
 */
size?: boolean,

/**
 * 是否返回节点的 scrollLeft scrollTop ，节点必须是scroll-view或者viewport
 */
scrollOffset?: boolean,

/**
 * 指定属性名列表
 * 返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值， id class style 和事件绑定的属性值不可获取
 */
properties?: string[]
} 

declare interface wx$NodeRefFieldsValue {
id: {
id: boolean
},
dataset: {
dataset: string
},
rect: {
left: number,
right: number,
top: number,
bottom: number
},
size: {
width: number,
height: number
},
scrollOffset: {
scrollLeft: number,
scrollTop: number
},
properties: {
properties: any
}
} 

declare interface wx$NodesRef {

/**
 * 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。
 * 其功能类似于DOM的getBoundingClientRect。
 * 返回值是nodesRef对应的selectorQuery。
 * 返回的节点信息中，每个节点的位置用
 * left、right、top、bottom、width、height字段描述。
 * 如果提供了callback回调函数，在执行selectQuery的exec方法后
 * 节点信息会在callback中返回。
 */
boundingClientRect<T: wx$NodesRefRect | wx$NodesRefRect[]>(
callback?: (rect: T) => void): wx$SelectorQuery,

/**
 * 添加节点的滚动位置查询请求，以像素为单位。
 * 节点必须是scroll-view或者viewport。
 * 返回值是nodesRef对应的selectorQuery。
 * 返回的节点信息中，每个节点的滚动位置用scrollLeft、scrollHeight字段描述。
 * 如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回。
 */
scrollOffset(callback?: (rect: wx$NodeRefOffset) => void): wx$SelectorQuery,

/**
 * 获取节点的相关信息，需要获取的字段在fields中指定。
 * 返回值是nodesRef对应的selectorQuery。
 */
fields(
fields: wx$NodeRefFieldsOptions,
callback?: (result: any) => void): wx$SelectorQuery
} 


/**
 * SelectorQuery对象实例
 */
declare interface wx$SelectorQuery {

/**
 * 将选择器的选取范围更改为自定义组件component内
 * （初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点
 * @version 1.6.0
 */
in(
component: wx$Component<{[key: string]: any}, {[key: string]: any}>): wx$SelectorQuery,

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
select(selector: string): wx$NodesRef,

/**
 * 在当前页面下选择匹配选择器selector的节点，返回一个NodesRef对象实例。
 * 与selectorQuery.selectNode(selector)不同的是，它选择所有匹配选择器的节点。
 */
selectAll(selector: string): wx$NodesRef,

/**
 * 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息
 * 返回一个NodesRef对象实例。
 */
selectViewport(): wx$NodesRef,

/**
 * 执行所有的请求
 * 请求结果按请求次序构成数组，在callback的第一个参数中返回。
 */
exec(callback?: (result: any[]) => void): void
} 

declare interface wx$CanvasAction {
method: string,
data: wx$CanvasAction[] | Array<number | string>
} 

declare type wx$LineCapType = "butt" | "round" | "square";

declare type wx$LineJoinType = "bevel" | "round" | "miter";

declare interface wx$CanvasGradient {
addColorStop(index: number, color: string): void
} 


/**
 * context只是一个记录方法调用的容器，用于生成记录绘制行为的actions数组。context跟<canvas/>不存在对应关系，一个context生成画布的绘制动作数组可以应用于多个<canvas/>。
 */
declare interface wx$CanvasContext {

/**
 * 获取当前context上存储的绘图动作(不推荐使用)
 */
getActions(): wx$CanvasAction[],

/**
 * 清空当前的存储绘图动作(不推荐使用)
 */
clearActions(): void,

/**
 * 对横纵坐标进行缩放
 * 在调用scale方法后，之后创建的路径其横纵坐标会被缩放。
 * 多次调用scale，倍数会相乘。
 * @param scaleWidth 横坐标缩放的倍数
 * @param scaleHeight 纵坐标轴缩放的倍数
 */
scale(scaleWidth: number, scaleHeight?: number): void,

/**
 * 对坐标轴进行顺时针旋转
 * 以原点为中心，原点可以用 translate方法修改。
 * 顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
 * @param rotate 旋转角度，以弧度计。
 */
rotate(rotate: number): void,

/**
 * 对坐标原点进行缩放
 * 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。
 * @param x 水平坐标平移量
 * @param y 竖直坐标平移量
 */
translate(x: number, y: number): void,

/**
 * 保存当前的绘图上下文。
 */
save(): void,

/**
 * 恢复之前保存的绘图上下文。
 */
restore(): void,

/**
 * 在给定的矩形区域内，清除画布上的像素
 * 清除画布上在该矩形区域内的内容。
 * @param x 矩形区域左上角的x坐标
 * @param y 矩形区域左上角的y坐标
 * @param width 矩形区域的宽度
 * @param height 矩形区域的高度
 */
clearRect(x: number, y: number, width: number, height: number): void,

/**
 * 在画布上绘制被填充的文本
 * @param text 在画布上输出的文本
 * @param x 绘制文本的左上角x坐标位置
 * @param y 绘制文本的左上角y坐标位置
 */
fillText(text: string, x: number, y: number): void,

/**
 * 用于设置文字的对齐
 */
setTextAlign(align: "left" | "center" | "right"): void,

/**
 * 绘制图像，图像保持原始尺寸。
 * @param imageResource 所要绘制的图片资源, 通过chooseImage得到一个文件路径或者一个项目目录内的图片
 * @param dx 源图像的矩形选择框的左上角 X 坐标
 * @param dy 源图像的矩形选择框的左上角 Y 坐标
 */
drawImage(imageResource: string, dx: number, dy: number): void,

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
dHeight: number): void,

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
dHeight: number): void,

/**
 * 设置全局画笔透明度。
 * @param alpha 0~1  透明度，0 表示完全透明，1 表示完全不透明
 */
setGlobalAlpha(alpha: number): void,

/**
 * 对当前路径进行填充
 */
fill(): void,

/**
 * 对当前路径进行描边
 */
stroke(): void,

/**
 * 开始创建一个路径，需要调用fill或者stroke才会使用路径进行填充或描边。
 * Tip: 在最开始的时候相当于调用了一次 beginPath()。
 * Tip: 同一个路径内的多次setFillStyle、setStrokeStyle、setLineWidth等设置，
 * 以最后一次设置为准。
 */
beginPath(): void,

/**
 * 关闭一个路径
 * Tip: 关闭路径会连接起点和终点。
 * Tip: 如果关闭路径后没有调用 fill() 或者 stroke() 并开启了新的路径，那之前的路径将不会被渲染。
 */
closePath(): void,

/**
 * 把路径移动到画布中的指定点，但不创建线条。
 * @param x 目标位置的x坐标
 * @param y 目标位置的y坐标
 */
moveTo(x: number, y: number): void,

/**
 * 在当前位置添加一个新点，然后在画布中创建从该点到最后指定点的路径。
 * @param x 目标位置的x坐标
 * @param y 目标位置的y坐标
 */
lineTo(x: number, y: number): void,

/**
 * 添加一个矩形路径到当前路径。
 * @param x 矩形路径左上角的x坐标
 * @param y 矩形路径左上角的y坐标
 * @param width 矩形路径的宽度
 * @param height 矩形路径的高度
 */
rect(x: number, y: number, width: number, height: number): void,

/**
 * 填充一个矩形。
 * Tip: 用 setFillStyle() 设置矩形的填充色，如果没设置默认是黑色。
 * @param x 矩形路径左上角的x坐标
 * @param y 矩形路径左上角的y坐标
 * @param width 矩形路径的宽度
 * @param height 矩形路径的高度
 */
fillRect(x: number, y: number, width: number, height: number): void,

/**
 * 画一个矩形(非填充)。
 * Tip: 用 setFillStroke() 设置矩形线条的颜色，如果没设置默认是黑色。
 * @param x 矩形路径左上角的x坐标
 * @param y 矩形路径左上角的y坐标
 * @param width 矩形路径的宽度
 * @param height 矩形路径的高度
 */
strokeRect(x: number, y: number, width: number, height: number): void,

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
counterclockwise?: boolean): void,

/**
 * 创建二次方贝塞尔曲线
 * @param cpx 贝塞尔控制点的x坐标
 * @param cpy 贝塞尔控制点的y坐标
 * @param x 结束点的x坐标
 * @param y 结束点的y坐标
 */
quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void,

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
y: number): void,

/**
 * 设置填充样式
 * @param color 设置为填充样式的颜色。'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
 */
setFillStyle(color: string): void,

/**
 * 设置线条样式
 * @param color 设置为填充样式的颜色。'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
 */
setStrokeStyle(color: string): void,

/**
 * 设置阴影
 * @param offsetX 阴影相对于形状在水平方向的偏移
 * @param offsetY 阴影相对于形状在竖直方向的偏移
 * @param blur 阴影的模糊级别，数值越大越模糊 0~100
 * @param color 阴影的颜色。 'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
 */
setShadow(offsetX: number, offsetY: number, blur: number, color: string): void,

/**
 * 创建一个线性的渐变颜色。
 * Tip: 需要使用 addColorStop() 来指定渐变点，至少要两个。
 * @param x0 起点的x坐标
 * @param y0 起点的y坐标
 * @param x1 终点的x坐标
 * @param y1 终点的y坐标
 */
createLinearGradient(x0: number, y0: number, x1: number, y1: number): wx$CanvasGradient,

/**
 * 创建一个颜色的渐变点。
 * Tip: 小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。
 * Tip: 需要使用 addColorStop() 来指定渐变点，至少要两个。
 * @param stop (0-1)  表示渐变点在起点和终点中的位置
 * @param color 渐变点的颜色
 */
addColorStop(stop: number, color: string): void,

/**
 * 创建一个圆形的渐变颜色。
 * @param x 圆心的x坐标
 * @param y 圆心的y坐标
 * @param r 圆的半径
 */
createCircularGradient(x: number, y: number, r: number): void,

/**
 * 设置字体大小
 * @param fontSize 字体的字号
 */
setFontSize(fontSize: number): void,

/**
 * 设置线条端点的样式
 * @param lineCap 线条的结束端点样式。 'butt'、'round'、'square'
 */
setLineCap(lineCap: wx$LineCapType): void,

/**
 * 设置两线相交处的样式
 * @param lineJoin 两条线相交时，所创建的拐角类型
 */
setLineJoin(lineJoin: wx$LineJoinType): void,

/**
 * 设置线条宽度
 * @param lineWidth 线条的宽度
 */
setLineWidth(lineWidth: number): void,

/**
 * 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。
 * 当 setLineJoin为 miter 时才有效。
 * 超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示
 * @param miterLimit 最大斜接长度
 */
setMiterLimit(miterLimit: number): void,

/**
 * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
 * Tip: 绘图上下文需要由 wx.createCanvasContext(canvasId) 来创建。
 * @param reserve 非必填。本次绘制是否接着上一次绘制，即reserve参数为false，则在本次调用drawCanvas绘制之前native层应先清空画布再继续绘制；若reserver参数为true，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false
 */
draw(reserve?: boolean): void
} 


/**
 * 创建并返回绘图上下文context对象。
 * context只是一个记录方法调用的容器，
 * 用于生成记录绘制行为的actions数组。c
 * ontext跟<canvas/>不存在对应关系，
 * 一个context生成画布的绘制动作数组可以应用于多个<canvas/>。
 */
declare function wx$createContext(): wx$CanvasContext


declare interface wx$DrawCanvasOptions {

/**
 * 画布标识，传入 <canvas/> 的 cavas-id
 */
canvasId: number | string,

/**
 * 绘图动作数组，由 wx.createContext 创建的 context，
 * 调用 getActions 方法导出绘图动作数组。
 */
actions: wx$CanvasAction[]
} 


/**
 * 绘制画布
 */
declare function wx$drawCanvas(options: wx$DrawCanvasOptions): void


declare type wx$CanvasToTempFilePathOptions = {

/**
 * 画布标识，传入 <canvas/> 的 cavas-id
 */
canvasId: string
} & wx$BaseOptions



/**
 * 把当前画布的内容导出生成图片，并返回文件路径
 */
declare function wx$canvasToTempFilePath(options: wx$CanvasToTempFilePathOptions): void


declare type wx$CanvasImageDataOptions = {

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
} & wx$BaseOptions



/**
 * 返回一个数组，用来描述 canvas 区域隐含的像素数据
 * @version 1.9.0
 */
declare function wx$canvasGetImageData(options: wx$CanvasImageDataOptions): void



/**
 * 将像素数据绘制到画布的方法
 * @version 1.9.0
 */
declare function wx$canvasPutImageData(options: wx$CanvasImageDataOptions): void



/**
 * 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
 * @version 1.5.0
 */
declare function wx$startPullDownRefresh(options?: wx$BaseOptions): void



/**
 * 停止当前页面下拉刷新
 * @version 1.5.0
 */
declare function wx$stopPullDownRefresh(options?: wx$BaseOptions): void


declare interface wx$ExtConfig {

/**
 * 第三方平台自定义的数据
 */
extConfig: any
} 

declare type wx$GetExtConfigOptions = {
success(res: {
errMsg: string
} & wx$ExtConfig): void
} & wx$BaseOptions



/**
 * 获取第三方平台自定义的数据字段。
 * @version 1.1.0
 */
declare function wx$getExtConfig(options?: wx$GetExtConfigOptions): void



/**
 * 获取第三方平台自定义的数据字段的同步接口。
 * @version 1.1.0
 */
declare function wx$getExtConfigSync(): wx$ExtConfig



/**
 * 登录态维护
 * 通过 wx.login() 获取到用户登录态之后，需要维护登录态。
 * 开发者要注意不应该直接把 session_key、openid 等字段作为用户的标识
 * 或者 session 的标识，而应该自己派发一个 session 登录态（请参考登录时序图）。
 * 对于开发者自己生成的 session，应该保证其安全性且不应该设置较长的过期时间。
 * session 派发到小程序客户端之后，可将其存储在 storage ，用于后续通信使用。
 * 通过wx.checkSession() 检测用户登录态是否失效。并决定是否调用wx.login()
 * 重新获取登录态
 */
declare interface wx$LoginResponse {

/**
 * 调用结果
 */
errMsg: string,

/**
 * 用户允许登录后，回调内容会带上 code（有效期五分钟），
 * 开发者需要将 code 发送到开发者服务器后台，
 * 使用code 换取 session_key api，
 * 将 code 换成 openid 和 session_key
 */
code: string
} 

declare type wx$LoginOptions = {

/**
 * 接口调用成功的回调函数
 */
success?: (res: wx$LoginResponse) => void
} & wx$BaseOptions



/**
 * 调用接口获取登录凭证（code）进而换取用户登录态信息，
 * 包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）。
 * 用户数据的加解密通讯需要依赖会话密钥完成。
 */
declare function wx$login(option: wx$LoginOptions): void


declare type wx$CheckSessionOption = wx$BaseOptions;


/**
 * 检测当前用户登录态是否有效。
 * 通过wx.login获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。
 * 反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。
 * 开发者只需要调用wx.checkSession接口检测当前用户登录态是否有效。
 * 登录态过期后开发者可以再调用wx.login获取新的用户登录态。
 */
declare function wx$checkSession(options: wx$CheckSessionOption): void


declare type wx$Scope = "scope.userInfo"
| "scope.userLocation"
| "scope.address"
| "scope.invoiceTitle"
| "scope.invoice"
| "scope.werun"
| "scope.record"
| "scope.writePhotosAlbum"
| "scope.camera";

declare interface wx$AuthorizeOption {
scope: wx$Scope,
success?: (res: wx$ErrMsgResponse) => void,
fail?: () => void,
complete?: () => void
} 


/**
 * 提前向用户发起授权请求。
 * 调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，
 * 但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
 */
declare function wx$authorize(options: wx$AuthorizeOption): void


declare interface wx$UserInfo {
nickName: string,
avatarUrl: string,
gender: number,
province: string,
city: string,
country: string
} 

declare interface wx$UserInfoResponse {

/**
 * 用户信息对象，不包含 openid 等敏感信息
 */
userInfo: wx$UserInfo,

/**
 * 不包括敏感信息的原始数据字符串，用于计算签名。
 */
rawData: string,

/**
 * 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息。
 */
signature: string,

/**
 * 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法
 */
encryptData: string
} 

declare type wx$GetUserInfoOptions = {
withCredentials?: boolean,
lang?: string,

/**
 * 接口调用成功的回调函数
 */
success?: (res: wx$UserInfoResponse) => void
} & wx$BaseOptions



/**
 * 获取用户信息，需要先调用 wx.login 接口。
 */
declare function wx$getUserInfo(options: wx$GetUserInfoOptions): void


declare type wx$PaymentSignType = "MD5" | "HMAC-SHA256";

declare type wx$RequestPaymentOptions = {

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
signType: wx$PaymentSignType,

/**
 * 签名,具体签名方案参见微信公众号支付帮助文档;
 */
paySign: string
} & wx$BaseOptions



/**
 * 发起微信支付。
 */
declare function wx$requestPayment(options: wx$RequestPaymentOptions): void


declare type wx$ShareAppMessage = {

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
success?: (
res: {

/**
 * 每一项是一个 shareTicket ，对应一个转发对象
 */
shareTickets: string[]
}) => void
} & wx$BaseOptions


declare type wx$ShareMenuOptions = {
withShareTicket?: boolean
} & wx$BaseOptions



/**
 * 显示分享按钮
 */
declare function wx$showShareMenu(options?: wx$ShareMenuOptions): void



/**
 * 隐藏分享按钮
 * @version 1.1.0
 */
declare function wx$hideShareMenu(options?: wx$ShareMenuOptions): void


declare type wx$UpdateShareMenuOptions = {

/**
 * 是否使用带 shareTicket 的转发详情
 */
withShareTicket?: boolean
} & wx$BaseOptions



/**
 * 更新转发属性
 * @version 1.2.0
 */
declare function wx$updateShareMenu(options?: wx$UpdateShareMenuOptions): void


declare type wx$GetShareInfoOptions = {

/**
 * shareTicket
 */
shareTicket: string,
success(
res: {

/**
 * 错误信息
 */
errMsg: string,

/**
 * 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://mp.weixin.qq.com/debug/wxadoc/dev/api/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95)
 */
encryptedData: string,

/**
 * 加密算法的初始向量，详细见[加密数据解密算法](https://mp.weixin.qq.com/debug/wxadoc/dev/api/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95)
 */
iv: string
}): void
} & wx$BaseOptions



/**
 * 获取转发详细信息
 * @version 1.1.0
 */
declare function wx$getShareInfo(options?: wx$GetShareInfoOptions): void


declare type wx$ChooseAddressOptions = {
success?: (
res: {

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
} & wx$BaseOptions


declare function wx$chooseAddress(options: wx$ChooseAddressOptions): void


declare interface wx$Card {
cardId: string,
cardExt: string,
code?: string
} 

declare type wx$CardOptions = {
cardList: wx$Card[],
fail?: () => void,
success?: () => void,
complete?: () => void
} & wx$BaseOptions


declare type wx$CardExe = {
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
} & wx$BaseOptions



/**
 * 批量添加卡券。
 */
declare function wx$addCard(options: wx$CardOptions): void


declare type wx$OpenCardOptions = {
cardList: Array<{
cardId: string,
code: string
}>
} & wx$BaseOptions



/**
 * 查看微信卡包中的卡券。
 */
declare function wx$openCard(options: wx$OpenCardOptions): void


declare type wx$OpenSettingOptions = {
success?: (
res: {
authSetting: $ObjMapi<{[k: wx$Scope]: any}, <key>(key) => boolean>
}) => void
} & wx$BaseOptions



/**
 * 调起客户端小程序设置界面，返回用户设置的操作结果。
 * 注：设置界面只会出现小程序已经向用户请求过的权限。
 * @version 1.1.0
 */
declare function wx$openSetting(options: wx$OpenSettingOptions): void



/**
 * 获取用户的当前设置。
 * 注：返回值中只会出现小程序已经向用户请求过的权限。
 * @version 1.2.0
 */
declare function wx$getSetting(options: wx$OpenSettingOptions): void


declare interface wx$StepInfo {

/**
 * 时间戳，表示数据对应的时间
 */
timestamp: number,

/**
 * 微信运动步数
 */
step: number
} 


/**
 * 用户过去三十天的微信运动步数
 */
declare interface wx$StepInfoList {
stepInfoList: wx$StepInfo[]
} 

declare type wx$WeRunDataOptions = {
success?: (res: {
errMsg: string,
encryptedData: string,
iv: string
}) => void
} & wx$BaseOptions



/**
 * 获取用户过去三十天微信运动步数
 * 需要先调用 wx.login 接口。
 * 需要用户授权 scope.werun
 */
declare function wx$getWeRunData(options?: wx$WeRunDataOptions): void


declare type wx$AuthModes = "fingerPrint" | "facial" | "speech";

declare type wx$CheckIsSupportSoterAuthenticationOptions = {
success?: (res: {
supportMode: wx$AuthModes[],
errMsg: string
}) => void
} & wx$BaseOptions



/**
 * 获取本机支持的 SOTER 生物认证方式
 */
declare function wx$checkIsSupportSoterAuthentication(options: wx$CheckIsSupportSoterAuthenticationOptions): void


declare type wx$StartSoterAuthenticationOptions = {
requestAuthModes: wx$AuthModes[],
challenge: string,
authContent?: string,
success?: (
res: {
errCode: number,
authMode: string,
resultJSON: string,
resultJSONSignature: string,
errMsg: string
}) => void
} & wx$BaseOptions



/**
 * 开始 SOTER 生物认证
 */
declare function wx$startSoterAuthentication(options: wx$StartSoterAuthenticationOptions): void


declare type wx$CheckIsSoterEnrolledInDeviceOptions = {
checkAuthMode: wx$AuthModes,
success?: (res: {
isEnrolled: boolean,
errMsg: string
}) => void
} & wx$BaseOptions



/**
 * 获取设备内是否录入如指纹等生物信息的接口
 */
declare function wx$checkIsSoterEnrolledInDevice(options: wx$CheckIsSoterEnrolledInDeviceOptions): void


declare type wx$ChooseInvoiceTitleOptions = {
success?: (
res: {
type: string,
title: string,
taxNumber: string,
companyAddress: string,
telephone: string,
bankName: string,
bankAccount: string,
errMsg: string
}) => void
} & wx$BaseOptions



/**
 * 选择用户的发票抬头。
 */
declare function wx$chooseInvoiceTitle(options: wx$ChooseInvoiceTitleOptions): void


declare interface wx$UpdateManager {

/**
 * 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。
 */
applyUpdate(): void,

/**
 * 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。
 */
onCheckForUpdate(callback: (result: {
hasUpdate: boolean
}) => void): void,

/**
 * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调
 */
onUpdateFailed(callback: (res: {
errMsg: string
}) => void): void,

/**
 * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
 */
onUpdateReady(callback: () => void): void
} 


/**
 * 获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。
 */
declare function wx$getUpdateManager(): wx$UpdateManager


declare type wx$NavigateToMiniProgramOptions = {
appId: string,
path?: string,
extraData?: any,
envVersion?: string,
success?: (res: {
errMsg: string
}) => void
} & wx$BaseOptions



/**
 * 打开同一公众号下关联的另一个小程序。
 */
declare function wx$navigateToMiniProgram(options: wx$NavigateToMiniProgramOptions): void


declare type wx$NavigateBackMiniProgramOptions = {
extraData?: any,
success?: (res: {
errMsg: string
}) => void
} & wx$BaseOptions



/**
 * 返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功
 */
declare function wx$navigateBackMiniProgram(options: wx$NavigateBackMiniProgramOptions): void



/**
 * 将 ArrayBuffer 数据转成 Base64 字符串
 */
declare function wx$arrayBufferToBase64(arrayBuffer: ArrayBuffer): string



/**
 * 将 Base64 字符串转成 ArrayBuffer 数据
 */
declare function wx$base64ToArrayBuffer(base64: string): ArrayBuffer



/**
 * 收起键盘。
 */
declare function wx$hideKeyboard(): void


declare interface wx$EventTarget {
id: string,
tagName: string,
dataset: {
[name: string]: string
}
} 

declare type wx$TouchEventType = "tap"
| "touchstart"
| "touchmove"
| "touchcancel"
| "touchend"
| "touchforcechange";

declare type wx$TransitionEventType = "transitionend" | "animationstart" | "animationiteration" | "animationend";

declare type wx$EventType = "input"
| "form"
| "submit"
| "scroll"
| wx$TouchEventType
| wx$TransitionEventType
| "tap"
| "longpress";

declare interface wx$BaseEvent<T: string, Detail> {
type: T,
timeStamp: number,
currentTarget: wx$EventTarget,
target: wx$EventTarget,
detail: Detail
} 

declare type wx$BuiltInEvent<T: wx$EventType, Detail> = {} & wx$BaseEvent<T, Detail>


declare type wx$CustomEvent<T: string, Detail> = {} & wx$BaseEvent<T, Detail>



/**
 * 指定focus时的光标位置
 * @version 1.5.0
 */
declare type wx$InputEvent = {} & wx$BuiltInEvent<"input", {
value: string,
cursor: number
}>


declare type wx$FormEvent = {} & wx$BuiltInEvent<"form", {
value: {
[name: string]: string | boolean | number
}
}>


declare type wx$ScrollEvent = {} & wx$BuiltInEvent<"scroll", {}>


declare interface wx$Touch {
identifier: number,
pageX: number,
pageY: number,
clientX: number,
clientY: number
} 

declare type wx$TouchEvent<T: wx$TouchEventType> = {
touches: wx$Touch[],
changedTouches: wx$Touch[]
} & wx$BuiltInEvent<T, {
x: number,
y: number
}>


declare type wx$TapEvent = {} & wx$TouchEvent<"tap">


declare type wx$TouchStartEvent = {} & wx$TouchEvent<"touchstart">


declare type wx$TouchEndEvent = {} & wx$TouchEvent<"touchend">


declare type wx$TouchMoveEvent = {} & wx$TouchEvent<"touchmove">


declare type wx$TouchCancelEvent = {} & wx$TouchEvent<"touchcancel">


declare type wx$TouchForceChangeEvent = {} & wx$TouchEvent<"touchforcechange">


declare interface wx$Logger {

/**
 * 写log日志，可以提供任意个参数，每个参数的类型为Object/Array/Number/String，参数p1到pN的内容会写入日志
 */
log(...args: any[]): void,

/**
 * 写warn日志，参数同log方法
 */
warn(...args: any[]): void,

/**
 * 写debug日志，参数同log方法
 */
debug(...args: any[]): void,

/**
 * 写info日志，参数同log方法
 */
info(...args: any[]): void
} 


/**
 * 获取日志管理器 logManager 对象。logManager提供log、info、warn、debug四个方法写日志到文件，
 * 这四个方法接受任意个类型为Object/Array/Number/String的参数，
 * 每次调用的参数的总大小不超过100Kb。最多保存5M的日志内容，超过5M后，旧的日志内容会被删除。
 * 用户可以通过设置Button组件的open-type为feedback来上传打印的日志。
 * 用户上传的日志可以通过登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到。
 */
declare function wx$getLogManager(): wx$Logger



/**
 * 自定义业务数据监控上报接口。使用前，需要在小程序管理后台-运维中心-性能监控-业务数据监控中新建监控事件，
 * 配置监控描述与告警类型。每一个监控事件对应唯一的监控ID，开发者最多可以创建128个监控事件。
 * @param name 监控ID，在小程序管理后台新建数据指标后获得
 * @param value 上报数值，经处理后会在小程序管理后台上展示每分钟的上报总量
 */
declare function wx$reportMonitor(name: string, value: number): void



/**
 * 自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。
 * @param eventName 事件名
 * @param data 上报的自定义数据
 */
declare function wx$reportAnalytics(eventName: string, data: {[key: string]: any}): void



/**
 * 用于延迟一部分操作到下一个时间片再执行（类似于 setTimeout）。
 * @param func
 * @version 2.2.3
 */
declare function wx$nextTick(func: () => any): void


declare function wx$setEnableDebug(options: wx$EnableDebugOptions): void


declare type wx$EnableDebugOptions = {
enableDebug: boolean
} & wx$BaseOptions


declare interface wx$AccountInfo {
miniProgram: {
appId: string
},
plugin?: {
appId: string,
version: string
}
} 


/**
 * 获取当前账号信息
 * @version >= 2.2.2
 */
declare function wx$getAccountInfoSync(): wx$AccountInfo



/**
 * App 实现的接口对象
 * 开发者可以添加任意的函数或数据到 Object 参数中，用 this 可以访问
 */
declare interface wx$AppOptions {

/**
 * 监听小程序初始化。
 * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
 * 生命周期函数
 */
onLaunch?: (option: wx$LaunchOptions) => void,

/**
 * 监听小程序显示。
 * 当小程序启动，或从后台进入前台显示，会触发 onShow
 * 生命周期函数
 */
onShow?: (option: wx$LaunchOptions) => void,

/**
 * 监听小程序隐藏。
 * 当小程序从前台进入后台，会触发 onHide
 * 生命周期函数
 */
onHide?: () => void,

/**
 * 错误监听函数
 * 当小程序发生脚本错误或者 api 调用失败时
 * 会触发 onError 并带上错误信息
 */
onError?: (msg: string) => void,

/**
 * 小程序退出时触发
 */
onUnlaunch?: () => void,

/**
 * 全局Data
 */
globalData?: {[key: string]: any}
} 

declare interface wx$App {

/**
 * 获取当前页面
 */
getCurrentPage(): wx$Page
} 

declare type wx$DefaultData<V> = {[key: string]: any} | (() => {[key: string]: any});

declare type wx$DefaultProps = {[key: string]: any} | Record<string, any>;

declare type wx$UnionToIntersection<U> = "There was Conditional Type, use $Call utility type";

declare type wx$ArrayType<T: any[]> = "There was Conditional Type, use $Call utility type";

declare interface wx$Behavior<Data, Props, Methods> {
__DO_NOT_USE_INTERNAL_FIELD_DATA: Data,
__DO_NOT_USE_INTERNAL_FIELD_PROPS: Props,
__DO_NOT_USE_INTERNAL_FIELD_METHODS: Methods
} 

declare type wx$UnboxBehaviorData<T> = "There was Conditional Type, use $Call utility type";

declare type wx$UnboxBehaviorProps<T> = "There was Conditional Type, use $Call utility type";

declare type wx$UnboxBehaviorMethod<T> = "There was Conditional Type, use $Call utility type";

declare type wx$UnboxBehaviorsMethods<Behaviors: Array<wx$Behavior<{}, {}, {}> | string>> = wx$UnionToIntersection<wx$UnboxBehaviorMethod<wx$ArrayType<Behaviors>>>;

declare type wx$UnboxBehaviorsData<Behaviors: Array<wx$Behavior<{}, {}, {}> | string>> = wx$UnionToIntersection<wx$UnboxBehaviorData<wx$ArrayType<Behaviors>>>;

declare type wx$UnboxBehaviorsProps<Behaviors: Array<wx$Behavior<{}, {}, {}> | string>> = wx$UnionToIntersection<wx$UnboxBehaviorProps<wx$ArrayType<Behaviors>>>;

declare type wx$CombinedInstance<Instance: wx$Component<Data, Props, Behaviors>, Data, Methods, Props, Behaviors: Array<wx$Behavior<{}, {}, {}> | string>> = Methods & Instance & wx$UnboxBehaviorsMethods<Behaviors>;

declare type wx$Prop<T> = (() => T) | {
new (...args: any[]): T & {[key: string]: any}
};

declare type wx$PropValidator<T> = wx$PropOptions<T> | wx$Prop<T> | Array<wx$Prop<T>>;

declare interface wx$DefaultMethods<V> {
[key: string]: (...args: any[]) => any
} 

declare interface wx$PropOptions<T= any> {
type?: wx$Prop<T> | Array<wx$Prop<T>>,
value?: T | null | (() => {[key: string]: any}),
observer?: (value: T, old: T, changedPath: string) => void
} 

declare type wx$RecordPropsDefinition<T> = $ObjMapi<T, <K>(K) => wx$PropValidator<$ElementType<T, K>>>;

declare type wx$ArrayPropsDefinition<T> = Array<$Keys<T>>;

declare type wx$PropsDefinition<T> = wx$ArrayPropsDefinition<T> | wx$RecordPropsDefinition<T>;

declare interface wx$ComponentRelation<D= any, P= any> {

/**
 * 目标组件的相对关系，可选的值为 parent 、 child 、 ancestor 、 descendant
 */
type: "parent" | "child" | "ancestor" | "descendant",

/**
 * 如果这一项被设置，则它表示关联的目标节点所应具有的behavior，所有拥有这一behavior的组件节点都会被关联
 */
target?: string,

/**
 * 关系生命周期函数，当关系被建立在页面节点树中时触发，触发时机在组件attached生命周期之后
 */
linked?: (target: wx$Component<D, P>) => void,

/**
 * 关系生命周期函数，当关系在页面节点树中发生改变时触发，触发时机在组件moved生命周期之后
 */
linkChanged?: (target: wx$Component<D, P>) => void,

/**
 * 关系生命周期函数，当关系脱离页面节点树时触发，触发时机在组件detached生命周期之后
 */
unlinked?: (target: wx$Component<D, P>) => void,

/**
 * 目标组件的相对关系，可选的值为 parent 、 child 、 ancestor 、 descendant
 */
type: "parent" | "child" | "ancestor" | "descendant",

/**
 * 如果这一项被设置，则它表示关联的目标节点所应具有的behavior，所有拥有这一behavior的组件节点都会被关联
 */
target?: string,

/**
 * 关系生命周期函数，当关系被建立在页面节点树中时触发，触发时机在组件attached生命周期之后
 */
linked?: (target: wx$Component<D, P>) => void,

/**
 * 关系生命周期函数，当关系在页面节点树中发生改变时触发，触发时机在组件moved生命周期之后
 */
linkChanged?: (target: wx$Component<D, P>) => void,

/**
 * 关系生命周期函数，当关系脱离页面节点树时触发，触发时机在组件detached生命周期之后
 */
unlinked?: (target: wx$Component<D, P>) => void
} 

declare type wx$ThisTypedComponentOptionsWithRecordProps<V: wx$Component<Data, Props, Behaviors>, Data, Methods, Props, Behaviors: Array<wx$Behavior<{}, {}, {}> | string>> = {[key: string]: any} & wx$ComponentOptions<V, Data, Methods, Props, Behaviors> & ThisType<wx$CombinedInstance<V, Data, Methods, $ReadOnly<Props>, Behaviors>>;


/**
 * 组件所在页面的生命周期声明对象，目前仅支持页面的show和hide两个生命周期
 */
declare interface wx$PageLifetimes {
show(): void,
hide(): void
} 


/**
 * 组件生命周期声明对象，组件的生命周期：created、attached、ready、moved、detached将收归到lifetimes字段内进行声明，
 * 原有声明方式仍旧有效，如同时存在两种声明方式，则lifetimes字段内声明方式优先级最高
 */
declare interface wx$Lifetimes {

/**
 * 组件生命周期函数，在组件实例进入页面节点树时执行
 * 注意此时不能调用 setData
 */
created(): void,

/**
 * 组件生命周期函数，在组件实例进入页面节点树时执行
 */
attached(): void,

/**
 * 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息
 * 使用 [SelectorQuery](https://mp.weixin.qq.com/debug/wxadoc/dev/api/wxml-nodes-info.html)
 */
ready(): void,

/**
 * 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
 */
moved(): void,

/**
 * 组件生命周期函数，在组件实例被从页面节点树移除时执行
 */
detached(): void
} 


/**
 * Component组件参数
 */
declare type wx$ComponentOptions<Instance: wx$Component<Data, Props, Behaviors>, Data= wx$DefaultData<Instance>, Methods= wx$DefaultMethods<Instance>, Props= wx$PropsDefinition<wx$DefaultProps>, Behaviors: Array<wx$Behavior<{}, {}, {}> | string>= []> = {

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
 * 参见[组件事件](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/events.html)
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
 * 在组件的wxml中可以包含 slot 节点，用于承载组件使用者提供的wxml结构。
 * 默认情况下，一个组件的wxml中只能有一个slot。需要使用多slot时，可以在组件js中声明启用。
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
 * 参见 [behaviors](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/behaviors.html)
 */
behaviors?: Behaviors,

/**
 * 组件生命周期声明对象，组件的生命周期：created、attached、ready、moved、detached将收归到lifetimes字段内进行声明，
 * 原有声明方式仍旧有效，如同时存在两种声明方式，则lifetimes字段内声明方式优先级最高
 */
lifetimes?: $Shape<wx$Lifetimes>,

/**
 * 组件所在页面的生命周期声明对象，目前仅支持页面的show和hide两个生命周期
 */
pageLifetimes?: $Shape<wx$PageLifetimes>,

/**
 * 组件间关系定义，参见 [组件间关系](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/relations.html)
 */
relations?: {
[key: string]: wx$ComponentRelation
}
} & $Shape<wx$Lifetimes>



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
declare type wx$PropValueType<Def> = "There was Conditional Type, use $Call utility type";


/**
 * Component实例方法
 */
declare interface wx$Component<D, P, B: Array<wx$Behavior<{}, {}, {}> | string>= []> {

/**
 * 组件的文件路径
 */
is: string,

/**
 * 节点id
 */
id: string,

/**
 * 节点dataset
 */
dataset: string,

/**
 * 组件数据，包括内部数据和属性值
 */
data: D & wx$UnboxBehaviorsData<B> & $ObjMapi<(P & wx$UnboxBehaviorsProps<B>), <key>(key) => wx$PropValueType<$ElementType<(P & wx$UnboxBehaviorsProps<B>), key>>>,

/**
 * 组件数据，包括内部数据和属性值（与 data 一致）
 */
properties: D & wx$UnboxBehaviorsData<B> & $ObjMapi<(P & wx$UnboxBehaviorsProps<B>), <key>(key) => wx$PropValueType<$ElementType<(P & wx$UnboxBehaviorsProps<B>), key>>>,

/**
 * 将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
 * 1. 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
 * 2. 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
 * 3. 请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题
 * @param data object 以 key，value 的形式表示将 this.data 中的 key 对应的值改变成 value
 * @param callback callback 是一个回调函数，在这次setData对界面渲染完毕后调用
 */
setData(
data: $ObjMapi<D, <key>(key) => string
| number
| boolean
| Symbol
| {[key: string]: any}
| null
| any[]>,
callback?: () => void): void,

/**
 * 检查组件是否具有 behavior
 * 检查时会递归检查被直接或间接引入的所有behavior
 */
hasBehavior(behavior: any): boolean,

/**
 * 触发事件，参见 [组件事件](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/events.html)
 */
triggerEvent(
name: string,
details?: any,
options?: $Shape<{
bubbles: boolean,
composed: boolean,
capturePhase: boolean
}>): void,

/**
 * 创建一个 SelectorQuery 对象
 * 选择器选取范围为这个[组件实例](https://mp.weixin.qq.com/debug/wxadoc/dev/api/wxml-nodes-info.html)内
 */
wx$createSelectorQuery(): wx$SelectorQuery,

/**
 * 节点布局交叉状态API可用于监听两个或多个组件节点在布局位置上的相交状态。这一组API常常可以用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。
 * https://developers.weixin.qq.com/miniprogram/dev/api/intersection-observer.html
 */
wx$createIntersectionObserver(options?: wx$CreateIntersectionObserverOption): wx$IntersectionObserver,

/**
 * 使用选择器选择组件实例节点
 * 返回匹配到的第一个组件实例对象
 */
selectComponent(selector: string): wx$Component<any, any>,

/**
 * selector  使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
 */
selectAllComponents(selector: string): Array<wx$Component<any, any>>,

/**
 * 获取所有这个关系对应的所有关联节点，参见 [组件间关系](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/relations.html)
 */
getRelationNodes(relationKey: string): wx$ComponentRelation[]
} 

declare interface wx$PageShareAppMessageOptions {

/**
 * 转发事件来源。button：页面内转发按钮；menu：右上角转发菜单
 */
from: "button" | "menu",

/**
 * 如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined
 */
target: {[key: string]: any} | void
} 


/**
 * Page 实现的接口对象
 */
declare interface wx$PageOptions {

/**
 * 页面的初始数据
 */
data?: any,

/**
 * 生命周期函数--监听页面加载
 * @param options 接收页面参数可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query
 */
onLoad?: (options: {[key: string]: any}) => void,

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady?: () => void,

/**
 * 生命周期函数--监听页面显示
 */
onShow?: () => void,

/**
 * 生命周期函数--监听页面隐藏
 */
onHide?: () => void,

/**
 * 生命周期函数--监听页面卸载
 */
onUnload?: () => void,

/**
 * 下拉刷新
 * 在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。
 * 需要在 config 的window选项中开启 enablePullDownRefresh。
 * 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
 */
onPullDownRefresh?: () => void,

/**
 * 页面上拉触底事件的处理函数
 * 监听用户上拉触底事件。
 * 可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
 * 在触发距离内滑动期间，本事件只会被触发一次。
 */
onReachBottom?: () => void,

/**
 * 在 Page 中定义 onShareAppMessage 函数，设置该页面的转发信息。
 * + 只有定义了此事件处理函数，右上角菜单才会显示 “转发” 按
 * + 用户点击转发按钮的时候会调
 * + 此事件需要 return 一个 Object，用于自定义转发内容
 */
onShareAppMessage?: (options?: wx$PageShareAppMessageOptions) => wx$ShareAppMessage,

/**
 * 页面滚动触发事件的处理函数
 * 监听用户滑动页面事件。
 * 参数为 Object，包含以下字段：
 */
onPageScroll?: (option: {
scrollTop: number
}) => void,

/**
 * 当前是 tab 页时，点击 tab 时触发
 */
onTabItemTap?: (item: any) => void
} 

declare type wx$Page<D= {[key: string]: any}, P= {[key: string]: any}> = {

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
wx$pageScrollTo(option?: wx$PageScrollToOptions): void
} & wx$Component<D, P>


declare type wx$SceneValues = 1001
| 1005
| 1006
| 1007
| 1008
| 1011
| 1012
| 1013
| 1014
| 1017
| 1019
| 1020
| 1022
| 1023
| 1024
| 1025
| 1026
| 1027
| 1028
| 1029
| 1030
| 1031
| 1032
| 1034
| 1035
| 1036
| 1037
| 1038
| 1039
| 1042
| 1043
| 1044
| 1045
| 1046
| 1047
| 1048
| 1049
| 1052
| 1053
| 1054
| 1056
| 1057
| 1058
| 1059
| 1064
| 1067
| 1068
| 1069
| 1071
| 1072
| 1073
| 1074
| 1077
| 1078
| 1079
| 1081
| 1082
| 1084
| 1089
| 1090
| 1091
| 1092
| 1095
| 1096
| 1097
| 1099
| 1102
| 1103
| 1104
| number;

declare interface wx$LaunchOptions {

/**
 * 打开小程序的路径
 */
path: string,

/**
 * 打开小程序的query
 */
query: {[key: string]: any},

/**
 * 打开小程序的[场景值](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/scene.html)
 * 
 * - 1001: 发现栏小程序主入口，「最近使用」列表（基础库2.2.4版本起包含「我的小程序」列表）
 * - 1005: 顶部搜索框的搜索结果页
 * - 1006: 发现栏小程序主入口搜索框的搜索结果页
 * - 1007: 单人聊天会话中的小程序消息卡片
 * - 1008: 群聊会话中的小程序消息卡片
 * - 1011: 扫描二维码
 * - 1012: 长按图片识别二维码
 * - 1013: 手机相册选取二维码
 * - 1014: 小程序模板消息
 * - 1017: 前往体验版的入口页
 * - 1019: 微信钱包
 * - 1020: 公众号 profile 页相关小程序列表
 * - 1022: 聊天顶部置顶小程序入口
 * - 1023: 安卓系统桌面图标
 * - 1024: 小程序 profile 页
 * - 1025: 扫描一维码
 * - 1026: 附近小程序列表
 * - 1027: 顶部搜索框搜索结果页「使用过的小程序」列表
 * - 1028: 我的卡包
 * - 1029: 卡券详情页
 * - 1030: 自动化测试下打开小程序
 * - 1031: 长按图片识别一维码
 * - 1032: 手机相册选取一维码
 * - 1034: 微信支付完成页
 * - 1035: 公众号自定义菜单
 * - 1036: App 分享消息卡片
 * - 1037: 小程序打开小程序
 * - 1038: 从另一个小程序返回
 * - 1039: 摇电视
 * - 1042: 添加好友搜索框的搜索结果页
 * - 1043: 公众号模板消息
 * - 1044: 带 shareTicket 的小程序消息卡片 [详情]((转发#获取更多转发信息))
 * - 1045: 朋友圈广告
 * - 1046: 朋友圈广告详情页
 * - 1047: 扫描小程序码
 * - 1048: 长按图片识别小程序码
 * - 1049: 手机相册选取小程序码
 * - 1052: 卡券的适用门店列表
 * - 1053: 搜一搜的结果页
 * - 1054: 顶部搜索框小程序快捷入口
 * - 1056: 音乐播放器菜单
 * - 1057: 钱包中的银行卡详情页
 * - 1058: 公众号文章
 * - 1059: 体验版小程序绑定邀请页
 * - 1064: 微信连Wi-Fi状态栏
 * - 1067: 公众号文章广告
 * - 1068: 附近小程序列表广告
 * - 1069: 移动应用
 * - 1071: 钱包中的银行卡列表页
 * - 1072: 二维码收款页面
 * - 1073: 客服消息列表下发的小程序消息卡片
 * - 1074: 公众号会话下发的小程序消息卡片
 * - 1077: 摇周边
 * - 1078: 连Wi-Fi成功页
 * - 1079: 微信游戏中心
 * - 1081: 客服消息下发的文字链
 * - 1082: 公众号会话下发的文字链
 * - 1084: 朋友圈广告原生页
 * - 1089: 微信聊天主界面下拉，「最近使用」栏（基础库2.2.4版本起包含「我的小程序」栏）
 * - 1090: 长按小程序右上角菜单唤出最近使用历史
 * - 1091: 公众号文章商品卡片
 * - 1092: 城市服务入口
 * - 1095: 小程序广告组件
 * - 1096: 聊天记录
 * - 1097: 微信支付签约页
 * - 1099: 页面内嵌插件
 * - 1102: 公众号 profile 页服务预览
 * - 1103: 发现栏小程序主入口，「我的小程序」列表（基础库2.2.4版本起废弃）
 * - 1104: 微信聊天主界面下拉，「我的小程序」栏（基础库2.2.4版本起废弃）
 */
scene: wx$SceneValues,

/**
 * shareTicket，详见 获取更多[转发信息](https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#获取更多转发信息)
 */
shareTicket: string,

/**
 * 当场景为由从另一个小程序或公众号或App打开时，返回此字段
 */
referrerInfo: {
appId: string,
extraData: {[key: string]: any}
}
} 

declare interface wx$Cloud {

/**
 * 初始化方法（全局只需一次）
 */
init: (options: wx$InitCloudOptions) => void,

/**
 * 接受一个可选对象参数 env：环境 ID，获取数据库的引用
 */
database: (options: {
env: string
}) => {},

/**
 * 接受一个 name 参数，指定需引用的集合名称
 */
collection: (name: string) => {}
} 


/**
 * 定义了云开发的默认配置，该配置会作为之后调用其他所有云 API 的默认配置
 */
declare interface wx$InitCloudOptions {

/**
 * 默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象 initCloudEnvOptions 可以分别指定各个服务的默认环境
 * 默认值： default
 */
env?: string | wx$InitCloudEnvOptions,

/**
 * 是否在将用户访问记录到用户管理中，在控制台中可见
 * 默认值： false
 */
traceUser?: boolean
} 


/**
 * initCloudOptions 的 env 参数，可以指定各个服务的默认环境
 */
declare interface wx$InitCloudEnvOptions {

/**
 * 数据库 API 默认环境配置
 * 默认值： default
 */
database?: string,

/**
 * 存储 API 默认环境配置
 * 默认值： default
 */
storage?: string,

/**
 * 云函数 API 默认环境配置
 * 默认值： default
 */
functions?: string
} 
	
/**
 * App() 函数用来注册一个小程序。
 * 接受一个 object 参数，其指定小程序的生命周期函数等。
 */
declare function App<T: wx$wx$AppOptions>(app: T & ThisType<T & wx$wx$App>): void

	
/**
 * 获取小程序实例
 */
declare function getApp(): wx$wx$App

	declare function Component<D, M, P, B: Array<wx$wx$Behavior<{}, {}, {}> | string>= []>(
options?: wx$wx$ThisTypedComponentOptionsWithRecordProps<wx$wx$Component<D, P, B>, D, M, P, B>): string

	
/**
 * behaviors 是用于组件间代码共享的特性
 * 类似于一些编程语言中的“mixins”或“traits”
 * 每个 behavior 可以包含一组属性、数据、生命周期函数和方法
 * 组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用
 * 每个组件可以引用多个 behavior
 * behavior 也可以引用其他 behavior
 */
declare function Behavior<D, M, P, B: Array<wx$wx$Behavior<{}, {}, {}> | string>= []>(
options?: wx$wx$ThisTypedComponentOptionsWithRecordProps<wx$wx$Component<D, P, B>, D, M, P, B>): wx$wx$Behavior<D & wx$wx$UnboxBehaviorsData<B>, P & wx$wx$UnboxBehaviorsProps<B>, M & wx$wx$UnboxBehaviorsMethods<B>>

	
/**
 * Page() 函数用来注册一个页面。
 * 接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
 */
declare function Page<T: wx$wx$PageOptions & {[key: string]: any}>(
page: T & ThisType<T & wx$wx$Page>): void

	
/**
 * getCurrentPages() 函数用于获取当前页面栈的实例，
 * 以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
 */
declare function getCurrentPages(): wx$wx$Page[]

    }
