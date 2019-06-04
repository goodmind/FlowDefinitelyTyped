declare module "@storybook/html" {
  declare export type RenderFunction = () => string | string[];
  declare export interface DecoratorParameters {
    [key: string]: any;
  }
  declare export type StoryDecorator = (
    story: RenderFunction,
    context: {
      kind: string,
      story: string
    }
  ) => string | null;
  declare export interface Story {
    +kind: string;
    add(
      storyName: string,
      callback: RenderFunction,
      parameters?: DecoratorParameters
    ): this;
    addDecorator(decorator: StoryDecorator): this;
    addParameters(parameters: DecoratorParameters): this;
  }
  declare export function addDecorator(decorator: StoryDecorator): void;

  declare export function addParameters(parameters: DecoratorParameters): void;

  declare export function clearDecorators(): void;

  declare export function configure(fn: () => void, module: NodeModule): void;

  declare export function setAddon(addon: { [key: string]: any }): void;

  declare export function storiesOf(name: string, module: NodeModule): Story;

  declare export function storiesOf<T>(
    name: string,
    module: NodeModule
  ): Story & T;

  declare export function forceReRender(): void;

  declare export interface StoryObject {
    name: string;
    render: RenderFunction;
  }
  declare export interface StoryBucket {
    kind: string;
    stories: StoryObject[];
  }
  declare export function getStorybook(): StoryBucket[];
}
