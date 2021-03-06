declare module "react-native-drawer" {
  import typeof * as React from "react";

  import type { ViewStyle, ScaledSize } from "react-native";

  declare export interface NestedViewStyles {
    main?: ViewStyle;
    drawerOverlay?: ViewStyle;
    mainOverlay?: ViewStyle;
  }
  declare export type DrawerStyles = {
    drawer?: ViewStyle
  } & NestedViewStyles;

  declare export type TweenFunctions =
    | "linear"
    | "easeInQuad"
    | "easeOutQuad"
    | "easeInOutQuad"
    | "easeInCubic"
    | "easeOutCubic"
    | "easeInOutCubic"
    | "easeInQuart"
    | "easeOutQuart"
    | "easeInOutQuart"
    | "easeInQuint"
    | "easeOutQuint"
    | "easeInOutQuint"
    | "easeInSine"
    | "easeOutSine"
    | "easeInOutSine"
    | "easeInExpo"
    | "easeOutExpo"
    | "easeInOutExpo"
    | "easeInCirc"
    | "easeOutCirc"
    | "easeInOutCirc"
    | "easeInElastic"
    | "easeOutElastic"
    | "easeInOutElastic"
    | "easeInBack"
    | "easeOutBack"
    | "easeInOutBack"
    | "easeInBounce"
    | "easeOutBounce"
    | "easeInOutBounce";
  declare export interface DrawerProperties {
    /**
     * Menu component
     */
    content?: React.ReactNode;

    /**
     * Type of drawer
     */
    type?: "displace" | "overlay" | "static";

    /**
     * If true will trigger drawer open, if false will trigger close.
     */
    open?: boolean;

    /**
     * Can either be a integer (pixel value) or decimal (ratio of screen width). Defines the right hand margin when
     * the drawer is open. Or, can be function which returns offset
     */
    openDrawerOffset?: ((viewport: ScaledSize) => number) | number;

    /**
     * Same as openDrawerOffset, except defines left hand margin when drawer is closed
     */
    closedDrawerOffset?: (() => number) | number;

    /**
     * If true the drawer can not be opened and will not respond to pans
     */
    disabled?: boolean;

    /**
     * Styles for the drawer, main, drawerOverlay and mainOverlay container Views
     */
    styles?: DrawerStyles;

    /**
     * Takes in the pan ratio (decimal 0 to 1) that represents the tween percent. Returns an object of
     * native props to be set on the constituent views
     */
    tweenHandler?: (ratio: number) => NestedViewStyles;

    /**
     * The duration of the open/close animation
     */
    tweenDuration?: number;

    /**
     * A easing type supported by tween-functions
     */
    tweenEasing?: TweenFunctions;

    /**
     * Will be called immediately after the drawer has entered the open state
     */
    onOpen?: () => void;

    /**
     * Callback fired at the start of an open animation
     */
    onOpenStart?: () => void;

    /**
     * Callback fired when a drag gesture starts.
     */
    onDragStart?: () => void;

    /**
     * Will be called immediately after the drawer has entered the closed state
     */
    onClose?: () => void;

    /**
     * Ccallback fired at the start of a close animation
     */
    onCloseStart?: () => void;

    /**
     * If true, will capture all gestures inside of the pan mask. If 'open' will
     * only capture when drawer is open
     */
    captureGestures?: boolean | "open" | "closed";

    /**
     * Toggle drawer when double tap occurs within pan mask?
     */
    acceptDoubleTap?: boolean;

    /**
     * Toggle drawer when any tap occurs within pan mask?
     */
    acceptTap?: boolean;

    /**
     * Allow for drawer pan (on touch drag). Set to false to effectively
     * disable the drawer while still allowing programmatic control
     */
    acceptPan?: boolean;

    /**
     * Allow Pan when drawer is 'open'
     */
    acceptPanOnDrawer?: boolean;

    /**
     * Same as acceptTap, except only for close
     */
    tapToClose?: boolean;

    /**
     * If true, attempts to handle only horizontal swipes, making it play well with a child ScrollView
     */
    negotiatePan?: boolean;

    /**
     * Ratio of screen width that must be travelled to trigger a drawer open/close
     */
    panThreshold?: number;

    /**
     * Ratio of screen width that is valid for the start of a pan open action. If null -> defaults to max(.05, closedDrawerOffset)
     */
    panOpenMask?: number;

    /**
     * Ratio of screen width that is valid for the start of a pan close action. If null -> defaults to max(.05, openDrawerOffset)
     */
    panCloseMask?: number;

    /**
     * Initialize with drawer open
     */
    initializeOpen?: number;

    /**
     * which side the drawer should be on.
     */
    side?: "left" | "right" | "top" | "bottom";

    /**
     * if true will run InteractionManager for open/close animations.
     */
    useInteractionManager?: boolean;

    /**
     * (Android-only) Sets the elevation of the drawer using Android's underlying elevation API
     */
    elevation?: number;
  }
  declare export default class Drawer
    mixins React.Component<DrawerProperties> {}
}
