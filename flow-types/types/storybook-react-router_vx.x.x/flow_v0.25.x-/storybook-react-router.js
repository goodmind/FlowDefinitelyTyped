declare module "storybook-react-router" {
  import typeof * as React from "react";

  import type { MemoryRouterProps } from "react-router";

  import type { Story, StoryDecorator } from "@storybook/react";

  declare export var StoryRouter: React.ComponentType<{
    story: Story,
    links: { [key: string]: any },
    routerProps: MemoryRouterProps
  }>;
  declare function storyRouterDecorator(
    links?: { [key: string]: any },
    routerProps?: MemoryRouterProps
  ): StoryDecorator;

  declare export default typeof storyRouterDecorator;
}
