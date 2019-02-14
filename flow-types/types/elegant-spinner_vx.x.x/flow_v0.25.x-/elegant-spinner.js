declare module "elegant-spinner" {
  declare export default typeof elegantSpinner;

  declare function elegantSpinner(): () => string;

  declare var npm$namespace$elegantSpinner: {
    frames: typeof elegantSpinner$frames
  };
  declare var elegantSpinner$frames: $ReadOnlyArray<string>;
}
