declare module "ink-testing-library" {
  import type { Component, InkElement } from "ink";

  declare export interface RenderResponse {
    rerender: (tree: InkElement) => void;
    unmount: () => void;
    stdin: {
      write: (data: any) => boolean
    };
    frames: $ReadOnlyArray<string>;
    lastFrame: () => string;
  }
  declare export function cleanup(): void;

  declare export function render(tree: InkElement): RenderResponse;
}
