declare module "photonui" {
  declare var npm$namespace$photonui: {
    domInsert: typeof photonui$domInsert,
    getWidget: typeof photonui$getWidget,

    Base: typeof photonui$Base,
    Widget: typeof photonui$Widget,
    FileManager: typeof photonui$FileManager,
    Translation: typeof photonui$Translation,
    AccelManager: typeof photonui$AccelManager,
    MouseManager: typeof photonui$MouseManager,
    BaseIcon: typeof photonui$BaseIcon,
    FAIcon: typeof photonui$FAIcon,
    SpriteIcon: typeof photonui$SpriteIcon,
    Image: typeof photonui$Image,
    SpriteSheet: typeof photonui$SpriteSheet,
    Canvas: typeof photonui$Canvas,
    Label: typeof photonui$Label,
    Text: typeof photonui$Text,
    ProgressBar: typeof photonui$ProgressBar,
    Separator: typeof photonui$Separator,
    Button: typeof photonui$Button,
    ColorButton: typeof photonui$ColorButton,
    CheckBox: typeof photonui$CheckBox,
    Switch: typeof photonui$Switch,
    ToggleButton: typeof photonui$ToggleButton,
    Color: typeof photonui$Color,
    ColorPalette: typeof photonui$ColorPalette,
    ColorPicker: typeof photonui$ColorPicker,
    Field: typeof photonui$Field,
    NumericField: typeof photonui$NumericField,
    Slider: typeof photonui$Slider,
    TextAreaField: typeof photonui$TextAreaField,
    TextField: typeof photonui$TextField,
    Select: typeof photonui$Select,
    FontSelect: typeof photonui$FontSelect,
    Container: typeof photonui$Container,
    Layout: typeof photonui$Layout,
    BoxLayout: typeof photonui$BoxLayout,
    FluidLayout: typeof photonui$FluidLayout,
    GridLayout: typeof photonui$GridLayout,
    Menu: typeof photonui$Menu,
    MenuItem: typeof photonui$MenuItem,
    SubMenuItem: typeof photonui$SubMenuItem,
    Viewport: typeof photonui$Viewport,
    BaseWindow: typeof photonui$BaseWindow,
    PopupWindow: typeof photonui$PopupWindow,
    PopupMenu: typeof photonui$PopupMenu,
    Window: typeof photonui$Window,
    Dialog: typeof photonui$Dialog,
    ColorPickerDialog: typeof photonui$ColorPickerDialog,
    TabItem: typeof photonui$TabItem,
    TabLayout: typeof photonui$TabLayout,
    Helpers: typeof npm$namespace$photonui$Helpers
  };

  declare var npm$namespace$photonui$Helpers: {
    escapeHtml: typeof photonui$Helpers$escapeHtml,
    uuid4: typeof photonui$Helpers$uuid4,
    cleanNode: typeof photonui$Helpers$cleanNode,
    getAbsolutePosition: typeof photonui$Helpers$getAbsolutePosition,
    numberToCssSize: typeof photonui$Helpers$numberToCssSize
  };
  declare function photonui$Helpers$escapeHtml(string: string): void;

  declare function photonui$Helpers$uuid4(): string;

  declare function photonui$Helpers$cleanNode(node: HTMLElement): void;

  declare function photonui$Helpers$getAbsolutePosition(
    element: HTMLElement | string
  ): {
    x: number,
    y: number
  };

