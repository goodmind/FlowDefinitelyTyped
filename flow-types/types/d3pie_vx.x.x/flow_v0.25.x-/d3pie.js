declare module "d3pie" {
  declare interface d3pie$ID3PieChart {
    redraw(): void;
    openSegment(index: number): void;
    closeSegment(index: void): void;
    getOpenSegment(): any;
    updateProp(propKey: string, value: any): void;
    destroy(): void;
  }

  declare interface d3pie$ID3PieStyleOptions {
    color?: string;
    fontSize?: number;
    font?: string;
  }

  declare type d3pie$ID3PieTextOptions = {
    text?: string
  } & d3pie$ID3PieStyleOptions;

  declare interface d3pie$ID3PieLabelsOptions {
    format?:
      | "label"
      | "value"
      | "percentage"
      | "label-value1"
      | "label-value2"
      | "label-percentage1"
      | "label-percentage2";
    hideWhenLessThanPercentage?: number;
  }

  declare interface d3pie$ID3PieOptions {
    header?: {
      title?: d3pie$ID3PieTextOptions,
      subtitle?: d3pie$ID3PieTextOptions,
      location?: "top-center" | "top-left" | "pie-center",
      titleSubtitlePadding?: number
    };
    footer?: {
      location?: "left"
    } & d3pie$ID3PieTextOptions;
    size?: {
      canvasHeight?: number,
      canvasWidth?: number,
      pieOuterRadius?: string | number,
      pieInnerRadius?: string | number
    };
    data: {
      sortOrder?:
        | "none"
        | "random"
        | "value-asc"
        | "value-desc"
        | "label-asc"
        | "label-desc",
      smallSegmentGrouping?: {
        enabled?: boolean,
        value?: number,
        valueType?: "percentage" | "value",
        label?: string,
        color?: string
      },
      content: {
        label: string,
        value: number,
        color?: string
      }[]
    };
    labels?: {
      outer?: {
        pieDistance?: number
      } & d3pie$ID3PieLabelsOptions,
      inner?: d3pie$ID3PieLabelsOptions,
      mainLabel?: d3pie$ID3PieStyleOptions,
      percentage?: {
        decimalPlaces?: number
      } & d3pie$ID3PieStyleOptions,
      value?: d3pie$ID3PieStyleOptions,
      lines?: {
        enabled?: boolean,
        style?: "curved" | "straight",
        color?: string
      },
      truncation?: {
        enabled?: boolean,
        truncateLength?: number
      },
      formatter?: (context: {
        section: "outer" | "inner",
        value: number,
        label: string
      }) => string
    };
    effects?: {
      load?: {
        effect?: "none" | "default",
        speed?: number
      },
      pullOutSegmentOnClick?: {
        effect?: "none" | "linear" | "bounce" | "elastic" | "back",
        speed?: number,
        size?: number
      },
      highlightSegmentOnMouseover?: boolean,
      highlightLuminosity?: number
    };
    tooltips?: {
      enabled?: boolean,
      type?: "placeholder" | "caption",
      string?: string,
      placeholderParser?: (
        index: number,
        data: {
          label?: string,
          percentage?: number,
          value?: number
        }
      ) => void,
      styles?: {
        fadeInSpeed?: number,
        backgroundColor?: string,
        backgroundOpacity?: number,
        color?: string,
        borderRadius?: number,
        font?: string,
        fontSize?: number,
        padding?: number
      }
    };
    misc?: {
      colors?: {
        background?: string,
        segments?: string[],
        segmentStroke?: string
      },
      gradient?: {
        enabled?: boolean,
        percentage?: number,
        color?: string
      },
      canvasPadding?: {
        top?: number,
        right?: number,
        bottom?: number,
        left?: number
      },
      pieCenterOffset?: {
        x?: number,
        y?: number
      },
      cssPrefix?: string
    };
    callbacks?: {
      onload?: Function,
      onMouseoverSegment?: Function,
      onMouseoutSegment?: Function,
      onClickSegment?: Function
    };
  }

  declare interface d3pie$ID3PieClass {
    new(
      id: string | HTMLElement,
      options: d3pie$ID3PieOptions
    ): d3pie$ID3PieChart;
  }
  declare var d3pie: d3pie$d3pie$ID3PieClass;
}
