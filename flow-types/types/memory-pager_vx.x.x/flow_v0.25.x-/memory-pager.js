declare module "memory-pager" {
  declare module.exports: typeof Pager;

  declare var Pager: Pager;
  declare interface Pager {
    /**
     * Create a new pager.
     * @param pageSize defaults to 1024.
     */
    (pageSize?: number): Pager$Pager$PagerInstance;

    /**
     * Create a new pager.
     * @param pageSize defaults to 1024.
     */
    new(pageSize?: number): Pager$Pager$PagerInstance;
  }
  declare interface Pager$PagerInstance {
    /**
     * Get a page. The page will be allocated at first access.
     * @param pageNumber
     * @param noAllocate will make the method return `undefined` if no page has been allocated already
     */
    get(pageNumber: number, noAllocate?: false): Pager$Page;
    get(pageNumber: number, noAllocate: true): Pager$Page | void;

    /**
     * Explicitly set the buffer for a page.
     */
    set(pageNumber: number, buffer: Buffer): void;

    /**
     * Mark a page as updated.
     */
    updated(page: Pager$Page): void;

    /**
     * Get the last page that was updated.
     */
    lastUpdate(): Pager$Page | null;

    /**
     * Concat all pages allocated pages into a single buffer.
     */
    toBuffer(): Buffer;
  }

  declare interface Pager$Page {
    offset: number;
    buffer: Buffer;
  }
}
