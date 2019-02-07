declare module "axios-case-converter" {
  import type { AxiosInstance } from "axios";

  declare export default function applyConverters(
    axios: AxiosInstance
  ): AxiosInstance;
}
