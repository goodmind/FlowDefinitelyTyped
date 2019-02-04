declare module 'jest-image-snapshot' {
        
/**
 * Options to be passed to the 'pixelmatch' image diffing function.
 */
declare export interface PixelmatchOptions {

/**
 * Matching threshold, ranges from 0 to 1. Smaller values make the comparison more sensitive. 0.1 by default.
 */
+threshold?: number,

/**
 * If true, disables detecting and ignoring anti-aliased pixels. false by default.
 */
+includeAA?: boolean
} 
	declare export interface MatchImageSnapshotOptions {

/**
 * Custom config passed to 'pixelmatch'
 */
customDiffConfig?: PixelmatchOptions,

/**
 * Custom snapshots directory.
 * Absolute path of a directory to keep the snapshot in.
 */
customSnapshotsDir?: string,

/**
 * A custom name to give this snapshot. If not provided, one is computed automatically.
 */
customSnapshotIdentifier?: string,

/**
 * Removes coloring from the console output, useful if storing the results to a file.
 * Defaults to false.
 */
noColors?: boolean,

/**
 * Sets the threshold that would trigger a test failure based on the failureThresholdType selected. This is different
 * to the customDiffConfig.threshold above - the customDiffConfig.threshold is the per pixel failure threshold, whereas
 * this is the failure threshold for the entire comparison.
 * Defaults to 0.
 */
failureThreshold?: number,

/**
 * Sets the type of threshold that would trigger a failure.
 * Defaults to 'pixel'.
 */
failureThresholdType?: "pixel" | "percent"
} 
	
/**
 * Function to be passed to jest's expect.extend.
 * Example:
 *    import { toMatchImageSnapshot } from 'jest-image-snapshot';
 *    expect.extend({ toMatchImageSnapshot });
 */
declare export function toMatchImageSnapshot(): {
message(): string,
pass: boolean
}

	
/**
 * Configurable function that can be passed to jest's expect.extend.
 * Example:
 *    import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
 *    const toMatchImageSnapshot = configureToMatchImageSnapshot({ noColors: true });
 *    expect.extend({ toMatchImageSnapshot });
 */
declare export function configureToMatchImageSnapshot(options: MatchImageSnapshotOptions): () => {
message(): string,
pass: boolean
}

	declare module 'global' {
        declare interface jest$Matchers<R> {
toMatchImageSnapshot(): R
} 
    }

    }
