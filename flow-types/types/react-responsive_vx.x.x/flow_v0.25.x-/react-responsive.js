declare module "react-responsive" {
  import typeof * as React from "react";

  declare export interface MediaQueryTypes {
    all?: boolean;
    grid?: boolean;
    aural?: boolean;
    braille?: boolean;
    handheld?: boolean;
    print?: boolean;
    projection?: boolean;
    screen?: boolean;
    tty?: boolean;
    tv?: boolean;
    embossed?: boolean;
  }
  declare export type MediaQueryType = $Keys<MediaQueryTypes>;
  declare export interface MediaQueryMatchers {
    aspectRatio?: string;
    deviceAspectRatio?: string;
    height?: number | string;
    deviceHeight?: number | string;
    width?: number | string;
    deviceWidth?: number | string;
    color?: boolean;
    colorIndex?: boolean;
    monochrome?: boolean;
    resolution?: number | string;
    orientation?: "portrait" | "landscape";
    scan?: "progressive" | "interlace";
    type?: MediaQueryType;
  }
  declare export type MediaQueryFeatures = {
    minAspectRatio?: string,
    maxAspectRatio?: string,
    minDeviceAspectRatio?: string,
    maxDeviceAspectRatio?: string,
    minHeight?: number | string,
    maxHeight?: number | string,
    minDeviceHeight?: number | string,
    maxDeviceHeight?: number | string,
    minWidth?: number | string,
    maxWidth?: number | string,
    minDeviceWidth?: number | string,
    maxDeviceWidth?: number | string,
    minColor?: number,
    maxColor?: number,
    minColorIndex?: number,
    maxColorIndex?: number,
    minMonochrome?: number,
    maxMonochrome?: number,
    minResolution?: number | string,
    maxResolution?: number | string
  } & MediaQueryMatchers;

  declare export type MediaQueryAllQueryable = {} & MediaQueryFeatures &
    MediaQueryTypes;

  declare export type MediaQueryProps = {
    component?:
      | string
      | React.SFC<any>
      | React.ClassType<any, any, any>
      | React.ComponentClass<any>,
    query?: string,
    style?: React.CSSProperties,
    className?: string,
    children?: React.Node | ((matches: boolean) => React.Node),
    values?: $Shape<MediaQueryMatchers>,
    onBeforeChange?: (matches: boolean) => void,
    onChange?: (matches: boolean) => void
  } & MediaQueryAllQueryable;

  declare class MediaQuery mixins React.Component<MediaQueryProps> {}
  declare export function toQuery(
    matchers: $Shape<MediaQueryAllQueryable>
  ): string;

  declare export default typeof MediaQuery;
}
