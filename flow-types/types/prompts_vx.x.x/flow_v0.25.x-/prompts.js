declare module "prompts" {
  declare export default typeof prompts;

  declare function prompts<T: string>(
    questions: prompts$PromptObject<T> | Array<prompts$PromptObject<T>>,
    options?: prompts$Options
  ): Promise<prompts$Answers<T>>;

  declare var npm$namespace$prompts: {
    inject: typeof prompts$inject,
    prompt: typeof prompts$prompt,

    inject: typeof npm$namespace$prompts$inject,
    prompts: typeof npm$namespace$prompts$prompts
  };
  declare var prompts$prompt: any;

  declare function prompts$inject(obj: any): void;

  declare var npm$namespace$prompts$inject: {
    prototype: typeof prompts$inject$prototype
  };
  declare var prompts$inject$prototype: {};

  declare var npm$namespace$prompts$prompts: {
    autocomplete: typeof prompts$prompts$autocomplete,
    confirm: typeof prompts$prompts$confirm,
    invisible: typeof prompts$prompts$invisible,
    list: typeof prompts$prompts$list,
    multiselect: typeof prompts$prompts$multiselect,
    number: typeof prompts$prompts$number,
    password: typeof prompts$prompts$password,
    select: typeof prompts$prompts$select,
    text: typeof prompts$prompts$text,
    toggle: typeof prompts$prompts$toggle
  };
  declare function prompts$prompts$autocomplete(
    args: prompts$PromptObject
  ): any;

  declare function prompts$prompts$confirm(args: prompts$PromptObject): void;

  declare function prompts$prompts$invisible(args: prompts$PromptObject): any;

  declare function prompts$prompts$list(args: prompts$PromptObject): any;

  declare function prompts$prompts$multiselect(args: prompts$PromptObject): any;

  declare function prompts$prompts$number(args: prompts$PromptObject): void;

  declare function prompts$prompts$password(args: prompts$PromptObject): any;

  declare function prompts$prompts$select(args: prompts$PromptObject): void;

  declare function prompts$prompts$text(args: prompts$PromptObject): void;

  declare function prompts$prompts$toggle(args: prompts$PromptObject): void;

  declare interface prompts$Choice {
    title: string;
    value: string;
    disable?: boolean;
  }

  declare interface prompts$Options {
    onSubmit?: (
      prompt: prompts$PromptObject,
      answer: any,
      answers: any[]
    ) => void;
    onCancel?: (prompt: prompts$PromptObject, answers: any) => void;
  }

  declare interface prompts$PromptObject<T: string = string> {
    type: prompts$ValueOrFunc<prompts$PromptType> | prompts$Falsy;
    name: prompts$ValueOrFunc<T>;
    message?: prompts$ValueOrFunc<string>;
    initial?: string | number | boolean;
    style?: string;
    format?: prompts$PrevCaller<T, void>;
    validate?: prompts$PrevCaller<T, void>;
    onState?: prompts$PrevCaller<T, void>;
    min?: number;
    max?: number;
    float?: boolean;
    round?: number;
    increment?: number;
    seperator?: string;
    active?: string;
    inactive?: string;
    choices?: prompts$Choice[];
    hint?: string;
    suggest?: (prev: any, values: any, prompt: prompts$PromptObject) => void;
    limit?: number;
  }

  declare type prompts$Answers<T: string> = $ObjMapi<
    { [k: T]: any },
    <id>(id) => any
  >;

  declare type prompts$PrevCaller<T: string, R = T> = (
    prev: any,
    values: prompts$Answers<T>,
    prompt: prompts$PromptObject
  ) => R;

  declare type prompts$Falsy = false | null | void;

  declare type prompts$PromptType =
    | "text"
    | "password"
    | "invisible"
    | "number"
    | "confirm"
    | "list"
    | "toggle"
    | "select"
    | "multiselect"
    | "autocomplete";

  declare type prompts$ValueOrFunc<T: string> = T | prompts$PrevCaller<T>;
}
