declare module "localtunnel" {
  declare export default typeof localtunnel;

  declare function localtunnel(
    port: number,
    opt: localtunnel$TunnelConfig,
    callback: localtunnel$TunnelCallback
  ): localtunnel$Tunnel;

  declare function localtunnel(
    port: number,
    callback: localtunnel$TunnelCallback
  ): localtunnel$Tunnel;

  declare type localtunnel$TunnelCallback = (
    err: string,
    tunnel?: localtunnel$Tunnel
  ) => void;

  declare interface localtunnel$TunnelConfig {
    host?: string;
    subdomain?: string;
    port?: number;
    local_host?: string;
  }

  declare interface localtunnel$Tunnel {
    url: string;
    tunnel_cluster: localtunnel$TunnelCluster;
    open(err: string, tunnel?: localtunnel$Tunnel): void;
    close(): void;
  }

  declare interface localtunnel$TunnelCluster {
    domain: string;
  }
}
