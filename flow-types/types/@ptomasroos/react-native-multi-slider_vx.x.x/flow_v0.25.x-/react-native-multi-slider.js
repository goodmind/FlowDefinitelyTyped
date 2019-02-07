declare module "@ptomasroos/react-native-multi-slider" {
  import typeof * as React from "react";

  import type { ViewStyle } from "react-native";

  declare export interface MarkerProps {
    pressed: boolean;
    pressedMarkerStyle: ViewStyle;
    markerStyle: ViewStyle;
    enabled: boolean;
    currentValue: number;
    valuePrefix: string;
    valueSuffix: string;
  }
  declare export interface MultiSliderProps {
    values?: number[];
    onValuesChange?: (values: number[]) => void;
    onValuesChangeStart?: () => void;
    onValuesChangeFinish?: (values: number[]) => void;
    sliderLength?: number;
    touchDimensions?: {
      height: number,
      width: number,
      borderRadius: number,
      slipDisplacement: number
    };
    customMarker?: React.ComponentType<MarkerProps>;
    customMarkerLeft?: React.ComponentType<MarkerProps>;
    customMarkerRight?: React.ComponentType<MarkerProps>;
    isMarkersSeparated?: boolean;
    min?: number;
    max?: number;
    step?: number;
    optionsArray?: number[];
    containerStyle?: ViewStyle;
    trackStyle?: ViewStyle;
    selectedStyle?: ViewStyle;
    unselectedStyle?: ViewStyle;
    markerContainerStyle?: ViewStyle;
    markerStyle?: ViewStyle;
    pressedMarkerStyle?: ViewStyle;
    valuePrefix?: string;
    valueSuffix?: string;
    enabledOne?: boolean;
    enabledTwo?: boolean;
    onToggleOne?: () => void;
    onToggleTwo?: () => void;
    allowOverlap?: boolean;
    snapped?: boolean;
    markerOffsetX?: number;
    markerOffsetY?: number;
  }
  declare export default class MultiSlider
    mixins React.Component<MultiSliderProps> {}
}
