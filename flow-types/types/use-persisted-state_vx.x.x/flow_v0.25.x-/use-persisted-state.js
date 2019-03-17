declare module "use-persisted-state" {
  import type { useState } from "react";

  declare function createPersistedState(
    key: string,
    provider?: Pick<Storage, "getItem" | "setItem">
  ): typeof useState;

  declare export default typeof createPersistedState;
}
