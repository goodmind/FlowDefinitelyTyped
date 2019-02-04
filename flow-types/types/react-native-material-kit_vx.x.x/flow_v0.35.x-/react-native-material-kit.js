declare module 'react-native-material-kit' {
        import typeof * as React from 'react';

	import type {
          ViewStyle,TextStyle,TextInputProps,TouchableWithoutFeedbackProps,ViewProps
        } from 'react-native';

	declare export interface ProgressStyle {
backgroundColor?: string,
progressColor?: string,
bufferColor?: string
} 
	declare export interface TextFieldStyle {
tintColor?: string,
highlightColor?: string,
textInputStyle?: {
color?: string,
fontSize?: number,
paddingLeft?: number,
paddingRight?: number
}
} 
	declare export interface SpinnerStyle {
strokeColor?: string[]
} 
	declare export interface SliderStyle {
lowerTrackColor?: string,
upperTrackColor?: string
} 
	declare export interface IconToggleStyle {
onColor?: string,
offColor?: string,
rippleColor?: string
} 
	declare export interface SwitchStyle {
onColor?: string,
offColor?: string,
thumbOnColor?: string,
thumbOffColor?: string,
rippleColor?: string
} 
	declare export interface RadioStyle {
borderOnColor?: string,
borderOffColor?: string,
fillColor?: string,
rippleColor?: string,
extraRippleRadius?: number
} 
	declare export interface CheckboxStyle {
borderOnColor?: string,
borderOffColor?: string,
fillColor?: string,
rippleColor?: string,
inset?: number
} 
	declare export interface CardStyle {
backgroundColor?: string,
borderRadius?: number,
borderColor?: string,
borderWidth?: number,
shadowColor?: string,
shadowOpacity?: number,
shadowRadius?: number,
shadowOffset?: {
height: number,
width: number
}
} 
	declare export interface CardImageStyle {
height?: number,
resizeMode?: string
} 
	declare export interface CardTitleStyle {
position?: "absolute" | "relative",
top?: number,
left?: number,
backgroundColor?: string,
padding?: number,
fontSize?: number,
color?: string,
fontWeight?: "normal"
| "bold"
| "100"
| "200"
| "300"
| "400"
| "500"
| "600"
| "700"
| "800"
| "900"
} 
	declare export interface CardContentStyle {
padding?: number,
color?: string
} 
	declare export interface CardActionStyle {
borderStyle?: "solid" | "dotted" | "dashed",
borderTopColor?: string,
borderTopWidth?: number,
padding?: number
} 
	declare export interface CardMenuStyle {
position?: "absolute" | "relative",
top?: number,
right?: number,
backgroundColor?: string
} 
	declare export interface ThemeStatic {
primaryColor?: string,
primaryColorRGB?: string,
accentColor?: string,
accentColorRGB?: string,
bgPlain?: string,
bgDisabled?: string,
fontColor?: string,
fontSize?: number,
rippleColor?: string,
textfieldStyle?: TextFieldStyle,
progressStyle?: ProgressStyle,
spinnerStyle?: SpinnerStyle,
sliderStyle?: SliderStyle,
iconToggleStyle?: IconToggleStyle,
switchStyle?: SwitchStyle,
radioStyle?: RadioStyle,
checkboxStyle?: CheckboxStyle,
cardStyle?: CardStyle,
cardImageStyle?: CardImageStyle,
cardTitleStyle?: CardTitleStyle,
cardContentStyle?: CardContentStyle,
cardActionStyle?: CardActionStyle,
cardMenuStyle?: CardMenuStyle
} 
	declare export interface FloatingLabelProperties {
floatingLabelEnabled?: boolean,
floatingLabelAniDuration?: number,
floatingLabelBottomMargin?: number,
floatingLabelFont?: MKPropTypes$MKPropTypes$font,
allowFontScaling?: boolean
} 
	declare interface MKPropTypes$dimen {
width?: number,
height?: number
} 

declare interface MKPropTypes$font {
color?: string,
fontSize?: number,
fontWeight?: "normal"
| "bold"
| "100"
| "200"
| "300"
| "400"
| "500"
| "600"
| "700"
| "800"
| "900",
fontStyle?: "normal" | "italic",
fontFamily?: string
} 

declare type MKPropTypes$rippleLocation = "tapLocation" | "center";
	declare export type TickProperties = {
fillColor?: string,
inset?: number
} & ViewProps

	declare export class MKComponent<P, S> mixins React.Component<P, S> {
static Builder: any
}
	declare export interface MKColorStatic {
Amber: string,
Blue: string,
BlueGrey: string,
Brown: string,
Cyan: string,
DeepOrange: string,
DeepPurple: string,
Green: string,
Grey: string,
Indigo: string,
LightBlue: string,
LightGreen: string,
Lime: string,
Orange: string,
Pink: string,
Purple: string,
RGBIndigo: string,
RGBPink: string,
RGBPurple: string,
RGBTeal: string,
Red: string,
Silver: string,
Teal: string,
Transparent: string,
Yellow: string,
default: {
Amber: string,
Blue: string,
BlueGrey: string,
Brown: string,
Cyan: string,
DeepOrange: string,
DeepPurple: string,
Green: string,
Grey: string,
Indigo: string,
LightBlue: string,
LightGreen: string,
Lime: string,
Orange: string,
Pink: string,
Purple: string,
RGBIndigo: string,
RGBPink: string,
RGBPurple: string,
RGBTeal: string,
Red: string,
Silver: string,
Teal: string,
Transparent: string,
Yellow: string
},
palette_blue_400: string,
palette_green_500: string,
palette_red_500: string,
palette_yellow_600: string
} 
	declare export type MKButtonProperties = {
fab?: boolean,
enabled?: boolean
} & TouchableWithoutFeedbackProps & MKRippleProperties

	declare export type MKTextFieldProperties = {
text?: string,
password?: boolean,
underlineEnabled?: boolean,
underlineSize?: number,
highlightColor?: string,
tintColor?: string,
textInputStyle?: TextStyle,
allowFontScaling?: boolean,
additionalInputProps?: TextInputProps,
onTextChange(val: string): void
} & TextInputProps & FloatingLabelProperties

	declare export type MKSwitchProperties = {
checked?: boolean,
onColor?: string,
offColor?: string,
trackSize?: number,
trackLength?: number,
thumbRadius?: number,
thumbOnColor?: string,
thumbOffColor?: string,
thumbAniDuration?: number,
rippleColor?: string,
rippleAniDuration?: number,
onCheckedChange(checked: boolean): void
} & TouchableWithoutFeedbackProps

	declare export type MKIconToggleProperties = {
checked?: boolean,
onCheckedChange(checked: boolean): void
} & MKRippleProperties & TouchableWithoutFeedbackProps

	declare export type MKRippleProperties = {
rippleColor?: string,
rippleDuration?: number,
MKPropTypes$rippleLocation?: MKPropTypes$MKPropTypes$rippleLocation,
maskEnabled?: boolean,
maskColor?: string,
maskBorderRadius?: number,
maskBorderRadiusInPercent?: number,
maskDuration?: number,
shadowAniEnabled?: boolean
} & ViewProps

	declare export type MKProgressProperties = {
progress?: number,
buffer?: number,
progressColor?: string,
bufferColor?: string,
progressAniDuration?: number,
bufferAniDuration?: number
} & ViewProps

	declare export type IndeterminateProgressProperties = {
progressColor?: string,
progressAniDuration?: number
} & ViewProps

	declare export type BaseSlider = {
min?: number,
max?: number,
value?: number,
trackSize?: number,
thumbRadius?: number,
thumbPadding?: number,
lowerTrackColor?: string,
upperTrackColor?: string,
step?: number
} & ViewProps

	declare export type MKSliderProperties = {
onChange(value: number): void,
onConfirm(): void
} & BaseSlider

	declare export type MKRangeSliderProperties = {
minValue?: number,
maxValue?: number,
onStart(): void,
onConfirm(curValue: {
min: number,
max: number
}): void,
onChange(curValue: {
min: number,
max: number
}): void
} & BaseSlider

	declare export type MKSpinnerProperties = {
strokeColor?: string,
strokeWidth?: number,
spinnerAniDuration?: number
} & ViewProps

	declare export type MKRadioButtonProperties = {
borderOnColor?: string,
borderOffColor?: string,
fillColor?: string,
checked?: boolean,
group?: MKRadioButtonGroup,
extraRippleRadius?: number,
onCheckedChange(opts: {
checked: boolean
}): void
} & MKRippleProperties & TouchableWithoutFeedbackProps

	declare export type MKCheckboxProperties = {
borderOnColor?: string,
borderOffColor?: string,
fillColor?: string,
checked?: boolean,
editable?: boolean,
extraRippleRadius?: number,
onCheckedChange(opts: {
checked: boolean
}): void
} & MKRippleProperties & TickProperties & TouchableWithoutFeedbackProps

	declare export interface MKRadioButtonGroup {
buttons: any[]
} 
	declare export var theme: ThemeStatic;
	declare export var MKColor: MKColorStatic;
	declare export function setTheme(theme: ThemeStatic): void

	declare export function getTheme(): ThemeStatic

	declare export class MKButton mixins MKComponent<MKButtonProperties, any> {}
	declare export class MKTextField mixins MKComponent<MKTextFieldProperties, any> {}
	declare export class MKSwitch mixins MKComponent<MKSwitchProperties, any> {}
	declare export class MKIconToggle mixins MKComponent<MKIconToggleProperties, any> {}
	declare export class MKRipple mixins MKComponent<MKRippleProperties, any> {}
	declare export class MKProgress mixins MKComponent<MKProgressProperties, any> {}
	declare class MKProgress$Indeterminate mixins React.Component<IndeterminateProgressProperties> {}
	declare export class MKSlider mixins MKComponent<MKSliderProperties, any> {}
	declare export class MKRangeSlider mixins MKComponent<MKRangeSliderProperties, any> {}
	declare export class MKSpinner mixins MKComponent<MKSpinnerProperties, any> {}
	declare export class MKRadioButton mixins MKComponent<MKRadioButtonProperties, any> {}
	declare class MKRadioButton$MKRadioButton  {}

declare class MKRadioButton$Group mixins MKRadioButtonGroup {
buttons: any[];
constructor(onAdd?: (btn: MKRadioButton$MKRadioButton) => void, onRemove?: (btn: MKRadioButton$MKRadioButton) => void): this;
add: (btn: MKRadioButton$MKRadioButton) => void;
onChecked: (btn: MKRadioButton$MKRadioButton, checked: boolean) => void;
onRemoved: (btn: MKRadioButton$MKRadioButton) => void
}
	declare export class MKCheckbox mixins MKComponent<MKCheckboxProperties, any> {}
    }
