declare var npm$namespace$AFRAME: {
  AComponent: typeof AFRAME$AComponent,
  AEntity: typeof AFRAME$AEntity,
  ANode: typeof AFRAME$ANode,
  AScene: typeof AFRAME$AScene,
  components: typeof AFRAME$components,
  geometries: typeof AFRAME$geometries,
  primitives: typeof AFRAME$primitives,
  scenes: typeof AFRAME$scenes,
  schema: typeof AFRAME$schema,
  shaders: typeof AFRAME$shaders,
  systems: typeof AFRAME$systems,
  THREE: typeof AFRAME$THREE,
  TWEEN: typeof AFRAME$TWEEN,
  utils: typeof AFRAME$utils,
  version: typeof AFRAME$version,
  registerComponent: typeof AFRAME$registerComponent,
  registerElement: typeof AFRAME$registerElement,
  registerGeometry: typeof AFRAME$registerGeometry,
  registerPrimitive: typeof AFRAME$registerPrimitive,
  registerShader: typeof AFRAME$registerShader,
  registerSystem: typeof AFRAME$registerSystem
};
declare var AFRAME$AComponent: $ElementType<AFrame, "AComponent">;

declare var AFRAME$AEntity: $ElementType<AFrame, "AEntity">;

declare var AFRAME$ANode: $ElementType<AFrame, "ANode">;

declare var AFRAME$AScene: $ElementType<AFrame, "AScene">;

declare var AFRAME$components: $ElementType<AFrame, "components">;

declare var AFRAME$geometries: $ElementType<AFrame, "geometries">;

declare var AFRAME$primitives: $ElementType<AFrame, "primitives">;

declare var AFRAME$scenes: $ElementType<AFrame, "scenes">;

declare var AFRAME$schema: $ElementType<AFrame, "schema">;

declare var AFRAME$shaders: $ElementType<AFrame, "shaders">;

declare var AFRAME$systems: $ElementType<AFrame, "systems">;

declare var AFRAME$THREE: $ElementType<AFrame, "THREE">;

declare var AFRAME$TWEEN: $ElementType<AFrame, "TWEEN">;

declare var AFRAME$utils: $ElementType<AFrame, "utils">;

declare var AFRAME$version: string;

declare var AFRAME$registerComponent: $ElementType<AFrame, "registerComponent">;

declare var AFRAME$registerElement: $ElementType<AFrame, "registerElement">;

declare var AFRAME$registerGeometry: $ElementType<AFrame, "registerGeometry">;

declare var AFRAME$registerPrimitive: $ElementType<AFrame, "registerPrimitive">;

declare var AFRAME$registerShader: $ElementType<AFrame, "registerShader">;

declare var AFRAME$registerSystem: $ElementType<AFrame, "registerSystem">;
declare module "global" {
  declare var hasNativeWebVRImplementation: boolean;

  /**
   * Custom elements augment document methods to return custom HTML
   */
  declare interface Document {
    createElement(tagName: string): Entity;
    querySelector(selectors: "a-scene"): Scene;
    querySelector(selectors: string): Entity<any>;
    querySelectorAll(selectors: string): NodeListOf<Entity<any> | Element>;
  }
  declare type HTMLCollection = {
    /**
     * Retrieves a select object or an object from an options collection.
     */
    namedItem(name: string): Element | Entity | null,
    item(index: number): Element | Entity,
    [index: number]: Element | Entity
  } & HTMLCollectionBase;
}
declare module "aframe" {
  import typeof * as three from "three";

  import typeof * as tween from "@tweenjs/tween.js";

  declare export type ThreeLib = typeof three;
  declare export type TweenLib = typeof tween;
  declare export interface ObjectMap<T = any> {
    [key: string]: T;
  }
  declare export interface Animation {
    attribute: string;
    begin: string | number;
    delay: number;
    direction: "alternate" | "alternateReverse" | "normal" | "reverse";
    dur: number;
    easing(): void;
    end: string;
    fill: "backwards" | "both" | "forwards" | "none";
    from: any;
    repeat: number | "indefinite";
    to: number;
  }
  declare export type ANode = {
    closestScene(): Scene,
    closest(selector: string): AFRAME$ANode,
    hasLoaded: boolean,
    load(cb?: () => void, childFilter?: (el: Element) => boolean): void,
    registerMixin(id: string): void,
    setAttribute(type: string, newValue: any): void,
    unregisterMixin(id: string): void,
    removeMixinListener(id: string): void,
    attachMixinListener(mixin: HTMLElement): void,
    emit(name: string, detail?: any, bubbles?: boolean): void,
    emitter(name: string, detail?: any, bubbles?: boolean): () => void
  } & HTMLElement;

