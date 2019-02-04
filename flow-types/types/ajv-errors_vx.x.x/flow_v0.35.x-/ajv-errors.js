declare module 'ajv-errors' {
        import type {
          Ajv
        } from 'ajv';

	declare module.exports: typeof AjvErrors

	declare function AjvErrors(ajv: Ajv, options?: {}): Ajv

    }
