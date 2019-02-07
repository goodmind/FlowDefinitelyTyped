declare module "redux-infinite-scroll" {
  import type { Component, HTMLProps } from "react";

  declare interface InfiniteScrollerProps {
    elementIsScrollable?: boolean;
    containerHeight?: number | string;
    threshold?: number;
    hasMore?: boolean;
    loadingMore?: boolean;
    loader?: any;
    showLoader?: boolean;
    loadMore(): void;
    items?: JSX.Element[];
    children?: JSX.Element[];
    holderType?: string;
  }
  declare class InfiniteScoller
    mixins Component<InfiniteScrollerProps & HTMLProps<HTMLDivElement>> {}
  declare export default typeof InfiniteScoller;
}
