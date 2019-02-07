declare module "dom-inputevent" {
  declare type InputEventInit = {
    data?: string,
    isComposing: boolean
  } & UIEventInit;

  declare class InputEvent {
    constructor(
      typeArg: "input" | "beforeinput",
      inputEventInit?: InputEventInit
    ): this;
    data: string;
    isComposing: boolean;
  }
}
