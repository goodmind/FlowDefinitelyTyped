declare module "mobx-task" {
  declare export type Omit<T, K> = Pick<T, Exclude<$Keys<T>, K>>;
  declare export type WithoutPromise<
    T
  > = /* Flow doesn't support conditional types, use $Call utility type */ any;
  declare export type TaskState = "pending" | "resolved" | "rejected";
  declare export type TaskError = Error;
  declare export type TaskFunc<R, A: any[]> = (...args: A) => R;
  declare export interface TaskOptions<Result> {
    state?: TaskState;
    error?: TaskError;
    result?: Result;
    swallow?: boolean;
  }
  declare export interface TaskMatchProps<
    T1,
    T2,
    T3,
    Args: any[],
    Result = any
  > {
    pending: (...args: Args) => T1;
    rejected: (error: TaskError) => T2;
    resolved: (result: Result) => T3;
  }
  declare export type TaskStatusAware<Result = any, Args: any[] = any[]> = {
    +state: TaskState,
    +pending: boolean,
    +resolved: boolean,
    +rejected: boolean,
    +args: Args,
    +result?: Result,
    +error?: TaskError,
    match<PendingType, RejectedType, ResolvedType>(
      props: TaskMatchProps<
        PendingType,
        RejectedType,
        ResolvedType,
        Args,
        Result
      >
    ): PendingType | RejectedType | ResolvedType,
    wrap<R, A: any[]>(
      func: (inner: TaskStatusAware<Result, Args>) => (...args: A) => Promise<R>
    ): TaskStatusAware<R, A>,
    setState(props: TaskOptions<Result>): void,
    reset(): void
  } & TaskFunc<Promise<Result>, Args>;

  declare export type TaskCreator<K: $Keys<TaskOptions<any>>> = {
    <R, A: any[]>(
      func: TaskFunc<R, A>,
      options?: Pick<TaskOptions<WithoutPromise<R>>, K>
    ): TaskStatusAware<WithoutPromise<R>, A>,
    (options: Pick<TaskOptions<WithoutPromise<any>>, K>): PropertyDecorator,
    (options: Pick<TaskOptions<WithoutPromise<any>>, K>): MethodDecorator
  } & MethodDecorator &
    PropertyDecorator;

  declare export type TaskFactory = {
    resolved: TaskCreator<Exclude<$Keys<TaskOptions<any>>, "state">>,
    rejected: TaskCreator<Exclude<$Keys<TaskOptions<any>>, "state">>
  } & TaskCreator<$Keys<TaskOptions<any>>>;

  declare export type Task<Result = any, Args: any[] = any[]> = TaskStatusAware<
    Result,
    Args
  >;
  declare export var task: TaskFactory;
}
