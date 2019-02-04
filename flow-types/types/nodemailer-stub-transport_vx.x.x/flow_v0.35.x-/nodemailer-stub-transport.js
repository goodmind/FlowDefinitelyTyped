declare module 'nodemailer-stub-transport' {
        import typeof * as nodemailer from 'nodemailer';

	
/**
 * Options.
 * @interface
 */
declare export interface StubTransportStatic$Options {

/**
 * Specifies a custom error.
 * @type {any}
 */
error?: any,

/**
 * Value that indicates if the BCC addresses must be included in generated message.
 * @type {boolean}
 */
keepBcc?: boolean
} 
	
/**
 * Creates a stub transport.
 * @param {StubTransportStatic$Options} options Options.
 * @return {Transport} The stub transport.
 */
declare function stubTransport(
options?: StubTransportStatic$StubTransportStatic$Options): nodemailer.Transport

	declare module.exports: typeof stubTransport

    }
