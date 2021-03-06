declare module "jquery-cropbox" {
  declare class jQueryCropBox$ShowControls {
    constructor(...args: empty): mixed;
    static +never: Class<jQueryCropBox$ShowControls__never> &
      jQueryCropBox$ShowControls__never &
      0; // 0
    static +always: Class<jQueryCropBox$ShowControls__always> &
      jQueryCropBox$ShowControls__always &
      1; // 1
    static +hover: Class<jQueryCropBox$ShowControls__hover> &
      jQueryCropBox$ShowControls__hover &
      2; // 2
    static +auto: Class<jQueryCropBox$ShowControls__auto> &
      jQueryCropBox$ShowControls__auto &
      3; // 3
  }

  declare class jQueryCropBox$ShowControls__never
    mixins jQueryCropBox$ShowControls {}
  declare class jQueryCropBox$ShowControls__always
    mixins jQueryCropBox$ShowControls {}
  declare class jQueryCropBox$ShowControls__hover
    mixins jQueryCropBox$ShowControls {}
  declare class jQueryCropBox$ShowControls__auto
    mixins jQueryCropBox$ShowControls {}

  declare interface jQueryCropBox$CropboxArea {
    cropX: number;
    cropY: number;
    cropW: number;
    cropH: number;
  }

  declare interface jQueryCropBox$CropboxOptions {
    /**
     * Width in pixels of the cropping window
     */
    width?: number;

    /**
     * Height in pixels of the cropping window
     */
    height?: number;

    /**
     * Number of incremental zoom steps. With the default of 10, you have to click the zoom-in button 9 times to reach 100%.
     */
    zoom?: number;

    /**
     * Maximum zoom value. With the default of 1.0 users can't zoom beyond the maximum image resolution.
     */
    maxZoom?: number;

    /**
     * If not null, this is the entire html block that should appear on hover over the image for instructions and/or buttons (could include the zoom in/out buttons for example). If null, the default html block is used which has the text "Click to drag" and the zoom in/out buttons. Use false to disable controls.
     */
    controls?: any;

    /**
     * Set the initial cropping area
     */
    result?: jQueryCropBox$CropboxArea;

    /**
     * This flag is used to determine when to display the controls. Never, always and hover do exactly what you would expect (never show them, always show them, show them on hover). The auto flag is the same as the hover flag, except that on mobile devices it always shows the controls (since there is no hover event).
     */
    showControls?: jQueryCropBox$ShowControls;
  }

  declare interface jQueryCropBox$CropboxDragOptions {
    startX: number;
    startY: number;
    dx: number;
    dy: number;
  }

  declare interface jQueryCropBox$CropboxSetCropOptions {
    cropX: number;
    cropY: number;
    cropW: number;
    cropH: number;
  }

  declare interface jQueryCropBox$Cropbox {
    /**
     * Increase image zoom level by one step
     */
    zoomIn(): void;

    /**
     * Decrease image zoom level by one step
     */
    zoomOut(): void;

    /**
     * Set zoom leevl to a value between 0 and 1. Need to call update to reflect the changes.
     */
    zoom(percent: number): void;

    /**
     * Simulate image dragging, starting from (startX,startY) and moving a delta of (dx,dy). Need to call update to reflect the changes.
     */
    drag(options: jQueryCropBox$CropboxDragOptions): void;

    /**
     * Set crop window.
     */
    setCrop(options: jQueryCropBox$CropboxSetCropOptions): void;

    /**
     * Update the cropped result (must call after zoom and drag).
     */
    update(): void;

    /**
     * Generate a URL for the cropped image on the client (requires HTML5 compliant browser).
     */
    getDataURL(): string;

    /**
     * Generate a Blob with the cropped image (requires HTML5 compliant browser).
     */
    getBlob(): any;

    /**
     * Remove the cropbox functionality from the image.
     */
    remove(): void;

    /**
     * Attach an event handler function for one event on the Crop Box
     */
    on(
      event: string,
      callback: jQueryCropBox$jQueryCropBox$EventCallback
    ): void;
  }

  declare type jQueryCropBox$EventCallback = (
    e: Event,
    data: any,
    img: jQueryCropBox$jQueryCropBox$Cropbox
  ) => void;
  declare interface JQuery {
    cropbox(
      params?: jQueryCropBox$jQueryCropBox$CropboxOptions
    ): jQueryCropBox$jQueryCropBox$Cropbox;
  }
  declare interface JQueryStatic {
    cropbox(
      params?: jQueryCropBox$jQueryCropBox$CropboxOptions
    ): jQueryCropBox$jQueryCropBox$Cropbox;
  }
}
