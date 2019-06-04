declare module "axios" {
  declare interface AxiosRequestConfig {
    requestId?: string;
  }
  declare interface AxiosStatic {
    cancel: (requestId: string) => void;
    cancelAll: () => void;
  }
}
declare module "axios-cancel" {
  import type { AxiosStatic } from "axios";

  declare interface AxiosCancelOptions {
    /**
     * Enables logging
     * default: false
     */
    debug: boolean;
  }
  declare function axiosCancel(
    axiosStatic: AxiosStatic,
    options?: AxiosCancelOptions
  ): void;

  declare export default typeof axiosCancel;
}
