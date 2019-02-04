declare module 'multi-progress' {
        import type {
          Stream
        } from 'stream';

	declare module.exports: typeof MultiProgress

	declare class MultiProgress  {

/**
 * Create a new @see MultiProgress with the given stream, or stderr by default
 * @param stream A stream to write the progress bars to
 */
constructor(stream?: Stream): this;

/**
 * Add a new bar
 */
newBar: (format: string, options: ProgressBar.ProgressBarOptions) => ProgressBar;

/**
 * Close all bars
 */
terminate: () => void;

/**
 * Render the given progress bar
 */
move: (index: number) => void;

/**
 * Move the bar indicated by index forward the number of steps indicated by value
 */
tick: (index: number, value: number, options?: any) => void;

/**
 * Update the bar indicated by index to the value given
 */
update: (index: number, value: number, options?: any) => void
}
	
    }
