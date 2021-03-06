declare module "gulp-ng-annotate" {
  declare interface ngAnnotate$NgAnnotate {
    (option?: ngAnnotate$Option): NodeJS.ReadWriteStream;
  }

  declare interface ngAnnotate$Option {
    /**
     * Add annotations where non-existing
     */
    add?: boolean;

    /**
     * Remove all existing annotations
     */
    remove?: boolean;

    /**
     * List optional matchers
     */
    list?: boolean;

    /**
     * Restrict matching further or to expand matching
     */
    regexp?: string;

    /**
     * Enable optional matcher
     */
    enable?: boolean;

    /**
     * Output '$scope' instead of "$scope".
     */
    single_quotes?: boolean;

    /**
     * Rename providers (services, factories, controllers, etc.) with a new name when declared and referenced through annotation
     */
    rename?: ngAnnotate$RenameOption[];

    /**
     * Load a user plugin with the provided path
     */
    plugin?: any[];
  }

  declare interface ngAnnotate$RenameOption {
    from: string;
    to: string;
  }
  declare var ngAnnotate: ngAnnotate$ngAnnotate$NgAnnotate;
  declare module.exports: typeof ngAnnotate;
}
