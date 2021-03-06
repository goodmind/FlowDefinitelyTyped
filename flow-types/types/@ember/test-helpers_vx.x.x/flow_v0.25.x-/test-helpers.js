declare module "@ember/test-helpers" {
  declare export type Target = string | Element;
  declare export { default as click } from "@ember/test-helpers/dom/click";

  declare export {
    default as doubleClick
  } from "@ember/test-helpers/dom/double-click";

  declare export { default as tap } from "@ember/test-helpers/dom/tap";

  declare export { default as focus } from "@ember/test-helpers/dom/focus";

  declare export { default as blur } from "@ember/test-helpers/dom/blur";

  declare export {
    default as triggerEvent
  } from "@ember/test-helpers/dom/trigger-event";

  declare export {
    default as triggerKeyEvent
  } from "@ember/test-helpers/dom/trigger-key-event";

  declare export { default as fillIn } from "@ember/test-helpers/dom/fill-in";

  declare export { default as typeIn } from "@ember/test-helpers/dom/type-in";

  declare export { default as find } from "@ember/test-helpers/dom/find";

  declare export { default as findAll } from "@ember/test-helpers/dom/find-all";

  declare export {
    default as getRootElement
  } from "@ember/test-helpers/dom/get-root-element";

  declare export {
    default as setupApplicationContext
  } from "@ember/test-helpers/setup-application-context";

  declare export {
    default as setupRenderingContext
  } from "@ember/test-helpers/setup-rendering-context";

  declare export { default as waitFor } from "@ember/test-helpers/dom/wait-for";

  declare export { default as waitUntil } from "@ember/test-helpers/wait-until";

  declare export {
    default as settled,
    isSettled,
    getSettledState
  } from "@ember/test-helpers/settled";

  declare export {
    default as setupContext,
    getContext,
    setContext,
    unsetContext
  } from "@ember/test-helpers/setup-context";

  declare export {
    setResolver,
    getResolver
  } from "@ember/test-helpers/resolver";

  declare export {
    default as teardownContext
  } from "@ember/test-helpers/teardown-context";

  declare export {
    default as teardownRenderingContext
  } from "@ember/test-helpers/teardown-rendering-context";

  declare export {
    getApplication,
    setApplication
  } from "@ember/test-helpers/application";

  declare export {
    default as teardownApplicationContext
  } from "@ember/test-helpers/teardown-application-context";

  declare export {
    default as validateErrorHandler
  } from "@ember/test-helpers/validate-error-handler";
}
declare module "@ember/test-helpers/dom/click" {
  import type { Target } from "@ember/test-helpers";

  declare export default function Promise(target: Target): Promise<void>;
}
declare module "@ember/test-helpers/dom/double-click" {
  import type { Target } from "@ember/test-helpers";

  declare export default function Promise(target: Target): Promise<void>;
}
declare module "@ember/test-helpers/dom/tap" {
  import type { Target } from "@ember/test-helpers";

  declare export default function Promise(target: Target): Promise<void>;
}
declare module "@ember/test-helpers/dom/focus" {
  import type { Target } from "@ember/test-helpers";

  declare export default function Promise(target: Target): Promise<void>;
}
declare module "@ember/test-helpers/dom/blur" {
  import type { Target } from "@ember/test-helpers";

  declare export default function Promise(target: Target): Promise<void>;
}
declare module "@ember/test-helpers/dom/trigger-event" {
  import type { Target } from "@ember/test-helpers";

  declare export default function Promise(
    target: Target,
    eventType: string,
    options?: { [key: string]: any }
  ): Promise<void>;
}
declare module "@ember/test-helpers/dom/trigger-key-event" {
  import type { Target } from "@ember/test-helpers";

  declare export type KeyEvent = "keydown" | "keyup" | "keypress";
  declare export interface KeyModifiers {
    ctrlKey?: boolean;
    altKey?: boolean;
    shiftKey?: boolean;
    metaKey?: boolean;
  }
  declare export default function Promise(
    target: Target,
    eventType: KeyEvent,
    key: number | string,
    modifiers?: KeyModifiers
  ): Promise<void>;
}
declare module "@ember/test-helpers/dom/fill-in" {
  import type { Target } from "@ember/test-helpers";

