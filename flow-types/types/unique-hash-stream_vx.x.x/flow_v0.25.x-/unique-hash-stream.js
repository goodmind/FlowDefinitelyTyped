declare module "unique-hash-stream" {
  import type { Transform } from "stream";

  declare export default typeof UniqueFactory;

  declare function UniqueFactory(hashingFn?: (doc: any) => string): Transform;

  declare var npm$namespace$UniqueFactory: {
    calculate: typeof UniqueFactory$calculate,
    Unique: typeof UniqueFactory$Unique
  };
  declare var UniqueFactory$Unique: typeof Transform;

  declare function UniqueFactory$calculate(doc: any): string;
}
