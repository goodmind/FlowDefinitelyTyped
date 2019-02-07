declare module "react-list" {
  import type { Component, Props } from "react";

  declare type ItemRenderer = (
    index: number,
    key: number | string
  ) => JSX.Element;
  declare type ItemsRenderer = (
    items: JSX.Element[],
    ref: string
  ) => JSX.Element;
  declare type ItemSizeEstimator = (index: number, cache: {}) => number;
  declare type ItemSizeGetter = (index: number) => number;
  declare type ScrollParentGetter = () => JSX.Element;
  declare type ReactListProps = {
    axis?: "x" | "y",
    initialIndex?: number,
    itemRenderer?: ItemRenderer,
    itemSizeEstimator?: ItemSizeEstimator,
    itemSizeGetter?: ItemSizeGetter,
    itemsRenderer?: ItemsRenderer,
    length?: number,
    minSize?: number,
    pageSize?: number,
    scrollParentGetter?: ScrollParentGetter,
    threshold?: number,
    type?: string,
    useStaticSize?: boolean,
    useTranslate3d?: boolean
  } & Props<ReactList>;

  declare class ReactList mixins Component<ReactListProps> {
    scrollTo(index: number): void;
    scrollAround(index: number): void;
    getVisibleRange(): number[];
  }

  declare module.exports: typeof ReactList;
}
