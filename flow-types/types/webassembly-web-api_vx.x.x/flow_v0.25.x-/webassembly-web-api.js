declare module "webassembly-web-api" {
  declare var npm$namespace$WebAssembly: {
    compileStreaming: typeof WebAssembly$compileStreaming,
    instantiateStreaming: typeof WebAssembly$instantiateStreaming
  };
  declare function WebAssembly$compileStreaming(
    source: Response | Promise<Response>
  ): Promise<Module>;

  declare function WebAssembly$instantiateStreaming(
    source: Response | Promise<Response>,
    importObject?: { [key: string]: any }
  ): Promise<ResultObject>;
}
