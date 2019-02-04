declare module 'mali-compose' {
        import type {
          Context
        } from 'mali';

	declare function compose(
middleware: $ReadOnlyArray<(ctx: Context, next: () => Promise<void>) => Promise<void>>): (context: Context, next: () => Promise<void>) => Promise<void>

	declare module.exports: typeof compose

    }