  declare export default function Promise(
    target: Target,
    text: string
  ): Promise<void>;
}
declare module "@ember/test-helpers/dom/type-in" {
  import type { Target } from "@ember/test-helpers";

  declare export default function Promise(
    target: Target,
    text: string,
    options?: {
      delay: number
    }
  ): Promise<void>;
}
declare module "@ember/test-helpers/dom/find" {
  declare export default function fn(selector: string): Element | null;
}
declare module "@ember/test-helpers/dom/find-all" {
  declare export default function fn(selector: string): Element[];
}
declare module "@ember/test-helpers/dom/get-root-element" {
  declare export default function Element(): Element;
}
declare module "@ember/test-helpers/setup-application-context" {
  declare export default function Promise<Context: { [key: string]: any }>(
    context: Context
  ): Promise<Context>;

  declare export function visit(url: string): Promise<void>;

  declare export function currentRouteName(): string;

  declare export function currentURL(): string;
}
declare module "@ember/test-helpers/setup-rendering-context" {
  import type { TemplateFactory } from "htmlbars-inline-precompile";

  declare export default function Promise<Context: { [key: string]: any }>(
    context: Context
  ): Promise<Context>;

  declare export function render(template: TemplateFactory): Promise<void>;

  declare export function clearRender(): Promise<void>;
}
declare module "@ember/test-helpers/dom/wait-for" {
  declare export interface Options {
    timeout?: number;
    count?: number;
    timeoutMessage?: string;
  }
  declare export default function Promise(
    selector: string,
    options?: Options
  ): Promise<Element | Element[]>;
}
declare module "@ember/test-helpers/wait-until" {
  declare export interface Options {
    timeout?: number;
    timeoutMessage?: string;
  }
  declare export default function Promise<T>(
    callback: () => T,
    options?: Options
  ): Promise<T>;
}
declare module "@ember/test-helpers/settled" {
  declare export interface SettledState {
    hasRunLoop: boolean;
    hasPendingTimers: boolean;
    hasPendingWaiters: boolean;
    hasPendingRequests: boolean;
    pendingRequestCount: number;
  }
  declare export default function Promise(): Promise<void>;

  declare export function isSettled(): boolean;

  declare export function getSettledState(): SettledState;
}
declare module "@ember/test-helpers/setup-context" {
  import typeof Resolver from "@ember/application/resolver";

  declare export default function Promise<C: { [key: string]: any }>(
    context: C,
    options?: {
      resolver?: Resolver
    }
  ): Promise<C>;

  declare export function getContext(): { [key: string]: any };

  declare export function setContext(context: { [key: string]: any }): void;

  declare export function unsetContext(): void;

  declare export function pauseTest(): Promise<void>;

  declare export function resumeTest(): void;
}
declare module "@ember/test-helpers/resolver" {
  import typeof Resolver from "@ember/application/resolver";

  declare export function setResolver(resolver: Resolver): void;

  declare export function getResolver(): Resolver;
}
declare module "@ember/test-helpers/teardown-context" {
  declare export default function Promise(context: {
    [key: string]: any
  }): Promise<void>;
}
declare module "@ember/test-helpers/teardown-rendering-context" {
  declare export default function Promise(context: {
    [key: string]: any
  }): Promise<void>;
}
declare module "@ember/test-helpers/teardown-application-context" {
  declare export default function Promise(context: {
    [key: string]: any
  }): Promise<void>;
}
declare module "@ember/test-helpers/validate-error-handler" {
  import typeof Error from "@ember/error";

  declare export default function fn(
    callback?: (error: Error) => void
  ): {
    isValid: boolean,
    message: string
  };
}
declare module "@ember/test-helpers/application" {
  import typeof Application from "@ember/application";

  declare export function getApplication(): Application;

  declare export function setApplication(application: Application): void;
}
