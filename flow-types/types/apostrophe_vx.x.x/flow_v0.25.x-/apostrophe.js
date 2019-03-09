declare module "apostrophe" {
  declare export default typeof apostrophe;

  declare function apostrophe(
    options: apostrophe$AposConstructor<>,
    ...args: any[]
  ): any;

  declare var npm$namespace$apostrophe: {
    change: typeof apostrophe$change,
    create: typeof apostrophe$create,
    define: typeof apostrophe$define,
    emit: typeof apostrophe$emit,
    notify: typeof apostrophe$notify,
    off: typeof apostrophe$off,
    on: typeof apostrophe$on,
    moogBundle: typeof apostrophe$moogBundle,
    ui: typeof apostrophe$ui,
    pages: typeof apostrophe$pages,
    adminBar: typeof apostrophe$adminBar,
    contextPiece: typeof apostrophe$contextPiece,
    docs: typeof apostrophe$docs,
    modules: typeof apostrophe$modules,
    modalSupport: typeof apostrophe$modalSupport,
    schemas: typeof apostrophe$schemas,
    utils: typeof apostrophe$utils,
    versions: typeof apostrophe$versions
  };
  declare var apostrophe$moogBundle: {
    directory: string,
    modules: string[]
  };

  declare interface apostrophe$AposConstructor<M = {}, O = {}> {
    afterInit?: () => void;
    afterListen?: () => void;
    initFailed?: (error: any) => void;
    baseUrl?: string;
    modules: $ObjMapi<
      { [k: apostrophe$AposCoreModules & M]: any },
      <K>(K) => apostrophe$AposModuleOptions<> | O
    >;
    prefix?: string;
    root?: string;
    rootDir?: string;
    shortName: string;
  }

  declare var apostrophe$ui: {
    globalBusy: (state: any) => any,
    link: (
      sel: string,
      verb: string,
      object: { [key: string]: any },
      callback?: () => any
    ) => any
  };

  declare var apostrophe$pages: {
    page: {
      _id: string,
      type: string,
      _url?: string
    }
  };

  declare var apostrophe$adminBar: {
    link: (name: string, callback: () => any) => void
  };

  declare function apostrophe$change(arg: { [key: string]: any } | string): any;

  declare function apostrophe$create(
    type: string,
    options: any,
    callback?: () => any
  ): any;

  declare var apostrophe$contextPiece: {
    _id: string,
    title: string,
    slug: string,
    type: string
  };

  declare function apostrophe$define(
    type: string | string[],
    definition: any,
    extending?: any
  ): any;

  declare var apostrophe$docs: {
    getManager: (type: string) => void,
    setManager: (type: string, manager: any) => void,
    lock: (id: string, callback?: () => any) => void,
    lockAndWatch: (id: string, callback?: () => any) => void,
    unlock: (_id: string, sync: any, callback?: () => any) => any
  };

  declare function apostrophe$emit(name: string, arg?: any): any;

  declare var apostrophe$modules: { [key: string]: any };

  declare var apostrophe$modalSupport: {
    stack: any[],
    initialized: boolean,
    depth: number,
    all: any[],
    getTopModalOrBody: () => string,
    getLatestModal: () => null | string,
    closeTopModal: () => void,
    cancelTopModal: () => void
  };

  declare function apostrophe$notify(
    message: string | { [key: string]: any },
    options: apostrophe$AposObject
  ): any;

  declare function apostrophe$off(eventName: string, fn?: () => any): any;

  declare function apostrophe$on(eventName: string, fn?: () => any): any;

  declare var apostrophe$schemas: {
    convert: (
      $el: HTMLElement,
      schema: apostrophe$Schema,
      data: any,
      options: any,
      callback?: () => any
    ) => any,
    newInstance: (schema: apostrophe$Schema) => any,
    populate: (
      data: any,
      name: string,
      $field: any,
      callback?: () => void,
      $el?: HTMLElement,
      field?: any
    ) => any,
    returnToError: (
      $el: HTMLElement,
      schema: apostrophe$Schema,
      errorPath: any,
      error: any,
      callback: () => any
    ) => void
  };

  declare var apostrophe$utils: {
    capitalizeFirst: (s: string) => string,
    camelName: (s: string) => string,
    error: (msg: string) => void,
    generateId: () => string
  };

  declare var apostrophe$versions: {
    edit: (id: string, afterRevert?: () => void) => any
  };

  declare interface apostrophe$AposObject {
    [key: string]: any;
  }

  declare interface apostrophe$Field {
    name: string;
    type: string;
    label: string;
    help?: string;
    required?: boolean;
    options?: apostrophe$AposObject;
    choices?: apostrophe$SelectChoice[];
    widgetType?: string;
    titleField?: string;
    schema?: apostrophe$Field[];
  }

  declare interface apostrophe$SelectChoice {
    label: string;
    value: string;
  }

  declare type apostrophe$Fields = apostrophe$Field[];

  declare interface apostrophe$AposType {
    name: string;
    converters: {
      string(
        req: any,
        data: any,
        name: string,
        object: apostrophe$AposObject,
        field: any,
        callback: () => any
      ): void,
      form(
        req: any,
        data: any,
        name: string,
        object: apostrophe$AposObject,
        field: any,
        callback: () => any
      ): void
    };
    empty?: (field: any, value: any) => void;
    bless?: (req: any, field: any) => void;
    index(value: any, field: any, texts: any): void;
  }

  declare interface apostrophe$Schema {
    createRoutes(): any[];
    pushAssets(): void;
    pushCreateSingleton(): void;
    compose(options: apostrophe$AposObject): void;
    refine(schema: apostrophe$Schema, options: apostrophe$AposObject): void;
    toGroups(fields: apostrophe$Fields): void;
    subset(
      schema: apostrophe$Schema,
      fields: apostrophe$Fields
    ): apostrophe$Schema;
    newInstance(schema: apostrophe$Schema): any;
    subsetInstance(
      schema: apostrophe$Schema,
      instance: apostrophe$AposObject
    ): any;
    empty(schema: apostrophe$Schema, object: apostrophe$AposObject): void;
    indexFields(
      schema: apostrophe$Schema,
      object: apostrophe$AposObject,
      texts: any
    ): void;
    convert(
      req: any,
      schema: apostrophe$Schema,
      to: any,
      object: apostrophe$AposObject,
      output: any,
      callback: () => any
    ): void;
    isVisible(
      schema: apostrophe$Schema,
      object: apostrophe$AposObject,
      name: string
    ): void;
    export(
      req: any,
      schema: apostrophe$Schema,
      to: any,
      object: apostrophe$AposObject,
      output: any,
      callback: () => any
    ): void;
    joinDriver(
      req: any,
      method: any,
      reverse: any,
      items: any,
      idField: any,
      relationshipsField: any,
      objectField: any,
      options: any,
      callback: () => any
    ): void;
    join(
      req: any,
      schema: apostrophe$Schema,
      objectOrArray: any,
      withJoins: any,
      callback: () => any
    ): void;
    addFieldType(type: apostrophe$AposType): void;
    getFieldType(typeName: string): void;
    addFilters(schema: apostrophe$Schema, options: any, cursor: any): void;
    joinFilterChoices(field: any, cursor: any, valueField: any): void;
    addJoinSlugFilter(field: any, cursor: any, suffix: any): void;
    pageServe(req: any): void;
    sortedDistinct(property: any, cursor: any, callback: () => any): void;
    cursorFilterInterested(cursor: any, name: string): void;
    afterInit(): void;
    validate(schema: apostrophe$Schema, options: any): void;
  }

  declare interface apostrophe$AposModule {
    emit(name: string): void;
    on(name: string, methodName: any, fn: () => any): void;
  }

  declare type apostrophe$AposCoreModules =
    | "apostrophe-admin-bar"
    | "apostrophe-any-page-manager"
    | "apostrophe-areas"
    | "apostrophe-assets"
    | "apostrophe-attachments"
    | "apostrophe-browser-utils"
    | "apostrophe-caches"
    | "apostrophe-custom-pages"
    | "apostrophe-db"
    | "apostrophe-doc-type-manager"
    | "apostrophe-docs"
    | "apostrophe-email"
    | "apostrophe-express"
    | "apostrophe-files"
    | "apostrophe-files-widgets"
    | "apostrophe-global"
    | "apostrophe-groups"
    | "apostrophe-html-widgets"
    | "apostrophe-i18n"
    | "apostrophe-images"
    | "apostrophe-images-widgets"
    | "apostrophe-jobs"
    | "apostrophe-launder"
    | "apostrophe-locks"
    | "apostrophe-login"
    | "apostrophe-migrations"
    | "apostrophe-modal"
    | "apostrophe-module"
    | "apostrophe-notifications"
    | "apostrophe-oembed"
    | "apostrophe-pager"
    | "apostrophe-pages"
    | "apostrophe-permissions"
    | "apostrophe-pieces"
    | "apostrophe-pieces-pages"
    | "apostrophe-pieces-widgets"
    | "apostrophe-polymorphic-manager"
    | "apostrophe-push"
    | "apostrophe-rich-text-widgets"
    | "apostrophe-schemas"
    | "apostrophe-search"
    | "apostrophe-service-bridge"
    | "apostrophe-soft-redirects"
    | "apostrophe-tags"
    | "apostrophe-tasks"
    | "apostrophe-templates"
    | "apostrophe-ui"
    | "apostrophe-urls"
    | "apostrophe-users"
    | "apostrophe-utils"
    | "apostrophe-versions"
    | "apostrophe-video-fields"
    | "apostrophe-video-widgets"
    | "apostrophe-widgets";

  declare interface apostrophe$AposModuleOptions<C = {}> {
    extend: apostrophe$AposCoreModules | C;
    name?: string;
    label: string;
    pluralLabel?: string;
    playerData?: false | string[];
    scene?: "user";
    addFields?: apostrophe$Field[];
    removeFields?: apostrophe$Field[];
    arrangeFields?: {
      name: string,
      label: string,
      fields: string[]
    }[];
    beforeConstruct?: (self: any, options: any) => any;
    defer?: boolean;
    filters?: {
      projection?: {
        [key: string]: number
      }
    };
  }
}
