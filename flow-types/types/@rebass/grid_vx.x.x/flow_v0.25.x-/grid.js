declare module "@rebass/grid" {
  declare export type Omit<T, K: $Keys<T>> = Pick<
    T,
    $ElementType<
      $ObjMapi<T, <P>(P) => P> &
        $ObjMapi<{ [k: K]: any }, <P>(P) => empty> & {
          [x: string]: empty,
          [x: number]: empty
        },
      $Keys<T>
    >
  >;
  import type { ComponentType } from "react";

  import type { StyledComponent, Interpolation } from "styled-components";

  declare export type ResponsiveProp = number | string | Array<string | number>;
  declare export interface CommonProps {
    width?: ResponsiveProp;
    fontSize?: ResponsiveProp;
    color?: ResponsiveProp;
    bg?: ResponsiveProp;
    m?: ResponsiveProp;
    mt?: ResponsiveProp;
    mr?: ResponsiveProp;
    mb?: ResponsiveProp;
    ml?: ResponsiveProp;
    mx?: ResponsiveProp;
    my?: ResponsiveProp;
    p?: ResponsiveProp;
    pt?: ResponsiveProp;
    pr?: ResponsiveProp;
    pb?: ResponsiveProp;
    pl?: ResponsiveProp;
    px?: ResponsiveProp;
    py?: ResponsiveProp;
    theme?: any;

    /**
     * This works even without babel-plugin-styled-components.
     */
    css?: Interpolation<any>;
  }
  declare export type BoxProps = {
    flex?: ResponsiveProp,
    order?: ResponsiveProp,
    is?: string | ComponentType<any>,
    alignSelf?: ResponsiveProp
  } & Omit<React$ComponentPropsWithRef<"div">, "color" | "is"> &
    CommonProps;

  declare export type FlexProps = {
    alignItems?: ResponsiveProp,
    justifyContent?: ResponsiveProp,
    flexDirection?: ResponsiveProp,
    flexWrap?: ResponsiveProp
  } & BoxProps;

  declare export type BoxComponent = StyledComponent<
    React$ForwardRefExoticComponent<$Shape<BoxProps>>,
    any
  >;
  declare export type FlexComponent = StyledComponent<
    React$ForwardRefExoticComponent<$Shape<FlexProps>>,
    any
  >;
  declare export interface Theme {
    breakpoints: string[];
    space?: number[];
    fontSizes?: number[];
  }
  declare export var Box: BoxComponent;
  declare export var Flex: FlexComponent;
  declare export var theme: Theme;
  declare export var div: ComponentType<React$HTMLProps<HTMLDivElement>>;
}
