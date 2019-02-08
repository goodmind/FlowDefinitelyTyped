declare interface RNModalDropdown$PositionStyle {
  left?: number;
  right?: number;
  width?: number;
}

declare interface RNModalDropdown$ModalDropdownProps {
  disabled?: boolean;
  defaultIndex?: number;
  defaultValue?: string;
  options?: any[];
  animated?: boolean;
  scrollEnabled?: boolean;
  showsVerticalScrollIndicator?: boolean;
  style?: any;
  textStyle?: any;
  dropdownStyle?: any;
  dropdownTextStyle?: any;
  dropdownTextHighlightStyle?: any;
  adjustFrame?: (positionStyle: RNModalDropdown$PositionStyle) => void;
  renderRow?: (option: any, index: number, isSelected: boolean) => any;
  renderSeparator?: () => any;
  renderButtonText?: (text: any) => any;
  onDropdownWillShow?: () => boolean;
  onDropdownWillHide?: () => boolean;
  onSelect?: (index: number, option: any) => void;
  accessible?: boolean;
  keyboardShouldPersistTaps?: "always" | "never" | "handled";
}

declare class RNModalDropdown$ModalDropdown
  mixins React.Component<RNModalDropdown$ModalDropdownProps> {
  static default: typeof ModalDropdown;
}
declare module "react-native-modal-dropdown" {
  import typeof * as React from "react";

  declare module.exports: typeof RNModalDropdown$ModalDropdown;
}
