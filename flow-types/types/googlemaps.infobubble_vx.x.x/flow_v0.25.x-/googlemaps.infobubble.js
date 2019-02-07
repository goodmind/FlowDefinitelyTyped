declare module "googlemaps.infobubble" {
  declare export interface infobubble$InfoBubble {
    /**
     * Closes the infobubble
     */
    close(): void;

    /**
     * Checks if the infobubble is currently open
     */
    isOpen(): boolean;

    /**
     * Opens the infobubble
     * @map The google map object
     * @marker The marker used for anchoring the infobubble to
     */
    open(map: google$maps.Map, marker: google$maps.Marker): void;

    /**
     * Returns the position of the InfoBubble
     */
    getPosition(): google$maps.LatLng;
  }

  declare export interface infobubble$InfoBubbleOptions {
    /**
     * Percentage from the bottom left corner of the infobubble
     */
    arrowPosition?: number;
    arrowSize?: number;

    /**
     * 0: Middle, 1: Left, 2: Right
     */
    arrowStyle?: number;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    disableAnimation?: boolean;
    disableAutoPan?: boolean;
    maxHeight?: number;
    maxWidth?: number;
    minHeight?: number;
    minWidth?: number;
    padding?: number;

    /**
     * 0: None, 1: Right, 2: Under
     */
    shadowStyle?: number;
  }
}
