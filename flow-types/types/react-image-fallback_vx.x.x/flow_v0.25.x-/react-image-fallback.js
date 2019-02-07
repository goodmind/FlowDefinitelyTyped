declare module "react-image-fallback" {
  import typeof * as React from "react";

  declare export default class ReactImageFallback
    mixins React.Component<
        ReactImageFallbackProps &
          React.DetailedHTMLProps<
            React.ImgHTMLAttributes<HTMLImageElement>,
            HTMLImageElement
          >,
        any
      > {}
  declare export interface ReactImageFallbackProps {
    src: string;
    fallbackImage:
      | string
      | React.ReactElement<any>
      | string[]
      | Array<React.ReactElement<any>>;
    initialImage?: string | React.ReactElement<any>;
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
    onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
    initialTimeout?: number;
  }
}
