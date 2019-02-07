declare module "vorpal" {
  declare class Vorpal {
    parse(argv: $ReadOnlyArray<string>): this;
    delimiter(value: string): this;
    show(): this;
    hide(): this;
    find(command: string): Vorpal$Vorpal$Command;
    exec(command: string): Promise<{}>;
    execSync(command: string): Promise<{}>;
    log(value: string, ...values: string[]): this;
    history(id: string): this;
    localStorage(id: string): { [key: string]: any };
    help(value: (cmd: string) => string): this;
    pipe(value: (stdout: string) => string): this;
    use(extension: Vorpal$Vorpal$Extension): this;
    catch(command: string, description?: string): Vorpal$Vorpal$Catch;
    command(command: string, description?: string): Vorpal$Vorpal$Command;
    version(version: string): this;
    sigint(value: () => void): this;
    ui: Vorpal$Vorpal$UI;
    activeCommand: Vorpal$Vorpal$CommandInstance;
  }
  declare interface Vorpal$Args {
    [key: string]: any;
    options: {
      [key: string]: any
    };
  }

  declare type Vorpal$Action = (args: Vorpal$Args) => Promise<void>;

  declare type Vorpal$Cancel = () => void;

  declare class Vorpal$Command {
    _name: string;
    _fn: Vorpal$Action;
    _cancel: Vorpal$Cancel | void;
    alias(command: string): this;
    parse(value: (command: string, args: Vorpal$Args) => string): this;
    option(
      option: string,
      description: string,
      autocomplete?: $ReadOnlyArray<string>
    ): this;
    types(types: {
      string?: $ReadOnlyArray<string>
    }): this;
    hidden(): this;
    remove(): this;
    help(value: (args: Vorpal$Args) => void): this;
    validate(value: (args: Vorpal$Args) => boolean | string): this;
    autocomplete(
      values:
        | $ReadOnlyArray<string>
        | {
            data: () => Promise<$ReadOnlyArray<string>>
          }
    ): this;
    action(action: Vorpal$Action): this;
    cancel(cancel: Vorpal$Cancel): this;
    allowUnknownOptions(): this;
  }

  declare class Vorpal$Catch mixins Vorpal$Command {}

  declare class Vorpal$Extension {}

  declare class Vorpal$UI {
    delimiter(text?: string): string;
    input(text?: string): string;
    imprint(): void;
    submit(command: string): string;
    cancel(): void;
    redraw: {
      (text: string, ...texts: string[]): void,
      clear(): void,
      done(): void
    };
  }

  declare class Vorpal$CommandInstance {
    log(value: string, ...values: string[]): void;
    prompt(
      prompt: { [key: string]: any } | $ReadOnlyArray<{ [key: string]: any }>
    ): Promise<{ [key: string]: any }>;
    delimiter(value: string): void;
  }
  declare module.exports: typeof Vorpal;
}
