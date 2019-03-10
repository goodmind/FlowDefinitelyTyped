declare module "@storybook/addon-notes" {
  import typeof * as React from "react";

  import type { RenderFunction, StoryDecorator } from "@storybook/react";

  import type { MarkedOptions } from "marked";

  declare export type WithNotesOptions =
    | string
    | {
        text: string
      }
    | {
        markdown: string,
        markdownOptions?: MarkedOptions
      };
  declare export function withNotes(
    story: RenderFunction,
    context: {
      kind: string,
      story: string
    }
  ): $Call<StoryDecorator>;

  declare export function withNotes(options?: WithNotesOptions): StoryDecorator;

  declare export function withMarkdownNotes(
    markdown: string,
    options?: MarkedOptions
  ): StoryDecorator;
}
