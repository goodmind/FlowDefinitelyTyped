declare module "photonui" {
  declare var npm$namespace$photonui: {
    domInsert: typeof photonui$domInsert,
    getWidget: typeof photonui$getWidget
  };

  declare var npm$namespace$Helpers: {
    escapeHtml: typeof Helpers$escapeHtml,
    uuid4: typeof Helpers$uuid4,
    cleanNode: typeof Helpers$cleanNode,
    getAbsolutePosition: typeof Helpers$getAbsolutePosition,
    numberToCssSize: typeof Helpers$numberToCssSize
  };
  declare function Helpers$escapeHtml(string: string): void;

  declare function Helpers$uuid4(): string;

  declare function Helpers$cleanNode(node: HTMLElement): void;

  declare function Helpers$getAbsolutePosition(
    element: HTMLElement | string
  ): {
    x: number,
    y: number
  };

  declare function Helpers$numberToCssSize(
    value: number,
    defaultValue?: number,
    nullValue?: string
  ): string;

  declare class photonui$Base {
    constructor(params?: {
      [key: string]: any
    }): this;
    destroy(): void;
    registerCallback(
      id: string,
      wEvent: string,
      callback: Function,
      thisArg: any
    ): void;
    removeCallback(id: string): void;
  }

  declare class photonui$Widget mixins photonui$Base {
    absolutePosition: {
      x: number,
      y: number
    };
    contextMenu: photonui$PopupWindow;
    contextMenuName: string;
    html: HTMLElement;
    layoutOptions: {
      [key: string]: any
    };
    name: string;
    offsetWidth: number;
    offsetHeight: number;
    parent: photonui$Widget;
    parentName: string;
    tooltip: string;
    visible: boolean;
    show(): void;
    hide(): void;
    unparent(): void;
    addClass(className: string): void;
    removeClass(className: string): void;
    static getWidget(name: string): photonui$Widget;
    static domInsert(
      widget: photonui$Widget,
      element?: HTMLElement | string
    ): void;
  }

  declare function photonui$domInsert(
    widget: photonui$Widget,
    element?: HTMLElement | string
  ): void;

  declare function photonui$getWidget(name: string): photonui$Widget;

  declare class photonui$FileManager mixins photonui$Base {
    acceptedExts: string[];
    acceptedMimes: string[];
    dropZone: HTMLElement;
    multiselect: boolean;
    open(): void;
  }

  declare class photonui$Translation mixins photonui$Base {
    locale: string;
    addCatalogs(catalogs: {
      [key: string]: any
    }): void;
    guessUserLanguage(): string;
    gettext(
      string: string,
      replacements?: {
        [key: string]: string
      }
    ): string;
    lazyGettext(
      string: string,
      replacements?: {
        [key: string]: string
      }
    ): string;
    enableDomScan(enable: boolean): void;
    updateDomTranslation(): void;
  }

  declare class photonui$AccelManager mixins photonui$Base {
    addAccel(
      id: string,
      keys: string,
      callback: Function,
      safe?: boolean
    ): void;
    removeAccel(id: string): void;
  }

  declare class photonui$MouseManager mixins photonui$Base {
    constructor(params?: {
      [key: string]: any
    }): this;
    constructor(
      element?: photonui$Widget | HTMLElement,
      params?: {
        [key: string]: any
      }
    ): this;
    element: HTMLElement;
    threshold: number;
    action: string;
    btnLeft: boolean;
    btnMiddle: boolean;
    btnRight: boolean;
    button: string;
    pageX: number;
    pageY: number;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
  }

  declare class photonui$BaseIcon mixins photonui$Widget {}

  declare class photonui$FAIcon mixins photonui$BaseIcon {
    constructor(params?: {
      [key: string]: any
    }): this;
    constructor(
      name: string,
      params?: {
        [key: string]: any
      }
    ): this;
    color: string;
    iconName: string;
    size: string;
  }

  declare class photonui$SpriteIcon mixins photonui$BaseIcon {
    constructor(params?: {
      [key: string]: any
    }): this;
    constructor(
      name: string,
      params?: {
        [key: string]: any
      }
    ): this;
    icon: string;
    iconName: string;
    spriteSheetName: string;
  }

  declare class photonui$Image mixins photonui$Widget {
    width: number;
    height: number;
    url: string;
  }

  declare class photonui$SpriteSheet mixins photonui$Base {
    name: string;
    imageUrl: string;
    size: string;
    icons: {
      [iconName: string]: number[]
    };
    addIcon(iconName: string, x: number, y: number): void;
    removeIcon(iconName: string): void;
    getIconPosition(
      iconName: string
    ): {
      x: number,
      y: number
    };
    getIconCSS(iconName: string): string;
    static getSpriteSheet(name: string): photonui$SpriteSheet;
  }

  declare class photonui$Canvas mixins photonui$Widget {
    canvas: HTMLElement;
    interactiveMode: HTMLElement;
    width: number;
    height: number;
    getContext(contextId: string): any;
    setContext(contextId: string): void;
    supportsContext(contextId: string): boolean;
    toBlod(imageFormat: string): any;
    toBlodHD(imageFormat: string): any;
    toDataUrl(imageFormat: string): string;
    toDataUrlHD(imageFormat: string): string;
    transferControlToProxy(): void;
  }

  declare class photonui$Label mixins photonui$Widget {
    constructor(params?: {
      [key: string]: any
    }): this;
    constructor(
      name: string,
      params?: {
        [key: string]: any
      }
    ): this;
    forInput: photonui$Field | photonui$CheckBox;
    forInputName: string;
    text: string;
    textAlign: string;
  }

  declare class photonui$Text mixins photonui$Widget {
    rawHtml: string;
    text: string;
  }

  declare class photonui$ProgressBar mixins photonui$Widget {
    orientation: string;
    pulsate: boolean;
    textVisible: boolean;
    value: number;
  }

  declare class photonui$Separator mixins photonui$Widget {
    orientation: string;
  }

  declare class photonui$Button mixins photonui$Widget {
    appearance: string;
    buttonColor: string;
    leftIconName: string;
    leftIcon: photonui$BaseIcon;
    leftIconVisible: boolean;
    rightIconName: string;
    rightIcon: photonui$BaseIcon;
    rightIconVisible: boolean;
    text: string;
    textVisible: boolean;
  }

  declare class photonui$ColorButton mixins photonui$Widget {
    color: photonui$Color;
    dialogOnly: boolean;
    value: string;
  }

  declare class photonui$CheckBox mixins photonui$Widget {
    value: boolean;
  }

  declare class photonui$Switch mixins photonui$CheckBox {}

  declare class photonui$ToggleButton mixins photonui$CheckBox {}

  declare class photonui$Color mixins photonui$Base {
    constructor(color: string): this;
    constructor(params?: {
      [key: string]: any
    }): this;
    hexString: string;
    rgbString: string;
    rgbaString: string;
    red: number;
    green: number;
    blue: number;
    alpha: number;
    hue: number;
    saturation: number;
    brightness: number;
    setRGB(red: number, green: number, blue: number): void;
    getRGB(): number[];
    setRGBA(red: number, green: number, blue: number, alpha: number): void;
    getRGBA(): number[];
    setHSB(hue: number, saturation: number, brightness: number): void;
  }

  declare class photonui$ColorPalette mixins photonui$Widget {
    color: photonui$Color;
    palette: Array<string[]>;
    value: string;
    static palette: Array<string[]>;
  }

  declare class photonui$ColorPicker mixins photonui$Widget {
    color: photonui$Color;
    value: string;
  }

  declare class photonui$Field mixins photonui$Widget {
    placeholder: string;
    value: boolean;
  }

  declare class photonui$NumericField mixins photonui$Field {
    min: number;
    max: number;
    step: number;
    decimalDigits: number;
    decimalSymbol: string;
  }

  declare class photonui$Slider mixins photonui$NumericField {
    fieldVisible: boolean;
  }

  declare class photonui$TextAreaField mixins photonui$Field {
    cols: number;
    rows: number;
  }

  declare class photonui$TextField mixins photonui$Field {
    type: string;
  }

  declare class photonui$Select mixins photonui$Widget {
    children: photonui$Widget[];
    childrenNames: string[];
    iconVisible: boolean;
    placeholder: string;
    popupWidth: number;
    popupHeight: number;
    popupMaxWidth: number;
    popupMinWidth: number;
    popupMaxHeight: number;
    popupMinHeight: number;
    popupOffsetWidth: number;
    popupOffsetHeight: number;
    popupPadding: number;
    value: any;
    addChild(widget: photonui$Widget, layoutOptions?: any): void;
  }

  declare class photonui$FontSelect mixins photonui$Select {
    fonts: string[];
    addFont(fontName: string): void;
  }

  declare class photonui$Container mixins photonui$Widget {
    child: photonui$Widget;
    childName: string;
    containerNode: HTMLElement;
    horizontalChildExpansion: boolean;
    verticalChildExpansion: boolean;
    removeChild(widget: photonui$Widget): void;
  }

  declare class photonui$Layout mixins photonui$Container {
    children: photonui$Widget[];
    childrenNames: string[];
    addChild(
      widget: photonui$Widget,
      layoutOptions?: {
        [key: string]: any
      }
    ): void;
    empty(): void;
  }

  declare class photonui$BoxLayout mixins photonui$Layout {
    horizontalPadding: number;
    verticalPadding: number;
    orientation: string;
    spacing: number;
  }

  declare class photonui$FluidLayout mixins photonui$Layout {
    horizontalPadding: number;
    verticalPadding: number;
  }

  declare class photonui$GridLayout mixins photonui$Layout {
    horizontalPadding: number;
    verticalPadding: number;
    horizontalSpacing: number;
    verticalSpacing: number;
  }

  declare class photonui$Menu mixins photonui$Layout {
    iconVisible: boolean;
  }

  declare class photonui$MenuItem mixins photonui$Menu {
    active: boolean;
    icon: photonui$BaseIcon;
    iconName: string;
    text: string;
    value: any;
  }

  declare class photonui$SubMenuItem mixins photonui$MenuItem {
    menu: photonui$Menu;
    menuName: string;
  }

  declare class photonui$Viewport mixins photonui$Container {
    width: number;
    minWidth: number;
    maxWidth: number;
    height: number;
    minHeight: number;
    maxHeight: number;
    padding: number;
    horizontalScrollbar: boolean;
    verticalScrollbar: boolean;
  }

  declare class photonui$BaseWindow mixins photonui$Container {
    width: number;
    minWidth: number;
    maxWidth: number;
    height: number;
    minHeight: number;
    maxHeight: number;
    padding: number;
    position: {
      x: number,
      y: number
    };
    x: number;
    y: number;
    center(): void;
  }

  declare class photonui$PopupWindow mixins photonui$BaseWindow {
    popupXY(x: number, y: number): void;
    popupWidget(widget: photonui$Widget): void;
  }

  declare class photonui$PopupMenu mixins photonui$PopupWindow {}

  declare class photonui$Window mixins photonui$BaseWindow {
    closeButtonVisible: boolean;
    modal: boolean;
    movable: boolean;
    title: string;
    moveToFront(): void;
    moveToBack(): void;
  }

  declare class photonui$Dialog mixins photonui$Window {
    buttons: photonui$Widget[];
    buttonNames: string[];
    addButton(widget: photonui$Widget, layoutOptions: any): void;
    removeButton(widget: photonui$Widget): void;
  }

  declare class photonui$ColorPickerDialog mixins photonui$Dialog {
    color: photonui$Color;
  }

  declare class photonui$TabItem mixins photonui$Container {
    tabHtml: HTMLElement;
    title: string;
  }

  declare class photonui$TabLayout mixins photonui$Layout {
    activeTab: photonui$Widget;
    activeTabName: string;
    padding: number;
    tabsPosition: string;
  }
  declare function _(
    string: string,
    replacements?: {
      [key: string]: string
    }
  ): string;
}
