declare module "jquery-backstretch" {
  declare interface JQueryBackStretch$BackStretchOptions {
    /**
     * The ratio of the width/height of the image doesn't always jive with the
     * width/height of the window. This parameter controls whether or not we
     * center the image on the X axis to account for the discrepancy.
     */
    centeredX?: boolean;

    /**
     * This parameter controls whether or not we center the image on the Y axis
     * to account for the aforementioned discrepancy.
     */
    centeredY?: boolean;

    /**
     * This is the speed at which the image will fade in. Integers in
     * milliseconds are accepted, as well as standard jQuery speed strings
     * (slow, normal, fast).
     */
    duration?: number | string;

    /**
     * The amount of time in between slides, when using Backstretch as a
     * slideshow, expressed as the number of milliseconds.
     */
    fade?: number;
  }

  declare interface JQueryBackStretch$BackStretch {
    /**
     * This method is called automatically when the container (window or
     * block-level element) is resized, however you can always call this
     * manually if needed.
     */
    resize(): JQueryBackStretch$BackStretch;

    /**
     * Jump to the slide at a given index, where n is the number of the
     * image that you'd like to display. Slide number starts at 0.
     * @param {number} newIndex
     */
    show(newIndex: number): JQueryBackStretch$BackStretch;

    /**
     * Advance to the next image in a slideshow.
     */
    next(): JQueryBackStretch$BackStretch;

    /**
     * Display the previous image in a slideshow.
     */
    prev(): JQueryBackStretch$BackStretch;

    /**
     * Pause the slideshow.
     */
    pause(): JQueryBackStretch$BackStretch;

    /**
     * Resume a paused slideshow.
     */
    resume(): JQueryBackStretch$BackStretch;

    /**
     * Destroy the Backstretch instance. Optionally, you can pass in a Boolean
     * parameter, preserveBackground, to determine whether or not you'd like
     * to keep the current image stretched as the background image.
     * @param {boolean} preserveBackground
     */
    destroy(preserveBackground?: boolean): void;
  }
  declare interface JQueryStatic {
    backstretch(
      images: string[],
      config?: JQueryBackStretch$JQueryBackStretch$BackStretchOptions
    ): JQueryBackStretch$JQueryBackStretch$BackStretch;
  }
  declare interface JQuery {
    backstretch(
      images: string[],
      config?: JQueryBackStretch$JQueryBackStretch$BackStretchOptions
    ): JQueryBackStretch$JQueryBackStretch$BackStretch;
    backstretch(method: string): JQuery;
  }
}
