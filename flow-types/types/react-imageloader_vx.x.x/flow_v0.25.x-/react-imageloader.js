declare module "react-imageloader" {
  declare type ImageLoaderProps = {
    /**
     * An optional class name for the wrapper component.
     */
    className?: string,

    /**
     * An optional object containing props for the underlying img component.
     */
    imgProps?: any,

    /**
     * An optional handler for the error event.
     */
    onError?: (event: any) => void,

    /**
     * An optional handler for the load event.
     */
    onLoad?: (event: any) => void,

    /**
     * An optional function that returns a React element to be shown while the image loads.
     */
    preloader?: (params: any) => React.ReactElement<any>,

    /**
     * The URL of the image to be loaded.
     */
    src: string,

    /**
     * An optional object containing styles for the wrapper component.
     */
    style?: React.CSSProperties,

    /**
     * A function that takes a props argument and returns a React element to be used as the wrapper component. Defaults to React.DOM.span.
     */
    wrapper?: (props: any) => React.ReactElement<any>
  } & React.Props<ImageLoader>;

  declare class ImageLoader mixins React.Component<ImageLoaderProps> {}
  declare module.exports: typeof ImageLoader;
}
