declare module "raty" {
  declare interface JQuery {
    raty(): JQuery;
    raty(options: JQueryRatyOptions): JQuery;
    raty(method: string, parameter: any): any;
    raty(method: "score"): number;
    raty(method: "score", score: number): void;
    raty(method: "click", star: number): void;
    raty(method: "readonly", on: boolean): void;
    raty(method: "cancel", on: boolean): void;
    raty(method: "reload"): void;
    raty(method: "set", options: JQueryRatyOptions): void;
    raty(method: "destroy"): JQuery;
    raty(method: "move", number: number): void;
  }
  declare interface JQueryRatyOptions {
    cancel?: boolean;
    cancelClass?: string;
    cancelHint?: string;
    cancelOff?: string;
    cancelOn?: string;
    cancelPlace?: string;
    click?: (score: number, event: JQueryEventObject) => void;
    half?: boolean;
    halfShow?: boolean;
    hints?: string[];
    iconRange?: any[][];
    mouseout?: (score: number, event: JQueryEventObject) => void;
    mouseover?: (score: number, event: JQueryEventObject) => void;
    noRatedMsg?: string;
    number?: number;
    numberMax?: number;
    path?: string;
    precision?: boolean;
    readOnly?: boolean;
    round?: JQueryRatyRoundingOptions;
    score?: number;
    scoreName?: string;
    single?: boolean;
    space?: boolean;
    starHalf?: string;
    starOff?: string;
    starOn?: string;
    target?: string;
    targetFormat?: string;
    targetKeep?: boolean;
    targetScore?: string;
    targetText?: string;
    targetType?: string;
    starType?: string;
  }
  declare interface JQueryRatyRoundingOptions {
    down: number;
    full: number;
    up: number;
  }
}
