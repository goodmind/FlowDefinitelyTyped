declare module 'mongoose-unique-validator' {
        import type {
          Schema
        } from 'mongoose';

	declare module.exports: typeof mongooseUniqueValidator

	declare function mongooseUniqueValidator(schema: Schema, options?: any): void

	
    }
