declare module 'react-primitives' {
        import type {
          ComponentType
        } from 'react';

	import type {
          Animated,Dimensions,Easing,Image,PixelRatio,RNPlatformOSType,StyleSheet,Text,TouchableOpacityProps,View
        } from 'react-native';

	declare export var Touchable: ComponentType<TouchableOpacityProps>;
	declare export type PlatformOSType = RNPlatformOSType | "sketch" | "vr";
	declare export interface PlatformStatic {
OS: PlatformOSType,
Version: number | string,
select<T>(
specifics: $ObjMapi<{[k: PlatformOSType | "default"]: any}, <platform>(platform) => T>): T
} 
	declare export var Platform: PlatformStatic;
	declare export {
          Animated,Dimensions,Easing,Image,PixelRatio,StyleSheet,Text,View
        }

    }
