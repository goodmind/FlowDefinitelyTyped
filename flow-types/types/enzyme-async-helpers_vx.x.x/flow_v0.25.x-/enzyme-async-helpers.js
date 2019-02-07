declare module "enzyme-async-helpers" {
  import type { ReactWrapper, EnzymeSelector } from "enzyme";

  declare export function waitForState(
    wrapper: ReactWrapper,
    stateValidationFn: (state: { [key: string]: any }) => boolean,
    config?: Config
  ): Promise<void>;

  declare export function waitForElement(
    wrapper: ReactWrapper,
    elementSelector: EnzymeSelector,
    config?: Config
  ): Promise<void>;

  declare export function waitForProps(
    wrapper: ReactWrapper,
    propsValidationFn: (props: { [key: string]: any }) => boolean,
    config?: Config
  ): Promise<void>;

  declare export interface Config {
    interval?: number;
    timeout?: number;
    timeoutMessage?: string;
    logStructureOnTimeout?: boolean;
    logStructureOnSuccess?: boolean;
  }
}
