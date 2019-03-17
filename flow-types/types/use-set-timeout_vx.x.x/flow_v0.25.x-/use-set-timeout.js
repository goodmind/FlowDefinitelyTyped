declare module "use-set-timeout" {
  /**
   * A React Hook (using useEffect) which uses window.setTimeout().
   * @param fn a function to execute
   * @param delay the delay in milliseconds
   */
  declare export default function useSetTimeout(
    fn: () => void,
    delay: number
  ): void;
}
