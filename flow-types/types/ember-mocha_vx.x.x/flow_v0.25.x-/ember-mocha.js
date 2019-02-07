import { TestContext, ModuleCallbacks } from "ember-test-helpers";
import Ember from "ember";
import { it as mochaIt, ISuiteCallbackContext } from "mocha";
declare type mochaBefore = typeof before;
declare type mochaAfter = typeof after;
declare type mochaBeforeEach = typeof beforeEach;
declare type mochaAfterEach = typeof afterEach;
declare type mochaSetup = typeof setup;
declare type mochaTeardown = typeof teardown;
declare type mochaSuiteSetup = typeof suiteSetup;
declare type mochaSuiteTeardown = typeof suiteTeardown;
declare module "ember-mocha" {
  declare interface ContextDefinitionFunction {
    (
      name: string,
      description: string,
      callbacks: ModuleCallbacks,
      tests: () => void
    ): void;
    (name: string, description: string, tests: () => void): void;
    (name: string, callbacks: ModuleCallbacks, tests: () => void): void;
    (name: string, tests: () => void): void;
  }
  declare type ContextDefinition = {
    only: ContextDefinitionFunction,
    skip: ContextDefinitionFunction
  } & ContextDefinitionFunction;

  declare interface SetupTest {
    (name?: string, callbacks?: ModuleCallbacks): void;
    (callbacks: ModuleCallbacks): void;
  }
  declare interface TestHooks {
    beforeEach: mochaBeforeEach;
    afterEach: mochaAfterEach;
  }
  declare interface SetupOptions {
    resolver: Ember.Resolver;
  }
  declare type NewSetupTest = (options?: SetupOptions) => TestHooks;

  /**
   * @deprecated Use setupTest instead
   */
  declare export var describeModule: ContextDefinition;

  /**
   * @deprecated Use setupComponentTest instead
   */
  declare export var describeComponent: ContextDefinition;

  /**
   * @deprecated Use setupModelTest instead
   */
  declare export var describeModel: ContextDefinition;
  declare export var setupTest: NewSetupTest & SetupTest;
  declare export var setupAcceptanceTest: SetupTest;
  declare export var setupComponentTest: SetupTest;
  declare export var setupModelTest: SetupTest;
  declare export var setupRenderingTest: NewSetupTest;
  declare export var setupApplicationTest: NewSetupTest;
  declare export var it: typeof mochaIt;

  /**
   * Sets a Resolver globally which will be used to look up objects from each test's container.
   */
  declare export function setResolver(resolver: Ember.Resolver): void;
}
declare module "mocha" {
  declare type Context = {} & TestContext;
}
