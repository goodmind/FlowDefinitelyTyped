declare module "slate-plain-serializer" {
  import type { BlockProperties, MarkProperties, Value } from "slate";

  declare export interface DeserializeOptions {
    toJson?: boolean;
    defaultBlock?: BlockProperties;
    defaultMarks?: MarkProperties[] | Set<MarkProperties>;
  }

  declare var npm$namespace$Plain: {
    deserialize: typeof Plain$deserialize,
    serialize: typeof Plain$serialize
  };
  declare function Plain$deserialize(
    string: string,
    options?: DeserializeOptions
  ): Value;

  declare function Plain$serialize(value: Value): string;

  declare export default typeof Plain;
}
