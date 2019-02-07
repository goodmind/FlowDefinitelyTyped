declare module "react-native-swiper" {
  import typeof * as React from "react";

  import type {
    ViewStyle,
    StyleProp,
    NativeSyntheticEvent,
    NativeScrollEvent
  } from "react-native";

  declare export interface SwiperState {
    autoplayEnd: boolean;
    dir: "x" | "y";
    height: number;
    width: number;
    index: number;
    isScrolling: boolean;
    loopJump: boolean;
    offset: {
      x: number,
      y: number
    };
    total: number;
  }
  declare export type SwiperProperties = {
    horizontal?: boolean,
    style?: StyleProp<ViewStyle>,
    pagingEnabled?: boolean,
    showsHorizontalScrollIndicator?: boolean,
    showsVerticalScrollIndicator?: boolean,
    bounces?: boolean,
    scrollsToTop?: boolean,
    scrollEnabled?: boolean,
    removeClippedSubviews?: boolean,
    automaticallyAdjustContentInsets?: boolean,
    showsPagination?: boolean,
    showsButtons?: boolean,
    loadMinimal?: boolean,
    loadMinimalSize?: number,
    loadMinimalLoader?: JSX.Element,
    loop?: boolean,
    autoplay?: boolean,
    autoplayTimeout?: number,
    autoplayDirection?: boolean,
    index?: number,
    renderPagination?: (
      index: number,
      total: number,
      thisObject: Swiper
    ) => JSX.Element,
    dotStyle?: StyleProp<ViewStyle>,
    activeDotStyle?: StyleProp<ViewStyle>,
    activeDot?: JSX.Element,
    dot?: JSX.Element,
    dotColor?: string,
    activeDotColor?: string,
    height?: number,
    width?: number,
    paginationStyle?: StyleProp<ViewStyle>,
    buttonWrapperStyle?: StyleProp<ViewStyle>,
    nextButton?: JSX.Element,
    prevButton?: JSX.Element,
    onScrollBeginDrag?: (
      event: NativeSyntheticEvent<NativeScrollEvent>,
      state: SwiperState,
      context: Swiper
    ) => void,
    onMomentumScrollEnd?: (
      event: NativeSyntheticEvent<NativeScrollEvent>,
      state: SwiperState,
      context: Swiper
    ) => void,
    onTouchStartCapture?: (
      event: NativeSyntheticEvent<NativeScrollEvent>,
      state: SwiperState,
      context: Swiper
    ) => void,
    onTouchStart?: (
      event: NativeSyntheticEvent<NativeScrollEvent>,
      state: SwiperState,
      context: Swiper
    ) => void,
    onTouchEnd?: (
      event: NativeSyntheticEvent<NativeScrollEvent>,
      state: SwiperState,
      context: Swiper
    ) => void,
    onResponderRelease?: (
      event: NativeSyntheticEvent<NativeScrollEvent>,
      state: SwiperState,
      context: Swiper
    ) => void
  } & React.Props<Swiper>;

  declare export default class Swiper
    mixins React.Component<SwiperProperties, SwiperState> {
    scrollBy(index: number, animated: boolean): void;
  }
}
