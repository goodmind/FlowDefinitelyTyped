declare module "@storybook/addon-storyshots" {
  import typeof * as React from "react";

  import type { StoryObject } from "@storybook/react";

  import type { Page, NavigationOptions, ScreenshotOptions } from "puppeteer";

  declare export type Test = (options: {
    story: StoryObject,
    context: StoryContext,
    renderShallowTree: RenderTree,
    renderTree: RenderTree,
    snapshotFileName: string
  }) => void | void | Promise<void>;
  declare export type RenderTree = (
    story: StoryObject,
    context: StoryContext,
    options?: SnapshotOptions
  ) => void | void | Promise<void>;
  declare export interface SnapshotOptions {
    createNodeMock?: (element: any) => any;
  }
  declare export interface StoryContext {
    kind: string;
    story: string;
  }
  declare export interface ImageSnapshotOptions {
    context: {
      kind: any,
      story: string
    };
    url: string;
  }
  declare export function imageSnapshot(options?: {
    storybookUrl?: string,
    getMatchOptions?: (
      options: ImageSnapshotOptions
    ) => {
      failureThreshold: number,
      failureThresholdType: "percent"
    },
    getScreenshotOptions?: (options: ImageSnapshotOptions) => ScreenshotOptions,
    beforeScreenshot?: (
      page: Page,
      options: ImageSnapshotOptions
    ) => Promise<void>,
    getGotoOptions?: (options: ImageSnapshotOptions) => NavigationOptions,
    chromeExecutablePath?: string
  }): Test;

  declare export function multiSnapshotWithOptions(
    options: SnapshotOptions
  ): Test;

  declare export var shallowSnapshot: Test;
  declare export var snapshot: Test;
  declare export function snapshotWithOptions(options: SnapshotOptions): Test;

  declare export var renderOnly: Test;
  declare export function getSnapshotFileName(context: StoryContext): string;

  declare export default function initStoryshots<Rendered>(
    options: InitOptions<Rendered>
  ): void;

  declare export interface InitOptions<Rendered = any> {
    configPath?: string;
    suite?: string;
    storyKindRegex?: RegExp;
    storyNameRegex?: RegExp;
    framework?: string;
    test?: Test;
    renderer?: (node: React.ReactElement<any>) => Rendered;
    serializer?: (rendered: Rendered) => any;
    integrityOptions?: {};
  }
}
