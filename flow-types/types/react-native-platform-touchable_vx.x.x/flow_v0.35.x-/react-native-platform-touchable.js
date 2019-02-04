declare module 'react-native-platform-touchable' {
        import typeof * as React from 'react';

	import type {
          BackgroundPropType,RippleBackgroundPropType,ThemeAttributeBackgroundPropType,TouchableWithoutFeedbackProps
        } from 'react-native';

	declare export type PlatformTouchableProps = {
activeOpacity?: number,
background?: BackgroundPropType,
foreground?: boolean,
underlayColor?: string,
onHideUnderlay?: () => void,
onShowUnderlay?: () => void
} & TouchableWithoutFeedbackProps

	declare export class Touchable mixins React.Component<PlatformTouchableProps> {
setOpacityTo: (value: number) => void;
static SelectableBackground(): ThemeAttributeBackgroundPropType;
static SelectableBackgroundBorderless(): ThemeAttributeBackgroundPropType;
static Ripple(color: string, borderless?: boolean): RippleBackgroundPropType;
static canUseNativeForeground(): boolean
}
	declare export default typeof Touchable

    }
