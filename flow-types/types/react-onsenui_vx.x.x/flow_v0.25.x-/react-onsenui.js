declare module "react-onsenui" {
  import typeof * as React from "react";

  declare export type HTMLAttributes<
    K: $Keys<React.HTMLAttributes<{}>>
  > = $Shape<Pick<React.HTMLAttributes<{}>, K>>;
  declare export type InputHTMLAttributes<
    K: $Keys<React.InputHTMLAttributes<{}>>
  > = $Shape<Pick<React.InputHTMLAttributes<{}>, K>>;
  declare export class Component<P = {}, S = {}>
    mixins React.Component<
        HTMLAttributes<"id" | "className" | "style"> & P,
        S
      > {}
  declare export interface Modifiers_string {
    default?: string;
    material?: string;
  }
  declare export interface Modifiers_number {
    default?: number;
    material?: number;
  }
  declare export interface AnimationOptions {
    duration?: number;
    delay?: number;
    timing?: string;
  }
  declare export interface PullHookChangeEvent {
    state: "initial" | "preaction" | "action";
  }
  declare export type NavigatorAnimationTypes =
    | "slide"
    | "lift"
    | "fade"
    | "none"
    | string;
  declare export interface PageTransitionOptions {
    animation?: NavigatorAnimationTypes;
    animationOptions?: AnimationOptions;
    callback?: () => void;
    data?: any;
  }
  declare export type SwitchChangeEvent = {
    switch: HTMLElement,
    value: boolean,
    isInteractive: boolean
  } & Event;

  /**
   * * splitter **
   */
  declare export class SplitterSide
    mixins Component<
        {
          side?: "left" | "right",
          collapse?: "portrait" | "landscape" | boolean,
          isOpen?: boolean,
          onOpen?: (e?: Event) => void,
          onPreOpen?: (e?: Event) => void,
          onPreClose?: (e?: Event) => void,
          onModeChange?: (e?: Event) => void,
          onClose?: (e?: Event) => void,
          swipeable?: boolean,
          swipeTargetWidth?: number,
          width?: number,
          animation?: "overlay" | "default",
          animationOptions?: AnimationOptions,
          openThreshold?: number,
          mode?: "collapse" | "split"
        },
        any
      > {}
  declare export class SplitterContent mixins Component<> {}
  declare export class Splitter mixins Component<> {}

  /**
   * * toolbar **
   */
  declare export class Toolbar
    mixins Component<
        {
          modifier?: string
        },
        any
      > {}
  declare export class BottomToolbar
    mixins Component<
        {
          modifier?: string
        },
        any
      > {}
  declare export class ToolbarButton
    mixins Component<
        {
          modifier?: string,
          disabled?: boolean,
          onClick?: (e?: React.MouseEvent<HTMLElement>) => void
        },
        any
      > {}

  /**
   * * icon **
   */
  declare export class Icon
    mixins Component<
        {
          modifier?: string,
          icon?: string | Modifiers_string,
          size?: number | Modifiers_number,
          rotate?: 90 | 180 | 270,
          fixedWidth?: boolean,
          spin?: boolean
        },
        any
      > {}

  /**
   * * page **
   */
  declare export class Page
    mixins Component<
        {
          contentStyle?: any,
          modifier?: string,
          renderModal?: () => void,
          renderToolbar?: () => void,
          renderBottomToolbar?: () => void,
          renderFixed?: () => void,
          onInit?: () => void,
          onShow?: () => void,
          onHide?: () => void
        },
        any
      > {}

  /**
   * * Grid **
   */
  declare export class Col
    mixins Component<
        {
          verticalAlign?: "top" | "bottom" | "center",
          width?: string
        },
        any
      > {}
  declare export class Row
    mixins Component<
        {
          verticalAlign?: "top" | "bottom" | "center"
        },
        any
      > {}

  /**
   * * Navigation **
   */
  declare export class BackButton
    mixins Component<
        {
          modifier?: string,
          onClick?: (navigator: Navigator) => void
        },
        any
      > {}
  declare export class Navigator
    mixins Component<
        {
          renderPage(route: any, navigator?: Navigator): React$Node,
          initialRouteStack?: string[],
          initialRoute?: any,
          onPrePush?: () => void,
          onPostPush?: () => void,
          onPrePop?: () => void,
          onPostPop?: () => void,
          animation?: NavigatorAnimationTypes,
          animationOptions?: AnimationOptions
        },
        any
      > {
    pages: any[];
    routes: any[];
    resetPage(
      route: any,
      options?: PageTransitionOptions
    ): Promise<HTMLElement>;
    resetPageStack(
      route: any,
      options?: PageTransitionOptions
    ): Promise<HTMLElement>;
    pushPage(route: any, options?: PageTransitionOptions): Promise<HTMLElement>;
    popPage(options?: PageTransitionOptions): Promise<HTMLElement>;
  }

  /**
   * * Carousel **
   */
  declare export class Carousel
    mixins Component<
        {
          direction?: "horizontal" | "vertical",
          fullscreen?: boolean,
          overscrollable?: boolean,
          centered?: boolean,
          itemWidth?: number | string,
          itemHeight?: number | string,
          autoScroll?: boolean,
          autoScrollRatio?: number,
          swipeable?: boolean,
          disabled?: boolean,
          index?: number,
          autoRefresh?: boolean,
          onPostChange?: () => void,
          onRefresh?: () => void,
          onOverscroll?: () => void,
          animationOptions?: AnimationOptions
        },
        any
      > {}
  declare export class CarouselItem
    mixins Component<
        {
          modifier?: string
        },
        any
      > {}

  /**
   * * AlertDialog **
   */
  declare export class AlertDialog
    mixins Component<
        {
          onCancel?: () => void,
          isOpen?: boolean,
          isCancelable?: boolean,
          isDisabled?: boolean,
          animation?: "none" | "default",
          modifier?: string,
          maskColor?: string,
          animationOptions?: AnimationOptions,
          onPreShow?: () => void,
          onPostShow?: () => void,
          onPreHide?: () => void,
          onPostHide?: () => void
        },
        any
      > {}
  declare export class Dialog
    mixins Component<
        {
          onCancel?: () => void,
          isOpen?: boolean,
          isCancelable?: boolean,
          isDisabled?: boolean,
          animation?: "none" | "default",
          modifier?: string,
          maskColor?: string,
          animationOptions?: AnimationOptions,
          onPreShow?: () => void,
          onPostShow?: () => void,
          onPreHide?: () => void,
          onPostHide?: () => void
        },
        any
      > {}
  declare export class Modal
    mixins Component<
        {
          animation?: "fade" | "lift" | "none",
          animationOptions?: AnimationOptions,
          onPreShow?: () => void,
          onPostShow?: () => void,
          onPreHide?: () => void,
          onPostHide?: () => void,
          isOpen?: boolean,
          onDeviceBackButton?: () => void
        },
        any
      > {}
  declare export class Popover
    mixins Component<
        {
          getTarget?: () => React.ReactInstance,
          onCancel?: () => void,
          isOpen?: boolean,
          isCancelable?: boolean,
          isDisabled?: boolean,
          animation?: "none" | "default",
          modifier?: string,
          maskColor?: string,
          animationOptions?: AnimationOptions,
          onPreShow?: () => void,
          onPostShow?: () => void,
          onPreHide?: () => void,
          onPostHide?: () => void
        },
        any
      > {}
  declare export class Toast
    mixins Component<
        {
          isOpen: boolean,
          animation?: "default" | "ascend" | "lift" | "fall" | "fade" | "none",
          modifier?: string,
          animationOptions?: AnimationOptions,
          onPreShow?: () => void,
          onPostShow?: () => void,
          onPreHide?: () => void,
          onPostHide?: () => void,
          onDeviceBackButton?: () => void
        },
        any
      > {}
  declare export class ActionSheet
    mixins Component<
        {
          onCancel?: () => void,
          isOpen?: boolean,
          isCancelable?: boolean,
          isDisabled?: boolean,
          animation?: string,
          modifier?: string,
          maskColor?: string,
          animationOptions?: {},
          title?: string,
          onPreShow?: () => void,
          onPostShow?: () => void,
          onPreHide?: () => void,
          onPostHide?: () => void,
          onDeviceBackButton?: () => void
        },
        any
      > {}
  declare export class ActionSheetButton
    mixins Component<
        {
          modifier?: string,
          icon?: string,
          onClick?: (e?: React.MouseEvent<HTMLElement>) => void
        },
        any
      > {}
  declare export class ProgressBar
    mixins Component<
        {
          modifier?: string,
          value?: number,
          secondaryValue?: number,
          indeterminate?: boolean
        },
        any
      > {}
  declare export class ProgressCircular
    mixins Component<
        {
          modifier?: string,
          value?: number,
          secondaryValue?: boolean,
          indeterminate?: boolean
        },
        any
      > {}
  declare export class Ripple
    mixins Component<
        {
          color?: string,
          background?: string,
          disabled?: boolean,
          modifier?: string
        },
        any
      > {}

  /**
   * * Forms **
   */
  declare export class Fab
    mixins Component<
        {
          modifier?: string,
          ripple?: boolean,
          position?: string,
          disabled?: boolean,
          onClick?: (e?: React.MouseEvent<HTMLElement>) => void,
          name?: string
        },
        any
      > {}
  declare export class Button
    mixins Component<
        {
          modifier?: string,
          disabled?: boolean,
          ripple?: boolean,
          name?: string,
          onClick?: (e?: React.MouseEvent<HTMLElement>) => void
        },
        any
      > {}
  declare export class Input
    mixins Component<
        InputHTMLAttributes<"min" | "max" | "step"> & {
          modifier?: string,
          disabled?: boolean,
          readOnly?: boolean,
          onChange?: (e: React.ChangeEvent<any>) => void,
          onBlur?: (e: React.FocusEvent<any>) => void,
          onFocus?: (e: React.FocusEvent<any>) => void,
          value?: string,
          defaultValue?: string,
          checked?: boolean,
          placeholder?: string,
          type?: string,
          inputId?: string,
          float?: boolean,
          name?: string
        },
        any
      > {}
  declare export class Radio
    mixins Component<
        {
          modifier?: string,
          disabled?: boolean,
          onChange?: (e: Event) => void,
          value?: string,
          checked?: boolean,
          defaultChecked?: boolean,
          inputId?: string,
          name?: string
        },
        any
      > {}
  declare export class Checkbox
    mixins Component<
        {
          modifier?: string,
          disabled?: boolean,
          onChange?: (e: Event) => void,
          value?: string,
          checked?: boolean,
          inputId?: string,
          name?: string
        },
        any
      > {}
  declare export class Range
    mixins Component<
        {
          modifier?: string,
          onChange?: (e: Event) => void,
          value?: number,
          disabled?: boolean
        },
        any
      > {}
  declare export class SearchInput
    mixins Component<
        {
          modifier?: string,
          disabled?: boolean,
          onChange?: (e: Event) => void,
          value?: string,
          inputId?: string
        },
        any
      > {}
  declare export class Select
    mixins Component<
        {
          modifier?: string,
          disabled?: boolean,
          onChange?: (e: React.ChangeEvent<any>) => void,
          value?: string,
          multiple?: boolean,
          autofocus?: boolean,
          required?: boolean,
          form?: string,
          size?: string,
          name?: string
        },
        any
      > {}
  declare export class Switch
    mixins Component<
        {
          modifier?: string,
          onChange?: (e: SwitchChangeEvent) => void,
          checked?: boolean,
          disabled?: boolean,
          inputId?: string,
          name?: string
        },
        any
      > {}

  /**
   * Tabs
   */
  declare export class Tab
    mixins Component<{
        label?: string,
        icon?: string
      }> {}
  declare export class TabActive mixins Component<> {}
  declare export class TabInactive mixins Component<> {}
  declare export interface TabbarRenderTab {
    content: React$Node;
    tab: React$Node;
  }
  declare export class Tabbar
    mixins Component<
        {
          index: number,
          renderTabs(): TabbarRenderTab[],
          position?: "bottom" | "top" | "auto",
          swipeable?: boolean,
          ignoreEdgeWidth?: number,
          animation?: "none" | "slide",
          animationOptions?: AnimationOptions,
          tabBorder?: boolean,
          onPreChange?: () => void,
          onPostChange?: () => void,
          onReactive?: () => void,
          onSwipe?: (index: number, animationOptions: AnimationOptions) => void
        },
        any
      > {}

  /**
   * Lists
   */
  declare export class LazyList
    mixins Component<
        {
          modifier?: string,
          length?: number,
          renderRow(rowIndex: number): any,
          calculateItemHeight(rowIndex: number): any
        },
        any
      > {}
  declare export class List
    mixins Component<
        {
          modifier?: string,
          dataSource?: any[],
          renderRow?: (row: any, index?: number) => React$Node | void,
          renderFooter?: () => React$Node | void,
          renderHeader?: () => React$Node | void
        },
        any
      > {}
  declare export class ListHeader
    mixins Component<
        {
          modifier?: string
        },
        any
      > {}
  declare export class ListItem
    mixins Component<
        {
          modifier?: string,
          tappable?: boolean,
          tapBackgroundColor?: string,
          lockOnDrag?: boolean,
          onClick?: React.MouseEventHandler<any>
        },
        any
      > {}
  declare export class ListTitle
    mixins Component<
        {
          modifier?: string,
          onClick?: React.MouseEventHandler<any>
        },
        any
      > {}
  declare export class Card
    mixins Component<
        {
          modifier?: string
        },
        any
      > {}

  /**
   * Controls
   * Pull-to-refresh hook.
   */
  declare export class PullHook
    mixins Component<
        {
          onChange?: (e: PullHookChangeEvent) => void,
          onLoad?: (done: () => void) => void,
          onPull?: () => void,
          disabled?: boolean,
          height?: number,
          thresholdHeight?: number,
          fixedContent?: boolean
        },
        any
      > {}
  declare export class Segment
    mixins Component<
        {
          index?: number,
          tabbarId?: string,
          modifier?: string,
          onPostChange?: () => void
        },
        any
      > {}
  declare export type SpeedDialPosition =
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top right"
    | "top left"
    | "bottom right"
    | "bottom left";
  declare export type SpeedDialDirection = "up" | "down" | "left" | "right";
  declare export class SpeedDial
    mixins Component<
        {
          modifier?: string,
          position?: SpeedDialPosition,
          direction?: SpeedDialDirection,
          disabled?: boolean
        },
        any
      > {}
  declare export class SpeedDialItem
    mixins Component<
        {
          modifier?: string,
          onClick?: (e?: React.MouseEvent<HTMLElement>) => void
        },
        any
      > {}
}
