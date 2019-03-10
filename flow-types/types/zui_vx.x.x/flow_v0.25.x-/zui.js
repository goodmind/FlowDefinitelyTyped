declare module "zui" {
  declare type CallBack = () => void;

  /**
   * bootstrap
   */
  declare interface ModalOptions {
    backdrop?: boolean | string;
    keyboard?: boolean;
    show?: boolean;
    remote?: string;
  }
  declare interface ModalOptionsBackdropString {
    backdrop?: string;
    keyboard?: boolean;
    show?: boolean;
    remote?: string;
  }
  declare interface ScrollSpyOptions {
    offset?: number;
    target?: string;
  }
  declare interface TooltipOptions {
    animation?: boolean;
    html?: boolean;
    placement?: string | CallBack;
    selector?: string;
    title?: string | CallBack;
    trigger?: string;
    template?: string;
    delay?: number | { [key: string]: any };
    container?: string | boolean;
    viewport?: string | CallBack | { [key: string]: any };
  }
  declare interface PopoverOptions {
    animation?: boolean;
    html?: boolean;
    placement?: string | CallBack;
    selector?: string;
    trigger?: string;
    title?: string | CallBack;
    template?: string;
    content?: any;
    delay?: number | { [key: string]: any };
    container?: string | boolean;
    viewport?: string | CallBack | { [key: string]: any };
  }
  declare interface CollapseOptions {
    parent?: any;
    toggle?: boolean;
  }
  declare interface CarouselOptions {
    interval?: number;
    pause?: string;
    wrap?: boolean;
    keyboard?: boolean;
  }
  declare interface TypeaheadOptions {
    source?: any;
    items?: number;
    minLength?: number;
    matcher?: (item: any) => boolean;
    sorter?: (items: any[]) => any[];
    updater?: (item: any) => any;
    highlighter?: (item: any) => string;
  }
  declare interface AffixOptions {
    offset?: number | CallBack | { [key: string]: any };
    target?: any;
  }
  declare interface TransitionEventNames {
    end: string;
  }
  declare interface JQuery {
    modal(options?: ModalOptions | ModalOptionsBackdropString): JQuery;
    modal(command: string): JQuery;
    dropdown(command?: string): JQuery;
    scrollspy(options?: ScrollSpyOptions | string): JQuery;
    tab(command?: string): JQuery;
    tooltip(options?: TooltipOptions): JQuery;
    tooltip(command: string, params?: string): JQuery;
    popover(options?: PopoverOptions | string): JQuery;
    alert(command?: string): JQuery;
    button(command?: string): JQuery;
    collapse(options?: CollapseOptions | string): JQuery;
    carousel(options?: CarouselOptions | string): JQuery;
    typeahead(options?: TypeaheadOptions): JQuery;
    affix(options?: AffixOptions): JQuery;
    emulateTransitionEnd(duration: number): JQuery;
    datetimepicker(options?: DatetimepickerOptions): JQuery;
    data(key: "DateTimePicker"): Datetimepicker;
    modalTrigger(option?: ModalTriggerOption): JQuery;
    data(value: string): JQuery;
    draggable(option: DraggableOption | string): JQuery;
    droppable(option: DroppableOption | string): JQuery;
    sortable(option?: SortableOption | string): JQuery;
    selectable(option?: SelectableOption): JQuery;
    imgCutter(option: ImageCutterOption): JQuery;
    data(cmd: string): ImageCutter;
    tree(option?: TreeMenuOption): JQuery;
    datatable(option?: DataTableOption): JQuery;
    datatable(
      command: string,
      optionOrData: DataTableOption | DataTableData
    ): JQuery;
    uploader(option: UploaderOption): JQuery;
  }
  declare interface JQuerySupport {
    transition: boolean | TransitionEventNames;
  }

  /**
   * datetime picker
   */
  declare type DatetimepickerChangeEventObject = {
    oldDate: any
  } & DatetimepickerEventObject;

  declare type DatetimepickerEventObject = {
    date: any
  } & JQueryEventObject;

  declare interface DatetimepickerIcons {
    time?: string;
    date?: string;
    up?: string;
    down?: string;
  }
  declare interface DatetimepickerOptions {
    weekStart?: number;
    todayBtn?: number | boolean;
    autoclose?: number | boolean;
    todayHighlight?: number | boolean;
    startView?: number;
    forceParse?: number | boolean;
    showMeridian?: boolean | number;
    minView?: number;
    maxView?: number;
    pickDate?: boolean;
    pickTime?: boolean;
    useMinutes?: boolean;
    useSeconds?: boolean;
    useCurrent?: boolean;
    minuteStepping?: number;
    minDate?: Date | string | any;
    maxDate?: Date | string | any;
    showToday?: boolean;
    collapse?: boolean;
    language?: string;
    defaultDate?: Date | string | any;
    disabledDates?: Array<Date | string | { [key: string]: any }>;
    enabledDates?: Array<Date | string | { [key: string]: any }>;
    icons?: DatetimepickerIcons;
    useStrict?: boolean;
    direction?: string;
    sideBySide?: boolean;
    daysOfWeekDisabled?: number[];
    calendarWeeks?: boolean;
    format?: string | boolean;
    locale?: string;
    showTodayButton?: boolean;
    viewMode?: string;
    inline?: boolean;
    toolbarPlacement?: string;
    showClear?: boolean;
    ignoreReadonly?: boolean;
  }
  declare interface Datetimepicker {
    date(date: Date | string | { [key: string]: any }): void;
    date(): { [key: string]: any };
    minDate(date: Date | string | { [key: string]: any }): void;
    minDate(): boolean | { [key: string]: any };
    maxDate(date: Date | string | { [key: string]: any }): void;
    maxDate(): boolean | { [key: string]: any };
    show(): void;
    disable(): void;
    enable(): void;
    destroy(): void;
    toggle(): void;
  }

  /**
   * store
   */
  declare interface StoreStatic {
    enable: boolean;
    storage: any;
    length(): number;
    remove(key: string): any;
    get<T>(key: string): T;
    set<T>(key: string, value?: T): any;
    key(index: number): string;
    forEach<T>(cb: (key: string, value: T) => any): any;
    serialize(value: any): string;
    deserialize<T>(value: string): T;
    getAll<T>(): T;
    removeItem(key: string): any;
    getItem(key: string): string;
    setItem(key: string, value: any): any;
    clear(): void;
    page: any;
    pageGet(key: string): any;
    pageSet(key: string, value: any): any;
    pageRemove(key: string): any;
    pageSave(): any;
    pageClear(): any;
  }

  /**
   * messager
   */

  declare var MessagerTypeEnum: {|
    +default: 0, // 0
    +primary: 1, // 1
    +success: 2, // 2
    +info: 3, // 3
    +warning: 4, // 4
    +danger: 5, // 5
    +important: 6, // 6
    +special: 7 // 7
  |};

  declare interface Action {
    name?: string;
    icon?: string;
    text?: string;
    html?: string;
    action?: ActionFunc;
  }
  declare type ActionFunc = () => boolean;
  declare type OnActionFunc = (
    name: string,
    action: string,
    messager: Messager
  ) => any;
  declare interface MessagerOption {
    type?: $Values<typeof MessagerTypeEnum> | string;
    placement?: string;
    time?: number;
    message?: string;
    parent?: string;
    icon?: string;
    close?: boolean;
    fade?: boolean;
    scale?: boolean;
    actions?: Action[];
    onAction?: OnActionFunc;
    cssClass?: string;
    contentClass?: string;
    show?: boolean;
  }
  declare interface Messager {
    show(cb?: CallBack): any;
    show(message: string, cb?: CallBack): any;
    hide(cb?: CallBack): any;
  }
  declare interface MessagerStatic {
    new(option?: MessagerOption): Messager;
    new(message: string, option?: MessagerOption): Messager;
  }
  declare interface ZuiStatic {
    messager: Messager;
    Messager: MessagerStatic;
    store: StoreStatic;
    ModalTrigger: ModalTriggerStatic;
    modalTrigger: ModalTrigger;
    Color: ColorStatic;
    colorset: ColorSet;
  }

  /**
   * modal trigger
   */
  declare interface ModalTriggerOption {
    name?: string;
    className?: string;
    type?: string;
    url?: string;
    remote?: string;
    iframe?: string;
    size?: string;
    width?: string;
    height?: string;
    showHeader?: boolean;
    title?: string;
    icon?: string;
    fade?: boolean;
    postion?: string;
    backdrop?: boolean;
    keyboard?: boolean;
    moveable?: boolean;
    rememberPos?: boolean;
    waittime?: number;
    loadingIcon?: string;
    show?: () => any;
    onShow?: () => any;
    onHide?: () => any;
    hidden?: () => any;
    loaded?: () => any;
    broken?: () => any;
  }
  declare interface ModalTrigger {
    show(option?: ModalTriggerOption): any;
    close(): any;
    toggle(option?: ModalTriggerOption): any;
    adjustPostion(option?: ModalTriggerOption): any;
  }
  declare interface ModalTriggerStatic {
    new(option?: ModalTriggerOption): ModalTrigger;
  }
  declare interface JQueryStatic {
    zui: ZuiStatic;
  }

  /**
   * color
   */
  declare interface Color {
    rgb(rgbaColor?: string): { [key: string]: any };
    hue(hue: string): string;
    darken(percent: number): string;
    lighten(percent: number): string;
    clone(): Color;
    fade(percent: number): any;
    toHsl(): { [key: string]: any };
    luma(): string;
    saturate(): string;
    contrast(dark: string, light: string, threshold: number): string;
    hexStr(): string;
    toCssStr(): string;
  }
  declare interface ColorStatic {
    new(r: number, g: number, b: number, a?: number): Color;
    new(hexStrOrrgbColorOrRgbaColorOrName?: string): Color;
    isColor(str: string): boolean;
    names: string[];
  }
  declare interface ColorSet {
    get(name: string): Color;
  }

  /**
   * draggable
   */
  declare interface Postion {
    left: number;
    top: number;
    width: number;
    height: number;
    left: number;
    top: number;
    width: number;
    height: number;
  }
  declare interface DraggableEvent {
    event?: { [key: string]: any };
    element?: JQuery | { [key: string]: any };
    target?: JQuery | { [key: string]: any };
    pos?: Postion;
    offset?: { [key: string]: any };
    smallOffset?: { [key: string]: any };
    startOffset?: { [key: string]: any };
  }
  declare interface DraggableOption {
    container?: string;
    move?: boolean;
    selector?: string;
    handle?: string;
    mouseButton?: string;
    stopPropagation?: boolean;
    before?: (e?: DraggableEvent) => boolean;
    drag?: (e: DraggableEvent) => void;
    finish?: (e: DraggableEvent) => void;
  }
  declare interface DroppableEvent {
    event?: { [key: string]: any };
    element?: JQuery;
    target?: JQuery;
    pos?: Postion;
    offset?: { [key: string]: any };
    smallOffset?: { [key: string]: any };
    startOffset?: { [key: string]: any };
  }
  declare interface DroppableOption {
    container?: string;
    selector?: string;
    handle?: string;
    target: JQuery | string;
    flex?: boolean;
    deviation?: number;
    sensorOffsetX?: number;
    sensorOffsetY?: number;
    before?: (e?: DroppableEvent) => boolean;
    start?: (e?: DroppableEvent) => void;
    drag?: (e: DroppableEvent) => void;
    beforeDrop?: (e: DroppableEvent) => boolean;
    drop?: (e: DroppableEvent) => void;
    finish?: (e: DroppableEvent) => void;
    always?: (e: DroppableEvent) => void;
  }

  /**
   * sortable
   */
  declare type SortEvent = {
    list: Array<JQuery | { [key: string]: any }>,
    element: JQuery | { [key: string]: any },
    sorter: {
      index: number,
      sortUp: boolean
    }
  } & Event;

  declare interface SortableOption {
    selector?: string;
    trigger?: string;
    reverse?: boolean;
    dragCssClass?: string;
    sortingClass?: string;
    mouseButton?: string;
    start?: (e?: SortEvent) => void;
    order?: (e?: SortEvent) => void;
    finish?: (e?: SortEvent) => void;
  }

  /**
   * selectable
   */
  declare type SelectableEvent = {
    selections: Map<number, boolean>,
    selected: number[]
  } & Event;

  declare interface SelectableOption {
    selector?: string;
    trigger?: string;
    rangeStyle?: string | { [key: string]: any };
    clickBehavior?: string;
    mouseButton?: string;
    ignoreVal?: number;
    start?: (e?: SelectableEvent) => boolean;
    finish?: (e?: SelectableEvent) => void;
    select?: (e?: SelectableEvent) => void;
    unselect?: (e?: SelectableEvent) => void;
  }
  declare interface Selectable {
    toggle(elementOrId?: string | { [key: string]: any } | JQuery): any;
    select(elementOrId?: string | { [key: string]: any } | JQuery): any;
    unselect(elementOrId?: string | { [key: string]: any } | JQuery): any;
  }

  /**
   * image cutter
   */
  declare interface ImageCutterOption {
    coverColor?: string;
    coverOpacity?: number;
    defaultWidth?: number;
    defaultHeight?: number;
    fixedRatio?: boolean;
    minWidth?: number;
    minHeight?: number;
    post?: string;
    get?: string;
  }
  declare interface ImageData {
    originWidth: number;
    originHeight: number;
    scaled: boolean;
    scaleHeight: number;
    scaleWidth: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
  }
  declare interface ImageCutter {
    resetImage(img: string): any;
    getData(): ImageData;
  }

  /**
   * treeview
   */
  declare interface TreeNode {
    title?: string;
    url?: string;
    html?: string;
    children?: TreeNode[];
    open?: boolean;
    id?: string;
  }
  declare interface TreeMenuOption {
    animate?: boolean;
    initialState?: string;
    data?: TreeNode[];
    itemCreator?: (li: JQuery | { [key: string]: any }, item: TreeNode) => any;
    itemWrapper?: boolean;
  }
  declare interface TreeMenu {
    expand(params?: JQuery, disableAnimate?: boolean): void;
    collapse(params?: JQuery, disableAnimate?: boolean): void;
    toggle(params?: JQuery, disableAnimate?: boolean): void;
    show(params?: JQuery, disableAnimate?: boolean): void;
    add(
      element: JQuery,
      items: TreeNode[],
      expand?: boolean,
      disabledAnimate?: boolean
    ): void;
    toData($ul?: JQuery, filter?: string): { [key: string]: any };
    reload(data: TreeNode[]): void;
    remove(): void;
    empty(): void;
  }
  declare interface Column {
    width?: number;
    text?: string;
    type?: string;
    flex?: boolean;
    colClass?: string;
    sort?: string;
    ignore?: boolean;
  }
  declare interface Row {
    id?: string;
    checked?: boolean;
    cssClass?: string;
    css?: string;
    data?: [number, string, string];
  }
  declare interface DataTableData {
    rows: Row[];
    cols: Column[];
  }
  declare type AfterLoadEvent = {
    data: DataTableData
  } & Event;

  declare type SizeChangeEvent = {
    changes: {
      change: string,
      oldWidth: number,
      newWidth: number,
      colIndex: number
    }
  } & Event;

  declare type ChecksChangeEvent = {
    checks: {
      checkedAll: boolean,
      checks: number[]
    }
  } & Event;

  declare interface DataTableOption {
    checkable?: boolean;
    checkByClickRow?: boolean;
    checkedClass?: string;
    storage?: boolean;
    sortable?: boolean;
    fixedHeader?: boolean;
    fixedHeaderOffset?: number;
    fixedLeftWidth?: string;
    fixedRightWidth?: string;
    flexHeadDrag?: boolean;
    scrollPos?: string;
    rowHover?: boolean;
    colHover?: boolean;
    fixCellHeight?: boolean;
    minColWidth?: number;
    minFixedLeftWidth?: number;
    minFixedRightWidth?: number;
    minFlexAreaWidth?: number;
    selectable?: boolean | { [key: string]: any };
    afterLoad?: (event: AfterLoadEvent) => void;
    ready?: () => void;
    sort?: (event: SortEvent) => void;
    sizeChanged?: (event: SizeChangeEvent) => void;
    checksChanged?: (event: ChecksChangeEvent) => void;
  }
  declare interface DataTable {
    checks: {
      checkedAll: boolean,
      checks: number[]
    };
  }

  /**
   * uploader
   */
  declare interface UploaderOption {
    drop_element?: string;
    browse_button?: string;
    url: string;
    qiniu?: { [key: string]: any };
    filters?: {
      mime_type: Array<{
        title?: string,
        extensions?: string
      }>,
      max_file_size?: string,
      prevent_duplicates?: string
    };
    fileList?: string;
    fileTemplate?: string;
    fileFormater?: (
      $file: JQuery,
      file: FileObj,
      status: $Values<typeof STATUS>
    ) => void;
    fileIconCreator?: (
      fileType: string,
      file: FileObj,
      uploader: Uploader
    ) => void;
    staticFiles?: Array<{
      id?: string,
      name?: string,
      type?: string,
      size?: string,
      origSize?: string,
      lastModifiedDate?: Date
    }>;
    rename?: boolean;
    renameExtension?: boolean;
    renameByClick?: boolean;
    autoUpload?: boolean;
    browseByClickList?: boolean;
    dropPlaceholder?: boolean;
    previewImageIcon?: boolean;
    sendFileName?: boolean;
    sendFileId?: boolean;
    responseHandler?: boolean | CallBack;
    limitFilesCount?: boolean | number;
    deleteConfirm?: boolean | string;
    removeUploaded?: boolean;
    statusCreator?: (
      total: UploadProgress,
      state: $Values<typeof STATUS>,
      uploader: Uploader
    ) => void;
    previewImageSize?: {
      width: number,
      height: number
    };
    uploadedMessage?: boolean;
    deleteActionOnDone?: boolean;
    renameActionOnDone?: boolean;
    headers?: { [key: string]: any };
    multipart?: boolean;
    multipart_params?: { [key: string]: any } | CallBack;
    max_retries?: number;
    chunk_size?: string;
    resize?: {
      width?: number,
      height?: number,
      crop?: boolean,
      quuality?: number,
      preserve_headers?: boolean
    };
    multi_selection?: boolean;
    unique_names?: boolean;
    runtimes?: string;
    file_data_name?: string;
    flash_swf_url?: string;
    silverlight_xap_url?: string;
    lang?: string;
    onInit?: () => void;
    onFilesAdded?: (fiels: FileObj[]) => void;
    onUploadProgress?: (file: FileObj) => void;
    onFileUploaded?: (file: FileObj, responseObject: ResponseObject) => void;
    onUploadComplete?: (files: FileObj[]) => void;
    onFilesRemoved?: (files: FileObj[]) => void;
    onChunkUploaded?: (file: FileObj, responseObject: ResponseObject) => void;
    onUploadFile?: (file: FileObj) => void;
    onBeforeUpload?: (file: FileObj) => void;
    onStateChanged?: (status: $Values<typeof STATUS>) => void;
    onQueueChanged?: () => void;
    onError?: (error: {
      error: $Values<typeof ERRORS>,
      message: string,
      file: FileObj
    }) => void;
  }
  declare interface ResponseObject {
    response?: string;
    responseHeaders?: { [key: string]: any };
    status?: number;
    offset?: number;
    total?: number;
  }

  declare var STATUS: {|
    +STOPPED: 1, // 1
    +STARTED: 2, // 2
    +QUEUED: 1, // 1
    +UPLOADING: 2, // 2
    +FAILED: 3, // 3
    +DONE: 4 // 4
  |};

  declare interface FileObj {
    id?: string;
    name?: string;
    type?: string;
    ext?: string;
    isImage?: boolean;
    previewImage?: string;
    size?: number;
    origSize?: number;
    loaded?: number;
    percent?: number;
    status?: $Values<typeof STATUS>;
    lastModifiedDate?: Date;
    getNative(): File;
    destroy(): void;
  }
  declare interface UploadProgress {
    size?: number;
    loaded?: number;
    uploaded?: number;
    failed?: number;
    queued?: number;
    percent?: number;
    bytesPerSec?: number;
  }

  declare var ERRORS: {|
    +GENERIC_ERROR: -100, // -100
    +HTTP_ERROR: -200, // -200
    +IO_ERROR: -300, // -300
    +SECURITY_ERROR: -400, // -400
    +INIT_ERROR: -500, // -500
    +FILE_SIZE_ERROR: -600, // -600
    +FILE_EXTENSION_ERROR: -601, // -601
    +FILE_DUPLICATE_ERROR: -602, // -602
    +IMAGE_FORMAT_ERROR: -700, // -700
    +IMAGE_MEMORY_ERROR: -701, // -701
    +IMAGE_DIMENSIONS_ERROR: -702 // -702
  |};

  declare interface Uploader {
    showMessage(message: string, type: string, time?: number): void;
    hideMessage(): void;
    start(): void;
    stop(): void;
    getState(): $Values<typeof STATUS>;
    isStarted(): boolean;
    isStopped(): boolean;
    getFiles(): FileObj[];
    getTotal(): UploadProgress;
    disableBrowse(disable: boolean): void;
    getFile(id: string): FileObj;
    showFile(file: FileObj | FileObj[]): void;
    removeFile(file: FileObj): void;
    destroy(): void;
    showStatus(): void;
  }
}
