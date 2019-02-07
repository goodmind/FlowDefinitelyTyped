declare module "redux-persist-transform-encrypt" {
  import type { Transform } from "redux-persist";

  declare export interface EncryptorConfig {
    secretKey: string;
    onError?: (err: Error) => void;
  }
  declare export default function createEncryptor<State, Raw>(
    config: EncryptorConfig
  ): Transform<State, Raw>;
}
