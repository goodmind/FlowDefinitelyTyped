declare module "document-promises" {
  /**
   * document.parsed is a promise that fulfills when the document is parsed
   * and `readyState` is `interactive`, before deferred and async scripts have run.
   */
  declare export var parsed: Promise<void>;

  /**
   * document.contentLoaded is a promise that fulfills when the document is
   * parsed, blocking scripts have completed, and `DOMContentLoaded` fires.
   */
  declare export var contentLoaded: Promise<void>;

  /**
   * document.loaded is a promise that fulfills when the document is parsed,
   * blocking scripts have completed, images, scripts, links and sub-frames
   * have finished loading, and `readyState` is `complete`.
   */
  declare export var loaded: Promise<void>;
}
