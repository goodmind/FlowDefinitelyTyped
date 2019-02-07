declare module "react-scrollbar" {
  declare type ScrollAreaProps = {
    className?: string,
    style?: React.CSSProperties,
    speed?: number,
    contentClassName?: string,
    contentStyle?: React.CSSProperties,
    vertical?: boolean,
    verticalContainerStyle?: React.CSSProperties,
    verticalScrollbarStyle?: React.CSSProperties,
    horizontal?: boolean,
    horizontalContainerStyle?: React.CSSProperties,
    horizontalScrollbarStyle?: React.CSSProperties,
    onScroll?: (value: {
      leftPosition: number,
      topPosition: number,
      containerHeight: number,
      containerWidth: number,
      realHeight: number,
      realWidth: number
    }) => void,
    contentWindow?: any,
    ownerDocument?: any,
    smoothScrolling?: boolean,
    minScrollSize?: number,
    swapWheelAxes?: boolean,
    stopScrollPropagation?: boolean,
    focusableTabIndex?: number
  } & React.Props<ScrollArea>;

  declare class ScrollArea mixins React.Component<ScrollAreaProps> {}
  declare module.exports: typeof ScrollArea;
}
