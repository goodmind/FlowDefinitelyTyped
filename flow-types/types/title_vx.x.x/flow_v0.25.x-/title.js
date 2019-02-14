declare module "title" {
  declare function Title(newtitle: string): void;

  declare function Title(pattern: string, newtitle?: string): void;

  declare var npm$namespace$Title: {
    reset: typeof Title$reset
  };
  declare function Title$reset(): void;

  declare export default typeof Title;
}
