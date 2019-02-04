declare module 'shuffle-seed' {
        declare export function shuffle<T>(arr: $ReadOnlyArray<T>, seed: any): T[]

	declare export function unshuffle<T>(arr: $ReadOnlyArray<T>, seed: any): T[]

    }
