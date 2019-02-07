declare module "react-bootstrap-typeahead" {
  import typeof * as React from "react";

  declare export type Omit<T, K> = Pick<T, Exclude<$Keys<T>, K>>;
  declare export type StringPropertyNames<
    T: { [key: string]: any }
  > = $ElementType<
    $ObjMapi<T, <K>(K) => "There was Conditional Type, use $Call utility type">,
    $Keys<T>
  >;
  declare export type TypeaheadModel = string | { [key: string]: any };
  declare export type TypeaheadBsSizes = "large" | "lg" | "small" | "sm";
  declare export type TypeaheadAlign = "justify" | "left" | "right";
  declare export type TypeaheadLabelKey<T: TypeaheadModel> =
    "There was Conditional Type, use $Call utility type";
  declare export type InputProps = {} & Omit<
    React.InputHTMLAttributes<"input">,
    "onBlur" | "onChange" | "onFocus" | "onKeyDown"
  >;

  declare export interface TypeaheadContext<T: TypeaheadModel> {
    activeIndex?: number;
    hintText?: string;
    initialItem?: T;
    isOnlyResult?: boolean;
    onActiveItemChange?: (options: T) => void;
    onAdd?: (option: T) => void;
    onInitialItemChange?: (option: T) => void;
    onMenuItemClick?: (option: T, e: Event) => void;
    selectHintOnEnter?: boolean;
  }
  declare export interface TypeaheadState<T: TypeaheadModel> {
    activeIndex: number | null;
    activeItem: T | null;
    initialItem: T | null;
    isFocused: boolean;
    selected: T[];
    showMenu: boolean;
    shownResults: number;
    text: string;
  }
  declare export interface InputContainerPropsSingle<T: TypeaheadModel> {
    "aria-activedescendant": string;
    "aria-autocomplete": "list" | "both";
    "aria-expanded": boolean | "true" | "false";
    "aria-haspopup": "listbox";
    "aria-owns": string;
    autoComplete: string;
    disabled: boolean;
    inputRef: React.LegacyRef<HTMLInputElement>;
    onBlur: (e: Event) => void;
    onChange: (selected: T[]) => void;
    onClick: (e: Event) => void;
    onFocus: (e: Event) => void;
    onKeyDown: (e: Event) => void;
    placeholder: string | null;
    role: "combobox";
    value: string;
  }
  declare export type InputContainerPropsMultiple<T: TypeaheadModel> = {
    inputClassName: string,
    labelKey: TypeaheadLabelKey<T>,
    onRemove: (e: Event) => void,
    renderToken: (
      selectedItem: T,
      props: TypeaheadMenuProps<T>,
      index: number
    ) => React.ReactNode,
    role: "",
    selected: T[]
  } & Omit<InputContainerPropsSingle<T>, "role">;

  declare export type HintedInputContextKeys =
    | "hintText"
    | "initialItem"
    | "onAdd"
    | "selectHintOnEnter";
  declare export type HintedInputContext<T: TypeaheadModel> = {} & Pick<
    TypeaheadContext<T>,
    HintedInputContextKeys
  >;

  declare export type MenuItemContextKeys =
    | "activeIndex"
    | "isOnlyResult"
    | "onActiveItemChange"
    | "onInitialItemChange"
    | "onMenuItemClick";
  declare export type MenuItemContext<T: TypeaheadModel> = {} & Pick<
    TypeaheadContext<T>,
    MenuItemContextKeys
  >;

  declare export interface TokenContext {
    active: boolean;
    onBlur: (e: any) => void;
    onClick: (e: any) => void;
    onFocus: (e: any) => void;
    onKeyDown: (e: any) => void;
  }
  declare export interface TypeaheadContainerProps<T: TypeaheadModel> {
    activeIndex: number | null;
    activeItem: T | null;
    initialItem: T | null;
    isFocused: boolean;
    selected: T[];
    showMenu: boolean;
    shownResults: number;
    text: string;
  }
  declare export type TypeaheadResult<T: TypeaheadModel> = T & {
    customOption: boolean
  };
  declare export interface TypeaheadProps<T: TypeaheadModel> {
    a11yNumResults?: () => void;
    a11yNumSelected?: () => void;
    align?: TypeaheadAlign;
    allowNew?: boolean;
    autoFocus?: boolean;
    bodyContainer?: boolean;
    bsSize?: TypeaheadBsSizes;
    caseSensitive?: boolean;
    clearButton?: boolean;
    defaultInputValue?: string;
    defaultOpen?: boolean;
    defaultSelected?: T[];
    disabled?: boolean;
    dropup?: boolean;
    emptyLabel?: string;
    filterBy?:
      | string[]
      | ((option: T, props: AllTypeaheadOwnAndInjectedProps<T>) => boolean);
    flip?: boolean;
    highlightOnlyResult?: boolean;
    ignoreDiacritics?: boolean;
    inputProps?: InputProps;
    isInvalid?: boolean;
    isLoading?: boolean;
    isValid?: boolean;
    labelKey?: TypeaheadLabelKey<T>;
    maxHeight?: string;
    maxResults?: number;
    menuId?: string;
    minLength?: number;
    multiple?: boolean;
    newSelectionPrefix?: string;
    onBlur?: (e: Event) => void;
    onChange?: (selected: T[]) => void;
    onFocus?: (e: Event) => void;
    onInputChange?: (input: string, e: Event) => void;
    onKeyDown?: (e: Event) => void;
    onMenuHide?: () => void;
    onMenuShow?: () => void;
    onMenuToggle?: (show: boolean) => void;
    onPaginate?: (e: Event, numResults: number) => void;
    open?: boolean;
    options: T[];
    paginate?: boolean;
    paginationText?: string;
    placeholder?: string;
    renderMenu?: (
      results: Array<TypeaheadResult<T>>,
      menuProps: any
    ) => React.ReactNode;
    renderMenuItemChildren?: (
      option: TypeaheadResult<T>,
      props: TypeaheadMenuProps<T>,
      index: number
    ) => React.ReactNode;
    renderToken?: (
      selectedItem: T,
      props: TypeaheadMenuProps<T>,
      index: number
    ) => React.ReactNode;
    selected?: T[];
    selectHintOnEnter?: boolean;
  }
  declare export type AllTypeaheadOwnAndInjectedProps<
    T: TypeaheadModel
  > = TypeaheadProps<T> & TypeaheadContainerProps<T>;
  declare export class Typeahead<T: TypeaheadModel>
    mixins React.Component<TypeaheadProps<T>> {}
  declare export type AsyncTypeaheadProps<T: TypeaheadModel> = {
    delay?: number,
    isLoading: boolean,
    onSearch: (query: string) => void,
    promptText?: React.ReactNode,
    searchText?: React.ReactNode,
    useCache?: boolean
  } & TypeaheadProps<T>;

  declare export class AsyncTypeahead<T: TypeaheadModel>
    mixins React.Component<AsyncTypeaheadProps<T>> {}
  declare export type BaseTypeaheadInputProps = {
    type: "text"
  } & React.InputHTMLAttributes<"input">;

  declare export type TypeaheadSingleInputWithHocProps<
    T: TypeaheadModel
  > = {} & Omit<BaseTypeaheadInputProps, $Keys<InputContainerPropsSingle<T>>> &
    InputContainerPropsSingle<T>;

  declare export type TypeaheadMulitInputWithHocProps<
    T: TypeaheadModel
  > = {} & Omit<
    BaseTypeaheadInputProps,
    $Keys<InputContainerPropsMultiple<T>>
  > &
    HintedInputContext<T> &
    InputContainerPropsMultiple<T>;

  declare export type TypeaheadInputPropKeys =
    | "bsSize"
    | "disabled"
    | "inputProps"
    | "labelKey"
    | "multiple"
    | "onBlur"
    | "onChange"
    | "onFocus"
    | "onKeyDown"
    | "placeholder"
    | "renderToken"
    | "selected";
  declare export type TypeaheadInputProps<T: TypeaheadModel> = Pick<
    TypeaheadProps<T>,
    TypeaheadInputPropKeys
  >;
  declare export class TypeaheadInputSingle<T: TypeaheadModel>
    mixins React.Component<TypeaheadSingleInputWithHocProps<T>> {}
  declare export class TypeaheadInputMulti<T: TypeaheadModel>
    mixins React.Component<TypeaheadMulitInputWithHocProps<T>> {}
  declare export interface HighligherProps {
    children: React.ReactNode;
    search: string;
  }
  declare export class Highlighter
    mixins React.PureComponent<HighligherProps> {}
  declare export type ClearButtonProps = {
    bsSize?: TypeaheadBsSizes,
    label?: string,
    onClick: $ElementType<React.HTMLAttributes<"button">, "onClick">
  } & React.HTMLAttributes<"button">;

  declare export var ClearButton: React.FunctionComponent<ClearButtonProps>;
  declare export interface LoaderProps {
    bsSize: TypeaheadBsSizes;
  }
  declare export var Loader: React.FunctionComponent<LoaderProps>;
  declare export type AutosizeInputProps = {
    inputClassName?: string,
    inputRef?: React.LegacyRef<HTMLInputElement>,
    inputStyle?: Pick<React.CSSProperties, "boxSizing" | "width">,
    style: React.CSSProperties
  } & Pick<React.InputHTMLAttributes<"input">, "className" | "style">;

  declare export class AutosizeInput
    mixins React.Component<AutosizeInputProps> {}
  declare export interface MenuProps {
    id: string;
    className?: string;
    emptyLabel?: string;
    innerRef?: React.LegacyRef<HTMLUListElement>;
    maxHeight?: string;
    style?: React.CSSProperties;
    text?: string;
  }
  declare export type MenuHeaderProps = Omit<
    React.HTMLProps<"li">,
    "className"
  >;
  declare export class Menu mixins React.Component<MenuProps> {
    static Divider: React.FunctionComponent;
    static Header: React.FunctionComponent<MenuHeaderProps>;
  }
  declare export type TypeaheadMenuPropsPick =
    | "labelKey"
    | "newSelectionPrefix"
    | "options"
    | "renderMenuItemChildren";
  declare export type TypeaheadMenuProps<T: TypeaheadModel> = {} & MenuProps &
    Pick<AllTypeaheadOwnAndInjectedProps<T>, TypeaheadMenuPropsPick>;

  declare export class TypeaheadMenu<T: TypeaheadModel>
    mixins React.Component<TypeaheadMenuProps<T>> {}
  declare export type BaseMenuItemProps = {
    active?: boolean
  } & React.HTMLProps<"li">;

  declare export class BaseMenuItem mixins React.Component<BaseMenuItemProps> {}
  declare export type MenuItemProps<T: TypeaheadModel> = {
    option: T,
    position: number,
    label?: string
  } & BaseMenuItemProps;

  declare export class MenuItem<T: TypeaheadModel>
    mixins React.Component<MenuItemProps<T>> {}
  declare export type OverlayTypeaheadProps = Pick<
    TypeaheadProps<any>,
    "align" | "dropup" | "flip" | "onMenuHide" | "onMenuShow" | "onMenuToggle"
  >;
  declare export type OverlayProps = {
    children?: React.ReactNode,
    className?: string,
    container: HTMLElement,
    referenceElement?: HTMLElement,
    show?: boolean
  } & OverlayTypeaheadProps;

  declare export class Overlay mixins React.Component<OverlayProps> {}
  declare export type TokenProps = {
    active?: boolean,
    onRemove?: () => void
  } & React.HTMLProps<"div">;

  declare export class Token mixins React.Component<TokenProps> {}
}
