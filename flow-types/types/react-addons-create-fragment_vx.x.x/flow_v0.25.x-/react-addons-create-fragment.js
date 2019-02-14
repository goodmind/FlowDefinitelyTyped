declare module "react-addons-create-fragment" {
  import typeof * as React from "react";

  declare export default typeof createFragment;

  declare function createFragment(object: {
    [key: string]: React.ReactNode
  }): React.ReactFragment;
}
