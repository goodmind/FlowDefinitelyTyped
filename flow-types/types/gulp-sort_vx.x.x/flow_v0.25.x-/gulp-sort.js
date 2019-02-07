declare module "gulp-sort" {
  declare interface IOptions {
    /**
     * A function to compare two files.
     * Returns:
     * -1 if file1 should be before file2,
     * 0 if file1 is equivalent to file2, and
     * 1 if file1 should be after file2
     */
    comparator?: IComparatorFunction;

    /**
     * Whether to sort in ascending order, default is true
     */
    asc?: boolean;
  }
  declare interface IComparatorFunction {
    /**
     * A function to compare two files.
     * Returns:
     * -1 if file1 should be before file2,
     * 0 if file1 is equivalent to file2, and
     * 1 if file1 should be after file2
     */
    (file1: gulpUtil.File, file2: gulpUtil.File): number;
  }

  /**
   * Sort files in stream by path or any custom sort comparator
   */
  declare function gulpSort(): NodeJS.ReadWriteStream;

  declare function gulpSort(
    comparator: IComparatorFunction
  ): NodeJS.ReadWriteStream;

  declare function gulpSort(options: IOptions): NodeJS.ReadWriteStream;

  declare module.exports: typeof gulpSort;
}
