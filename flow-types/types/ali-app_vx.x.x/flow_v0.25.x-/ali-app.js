declare module "ali-app" {
  declare var npm$namespace$my: {
    navigateTo: typeof my$navigateTo,
    redirectTo: typeof my$redirectTo,
    navigateBack: typeof my$navigateBack,
    reLaunch: typeof my$reLaunch,
    setNavigationBar: typeof my$setNavigationBar,
    showNavigationBarLoading: typeof my$showNavigationBarLoading,
    hideNavigationBarLoading: typeof my$hideNavigationBarLoading,
    switchTab: typeof my$switchTab,
    alert: typeof my$alert,
    confirm: typeof my$confirm,
    prompt: typeof my$prompt,
    showToast: typeof my$showToast,
    hideToast: typeof my$hideToast,
    showLoading: typeof my$showLoading,
    hideLoading: typeof my$hideLoading,
    showActionSheet: typeof my$showActionSheet,
    stopPullDownRefresh: typeof my$stopPullDownRefresh,
    choosePhoneContact: typeof my$choosePhoneContact,
    chooseAlipayContact: typeof my$chooseAlipayContact,
    chooseContact: typeof my$chooseContact,
    chooseCity: typeof my$chooseCity,
    datePicker: typeof my$datePicker,
    createAnimation: typeof my$createAnimation,
    createCanvasContext: typeof my$createCanvasContext,
    createMapContext: typeof my$createMapContext,
    hideKeyboard: typeof my$hideKeyboard,
    pageScrollTo: typeof my$pageScrollTo,
    createSelectorQuery: typeof my$createSelectorQuery,
    multiLevelSelect: typeof my$multiLevelSelect,
    getAuthCode: typeof my$getAuthCode,
    getAuthUserInfo: typeof my$getAuthUserInfo,
    tradePay: typeof my$tradePay,
    paySignCenter: typeof my$paySignCenter,
    openCardList: typeof my$openCardList,
    openMerchantCardList: typeof my$openMerchantCardList,
    openCardDetail: typeof my$openCardDetail,
    openVoucherList: typeof my$openVoucherList,
    openMerchantVoucherList: typeof my$openMerchantVoucherList,
    openVoucherDetail: typeof my$openVoucherDetail,
    openKBVoucherDetail: typeof my$openKBVoucherDetail,
    openTicketList: typeof my$openTicketList,
    openMerchantTicketList: typeof my$openMerchantTicketList,
    openTicketDetail: typeof my$openTicketDetail,
    addCardAuth: typeof my$addCardAuth,
    startZMVerify: typeof my$startZMVerify,
    zmCreditBorrow: typeof my$zmCreditBorrow,
    textRiskIdentification: typeof my$textRiskIdentification,
    navigateToMiniProgram: typeof my$navigateToMiniProgram,
    navigateBackMiniProgram: typeof my$navigateBackMiniProgram,
    createWebViewContext: typeof my$createWebViewContext,
    chooseImage: typeof my$chooseImage,
    previewImage: typeof my$previewImage,
    saveImage: typeof my$saveImage,
    compressImage: typeof my$compressImage,
    getImageInfo: typeof my$getImageInfo,
    setStorage: typeof my$setStorage,
    setStorageSync: typeof my$setStorageSync,
    getStorage: typeof my$getStorage,
    getStorageSync: typeof my$getStorageSync,
    removeStorage: typeof my$removeStorage,
    removeStorageSync: typeof my$removeStorageSync,
    clearStorage: typeof my$clearStorage,
    clearStorageSync: typeof my$clearStorageSync,
    getStorageInfo: typeof my$getStorageInfo,
    getStorageInfoSync: typeof my$getStorageInfoSync,
    saveFile: typeof my$saveFile,
    getFileInfo: typeof my$getFileInfo,
    getSavedFileInfo: typeof my$getSavedFileInfo,
    getSavedFileList: typeof my$getSavedFileList,
    removeSavedFile: typeof my$removeSavedFile,
    getLocation: typeof my$getLocation,
    openLocation: typeof my$openLocation,
    chooseLocation: typeof my$chooseLocation,
    httpRequest: typeof my$httpRequest,
    uploadFile: typeof my$uploadFile,
    downloadFile: typeof my$downloadFile,
    connectSocket: typeof my$connectSocket,
    onSocketOpen: typeof my$onSocketOpen,
    onSocketClose: typeof my$onSocketClose,
    offSocketOpen: typeof my$offSocketOpen,
    onSocketError: typeof my$onSocketError,
    offSocketError: typeof my$offSocketError,
    sendSocketMessage: typeof my$sendSocketMessage,
    onSocketMessage: typeof my$onSocketMessage,
    offSocketMessage: typeof my$offSocketMessage,
    closeSocket: typeof my$closeSocket,
    offSocketClose: typeof my$offSocketClose,
    canIUse: typeof my$canIUse,
    getSystemInfo: typeof my$getSystemInfo,
    getSystemInfoSync: typeof my$getSystemInfoSync,
    getNetworkType: typeof my$getNetworkType,
    onNetworkStatusChange: typeof my$onNetworkStatusChange,
    offNetworkStatusChange: typeof my$offNetworkStatusChange,
    getClipboard: typeof my$getClipboard,
    setClipboard: typeof my$setClipboard,
    watchShake: typeof my$watchShake,
    vibrate: typeof my$vibrate,
    vibrateLong: typeof my$vibrateLong,
    vibrateShort: typeof my$vibrateShort,
    makePhoneCall: typeof my$makePhoneCall,
    getServerTime: typeof my$getServerTime,
    onUserCaptureScreen: typeof my$onUserCaptureScreen,
    offUserCaptureScreen: typeof my$offUserCaptureScreen,
    setKeepScreenOn: typeof my$setKeepScreenOn,
    getScreenBrightness: typeof my$getScreenBrightness,
    setScreenBrightness: typeof my$setScreenBrightness,
    showAuthGuide: typeof my$showAuthGuide,
    scan: typeof my$scan,
    openBluetoothAdapter: typeof my$openBluetoothAdapter,
    closeBluetoothAdapter: typeof my$closeBluetoothAdapter,
    getBluetoothAdapterState: typeof my$getBluetoothAdapterState,
    startBluetoothDevicesDiscovery: typeof my$startBluetoothDevicesDiscovery,
    stopBluetoothDevicesDiscovery: typeof my$stopBluetoothDevicesDiscovery,
    getBluetoothDevices: typeof my$getBluetoothDevices,
    getConnectedBluetoothDevices: typeof my$getConnectedBluetoothDevices,
    connectBLEDevice: typeof my$connectBLEDevice,
    disconnectBLEDevice: typeof my$disconnectBLEDevice,
    writeBLECharacteristicValue: typeof my$writeBLECharacteristicValue,
    readBLECharacteristicValue: typeof my$readBLECharacteristicValue,
    notifyBLECharacteristicValueChange: typeof my$notifyBLECharacteristicValueChange,
    notifyBLECharacteristicValueChanged: typeof my$notifyBLECharacteristicValueChanged,
    getBLEDeviceServices: typeof my$getBLEDeviceServices,
    getBLEDeviceCharacteristics: typeof my$getBLEDeviceCharacteristics,
    onBluetoothDeviceFound: typeof my$onBluetoothDeviceFound,
    offBluetoothDeviceFound: typeof my$offBluetoothDeviceFound,
    onBLECharacteristicValueChange: typeof my$onBLECharacteristicValueChange,
    offBLECharacteristicValueChange: typeof my$offBLECharacteristicValueChange,
    onBLEConnectionStateChanged: typeof my$onBLEConnectionStateChanged,
    offBLEConnectionStateChanged: typeof my$offBLEConnectionStateChanged,
    onBluetoothAdapterStateChange: typeof my$onBluetoothAdapterStateChange,
    offBluetoothAdapterStateChange: typeof my$offBluetoothAdapterStateChange,
    startBeaconDiscovery: typeof my$startBeaconDiscovery,
    stopBeaconDiscovery: typeof my$stopBeaconDiscovery,
    getBeacons: typeof my$getBeacons,
    onBeaconUpdate: typeof my$onBeaconUpdate,
    onBeaconServiceChange: typeof my$onBeaconServiceChange,
    rsa: typeof my$rsa,
    reportAnalytics: typeof my$reportAnalytics,
    hideShareMenu: typeof my$hideShareMenu,
    postMessage: typeof my$postMessage,
    SDKVersion: typeof my$SDKVersion,
    onMessage: typeof my$onMessage
  };
  declare interface my$DataResponse {
    /**
     * 回调函数返回的内容
     */
    data: any;

    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    status: number;

    /**
     * 开发者服务器返回的 HTTP Response Header
     */
    headers: { [key: string]: any };
  }

  declare interface my$ErrMsgResponse {
    /**
     * 成功：ok，错误：详细信息
     */
    errMsg: "ok" | string;
  }

  declare interface my$TempFileResponse {
    /**
     * 文件的临时路径
     */
    apFilePath: string;
  }

  declare interface my$BaseOptions<R = any, E = any> {
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

  declare interface my$ErrCodeResponse {
    errCode: number;
  }

  declare type my$NavigateToOptions = {
    /**
     * 需要跳转的应用内页面的路径
     */
    url: string
  } & my$BaseOptions<>;

  /**
   * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
   *
   * 注意：为了不让用户在使用小程序时造成困扰，
   * 我们规定页面路径只能是五层，请尽量避免多层级的交互方式。
   */
  declare function my$navigateTo(options: my$NavigateToOptions): void;

  declare type my$RedirectToOptions = {
    /**
     * 需要跳转的应用内页面的路径
     */
    url: string
  } & my$BaseOptions<>;

  /**
   * 关闭当前页面，跳转到应用内的某个页面。
   */
  declare function my$redirectTo(options: my$RedirectToOptions): void;

  declare type my$NavigateBackOptions = {
    /**
     * 返回的页面数，如果 delta 大于现有打开的页面数，则返回到首页
     */
    delta: number
  } & my$BaseOptions<>;

  /**
   * 关闭当前页面，返回上一级或多级页面。可通过 getCurrentPages 获取当前的页面栈信息，决定需要返回几层。
   */
  declare function my$navigateBack(options?: my$NavigateBackOptions): void;

  declare type my$ReLaunchOptions = {
    /**
     * 需要跳转的应用内页面路径 , 路径后可以带参数。
     * 参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔
     * 如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数
     */
    url: string
  } & my$BaseOptions<>;

  /**
   * 关闭所有页面，打开到应用内的某个页面。
   */
  declare function my$reLaunch(options?: my$ReLaunchOptions): void;

  declare type my$SetNavigationBarOptions = {
    /**
     * 页面标题
     */
    title: string,

    /**
     * 图片连接地址，必须是https，请使用3x高清图片。若设置了image则title参数失效
     */
    image: string,

    /**
     * 导航栏背景色，支持十六进制颜色值
     */
    backgroundColor: string,

    /**
     * 导航栏底部边框颜色，支持十六进制颜色值。若设置了 backgroundColor，则borderBottomColor 不会生效，默认会和 backgroundColor 颜色一样
     */
    borderBottomColor: string,

    /**
     * 是否重置导航栏为支付宝默认配色，默认 false
     */
    reset: boolean
  } & my$BaseOptions<>;

  /**
   * 动态设置当前页面的标题。
   */
  declare function my$setNavigationBar(
    options: $Shape<my$SetNavigationBarOptions>
  ): void;

  /**
   * 显示导航栏 loading
   */
  declare function my$showNavigationBarLoading(): void;

  /**
   * 隐藏导航栏 loading。
   */
  declare function my$hideNavigationBarLoading(): void;

  declare type my$SwitchTabOptions = {
    /**
     * 需要跳转的 tabBar 页面的路径
     * （需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
     */
    url: string
  } & my$BaseOptions<>;

  /**
   * 跳转到指定 tabBar 页面，并关闭其他所有非 tabBar 页面
   */
  declare function my$switchTab(options: my$SwitchTabOptions): void;

  declare type my$AlertOptions = {
    /**
     * alert框的标题
     */
    title: string,

    /**
     * alert框的内容
     */
    content: string,

    /**
     * 按钮文字，默认确定
     */
    buttonText: string
  } & my$BaseOptions<>;

  declare function my$alert(options: $Shape<my$AlertOptions>): void;

  declare type my$ConfirmOptions = {
    /**
     * confirm框的标题
     */
    title: string,

    /**
     * confirm框的内容
     */
    content: string,

    /**
     * 确认按钮文字，默认‘确定’
     */
    confirmButtonText: string,

    /**
     * 确认按钮文字，默认‘取消’
     */
    cancelButtonText: string,
    success(result: {
      confirm: boolean
    }): void
  } & my$BaseOptions<>;

  declare function my$confirm(options: $Shape<my$ConfirmOptions>): void;

  declare type my$PromptOptions = {
    /**
     * prompt框标题
     */
    title?: string,

    /**
     * prompt框文本，默认‘请输入内容’
     */
    message?: string,

    /**
     * 输入框内的提示文案
     */
    placeholder?: string,

    /**
     * message对齐方式，可用枚举left/center/right，iOS ‘center’, android ‘left’
     */
    align?: "left" | "center" | "right" | string,

    /**
     * 确认按钮文字，默认‘确定’
     */
    okButtonText: string,

    /**
     * 确认按钮文字，默认‘取消’
     */
    cancelButtonText: string,
    success(result: {
      ok: boolean,
      inputValue: string
    }): void
  } & my$BaseOptions<>;

  declare function my$prompt(options: my$PromptOptions): void;

  declare type my$ToastOptions = {
    /**
     * 文字内容
     */
    content: string,

    /**
     * toast 类型，展示相应图标，默认 none，支持 success / fail / exception / none’。其中 exception 类型必须传文字信息
     */
    type?: "none" | "success" | "fail" | "exception" | string,

    /**
     * 显示时长，单位为 ms，默认 2000
     */
    duration?: number
  } & my$BaseOptions<>;

  /**
   * 显示消息提示框
   */
  declare function my$showToast(options: $Shape<my$ToastOptions>): void;

  declare function my$hideToast(): void;

  declare type my$LoadingOptions = {
    /**
     * loading的文字内容
     */
    content?: string,

    /**
     * 延迟显示，单位 ms，默认 0。如果在此时间之前调用了 my.hideLoading 则不会显示
     */
    delay?: number
  } & my$BaseOptions<>;

  /**
   * 显示加载提示
   */
  declare function my$showLoading(options?: my$LoadingOptions): void;

  declare interface my$HideLoadingOptions {
    /**
     * 体指当前page实例，某些场景下，需要指明在哪个page执行hideLoading。
     */
    page: any;
  }

  /**
   * 隐藏消息提示框
   */
  declare function my$hideLoading(options?: my$HideLoadingOptions): void;

  declare interface my$Badge {
    /**
     * 需要飘红的选项的索引，从0开始
     */
    index: number;

    /**
     * 飘红类型，支持 none（无红点）/ point（纯红点） / num（数字红点）/ text（文案红点）/ more（...）
     */
    type: "none" | "point" | "num" | "text" | "more" | string;

    /**
     * 自定义飘红文案：
     *
     * 1、type为none/point/more时本文案可不填
     * 2、type为num时本文案为小数或<=0均不显示, >100 显示"..."
     */
    text: string;
  }

  declare type my$ActionSheetOptions = {
    /**
     * 菜单标题
     */
    title?: string,

    /**
     * 菜单按钮文字数组
     */
    items: string[],

    /**
     * 取消按钮文案。默认为‘取消’。注：Android平台此字段无效，不会显示取消按钮。
     */
    cancelButtonText?: string,

    /**
     * （iOS特殊处理）指定按钮的索引号，从0开始，使用场景：需要删除或清除数据等类似场景，默认红色
     */
    destructiveBtnIndex?: number,

    /**
     * 需飘红选项的数组，数组内部对象字段见下表
     */
    badges?: Array<$Shape<my$Badge>>,

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: {
      /**
       * 用户点击的按钮，从上到下的顺序，从0开始
       */
      index: number
    }) => void
  } & my$BaseOptions<>;

  /**
   * 显示操作菜单
   */
  declare function my$showActionSheet(options: my$ActionSheetOptions): void;

  /**
   * Page 实现的接口对象
   */
  declare interface my$PageOptions {
    /**
     * 下拉刷新
     * 在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。
     * 需要在页面对应的 .json 配置文件中配置 "pullRefresh": true 选项，才能开启下拉刷新事件。
     * 当处理完数据刷新后，调用 my.stopPullDownRefresh 可以停止当前页面的下拉刷新。
     */
    onPullDownRefresh?: () => void;
    data: any;
    onLaunch(options: my$Options): void;
    onShow(options: my$Options): void;
    onHide(): void;
    onError(): void;
    [key: string]: any;
  }

  /**
   * 停止当前页面的下拉刷新。
   */
  declare function my$stopPullDownRefresh(): void;

  declare type my$ChoosePhoneContactOptions = {
    success(result: {
      name: string,
      mobile: string
    }): void,

    /**
     * 10	没有权限
     * 11	用户取消操作(或设备未授权使用通讯录)
     */
    fail?: (error: 10 | 11) => void
  } & my$BaseOptions<>;

  /**
   * 选择本地系统通信录中某个联系人的电话。
   */
  declare function my$choosePhoneContact(
    options: my$ChoosePhoneContactOptions
  ): void;

  declare type my$ChooseAlipayContactOptions = {
    /**
     * 单次最多选择联系人个数，默认 1，最大 10
     */
    count: number,
    success(result: {
      realName: string,
      mobile: string,
      email: string,
      avatar: string,
      userId: string
    }): void,

    /**
     * 10	没有权限
     * 11	用户取消操作(或设备未授权使用通讯录)
     */
    fail?: (error: 10 | 11) => void
  } & my$BaseOptions<>;

  /**
   * 唤起支付宝通讯录，选择一个或者多个支付宝联系人。
   */
  declare function my$chooseAlipayContact(
    options: my$ChooseAlipayContactOptions
  ): void;

  declare interface my$ContactsDic {
    /**
     * 支付宝账号唯一 userId
     */
    userId: string;

    /**
     * 账号的头像链接
     */
    avatar: string;

    /**
     * 账号对应的手机号码
     */
    mobile: string;

    /**
     * 账号的真实姓名
     */
    realName: string;

    /**
     * 账号的显示名称：也即支付宝设置的备注名称，默认为朋友圈里面的昵称
     */
    displayName: string;
  }

  declare type my$ChooseContactOptions = {
    /**
     * 选择类型，值为single（单选）或者 multi（多选）
     */
    chooseType: "single" | "multi" | string,

    /**
     * 包含手机通讯录联系人的模式：默认为不包含（none）、或者仅仅包含双向通讯录联系人（known）、或者包含手机通讯录联系人（all）
     */
    includeMobileContactMode?: "none" | "known" | "all" | string,

    /**
     * 是否包含自己
     */
    includeMe?: boolean,

    /**
     * 最大选择人数，仅 chooseType 为 multi 时才有效
     */
    multiChooseMax?: number,

    /**
     * 多选达到上限的文案，仅 chooseType 为 multi 时才有效
     */
    multiChooseMaxTips?: string,
    success(result: {
      contactsDicArray: my$ContactsDic[]
    }): void
  } & my$BaseOptions<>;

  /**
   * 唤起选人组件，默认只包含支付宝联系人，可以通过修改参数包含手机通讯录联系人或者双向通讯录联系人。
   */
  declare function my$chooseContact(options: my$ChooseContactOptions): void;

  declare interface my$City {
    city: string;
    adCode: string;
    spell?: string;
  }

  declare type my$ChooseCityOptions = {
    showLocatedCity: boolean,
    showHotCities: boolean,
    cities: my$City[],
    hotCities: my$City[],
    success(result: {
      city: string,
      adCode: string
    }): void
  } & my$BaseOptions<>;

  /**
   * 打开城市选择列表
   *
   * 如果用户没有选择任何城市直接点击了返回，将不会触发回调函数。
   */
  declare function my$chooseCity(options: $Shape<my$ChooseCityOptions>): void;

  declare type my$DatePickerOptions = {
    /**
     * 返回的日期格式，
     * 1. yyyy-MM-dd（默认）
     * 2. HH:mm
     * 3. yyyy-MM-dd HH:mm
     * 4. yyyy-MM （最低基础库：1.1.1, 可用 canIUse('datePicker.object.format.yyyy-MM') 判断）
     * 5. yyyy （最低基础库：1.1.1,可用 canIUse('datePicker.object.format.yyyy') 判断）
     */
    format: "yyyy-MM-dd" | "HH:mm" | "yyyy-MM-dd HH:mm" | "yyyy-MM" | "yyyy",

    /**
     * 初始选择的日期时间，默认当前时间
     */
    currentDate: string,

    /**
     * 最小日期时间
     */
    startDate: string,

    /**
     * 最大日期时间
     */
    endDate: string,
    success(result: {
      date: string
    }): void,

    /**
     * 11 用户取消操作
     */
    fail(error: 11): void
  } & my$BaseOptions<>;

  /**
   * 打开日期选择列表
   */
  declare function my$datePicker(optiosn: $Shape<my$DatePickerOptions>): void;

  declare type my$TimingFunction =
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-in-out"
    | "ease-out"
    | "step-start"
    | "step-end";

  declare interface my$CreateAnimationOptions {
    /**
     * 动画持续时间，单位ms，默认值 400
     */
    duration: number;

    /**
     * 定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
     */
    timeFunction: my$TimingFunction;

    /**
     * 动画持续时间，单位 ms，默认值 0
     */
    delay: number;

    /**
     * 设置transform-origin，默认为"50% 50% 0"
     */
    transformOrigin: string;
  }

  declare interface my$Animator {
    actions: my$AnimationAction[];
  }

  declare interface my$AnimationAction {
    animates: my$Animate[];
    option: my$AnimationActionOption;
  }

  declare interface my$AnimationActionOption {
    transformOrigin: string;
    transition: my$AnimationTransition;
  }

  declare interface my$AnimationTransition {
    delay: number;
    duration: number;
    timingFunction: my$TimingFunction;
  }

  declare interface my$Animate {
    type: string;
    args: any[];
  }

  /**
   * 创建动画实例 animation。调用实例的方法来描述动画，最后通过动画实例的export方法将动画数据导出并传递给组件的animation属性。
   *
   * 注意: export 方法每次调用后会清掉之前的动画操作
   */
  declare function my$createAnimation(
    options: $Shape<my$CreateAnimationOptions>
  ): my$Animation;

  /**
   * 动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。
   */
  declare interface my$Animation {
    /**
     * 调用动画操作方法后要调用 step() 来表示一组动画完成，
     * 可以在一组动画中调用任意多个动画方法，
     * 一组动画中的所有动画会同时开始，
     * 一组动画完成后才会进行下一组动画。
     * @param options 指定当前组动画的配置
     */
    step(options?: my$CreateAnimationOptions): void;

    /**
     * 导出动画操作
     *
     * 注意: export 方法每次调用后会清掉之前的动画操作
     */
    export(): my$Animator;

    /**
     * 透明度，参数范围 0~1
     */
    opacity(value: number): my$Animation;

    /**
     * 颜色值
     */
    backgroundColor(color: string): my$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    width(length: number): my$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    height(length: number): my$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    top(length: number): my$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    left(length: number): my$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    bottom(length: number): my$Animation;

    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    right(length: number): my$Animation;

    /**
     * deg的范围-180~180，从原点顺时针旋转一个deg角度
     */
    rotate(deg: number): my$Animation;

    /**
     * deg的范围-180~180，在X轴旋转一个deg角度
     */
    rotateX(deg: number): my$Animation;

    /**
     * deg的范围-180~180，在Y轴旋转一个deg角度
     */
    rotateY(deg: number): my$Animation;

    /**
     * deg的范围-180~180，在Z轴旋转一个deg角度
     */
    rotateZ(deg: number): my$Animation;

    /**
     * 同transform-function rotate3d
     */
    rotate3d(x: number, y: number, z: number, deg: number): my$Animation;

    /**
     * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；
     * 两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
     */
    scale(sx: number, sy?: number): my$Animation;

    /**
     * 在X轴缩放sx倍数
     */
    scaleX(sx: number): my$Animation;

    /**
     * 在Y轴缩放sy倍数
     */
    scaleY(sy: number): my$Animation;

    /**
     * 在Z轴缩放sy倍数
     */
    scaleZ(sz: number): my$Animation;

    /**
     * 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数
     */
    scale3d(sx: number, sy: number, sz: number): my$Animation;

    /**
     * 一个参数时，表示在X轴偏移tx，单位px；
     * 两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
     */
    translate(tx: number, ty?: number): my$Animation;

    /**
     * 在X轴偏移tx，单位px
     */
    translateX(tx: number): my$Animation;

    /**
     * 在Y轴偏移tx，单位px
     */
    translateY(ty: number): my$Animation;

    /**
     * 在Z轴偏移tx，单位px
     */
    translateZ(tz: number): my$Animation;

    /**
     * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
     */
    translate3d(tx: number, ty: number, tz: number): my$Animation;

    /**
     * 参数范围-180~180；
     * 一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；
     * 两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
     */
    skew(ax: number, ay?: number): my$Animation;

    /**
     * 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度
     */
    skewX(ax: number): my$Animation;

    /**
     * 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度
     */
    skewY(ay: number): my$Animation;

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
    ): my$Animation;

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
    ): my$Animation;
  }

  declare type my$ToTempFilePathOptions = {
    x: number,
    y: number,
    width: number,
    height: number,
    destWidth: number,
    destHeight: number
  } & my$BaseOptions<>;

  declare type my$Color = string | number[] | number | my$CanvasAction;

  declare interface my$CanvasAction {
    /**
     * 创建一个颜色的渐变点。
     * 小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。
     * @param stop 渐变点位置，值必须在 [0,1] 范围内
     * @param color 颜色值
     */
    addColorStop(stop: number, color: my$Color): void;
  }

  declare interface my$TextMetrics {
    width: number;
  }

  declare interface my$ConvasContext {
    font: string;

    /**
     * 把当前画布的内容导出生成图片，并返回文件路径。
     */
    toTempFilePath(options?: $Shape<my$ToTempFilePathOptions>): void;

    /**
     * textAlign 是 Canvas 2D API 描述绘制文本时，文本的对齐方式的属性。注意，该对齐是基于
     * CanvasRenderingContext2D.fillText 方法的x的值。所以如果 textAlign="center"，那么该文本将画在 x-50%*width
     */
    setTextAlign(
      textAlign: "left" | "right" | "center" | "start" | "end"
    ): void;

    /**
     * textBaseline 是 Canvas 2D API 描述绘制文本时，当前文本基线的属性。
     */
    setTextBaseline(
      textBaseline:
        | "top"
        | "hanging"
        | "middle"
        | "alphabetic"
        | "ideographic"
        | "bottom"
    ): void;

    /**
     * 设置填充色。
     *
     * 如果没有设置 fillStyle，则默认颜色为 black。
     */
    setFillStyle(color: my$Color): void;

    /**
     * 设置边框颜色。
     *
     * 如果没有设置 strokeStyle，则默认颜色为 black。
     */
    setStrokeStyle(color: my$Color): void;

    /**
     * 设置阴影样式。
     * 如果没有设置，offsetX 的默认值为 0， offsetY 的默认值为 0， blur 的默认值为 0，color 的默认值为 black。
     * @param offsetX 阴影相对于形状水平方向的偏移
     * @param offsetY 阴影相对于形状竖直方向的偏移
     * @param blur 0~100 阴影的模糊级别，值越大越模糊
     * @param color 阴影颜色
     */
    setShadow(
      offsetX: number,
      offsetY: number,
      blur: number,
      color: my$Color
    ): void;

    /**
     * 创建一个线性的渐变色。
     * @param x0 起点 x 坐标
     * @param y0 起点 y 坐标
     * @param x1 终点 x 坐标
     * @param y1 终点 y 坐标
     */
    createLinearGradient(
      x0: number,
      y0: number,
      x1: number,
      y1: number
    ): my$CanvasAction;

    /**
     * 创建一个圆形的渐变色。
     * 起点在圆心，终点在圆环。
     * 需要使用 addColorStop() 来指定渐变点，至少需要两个。
     * @param x 圆心 x 坐标
     * @param y 圆心 y 坐标
     * @param r 圆半径
     * @returns
     */
    createCircularGradient(x: number, y: number, r: number): my$CanvasAction;

    /**
     * 设置线条的宽度。
     * @param lineWidth 线条宽度，单位为 px
     */
    setLineWidth(lineWidth: number): void;

    /**
     * 设置线条的端点样式。
     * @param lineCap 线条的结束端点样式
     */
    setLineCap(lineCap: "round" | "butt" | "square"): void;

    /**
     * 设置线条的交点样式。
     * @param lineJoin 线条的结束交点样式
     */
    setLineJoin(lineJoin: "round" | "bevel" | "miter"): void;

    /**
     * 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示
     * @param miterLimit 最大斜接长度
     */
    setMiterLimit(miterLimit: number): void;

    /**
     * 创建一个矩形。
     * @param x 矩形左上角的 x 坐标
     * @param y 矩形左上角的 y 坐标
     * @param width 矩形路径宽度
     * @param height 矩形路径高度
     */
    rect(x: number, y: number, width: number, height: number): void;

    /**
     * 填充矩形。
     * 用 setFillStyle() 设置矩形的填充色，如果没设置则默认是 black。
     * @param x 矩形左上角的 x 坐标
     * @param y 矩形左上角的 y 坐标
     * @param width 矩形路径宽度
     * @param height 矩形路径高度
     */
    fillRect(x: number, y: number, width: number, height: number): void;

    /**
     * 画一个矩形(非填充)。
     * 用 setFillStroke() 设置矩形线条的颜色，如果没设置默认是 black。
     * @param x 矩形左上角的 x 坐标
     * @param y 矩形左上角的 y 坐标
     * @param width 矩形路径宽度
     * @param height 矩形路径高度
     */
    strokeRect(x: number, y: number, width: number, height: number): void;

    /**
     * 清除画布上在该矩形区域内的内容。
     * clearRect 并非画一个白色的矩形在地址区域，而是清空，为了有直观感受，可以对 canvas 加了一层背景色。
     * @param x 矩形左上角的 x 坐标
     * @param y 矩形左上角的 y 坐标
     * @param width 矩形路径宽度
     * @param height 矩形路径高度
     */
    clearRect(x: number, y: number, width: number, height: number): void;

    /**
     * 对当前路径中的内容进行填充。默认的填充色为黑色。
     */
    fill(): void;

    /**
     * 画出当前路径的边框。默认 black。
     * stroke() 描绘的的路径是从 beginPath() 开始计算，但是不会将 strokeRect() 包含进去
     */
    stroke(): void;

    /**
     * 关闭一个路径
     * 关闭路径会连接起点和终点。
     * 如果关闭路径后没有调用 fill() 或者 stroke() 并开启了新的路径，那之前的路径将不会被渲染。
     */
    beginPath(): void;

    /**
     * 关闭一个路径
     * 关闭路径会连接起点和终点。
     */
    closePath(): void;

    /**
     * 把路径移动到画布中的指定点，不创建线条。
     * 用 stroke() 方法来画线条
     * @param x 目标位置 x 坐标
     * @param y 目标位置 y 坐标
     */
    moveTo(x: number, y: number): void;

    /**
     * lineTo 方法增加一个新点，然后创建一条从上次指定点到目标点的线。
     * 用 stroke() 方法来画线条
     * @param x 目标位置 x 坐标
     * @param y 目标位置 y 坐标
     */
    lineTo(x: number, y: number): void;

    /**
     * 画一条弧线。
     * 创建一个圆可以用 arc() 方法指定其实弧度为0，终止弧度为 2 * Math.PI。
     * @param x
     * @param y
     * @param r
     * @param sAngle
     * @param eAngle
     */
    arc(x: number, y: number, r: number, sAngle: number, eAngle: number): void;

    /**
     * 创建三次方贝塞尔曲线路径。
     * 曲线的起始点为路径中前一个点。
     * @param cp1x
     * @param cp1y
     * @param cp2x
     * @param cp2y
     * @param x
     * @param y
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
     * 将当前创建的路径设置为当前剪切路径。
     */
    clip(): void;

    /**
     * 创建二次贝塞尔曲线路径。
     * 曲线的起始点为路径中前一个点。
     * @param cpx 贝塞尔控制点 x 坐标
     * @param cpy 贝塞尔控制点 y 坐标
     * @param x 结束点 x 坐标
     * @param y 结束点 y 坐标
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

    /**
     * 在调用scale方法后，之后创建的路径其横纵坐标会被缩放。多次调用scale，倍数会相乘。
     * @param scaleWidth 横坐标缩放倍数 (1 = 100%，0.5 = 50%，2 = 200%)
     * @param scaleHeight 纵坐标轴缩放倍数 (1 = 100%，0.5 = 50%，2 = 200%)
     */
    scale(scaleWidth: number, scaleHeight: number): void;

    /**
     * 以原点为中心，原点可以用 translate方法修改。顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
     * @param rotate 旋转角度，以弧度计(degrees * Math.PI/180；degrees 范围为0~360)
     */
    rotate(rotate: number): void;

    /**
     * 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。
     * @param x 水平坐标平移量
     * @param y 竖直坐标平移量
     */
    translate(x: number, y: number): void;

    /**
     * 设置字体大小。
     * @param fontSize 字号
     */
    setFontSize(fontSize: number): void;

    /**
     * 在画布上绘制被填充的文本。
     * @param text 文本
     * @param x 绘制文本的左上角 x 坐标
     * @param y 绘制文本的左上角 y 坐标
     */
    fillText(text: string, x: number, y: number): void;

    /**
     * 绘制图像，图像保持原始尺寸。
     * @param imageResource 图片资源, 只支持线上 cdn 地址或离线包地址，线上 cdn 需返回头 Access-Control-Allow-Origin: *
     * @param x 图像左上角 x 坐标
     * @param y 图像左上角 y 坐标
     * @param width 图像宽度
     * @param height 图像高度
     */
    drawImage(
      imageResource: string,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;

    /**
     * 设置全局画笔透明度。
     * @param alpha 透明度，0 表示完全透明，1 表示不透明 范围 [0, 1]
     */
    setGlobalAlpha(alpha: number): void;

    /**
     * 设置虚线的样式
     * @param segments 一组描述交替绘制线段和间距（坐标空间单位）长度的数字。 如果数组元素的数量是奇数， 数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]。
     */
    setLineDash(segments: number[]): void;

    /**
     * 使用矩阵多次叠加当前变换的方法，矩阵由方法的参数进行描述。你可以缩放、旋转、移动和倾斜上下文。
     * @param scaleX 水平缩放
     * @param skewX 水平倾斜
     * @param skewY 垂直倾斜
     * @param scaleY 垂直缩放
     * @param translateX 水平移动
     * @param translateY 垂直移动
     */
    transform(
      scaleX: number,
      skewX: number,
      skewY: number,
      scaleY: number,
      translateX: number,
      translateY: number
    ): void;

    /**
     * 使用单位矩阵重新设置（覆盖）当前的变换并调用变换的方法，此变换由方法的变量进行描述。
     * @param scaleX 水平缩放
     * @param skewX 水平倾斜
     * @param skewY 垂直倾斜
     * @param scaleY 垂直缩放
     * @param translateX 水平移动
     * @param translateY 垂直移动
     */
    setTransform(
      scaleX: number,
      skewX: number,
      skewY: number,
      scaleY: number,
      translateX: number,
      translateY: number
    ): void;

    /**
     * 保存当前的绘图上下文。
     */
    save(): void;

    /**
     * 恢复之前保存的绘图上下文。
     */
    restore(): void;

    /**
     * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
     * 绘图上下文需要由 my.createCanvasContext(canvasId) 来创建。
     * @param reserve 本次绘制是否接着上一次绘制，即 reserve 参数为 false 时则在本次调用 drawCanvas绘制之前 native 层应先清空画布再继续绘制；若 reserver 参数为true 时，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false
     */
    draw(reserve?: boolean): void;
    measureText(text: string): my$TextMetrics;
  }

  /**
   * 创建 canvas 绘图上下文
   *
   * 该绘图上下文只作用于对应 canvasId 的 <canvas/>
   */
  declare function my$createCanvasContext(canvasId: string): my$ConvasContext;

  declare type my$GetCenterLocationOptions = {
    success?: (res: {
      longitude: string,
      latitude: string
    }) => void
  } & my$BaseOptions<>;

  declare type my$MapContext = {
    /**
     * 获取当前地图中心的经纬度，返回 gcj02 坐标系的值，可以用于 my.openLocation
     * @param options
     */
    getCenterLocation(options: my$GetCenterLocationOptions): void,

    /**
     * 将地图中心移动到当前定位点，需要配合 map 组件的 show-location 使用
     */
    moveToLocation(): void
  } & my$BaseOptions<>;

  /**
   * 创建并返回一个 map 上下文对象 mapContext。
   * @param mapId
   * @returns
   */
  declare function my$createMapContext(mapId: string): my$MapContext;

  /**
   * 隐藏键盘
   */
  declare function my$hideKeyboard(): void;

  declare interface my$PageScrollToOptions {
    scrollTop: number;
  }

  /**
   * 滚动到页面的目标位置
   * @param options
   */
  declare function my$pageScrollTo(options: my$PageScrollToOptions): void;

  declare interface my$RectArea {
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

  declare type my$NodesRefRect = {
    /**
     * 节点的ID
     */
    id: string,

    /**
     * 节点的dataset
     */
    dataset: any
  } & my$RectArea;

  declare interface my$NodeRefOffset {
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

  declare interface my$NodesRef {
    /**
     * 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。
     * 其功能类似于DOM的getBoundingClientRect。
     * 返回值是nodesRef对应的selectorQuery。
     * 返回的节点信息中，每个节点的位置用
     * left、right、top、bottom、width、height字段描述。
     * 如果提供了callback回调函数，在执行selectQuery的exec方法后
     * 节点信息会在callback中返回。
     */
    boundingClientRect<T: my$NodesRefRect | my$NodesRefRect[]>(
      callback?: (rect: T) => void
    ): my$SelectorQuery;

    /**
     * 添加节点的滚动位置查询请求，以像素为单位。
     * 节点必须是scroll-view或者viewport。
     * 返回值是nodesRef对应的selectorQuery。
     * 返回的节点信息中，每个节点的滚动位置用scrollLeft、scrollHeight字段描述。
     * 如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回。
     */
    scrollOffset(callback?: (rect: my$NodeRefOffset) => void): my$SelectorQuery;
  }

  /**
   * SelectorQuery对象实例
   */
  declare interface my$SelectorQuery {
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
    select(selector: string): my$NodesRef;

    /**
     * 在当前页面下选择匹配选择器selector的节点，返回一个NodesRef对象实例。
     * 与selectorQuery.selectNode(selector)不同的是，它选择所有匹配选择器的节点。
     */
    selectAll(selector: string): my$NodesRef;

    /**
     * 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息
     * 返回一个NodesRef对象实例。
     */
    selectViewport(): my$NodesRef;

    /**
     * 执行所有的请求
     * 请求结果按请求次序构成数组，在callback的第一个参数中返回。
     */
    exec(callback?: (result: any[]) => void): void;
  }

  /**
   * 获取一个节点查询对象 SelectorQuery。
   * @param page 可以指定 page 属性，默认为当前页面
   * @returns
   */
  declare function my$createSelectorQuery(page?: any): my$SelectorQuery;

  declare interface my$MultiLevelSelectItem {
    name: string;
    subList?: my$MultiLevelSelectItem[];
  }

  declare type my$MultiLevelSelectOptions = {
    title?: string,
    list?: my$MultiLevelSelectItem[],
    name?: string,
    subList?: my$MultiLevelSelectItem[],
    success?: (res: {
      success: boolean,
      result: my$MultiLevelSelectItem[]
    }) => void
  } & my$BaseOptions<>;

  declare function my$multiLevelSelect(
    options?: my$MultiLevelSelectOptions
  ): void;

  declare type my$GetAuthCodeOptions = {
    scopes?: string | string[],
    success?: (res: {
      authCode: string,
      authErrorScope: {
        [scope: string]: number
      },
      authSucessScope: string[]
    }) => void
  } & my$BaseOptions<>;

  /**
   * 获取授权码。
   * 详细用户授权接入参考 [指引](https://docs.alipay.com/mini/introduce/auth)。
   */
  declare function my$getAuthCode(options: my$GetAuthCodeOptions): void;

  declare type my$GetAuthUserInfoOptions = {
    success?: (res: {
      nickName: string,
      avatar: string
    }) => void
  } & my$BaseOptions<>;

  /**
   * 客户端获取会员信息
   * 获取会员信息首先需要获取用户授权，详细会员信息获取参考[指引](https://docs.alipay.com/mini/introduce/auth)，采用 jsapi 调用的方式。
   */
  declare function my$getAuthUserInfo(options: my$GetAuthUserInfoOptions): void;

  declare type my$TradePayOptions = {
    tradeNO?: string,
    success?: (res: {
      resultCode: string
    }) => void
  } & my$BaseOptions<>;

  /**
   * 发起支付。
   * 详细接入支付方式参考[指引](https://docs.alipay.com/mini/introduce/pay)。
   * @param options
   */
  declare function my$tradePay(options: my$TradePayOptions): void;

  declare type my$PaySignCenterOptions = {
    signStr: string
  } & my$BaseOptions<>;

  /**
   * 签约中心
   *
   * 返回码 | 含义
   * ------|------
   * 7000 | 协议签约成功
   * 7001 | 签约结果未知（有可能已经签约成功），请根据外部签约号查询签约状态
   * 7002 | 协议签约失败
   * 6001 | 用户中途取消
   * 6002 | 网络连接错误	 * @param options
   */
  declare function my$paySignCenter(options: my$PaySignCenterOptions): void;

  /**
   * 打开支付宝卡列表。
   * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
   */
  declare function my$openCardList(): void;

  declare type my$OpenMerchantCardList = {
    partnerId: string
  } & my$BaseOptions<>;

  /**
   * 打开支付宝卡列表。
   * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
   * @param options
   */
  declare function my$openMerchantCardList(
    options: my$OpenMerchantCardList
  ): void;

  declare type my$OpenCardDetailOptions = {
    passId: string
  } & my$BaseOptions<>;

  /**
   * 打开当前用户的某张卡的详情页
   * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
   *
   * passId获取方式：
   * 1）通过alipass创建的卡
   * 调用alipay.pass.instance.add(支付宝pass新建卡券实例接口)接口，在出参“result”中可获取
   * 2）通过会员卡创建的卡
   * 调用alipay.marketing.card.query(会员卡查询)接口，在schema_url中可获取，具体参数为“p=xxx”，xxx即为passId。
   */
  declare function my$openCardDetail(options: my$OpenCardDetailOptions): void;

  /**
   * 打开支付宝券列表
   * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
   * @param options
   */
  declare function my$openVoucherList(): void;

  declare type my$OpenMerchantVoucherListOptions = {
    partnerId: string
  } & my$BaseOptions<>;

  /**
   * 打开当前用户的某个商户的券列表
   * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
   */
  declare function my$openMerchantVoucherList(
    options: my$OpenMerchantVoucherListOptions
  ): void;

  declare type my$OpenVoucherDetailOptions1 = {
    passId: string
  } & my$BaseOptions<>;

  declare type my$OpenVoucherDetailOptions2 = {
    partnerId: string,
    serialNumber: string
  } & my$BaseOptions<>;

  /**
   * 打开当前用户的某张券的详情页（非口碑）
   * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
   */
  declare function my$openVoucherDetail(
    options: my$OpenVoucherDetailOptions1 | my$OpenVoucherDetailOptions2
  ): void;

  declare type my$OpenKBVoucherDetailOptions1 = {
    passId: string
  } & my$BaseOptions<>;

  declare type my$OpenKBVoucherDetailOptions2 = {
    partnerId: string,
    serialNumber: string
  } & my$BaseOptions<>;

  /**
   * 打开当前用户的某张券的详情页（口碑）
   * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
   */
  declare function my$openKBVoucherDetail(
    options: my$OpenKBVoucherDetailOptions1 | my$OpenKBVoucherDetailOptions2
  ): void;

  /**
   * 打开支付宝票列表。
   * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
   */
  declare function my$openTicketList(): void;

  declare type my$OpenMerchantTicketListOptions = {
    partnerId: string
  } & my$BaseOptions<>;

  /**
   * 打开某个商户的票列表
   * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
   */
  declare function my$openMerchantTicketList(
    options: my$OpenMerchantTicketListOptions
  ): void;

  declare type my$OpenTicketDetailOptions1 = {
    passId: string
  } & my$BaseOptions<>;

  declare type my$OpenTicketDetailOptions2 = {
    partnerId: string,
    serialNumber: string
  } & my$BaseOptions<>;

  /**
   * 打开当前用户的某张票的详情页
   *
   * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
   */
  declare function my$openTicketDetail(
    options: my$OpenTicketDetailOptions1 | my$OpenTicketDetailOptions2
  ): void;

  declare interface my$AddCardAuthResult {
    success: true | boolean;
    resultStatus: string;
    result: {
      app_id: string,
      auth_code: string,
      state: string,
      scope: string,
      template_id: string,
      request_id: string,
      out_string: string
    };
    success: false | boolean;

    /**
     * 失败的错误码
     * 领卡失败 code 说明
     * 名称 | 类型 | 说明
     * -----|-----|-----
     * JSAPI_SERVICE_TERMINATED | String | 用户取消
     * JSAPI_PARAM_INVALID | String | url 为空或非法参数
     * JSAPI_SYSTEM_ERROR | String | 系统错误
     */
    code: string;
  }

  declare type my$AddCardAuthOptions = {
    /**
     * 开卡授权的页面地址，从alipay.marketing.card.activateurl.apply接口获取
     */
    url: string,
    success?: (res: my$AddCardAuthResult) => void
  } & my$BaseOptions<>;

  /**
   * 小程序唤起会员开卡授权页面，小程序接入会员卡[点此查看](https://docs.alipay.com/mini/introduce/card)
   */
  declare function my$addCardAuth(options: my$AddCardAuthOptions): void;

  declare type my$StartZMVerifyOptions = {
    bizNo: string,
    success?: (res: {
      token: string,
      passed: string,
      reason?: string
    }) => void
  } & my$BaseOptions<>;

  /**
   * 芝麻认证接口，调用此接口可以唤起芝麻认证页面并进行人脸身份验证。
   * 有关芝麻认证的产品和接入介绍，详见 [芝麻认证](https://docs.alipay.com/mini/introduce/zm-verify)。
   * 需要通过蚂蚁开发平台，调用certification.initialize接口进行[认证初始化](https://docs.alipay.com/zmxy/271/105914)。获得biz_no 后，方能通过以下接口激活芝麻认证小程序。
   */
  declare function my$startZMVerify(options: my$StartZMVerifyOptions): void;

  declare type my$ZMCreditBorrowOptions = {
    /**
     * 外部订单号，需要唯一，由商户传入，芝麻内部会做幂等控制，格式为：yyyyMMddHHmmss+随机数
     */
    out_order_no: string,

    /**
     * 信用借还的产品码，传入固定值：w1010100000000002858
     */
    product_code: string,

    /**
     * 物品名称,最长不能超过14个汉字
     */
    goods_name: string,

    /**
     * 租金单位，租金+租金单位组合才具备实际的租金意义。
     * 取值定义如下：
     * DAY_YUAN: 元 / 天
     * HOUR_YUAN: 元 / 小时
     * YUAN: 元
     * YUAN_ONCE: 元 / 次
     */
    rent_unit: string,

    /**
     * 租金，租金 + 租金单位组合才具备实际的租金意义。
     * > 0.00元，代表有租金
     * = 0.00元，代表无租金，免费借用
     * 注：参数传值必须 >= 0，传入其他值会报错参数非法
     */
    rent_amount: string,

    /**
     * 押金，金额单位：元。
     * 注：不允许免押金的用户按此金额支付押金；当物品丢失时，赔偿金额不得高于该金额。
     */
    deposit_amount: string,

    /**
     * 该字段目前默认传Y；
     * 是否支持当借用用户信用不够（不准入）时，可让用户支付押金借用:
     * Y: 支持
     * N: 不支持
     * 注：支付押金的金额等同于deposit_amount。
     */
    deposit_state?: string,

    /**
     * 回调到商户的小程序schema地址。说明：商户的回调地址可以在商户后台里进行配置，服务端回调时，首先根据参数：invoke_type 查询是否有对应的配置地址，如果有，则使用已定义的地址，否则，使用该字段定义的地址执行回调；
     * 参考表格下方的说明一；
     * 小程序回调地址参考表格下方的说明三；
     * 说明一：
     *  		支付宝商户账号登录我的商家服务打开入口链接；
     *  		商家服务中选择“您可能需要->信用借还”或者点击链接；
     *  		场景ID配置->配置新ID，选择对应的业务类型、服务类目和联盟，将生成的场景ID作为credit_biz的值传入即可；
     *  		回调地址配置->设置小程序回调地址，注意：若设置了该回调地址，则接口my.zmCreditBorrow中的入参invoke_return_url将会失效，以该处设置为准；
     * 说明三:
     *  		小程序回调地址示例一：alipays://platformapi/startapp?appId=1999；
     *  		小程序回调地址示例二：alipays://platformapi/startapp?appId=1999&page=pages/map；
     */
    invoke_return_url?: string,

    /**
     * 商户访问蚂蚁的对接模式，默认传TINYAPP：
     * TINYAPP：回跳至小程序地址；
     * WINDOWS：支付宝服务窗，默认值；
     */
    invoke_type?: "TINYAPP" | "TINYAPP" | "WINDOWS" | string,

    /**
     * 信用业务服务，注意：该字段不能为空，且必须根据说明的指引配置商户专属的场景ID，商户自助接入时，登录后台可配置场景ID，将后台配置的场景ID作为该字段的输入；
     * 参考说明一自助进行配置；
     */
    credit_biz: string,

    /**
     * 商户订单创建的起始借用时间，格式：YYYY - MM - DD HH: MM: SS。如果不传入或者为空，则认为订单创建起始时间为调用此接口时的时间。
     */
    borrow_time?: string,

    /**
     * 到期时间，不允许为空，请根据实际业务合理设置该值，格式：YYYY - MM - DD HH: MM: SS，是指最晚归还时间，表示借用用户如果超过此时间还未完结订单（未归还物品或者未支付租金）将会进入逾期状态，芝麻会给借用用户发送催收提醒；需要晚于borrow_time。
     */
    expiry_time: string,

    /**
     * 借用用户的手机号码，可选字段。推荐商户传入此值，会将此手机号码与用户身份信息进行匹配验证，防范欺诈风险。
     */
    mobile_no?: string,

    /**
     * 物品借用地点的描述，便于用户知道物品是在哪里借的。可为空
     */
    borrow_shop_name?: string,

    /**
     * 租金的结算方式，非必填字段，默认是支付宝租金结算支付 merchant：表示商户自行结算，信用借还不提供租金支付能力； alipay：表示使用支付宝支付功能，给用户提供租金代扣及赔偿金支付能力；
     */
    rent_settle_type?: "merchant" | "alipay" | string,

    /**
     * 商户请求状态上下文。商户发起借用服务时，需要在借用结束后返回给商户的参数，格式：json；
     * 如果json的某一项值包含中文，请使用encodeURIComponent对该值进行编码；
     * @example var ext = {
     * name: encodeURIComponent('名字')
     * };
     * var obj = {
     * invoke_state: JSON.stringify(ext)
     * }
     */
    invoke_state?: string,

    /**
     * 租金信息描述, 长度不超过14个汉字，只用于页面展示给C端用户，除此之外无其他意义。
     */
    rent_info?: string,

    /**
     * 借用用户的真实姓名，非必填字段。但name和cert_no必须同时非空，或者同时为空，一旦传入会对用户身份进行校验。
     */
    name?: string,

    /**
     * 借用用户的真实身份证号，非必填字段。但name和cert_no必须同时非空，或者同时为空，一旦传入会对用户身份进行校验。
     */
    cert_no?: string,

    /**
     * 借用用户的收货地址，可选字段，最大长度128。推荐商户传入此值，会将此手机号码与用户身份信息进行匹配验证，防范欺诈风险。
     */
    address?: string,
    success?: (res: {
      /**
       * 6001	用户取消了业务流程
       * 6002	网络异常
       * 9000	成功
       * 4000	系统异常
       */
      resultStatus: "6001" | "6002" | "9000" | "4000" | string,
      result: {
        /**
         * 商户发起借用服务时传入的参数，需要在借用结束后返回给商户的参数
         * @example {"user_name":"john"}
         */
        invoke_state: string,

        /**
         * 外部订单号，需要唯一，由商户传入，芝麻内部会做幂等控制，格式为：yyyyMMddHHmmss+4位随机数
         * @example 201610010000283627
         */
        out_order_no: string,

        /**
         * 芝麻信用借还订单号
         * @example 10020027631
         */
        order_no: string,

        /**
         * 是否准入:Y:准入；N:不准入(该字段目前无实际意义)
         */
        admit_state: "Y" | "N" | string,

        /**
         * 物品借用/租赁者的用户id
         * @example 2088202924240029
         */
        user_id: string,
        callbackData: any
      }
    }) => void
  } & my$BaseOptions<>;

  declare function my$zmCreditBorrow(options: my$ZMCreditBorrowOptions): void;

  declare type my$TextRiskIdentificationType =
    | "keyword"
    | "0"
    | "1"
    | "2"
    | "3"
    | string;

  declare type my$TextRiskIdentificationOptions = {
    /**
     * 需要进行风险识别的文本内容
     */
    content: string,

    /**
     * 识别类型：keyword 表示关键词、0 表示广告、1表示涉政、2表示涉黄、3表示低俗辱骂
     */
    type: my$TextRiskIdentificationType[],
    success?: (res: {
      result: {
        /**
         * 目标内容文本识别到的类型，keyword 表示关键词、0 表示广告、1表示涉政、2表示涉黄、3表示低俗辱骂
         */
        type: my$TextRiskIdentificationType,

        /**
         * 仅当识别命中了 type 为 keyword 时，才会返回该字段
         */
        hitKeywords?: string[],

        /**
         * 识别命中得分，最高分100分。仅当识别没有命中 keyword ，但入参中包含了广告或涉政或涉黄时，才会返回该字段
         */
        score?: string
      },
      fail?: (res: {
        /**
         * 识别错误码
         */
        error: string,

        /**
         * 识别错误消息
         */
        errorMessage: string
      }) => void
    }) => void
  } & my$BaseOptions<>;

  /**
   * 文本风险识别， **支付宝客户端10.1.10及以上版本支持。**详细接入参考[指引](https://docs.alipay.com/mini/introduce/text-identification)
   */
  declare function my$textRiskIdentification(
    options: my$TextRiskIdentificationOptions
  ): void;

  declare type my$NavigateToMiniProgramOptions = {
    /**
     * 要跳转的目标小程序appId
     */
    appId: string,

    /**
     * 打开的页面路径，如果为空则打开首页
     */
    path?: string,

    /**
     * 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch() ，App.onShow() 中获取到这份数据
     */
    extraData?: any,

    /**
     * 要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版） ，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。默认值 release
     */
    envVersion?: "develop" | "trial" | "release" | string
  } & my$BaseOptions<>;

  /**
   * 跳转到其他小程序。详细接入参考[指引](https://docs.alipay.com/mini/introduce/open-miniprogram)
   * @param options
   */
  declare function my$navigateToMiniProgram(
    options: my$NavigateToMiniProgramOptions
  ): void;

  declare type my$NavigateBackMiniProgramOptions = {
    /**
     * 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据
     */
    extraData?: any
  } & my$BaseOptions<>;

  /**
   * 跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功
   */
  declare function my$navigateBackMiniProgram(
    options: my$NavigateBackMiniProgramOptions
  ): void;

  declare interface my$WebViewContext {
    postMessage(param: any): void;
  }

  /**
   * 创建并返回 web-view 上下文 webViewContext 对象。
   * @param webviewId 要创建的web-view所对应的id属性
   */
  declare function my$createWebViewContext(
    webviewId: string
  ): my$WebViewContext;

  declare type my$ImageSourceType = "album" | "camera";

  declare type my$ChooseImageOptions = {
    /**
     * 最大可选照片数，默认1张
     */
    count: number,

    /**
     * 相册选取或者拍照，默认 [‘camera’,‘album’]
     */
    sourceType: my$ImageSourceType[],

    /**
     * 成功则返回图片的本地文件路径列表 tempFilePaths
     */
    success(res: {
      /**
       * 图片文件描述
       */
      apFilePaths: string[]
    }): void
  } & my$BaseOptions<>;

  /**
   * 从本地相册选择图片或使用相机拍照。
   */
  declare function my$chooseImage(options: $Shape<my$ChooseImageOptions>): void;

  declare type my$PreviewImageOptions = {
    /**
     * 当当前显示图片索引，默认 0
     */
    current?: number,

    /**
     * 要预览的图片链接列表
     */
    urls: string[]
  } & my$BaseOptions<>;

  /**
   * 预览图片。
   */
  declare function my$previewImage(options: my$PreviewImageOptions): void;

  declare type my$SaveImageOptions = {
    /**
     * 要保存的图片链接
     */
    url: string,
    success?: (res: {
      errMsg: string
    }) => void
  } & my$BaseOptions<>;

  /**
   * 保存在线图片到手机相册。
   */
  declare function my$saveImage(options: my$SaveImageOptions): void;

  declare type my$CompressImageOptions = {
    /**
     * 要压缩的图片地址数组
     */
    apFilePaths: string[],

    /**
     * 压缩级别，支持 0 ~ 4 的整数，默认 4。详见「compressLevel表 说明表」
     * compressLevel表
     * compressLevel | 说明
     * --------------|-----
     * 0 | 低质量
     * 1 | 中等质量
     * 2 | 高质量
     * 3 | 不压缩
     * 4 | 根据网络适应
     */
    compressLevel?: 0 | 1 | 2 | 3 | 4,
    success?: (res: {
      /**
       * 压缩后的路径数组
       */
      apFilePaths: string[]
    }) => void
  } & my$BaseOptions<>;

  /**
   * 压缩图片。扫码体验：
   */
  declare function my$compressImage(options: my$CompressImageOptions): void;

  declare type my$GetImageInfoOptions = {
    /**
     * 图片路径，目前支持：
     * - 网络图片路径
     * - apFilePath路径
     * - 相对路径
     */
    src: string,
    success?: (res: {
      width: number,
      height: number,
      path: string
    }) => void
  } & my$BaseOptions<>;

  /**
   * 获取图片信息
   */
  declare function my$getImageInfo(options: my$GetImageInfoOptions): void;

  declare type my$SetStorageOptions = {
    /**
     * 本地缓存中的指定的 key
     */
    key: string,

    /**
     * 需要存储的内容
     */
    data: any
  } & my$BaseOptions<>;

  /**
   * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的数据。
   * 这是异步接口。
   */
  declare function my$setStorage(options: my$SetStorageOptions): void;

  /**
   * 同步将数据存储在本地缓存中指定的 key 中。
   * 这是同步接口。
   * @param key 本地缓存中的指定的 key
   * @param data 需要存储的内容
   */
  declare function my$setStorageSync(options: {
    key: string,
    data: any
  }): void;

  declare type my$GetStorageOptions = {
    /**
     * 本地缓存中的指定的 key
     */
    key: string,

    /**
     * 接口调用的回调函数,res = {data: key对应的内容}
     */
    success(res: my$DataResponse): void
  } & my$BaseOptions<>;

  /**
   * 获取缓存数据。
   * 这是异步接口。
   */
  declare function my$getStorage(options: my$GetStorageOptions): void;

  /**
   * 同步获取缓存数据。
   * 这是同步接口
   */
  declare function my$getStorageSync(options: {
    key: string
  }): any;

  declare type my$RemoveStorageOptions = {
    key: string
  } & my$BaseOptions<>;

  /**
   * 删除缓存数据。
   * 这是异步接口。
   */
  declare function my$removeStorage(options: my$RemoveStorageOptions): void;

  /**
   * 同步删除缓存数据。
   * 这是同步接口。
   * @param key 缓存数据的key
   */
  declare function my$removeStorageSync(options: {
    key: string
  }): void;

  /**
   * 清除本地数据缓存。
   * 这是异步接口。
   */
  declare function my$clearStorage(): void;

  /**
   * 同步清除本地数据缓存。
   * 这是同步接口。
   */
  declare function my$clearStorageSync(): void;

  declare interface my$StorageInfo {
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

  declare type my$GetStorageInfoOptions = {
    success(res: my$StorageInfo): void
  } & my$BaseOptions<>;

  /**
   * 异步获取当前storage的相关信息
   */
  declare function my$getStorageInfo(options: my$GetStorageInfoOptions): void;

  declare function my$getStorageInfoSync(): my$StorageInfo;

  declare interface my$SavedFileData {
    /**
     * 文件保存路径
     */
    apFilePath: string;
  }

  declare type my$SaveFileOptions = {
    /**
     * 文件路径
     */
    apFilePath: string,
    success?: (res: my$SavedFileData) => void
  } & my$BaseOptions<>;

  /**
   * 保存文件到本地（本地文件大小总容量限制：10M）
   */
  declare function my$saveFile(options: my$SaveFileOptions): void;

  declare interface my$GetFileInfoSuccess {
    /**
     * 文件大小，单位：B
     */
    size: number;

    /**
     * 摘要结果
     */
    digest: string;
  }

  declare type my$GetFileInfoOptions = {
    /**
     * 文件路径
     */
    apFilePath: string,

    /**
     * 摘要算法，支持md5和sha1，默认为md5
     */
    digestAlgorithm?: "md5" | "sha1",
    success?: (options: my$GetFileInfoSuccess) => void
  } & my$BaseOptions<>;

  /**
   * 获取文件信息
   * 基础库版本 1.4.0 开始支持，低版本需做兼容处理
   */
  declare function my$getFileInfo(options: my$GetFileInfoOptions): void;

  declare interface my$SavedFileInfoData {
    /**
     * 文件大小，单位B
     */
    size: number;

    /**
     * 创建时间
     */
    createTime: number;
  }

  declare type my$GetSavedFileInfoOptions = {
    /**
     * 文件路径
     */
    apFilePath: string,

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: my$SavedFileInfoData) => void
  } & my$BaseOptions<>;

  /**
   * 获取保存的文件信息
   */
  declare function my$getSavedFileInfo(
    options: my$GetSavedFileInfoOptions
  ): void;

  declare type my$GetSavedFileListOptions = {
    success?: (res: {
      fileList: Array<{
        /**
         * 文件大小
         */
        size: number,

        /**
         * 创建时间
         */
        createTime: number,

        /**
         * 文件路径
         */
        apFilePath: string
      }>
    }) => void
  } & my$BaseOptions<>;

  declare function my$getSavedFileList(
    options: my$GetSavedFileListOptions
  ): void;

  declare type my$RemoveSavedFileOptions = my$GetSavedFileInfoOptions;

  /**
   * 删除某个保存的文件
   */
  declare function my$removeSavedFile(options: my$RemoveSavedFileOptions): void;

  declare interface my$LocationData {
    /**
     * 经度
     */
    longitude: string;

    /**
     * 纬度
     */
    latitude: string;

    /**
     * 精确度，单位m
     */
    accuracy: string;

    /**
     * 水平精确度，单位m
     */
    horizontalAccuracy: string;

    /**
     * 国家(type>0生效)
     */
    country?: string;

    /**
     * 国家编号 (type>0生效)
     */
    countryCode?: string;

    /**
     * 省份(type>0生效)
     */
    province?: string;

    /**
     * 城市(type>0生效)
     */
    city?: string;

    /**
     * 城市级别的地区代码(type>0生效)
     */
    cityAdcode?: string;

    /**
     * 区县(type>0生效)
     */
    district?: string;

    /**
     * 区县级别的地区代码(type>0生效)
     */
    districtAdcode?: string;

    /**
     * 需要街道级别逆地理的才会有的字段,街道门牌信息，结构是：{ street, number } (type > 1生效)
     */
    streetNumber?: {
      street: string,
      number: string
    };

    /**
     * 需要POI级别逆地理的才会有的字段, 定位点附近的 POI 信息，结构是：{ name, address } （type > 2生效）
     */
    pois?: Array<{
      name: string,
      address: string
    }>;
  }

  declare type my$GetLocationOptions = {
    /**
     * 支付宝客户端经纬度定位缓存过期时间，单位秒。默认 30s。使用缓存会加快定位速度，缓存过期会重新定位
     */
    cacheTimeout: number,

    /**
     * 0：默认，获取经纬度
     * 1：获取经纬度和详细到区县级别的逆地理编码数据
     * 2：获取经纬度和详细到街道级别的逆地理编码数据，不推荐使用
     * 3：获取经纬度和详细到POI级别的逆地理编码数据，不推荐使用
     */
    type: 0 | 1 | 2 | 3,

    /**
     * 接口调用成功的回调函数，返回内容详见返回参数说明。
     */
    success(res: my$LocationData): void
  } & my$BaseOptions<>;

  /**
   * 获取用户当前的地理位置信息
   */
  declare function my$getLocation(options: $Shape<my$GetLocationOptions>): void;

  declare type my$OpenLocationOptions = {
    /**
     * 经度
     */
    longitude: number | string,

    /**
     * 纬度
     */
    latitude: number | string,

    /**
     * 位置名称
     */
    name: string,

    /**
     * 地址的详细说明
     */
    address: string,

    /**
     * 缩放比例，范围 3~19，默认为 15
     */
    scale?: number
  } & my$BaseOptions<>;

  /**
   * 使用微信内置地图查看位置
   */
  declare function my$openLocation(options: my$OpenLocationOptions): void;

  declare interface my$ChooseLocationData {
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

  declare type my$ChooseLocationOptions = {
    success(res: my$ChooseLocationData): void
  } & my$BaseOptions<>;

  /**
   * 使用支付宝内置地图选择地理位置。
   */
  declare function my$chooseLocation(options: my$ChooseLocationOptions): void;

  declare interface my$RequestHeader {
    [key: string]: string;
  }

  declare type my$RequestOptions = {
    /**
     * 目标服务器url
     */
    url: string,

    /**
     * 设置请求的 HTTP 头，默认 {'Content-Type': 'application/x-www-form-urlencoded'}
     */
    header?: my$RequestHeader,

    /**
     * 默认GET，目前支持GET，POST
     */
    method?: "GET" | "POST",

    /**
     * 请求的参数
     */
    data?: any,

    /**
     * 超时时间，单位ms，默认30000
     */
    timeout?: number,

    /**
     * 期望返回的数据格式，默认json，支持json，text，base64
     */
    dataType?: "json" | "text" | "base64",

    /**
     * 收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
     */
    success?: (res: my$DataResponse) => void
  } & my$BaseOptions<my$DataResponse>;

  declare function my$httpRequest(options: my$RequestOptions): void;

  declare type my$UploadFileOptions = {
    /**
     * 开发者服务器地址
     */
    url: string,

    /**
     * 要上传文件资源的本地定位符
     */
    filePath: string,

    /**
     * 文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     */
    fileName: string,

    /**
     * 文件类型
     */
    fileType: "image" | "video" | "audio",

    /**
     * HTTP 请求 Header
     */
    header?: my$RequestHeader,

    /**
     * HTTP 请求中其他额外的 form 数据
     */
    formData?: any,
    success?: (res: {
      /**
       * 服务器返回的数据
       */
      data: string,

      /**
       * HTTP 状态码
       */
      statusCode: string,
      header: any
    }) => void
  } & my$BaseOptions<>;

  /**
   * 上传本地资源到开发者服务器。
   */
  declare function my$uploadFile(options: my$UploadFileOptions): void;

  declare type my$DownloadFileOptions = {
    /**
     * 下载文件地址
     */
    url: string,

    /**
     * HTTP 请求 Header
     */
    header?: my$RequestHeader,

    /**
     * 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
     */
    success?: (res: my$TempFileResponse) => void
  } & my$BaseOptions<>;

  /**
   * 下载文件资源到本地。
   */
  declare function my$downloadFile(options: my$DownloadFileOptions): void;

  declare type my$ConnectSocketOptions = {
    /**
     * 目标服务器url
     */
    url: string,

    /**
     * 请求的参数
     */
    data?: any,

    /**
     * 设置请求的头部
     */
    header?: my$RequestHeader,
    method?: "GET" | "POST"
  } & my$BaseOptions<>;

  /**
   * 创建一个 WebSocket 的连接；
   * 一个支付宝小程序同时只能保留一个 WebSocket 连接，如果当前已存在 WebSocket 连接，会自动关闭该连接，并重新创建一个新的 WebSocket 连接。
   */
  declare function my$connectSocket(options: my$ConnectSocketOptions): void;

  /**
   * 监听WebSocket连接打开事件。
   */
  declare function my$onSocketOpen(callback: () => void): void;

  /**
   * 监听WebSocket关闭。
   */
  declare function my$onSocketClose(callback: () => void): void;

  /**
   * 取消监听WebSocket连接打开事件。
   */
  declare function my$offSocketOpen(callback: () => void): void;

  /**
   * 监听WebSocket错误。
   */
  declare function my$onSocketError(callback: (error: any) => void): void;

  /**
   * 取消监听WebSocket错误。
   */
  declare function my$offSocketError(callback: (error: any) => void): void;

  declare type my$SendSocketMessageOptions = {
    /**
     * 需要发送的内容：普通的文本内容 String 或者经 base64 编码后的 String
     */
    data: string | ArrayBuffer,

    /**
     * 如果需要发送二进制数据，需要将入参数据经 base64 编码成 String 后赋值 data，同时将此字段设置为true，否则如果是普通的文本内容 String，不需要设置此字段
     */
    isBuffer?: boolean
  } & my$BaseOptions<>;

  /**
   * 通过 WebSocket 连接发送数据，需要先使用 my.connectSocket 发起建连，并在 my.onSocketOpen 回调之后再发送数据。
   */
  declare function my$sendSocketMessage(
    options: my$SendSocketMessageOptions
  ): void;

  /**
   * 监听WebSocket接受到服务器的消息事件。
   */
  declare function my$onSocketMessage(
    callback: (res: {
      /**
       * 需要发送的内容：普通的文本内容 String 或者经 base64 编码后的 String
       */
      data: string | ArrayBuffer,

      /**
       * 如果需要发送二进制数据，需要将入参数据经 base64 编码成 String 后赋值 data，同时将此字段设置为true，否则如果是普通的文本内容 String，不需要设置此字段
       */
      isBuffer?: boolean
    }) => void
  ): void;

  declare function my$offSocketMessage(callback: (error: any) => void): void;

  declare type my$CloseSocketOptions = {
    success?: (res: any) => void
  } & my$BaseOptions<>;

  /**
   * 监听WebSocket关闭。
   */
  declare function my$closeSocket(options?: my$CloseSocketOptions): void;

  /**
   * 取消监听WebSocket关闭。
   */
  declare function my$offSocketClose(callback: (error: any) => void): void;

  /**
   * 判断当前小程序的 API、入参或返回值、组件、属性等在当前版本是否支持。
   * 参数使用 ${API}.${type}.${param}.${option} 或者 ${component}.${attribute}.${option} 方式来调用
   * - API 表示 api 名字
   * - type 取值 object/return/callback 表示 api 的判断类型
   * - param 表示参数的某一个属性名
   * - option 表示参数属性的具体属性值
   * - component 表示组件名称
   * - attribute 表示组件属性名
   * - option 表示组件属性值
   */
  declare function my$canIUse(api: string): boolean;

  declare var my$SDKVersion: string;

  declare interface my$SystemInfo {
    /**
     * 手机型号
     */
    model: string;

    /**
     * 设备像素比
     */
    pixelRatio: number;

    /**
     * 窗口宽度
     */
    windowWidth: number;

    /**
     * 窗口高度
     */
    windowHeight: number;

    /**
     * 支付宝设置的语言
     */
    language: string;

    /**
     * 支付宝版本号
     */
    version: string;

    /**
     * 设备磁盘容量
     */
    storage: string;

    /**
     * 当前电量百分比
     */
    currentBattery: string;

    /**
     * 系统版本
     */
    system: string;

    /**
     * 系统名：Android，iOS
     */
    platform: "Android" | "iOS" | string;

    /**
     * 屏幕宽度
     */
    screenWidth: number;

    /**
     * 屏幕高度
     */
    screenHeight: number;

    /**
     * 手机品牌
     */
    brand: string;

    /**
     * 用户设置字体大小
     */
    fontSizeSetting: number;

    /**
     * 当前运行的客户端，当前是支付宝则有效值是"alipay"
     */
    app: "alipay" | string;
  }

  declare type my$GetSystemInfoOptions = {
    success?: (res: my$SystemInfo) => void
  } & my$BaseOptions<>;

  declare function my$getSystemInfo(options: my$GetSystemInfoOptions): void;

  declare function my$getSystemInfoSync(): my$SystemInfo;

  declare type my$GetNetworkTypeOptions = {
    success?: (res: {
      /**
       * 网络是否可用
       */
      networkAvailable: boolean,

      /**
       * 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN
       */
      networkType: my$NetworkType
    }) => void
  } & my$BaseOptions<>;

  declare type my$NetworkType =
    | "UNKNOWN"
    | "NOTREACHABLE"
    | "WIFI"
    | "3G"
    | "2G"
    | "4G"
    | "WWAN";

  declare function my$getNetworkType(options: my$GetNetworkTypeOptions): void;

  /**
   * 开始网络状态变化的监听
   */
  declare function my$onNetworkStatusChange(
    callback: (res: {
      /**
       * 网络是否可用
       */
      isConnected: boolean,

      /**
       * 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN
       */
      networkType: my$NetworkType
    }) => void
  ): void;

  /**
   * 取消网络状态变化的监听
   */
  declare function my$offNetworkStatusChange(): void;

  declare type my$GetClipboardOptions = {
    success?: (res: {
      text: string
    }) => void
  } & my$BaseOptions<>;

  declare function my$getClipboard(options: my$GetClipboardOptions): void;

  declare type my$SetClipboardOptions = {
    /**
     * 剪贴板数据
     */
    text: string
  } & my$BaseOptions<>;

  declare function my$setClipboard(options: my$SetClipboardOptions): void;

  declare function my$watchShake(options: my$BaseOptions<>): void;

  /**
   * 调用震动功能。
   */
  declare function my$vibrate(options?: my$BaseOptions<>): void;

  /**
   * 调用震动功能。
   */
  declare function my$vibrateLong(options?: my$BaseOptions<>): void;

  /**
   * 调用震动功能。
   */
  declare function my$vibrateShort(options?: my$BaseOptions<>): void;

  declare type my$MakePhoneCallOptions = {
    /**
     * 需要拨打的电话号码
     */
    number: string
  } & my$BaseOptions<>;

  /**
   * 拨打电话
   */
  declare function my$makePhoneCall(options: my$MakePhoneCallOptions): void;

  declare type my$GetServerTimeOptions = {
    success?: (res: {
      /**
       * 服务器时间的毫秒数
       */
      time: number
    }) => void
  } & my$BaseOptions<>;

  declare function my$getServerTime(options: my$GetServerTimeOptions): void;

  /**
   * 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件
   */
  declare function my$onUserCaptureScreen(callback?: (res: any) => void): void;

  /**
   * 取消监听截屏事件。一般需要与 my.onUserCaptureScreen 成对出现。
   */
  declare function my$offUserCaptureScreen(): void;

  declare type my$SetKeepScreenOnOptions = {
    /**
     * 是否保持屏幕常亮
     */
    keepScreenOn: boolean,
    success?: (res: {
      errMsg: string
    }) => void
  } & my$BaseOptions<>;

  /**
   * 设置是否保持常亮状态。
   * 仅在当前小程序生效，离开小程序后设置失效。
   */
  declare function my$setKeepScreenOn(
    options?: my$SetKeepScreenOnOptions
  ): void;

  declare type my$GetScreenBrightnessOptions = {
    /**
     * 屏幕亮度值，范围 0~1，0 最暗，1 最亮
     */
    success(value: number): void
  } & my$BaseOptions<>;

  /**
   * 获取屏幕亮度
   */
  declare function my$getScreenBrightness(
    options?: my$GetScreenBrightnessOptions
  ): void;

  declare type my$SetScreenBrightnessOptions = {
    /**
     * 需要设置的屏幕亮度，取值范围0-1
     */
    brightness: number
  } & my$BaseOptions<>;

  /**
   * 设置屏幕亮度
   */
  declare function my$setScreenBrightness(
    options: my$SetScreenBrightnessOptions
  ): void;

  declare type my$showAuthGuideOptions = {
    /**
     * 引导的权限标识，用于标识该权限类型(如 LBS)
     * 支持的 authType 如下：
     *
     * 权限名称	权限码	支持平台
     * 后台保活权限	BACKGROUNDER	Android
     * 桌面快捷权限	SHORTCUT	Android
     * 麦克风权限	MICROPHONE	iOS
     * 通讯录权限	ADDRESSBOOK	iOS
     * 相机权限	CAMERA	iOS
     * 照片权限	PHOTO	iOS
     * push通知栏权限	NOTIFICATION	iOS
     * 自启动权限	SELFSTARTING	Android
     * lbs总开关	LBSSERVICE	iOS
     * lbs开关(app)	LBS	iOS
     */
    authType:
      | "BACKGROUNDER"
      | "SHORTCUT"
      | "MICROPHONE"
      | "ADDRESSBOOK"
      | "CAMERA"
      | "PHOTO"
      | "NOTIFICATION"
      | "SELFSTARTING"
      | "LBSSERVICE"
      | "LBS"
  } & my$BaseOptions<>;

  declare function my$showAuthGuide(options: my$showAuthGuideOptions): void;

  declare type my$scanType = "qr" | "bar";

  declare interface my$ScanCodeData {
    /**
     * 扫描二维码时返回二维码数据
     */
    code: string;

    /**
     * 所扫码的类型
     */
    qrCode: string;

    /**
     * 扫描条形码时返回条形码数据
     */
    barCode: string;
  }

  declare type my$ScanOptions = {
    /**
     * 扫码样式(默认 qr)：
     * 1. qr,扫码框样式为二维码扫码框
     * 1. bar，扫码样式为条形码扫码框
     */
    type?: my$scanType,

    /**
     * 是否隐藏相册（不允许从相册选择图片），只能从相机扫码
     */
    hideAlbum?: boolean,
    success?: (res: my$ScanCodeData) => void
  } & my$BaseOptions<>;

  /**
   * 调起客户端扫码界面，扫码成功后返回对应的结果
   */
  declare function my$scan(options: my$ScanOptions): void;

  declare type my$OpenBluetoothAdapterOptions = {
    /**
     * 不传的话默认是true，表示是否在离开当前页面时自动断开蓝牙(仅对android有效)
     */
    autoClose: boolean,
    success(res: {
      /**
       * 是否支持 BLE
       */
      isSupportBLE: boolean
    }): void
  } & my$BaseOptions<>;

  /**
   * 初始化小程序蓝牙模块，生效周期为调用 my.openBluetoothAdapter 至调用 my.closeBluetoothAdapter 或小程序被销毁为止。 在小程序蓝牙适配器模块生效期间，开发者可以正常调用下面的小程序API，并会收到蓝牙模块相关的 on 事件回调。
   */
  declare function my$openBluetoothAdapter(
    options: $Shape<my$OpenBluetoothAdapterOptions>
  ): void;

  declare type my$CloseBluetoothAdapterOptions = {
    success(res: any): void
  } & my$BaseOptions<>;

  /**
   * 关闭本机蓝牙模块
   */
  declare function my$closeBluetoothAdapter(
    options: my$CloseBluetoothAdapterOptions
  ): void;

  declare type my$BluetoothAdapterStateData = {
    /**
     * 是否正在搜索设备
     */
    discovering: boolean,

    /**
     * 蓝牙模块是否可用(需支持 BLE 并且蓝牙是打开状态)
     */
    available: boolean
  } & my$ErrMsgResponse;

  declare type my$GetBluetoothAdapterStateOptions = {
    success(res: my$BluetoothAdapterStateData): void
  } & my$BaseOptions<>;

  /**
   * 获取本机蓝牙适配器状态
   */
  declare function my$getBluetoothAdapterState(
    options: my$GetBluetoothAdapterStateOptions
  ): void;

  declare type my$StartBluetoothDevicesDiscoveryOptions = {
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
  } & my$BaseOptions<>;

  /**
   * 开始搜寻附近的蓝牙外围设备。搜索结果将在 my.onBluetoothDeviceFound 事件中返回。
   */
  declare function my$startBluetoothDevicesDiscovery(
    options: my$StartBluetoothDevicesDiscoveryOptions
  ): void;

  declare type my$StopBluetoothDevicesDiscoveryOptions = {
    success(res: my$ErrMsgResponse): void
  } & my$BaseOptions<>;

  /**
   * 停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。
   */
  declare function my$stopBluetoothDevicesDiscovery(
    options: my$StopBluetoothDevicesDiscoveryOptions
  ): void;

  /**
   * 蓝牙设备信息
   */
  declare interface my$BluetoothDevice {
    /**
     * 蓝牙设备名称，某些设备可能没有
     */
    name: string;

    /**
     * (兼容旧版本) 值与 name 一致
     */
    deviceName: string;

    /**
     * 广播设备名称
     */
    localName: string;

    /**
     * 设备的 id
     */
    deviceId: string;

    /**
     * 设备信号强度
     */
    RSSI: number;

    /**
     * 设备的广播内容
     */
    advertisData: ArrayBuffer;

    /**
     * 设备的manufacturerData
     */
    manufacturerData: ArrayBuffer;
  }

  declare type my$GetBluetoothDevicesOptions = {
    success(
      res: {
        devices: my$BluetoothDevice[]
      } & my$ErrMsgResponse
    ): void
  } & my$BaseOptions<>;

  /**
   * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。
   */
  declare function my$getBluetoothDevices(
    options: my$GetBluetoothDevicesOptions
  ): void;

  declare type my$GetConnectedBluetoothDevicesOptions = {
    services?: string[],
    success(
      res: {
        devices: my$BluetoothDevice[]
      } & my$ErrMsgResponse
    ): void
  } & my$BaseOptions<>;

  /**
   * 获取处于已连接状态的设备。
   */
  declare function my$getConnectedBluetoothDevices(
    options: my$GetConnectedBluetoothDevicesOptions
  ): void;

  declare type my$BLEDeviceOptions = {
    /**
     * 蓝牙设备id
     */
    deviceId: string
  } & my$BaseOptions<>;

  /**
   * 连接低功耗蓝牙设备。
   */
  declare function my$connectBLEDevice(options: my$BLEDeviceOptions): void;

  /**
   * 断开与低功耗蓝牙设备的连接。
   */
  declare function my$disconnectBLEDevice(options: my$BLEDeviceOptions): void;

  declare type my$WriteBLECharacteristicValueOptions = {
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
     * 蓝牙设备特征值对应的值，16进制字符串，限制在20字节内
     */
    value: string
  } & my$BaseOptions<>;

  /**
   * 向低功耗蓝牙设备特征值中写入数据。
   */
  declare function my$writeBLECharacteristicValue(
    options: my$WriteBLECharacteristicValueOptions
  ): void;

  declare type my$ReadBLECharacteristicValueOptions = {
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
      } & my$ErrMsgResponse
    ): void
  } & my$BaseOptions<>;

  /**
   * 读取低功耗蓝牙设备特征值中的数据。调用后在 my.onBLECharacteristicValueChange() 事件中接收数据返回。
   */
  declare function my$readBLECharacteristicValue(
    options: my$ReadBLECharacteristicValueOptions
  ): void;

  declare type my$NotifyBLECharacteristicValueChangeOptions = {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string,

    /**
     * 蓝牙特征值对应 service 的 uuid
     */
    serviceId: string,

    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string,

    /**
     * notify 的 descriptor 的 uuid （只有android 会用到，非必填，默认值00002902-0000-10008000-00805f9b34fb）
     */
    descriptorId?: string,

    /**
     * 是否启用notify或indicate
     */
    state?: boolean
  } & my$BaseOptions<>;

  declare function my$notifyBLECharacteristicValueChange(
    optons: my$NotifyBLECharacteristicValueChangeOptions
  ): void;

  declare type my$NotifyBLECharacteristicValueChangedOptions = {
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
     * notify 的 descriptor 的 uuid （只有android 会用到，非必填，默认值00002902-0000-10008000-00805f9b34fb）
     */
    descriptorId?: string,

    /**
     * true: 启用 notify; false: 停用 notify
     */
    state: boolean,
    success(res: my$ErrMsgResponse): void
  } & my$BaseOptions<>;

  /**
   * 启用低功耗蓝牙设备特征值变化时的 notify 功能。注意：设备的特征值必须支持 notify/indicate 才可以成功调用，具体参照 characteristic 的 properties 属性 另外，必须先启用 notify 才能监听到设备 characteristicValueChange 事件。
   */
  declare function my$notifyBLECharacteristicValueChanged(
    options: my$NotifyBLECharacteristicValueChangedOptions
  ): void;

  declare type my$GetBLEDeviceServicesOptions = {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string,

    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success(
      res: {
        services: Array<{
          /**
           * 蓝牙设备服务的 uuid
           */
          serviceId: string,

          /**
           * 该服务是否为主服务
           */
          isPrimary: boolean
        }>
      } & my$ErrMsgResponse
    ): void
  } & my$BaseOptions<>;

  /**
   * 获取蓝牙设备所有 service（服务）
   */
  declare function my$getBLEDeviceServices(
    options: my$GetBLEDeviceServicesOptions
  ): void;

  declare type my$GetBLEDeviceCharacteristicsOptions = {
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
          /**
           * 蓝牙设备特征值的 uuid
           */
          characteristicId: string,

          /**
           * 蓝牙设备特征值对应服务的 uuid
           */
          serviceId: string,

          /**
           * 蓝牙设备特征值对应的16进制值
           */
          value: ArrayBuffer,

          /**
           * 该特征值支持的操作类型
           */
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
      } & my$ErrMsgResponse
    ): void
  } & my$BaseOptions<>;

  /**
   * 获取蓝牙设备所有 characteristic（特征值）
   */
  declare function my$getBLEDeviceCharacteristics(
    options: my$GetBLEDeviceCharacteristicsOptions
  ): void;

  declare type my$OnBluetoothDeviceFoundOptions = {
    success?: (res: {
      devices: my$BluetoothDevice[]
    }) => void
  } & my$BaseOptions<>;

  /**
   * 搜索到新的蓝牙设备时触发此事件。
   */
  declare function my$onBluetoothDeviceFound(
    options: my$OnBluetoothDeviceFoundOptions
  ): void;

  /**
   * 移除寻找到新的蓝牙设备事件的监听。
   */
  declare function my$offBluetoothDeviceFound(callback?: any): void;

  declare type my$OnBLECharacteristicValueChangeOptions = {
    success?: (res: {
      /**
       * 蓝牙设备 id，参考 device 对象
       */
      deviceId: string,

      /**
       * 蓝牙特征值对应 service 的 uuid
       */
      serviceId: string,

      /**
       * 蓝牙特征值的 uuid
       */
      characteristicId: string,

      /**
       * 特征值最新的16进制值
       */
      value: ArrayBuffer
    }) => void
  } & my$BaseOptions<>;

  /**
   * 监听低功耗蓝牙设备的特征值变化的事件。
   */
  declare function my$onBLECharacteristicValueChange(
    options: my$OnBLECharacteristicValueChangeOptions
  ): void;

  declare type my$OnBLEConnectionStateChangedOptions = {
    success?: (res: {
      /**
       * 蓝牙设备 id，参考 device 对象
       */
      deviceId: string,

      /**
       * 连接目前的状态
       */
      connected: boolean
    }) => void
  } & my$BaseOptions<>;

  /**
   * 移除低功耗蓝牙设备的特征值变化事件的监听。
   */
  declare function my$offBLECharacteristicValueChange(callback?: any): void;

  /**
   * 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等。
   */
  declare function my$onBLEConnectionStateChanged(
    options: my$OnBLEConnectionStateChangedOptions
  ): void;

  /**
   * 移除低功耗蓝牙连接状态变化事件的监听。
   */
  declare function my$offBLEConnectionStateChanged(): void;

  declare interface my$BluetoothAdapterState {
    /**
     * 蓝牙适配器是否可用
     */
    available: boolean;

    /**
     * 蓝牙适配器是否处于搜索状态
     */
    discovering: boolean;
  }

  /**
   * 监听本机蓝牙状态变化的事件。
   */
  declare function my$onBluetoothAdapterStateChange(
    callback: (res: my$BluetoothAdapterState) => void
  ): void;

  /**
   * 移除本机蓝牙状态变化的事件的监听。
   */
  declare function my$offBluetoothAdapterStateChange(): void;

  declare type my$StartBeaconDiscoveryOptions = {
    /**
     * iBeacon设备广播的 uuids
     */
    uuids: string[],
    success?: (res: my$ErrMsgResponse) => void
  } & my$BaseOptions<>;

  /**
   * 开始搜索附近的iBeacon设备
   */
  declare function my$startBeaconDiscovery(
    options: my$StartBeaconDiscoveryOptions
  ): void;

  declare type my$StopBeaconDiscoveryOptions = {
    success?: (res: my$ErrMsgResponse) => void
  } & my$BaseOptions<>;

  /**
   * 停止搜索附近的iBeacon设备
   */
  declare function my$stopBeaconDiscovery(
    options: my$StopBeaconDiscoveryOptions
  ): void;

  declare interface my$Beacon {
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
     * 表示设备距离的枚举值(0-3分别代表：未知、极近、近、远)
     */
    proximity: 0 | 1 | 2 | 3;

    /**
     * iBeacon 设备的距离
     */
    accuracy: number;

    /**
     * iBeacon 信号强度
     */
    rssi: number;
  }

  declare interface my$GetBeaconsSuccess {
    beacons: my$Beacon[];

    /**
     * errorCode=0 ,接口调用成功
     */
    errCode: string;

    /**
     * ok
     */
    errMsg: string;
  }

  declare type my$GetBeaconsOptions = {
    success?: (options: my$GetBeaconsSuccess) => void
  } & my$BaseOptions<>;

  /**
   * 获取所有已搜索到的iBeacon设备
   */
  declare function my$getBeacons(options: my$GetBeaconsOptions): void;

  declare type my$BeaconUpdateOptions = {
    success?: (res: {
      beacons: my$Beacon[]
    }) => void
  } & my$BaseOptions<>;

  /**
   * 监听 iBeacon 设备的更新事件
   */
  declare function my$onBeaconUpdate(options: my$BeaconUpdateOptions): void;

  declare type my$BeaconServiceChangeOptions = {
    success?: (res: {
      /**
       * 服务目前是否可用
       */
      available: boolean,

      /**
       * 目前是否处于搜索状态
       */
      discovering: boolean
    }) => void
  } & my$BaseOptions<>;

  /**
   * 监听 iBeacon 服务的状态变化
   */
  declare function my$onBeaconServiceChange(
    options: my$BeaconServiceChangeOptions
  ): void;

  declare type my$RsaOptions = {
    /**
     * 使用rsa加密还是rsa解密，encrypt加密，decrypt解密
     */
    action: string,

    /**
     * 要处理的文本，加密为原始文本，解密为Base64编码格式文本
     */
    text: string,

    /**
     * rsa秘钥，加密使用公钥，解密使用私钥
     */
    key: string,
    success?: (res: {
      /**
       * 经过处理过后得到的文本，加密为Base64编码文本，解密为原始文本
       */
      text: string
    }) => void
  } & my$BaseOptions<>;

  /**
   * 非对称加密。
   */
  declare function my$rsa(options: my$RsaOptions): void;

  /**
   * 自定义分析数据的上报接口。使用前需要在小程序管理后台的事件管理中新建事件，并配置好事件名和字段。
   * @param eventName 自定义事件名，需申请
   * @param data 上报的数据
   */
  declare function my$reportAnalytics(eventName: string, data: any): void;

  /**
   * 隐藏分享按钮。
   */
  declare function my$hideShareMenu(options?: my$BaseOptions<>): void;

  declare interface my$LaunchOptions {
    /**
     * 打开小程序的路径
     */
    path: string;

    /**
     * 打开小程序的query
     */
    query: { [key: string]: any };

    /**
     * 打开小程序的[场景值]
     */
    scene: number;

    /**
     * shareTicket，详见 获取更多[转发信息]
     */
    shareTicket: string;

    /**
     * 当场景为由从另一个小程序或公众号或App打开时，返回此字段
     */
    referrerInfo: { [key: string]: any };

    /**
     * 来源小程序或公众号或App的 appId，详见下方说明
     */
    "referrerInfo.appId": string;

    /**
     * 来源小程序传过来的数据，scene=1037或1038时支持
     */
    "referrerInfo.extraData": { [key: string]: any };
  }

  declare interface my$AppOptions {
    /**
     * 监听小程序初始化。
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     * 生命周期函数
     */
    onLaunch?: (option: my$LaunchOptions) => void;

    /**
     * 监听小程序显示。
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     * 生命周期函数
     */
    onShow?: (option: my$LaunchOptions) => void;

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
    [key: string]: any;
  }

  declare interface my$CreateIntersectionObserverOption {
    thresholds?: [number, number];
    initialRatio?: number;
    selectAll?: boolean;
  }

  declare interface my$Margins {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  }

  declare interface my$ObserveResponse {
    id: string;
    dataset: any;
    time: number;
    intersectionRatio: number;
    boundingClientRect: my$RectArea;
    intersectionRect: my$RectArea;
    relativeRect: my$RectArea;
  }

  declare interface my$IntersectionObserver {
    relativeTo(
      selector?: string,
      margins?: my$Margins
    ): my$IntersectionObserver;
    relativeToViewport(margins?: my$Margins): my$IntersectionObserver;
    observe(
      selector?: string,
      callback?: (response: my$ObserveResponse) => void
    ): my$IntersectionObserver;
    disconnect(): void;
  }

  declare interface my$ComponentRelation {
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
    linked?: (target: my$Component) => void;

    /**
     * 关系生命周期函数，当关系在页面节点树中发生改变时触发，触发时机在组件moved生命周期之后
     */
    linkChanged?: (target: my$Component) => void;

    /**
     * 关系生命周期函数，当关系脱离页面节点树时触发，触发时机在组件detached生命周期之后
     */
    unlinked?: (target: my$Component) => void;
  }

  declare interface my$Component {
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
    data: any;

    /**
     * 组件数据，包括内部数据和属性值（与 data 一致）
     */
    properties: any;

    /**
     * 将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
     * 1. 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
     * 2. 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
     * 3. 请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题
     * @param data object 以 key，value 的形式表示将 this.data 中的 key 对应的值改变成 value
     * @param callback callback 是一个回调函数，在这次setData对界面渲染完毕后调用
     */
    setData(data: any, callback?: () => void): void;
    hasBehavior(behavior: any): boolean;
    triggerEvent(
      name: string,
      details?: any,
      options?: $Shape<{
        bubbles: boolean,
        composed: boolean,
        capturePhase: boolean
      }>
    ): void;
    createSelectorQuery(): my$SelectorQuery;
    createIntersectionObserver(
      options?: my$CreateIntersectionObserverOption
    ): my$IntersectionObserver;

    /**
     * 使用选择器选择组件实例节点
     * 返回匹配到的第一个组件实例对象
     */
    selectComponent(selector: string): my$Component;

    /**
     * selector  使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
     */
    selectAllComponents(selector: string): my$Component[];
    getRelationNodes(relationKey: string): my$ComponentRelation[];
  }

  declare type my$Page = {
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
     */
    pageScrollTo(option?: my$PageScrollToOptions): void,
    [key: string]: any
  } & my$Component;

  declare interface my$App {
    data: any;

    /**
     * 获取当前页面
     */
    getCurrentPage(): my$Page;
    [key: string]: any;
  }

  declare interface my$EventTarget {
    id: string;
    tagName: string;
    dataset: {
      [name: string]: string
    };
  }

  declare type my$TouchEventType =
    | "tap"
    | "touchstart"
    | "touchmove"
    | "touchcancel"
    | "touchend"
    | "touchforcechange";

  declare type my$TransitionEventType =
    | "transitionend"
    | "animationstart"
    | "animationiteration"
    | "animationend";

  declare type my$EventType =
    | "input"
    | "form"
    | "submit"
    | "scroll"
    | my$TouchEventType
    | my$TransitionEventType
    | "tap"
    | "longpress";

  declare interface my$BaseEvent<T: string, Detail> {
    type: T;
    timeStamp: number;
    currentTarget: my$EventTarget;
    target: my$EventTarget;
    detail: Detail;
  }

  declare interface my$Options {
    query: any;
    path: string;
  }

  declare function my$postMessage(param: any): void;

  declare type my$onMessageFun = (p: any) => void;

  declare var my$onMessage: my$onMessageFun;
  declare function App(app: $Shape<my$AppOptions & my$App>): void;

  declare function getApp(): my$App;

  declare function Behavior(options?: any): my$Component;

  declare function Component(options?: any): my$Component;

  declare function Page(options: $Shape<my$PageOptions & my$Page>): void;

  declare function getCurrentPages(): my$Page[];
}
