declare interface Chai$Assertion {
  /**
   * Assert that the object matches the snapshot
   */
  matchSnapshot(
    snapshotFilename?: string,
    snapshotName?: string,
    update?: boolean
  ): Chai$Assertion;
  matchSnapshot(update: boolean): Chai$Assertion;
}
declare module "global" {
}
declare module "chai-jest-snapshot" {
  declare interface ChaiJestSnapshot {
    /**
     * Chai bootstrapper
     */
    (chai: any, utils: any): void;

    /**
     * Set snapshot file name
     */
    setFilename(filename: string): void;

    /**
     * Set snapshot test name
     */
    setTestName(testname: string): void;

    /**
     * Configure snapshot name using mocha context
     */
    configureUsingMochaContext(context: Mocha.IBeforeAndAfterContext): void;

    /**
     * Reset snapshot registry
     */
    resetSnapshotRegistry(): void;

    /**
     * Add a serializer plugin
     */
    addSerializer(serializer: any): void;
  }
  declare var ChaiJestSnapshot: ChaiJestSnapshot;
  declare module.exports: typeof ChaiJestSnapshot;
}
