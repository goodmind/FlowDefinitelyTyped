declare module "umzug" {
  import type { EventEmitter } from "events";

  declare interface umzug$MigrationOptions {
    params?: Array<any>;

    /**
     * The path to the migrations directory.
     */
    path?: string;

    /**
     * The pattern that determines whether or not a file is a migration.
     */
    pattern?: RegExp;

    /**
     * A function that receives and returns the to be executed function.
     * This can be used to modify the function.
     */
    wrap?: <T>(fn: T) => T;

    /**
     * A function that maps a file path to a migration object in the form
     * { up: Function, down: Function }. The default for this is to require(...)
     * the file as javascript, but you can use this to transpile TypeScript,
     * read raw sql etc.
     * See https://github.com/sequelize/umzug/tree/master/test/fixtures
     * for examples.
     */
    customResolver?: (
      path: string
    ) => {
      up: () => Promise<any>,
      down?: () => Promise<any>
    };
  }

  /**
   * In order to keep track of already executed tasks, umzug logs successfully executed migrations.
   * This is done in order to allow rollbacks of tasks. This is the interface these `Storages` must
   * follow.
   */
  declare interface umzug$Storage {
    /**
     * Logs migration to be considered as executed.
     * @param migrationName - Name of the migration to be logged.
     */
    logMigration(migrationName: string): Promise<void>;

    /**
     * Unlogs migration to be considered as pending.
     * @param migrationName - Name of the migration to be unlogged.
     */
    unlogMigration(migrationName: string): Promise<void>;

    /**
     * Gets list of executed migrations.
     */
    executed(): Promise<String[]>;
  }

  declare type umzug$JSONStorageOptions = {
    /**
     * The path to the json storage.
     * Defaults to process.cwd() + '/umzug.json';
     */
    path?: string
  } & umzug$Storage;

  declare type umzug$SequelizeStorageOptions = {
    /**
     * The configured instance of Sequelize.
     * Optional if `model` is passed.
     */
    sequelize?: Sequelize.Sequelize,

    /**
     * The to be used Sequelize model.
     * Must have column name matching `columnName` option
     * Optional of `sequelize` is passed.
     */
    model?: Sequelize.Model<any, any>,

    /**
     * The name of the to be used model.
     * Defaults to 'SequelizeMeta'
     */
    modelName?: string,

    /**
     * The name of table to create if `model` option is not supplied
     * Defaults to `modelName`
     */
    tableName?: string,

    /**
     * The name of table column holding migration name.
     * Defaults to 'name'.
     */
    columnName: string,

    /**
     * The type of the column holding migration name.
     * Defaults to `Sequelize.STRING`
     */
    columnType: Sequelize.DataTypeAbstract
  } & umzug$Storage;

  declare type umzug$MongoDBStorageOptions = {
    /**
     * The MongoDB database connection instance.
     */
    connection?: MongoDB.Db,

    /**
     * The to be used Mongo collection cursor.
     * Defaults to collection created from collectionName attribute.
     */
    collection?: MongoDB.Collection,

    /**
     * The name of the collection used by the connection.
     * Defaults to 'migrations'
     */
    collectionName?: string
  } & umzug$Storage;

  declare interface umzug$ExecuteOptions {
    migrations?: Array<string>;
    method?: string;
  }

  declare interface umzug$UmzugOptions {
    /**
     * The storage.
     */
    storage?: "json" | "sequelize" | "mongodb" | umzug$Storage;

    /**
     * The options for the storage.
     */
    storageOptions?:
      | umzug$JSONStorageOptions
      | umzug$SequelizeStorageOptions
      | umzug$MongoDBStorageOptions
      | Object;

    /**
     * The logging function.
     * A function that gets executed everytime migrations start and have ended.
     */
    logging?: boolean | Function;

    /**
     * The name of the positive method in migrations.
     */
    upName?: string;

    /**
     * The name of the negative method in migrations.
     */
    downName?: string;

    /**
     * Options for defined migration
     */
    migrations?: umzug$MigrationOptions;
  }

  declare interface umzug$UpToOptions {
    /**
     * It is also possible to pass the name of a migration in order to
     * just run the migrations from the current state to the passed
     * migration name.
     */
    to: string;
  }

  declare interface umzug$DownToOptions {
    /**
     * It is also possible to pass the name of a migration in order to
     * just run the migrations from the current state to the passed
     * migration name. down allows to pass 0 to revert everything.
     */
    to: string | 0;
  }

  declare interface umzug$UpDownMigrationsOptions {
    /**
     * Running specific migrations while ignoring the right order, can be
     * done like this:
     */
    migrations: Array<string>;
  }

  declare interface umzug$Migration {
    path: string;
    file: string;
  }

  declare type umzug$Umzug = {
    /**
     * The execute method is a general purpose function that runs for
     * every specified migrations the respective function.
     */
    execute(options?: umzug$ExecuteOptions): Promise<umzug$Migration[]>,

    /**
     * You can get a list of pending/not yet executed migrations like this:
     */
    pending(): Promise<umzug$Migration[]>,

    /**
     * You can get a list of already executed migrations like this:
     */
    executed(): Promise<umzug$Migration[]>,

    /**
     * The up method can be used to execute all pending migrations.
     */
    up(migration?: string): Promise<umzug$Migration[]>,
    up(migrations?: string[]): Promise<umzug$Migration[]>,
    up(
      options?: umzug$UpToOptions | umzug$UpDownMigrationsOptions
    ): Promise<umzug$Migration[]>,

    /**
     * The down method can be used to revert the last executed migration.
     */
    down(migration?: string): Promise<umzug$Migration[]>,
    down(migrations?: string[]): Promise<umzug$Migration[]>,
    down(
      options?: umzug$DownToOptions | umzug$UpDownMigrationsOptions
    ): Promise<umzug$Migration[]>,
    on(
      eventName: "migrating" | "reverting" | "migrated" | "reverted",
      cb?: (name: string, migration: umzug$Migration) => void
    ): this,
    addListener(
      eventName: "migrating" | "reverting" | "migrated" | "reverted",
      cb?: (name: string, migration: umzug$Migration) => void
    ): this,
    removeListener(
      eventName: "migrating" | "reverting" | "migrated" | "reverted",
      cb?: (name: string, migration: umzug$Migration) => void
    ): this
  } & EventEmitter;

  declare interface umzug$UmzugStatic {
    new(options?: umzug$UmzugOptions): umzug$Umzug;
  }
  declare var umzug: umzug$umzug$UmzugStatic;
  declare module.exports: typeof umzug;
}
