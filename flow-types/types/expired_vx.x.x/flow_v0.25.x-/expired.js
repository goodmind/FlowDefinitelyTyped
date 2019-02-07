declare module "expired" {
  declare module.exports: typeof expired;

  declare var expired: expired;
  declare interface expired {
    /**
 * @returns A boolean relating to whether the resource has expired or not.
`true` means it's expired, `false` means it's fresh.
 */
    (headers: expired$expired$Headers, compareWith?: Date): boolean;

    /**
 * @returns The amount of milliseconds from the current date until the resource will expire.
If the resource has already expired it will return a negative integer.
 */
    in(headers: expired$expired$Headers, compareWith?: Date): number;

    /**
     * @returns A JavaScript `Date` object for the date the resource will expire.
     */
    on(headers: expired$expired$Headers): Date;
  }
  declare type expired$Headers =
    | string
    | {
        [header: string]: string | string[] | void
      };
}
