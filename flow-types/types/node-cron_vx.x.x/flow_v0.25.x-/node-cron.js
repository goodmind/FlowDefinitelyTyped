declare module "node-cron" {
  declare export function schedule(
    cronExpression: string,
    func: () => void,
    options?: ScheduleOptions
  ): ScheduledTask;

  declare export function validate(cronExpression: string): boolean;

  declare export interface ScheduledTask {
    start: () => this;
    stop: () => this;
    destroy: () => void;
  }
  declare export interface ScheduleOptions {
    /**
     * A boolean to set if the created task is scheduled.
     *
     * Defaults to `true`
     */
    scheduled?: boolean;

    /**
     * The timezone that is used for job scheduling
     */
    timezone?: string;
  }
}
