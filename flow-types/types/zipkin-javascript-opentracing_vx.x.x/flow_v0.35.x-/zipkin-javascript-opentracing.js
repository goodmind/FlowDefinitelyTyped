declare module 'zipkin-javascript-opentracing' {
        declare module.exports: typeof zipkin_javascript_opentracing

	declare class zipkin_javascript_opentracing  {
constructor(...args: any[]): this;
extract(format: any, carrier: any): any;
inject(span: any, format: any, carrier: any): void;
startSpan(name: any, ...args: any[]): any;
static FORMAT_BINARY: string;
static FORMAT_HTTP_HEADERS: string;
static FORMAT_TEXT_MAP: string;
static makeOptional(val: any): any
}
	
      declare var npm$namespace$makeOptionalNamespace: {
        
        prototype: typeof makeOptionalNamespace$prototype,
      }
declare var makeOptionalNamespace$prototype: {};


      declare var npm$namespace$prototypeNamespace: {
        extract: typeof prototypeNamespace$extract,
inject: typeof prototypeNamespace$inject,
startSpan: typeof prototypeNamespace$startSpan,
        
      }
declare function prototypeNamespace$extract(format: any, carrier: any): any


declare function prototypeNamespace$inject(span: any, format: any, carrier: any): void


declare function prototypeNamespace$startSpan(name: any, ...args: any[]): any



      declare var npm$namespace$extract: {
        
        prototype: typeof extract$prototype,
      }
declare var extract$prototype: {};


      declare var npm$namespace$inject: {
        
        prototype: typeof inject$prototype,
      }
declare var inject$prototype: {};


      declare var npm$namespace$startSpan: {
        
        prototype: typeof startSpan$prototype,
      }
declare var startSpan$prototype: {};
    }
