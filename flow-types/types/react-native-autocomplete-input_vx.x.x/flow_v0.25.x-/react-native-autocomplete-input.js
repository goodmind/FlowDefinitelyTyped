declare module "react-native-autocomplete-input" {
  import type { Component, Node } from "react";

  import type {
    GestureResponderHandlers,
    ListViewProperties,
    StyleProp,
    TextInputProperties,
    ViewStyle
  } from "react-native";

  declare export type AutocompleteProps<T> = {
    /**
     * style
     * These styles will be applied to the container which surrounds the autocomplete component.
     */
    containerStyle?: StyleProp<ViewStyle>,

    /**
     * bool
     * Set to true to hide the suggestion list.
     */
    hideResults?: boolean,

    /**
     * array
     * An array with suggestion items to be rendered in renderItem(item). Any array with length > 0 will open the suggestion list and any array with length < 1 will hide the list.
     */
    data: T[],

    /**
     * style
     * These styles will be applied to the container which surrounds the textInput component.
     */
    inputContainerStyle?: StyleProp<ViewStyle>,

    /**
     * style
     * These styles will be applied to the container which surrounds the result list.
     */
    listContainerStyle?: StyleProp<ViewStyle>,

    /**
     * style
     * These style will be applied to the result list.
     */
    listStyle?: StyleProp<ViewStyle>,

    /**
     * function
     * onShowResult will be called when the autocomplete suggestions appear or disappear.
     */
    onShowResult?: (showResults: boolean) => void,

    /**
     * function
     * onStartShouldSetResponderCapture will be passed to the result list view container (onStartShouldSetResponderCapture).
     */
    onStartShouldSetResponderCapture?: $PropertyType<
      GestureResponderHandlers,
      "onStartShouldSetResponderCapture"
    >,

    /**
     * function
     * renderItem will be called to render the data objects which will be displayed in the result view below the text input.
     */
    renderItem(item: T): Node,

    /**
     * function
     * renderSeparator will be called to render the list separators which will be displayed between the list elements in the result view below the text input.
     */
    renderSeparator?: $PropertyType<ListViewProperties, "renderSeparator">,

    /**
     * function
     * render custom TextInput. All props passed to this function.
     */
    renderTextInput?: (props: TextInputProperties) => Node
  } & TextInputProperties;

  declare export default class Autocomplete<T>
    mixins Component<AutocompleteProps<T>> {}
}
