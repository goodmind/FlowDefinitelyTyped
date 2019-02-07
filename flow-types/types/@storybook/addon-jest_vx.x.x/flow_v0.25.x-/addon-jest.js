declare module "@storybook/addon-jest" {
  import type { StoryDecorator } from "@storybook/react";

  declare export type SpecsFunction = (...specs: string[]) => StoryDecorator;
  declare export interface Options {
    results: { [key: string]: any };
    filesExt?: string;
  }
  declare export function withTests(options: Options): SpecsFunction;
}
