declare module "scc-broker-client" {
  import type { Secret } from "jsonwebtoken";

  declare export interface MappingEngine {
    setSites(sites: string[]): void;
    getSites(): string[];
    findSite(key: string): string;
  }
  declare export interface SCCBrokerClientOptions {
    stateServerReconnectRandomness?: number;
    authKey?: Secret;
    mappingEngine?: "skeletonRendezvous" | "simple" | MappingEngine;
    clientPoolSize?: number;
    stateServerHost: string;
    stateServerPort?: number;
    stateServerConnectTimeout?: number;
    stateServerAckTimeout?: number;
    noErrorLogging?: boolean;
    brokerRetryDelay?: number;
  }
  declare export function attach(
    broker: SCBroker,
    options: SCCBrokerClientOptions
  ): ClusterBrokerClient;
}
