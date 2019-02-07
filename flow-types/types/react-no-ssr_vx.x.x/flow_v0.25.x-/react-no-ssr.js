declare module "react-no-ssr" {
  import typeof * as React from "react";

  declare export default class NoSSR
    mixins React.Component<{
        onSSR?: React.ReactChild
      }> {}
}
