declare module "bootstrap-notify" {
  declare interface JQueryStatic {
    notify(message: string): NotifyReturn;
    notify(opts: NotifyOptions, settings?: NotifySettings): NotifyReturn;
    notifyDefaults(settings: NotifySettings): void;
    notifyClose(): void;
    notifyClose(command: string): void;
  }
  declare interface NotifyOptions {
    message: string;
    title?: string;
    icon?: string;
    url?: string;
    target?: string;
  }
  declare interface NotifySettings {
    element?: string;
    position?: string;
    type?: string;
    allow_dismiss?: boolean;
    allow_duplicates?: boolean;
    newest_on_top?: boolean;
    showProgressbar?: boolean;
    placement?: {
      from?: string,
      align?: string
    };
    offset?:
      | number
      | {
          x?: number,
          y?: number
        };
    spacing?: number;
    z_index?: number;
    delay?: number;
    timer?: number;
    url_target?: string;
    mouse_over?: string;
    animate?: {
      enter?: string,
      exit?: string
    };
    onShow?: () => void;
    onShown?: () => void;
    onClose?: () => void;
    onClosed?: () => void;
    icon_type?: string;
    template?: string;
  }
  declare interface NotifyReturn {
    $ele: JQueryStatic;
    close: () => void;
    update: (command: string, update: any) => void;
  }
}
