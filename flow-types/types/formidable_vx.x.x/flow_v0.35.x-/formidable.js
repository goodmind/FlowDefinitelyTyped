declare module 'formidable' {
        declare export class IncomingForm mixins events.EventEmitter {
encoding: string;
uploadDir: string;
keepExtensions: boolean;
maxFileSize: number;
maxFieldsSize: number;
maxFields: number;
hash: string | boolean;
multiples: boolean;
type: string;
bytesReceived: number;
bytesExpected: number;
onPart: (part: Part) => void;
handlePart(part: Part): void;
parse(
req: http.IncomingMessage,
callback?: (err: any, fields: Fields, files: Files) => any): void
}
	declare export interface Fields {
[key: string]: string | Array<string>
} 
	declare export interface Files {
[key: string]: File
} 
	declare export type Part = {
headers: {
[key: string]: string
},
name: string,
filename?: string,
mime?: string
} & stream.Stream

	declare export interface File {
size: number,
path: string,
name: string,
type: string,
lastModifiedDate?: Date,
hash?: string,
toJSON(): Object
} 
    }
