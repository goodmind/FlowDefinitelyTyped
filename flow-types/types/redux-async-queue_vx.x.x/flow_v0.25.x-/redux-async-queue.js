declare module "redux-async-queue" {
  import type { AnyAction } from "redux";

  declare function queueMiddleware(): (next: (action: AnyAction) => any) => any;

  declare export default typeof queueMiddleware;
}
