declare module "vanilla-tilt" {
  /**
   * Options which configures the tilting
   */
  declare export interface TiltOptions {
    /**
     * Reverse the tilt direction
     */
    reverse?: boolean;

    /**
     * Max tilt rotation (degrees)
     */
    max?: number;

    /**
     * Transform perspective, the lower the more extreme the tilt gets.
     */
    perspective?: number;

    /**
     * 2 = 200%, 1.5 = 150%, etc..
     */
    scale?: number;

    /**
     * Speed of the enter/exit transition
     */
    speed?: number;

    /**
     * Set a transition on enter/exit.
     */
    transition?: boolean;

    /**
     * What axis should be disabled. Can be X or Y.
     */
    axis?: null | "x" | "y";

    /**
     * If the tilt effect has to be reset on exit.
     */
    reset?: boolean;

    /**
     * Easing on enter/exit.
     */
    easing?: string;

    /**
     * if it should have a "glare" effect
     */
    glare?: boolean;

    /**
     * the maximum "glare" opacity
     */
    "max-glare"?: number;

    /**
     * false = VanillaTilt creates the glare elements for you, otherwise
     * you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
     */
    "glare-prerender"?: boolean;
  }
  declare export interface TiltValues {
    /**
     * The current tilt on the X axis
     */
    tiltX: number;

    /**
     * The current tilt on the Y axis
     */
    tiltY: number;

    /**
     * The current percentage on the X axis
     */
    percentageX: number;

    /**
     * The current percentage on the Y axis
     */
    percentageY: number;
  }
  declare export type HTMLVanillaTiltElement = {
    vanillaTilt: VanillaTilt
  } & HTMLElement;

  /**
   * A smooth 3D tilt javascript library forked from Tilt.js (jQuery version).
   */
  declare export default class VanillaTilt {
    /**
     * Creates a new instance of a VanillaTilt element.
     * @param element The element, which should be a VanillaTilt element
     * @param settings Settings which configures the element
     */
    constructor(element: HTMLElement, settings?: TiltOptions): this;

    /**
     * Initializes one or multiple elements
     * @param elements The element, which should tilt
     * @param settings Settings, which configures the elements
     */
    static init(
      elements: HTMLElement | HTMLElement[],
      settings?: TiltOptions
    ): void;

    /**
     * Resets the styling
     */
    reset(): void;

    /**
     * Get values of instance
     */
    getValues(): TiltValues;

    /**
     * Destroys the instance and removes the listeners.
     */
    destroy(): void;

    /**
     * Start listening to events
     */
    addEventListeners(): void;

    /**
     * Stop listening to events
     */
    removeEventListener(): void;
  }
}
