declare module "keytar" {
  /**
   * Get the stored password for the service and account.
   * @param service The string service name.
   * @param account The string account name.
   * @returns A promise for the password string.
   */
  declare export function getPassword(
    service: string,
    account: string
  ): Promise<string | null>;

  /**
   * Add the password for the service and account to the keychain.
   * @param service The string service name.
   * @param account The string account name.
   * @param password The string password.
   * @returns A promise for the set password completion.
   */
  declare export function setPassword(
    service: string,
    account: string,
    password: string
  ): Promise<void>;

  /**
   * Delete the stored password for the service and account.
   * @param service The string service name.
   * @param account The string account name.
   * @returns A promise for the deletion status. True on success.
   */
  declare export function deletePassword(
    service: string,
    account: string
  ): Promise<boolean>;

  /**
   * Find a password for the service in the keychain.
   * @param service The string service name.
   * @returns A promise for the password string.
   */
  declare export function findPassword(service: string): Promise<string | null>;
}
