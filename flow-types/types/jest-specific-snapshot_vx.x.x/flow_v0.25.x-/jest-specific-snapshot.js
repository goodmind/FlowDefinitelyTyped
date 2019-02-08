declare interface jest$Matchers<R> {
  toMatchSpecificSnapshot(snapshotFilename: string): R;
}
declare module "global" {
}
declare module "jest-specific-snapshot" {
  /**
   * Specify the serializer that should be used by toMatchSpecificSnapshot.
   * Note: toMatchSpecificSnapshot ignores the existing jest snapshot serializer settings. If you want to use a custom serializer,
   * you need to set it via this addSerializer function.
   */
  declare export function addSerializer(serializer: any): void;

  /**
   * This is used to create a customized version of toMatchSpecificSnapshot.
   */
  declare export function toMatchSpecificSnapshot(
    data: any,
    snapshotFile: string,
    testName: string
  ): () => {
    message(): string,
    pass: boolean
  };
}
