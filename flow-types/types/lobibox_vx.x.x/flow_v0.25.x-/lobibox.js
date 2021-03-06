declare interface LobiboxModule$MessageBoxesDefault {
  title?: string;
  horizontalOffset?: number;
  width?: number;
  height?: string;
  closeButton?: boolean;
  draggable?: boolean;
  customBtnClass?: string;
  modal?: boolean;
  debug?: boolean;
  buttonsAlign?: string;
  closeOnEsc?: boolean;
  delayToRemove?: number;
  baseClass?: string;
  showClass?: string;
  hideClass?: string;
  msg?: string;
  hide?: () => LobiboxModule$MessageBoxesDefault;
  show?: () => LobiboxModule$MessageBoxesDefault;
  setWidth?: (width?: number) => LobiboxModule$MessageBoxesDefault;
  setHeight?: (height?: number) => LobiboxModule$MessageBoxesDefault;
  setSize?: (
    width?: number,
    height?: number
  ) => LobiboxModule$MessageBoxesDefault;
  setPosition?: (
    left?: number | string,
    top?: number
  ) => LobiboxModule$MessageBoxesDefault;
  setTitle?: (title?: string) => LobiboxModule$MessageBoxesDefault;
  getTitle?: () => string;
  onShow?: (lobibox: any) => void;
  shown?: (lobibox: any) => void;
  beforeClose?: (lobibox: any) => void;
  closed?: (lobibox: any) => void;
}

declare type LobiboxModule$MessageBoxesOptions = {
  bodyClass?: string,
  modalClasses?: {
    error?: string,
    success?: string,
    info?: string,
    warning?: string,
    confirm?: string,
    progress?: string,
    prompt?: string,
    default?: string,
    window?: string
  },
  buttonsAlign?: any,
  buttons?:
    | {
        ok?: {
          class?: string,
          text?: string,
          closeOnClick?: boolean
        },
        cancel?: {
          class?: string,
          text?: string,
          closeOnClick?: boolean
        },
        yes?: {
          class?: string,
          text?: string,
          closeOnClick?: boolean
        },
        no?: {
          class?: string,
          text?: string,
          closeOnClick?: boolean
        }
      }
    | any,
  callback?: (lobibox: any, type?: string, ev?: any) => void
} & LobiboxModule$MessageBoxesDefault;

declare type LobiboxModule$ConfirmOptions = {
  title?: string,
  width?: number,
  iconClass?: string
} & LobiboxModule$MessageBoxesOptions;

declare type LobiboxModule$PromptOptions = {
  width?: number,
  attrs?: any,
  value?: string,
  multiline?: boolean,
  lines?: number,
  type?: string,
  label?: string
} & LobiboxModule$MessageBoxesOptions &
  LobiboxModule$PromptMethods;

declare type LobiboxModule$AlertOptions = {
  warning?: {
    title?: string,
    iconClass?: string
  },
  info?: {
    title?: string,
    iconClass?: string
  },
  success?: {
    title?: string,
    iconClass?: string
  },
  error?: {
    title?: string,
    iconClass?: string
  }
} & LobiboxModule$MessageBoxesOptions;

declare type LobiboxModule$ProgressOptions = {
  width?: number,
  showProgressLabel?: boolean,
  label?: string,
  progressTpl?: boolean,
  progressUpdated?: any,
  progressCompleted?: any
} & LobiboxModule$MessageBoxesOptions &
  LobiboxModule$ProgressMethods &
  LobiboxModule$ProgressEvents;

declare type LobiboxModule$WindowOptions = {
  width?: number,
  height?: any,
  content?: any,
  url?: string,
  draggable?: boolean,
  autoload?: boolean,
  loadMethod?: string,
  showAfterLoad?: boolean,
  params?: {}
} & LobiboxModule$MessageBoxesOptions;

declare interface LobiboxModule$ProgressEvents {
  progressUpdated?: (lobibox: LobiboxModule$LobiboxStatic) => void;
  progressComplete?: (lobibox: LobiboxModule$LobiboxStatic) => void;
}

declare interface LobiboxModule$PromptMethods {
  setValue?: (val?: string) => LobiboxModule$PromptMethods;
  getValue?: () => string;
}

declare interface LobiboxModule$ProgressMethods {
  setProgress?: (progress: number) => LobiboxModule$ProgressMethods;
  getProgress?: () => number;
}

declare interface LobiboxModule$NotifyDefault {
  title?: string | boolean;
  size?: string;
  soundPath?: string;
  soundExt?: string;
  showClass?: string;
  hideClass?: string;
  icon?: boolean;
  msg?: string;
  img?: string;
  closable?: boolean;
  delay?: number;
  delayIndicator?: boolean;
  closeOnClick?: boolean;
  width?: number;
  sound?: boolean;
  position?: string;
  onClickUrl?: string;
  showAfterPrevious?: boolean;
  continueDelayOnInactiveTab?: boolean;
  onClick?: Function;
}

declare type LobiboxModule$NotifyOptions = {
  class?: string,
  large?: {
    width?: number
  },
  mini?: {
    class?: string
  },
  success?: {
    class?: string,
    title?: string,
    icon?: string,
    sound?: string
  },
  error?: {
    class?: string,
    title?: string,
    icon?: string,
    sound?: string
  },
  warning?: {
    class?: string,
    title?: string,
    icon?: string,
    sound?: string
  },
  info?: {
    class?: string,
    title?: string,
    icon?: string,
    sound?: string
  }
} & LobiboxModule$NotifyDefault &
  LobiboxModule$NotifyMethods;

declare interface LobiboxModule$NotifyMethods {
  remove?: () => any;
}

declare interface LobiboxModule$LobiboxStatic {
  base: {
    OPTIONS: LobiboxModule$MessageBoxesOptions,
    DEFAULTS: LobiboxModule$MessageBoxesDefault
  };
  alert: {
    <T: LobiboxModule$MessageBoxesDefault>(
      type: string,
      options?: T
    ): LobiboxModule$LobiboxStatic,
    DEFAULTS: LobiboxModule$AlertOptions
  };
  prompt: {
    <T: LobiboxModule$MessageBoxesDefault>(
      type: string,
      options?: T
    ): LobiboxModule$LobiboxStatic,
    DEFAULTS: LobiboxModule$PromptOptions
  };
  confirm: {
    <T: LobiboxModule$MessageBoxesDefault>(
      options?: LobiboxModule$ConfirmOptions
    ): T,
    DEFAULTS: LobiboxModule$ConfirmOptions
  };
  progress: {
    <T: LobiboxModule$MessageBoxesDefault>(
      options: LobiboxModule$ProgressOptions
    ): T,
    DEFAULTS: LobiboxModule$ProgressOptions
  };
  window: {
    <T: LobiboxModule$MessageBoxesDefault>(
      options: LobiboxModule$WindowOptions
    ): T,
    DEFAULTS: LobiboxModule$WindowOptions
  };
  notify: {
    <T: LobiboxModule$NotifyDefault>(
      type: string,
      options?: LobiboxModule$NotifyOptions
    ): T,
    DEFAULTS?: LobiboxModule$NotifyDefault,
    OPTIONS?: LobiboxModule$NotifyOptions
  };
}
declare module "Lobibox" {
  declare module.exports: typeof Lobibox;
}
declare module "lobibox" {
  declare var Lobibox: LobiboxModule$LobiboxModule$LobiboxStatic;
}
