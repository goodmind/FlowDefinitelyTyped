declare module "protoc-plugin" {
  import typeof * as stream from "stream";

  import type {
    CodeGeneratorRequest as pb_CodeGeneratorRequest,
    CodeGeneratorResponse as pb_CodeGeneratorResponse
  } from "google-protobuf/google/protobuf/compiler/plugin_pb";

  import type {
    FileDescriptorProto,
    SourceCodeInfo
  } from "google-protobuf/google/protobuf/descriptor_pb";

  declare var Location: typeof SourceCodeInfo$Location;
  declare type OutputFiles = CodeGeneratorResponse$File$AsObject[];
  declare type SimplePluginCallback = (
    filesToGenerate: $ReadOnlyArray<FileDescriptorProto$AsObject>
  ) => OutputFiles | Promise<OutputFiles>;
  declare function simplePlugin(cb: SimplePluginCallback): Promise<void>;

  declare var simplePlugin: typeof npm$namespace$simplePlugin;

  declare var npm$namespace$simplePlugin: {
    CodeGeneratorRequest: typeof simplePlugin$CodeGeneratorRequest,
    CodeGeneratorResponse: typeof simplePlugin$CodeGeneratorResponse,
    CodeGeneratorResponseError: typeof simplePlugin$CodeGeneratorResponseError,
    findCommentByPath: typeof simplePlugin$findCommentByPath
  };
  declare function simplePlugin$CodeGeneratorRequest(
    stdin?: stream.Readable
  ): Promise<pb_CodeGeneratorRequest>;

  declare function simplePlugin$CodeGeneratorResponse(
    stdout?: stream.Writable
  ): (files: OutputFiles) => void;

  declare function simplePlugin$CodeGeneratorResponseError(
    stdout?: stream.Writable
  ): (err: Error) => void;

  declare function simplePlugin$findCommentByPath(
    path: number[],
    locationList: Location.AsObject[]
  ): string;

  declare export default typeof simplePlugin;
}
