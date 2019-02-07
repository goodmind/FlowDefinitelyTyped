declare module "prosemirror-dropcursor" {
  import type { Plugin } from "prosemirror-state";

  /**
   * Create a plugin that, when added to a ProseMirror instance,
   * causes a decoration to show up at the drop position when something
   * is dragged over the editor.
   * @param options These options are supported:
   * @param The color of the cursor. Defaults to `black`.
   * @param The precise width of the cursor in pixels. Defaults to 1.
   */
  declare export function dropCursor(options?: {
    color?: string | null,
    width?: number | null
  }): Plugin;
}
