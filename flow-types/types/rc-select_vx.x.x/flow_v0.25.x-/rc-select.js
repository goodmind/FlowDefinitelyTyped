declare module "rc-select" {
  import typeof * as React from "react";

  declare export default typeof RcSelect$Select;

  declare export { RcSelect$Option, RcSelect$OptGroup };

  declare interface RcSelect$SelectProps {
    allowClear?: boolean;
    animation?: string;
    choiceTransitionName?: string;
    className?: string;
    combobox?: boolean;
    defaultActiveFirstOption?: boolean;
    defaultLabel?: string | Array<string>;
    defaultValue?: string | Array<string>;
    disabled?: boolean;
    dropdownClassName?: string;
    dropdownMatchSelectWidth?: boolean;
    dropdownMenuStyle?: {
      [key: string]: string
    };
    dropdownStyle?: {
      [key: string]: string
    };
    filterOption?: boolean;
    getPopupContainer?: (trigger: Node) => Node;
    getInputElement?: () => Node;
    id?: string;
    labelInValue?: boolean;
    maxTagCount?: number;
    maxTagPlaceholder?: React.ReactNode | Function;
    maxTagTextLength?: number;
    multiple?: boolean;
    notFoundContent?: string;
    onBlur?: () => void;
    onChange?: (value: string, label: string) => void;
    onDeselect?: (value: string, option: RcSelect$Option) => void;
    onFocus?: () => void;
    onInputKeyDown?: (e: Event) => void;
    onPopupScroll?: () => void;
    onSearch?: () => void;
    onSelect?: (value: string, ontion: RcSelect$Option) => void;
    optionFilterProp?: string;
    optionLabelProp?: string;
    placeholder?: React.ReactNode;
    prefixCls?: string;
    showAction?: string[];
    showArrow?: boolean;
    showSearch?: boolean;
    tags?: boolean;
    tokenSeparators?: string[];
    transitionName?: string;
    value?: string | Array<string>;
  }

  declare export class RcSelect$Select
    mixins React.Component<RcSelect$SelectProps> {}

  declare interface RcSelect$OptionProps {
    className?: string;
    disabled?: boolean;
    key?: string;
    title?: string;
    value?: string;
  }

  declare export class RcSelect$Option
    mixins React.Component<RcSelect$OptionProps> {}

  declare interface RcSelect$OptGroupProps {
    label?: string | React.ReactElement<any>;
    key?: string;
    value?: string;
  }

  declare export class RcSelect$OptGroup
    mixins React.Component<RcSelect$OptGroupProps> {}
}
