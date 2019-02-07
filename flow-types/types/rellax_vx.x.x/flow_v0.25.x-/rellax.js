declare module "rellax" {
  declare interface Rellax$Rellax {
    /**
     * Inits and starts the Parallax animations
     * @param el Single element or string with selector of elements
     * @param options Options
     */
    (
      el?: string | Element,
      options?: Rellax$RellaxOptions
    ): Rellax$RellaxInstance;

    /**
     * Inits and starts the Parallax animations
     * @param el Single element or string with selector of elements
     * @param options Options
     */
    new(
      el?: string | Element,
      options?: Rellax$RellaxOptions
    ): Rellax$RellaxInstance;
  }

  declare interface Rellax$RellaxInstance {
    /**
     * End Rellax and reset parallax elements to their original positions
     */
    destroy(): void;

    /**
     * Rellax elements
     */
    elms: NodeListOf<Element> | Element[];

    /**
     * Options
     */
    options: Rellax$RellaxOptions;

    /**
     * Destroy and create again parallax with previous settings
     */
    refresh(): void;
  }

  declare interface Rellax$RellaxOptions {
    /**
     * Will run on every animation event
     * @param positions Object with x and y positions of the rellax element
     */
    callback?: (positions: {
      x: number,
      y: number
    }) => void;

    /**
     * Enable the ability to center parallax elements in your viewport
     */
    center?: boolean;

    /**
     * Enable horizontal parallax. This feature is intended for panoramic style websites, where users scroll horizontally instead of vertically
     */
    horizontal?: boolean;

    /**
     * Allow decimal pixel values
     */
    round?: boolean;

    /**
     * A negative value will make it move slower than regular scrolling, and a positive value will make it move faster
     */
    speed?: number;

    /**
     * Enable vertical parallax
     */
    vertical?: boolean;

    /**
     * By default, the position of parallax elements is determined via the scroll position of the body. Passing in the wrapper property will tell Rellax to watch that element instead
     */
    wrapper?: string;
  }
  declare var Rellax$Rellax: Rellax$Rellax.Rellax$Rellax;
  declare module.exports: typeof Rellax$Rellax;
}
