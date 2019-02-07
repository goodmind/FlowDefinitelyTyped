declare module "jsoneditor-for-react" {
  import typeof * as React from "react";

  import type JSONEditor, { JSONEditorOptions } from "jsoneditor";

  declare export interface ReactJsonEditorProps {
    values: {};
  }
  declare export default class ReactJsoneditor
    mixins React.Component<ReactJsonEditorProps> {}
}
