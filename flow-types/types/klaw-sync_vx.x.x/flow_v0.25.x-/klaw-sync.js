declare module "klaw-sync" {
  import typeof * as fs from "fs";

  declare interface klawSync$Item {
    path: string;
    stats: fs.Stats;
  }

  declare type klawSync$Filter = (item: klawSync$Item) => boolean;

  declare interface klawSync$Options {
    /**
 * @description True to only return files (ignore directories).
Defaults to false if not specified.
 * @default false
 */
    nodir?: boolean;

    /**
 * @description True to only return directories (ignore files).
Defaults to false if not specified.
 * @default false
 */
    nofile?: boolean;

    /**
 * @description The number of times to recurse before stopping.
-1 for unlimited.
 * @default -1
 * @since v5.0.0
 */
    depthLimit?: number;

    /**
     * @description Custom fs, useful when mocking fs object.
     * @default graceful-fs
     * @since v4.0.0
     */
    fs?: {
      readdirSync(path: string): string[],
      statSync(path: string): fs.Stats
    };

    /**
 * @description function that gets one argument fn({path: '', stats: {}}) and returns true to include
or false to exclude the item
 * @since v2.0.0
 */
    filter?: klawSync$Filter;

    /**
 * @description traverse all subdirectories, regardless of `filter` option.

When set to true, traverseAll produces similar behavior to the default
behavior prior to `v4.0.0`. The current default of `traverseAll: false`
is equivalent to the old `noRecurseOnFailedFilter: true`).
 * @since v6.0.0
 */
    traverseAll?: boolean;
  }
  declare function klawSync(
    root: string,
    options?: klawSync$klawSync$Options
  ): $ReadOnlyArray<klawSync$klawSync$Item>;

  declare module.exports: typeof klawSync;
}
