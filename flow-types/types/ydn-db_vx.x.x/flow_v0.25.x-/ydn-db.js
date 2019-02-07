declare module "ydn-db" {
  declare interface FullTextSource {
    storeName: string;
    keyPath: string;
    weight?: number;
  }
  declare interface FullTextCatalog {
    name: string;
    lang: string;
    sources: FullTextSource[];
  }
  declare interface IndexSchemaJson {
    name?: string;
    keyPath: string | string[];
    type?: string;
    unique?: boolean;
    multiEntry?: boolean;
  }
  declare interface StoreSchemaJson {
    autoIncrement?: boolean;
    dispatchEvents?: boolean;
    name?: string;
    indexes?: IndexSchemaJson[];
    keyPath?: string;
    type?: string;
  }
  declare interface DatabaseSchemaJson {
    version?: number;
    stores: StoreSchemaJson[];
    fullTextCatalogs?: FullTextCatalog[];
  }
  declare interface StorageOptions {
    mechanisms?: string[];
    size?: number;
    autoSchema?: boolean;
    isSerial?: boolean;
    requestType?: string;
  }
  declare export class events$Event {
    name: string;
    type: ydn$ydn$db.db$EventType;
  }

  declare export class events$RecordEvent mixins events$Event {
    getStoreName(): string;
    getKey(): any;
    getValue(): any;
  }

  declare export class events$StorageEvent mixins events$Event {
    getError(): Error;
    getVersion(): number;
    getOldVersion(): number;
  }

  declare export class events$StoreEvent mixins events$Event {
    getStoreName(): string;
    getKeys(): any[];
    getValues(): any[];
  }
  declare export class algo$Solver {}

  declare export class algo$NestedLoop mixins algo$Solver {
    constructor(
      out: {
        push: (value: any) => void
      },
      limit?: number
    ): this;
  }

  declare export class algo$SortedMerge mixins algo$Solver {
    constructor(
      out: {
        push: (value: any) => void
      },
      limit?: number
    ): this;
  }

  declare export class algo$ZigzagMerge mixins algo$Solver {
    constructor(
      out: {
        push: (value: any) => void
      },
      limit?: number
    ): this;
  }
}
