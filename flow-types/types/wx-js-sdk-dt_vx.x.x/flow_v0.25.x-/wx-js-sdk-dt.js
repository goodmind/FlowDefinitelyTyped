declare module "wx-js-sdk-dt" {
  declare var npm$namespace$wx: {
    config: typeof wx$config,
    ready: typeof wx$ready,
    error: typeof wx$error,
    checkJsApi: typeof wx$checkJsApi,
    onMenuShareTimeline: typeof wx$onMenuShareTimeline,
    onMenuShareAppMessage: typeof wx$onMenuShareAppMessage,
    onMenuShareQQ: typeof wx$onMenuShareQQ,
    onMenuShareWeibo: typeof wx$onMenuShareWeibo,
    onMenuShareQZone: typeof wx$onMenuShareQZone,
    updateAppMessageShareData: typeof wx$updateAppMessageShareData,
    updateTimelineShareData: typeof wx$updateTimelineShareData,
    chooseImage: typeof wx$chooseImage,
    previewImage: typeof wx$previewImage,
    uploadImage: typeof wx$uploadImage,
    downloadImage: typeof wx$downloadImage,
    getLocalImgData: typeof wx$getLocalImgData,
    startRecord: typeof wx$startRecord,
    stopRecord: typeof wx$stopRecord,
    onVoiceRecordEnd: typeof wx$onVoiceRecordEnd,
    playVoice: typeof wx$playVoice,
    pauseVoice: typeof wx$pauseVoice,
    stopVoice: typeof wx$stopVoice,
    onVoicePlayEnd: typeof wx$onVoicePlayEnd,
    uploadVoice: typeof wx$uploadVoice,
    downloadVoice: typeof wx$downloadVoice,
    translateVoice: typeof wx$translateVoice,
    getNetworkType: typeof wx$getNetworkType,
    openLocation: typeof wx$openLocation,
    getLocation: typeof wx$getLocation,
    startSearchBeacons: typeof wx$startSearchBeacons,
    stopSearchBeacons: typeof wx$stopSearchBeacons,
    onSearchBeacons: typeof wx$onSearchBeacons,
    closeWindow: typeof wx$closeWindow,
    hideMenuItems: typeof wx$hideMenuItems,
    showMenuItems: typeof wx$showMenuItems,
    hideAllNonBaseMenuItem: typeof wx$hideAllNonBaseMenuItem,
    showAllNonBaseMenuItem: typeof wx$showAllNonBaseMenuItem,
    scanQRCode: typeof wx$scanQRCode,
    openProductSpecificView: typeof wx$openProductSpecificView,
    chooseCard: typeof wx$chooseCard,
    addCard: typeof wx$addCard,
    openCard: typeof wx$openCard,
    chooseWXPay: typeof wx$chooseWXPay,

    OpenCardObj: typeof wx$OpenCardObj
  };

  /**
   * 微信配置对象
   */
  declare interface wx$WxConfig {
    /**
     * 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
     */
    debug?: boolean;

    /**
     * 公众号的唯一标识
     */
    appId: string;

    /**
     * 签名的时间戳
     */
    timestamp: number;

    /**
     * 签名的随机串
     */
    nonceStr: string;

    /**
     * 签名
     */
    signature: string;

    /**
     * 需要使用的JS接口列表
     */
    jsApiList: string[];
  }

  /**
   * 初始化，做任何操作前必须调用该方法
   * @param setting 配置对象
   */
  declare function wx$config(setting: wx$WxConfig): void;

  /**
   * 配置微信初始化成功后的回调
   * @param x 回调
   */
  declare function wx$ready(x: () => void): void;

  /**
   * 配置微信初始化失败后的回调
   * @param err 失败回调
   */
  declare function wx$error(err: (res: any) => void): void;

  /**
   * 所有通过wx对象调用的接口的基础请求参数
   * 见：https://mp.weixin.qq.com/wiki?action=doc&id=mp1421141115&t=0.08966560295638093#7
   */
  declare interface wx$WxBaseRequestConfig {
    /**
     * 接口调用成功时执行的回调函数
     */
    success?: (res?: any) => void;

    /**
     * 接口调用失败时执行的回调函数
     */
    fail?: (error?: any) => void;

    /**
     * 接口调用完成时执行的回调函数，无论成功或失败都会执行
     */
    complete?: (res?: any) => void;

    /**
     * 用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到
     */
    cancel?: () => void;
  }

  /**
   * 所有Menu中的相关接口的请求参数
   */
  declare type wx$WxBaseMenuRequestConfig = {
    /**
     * 监听Menu中的按钮点击时触发的方法
     */
    trigger?: () => void
  } & WxBaseRequestConfig;

  /**
   * 判断当前客户端版本是否支持指定 JS 接口, checkJsApi 接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用 checkJsApi 来检测
   */
  declare type wx$CheckApiConfig = {
    /**
     * 需要检测的JS接口列表
     */
    jsApiList: string[],

    /**
     * 以键值对的形式返回，可用的 api 值 true，不可用为 false
     * 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
     */
    success(res: {
      checkResult: {
        [methodName: string]: boolean
      },
      errMsg: {
        msg: string
      }
    }): void
  } & WxBaseRequestConfig;

  /**
   * 判断当前客户端版本是否支持指定 JS 接口
   */
  declare function wx$checkJsApi(setting: wx$CheckApiConfig): void;

  declare type wx$ShareTimelineConfig = {
    /**
     * 分享标题
     */
    title: string,

    /**
     * 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
     */
    link: string,

    /**
     * 分享图标
     */
    imgUrl?: string
  } & WxBaseMenuRequestConfig;

  /**
   * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
   * @deprecated
   */
  declare function wx$onMenuShareTimeline(
    setting: wx$ShareTimelineConfig
  ): void;

  /**
   * “分享给朋友”及“分享到QQ”按钮的分享内容
   */
  declare type wx$ShareToUserConfig = {
    /**
     * 分享标题
     */
    title?: string,

    /**
     * 分享描述
     */
    desc?: string,

    /**
     * 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
     */
    link?: string,

    /**
     * 分享图标
     */
    imgUrl?: string,
    success?: () => void
  } & WxBaseMenuRequestConfig;

  /**
   * “分享到朋友圈”及“分享到QQ空间”按钮的分享内容
   */
  declare type wx$ShareToTimelineConfig = {
    /**
     * 分享标题
     */
    title?: string,

    /**
     * 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
     */
    link?: string,

    /**
     * 分享图标
     */
    imageUrl?: string,
    success?: () => void
  } & WxBaseMenuRequestConfig;

  /**
   * 消息分享对象
   * @deprecated
   */
  declare type wx$SharedAppMessage = {
    /**
     * 分享描述
     */
    desc: string,

    /**
     * 分享类型, music、video 或 link，不填默认为 link
     */
    type?: string,

    /**
     * 如果 type 是 music 或 video，则要提供数据链接，默认为空
     */
    dataUrl?: string
  } & ShareTimelineConfig;

  /**
   * 获取“分享给朋友”按钮点击状态及自定义分享内容接口
   * @deprecated
   */
  declare function wx$onMenuShareAppMessage(setting: wx$SharedAppMessage): void;

  /**
   * @deprecated
   */
  declare type wx$MenuShareQQ = {
    /**
     * 分享描述
     */
    desc: string
  } & ShareTimelineConfig;

  /**
   * “分享到QQ”按钮点击状态及自定义分享内容接口
   * @deprecated
   */
  declare function wx$onMenuShareQQ(config: wx$MenuShareQQ): void;

  declare type wx$MenuShareWeibo = {
    /**
     * 分享描述
     */
    desc: string
  } & ShareTimelineConfig;

  /**
   * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
   */
  declare function wx$onMenuShareWeibo(config: wx$MenuShareWeibo): void;

  /**
   * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
   * @deprecated
   */
  declare function wx$onMenuShareQZone(config: wx$MenuShareWeibo): void;

  /**
   * “分享给朋友”及“分享到QQ”
   * @param config
   */
  declare function wx$updateAppMessageShareData(
    config: wx$ShareToUserConfig
  ): void;

  /**
   * “分享到朋友圈”及“分享到QQ空间”
   * @param config
   */
  declare function wx$updateTimelineShareData(
    config: wx$ShareToTimelineConfig
  ): void;

  declare interface wx$ChooseImageConfig {
    /**
     * 照片数，默认9
     */
    count?: number;

    /**
     * 可以指定是原图还是压缩图，默认二者都有
     */
    sizeType?: string[];

    /**
     * 可以指定来源是相册还是相机，默认二者都有
     */
    sourceType?: string[];

    /**
     * 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
     */
    success(res: {
      localIds: string[]
    }): void;
  }

  /**
   * 拍照或从手机相册中选图接口
   */
  declare function wx$chooseImage(config: wx$ChooseImageConfig): void;

  /**
   * 显示照片预览用的配置对象
   */
  declare type wx$PreviewImageConfig = {
    /**
     * 当前显示图片的 http 链接
     */
    current: string,

    /**
     * 需要预览的图片 http 链接列表
     */
    urls: string[]
  } & WxBaseRequestConfig;

  /**
   * 预览图片接口
   */
  declare function wx$previewImage(config: wx$PreviewImageConfig): void;

  declare type wx$UploadImageConfig = {
    /**
     * 要上传的图片的本地 ID，由 chooseImage 接口获得
     */
    localId: string,

    /**
     * 默认为1，显示进度提示
     */
    isShowProgressTips?: number,

    /**
     * res: var serverId = res.serverId;  返回图片的服务器端 ID
     */
    success(res: any): void
  } & WxBaseRequestConfig;

  /**
   * 上传图片
   */
  declare function wx$uploadImage(config: wx$UploadImageConfig): void;

  declare type wx$DownLoadImageConfig = {
    /**
     * serverId: 需要下载的图片的服务器端ID，由 uploadImage 接口获得
     */
    serverId: string,
    isShowProgressTips?: number,

    /**
     * var localId = res.localId;  返回图片下载后的本地 ID
     */
    success?: (res: {
      localId: string
    }) => void
  } & WxBaseRequestConfig;

  declare function wx$downloadImage(config: wx$DownLoadImageConfig): void;

  declare type wx$GetLocalImgDataConfig = {
    /**
     * 图片的 localID
     */
    localId: string,

    /**
     * 成功后的回调, localData是图片的base64数据，可以用img标签显示
     */
    success(res: {
      localData: string
    }): void
  } & WxBaseRequestConfig;

  /**
   * 获取本地图片接口,此接口仅在 iOS WKWebview 下提供，用于兼容 iOS WKWebview 不支持 localId 直接显示图片的问题
   */
  declare function wx$getLocalImgData(config: wx$GetLocalImgDataConfig): void;

  /**
   * 开始录音
   */
  declare function wx$startRecord(): void;

  /**
   * 停止录音
   */
  declare function wx$stopRecord(
    success: (res: {
      localId: string
    }) => void
  ): void;

  /**
   * 录音时间超过一分钟没有停止的时候会执行回调
   */
  declare function wx$onVoiceRecordEnd(
    complete: (res: {
      localId: string
    }) => void
  ): void;

  /**
   * 播放音频
   */
  declare function wx$playVoice(localId: string): void;

  /**
   * 暂停音频
   */
  declare function wx$pauseVoice(localId: string): void;

  /**
   * 停止播放音频
   */
  declare function wx$stopVoice(localId: string): void;

  /**
   * 停止播放后的回调
   */
  declare function wx$onVoicePlayEnd(
    success: (res: {
      localId: string
    }) => void
  ): void;

  declare type wx$UploadVoiceConfig = {
    localId: string,
    isShowProgressTips?: number,
    success(res: any): void
  } & WxBaseRequestConfig;

  /**
   * 上传语音接口, 上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器，
   */
  declare function wx$uploadVoice(config: wx$UploadVoiceConfig): void;

  declare type wx$DownloadVoiceConfig = {
    /**
     * 需要下载的音频的服务器端 ID，由 uploadVoice 接口获得
     */
    serverId: string,

    /**
     * 默认为1，显示进度提示
     */
    isShowProgressTips?: number,

    /**
     * 下载成功回调
     */
    success(res: any): void
  } & WxBaseRequestConfig;

  declare function wx$downloadVoice(config: wx$DownloadVoiceConfig): void;

  /**
   * 识别音频并返回识别结果接口
   */
  declare function wx$translateVoice(config: wx$UploadVoiceConfig): void;

  /**
   * 获取网络状态, var networkType = res.networkType; 返回网络类型 2g，3g，4g，wifi
   */
  declare function wx$getNetworkType(
    success: (res: {
      networkType: string
    }) => void
  ): void;

  declare type wx$OpenLocationConfig = {
    latitude?: number,
    longitude?: number,

    /**
     * 位置名
     */
    name?: string,

    /**
     * 地址详情说明
     */
    address?: string,

    /**
     * 地图缩放级别,整形值,范围从1~28。默认为最大
     */
    scale?: number,

    /**
     * 在查看位置界面底部显示的超链接, 可点击跳转
     */
    infoUrl?: string
  } & WxBaseRequestConfig;

  /**
   * 微信内置地图查看位置
   */
  declare function wx$openLocation(config: wx$OpenLocationConfig): void;

  declare interface wx$Location {
    latitude: number;
    longitude: number;

    /**
     * 速度，以米/每秒计
     */
    speed: number;

    /**
     * 位置精度
     */
    accuracy: number;
  }

  declare type wx$GetLocationConfig = {
    /**
     * 默认为 wgs84 的 gps 坐标，如果要返回直接给 openLocation 用的火星坐标，可传入'gcj02'
     */
    type?: string,
    success(res: wx$Location): void
  } & WxBaseRequestConfig;

  /**
   * 获取地理位置接口
   */
  declare function wx$getLocation(config: wx$GetLocationConfig): void;

  declare type wx$StartSearchBeaconsConfig = {
    /**
     * 摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
     */
    ticket: string,

    /**
     * 完成后的回调
     */
    complete(argv: any): void
  } & WxBaseRequestConfig;

  /**
   * 开启查找周边 ibeacon 设备接口
   */
  declare function wx$startSearchBeacons(
    config: wx$StartSearchBeaconsConfig
  ): void;

  declare type wx$StopSearchBeaconsConfig = {
    complete(res: any): void
  } & WxBaseRequestConfig;

  /**
   * 关闭查找完成后的回调函数
   */
  declare function wx$stopSearchBeacons(
    config: wx$StopSearchBeaconsConfig
  ): void;

  declare type wx$OnSearchBeaconsConfig = {
    complete(argv: any): void
  } & WxBaseRequestConfig;

  /**
   * 监听周边 ibeacon 设备接口,
   * 摇一摇周边接口使用注意事项及更多返回结果说明，请参考：摇一摇周边获取设备信息
   */
  declare function wx$onSearchBeacons(config: wx$OnSearchBeaconsConfig): void;

  /**
   * 关闭当前网页窗口接口
   */
  declare function wx$closeWindow(): void;

  declare type wx$MenuItemsConfig = {
    /**
     * 要隐藏/显示的菜单项，只能隐藏“传播类”和“保护类”按钮
     */
    menuList: string[]
  } & WxBaseRequestConfig;

  /**
   * 批量隐藏功能按钮接口
   */
  declare function wx$hideMenuItems(config: wx$MenuItemsConfig): void;

  /**
   * 批量显示功能按钮接口
   */
  declare function wx$showMenuItems(config: wx$MenuItemsConfig): void;

  /**
   * 隐藏所有非基础按钮接口
   */
  declare function wx$hideAllNonBaseMenuItem(): void;

  /**
   * 显示所有功能按钮接口
   */
  declare function wx$showAllNonBaseMenuItem(): void;

  declare type wx$ScanQRCodeConfig = {
    /**
     * 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
     */
    needResult?: number,

    /**
     * ["qrCode","barCode"], 可以指定扫二维码还是一维码，默认二者都有
     */
    scanType?: string[],

    /**
     * resultStr 是当 needResult 为 1 时，扫码返回的结果
     */
    success?: (res: {
      resultStr: string
    }) => void
  } & WxBaseRequestConfig;

  /**
   * 调起微信扫一扫接口
   */
  declare function wx$scanQRCode(config: wx$ScanQRCodeConfig): void;

  declare type wx$OpenProductSpecificViewConfig = {
    /**
     * 商品id
     */
    productId: string,

    /**
     * 0.默认值，普通商品详情页; 1.扫一扫商品详情页; 2.小店商品详情页
     */
    viewType?: number
  } & WxBaseRequestConfig;

  /**
   * 跳转微信商品页接口
   */
  declare function wx$openProductSpecificView(
    config: wx$OpenProductSpecificViewConfig
  ): void;

  declare type wx$ChooseCardConfig = {
    /**
     * 门店Id
     */
    shopId?: string,

    /**
     * 卡券类型
     */
    cardType?: string,

    /**
     * 卡券Id
     */
    cardId?: string,

    /**
     * 卡券签名时间戳
     */
    timestamp: number,

    /**
     * 卡券签名随机串
     */
    nonceStr: string,

    /**
     * 签名方式，默认'SHA1'
     */
    signType: string,

    /**
     * 卡券签名
     */
    cardSign: string,

    /**
     * var cardList= res.cardList; 用户选中的卡券列表信息
     */
    success?: (res: {
      cardList: wx$Card[]
    }) => void
  } & WxBaseRequestConfig;

  /**
   * 卡券对象
   */
  declare interface wx$Card {
    cardId: string;
    cardExt: string;
  }

  /**
   * 拉取适用卡券列表并获取用户选择信息
   */
  declare function wx$chooseCard(config: wx$ChooseCardConfig): void;

  declare interface wx$AddCardConfig {
    cardList: wx$Card[];
    success?: (res: {
      cardList: wx$Card[]
    }) => void;
  }

  /**
   * 批量添加卡券接口
   */
  declare function wx$addCard(config: wx$AddCardConfig): void;

  declare class wx$OpenCardObj {
    cardId: string;
    code: string;
  }

  /**
   * 需要打开的卡券列表
   */
  declare type wx$OpenCardConfig = {
    cardList: wx$OpenCardObj[]
  } & WxBaseRequestConfig;

  /**
   * 查看微信卡包中的卡券接口
   */
  declare function wx$openCard(config: wx$OpenCardConfig): void;

  declare type wx$ChooseWXPayConfig = {
    /**
     * 支付签名时间戳，注意微信jssdk中的所有使用 timestamp 字段均为小写。但最新版的支付后台生成签名使用的 timeStamp 字段名需大写其中的S字符
     */
    timestamp: number,

    /**
     * 支付签名随机串，不长于 32 位
     */
    nonceStr: string,

    /**
     * 统一支付接口返回的 prepay_id 参数值，提交格式如：prepay_id=***
     */
    package: string,

    /**
     * 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
     */
    signType?: string,

    /**
     * 支付签名
     */
    paySign: string
  } & WxBaseRequestConfig;

  /**
   * 发起一个微信支付请求
   */
  declare function wx$chooseWXPay(config: wx$ChooseWXPayConfig): void;
}
