declare module 'mongoose' {
        declare export interface SequenceOptions {
inc_field: string,
id?: string,
reference_fields?: Array<string>,
disable_hooks?: boolean,
collection_name?: string
} 
	declare export type SequenceDocument = {
setNext(sequenceId: string, callback: (err: any, res: SequenceDocument) => void): void
} & Document

	declare export type SequenceSchema = {
plugin(
plugin: (schema: SequenceSchema, options: SequenceOptions) => void,
options: SequenceOptions): this,
plugin(plugin: (schema: Schema, options?: Object) => void, opts?: Object): this
} & Schema

    }
declare module 'mongoose-sequence' {
        declare var _: (schema: mongoose.Schema, options?: Object) => void;
	declare module.exports: typeof _

    }
