declare module "react-weui" {
  declare export class ActionSheet {
    constructor(props: any): this;
    handleMaskClick(e: any): void;
    render(): any;
    renderActions(): any;
    renderMenuItem(): any;
    static defaultProps: {
      actions: any[],
      autoDectect: boolean,
      menus: any[],
      show: boolean,
      type: string
    };
  }
  declare export class Article {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {};
    static Uploader$propTypes: {};
  }
  declare export class Badge {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      dot: boolean,
      preset: string
    };
  }
  declare export class Button {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      disabled: boolean,
      size: string,
      type: string
    };
  }
  declare export class ButtonArea {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      direction: string
    };
  }
  declare export class CityPicker {
    constructor(props: any): this;
    handleChange(): void;
    parseData(data: any, subKey: any, ...args: any[]): any;
    render(): any;
    updateGroup(
      item: any,
      i: any,
      groupIndex: any,
      selected: any,
      picker: any
    ): void;
    static defaultProps: {
      data: any[],
      dataMap: {
        id: string,
        items: string
      },
      selected: any[],
      show: boolean
    };
  }
  declare export class Dialog {
    constructor(props: any): this;
    render(): any;
    renderButtons(): any;
    static defaultProps: {
      autoDectect: boolean,
      buttons: any[],
      show: boolean,
      title: string,
      type: string
    };
  }
  declare export class Form {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      checkbox: boolean,
      radio: boolean
    };
  }
  declare export class FormCell {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      checkbox: boolean,
      radio: boolean,
      select: boolean,
      selectPos: any,
      switch: boolean,
      vcode: boolean,
      warn: boolean
    };
  }
  declare export class Grid {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      icon: boolean,
      label: string
    };
  }
  declare export class GridIcon {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class GridLabel {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class Grids {
    constructor(...args: any[]): this;
    render(): any;
    renderData(data: any): any;
    static defaultProps: {
      data: any[]
    };
  }
  declare export class Icon {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      size: string,
      value: string
    };
  }
  declare export class Mask {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      transparent: boolean
    };
  }
  declare export class MediaBox {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      type: string
    };
  }
  declare export class MediaBoxBody {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class MediaBoxDescription {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class MediaBoxHeader {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class MediaBoxInfo {
    constructor(...args: any[]): this;
    render(): any;
    renderData(metas: any): any;
    static defaultProps: {
      data: any[]
    };
  }
  declare export class MediaBoxInfoMeta {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      extra: boolean
    };
  }
  declare export class MediaBoxTitle {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class Msg {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      buttons: any[],
      type: string
    };
  }
  declare export class NavBar {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class NavBarItem {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      active: boolean
    };
  }
  declare export class Panel {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      access: boolean
    };
  }
  declare export class PanelBody {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class PanelFooter {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class PanelHeader {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class Picker {
    constructor(props: any): this;
    handleChange(item: any, i: any, groupIndex: any): void;
    handleChanges(): void;
    handleClose(cb: any): any;
    render(): any;
    renderActions(): any;
    renderGroups(): any;
    static defaultProps: {
      actions: any[],
      groups: any[],
      lang: {
        leftBtn: string,
        rightBtn: string
      },
      show: boolean
    };
  }
  declare export class PickerGroup {
    constructor(props: any): this;
    adjustPosition(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    handleTouchEnd(e: any): any;
    handleTouchMove(e: any): void;
    handleTouchStart(e: any): void;
    render(): any;
    updateSelected(...args: any[]): void;
    static defaultProps: {
      aniamtion: boolean,
      defaultIndex: number,
      groupIndex: number,
      height: number,
      indicatorHeight: number,
      indicatorTop: number,
      itemHeight: number,
      mapKeys: {
        label: string
      }
    };
  }
  declare export class Popup {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      enableMask: boolean,
      show: boolean
    };
  }
  declare export class SearchBar {
    constructor(...args: any[]): this;
    blurHandle(e: any): void;
    cancelHandle(e: any): void;
    changeHandle(e: any): void;
    clearHandle(e: any): void;
    render(): any;
    submitHandle(e: any): void;
    static defaultProps: {
      autocomplete: string,
      lang: {
        cancel: string
      },
      onCancel: any,
      onChange: any,
      onClear: any,
      onSubmit: any,
      placeholder: string,
      searchName: string
    };
  }
  declare export class Select {
    constructor(...args: any[]): this;
    render(): any;
    renderData(data: any): any;
    static defaultProps: {
      data: any[]
    };
  }
  declare export class Slider {
    constructor(props: any): this;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    handleTouchEnd(e: any): void;
    handleTouchMove(e: any): any;
    handleTouchStart(e: any): void;
    render(): any;
    updateValue(...args: any[]): any;
    static defaultProps: {
      defaultValue: number,
      disabled: boolean,
      max: number,
      min: number,
      showValue: boolean,
      snapToValue: boolean,
      step: number
    };
  }
  declare export class Tab {
    constructor(...args: any[]): this;
    handleHeaderClick(idx: any): void;
    parseChild(children: any): any;
    render(): any;
    renderBar(type: any, children: any, cls: any): any;
    static defaultProps: {
      defaultIndex: number,
      type: string
    };
  }
  declare export class TabBar {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class TabBarIcon {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class TabBarItem {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      active: boolean,
      icon: boolean,
      label: string
    };
  }
  declare export class TabBarLabel {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class TabBody {
    constructor(...args: any[]): this;
    render(): any;
  }
  declare export class TabBodyItem {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      active: boolean
    };
  }
  declare export class TextArea {
    constructor(...args: any[]): this;
    handleChange(e: any): void;
    render(): any;
    static defaultProps: {
      defaultValue: any,
      showCounter: boolean
    };
  }
  declare export class Toast {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      icon: string,
      show: boolean
    };
  }
  declare export class Uploader {
    constructor(...args: any[]): this;
    detectVerticalSquash(img: any): any;
    handleChange(e: any): void;
    handleFile(file: any, cb: any, ...args: any[]): void;
    render(): any;
    renderFiles(): any;
    static defaultProps: {
      files: any[],
      lang: {
        maxError: any
      },
      maxCount: number,
      maxWidth: number,
      onChange: any,
      onError: any,
      title: string
    };
  }
  declare export var version: string;
  declare export function Agreement(props: any): any;

  declare export function Cell(props: any): any;

  declare export function CellBody(props: any): any;

  declare export function CellFooter(props: any): any;

  declare export function CellHeader(props: any): any;

  declare export function Cells(props: any): any;

  declare export function CellsTips(props: any): any;

  declare export function CellsTitle(props: any): any;

  declare export function Checkbox(props: any): any;

  declare export function Flex(props: any): any;

  declare export function FlexItem(props: any): any;

  declare export function Footer(props: any): any;

  declare export function FooterLink(props: any): any;

  declare export function FooterLinks(props: any): any;

  declare export function FooterText(props: any): any;

  declare export function Gallery(props: any): any;

  declare export function GalleryDelete(props: any): any;

  declare export function Input(props: any): any;

  declare export function Label(props: any): any;

  declare export function LoadMore(props: any): any;

  declare export function PopupHeader(props: any): any;

  declare export function Preview(props: any): any;

  declare export function PreviewBody(props: any): any;

  declare export function PreviewButton(props: any): any;

  declare export function PreviewFooter(props: any): any;

  declare export function PreviewHeader(props: any): any;

  declare export function PreviewItem(props: any): any;

  declare export function Progress(props: any): any;

  declare export function Radio(props: any): any;

  declare export function Switch(props: any): any;

  declare export function Toptips(props: any): any;

  declare export function VCode(props: any): any;

  declare var npm$namespace$ActionSheet: {
    propTypes: typeof npm$namespace$ActionSheet$propTypes
  };

  declare var npm$namespace$ActionSheet$propTypes: {
    actions: typeof ActionSheet$propTypes$actions,
    autoDectect: typeof ActionSheet$propTypes$autoDectect,
    menus: typeof ActionSheet$propTypes$menus,
    onRequestClose: typeof ActionSheet$propTypes$onRequestClose,
    show: typeof ActionSheet$propTypes$show,
    type: typeof ActionSheet$propTypes$type,

    actions: typeof npm$namespace$ActionSheet$propTypes$actions,
    autoDectect: typeof npm$namespace$ActionSheet$propTypes$autoDectect,
    menus: typeof npm$namespace$ActionSheet$propTypes$menus,
    onRequestClose: typeof npm$namespace$ActionSheet$propTypes$onRequestClose,
    show: typeof npm$namespace$ActionSheet$propTypes$show,
    type: typeof npm$namespace$ActionSheet$propTypes$type
  };
  declare function ActionSheet$propTypes$actions(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function ActionSheet$propTypes$autoDectect(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function ActionSheet$propTypes$menus(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function ActionSheet$propTypes$onRequestClose(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function ActionSheet$propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function ActionSheet$propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$ActionSheet$propTypes$actions: {
    isRequired: typeof ActionSheet$propTypes$actions$isRequired
  };
  declare function ActionSheet$propTypes$actions$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$ActionSheet$propTypes$autoDectect: {
    isRequired: typeof ActionSheet$propTypes$autoDectect$isRequired
  };
  declare function ActionSheet$propTypes$autoDectect$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$ActionSheet$propTypes$menus: {
    isRequired: typeof ActionSheet$propTypes$menus$isRequired
  };
  declare function ActionSheet$propTypes$menus$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$ActionSheet$propTypes$onRequestClose: {
    isRequired: typeof ActionSheet$propTypes$onRequestClose$isRequired
  };
  declare function ActionSheet$propTypes$onRequestClose$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$ActionSheet$propTypes$show: {
    isRequired: typeof ActionSheet$propTypes$show$isRequired
  };
  declare function ActionSheet$propTypes$show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$ActionSheet$propTypes$type: {
    isRequired: typeof ActionSheet$propTypes$type$isRequired
  };
  declare function ActionSheet$propTypes$type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Badge: {
    propTypes: typeof npm$namespace$Badge$propTypes
  };

  declare var npm$namespace$Badge$propTypes: {
    dot: typeof Badge$propTypes$dot,
    preset: typeof Badge$propTypes$preset,

    dot: typeof npm$namespace$Badge$propTypes$dot,
    preset: typeof npm$namespace$Badge$propTypes$preset
  };
  declare function Badge$propTypes$dot(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Badge$propTypes$preset(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Badge$propTypes$dot: {
    isRequired: typeof Badge$propTypes$dot$isRequired
  };
  declare function Badge$propTypes$dot$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Badge$propTypes$preset: {
    isRequired: typeof Badge$propTypes$preset$isRequired
  };
  declare function Badge$propTypes$preset$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Button: {
    propTypes: typeof npm$namespace$Button$propTypes
  };

  declare var npm$namespace$Button$propTypes: {
    disabled: typeof Button$propTypes$disabled,
    size: typeof Button$propTypes$size,
    type: typeof Button$propTypes$type,

    disabled: typeof npm$namespace$Button$propTypes$disabled,
    size: typeof npm$namespace$Button$propTypes$size,
    type: typeof npm$namespace$Button$propTypes$type
  };
  declare function Button$propTypes$disabled(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Button$propTypes$size(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Button$propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Button$propTypes$disabled: {
    isRequired: typeof Button$propTypes$disabled$isRequired
  };
  declare function Button$propTypes$disabled$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Button$propTypes$size: {
    isRequired: typeof Button$propTypes$size$isRequired
  };
  declare function Button$propTypes$size$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Button$propTypes$type: {
    isRequired: typeof Button$propTypes$type$isRequired
  };
  declare function Button$propTypes$type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$ButtonArea: {
    propTypes: typeof npm$namespace$ButtonArea$propTypes
  };

  declare var npm$namespace$ButtonArea$propTypes: {
    direction: typeof ButtonArea$propTypes$direction,

    direction: typeof npm$namespace$ButtonArea$propTypes$direction
  };
  declare function ButtonArea$propTypes$direction(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$ButtonArea$propTypes$direction: {
    isRequired: typeof ButtonArea$propTypes$direction$isRequired
  };
  declare function ButtonArea$propTypes$direction$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Cell: {
    defaultProps: typeof Cell$defaultProps,

    propTypes: typeof npm$namespace$Cell$propTypes
  };
  declare var Cell$defaultProps: {
    access: boolean,
    link: boolean
  };

  declare var npm$namespace$Cell$propTypes: {
    access: typeof Cell$propTypes$access,
    component: typeof Cell$propTypes$component,
    link: typeof Cell$propTypes$link,

    access: typeof npm$namespace$Cell$propTypes$access,
    component: typeof npm$namespace$Cell$propTypes$component,
    link: typeof npm$namespace$Cell$propTypes$link
  };
  declare function Cell$propTypes$access(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Cell$propTypes$component(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Cell$propTypes$link(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Cell$propTypes$access: {
    isRequired: typeof Cell$propTypes$access$isRequired
  };
  declare function Cell$propTypes$access$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Cell$propTypes$component: {
    isRequired: typeof Cell$propTypes$component$isRequired
  };
  declare function Cell$propTypes$component$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Cell$propTypes$link: {
    isRequired: typeof Cell$propTypes$link$isRequired
  };
  declare function Cell$propTypes$link$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CellBody: {
    defaultProps: typeof CellBody$defaultProps,

    propTypes: typeof npm$namespace$CellBody$propTypes
  };
  declare var CellBody$defaultProps: {
    primary: boolean
  };

  declare var npm$namespace$CellBody$propTypes: {
    primary: typeof CellBody$propTypes$primary,

    primary: typeof npm$namespace$CellBody$propTypes$primary
  };
  declare function CellBody$propTypes$primary(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CellBody$propTypes$primary: {
    isRequired: typeof CellBody$propTypes$primary$isRequired
  };
  declare function CellBody$propTypes$primary$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CellFooter: {
    defaultProps: typeof CellFooter$defaultProps,

    propTypes: typeof npm$namespace$CellFooter$propTypes
  };
  declare var CellFooter$defaultProps: {
    primary: boolean
  };

  declare var npm$namespace$CellFooter$propTypes: {
    primary: typeof CellFooter$propTypes$primary,

    primary: typeof npm$namespace$CellFooter$propTypes$primary
  };
  declare function CellFooter$propTypes$primary(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CellFooter$propTypes$primary: {
    isRequired: typeof CellFooter$propTypes$primary$isRequired
  };
  declare function CellFooter$propTypes$primary$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CellHeader: {
    defaultProps: typeof CellHeader$defaultProps,

    propTypes: typeof npm$namespace$CellHeader$propTypes
  };
  declare var CellHeader$defaultProps: {
    primary: boolean
  };

  declare var npm$namespace$CellHeader$propTypes: {
    primary: typeof CellHeader$propTypes$primary,

    primary: typeof npm$namespace$CellHeader$propTypes$primary
  };
  declare function CellHeader$propTypes$primary(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CellHeader$propTypes$primary: {
    isRequired: typeof CellHeader$propTypes$primary$isRequired
  };
  declare function CellHeader$propTypes$primary$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Cells: {
    defaultProps: typeof Cells$defaultProps,
    propTypes: typeof Cells$propTypes
  };
  declare var Cells$defaultProps: {};

  declare var Cells$propTypes: {};

  declare var npm$namespace$CityPicker: {
    propTypes: typeof npm$namespace$CityPicker$propTypes
  };

  declare var npm$namespace$CityPicker$propTypes: {
    data: typeof CityPicker$propTypes$data,
    dataMap: typeof CityPicker$propTypes$dataMap,
    selected: typeof CityPicker$propTypes$selected,
    show: typeof CityPicker$propTypes$show,

    dataMap: typeof npm$namespace$CityPicker$propTypes$dataMap,
    selected: typeof npm$namespace$CityPicker$propTypes$selected,
    show: typeof npm$namespace$CityPicker$propTypes$show
  };
  declare function CityPicker$propTypes$data(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function CityPicker$propTypes$dataMap(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function CityPicker$propTypes$selected(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function CityPicker$propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CityPicker$propTypes$dataMap: {
    isRequired: typeof CityPicker$propTypes$dataMap$isRequired
  };
  declare function CityPicker$propTypes$dataMap$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CityPicker$propTypes$selected: {
    isRequired: typeof CityPicker$propTypes$selected$isRequired
  };
  declare function CityPicker$propTypes$selected$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CityPicker$propTypes$show: {
    isRequired: typeof CityPicker$propTypes$show$isRequired
  };
  declare function CityPicker$propTypes$show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Dialog: {
    propTypes: typeof npm$namespace$Dialog$propTypes
  };

  declare var npm$namespace$Dialog$propTypes: {
    autoDectect: typeof Dialog$propTypes$autoDectect,
    buttons: typeof Dialog$propTypes$buttons,
    show: typeof Dialog$propTypes$show,
    title: typeof Dialog$propTypes$title,
    type: typeof Dialog$propTypes$type,

    autoDectect: typeof npm$namespace$Dialog$propTypes$autoDectect,
    buttons: typeof npm$namespace$Dialog$propTypes$buttons,
    show: typeof npm$namespace$Dialog$propTypes$show,
    title: typeof npm$namespace$Dialog$propTypes$title,
    type: typeof npm$namespace$Dialog$propTypes$type
  };
  declare function Dialog$propTypes$autoDectect(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Dialog$propTypes$buttons(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Dialog$propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Dialog$propTypes$title(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Dialog$propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Dialog$propTypes$autoDectect: {
    isRequired: typeof Dialog$propTypes$autoDectect$isRequired
  };
  declare function Dialog$propTypes$autoDectect$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Dialog$propTypes$buttons: {
    isRequired: typeof Dialog$propTypes$buttons$isRequired
  };
  declare function Dialog$propTypes$buttons$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Dialog$propTypes$show: {
    isRequired: typeof Dialog$propTypes$show$isRequired
  };
  declare function Dialog$propTypes$show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Dialog$propTypes$title: {
    isRequired: typeof Dialog$propTypes$title$isRequired
  };
  declare function Dialog$propTypes$title$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Dialog$propTypes$type: {
    isRequired: typeof Dialog$propTypes$type$isRequired
  };
  declare function Dialog$propTypes$type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$FlexItem: {
    defaultProps: typeof FlexItem$defaultProps,

    propTypes: typeof npm$namespace$FlexItem$propTypes
  };
  declare var FlexItem$defaultProps: {
    component: string
  };

  declare var npm$namespace$FlexItem$propTypes: {
    component: typeof FlexItem$propTypes$component,

    component: typeof npm$namespace$FlexItem$propTypes$component
  };
  declare function FlexItem$propTypes$component(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$FlexItem$propTypes$component: {
    isRequired: typeof FlexItem$propTypes$component$isRequired
  };
  declare function FlexItem$propTypes$component$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Form: {
    propTypes: typeof npm$namespace$Form$propTypes
  };

  declare var npm$namespace$Form$propTypes: {
    checkbox: typeof Form$propTypes$checkbox,
    radio: typeof Form$propTypes$radio,

    checkbox: typeof npm$namespace$Form$propTypes$checkbox,
    radio: typeof npm$namespace$Form$propTypes$radio
  };
  declare function Form$propTypes$checkbox(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Form$propTypes$radio(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Form$propTypes$checkbox: {
    isRequired: typeof Form$propTypes$checkbox$isRequired
  };
  declare function Form$propTypes$checkbox$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Form$propTypes$radio: {
    isRequired: typeof Form$propTypes$radio$isRequired
  };
  declare function Form$propTypes$radio$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$FormCell: {
    propTypes: typeof npm$namespace$FormCell$propTypes
  };

  declare var npm$namespace$FormCell$propTypes: {
    checkbox: typeof FormCell$propTypes$checkbox,
    radio: typeof FormCell$propTypes$radio,
    select: typeof FormCell$propTypes$select,
    selectPos: typeof FormCell$propTypes$selectPos,
    vcode: typeof FormCell$propTypes$vcode,
    warn: typeof FormCell$propTypes$warn,

    checkbox: typeof npm$namespace$FormCell$propTypes$checkbox,
    radio: typeof npm$namespace$FormCell$propTypes$radio,
    select: typeof npm$namespace$FormCell$propTypes$select,
    selectPos: typeof npm$namespace$FormCell$propTypes$selectPos,
    vcode: typeof npm$namespace$FormCell$propTypes$vcode,
    warn: typeof npm$namespace$FormCell$propTypes$warn
  };
  declare function FormCell$propTypes$checkbox(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function FormCell$propTypes$radio(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function FormCell$propTypes$select(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function FormCell$propTypes$selectPos(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function FormCell$propTypes$vcode(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function FormCell$propTypes$warn(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$FormCell$propTypes$checkbox: {
    isRequired: typeof FormCell$propTypes$checkbox$isRequired
  };
  declare function FormCell$propTypes$checkbox$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$FormCell$propTypes$radio: {
    isRequired: typeof FormCell$propTypes$radio$isRequired
  };
  declare function FormCell$propTypes$radio$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$FormCell$propTypes$select: {
    isRequired: typeof FormCell$propTypes$select$isRequired
  };
  declare function FormCell$propTypes$select$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$FormCell$propTypes$selectPos: {
    isRequired: typeof FormCell$propTypes$selectPos$isRequired
  };
  declare function FormCell$propTypes$selectPos$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$FormCell$propTypes$vcode: {
    isRequired: typeof FormCell$propTypes$vcode$isRequired
  };
  declare function FormCell$propTypes$vcode$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$FormCell$propTypes$warn: {
    isRequired: typeof FormCell$propTypes$warn$isRequired
  };
  declare function FormCell$propTypes$warn$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Gallery: {
    defaultProps: typeof Gallery$defaultProps,

    propTypes: typeof npm$namespace$Gallery$propTypes
  };
  declare var Gallery$defaultProps: {
    show: any,
    src: string
  };

  declare var npm$namespace$Gallery$propTypes: {
    show: typeof Gallery$propTypes$show,
    src: typeof Gallery$propTypes$src,

    show: typeof npm$namespace$Gallery$propTypes$show,
    src: typeof npm$namespace$Gallery$propTypes$src
  };
  declare function Gallery$propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Gallery$propTypes$src(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Gallery$propTypes$show: {
    isRequired: typeof Gallery$propTypes$show$isRequired
  };
  declare function Gallery$propTypes$show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Gallery$propTypes$src: {
    isRequired: typeof Gallery$propTypes$src$isRequired
  };
  declare function Gallery$propTypes$src$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Grid: {
    propTypes: typeof npm$namespace$Grid$propTypes
  };

  declare var npm$namespace$Grid$propTypes: {
    icon: typeof Grid$propTypes$icon,
    label: typeof Grid$propTypes$label,

    icon: typeof npm$namespace$Grid$propTypes$icon,
    label: typeof npm$namespace$Grid$propTypes$label
  };
  declare function Grid$propTypes$icon(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Grid$propTypes$label(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Grid$propTypes$icon: {
    isRequired: typeof Grid$propTypes$icon$isRequired
  };
  declare function Grid$propTypes$icon$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Grid$propTypes$label: {
    isRequired: typeof Grid$propTypes$label$isRequired
  };
  declare function Grid$propTypes$label$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Grids: {
    propTypes: typeof npm$namespace$Grids$propTypes
  };

  declare var npm$namespace$Grids$propTypes: {
    data: typeof Grids$propTypes$data,

    data: typeof npm$namespace$Grids$propTypes$data
  };
  declare function Grids$propTypes$data(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Grids$propTypes$data: {
    isRequired: typeof Grids$propTypes$data$isRequired
  };
  declare function Grids$propTypes$data$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Icon: {
    propTypes: typeof npm$namespace$Icon$propTypes
  };

  declare var npm$namespace$Icon$propTypes: {
    size: typeof Icon$propTypes$size,
    value: typeof Icon$propTypes$value,

    size: typeof npm$namespace$Icon$propTypes$size,
    value: typeof npm$namespace$Icon$propTypes$value
  };
  declare function Icon$propTypes$size(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Icon$propTypes$value(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Icon$propTypes$size: {
    isRequired: typeof Icon$propTypes$size$isRequired
  };
  declare function Icon$propTypes$size$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Icon$propTypes$value: {
    isRequired: typeof Icon$propTypes$value$isRequired
  };
  declare function Icon$propTypes$value$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Input: {
    defaultProps: typeof Input$defaultProps,

    propTypes: typeof npm$namespace$Input$propTypes
  };
  declare var Input$defaultProps: {
    defaultValue: any
  };

  declare var npm$namespace$Input$propTypes: {
    defaultValue: typeof Input$propTypes$defaultValue,

    defaultValue: typeof npm$namespace$Input$propTypes$defaultValue
  };
  declare function Input$propTypes$defaultValue(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Input$propTypes$defaultValue: {
    isRequired: typeof Input$propTypes$defaultValue$isRequired
  };
  declare function Input$propTypes$defaultValue$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$LoadMore: {
    defaultProps: typeof LoadMore$defaultProps,

    propTypes: typeof npm$namespace$LoadMore$propTypes
  };
  declare var LoadMore$defaultProps: {
    loading: boolean,
    showDot: boolean,
    showLine: boolean
  };

  declare var npm$namespace$LoadMore$propTypes: {
    loading: typeof LoadMore$propTypes$loading,
    showDot: typeof LoadMore$propTypes$showDot,
    showLine: typeof LoadMore$propTypes$showLine,

    loading: typeof npm$namespace$LoadMore$propTypes$loading,
    showDot: typeof npm$namespace$LoadMore$propTypes$showDot,
    showLine: typeof npm$namespace$LoadMore$propTypes$showLine
  };
  declare function LoadMore$propTypes$loading(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function LoadMore$propTypes$showDot(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function LoadMore$propTypes$showLine(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$LoadMore$propTypes$loading: {
    isRequired: typeof LoadMore$propTypes$loading$isRequired
  };
  declare function LoadMore$propTypes$loading$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$LoadMore$propTypes$showDot: {
    isRequired: typeof LoadMore$propTypes$showDot$isRequired
  };
  declare function LoadMore$propTypes$showDot$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$LoadMore$propTypes$showLine: {
    isRequired: typeof LoadMore$propTypes$showLine$isRequired
  };
  declare function LoadMore$propTypes$showLine$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Mask: {
    propTypes: typeof npm$namespace$Mask$propTypes
  };

  declare var npm$namespace$Mask$propTypes: {
    transparent: typeof Mask$propTypes$transparent,

    transparent: typeof npm$namespace$Mask$propTypes$transparent
  };
  declare function Mask$propTypes$transparent(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Mask$propTypes$transparent: {
    isRequired: typeof Mask$propTypes$transparent$isRequired
  };
  declare function Mask$propTypes$transparent$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$MediaBox: {
    propTypes: typeof npm$namespace$MediaBox$propTypes
  };

  declare var npm$namespace$MediaBox$propTypes: {
    type: typeof MediaBox$propTypes$type,

    type: typeof npm$namespace$MediaBox$propTypes$type
  };
  declare function MediaBox$propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$MediaBox$propTypes$type: {
    isRequired: typeof MediaBox$propTypes$type$isRequired
  };
  declare function MediaBox$propTypes$type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$MediaBoxInfo: {
    propTypes: typeof npm$namespace$MediaBoxInfo$propTypes
  };

  declare var npm$namespace$MediaBoxInfo$propTypes: {
    data: typeof MediaBoxInfo$propTypes$data,

    data: typeof npm$namespace$MediaBoxInfo$propTypes$data
  };
  declare function MediaBoxInfo$propTypes$data(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$MediaBoxInfo$propTypes$data: {
    isRequired: typeof MediaBoxInfo$propTypes$data$isRequired
  };
  declare function MediaBoxInfo$propTypes$data$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$MediaBoxInfoMeta: {
    propTypes: typeof npm$namespace$MediaBoxInfoMeta$propTypes
  };

  declare var npm$namespace$MediaBoxInfoMeta$propTypes: {
    extra: typeof MediaBoxInfoMeta$propTypes$extra,

    extra: typeof npm$namespace$MediaBoxInfoMeta$propTypes$extra
  };
  declare function MediaBoxInfoMeta$propTypes$extra(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$MediaBoxInfoMeta$propTypes$extra: {
    isRequired: typeof MediaBoxInfoMeta$propTypes$extra$isRequired
  };
  declare function MediaBoxInfoMeta$propTypes$extra$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Msg: {
    propTypes: typeof npm$namespace$Msg$propTypes
  };

  declare var npm$namespace$Msg$propTypes: {
    buttons: typeof Msg$propTypes$buttons,
    description: typeof Msg$propTypes$description,
    extraHref: typeof Msg$propTypes$extraHref,
    extraText: typeof Msg$propTypes$extraText,
    footer: typeof Msg$propTypes$footer,
    title: typeof Msg$propTypes$title,
    type: typeof Msg$propTypes$type,

    buttons: typeof npm$namespace$Msg$propTypes$buttons,
    description: typeof npm$namespace$Msg$propTypes$description,
    extraHref: typeof npm$namespace$Msg$propTypes$extraHref,
    extraText: typeof npm$namespace$Msg$propTypes$extraText,
    footer: typeof npm$namespace$Msg$propTypes$footer,
    title: typeof npm$namespace$Msg$propTypes$title,
    type: typeof npm$namespace$Msg$propTypes$type
  };
  declare function Msg$propTypes$buttons(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Msg$propTypes$description(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Msg$propTypes$extraHref(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Msg$propTypes$extraText(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Msg$propTypes$footer(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Msg$propTypes$title(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Msg$propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Msg$propTypes$buttons: {
    isRequired: typeof Msg$propTypes$buttons$isRequired
  };
  declare function Msg$propTypes$buttons$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Msg$propTypes$description: {
    isRequired: typeof Msg$propTypes$description$isRequired
  };
  declare function Msg$propTypes$description$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Msg$propTypes$extraHref: {
    isRequired: typeof Msg$propTypes$extraHref$isRequired
  };
  declare function Msg$propTypes$extraHref$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Msg$propTypes$extraText: {
    isRequired: typeof Msg$propTypes$extraText$isRequired
  };
  declare function Msg$propTypes$extraText$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Msg$propTypes$footer: {
    isRequired: typeof Msg$propTypes$footer$isRequired
  };
  declare function Msg$propTypes$footer$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Msg$propTypes$title: {
    isRequired: typeof Msg$propTypes$title$isRequired
  };
  declare function Msg$propTypes$title$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Msg$propTypes$type: {
    isRequired: typeof Msg$propTypes$type$isRequired
  };
  declare function Msg$propTypes$type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$NavBarItem: {
    propTypes: typeof npm$namespace$NavBarItem$propTypes
  };

  declare var npm$namespace$NavBarItem$propTypes: {
    active: typeof NavBarItem$propTypes$active,
    label: typeof NavBarItem$propTypes$label,

    active: typeof npm$namespace$NavBarItem$propTypes$active,
    label: typeof npm$namespace$NavBarItem$propTypes$label
  };
  declare function NavBarItem$propTypes$active(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function NavBarItem$propTypes$label(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$NavBarItem$propTypes$active: {
    isRequired: typeof NavBarItem$propTypes$active$isRequired
  };
  declare function NavBarItem$propTypes$active$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$NavBarItem$propTypes$label: {
    isRequired: typeof NavBarItem$propTypes$label$isRequired
  };
  declare function NavBarItem$propTypes$label$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Panel: {
    propTypes: typeof npm$namespace$Panel$propTypes
  };

  declare var npm$namespace$Panel$propTypes: {
    access: typeof Panel$propTypes$access,

    access: typeof npm$namespace$Panel$propTypes$access
  };
  declare function Panel$propTypes$access(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Panel$propTypes$access: {
    isRequired: typeof Panel$propTypes$access$isRequired
  };
  declare function Panel$propTypes$access$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Picker: {
    propTypes: typeof npm$namespace$Picker$propTypes
  };

  declare var npm$namespace$Picker$propTypes: {
    actions: typeof Picker$propTypes$actions,
    defaultSelect: typeof Picker$propTypes$defaultSelect,
    groups: typeof Picker$propTypes$groups,
    lang: typeof Picker$propTypes$lang,
    onCancel: typeof Picker$propTypes$onCancel,
    onChange: typeof Picker$propTypes$onChange,
    onGroupChange: typeof Picker$propTypes$onGroupChange,
    show: typeof Picker$propTypes$show,

    actions: typeof npm$namespace$Picker$propTypes$actions,
    defaultSelect: typeof npm$namespace$Picker$propTypes$defaultSelect,
    groups: typeof npm$namespace$Picker$propTypes$groups,
    lang: typeof npm$namespace$Picker$propTypes$lang,
    onCancel: typeof npm$namespace$Picker$propTypes$onCancel,
    onChange: typeof npm$namespace$Picker$propTypes$onChange,
    onGroupChange: typeof npm$namespace$Picker$propTypes$onGroupChange,
    show: typeof npm$namespace$Picker$propTypes$show
  };
  declare function Picker$propTypes$actions(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Picker$propTypes$defaultSelect(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Picker$propTypes$groups(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Picker$propTypes$lang(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Picker$propTypes$onCancel(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Picker$propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Picker$propTypes$onGroupChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Picker$propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Picker$propTypes$actions: {
    isRequired: typeof Picker$propTypes$actions$isRequired
  };
  declare function Picker$propTypes$actions$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Picker$propTypes$defaultSelect: {
    isRequired: typeof Picker$propTypes$defaultSelect$isRequired
  };
  declare function Picker$propTypes$defaultSelect$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Picker$propTypes$groups: {
    isRequired: typeof Picker$propTypes$groups$isRequired
  };
  declare function Picker$propTypes$groups$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Picker$propTypes$lang: {
    isRequired: typeof Picker$propTypes$lang$isRequired
  };
  declare function Picker$propTypes$lang$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Picker$propTypes$onCancel: {
    isRequired: typeof Picker$propTypes$onCancel$isRequired
  };
  declare function Picker$propTypes$onCancel$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Picker$propTypes$onChange: {
    isRequired: typeof Picker$propTypes$onChange$isRequired
  };
  declare function Picker$propTypes$onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Picker$propTypes$onGroupChange: {
    isRequired: typeof Picker$propTypes$onGroupChange$isRequired
  };
  declare function Picker$propTypes$onGroupChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Picker$propTypes$show: {
    isRequired: typeof Picker$propTypes$show$isRequired
  };
  declare function Picker$propTypes$show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PickerGroup: {
    propTypes: typeof npm$namespace$PickerGroup$propTypes
  };

  declare var npm$namespace$PickerGroup$propTypes: {
    aniamtion: typeof PickerGroup$propTypes$aniamtion,
    defaultIndex: typeof PickerGroup$propTypes$defaultIndex,
    groupIndex: typeof PickerGroup$propTypes$groupIndex,
    height: typeof PickerGroup$propTypes$height,
    indicatorHeight: typeof PickerGroup$propTypes$indicatorHeight,
    indicatorTop: typeof PickerGroup$propTypes$indicatorTop,
    itemHeight: typeof PickerGroup$propTypes$itemHeight,
    onChange: typeof PickerGroup$propTypes$onChange,

    aniamtion: typeof npm$namespace$PickerGroup$propTypes$aniamtion,
    defaultIndex: typeof npm$namespace$PickerGroup$propTypes$defaultIndex,
    groupIndex: typeof npm$namespace$PickerGroup$propTypes$groupIndex,
    height: typeof npm$namespace$PickerGroup$propTypes$height,
    indicatorHeight: typeof npm$namespace$PickerGroup$propTypes$indicatorHeight,
    indicatorTop: typeof npm$namespace$PickerGroup$propTypes$indicatorTop,
    itemHeight: typeof npm$namespace$PickerGroup$propTypes$itemHeight,
    onChange: typeof npm$namespace$PickerGroup$propTypes$onChange
  };
  declare function PickerGroup$propTypes$aniamtion(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function PickerGroup$propTypes$defaultIndex(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function PickerGroup$propTypes$groupIndex(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function PickerGroup$propTypes$height(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function PickerGroup$propTypes$indicatorHeight(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function PickerGroup$propTypes$indicatorTop(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function PickerGroup$propTypes$itemHeight(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function PickerGroup$propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PickerGroup$propTypes$aniamtion: {
    isRequired: typeof PickerGroup$propTypes$aniamtion$isRequired
  };
  declare function PickerGroup$propTypes$aniamtion$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PickerGroup$propTypes$defaultIndex: {
    isRequired: typeof PickerGroup$propTypes$defaultIndex$isRequired
  };
  declare function PickerGroup$propTypes$defaultIndex$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PickerGroup$propTypes$groupIndex: {
    isRequired: typeof PickerGroup$propTypes$groupIndex$isRequired
  };
  declare function PickerGroup$propTypes$groupIndex$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PickerGroup$propTypes$height: {
    isRequired: typeof PickerGroup$propTypes$height$isRequired
  };
  declare function PickerGroup$propTypes$height$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PickerGroup$propTypes$indicatorHeight: {
    isRequired: typeof PickerGroup$propTypes$indicatorHeight$isRequired
  };
  declare function PickerGroup$propTypes$indicatorHeight$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PickerGroup$propTypes$indicatorTop: {
    isRequired: typeof PickerGroup$propTypes$indicatorTop$isRequired
  };
  declare function PickerGroup$propTypes$indicatorTop$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PickerGroup$propTypes$itemHeight: {
    isRequired: typeof PickerGroup$propTypes$itemHeight$isRequired
  };
  declare function PickerGroup$propTypes$itemHeight$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PickerGroup$propTypes$onChange: {
    isRequired: typeof PickerGroup$propTypes$onChange$isRequired
  };
  declare function PickerGroup$propTypes$onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Popup: {
    propTypes: typeof npm$namespace$Popup$propTypes
  };

  declare var npm$namespace$Popup$propTypes: {
    enableMask: typeof Popup$propTypes$enableMask,
    show: typeof Popup$propTypes$show,

    enableMask: typeof npm$namespace$Popup$propTypes$enableMask,
    show: typeof npm$namespace$Popup$propTypes$show
  };
  declare function Popup$propTypes$enableMask(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Popup$propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Popup$propTypes$enableMask: {
    isRequired: typeof Popup$propTypes$enableMask$isRequired
  };
  declare function Popup$propTypes$enableMask$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Popup$propTypes$show: {
    isRequired: typeof Popup$propTypes$show$isRequired
  };
  declare function Popup$propTypes$show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PopupHeader: {
    defaultProps: typeof PopupHeader$defaultProps,

    propTypes: typeof npm$namespace$PopupHeader$propTypes
  };
  declare var PopupHeader$defaultProps: {
    left: string,
    right: string
  };

  declare var npm$namespace$PopupHeader$propTypes: {
    left: typeof PopupHeader$propTypes$left,
    leftOnClick: typeof PopupHeader$propTypes$leftOnClick,
    right: typeof PopupHeader$propTypes$right,
    rightOnClick: typeof PopupHeader$propTypes$rightOnClick,

    left: typeof npm$namespace$PopupHeader$propTypes$left,
    leftOnClick: typeof npm$namespace$PopupHeader$propTypes$leftOnClick,
    right: typeof npm$namespace$PopupHeader$propTypes$right,
    rightOnClick: typeof npm$namespace$PopupHeader$propTypes$rightOnClick
  };
  declare function PopupHeader$propTypes$left(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function PopupHeader$propTypes$leftOnClick(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function PopupHeader$propTypes$right(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function PopupHeader$propTypes$rightOnClick(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PopupHeader$propTypes$left: {
    isRequired: typeof PopupHeader$propTypes$left$isRequired
  };
  declare function PopupHeader$propTypes$left$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PopupHeader$propTypes$leftOnClick: {
    isRequired: typeof PopupHeader$propTypes$leftOnClick$isRequired
  };
  declare function PopupHeader$propTypes$leftOnClick$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PopupHeader$propTypes$right: {
    isRequired: typeof PopupHeader$propTypes$right$isRequired
  };
  declare function PopupHeader$propTypes$right$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PopupHeader$propTypes$rightOnClick: {
    isRequired: typeof PopupHeader$propTypes$rightOnClick$isRequired
  };
  declare function PopupHeader$propTypes$rightOnClick$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PreviewButton: {
    defaultProps: typeof PreviewButton$defaultProps,

    propTypes: typeof npm$namespace$PreviewButton$propTypes
  };
  declare var PreviewButton$defaultProps: {
    primary: boolean
  };

  declare var npm$namespace$PreviewButton$propTypes: {
    primary: typeof PreviewButton$propTypes$primary,

    primary: typeof npm$namespace$PreviewButton$propTypes$primary
  };
  declare function PreviewButton$propTypes$primary(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PreviewButton$propTypes$primary: {
    isRequired: typeof PreviewButton$propTypes$primary$isRequired
  };
  declare function PreviewButton$propTypes$primary$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PreviewItem: {
    defaultProps: typeof PreviewItem$defaultProps,

    propTypes: typeof npm$namespace$PreviewItem$propTypes
  };
  declare var PreviewItem$defaultProps: {
    label: boolean,
    value: boolean
  };

  declare var npm$namespace$PreviewItem$propTypes: {
    label: typeof PreviewItem$propTypes$label,
    value: typeof PreviewItem$propTypes$value,

    label: typeof npm$namespace$PreviewItem$propTypes$label,
    value: typeof npm$namespace$PreviewItem$propTypes$value
  };
  declare function PreviewItem$propTypes$label(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function PreviewItem$propTypes$value(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PreviewItem$propTypes$label: {
    isRequired: typeof PreviewItem$propTypes$label$isRequired
  };
  declare function PreviewItem$propTypes$label$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PreviewItem$propTypes$value: {
    isRequired: typeof PreviewItem$propTypes$value$isRequired
  };
  declare function PreviewItem$propTypes$value$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Progress: {
    defaultProps: typeof Progress$defaultProps,

    propTypes: typeof npm$namespace$Progress$propTypes
  };
  declare var Progress$defaultProps: {
    showCancel: boolean,
    value: number
  };

  declare var npm$namespace$Progress$propTypes: {
    showCancel: typeof Progress$propTypes$showCancel,
    value: typeof Progress$propTypes$value,

    showCancel: typeof npm$namespace$Progress$propTypes$showCancel,
    value: typeof npm$namespace$Progress$propTypes$value
  };
  declare function Progress$propTypes$showCancel(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Progress$propTypes$value(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Progress$propTypes$showCancel: {
    isRequired: typeof Progress$propTypes$showCancel$isRequired
  };
  declare function Progress$propTypes$showCancel$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Progress$propTypes$value: {
    isRequired: typeof Progress$propTypes$value$isRequired
  };
  declare function Progress$propTypes$value$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$SearchBar: {
    propTypes: typeof npm$namespace$SearchBar$propTypes
  };

  declare var npm$namespace$SearchBar$propTypes: {
    lang: typeof SearchBar$propTypes$lang,
    onCancel: typeof SearchBar$propTypes$onCancel,
    onChange: typeof SearchBar$propTypes$onChange,
    onClear: typeof SearchBar$propTypes$onClear,
    onSubmit: typeof SearchBar$propTypes$onSubmit,
    placeholder: typeof SearchBar$propTypes$placeholder,
    searchName: typeof SearchBar$propTypes$searchName,

    lang: typeof npm$namespace$SearchBar$propTypes$lang,
    onCancel: typeof npm$namespace$SearchBar$propTypes$onCancel,
    onChange: typeof npm$namespace$SearchBar$propTypes$onChange,
    onClear: typeof npm$namespace$SearchBar$propTypes$onClear,
    onSubmit: typeof npm$namespace$SearchBar$propTypes$onSubmit,
    placeholder: typeof npm$namespace$SearchBar$propTypes$placeholder,
    searchName: typeof npm$namespace$SearchBar$propTypes$searchName
  };
  declare function SearchBar$propTypes$lang(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function SearchBar$propTypes$onCancel(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function SearchBar$propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function SearchBar$propTypes$onClear(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function SearchBar$propTypes$onSubmit(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function SearchBar$propTypes$placeholder(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function SearchBar$propTypes$searchName(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$SearchBar$propTypes$lang: {
    isRequired: typeof SearchBar$propTypes$lang$isRequired
  };
  declare function SearchBar$propTypes$lang$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$SearchBar$propTypes$onCancel: {
    isRequired: typeof SearchBar$propTypes$onCancel$isRequired
  };
  declare function SearchBar$propTypes$onCancel$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$SearchBar$propTypes$onChange: {
    isRequired: typeof SearchBar$propTypes$onChange$isRequired
  };
  declare function SearchBar$propTypes$onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$SearchBar$propTypes$onClear: {
    isRequired: typeof SearchBar$propTypes$onClear$isRequired
  };
  declare function SearchBar$propTypes$onClear$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$SearchBar$propTypes$onSubmit: {
    isRequired: typeof SearchBar$propTypes$onSubmit$isRequired
  };
  declare function SearchBar$propTypes$onSubmit$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$SearchBar$propTypes$placeholder: {
    isRequired: typeof SearchBar$propTypes$placeholder$isRequired
  };
  declare function SearchBar$propTypes$placeholder$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$SearchBar$propTypes$searchName: {
    isRequired: typeof SearchBar$propTypes$searchName$isRequired
  };
  declare function SearchBar$propTypes$searchName$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Select: {
    propTypes: typeof npm$namespace$Select$propTypes
  };

  declare var npm$namespace$Select$propTypes: {
    data: typeof Select$propTypes$data,

    data: typeof npm$namespace$Select$propTypes$data
  };
  declare function Select$propTypes$data(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Select$propTypes$data: {
    isRequired: typeof Select$propTypes$data$isRequired
  };
  declare function Select$propTypes$data$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Slider: {
    propTypes: typeof npm$namespace$Slider$propTypes
  };

  declare var npm$namespace$Slider$propTypes: {
    defaultValue: typeof Slider$propTypes$defaultValue,
    disabled: typeof Slider$propTypes$disabled,
    max: typeof Slider$propTypes$max,
    min: typeof Slider$propTypes$min,
    onChange: typeof Slider$propTypes$onChange,
    showValue: typeof Slider$propTypes$showValue,
    snapToValue: typeof Slider$propTypes$snapToValue,
    step: typeof Slider$propTypes$step,
    value: typeof Slider$propTypes$value,

    defaultValue: typeof npm$namespace$Slider$propTypes$defaultValue,
    disabled: typeof npm$namespace$Slider$propTypes$disabled,
    max: typeof npm$namespace$Slider$propTypes$max,
    min: typeof npm$namespace$Slider$propTypes$min,
    onChange: typeof npm$namespace$Slider$propTypes$onChange,
    showValue: typeof npm$namespace$Slider$propTypes$showValue,
    snapToValue: typeof npm$namespace$Slider$propTypes$snapToValue,
    step: typeof npm$namespace$Slider$propTypes$step,
    value: typeof npm$namespace$Slider$propTypes$value
  };
  declare function Slider$propTypes$defaultValue(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Slider$propTypes$disabled(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Slider$propTypes$max(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Slider$propTypes$min(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Slider$propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Slider$propTypes$showValue(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Slider$propTypes$snapToValue(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Slider$propTypes$step(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Slider$propTypes$value(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Slider$propTypes$defaultValue: {
    isRequired: typeof Slider$propTypes$defaultValue$isRequired
  };
  declare function Slider$propTypes$defaultValue$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Slider$propTypes$disabled: {
    isRequired: typeof Slider$propTypes$disabled$isRequired
  };
  declare function Slider$propTypes$disabled$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Slider$propTypes$max: {
    isRequired: typeof Slider$propTypes$max$isRequired
  };
  declare function Slider$propTypes$max$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Slider$propTypes$min: {
    isRequired: typeof Slider$propTypes$min$isRequired
  };
  declare function Slider$propTypes$min$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Slider$propTypes$onChange: {
    isRequired: typeof Slider$propTypes$onChange$isRequired
  };
  declare function Slider$propTypes$onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Slider$propTypes$showValue: {
    isRequired: typeof Slider$propTypes$showValue$isRequired
  };
  declare function Slider$propTypes$showValue$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Slider$propTypes$snapToValue: {
    isRequired: typeof Slider$propTypes$snapToValue$isRequired
  };
  declare function Slider$propTypes$snapToValue$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Slider$propTypes$step: {
    isRequired: typeof Slider$propTypes$step$isRequired
  };
  declare function Slider$propTypes$step$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Slider$propTypes$value: {
    isRequired: typeof Slider$propTypes$value$isRequired
  };
  declare function Slider$propTypes$value$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Tab: {
    propTypes: typeof npm$namespace$Tab$propTypes
  };

  declare var npm$namespace$Tab$propTypes: {
    defaultIndex: typeof Tab$propTypes$defaultIndex,
    onChange: typeof Tab$propTypes$onChange,
    type: typeof Tab$propTypes$type,

    defaultIndex: typeof npm$namespace$Tab$propTypes$defaultIndex,
    onChange: typeof npm$namespace$Tab$propTypes$onChange,
    type: typeof npm$namespace$Tab$propTypes$type
  };
  declare function Tab$propTypes$defaultIndex(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Tab$propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Tab$propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Tab$propTypes$defaultIndex: {
    isRequired: typeof Tab$propTypes$defaultIndex$isRequired
  };
  declare function Tab$propTypes$defaultIndex$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Tab$propTypes$onChange: {
    isRequired: typeof Tab$propTypes$onChange$isRequired
  };
  declare function Tab$propTypes$onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Tab$propTypes$type: {
    isRequired: typeof Tab$propTypes$type$isRequired
  };
  declare function Tab$propTypes$type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$TabBarItem: {
    propTypes: typeof npm$namespace$TabBarItem$propTypes
  };

  declare var npm$namespace$TabBarItem$propTypes: {
    active: typeof TabBarItem$propTypes$active,
    icon: typeof TabBarItem$propTypes$icon,
    label: typeof TabBarItem$propTypes$label,

    active: typeof npm$namespace$TabBarItem$propTypes$active,
    icon: typeof npm$namespace$TabBarItem$propTypes$icon,
    label: typeof npm$namespace$TabBarItem$propTypes$label
  };
  declare function TabBarItem$propTypes$active(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function TabBarItem$propTypes$icon(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function TabBarItem$propTypes$label(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$TabBarItem$propTypes$active: {
    isRequired: typeof TabBarItem$propTypes$active$isRequired
  };
  declare function TabBarItem$propTypes$active$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$TabBarItem$propTypes$icon: {
    isRequired: typeof TabBarItem$propTypes$icon$isRequired
  };
  declare function TabBarItem$propTypes$icon$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$TabBarItem$propTypes$label: {
    isRequired: typeof TabBarItem$propTypes$label$isRequired
  };
  declare function TabBarItem$propTypes$label$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$TabBodyItem: {
    propTypes: typeof npm$namespace$TabBodyItem$propTypes
  };

  declare var npm$namespace$TabBodyItem$propTypes: {
    active: typeof TabBodyItem$propTypes$active,

    active: typeof npm$namespace$TabBodyItem$propTypes$active
  };
  declare function TabBodyItem$propTypes$active(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$TabBodyItem$propTypes$active: {
    isRequired: typeof TabBodyItem$propTypes$active$isRequired
  };
  declare function TabBodyItem$propTypes$active$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$TextArea: {
    propTypes: typeof npm$namespace$TextArea$propTypes
  };

  declare var npm$namespace$TextArea$propTypes: {
    defaultValue: typeof TextArea$propTypes$defaultValue,
    maxLength: typeof TextArea$propTypes$maxLength,
    showCounter: typeof TextArea$propTypes$showCounter,

    defaultValue: typeof npm$namespace$TextArea$propTypes$defaultValue,
    maxLength: typeof npm$namespace$TextArea$propTypes$maxLength,
    showCounter: typeof npm$namespace$TextArea$propTypes$showCounter
  };
  declare function TextArea$propTypes$defaultValue(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function TextArea$propTypes$maxLength(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function TextArea$propTypes$showCounter(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$TextArea$propTypes$defaultValue: {
    isRequired: typeof TextArea$propTypes$defaultValue$isRequired
  };
  declare function TextArea$propTypes$defaultValue$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$TextArea$propTypes$maxLength: {
    isRequired: typeof TextArea$propTypes$maxLength$isRequired
  };
  declare function TextArea$propTypes$maxLength$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$TextArea$propTypes$showCounter: {
    isRequired: typeof TextArea$propTypes$showCounter$isRequired
  };
  declare function TextArea$propTypes$showCounter$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Toast: {
    propTypes: typeof npm$namespace$Toast$propTypes
  };

  declare var npm$namespace$Toast$propTypes: {
    icon: typeof Toast$propTypes$icon,
    iconSize: typeof Toast$propTypes$iconSize,
    show: typeof Toast$propTypes$show,

    icon: typeof npm$namespace$Toast$propTypes$icon,
    iconSize: typeof npm$namespace$Toast$propTypes$iconSize,
    show: typeof npm$namespace$Toast$propTypes$show
  };
  declare function Toast$propTypes$icon(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Toast$propTypes$iconSize(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Toast$propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Toast$propTypes$icon: {
    isRequired: typeof Toast$propTypes$icon$isRequired
  };
  declare function Toast$propTypes$icon$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Toast$propTypes$iconSize: {
    isRequired: typeof Toast$propTypes$iconSize$isRequired
  };
  declare function Toast$propTypes$iconSize$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Toast$propTypes$show: {
    isRequired: typeof Toast$propTypes$show$isRequired
  };
  declare function Toast$propTypes$show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Toptips: {
    defaultProps: typeof Toptips$defaultProps,

    propTypes: typeof npm$namespace$Toptips$propTypes
  };
  declare var Toptips$defaultProps: {
    show: boolean,
    type: string
  };

  declare var npm$namespace$Toptips$propTypes: {
    show: typeof Toptips$propTypes$show,
    type: typeof Toptips$propTypes$type,

    show: typeof npm$namespace$Toptips$propTypes$show,
    type: typeof npm$namespace$Toptips$propTypes$type
  };
  declare function Toptips$propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Toptips$propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Toptips$propTypes$show: {
    isRequired: typeof Toptips$propTypes$show$isRequired
  };
  declare function Toptips$propTypes$show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Toptips$propTypes$type: {
    isRequired: typeof Toptips$propTypes$type$isRequired
  };
  declare function Toptips$propTypes$type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Uploader: {
    propTypes: typeof npm$namespace$Uploader$propTypes
  };

  declare var npm$namespace$Uploader$propTypes: {
    files: typeof Uploader$propTypes$files,
    lang: typeof Uploader$propTypes$lang,
    maxCount: typeof Uploader$propTypes$maxCount,
    maxWidth: typeof Uploader$propTypes$maxWidth,
    onChange: typeof Uploader$propTypes$onChange,
    onError: typeof Uploader$propTypes$onError,
    title: typeof Uploader$propTypes$title,

    files: typeof npm$namespace$Uploader$propTypes$files,
    lang: typeof npm$namespace$Uploader$propTypes$lang,
    maxCount: typeof npm$namespace$Uploader$propTypes$maxCount,
    maxWidth: typeof npm$namespace$Uploader$propTypes$maxWidth,
    onChange: typeof npm$namespace$Uploader$propTypes$onChange,
    onError: typeof npm$namespace$Uploader$propTypes$onError,
    title: typeof npm$namespace$Uploader$propTypes$title
  };
  declare function Uploader$propTypes$files(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Uploader$propTypes$lang(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Uploader$propTypes$maxCount(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Uploader$propTypes$maxWidth(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Uploader$propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Uploader$propTypes$onError(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function Uploader$propTypes$title(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Uploader$propTypes$files: {
    isRequired: typeof Uploader$propTypes$files$isRequired
  };
  declare function Uploader$propTypes$files$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Uploader$propTypes$lang: {
    isRequired: typeof Uploader$propTypes$lang$isRequired
  };
  declare function Uploader$propTypes$lang$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Uploader$propTypes$maxCount: {
    isRequired: typeof Uploader$propTypes$maxCount$isRequired
  };
  declare function Uploader$propTypes$maxCount$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Uploader$propTypes$maxWidth: {
    isRequired: typeof Uploader$propTypes$maxWidth$isRequired
  };
  declare function Uploader$propTypes$maxWidth$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Uploader$propTypes$onChange: {
    isRequired: typeof Uploader$propTypes$onChange$isRequired
  };
  declare function Uploader$propTypes$onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Uploader$propTypes$onError: {
    isRequired: typeof Uploader$propTypes$onError$isRequired
  };
  declare function Uploader$propTypes$onError$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Uploader$propTypes$title: {
    isRequired: typeof Uploader$propTypes$title$isRequired
  };
  declare function Uploader$propTypes$title$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;
}
