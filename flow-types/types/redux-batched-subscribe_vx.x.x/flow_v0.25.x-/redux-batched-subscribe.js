declare module "redux-batched-subscribe" {
  import type { GenericStoreEnhancer } from "redux";

  declare export type NotifyFunction = () => void;
  declare export type BatchFunction = (notify: NotifyFunction) => void;
  declare export function batchedSubscribe(
    batch: BatchFunction
  ): GenericStoreEnhancer;
}
