declare type ReactTagCloud$TagCloudProps = {
  tags: any[],
  maxSize: number,
  minSize: number,
  shuffle?: boolean,
  renderer?: Function,
  className?: string,
  onClick?: Function,
  disableRandomColor?: boolean
} & React.Props<void>;

declare type ReactTagCloud$TagCloudClass = {} & React.ComponentClass<ReactTagCloud$TagCloudProps>;

declare interface ReactTagCloud$DefaultRendererFactoryOptions {
  tagRenderer?: Function;
  colorOptions?: any;
  props?: any;
}

declare interface ReactTagCloud$RendererFunction {
  (tag: any, size: number, key: string | number, handlers: any): any;
}

declare interface ReactTagCloud$DefaultRendererFactory {
  new(
    _ref?: ReactTagCloud$DefaultRendererFactoryOptions
  ): ReactTagCloud$RendererFunction;
  (
    _ref?: ReactTagCloud$DefaultRendererFactoryOptions
  ): ReactTagCloud$RendererFunction;
}
declare module "reactTagCloud" {
  declare var TagCloud: ReactTagCloud$ReactTagCloud$TagCloudClass;
  declare var DefaultRenderer: ReactTagCloud$ReactTagCloud$DefaultRendererFactory;
}
declare module "react-tagcloud" {
  declare module.exports: typeof reactTagCloud;
}
