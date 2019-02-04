declare module 'express-correlation-id' {
        import type {
          RequestHandler
        } from 'express-serve-static-core';

	declare var correlator: {
(options?: {
header?: string
}): RequestHandler,
getId(): string | void
};
	declare export default typeof correlator

    }
