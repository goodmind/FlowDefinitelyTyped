declare module "facepaint" {
  declare type facepaint$BaseArg =
    | { [key: string]: any }
    | { [key: string]: any }[];

  declare type facepaint$Arg = facepaint$BaseArg | facepaint$BaseArg[];

  declare type facepaint$Selector = string;

  declare interface facepaint$DynamicStyle {
    [key: string]: {
      [key: string]: string | number
    };
  }

  declare interface facepaint$DynamicStyleFunction {
    (...args: facepaint$Arg[]): facepaint$DynamicStyle;
  }

  declare interface facepaint$Options {
    literal?: boolean;
    overlap?: boolean;
  }
  declare function facepaint(
    breakpoints: facepaint$Selector[],
    options?: facepaint$Options
  ): facepaint$DynamicStyleFunction;

  declare export default typeof facepaint;
}
