declare module 'react-fa' {
        import type {
          Component,ComponentClass,HTMLProps,StatelessComponent,ReactElement
        } from 'react';

	declare type SizeOverrideHTMLProps<T> = {
size?: any
} & HTMLProps<T>

	declare export type IconSize = "lg"
| "2x"
| "3x"
| "4x"
| "5x";
	declare export type IconRotation = "45"
| "90"
| "135"
| "180"
| "225"
| "270"
| "315";
	declare export type IconFlip = "horizontal" | "vertical";
	declare export type IconStackSize = "1x" | "2x";
	declare type CustomComponent = string | ComponentClass<any> | StatelessComponent<any>;
	declare export type IconProps = {
name: string,
size?: IconSize,
spin?: boolean,
rotate?: IconRotation,
flip?: IconFlip,
fixedWidth?: boolean,
pulse?: boolean,
stack?: IconStackSize,
inverse?: boolean,
Component?: CustomComponent
} & SizeOverrideHTMLProps<Icon>

	declare export type Icon = Component<IconProps>;
	declare export var Icon: ComponentClass<IconProps>;
	declare export type IconStackProps = {
size?: IconSize,
children?: ReactElement<IconProps> | Array<ReactElement<IconProps>>
} & SizeOverrideHTMLProps<IconStack>

	declare export type IconStack = Component<IconStackProps>;
	declare export var IconStack: ComponentClass<IconStackProps>;
	declare export default typeof Icon

    }
