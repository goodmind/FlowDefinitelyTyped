declare module "global" {
  declare var context: SketchContext;
}
declare module "react-sketchapp" {
  import typeof * as React from "react";

  declare export interface SketchPage {
    name: () => any;
  }
  declare export interface SketchAssetCollection {
    colors: () => any[];
    gradients: () => any[];
  }
  declare export interface SketchSharedStyleContainer {
    setObjects: (objects: any[]) => void;
    addSharedStyleWithName_firstInstance: (name: string, ins: any) => void;
  }
  declare export interface SketchDocumentData {
    layerStyles: () => void;
    layerTextStyles: () => SketchSharedStyleContainer;
    layerSymbols: () => void;
    assets: () => SketchAssetCollection;
  }
  declare export interface SketchDocument {
    documentData: () => SketchDocumentData;
    pages: () => SketchPage[];
    addBlankPage: () => SketchPage;
    currentPage: () => SketchPage;
  }
  declare export interface SketchContext {
    document: SketchDocument;
  }

  /**
 * Returns the top-level rendered Sketch object or an array of Sketch objects if you use
 * components.
 * @param element Top-level React component that defines your Sketch document.
 * @param container The element to render into - will be replaced. Should either be a Sketch Group
or Page Object.
 * @return The top-most rendered native Sketch layer.
 */
  declare export function render(element: JSX.Element, container?: any): any;

  /**
   * Returns a Sketch JSON object for further consumption - doesn't add to the page.
   * @return The top-most Sketch layer as JSON.
   */
  declare export function renderToJSON(element: JSX.Element): any;

  declare export type Color = string | number;

  /**
   * The [`StyleSheet` api uses numbers as IDs][0] to pull registered styles. The component props
   * can actually take either a `Style` or a `StyleReference` (where the `StyleReference` is given
   * by a `StyleSheet` obj created with `StyleSheet.create`)
   * [0]: https://github.com/airbnb/react-sketchapp/blob/v0.12.1/src/stylesheet/index.js#L34
   */
  declare export type StyleReference = number;

  /**
   * Represents the base styles that can be applied to a component.
   */
  declare export interface Style {
    shadowColor?: Color;
    shadowOffset?: {
      width?: number,
      height?: number
    };
    shadowOpacity?: number;
    shadowRadius?: number;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    margin?: number;
    marginVertical?: number;
    marginHorizontal?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    padding?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    borderWidth?: number;
    borderTopWidth?: number;
    borderRightWidth?: number;
    borderBottomWidth?: number;
    borderLeftWidth?: number;
    position?: "absolute" | "relative";
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    flexWrap?: "wrap" | "nowrap";
    justifyContent?:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
    alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "stretch";
    overflow?: "visible" | "hidden" | "scroll";
    flex?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number;
    aspectRatio?: number;
    zIndex?: number;
    backfaceVisibility?: "visible" | "hidden";
    backgroundColor?: Color;
    borderColor?: Color;
    borderTopColor?: Color;
    borderRightColor?: Color;
    borderBottomColor?: Color;
    borderLeftColor?: Color;
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderStyle?: "solid" | "dotted" | "dashed";
    opacity?: number;
  }

  /**
   * Represents all the Styles that can be applied to a `<Text/>` component. The this interface
   * extends the `Style` interface
   */
  declare export type TextStyle = {
    color?: Color,
    fontFamily?: string,
    fontSize?: number,
    fontStyle?: "normal" | "italic",
    fontWeight?: string,
    textDecorationLine?: "none" | "underline" | "double" | "line-through",
    textShadowOffset?: {
      width: number,
      height: number
    },
    textShadowRadius?: number,
    textShadowColor?: Color,
    letterSpacing?: number,
    lineHeight?: number,
    textAlign?: "auto" | "left" | "right" | "center" | "justify",
    writingDirection?: "auto" | "ltr" | "rtl"
  } & Style;

  /**
   * DocumentProps, a Document does not take any props but children
   */
  declare export interface DocumentProps {
    children?: any;
  }

  /**
   * Document, a wrapper for a Sketch document, may contain Pages as children
   * http://airbnb.io/react-sketchapp/docs/API.html#document
   */
  declare export class Document mixins React.Component<DocumentProps, any> {}

