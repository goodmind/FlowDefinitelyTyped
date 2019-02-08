declare module "react" {
  declare type StyleHTMLAttributes<T> = {
    jsx?: boolean,
    global?: boolean
  } & HTMLAttributes<T>;
}
declare module "styled-jsx" {
  import typeof * as css from "./css";

  import typeof * as server from "./server";
}
