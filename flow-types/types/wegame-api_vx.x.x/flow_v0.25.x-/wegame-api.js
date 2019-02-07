declare module "wegame-api" {
  /**
   * IOS及安卓不支持：
   *      globalCompositeOperation不支持以下值：source-in source-out destination-atop lighter copy
   *      isPointInPath 不支持
   */
  declare class WxRenderingContext mixins CanvasRenderingContext2D {}

  /**
   * IOS及安卓不支持：
   *      pixelStorei 当第一个参数是 gl.UNPACK_COLORSPACE_CONVERSION_WEBGL 时不支持
   *      compressedTexImage2D不支持
   *      compressedTexSubImage2D不支持
   * 安卓不支持：
   *      getExtension
   *      getSupportedExtensions
   */
  declare class WxWebGLRenderingContext mixins WebGLRenderingContext {
    /**
     * 将一个Canvas对应的Texture绑定到WebGL上下文。(目前该方法仅支持 iOS 6.6.6 以上版本，Android/开发者工具暂不支持。)
     *    示例：gl.wxBindCanvasTexture(gl.TEXTURE_2D, canvas)
     * @param texture WebGL的纹理类型枚举值
     * @param canvas 需要绑定为Texture的Canvas
     */
    wxBindCanvasTexture(texture: number, canvas: Canvas): void;
  }
  declare class WxPerformance {
    /**
     * 时间戳
     */
    now(): number;
  }
  declare class Canvas {
    /**
     * 画布的宽度
     */
    width: number;

    /**
     * 画布的高度
     */
    height: number;

    /**
     * 将当前 Canvas 保存为一个临时文件，并生成相应的临时文件路径。
     */
    toTempFilePath(p: wx$types.types$ToTempFileParams): void;

    /**
     * toTempFilePath 的同步版本
     */
    toTempFilePathSync(p: wx$types.types$ToTempFileSyncParams): string;

    /**
     * 获取画布对象的绘图上下文
     * @param contextType 上下文类型
     * @param contextAttributes webgl 上下文属性，仅当 contextType 为 webgl 时有效
     */
    getContext(
      contextType: "2d" | "webgl",
      contextAttributes?: wx$types.types$RenderingContextConfig
    ): WxRenderingContext | WxWebGLRenderingContext;

    /**
     * 把画布上的绘制内容以一个 data URI 的格式返回
     */
    toDataURL(): string;
  }
  declare class Stats {
    /**
     * 文件的类型和存取的权限，对应 POSIX stat.st_mode
     */
    mode: string;

    /**
     * 文件大小，单位：B，对应 POSIX stat.st_size
     */
    size: number;

    /**
     * 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime
     */
    lastAccessedTime: number;

    /**
     * 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime
     */
    lastModifiedTime: number;

    /**
     * 判断当前文件是否一个目录
     */
    isDirectory(): boolean;

    /**
     * 判断当前文件是否一个普通文件
     */
    isFile(): boolean;
  }
  declare class FileSystemManager {
    /**
     * 重命名文件，可以把文件从 oldPath 移动到 newPath
     */
    rename(param: wx$types.types$RenameParams): void;

    /**
     * FileSystemManager.rename 的同步版本
     * @param oldPath 源文件路径，可以是普通文件或目录
     * @param newPath 新文件路径
     * @throws 指定源文件或目标文件没有写权限
     * @throws 源文件不存在，或目标文件路径的上层目录不存在
     */
    renameSync(oldPath: string, newPath: string): void;

    /**
     * 删除目录
     */
    rmdir(param: wx$types.types$RmdirParams): void;

    /**
     * rmdir 的同步版本
     * @param dirPath 要删除的目录路径
     * @param recursive 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
     * @throws 目录不存在, 目录不为空, 指定的 dirPath 路径没有写权限
     */
    rmdirSync(dirPath: string, recursive?: boolean): void;

    /**
     * 读取目录内文件列表
     */
    readdir(param: wx$types.types$ReaddirParams): void;

    /**
     * readdir的同步版本
     * @param dirPath 要读取的目录路径
     * @throws 目录不存在
     * @throws dirPath 不是目录
     * @throws 指定的 filePath 路径没有读权限
     */
    readdirSync(dirPath: string): string[];

    /**
     * 创建目录
     */
    mkdir(param: wx$types.types$MkdirParams): void;

    /**
     * mkdir 的同步版本
     * @param dirPath 创建的目录路径
     * @param recursive 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
     * @throws 上级目录不存在
     * @throws 指定的 filePath 路径没有写权限
     * @throws 有同名文件或目录
     */
    mkdirSync(dirPath: string, recursive?: boolean): void;

    /**
     * 解链文件
     */
    unlink(param: wx$types.types$UnlinkParams): void;

    /**
     * unlink 的同步版本
     * @param filePath 要解链的文件路径
     * @throws 指定的 path 路径没有读权限
     * @throws 文件不存在
     * @throws 传入的 filePath 是一个目录
     */
    unlinkSync(filePath: string): void;

    /**
     * 解压文件
     */
    unzip(param: wx$types.types$UnzipParams): void;

    /**
     * 读取本地文件内容
     */
    readFile(param: wx$types.types$ReadfileParams): void;

    /**
     * readFile 的同步版本
     * @param filePath 要读取的文件的路径
     * @param encoding 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
     * @throws 指定的 filePath 所在目录不存在
     * @throws 指定的 filePath 路径没有读权限
     */
    readFileSync(
      filePath: string,
      encoding?: wx$types.types$FileContentEncoding
    ): string | ArrayBuffer;

    /**
     * 获取文件 Stats 对象
     */
    stat(param: wx$types.types$StatParams): void;

    /**
     * stat 的同步版本
     * @param path 文件/目录路径
     * @throws 指定的 path 路径没有读权限
     * @throws 文件不存在
     */
    statSync(path: string): Stats;

    /**
     * 写文件
     */
    writeFile(param: wx$types.types$WritefileParams): void;

    /**
     * writeFile 的同步版本
     * @param filePath 要写入的文件路径
     * @param data 要写入的文本或二进制数据
     * @param encoding 指定写入文件的字符编码
     * @throws 指定的 filePath 所在目录不存在
     * @throws 指定的 filePath 路径没有写权限
     */
    writeFileSync(
      filePath: string,
      data: string | ArrayBuffer,
      encoding?: wx$types.types$FileContentEncoding
    ): void;

    /**
     * 判断文件/目录是否存在
     */
    access(param: wx$types.types$AccessfileParams): void;

    /**
     * access的同步版本
     * @param path 要判断是否存在的文件/目录路径
     * @throws 文件/目录不存在
     */
    accessSync(path: string): void;

    /**
     * 复制文件
     */
    copyFile(param: wx$types.types$CopyfileParams): void;

    /**
     * copyFile 的同步版本
     * @param srcPath 源文件路径，只可以是普通文件
     * @param destPath 目标文件路径
     * @throws 指定目标文件路径没有写权限
     * @throws 源文件不存在，或目标文件路径的上层目录不存在
     */
    copyFileSync(srcPath: string, destPath: string): void;

    /**
     * 获取该小程序下已保存的本地缓存文件列表
     * @param 本地路径
     * @param 本地文件大小，以字节为单位
     * @param 文件创建时间
     */
    getSavedFileList(
      param: wx$types.types$CallbacksWithType<wx$types.types$SavedfileList>
    ): void;

    /**
     * 获取该小程序下的 本地临时文件 或 本地缓存文件 信息
     */
    getFileInfo(param: wx$types.types$FileinfoParams): void;

    /**
     * 删除该小程序下已保存的本地缓存文件（新版本应使用unlink）
     */
    removeSavedFile(param: wx$types.types$RemovefileParams): void;

    /**
     * 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。
     */
    saveFile(param: wx$types.types$SavefileParams): void;

    /**
     * saveFile的同步版本
     * @param tempFilePath 临时存储文件路径
     * @param filePath 要存储的文件路径
     * @throws 指定的 tempFilePath 找不到文件
     * @throws 指定的 filePath 路径没有写权限
     * @throws 上级目录不存在
     */
    saveFileSync(tempFilePath: string, filePath?: string): string;

    /**
     * 在文件结尾追加内容
     */
    appendFile(param: wx$types.types$AppendfileParams): void;

    /**
     * appendFile的同步版本
     * @param filePath 要追加内容的文件路径
     * @param data 要追加的文本或二进制数据
     * @param encoding 指定写入文件的字符编码
     * @throws 指定的 filePath 文件不存在
     * @throws 指定的 filePath 是一个已经存在的目录
     * @throws 指定的 filePath 路径没有写权限
     * @throws 指定的 filePath 是一个已经存在的目录
     */
    appendFileSync(
      filePath: string,
      data: string | ArrayBuffer,
      encoding: wx$types.types$FileContentEncoding
    ): void;
  }
  declare class DownloadTask {
    /**
     * 中断下载任务
     */
    abort(): void;

    /**
     * 监听下载进度变化事件
     * @param 下载进度百分比
     * @param 已经下载的数据长度，单位 Bytes
     * @param 预期需要下载的数据总长度，单位 Bytes
     */
    onProgressUpdate(callback: {
      res: {
        progress: number,
        totalBytesWritten: number,
        totalBytesExpectedToWrite: number
      }
    }): void;
  }
  declare class RequestTask {
    /**
     * 中断请求任务
     */
    abort(): void;
  }
  declare class SocketTask {
    /**
     * 通过WebSocket发送数据
     */
    send(param: wx$types.types$SocketSendParams): void;

    /**
     * 关闭WebSocket连接
     */
    close(param: wx$types.types$SocketCloseParams): void;

    /**
     * 监听WebSocket 连接打开事件
     */
    onOpen(callback: wx$types.types$SocketOpenCallback): void;

    /**
     * 监听WebSocket 连接关闭事件
     */
    onClose(callback: () => void): void;

    /**
     * 监听WebSocket 错误事件
     */
    onError(callback: wx$types.types$SocketErrorCallback): void;

    /**
     * 监听WebSocket 接受到服务器的消息事件
     */
    onMessage(callback: wx$types.types$SocketMessageCallback): void;
  }
  declare class UploadTask {
    /**
     * 中断上传任务
     */
    abort(): void;

    /**
     * 监听上传进度变化事件
     * @param 上传进度百分比
     * @param 已经上传的数据长度，单位 Bytes
     * @param 预期需要上传的数据总长度，单位 Bytes
     */
    onProgressUpdate(
      callback: (res: {
        progress: number,
        totalBytesSent: number,
        totalBytesExpectedToSend: number
      }) => void
    ): void;
  }
  declare class KVData {
    key: string;
    value: string;
  }
  declare class UserGameData {
    /**
     * 用户的微信头像 url
     */
    avatarUrl: string;

    /**
     * 用户的微信昵称
     */
    nickname: string;

    /**
     * 用户的openid
     */
    openid: string;

    /**
     * 用户的托管 KV 数据列表
     */
    KVDataList: KVData[];
  }
  declare class CreatedButton {
    type: wx$types.types$ButtonType;
    text: string;
    image: string;
    style: wx$types.types$ButtonStyle;
  }
  declare class UserInfoButton mixins CreatedButton {
    onTap(
      callback: (res: {
        /**
         * 用户信息对象，不包含 openid 等敏感信息
         */
        userInfo: wx$types.types$UserInfo,

        /**
         * 不包括敏感信息的原始数据字符串，用于计算签名
         */
        rawData: string,

        /**
         * 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，参考文档signature(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/http-signature.html?t=201822)
         */
        signature: string,

        /**
         * 包括敏感数据在内的完整用户信息的加密数据，详见加密数据解密算法(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/signature.html?t=201822)
         */
        encryptedData: string,

        /**
         * 加密算法的初始向量，详见加密数据解密算法(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/signature.html?t=201822)
         */
        iv: string,
        errMsg: string
      }) => void
    ): void;
  }
  declare class OpenSettingButton mixins CreatedButton {}
  declare class GameClubButton mixins CreatedButton {
    icon: wx$types.types$GameClubButtonIcon;
  }
  declare class FeedbackButton mixins CreatedButton {}
  declare class OpenDataContext {
    /**
     * 开放数据域和主域共享的 sharedCanvas，注意在开放数据域内时getContext只能使用2d模式
     */
    canvas: Canvas;

    /**
     * 向开放数据域发送消息
     * @param message 要发送的消息，message 中及嵌套对象中 key 的 value 只能是 primitive value。即 number、string、boolean、null、undefined。
     */
    postMessage(message: any): void;
  }
  declare class LoadSubpackageTask {
    /**
     * 监听分包加载进度变化事件
     * @param 分包下载进度百分比
     * @param 已经下载的数据长度，单位 Bytes
     * @param 预期需要下载的数据总长度，单位 Bytes
     */
    onProgressUpdate(
      callback: (res: {
        progress: number,
        totalBytesWritten: number,
        totalBytesExpectedToWrite: number
      }) => void
    ): void;
  }
  declare class UpdateManager {
    /**
     * 应用更新包并重启
     */
    applyUpdate(): void;

    /**
     * 监听检查更新结果回调
     */
    onCheckForUpdate(callback: () => void): void;

    /**
     * 监听更新包下载成功回调
     */
    onUpdateReady(callback: () => void): void;

    /**
     * 监听更新包下载失败回调
     */
    onUpdateFailed(callback: () => void): void;
  }
  declare class WxWorker {
    /**
     * 向主线程或Worker线程发送的消息。
     * @param message 需要发送的消息，必须是一个可序列化的 JavaScript 对象。
     */
    postMessage(message: any): void;

    /**
     * 结束当前 worker 线程，仅限在主线程 worker 对象上调用。
     */
    terminate(): void;

    /**
     * 监听接收主线程/Worker 线程向当前线程发送的消息
     * @param 接收主线程/Worker 线程向当前线程发送的消息
     */
    onMessage(
      callback: (res: {
        message: any
      }) => void
    ): void;
  }

  /**
   * InnerAudioContext 实例，可通过 wx.createInnerAudioContext 接口获取实例。
   */
  declare class InnerAudioContext {
    /**
     * 音频资源的地址
     */
    src: string;

    /**
     * 是否自动播放
     */
    autoplay: boolean;

    /**
     * 是否循环播放
     */
    loop: boolean;

    /**
     * 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音
     */
    obeyMuteSwitch: boolean;

    /**
     * 当前音频的长度，单位 s。只有在当前有合法的 src 时返回
     */
    duration: number;

    /**
     * 当前音频的播放位置，单位 s。只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位
     */
    currentTime: number;

    /**
     * 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放
     */
    paused: boolean;

    /**
     * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲
     */
    buffered: number;

    /**
     * 音量。范围 0~1。
     */
    volume: number;

    /**
     * 播放
     */
    play(): void;

    /**
     * 暂停。暂停后的音频再播放会从暂停处开始播放
     */
    pause(): void;

    /**
     * 停止。停止后的音频再播放会从头开始播放。
     */
    stop(): void;

    /**
     * 跳转到指定位置，单位 s
     * @param position 跳转的时间
     */
    seek(position: number): void;

    /**
     * 销毁当前实例
     */
    destroy(): void;

    /**
     * 监听音频进入可以播放状态的事件
     */
    onCanplay(callback: () => void): void;

    /**
     * 取消监听音频进入可以播放状态的事件
     */
    offCanplay(callback: () => void): void;

    /**
     * 监听音频播放事件
     */
    onPlay(callback: () => void): void;

    /**
     * 取消监听音频播放事件
     */
    offPlay(callback: () => void): void;

    /**
     * 监听音频暂停事件
     */
    onPause(callback: () => void): void;

    /**
     * 取消监听音频暂停事件
     */
    offPause(callback: () => void): void;

    /**
     * 监听音频停止事件
     */
    onStop(callback: () => void): void;

    /**
     * 取消监听音频停止事件
     */
    offStop(callback: () => void): void;

    /**
     * 监听音频自然播放至结束的事件
     */
    onEnded(callback: () => void): void;

    /**
     * 取消监听音频自然播放至结束的事件
     */
    offEnded(callback: () => void): void;

    /**
     * 监听音频播放进度更新事件
     */
    onTimeUpdate(callback: () => void): void;

    /**
     * 取消监听音频播放进度更新事件
     */
    offTimeUpdate(callback: () => void): void;

    /**
     * 监听音频播放错误事件
     */
    onError(callback: () => void): void;

    /**
     * 取消监听音频播放错误事件
     */
    offError(callback: () => void): void;

    /**
     * 监听音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
     */
    onWaiting(callback: () => void): void;

    /**
     * 取消监听音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
     */
    offWaiting(callback: () => void): void;

    /**
     * 监听音频进行跳转操作的事件
     */
    onSeeking(callback: () => void): void;

    /**
     * 取消监听音频进行跳转操作的事件
     */
    offSeeking(callback: () => void): void;

    /**
     * 监听音频完成跳转操作的事件
     */
    onSeeked(callback: () => void): void;

    /**
     * 取消监听音频完成跳转操作的事件
     */
    offSeeked(callback: () => void): void;
  }
  declare class RecorderManager {
    /**
     * 开始录音
     */
    start(param: {
      /**
       * 录音的时长，单位 ms，最大值 600000（10 分钟），默认值60000（1 分钟）
       */
      duration?: number,

      /**
       * 采样率
       */
      sampleRate:
        | 8000
        | 11025
        | 12000
        | 16000
        | 22050
        | 24000
        | 32000
        | 44100
        | 48000,

      /**
       * 录音通道数
       */
      numberOfChannels: 1 | 2,

      /**
       * 编码码率
       */
      encodeBitRate: number,

      /**
       * 音频格式
       */
      format: "mp3" | "aac",

      /**
       * 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调
       */
      frameSize: number,

      /**
       * 指定录音的音频源，可通过 wx.getAvailableAudioSources() 获取当前可用的音频源，默认值auto
       */
      audioSource?: wx$types.types$AudioSourceType
    }): void;

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
     * 监听录音开始事件
     */
    onStart(callback: () => void): void;

    /**
     * 监听录音继续事件
     */
    onResume(callback: () => void): void;

    /**
     * 监听录音暂停事件
     */
    onPause(callback: () => void): void;

    /**
     * 监听录音结束事件
     * @param 录音文件的临时路径
     */
    onStop(
      callback: (res: {
        tempFilePath: string
      }) => void
    ): void;

    /**
     * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
     * @param 录音分片数据
     * @param 当前帧是否正常录音结束前的最后一帧
     */
    onFrameRecorded(
      callback: (res: {
        frameBuffer: ArrayBuffer,
        isLastFrame: boolean
      }) => void
    ): void;

    /**
     * 监听录音错误事件
     */
    onError(
      callback: (res: {
        errMsg: string
      }) => void
    ): void;
  }
  declare class ImageFile {
    /**
     * 本地文件路径
     */
    path: string;

    /**
     * 本地文件大小，单位 B
     */
    size: number;
  }
  declare class Video {
    /**
     * 视频的左上角横坐标
     */
    x: number;

    /**
     * 视频的左上角纵坐标
     */
    y: number;

    /**
     * 视频的宽度，默认值300
     */
    width: number;

    /**
     * 默认值150
     */
    height: number;

    /**
     * 视频的资源地址
     */
    src: string;

    /**
     * 视频的封面
     */
    poster: string;

    /**
     * 视频的初始播放位置，单位为 s 秒，默认值0
     */
    initialTime: number;

    /**
     * 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5默认值1.0
     */
    playbackRate: number;

    /**
     * 视频是否为直播，默认值0
     */
    live: number;

    /**
     * 视频的缩放模式
     * fill - 填充，视频拉伸填满整个容器，不保证保持原有长宽比例
     * contain - 包含，保持原有长宽比例。保证视频尺寸一定可以在容器里面放得下。因此，可能会有部分空白
     * cover - 覆盖，保持原有长宽比例。保证视频尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，视频有部分会看不见
     */
    objectFit: "contain" | "cover" | "fill";

    /**
     * 视频是否显示控件，默认true
     */
    controls: boolean;

    /**
     * 视频是否自动播放，默认false
     */
    autoplay: boolean;

    /**
     * 视频是否是否循环播放，默认值false
     */
    loop: boolean;

    /**
     * 视频是否禁音播放，默认值false
     */
    muted: boolean;

    /**
     * 视频开始缓冲时触发的回调函数
     */
    onwaiting: () => void;

    /**
     * 视频开始播放时触发的回调函数
     */
    onplay: () => void;

    /**
     * 视频暂停时触发的回调函数
     */
    onpause: () => void;

    /**
     * 视频播放到末尾时触发的回调函数
     */
    onended: () => void;

    /**
     * 每当视频播放进度更新时触发的回调函数
     */
    ontimeupdate: () => void;

    /**
     * 视频发生错误时触发的回调函数
     */
    onerror: () => void;

    /**
     * 销毁视频
     */
    destroy(): void;

    /**
     * 监听视频缓冲事件
     */
    onWaiting(callback: () => void): void;

    /**
     * 取消监听视频缓冲事件
     */
    offWaiting(callback: () => void): void;

    /**
     * 监听视频播放事件
     */
    onPlay(callback: () => void): void;

    /**
     * 取消监听视频播放事件
     */
    offPlay(callback: () => void): void;

    /**
     * 监听视频暂停事件
     */
    onPause(callback: () => void): void;

    /**
     * 取消监听视频暂停事件
     */
    offPause(callback: () => void): void;

    /**
     * 监听视频播放到末尾事件
     */
    onEnded(callback: () => void): void;

    /**
     * 取消监听视频播放到末尾事件
     */
    offEnded(callback: () => void): void;

    /**
     * 监听视频播放进度更新事件
     * @param 当前的播放位置，单位为秒
     * @param 视频的总时长，单位为秒
     */
    onTimeUpdate(
      callback: (res: {
        position: number,
        duration: number
      }) => void
    ): void;

    /**
     * 取消监听视频播放进度更新事件
     */
    offTimeUpdate(
      callback: (res: {
        position: number,
        duration: number
      }) => void
    ): void;

    /**
 * 监听视频错误事件
 * @param 错误信息，有如下值
MEDIA_ERR_NETWORK - 当下载时发生错误
MEDIA_ERR_DECODE  - 当解码时发生错误
MEDIA_ERR_SRC_NOT_SUPPORTED - video 的 src 属性是不支持的资源类型
 */
    onError(
      callback: (res: {
        errMsg: string
      }) => void
    ): void;

    /**
     * 取消监听视频错误事件
     */
    offError(
      callback: (res: {
        errMsg: string
      }) => void
    ): void;

    /**
     * 播放视频
     */
    play(): Promise<void>;

    /**
     * 暂停视频
     */
    pause(): Promise<void>;

    /**
     * 停止视频
     */
    stop(): Promise<void>;

    /**
     * 视频跳转
     * @param time 视频跳转到指定位置，单位为 s 秒
     */
    seek(time: number): Promise<void>;

    /**
     * 视频全屏
     */
    requestFullScreen(): Promise<void>;

    /**
     * 视频退出全屏
     */
    exitFullScreen(): Promise<void>;
  }

  /**
   * banner 广告组件。banner 广告组件是一个原生组件，层级比上屏 Canvas 高，会覆盖在上屏 Canvas 上。banner 广告组件默认是隐藏的，需要调用 BannerAd.show() 将其显示。banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的尺寸将通过 BannerAd.onResize() 事件中提供。
   */
  declare class BannerAd {
    /**
     * 广告单元 id
     */
    adUnitId: string;

    /**
     * banner 广告组件的样式。style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 BannerAd.onResize() 事件获得。
     */
    style: wx$types.types$AdStyle;

    /**
     * 显示 banner 广告。
     */
    show(): Promise<void>;

    /**
     * 隐藏 banner 广告
     */
    hide(): void;

    /**
     * 销毁 banner 广告
     */
    destroy(): void;

    /**
     * 监听 banner 广告缩放
     */
    onResize(
      callback: (res: {
        width: number,
        height: number
      }) => void
    ): void;

    /**
     * 取消监听隐藏 banner 广告缩放
     */
    offResize(
      callback: (res: {
        width: number,
        height: number
      }) => void
    ): void;

    /**
     * 监听banner 广告加载事件
     */
    onLoad(callback: () => void): void;

    /**
     * 取消监听banner 广告加载事件
     */
    offLoad(callback: () => void): void;

    /**
     * 监听banner 广告错误事件
     */
    onError(
      callback: (res: {
        errMsg: string
      }) => void
    ): void;

    /**
     * 取消监听banner 广告错误事件
     */
    offError(
      callback: (res: {
        errMsg: string
      }) => void
    ): void;
  }
  declare class RewardedVideoAd mixins BannerAd {
    /**
     * 加载视频广告
     */
    load(): Promise<void>;

    /**
     * 监听用户点击 关闭广告 按钮的事件
     */
    onClose(
      callback: (res: {
        isEnded: boolean
      }) => void
    ): void;

    /**
     * 监听用户点击 关闭广告 按钮的事件
     */
    offClose(
      callback: (res: {
        isEnded: boolean
      }) => void
    ): void;
  }
  declare function clearTimeout(timeoutID: number): void;

  declare function clearInterval(intervalID: number): void;

  declare function setTimeout(
    fn: () => void,
    delay: number,
    ...rest: any[]
  ): number;

  declare function setInterval(
    fn: () => void,
    delay: number,
    ...rest: any[]
  ): number;

  declare function cancelAnimationFrame(requestID: number): void;

  declare function requestAnimationFrame(callback: () => void): number;

  declare var npm$namespace$wx: {
    createCanvas: typeof wx$createCanvas,
    getSharedCanvas: typeof wx$getSharedCanvas,
    createImage: typeof wx$createImage,
    getTextLineHeight: typeof wx$getTextLineHeight,
    loadFont: typeof wx$loadFont,
    setPreferredFramesPerSecond: typeof wx$setPreferredFramesPerSecond,
    exitMiniProgram: typeof wx$exitMiniProgram,
    getLaunchOptionsSync: typeof wx$getLaunchOptionsSync,
    onHide: typeof wx$onHide,
    offHide: typeof wx$offHide,
    onShow: typeof wx$onShow,
    offShow: typeof wx$offShow,
    getSystemInfo: typeof wx$getSystemInfo,
    getSystemInfoSync: typeof wx$getSystemInfoSync,
    onAudioInterruptionEnd: typeof wx$onAudioInterruptionEnd,
    offAudioInterruptionEnd: typeof wx$offAudioInterruptionEnd,
    onAudioInterruptionBegin: typeof wx$onAudioInterruptionBegin,
    offAudioInterruptionBegin: typeof wx$offAudioInterruptionBegin,
    onError: typeof wx$onError,
    offError: typeof wx$offError,
    onTouchStart: typeof wx$onTouchStart,
    offTouchStart: typeof wx$offTouchStart,
    onTouchMove: typeof wx$onTouchMove,
    offTouchMove: typeof wx$offTouchMove,
    onTouchEnd: typeof wx$onTouchEnd,
    offTouchEnd: typeof wx$offTouchEnd,
    onTouchCancel: typeof wx$onTouchCancel,
    offTouchCancel: typeof wx$offTouchCancel,
    onAccelerometerChange: typeof wx$onAccelerometerChange,
    startAccelerometer: typeof wx$startAccelerometer,
    stopAccelerometer: typeof wx$stopAccelerometer,
    getBatteryInfo: typeof wx$getBatteryInfo,
    getBatteryInfoSync: typeof wx$getBatteryInfoSync,
    getClipboardData: typeof wx$getClipboardData,
    setClipboardData: typeof wx$setClipboardData,
    onCompassChange: typeof wx$onCompassChange,
    startCompass: typeof wx$startCompass,
    stopCompass: typeof wx$stopCompass,
    getNetworkType: typeof wx$getNetworkType,
    onNetworkStatusChange: typeof wx$onNetworkStatusChange,
    getScreenBrightness: typeof wx$getScreenBrightness,
    setKeepScreenOn: typeof wx$setKeepScreenOn,
    setScreenBrightness: typeof wx$setScreenBrightness,
    onDeviceOrientationChange: typeof wx$onDeviceOrientationChange,
    offDeviceOrientationChange: typeof wx$offDeviceOrientationChange,
    vibrateShort: typeof wx$vibrateShort,
    vibrateLong: typeof wx$vibrateLong,
    getFileSystemManager: typeof wx$getFileSystemManager,
    getLocation: typeof wx$getLocation,
    downloadFile: typeof wx$downloadFile,
    request: typeof wx$request,
    connectSocket: typeof wx$connectSocket,
    closeSocket: typeof wx$closeSocket,
    onSocketOpen: typeof wx$onSocketOpen,
    onSocketClose: typeof wx$onSocketClose,
    onSocketMessage: typeof wx$onSocketMessage,
    onSocketError: typeof wx$onSocketError,
    sendSocketMessage: typeof wx$sendSocketMessage,
    uploadFile: typeof wx$uploadFile,
    getFriendCloudStorage: typeof wx$getFriendCloudStorage,
    getUserCloudStorage: typeof wx$getUserCloudStorage,
    getUserInfo: typeof wx$getUserInfo,
    getGroupCloudStorage: typeof wx$getGroupCloudStorage,
    removeUserCloudStorage: typeof wx$removeUserCloudStorage,
    setUserCloudStorage: typeof wx$setUserCloudStorage,
    checkSession: typeof wx$checkSession,
    login: typeof wx$login,
    checkIsUserAdvisedToRest: typeof wx$checkIsUserAdvisedToRest,
    createUserInfoButton: typeof wx$createUserInfoButton,
    createOpenSettingButton: typeof wx$createOpenSettingButton,
    getSetting: typeof wx$getSetting,
    openSetting: typeof wx$openSetting,
    getWeRunData: typeof wx$getWeRunData,
    authorize: typeof wx$authorize,
    createGameClubButton: typeof wx$createGameClubButton,
    createFeedbackButton: typeof wx$createFeedbackButton,
    openCustomerServiceConversation: typeof wx$openCustomerServiceConversation,
    getOpenDataContext: typeof wx$getOpenDataContext,
    onMessage: typeof wx$onMessage,
    getShareInfo: typeof wx$getShareInfo,
    hideShareMenu: typeof wx$hideShareMenu,
    onShareAppMessage: typeof wx$onShareAppMessage,
    offShareAppMessage: typeof wx$offShareAppMessage,
    showShareMenu: typeof wx$showShareMenu,
    shareAppMessage: typeof wx$shareAppMessage,
    updateShareMenu: typeof wx$updateShareMenu,
    getPerformance: typeof wx$getPerformance,
    triggerGC: typeof wx$triggerGC,
    onMemoryWarning: typeof wx$onMemoryWarning,
    setEnableDebug: typeof wx$setEnableDebug,
    clearStorage: typeof wx$clearStorage,
    clearStorageSync: typeof wx$clearStorageSync,
    getStorage: typeof wx$getStorage,
    getStorageSync: typeof wx$getStorageSync,
    getStorageInfo: typeof wx$getStorageInfo,
    getStorageInfoSync: typeof wx$getStorageInfoSync,
    removeStorage: typeof wx$removeStorage,
    removeStorageSync: typeof wx$removeStorageSync,
    setStorage: typeof wx$setStorage,
    setStorageSync: typeof wx$setStorageSync,
    loadSubpackage: typeof wx$loadSubpackage,
    getMenuButtonBoundingClientRect: typeof wx$getMenuButtonBoundingClientRect,
    setMenuStyle: typeof wx$setMenuStyle,
    showToast: typeof wx$showToast,
    hideToast: typeof wx$hideToast,
    showModal: typeof wx$showModal,
    showLoading: typeof wx$showLoading,
    hideLoading: typeof wx$hideLoading,
    showActionSheet: typeof wx$showActionSheet,
    hideKeyboard: typeof wx$hideKeyboard,
    onKeyboardInput: typeof wx$onKeyboardInput,
    offKeyboardInput: typeof wx$offKeyboardInput,
    onKeyboardConfirm: typeof wx$onKeyboardConfirm,
    offKeyboardConfirm: typeof wx$offKeyboardConfirm,
    onKeyboardComplete: typeof wx$onKeyboardComplete,
    offKeyboardComplete: typeof wx$offKeyboardComplete,
    showKeyboard: typeof wx$showKeyboard,
    updateKeyboard: typeof wx$updateKeyboard,
    setStatusBarStyle: typeof wx$setStatusBarStyle,
    onWindowResize: typeof wx$onWindowResize,
    offWindowResize: typeof wx$offWindowResize,
    getUpdateManager: typeof wx$getUpdateManager,
    createWorker: typeof wx$createWorker,
    createInnerAudioContext: typeof wx$createInnerAudioContext,
    getAvailableAudioSources: typeof wx$getAvailableAudioSources,
    getRecorderManager: typeof wx$getRecorderManager,
    chooseImage: typeof wx$chooseImage,
    previewImage: typeof wx$previewImage,
    saveImageToPhotosAlbum: typeof wx$saveImageToPhotosAlbum,
    createVideo: typeof wx$createVideo,
    createBannerAd: typeof wx$createBannerAd,
    createRewardedVideoAd: typeof wx$createRewardedVideoAd,
    requestMidasPayment: typeof wx$requestMidasPayment,
    env: typeof wx$env
  };
  declare interface types$Callbacks {
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare interface types$CallbacksWithType<T> {
    success?: (res: T) => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare interface types$RenderingContextConfig {
    /**
     * 表示是否抗锯齿
     */
    antialias?: boolean;

    /**
     * 表示是否绘图完成后是否保留绘图缓冲区
     */
    preserveDrawingBuffer?: boolean;

    /**
     * 抗锯齿样本数。最小值为 2，最大不超过系统限制数量，仅 iOS 支持
     */
    antialiasSamples?: number;
  }

  declare interface types$ToTempFileSyncParams {
    /**
     * 截取 canvas 的左上角横坐标
     */
    x?: number;

    /**
     * 截取 canvas 的左上角纵坐标
     */
    y?: number;

    /**
     * 截取 canvas 的宽度
     */
    width?: number;

    /**
     * 截取 canvas 的高度
     */
    height?: number;

    /**
     * 目标文件的宽度，会将截取的部分拉伸或压缩至该数值
     */
    destWidth?: number;

    /**
     * 目标文件的高度，会将截取的部分拉伸或压缩至该数值
     */
    destHeight?: number;

    /**
     * 目标文件的类型
     */
    fileType?: "jpg" | "png";

    /**
     * jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0
     */
    quality?: number;
  }

  declare type types$ToTempFileParams = {
    success?: (res: {
      tempFilePath: string
    }) => void,
    fail?: () => void,
    complete?: () => void
  } & types$ToTempFileSyncParams;

  declare interface types$RenameParams {
    oldPath: string;
    newPath: string;
    success?: () => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$RmdirParams {
    dirPath: string;
    recursive?: boolean;
    success?: () => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$ReaddirParams {
    dirPath: string;
    success?: (res: {
      files: string[]
    }) => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$MkdirParams {
    dirPath: string;
    recursive?: boolean;
    success?: () => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare type types$FileContentEncoding =
    | "ascii"
    | "base64"
    | "binary"
    | "hex"
    | "ucs2"
    | "ucs-2"
    | "utf16le"
    | "utf-16le"
    | "utf-8"
    | "utf8"
    | "latin1";

  declare interface types$ReadfileParams {
    filePath: string;
    encoding?: types$FileContentEncoding;
    success?: (res: {
      data: string | ArrayBuffer
    }) => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$StatParams {
    path: string;
    success?: (res: {
      stat: Stats
    }) => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$WritefileParams {
    filePath: string;
    data: string | ArrayBuffer;
    encoding?: types$FileContentEncoding;
    success?: () => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$UnlinkParams {
    filePath: string;
    success?: () => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$UnzipParams {
    zipFilePath: string;
    targetPath: string;
    success?: () => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$AccessfileParams {
    path: string;
    success?: () => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$SavedfileList {
    fileList: {
      filePath: string,
      size: number,
      createTime: number
    };
  }

  declare interface types$CopyfileParams {
    srcPath: string;
    destPath: string;
    success?: () => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$FileinfoParams {
    filePath: string;
    success?: (res: {
      size: number,
      digest: string
    }) => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$RemovefileParams {
    filePath: string;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare interface types$SavefileParams {
    tempFilePath: string;
    filePath?: string;
    success?: (res: {
      savedFilePath: string
    }) => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$AppendfileParams {
    filePath: string;
    data: string | ArrayBuffer;
    encoding?: types$FileContentEncoding;
    success?: () => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare interface types$LineHeightParams {
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "bold";
    fontSize?: number;
    fontFamily: string;
    text: string;
    success?: (res: {
      lineHeight: number
    }) => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare interface types$Image {
    src: string;
    width: number;
    height: number;
    onload: () => void;
    onerror: (e?: any) => void;
  }

  declare interface types$LaunchOption {
    /**
     * 场景值
     */
    scene: number;

    /**
     * 启动参数
     */
    query: any;

    /**
     * 当前小游戏是否被显示在聊天顶部
     */
    isSticky: boolean;

    /**
     * 票据
     */
    shareTicket: string;
  }

  declare interface types$SystemInfo {
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
     * 可使用窗口宽度
     */
    windowWidth: number;

    /**
     * 可使用窗口高度
     */
    windowHeight: number;

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
    fontSizeSetting: string;

    /**
     * 客户端基础库版本
     */
    SDKVersion: string;

    /**
     * 性能等级
     */
    benchmarkLevel: number;

    /**
     * 电量，范围 1 - 100
     */
    battery: number;

    /**
     * wifi 信号强度，范围 0 - 4
     */
    wifiSignal: number;
  }

  declare interface types$Touch {
    /**
     * Touch 对象的唯一标识符，只读属性。一次触摸动作(我们值的是手指的触摸)在平面上移动的整个过程中, 该标识符不变。可以根据它来判断跟踪的是否是同一次触摸过程。
     */
    identifier: number;

    /**
     * 触点相对于屏幕左边沿的 X 坐标。
     */
    screenX: number;

    /**
     * 触点相对于屏幕左边沿的 Y 坐标。
     */
    screenY: number;
  }

  declare interface types$TouchData {
    /**
     * 当前所有触摸点的列表
     */
    touches: types$Touch[];

    /**
     * 触发此次事件的触摸点列表
     */
    changedTouches: types$Touch[];

    /**
     * 事件触发时的时间戳
     */
    timeStamp: number;
  }

  declare interface types$BatteryInfo {
    /**
     * 设备电量，范围 1 - 100
     */
    level: string;

    /**
     * 是否正在充电
     */
    isCharging: boolean;
  }

  declare interface types$ClipboardData {
    data: string;
  }

  declare interface types$SetClipboardDataParams {
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
    data: string;
  }

  declare interface types$SetKeepScreenOnParams {
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
    keepScreenOn: boolean;
  }

  declare interface types$SetScreenBrightnessParams {
    success?: () => void;
    fail?: () => void;
    complete?: () => void;

    /**
     * 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮
     */
    value: number;
  }

  declare interface types$DownfileParams {
    url: string;

    /**
     * 在指定filePath之后success回调中将不会有res.tempFilePath路径值，下载的文件会直接写入filePath指定的路径（有写入权限的情况下，根目录请使用wx.env.USER_DATA_PATH，路径文件夹必须存在，否则写入失败）
     */
    filePath?: string;

    /**
     * HTTP 请求的 Header，Header 中不能设置 Referer
     */
    header?: {
      [key: string]: string
    };

    /**
     * res.tempFilePath 临时文件路径。如果没传入 filePath 指定文件存储路径，则下载后的文件会存储到一个临时文件
     * res.statusCode 开发者服务器返回的 HTTP 状态码
     */
    success?: (res: {
      tempFilePath: string,
      statusCode: number
    }) => void;
    fail?: (res: {
      errMsg: string
    }) => void;
    complete?: () => void;
  }

  declare type types$NetworkType =
    | "wifi"
    | "2g"
    | "3g"
    | "4g"
    | "unknown"
    | "none";

  declare type types$RequestMethod =
    | "GET"
    | "HEAD"
    | "POST"
    | "PUT"
    | "DELETE"
    | "TRACE"
    | "CONNECT";

  declare interface types$RequestParams {
    /**
     * 开发者服务器接口地址
     */
    url: string;

    /**
     * 请求的参数
     */
    data?:
      | string
      | {
          [key: string]: any
        };

    /**
     * 设置请求的 header，header 中不能设置 Referer
     */
    header?: {
      [name: string]: string
    };

    /**
     * HTTP 请求方法
     */
    method?: types$RequestMethod;

    /**
     * 返回的数据格式
     */
    dataType?: "json" | "arraybuffer";

    /**
     * res.data usually can be string or ArrayBuffer
     */
    success?: (res: {
      data: any,
      statusCode: number,
      header?: {
        [key: string]: string
      }
    }) => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare interface types$SocketSendParams {
    data: string | ArrayBuffer;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare interface types$SocketConnectParams {
    url: string;
    protocols?: string[];
    header?: {
      [key: string]: string
    };
    method?: types$RequestMethod;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare interface types$SocketCloseParams {
    /**
     * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）
     */
    code?: number;

    /**
     * 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）
     */
    reason?: string;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare type types$SocketOpenCallback = (res: {
    header?: {
      [key: string]: string
    }
  }) => void;

  declare type types$SocketMessageCallback = (res: {
    data: string | ArrayBuffer
  }) => void;

  declare type types$SocketErrorCallback = (res: {
    errMsg: string
  }) => void;

  /**
   * wx.getUserInfo的旧版本API参数，随时会被删除，不推荐使用
   */
  declare interface types$OldUserInfoParam {
    /**
     * 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
     */
    withCredentials?: boolean;

    /**
     * 显示用户信息的语言
     */
    lang?: "en" | "zh_CN" | "zh_TW";
    success?: (res: {
      /**
       * 用户信息对象，不包含 openid 等敏感信息
       */
      userInfo: types$UserInfo,

      /**
       * 不包括敏感信息的原始数据字符串，用于计算签名
       */
      rawData: string,

      /**
       * 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，参考文档signature(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/http-signature.html?t=201822)
       */
      signature: string,

      /**
       * 包括敏感数据在内的完整用户信息的加密数据，详见加密数据解密算法(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/signature.html?t=201822)
       */
      encryptedData: string,

      /**
       * 加密算法的初始向量，详见加密数据解密算法(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/signature.html?t=201822)
       */
      iv: string,
      errMsg: string
    }) => void;
    fail?: () => void;
    complete?: () => void;
  }

  /**
   * 新版本wx.getUserInfo的参数，需要在开放数据域内调用
   */
  declare interface types$NewUserInfoParam {
    /**
     * 要获取信息的用户的 openId 数组，如果要获取当前用户信息，则将数组中的一个元素设为 'selfOpenId'
     */
    openIdList?: string[];

    /**
     * 显示用户信息的语言
     */
    lang?: "en" | "zh_CN" | "zh_TW";
    success?: (res: {
      data: types$UserInfo[]
    }) => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare interface types$UserInfo {
    language: string;
    nickName: string;
    avatarUrl: string;

    /**
     * 0：未知、1：男、2：女
     */
    gender: 0 | 1 | 2;
    country: string;
    province: string;
    city: string;
  }

  declare type types$ButtonType = "text" | "image";

  declare interface types$ButtonStyle {
    left: number;
    top: number;
    width: number;
    height: number;

    /**
     * 格式#ff0000
     */
    backgroundColor: string;

    /**
     * 格式#ff0000
     */
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    textAlign: "left" | "center" | "right";
    fontSize: number;
    lineHeight: number;
  }

  declare type types$GameClubButtonIcon = "green" | "white" | "dark" | "light";

  declare interface types$AuthSetting {
    /**
     * 用户信息，对应接口 wx.getUserInfo
     */
    "scope.userInfo"?: boolean;

    /**
     * 地理位置，对应接口 wx.getLocation wx.chooseLocation
     */
    "scope.userLocation"?: boolean;

    /**
     * 通讯地址，对应接口 wx.chooseAddress
     */
    "scope.address"?: boolean;

    /**
     * 发票抬头，对应接口 wx.chooseInvoiceTitle
     */
    "scope.invoiceTitle"?: boolean;

    /**
     * 微信运动步数，对应接口 wx.getWeRunData
     */
    "scope.werun"?: boolean;

    /**
     * 录音功能，对应接口 wx.startRecord
     */
    "scope.record"?: boolean;

    /**
     * 保存到相册 wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum
     */
    "scope.writePhotosAlbum"?: boolean;

    /**
     * 摄像头 wx.camera
     */
    "scope.camera"?: boolean;
  }

  declare interface types$SetStorageParams {
    key: string;
    data: any;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare interface types$RemoveStorageParams {
    key: string;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare interface types$GetStorageParams {
    key: string;
    success?: (res: {
      data: any
    }) => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare interface types$StorageInfo {
    /**
     * 当前 storage 中所有的 key
     */
    keys: string[];

    /**
     * 当前占用的空间大小, 单位 KB
     */
    currentSize: number;

    /**
     * 限制的空间大小，单位 KB
     */
    limitSize: number;
  }

  declare interface types$ShareOption {
    /**
     * 转发标题，不传则默认使用当前小游戏的昵称。
     */
    title?: string;

    /**
     * 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4
     */
    imageUrl?: string;

    /**
     * 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow 获取启动参数中的 query。
     */
    query?: string;
  }

  declare interface types$AccelerometerParams {
    interval: "game" | "ui" | "normal";
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  declare type types$AudioSourceType =
    | "auto"
    | "buildInMic"
    | "headsetMic"
    | "mic"
    | "camcorder";

  declare interface types$AdStyle {
    /**
     * 广告组件的左上角横坐标
     */
    left: number;

    /**
     * banner 广告组件的左上角纵坐标
     */
    top: number;

    /**
     * banner 广告组件的宽度。最小 300，最大至 屏幕宽度（屏幕宽度可以通过 wx.getSystemInfoSync() 获取）。
     */
    width: number;

    /**
     * banner 广告组件的高度
     */
    height: number;

    /**
     * banner 广告组件经过缩放后真实的宽度
     */
    realWidth: number;

    /**
     * banner 广告组件经过缩放后真实的高度
     */
    realHeight: number;
  }

  /**
   * 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。
   */
  declare function wx$createCanvas(): Canvas;

  /**
   * 只有开放数据域能调用，获取主域和开放数据域共享的 sharedCanvas
   */
  declare function wx$getSharedCanvas(): Canvas;

  /**
   * 创建一个图片对象
   */
  declare function wx$createImage(): types$types$Image;

  /**
   * 获取一行文本的行高
   * @param p 字体参数
   */
  declare function wx$getTextLineHeight(
    p: types$types$LineHeightParams
  ): number;

  /**
   * 加载自定义字体文件
   * @param path 字体文件路径。可以是代码包文件路径，也可以是 wxfile:// 协议的本地文件路径。
   */
  declare function wx$loadFont(path: string): string;

  /**
   * 可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变。
   * @param fps 帧率，有效范围 1 - 60。
   */
  declare function wx$setPreferredFramesPerSecond(fps: number): void;

  declare function wx$exitMiniProgram(cb?: types$types$Callbacks): void;

  declare function wx$getLaunchOptionsSync(): types$types$LaunchOption;

  declare function wx$onHide(cb: () => void): void;

  declare function wx$offHide(cb: () => void): void;

  declare function wx$onShow(
    cb: (res: {
      scene: string,
      query: any,
      shareTicket: string
    }) => void
  ): void;

  declare function wx$offShow(
    cb: (res: {
      scene: string,
      query: any,
      shareTicket: string
    }) => void
  ): void;

  declare function wx$getSystemInfo(
    cb: types$types$CallbacksWithType<types$types$SystemInfo>
  ): void;

  declare function wx$getSystemInfoSync(): types$types$SystemInfo;

  /**
   * 监听音频中断结束，在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
   */
  declare function wx$onAudioInterruptionEnd(cb: () => void): void;

  /**
   * 取消监听音频中断结束，在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
   */
  declare function wx$offAudioInterruptionEnd(cb: () => void): void;

  /**
   * 监听音频因为受到系统占用而被中断开始，以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
   */
  declare function wx$onAudioInterruptionBegin(cb: () => void): void;

  /**
   * 取消监听音频因为受到系统占用而被中断开始，以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
   */
  declare function wx$offAudioInterruptionBegin(cb: () => void): void;

  /**
   * 监听全局错误事件
   */
  declare function wx$onError(
    cb: (res: {
      message: string,
      stack: string
    }) => void
  ): void;

  declare function wx$offError(
    cb: (res: {
      message: string,
      stack: string
    }) => void
  ): void;

  /**
   * 监听开始始触摸事件
   */
  declare function wx$onTouchStart(
    cb: (res: types$types$TouchData) => void
  ): void;

  declare function wx$offTouchStart(
    cb: (res: types$types$TouchData) => void
  ): void;

  /**
   * 监听触点移动事件
   */
  declare function wx$onTouchMove(
    cb: (res: types$types$TouchData) => void
  ): void;

  declare function wx$offTouchMove(
    cb: (res: types$types$TouchData) => void
  ): void;

  /**
   * 监听触摸结束事件
   */
  declare function wx$onTouchEnd(
    cb: (res: types$types$TouchData) => void
  ): void;

  declare function wx$offTouchEnd(
    cb: (res: types$types$TouchData) => void
  ): void;

  /**
   * 监听触点失效事件
   */
  declare function wx$onTouchCancel(
    cb: (res: types$types$TouchData) => void
  ): void;

  declare function wx$offTouchCancel(
    cb: (res: types$types$TouchData) => void
  ): void;

  /**
   * 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 wx.stopAccelerometer 停止监听。
   */
  declare function wx$onAccelerometerChange(
    cb: (res: {
      x: number,
      y: number,
      z: number
    }) => void
  ): void;

  /**
   * 开始监听加速度数据。
   */
  declare function wx$startAccelerometer(
    cb: types$types$AccelerometerParams
  ): void;

  /**
   * 停止监听加速度数据。
   */
  declare function wx$stopAccelerometer(cb?: types$types$Callbacks): void;

  /**
   * 获取设备电量。同步 API wx.getBatteryInfoSync 在 iOS 上不可用。
   */
  declare function wx$getBatteryInfo(
    cb: types$types$CallbacksWithType<types$types$BatteryInfo>
  ): void;

  /**
   * IOS上这个同步API无法使用
   */
  declare function wx$getBatteryInfoSync(): types$types$BatteryInfo;

  /**
   * 取得系统剪贴板的内容
   */
  declare function wx$getClipboardData(
    cb: types$types$CallbacksWithType<types$types$ClipboardData>
  ): void;

  /**
   * 设置系统剪贴板的内容
   */
  declare function wx$setClipboardData(
    p: types$types$SetClipboardDataParams
  ): void;

  /**
   * 监听罗盘数据，频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
   * @param 面对的方向度数
   */
  declare function wx$onCompassChange(
    cb: (res: {
      direction: number
    }) => void
  ): void;

  /**
   * 开始监听罗盘数据
   */
  declare function wx$startCompass(cb?: types$types$Callbacks): void;

  /**
   * 停止监听罗盘数据
   */
  declare function wx$stopCompass(cb?: types$types$Callbacks): void;

  /**
   * 获取网络类型
   */
  declare function wx$getNetworkType(
    cb: types$types$CallbacksWithType<{
      isConnected: boolean,
      networkType: types$types$NetworkType
    }>
  ): void;

  /**
   * 监听网络状态变化事件
   */
  declare function wx$onNetworkStatusChange(
    cb: (res: {
      /**
       * 当前是否有网络链接
       */
      isConnected: boolean,

      /**
       * none - 无网络, unknown - Android 下不常见的网络类型
       */
      networkType: types$types$NetworkType
    }) => void
  ): void;

  /**
   * 获取屏幕亮度
   */
  declare function wx$getScreenBrightness(
    cb: types$types$CallbacksWithType<{
      value: number
    }>
  ): void;

  /**
   * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
   */
  declare function wx$setKeepScreenOn(
    p: types$types$SetKeepScreenOnParams
  ): void;

  /**
   * 设置屏幕亮度
   */
  declare function wx$setScreenBrightness(
    p: types$types$SetScreenBrightnessParams
  ): void;

  /**
   * 监听横竖屏切换事件
   */
  declare function wx$onDeviceOrientationChange(
    callback: (res: {
      value: string
    }) => void
  ): void;

  /**
   * 取消监听横竖屏切换事件
   */
  declare function wx$offDeviceOrientationChange(
    callback: (res: {
      value: string
    }) => void
  ): void;

  /**
   * 使手机发生较短时间的振动（15 ms）
   */
  declare function wx$vibrateShort(cb?: types$types$Callbacks): void;

  /**
   * 使手机发生较长时间的振动（400 ms)
   */
  declare function wx$vibrateLong(cb?: types$types$Callbacks): void;

  declare function wx$getFileSystemManager(): FileSystemManager;

  /**
   * 系统环境变量
   */
  declare var wx$env: {
    /**
     * 用户下载数据根目录
     */
    USER_DATA_PATH: string
  };

  /**
   * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
   */
  declare function wx$getLocation(param: {
    /**
     * wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
     */
    type?: "wgs84" | "gcj02",

    /**
     * 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度	>= 1.6.0
     */
    altitude?: boolean,
    success?: (res: {
      /**
       * 纬度，范围为 -90~90，负数表示南纬
       */
      latitude: number,

      /**
       * 经度，范围为 -180~180，负数表示西经
       */
      longitude: number,

      /**
       * 速度，单位 m/s
       */
      speed: number,

      /**
       * 位置的精确度
       */
      accuracy: number,

      /**
       * 高度，单位 m
       */
      altitude: number,

      /**
       * 垂直精度，单位 m（Android 无法获取，返回 0）
       */
      verticalAccuracy: number,

      /**
       * 水平精度，单位 m
       */
      horizontalAccuracy: number
    }) => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 下载文件
   */
  declare function wx$downloadFile(
    param: types$types$DownfileParams
  ): DownloadTask;

  declare function wx$request(param: types$types$RequestParams): RequestTask;

  /**
   * 创建一个 WebSocket 连接。最多同时存在 5 个 WebSocket 连接。
   */
  declare function wx$connectSocket(
    param: types$types$SocketConnectParams
  ): SocketTask;

  /**
   * 关闭WebSocket
   */
  declare function wx$closeSocket(param: types$types$SocketCloseParams): void;

  /**
   * 监听WebSocket 连接打开事件
   */
  declare function wx$onSocketOpen(
    callback: types$types$SocketOpenCallback
  ): void;

  /**
   * 监听WebSocket 连接关闭事件
   */
  declare function wx$onSocketClose(callback: () => void): void;

  /**
   * 监听WebSocket 接受到服务器的消息事件
   */
  declare function wx$onSocketMessage(
    callback: types$types$SocketMessageCallback
  ): void;

  /**
   * 监听WebSocket 错误事件
   */
  declare function wx$onSocketError(
    callback: types$types$SocketErrorCallback
  ): void;

  /**
   * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
   */
  declare function wx$sendSocketMessage(
    param: types$types$SocketSendParams
  ): void;

  declare function wx$uploadFile(param: {
    /**
     * 开发者服务器地址
     */
    url: string,

    /**
     * 要上传文件资源的路径
     */
    filePath: string,

    /**
     * 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
     */
    name: string,

    /**
     * HTTP 请求 Header，Header 中不能设置 Referer
     */
    header?: {
      [key: string]: string
    },

    /**
     * HTTP 请求中其他额外的 form data
     */
    formData?: {
      [key: string]: any
    },
    success?: (res: {
      data: string,
      statusCode: number
    }) => void,
    fail?: () => void,
    complete?: () => void
  }): UploadTask;

  /**
   * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用
   */
  declare function wx$getFriendCloudStorage(param: {
    /**
     * 要拉取的 key 列表
     */
    keyList: string[],
    success?: (res: {
      data: UserGameData[]
    }) => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用
   */
  declare function wx$getUserCloudStorage(param: {
    /**
     * 要拉取的 key 列表
     */
    keyList: string[],
    success?: (res: {
      KVDataList: KVData[]
    }) => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 在无须用户授权的情况下，批量获取用户信息。该接口只在开放数据域下可用
   * 请注意！！旧版本的该接口已过期，微信不允许主动弹出授权框，旧版本API会被逐渐作废，请使用wx.createUserInfoButton或在隔离数据区取得用户信息
   * 如使用旧接口取得用户信息，withCredentials 为 true 时需要先调用 wx.login 接口。需要用户授权 scope.userInfo
   */
  declare function wx$getUserInfo(
    param: types$types$NewUserInfoParam | types$types$OldUserInfoParam
  ): void;

  /**
   * 在小游戏是通过群分享卡片打开的情况下，可以通过调用该接口获取群同玩成员的游戏数据。该接口只可在开放数据域下使用。
   */
  declare function wx$getGroupCloudStorage(param: {
    /**
     * 群分享对应的 shareTicket
     */
    shareTicket: string,

    /**
     * 要拉取的 key 列表
     */
    keyList: string[],
    success?: (res: {
      data: UserGameData[]
    }) => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 删除用户托管数据当中对应 key 的数据。
   */
  declare function wx$removeUserCloudStorage(param: {
    /**
     * 要删除掉 key 列表
     */
    keyList: string[],
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 对用户托管数据进行写数据操作，允许同时写多组 KV 数据。
   * 托管数据的限制
   *       > 每个openid所标识的微信用户在每个游戏上托管的数据不能超过128个key-value对。
   *       > 上报的key-value列表当中每一项的key+value长度都不能超过1K(1024)字节。
   *       > 上报的key-value列表当中每一个key长度都不能超过128字节。
   */
  declare function wx$setUserCloudStorage(param: {
    /**
     * 要修改的 KV 数据列表
     */
    KVDataList: KVData[],
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 通过 wx.login 接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用 wx.checkSession 接口检测当前用户登录态是否有效。登录态过期后开发者可以再调用 wx.login 获取新的用户登录态。
   */
  declare function wx$checkSession(cb: types$types$Callbacks): void;

  /**
   * 调用接口获取登录凭证（code）进而换取用户登录态信息，包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。
   */
  declare function wx$login(
    cb: types$types$CallbacksWithType<{
      /**
       * 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 code2accessToken，使用 code 换取 openid 和 session_key 等信息
       */
      code: string
    }>
  ): void;

  /**
   * 根据用户当天游戏时间判断用户是否需要休息
   */
  declare function wx$checkIsUserAdvisedToRest(param: {
    /**
     * 今天已经玩游戏的时间，单位：秒
     */
    todayPlayedTime: number,
    success?: (res: {
      /**
       * 是否建议用户休息
       */
      result: boolean
    }) => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  declare function wx$createUserInfoButton(param: {
    /**
     * 按钮类型
     */
    type: types$types$ButtonType,

    /**
     * 按钮上的文本，仅当 type 为 text 时有效
     */
    text?: string,

    /**
     * 按钮的背景图片，仅当 type 为 image 时有效
     */
    image?: string,

    /**
     * 按钮的样式
     */
    style: types$types$ButtonStyle,

    /**
     * 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
     */
    withCredentials?: boolean,
    lang?: "en" | "zh_CN" | "zh_TW"
  }): UserInfoButton;

  /**
   * 创建打开设置页面的按钮
   */
  declare function wx$createOpenSettingButton(param: {
    /**
     * 按钮类型
     */
    type: types$types$ButtonType,

    /**
     * 按钮上的文本，仅当 type 为 text 时有效
     */
    text?: string,

    /**
     * 按钮的背景图片，仅当 type 为 image 时有效
     */
    image?: string,

    /**
     * 按钮的样式
     */
    style: types$types$ButtonStyle
  }): OpenSettingButton;

  /**
   * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
   */
  declare function wx$getSetting(
    p: types$types$CallbacksWithType<{
      authSetting: types$types$AuthSetting
    }>
  ): void;

  /**
   * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
   * @deprecated
   */
  declare function wx$openSetting(
    p: types$types$CallbacksWithType<{
      authSetting: types$types$AuthSetting
    }>
  ): void;

  /**
   * 获取用户过去三十天微信运动步数，需要先调用 wx.login 接口。需要用户授权 scope.werun。
   */
  declare function wx$getWeRunData(
    p: types$types$CallbacksWithType<{
      /**
       * 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法
       */
      encryptedData: string,

      /**
       * 加密算法的初始向量
       */
      iv: string
    }>
  ): void;

  /**
   * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
   */
  declare function wx$authorize(param: {
    /**
     * 需要获取权限的 scope
     */
    scope: string,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 创建游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 游戏圈使用指南
   */
  declare function wx$createGameClubButton(param: {
    type: types$types$ButtonType,
    text?: string,
    image?: string,
    style: types$types$ButtonStyle,

    /**
     * 游戏圈按钮的图标，仅当 object.type 参数为 image 时有效
     */
    icon?: types$types$GameClubButtonIcon
  }): GameClubButton;

  /**
   * 用户点击后打开意见反馈页面的按钮
   */
  declare function wx$createFeedbackButton(param: {
    type: types$types$ButtonType,
    text?: string,
    image?: string,
    style: types$types$ButtonStyle
  }): FeedbackButton;

  /**
   * 进入客服会话，要求在用户发生过至少一次 touch 事件后才能调用。后台接入方式与小程序一致，详见 客服消息接入
   */
  declare function wx$openCustomerServiceConversation(param: {
    /**
     * 会话来源
     */
    sessionFrom?: string,

    /**
     * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话之后会收到一个消息卡片，通过以下三个参数设置卡片的内容
     */
    showMessageCard?: boolean,

    /**
     * 会话内消息卡片标题
     */
    sendMessageTitle?: string,

    /**
     * 会话内消息卡片路径
     */
    sendMessagePath?: string,

    /**
     * 会话内消息卡片图片路径
     */
    sendMessageImg?: string,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 获取开放数据域
   */
  declare function wx$getOpenDataContext(): OpenDataContext;

  /**
   * 监听主域发送的消息
   */
  declare function wx$onMessage(callback: (data: any) => void): void;

  /**
   * 获取转发详细信息
   */
  declare function wx$getShareInfo(param: {
    shareTicket: string,
    success?: (res: {
      /**
       * 错误信息
       */
      errMsg: string,

      /**
       * 包括敏感数据在内的完整转发信息的加密数据
       */
      encryptedData: string,

      /**
       * 加密算法的初始向量
       */
      iv: string
    }) => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 隐藏转发按钮
   */
  declare function wx$hideShareMenu(cb?: types$types$Callbacks): void;

  /**
   * 监听用户点击右上角菜单的“转发”按钮时触发的事件
   */
  declare function wx$onShareAppMessage(
    cb: () => types$types$ShareOption
  ): void;

  /**
   * 取消监听用户点击右上角菜单的“转发”按钮时触发的事件
   */
  declare function wx$offShareAppMessage(
    cb: () => types$types$ShareOption
  ): void;

  /**
   * 显示当前页面的转发按钮
   */
  declare function wx$showShareMenu(param?: {
    /**
     * 是否使用带 shareTicket 的转发
     */
    withShareTicket: boolean,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 主动拉起转发，进入选择通讯录界面。
   */
  declare function wx$shareAppMessage(param: types$types$ShareOption): void;

  /**
   * 更新转发属性
   */
  declare function wx$updateShareMenu(param: {
    /**
     * 是否使用带 shareTicket 的转发详情
     */
    withShareTicket: boolean,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 获取性能管理器
   */
  declare function wx$getPerformance(): WxPerformance;

  /**
   * 加快触发 JavaScriptCore Garbage Collection（垃圾回收），GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。
   */
  declare function wx$triggerGC(): void;

  /**
 * 监听内存不足告警
 * @param 内存告警等级，只有 Android 才有，对应系统宏定义:
10 TRIM_MEMORY_RUNNING_LOW
15 TRIM_MEMORY_RUNNING_CRITICAL
 */
  declare function wx$onMemoryWarning(
    callback: (res: {
      level: number
    }) => void
  ): void;

  declare function wx$setEnableDebug(p: {
    enableDebug: boolean,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 清理本地数据缓存
   */
  declare function wx$clearStorage(param: types$types$Callbacks): void;

  /**
   * clearStorage的同步版本
   */
  declare function wx$clearStorageSync(): void;

  /**
   * 从本地缓存中异步获取指定 key 的内容
   */
  declare function wx$getStorage(param: types$types$GetStorageParams): void;

  /**
   * getStorage 的同步版本
   */
  declare function wx$getStorageSync(key: string): any;

  /**
   * 异步获取当前storage的相关信息
   */
  declare function wx$getStorageInfo(
    param: types$types$CallbacksWithType<types$types$StorageInfo>
  ): void;

  /**
   * getStorageInfo 的同步版本
   */
  declare function wx$getStorageInfoSync(): types$types$StorageInfo;

  /**
   * 从本地缓存中移除指定 key
   */
  declare function wx$removeStorage(
    param: types$types$RemoveStorageParams
  ): void;

  /**
   * removeStorage 的同步版本
   * @param key 本地缓存中指定的 key
   */
  declare function wx$removeStorageSync(key: string): void;

  /**
   * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。
   */
  declare function wx$setStorage(param: types$types$SetStorageParams): void;

  /**
   * setStorage 的同步版本
   * @param key 本地缓存中指定的 key
   * @param data 需要存储的内容
   */
  declare function wx$setStorageSync(key: string, data: any): void;

  /**
   * 触发分包加载，详见 分包加载
   */
  declare function wx$loadSubpackage(param: {
    /**
     * 分包的名字，可以填 name 或者 root
     */
    name: string,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): LoadSubpackageTask;

  /**
   * 获取菜单按钮的布局置信息
   */
  declare function wx$getMenuButtonBoundingClientRect(): {
    /**
     * 宽度
     */
    width: number,

    /**
     * 高度
     */
    height: number,

    /**
     * 上边界坐标
     */
    top: number,

    /**
     * 右边界坐标
     */
    right: number,

    /**
     * 下边界坐标
     */
    bottom: number,

    /**
     * 左边界坐标
     */
    left: number
  };

  declare function wx$setMenuStyle(param: {
    /**
     * 样式风格
     */
    style: "light" | "dark",
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 显示消息提示框
   */
  declare function wx$showToast(param: {
    /**
     * 提示的内容
     */
    title?: string,

    /**
     * 图标
     */
    icon?: "success" | "loading",

    /**
     * 自定义图标的本地路径，image 的优先级高于 icon
     */
    image?: string,

    /**
     * 提示的延迟时间
     */
    duration?: number,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 隐藏消息提示框
   */
  declare function wx$hideToast(cb?: types$types$Callbacks): void;

  /**
   * 显示模态对话框
   */
  declare function wx$showModal(param: {
    /**
     * 提示的标题
     */
    title?: string,

    /**
     * 提示的内容
     */
    content?: string,

    /**
     * 是否显示取消按钮，默认true
     */
    showCancel?: boolean,

    /**
     * 取消按钮的文字，最多 4 个字符串
     */
    cancelText?: string,

    /**
     * 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串，默认值#000000
     */
    cancelColor?: string,

    /**
     * 确认按钮的文字，最多 4 个字符串
     */
    confirmText?: string,

    /**
     * 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串，默认值#3cc51f
     */
    confirmColor?: string,
    success?: (res: {
      confirm?: boolean,
      cancel?: boolean
    }) => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
   */
  declare function wx$showLoading(prms?: {
    /**
     * 提示的内容
     */
    title?: string,

    /**
     * 是否显示透明蒙层
     */
    mask?: boolean,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 隐藏 loading 提示框
   */
  declare function wx$hideLoading(cb?: types$types$Callbacks): void;

  /**
   * 显示选择器
   */
  declare function wx$showActionSheet(params: {
    /**
     * 按钮的文字数组，数组长度最大为 6
     */
    itemList: string[],

    /**
     * 按钮的文字颜色，默认值#000000
     */
    itemColor?: string,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  declare function wx$hideKeyboard(): void;

  /**
   * 监听键盘输入事件
   * @param 键盘输入的当前值
   */
  declare function wx$onKeyboardInput(
    callback: (res: {
      value: string
    }) => void
  ): void;

  /**
   * 取消监听键盘输入事件
   */
  declare function wx$offKeyboardInput(
    callback: (res: {
      value: string
    }) => void
  ): void;

  /**
   * 监听用户点击键盘 Confirm 按钮时的事件
   * @param 键盘输入的当前值
   */
  declare function wx$onKeyboardConfirm(
    callback: (res: {
      value: string
    }) => void
  ): void;

  /**
   * 取消监听用户点击键盘 Confirm 按钮时的事件
   */
  declare function wx$offKeyboardConfirm(
    callback: (res: {
      value: string
    }) => void
  ): void;

  /**
   * 监听监听键盘收起的事件
   * @param 键盘输入的当前值
   */
  declare function wx$onKeyboardComplete(
    callback: (res: {
      value: string
    }) => void
  ): void;

  /**
   * 取消监听监听键盘收起的事件
   */
  declare function wx$offKeyboardComplete(
    callback: (res: {
      value: string
    }) => void
  ): void;

  /**
   * 显示键盘
   */
  declare function wx$showKeyboard(param: {
    /**
     * 键盘输入框显示的默认值
     */
    defaultValue: string,

    /**
     * 键盘中文本的最大长度
     */
    maxLength?: number,

    /**
     * 是否为多行输入
     */
    multiple?: boolean,

    /**
     * 当点击完成时键盘是否收起
     */
    confirmHold?: boolean,

    /**
     * 键盘右下角 confirm 按钮的类型，只影响按钮的文本内容
     */
    confirmType?: "done" | "next" | "search" | "go" | "send"
  }): void;

  /**
   * 更新键盘，只有当键盘处于拉起状态时才会产生效果
   */
  declare function wx$updateKeyboard(param: {
    /**
     * 键盘输入框的当前值
     */
    value: string,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 当在配置中设置 showStatusBarStyle 时，屏幕顶部会显示状态栏。此接口可以修改状态栏的样式。
   */
  declare function wx$setStatusBarStyle(param: {
    style: "white" | "black",
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 监听窗口尺寸变化事件
   */
  declare function wx$onWindowResize(
    cb: (res: {
      windowWidth: number,
      windowHeight: number
    }) => void
  ): void;

  /**
   * 取消监听窗口尺寸变化事件
   */
  declare function wx$offWindowResize(
    cb: (res: {
      windowWidth: number,
      windowHeight: number
    }) => void
  ): void;

  declare function wx$getUpdateManager(): UpdateManager;

  /**
   * 创建一个 Worker 线程，目前限制最多只能创建一个 Worker，创建下一个 Worker 前请调用 Worker.terminate
   */
  declare function wx$createWorker(): WxWorker;

  /**
   * 创建一个 InnerAudioContext 实例
   */
  declare function wx$createInnerAudioContext(): InnerAudioContext;

  /**
   * 获取当前支持的音频输入源
   */
  declare function wx$getAvailableAudioSources(
    param: types$types$CallbacksWithType<{
      /**
       * 音频输入源，每一项对应一种音频输入源
       */
      audioSources: types$types$AudioSourceType[]
    }>
  ): void;

  declare function wx$getRecorderManager(): RecorderManager;

  /**
   * 从本地相册选择图片或使用相机拍照。
   */
  declare function wx$chooseImage(param: {
    count: number,

    /**
     * 所选的图片的尺寸
     */
    sizeType: ["original"] | ["compressed"] | ["original", "compressed"],

    /**
     * 选择图片的来源
     */
    sourceType: ["album"] | ["camera"] | ["album", "camera"],
    success?: (res: {
      tempFilePaths: string[],
      tempFiles: ImageFile[]
    }) => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 预览图片，调用之后会在新打开的页面中全屏预览传入的图片，预览的过程中用户可以进行保存图片、发送给朋友等操作
   */
  declare function wx$previewImage(param: {
    /**
     * 需要预览的图片链接列表
     */
    urls: string[],

    /**
     * 当前显示图片的链接，默认为urls的第一张
     */
    current?: string,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  /**
   * 保存图片到系统相册。需要用户授权 scope.writePhotosAlbum
   */
  declare function wx$saveImageToPhotosAlbum(param: {
    /**
     * 图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
     */
    filePath: string,
    success?: () => void,
    fail?: () => void,
    complete?: () => void
  }): void;

  declare function wx$createVideo(param: {
    /**
     * 视频的左上角横坐标
     */
    x?: number,

    /**
     * 视频的左上角纵坐标
     */
    y?: number,

    /**
     * 视频的宽度，默认值300
     */
    width?: number,

    /**
     * 默认值150
     */
    height?: number,

    /**
     * 视频的资源地址
     */
    src: string,

    /**
     * 视频的封面
     */
    poster?: string,

    /**
     * 视频的初始播放位置，单位为 s 秒，默认值0
     */
    initialTime?: number,

    /**
     * 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5默认值1.0
     */
    playbackRate?: number,

    /**
     * 视频是否为直播，默认值0
     */
    live?: number,

    /**
     * 视频的缩放模式
     * fill - 填充，视频拉伸填满整个容器，不保证保持原有长宽比例
     * contain - 包含，保持原有长宽比例。保证视频尺寸一定可以在容器里面放得下。因此，可能会有部分空白
     * cover - 覆盖，保持原有长宽比例。保证视频尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，视频有部分会看不见
     */
    objectFit?: "contain" | "cover" | "fill",

    /**
     * 视频是否显示控件，默认true
     */
    controls?: boolean,

    /**
     * 视频是否自动播放，默认false
     */
    autoplay?: boolean,

    /**
     * 视频是否是否循环播放，默认值false
     */
    loop?: boolean,

    /**
     * 视频是否禁音播放，默认值false
     */
    muted?: boolean
  }): Video;

  /**
   * 创建 banner 广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号 >= 2.0.4 后再使用该 API。同时，开发者工具上暂不支持调试该 API，请直接在真机上进行调试。
   */
  declare function wx$createBannerAd(param: {
    /**
     * 广告单元 id
     */
    adUnitId: string,

    /**
     * banner 广告组件的样式
     */
    style: types$types$AdStyle
  }): BannerAd;

  /**
   * 创建激励视频广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号 >= 2.0.4 后再使用该 API。同时，开发者工具上暂不支持调试该 API，请直接在真机上进行调试。
   */
  declare function wx$createRewardedVideoAd(param: {
    /**
     * 广告单元 id
     */
    adUnitId: string
  }): RewardedVideoAd;

  /**
   * 发起米大师支付
   */
  declare function wx$requestMidasPayment(param: {
    /**
     * 支付的类型，不同的支付类型有各自额外要传的附加参数。
     *    game - 购买游戏币
     */
    mode: "game",

    /**
     * 环境配置，默认值0
     *    0 - 米大师正式环境
     *    1 - 米大师沙箱环境
     */
    wx$env?: 0 | 1,

    /**
     * 在米大师侧申请的应用 id
     */
    offerId: string,

    /**
     * 币种
     */
    currencyType: "CNY",

    /**
     * 申请接入时的平台，platform 与应用id有关。
     */
    platform?: "android",

    /**
     * 购买数量。mode=game 时必填。购买数量。详见 buyQuantity 限制说明。
     * mode为game（购买游戏币）时，buyQuantity不可任意填写。需满足 buyQuantity * 游戏币单价 = 限定的价格等级。如：游戏币单价为 0.1 元，一次购买最少数量是 10。
     * 有效价格等级如下：
     *        价格等级（单位：人民币）
     *        1
     *        3
     *        6
     *        8
     *        12
     *        18
     *        25
     *        30
     *        40
     *        45
     *        50
     *        60
     *        68
     *        73
     *        78
     *        88
     *        98
     *        108
     *        118
     *        128
     *        148
     *        168
     *        188
     *        198
     *        328
     *        648
     */
    buyQuantity?: number,

    /**
     * 分区 ID
     */
    zoneId?: string,
    success?: () => void,

    /**
 * @param 有如下值：
-1	系统失败
-2	支付取消
-15001	虚拟支付接口错误码，缺少参数
-15002	虚拟支付接口错误码，参数不合法
-15003	虚拟支付接口错误码，订单重复
-15004	虚拟支付接口错误码，后台错误
-15006	虚拟支付接口错误码，appId 权限被封禁
-15006	虚拟支付接口错误码，货币类型不支持
-15007	虚拟支付接口错误码，订单已支付
1	虚拟支付接口错误码，用户取消支付
2	虚拟支付接口错误码，客户端错误, 判断到小程序在用户处于支付中时,又发起了一笔支付请求
3	虚拟支付接口错误码，Android 独有错误：用户使用 Google Play 支付，而手机未安装 Google Play
4	虚拟支付接口错误码，用户操作系统支付状态异常
5	虚拟支付接口错误码，操作系统错误
6	虚拟支付接口错误码，其他错误
1000	参数错误
1003	米大师 Portal 错误
 */
    fail?: (res: {
      errMsg: string,
      errCode: number
    }) => void,
    complete?: () => void
  }): void;
}
