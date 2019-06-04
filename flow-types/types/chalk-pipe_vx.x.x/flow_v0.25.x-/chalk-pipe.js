declare module "chalk-pipe" {
  import typeof chalk from "chalk";

  /**
   * 🌈 Create chalk-style schemes with simpler style strings.
   * @param stylePipe Use a dot `.` to separate multiple styles.
   */ declare function chalkPipe<T: typeof chalk>(
    stylePipe: string,
    customChalk?: T
  ): T;
  declare export default typeof chalkPipe;
}
