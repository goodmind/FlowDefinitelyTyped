declare module "react-slider" {
  import typeof * as React from "react";

  import typeof * as motion from "react-motion";

  declare interface ReactSlider$ReactSliderProps {
    min?: number;
    max?: number;
    step?: number;
    minDistance?: number;
    defaultValue?: number | number[];
    value?: number | number[];
    orientation?: "horizontal" | "vertical";
    className?: string;
    handleClassName?: string;
    handleActiveClassName?: string;
    withBars?: boolean;
    barClassName?: string;
    pearling?: boolean;
    disabled?: boolean;
    snapDragDisabled?: boolean;
    invert?: boolean;
    onBeforeChange?: (value: number | number[] | void | null) => void;
    onChange?: (value: number | number[] | void | null) => void;
    onAfterChange?: (value: number | number[] | void | null) => void;
    onSliderClick?: (value: number) => void;
  }
  declare var ReactSlider: React.ComponentClass<ReactSlider$ReactSlider$ReactSliderProps>;
  declare module.exports: typeof ReactSlider;
}
