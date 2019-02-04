declare module 'spdx-correct' {
        declare function spdxCorrect(identifier: string): string | null

	declare module.exports: typeof spdxCorrect

    }
