declare module "f1" {
  declare interface F1Options {
    onState?: (...args: any[]) => void;
    onUpdate?: (...args: any[]) => void;
    name: string;
    targets: any;
    states: any;
    transitions: any[];
    parsers: any;
  }
  declare type F1 = {
    targets(targets: any): F1,
    states(states: any): F1,
    transitions(transitions: any[]): F1,
    parsers(parser: any): F1,
    init(initState: string): F1,
    destroy(): void,
    apply(pathToTarget: string, target: any, parserDefinition: any): void,
    go(state: string, callback?: (state: any, currentState: any) => void): F1,
    set(state: string): F1,
    step(deltaTime: number): F1,
    update(): F1
  } & NodeJS.EventEmitter;

  declare function F1(settings?: F1Options): F1;

  declare module.exports: typeof F1;
}
