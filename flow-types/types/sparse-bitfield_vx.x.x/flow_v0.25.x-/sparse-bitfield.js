declare module "sparse-bitfield" {
  import type { PagerInstance } from "memory-pager";

  declare module.exports: typeof BitField;

  declare var BitField: BitField;
  declare interface BitField {
    (
      bufferOrOptions?: BitField$BitField$Options | Buffer
    ): BitField$BitField$BitFieldInstance;
    new(
      bufferOrOptions?: BitField$BitField$Options | Buffer
    ): BitField$BitField$BitFieldInstance;
  }
  declare interface BitField$Options {
    /**
     * @default 0
     */
    pageOffset?: number;

    /**
     * How big should the partial buffers be.
     * @default 1024
     */
    pageSize?: number;

    /**
     * A pre-configured Pager instance.
     */
    pages?: PagerInstance;

    /**
     * An existing bitfield.
     */
    buffer?: Buffer;

    /**
     * Track when pages are being updated in the pager.
     * @default false
     */
    trackUpdates?: boolean;
  }

  declare interface BitField$BitFieldInstance {
    /**
     * A `memory-pager` instance that is managing the underlying memory.
     * If you set `trackUpdates` to `true` in the constructor you can use `.lastUpdate()` on this instance
     * to get the last updated memory page.
     */
    +pages: PagerInstance;

    /**
     * Get the value of a bit.
     */
    get(index: number): boolean;

    /**
     * Get the value of a byte.
     */
    getByte(index: number): number;

    /**
     * Set a bit to true or false.
     */
    set(index: number, value: boolean): boolean;

    /**
     * Set a byte to a new value.
     */
    setByte(index: number, byte: number): boolean;

    /**
     * Get a single buffer representing the entire bitfield.
     */
    toBuffer(): Buffer;
  }
}
