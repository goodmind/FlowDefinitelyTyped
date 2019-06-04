declare module "yeoman-environment" {
  import type { EventEmitter } from "events";

  import type { Store as MemFsStore } from "mem-fs";

  import typeof * as inquirer from "inquirer";

  import typeof * as Generator from "yeoman-generator";

  declare class Environment<O: Environment$Options = Environment$Options>
    mixins EventEmitter {
    static createEnv<O: Environment$Options>(
      args?: string | string[],
      opts?: O,
      adapter?: Environment$Adapter
    ): Environment<O>;
    static enforceUpdate<E: Environment<>>(env: E): E;
    static namespaceToName(namespace: string): string;
    arguments: string[];
    options: O;
    cwd: string;
    store: Generator.Storage;
    sharedFs: MemFsStore;
    lookups: string[];
    aliases: Environment$Alias[];
    constructor(
      args?: string | string[],
      opts?: O,
      adapter?: Environment$Adapter
    ): this;
    alias(match: string | RegExp, value: string): void;
    create(name: string, options: { [key: string]: any }): void;
    error(err: Error | { [key: string]: any }): Error;
    findGeneratorsIn(list: string[]): string[];
    get(namespace: string): Generator | null;
    getByPath(path: string): Generator | null;
    getGeneratorNames(): string[];
    getGeneratorsMeta(): {
      [namespace: string]: Environment$GeneratorMeta
    };
    getNpmPaths(): string[];
    help(name: string): string;
    instantiate(
      name: string,
      options: Environment$InstantiateOptions
    ): Generator;
    lookup(cb?: (err: null | Error) => void): void;
    namespace(filepath: string): string;
    namespaces(): string[];
    register(name: string, namespace?: string): string;
    registerStub(Generator: Generator, namespace: string): this;
    resolveModulePath(moduleId: string): string;
    run(done: Environment$RunDone): void;
    run(args: string | string[], done: Environment$RunDone): void;
    run(
      args: string | string[],
      options: { [key: string]: any },
      done: Environment$RunDone
    ): void;
  }
  declare interface Environment$Adapter {
    prompt<T>(questions: Environment$Adapter$Questions<T>): Promise<T>;
    prompt<T1, T2>(
      questions: Environment$Adapter$Questions<T1>,
      cb: (res: T1) => T2
    ): Promise<T2>;
    diff(actual: string, expected: string): string;
  }

  declare type Environment$Adapter$Question<T> = inquirer.Question<T>;

  declare type Environment$Adapter$Questions<T> = inquirer.Questions<T>;

  declare type Environment$Adapter$Answers = inquirer.Answers;

  declare interface Environment$Alias {
    match: RegExp;
    value: string;
  }

  declare interface Environment$Options {
    cwd?: string;
    [key: string]: any;
  }

  declare interface Environment$GeneratorMeta {
    resolved: string;
    namespace: string;
  }

  declare interface Environment$InstantiateOptions {
    arguments: string | string[];
    options: Environment$Options;
  }

  declare type Environment$RunDone = (err: null | Error) => void;
  declare export default typeof Environment;
}
