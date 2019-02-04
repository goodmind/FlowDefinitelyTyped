declare module 'joigoose' {
        import typeof * as Mongoose from 'mongoose';

	import typeof * as Joi from 'joi';

	declare interface Joigoose$Joigoose {
convert(schema: Joi.Schema): Mongoose.Schema
} 
	declare function Joigoose(
mongoose: Mongoose.Mongoose,
joiOptions?: Joi.ValidationOptions): Joigoose$Joigoose.Joigoose$Joigoose

	declare module.exports: typeof Joigoose$Joigoose

    }
