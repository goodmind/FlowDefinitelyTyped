declare module 'winston-dynamodb' {
        import type {
          TransportInstance
        } from 'winston';

	declare export interface DynamoDBTransportOptions {
useEnvironment?: boolean,
accessKeyId?: string,
secretAccessKey?: string,
region?: string,
tableName: string,
level: string,
dynamoDoc?: boolean
} 
	declare export type DynamoDBTransportInstance = {
new (options?: DynamoDBTransportOptions): DynamoDBTransportInstance
} & TransportInstance

	declare export class DynamoDB mixins winston.Transport, DynamoDBTransportInstance {
regions: string[];
name: string;
level: string;
db: any;
AWS: any;
region: string;
tableName: string;
dynamoDoc: boolean;
constructor(options?: DynamoDBTransportOptions): this;
log(level: any, msg: any, meta: any, callback: any): any
}
	declare module 'winston' {
        declare interface Transports {
DynamoDB: DynamoDB
} 
    }

    }
