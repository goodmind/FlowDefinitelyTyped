declare module 'weapp-api' {
        
      declare var npm$namespace$wx: {
        request: typeof wx$request,
downloadFile: typeof wx$downloadFile,
uploadFile: typeof wx$uploadFile,
connectSocket: typeof wx$connectSocket,
onSocketOpen: typeof wx$onSocketOpen,
onSocketError: typeof wx$onSocketError,
sendSocketMessage: typeof wx$sendSocketMessage,
onSocketMessage: typeof wx$onSocketMessage,
closeSocket: typeof wx$closeSocket,
onSocketClose: typeof wx$onSocketClose,
chooseImage: typeof wx$chooseImage,
previewImage: typeof wx$previewImage,
startRecord: typeof wx$startRecord,
stopRecord: typeof wx$stopRecord,
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
saveFile: typeof wx$saveFile,
chooseVideo: typeof wx$chooseVideo,
getStorageInfoSync: typeof wx$getStorageInfoSync,
getStorageInfo: typeof wx$getStorageInfo,
setStorage: typeof wx$setStorage,
setStorageSync: typeof wx$setStorageSync,
getStorage: typeof wx$getStorage,
getStorageSync: typeof wx$getStorageSync,
clearStorage: typeof wx$clearStorage,
clearStorageSync: typeof wx$clearStorageSync,
getLocation: typeof wx$getLocation,
openLocation: typeof wx$openLocation,
getNetworkType: typeof wx$getNetworkType,
getSystemInfo: typeof wx$getSystemInfo,
getUpdateManager: typeof wx$getUpdateManager,
getLaunchOptionsSync: typeof wx$getLaunchOptionsSync,
offPageNotFound: typeof wx$offPageNotFound,
onPageNotFound: typeof wx$onPageNotFound,
offError: typeof wx$offError,
onError: typeof wx$onError,
offAppShow: typeof wx$offAppShow,
onAppShow: typeof wx$onAppShow,
offAppHide: typeof wx$offAppHide,
onAppHide: typeof wx$onAppHide,
navigateBack: typeof wx$navigateBack,
switchTab: typeof wx$switchTab,
navigateTo: typeof wx$navigateTo,
reLaunch: typeof wx$reLaunch,
redirectTo: typeof wx$redirectTo,
showActionSheet: typeof wx$showActionSheet,
hideLoading: typeof wx$hideLoading,
showLoading: typeof wx$showLoading,
hideToast: typeof wx$hideToast,
showToast: typeof wx$showToast,
showModal: typeof wx$showModal,
setNavigationBarColor: typeof wx$setNavigationBarColor,
hideNavigationBarLoading: typeof wx$hideNavigationBarLoading,
showNavigationBarLoading: typeof wx$showNavigationBarLoading,
setNavigationBarTitle: typeof wx$setNavigationBarTitle,
setBackgroundTextStyle: typeof wx$setBackgroundTextStyle,
setBackgroundColor: typeof wx$setBackgroundColor,
setTabBarItem: typeof wx$setTabBarItem,
setTabBarStyle: typeof wx$setTabBarStyle,
hideTabBar: typeof wx$hideTabBar,
showTabBar: typeof wx$showTabBar,
hideTabBarRedDot: typeof wx$hideTabBarRedDot,
showTabBarRedDot: typeof wx$showTabBarRedDot,
removeTabBarBadge: typeof wx$removeTabBarBadge,
setTabBarBadge: typeof wx$setTabBarBadge,
loadFontFace: typeof wx$loadFontFace,
stopPullDownRefresh: typeof wx$stopPullDownRefresh,
startPullDownRefresh: typeof wx$startPullDownRefresh,
pageScrollTo: typeof wx$pageScrollTo,
onAccelerometerChange: typeof wx$onAccelerometerChange,
onCompassChange: typeof wx$onCompassChange,
createAnimation: typeof wx$createAnimation,
createContext: typeof wx$createContext,
drawCanvas: typeof wx$drawCanvas,
hideKeyboard: typeof wx$hideKeyboard,
checkSession: typeof wx$checkSession,
login: typeof wx$login,
navigateToMiniProgram: typeof wx$navigateToMiniProgram,
navigateBackMiniProgram: typeof wx$navigateBackMiniProgram,
getAccountInfoSync: typeof wx$getAccountInfoSync,
getUserInfo: typeof wx$getUserInfo,
requestPayment: typeof wx$requestPayment,
authorize: typeof wx$authorize,
openSetting: typeof wx$openSetting,
getSetting: typeof wx$getSetting,
        
      }
declare type wx$NoneParamCallback = () => void;

declare type wx$OneParamCallback = (data: any) => void;

declare type wx$ResponseCallback = (res: any) => void;

declare type wx$DataResponseCallback = (res: wx$DataResponse) => void;

declare type wx$TempFileResponseCallback = (res: wx$TempFileResponse) => void;

declare type wx$ErrorCallback = (error: any) => void;

declare type wx$EventCallback = (event: any) => void;

declare interface wx$DataResponse {

/**
 * 回调函数返回的内容
 */
data: any
} 

declare interface wx$TempFileResponse {

/**
 * 文件的临时路径
 */
tempFilePath: string
} 

declare interface wx$PageOptions {

/**
 * 页面的初始数据
 */
data?: any,

/**
 * 生命周期函数--监听页面加载
 */
onLoad?: (options: any) => void,

/**
 * 生命周期函数--监听页面渲染完成
 */
onReady?: wx$NoneParamCallback,

/**
 * 生命周期函数--监听页面显示
 */
onShow?: wx$NoneParamCallback,

/**
 * 生命周期函数--监听页面隐藏
 */
onHide?: wx$NoneParamCallback,

/**
 * 生命周期函数--监听页面卸载
 */
onUnload?: wx$NoneParamCallback,
[key: string]: any
} 

declare interface wx$referrerInfo {

/**
 * 来源小程序、公众号或 App 的 appId
 */
appId: string,

/**
 * 来源小程序传过来的数据，scene=1037或1038时支持
 */
extraData: Object
} 

declare interface wx$onLaunchOptions {

/**
 * 启动小程序的路径
 */
path: string,

/**
 * 启动小程序的场景值
 */
scene: number,

/**
 * 启动小程序的query参数
 */
query: Object,
shareTicket: string,

/**
 * 来源信息。从另一个小程序、公众号或App进入小程序时返回。范泽返回{}
 */
wx$referrerInfo: wx$referrerInfo
} 

declare type wx$onLaunchCallback = (options: wx$onLaunchOptions) => void;

declare type wx$onShowOptions = wx$onLaunchOptions;

declare interface wx$AppOptions {

/**
 * 生命周期函数--监听小程序初始化
 * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
 */
onLaunch?: wx$onLaunchCallback,

/**
 * 生命周期函数--监听小程序显示
 * 当小程序启动，或从后台进入前台显示，会触发 onShow
 */
onShow?: (options: wx$onShowOptions) => void,

/**
 * 生命周期函数--监听小程序隐藏
 * 当小程序从前台进入后台，会触发 onHide
 */
onHide?: wx$NoneParamCallback,

/**
 * 小程序发生脚本错误或 API 调用报错时触发。也可以使用 wx.onError 绑定监听。
 */
wx$onError?: wx$ErrorCallback,

/**
 * 小程序要打开的页面不存在时触发
 * 1. 开发者可以在回调中进行页面重定向，但必须在回调中同步处理，异步处理（例如 setTimeout 异步执行）无效。
 * 2. 若开发者没有调用 wx.onPageNotFound 绑定监听，也没有声明 App.onPageNotFound，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
 * 3. 如果回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再第二次回调。
 */
wx$onPageNotFound?: wx$NoneParamCallback,
[key: string]: any
} 

declare interface wx$RequestHeader {
[key: string]: string
} 

declare interface wx$RequestOptions {

/**
 * 开发者服务器接口地址
 */
url: string,

/**
 * 请求的参数
 */
data?: string | any,

/**
 * 设置请求的 header , header 中不能设置 Referer
 */
header?: wx$RequestHeader,

/**
 * 默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
 */
method?: string,

/**
 * 收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
 */
success?: wx$DataResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * wx.request发起的是https请求。一个微信小程序，同时只能有5个网络请求连接。
 */
declare function wx$request(options: wx$RequestOptions): wx$RequestTask



/**
 * 网络请求任务对象
 */
declare interface wx$RequestTask {
abort(): void,
onHeadersReceived(callback: wx$DataResponseCallback): void,
offHeadersReceived(callback: wx$DataResponseCallback): void
} 

declare interface wx$OnProgressCallbackOptions {
progress: number,
totalBytesWritten: number,
totalBytesExpectedToWrite: number
} 


/**
 * 一个可以监听下载进度变化事件，以及取消下载任务的对象
 */
declare interface wx$DownloadTask {
abort(): void,
onProgressUpdate(callback: (res: wx$OnProgressCallbackOptions) => {}): void,
offProgressUpdate(callback: (res: wx$OnProgressCallbackOptions) => {}): void,
onHeadersReceived(callback: wx$DataResponseCallback): void,
offHeadersReceived(callback: wx$DataResponseCallback): void
} 

declare interface wx$DownloadFileOptions {

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
success?: wx$TempFileResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，
 * 把下载到的资源根据 type 进行处理，并返回文件的本地临时路径。
 */
declare function wx$downloadFile(options: wx$DownloadFileOptions): wx$DownloadTask



/**
 * 一个可以监听上传进度变化事件，以及取消上传任务的对象
 */
declare interface wx$UploadTask {
abort(): void,
onProgressUpdate(callback: (res: wx$OnProgressCallbackOptions) => {}): void,
offProgressUpdate(callback: (res: wx$OnProgressCallbackOptions) => {}): void,
onHeadersReceived(callback: wx$DataResponseCallback): void,
offHeadersReceived(callback: wx$DataResponseCallback): void
} 

declare interface wx$UploadFileOptions {

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
formData?: any,

/**
 * 接口调用成功的回调函数
 */
success?: wx$ResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 将本地资源上传到开发者服务器。
 * 如页面通过 wx.chooseImage 等接口获取到一个本地资源的临时文件路径后，
 * 可通过此接口将本地资源上传到指定服务器。
 * 客户端发起一个 HTTPS POST 请求，
 * 其中 Content-Type 为 multipart/form-data 。
 */
declare function wx$uploadFile(options: wx$UploadFileOptions): wx$UploadTask


declare interface wx$ConnectSocketOptions {

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
 * 接口调用成功的回调函数
 */
success?: wx$ResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


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
declare function wx$onSocketOpen(callback: wx$OneParamCallback): void



/**
 * 监听WebSocket错误。
 */
declare function wx$onSocketError(callback: wx$ErrorCallback): void


declare interface wx$SendSocketMessageOptions {

/**
 * 需要发送的内容
 */
data: string,

/**
 * 接口调用成功的回调函数
 */
success?: wx$ResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，
 * 并在 wx.onSocketOpen 回调之后才能发送。
 */
declare function wx$sendSocketMessage(options: wx$SendSocketMessageOptions): void



/**
 * 监听WebSocket接受到服务器的消息事件。
 */
declare function wx$onSocketMessage(callback: wx$DataResponseCallback): void



/**
 * 关闭WebSocket连接。
 */
declare function wx$closeSocket(): void



/**
 * 监听WebSocket关闭。
 */
declare function wx$onSocketClose(callback: wx$ResponseCallback): void


declare type wx$ImageSizeType = "original" | "compressed";

declare type wx$ImageSourceType = "album" | "camera";

declare type wx$VideoSourceType = "album" | "camera";

declare type wx$CameraDevice = "front" | "back";

declare interface wx$TempFilesData {

/**
 * 文件的临时路径
 */
tempFilePaths: string
} 

declare interface wx$ChooseImageOptions {

/**
 * 最多可以选择的图片张数，默认9
 */
count?: number,

/**
 * original 原图，compressed 压缩图，默认二者都有
 */
sizeType?: Array<wx$ImageSizeType>,

/**
 * album 从相册选图，camera 使用相机，默认二者都有
 */
sourceType?: Array<wx$ImageSourceType>,

/**
 * 成功则返回图片的本地文件路径列表 tempFilePaths
 */
success: (res: wx$TempFilesData) => void,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 从本地相册选择图片或使用相机拍照。
 */
declare function wx$chooseImage(options: wx$ChooseImageOptions): void


declare interface wx$PreviewImageOptions {

/**
 * 当前显示图片的链接，不填则默认为 urls 的第一张
 */
current?: string,

/**
 * 需要预览的图片链接列表
 */
urls: Array<string>,

/**
 * 接口调用成功的回调函数
 */
success?: wx$ResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 预览图片。
 */
declare function wx$previewImage(options: wx$PreviewImageOptions): void


declare interface wx$StartRecordOptions {

/**
 * 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'}
 */
success?: wx$TempFileResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 开始录音。当主动调用wx.stopRecord，
 * 或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。
 * 注：文件的临时路径，在小程序本次启动期间可以正常使用，
 * 如需持久保存，需在主动调用wx.saveFile，在小程序下次启动时才能访问得到。
 */
declare function wx$startRecord(options: wx$StartRecordOptions): void



/**
 * 主动调用停止录音。
 */
declare function wx$stopRecord(): void


declare interface wx$PlayVoiceOptions {

/**
 * 需要播放的语音文件的文件路径
 */
filePath: string,

/**
 * 接口调用成功的回调函数
 */
success?: wx$ResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 开始播放语音，同时只允许一个语音文件正在播放，
 * 如果前一个语音文件还没播放完，将中断前一个语音播放。
 */
declare function wx$playVoice(options: wx$PlayVoiceOptions): void



/**
 * 暂停正在播放的语音。
 * 再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。
 * 如果想从头开始播放，需要先调用 wx.stopVoice。
 */
declare function wx$pauseVoice(): void



/**
 * 结束播放语音。
 */
declare function wx$stopVoice(): void


declare interface wx$BackgroundAudioPlayerState {

/**
 * 选定音频的长度（单位：s），只有在当前有音乐播放时返回
 */
duration?: number,

/**
 * 选定音频的播放位置（单位：s），只有在当前有音乐播放时返回
 */
currentPosition?: number,

/**
 * 播放状态（2：没有音乐在播放，1：播放中，0：暂停中）
 */
status: number,

/**
 * 音频的下载进度（整数，80 代表 80%），只有在当前有音乐播放时返回
 */
downloadPercent?: number,

/**
 * 歌曲数据链接，只有在当前有音乐播放时返回
 */
dataUrl?: string
} 

declare type wx$GetBackgroundAudioPlayerStateSuccessCallback = (state: wx$BackgroundAudioPlayerState) => void;

declare interface wx$GetBackgroundAudioPlayerStateOptions {

/**
 * 接口调用成功的回调函数
 */
success?: wx$GetBackgroundAudioPlayerStateSuccessCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$NoneParamCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$NoneParamCallback
} 


/**
 * 获取音乐播放状态。
 */
declare function wx$getBackgroundAudioPlayerState(options: wx$GetBackgroundAudioPlayerStateOptions): void


declare interface wx$PlayBackgroundAudioOptions {

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
coverImgUrl?: string,

/**
 * 接口调用成功的回调函数
 */
success?: wx$ResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 播放音乐，同时只能有一首音乐正在播放。
 */
declare function wx$playBackgroundAudio(options: wx$PlayBackgroundAudioOptions): void



/**
 * 暂停播放音乐。
 */
declare function wx$pauseBackgroundAudio(): void


declare interface wx$SeekBackgroundAudioOptions {

/**
 * 音乐位置，单位：秒
 */
position: number,

/**
 * 接口调用成功的回调函数
 */
success?: wx$ResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 控制音乐播放进度。
 */
declare function wx$seekBackgroundAudio(options: wx$SeekBackgroundAudioOptions): void



/**
 * 停止播放音乐。
 */
declare function wx$stopBackgroundAudio(): void



/**
 * 监听音乐播放。
 */
declare function wx$onBackgroundAudioPlay(callback: wx$NoneParamCallback): void



/**
 * 监听音乐暂停。
 */
declare function wx$onBackgroundAudioPause(callback: wx$NoneParamCallback): void



/**
 * 监听音乐停止。
 */
declare function wx$onBackgroundAudioStop(callback: wx$NoneParamCallback): void


declare interface wx$SavedFileData {

/**
 * 文件的保存路径
 */
savedFilePath: string
} 

declare interface wx$SaveFileOptions {

/**
 * 需要保存的文件的临时路径
 */
tempFilePath: string,

/**
 * 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}
 */
success?: (res: wx$SavedFileData) => void,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 保存文件到本地。
 */
declare function wx$saveFile(options: wx$SaveFileOptions): void


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

declare interface wx$ChooseVideoOptions {

/**
 * album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
 */
sourceType?: Array<wx$VideoSourceType>,

/**
 * 拍摄视频最长拍摄时间，单位秒。最长支持60秒
 */
maxDuration?: number,

/**
 * 前置或者后置摄像头，默认为前后都有，即：['front', 'back']
 */
camera?: Array<wx$CameraDevice>,

/**
 * 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
 */
success?: (res: wx$VideoData) => void,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
 */
declare function wx$chooseVideo(options: wx$ChooseVideoOptions): void


declare interface wx$StorageInfo {
keys: Array<string>,
currentSize: number,
limitSize: number
} 

declare type wx$StorageInfoCallback = (res: wx$StorageInfoOptions) => void;

declare type wx$StorageInfoOptions = {
success?: wx$StorageInfoCallback
} & wx$CommonCallbackOptions



/**
 * getStorageInfo的同步版本
 */
declare function wx$getStorageInfoSync(): wx$StorageInfo



/**
 * 异步获取当前storage的相关信息
 * @param options
 */
declare function wx$getStorageInfo(options: wx$StorageInfoOptions): void


declare interface wx$SetStorageOptions {

/**
 * 本地缓存中的指定的 key
 */
key: string,

/**
 * 需要存储的内容
 */
data: any | string,

/**
 * 接口调用成功的回调函数
 */
success?: wx$ResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 将数据存储在本地缓存中指定的 key 中，
 * 会覆盖掉原来该 key 对应的内容，这是一个异步接口。
 */
declare function wx$setStorage(options: wx$SetStorageOptions): void



/**
 * 将 data 存储在本地缓存中指定的 key 中，
 * 会覆盖掉原来该 key 对应的内容，这是一个同步接口。
 * @param {string} key 本地缓存中的指定的 key
 * @param {(Object | string)} data 需要存储的内容
 */
declare function wx$setStorageSync(key: string, data: any | string): void


declare interface wx$GetStorageOptions {

/**
 * 本地缓存中的指定的 key
 */
key: string,

/**
 * 接口调用的回调函数,res = {data: key对应的内容}
 */
success: wx$DataResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 */
declare function wx$getStorage(options: wx$GetStorageOptions): void



/**
 * 从本地缓存中同步获取指定 key 对应的内容。
 * @param {string} key
 * @returns {(Object | string)}
 */
declare function wx$getStorageSync(key: string): any | string



/**
 * 清理本地数据缓存。
 */
declare function wx$clearStorage(): void



/**
 * 同步清理本地数据缓存
 */
declare function wx$clearStorageSync(): void


declare interface wx$LocationBaseOptions {
latitude: number,
longitude: number
} 

declare type wx$GetCenterLocationSuccCbOptions = {
success(res: wx$LocationBaseOptions): void
} & wx$CommonCallbackOptions


declare type wx$translateMarkerOptions = {
markerId: number,
destination: wx$LocationBaseOptions,
autoRotate: boolean,
rotate: number,
duration?: number,
animationEnd(): void
} & wx$CommonCallbackOptions


declare type wx$zoomPointsOptions = {
points: Array<wx$LocationBaseOptions>,
padding?: Array<number>
} & wx$CommonCallbackOptions


declare interface wx$GetReginSuccessCallbackOptions {
southwest: number,
northeast: number
} 

declare type wx$GetReginOptions = {
success(callback: (res: wx$GetReginSuccessCallbackOptions) => void): void
} & wx$CommonCallbackOptions


declare type wx$GetScaleOptions = {
success(callback: (res: {
scale: number
}) => void): void
} & wx$CommonCallbackOptions


declare interface wx$MapContext {
getCenterLocation(options: wx$GetCenterLocationSuccCbOptions): void,
moveToLocation(): void,
translateMarker(options: wx$translateMarkerOptions): void,
includePoints(options: wx$zoomPointsOptions): void,
getRegion(options: wx$GetReginOptions): void,
getScale(options: wx$GetScaleOptions): void
} 

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

declare interface wx$GetLocationOptions {

/**
 * 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
 */
type?: "wgs84" | "gcj02",

/**
 * 接口调用成功的回调函数，返回内容详见返回参数说明。
 */
success: (res: wx$LocationData) => void,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 获取当前的地理位置、速度。
 */
declare function wx$getLocation(options: wx$GetLocationOptions): void


declare interface wx$OpenLocationOptions {

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
address?: string,

/**
 * 接口调用成功的回调函数
 */
success?: wx$ResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 使用微信内置地图查看位置
 */
declare function wx$openLocation(options: wx$OpenLocationOptions): void


declare interface wx$NetworkTypeData {

/**
 * 返回网络类型2g，3g，4g，wifi
 */
networkType: "2g" | "3g" | "4g" | "wifi"
} 

declare interface wx$GetNetworkTypeOptions {

/**
 * 接口调用成功，返回网络类型 networkType
 */
success: (res: wx$NetworkTypeData) => void,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 获取网络类型。
 */
declare function wx$getNetworkType(options: wx$GetNetworkTypeOptions): void


declare interface wx$SystemInfo {

/**
 * 手机型号
 */
model: string,

/**
 * 设备像素比
 */
pixelRatio: number,

/**
 * 窗口宽度
 */
windowWidth: number,

/**
 * 窗口高度
 */
windowHeight: number,

/**
 * 微信设置的语言
 */
language: string,

/**
 * 微信版本号
 */
version: string
} 

declare interface wx$GetSystemInfoOptions {

/**
 * 成功获取系统信息的回调
 */
success: (res: wx$SystemInfo) => void,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 获取系统信息。
 */
declare function wx$getSystemInfo(options: wx$GetSystemInfoOptions): void


declare interface wx$UpdateManager {

/**
 * 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 onUpdateReady 回调）调用。
 */
applyUpdate(callback: wx$DataResponseCallback): void,

/**
 * 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。
 */
onCheckForUpdate(): void,

/**
 * 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
 */
onUpdateReady(callback: wx$NoneParamCallback): void,

/**
 * 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调
 */
onUpdateFailed(callback: wx$NoneParamCallback): void
} 


/**
 * 获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。
 */
declare function wx$getUpdateManager(): wx$UpdateManager



/**
 * 获取小程序启动时的参数。与 App.onLaunch 的回调参数一致。
 */
declare function wx$getLaunchOptionsSync(): wx$onLaunchCallback



/**
 * 取消监听小程序要打开的页面不存在事件
 */
declare function wx$offPageNotFound(): wx$NoneParamCallback



/**
 * 监听小程序要打开的页面不存在事件。该事件与 App.onPageNotFound 的回调时机一致。
 */
declare function wx$onPageNotFound(): wx$NoneParamCallback



/**
 * 取消监听小程序错误事件。
 */
declare function wx$offError(): wx$NoneParamCallback



/**
 * 监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 App.onError 的回调时机与参数一致。
 */
declare function wx$onError(): wx$ErrorCallback



/**
 * 取消监听小程序切前台事件
 */
declare function wx$offAppShow(): wx$NoneParamCallback



/**
 * 监听小程序切前台事件。该事件与 App.onShow 的回调参数一致。
 * @param callback
 */
declare function wx$onAppShow(callback: wx$onShowOptions): void



/**
 * 取消监听小程序切后台事件
 */
declare function wx$offAppHide(): wx$NoneParamCallback



/**
 * 监听小程序切后台事件。该事件与 App.onHide 的回调时机一致。
 */
declare function wx$onAppHide(): wx$NoneParamCallback


declare type wx$routerOptions = {
url: string
} & wx$CommonCallbackOptions


declare type wx$NavigateBackOptions = {
delta: number
} & wx$CommonCallbackOptions



/**
 * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
 */
declare function wx$navigateBack(options: wx$NavigateBackOptions): void



/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * @param options
 */
declare function wx$switchTab(options: wx$routerOptions): void



/**
 * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。
 * @param options
 */
declare function wx$navigateTo(options: wx$routerOptions): void



/**
 * 关闭所有页面，打开到应用内的某个页面
 */
declare function wx$reLaunch(options: wx$routerOptions): void



/**
 * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
 */
declare function wx$redirectTo(options: wx$routerOptions): void


declare type wx$ActionSheetSuccessCallback = (res: {
tapIndex: number
}) => void;

declare interface wx$ActionSheetOptions {
itemList: Array<string>,
itemColor?: string,
success?: wx$ActionSheetSuccessCallback,
fail?: wx$ResponseCallback,
complete?: wx$ResponseCallback
} 


/**
 * 公共回调函数
 */
declare interface wx$CommonCallbackOptions {
success?: wx$ResponseCallback,
fail?: wx$ResponseCallback,
complete?: wx$ResponseCallback
} 

declare type wx$LoadingOptions = {
title: string,
mask: boolean
} & wx$CommonCallbackOptions


declare type wx$icon = "success" | "loading" | "none";

declare type wx$ToastOptions = {
title: string,
wx$icon?: wx$icon,
imgage?: string,
duration?: number,
mask: boolean
} & wx$CommonCallbackOptions


declare type wx$ModalOptions = {
title: string,
content: string,
showCancel?: boolean,
cancelText?: string,
cancelColor?: string,
confirmText?: string,
confirmColor?: boolean
} & wx$CommonCallbackOptions



/**
 * 显示操作菜单
 */
declare function wx$showActionSheet(options: wx$ActionSheetOptions): void



/**
 * 隐藏 loading 提示框
 * @param options
 */
declare function wx$hideLoading(options?: wx$CommonCallbackOptions): void



/**
 * 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
 * @param options
 */
declare function wx$showLoading(options: wx$LoadingOptions): void



/**
 * 隐藏消息提示框
 * @param options
 */
declare function wx$hideToast(options?: wx$CommonCallbackOptions): void



/**
 * 显示消息提示框
 * @param options
 */
declare function wx$showToast(options: wx$ToastOptions): void



/**
 * 显示模态对话框
 * @param options
 */
declare function wx$showModal(options: wx$ModalOptions): void


declare interface wx$NavigationBarColorAnimationOptions {
animation?: number,
timingFunc?: "linear" | "easeIn" | "easeOut" | "easeInOut"
} 

declare type wx$NavigationBarColorOptions = {
frontColor: string,
backgroundColor: string,
animation: wx$NavigationBarColorAnimationOptions
} & wx$CommonCallbackOptions


declare type wx$NavigationBarTitleOptions = {
title: string
} & wx$CommonCallbackOptions


declare function wx$setNavigationBarColor(): void



/**
 * 在当前页面隐藏导航条加载动画
 */
declare function wx$hideNavigationBarLoading(options?: wx$CommonCallbackOptions): void



/**
 * 在当前页面显示导航条加载动画
 */
declare function wx$showNavigationBarLoading(options: wx$CommonCallbackOptions): void



/**
 * 动态设置当前页面的标题
 * @param options
 */
declare function wx$setNavigationBarTitle(options: wx$NavigationBarTitleOptions): void


declare function wx$setBackgroundTextStyle(): void


declare type wx$BackgroundColorOptions = {
backgroundColor?: string,
backgroundColorTop?: string,
backgroundColorBottom?: string
} & wx$CommonCallbackOptions


declare function wx$setBackgroundColor(): void


declare type wx$TabBarItemOptions = {
index: number,
text?: string,
iconPath?: string,
selectedIconPath?: string
} & wx$CommonCallbackOptions



/**
 * 动态设置 tabBar 某一项的内容
 * @param options
 */
declare function wx$setTabBarItem(options: wx$TabBarItemOptions): void


declare type wx$TabBarStyleOptions = {
color: string,
selectedColor: string,
backgroundColor: string,
borderStyle: string
} & wx$CommonCallbackOptions



/**
 * 动态设置tabBar的整体样式
 */
declare function wx$setTabBarStyle(options: wx$TabBarItemOptions): void


declare type wx$TabBarAnimationOptions = {
animation: boolean
} & wx$CommonCallbackOptions



/**
 * 隐藏tabBar
 */
declare function wx$hideTabBar(options: wx$TabBarAnimationOptions): void



/**
 * 显示tabBar
 */
declare function wx$showTabBar(options: wx$TabBarAnimationOptions): void


declare type wx$TabBarRedDotOptions = {
index: number
} & wx$CommonCallbackOptions



/**
 * 隐藏 tabBar 某一项的右上角的红点
 * @param options
 */
declare function wx$hideTabBarRedDot(options: wx$TabBarBadgeOptions): void



/**
 * 显示 tabBar 某一项的右上角的红点
 * @param options
 */
declare function wx$showTabBarRedDot(options: wx$TabBarRedDotOptions): void


declare type wx$TabBarBadgeOptions = {
index: number,
text: string
} & wx$CommonCallbackOptions



/**
 * 移除 tabBar 某一项右上角的文本
 * @param options
 */
declare function wx$removeTabBarBadge(options: wx$TabBarRedDotOptions): void



/**
 * 为 tabBar 某一项的右上角添加文本
 * @param options
 */
declare function wx$setTabBarBadge(options: wx$TabBarBadgeOptions): void


declare interface wx$FontDescOptions {
style?: string,
weight?: string,
variant?: string
} 

declare type wx$FontFaceOptions = {
family: string,
source: string,
desc?: wx$FontDescOptions
} & wx$CommonCallbackOptions


declare function wx$loadFontFace(options: wx$FontFaceOptions): void



/**
 * 停止当前页面下拉刷新。
 */
declare function wx$stopPullDownRefresh(options?: wx$CommonCallbackOptions): void



/**
 * 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
 */
declare function wx$startPullDownRefresh(options?: wx$CommonCallbackOptions): void


declare type wx$PageScrollToOptions = {
scrollTop: number,
duration: number
} & wx$CommonCallbackOptions



/**
 * 将页面滚动到
 */
declare function wx$pageScrollTo(): void


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


declare interface wx$CompassData {

/**
 * 面对的方向度数
 */
direction: number
} 

declare type wx$CompassChangeCallback = (res: wx$CompassData) => void;

declare function wx$onCompassChange(callback: wx$CompassChangeCallback): void


declare interface wx$SetNavigationBarTitleOptions {

/**
 * 页面标题
 */
title?: string,

/**
 * 成功获取系统信息的回调
 */
success?: wx$ResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 动态设置当前页面的标题。
 */
declare function wx$setNavigationBarTitle(options: wx$SetNavigationBarTitleOptions): void



/**
 * 在当前页面显示导航条加载动画。
 */
declare function wx$showNavigationBarLoading(): void



/**
 * 隐藏导航条加载动画。
 */
declare function wx$hideNavigationBarLoading(): void


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
actions: Array<wx$AnimationAction>
} 

declare interface wx$AnimationAction {
animates: Array<wx$Animate>,
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
args: Array<any>
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
 * @param {wx$CreateAnimationOptions} options 指定当前组动画的配置
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

declare interface wx$CanvasAction {
method: string,
data: Array<wx$CanvasAction> | Array<number | string>
} 

declare type wx$LineCapType = "butt" | "round" | "square";

declare type wx$LineJoinType = "bevel" | "round" | "miter";


/**
 * context只是一个记录方法调用的容器，用于生成记录绘制行为的actions数组。context跟<canvas/>不存在对应关系，一个context生成画布的绘制动作数组可以应用于多个<canvas/>。
 */
declare interface wx$CanvasContext {

/**
 * 获取当前context上存储的绘图动作
 */
getActions(): Array<wx$CanvasAction>,

/**
 * 清空当前的存储绘图动作
 */
clearActions(): void,

/**
 * 对横纵坐标进行缩放
 * 在调用scale方法后，之后创建的路径其横纵坐标会被缩放。
 * 多次调用scale，倍数会相乘。
 * @param {number} scaleWidth 横坐标缩放的倍数
 * @param {number} scaleHeight 纵坐标轴缩放的倍数
 */
scale(scaleWidth: number, scaleHeight?: number): void,

/**
 * 对坐标轴进行顺时针旋转
 * 以原点为中心，原点可以用 translate方法修改。
 * 顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
 * @param {number} rotate 旋转角度，以弧度计。
 */
rotate(rotate: number): void,

/**
 * 对坐标原点进行缩放
 * 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。
 * @param {number} x 水平坐标平移量
 * @param {number} y 竖直坐标平移量
 */
translate(x: number, y: number): void,

/**
 * 保存当前坐标轴的缩放、旋转、平移信息
 */
save(): void,

/**
 * 恢复之前保存过的坐标轴的缩放、旋转、平移信息
 */
restore(): void,

/**
 * 在给定的矩形区域内，清除画布上的像素
 * 清除画布上在该矩形区域内的内容。
 * @param {number} x 矩形区域左上角的x坐标
 * @param {number} y 矩形区域左上角的y坐标
 * @param {number} width 矩形区域的宽度
 * @param {number} height 矩形区域的高度
 */
clearRect(x: number, y: number, width: number, height: number): void,

/**
 * 在画布上绘制被填充的文本
 * @param {string} text 在画布上输出的文本
 * @param {number} x 绘制文本的左上角x坐标位置
 * @param {number} y 绘制文本的左上角y坐标位置
 */
fillText(text: string, x: number, y: number): void,

/**
 * 在画布上绘制图像
 * 绘制图像，图像保持原始尺寸。
 * @param {string} imageResource 所要绘制的图片资源。 通过chooseImage得到一个文件路径或者一个项目目录内的图片
 * @param {number} x 图像左上角的x坐标
 * @param {number} y 图像左上角的y坐标
 */
drawImage(imageResource: string, x: number, y: number): void,

/**
 * 对当前路径进行填充
 */
fill(): void,

/**
 * 对当前路径进行描边
 */
stroke(): void,

/**
 * 开始一个路径
 * 开始创建一个路径，需要调用fill或者stroke才会使用路径进行填充或描边。
 * 同一个路径内的多次setFillStyle、setStrokeStyle、setLineWidth等设置，
 * 以最后一次设置为准。
 */
beginPath(): void,

/**
 * 关闭一个路径
 */
closePath(): void,

/**
 * 把路径移动到画布中的指定点，但不创建线条。
 * @param {number} x 目标位置的x坐标
 * @param {number} y 目标位置的y坐标
 */
moveTo(x: number, y: number): void,

/**
 * 在当前位置添加一个新点，然后在画布中创建从该点到最后指定点的路径。
 * @param {number} x 目标位置的x坐标
 * @param {number} y 目标位置的y坐标
 */
lineTo(x: number, y: number): void,

/**
 * 添加一个矩形路径到当前路径。
 * @param {number} x 矩形路径左上角的x坐标
 * @param {number} y 矩形路径左上角的y坐标
 * @param {number} width 矩形路径的宽度
 * @param {number} height 矩形路径的高度
 */
rect(x: number, y: number, width: number, height: number): void,

/**
 * 添加一个弧形路径到当前路径，顺时针绘制。
 * @param {number} x 矩形路径左上角的x坐标
 * @param {number} y 矩形路径左上角的y坐标
 * @param {number} radius 矩形路径左上角的y坐标
 * @param {number} startAngle 起始弧度
 * @param {number} endAngle 结束弧度
 * @param {boolean} sweepAngle 从起始弧度开始，扫过的弧度
 */
arc(
x: number,
y: number,
radius: number,
startAngle: number,
endAngle: number,
sweepAngle: boolean): void,

/**
 * 创建二次方贝塞尔曲线
 * @param {number} cpx 贝塞尔控制点的x坐标
 * @param {number} cpy 贝塞尔控制点的y坐标
 * @param {number} x 结束点的x坐标
 * @param {number} y 结束点的y坐标
 */
quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void,

/**
 * 创建三次方贝塞尔曲线
 * @param {number} cp1x 第一个贝塞尔控制点的 x 坐标
 * @param {number} cp1y 第一个贝塞尔控制点的 y 坐标
 * @param {number} cp2x 第二个贝塞尔控制点的 x 坐标
 * @param {number} cp2y 第二个贝塞尔控制点的 y 坐标
 * @param {number} x 结束点的x坐标
 * @param {number} y 结束点的y坐标
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
 * @param {string} color 设置为填充样式的颜色。'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
 */
setFillStyle(color: string): void,

/**
 * 设置线条样式
 * @param {string} color 设置为填充样式的颜色。'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
 */
setStrokeStyle(color: string): void,

/**
 * 设置阴影
 * @param {number} offsetX 阴影相对于形状在水平方向的偏移
 * @param {number} offsetY 阴影相对于形状在竖直方向的偏移
 * @param {number} blur 阴影的模糊级别，数值越大越模糊 0~100
 * @param {string} color 阴影的颜色。 'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
 */
setShadow(offsetX: number, offsetY: number, blur: number, color: string): void,

/**
 * 设置字体大小
 * @param {number} fontSize 字体的字号
 */
setFontSize(fontSize: number): void,

/**
 * 设置线条端点的样式
 * @param {wx$LineCapType} lineCap 线条的结束端点样式。 'butt'、'round'、'square'
 */
setLineCap(lineCap: wx$LineCapType): void,

/**
 * 设置两线相交处的样式
 * @param {wx$LineJoinType} lineJoin 两条线相交时，所创建的拐角类型
 */
setLineJoin(lineJoin: wx$LineJoinType): void,

/**
 * 设置线条宽度
 * @param {number} lineWidth 线条的宽度
 */
setLineWidth(lineWidth: number): void,

/**
 * 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。
 * 当 setLineJoin为 miter 时才有效。
 * 超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示
 * @param {number} miterLimit 最大斜接长度
 */
setMiterLimit(miterLimit: number): void
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
actions: Array<wx$CanvasAction>
} 


/**
 * 绘制画布
 */
declare function wx$drawCanvas(options: wx$DrawCanvasOptions): void



/**
 * 收起键盘。
 */
declare function wx$hideKeyboard(): void


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

declare interface wx$LoginOptions {

/**
 * 接口调用成功的回调函数
 */
success?: (res: wx$LoginResponse) => void,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 检查登录态是否过期。
 */
declare function wx$checkSession(options: wx$CommonCallbackOptions): void



/**
 * 调用接口获取登录凭证（code）进而换取用户登录态信息，
 * 包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）。
 * 用户数据的加解密通讯需要依赖会话密钥完成。
 */
declare function wx$login(option: wx$LoginOptions): void


declare type wx$envVersion = "develop" | "trial" | "release";

declare type wx$NavigateToMiniProgramOptions = {
appId: string,
path?: string,
extraData?: {[key: string]: any},
wx$envVersion?: wx$envVersion
} & wx$CommonCallbackOptions



/**
 * 打开另一个小程序
 */
declare function wx$navigateToMiniProgram(options: wx$NavigateToMiniProgramOptions): void


declare type wx$NavigateBackMiniProgramOptions = {
extraData: {[key: string]: any}
} & wx$CommonCallbackOptions



/**
 * 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功
 */
declare function wx$navigateBackMiniProgram(options: wx$NavigateBackMiniProgramOptions): void


declare interface wx$AccountInfo {
miniProgram: {
appId: string
},
Plugin: {
appId: string,
vetsion: string
}
} 


/**
 * 获取当前账号信息
 */
declare function wx$getAccountInfoSync(): wx$AccountInfo


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

declare interface wx$GetUserInfoOptions {

/**
 * 接口调用成功的回调函数
 */
success?: (res: wx$UserInfoResponse) => void,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 获取用户信息，需要先调用 wx.login 接口。
 */
declare function wx$getUserInfo(options: wx$GetUserInfoOptions): void


declare type wx$PaymentSignType = "MD5";

declare interface wx$RequestPaymentOptions {

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
 * 签名算法，暂支持 MD5
 */
signType: wx$PaymentSignType,

/**
 * 签名,具体签名方案参见微信公众号支付帮助文档;
 */
paySign: string,

/**
 * 接口调用成功的回调函数
 */
success?: wx$ResponseCallback,

/**
 * 接口调用失败的回调函数
 */
fail?: wx$ResponseCallback,

/**
 * 接口调用结束的回调函数（调用成功、失败都会执行）
 */
complete?: wx$ResponseCallback
} 


/**
 * 发起微信支付。
 */
declare function wx$requestPayment(options: wx$RequestPaymentOptions): void



/**
 * https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html
 * 用户信息 wx.getUserInfo、
 * 地理位置 wx.getLocation,wx.chooseLocation、
 * 通讯地址 wx.chooseAddress、
 * 发票抬头 wx.chooseInvoiceTitle、
 * 获取发票 wx.chooseInvoice、
 * 微信运动步数 wx.getWeRunData、
 * 录音功能 wx.startRecord、
 * 保存到相册 wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum、
 * 摄像头 <camera />组件
 */
declare type wx$Scope = "userInfo"
| "userLocation"
| "address"
| "invoiceTitle"
| "invoice"
| "werun"
| "record"
| "writePhotosAlbum"
| "camera";

declare type wx$AuthorizeOptions = {
scope: wx$Scope
} & wx$CommonCallbackOptions



/**
 * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
 */
declare function wx$authorize(options: wx$AuthorizeOptions): void


declare type wx$SettingOptions = {
success(res: wx$AuthSetting): void
} & wx$CommonCallbackOptions



/**
 * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
 */
declare function wx$openSetting(options: wx$SettingOptions): void



/**
 * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
 */
declare function wx$getSetting(options: wx$SettingOptions): void



/**
 * 用户授权结果，参考 type Scope
 */
declare interface wx$AuthSetting {
"scope.userInfo": boolean,
"scope.userLocation": boolean,
"scope.address": boolean,
"scope.invoiceTitle": boolean,
"scope.invoice": boolean,
"scope.werun": boolean,
"scope.record": boolean,
"scope.writePhotosAlbum": boolean,
"scope.camera": boolean
} 
	declare interface Page {

/**
 * setData 函数用于将数据从逻辑层发送到视图层，
 * 同时改变对应的 this.data 的值。
 * 注意：
 *     1. 直接修改 this.data 无效，无法改变页面的状态，还会造成数据不一致。
 *     2. 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
 */
setData(data: any): void
} 
	declare interface PageConstructor {

/**
 * Page() 函数用来注册一个页面。
 * 接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
 */
(options: wx$wx$PageOptions): void
} 
	declare var Page: PageConstructor;
	declare interface App {

/**
 * getCurrentPage() 函数用户获取当前页面的实例。
 */
getCurrentPage(): Page
} 
	declare interface AppConstructor {

/**
 * App() 函数用来注册一个小程序。
 * 接受一个 object 参数，其指定小程序的生命周期函数等。
 */
(options: wx$wx$AppOptions): void
} 
	declare var App: AppConstructor;
	
/**
 * 我们提供了全局的 getApp() 函数，可以获取到小程序实例。
 */
declare function getApp(): App

	
/**
 * 设定一个定时器。在定时到期以后执行注册的回调函数
 * @param callback
 * @param delay 延迟的时间，函数的调用会在该延迟之后发生，单位 ms。
 * @param rest param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。
 */
declare function setTimeout(callback: any, delay: number, rest?: any): number

	
/**
 * 取消由 setTimeout 设置的定时器。
 * @param timeoutID 要取消的定时器的ID
 */
declare function clearTimeout(timeoutID: number): number

	
/**
 * 设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数
 * @param callback
 * @param delay 延迟的时间，函数的调用会在该延迟之后发生，单位 ms。
 * @param rest param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。
 */
declare function setInterval(callback: any, delay: number, rest: any): number

	
/**
 * 取消由 setInterval 设置的定时器。
 * @param timeoutID 要取消的定时器的ID
 */
declare function clearInterval(timeoutID: number): number

	declare export {
          wx,App,Page,getApp,setTimeout,clearTimeout,setInterval,clearInterval
        }

    }
