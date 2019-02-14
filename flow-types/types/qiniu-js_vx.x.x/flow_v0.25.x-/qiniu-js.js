declare module "qiniu-js" {
  declare export interface Next {
    total: {
      loaded: number,
      total: number,
      percent: number
    };
  }
  declare export interface Error {
    code: number;
    message: string;
    isRequestError: true | void;
    reqId: string;
  }
  declare export interface AudioInfo {
    bit_rate: string;
    channels: number;
    codec_name: string;
    codec_type: string;
    duration: string;
    index: number;
    nb_frames: string;
    r_frame_rate: string;
    sample_fmt: string;
    sample_rate: string;
    start_time: string;
    tags: {
      creation_time: string,
      [key: string]: string
    };
  }
  declare export interface AvFormat {
    bit_rate: string;
    duration: string;
    format_long_name: string;
    format_name: string;
    nb_streams: number;
    size: string;
    start_time: string;
    tags: {
      creation_time: string,
      [key: string]: string
    };
  }
  declare export interface VideoInfo {
    bit_rate: string;
    codec_name: string;
    codec_type: string;
    display_aspect_ratio: string;
    duration: string;
    height: number;
    index: number;
    nb_frames: string;
    pix_fmt: string;
    r_frame_rate: string;
    sample_aspect_ratio: string;
    start_time: string;
    tags: {
      creation_time: string,
      [key: string]: string
    };
    width: number;
  }
  declare export interface AvAudioInfo {
    audio: AudioInfo;
    format: AvFormat;
    video: VideoInfo;
  }
  declare export interface AvImageInfo {
    format: string;
    width: number;
    height: number;
    colorModel: string;
  }
  declare export interface CompletedResult {
    avinfo?: AvAudioInfo;
    imageInfo?: AvImageInfo;
    key: string;
    name: string;
    size: number;
    persistentid: string;
    sec: string;
    ext: string;
    bucket: string;
  }
  declare export interface Observer {
    next(res: Next): void;
    error(err: Error | string): void;
    complete(res: CompletedResult): void;
  }
  declare export interface Subscription {
    unsubscribe(): void;
  }
  declare export interface Observable {
    subscribe(options: Observer): Subscription;

    /**
     * 订阅
     * @param next 接收上传进度信息
     * @param error 上传错误后触发；自动重试本身并不会触发该错误，而当重试次数到达上限后则可以触发。当不是 xhr 请求错误时，会把当前错误产生原因直接抛出，诸如 JSON 解析异常等；当产生 xhr 请求错误时，参数 err 为一个包含 code、message、isRequestError 三个属性的 object
     * @param complete 接收上传完成后的后端返回信息，具体返回结构取决于后端sdk的配置，可参考[上传策略](https://developer.qiniu.com/kodo/manual/1206/put-policy)。
     * @returns
     */
    subscribe(
      next: (obj: Next) => void,
      error?: (err: Error | string) => void,
      complete?: (obj: CompletedResult) => void
    ): Subscription;
  }
  declare export interface Extra {
    fname: string;
    params: any;
    mimeType: string[] | null;
  }
  declare export interface Config {
    useCdnDomain: boolean;
    region: Region | string;
    uphost: string;
    disableStatisticsReport: boolean;
    retryCount: number;
    concurrentRequestLimit: number;
    checkByMD5: boolean;
    forceDirect: boolean;
  }

  /**
   * 上传文件
   * @param file Blob 对象，上传的文件
   * @param key 文件资源名
   * @param token 上传验证信息，前端通过接口请求后端获得
   * @param putExtra
   * @param config
   */
  declare export function upload(
    file: Blob,
    key: string | null | void,
    token: string,
    putExtra: $Shape<Extra>,
    config: $Shape<Config>
  ): Observable;

  /**
   * 返回创建文件的 url；当分片上传时，我们需要把分片返回的 ctx 信息拼接后通过该 url 上传给七牛以创建文件。
   * @param url 上传域名，可以通过qiniu.getUploadUrl()获得
   * @param size 文件大小
   * @param key 文件资源名
   * @param putExtra
   * @returns
   */
  declare export function createMkFileUrl(
    url: string,
    size: number,
    key: string,
    putExtra: $Shape<Extra>
  ): string;

  declare export var Region: {|
    +z0: 0, // 0
    +z1: 1, // 1
    +z2: 2, // 2
    +na0: 3, // 3
    +as0: 4 // 4
  |};

  declare var npm$namespace$region: {
    z0: typeof region$z0,
    z1: typeof region$z1,
    z2: typeof region$z2,
    na0: typeof region$na0,
    as0: typeof region$as0
  };
  declare var region$z0: Region;

  declare var region$z1: Region;

  declare var region$z2: Region;

  declare var region$na0: Region;

  declare var region$as0: Region;

  /**
   * 接收参数为 config 对象，返回根据 config 里所配置信息的上传域名
   * @param config
   * @param token
   * @returns
   */
  declare export function getUploadUrl(
    config: $Shape<Config>,
    token: string
  ): Promise<string>;

  declare export interface Headers {
    [key: string]: string;
  }

  /**
   * 返回 object，包含用来获得分片上传设置的头信息，参数为 token 字符串；当分片上传时，请求需要带该函数返回的头信息
   * @param token
   * @returns
   */
  declare export function getHeadersForChunkUpload(token: string): Headers;

  /**
   * 返回 object，包含用来获得文件创建的头信息，参数为 token 字符串；当分片上传完需要把 ctx 信息传给七牛用来创建文件时，请求需要带该函数返回的头信息
   * @param token
   * @returns
   */
  declare export function getHeadersForMkFile(token: string): Headers;

  /**
   * 返回[[k, v],...]格式的数组，k 为自定义变量 key 名，v 为自定义变量值，用来提取 putExtra.params 包含的自定义变量
   * @param params
   * @returns
   */
  declare export function filterParams(params: any): Array<[string, any]>;

  declare export interface CompressOptions {
    quality: number;
    maxWidh: number;
    maxHeight: number;
    noCompressIfLarger: boolean;
  }

  /**
   * 上传前图片压缩
   * @param file 要压缩的源图片，为 blob 对象，支持 image/png、image/jpeg、image/bmp、image/webp 这几种图片类型
   * @param options
   * @returns
   */
  declare export function compressImage(
    file: Blob,
    options: $Shape<CompressOptions>
  ): Promise<{
    dist: Blob,
    width: number,
    height: number
  }>;

  declare export interface WaterMarkOptions1 {
    mode: 1;
    image: string;
    dissolve: number;
    gravity:
      | "NorthWest"
      | "North"
      | "NorthEast"
      | "West"
      | "Center"
      | "East"
      | "SouthWest"
      | "South"
      | "SouthEast";
    dx: number;
    dy: number;
  }
  declare export interface WaterMarkOptions2 {
    mode: 2;
    text: string;
    dissolve: number;
    gravity:
      | "NorthWest"
      | "North"
      | "NorthEast"
      | "West"
      | "Center"
      | "East"
      | "SouthWest"
      | "South"
      | "SouthEast";
    fontsize: number;
    font: string;
    dx: number;
    dy: number;
    fill: string;
  }

  /**
   * 水印
   * @param options 包含的具体水印参数解释见水印（[watermark](https://developer.qiniu.com/dora/manual/1316/image-watermarking-processing-watermark)）
   * @param key 文件资源名
   * @param domain 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取，前端可以通过接口请求后端得到
   * @returns 返回添加水印后的图片地址,可以赋值给 html 的 img 元素的 src 属性, 若未指定key，可以通过以下方式获得完整的 imgLink
   * `imgLink  =  '<domain>/<key>?' +  imgLink`
   * <domain> 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取
   */
  declare export function watermark(
    options: WaterMarkOptions1 | WaterMarkOptions2,
    key?: string,
    domain?: string
  ): string;

  declare export interface ImageView2Options {
    mode: 0 | 1 | 2 | 3 | 4 | 5;
    w: number;
    h: number;
    q: number;
    format: "jpg" | "gif" | "png" | "webp" | string;
  }

  /**
   * 缩略
   * @param options 具体缩略参数解释见[图片基本处理（imageView2）](https://developer.qiniu.com/dora/manual/1279/basic-processing-images-imageview2)
   * @param key
   * @param domain
   * @returns 返回处理后的图片url
   */
  declare export function imageView2(
    options: $Shape<ImageView2Options>,
    key: string,
    domain: string
  ): string;

  declare export interface ImageMogr2Options {
    "auto-orient": boolean;
    strip: boolean;
    thumbnail: string;
    crop: string;
    gravity: string;
    quality: number;
    rotate: number;
    format: string;
    blur: string;
  }

  /**
   * 返回处理后的图片url
   * @param optoins 具体高级图像处理参数解释见[图像高级处理（imageMogr2）](https://developer.qiniu.com/dora/manual/1270/the-advanced-treatment-of-images-imagemogr2)
   * @param key
   * @param domain
   * @returns 返回处理后的图片url
   */
  declare export function imageMogr2(
    optoins: $Shape<ImageMogr2Options>,
    key: string,
    domain: string
  ): string;

  declare export interface ImageInfo {
    size: number;
    format: "png" | "jpeg" | "gif" | "bmp";
    width: number;
    height: number;
    colorModel: string;
    frameNumber: number;
  }

  /**
   * 图片基本信息
   * 具体 imageInfo 解释见[图片基本信息（imageInfo）](https://developer.qiniu.com/dora/manual/1269/pictures-basic-information-imageinfo)
   * @param key
   * @param domain
   * @returns
   */
  declare export function imageInfo(
    key: string,
    domain: string
  ): Promise<ImageInfo>;

  declare export interface ExtendedInfo {
    code: number;
    error: string;
    [key: string]:
      | {
          type: number,
          val: string
        }
      | number
      | string;
  }
  declare export interface ExtentInfoValue {
    type: number;
    val: string;
  }
  declare export interface ExtentInfo {
    [key: string]: ExtentInfoValue;
    DateTime: ExtentInfoValue;
    ExposureBiasValue: ExtentInfoValue;
    ExposureTime: ExtentInfoValue;
    Model: ExtentInfoValue;
    ISOSpeedRatings: ExtentInfoValue;
    ResolutionUnit: ExtentInfoValue;
  }

  /**
   * EXIF 信息
   * 具体 exif 解释见[图片 EXIF 信息（exif）](https://developer.qiniu.com/dora/manual/1260/photo-exif-information-exif)
   * @param key
   * @param domain
   * @returns
   */
  declare export function exif(
    key: string,
    domain: string
  ): Promise<ExtentInfo>;

  declare export type WaterMarkFopOptions1 = {
    fop: "watermark"
  } & WaterMarkOptions1;

  declare export type WaterMarkFopOptions2 = {
    fop: "watermark"
  } & WaterMarkOptions2;

  declare export type ImageView2FopOptions = {
    fop: "imageView2"
  } & ImageView2Options;

  declare export type ImageMogr2FopOptions = {
    fop: "imageMogr2"
  } & ImageMogr2Options;

  declare export function pipeline(
    fos: Array<
      | WaterMarkFopOptions1
      | WaterMarkFopOptions2
      | ImageView2FopOptions
      | ImageMogr2FopOptions
    >,
    key: string,
    domain: string
  ): string;
}