  /**
   * PageProps, a Page takes optionally a name and children as props
   */
  declare export interface PageProps {
    name?: string;
    children?: any;
  }

  /**
   * Page, a wrapper for a Sketch page, may contain Artboards as children
   * http://airbnb.io/react-sketchapp/docs/API.html#page
   */
  declare export class Page mixins React.Component<PageProps, any> {}
  declare export interface ArtboardProps {
    /**
     * The name to be displayed in the Sketch Layer List
     */
    name?: string;
    children?: any;
    style?: Style | StyleReference;
  }

  /**
   * Wrapper for Sketch's Artboards.
   */
  declare export class Artboard mixins React.Component<ArtboardProps, any> {}
  declare export type ImageSource =
    | string
    | {
        src: string
      };
  declare export type ResizeMode =
    | "contain"
    | "cover"
    | "stretch"
    | "center"
    | "repeat"
    | "none";
  declare export interface ImageProps {
    children?: any;
    source?: ImageSource;
    style?: Style | StyleReference;
    resizeMode: ResizeMode;
  }
  declare export class Image mixins React.Component<ImageProps, any> {}
  declare export interface RedBoxProps {
    /**
     * A JavaScript Error object
     */
    error: Error;
  }

  /**
   * A red box / 'red screen of death' error handler. Thanks to
   * [commissure/redbox-react.](https://github.com/commissure/redbox-react)
   */
  declare export class RedBox mixins React.Component<RedBoxProps, any> {}
  declare export interface TextProps {
    name?: string;
    children?: string;
    style?: TextStyle | StyleReference;
  }

  /**
   * Text primitives
   */
  declare export class Text mixins React.Component<TextProps, any> {}
  declare export interface ViewProps {
    name?: string;
    children?: any;
    style?: Style | StyleReference;
  }

  /**
   * View primitives
   */
  declare export class View mixins React.Component<ViewProps, any> {}
  declare export var StyleSheet: {
    hairlineWidth: 1,
    absoluteFill: StyleReference,

    /**
     * Create an optimized `StyleSheet` reference from a style object.
     */
    create: <
      T: {
        [key: string]: Style | TextStyle
      }
    >(
      t: T
    ) => $ObjMapi<T, <P>(P) => StyleReference>,

    /**
     * Flatten an array of style objects into one aggregated object, or look up the definition for a
     * registered stylesheet.
     */
    flatten: (
      input:
        | Array<Style | TextStyle | StyleReference>
        | StyleReference
        | void
        | Style
    ) => Style | TextStyle,

    /**
     * resolve one style
     */
    resolve: (
      style: Style | TextStyle
    ) => {
      style: Style | TextStyle
    }
  };

  /**
   * An interface to Sketch's shared text styles. Create styles with or without rendering them to
   * the document canvas.
   */
  declare export var TextStyles: {
    /**
     * The primary interface to TextStyles. Call this before rendering.
     */
    create: (
      options: {
        context: SketchContext,
        clearExistingStyles?: boolean
      },
      styles: {
        [key: string]: TextStyle
      }
    ) => any,

    /**
     * Find a stored native Sketch style object for a given JavaScript style object. You probably
     * don't need to use this.
     */
    resolve: (style: TextStyle) => any,

    /**
     * Find a stored style by name.
     */
    get: (name: string) => TextStyle | void,

    /**
     * Find all of the registered styles. You probably don't need to use this.
     */
    styles: {
      [key: string]: TextStyle | void
    },

    /**
     * Reset the registered styles.
     */
    clear: () => void
  };

  /**
 * Returns a Sketch symbol given a node and an optional name.
 * @param node The node object that will be rendered as a symbol
 * @param name Optional name for the symbol, string can include backslashes to organize these
symbols with Sketch. For example squares/blue
 */
  declare export function makeSymbol<P>(
    node: React.ComponentClass<P> | ((props: P) => JSX.Element),
    name?: string
  ): React.ComponentClass<
    P & {
      overrides?: {
        [key: string]: any
      }
    }
  >;

  /**
   * Injects the symbols into Sketch's symbol page. **Call this before rendering.**
   */
  declare export function injectSymbols(context: SketchContext): void;

  declare export var Platform: {
    OS: "sketch",
    Version: 1,
    select: (obj: any) => any
  };
}
