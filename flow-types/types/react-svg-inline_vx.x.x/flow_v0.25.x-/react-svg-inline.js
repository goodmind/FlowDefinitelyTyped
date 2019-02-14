declare module "react-svg-inline" {
  declare interface svgInline$SVGInlineProps {
    svg: string;
    className?: string;
    classSuffix?: string;
    component?: React.ReactNode;
    fill?: string;
    cleanup?:
      | boolean
      | Array<
          | "title"
          | "desc"
          | "comment"
          | "defs"
          | "width"
          | "height"
          | "fill"
          | "sketchMSShapeGroup"
          | "sketchMSPage"
          | "sketchMSLayerGroup"
        >;
    cleanupExceptions?: Array<
      | "title"
      | "desc"
      | "comment"
      | "defs"
      | "width"
      | "height"
      | "fill"
      | "sketchMSShapeGroup"
      | "sketchMSPage"
      | "sketchMSLayerGroup"
    >;
    width?: string;
    height?: string;
    accessibilityLabel?: string;
    accessibilityDesc?: string;
  }

  declare type svgInline$SVGInline = React.ComponentClass<svgInline$SVGInlineProps>;
  declare var svgInline: svgInline$SVGInline;
  declare export default typeof svgInline;
}
