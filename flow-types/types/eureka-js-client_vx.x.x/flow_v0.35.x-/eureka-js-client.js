declare module 'eureka-js-client' {
        declare export class Eureka  {
constructor(config: EurekaClient$EurekaClient$EurekaConfig | EurekaClient$EurekaClient$EurekaYmlConfig): this;
start(cb?: (err: Error, ...rest: any[]) => void): void;
stop(cb?: (err: Error, ...rest: any[]) => void): void;
getInstancesByAppId(appId: string): EurekaClient$EurekaClient$EurekaInstanceConfig[];
getInstancesByVipAddress(vidAddress: string): EurekaClient$EurekaClient$EurekaInstanceConfig[]
}
	declare type EurekaClient$InstanceStatus = "UP"
| "DOWN"
| "STARTING"
| "OUT_OF_SERVICE"
| "UNKNOWN";

declare type EurekaClient$ActionType = "ADDED" | "MODIFIED" | "DELETED";

declare type EurekaClient$DataCenterName = "Netflix" | "Amazon" | "MyOwn";

declare interface EurekaClient$EurekaConfig {
instance: EurekaClient$EurekaInstanceConfig,
eureka: EurekaClient$EurekaClientConfig
} 

declare interface EurekaClient$EurekaInstanceConfig {
app: string,
hostName: string,
ipAddr: string,
vipAddress: string,
dataCenterInfo: EurekaClient$DataCenterInfo,
port?: number | EurekaClient$PortWrapper | EurekaClient$LegacyPortWrapper,
instanceId?: string,
appGroupName?: string,
sid?: string,
securePort?: number | EurekaClient$PortWrapper | EurekaClient$LegacyPortWrapper,
homePageUrl?: string,
statusPageUrl?: string,
healthCheckUrl?: string,
secureHealthCheckUrl?: string,
secureVipAddress?: string,
countryId?: number,
status?: EurekaClient$InstanceStatus,
overriddenstatus?: EurekaClient$InstanceStatus,
leaseInfo?: EurekaClient$LeaseInfo,
isCoordinatingDiscoveryServer?: boolean,
lastUpdatedTimestamp?: number,
lastDirtyTimestamp?: number,
actionType?: EurekaClient$ActionType,
metadata?: {
[index: string]: string
}
} 

declare interface EurekaClient$EurekaClientConfig {
host: string,
port: number,
heartbeatInterval?: number,
registryFetchInterval?: number,
maxRetries?: number,
requestRetryDelay?: number,
fetchRegistry?: boolean,
filterUpInstances?: boolean,
servicePath?: string,
ssl?: boolean,
useDns?: boolean,
preferSameZone?: boolean,
clusterRefreshInterval?: boolean,
fetchMetadata?: boolean,
registerWithEureka?: boolean,
useLocalMetadata?: boolean,
preferIpAddress?: boolean,
shouldUseDelta?: boolean,
logger?: {
warn: (...args: any[]) => void,
info: (...args: any[]) => void,
debug: (...args: any[]) => void,
error: (...args: any[]) => void
}
} 

declare interface EurekaClient$EurekaYmlConfig {
cwd: string,
filename?: string
} 

declare interface EurekaClient$LegacyPortWrapper {
"$": number,
"@enabled": boolean
} 

declare interface EurekaClient$PortWrapper {
enabled: boolean,
port: number
} 

declare interface EurekaClient$LeaseInfo {
renewalIntervalInSecs?: number,
durationInSecs?: number,
registrationTimestamp?: number,
lastRenewalTimestamp?: number,
evictionTimestamp?: number,
serviceUpTimestamp?: number
} 

declare interface EurekaClient$DataCenterInfo {
name: EurekaClient$DataCenterName,
"@class"?: string
} 
    }
