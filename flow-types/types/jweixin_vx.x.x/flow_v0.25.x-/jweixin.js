declare module "jweixin" {
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
    hideOptionMenu: typeof wx$hideOptionMenu,
    showOptionMenu: typeof wx$showOptionMenu,
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
    consumeAndShareCard: typeof wx$consumeAndShareCard,
    chooseWXPay: typeof wx$chooseWXPay
  };
  declare type wx$ImageSizeType = "original" | "compressed";

  declare type wx$ImageSourceType = "album" | "camera";

  declare type wx$VideoSourceType = "album" | "camera";

  declare type wx$ApiMethod =
    | "onMenuShareTimeline"
    | "onMenuShareAppMessage"
    | "onMenuShareQQ"
    | "onMenuShareWeibo"
    | "onMenuShareQZone"
    | "startRecord"
    | "stopRecord"
    | "onVoiceRecordEnd"
    | "playVoice"
    | "pauseVoice"
    | "stopVoice"
    | "onVoicePlayEnd"
    | "uploadVoice"
    | "downloadVoice"
    | "chooseImage"
    | "previewImage"
    | "uploadImage"
    | "downloadImage"
    | "translateVoice"
    | "getNetworkType"
    | "openLocation"
    | "getLocation"
    | "hideOptionMenu"
    | "showOptionMenu"
    | "hideMenuItems"
    | "showMenuItems"
    | "hideAllNonBaseMenuItem"
    | "showAllNonBaseMenuItem"
    | "closeWindow"
    | "scanQRCode"
    | "chooseWXPay"
    | "openProductSpecificView"
    | "addCard"
    | "chooseCard"
    | "openCard";

  declare type wx$jsApiList = wx$ApiMethod[];

  declare type wx$menuBase =
    | "menuItem:exposeArticle"
    | "menuItem:setFont"
    | "menuItem:dayMode"
    | "menuItem:nightMode"
    | "menuItem:refresh"
    | "menuItem:profile"
    | "menuItem:addContact";

  declare type wx$menuShare =
    | "menuItem:share:appMessage"
    | "menuItem:share:timeline"
    | "menuItem:share:qq"
    | "menuItem:share:weiboApp"
    | "menuItem:favorite"
    | "menuItem:share:facebook"
    | "menuItem:share:QZone";

  declare type wx$menuProtected =
    | "menuItem:editTag"
    | "menuItem:delete"
    | "menuItem:copyUrl"
    | "menuItem:originPage"
    | "menuItem:readMode"
    | "menuItem:openWithQQBrowser"
    | "menuItem:openWithSafari"
    | "menuItem:share:email"
    | "menuItem:share:brand";

  declare type wx$menuList = Array<
    wx$menuBase | wx$menuProtected | wx$menuShare
  >;

  declare function wx$config(conf: {
    debug?: boolean,
    appId: string,
    timestamp: number,
    nonceStr: string,
    signature: string,
    jsApiList: wx$jsApiList
  }): void;

  declare interface wx$Resouce {
    localId: string;
  }

  declare interface wx$BaseParams {
    success?: (...args: any[]) => void;

    /**
     * 接口调用失败的回调函数
     */
    fail?: (...args: any[]) => void;

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (...args: any[]) => void;
  }

  declare function wx$ready(fn: () => void): void;

  declare function wx$error(
    fn: (err: {
      errMsg: string
    }) => void
  ): void;

  declare type wx$IcheckJsApi = {
    jsApiList: wx$jsApiList,
    success(res: {
      checkResult: {
        [api: string]: boolean
      },
      errMsg: string
    }): void
  } & BaseParams;

  /**
   * 判断当前客户端版本是否支持指定JS接口
   * 备注：checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测。
   */
  declare function wx$checkJsApi(params: wx$IcheckJsApi): void;

  declare type wx$IonMenuShareTimeline = {
    title: string,
    link: string,
    imgUrl: string,
    success(): void,
    cancel(): void
  } & BaseParams;

  /**
   * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
   */
  declare function wx$onMenuShareTimeline(
    params: wx$IonMenuShareTimeline
  ): void;

  declare type wx$IonMenuShareAppMessage = {
    title: string,
    desc: string,
    link: string,
    imgUrl: string,
    type?: "music" | "video或link" | "link",
    dataUrl?: string,
    success(): void,
    cancel(): void
  } & BaseParams;

  /**
   * 获取“分享给朋友”按钮点击状态及自定义分享内容接口
   */
  declare function wx$onMenuShareAppMessage(
    params: wx$IonMenuShareAppMessage
  ): void;

  declare type wx$IonMenuShareQQ = {
    title: string,
    desc: string,
    link: string,
    imgUrl: string,
    success(): void,
    cancel(): void
  } & BaseParams;

  /**
   * 获取“分享到QQ”按钮点击状态及自定义分享内容接口
   */
  declare function wx$onMenuShareQQ(params: wx$IonMenuShareQQ): void;

  declare type wx$IonMenuShareWeibo = {
    title: string,
    desc: string,
    link: string,
    imgUrl: string,
    success(): void,
    cancel(): void
  } & BaseParams;

  /**
   * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
   */
  declare function wx$onMenuShareWeibo(params: wx$IonMenuShareWeibo): void;

  declare type wx$IonMenuShareQZone = {
    title: string,
    desc: string,
    link: string,
    imgUrl: string,
    success(): void,
    cancel(): void
  } & BaseParams;

  /**
   * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
   */
  declare function wx$onMenuShareQZone(params: wx$IonMenuShareQZone): void;

  declare type wx$IchooseImage = {
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
    success(res: {
      sourceType: string,
      localIds: string[],
      errMsg: string
    }): void,
    cancel(): void
  } & BaseParams;

  /**
   * 从本地相册选择图片或使用相机拍照。
   */
  declare function wx$chooseImage(params: wx$IchooseImage): void;

  declare type wx$IpreviewImage = {
    current: string,
    urls: string[]
  } & BaseParams;

  /**
   * 预览图片接口
   */
  declare function wx$previewImage(params: wx$IpreviewImage): void;

  declare type wx$IuploadImage = {
    localId: string,
    isShowProgressTips: number,
    success(res: {
      serverId: string
    }): void
  } & BaseParams;

  /**
   * 上传图片接口
   */
  declare function wx$uploadImage(params: wx$IuploadImage): void;

  declare type wx$IdownloadImage = {
    serverId: string,
    isShowProgressTips: number,
    success(res: wx$Resouce): void
  } & BaseParams;

  /**
   * 下载图片接口
   */
  declare function wx$downloadImage(params: wx$IdownloadImage): void;

  declare type wx$IgetLocalImgData = {
    localId: string,
    success(res: {
      localData: string
    }): void
  } & BaseParams;

  /**
   * 获取本地图片接口
   */
  declare function wx$getLocalImgData(params: wx$IgetLocalImgData): void;

  /**
   * 开始录音接口
   */
  declare function wx$startRecord(): void;

  declare type wx$IstopRecord = {
    success(res: wx$Resouce): void
  } & BaseParams;

  /**
   * 停止录音接口
   */
  declare function wx$stopRecord(params: wx$IstopRecord): void;

  declare type wx$IonVoiceRecordEnd = {
    complete(res: wx$Resouce): void
  } & BaseParams;

  /**
   * 监听录音自动停止接口
   */
  declare function wx$onVoiceRecordEnd(params: wx$IonVoiceRecordEnd): void;

  declare type wx$IplaypausestopVoice = {
    localId: string
  } & BaseParams;

  /**
   * 播放语音接口
   */
  declare function wx$playVoice(params: wx$IplaypausestopVoice): void;

  /**
   * 暂停播放接口
   */
  declare function wx$pauseVoice(params: wx$IplaypausestopVoice): void;

  /**
   * 停止播放接口
   */
  declare function wx$stopVoice(params: wx$IplaypausestopVoice): void;

  declare type wx$IonVoicePlayEnd = {
    success(res: wx$Resouce): void
  } & BaseParams;

  /**
   * 监听语音播放完毕接口
   */
  declare function wx$onVoicePlayEnd(params: wx$IonVoicePlayEnd): void;

  declare type wx$IupdownloadVoice = {
    localId: string,
    isShowProgressTips: number,
    success(res: wx$Resouce): void
  } & BaseParams;

  /**
   * 上传语音接口
   * 备注：上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器
   * ，此处获得的 serverId 即 media_id，参考文档
   * ../12 / 58bfcfabbd501c7cd77c19bd9cfa8354.html
   * 目前多媒体文件下载接口的频率限制为10000次/ 天，
   * 如需要调高频率，请邮件weixin - open@qq.com,
   * 邮件主题为【申请多媒体接口调用量】，请对你的项目进行简单描述，
   * 附上产品体验链接，并对用户量和使用量进行说明。
   */
  declare function wx$uploadVoice(params: wx$IupdownloadVoice): void;

  /**
   * 下载语音接口
   */
  declare function wx$downloadVoice(params: wx$IupdownloadVoice): void;

  declare type wx$ItranslateVoice = {
    localId: string,
    isShowProgressTips: number,
    success(res: {
      translateResult: string
    }): void
  } & BaseParams;

  /**
   * 识别音频并返回识别结果接口
   */
  declare function wx$translateVoice(params: wx$ItranslateVoice): void;

  declare type wx$networkType = "2g" | "3g" | "4g" | "wifi";

  declare type wx$IgetNetworkType = {
    success(res: {
      networkType: wx$networkType
    }): void
  } & BaseParams;

  /**
   * 获取网络状态接口
   */
  declare function wx$getNetworkType(params: wx$IgetNetworkType): void;

  declare type wx$IopenLocation = {
    latitude: number,
    longitude: number,
    name: string,
    address: string,
    scale: number,
    infoUrl: string
  } & BaseParams;

  /**
   * 使用微信内置地图查看位置接口
   */
  declare function wx$openLocation(params: wx$IopenLocation): void;

  declare type wx$IgetLocation = {
    type: "wgs84" | "gcj02",
    success(res: {
      latitude: number,
      longitude: number,
      speed: number,
      accuracy: number
    }): void
  } & BaseParams;

  /**
   * 获取地理位置接口
   */
  declare function wx$getLocation(params: wx$IgetLocation): void;

  declare type wx$IstartSearchBeacons = {
    ticket: string,
    complete(argv: any): void
  } & BaseParams;

  /**
   * 开启查找周边ibeacon设备接口
   * 备注：如需接入摇一摇周边功能，请参考：申请开通摇一摇周边
   */
  declare function wx$startSearchBeacons(params: wx$IstartSearchBeacons): void;

  declare type wx$IstopSearchBeacons = {
    complete(res: any): void
  } & BaseParams;

  /**
   * 关闭查找周边ibeacon设备接口
   */
  declare function wx$stopSearchBeacons(params: wx$IstopSearchBeacons): void;

  declare type wx$IonSearchBeacons = {
    complete(argv: any): void
  } & BaseParams;

  /**
   * 监听周边ibeacon设备接口
   */
  declare function wx$onSearchBeacons(params: wx$IonSearchBeacons): void;

  /**
   * 隐藏右上角菜单接口
   */
  declare function wx$hideOptionMenu(): void;

  /**
   * 显示右上角菜单接口
   */
  declare function wx$showOptionMenu(): void;

  /**
   * 关闭当前网页窗口接口
   */
  declare function wx$closeWindow(): void;

  declare type wx$IhideMenuItems = {
    menuList: Array<wx$menuProtected | wx$menuShare>
  } & BaseParams;

  /**
   * 批量隐藏功能按钮接口
   */
  declare function wx$hideMenuItems(): void;

  declare type wx$IshowMenuItems = {
    menuList: wx$menuList
  } & BaseParams;

  /**
   * 批量显示功能按钮接口
   */
  declare function wx$showMenuItems(params: wx$IshowMenuItems): void;

  /**
   * 隐藏所有非基础按钮接口
   * “基本类”按钮详见附录3
   */
  declare function wx$hideAllNonBaseMenuItem(): void;

  /**
   * 显示所有功能按钮接口
   */
  declare function wx$showAllNonBaseMenuItem(): void;

  declare type wx$scanType = "qrCode" | "barCode";

  declare type wx$IscanQRCode = {
    needResult: 0 | 1,
    scanType: wx$scanType[],
    success(res: {
      resultStr: string
    }): void
  } & BaseParams;

  /**
   * 调起微信扫一扫接口
   */
  declare function wx$scanQRCode(params: wx$IscanQRCode): void;

  declare type wx$IopenProductSpecificView = {
    productId: string,
    viewType: "0" | "1" | "2"
  } & BaseParams;

  /**
   * 跳转微信商品页接口
   */
  declare function wx$openProductSpecificView(
    params: wx$IopenProductSpecificView
  ): void;

  declare type wx$IchooseCard = {
    shopId: string,
    cardType: string,
    cardId: string,
    timestamp: number,
    nonceStr: string,
    signType: string,
    cardSign: string,
    success(res: {
      cardList: string[]
    }): void
  } & BaseParams;

  /**
   * 拉取适用卡券列表并获取用户选择信息
   */
  declare function wx$chooseCard(params: wx$IchooseCard): void;

  declare type wx$IaddCard = {
    cardList: Array<{
      cardId: string,
      cardExt: string
    }>,
    success(res: {
      cardList: string[]
    }): void
  } & BaseParams;

  /**
   * 批量添加卡券接口
   */
  declare function wx$addCard(): void;

  declare type wx$IopenCard = {
    cardList: Array<{
      cardId: string,
      code: string
    }>
  } & BaseParams;

  /**
   * 查看微信卡包中的卡券接口
   */
  declare function wx$openCard(params: wx$IopenCard): void;

  declare type wx$IconsumeAndShareCard = {
    cardId: string,
    code: string
  } & BaseParams;

  /**
   * 核销后再次赠送卡券接口
   */
  declare function wx$consumeAndShareCard(
    params: wx$IconsumeAndShareCard
  ): void;

  declare type wx$IchooseWXPay = {
    timestamp: number,
    nonceStr: string,
    package: string,
    signType: string,
    paySign: string,
    success(res: any): void
  } & BaseParams;

  /**
   * 发起一个微信支付请求
   */
  declare function wx$chooseWXPay(params: wx$IchooseWXPay): void;

  declare function wx(): void;

  declare export default typeof wx;
}
