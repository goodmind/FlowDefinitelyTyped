declare module "@storybook/addons" {
  import typeof * as Channel from "@storybook/channels";

  import type { RenderFunction, StoryDecorator } from "@storybook/react";

  declare export var mockChannel: Channel;
  declare export interface Context {
    kind: string;
    story: string;
  }
  declare export type GetStoryFunc = (
    context: Context
  ) => $Call<StoryDecorator>;
  declare export interface Wrapper<Options, Parameters> {
    (
      getStory: GetStoryFunc,
      context: Context,
      optsAndParams: {
        options: Options,
        parameters: Parameters
      }
    ): $Call<StoryDecorator>;
  }
  declare export interface MakeDecoratorOptions<
    ParameterName: string,
    Options,
    Parameters
  > {
    name: string;
    parameterName: ParameterName;
    wrapper: Wrapper<Options, Parameters>;
    skipIfNoParametersOrOptions?: boolean;
    allowDeprecatedUsage?: boolean;
  }
  declare export type DecoratorContext<ParameterName: string, T> = {
    parameters?: Record<ParameterName, T>
  } & Context;

  declare export interface DecoratorWithOptions<ParameterName: string, T> {
    (
      story: RenderFunction,
      context: DecoratorContext<ParameterName, T>
    ): $Call<StoryDecorator>;
    (
      story: RenderFunction
    ): (context: DecoratorContext<ParameterName, T>) => $Call<StoryDecorator>;
  }
  declare export interface Decorator<
    ParameterName: string,
    Options,
    Parameters
  > {
    (
      story: RenderFunction,
      context: DecoratorContext<ParameterName, Parameters>
    ): $Call<StoryDecorator>;
    (options: Options): DecoratorWithOptions<ParameterName, Parameters>;
    (...options: Options[]): DecoratorWithOptions<ParameterName, Parameters>;
  }
  declare export function makeDecorator<
    ParameterName: string,
    Options,
    Parameters
  >(
    options: MakeDecoratorOptions<ParameterName, Options, Parameters>
  ): Decorator<ParameterName, Options, Parameters>;

  declare export class AddonStore {
    constructor(): this;
    getChannel(): Channel;
    hasChannel(): boolean;
    setChannel(channel: any): void;
    getPreview(): any;
    getDatabase(): any;
    setDatabase(database: any): void;
    getPanels(): any;
    addPanel(name: any, panel: any): void;
    register(name: any, loader: any): any;
    loadAddons(api: any): any;
  }
  declare var DefaultAddonStore: AddonStore;
  declare export default typeof DefaultAddonStore;
}
