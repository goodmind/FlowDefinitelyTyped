declare module 'schema-registry' {
        declare export interface RegistryClientConfig {
host: string,
port: number,
protocol?: string,
logger?: {[key: string]: any},
type?: string
} 
	declare export interface AvroSchemaResponseInterface {
subject: string,
version: number,
id: number,
schema: any
} 
	declare export type RegistryRequest = Promise<AvroSchemaResponseInterface>;
	declare export class LivingAvroSchema mixins RegistryClient {
fetch: (poll?: boolean) => RegistryRequest;
toBuffer: (object: {[key: string]: any}) => Buffer;
fromBuffer: (buffer: Buffer) => any;
on: (...args: any[]) => void;
removeListener: (...args: any[]) => void;
stop: () => void;
constructor(subject: string, version: string, config: RegistryClientConfig): this
}
	declare export class RegistryClient  {
host: string;
port: number;
protocol: string;
type: string;
logger: {[key: string]: any};
request: (options: {[key: string]: any}, expectedStatusCode: number) => RegistryRequest;
isAlive: () => RegistryRequest;
registerSubjectVersion: (subject: string, schema: {[key: string]: any}) => RegistryRequest;
getVersionsForSubject: (subject: string) => RegistryRequest;
getConfig: () => RegistryRequest;
setConfig: (config: {[key: string]: any}) => RegistryRequest;
setSubjectConfig: (subject: string, config: {[key: string]: any}) => RegistryRequest;
getSubjectConfig: (subject: string) => RegistryRequest;
getSchemaById: (id: number) => RegistryRequest;
getSubjects: () => RegistryRequest;
getSubjectSchemaForVersion: (subject: string, version: number) => RegistryRequest;
getLatestSubjectSchema: (subject: string) => RegistryRequest;
checkSubjectRegistration: (subject: string, schema: {[key: string]: any}) => RegistryRequest;
constructor(config: RegistryClientConfig): this
}
    }
