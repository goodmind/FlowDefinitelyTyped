declare module 'winston-syslog' {
        import typeof * as Transport from 'winston-transport';

	import typeof * as dgram from 'dgram';

	import typeof * as net from 'net';

	declare export type SyslogTransportOptions = {
host?: string,
port?: number,
path?: string,
protocol?: string,
pid?: number,
facility?: string,
localhost?: string,
type?: string,
app_name?: string,
eol?: string
} & Transport.TransportStreamOptions

	declare export type SyslogTransportInstance = {
producer: any,
socket: dgram.Socket | net.Socket,
connect(callback: (err: (true | null)) => any): void,
new (options?: SyslogTransportOptions): SyslogTransportInstance
} & Transport

	declare export var Syslog: SyslogTransportInstance;
    }
