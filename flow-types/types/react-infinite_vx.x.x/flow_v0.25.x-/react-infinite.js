declare module "react-infinite" {
  import typeof * as React from "react";

  declare module.exports: typeof Infinite;

  declare type Infinite$InfiniteProps = {
    elementHeight: number | number[],
    containerHeight?: number,
    preloadBatchSize?: number | Object,
    preloadAdditionalHeight?: number | Object,
    handleScroll?: (node: React.ReactElement<any>) => void,
    infiniteLoadBeginBottomOffset?: number,
    infiniteLoadBeginEdgeOffset?: number,
    onInfiniteLoad?: () => void,
    loadingSpinnerDelegate?: React.ReactElement<any>,
    isInfiniteLoading?: boolean,
    timeScrollStateLastsForAfterUserScrolls?: number,
    className?: string,
    useWindowAsScrollContainer?: boolean,
    displayBottomUpwards?: boolean
  } & React.Props<Infinite>;

  declare class Infinite
    mixins React.Component<Infinite$Infinite$InfiniteProps> {
    static containerHeightScaleFactor(n: number): any;
  }
}
