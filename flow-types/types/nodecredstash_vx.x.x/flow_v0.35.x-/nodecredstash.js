declare module 'nodecredstash' {
        import typeof * as AWS from 'aws-sdk';

	declare interface CredstashConfig {
table?: string,
awsOpts?: AWS.KMS.ClientConfiguration,
dynamoOpts?: AWS.DynamoDB.ClientConfiguration,
kmsKey?: string,
kmsOpts?: AWS.KMS.ClientConfiguration
} 
	declare interface CredstashContext {
[key: string]: string
} 
	declare interface PutSecretOptions {
name: string,
secret: string,
context: CredstashContext,
digest?: string,
version?: number
} 
	declare interface Credstash {
getHighestVersion: (options: {
name: string
}) => Promise<AWS.DynamoDB.AttributeMap>,
incrementVersion: (options: {
name: string
}) => Promise<string>,
putSecret: (
options: PutSecretOptions) => Promise<AWS.DynamoDB.DocumentClient.PutItemOutput>,
decryptStash: (
stash: {
key: string
},
context?: CredstashContext) => Promise<AWS.KMS.DecryptResponse>,
getAllVersions: (
options: {
name: string,
context?: CredstashContext,
limit?: number
}) => Promise<Array<{
version: string,
secret: string
}>>,
getSecret: (
options: {
name: string,
context?: CredstashContext,
version?: number
}) => Promise<string>,
deleteSecrets: (
options: {
name: string
}) => Promise<AWS.DynamoDB.DocumentClient.DeleteItemOutput[]>,
deleteSecret: (
options: {
name: string,
version: number
}) => Promise<AWS.DynamoDB.DocumentClient.DeleteItemOutput>,
listSecrets: () => Promise<string[]>,
getAllSecrets: (
options: {
version?: number,
context?: CredstashContext,
startsWith?: string
}) => Promise<{
[key: string]: string
}>,
createDdbTable: () => Promise<void>
} 
	declare function Credstash(config: CredstashConfig): Credstash

	declare module.exports: typeof Credstash

    }
