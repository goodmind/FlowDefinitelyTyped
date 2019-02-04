declare module 'network-interfaces' {
        declare export function toIp(interfaceName: string, options: {}): string

	declare export function toIps(interfaceName: string, options: {}): string[]

	declare export function fromIp(ip: string, options: {}): string

	declare export function getInterface(options: {}): string

	declare export function getInterfaces(options: {}): string[]

    }
