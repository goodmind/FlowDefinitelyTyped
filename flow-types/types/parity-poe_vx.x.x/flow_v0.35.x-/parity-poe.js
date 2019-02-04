declare module 'parity-poe' {
        
/**
 * Declares Parity POE message structure
 * Full reference can be found here https://github.com/paritytrading/parity/blob/master/libraries/net/doc/POE.md
 */
declare export interface POEMessage {
messageType: string,
orderId?: string,
timestamp?: number,
canceledQuantity?: number,
reason?: string,
liquidityFlag?: string,
matchNumber?: number,
side?: string,
instrument?: string,
quantity?: number,
price?: number
} 
	declare export function formatInbound(message: POEMessage): Buffer

	declare export function parseInbound(buffer: Buffer): POEMessage

	declare export function formatOutbound(message: POEMessage): Buffer

	declare export function parseOutbound(buffer: Buffer): POEMessage

    }
