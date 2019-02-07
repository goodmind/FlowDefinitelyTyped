declare module "@storybook/vue" {
  import type Vue, { ComponentOptions } from "vue";

  declare export type StoryFunction = () => ComponentOptions<Vue> | string;
  declare export type StoryDecorator = (
    story: () => ComponentOptions<Vue>,
    context: {
      kind: string,
      story: string
    }
  ) => ComponentOptions<Vue> | null;
  declare export interface Story {
    +kind: string;
    add(storyName: string, getStory: StoryFunction): this;
    addDecorator(decorator: StoryDecorator): this;
  }
  declare export interface Addon {
    [addonName: string]: (storyName: string, storyFn: StoryFunction) => void;
  }
  declare export interface StoryStore {
    fileName: string | void;
    kind: string;
    stories: StoryObject[];
  }
  declare export interface StoryObject {
    name: string;
    render: StoryFunction;
  }
  declare export function addDecorator(decorator: StoryDecorator): void;

  declare export function configure(
    loaders: () => void,
    module: NodeModule
  ): void;

  declare export function getStorybook(): StoryStore[];

  declare export function setAddon(addon: Addon): void;

  declare export function storiesOf(kind: string, module: NodeModule): Story;
}
