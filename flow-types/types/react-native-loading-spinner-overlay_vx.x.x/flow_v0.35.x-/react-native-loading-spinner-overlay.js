declare module 'react-native-loading-spinner-overlay' {
        import typeof * as React from 'react';

	import typeof * as ReactNative from 'react-native';

	declare export interface SpinnerProps {
cancelable?: boolean,
color?: string,
animation?: "none" | "slide" | "fade",
overlayColor?: string,
size?: "normal" | "small" | "large",
textContent?: string,
textStyle?: ReactNative.StyleProp<ReactNative.TextStyle>,
visible?: boolean
} 
	declare export default class Spinner mixins React.Component<SpinnerProps> {}
    }
