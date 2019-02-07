declare module "mailgen" {
  /**
   * Created by kiettv on 7/24/16.
   */
  declare class Mailgen {
    constructor(opts: Mailgen$Option): this;
    cacheThemes(): void;
    generate(params: Mailgen$Content): any;
    generatePlaintext(params: Mailgen$Content): any;
    parseParams(params: any): any;
  }
  declare interface Mailgen$Option {
    theme: string | Mailgen$CustomTheme;
    product: Mailgen$Product;
  }

  declare interface Mailgen$CustomTheme {
    path: string;
    plaintextPath?: string;
  }

  declare interface Mailgen$Product {
    name: string;
    link: string;
    logo?: string;
    copyright?: string;
  }

  declare interface Mailgen$Content {
    body: Mailgen$ContentBody;
  }

  declare interface Mailgen$ContentBody {
    name?: string;
    greeting?: string;
    signature?: string;
    title?: string;
    intro?: string | string[];
    action?: Mailgen$Action | Mailgen$Action[];
    table?: Mailgen$Table;
    dictionary?: any;
    goToAction?: Mailgen$GoToAction;
    outro?: string | string[];
  }

  declare interface Mailgen$Table {
    data: any[];
    columns?: Mailgen$ColumnOptions[];
  }

  declare interface Mailgen$ColumnOptions {
    customWidth: any;
    customAlignment: any;
  }

  declare interface Mailgen$GoToAction {
    text: string;
    link: string;
    description: string;
  }

  declare interface Mailgen$Action {
    instructions: string;
    button: Mailgen$Button;
  }

  declare interface Mailgen$Button {
    color: string;
    text: string;
    link: string;
  }
  declare module.exports: typeof Mailgen;
}
