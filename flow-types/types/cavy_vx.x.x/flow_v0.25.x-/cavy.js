declare module "cavy" {
  import typeof * as React from "react";

  declare export {};

  declare type RefCallback = (element: React.Node | null) => void;
  declare export type TestHookGenerator = (
    label: string,
    callback?: RefCallback
  ) => RefCallback;
  declare export type WithTestHook<T: {}> = T & {
    generateTestHook: TestHookGenerator
  };
  declare export function hook<T: {}>(
    component: React.ComponentClass<WithTestHook<T>>
  ): React.ComponentClass<T>;

  declare export interface TesterProps {
    specs: Array<(spec: TestScope) => void>;
    waitTime: number;
    sendReport?: boolean;
  }
  declare export class Tester mixins React.Component<TesterProps> {
    reRender(): void;
    clearAsync(): Promise<void>;
  }
  declare export class TestScope {
    component: Tester;
    findComponent(identifier: string): Promise<React.Component<>>;
    describe(label: string, fn: () => void): void;
    it(label: string, fn: () => void): void;
    press(identifier: string): Promise<void>;
    fillIn(identifier: string, str: string): Promise<void>;
    pause(time: number): Promise<void>;
    exists(identifier: string): Promise<true>;
    notExists(identifier: string): Promise<true>;
  }
}
