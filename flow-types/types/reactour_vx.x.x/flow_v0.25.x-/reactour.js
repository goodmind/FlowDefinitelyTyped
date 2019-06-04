declare module "reactour" {
  import typeof * as React from "react";

  declare export type ReactourStepPosition =
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "center";
  declare export interface ReactourStepContentArgs {
    close: () => void;
    goTo: (step: number) => void;
    inDOM: boolean;
    step: number;
  }
  declare export interface ReactourStep {
    /**
     * Content of the step
     */
    content: React.Node | ((args: ReactourStepContentArgs) => React.Node);

    /**
     * Action that can be executed on target element of the step
     */
    action?: (domNode: any) => void;

    /**
     * Position of step content
     */
    position?: ReactourStepPosition;

    /**
     * DOM selector to find the target element
     */
    selector?: string;

    /**
     * Disable interaction for this specific step.
     * Could be enabled passing `true`
     * when `disableInteraction` prop is present in Tour
     */
    stepInteraction?: boolean;

    /**
     * Additional styles
     */
    style?: React.CSSProperties;
  }
  declare export interface ReactourProps {
    /**
     * You know…
     */
    isOpen: boolean;

    /**
     * Array of elements to highlight with special info and props
     */
    steps: ReactourStep[];

    /**
     * Function to close the _Tour_
     */
    onRequestClose: (event: React.MouseEvent<HTMLDivElement>) => void;

    /**
     * Change `--reactour-accent` _(defaults to accentColor on IE)_ css custom prop to apply color in _Helper_, number, dots, etc
     * @default #007aff
     */
    accentColor?: string;

    /**
     * Customize _Badge_ content using `current` and `total` steps values
     */
    badgeContent?: (current: number, total: number) => React.Node;

    /**
     * Content to be rendered inside the _Helper_
     */
    children?: React.Node;

    /**
     * Custom class name to add to the _Helper_
     */
    className?: string;

    /**
     * Close the _Tour_ by clicking the _Mask_
     * @default true
     */
    closeWithMask?: boolean;

    /**
     * Disable interactivity with _Dots_ navigation in _Helper_
     */
    disableDotsNavigation?: boolean;

    /**
     * Disable the ability to click or intercat in any way with the _Highlighted_ element
     */
    disableInteraction?: boolean;

    /**
     * Disable all keyboard navigation (next and prev step) when true, disable only selected keys when array
     */
    disableKeyboardNavigation?: boolean | Array<"esc" | "right" | "left">;

    /**
     * Function triggered each time current step change
     */
    getCurrentStep?: (currentStep: number) => void;

    /**
     * Programmatically change current step after the first render, when the value changes
     */
    goToStep?: number;

    /**
     * Custom class name to add to the element which is the overlay for the target element when `disableInteraction`
     */
    highlightedMaskClassName?: string;

    /**
     * Tolerance in pixels to add when calculating if an element is outside viewport to scroll into view
     */
    inViewThreshold?: number;

    /**
     * Change Next button in last step into a custom button to close the Tour
     */
    lastStepNextButton?: React.Node;

    /**
     * Custom class name to add to the _Mask_
     */
    maskClassName?: string;

    /**
     * Extra Space between in pixels between _Highlighted_ element and _Mask_
     */
    maskSpace?: number;

    /**
     * Renders as next button navigation
     */
    nextButton?: React.Node;

    /**
     * Overrides default `nextStep` internal function
     */
    nextStep?: () => void;

    /**
     * Do something after _Tour_ is opened
     */
    onAfterOpen?: (target: HTMLDivElement) => void;

    /**
     * Do something before _Tour_ is closed
     */
    onBeforeClose?: (target: HTMLDivElement) => void;

    /**
     * Renders as prev button navigation
     */
    prevButton?: React.Node;

    /**
     * Overrides default `prevStep` internal function
     */
    prevStep?: () => void;

    /**
     * Beautify _Helper_ and _Mask_ with `border-radius` (in px)
     * @default 0
     */
    rounded?: number;

    /**
     * Smooth scroll duration when positioning the target element (in ms)
     * @default 1
     */
    scrollDuration?: number;

    /**
     * Offset when positioning the target element after scroll to it, by default it's a calculation to the center of the viewport
     */
    scrollOffset?: number;

    /**
     * Show/Hide _Helper_ Navigation buttons
     * @default true
     */
    showButton?: boolean;

    /**
     * Show/Hide _Helper_ Close button
     * @default true
     */
    showCloseButton?: boolean;

    /**
     * Show/Hide _Helper_ Navigation Dots
     * @default true
     */
    showNavigation?: boolean;

    /**
     * Show/Hide number when hovers on each Navigation Dot
     * @default true
     */
    showNavigationNumber?: boolean;

    /**
     * Show/Hide _Helper_ Number Badge
     * @default true
     */
    showNumber?: boolean;

    /**
     * Starting step when _Tour_ is open the first time
     */
    startAt?: number;

    /**
     * Value to listen if a forced update is needed
     */
    update?: string;

    /**
     * Delay time when forcing update. Useful when there are known animation/transitions
     * @default 1
     */
    updateDelay?: number;
  }
  declare export interface ReactourState {
    isOpen: boolean;
    current: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
    w: number;
    h: number;
    inDOM: boolean;
    observer: MutationObserver | null;
    focusUnlocked: boolean;
    helperWidth?: number;
    helperHeight?: number;
    helperPosition?: ReactourStepPosition;
  }
  declare class Tour mixins React.Component<ReactourProps, ReactourState> {}
  declare export default typeof Tour;

  declare export interface ArrowProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled?: boolean;
    inverted?: boolean;
    label?: React.Node;
  }
  declare export function Arrow(props: ArrowProps): React.ReactElement;

  declare export type BadgeProps = {
    accentColor?: string
  } & React.ComponentPropsWithRef<"span">;

  declare export var Badge: React.FC<BadgeProps>;
  declare export interface CloseProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
  }
  declare export function Close(props: CloseProps): React.ReactElement;

  declare export type ControlsProps = {} & React.ComponentPropsWithRef<"div">;

  declare export var Controls: React.FC<ControlsProps>;
  declare export type DotProps = {
    disabled?: boolean,
    current?: number,
    index?: number,
    showNumber?: boolean,
    accentColor?: string
  } & React.ComponentPropsWithRef<"button">;

  declare export var Dot: React.FC<DotProps>;
  declare export type NavigationProps = React.ComponentPropsWithRef<"nav">;
  declare export var Navigation: React.FC<NavigationProps>;
}
