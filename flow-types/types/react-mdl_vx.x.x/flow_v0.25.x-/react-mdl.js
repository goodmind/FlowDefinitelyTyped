declare module "react-mdl" {
  import typeof * as React from "react";

  declare module.exports: typeof __ReactMDL;

  declare type __ReactMDL$__MDLClassProps = React.ClassAttributes<any>;

  declare type __ReactMDL$__MDLOtherProps = React.HTMLProps<any>;

  declare class __ReactMDL$__MDLComponent<P> mixins React.Component<P> {}

  declare class __ReactMDL$__MDLBasicComponent
    mixins __ReactMDL$__MDLComponent<__ReactMDL$__MDLOtherProps> {}

  declare interface __ReactMDL$ShadowedComponent {
    shadow?: number;
  }

  declare interface __ReactMDL$RippleComponent {
    ripple?: boolean;
  }

  declare interface __ReactMDL$CustomRenderedComponent {
    component?: string | JSX.Element | Function;
  }

  declare interface __ReactMDL$MDLHTMLAttributes {
    defaultChecked?: boolean;
    defaultValue?: number | string | string[];
    accept?: string;
    acceptCharset?: string;
    accessKey?: string;
    action?: string;
    allowFullScreen?: boolean;
    allowTransparency?: boolean;
    alt?: string;
    async?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    autoPlay?: boolean;
    capture?: boolean;
    cellPadding?: number | string;
    cellSpacing?: number | string;
    charSet?: string;
    challenge?: string;
    checked?: boolean;
    classID?: string;
    className?: string;
    cols?: number;
    colSpan?: number;
    content?: string;
    contentEditable?: boolean;
    contextMenu?: string;
    controls?: boolean;
    coords?: string;
    crossOrigin?: string;
    dateTime?: string;
    default?: boolean;
    defer?: boolean;
    dir?: string;
    disabled?: boolean;
    download?: any;
    draggable?: boolean;
    encType?: string;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    frameBorder?: number | string;
    headers?: string;
    height?: number | string;
    hidden?: boolean;
    high?: number;
    href?: string;
    hrefLang?: string;
    htmlFor?: string;
    httpEquiv?: string;
    id?: string;
    inputMode?: string;
    integrity?: string;
    is?: string;
    keyParams?: string;
    keyType?: string;
    kind?: string;
    lang?: string;
    list?: string;
    loop?: boolean;
    low?: number;
    manifest?: string;
    marginHeight?: number;
    marginWidth?: number;
    max?: number | string;
    maxLength?: number;
    media?: string;
    mediaGroup?: string;
    method?: string;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    muted?: boolean;
    nonce?: string;
    noValidate?: boolean;
    open?: boolean;
    optimum?: number;
    pattern?: string;
    placeholder?: string;
    poster?: string;
    preload?: string;
    radioGroup?: string;
    readOnly?: boolean;
    rel?: string;
    required?: boolean;
    reversed?: boolean;
    role?: string;
    rowSpan?: number;
    sandbox?: string;
    scope?: string;
    scoped?: boolean;
    scrolling?: string;
    seamless?: boolean;
    selected?: boolean;
    shape?: string;
    sizes?: string;
    span?: number;
    spellCheck?: boolean;
    src?: string;
    srcDoc?: string;
    srcLang?: string;
    srcSet?: string;
    start?: number;
    step?: number | string;
    style?: React.CSSProperties;
    summary?: string;
    tabIndex?: number;
    target?: string;
    type?: string;
    useMap?: string;
    width?: number | string;
    wmode?: string;
    wrap?: string;
    about?: string;
    datatype?: string;
    inlist?: any;
    prefix?: string;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    color?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    results?: number;
    security?: string;
    unselectable?: boolean;
    [key: string]: any;
  }

  declare interface __ReactMDL$MDLDOMAttributes<T> {
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
      __html: string
    };
    onCopy?: React.ClipboardEventHandler<T>;
    onCut?: React.ClipboardEventHandler<T>;
    onPaste?: React.ClipboardEventHandler<T>;
    onCompositionEnd?: React.CompositionEventHandler<T>;
    onCompositionStart?: React.CompositionEventHandler<T>;
    onCompositionUpdate?: React.CompositionEventHandler<T>;
    onFocus?: React.FocusEventHandler<T>;
    onBlur?: React.FocusEventHandler<T>;
    onInput?: React.FormEventHandler<T>;
    onSubmit?: React.FormEventHandler<T>;
    onLoad?: React.ReactEventHandler<T>;
    onError?: React.ReactEventHandler<T>;
    onKeyDown?: React.KeyboardEventHandler<T>;
    onKeyPress?: React.KeyboardEventHandler<T>;
    onKeyUp?: React.KeyboardEventHandler<T>;
    onAbort?: React.ReactEventHandler<T>;
    onCanPlay?: React.ReactEventHandler<T>;
    onCanPlayThrough?: React.ReactEventHandler<T>;
    onDurationChange?: React.ReactEventHandler<T>;
    onEmptied?: React.ReactEventHandler<T>;
    onEncrypted?: React.ReactEventHandler<T>;
    onEnded?: React.ReactEventHandler<T>;
    onLoadedData?: React.ReactEventHandler<T>;
    onLoadedMetadata?: React.ReactEventHandler<T>;
    onLoadStart?: React.ReactEventHandler<T>;
    onPause?: React.ReactEventHandler<T>;
    onPlay?: React.ReactEventHandler<T>;
    onPlaying?: React.ReactEventHandler<T>;
    onProgress?: React.ReactEventHandler<T>;
    onRateChange?: React.ReactEventHandler<T>;
    onSeeked?: React.ReactEventHandler<T>;
    onSeeking?: React.ReactEventHandler<T>;
    onStalled?: React.ReactEventHandler<T>;
    onSuspend?: React.ReactEventHandler<T>;
    onTimeUpdate?: React.ReactEventHandler<T>;
    onVolumeChange?: React.ReactEventHandler<T>;
    onWaiting?: React.ReactEventHandler<T>;
    onContextMenu?: React.MouseEventHandler<T>;
    onDoubleClick?: React.MouseEventHandler<T>;
    onDrag?: React.DragEventHandler<T>;
    onDragEnd?: React.DragEventHandler<T>;
    onDragEnter?: React.DragEventHandler<T>;
    onDragExit?: React.DragEventHandler<T>;
    onDragLeave?: React.DragEventHandler<T>;
    onDragOver?: React.DragEventHandler<T>;
    onDragStart?: React.DragEventHandler<T>;
    onDrop?: React.DragEventHandler<T>;
    onMouseDown?: React.MouseEventHandler<T>;
    onMouseEnter?: React.MouseEventHandler<T>;
    onMouseLeave?: React.MouseEventHandler<T>;
    onMouseMove?: React.MouseEventHandler<T>;
    onMouseOut?: React.MouseEventHandler<T>;
    onMouseOver?: React.MouseEventHandler<T>;
    onMouseUp?: React.MouseEventHandler<T>;
    onSelect?: React.ReactEventHandler<T>;
    onTouchCancel?: React.TouchEventHandler<T>;
    onTouchEnd?: React.TouchEventHandler<T>;
    onTouchMove?: React.TouchEventHandler<T>;
    onTouchStart?: React.TouchEventHandler<T>;
    onScroll?: React.UIEventHandler<T>;
    onWheel?: React.WheelEventHandler<T>;
  }

  declare type __ReactMDL$BadgeProps = {
    text: string | number,
    className?: string,
    noBackground?: boolean,
    overlap?: boolean
  } & __ReactMDL$__MDLClassProps;

  declare class __ReactMDL$Badge
    mixins __ReactMDL$__MDLComponent<__ReactMDL$BadgeProps> {}

  declare type __ReactMDL$ChipProps = {
    onClick?: React.MouseEventHandler<__ReactMDL$Chip>,
    onClose?: React.MouseEventHandler<__ReactMDL$Chip>
  } & __ReactMDL$__MDLOtherProps;

  declare class __ReactMDL$Chip
    mixins __ReactMDL$__MDLComponent<__ReactMDL$ChipProps> {}

  declare class __ReactMDL$ChipContact
    mixins __ReactMDL$__MDLComponent<__ReactMDL$__MDLOtherProps> {}

  declare type __ReactMDL$ButtonProps = {
    accent?: boolean,
    colored?: boolean,
    primary?: boolean
  } & __ReactMDL$__MDLOtherProps &
    __ReactMDL$RippleComponent &
    __ReactMDL$CustomRenderedComponent;

  declare type __ReactMDL$StandardButtonProps = {
    raised?: boolean
  } & __ReactMDL$ButtonProps;

  declare type __ReactMDL$FABButtonProps = {
    mini?: boolean
  } & __ReactMDL$ButtonProps;

  declare type __ReactMDL$IconButtonProps = {
    name?: string,
    raised?: boolean
  } & __ReactMDL$ButtonProps;

  declare class __ReactMDL$Button
    mixins __ReactMDL$__MDLComponent<__ReactMDL$StandardButtonProps> {}

  declare class __ReactMDL$FABButton
    mixins __ReactMDL$__MDLComponent<__ReactMDL$FABButtonProps> {}

  declare class __ReactMDL$IconButton
    mixins __ReactMDL$__MDLComponent<__ReactMDL$IconButtonProps> {}

  declare type __ReactMDL$CardProps = {} & __ReactMDL$__MDLOtherProps &
    __ReactMDL$ShadowedComponent;

  declare type __ReactMDL$CardActionProps = {
    border?: boolean
  } & __ReactMDL$__MDLOtherProps;

  declare type __ReactMDL$CardTitleProps = {
    expand?: boolean
  } & __ReactMDL$__MDLOtherProps;

  declare class __ReactMDL$Card
    mixins __ReactMDL$__MDLComponent<__ReactMDL$CardProps> {}

  declare class __ReactMDL$CardActions
    mixins __ReactMDL$__MDLComponent<__ReactMDL$CardActionProps> {}

  declare class __ReactMDL$CardTitle
    mixins __ReactMDL$__MDLComponent<__ReactMDL$CardTitleProps> {}

  declare class __ReactMDL$CardText mixins __ReactMDL$__MDLBasicComponent {}

  declare class __ReactMDL$CardMenu mixins __ReactMDL$__MDLBasicComponent {}

  declare class __ReactMDL$CardMedia mixins __ReactMDL$__MDLBasicComponent {}

  declare type __ReactMDL$CheckboxProps = {
    checked?: boolean,
    disabled?: boolean,
    label?: string
  } & __ReactMDL$__MDLOtherProps &
    __ReactMDL$RippleComponent;

  declare class __ReactMDL$Checkbox
    mixins __ReactMDL$__MDLComponent<__ReactMDL$CheckboxProps> {}

  declare type __ReactMDL$UndecoratedTableProps = {
    rows: Array<any>,
    rowKeyColumn?: string,
    name?: string,
    title?: string
  } & __ReactMDL$__MDLClassProps &
    __ReactMDL$MDLHTMLAttributes &
    React.DOMAttributes<__ReactMDL$UndecoratedTable> &
    __ReactMDL$ShadowedComponent;

  declare type __ReactMDL$TableProps = {
    sortable?: boolean,
    selectable?: boolean,
    onSelectionChanged?: (row: any) => any
  } & __ReactMDL$UndecoratedTableProps;

  declare type __ReactMDL$TableHeaderProps = {
    name: string,
    title?: string,
    cellFormatter?: (value: any, row: any, index: number) => React.ReactNode,
    numeric?: boolean,
    nosort?: boolean,
    onClick?: (
      e: React.MouseEvent<__ReactMDL$TableHeader>,
      name: string
    ) => any,
    sortFn?: (a: any, b: any, isAsc: boolean) => number,
    tooltip?: React.ReactNode
  } & __ReactMDL$__MDLClassProps &
    __ReactMDL$MDLHTMLAttributes &
    __ReactMDL$MDLDOMAttributes<__ReactMDL$TableHeader>;

  declare class __ReactMDL$Table
    mixins __ReactMDL$__MDLComponent<__ReactMDL$TableProps> {}

  declare class __ReactMDL$TableHeader
    mixins __ReactMDL$__MDLComponent<__ReactMDL$TableHeaderProps> {}

  declare class __ReactMDL$UndecoratedTable
    mixins __ReactMDL$__MDLComponent<__ReactMDL$UndecoratedTableProps> {}

  declare class __ReactMDL$DataTable mixins __ReactMDL$Table {}

  declare type __ReactMDL$DialogProps = {
    open?: boolean,
    onCancel?: (e: any) => void
  } & __ReactMDL$__MDLOtherProps;

  declare type __ReactMDL$DialogActionsProps = {
    fullWidth?: boolean
  } & __ReactMDL$__MDLOtherProps;

  declare type __ReactMDL$DialogTitleProps = {} & __ReactMDL$__MDLOtherProps &
    __ReactMDL$CustomRenderedComponent;

  declare class __ReactMDL$Dialog
    mixins __ReactMDL$__MDLComponent<__ReactMDL$DialogProps> {}

  declare class __ReactMDL$DialogActions
    mixins __ReactMDL$__MDLComponent<__ReactMDL$DialogActionsProps> {}

  declare class __ReactMDL$DialogTitle
    mixins __ReactMDL$__MDLComponent<__ReactMDL$DialogTitleProps> {}

  declare class __ReactMDL$DialogContent
    mixins __ReactMDL$__MDLBasicComponent {}

  declare type __ReactMDL$GridProps = {
    noSpacing?: boolean
  } & __ReactMDL$__MDLOtherProps &
    __ReactMDL$CustomRenderedComponent &
    __ReactMDL$ShadowedComponent;

  declare type __ReactMDL$CellProps = {
    col: number,
    offset?: number,
    offsetDesktop?: number,
    offsetPhone?: number,
    offsetTablet?: number,
    align?: string,
    phone?: number,
    tablet?: number,
    hideDesktop?: boolean,
    hidePhone?: boolean,
    hideTablet?: boolean
  } & __ReactMDL$__MDLOtherProps &
    __ReactMDL$CustomRenderedComponent &
    __ReactMDL$ShadowedComponent;

  declare class __ReactMDL$Grid
    mixins __ReactMDL$__MDLComponent<__ReactMDL$GridProps> {}

  declare class __ReactMDL$Cell
    mixins __ReactMDL$__MDLComponent<__ReactMDL$CellProps> {}

  declare type __ReactMDL$IconProps = {
    name: string
  } & __ReactMDL$__MDLOtherProps;

  declare class __ReactMDL$Icon
    mixins __ReactMDL$__MDLComponent<__ReactMDL$IconProps> {}

  declare type __ReactMDL$IconToggleProps = {
    name: string,
    checked?: boolean,
    disabled?: boolean
  } & __ReactMDL$__MDLOtherProps &
    __ReactMDL$RippleComponent;

  declare class __ReactMDL$IconToggle
    mixins __ReactMDL$__MDLComponent<__ReactMDL$IconToggleProps> {}

  declare type __ReactMDL$ContentProps = {} & __ReactMDL$__MDLOtherProps &
    __ReactMDL$CustomRenderedComponent;

  declare type __ReactMDL$DrawerProps = {
    title?: string
  } & __ReactMDL$__MDLOtherProps;

  declare type __ReactMDL$HeaderProps = {
    title?: any,
    scroll?: boolean,
    seamed?: boolean,
    transparent?: boolean,
    waterfall?: boolean,
    hideTop?: boolean,
    hideSpacer?: boolean
  } & __ReactMDL$__MDLOtherProps;

  declare type __ReactMDL$HeaderRowProps = {
    title?: any,
    hideSpacer?: boolean
  } & __ReactMDL$__MDLOtherProps;

  declare type __ReactMDL$HeaderTabsProps = {
    activeTab?: number,
    onChange?: React.FormEventHandler<__ReactMDL$Header>
  } & __ReactMDL$__MDLOtherProps &
    __ReactMDL$RippleComponent;

  declare type __ReactMDL$LayoutProps = {
    fixedDrawer?: boolean,
    fixedHeader?: boolean,
    fixedTabs?: boolean
  } & __ReactMDL$__MDLOtherProps;

  declare type __ReactMDL$NavigationProps = {} & __ReactMDL$__MDLOtherProps;

  declare class __ReactMDL$Content
    mixins __ReactMDL$__MDLComponent<__ReactMDL$ContentProps> {}

  declare class __ReactMDL$Drawer
    mixins __ReactMDL$__MDLComponent<__ReactMDL$DrawerProps> {}

  declare class __ReactMDL$Header
    mixins __ReactMDL$__MDLComponent<__ReactMDL$HeaderProps> {}

  declare class __ReactMDL$HeaderRow
    mixins __ReactMDL$__MDLComponent<__ReactMDL$HeaderRowProps> {}

  declare class __ReactMDL$HeaderTabs
    mixins __ReactMDL$__MDLComponent<__ReactMDL$HeaderTabsProps> {}

  declare class __ReactMDL$Layout
    mixins __ReactMDL$__MDLComponent<__ReactMDL$LayoutProps> {}

  declare class __ReactMDL$Navigation
    mixins __ReactMDL$__MDLComponent<__ReactMDL$NavigationProps> {}

  declare class __ReactMDL$Spacer mixins __ReactMDL$__MDLBasicComponent {}

  declare type __ReactMDL$FooterProps = {
    size?: string,
    title?: string
  } & __ReactMDL$MDLHTMLAttributes &
    React.DOMAttributes<__ReactMDL$Footer>;

  declare type __ReactMDL$FooterDropDownSectionProps = {
    size?: string,
    title: React.ReactNode
  } & __ReactMDL$MDLHTMLAttributes &
    React.DOMAttributes<__ReactMDL$FooterDropDownSection>;

  declare type __ReactMDL$FooterLinkListProps = {
    size?: string,
    title?: string
  } & __ReactMDL$MDLHTMLAttributes &
    React.DOMAttributes<__ReactMDL$FooterLinkList>;

  declare type __ReactMDL$FooterSectionProps = {
    size?: string,
    type?: string,
    logo?: React.ReactNode,
    title?: string
  } & __ReactMDL$MDLHTMLAttributes &
    React.DOMAttributes<__ReactMDL$FooterSection>;

  declare class __ReactMDL$Footer
    mixins __ReactMDL$__MDLComponent<__ReactMDL$FooterProps> {}

  declare class __ReactMDL$FooterDropDownSection
    mixins __ReactMDL$__MDLComponent<__ReactMDL$FooterDropDownSectionProps> {}

  declare class __ReactMDL$FooterLinkList
    mixins __ReactMDL$__MDLComponent<__ReactMDL$FooterLinkListProps> {}

  declare class __ReactMDL$FooterSection
    mixins __ReactMDL$__MDLComponent<__ReactMDL$FooterSectionProps> {}

  declare type __ReactMDL$ListItemProps = {
    twoLine?: boolean,
    threeLine?: boolean
  } & __ReactMDL$__MDLOtherProps;

  declare type __ReactMDL$ListItemActionProps = {
    info?: string
  } & __ReactMDL$__MDLOtherProps;

  declare type __ReactMDL$ListItemContentProps = {
    avatar?: string | JSX.Element,
    icon?: string | JSX.Element,
    subtitle?: React.ReactNode,
    useBodyClass?: boolean
  } & __ReactMDL$MDLHTMLAttributes &
    React.DOMAttributes<__ReactMDL$ListItemContent>;

  declare class __ReactMDL$List mixins __ReactMDL$__MDLBasicComponent {}

  declare class __ReactMDL$ListItem
    mixins __ReactMDL$__MDLComponent<__ReactMDL$ListItemProps> {}

  declare class __ReactMDL$ListItemAction
    mixins __ReactMDL$__MDLComponent<__ReactMDL$ListItemActionProps> {}

  declare class __ReactMDL$ListItemContent
    mixins __ReactMDL$__MDLComponent<__ReactMDL$ListItemContentProps> {}

  declare type __ReactMDL$MenuProps = {
    target: string,
    align?: string,
    valign?: string
  } & __ReactMDL$__MDLOtherProps &
    __ReactMDL$RippleComponent;

  declare class __ReactMDL$Menu
    mixins __ReactMDL$__MDLComponent<__ReactMDL$MenuProps> {}

  declare class __ReactMDL$MenuItem mixins __ReactMDL$__MDLBasicComponent {}

  declare type __ReactMDL$ProgressBarProps = {
    buffer?: number,
    indeterminate?: boolean,
    progress?: number
  } & __ReactMDL$__MDLOtherProps;

  declare class __ReactMDL$ProgressBar
    mixins __ReactMDL$__MDLComponent<__ReactMDL$ProgressBarProps> {}

  declare type __ReactMDL$RadioProps = {
    value: string | number,
    checked?: boolean,
    disabled?: boolean,
    name?: string,
    onChange?: React.FormEventHandler<__ReactMDL$Radio>,
    label?: string
  } & __ReactMDL$MDLHTMLAttributes &
    React.DOMAttributes<__ReactMDL$Radio> &
    __ReactMDL$RippleComponent;

  declare type __ReactMDL$RadioGroupProps = {
    name: string,
    value: string | number,
    childContainer?: string,
    container?: string,
    onChange?: React.FormEventHandler<__ReactMDL$RadioGroup>,
    label?: string
  } & __ReactMDL$MDLHTMLAttributes &
    React.DOMAttributes<__ReactMDL$RadioGroup>;

  declare class __ReactMDL$Radio
    mixins __ReactMDL$__MDLComponent<__ReactMDL$RadioProps> {}

  declare class __ReactMDL$RadioGroup
    mixins __ReactMDL$__MDLComponent<__ReactMDL$RadioGroupProps> {}

  declare type __ReactMDL$SliderProps = {
    max: number,
    min: number,
    onChange?: React.FormEventHandler<__ReactMDL$Slider>,
    value?: number
  } & __ReactMDL$MDLHTMLAttributes &
    React.DOMAttributes<__ReactMDL$Slider>;

  declare class __ReactMDL$Slider
    mixins __ReactMDL$__MDLComponent<__ReactMDL$SliderProps> {}

  declare type __ReactMDL$SnackbarProps = {
    active: boolean,
    onTimeout: () => any,
    action?: string,
    onActionClick?: React.MouseEventHandler<__ReactMDL$Snackbar>,
    timeout?: number
  } & __ReactMDL$__MDLOtherProps;

  declare class __ReactMDL$Snackbar
    mixins __ReactMDL$__MDLComponent<__ReactMDL$SnackbarProps> {}

  declare type __ReactMDL$SpinnerProps = {
    singleColor?: boolean
  } & __ReactMDL$__MDLOtherProps;

  declare class __ReactMDL$Spinner
    mixins __ReactMDL$__MDLComponent<__ReactMDL$SpinnerProps> {}

  declare type __ReactMDL$SwitchProps = {
    checked?: boolean,
    disabled?: boolean,
    onChange?: React.FormEventHandler<__ReactMDL$Switch>
  } & __ReactMDL$__MDLOtherProps &
    __ReactMDL$RippleComponent;

  declare class __ReactMDL$Switch
    mixins __ReactMDL$__MDLComponent<__ReactMDL$SwitchProps> {}

  declare type __ReactMDL$TabProps = {
    active?: boolean,
    cssPrefix?: string,
    onTabClick?: (tabId: number) => any,
    tabId?: number
  } & __ReactMDL$__MDLOtherProps &
    __ReactMDL$CustomRenderedComponent;

  declare type __ReactMDL$TabBarProps = {
    cssPrefix: string,
    activeTab?: number,
    onChange?: (tabId: number) => any,
    name?: string,
    title?: string,
    onClick?: React.MouseEventHandler<__ReactMDL$TabBar>
  } & __ReactMDL$MDLHTMLAttributes &
    __ReactMDL$MDLDOMAttributes<__ReactMDL$TabBar>;

  declare type __ReactMDL$TabsProps = {
    activeTab?: number,
    onChange?: (tabId: number) => any,
    tabBarProps?: __ReactMDL$TabBarProps,
    name?: string,
    title?: string,
    onClick?: React.MouseEventHandler<__ReactMDL$Tabs>
  } & __ReactMDL$MDLHTMLAttributes &
    __ReactMDL$MDLDOMAttributes<__ReactMDL$Tabs>;

  declare class __ReactMDL$Tab
    mixins __ReactMDL$__MDLComponent<__ReactMDL$TabProps> {}

  declare class __ReactMDL$TabBar
    mixins __ReactMDL$__MDLComponent<__ReactMDL$TabBarProps> {}

  declare class __ReactMDL$Tabs
    mixins __ReactMDL$__MDLComponent<__ReactMDL$TabsProps> {}

  declare type __ReactMDL$TextfieldProps = {
    label: string,
    disabled?: boolean,
    error?: React.ReactNode,
    expandable?: boolean,
    expandableIcon?: string,
    floatingLabel?: boolean,
    id?: string,
    inputClassName?: string,
    maxRows?: number,
    onChange?: React.FormEventHandler<HTMLInputElement>,
    pattern?: string,
    required?: boolean,
    rows?: number,
    value?: string | number,
    name?: string,
    title?: string
  } & __ReactMDL$MDLHTMLAttributes &
    React.DOMAttributes<HTMLInputElement>;

  declare class __ReactMDL$Textfield
    mixins __ReactMDL$__MDLComponent<__ReactMDL$TextfieldProps> {
    inputRef: HTMLInputElement;
  }

  declare type __ReactMDL$TooltipProps = {
    label: React.ReactNode,
    large?: boolean,
    position?: string,
    name?: string,
    title?: string
  } & __ReactMDL$MDLHTMLAttributes &
    React.DOMAttributes<__ReactMDL$Tooltip>;

  declare class __ReactMDL$Tooltip
    mixins __ReactMDL$__MDLComponent<__ReactMDL$TooltipProps> {}

  declare class __ReactMDL$MDLComponent
    mixins React.Component<{
        recursive?: boolean
      }> {}
}