  declare function photonui$Helpers$numberToCssSize(
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

  declare class photonui$Widget mixins Base {
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

  declare class photonui$FileManager mixins Base {
    acceptedExts: string[];
    acceptedMimes: string[];
    dropZone: HTMLElement;
    multiselect: boolean;
    open(): void;
  }

  declare class photonui$Translation mixins Base {
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

  declare class photonui$AccelManager mixins Base {
    addAccel(
      id: string,
      keys: string,
      callback: Function,
      safe?: boolean
    ): void;
    removeAccel(id: string): void;
  }

  declare class photonui$MouseManager mixins Base {
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

  declare class photonui$BaseIcon mixins Widget {}

  declare class photonui$FAIcon mixins BaseIcon {
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

  declare class photonui$SpriteIcon mixins BaseIcon {
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

  declare class photonui$Image mixins Widget {
    width: number;
    height: number;
    url: string;
  }

  declare class photonui$SpriteSheet mixins Base {
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

  declare class photonui$Canvas mixins Widget {
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

  declare class photonui$Label mixins Widget {
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

  declare class photonui$Text mixins Widget {
    rawHtml: string;
    text: string;
  }

  declare class photonui$ProgressBar mixins Widget {
    orientation: string;
    pulsate: boolean;
    textVisible: boolean;
    value: number;
  }

  declare class photonui$Separator mixins Widget {
    orientation: string;
  }

  declare class photonui$Button mixins Widget {
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

  declare class photonui$ColorButton mixins Widget {
    color: photonui$Color;
    dialogOnly: boolean;
    value: string;
  }

  declare class photonui$CheckBox mixins Widget {
    value: boolean;
  }

  declare class photonui$Switch mixins CheckBox {}

  declare class photonui$ToggleButton mixins CheckBox {}

  declare class photonui$Color mixins Base {
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

  declare class photonui$ColorPalette mixins Widget {
    color: photonui$Color;
    palette: Array<string[]>;
    value: string;
    static palette: Array<string[]>;
  }

  declare class photonui$ColorPicker mixins Widget {
    color: photonui$Color;
    value: string;
  }

  declare class photonui$Field mixins Widget {
    placeholder: string;
    value: boolean;
  }

  declare class photonui$NumericField mixins Field {
    min: number;
    max: number;
    step: number;
    decimalDigits: number;
    decimalSymbol: string;
  }

  declare class photonui$Slider mixins NumericField {
    fieldVisible: boolean;
  }

  declare class photonui$TextAreaField mixins Field {
    cols: number;
    rows: number;
  }

  declare class photonui$TextField mixins Field {
    type: string;
  }

  declare class photonui$Select mixins Widget {
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

  declare class photonui$FontSelect mixins Select {
    fonts: string[];
    addFont(fontName: string): void;
  }

  declare class photonui$Container mixins Widget {
    child: photonui$Widget;
    childName: string;
    containerNode: HTMLElement;
    horizontalChildExpansion: boolean;
    verticalChildExpansion: boolean;
    removeChild(widget: photonui$Widget): void;
  }

  declare class photonui$Layout mixins Container {
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

  declare class photonui$BoxLayout mixins Layout {
    horizontalPadding: number;
    verticalPadding: number;
    orientation: string;
    spacing: number;
  }

  declare class photonui$FluidLayout mixins Layout {
    horizontalPadding: number;
    verticalPadding: number;
  }

  declare class photonui$GridLayout mixins Layout {
    horizontalPadding: number;
    verticalPadding: number;
    horizontalSpacing: number;
    verticalSpacing: number;
  }

  declare class photonui$Menu mixins Layout {
    iconVisible: boolean;
  }

  declare class photonui$MenuItem mixins Menu {
    active: boolean;
    icon: photonui$BaseIcon;
    iconName: string;
    text: string;
    value: any;
  }

  declare class photonui$SubMenuItem mixins MenuItem {
    menu: photonui$Menu;
    menuName: string;
  }

  declare class photonui$Viewport mixins Container {
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

  declare class photonui$BaseWindow mixins Container {
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

  declare class photonui$PopupWindow mixins BaseWindow {
    popupXY(x: number, y: number): void;
    popupWidget(widget: photonui$Widget): void;
  }

  declare class photonui$PopupMenu mixins PopupWindow {}

  declare class photonui$Window mixins BaseWindow {
    closeButtonVisible: boolean;
    modal: boolean;
    movable: boolean;
    title: string;
    moveToFront(): void;
    moveToBack(): void;
  }

  declare class photonui$Dialog mixins Window {
    buttons: photonui$Widget[];
    buttonNames: string[];
    addButton(widget: photonui$Widget, layoutOptions: any): void;
    removeButton(widget: photonui$Widget): void;
  }

  declare class photonui$ColorPickerDialog mixins Dialog {
    color: photonui$Color;
  }

  declare class photonui$TabItem mixins Container {
    tabHtml: HTMLElement;
    title: string;
  }

  declare class photonui$TabLayout mixins Layout {
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
