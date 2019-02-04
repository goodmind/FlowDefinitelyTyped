declare module 'path-parse' {
        import type {
          ParsedPath
        } from 'path';

	declare var parse: (src: string) => ParsedPath;
	declare module.exports: typeof parse

    }
