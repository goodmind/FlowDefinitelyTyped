declare module "react-reconciler" {
  import type { Component, Node } from "react";

  declare function ReactReconciler<
    Type,
    Props,
    Container,
    Instance,
    TextInstance,
    HydratableInstance,
    PublicInstance,
    HostContext,
    UpdatePayload,
    ChildSet,
    TimeoutHandle,
    NoTimeout
  >(
    config: ReactReconciler$HostConfig<
      Type,
      Props,
      Container,
      Instance,
      TextInstance,
      HydratableInstance,
      PublicInstance,
      HostContext,
      UpdatePayload,
      ChildSet,
      TimeoutHandle,
      NoTimeout
    >
  ): ReactReconciler$Reconciler<
    Instance,
    TextInstance,
    Container,
    PublicInstance
  >;

  declare interface ReactReconciler$Fiber {
    tag: ReactReconciler$WorkTag;
    key: null | string;
    elementType: any;
    type: any;
    stateNode: any;
    return: ReactReconciler$Fiber | null;
    child: ReactReconciler$Fiber | null;
    sibling: ReactReconciler$Fiber | null;
    index: number;
    ref:
      | null
      | (((handle: any) => void) & {
          _stringRef: string | null | void
        })
      | ReactReconciler$RefObject;
    pendingProps: any;
    memoizedProps: any;
    updateQueue: ReactReconciler$UpdateQueue<any> | null;
    memoizedState: any;
    firstContextDependency: ReactReconciler$ContextDependency<any> | null;
    mode: ReactReconciler$TypeOfMode;
    effectTag: ReactReconciler$SideEffectTag;
    nextEffect: ReactReconciler$Fiber | null;
    firstEffect: ReactReconciler$Fiber | null;
    lastEffect: ReactReconciler$Fiber | null;
    expirationTime: ReactReconciler$ExpirationTime;
    childExpirationTime: ReactReconciler$ExpirationTime;
    alternate: ReactReconciler$Fiber | null;
    actualDuration?: number;
    actualStartTime?: number;
    selfBaseDuration?: number;
    treeBaseDuration?: number;
    _debugID?: number;
    _debugSource?: ReactReconciler$Source | null;
    _debugOwner?: ReactReconciler$Fiber | null;
    _debugIsCurrentlyTiming?: boolean;
  }

  declare type ReactReconciler$ExpirationTime = number;

  declare interface ReactReconciler$ContextDependency<T> {
    context: ReactReconciler$ReactContext<T>;
    observedBits: number;
    next: ReactReconciler$ContextDependency<any> | null;
  }

  declare type ReactReconciler$OpaqueHandle = ReactReconciler$Fiber;

  declare type ReactReconciler$OpaqueRoot = ReactReconciler$FiberRoot;

  declare interface ReactReconciler$HostConfig<
    Type,
    Props,
    Container,
    Instance,
    TextInstance,
    HydratableInstance,
    PublicInstance,
    HostContext,
    UpdatePayload,
    ChildSet,
    TimeoutHandle,
    NoTimeout
  > {
    getPublicInstance(instance: Instance | TextInstance): PublicInstance;
    getRootHostContext(rootContainerInstance: Container): HostContext;
    getChildHostContext(
      parentHostContext: HostContext,
      type: Type,
      rootContainerInstance: Container
    ): HostContext;
    prepareForCommit(containerInfo: Container): void;
    resetAfterCommit(containerInfo: Container): void;
    createInstance(
      type: Type,
      props: Props,
      rootContainerInstance: Container,
      hostContext: HostContext,
      internalInstanceHandle: ReactReconciler$OpaqueHandle
    ): Instance;
    appendInitialChild(
      parentInstance: Instance,
      child: Instance | TextInstance
    ): void;
    finalizeInitialChildren(
      parentInstance: Instance,
      type: Type,
      props: Props,
      rootContainerInstance: Container,
      hostContext: HostContext
    ): boolean;
    prepareUpdate(
      instance: Instance,
      type: Type,
      oldProps: Props,
      newProps: Props,
      rootContainerInstance: Container,
      hostContext: HostContext
    ): null | UpdatePayload;
    shouldSetTextContent(type: Type, props: Props): boolean;
    shouldDeprioritizeSubtree(type: Type, props: Props): boolean;
    createTextInstance(
      text: string,
      rootContainerInstance: Container,
      hostContext: HostContext,
      internalInstanceHandle: ReactReconciler$OpaqueHandle
    ): TextInstance;
    scheduleDeferredCallback(
      callback: () => any,
      options?: {
        timeout: number
      }
    ): any;
    cancelDeferredCallback(callbackID: any): void;
    setTimeout(
      handler: (...args: any[]) => void,
      timeout: number
    ): TimeoutHandle | NoTimeout;
    clearTimeout(handle: TimeoutHandle | NoTimeout): void;
    noTimeout: NoTimeout;
    now(): number;
    isPrimaryRenderer: boolean;
    supportsMutation: boolean;
    supportsPersistence: boolean;
    supportsHydration: boolean;
    appendChild?: (
      parentInstance: Instance,
      child: Instance | TextInstance
    ) => void;
    appendChildToContainer?: (
      container: Container,
      child: Instance | TextInstance
    ) => void;
    commitTextUpdate?: (
      textInstance: TextInstance,
      oldText: string,
      newText: string
    ) => void;
    commitMount?: (
      instance: Instance,
      type: Type,
      newProps: Props,
      internalInstanceHandle: ReactReconciler$OpaqueHandle
    ) => void;
    commitUpdate?: (
      instance: Instance,
      updatePayload: UpdatePayload,
      type: Type,
      oldProps: Props,
      newProps: Props,
      internalInstanceHandle: ReactReconciler$OpaqueHandle
    ) => void;
    insertBefore?: (
      parentInstance: Instance,
      child: Instance | TextInstance,
      beforeChild: Instance | TextInstance
    ) => void;
    insertInContainerBefore?: (
      container: Container,
      child: Instance | TextInstance,
      beforeChild: Instance | TextInstance
    ) => void;
    removeChild?: (
      parentInstance: Instance,
      child: Instance | TextInstance
    ) => void;
    removeChildFromContainer?: (
      container: Container,
      child: Instance | TextInstance
    ) => void;
    resetTextContent?: (instance: Instance) => void;
    cloneInstance?: (
      instance: Instance,
      updatePayload: null | UpdatePayload,
      type: Type,
      oldProps: Props,
      newProps: Props,
      internalInstanceHandle: ReactReconciler$OpaqueHandle,
      keepChildren: boolean,
      recyclableInstance: Instance
    ) => Instance;
    createContainerChildSet?: (container: Container) => ChildSet;
    appendChildToContainerChildSet?: (
      childSet: ChildSet,
      child: Instance | TextInstance
    ) => void;
    finalizeContainerChildren?: (
      container: Container,
      newChildren: ChildSet
    ) => void;
    replaceContainerChildren?: (
      container: Container,
      newChildren: ChildSet
    ) => void;
    canHydrateInstance?: (
      instance: HydratableInstance,
      type: Type,
      props: Props
    ) => null | Instance;
    canHydrateTextInstance?: (
      instance: HydratableInstance,
      text: string
    ) => null | TextInstance;
    getNextHydratableSibling?: (
      instance: Instance | TextInstance | HydratableInstance
    ) => null | HydratableInstance;
    getFirstHydratableChild?: (
      parentInstance: Instance | Container
    ) => null | HydratableInstance;
    hydrateInstance?: (
      instance: Instance,
      type: Type,
      props: Props,
      rootContainerInstance: Container,
      hostContext: HostContext,
      internalInstanceHandle: ReactReconciler$OpaqueHandle
    ) => null | UpdatePayload;
    hydrateTextInstance?: (
      textInstance: TextInstance,
      text: string,
      internalInstanceHandle: ReactReconciler$OpaqueHandle
    ) => boolean;
    didNotMatchHydratedContainerTextInstance?: (
      parentContainer: Container,
      textInstance: TextInstance,
      text: string
    ) => void;
    didNotMatchHydratedTextInstance?: (
      parentType: Type,
      parentProps: Props,
      parentInstance: Instance,
      textInstance: TextInstance,
      text: string
    ) => void;
    didNotHydrateContainerInstance?: (
      parentContainer: Container,
      instance: Instance | TextInstance
    ) => void;
    didNotHydrateInstance?: (
      parentType: Type,
      parentProps: Props,
      parentInstance: Instance,
      instance: Instance | TextInstance
    ) => void;
    didNotFindHydratableContainerInstance?: (
      parentContainer: Container,
      type: Type,
      props: Props
    ) => void;
    didNotFindHydratableContainerTextInstance?: (
      parentContainer: Container,
      text: string
    ) => void;
    didNotFindHydratableInstance?: (
      parentType: Type,
      parentProps: Props,
      parentInstance: Instance,
      type: Type,
      props: Props
    ) => void;
    didNotFindHydratableTextInstance?: (
      parentType: Type,
      parentProps: Props,
      parentInstance: Instance,
      text: string
    ) => void;
  }

  declare type ReactReconciler$BundleType = 0 | 1;

  declare interface ReactReconciler$DevToolsConfig<Instance, TextInstance> {
    bundleType: ReactReconciler$BundleType;
    version: string;
    rendererPackageName: string;
    findFiberByHostInstance?: (
      instance: Instance | TextInstance
    ) => ReactReconciler$Fiber;
    getInspectorDataForViewTag?: (tag: number) => { [key: string]: any };
  }

  declare interface ReactReconciler$Reconciler<
    Instance,
    TextInstance,
    Container,
    PublicInstance
  > {
    updateContainerAtExpirationTime(
      element: ReactReconciler$ReactNodeList,
      container: ReactReconciler$OpaqueRoot,
      parentComponent: Component<any, any> | null | void,
      expirationTime: ReactReconciler$ExpirationTime,
      callback: () => void | null | void
    ): ReactReconciler$ExpirationTime;
    createContainer(
      containerInfo: Container,
      isConcurrent: boolean,
      hydrate: boolean
    ): ReactReconciler$OpaqueRoot;
    updateContainer(
      element: ReactReconciler$ReactNodeList,
      container: ReactReconciler$OpaqueRoot,
      parentComponent: Component<any, any> | null | void,
      callback: () => void | null | void
    ): ReactReconciler$ExpirationTime;
    flushRoot(
      root: ReactReconciler$OpaqueRoot,
      expirationTime: ReactReconciler$ExpirationTime
    ): void;
    requestWork(
      root: ReactReconciler$OpaqueRoot,
      expirationTime: ReactReconciler$ExpirationTime
    ): void;
    computeUniqueAsyncExpiration(): ReactReconciler$ExpirationTime;
    batchedUpdates<A>(fn: () => A): A;
    unbatchedUpdates<A>(fn: () => A): A;
    deferredUpdates<A>(fn: () => A): A;
    syncUpdates<A>(fn: () => A): A;
    interactiveUpdates<A>(fn: () => A): A;
    flushInteractiveUpdates(): void;
    flushControlled(fn: () => any): void;
    flushSync<A>(fn: () => A): A;
    getPublicRootInstance(
      container: ReactReconciler$OpaqueRoot
    ): Component<any, any> | PublicInstance | null;
    findHostInstance(component: { [key: string]: any }): PublicInstance | null;
    findHostInstanceWithNoPortals(
      component: ReactReconciler$Fiber
    ): PublicInstance | null;
    injectIntoDevTools(
      devToolsConfig: ReactReconciler$DevToolsConfig<Instance, TextInstance>
    ): boolean;
  }

  declare interface ReactReconciler$Batch {
    _defer: boolean;
    _expirationTime: ReactReconciler$ExpirationTime;
    _onComplete: () => any;
    _next: ReactReconciler$Batch | null;
  }

  declare type ReactReconciler$PendingInteractionMap = Map<
    ReactReconciler$ExpirationTime,
    Set<ReactReconciler$Interaction>
  >;

  declare interface ReactReconciler$BaseFiberRootProperties {
    containerInfo: any;
    pendingChildren: any;
    current: ReactReconciler$Fiber;
    earliestSuspendedTime: ReactReconciler$ExpirationTime;
    latestSuspendedTime: ReactReconciler$ExpirationTime;
    earliestPendingTime: ReactReconciler$ExpirationTime;
    latestPendingTime: ReactReconciler$ExpirationTime;
    latestPingedTime: ReactReconciler$ExpirationTime;
    pingCache:
      | WeakMap<ReactReconciler$Thenable, Set<ReactReconciler$ExpirationTime>>
      | Map<ReactReconciler$Thenable, Set<ReactReconciler$ExpirationTime>>
      | null;
    didError: boolean;
    pendingCommitExpirationTime: ReactReconciler$ExpirationTime;
    finishedWork: ReactReconciler$Fiber | null;
    timeoutHandle: any;
    context: { [key: string]: any } | null;
    pendingContext: { [key: string]: any } | null;
    +hydrate: boolean;
    nextExpirationTimeToWorkOn: ReactReconciler$ExpirationTime;
    expirationTime: ReactReconciler$ExpirationTime;
    firstBatch: ReactReconciler$Batch | null;
    nextScheduledRoot: ReactReconciler$FiberRoot | null;
  }

  declare interface ReactReconciler$ProfilingOnlyFiberRootProperties {
    interactionThreadID: number;
    memoizedInteractions: Set<ReactReconciler$Interaction>;
    pendingInteractionMap: ReactReconciler$PendingInteractionMap;
  }

  declare type ReactReconciler$FiberRoot = ReactReconciler$BaseFiberRootProperties &
    ReactReconciler$ProfilingOnlyFiberRootProperties;

  declare interface ReactReconciler$Thenable {
    then(resolve: () => any, reject?: () => any): any;
  }

  declare type ReactReconciler$TypeOfMode = number;

  declare interface ReactReconciler$Update<State> {
    expirationTime: ReactReconciler$ExpirationTime;
    tag: 0 | 1 | 2 | 3;
    payload: any;
    callback: (() => any) | null;
    next: ReactReconciler$Update<State> | null;
    nextEffect: ReactReconciler$Update<State> | null;
  }

  declare interface ReactReconciler$UpdateQueue<State> {
    baseState: State;
    firstUpdate: ReactReconciler$Update<State> | null;
    lastUpdate: ReactReconciler$Update<State> | null;
    firstCapturedUpdate: ReactReconciler$Update<State> | null;
    lastCapturedUpdate: ReactReconciler$Update<State> | null;
    firstEffect: ReactReconciler$Update<State> | null;
    lastEffect: ReactReconciler$Update<State> | null;
    firstCapturedEffect: ReactReconciler$Update<State> | null;
    lastCapturedEffect: ReactReconciler$Update<State> | null;
  }

  declare interface ReactReconciler$Interaction {
    __count: number;
    id: number;
    name: string;
    timestamp: number;
  }

  declare interface ReactReconciler$Source {
    fileName: string;
    lineNumber: number;
  }

  declare type ReactReconciler$SideEffectTag = number;

  declare type ReactReconciler$ReactEmpty = null | void | boolean;

  declare type ReactReconciler$ReactNodeList =
    | ReactReconciler$ReactEmpty
    | Node;

  declare interface ReactReconciler$ReactProviderType<T> {
    $$typeof: Symbol | number;
    _context: ReactReconciler$ReactContext<T>;
  }

  declare interface ReactReconciler$ReactContext<T> {
    $$typeof: Symbol | number;
    Consumer: ReactReconciler$ReactContext<T>;
    Provider: ReactReconciler$ReactProviderType<T>;
    unstable_read: () => T;
    _calculateChangedBits: ((a: T, b: T) => number) | null;
    _currentValue: T;
    _currentValue2: T;
    _threadCount: number;
    _currentRenderer?: { [key: string]: any } | null;
    _currentRenderer2?: { [key: string]: any } | null;
  }

  declare interface ReactReconciler$RefObject {
    current: any;
  }

  declare type ReactReconciler$WorkTag =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18;
  declare export default typeof ReactReconciler;
}
