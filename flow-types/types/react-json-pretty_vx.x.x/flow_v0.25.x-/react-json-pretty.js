declare module "react-json-pretty" {
  import type { ComponentClass, HTMLProps } from "react";

  declare module.exports: typeof JSONPretty;

  declare var JSONPretty: JSONPretty;
  declare type JSONPretty = ComponentClass<JSONPretty$JSONPretty$JSONPrettyProps>;
  declare type JSONPretty$JSONPrettyProps = {
    json: {} | string
  } & HTMLProps<JSONPretty>;
}
