declare module "when-dom-ready" {
  declare export default typeof whenDomReady;

  declare function whenDomReady(document?: EventTarget): Promise<void>;

  declare function whenDomReady(
    callback?: () => void,
    document?: EventTarget
  ): Promise<void>;

  declare var npm$namespace$whenDomReady: {
    resume: typeof whenDomReady$resume
  };
  declare function whenDomReady$resume<T>(
    document?: EventTarget
  ): (value: T) => Promise<T>;
}
