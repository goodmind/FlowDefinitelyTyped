declare module 'react-native-keyboard-spacer' {
        import typeof * as React from 'react';

	import typeof * as ReactNative from 'react-native';

	declare export interface KeyboardSpacerProps {
topSpacing?: number,
onToggle?: (keyboardIsOpen: boolean, keyboardSpace: number) => void,
style?: ReactNative.StyleProp<ReactNative.ViewStyle>
} 
	declare export default class KeyboardSpacer mixins React.Component<KeyboardSpacerProps, any> {}
    }
