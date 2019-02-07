declare module "dockerode" {
  import typeof * as stream from "stream";

  import typeof * as events from "events";

  declare class Dockerode$Container {
    constructor(modem: any, id: string): this;
    modem: any;
    id: string;
    inspect(
      options: {},
      callback: Callback<Dockerode$ContainerInspectInfo>
    ): void;
    inspect(callback: Callback<Dockerode$ContainerInspectInfo>): void;
    inspect(options?: {}): Promise<Dockerode$ContainerInspectInfo>;
    rename(options: {}, callback: Callback<any>): void;
    rename(options: {}): Promise<any>;
    update(options: {}, callback: Callback<any>): void;
    update(options: {}): Promise<any>;
    top(options: {}, callback: Callback<any>): void;
    top(callback: Callback<any>): void;
    top(options?: {}): Promise<any>;
    changes(callback: Callback<any>): void;
    changes(): Promise<any>;
    export(callback: Callback<NodeJS.ReadableStream>): void;
    export(): Promise<NodeJS.ReadableStream>;
    start(options: {}, callback: Callback<any>): void;
    start(callback: Callback<any>): void;
    start(options?: {}): Promise<any>;
    pause(options: {}, callback: Callback<any>): void;
    pause(callback: Callback<any>): void;
    pause(options?: {}): Promise<any>;
    unpause(options: {}, callback: Callback<any>): void;
    unpause(callback: Callback<any>): void;
    unpause(options?: {}): Promise<any>;
    exec(options: {}, callback: Callback<any>): void;
    exec(options: {}): Promise<any>;
    commit(options: {}, callback: Callback<any>): void;
    commit(callback: Callback<any>): void;
    commit(options?: {}): Promise<any>;
    stop(options: {}, callback: Callback<any>): void;
    stop(callback: Callback<any>): void;
    stop(options?: {}): Promise<any>;
    restart(options: {}, callback: Callback<any>): void;
    restart(callback: Callback<any>): void;
    restart(options?: {}): Promise<any>;
    kill(options: {}, callback: Callback<any>): void;
    kill(callback: Callback<any>): void;
    kill(options?: {}): Promise<any>;
    resize(options: {}, callback: Callback<any>): void;
    resize(callback: Callback<any>): void;
    resize(options?: {}): Promise<any>;
    wait(callback: Callback<any>): void;
    wait(): Promise<any>;
    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;

    /**
     * Deprecated since RAPI v1.20
     */
    copy(options: {}, callback: Callback<any>): void;

    /**
     * Deprecated since RAPI v1.20
     */
    copy(callback: Callback<any>): void;

    /**
     * Deprecated since RAPI v1.20
     */
    copy(options?: {}): Promise<any>;
    getArchive(options: {}, callback: Callback<NodeJS.ReadableStream>): void;
    getArchive(options: {}): Promise<NodeJS.ReadableStream>;
    infoArchive(options: {}, callback: Callback<any>): void;
    infoArchive(options: {}): Promise<any>;

    /**
     * @param file Filename (will read synchronously), Buffer or stream
     */
    putArchive(
      file: string | Buffer | NodeJS.ReadableStream,
      options: {},
      callback: Callback<NodeJS.WritableStream>
    ): void;
    putArchive(
      file: string | Buffer | NodeJS.ReadableStream,
      options: {}
    ): Promise<NodeJS.ReadWriteStream>;
    logs(
      options: Dockerode$ContainerLogsOptions,
      callback: Callback<NodeJS.ReadableStream>
    ): void;
    logs(callback: Callback<NodeJS.ReadableStream>): void;
    logs(
      options?: Dockerode$ContainerLogsOptions
    ): Promise<NodeJS.ReadableStream>;
    stats(options: {}, callback: Callback<Dockerode$ContainerStats>): void;
    stats(callback: Callback<Dockerode$ContainerStats>): void;
    stats(options?: {}): Promise<Dockerode$ContainerStats>;
    attach(options: {}, callback: Callback<NodeJS.ReadWriteStream>): void;
    attach(options: {}): Promise<NodeJS.ReadWriteStream>;
  }

  declare class Dockerode$Image {
    constructor(modem: any, name: string): this;
    modem: any;
    id: string;
    inspect(callback: Callback<Dockerode$ImageInspectInfo>): void;
    inspect(): Promise<Dockerode$ImageInspectInfo>;
    history(callback: Callback<any>): void;
    history(): Promise<any>;
    get(callback: Callback<NodeJS.ReadableStream>): void;
    get(): Promise<NodeJS.ReadableStream>;
    push(options: {}, callback: Callback<NodeJS.ReadableStream>): void;
    push(callback: Callback<NodeJS.ReadableStream>): void;
    push(options?: {}): Promise<NodeJS.ReadableStream>;
    tag(options: {}, callback: Callback<any>): void;
    tag(callback: Callback<any>): void;
    tag(options?: {}): Promise<any>;
    remove(options: {}, callback: Callback<Dockerode$ImageRemoveInfo>): void;
    remove(callback: Callback<Dockerode$ImageRemoveInfo>): void;
    remove(options?: {}): Promise<any>;
  }

  declare class Dockerode$Volume {
    constructor(modem: any, name: string): this;
    modem: any;
    name: string;
    inspect(callback: Callback<Dockerode$VolumeInspectInfo>): void;
    inspect(): Promise<Dockerode$VolumeInspectInfo>;
    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;
  }

  declare class Dockerode$Service {
    constructor(modem: any, id: string): this;
    modem: any;
    id: string;
    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;
    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;
    update(options: {}, callback: Callback<any>): void;
    update(options: {}): Promise<any>;
    logs(
      options: Dockerode$ContainerLogsOptions,
      callback: Callback<NodeJS.ReadableStream>
    ): void;
    logs(callback: Callback<NodeJS.ReadableStream>): void;
    logs(
      options?: Dockerode$ContainerLogsOptions
    ): Promise<NodeJS.ReadableStream>;
  }

  declare class Dockerode$Task {
    constructor(modem: any, id: string): this;
    modem: any;
    id: string;
    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;
  }

  declare class Dockerode$Node {
    constructor(modem: any, id: string): this;
    modem: any;
    id: string;
    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;
    update(options: {}, callback: Callback<any>): void;
    update(callback: Callback<any>): void;
    update(options?: {}): Promise<any>;
    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;
  }

  declare class Dockerode$Plugin {
    constructor(modem: any, name: string, remote?: any): this;
    modem: any;
    name: string;
    remote: any;
    inspect(callback: Callback<Dockerode$PluginInspectInfo>): void;
    inspect(): Promise<Dockerode$PluginInspectInfo>;
    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;
    privileges(callback: Callback<any>): void;
    privileges(): Promise<any>;
    pull(options: {}, callback: Callback<any>): void;
    pull(options: {}): Promise<any>;
    enable(options: {}, callback: Callback<any>): void;
    enable(callback: Callback<any>): void;
    enable(options?: {}): Promise<any>;
    disable(options: {}, callback: Callback<any>): void;
    disable(callback: Callback<any>): void;
    disable(options?: {}): Promise<any>;
    push(options: {}, callback: Callback<any>): void;
    push(callback: Callback<any>): void;
    push(options?: {}): Promise<any>;
    configure(options: {}, callback: Callback<any>): void;
    configure(callback: Callback<any>): void;
    configure(options?: {}): Promise<any>;
    upgrade(auth: any, options: {}, callback: Callback<any>): void;
    upgrade(auth: any, callback: Callback<any>): void;
    upgrade(auth: any, options?: {}): Promise<any>;
  }

  declare class Dockerode$Secret {
    constructor(modem: any, id: string): this;
    modem: any;
    id: string;
    inspect(callback: Callback<Dockerode$SecretInfo>): void;
    inspect(): Promise<Dockerode$SecretInfo>;
    update(options: {}, callback: Callback<any>): void;
    update(callback: Callback<any>): void;
    update(options?: {}): Promise<any>;
    remove(options: {}, callback: Callback<any>): void;
    remove(callback: Callback<any>): void;
    remove(options?: {}): Promise<any>;
  }

  declare interface Dockerode$Network {
    Type: string;
  }

  declare class Dockerode$Exec {
    constructor(modem: any, id: string): this;
    modem: any;
    id: string;
    inspect(callback: Callback<any>): void;
    inspect(): Promise<any>;
    start(options: {}, callback: Callback<any>): void;
    start(options: {}): Promise<any>;
    resize(options: {}, callback: Callback<any>): void;
    resize(options: {}): Promise<any>;
  }

  declare interface Dockerode$ImageInfo {
    Id: string;
    ParentId: string;
    RepoTags: string[];
    RepoDigests?: string[];
    Created: number;
    Size: number;
    VirtualSize: number;
    Labels: {
      [label: string]: string
    };
  }

  declare interface Dockerode$ContainerInfo {
    Id: string;
    Names: string[];
    Dockerode$Image: string;
    ImageID: string;
    Command: string;
    Created: number;
    Ports: Dockerode$Port[];
    Labels: {
      [label: string]: string
    };
    State: string;
    Status: string;
    Dockerode$HostConfig: {
      NetworkMode: string
    };
    NetworkSettings: {
      Networks: {
        [networkType: string]: Dockerode$NetworkInfo
      }
    };
  }

  declare interface Dockerode$Port {
    IP: string;
    PrivatePort: number;
    PublicPort: number;
    Type: string;
  }

  declare interface Dockerode$NetworkInfo {
    Dockerode$IPAMConfig?: any;
    Links?: any;
    Aliases?: any;
    NetworkID: string;
    EndpointID: string;
    Gateway: string;
    IPAddress: string;
    IPPrefixLen: number;
    IPv6Gateway: string;
    GlobalIPv6Address: string;
    GlobalIPv6PrefixLen: number;
    MacAddress: string;
  }

  declare interface Dockerode$NetworkInspectInfo {
    Id: string;
    Name: string;
    Driver: string;
    Created: string;
    Scope: string;
    EnableIPv6: boolean;
    Internal: boolean;
    Attachable: boolean;
    Ingress: boolean;
  }

  declare interface Dockerode$VolumeInspectInfo {
    Name: string;
    Driver: string;
    Mountpoint: string;
    Status?: {
      [key: string]: string
    };
    Labels: {
      [key: string]: string
    };
    Scope: "local" | "global";
    Options: {
      [key: string]: string
    } | null;
    UsageData?: {
      Size: number,
      RefCount: number
    } | null;
  }

  declare interface Dockerode$ContainerInspectInfo {
    Id: string;
    Created: string;
    Path: string;
    Dockerode$Args: string[];
    State: {
      Status: string,
      Running: boolean,
      Paused: boolean,
      Restarting: boolean,
      OOMKilled: boolean,
      Dead: boolean,
      Pid: number,
      ExitCode: number,
      Error: string,
      StartedAt: string,
      FinishedAt: string
    };
    Dockerode$Image: string;
    ResolvConfPath: string;
    HostnamePath: string;
    HostsPath: string;
    LogPath: string;
    Name: string;
    RestartCount: number;
    Driver: string;
    MountLabel: string;
    ProcessLabel: string;
    AppArmorProfile: string;
    ExecIDs?: any;
    Dockerode$HostConfig: Dockerode$HostConfig;
    GraphDriver: {
      Name: string,
      Data: {
        DeviceId: string,
        DeviceName: string,
        DeviceSize: string
      }
    };
    Mounts: Array<{
      Source: string,
      Destination: string,
      Mode: string,
      RW: boolean,
      Propagation: string
    }>;
    Config: {
      Hostname: string,
      Domainname: string,
      Dockerode$User: string,
      AttachStdin: boolean,
      AttachStdout: boolean,
      AttachStderr: boolean,
      ExposedPorts: {
        [portAndProtocol: string]: {}
      },
      Tty: boolean,
      OpenStdin: boolean,
      StdinOnce: boolean,
      Env: string[],
      Cmd: string[],
      Dockerode$Image: string,
      Volumes: {
        [volume: string]: {}
      },
      WorkingDir: string,
      Entrypoint?: any,
      OnBuild?: any,
      Labels: {
        [label: string]: string
      }
    };
    NetworkSettings: {
      Bridge: string,
      SandboxID: string,
      HairpinMode: boolean,
      LinkLocalIPv6Address: string,
      LinkLocalIPv6PrefixLen: number,
      Ports: {
        [portAndProtocol: string]: Array<{
          HostIp: string,
          HostPort: string
        }>
      },
      SandboxKey: string,
      SecondaryIPAddresses?: any,
      SecondaryIPv6Addresses?: any,
      EndpointID: string,
      Gateway: string,
      GlobalIPv6Address: string,
      GlobalIPv6PrefixLen: number,
      IPAddress: string,
      IPPrefixLen: number,
      IPv6Gateway: string,
      MacAddress: string,
      Networks: {
        [type: string]: {
          Dockerode$IPAMConfig?: any,
          Links?: any,
          Aliases?: any,
          NetworkID: string,
          EndpointID: string,
          Gateway: string,
          IPAddress: string,
          IPPrefixLen: number,
          IPv6Gateway: string,
          GlobalIPv6Address: string,
          GlobalIPv6PrefixLen: number,
          MacAddress: string
        }
      },
      Dockerode$Node?: {
        ID: string,
        IP: string,
        Addr: string,
        Name: string,
        Cpus: number,
        Memory: number,
        Labels: any
      }
    };
  }

  declare interface Dockerode$NetworkStats {
    [name: string]: {
      rx_bytes: number,
      rx_dropped: number,
      rx_errors: number,
      rx_packets: number,
      tx_bytes: number,
      tx_dropped: number,
      tx_errors: number,
      tx_packets: number
    };
  }

  declare interface Dockerode$CPUStats {
    cpu_usage: {
      percpu_usage: number[],
      usage_in_usermode: number,
      total_usage: number,
      usage_in_kernelmode: number
    };
    system_cpu_usage: number;
    online_cpus: number;
    throttling_data: {
      periods: number,
      throttled_periods: number,
      throttled_time: number
    };
  }

  declare interface Dockerode$MemoryStats {
    stats: {
      total_pgmajfault: number,
      cache: number,
      mapped_file: number,
      total_inactive_file: number,
      pgpgout: number,
      rss: number,
      total_mapped_file: number,
      writeback: number,
      unevictable: number,
      pgpgin: number,
      total_unevictable: number,
      pgmajfault: number,
      total_rss: number,
      total_rss_huge: number,
      total_writeback: number,
      total_inactive_anon: number,
      rss_huge: number,
      hierarchical_memory_limit: number,
      total_pgfault: number,
      total_active_file: number,
      active_anon: number,
      total_active_anon: number,
      total_pgpgout: number,
      total_cache: number,
      inactive_anon: number,
      active_file: number,
      pgfault: number,
      inactive_file: number,
      total_pgpgin: number
    };
    max_usage: number;
    usage: number;
    failcnt: number;
    limit: number;
  }

  declare interface Dockerode$ContainerStats {
    read: string;
    pid_stats: {
      current: number
    };
    networks: Dockerode$NetworkStats;
    memory_stats: Dockerode$MemoryStats;
    blkio_stats: {};
    cpu_stats: Dockerode$CPUStats;
    precpu_stats: Dockerode$CPUStats;
  }

  declare interface Dockerode$HostConfig {
    AutoRemove: boolean;
    Binds: string[];
    ContainerIDFile: string;
    Dockerode$LogConfig: {
      Type: string,
      Config: any
    };
    NetworkMode: string;
    PortBindings?: any;
    Dockerode$RestartPolicy: {
      Name: string,
      MaximumRetryCount: number
    };
    VolumeDriver: string;
    VolumesFrom?: any;
    CapAdd?: any;
    CapDrop?: any;
    Dns: any[];
    DnsOptions: any[];
    DnsSearch: any[];
    ExtraHosts?: any;
    IpcMode: string;
    Links?: any;
    OomScoreAdj: number;
    PidMode: string;
    Privileged: boolean;
    PublishAllPorts: boolean;
    ReadonlyRootfs: boolean;
    SecurityOpt?: any;
    UTSMode: string;
    ShmSize: number;
    ConsoleSize: number[];
    Isolation: string;
    CpuShares: number;
    CgroupParent: string;
    BlkioWeight: number;
    BlkioWeightDevice?: any;
    BlkioDeviceReadBps?: any;
    BlkioDeviceWriteBps?: any;
    BlkioDeviceReadIOps?: any;
    BlkioDeviceWriteIOps?: any;
    CpuPeriod: number;
    CpuQuota: number;
    CpusetCpus: string;
    CpusetMems: string;
    Devices?: any;
    DiskQuota: number;
    KernelMemory: number;
    Memory: number;
    MemoryReservation: number;
    MemorySwap: number;
    MemorySwappiness: number;
    OomKillDisable: boolean;
    PidsLimit: number;
    Ulimits?: any;
  }

  declare interface Dockerode$ImageInspectInfo {
    Id: string;
    RepoTags: string[];
    RepoDigests: string[];
    Parent: string;
    Comment: string;
    Created: string;
    Dockerode$Container: string;
    ContainerConfig: {
      Hostname: string,
      Domainname: string,
      Dockerode$User: string,
      AttachStdin: boolean,
      AttachStdout: boolean,
      AttachStderr: boolean,
      ExposedPorts: {
        [portAndProtocol: string]: {}
      },
      Tty: boolean,
      OpenStdin: boolean,
      StdinOnce: boolean,
      Env: string[],
      Cmd: string[],
      ArgsEscaped: boolean,
      Dockerode$Image: string,
      Volumes: {
        [path: string]: {}
      },
      WorkingDir: string,
      Entrypoint?: any,
      OnBuild?: any[],
      Labels: {
        [label: string]: string
      }
    };
    Dockerode$DockerVersion: string;
    Author: string;
    Config: {
      Hostname: string,
      Domainname: string,
      Dockerode$User: string,
      AttachStdin: boolean,
      AttachStdout: boolean,
      AttachStderr: boolean,
      ExposedPorts: {
        [portAndProtocol: string]: {}
      },
      Tty: boolean,
      OpenStdin: boolean,
      StdinOnce: boolean,
      Env: string[],
      Cmd: string[],
      ArgsEscaped: boolean,
      Dockerode$Image: string,
      Volumes: {
        [path: string]: {}
      },
      WorkingDir: string,
      Entrypoint?: any,
      OnBuild: any[],
      Labels: {
        [label: string]: string
      }
    };
    Architecture: string;
    Os: string;
    Size: number;
    VirtualSize: number;
    GraphDriver: {
      Name: string,
      Data: {
        DeviceId: string,
        DeviceName: string,
        DeviceSize: string
      }
    };
  }

  declare interface Dockerode$AuthConfig {
    username: string;
    password: string;
    serveraddress: string;
    email?: string;
  }

  declare interface Dockerode$PortBinding {
    HostIp?: string;
    HostPort?: string;
  }

  declare interface Dockerode$PortMap {
    [key: string]: Dockerode$PortBinding[];
  }

  declare interface Dockerode$RestartPolicy {
    Name: string;
    MaximumRetryCount?: number;
  }

  declare type Dockerode$LoggingDriverType =
    | "json-file"
    | "syslog"
    | "journald"
    | "gelf"
    | "fluentd"
    | "awslogs"
    | "splunk"
    | "etwlogs"
    | "none";

  declare interface Dockerode$LogConfig {
    Type: Dockerode$LoggingDriverType;
    Config?: {
      [key: string]: string
    };
  }

  declare interface Dockerode$DeviceMapping {
    PathOnHost: string;
    PathInContainer: string;
    CgroupPermissions: string;
  }

  declare interface Dockerode$IPAMConfig {
    IPv4Address?: string;
    IPv6Address?: string;
    LinkLocalIPs?: string[];
  }

  declare interface Dockerode$EndpointSettings {
    Dockerode$IPAMConfig?: Dockerode$IPAMConfig;
    Links?: string[];
    Aliases?: string[];
    NetworkID?: string;
    EndpointID?: string;
    Gateway?: string;
    IPAddress?: string;
    IPPrefixLen?: number;
    IPv6Gateway?: string;
    GlobalIPv6Address?: string;
    GlobalIPV6PrefixLen?: number;
    MacAddress?: string;
    DriverOpts?: {
      [key: string]: string
    };
  }

  declare interface Dockerode$EndpointsConfig {
    [key: string]: Dockerode$EndpointSettings;
  }

  declare type Dockerode$MountType = "bind" | "volume" | "tmpfs";

  declare type Dockerode$MountConsistency =
    | "default"
    | "consistent"
    | "cached"
    | "delegated";

  declare type Dockerode$MountPropagation =
    | "private"
    | "rprivate"
    | "shared"
    | "rshared"
    | "slave"
    | "rslave";

  declare interface Dockerode$MountSettings {
    Target: string;
    Source: string;
    Type: Dockerode$MountType;
    ReadOnly?: boolean;
    Consistency?: Dockerode$MountConsistency;
    BindOptions?: {
      Propagation: Dockerode$MountPropagation
    };
  }

  declare type Dockerode$MountConfig = Dockerode$MountSettings[];

  declare interface Dockerode$ContainerCreateOptions {
    name?: string;
    Hostname?: string;
    Domainname?: string;
    Dockerode$User?: string;
    AttachStdin?: boolean;
    AttachStdout?: boolean;
    AttachStderr?: boolean;
    Tty?: boolean;
    OpenStdin?: boolean;
    StdinOnce?: boolean;
    Env?: string[];
    Cmd?: string[];
    Entrypoint?: string;
    Dockerode$Image?: string;
    Labels?: {
      [label: string]: string
    };
    Volumes?: {
      [volume: string]: {}
    };
    WorkingDir?: string;
    NetworkDisabled?: boolean;
    MacAddress?: boolean;
    ExposedPorts?: {
      [port: string]: {}
    };
    StopSignal?: string;
    Dockerode$HostConfig?: {
      AutoRemove?: boolean,
      Binds?: string[],
      Links?: string[],
      Memory?: number,
      MemorySwap?: number,
      MemoryReservation?: number,
      KernelMemory?: number,
      CpuPercent?: number,
      CpuShares?: number,
      CpuPeriod?: number,
      CpuQuota?: number,
      CpusetMems?: string,
      MaximumIOps?: number,
      MaxmimumIOBps?: number,
      BlkioWeightDevice?: Array<{}>,
      BlkioDeviceReadBps?: Array<{}>,
      BlkioDeviceReadIOps?: Array<{}>,
      BlkioDeviceWriteBps?: Array<{}>,
      BlkioDeviceWriteIOps?: Array<{}>,
      MemorySwappiness?: number,
      OomKillDisable?: boolean,
      OomScoreAdj?: number,
      PidMode?: string,
      PidsLimit?: number,
      PortBindings?: Dockerode$PortMap,
      PublishAllPorts?: boolean,
      Privileged?: boolean,
      ReadonlyRootfs?: boolean,
      Dns?: string[],
      DnsOptions?: string[],
      DnsSearch?: string[],
      ExtraHosts?: any,
      VolumesFrom?: string[],
      Mounts?: Dockerode$MountConfig,
      CapAdd?: string[],
      CapDrop?: string[],
      GroupAdd?: string[],
      Dockerode$RestartPolicy?: Dockerode$RestartPolicy,
      NetworkMode?: string,
      Devices?: Dockerode$DeviceMapping[],
      Sysctls?: {
        [index: string]: string
      },
      Ulimits?: Array<{}>,
      Dockerode$LogConfig?: Dockerode$LogConfig,
      SecurityOpt?: {
        [index: string]: any
      },
      CgroupParent?: string,
      VolumeDriver?: string,
      ShmSize?: number
    };
    NetworkingConfig?: {
      Dockerode$EndpointsConfig?: Dockerode$EndpointsConfig
    };
  }

  declare interface Dockerode$KeyObject {
    pem: string | Buffer;
    passphrase?: string;
  }

  declare interface Dockerode$DockerOptions {
    socketPath?: string;
    host?: string;
    port?: number | string;
    ca?: string | string[] | Buffer | Buffer[];
    cert?: string | string[] | Buffer | Buffer[];
    key?: string | string[] | Buffer | Buffer[] | Dockerode$KeyObject[];
    protocol?: "https" | "http";
    timeout?: number;
    version?: string;
    Promise?: typeof Promise;
  }

  declare interface Dockerode$SecretVersion {
    Index: number;
  }

  declare interface Dockerode$ServiceSpec {
    Name: string;
  }

  declare interface Dockerode$SecretInfo {
    ID: string;
    Version: Dockerode$SecretVersion;
    CreatedAt: string;
    UpdatedAt?: string;
    Spec?: Dockerode$ServiceSpec;
  }

  declare interface Dockerode$PluginInfo {
    Id?: string;
    Name: string;
    Enabled: boolean;
    Settings: Dockerode$PluginSettings;
    PluginReference?: string;
    Config: Dockerode$PluginConfig;
  }

  declare type Dockerode$PluginInspectInfo = Dockerode$PluginInfo;

  declare interface Dockerode$PluginSettings {
    Mounts: Dockerode$PluginMount[];
    Env: string[];
    Dockerode$Args: string[];
    Devices: Dockerode$PluginDevice[];
  }

  declare interface Dockerode$PluginConfig {
    Description: string;
    Documentation: string;
    Dockerode$Interface: any;
    Entrypoint: string[];
    WorkDir: string;
    Dockerode$User?: Dockerode$User;
    Dockerode$Network: Dockerode$Network;
    Dockerode$Linux: Dockerode$Linux;
    PropagatedMount: string;
    Mounts: Dockerode$PluginMount[];
    Env: Dockerode$PluginEnv[];
    Dockerode$Args: Dockerode$Args;
    rootfs: any;
  }

  declare interface Dockerode$Interface {
    Types: Dockerode$PluginInterfaceType[];
    Socket: string;
  }

  declare interface Dockerode$PluginInterfaceType {
    Prefix: string;
    Capability: string;
    Version: string;
  }

  declare interface Dockerode$PluginMount {
    Name: string;
    Description: string;
    Settable: string[];
    Source: string;
    Destination: string;
    Type: string;
    Options: string[];
  }

  declare interface Dockerode$Linux {
    Capabilities: string[];
    AllowAllDevices: boolean;
    Devices: Dockerode$PluginDevice[];
  }

  declare interface Dockerode$PluginDevice {
    Name: string;
    Description: string;
    Settable: string[];
    Path: string;
  }

  declare interface Dockerode$PluginEnv {
    Name: string;
    Description: string;
    Settable: string[];
    Value: string;
  }

  declare interface Dockerode$Args {
    Name: string;
    Description: string;
    Settable: string[];
    Value: string;
  }

  declare interface Dockerode$User {
    UID: number;
    GID: number;
  }

  declare interface Dockerode$ImageRemoveInfo {
    Untagged: string;
    Deleted: string;
  }

  declare interface Dockerode$PruneImagesInfo {
    ImagesDeleted: Dockerode$ImageRemoveInfo[];
    SpaceReclaimed: number;
  }

  declare interface Dockerode$PruneVolumesInfo {
    VolumesDeleted: string[];
    SpaceReclaimed: number;
  }

  declare interface Dockerode$PruneContainersInfo {
    ContainersDeleted: string[];
    SpaceReclaimed: number;
  }

  declare interface Dockerode$PruneNetworksInfo {
    NetworksDeleted: string[];
  }

  declare interface Dockerode$ContainerLogsOptions {
    stdout?: boolean;
    stderr?: boolean;
    follow?: boolean;
    since?: number;
    details?: boolean;
    tail?: number;
    timestamps?: boolean;
  }

  declare interface Dockerode$ImageBuildContext {
    context: string;
    src: string[];
  }

  declare interface Dockerode$DockerVersion {
    ApiVersion: string;
    Arch: string;
    BuildTime: Date;
    Components: Array<{
      Details: {
        ApiVersion: string,
        Arch: string,
        BuildTime: Date,
        Experimental: string,
        GitCommit: string,
        GoVersion: string,
        KernelVersion: string,
        Os: string
      },
      Name: string,
      Version: string
    }>;
    GitCommit: string;
    GoVersion: string;
    KernelVersion: string;
    MinAPIVersion: string;
    Os: string;
    Platform: {
      Name: string
    };
    Version: string;
  }
  declare type Callback<T> = (error?: any, result?: T) => void;
  declare class Dockerode {
    constructor(options?: Dockerode$Dockerode$DockerOptions): this;
    createContainer(
      options: Dockerode$Dockerode$ContainerCreateOptions,
      callback: Callback<Dockerode$Dockerode$Container>
    ): void;
    createContainer(
      options: Dockerode$Dockerode$ContainerCreateOptions
    ): Promise<Dockerode$Dockerode$Container>;
    createImage(options: {}, callback: Callback<NodeJS.ReadableStream>): void;
    createImage(
      auth: any,
      options: {},
      callback: Callback<NodeJS.ReadableStream>
    ): void;
    createImage(options: {}): Promise<NodeJS.ReadableStream>;
    createImage(auth: any, options: {}): Promise<NodeJS.ReadableStream>;
    loadImage(
      file: string | NodeJS.ReadableStream,
      options: {},
      callback: Callback<NodeJS.ReadableStream>
    ): void;
    loadImage(
      file: string | NodeJS.ReadableStream,
      callback: Callback<NodeJS.ReadableStream>
    ): void;
    loadImage(
      file: string | NodeJS.ReadableStream,
      options?: {}
    ): Promise<NodeJS.ReadableStream>;
    importImage(
      file: string | NodeJS.ReadableStream,
      options: {},
      callback: Callback<NodeJS.ReadableStream>
    ): void;
    importImage(
      file: string | NodeJS.ReadableStream,
      callback: Callback<NodeJS.ReadableStream>
    ): void;
    importImage(
      file: string | NodeJS.ReadableStream,
      options?: {}
    ): Promise<NodeJS.ReadableStream>;
    checkAuth(options: any, callback: Callback<any>): void;
    checkAuth(options: any): Promise<any>;
    buildImage(
      file:
        | string
        | NodeJS.ReadableStream
        | Dockerode$Dockerode$ImageBuildContext,
      options: {},
      callback: Callback<NodeJS.ReadableStream>
    ): void;
    buildImage(
      file:
        | string
        | NodeJS.ReadableStream
        | Dockerode$Dockerode$ImageBuildContext,
      callback: Callback<NodeJS.ReadableStream>
    ): void;
    buildImage(
      file:
        | string
        | NodeJS.ReadableStream
        | Dockerode$Dockerode$ImageBuildContext,
      options?: {}
    ): Promise<NodeJS.ReadableStream>;
    getContainer(id: string): Dockerode$Dockerode$Container;
    getImage(name: string): Dockerode$Dockerode$Image;
    getVolume(name: string): Dockerode$Dockerode$Volume;
    getPlugin(name: string, remote: any): Dockerode$Dockerode$Plugin;
    getService(id: string): Dockerode$Dockerode$Service;
    getTask(id: string): Dockerode$Dockerode$Task;
    getNode(id: string): Dockerode$Dockerode$Node;
    getNetwork(id: string): Dockerode$Dockerode$Network;
    getSecret(id: string): Dockerode$Dockerode$Secret;
    getExec(id: string): Dockerode$Dockerode$Exec;
    listContainers(
      options: {},
      callback: Callback<Dockerode$Dockerode$ContainerInfo[]>
    ): void;
    listContainers(
      callback: Callback<Dockerode$Dockerode$ContainerInfo[]>
    ): void;
    listContainers(options?: {}): Promise<Dockerode$Dockerode$ContainerInfo[]>;
    listImages(
      options: {},
      callback: Callback<Dockerode$Dockerode$ImageInfo[]>
    ): void;
    listImages(callback: Callback<Dockerode$Dockerode$ImageInfo[]>): void;
    listImages(options?: {}): Promise<Dockerode$Dockerode$ImageInfo[]>;
    listServices(options: {}, callback: Callback<any[]>): void;
    listServices(callback: Callback<any[]>): void;
    listServices(options?: {}): Promise<any[]>;
    listNodes(options: {}, callback: Callback<any[]>): void;
    listNodes(callback: Callback<any[]>): void;
    listNodes(options?: {}): Promise<any[]>;
    listTasks(options: {}, callback: Callback<any[]>): void;
    listTasks(callback: Callback<any[]>): void;
    listTasks(options?: {}): Promise<any[]>;
    listSecrets(
      options: {},
      callback: Callback<Dockerode$Dockerode$SecretInfo[]>
    ): void;
    listSecrets(callback: Callback<Dockerode$Dockerode$SecretInfo[]>): void;
    listSecrets(options?: {}): Promise<Dockerode$Dockerode$SecretInfo[]>;
    listPlugins(
      options: {},
      callback: Callback<Dockerode$Dockerode$PluginInfo[]>
    ): void;
    listPlugins(callback: Callback<Dockerode$Dockerode$PluginInfo[]>): void;
    listPlugins(options?: {}): Promise<Dockerode$Dockerode$PluginInfo[]>;
    listVolumes(
      options: {},
      callback: Callback<{
        Volumes: Dockerode$Dockerode$VolumeInspectInfo[],
        Warnings: string[]
      }>
    ): void;
    listVolumes(
      callback: Callback<{
        Volumes: Dockerode$Dockerode$VolumeInspectInfo[],
        Warnings: string[]
      }>
    ): void;
    listVolumes(options?: {}): Promise<{
      Volumes: Dockerode$Dockerode$VolumeInspectInfo[],
      Warnings: string[]
    }>;
    listNetworks(options: {}, callback: Callback<any[]>): void;
    listNetworks(callback: Callback<any[]>): void;
    listNetworks(options?: {}): Promise<any[]>;
    createSecret(options: {}, callback: Callback<any>): void;
    createSecret(options: {}): Promise<any>;
    createPlugin(options: {}, callback: Callback<any>): void;
    createPlugin(options: {}): Promise<any>;
    createVolume(options: {}, callback: Callback<any>): void;
    createVolume(options: {}): Promise<any>;
    createService(options: {}, callback: Callback<any>): void;
    createService(options: {}): Promise<any>;
    createNetwork(options: {}, callback: Callback<any>): void;
    createNetwork(options: {}): Promise<any>;
    searchImages(options: {}, callback: Callback<any>): void;
    searchImages(options: {}): Promise<any>;
    pruneImages(
      options: {},
      callback: Callback<Dockerode$Dockerode$PruneImagesInfo>
    ): void;
    pruneImages(callback: Callback<Dockerode$Dockerode$PruneImagesInfo>): void;
    pruneImages(options?: {}): Promise<Dockerode$Dockerode$PruneImagesInfo>;
    pruneContainers(
      options: {},
      callback: Callback<Dockerode$Dockerode$PruneContainersInfo>
    ): void;
    pruneContainers(
      callback: Callback<Dockerode$Dockerode$PruneContainersInfo>
    ): void;
    pruneContainers(options?: {}): Promise<Dockerode$Dockerode$PruneContainersInfo>;
    pruneVolumes(
      options: {},
      callback: Callback<Dockerode$Dockerode$PruneVolumesInfo>
    ): void;
    pruneVolumes(
      callback: Callback<Dockerode$Dockerode$PruneVolumesInfo>
    ): void;
    pruneVolumes(options?: {}): Promise<Dockerode$Dockerode$PruneVolumesInfo>;
    pruneNetworks(
      options: {},
      callback: Callback<Dockerode$Dockerode$PruneNetworksInfo>
    ): void;
    pruneNetworks(
      callback: Callback<Dockerode$Dockerode$PruneNetworksInfo>
    ): void;
    pruneNetworks(options?: {}): Promise<Dockerode$Dockerode$PruneNetworksInfo>;
    info(callback: Callback<any>): void;
    info(): Promise<any>;
    df(callback: Callback<any>): void;
    df(): Promise<any>;
    version(callback: Callback<Dockerode$Dockerode$DockerVersion>): void;
    version(): Promise<Dockerode$Dockerode$DockerVersion>;
    ping(callback: Callback<any>): void;
    ping(): Promise<any>;
    getEvents(options: {}, callback: Callback<NodeJS.ReadableStream>): void;
    getEvents(callback: Callback<NodeJS.ReadableStream>): void;
    getEvents(options?: {}): Promise<NodeJS.ReadableStream>;
    pull(
      repoTag: string,
      options: {},
      callback: Callback<any>,
      auth?: {}
    ): Dockerode$Dockerode$Image;
    pull(repoTag: string, options: {}, auth?: {}): Promise<any>;
    run(
      image: string,
      cmd: string[],
      outputStream: NodeJS.WritableStream | NodeJS.WritableStream[],
      createOptions: {},
      startOptions: {},
      callback: Callback<any>
    ): events.EventEmitter;
    run(
      image: string,
      cmd: string[],
      outputStream: NodeJS.WritableStream | NodeJS.WritableStream[],
      startOptions: {},
      callback: Callback<any>
    ): events.EventEmitter;
    run(
      image: string,
      cmd: string[],
      outputStream: NodeJS.WritableStream | NodeJS.WritableStream[],
      callback: Callback<any>
    ): events.EventEmitter;
    run(
      image: string,
      cmd: string[],
      outputStream: NodeJS.WritableStream | NodeJS.WritableStream[],
      createOptions: {},
      callback: Callback<any>
    ): events.EventEmitter;
    run(
      image: string,
      cmd: string[],
      outputStream: NodeJS.WritableStream | NodeJS.WritableStream[],
      createOptions?: {},
      startOptions?: {}
    ): Promise<any>;
    swarmInit(options: {}, callback: Callback<any>): void;
    swarmInit(options: {}): Promise<any>;
    swarmJoin(options: {}, callback: Callback<any>): void;
    swarmJoin(options: {}): Promise<any>;
    swarmLeave(options: {}, callback: Callback<any>): void;
    swarmLeave(options: {}): Promise<any>;
    swarmUpdate(options: {}, callback: Callback<any>): void;
    swarmUpdate(options: {}): Promise<any>;
    swarmInspect(callback: Callback<any>): void;
    swarmInspect(): Promise<any>;
    modem: any;
  }
  declare module.exports: typeof Dockerode;
}