  declare export interface Behavior {
    tick(): void;
  }
  declare export interface Component<
    T: { [key: string]: any } = any,
    S: System = System
  > {
    attrName?: string;
    data: T;
    dependencies?: string[];
    el: Entity;
    id: string;
    multiple?: boolean;
    name: string;
    AFRAME$schema: Schema<T>;
    system: S | void;
    init(data?: T): void;
    pause(): void;
    play(): void;
    remove(): void;
    tick?: (time: number, timeDelta: number) => void;
    update(oldData: T): void;
    updateSchema?: () => void;
    extendSchema(update: Schema): void;
    flushToDOM(): void;
  }
  declare export interface ComponentConstructor<T: { [key: string]: any }> {
    new(el: Entity, attrValue: string, id: string): T & Component;
    prototype: T & {
      name: string,
      system: System,
      play(): void,
      pause(): void
    };
  }
  declare export interface ComponentDescriptor<T: Component = Component> {
    Component: ComponentConstructor<T>;
    dependencies: string[] | void;
    multiple: boolean | void;
  }
  declare export interface Coordinate {
    x: number;
    y: number;
    z: number;
  }
  declare export interface DefaultComponents {
    position: Component<Coordinate>;
    rotation: Component<Coordinate>;
    scale: Component<Coordinate>;
  }
  declare export type Entity<C = ObjectMap<Component>> = {
    AFRAME$components: C & DefaultComponents,
    isPlaying: boolean,
    object3D: AFRAME$THREE.Object3D,
    object3DMap: ObjectMap<AFRAME$THREE.Object3D>,
    sceneEl?: Scene,
    addState(name: string): void,
    flushToDOM(recursive?: boolean): void,

    /**
     * @deprecated since 0.4.0
     */
    getComputedAttribute(attr: string): Component,
    getDOMAttribute(attr: string): any,
    getObject3D(type: string): AFRAME$THREE.Object3D,
    getOrCreateObject3D(type: string, construct: any): AFRAME$THREE.Object3D,
    is(stateName: string): boolean,
    pause(): void,
    play(): void,
    setObject3D(type: string, obj: AFRAME$THREE.Object3D): void,
    removeAttribute(attr: string, property?: string): void,
    removeObject3D(type: string): void,
    removeState(stateName: string): void,
    getAttribute(type: string): any,
    getAttribute(type: "position" | "rotation" | "scale"): Coordinate,
    setAttribute(attr: string, value: any): void,
    setAttribute(
      attr: string,
      property: string,
      componentAttrValue?: any
    ): void,
    setAttribute(
      type: "position" | "rotation" | "scale",
      value: Coordinate
    ): void,
    addEventListener<K: $Keys<EntityEventMap>>(
      type: K,
      listener: (event: Event & $ElementType<EntityEventMap, K>) => void,
      useCapture?: boolean
    ): void,
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      useCapture?: boolean
    ): void
  } & AFRAME$ANode;

  declare export type DetailEvent<D> = Event & {
    detail: D,
    target: EventTarget & Entity
  };
  declare export interface EntityEventMap {
    "child-attached": DetailEvent<{
      el: Element | Entity
    }>;
    "child-detached": DetailEvent<{
      el: Element | Entity
    }>;
    componentchanged: DetailEvent<{
      name: string,
      id: string
    }>;
    componentremoved: DetailEvent<{
      name: string,
      id: string,
      newData: any,
      oldData: any
    }>;
    loaded: EventListener;
    pause: EventListener;
    play: EventListener;
    stateadded: DetailEvent<{
      state: string
    }>;
    stateremoved: DetailEvent<{
      state: string
    }>;
    schemachanged: DetailEvent<{
      componentName: string
    }>;
  }
  declare export interface Geometry<T = any> {
    data: T;
    name: string;
    geometry: AFRAME$THREE.Geometry;
    AFRAME$schema: Schema<any>;
    init(data: any): void;
  }
  declare export interface GeometryConstructor<
    T: { [key: string]: any } = { [key: string]: any }
  > {
    new(): T & Geometry;
  }
  declare export interface GeometryDescriptor<T: Geometry = Geometry> {
    Geometry: GeometryConstructor<T>;
    AFRAME$schema: Schema;
  }
  declare export type MultiPropertySchema<T: { [key: string]: any }> = $ObjMapi<
    T,
    <P>(P) => SinglePropertySchema<$ElementType<T, P>> | $ElementType<T, P>
  >;
  declare export type PropertyTypes =
    | "array"
    | "asset"
    | "audio"
    | "boolean"
    | "color"
    | "int"
    | "map"
    | "model"
    | "number"
    | "selector"
    | "selectorAll"
    | "string"
    | "vec2"
    | "vec3"
    | "vec4";
  declare export type SceneEvents =
    | "enter-vr"
    | "exit-vr"
    | "loaded"
    | "renderstart";
  declare export type Scene = {
    behaviors: Behavior[],
    camera: AFRAME$THREE.Camera,
    canvas: HTMLCanvasElement,
    effect: AFRAME$THREE.VREffect,
    isMobile: boolean,
    object3D: AFRAME$THREE.Scene,
    renderer: AFRAME$THREE.WebGLRenderer,
    renderStarted: boolean,
    AFRAME$systems: ObjectMap<System>,
    time: number,
    enterVR(): Promise<void> | void,
    exitVR(): Promise<void> | void,
    reload(): void,
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      useCapture?: boolean
    ): void,
    addEventListener(
      type: SceneEvents,
      listener: EventListener,
      useCapture?: boolean
    ): void
  } & Entity;

  declare export type Schema<
    T: { [key: string]: any } = { [key: string]: any }
  > = SinglePropertySchema<T> | MultiPropertySchema<T>;
  declare export interface SchemaUtils {
    isSingleProperty(AFRAME$schema: Schema): boolean;
    process(AFRAME$schema: Schema): boolean;
  }
  declare export interface Shader {
    name: string;
    data: { [key: string]: any };
    AFRAME$schema: Schema<$ElementType<this, "data">>;
    material: AFRAME$THREE.Material;
    vertexShader: string;
    fragmentShader: string;
    init(data?: $ElementType<this, "data">): void;
    tick?: (time: number, timeDelta: number) => void;
    update(oldData: $ElementType<this, "data">): void;
  }
  declare export interface ShaderConstructor<T: { [key: string]: any }> {
    new(): T;
  }
  declare export interface ShaderDescriptor<T: Shader = Shader> {
    Shader: ShaderConstructor<T>;
    AFRAME$schema: Schema;
  }
  declare export interface SinglePropertySchema<T> {
    type?: PropertyTypes;
    default?: T;
    parse?: (value: string) => T;
    stringify?: (value: T) => string;
  }
  declare export interface System<T: { [key: string]: any } = any> {
    data: T;
    AFRAME$schema: Schema<T>;
    init(): void;
    pause(): void;
    play(): void;
    tick?: (t: number, dt: number) => void;
  }
  declare export interface SystemConstructor<
    T: { [key: string]: any } = { [key: string]: any }
  > {
    new(scene: Scene): T & System;
  }
  declare export interface Utils {
    coordinates: {
      isCoordinate(value: string): boolean,
      parse(value: string): Coordinate,
      stringify(coord: Coordinate): string
    };
    entity: {
      getComponentProperty(
        entity: Entity,
        componentName: string,
        delimiter?: string
      ): any,
      setComponentProperty(
        entity: Entity,
        componentName: string,
        value: any,
        delimiter?: string
      ): void
    };
    device: {
      isWebXRAvailable: boolean,
      getVRDisplay(): VRDisplay[],
      checkHeadsetConnected(): boolean,
      checkHasPositionalTracking(): boolean,
      isMobile(): boolean,
      isTablet(): boolean,
      isIOS(): boolean,
      isGearVR(): boolean,
      isOculusGo(): boolean,
      isR7(): boolean,
      isLandscape(): boolean,
      isBrowserEnvironment(): boolean,
      isNodeEnvironment(): boolean,
      PolyfillControls(object3D: AFRAME$THREE.Object3D): void
    };
    styleParser: {
      parse(value: string): { [key: string]: any },
      stringify(data: { [key: string]: any }): string
    };
    deepEqual(a: any, b: any): boolean;
    diff(
      a: { [key: string]: any },
      b: { [key: string]: any }
    ): { [key: string]: any };
    extend(
      target: { [key: string]: any },
      ...source: { [key: string]: any }[]
    ): { [key: string]: any };
    extendDeep(
      target: { [key: string]: any },
      ...source: { [key: string]: any }[]
    ): { [key: string]: any };
    throttle(
      tickFunction: () => void,
      minimumInterval: number,
      optionalContext?: {}
    ): (t: number, dt: number) => void;
    throttleTick(
      tickFunction: (t: number, dt: number) => void,
      minimumInterval: number,
      optionalContext?: {}
    ): (t: number, dt: number) => void;
  }
  declare export type ComponentDefinition<
    T: { [key: string]: any } = { [key: string]: any }
  > = T & $Shape<Component> & ThisType<T & Component>;
  declare export type GeometryDefinition<
    T: { [key: string]: any } = { [key: string]: any },
    U = any
  > = T & $Shape<Geometry<U>>;
  declare export type NodeDefinition<
    T: { [key: string]: any } = { [key: string]: any }
  > = T & $Shape<AFRAME$ANode>;
  declare export interface PrimitiveDefinition {
    defaultComponents?: any;
    deprecated?: boolean;
    mappings?: any;
    transforms?: any;
  }
  declare export interface MinimalShaderDefinition {
    AFRAME$schema: $ElementType<Shader, "schema">;
  }
  declare export type ShaderDefinition<
    T: { [key: string]: any } = MinimalShaderDefinition & { [key: string]: any }
  > = T & $Shape<Shader>;
  declare export type SystemDefinition<
    T: { [key: string]: any } = { [key: string]: any }
  > = T & $Shape<System>;
  declare export interface AFrame {
    AFRAME$AComponent: Component;
    AFRAME$AEntity: Entity;
    AFRAME$ANode: AFRAME$ANode;
    AFRAME$AScene: Scene;
    AFRAME$components: ObjectMap<ComponentDescriptor>;
    AFRAME$geometries: ObjectMap<GeometryDescriptor>;
    AFRAME$primitives: {
      getMeshMixin(): {
        defaultComponents: {
          material: { [key: string]: any }
        },
        mappings: {
          [key: string]: any
        }
      },
      AFRAME$primitives: ObjectMap<Entity>
    };
    AFRAME$scenes: Scene[];
    AFRAME$schema: SchemaUtils;
    AFRAME$shaders: ObjectMap<ShaderDescriptor>;
    AFRAME$systems: ObjectMap<SystemConstructor>;
    AFRAME$THREE: ThreeLib;
    AFRAME$TWEEN: TweenLib;
    AFRAME$utils: Utils;
    AFRAME$version: string;
    AFRAME$registerComponent<T: { [key: string]: any }>(
      name: string,
      component: ComponentDefinition<T>
    ): ComponentConstructor<T>;
    AFRAME$registerElement(name: string, element: { [key: string]: any }): void;
    AFRAME$registerGeometry<T: { [key: string]: any }>(
      name: string,
      geometry: GeometryDefinition<T>
    ): GeometryConstructor<T>;
    AFRAME$registerPrimitive(
      name: string,
      primitive: PrimitiveDefinition
    ): void;
    AFRAME$registerShader<T: MinimalShaderDefinition & { [key: string]: any }>(
      name: string,
      shader: ShaderDefinition<T>
    ): ShaderConstructor<T>;
    AFRAME$registerSystem<T: { [key: string]: any }>(
      name: string,
      definition: SystemDefinition<T>
    ): SystemConstructor<T>;
  }
  declare export var AFRAME$AComponent: $ElementType<AFrame, "AComponent">;
  declare export var AFRAME$AEntity: $ElementType<AFrame, "AEntity">;
  declare export var AFRAME$ANode: $ElementType<AFrame, "ANode">;
  declare export var AFRAME$AScene: $ElementType<AFrame, "AScene">;
  declare export var AFRAME$components: $ElementType<AFrame, "components">;
  declare export var AFRAME$geometries: $ElementType<AFrame, "geometries">;
  declare export var AFRAME$primitives: $ElementType<AFrame, "primitives">;
  declare export var AFRAME$scenes: $ElementType<AFrame, "scenes">;
  declare export var AFRAME$schema: $ElementType<AFrame, "schema">;
  declare export var AFRAME$shaders: $ElementType<AFrame, "shaders">;
  declare export var AFRAME$systems: $ElementType<AFrame, "systems">;
  declare export var AFRAME$THREE: $ElementType<AFrame, "THREE">;
  declare export var AFRAME$TWEEN: $ElementType<AFrame, "TWEEN">;
  declare export var AFRAME$utils: $ElementType<AFrame, "utils">;
  declare export var AFRAME$version: $ElementType<AFrame, "version">;
  declare export var AFRAME$registerComponent: $ElementType<
    AFrame,
    "registerComponent"
  >;
  declare export var AFRAME$registerElement: $ElementType<
    AFrame,
    "registerElement"
  >;
  declare export var AFRAME$registerGeometry: $ElementType<
    AFrame,
    "registerGeometry"
  >;
  declare export var AFRAME$registerPrimitive: $ElementType<
    AFrame,
    "registerPrimitive"
  >;
  declare export var AFRAME$registerShader: $ElementType<
    AFrame,
    "registerShader"
  >;
  declare export var AFRAME$registerSystem: $ElementType<
    AFrame,
    "registerSystem"
  >;
}
