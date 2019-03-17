declare module "react-swipeable" {
  import typeof * as React from "react";

  declare class ReactSwipeable<T: Element = HTMLElement>
    mixins React.Component<ReactSwipeable$SwipeableProps<T>> {}
  declare type ReactSwipeable$OnSwipingCallback<T: Element = HTMLElement> = (
    event: React.TouchEvent<T>,
    deltaX: number,
    deltaY: number,
    absX: number,
    absY: number,
    velocity: number
  ) => void;

  declare type ReactSwipeable$OnSwipedCallback<T: Element = HTMLElement> = (
    event: React.TouchEvent<T>,
    deltaX: number,
    deltaY: number,
    isFlick: boolean,
    velocity: number
  ) => void;

  declare type ReactSwipeable$OnSwipedDirectionCallback<
    T: Element = HTMLElement
  > = (event: React.TouchEvent<T>, delta: number, isFlick: boolean) => void;

  declare type ReactSwipeable$OnSwipingDirectionCallback<
    T: Element = HTMLElement
  > = (event: React.TouchEvent<T>, delta: number) => void;

  declare type ReactSwipeable$OnTapCallback<T: Element = HTMLElement> = (
    event: React.TouchEvent<T>
  ) => void;

  declare type ReactSwipeable$SwipeableProps<T: Element = HTMLElement> = {
    onSwiped?: ReactSwipeable$OnSwipedCallback<T>,
    onSwiping?: ReactSwipeable$OnSwipingCallback<T>,
    onSwipingUp?: ReactSwipeable$OnSwipingDirectionCallback<T>,
    onSwipingRight?: ReactSwipeable$OnSwipingDirectionCallback<T>,
    onSwipingDown?: ReactSwipeable$OnSwipingDirectionCallback<T>,
    onSwipingLeft?: ReactSwipeable$OnSwipingDirectionCallback<T>,
    onSwipedUp?: ReactSwipeable$OnSwipedDirectionCallback<T>,
    onSwipedRight?: ReactSwipeable$OnSwipedDirectionCallback<T>,
    onSwipedDown?: ReactSwipeable$OnSwipedDirectionCallback<T>,
    onSwipedLeft?: ReactSwipeable$OnSwipedDirectionCallback<T>,
    onTap?: ReactSwipeable$OnTapCallback<T>,
    flickThreshold?: number,
    delta?: number,
    preventDefaultTouchmoveEvent?: boolean,
    stopPropagation?: boolean,
    nodeName?: string,
    trackMouse?: boolean,
    disabled?: boolean,
    innerRef?: React.Ref<T>,
    children?: React.Node
  } & React.ClassAttributes<ReactSwipeable<T>> &
    React.HTMLAttributes<T>;

  declare export default typeof ReactSwipeable;
}
