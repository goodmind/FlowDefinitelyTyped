declare module "lightship" {
  /**
   * A teardown function called when shutdown is initialized.
   * @param userConfiguration User configuration object
   */
  declare export function createLightship(
    userConfiguration?: UserConfigurationType
  ): LightshipType;

  declare export interface UserConfigurationType {
    detectKubernetes?: boolean;
    port?: number;
    signals?: $ReadOnlyArray<NodeJS$Signals>;
    timeout?: number;
  }
  declare export interface LightshipType {
    isServerReady: () => boolean;
    isServerShuttingDown: () => boolean;

    /**
     * Registers teardown functions that are called when shutdown is initialized.
     * All registered shutdown handlers are executed in the order they have been registered.
     * After all shutdown handlers have been executed, Lightship asks `process.exit()` to terminate the process synchronously.
     */
    registerShutdownHandler: (shutdownHandler: ShutdownHandlerType) => void;
    shutdown: () => Promise<void>;
    signalNotReady: () => void;
    signalReady: () => void;
  }
  declare export type ShutdownHandlerType = () => Promise<void> | void;
}
