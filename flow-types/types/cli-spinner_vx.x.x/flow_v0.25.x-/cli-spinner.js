declare module "cli-spinner" {
  declare export interface Options {
    text?: string;
    stream?: NodeJS.WritableStream;
    onTick?: (msg: string) => void;
  }
  declare export class Spinner {
    static setDefaultSpinnerString(
      spinnerString: string | number
    ): typeof Spinner;
    static setDefaultSpinnerDelay(spinnerDelay: number): typeof Spinner;
    stream: NodeJS.WritableStream;
    constructor(titleOrOptions?: string | Options): this;
    start(): this;
    stop(clear?: boolean): this;
    isSpinning(): boolean;
    clearLine(stream: NodeJS.WritableStream): this;
    setSpinnerString(spinnerString: string | number): this;
    setSpinnerTitle(title: string): this;
    setSpinnerDelay(spinnerDelay: number): this;
  }
}
