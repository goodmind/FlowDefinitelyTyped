declare module 'parity-pmr' {
        
/**
 * Declares Parity PMR message structure
 * Full reference can be found here https://github.com/paritytrading/parity/blob/master/libraries/net/doc/PMR.md
 */
declare export interface PMRMessage {
messageType: string,
version?: number,
timestamp?: number,
username?: string,
orderNumber?: string,
side?: string,
instrument?: string,
quantity?: number,
price?: number,
canceledQuantity?: number,
matchNumber?: number,
restingOrderNumber?: number,
incomingOrderNumber?: number
} 
	declare export function format(message: PMRMessage): Buffer

	declare export function parse(buffer: Buffer): PMRMessage

    }
