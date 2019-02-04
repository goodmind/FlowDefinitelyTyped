declare module 'prosemirror-gapcursor' {
        import type {
          Plugin,Selection
        } from 'prosemirror-state';

	
/**
 * Gap cursor selections are represented using this class. Its
 * `$anchor` and `$head` properties both point at the cursor position.
 */
declare export class GapCursor mixins Selection {}
	
/**
 * Create a gap cursor plugin. When enabled, this will capture clicks
 * near and arrow-key-motion past places that don't have a normally
 * selectable position nearby, and create a gap cursor selection for
 * them. The cursor is drawn as an element with class
 * `ProseMirror-gapcursor`. You can either include
 * `style/gapcursor.css` from the package's directory or add your own
 * styles to make it visible.
 */
declare export function gapCursor(): Plugin

    }
