declare module "@storybook/addon-centered" {
  import typeof * as React from "react";

  import type { StoryDecorator } from "@storybook/react";

  declare var centered: StoryDecorator;
  declare export default typeof centered;
}
