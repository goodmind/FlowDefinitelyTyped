declare module "zipkin-javascript-opentracing" {
  declare export default typeof zipkin_javascript_opentracing;

  declare class zipkin_javascript_opentracing {
    constructor(...args: any[]): this;
    extract(format: any, carrier: any): any;
    inject(span: any, format: any, carrier: any): void;
    startSpan(name: any, ...args: any[]): any;
    static FORMAT_BINARY: string;
    static FORMAT_HTTP_HEADERS: string;
    static FORMAT_TEXT_MAP: string;
    static makeOptional(val: any): any;
  }

  declare var npm$namespace$zipkin_javascript_opentracing: {
    makeOptionalNamespace: typeof npm$namespace$zipkin_javascript_opentracing$makeOptionalNamespace,
    prototypeNamespace: typeof npm$namespace$zipkin_javascript_opentracing$prototypeNamespace
  };

  declare var npm$namespace$zipkin_javascript_opentracing$makeOptionalNamespace: {
    prototype: typeof zipkin_javascript_opentracing$makeOptionalNamespace$prototype
  };
  declare var zipkin_javascript_opentracing$makeOptionalNamespace$prototype: {};

  declare var npm$namespace$zipkin_javascript_opentracing$prototypeNamespace: {
    extract: typeof zipkin_javascript_opentracing$prototypeNamespace$extract,
    inject: typeof zipkin_javascript_opentracing$prototypeNamespace$inject,
    startSpan: typeof zipkin_javascript_opentracing$prototypeNamespace$startSpan,

    extract: typeof npm$namespace$zipkin_javascript_opentracing$prototypeNamespace$extract,
    inject: typeof npm$namespace$zipkin_javascript_opentracing$prototypeNamespace$inject,
    startSpan: typeof npm$namespace$zipkin_javascript_opentracing$prototypeNamespace$startSpan
  };
  declare function zipkin_javascript_opentracing$prototypeNamespace$extract(
    format: any,
    carrier: any
  ): any;

  declare function zipkin_javascript_opentracing$prototypeNamespace$inject(
    span: any,
    format: any,
    carrier: any
  ): void;

  declare function zipkin_javascript_opentracing$prototypeNamespace$startSpan(
    name: any,
    ...args: any[]
  ): any;

  declare var npm$namespace$zipkin_javascript_opentracing$prototypeNamespace$extract: {
    prototype: typeof zipkin_javascript_opentracing$prototypeNamespace$extract$prototype
  };
  declare var zipkin_javascript_opentracing$prototypeNamespace$extract$prototype: {};

  declare var npm$namespace$zipkin_javascript_opentracing$prototypeNamespace$inject: {
    prototype: typeof zipkin_javascript_opentracing$prototypeNamespace$inject$prototype
  };
  declare var zipkin_javascript_opentracing$prototypeNamespace$inject$prototype: {};

  declare var npm$namespace$zipkin_javascript_opentracing$prototypeNamespace$startSpan: {
    prototype: typeof zipkin_javascript_opentracing$prototypeNamespace$startSpan$prototype
  };
  declare var zipkin_javascript_opentracing$prototypeNamespace$startSpan$prototype: {};
}
