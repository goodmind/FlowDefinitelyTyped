declare module "flushable" {
  declare export type FlushableOnCompleteHandler = (flushed: boolean) => any;
  declare export interface FlushableOperation {
    /**
     * Returns whether or not the callback has been executed
     */
    pending: () => boolean;

    /**
     * Stops the callback from being executed
     */
    cancel: () => void;

    /**
     * Immediately executes the callback
     */
    flush: () => void;
  }
  declare export default function flushable(
    onComplete: FlushableOnCompleteHandler,
    delay: number
  ): FlushableOperation;
}
