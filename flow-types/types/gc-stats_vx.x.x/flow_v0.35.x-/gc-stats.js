declare module 'gc-stats' {
        import type {
          EventEmitter
        } from 'events';

	declare interface GCStats$MemoryStatistics {
totalHeapSize: number,
totalHeapExecutableSize: number,
usedHeapSize: number,
heapSizeLimit: number,
totalPhysicalSize: number,
totalAvailableSize: number,
mallocedMemory: number,
peakMallocedMemory: number
} 

declare interface GCStats$GCStatistics {
startTime: number,
endTime: number,
pause: number,
pauseMS: number,
gctype: 1
| 2
| 4
| 8
| 15,
before: GCStats$MemoryStatistics,
after: GCStats$MemoryStatistics,
diff: GCStats$MemoryStatistics
} 
	declare function GCStats(): EventEmitter

	declare module.exports: typeof GCStats

    }
