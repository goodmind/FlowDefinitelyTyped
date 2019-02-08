declare module "global" {
  declare interface JQuery {
    destroy(): void;
    ionRangeSlider(options?: IonRangeSliderOptions): JQuery;
    reset(): void;
    update(option: IonRangeSliderOptions): void;
  }
}
declare module "ion-rangeslider" {
  declare export interface IonRangeSliderOptions {
    type?: string;
    min?: number;
    max?: number;
    from?: number;
    to?: number;
    step?: number;
    min_interval?: number;
    max_interval?: number;
    drag_interval?: boolean;
    values?: any[];
    from_fixed?: boolean;
    from_min?: number;
    from_max?: number;
    from_shadow?: boolean;
    to_fixed?: boolean;
    to_min?: number;
    to_max?: number;
    to_shadow?: boolean;
    prettify_enabled?: boolean;
    prettify_separator?: string;
    prettify?: (num: number) => string;
    force_edges?: boolean;
    keyboard?: boolean;
    grid?: boolean;
    grid_margin?: boolean;
    grid_num?: number;
    grid_snap?: boolean;
    hide_min_max?: boolean;
    hide_from_to?: boolean;
    prefix?: string;
    postfix?: string;
    max_postfix?: string;
    decorate_both?: boolean;
    values_separator?: string;
    input_values_separator?: string;
    disable?: boolean;
    block?: boolean;
    extra_classes?: string;
    scope?: any;
    onStart?: (obj: IonRangeSliderEvent) => void;
    onChange?: (obj: IonRangeSliderEvent) => void;
    onFinish?: (obj: IonRangeSliderEvent) => void;
    onUpdate?: (obj: IonRangeSliderEvent) => void;
  }
  declare export interface IonRangeSliderEvent {
    input: JQuery;
    slider: JQuery;
    min: number;
    max: number;
    from: number;
    from_percent: number;
    from_value: number;
    to: number;
    to_percent: number;
    to_value: number;
    min_pretty: string;
    max_pretty: string;
    from_pretty: string;
    to_pretty: string;
  }
}
