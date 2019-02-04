declare module 'lodash.iserror' {
        import type {
          isError
        } from 'lodash';

	declare module.exports: typeof isError

    }
