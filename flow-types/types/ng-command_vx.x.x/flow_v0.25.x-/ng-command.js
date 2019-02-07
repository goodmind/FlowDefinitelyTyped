declare module "ng-command" {
  declare var npm$namespace$ngCommand: {
    ModuleName: typeof ngCommand$ModuleName
  };
  declare var ngCommand$ModuleName: string;

  /**
   * Command proxy object.
   */
  declare interface ngCommand$ICommand {
    /**
     * Determines whether the command is currently executing.
     */
    isExecuting: boolean;

    /**
     * Determines whether the command can execute or not.
     */
    canExecute: boolean;

    /**
     * Executes the command function.
     */
    execute: () => angular.IPromise<any>;
  }

  declare class ngCommand$Command mixins ngCommand$ICommand {
    static id: string;
    isExecuting: boolean;
    canExecute: boolean;
    constructor(
      $scope: angular.IScope,
      execute: () => angular.IPromise<any>,
      canExecute?: () => boolean
    ): this;
    execute(): angular.IPromise<any>;
  }

  /**
   * Command factory which creates instances of @see ICommand.
   */
  declare interface ngCommand$ICommandFactory {
    /**
     * Factory instance creator method.
     * @param $scope Scope which will keep track of the command.
     * @param execute The execute function when the command is executed.
     * @param canExecute Additional function which determines whether the command can executes.
     */
    (
      $scope: angular.IScope,
      execute: () => angular.IPromise<any>,
      canExecute?: () => boolean
    ): ngCommand$ICommand;
  }
}
