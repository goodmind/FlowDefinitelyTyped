declare module "gulp-help" {
  declare type HelpOption = string | boolean;
  declare interface gulpHelp$TaskMethod {
    /**
     * Define a task.
     * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
     * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
     * @param deps an array of tasks to be executed and completed before your task will run.
     * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
     * @param option task options
     */
    (
      name: string,
      help: HelpOption,
      deps: string[],
      fn?: gulp.TaskCallback,
      option?: gulpHelp$TaskOptions
    ): any;

    /**
     * Define a task.
     * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
     * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
     * @param deps an array of tasks to be executed and completed before your task will run.
     */
    (name: string, help: HelpOption, deps: string[]): any;

    /**
     * Define a task.
     * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
     * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
     * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
     * @param option task options
     */
    (
      name: string,
      help: HelpOption,
      fn?: gulp.TaskCallback,
      option?: gulpHelp$TaskOptions
    ): any;

    /**
     * Define a task.
     * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
     * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
     */
    (name: string, help: HelpOption): any;

    /**
     * Define a task.
     * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
     * @param deps an array of tasks to be executed and completed before your task will run.
     * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
     * @param option task options
     */
    (
      name: string,
      deps: string[],
      fn?: gulp.TaskCallback,
      option?: gulpHelp$TaskOptions
    ): any;

    /**
     * Define a task.
     * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
     * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
     * @param option task options
     */
    (name: string, fn?: gulp.TaskCallback, option?: gulpHelp$TaskOptions): any;
  }

  declare type gulpHelp$GulpHelp = {
    task: gulpHelp$TaskMethod,
    src: gulp.SrcMethod,
    dest: gulp.DestMethod,
    watch: gulp.WatchMethod
  } & Orchestrator;

  declare interface gulpHelp$TaskOptions {
    /**
     * List of aliases for this task
     */
    aliases?: string[];

    /**
     * Object documenting options which can be passed to your task
     */
    options?: {
      [key: string]: string
    };
  }

  declare interface gulpHelp$GulpHelpOptions {
    /**
     * Modifies the default help message
     */
    description?: string;

    /**
     * Adds aliases to the default help task
     */
    aliases?: string[];

    /**
     * Hide all tasks with no help message defined. Useful when including 3rd party tasks
     */
    hideEmpty?: boolean;

    /**
     * Hide all task dependencies
     */
    hideDepsMessage?: boolean;

    /**
     * A function to run after the default help task runs
     */
    afterPrintCallback?: Function;
  }
  declare function gulpHelp(
    gulp: gulp.Gulp,
    options?: gulpHelp$gulpHelp$GulpHelpOptions
  ): gulpHelp$gulpHelp$GulpHelp;

  declare module.exports: typeof gulpHelp;
}
