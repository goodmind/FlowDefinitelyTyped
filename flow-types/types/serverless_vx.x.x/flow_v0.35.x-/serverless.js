declare module 'serverless' {
        declare interface Serverless$Options {
stage: string | null,
region: string | null,
noDeploy?: boolean
} 

declare interface Serverless$Config {
servicePath: string
} 

declare interface Serverless$FunctionDefinition {
name: string
} 

declare interface Serverless$Event {
eventName: string
} 
	declare class Serverless  {
constructor(config?: {}): this;
init(): Promise<any>;
run(): Promise<any>;
setProvider(name: string, provider: AwsProvider): null;
getProvider(name: string): AwsProvider;
getVersion(): string;
cli: {
log(message: string): null
};
providers: {};
utils: Utils;
variables: {};
yamlParser: YamlParser;
pluginManager: PluginManager;
config: Serverless$Serverless$Config;
serverlessDirPath: string;
service: Service;
version: string
}
	declare module.exports: typeof Serverless

    }
