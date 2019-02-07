declare module "rc-progress" {
  import typeof * as React from "react";

  declare export interface CommonProps {
    className?: string;
    percent?: number | string;
    prefixCls?: string;
    strokeColor?: string;
    strokeLinecap?: "butt" | "square" | "round";
    strokeWidth?: number | string;
    style?: React.CSSProperties[] | React.CSSProperties;
    trailColor?: string;
    trailWidth?: number | string;
  }
  declare export type CircleProps = {
    gapDegree?: number,
    gapPosition?: "top" | "bottom" | "left" | "right"
  } & CommonProps;

  declare export class Circle mixins React.Component<CircleProps> {
    prevTimeStamp: number;
    getPathStyles(): {
      pathString: string,
      trailPathStyle: React.CSSProperties[] | React.CSSProperties,
      strokePathStyle: React.CSSProperties[] | React.CSSProperties
    };
  }
  declare export type LineProps = {
    prevTimeStamp?: number
  } & CommonProps;

  declare export class Line mixins React.Component<LineProps> {
    path: SVGPathElement;
  }
}
