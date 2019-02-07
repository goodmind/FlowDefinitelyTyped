declare type ImagesLoaded$ElementSelector =
  | Element
  | NodeList
  | Array<Element>
  | string;

/**
 * interface for an image currently loading or completed
 */
declare interface ImagesLoaded$LoadingImage {
  img: HTMLImageElement;
  isLoaded: boolean;
}

declare interface ImagesLoaded$ImagesLoadedCallback {
  (instance?: ImagesLoaded$ImagesLoaded): void;
}

declare interface ImagesLoaded$ImagesLoadedListener {
  (
    instance: ImagesLoaded$ImagesLoaded,
    image?: ImagesLoaded$LoadingImage
  ): void;
}

declare interface ImagesLoaded$ImagesLoaded {
  new(
    elem: ImagesLoaded$ElementSelector,
    callback: ImagesLoaded$ImagesLoadedCallback
  ): ImagesLoaded$ImagesLoaded;
  images: Array<ImagesLoaded$LoadingImage>;
  on(event: string, listener: ImagesLoaded$ImagesLoadedListener): void;
  off(event: string, listener: ImagesLoaded$ImagesLoadedListener): void;
  once(event: string, listener: ImagesLoaded$ImagesLoadedListener): void;
}

declare interface ImagesLoaded$ImagesLoadedOptions {
  background: true | string;
}

declare interface ImagesLoaded$ImagesLoadedConstructor {
  /**
   * Creates a new ImagesLoaded object with the provided callback
   * @param elem Element, NodeList, Element array, or selector string for images to watch
   * @param options object that can tell imagesloaded to watch background images as well
   * @param callback function triggered after all images have been loaded
   */
  (
    elem: ImagesLoaded$ElementSelector,
    options: ImagesLoaded$ImagesLoadedOptions,
    callback?: ImagesLoaded$ImagesLoadedCallback
  ): ImagesLoaded$ImagesLoaded;
  (
    elem: ImagesLoaded$ElementSelector,
    callback?: ImagesLoaded$ImagesLoadedCallback
  ): ImagesLoaded$ImagesLoaded;
}
declare var imagesLoaded: ImagesLoaded$ImagesLoaded.ImagesLoaded$ImagesLoadedConstructor;
declare module "imagesloaded" {
  declare module.exports: typeof imagesLoaded;
}
declare interface JQuery {
  imagesLoaded(
    callback?: ImagesLoaded$ImagesLoaded.ImagesLoaded$ImagesLoadedCallback
  ): JQueryDeferred<ImagesLoaded$ImagesLoaded.ImagesLoaded$ImagesLoaded>;
}
