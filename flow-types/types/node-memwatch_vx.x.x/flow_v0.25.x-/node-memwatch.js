declare module "node-memwatch" {
  import type { EventEmitter } from "events";

  declare module.exports: typeof memwatch;

  declare var memwatch: MemWatch;
  declare type MemWatch = {
    on(eventName: "leak", callback: (event: LeakInformation) => void): this,
    on(eventName: "stats", callback: (event: StatsInformation) => void): this,

    /**
     * Force V8 to do a full GC and heap compaction.
     *
     * It's intended to be used for debugging. Calling it in production is highly discouraged.
     */
    gc(): void,
    HeapDiff: typeof HeapDiff
  } & EventEmitter;

  declare interface StatsInformation {
    current_base: number;
    estimated_base: number;
    heap_compactions: number;
    max: number;
    min: number;
    num_full_gc: number;
    num_inc_gc: number;
    usage_trend: number;
  }
  declare interface LeakInformation {
    /**
     * Amount of heap growth in bytes.
     */
    growth: number;

    /**
     * Human-readable description.
     */
    reason: string;
  }

  /**
   * Compare the state of your heap between two points in time, telling you what has been allocated, and what has been released.
   */
  declare class HeapDiff {
    constructor(): this;

    /**
     * Compute the diff.
     */
    end: () => HeapDiffInformation;
  }
  declare interface HeapDiffInformation {
    before: HeapDiffSnapshot;
    after: HeapDiffSnapshot;
    change: HeapDiffChange;
  }
  declare interface HeapDiffSnapshot {
    nodes: number;
    size_bytes: number;
    size: string;
  }
  declare interface HeapDiffChange {
    size_bytes: number;
    size: string;
    freed_nodes: number;
    allocated_nodes: number;
    details: HeapDiffDetail[];
  }
  declare interface HeapDiffDetail {
    what: string;
    size_bytes: number;
    size: string;
    "+": number;
    "-": number;
  }
}
