declare module 'react-native-safe-area' {
        import type {
          EmitterSubscription
        } from 'react-native';

	declare export interface SafeAreaInsets {
top: number,
left: number,
bottom: number,
right: number
} 
	
      declare var npm$namespace$SafeArea: {
        getSafeAreaInsetsForRootView: typeof SafeArea$getSafeAreaInsetsForRootView,
addEventListener: typeof SafeArea$addEventListener,
removeEventListener: typeof SafeArea$removeEventListener,
        
      }
declare function SafeArea$getSafeAreaInsetsForRootView(): Promise<{
safeAreaInsets: SafeAreaInsets
}>


declare function SafeArea$addEventListener(
eventType: string,
listener: (...args: any[]) => any,
context?: any): EmitterSubscription


declare function SafeArea$removeEventListener(eventType: string, listener: (...args: any[]) => any): void

	declare export default typeof SafeArea

	declare export type Direction = "top"
| "bottom"
| "left"
| "right"
| "topLeft"
| "topAndLeft"
| "topRight"
| "topAndRight"
| "bottomLeft"
| "bottomAndLeft"
| "bottomRight"
| "bottomAndRight"
| "vertical"
| "horizontal"
| "verticalAndLeft"
| "verticalAndRight"
| "horizontalAndTop"
| "horizontalAndBottom"
| "all";
	declare export function withSafeArea(
WrappedComponent: React.ComponentType<any>,
applyTo?: "margin" | "padding" | "absolutePosition" | "contentInset",
direction?: Direction): React.ComponentType<any>

    }
