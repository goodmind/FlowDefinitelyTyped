declare module 'ansi-escape-sequences' {
        declare export type Style = "reset"
| "bold"
| "italic"
| "underline"
| "fontDefault"
| "font2"
| "font3"
| "font4"
| "font5"
| "font6"
| "imageNegative"
| "imagePositive"
| "black"
| "red"
| "green"
| "yellow"
| "blue"
| "magenta"
| "cyan"
| "white"
| "grey"
| "gray"
| "bg-black"
| "bg-red"
| "bg-green"
| "bg-yellow"
| "bg-blue"
| "bg-magenta"
| "bg-cyan"
| "bg-white"
| "bg-grey"
| "bg-gray";
	
/**
 * Various formatting styles (aka Select Graphic Rendition codes).
 * @example console.log(ansi.style.red + 'this is red' + ansi.style.reset)
 */
declare export var style: $ObjMapi<{[k: Style]: any}, <K>(K) => string>;
	
/**
 * Returns an ansi sequence setting one or more effects.
 * @param styles a style, or list or styles
 * @example > ansi.styles('green')
'\u001b[32m'

> ansi.styles([ 'green', 'underline' ])
'\u001b[32;4m'
 */
declare export function styles(styles: Style | $ReadOnlyArray<Style>): string

	
/**
 * A convenience function, applying the provided styles to the input string and
 * then resetting.
 * 
 * Inline styling can be applied using the syntax `[style-list]{text to
 *  * format}`, where `style-list` is a space-separated list of styles from {@link
 * module:ansi-escape-sequences.style ansi.style}. For example `[bold white
 *  * bg-red]{bold white text on a red background}`.
 * @param str the string to format
 * @param styles a style or list of styles to add to the input string
 * @example > ansi.format('what?', 'green')
'\u001b[32mwhat?\u001b[0m'

> ansi.format('what?', ['green', 'bold'])
'\u001b[32;1mwhat?\u001b[0m'

> ansi.format('[green bold]{what?}')
'\u001b[32;1mwhat?\u001b[0m'
 */
declare export function format(str: string, styles?: Style | $ReadOnlyArray<Style>): string

	
      declare var npm$namespace$cursor: {
        up: typeof cursor$up,
down: typeof cursor$down,
forward: typeof cursor$forward,
back: typeof cursor$back,
nextLine: typeof cursor$nextLine,
previousLine: typeof cursor$previousLine,
horizontalAbsolute: typeof cursor$horizontalAbsolute,
position: typeof cursor$position,
        hide: typeof cursor$hide,
show: typeof cursor$show,
      }

/**
 * Moves the cursor `lines` cells up. If the cursor is already at the edge
 * of the screen, this has no effect.
 * @param lines default=1
 */
declare function cursor$up(lines?: number): string



/**
 * Moves the cursor `lines` cells down. If the cursor is already at the edge
 * of the screen, this has no effect.
 * @param lines default=1
 */
declare function cursor$down(lines?: number): string



/**
 * Moves the cursor `lines` cells forward. If the cursor is already at the
 * edge of the screen, this has no effect.
 * @param lines default=1
 */
declare function cursor$forward(lines?: number): string



/**
 * Moves the cursor `lines` cells back. If the cursor is already at the edge
 * of the screen, this has no effect.
 * @param lines default=1
 */
declare function cursor$back(lines?: number): string



/**
 * Moves cursor to beginning of the line n lines down.
 * @param lines default=1
 */
declare function cursor$nextLine(lines?: number): string



/**
 * Moves cursor to beginning of the line n lines up.
 * @param lines default=1
 */
declare function cursor$previousLine(lines?: number): string



/**
 * Moves the cursor to column n.
 * @param n column number
 */
declare function cursor$horizontalAbsolute(n: number): string



/**
 * Moves the cursor to row n, column m. The values are 1-based, and default
 * to 1 (top left corner) if omitted.
 * @param n row number, default=1
 * @param m column number, default=1
 */
declare function cursor$position(n?: number, m?: number): string



/**
 * Hides the cursor
 */
declare var cursor$hide: string;


/**
 * Shows the cursor
 */
declare var cursor$show: string;
	
      declare var npm$namespace$erase: {
        display: typeof erase$display,
inLine: typeof erase$inLine,
        
      }

/**
 * Clears part of the screen. If n is 0 (or missing), clear from cursor to
 * end of screen. If n is 1, clear from cursor to beginning of the screen.
 * If n is 2, clear entire screen. If n is 3, clear entire screen and delete
 * all lines saved in the scrollback buffer (some terminals only).
 */
declare function erase$display(n?: 0 | 1 | 2 | 3): string



/**
 * Erases part of the line. If n is zero (or missing), clear from cursor to
 * the end of the line. If n is one, clear from cursor to beginning of the
 * line. If n is two, clear entire line. Cursor position does not change.
 */
declare function erase$inLine(n?: 0 | 1 | 2): string

    }
