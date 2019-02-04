declare module 'serialport' {
        import typeof * as Stream from 'stream';

	declare class SerialPort mixins Stream.Duplex {
constructor(path: string, callback?: SerialPort$SerialPort$ErrorCallback): this;
constructor(path: string, options?: SerialPort$SerialPort$OpenOptions, callback?: SerialPort$SerialPort$ErrorCallback): this;
baudRate: number;
binding: SerialPort$SerialPort$BaseBinding;
isOpen: boolean;
path: string;
open(callback?: SerialPort$SerialPort$ErrorCallback): void;
update(
options: SerialPort$SerialPort$UpdateOptions,
callback?: SerialPort$SerialPort$ErrorCallback): void;
write(
data: string | number[] | Buffer,
callback?: (error: any, bytesWritten: number) => void): boolean;
write(
buffer: string | number[] | Buffer,
encoding?: "ascii"
| "utf8"
| "utf16le"
| "ucs2"
| "base64"
| "binary"
| "hex",
callback?: (error: any, bytesWritten: number) => void): boolean;
read(size?: number): string | Buffer | null;
close(callback?: (error: Error) => void): void;
set(
options: SerialPort$SerialPort$SetOptions,
callback?: SerialPort$SerialPort$ErrorCallback): void;
get(callback?: SerialPort$SerialPort$ModemBitsCallback): void;
flush(callback?: SerialPort$SerialPort$ErrorCallback): void;
drain(callback?: SerialPort$SerialPort$ErrorCallback): void;
pause(): this;
resume(): this;
on(event: string, callback: (data?: any) => void): this;
static Binding: SerialPort$SerialPort$BaseBinding;
static list(
callback?: SerialPort$SerialPort$ListCallback): Promise<SerialPort$SerialPort$PortInfo[]>
}
	declare type SerialPort$ErrorCallback = (error: Error) => void;

declare type SerialPort$ModemBitsCallback = (error: Error, status: {
cts: boolean,
dsr: boolean,
dcd: boolean
}) => void;

declare type SerialPort$ListCallback = (error: Error, port: any[]) => void;

declare interface SerialPort$OpenOptions {
autoOpen?: boolean,
baudRate?: 115200
| 57600
| 38400
| 19200
| 9600
| 4800
| 2400
| 1800
| 1200
| 600
| 300
| 200
| 150
| 134
| 110
| 75
| 50
| number,
dataBits?: 8 | 7 | 6 | 5,
highWaterMark?: number,
lock?: boolean,
stopBits?: 1 | 2,
parity?: "none"
| "even"
| "mark"
| "odd"
| "space",
rtscts?: boolean,
xon?: boolean,
xoff?: boolean,
xany?: boolean,
binding?: SerialPort$BaseBinding,
bindingOptions?: {
vmin?: number,
vtime?: number
}
} 

declare interface SerialPort$UpdateOptions {
baudRate?: 115200
| 57600
| 38400
| 19200
| 9600
| 4800
| 2400
| 1800
| 1200
| 600
| 300
| 200
| 150
| 134
| 110
| 75
| 50
| number
} 

declare interface SerialPort$SetOptions {
brk?: boolean,
cts?: boolean,
dsr?: boolean,
dtr?: boolean,
rts?: boolean
} 

declare interface SerialPort$PortInfo {
comName: string,
manufacturer?: string,
serialNumber?: string,
pnpId?: string,
locationId?: string,
productId?: string,
vendorId?: string
} 

declare class parsers$ByteLength mixins Stream.Transform {
constructor(options: {
length: number
}): this
}

declare class parsers$CCTalk mixins Stream.Transform {
constructor(): this
}

declare class parsers$Delimiter mixins Stream.Transform {
constructor(options: {
delimiter: string | Buffer | number[],
includeDelimiter?: boolean
}): this
}

declare class parsers$Readline mixins parsers$Delimiter {
constructor(options: {
delimiter: string | Buffer | number[],
encoding?: "ascii"
| "utf8"
| "utf16le"
| "ucs2"
| "base64"
| "binary"
| "hex"
}): this
}

declare class parsers$Ready mixins Stream.Transform {
constructor(options: {
delimiter: string | Buffer | number[]
}): this
}

declare class parsers$Regex mixins Stream.Transform {
constructor(options: {
regex: RegExp
}): this
}

declare type SerialPort$win32Binding = SerialPort$BaseBinding;

declare type SerialPort$darwinBinding = SerialPort$BaseBinding;

declare type SerialPort$linuxBinding = SerialPort$BaseBinding;

declare class SerialPort$BaseBinding  {
constructor(options: any): this;
open(path: string, options: SerialPort$OpenOptions): Promise<any>;
close(): Promise<any>;
read(data: Buffer, offset: number, length: number): Promise<any>;
write(data: Buffer): Promise<any>;
update(options?: SerialPort$UpdateOptions): Promise<any>;
set(options?: SerialPort$SetOptions): Promise<any>;
get(): Promise<any>;
flush(): Promise<any>;
drain(): Promise<any>;
static list(): Promise<SerialPort$PortInfo[]>
}
	declare module.exports: typeof SerialPort

    }
