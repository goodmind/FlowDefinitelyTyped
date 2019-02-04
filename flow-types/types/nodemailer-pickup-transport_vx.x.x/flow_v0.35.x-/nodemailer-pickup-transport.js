declare module 'nodemailer-pickup-transport' {
        declare export interface PickupTransport$Options {
directory: string
} 
	declare function PickupTransport(options: PickupTransport$PickupTransport$Options): nodemailer.Transport

	declare module.exports: typeof PickupTransport

    }
