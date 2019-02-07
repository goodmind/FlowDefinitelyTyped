declare module "react-weui" {
  declare export class ActionSheet {
    constructor(props: any): this;
    handleMaskClick(e: any): void;
    render(): any;
    renderActions(): any;
    renderMenuItem(): any;
    static defaultProps: {
      propTypes$actions: any[],
      propTypes$autoDectect: boolean,
      propTypes$menus: any[],
      propTypes$show: boolean,
      propTypes$type: string
    };
  }
  declare export class Article {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {};
    static propTypes: {};
  }
  declare export class Badge {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$dot: boolean,
      propTypes$preset: string
    };
  }
  declare export class Button {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$disabled: boolean,
      propTypes$size: string,
      propTypes$type: string
    };
  }
  declare export class ButtonArea {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$direction: string
    };
  }
  declare export class CityPicker {
    constructor(props: any): this;
    handleChange(): void;
    parseData(propTypes$data: any, subKey: any, ...args: any[]): any;
    render(): any;
    updateGroup(
      item: any,
      i: any,
      propTypes$groupIndex: any,
      propTypes$selected: any,
      picker: any
    ): void;
    static defaultProps: {
      propTypes$data: any[],
      propTypes$dataMap: {
        id: string,
        items: string
      },
      propTypes$selected: any[],
      propTypes$show: boolean
    };
  }
  declare export class Dialog {
    constructor(props: any): this;
    render(): any;
    renderButtons(): any;
    static defaultProps: {
      propTypes$autoDectect: boolean,
      propTypes$buttons: any[],
      propTypes$show: boolean,
      propTypes$title: string,
      propTypes$type: string
    };
  }
  declare export class Form {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$checkbox: boolean,
      propTypes$radio: boolean
    };
  }
  declare export class FormCell {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$checkbox: boolean,
      propTypes$radio: boolean,
      propTypes$select: boolean,
      propTypes$selectPos: any,
      switch: boolean,
      propTypes$vcode: boolean,
      propTypes$warn: boolean
    };
  }
  declare export class Grid {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$icon: boolean,
      propTypes$label: string
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
    renderData(propTypes$data: any): any;
    static defaultProps: {
      propTypes$data: any[]
    };
  }
  declare export class Icon {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$size: string,
      propTypes$value: string
    };
  }
  declare export class Mask {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$transparent: boolean
    };
  }
  declare export class MediaBox {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$type: string
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
      propTypes$data: any[]
    };
  }
  declare export class MediaBoxInfoMeta {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$extra: boolean
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
      propTypes$buttons: any[],
      propTypes$type: string
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
      propTypes$active: boolean
    };
  }
  declare export class Panel {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$access: boolean
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
    handleChange(item: any, i: any, propTypes$groupIndex: any): void;
    handleChanges(): void;
    handleClose(cb: any): any;
    render(): any;
    renderActions(): any;
    renderGroups(): any;
    static defaultProps: {
      propTypes$actions: any[],
      propTypes$groups: any[],
      propTypes$lang: {
        leftBtn: string,
        rightBtn: string
      },
      propTypes$show: boolean
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
      propTypes$aniamtion: boolean,
      propTypes$defaultIndex: number,
      propTypes$groupIndex: number,
      propTypes$height: number,
      propTypes$indicatorHeight: number,
      propTypes$indicatorTop: number,
      propTypes$itemHeight: number,
      mapKeys: {
        propTypes$label: string
      }
    };
  }
  declare export class Popup {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$enableMask: boolean,
      propTypes$show: boolean
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
      propTypes$lang: {
        cancel: string
      },
      propTypes$onCancel: any,
      propTypes$onChange: any,
      propTypes$onClear: any,
      propTypes$onSubmit: any,
      propTypes$placeholder: string,
      propTypes$searchName: string
    };
  }
  declare export class Select {
    constructor(...args: any[]): this;
    render(): any;
    renderData(propTypes$data: any): any;
    static defaultProps: {
      propTypes$data: any[]
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
      propTypes$defaultValue: number,
      propTypes$disabled: boolean,
      propTypes$max: number,
      propTypes$min: number,
      propTypes$showValue: boolean,
      propTypes$snapToValue: boolean,
      propTypes$step: number
    };
  }
  declare export class Tab {
    constructor(...args: any[]): this;
    handleHeaderClick(idx: any): void;
    parseChild(children: any): any;
    render(): any;
    renderBar(propTypes$type: any, children: any, cls: any): any;
    static defaultProps: {
      propTypes$defaultIndex: number,
      propTypes$type: string
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
      propTypes$active: boolean,
      propTypes$icon: boolean,
      propTypes$label: string
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
      propTypes$active: boolean
    };
  }
  declare export class TextArea {
    constructor(...args: any[]): this;
    handleChange(e: any): void;
    render(): any;
    static defaultProps: {
      propTypes$defaultValue: any,
      propTypes$showCounter: boolean
    };
  }
  declare export class Toast {
    constructor(...args: any[]): this;
    render(): any;
    static defaultProps: {
      propTypes$icon: string,
      propTypes$show: boolean
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
      propTypes$files: any[],
      propTypes$lang: {
        maxError: any
      },
      propTypes$maxCount: number,
      propTypes$maxWidth: number,
      propTypes$onChange: any,
      propTypes$onError: any,
      propTypes$title: string
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

  declare var npm$namespace$propTypes: {
    actions: typeof propTypes$actions,
    autoDectect: typeof propTypes$autoDectect,
    menus: typeof propTypes$menus,
    onRequestClose: typeof propTypes$onRequestClose,
    show: typeof propTypes$show,
    type: typeof propTypes$type
  };
  declare function propTypes$actions(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$autoDectect(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$menus(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onRequestClose(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$actions: {
    isRequired: typeof actions$isRequired
  };
  declare function actions$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$autoDectect: {
    isRequired: typeof autoDectect$isRequired
  };
  declare function autoDectect$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$menus: {
    isRequired: typeof menus$isRequired
  };
  declare function menus$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onRequestClose: {
    isRequired: typeof onRequestClose$isRequired
  };
  declare function onRequestClose$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$show: {
    isRequired: typeof show$isRequired
  };
  declare function show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$type: {
    isRequired: typeof type$isRequired
  };
  declare function type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    dot: typeof propTypes$dot,
    preset: typeof propTypes$preset
  };
  declare function propTypes$dot(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$preset(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$dot: {
    isRequired: typeof dot$isRequired
  };
  declare function dot$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$preset: {
    isRequired: typeof preset$isRequired
  };
  declare function preset$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    disabled: typeof propTypes$disabled,
    size: typeof propTypes$size,
    type: typeof propTypes$type
  };
  declare function propTypes$disabled(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$size(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$disabled: {
    isRequired: typeof disabled$isRequired
  };
  declare function disabled$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$size: {
    isRequired: typeof size$isRequired
  };
  declare function size$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$type: {
    isRequired: typeof type$isRequired
  };
  declare function type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    direction: typeof propTypes$direction
  };
  declare function propTypes$direction(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$direction: {
    isRequired: typeof direction$isRequired
  };
  declare function direction$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Cell: {
    defaultProps: typeof Cell$defaultProps
  };
  declare var Cell$defaultProps: {
    propTypes$access: boolean,
    propTypes$link: boolean
  };

  declare var npm$namespace$propTypes: {
    access: typeof propTypes$access,
    component: typeof propTypes$component,
    link: typeof propTypes$link
  };
  declare function propTypes$access(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$component(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$link(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$access: {
    isRequired: typeof access$isRequired
  };
  declare function access$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$component: {
    isRequired: typeof component$isRequired
  };
  declare function component$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$link: {
    isRequired: typeof link$isRequired
  };
  declare function link$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CellBody: {
    defaultProps: typeof CellBody$defaultProps
  };
  declare var CellBody$defaultProps: {
    propTypes$primary: boolean
  };

  declare var npm$namespace$propTypes: {
    primary: typeof propTypes$primary
  };
  declare function propTypes$primary(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$primary: {
    isRequired: typeof primary$isRequired
  };
  declare function primary$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CellFooter: {
    defaultProps: typeof CellFooter$defaultProps
  };
  declare var CellFooter$defaultProps: {
    propTypes$primary: boolean
  };

  declare var npm$namespace$propTypes: {
    primary: typeof propTypes$primary
  };
  declare function propTypes$primary(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$primary: {
    isRequired: typeof primary$isRequired
  };
  declare function primary$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$CellHeader: {
    defaultProps: typeof CellHeader$defaultProps
  };
  declare var CellHeader$defaultProps: {
    propTypes$primary: boolean
  };

  declare var npm$namespace$propTypes: {
    primary: typeof propTypes$primary
  };
  declare function propTypes$primary(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$primary: {
    isRequired: typeof primary$isRequired
  };
  declare function primary$isRequired(
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

  declare var npm$namespace$propTypes: {
    data: typeof propTypes$data,
    dataMap: typeof propTypes$dataMap,
    selected: typeof propTypes$selected,
    show: typeof propTypes$show
  };
  declare function propTypes$data(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$dataMap(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$selected(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$dataMap: {
    isRequired: typeof dataMap$isRequired
  };
  declare function dataMap$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$selected: {
    isRequired: typeof selected$isRequired
  };
  declare function selected$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$show: {
    isRequired: typeof show$isRequired
  };
  declare function show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    autoDectect: typeof propTypes$autoDectect,
    buttons: typeof propTypes$buttons,
    show: typeof propTypes$show,
    title: typeof propTypes$title,
    type: typeof propTypes$type
  };
  declare function propTypes$autoDectect(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$buttons(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$title(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$autoDectect: {
    isRequired: typeof autoDectect$isRequired
  };
  declare function autoDectect$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$buttons: {
    isRequired: typeof buttons$isRequired
  };
  declare function buttons$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$show: {
    isRequired: typeof show$isRequired
  };
  declare function show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$title: {
    isRequired: typeof title$isRequired
  };
  declare function title$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$type: {
    isRequired: typeof type$isRequired
  };
  declare function type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$FlexItem: {
    defaultProps: typeof FlexItem$defaultProps
  };
  declare var FlexItem$defaultProps: {
    propTypes$component: string
  };

  declare var npm$namespace$propTypes: {
    component: typeof propTypes$component
  };
  declare function propTypes$component(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$component: {
    isRequired: typeof component$isRequired
  };
  declare function component$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    checkbox: typeof propTypes$checkbox,
    radio: typeof propTypes$radio
  };
  declare function propTypes$checkbox(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$radio(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$checkbox: {
    isRequired: typeof checkbox$isRequired
  };
  declare function checkbox$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$radio: {
    isRequired: typeof radio$isRequired
  };
  declare function radio$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    checkbox: typeof propTypes$checkbox,
    radio: typeof propTypes$radio,
    select: typeof propTypes$select,
    selectPos: typeof propTypes$selectPos,
    vcode: typeof propTypes$vcode,
    warn: typeof propTypes$warn
  };
  declare function propTypes$checkbox(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$radio(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$select(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$selectPos(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$vcode(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$warn(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$checkbox: {
    isRequired: typeof checkbox$isRequired
  };
  declare function checkbox$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$radio: {
    isRequired: typeof radio$isRequired
  };
  declare function radio$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$select: {
    isRequired: typeof select$isRequired
  };
  declare function select$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$selectPos: {
    isRequired: typeof selectPos$isRequired
  };
  declare function selectPos$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$vcode: {
    isRequired: typeof vcode$isRequired
  };
  declare function vcode$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$warn: {
    isRequired: typeof warn$isRequired
  };
  declare function warn$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Gallery: {
    defaultProps: typeof Gallery$defaultProps
  };
  declare var Gallery$defaultProps: {
    propTypes$show: any,
    propTypes$src: string
  };

  declare var npm$namespace$propTypes: {
    show: typeof propTypes$show,
    src: typeof propTypes$src
  };
  declare function propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$src(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$show: {
    isRequired: typeof show$isRequired
  };
  declare function show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$src: {
    isRequired: typeof src$isRequired
  };
  declare function src$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    icon: typeof propTypes$icon,
    label: typeof propTypes$label
  };
  declare function propTypes$icon(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$label(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$icon: {
    isRequired: typeof icon$isRequired
  };
  declare function icon$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$label: {
    isRequired: typeof label$isRequired
  };
  declare function label$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    data: typeof propTypes$data
  };
  declare function propTypes$data(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$data: {
    isRequired: typeof data$isRequired
  };
  declare function data$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    size: typeof propTypes$size,
    value: typeof propTypes$value
  };
  declare function propTypes$size(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$value(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$size: {
    isRequired: typeof size$isRequired
  };
  declare function size$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$value: {
    isRequired: typeof value$isRequired
  };
  declare function value$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Input: {
    defaultProps: typeof Input$defaultProps
  };
  declare var Input$defaultProps: {
    propTypes$defaultValue: any
  };

  declare var npm$namespace$propTypes: {
    defaultValue: typeof propTypes$defaultValue
  };
  declare function propTypes$defaultValue(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$defaultValue: {
    isRequired: typeof defaultValue$isRequired
  };
  declare function defaultValue$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$LoadMore: {
    defaultProps: typeof LoadMore$defaultProps
  };
  declare var LoadMore$defaultProps: {
    propTypes$loading: boolean,
    propTypes$showDot: boolean,
    propTypes$showLine: boolean
  };

  declare var npm$namespace$propTypes: {
    loading: typeof propTypes$loading,
    showDot: typeof propTypes$showDot,
    showLine: typeof propTypes$showLine
  };
  declare function propTypes$loading(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$showDot(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$showLine(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$loading: {
    isRequired: typeof loading$isRequired
  };
  declare function loading$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$showDot: {
    isRequired: typeof showDot$isRequired
  };
  declare function showDot$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$showLine: {
    isRequired: typeof showLine$isRequired
  };
  declare function showLine$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    transparent: typeof propTypes$transparent
  };
  declare function propTypes$transparent(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$transparent: {
    isRequired: typeof transparent$isRequired
  };
  declare function transparent$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    type: typeof propTypes$type
  };
  declare function propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$type: {
    isRequired: typeof type$isRequired
  };
  declare function type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    data: typeof propTypes$data
  };
  declare function propTypes$data(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$data: {
    isRequired: typeof data$isRequired
  };
  declare function data$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    extra: typeof propTypes$extra
  };
  declare function propTypes$extra(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$extra: {
    isRequired: typeof extra$isRequired
  };
  declare function extra$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    buttons: typeof propTypes$buttons,
    description: typeof propTypes$description,
    extraHref: typeof propTypes$extraHref,
    extraText: typeof propTypes$extraText,
    footer: typeof propTypes$footer,
    title: typeof propTypes$title,
    type: typeof propTypes$type
  };
  declare function propTypes$buttons(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$description(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$extraHref(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$extraText(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$footer(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$title(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$buttons: {
    isRequired: typeof buttons$isRequired
  };
  declare function buttons$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$description: {
    isRequired: typeof description$isRequired
  };
  declare function description$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$extraHref: {
    isRequired: typeof extraHref$isRequired
  };
  declare function extraHref$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$extraText: {
    isRequired: typeof extraText$isRequired
  };
  declare function extraText$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$footer: {
    isRequired: typeof footer$isRequired
  };
  declare function footer$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$title: {
    isRequired: typeof title$isRequired
  };
  declare function title$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$type: {
    isRequired: typeof type$isRequired
  };
  declare function type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    active: typeof propTypes$active,
    label: typeof propTypes$label
  };
  declare function propTypes$active(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$label(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$active: {
    isRequired: typeof active$isRequired
  };
  declare function active$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$label: {
    isRequired: typeof label$isRequired
  };
  declare function label$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    access: typeof propTypes$access
  };
  declare function propTypes$access(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$access: {
    isRequired: typeof access$isRequired
  };
  declare function access$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    actions: typeof propTypes$actions,
    defaultSelect: typeof propTypes$defaultSelect,
    groups: typeof propTypes$groups,
    lang: typeof propTypes$lang,
    onCancel: typeof propTypes$onCancel,
    onChange: typeof propTypes$onChange,
    onGroupChange: typeof propTypes$onGroupChange,
    show: typeof propTypes$show
  };
  declare function propTypes$actions(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$defaultSelect(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$groups(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$lang(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onCancel(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onGroupChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$actions: {
    isRequired: typeof actions$isRequired
  };
  declare function actions$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$defaultSelect: {
    isRequired: typeof defaultSelect$isRequired
  };
  declare function defaultSelect$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$groups: {
    isRequired: typeof groups$isRequired
  };
  declare function groups$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$lang: {
    isRequired: typeof lang$isRequired
  };
  declare function lang$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onCancel: {
    isRequired: typeof onCancel$isRequired
  };
  declare function onCancel$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onChange: {
    isRequired: typeof onChange$isRequired
  };
  declare function onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onGroupChange: {
    isRequired: typeof onGroupChange$isRequired
  };
  declare function onGroupChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$show: {
    isRequired: typeof show$isRequired
  };
  declare function show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    aniamtion: typeof propTypes$aniamtion,
    defaultIndex: typeof propTypes$defaultIndex,
    groupIndex: typeof propTypes$groupIndex,
    height: typeof propTypes$height,
    indicatorHeight: typeof propTypes$indicatorHeight,
    indicatorTop: typeof propTypes$indicatorTop,
    itemHeight: typeof propTypes$itemHeight,
    onChange: typeof propTypes$onChange
  };
  declare function propTypes$aniamtion(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$defaultIndex(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$groupIndex(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$height(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$indicatorHeight(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$indicatorTop(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$itemHeight(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$aniamtion: {
    isRequired: typeof aniamtion$isRequired
  };
  declare function aniamtion$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$defaultIndex: {
    isRequired: typeof defaultIndex$isRequired
  };
  declare function defaultIndex$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$groupIndex: {
    isRequired: typeof groupIndex$isRequired
  };
  declare function groupIndex$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$height: {
    isRequired: typeof height$isRequired
  };
  declare function height$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$indicatorHeight: {
    isRequired: typeof indicatorHeight$isRequired
  };
  declare function indicatorHeight$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$indicatorTop: {
    isRequired: typeof indicatorTop$isRequired
  };
  declare function indicatorTop$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$itemHeight: {
    isRequired: typeof itemHeight$isRequired
  };
  declare function itemHeight$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onChange: {
    isRequired: typeof onChange$isRequired
  };
  declare function onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    enableMask: typeof propTypes$enableMask,
    show: typeof propTypes$show
  };
  declare function propTypes$enableMask(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$enableMask: {
    isRequired: typeof enableMask$isRequired
  };
  declare function enableMask$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$show: {
    isRequired: typeof show$isRequired
  };
  declare function show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PopupHeader: {
    defaultProps: typeof PopupHeader$defaultProps
  };
  declare var PopupHeader$defaultProps: {
    propTypes$left: string,
    propTypes$right: string
  };

  declare var npm$namespace$propTypes: {
    left: typeof propTypes$left,
    leftOnClick: typeof propTypes$leftOnClick,
    right: typeof propTypes$right,
    rightOnClick: typeof propTypes$rightOnClick
  };
  declare function propTypes$left(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$leftOnClick(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$right(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$rightOnClick(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$left: {
    isRequired: typeof left$isRequired
  };
  declare function left$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$leftOnClick: {
    isRequired: typeof leftOnClick$isRequired
  };
  declare function leftOnClick$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$right: {
    isRequired: typeof right$isRequired
  };
  declare function right$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$rightOnClick: {
    isRequired: typeof rightOnClick$isRequired
  };
  declare function rightOnClick$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PreviewButton: {
    defaultProps: typeof PreviewButton$defaultProps
  };
  declare var PreviewButton$defaultProps: {
    propTypes$primary: boolean
  };

  declare var npm$namespace$propTypes: {
    primary: typeof propTypes$primary
  };
  declare function propTypes$primary(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$primary: {
    isRequired: typeof primary$isRequired
  };
  declare function primary$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$PreviewItem: {
    defaultProps: typeof PreviewItem$defaultProps
  };
  declare var PreviewItem$defaultProps: {
    propTypes$label: boolean,
    propTypes$value: boolean
  };

  declare var npm$namespace$propTypes: {
    label: typeof propTypes$label,
    value: typeof propTypes$value
  };
  declare function propTypes$label(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$value(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$label: {
    isRequired: typeof label$isRequired
  };
  declare function label$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$value: {
    isRequired: typeof value$isRequired
  };
  declare function value$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Progress: {
    defaultProps: typeof Progress$defaultProps
  };
  declare var Progress$defaultProps: {
    propTypes$showCancel: boolean,
    propTypes$value: number
  };

  declare var npm$namespace$propTypes: {
    showCancel: typeof propTypes$showCancel,
    value: typeof propTypes$value
  };
  declare function propTypes$showCancel(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$value(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$showCancel: {
    isRequired: typeof showCancel$isRequired
  };
  declare function showCancel$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$value: {
    isRequired: typeof value$isRequired
  };
  declare function value$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    lang: typeof propTypes$lang,
    onCancel: typeof propTypes$onCancel,
    onChange: typeof propTypes$onChange,
    onClear: typeof propTypes$onClear,
    onSubmit: typeof propTypes$onSubmit,
    placeholder: typeof propTypes$placeholder,
    searchName: typeof propTypes$searchName
  };
  declare function propTypes$lang(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onCancel(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onClear(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onSubmit(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$placeholder(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$searchName(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$lang: {
    isRequired: typeof lang$isRequired
  };
  declare function lang$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onCancel: {
    isRequired: typeof onCancel$isRequired
  };
  declare function onCancel$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onChange: {
    isRequired: typeof onChange$isRequired
  };
  declare function onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onClear: {
    isRequired: typeof onClear$isRequired
  };
  declare function onClear$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onSubmit: {
    isRequired: typeof onSubmit$isRequired
  };
  declare function onSubmit$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$placeholder: {
    isRequired: typeof placeholder$isRequired
  };
  declare function placeholder$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$searchName: {
    isRequired: typeof searchName$isRequired
  };
  declare function searchName$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    data: typeof propTypes$data
  };
  declare function propTypes$data(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$data: {
    isRequired: typeof data$isRequired
  };
  declare function data$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    defaultValue: typeof propTypes$defaultValue,
    disabled: typeof propTypes$disabled,
    max: typeof propTypes$max,
    min: typeof propTypes$min,
    onChange: typeof propTypes$onChange,
    showValue: typeof propTypes$showValue,
    snapToValue: typeof propTypes$snapToValue,
    step: typeof propTypes$step,
    value: typeof propTypes$value
  };
  declare function propTypes$defaultValue(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$disabled(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$max(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$min(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$showValue(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$snapToValue(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$step(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$value(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$defaultValue: {
    isRequired: typeof defaultValue$isRequired
  };
  declare function defaultValue$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$disabled: {
    isRequired: typeof disabled$isRequired
  };
  declare function disabled$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$max: {
    isRequired: typeof max$isRequired
  };
  declare function max$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$min: {
    isRequired: typeof min$isRequired
  };
  declare function min$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onChange: {
    isRequired: typeof onChange$isRequired
  };
  declare function onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$showValue: {
    isRequired: typeof showValue$isRequired
  };
  declare function showValue$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$snapToValue: {
    isRequired: typeof snapToValue$isRequired
  };
  declare function snapToValue$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$step: {
    isRequired: typeof step$isRequired
  };
  declare function step$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$value: {
    isRequired: typeof value$isRequired
  };
  declare function value$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    defaultIndex: typeof propTypes$defaultIndex,
    onChange: typeof propTypes$onChange,
    type: typeof propTypes$type
  };
  declare function propTypes$defaultIndex(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$defaultIndex: {
    isRequired: typeof defaultIndex$isRequired
  };
  declare function defaultIndex$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onChange: {
    isRequired: typeof onChange$isRequired
  };
  declare function onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$type: {
    isRequired: typeof type$isRequired
  };
  declare function type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    active: typeof propTypes$active,
    icon: typeof propTypes$icon,
    label: typeof propTypes$label
  };
  declare function propTypes$active(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$icon(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$label(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$active: {
    isRequired: typeof active$isRequired
  };
  declare function active$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$icon: {
    isRequired: typeof icon$isRequired
  };
  declare function icon$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$label: {
    isRequired: typeof label$isRequired
  };
  declare function label$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    active: typeof propTypes$active
  };
  declare function propTypes$active(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$active: {
    isRequired: typeof active$isRequired
  };
  declare function active$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    defaultValue: typeof propTypes$defaultValue,
    maxLength: typeof propTypes$maxLength,
    showCounter: typeof propTypes$showCounter
  };
  declare function propTypes$defaultValue(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$maxLength(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$showCounter(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$defaultValue: {
    isRequired: typeof defaultValue$isRequired
  };
  declare function defaultValue$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$maxLength: {
    isRequired: typeof maxLength$isRequired
  };
  declare function maxLength$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$showCounter: {
    isRequired: typeof showCounter$isRequired
  };
  declare function showCounter$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    icon: typeof propTypes$icon,
    iconSize: typeof propTypes$iconSize,
    show: typeof propTypes$show
  };
  declare function propTypes$icon(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$iconSize(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$icon: {
    isRequired: typeof icon$isRequired
  };
  declare function icon$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$iconSize: {
    isRequired: typeof iconSize$isRequired
  };
  declare function iconSize$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$show: {
    isRequired: typeof show$isRequired
  };
  declare function show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$Toptips: {
    defaultProps: typeof Toptips$defaultProps
  };
  declare var Toptips$defaultProps: {
    propTypes$show: boolean,
    propTypes$type: string
  };

  declare var npm$namespace$propTypes: {
    show: typeof propTypes$show,
    type: typeof propTypes$type
  };
  declare function propTypes$show(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$type(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$show: {
    isRequired: typeof show$isRequired
  };
  declare function show$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$type: {
    isRequired: typeof type$isRequired
  };
  declare function type$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$propTypes: {
    files: typeof propTypes$files,
    lang: typeof propTypes$lang,
    maxCount: typeof propTypes$maxCount,
    maxWidth: typeof propTypes$maxWidth,
    onChange: typeof propTypes$onChange,
    onError: typeof propTypes$onError,
    title: typeof propTypes$title
  };
  declare function propTypes$files(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$lang(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$maxCount(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$maxWidth(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onChange(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$onError(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare function propTypes$title(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$files: {
    isRequired: typeof files$isRequired
  };
  declare function files$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$lang: {
    isRequired: typeof lang$isRequired
  };
  declare function lang$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$maxCount: {
    isRequired: typeof maxCount$isRequired
  };
  declare function maxCount$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$maxWidth: {
    isRequired: typeof maxWidth$isRequired
  };
  declare function maxWidth$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onChange: {
    isRequired: typeof onChange$isRequired
  };
  declare function onChange$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$onError: {
    isRequired: typeof onError$isRequired
  };
  declare function onError$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;

  declare var npm$namespace$title: {
    isRequired: typeof title$isRequired
  };
  declare function title$isRequired(
    p0: any,
    p1: any,
    p2: any,
    p3: any,
    p4: any,
    p5: any
  ): any;
}
