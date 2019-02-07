declare module "mz" {
  import typeof * as child_process from "mz/child_process";

  import typeof * as crypto from "mz/crypto";

  import typeof * as dns from "mz/dns";

  import typeof * as fs from "mz/fs";

  import typeof * as readline from "mz/readline";

  import typeof * as zlib from "mz/zlib";

  declare export { child_process, crypto, dns, fs, readline, zlib };
}
