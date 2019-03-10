declare module "@storybook/addon-info" {
  import typeof * as React from "react";

  import type { RenderFunction, StoryDecorator } from "@storybook/react";

  declare export interface WrapStoryProps {
    storyFn?: RenderFunction;
    context?: { [key: string]: any };
    options?: { [key: string]: any };
  }
  declare export interface Options {
    text?: string;
    header?: boolean;
    inline?: boolean;
    source?: boolean;
    propTables?: React.ComponentType<>[] | false;
    propTablesExclude?: React.ComponentType<>[];
    styles?: { [key: string]: any };
    marksyConf?: { [key: string]: any };
    maxPropsIntoLine?: number;
    maxPropObjectKeys?: number;
    maxPropArrayLength?: number;
    maxPropStringLength?: number;
  }
  declare export function withInfo(
    story: RenderFunction,
    context: {
      kind: string,
      story: string
    }
  ): $Call<StoryDecorator>;

  declare export function withInfo(
    textOrOptions?: string | Options
  ): (
    storyFn: RenderFunction
  ) => (context?: { [key: string]: any }) => React.ReactElement<WrapStoryProps>;

  declare export function setDefaults(newDefaults: Options): Options;
}
