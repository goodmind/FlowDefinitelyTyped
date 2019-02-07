declare module "react-native-modal-filter-picker" {
  import typeof * as React from "react";

  import type {
    StyleProp,
    ViewStyle,
    TextStyle,
    ListView,
    KeyboardAvoidingView,
    ModalProps,
    ListViewProps
  } from "react-native";

  declare export interface ModalFilterPickerOption {
    label: string;
    key: string;
  }
  declare export interface ModalFilterPickerProps<T: ModalFilterPickerOption> {
    options: T[];
    onSelect: (key: string) => void;
    onCancel: () => void;
    placeholderText?: string;
    placeholderTextColor?: string;
    androidUnderlineColor?: string;
    cancelButtonText?: string;
    title?: string;
    noResultsText?: string;
    visible?: boolean;
    showFilter?: boolean;
    modal?: ModalProps;
    selectedOption?: string;
    listViewProps?: $Shape<ListViewProps>;
    renderOption?: (option: T, isSelected: boolean) => JSX.Element;
    renderList?: () => JSX.Element;
    renderCancelButton?: () => JSX.Element;
    keyboardShouldPersistTaps?: "never" | "always" | "handle";
    autoFocus?: boolean;
    overlayStyle?: StyleProp<KeyboardAvoidingView>;
    listContainerStyle?: StyleProp<ViewStyle>;
    filterTextInputContainerStyle?: StyleProp<ViewStyle>;
    filterTextInputStyle?: StyleProp<TextStyle>;
    cancelContainerStyle?: StyleProp<ViewStyle>;
    cancelButtonStyle?: StyleProp<ViewStyle>;
    cancelButtonTextStyle?: StyleProp<TextStyle>;
    titleTextStyle?: StyleProp<TextStyle>;
    optionTextStyle?: StyleProp<TextStyle>;
  }
  declare class ModalFilterPicker<T: ModalFilterPickerOption>
    mixins React.Component<ModalFilterPickerProps<T>> {}
  declare export default typeof ModalFilterPicker;
}
