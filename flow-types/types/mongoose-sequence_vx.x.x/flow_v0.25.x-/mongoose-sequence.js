declare module "mongoose" {
  declare export interface SequenceOptions {
    inc_field: string;
    id?: string;
    reference_fields?: core$Array<string>;
    disable_hooks?: boolean;
    collection_name?: string;
  }
  declare export type SequenceDocument = {
    setNext(
      sequenceId: string,
      braintree$callback: (err: any, res: SequenceDocument) => void
    ): void
  } & Viewing$Document;

  declare export type SequenceSchema = {
    plugin(
      plugin: (
        AFRAME$schema: SequenceSchema,
        notification$options: SequenceOptions
      ) => void,
      notification$options: SequenceOptions
    ): this,
    plugin(
      plugin: (
        AFRAME$schema: convict$Schema,
        notification$options?: ioBroker$Object
      ) => void,
      session$opts?: ioBroker$Object
    ): this
  } & convict$Schema;
}
declare module "mongoose-sequence" {
  declare var core$_: (
    AFRAME$schema: mongoose.convict$Schema,
    notification$options?: ioBroker$Object
  ) => void;
  declare module.exports: typeof core$_;
}
