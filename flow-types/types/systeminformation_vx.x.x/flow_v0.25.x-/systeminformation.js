declare module "systeminformation" {
  declare export function version(): string;

  declare export function time(): Systeminformation$Systeminformation$TimeData;

  declare export function system(
    cb?: (data: Systeminformation$Systeminformation$SystemData) => any
  ): Promise<Systeminformation$Systeminformation$SystemData>;

  declare export function cpu(
    cb?: (data: Systeminformation$Systeminformation$CpuData) => any
  ): Promise<Systeminformation$Systeminformation$CpuData>;

  declare export function cpuFlags(cb?: (data: string) => any): Promise<string>;

  declare export function cpuCache(
    cb?: (data: Systeminformation$Systeminformation$CpuCacheData) => any
  ): Promise<Systeminformation$Systeminformation$CpuCacheData>;

  declare export function cpuCurrentspeed(
    cb?: (data: Systeminformation$Systeminformation$CpuCurrentSpeedData) => any
  ): Promise<Systeminformation$Systeminformation$CpuCurrentSpeedData>;

  declare export function cpuTemperature(
    cb?: (data: Systeminformation$Systeminformation$CpuTemperatureData) => any
  ): Promise<Systeminformation$Systeminformation$CpuTemperatureData>;

  declare export function mem(
    cb?: (data: Systeminformation$Systeminformation$MemData) => any
  ): Promise<Systeminformation$Systeminformation$MemData>;

  declare export function memLayout(
    cb?: (data: Systeminformation$Systeminformation$MemLayoutData) => any
  ): Promise<Systeminformation$Systeminformation$MemLayoutData>;

  declare export function diskLayout(
    cb?: (data: Systeminformation$Systeminformation$DiskLayoutData) => any
  ): Promise<Systeminformation$Systeminformation$DiskLayoutData>;

  declare export function battery(
    cb?: (data: Systeminformation$Systeminformation$BatteryData) => any
  ): Promise<Systeminformation$Systeminformation$BatteryData>;

  declare export function graphics(
    cb?: (data: Systeminformation$Systeminformation$GraphicsData) => any
  ): Promise<Systeminformation$Systeminformation$GraphicsData>;

  declare export function osInfo(
    cb?: (data: Systeminformation$Systeminformation$OsData) => any
  ): Promise<Systeminformation$Systeminformation$OsData>;

  declare export function versions(
    cb?: (data: Systeminformation$Systeminformation$VersionData) => any
  ): Promise<Systeminformation$Systeminformation$VersionData>;

  declare export function shell(cb?: (data: string) => any): Promise<string>;

  declare export function users(
    cb?: (data: Systeminformation$Systeminformation$UserData[]) => any
  ): Promise<Systeminformation$Systeminformation$UserData[]>;

  declare export function fsSize(
    cb?: (data: Systeminformation$Systeminformation$FsSizeData[]) => any
  ): Promise<Systeminformation$Systeminformation$FsSizeData[]>;

  declare export function blockDevices(
    cb?: (data: Systeminformation$Systeminformation$BlockDevicesData[]) => any
  ): Promise<Systeminformation$Systeminformation$BlockDevicesData[]>;

  declare export function fsStats(
    cb?: (data: Systeminformation$Systeminformation$FsStatsData) => any
  ): Promise<Systeminformation$Systeminformation$FsStatsData>;

  declare export function disksIO(
    cb?: (data: Systeminformation$Systeminformation$DisksIoData) => any
  ): Promise<Systeminformation$Systeminformation$DisksIoData>;

  declare export function networkInterfaces(
    cb?: (data: Systeminformation$Systeminformation$NetInterfacesData[]) => any
  ): Promise<Systeminformation$Systeminformation$NetInterfacesData[]>;

  declare export function networkInterfaceDefault(
    cb?: (data: string) => any
  ): Promise<string>;

  declare export function networkStats(
    iface?: string,
    cb?: (data: Systeminformation$Systeminformation$NetStatsData) => any
  ): Promise<Systeminformation$Systeminformation$NetStatsData>;

  declare export function networkConnections(
    cb?: (data: Systeminformation$Systeminformation$NetConnectionsData[]) => any
  ): Promise<Systeminformation$Systeminformation$NetConnectionsData[]>;

  declare export function inetChecksite(
    url: string,
    cb?: (data: Systeminformation$Systeminformation$NetChecksiteData) => any
  ): Promise<Systeminformation$Systeminformation$NetChecksiteData>;

  declare export function inetLatency(
    host?: string,
    cb?: (data: number) => any
  ): Promise<number>;

  declare export function currentLoad(
    cb?: (data: Systeminformation$Systeminformation$CurrentLoadData) => any
  ): Promise<Systeminformation$Systeminformation$CurrentLoadData>;

  declare export function fullLoad(cb?: (data: number) => any): Promise<number>;

  declare export function processes(
    cb?: (data: Systeminformation$Systeminformation$ProcessesData) => any
  ): Promise<Systeminformation$Systeminformation$ProcessesData>;

  declare export function processLoad(
    processName: string,
    cb?: (
      data: Systeminformation$Systeminformation$ProcessesProcessLoadData
    ) => any
  ): Promise<Systeminformation$Systeminformation$ProcessesProcessLoadData>;

  declare export function services(
    serviceName: string,
    cb?: (data: Systeminformation$Systeminformation$ServicesData[]) => any
  ): Promise<Systeminformation$Systeminformation$ServicesData[]>;

  declare export function dockerContainers(
    all?: boolean,
    cb?: (
      data: Systeminformation$Systeminformation$DockerContainerData[]
    ) => any
  ): Promise<Systeminformation$Systeminformation$DockerContainerData[]>;

  declare export function dockerContainerStats(
    id?: string,
    cb?: (data: any) => any
  ): Promise<any>;

  declare export function dockerContainerProcesses(
    id?: string,
    cb?: (data: any) => any
  ): Promise<any>;

  declare export function dockerAll(cb?: (data: any) => any): Promise<any>;

  declare export function getStaticData(
    cb?: (data: Systeminformation$Systeminformation$StaticData) => any
  ): Promise<Systeminformation$Systeminformation$StaticData>;

  declare export function getDynamicData(
    srv?: string,
    iface?: string,
    cb?: (data: any) => any
  ): Promise<any>;

  declare export function getAllData(
    srv?: string,
    iface?: string,
    cb?: (data: any) => any
  ): Promise<any>;

  declare interface Systeminformation$StaticData {
    version: string;
    system: Systeminformation$SystemData;
    os: Systeminformation$OsData;
    versions: Systeminformation$VersionData;
    cpu: Systeminformation$CpuData;
    graphics: Systeminformation$GraphicsData;
    net: Systeminformation$NetInterfacesData[];
    memLayout: Systeminformation$MemLayoutData[];
    diskLayout: Systeminformation$DiskLayoutData[];
  }

  declare interface Systeminformation$TimeData {
    current: string;
    uptime: string;
    timezone: string;
    timezoneName: string;
  }

  declare interface Systeminformation$SystemData {
    manufacturer: string;
    model: string;
    version: string;
    serial: string;
    uuid: string;
  }

  declare interface Systeminformation$CpuData {
    manufacturer: string;
    brand: string;
    vendor: string;
    family: string;
    model: string;
    stepping: string;
    revision: string;
    speed: string;
    speedmin: string;
    speedmax: string;
    cores: number;
    cache: Systeminformation$CpuCacheData;
    flags: string;
  }

  declare interface Systeminformation$CpuCacheData {
    l1d: number;
    l1i: number;
    l2: number;
    l3: number;
  }

  declare interface Systeminformation$CpuCurrentSpeedData {
    avg: string;
    min: string;
    max: string;
  }

  declare interface Systeminformation$CpuTemperatureData {
    main: string;
    cores: string;
    max: string;
  }

  declare interface Systeminformation$MemData {
    total: number;
    free: number;
    used: number;
    active: number;
    available: number;
    buffcache: number;
    swaptotal: number;
    swapused: number;
    swapfree: number;
  }

  declare interface Systeminformation$MemLayoutData {
    size: number;
    bank: string;
    type: string;
    clockSpeed: number;
    formFactor: string;
    partNum: string;
    serialNum: string;
    voltageConfigured: number;
    voltageMin: number;
    voltageMax: number;
  }

  declare interface Systeminformation$DiskLayoutData {
    type: string;
    name: string;
    vendor: string;
    size: number;
    bytesPerSector: number;
    totalCylinders: number;
    totalHeads: number;
    totalSectors: number;
    totalTracks: number;
    tracksPerCylinder: number;
    sectorsPerTrack: number;
    firmwareRevision: string;
    serialNum: string;
    interfaceType: string;
  }

  declare interface Systeminformation$BatteryData {
    hasbatter: boolean;
    cyclecount: number;
    ischarging: boolean;
    maxcapacity: number;
    currentcapacity: number;
    percent: number;
  }

  declare interface Systeminformation$GraphicsData {
    controllers: Systeminformation$GraphicsControllerInfo[];
    displays: Systeminformation$GraphicsDisplayInfo[];
  }

  declare interface Systeminformation$GraphicsControllerInfo {
    vendor: string;
    model: string;
    bus: string;
    vram: number;
    vramDynamic: boolean;
  }

  declare interface Systeminformation$GraphicsDisplayInfo {
    connection: string;
    main: boolean;
    builtin: boolean;
    model: string;
    resolutionx: number;
    resolutiony: number;
    sizex: number;
    sizey: number;
    pixeldepth: number;
  }

  declare interface Systeminformation$OsData {
    platform: string;
    distro: string;
    release: string;
    codename: string;
    kernel: string;
    arch: string;
    hostname: string;
    logofile: string;
  }

  declare interface Systeminformation$VersionData {
    kernel: string;
    node: string;
    v8: string;
    npm: string;
    pm2: string;
    openssl: string;
  }

  declare interface Systeminformation$UserData {
    user: string;
    tty: string;
    date: string;
    time: string;
    ip: string;
    command: string;
  }

  declare interface Systeminformation$FsSizeData {
    fs: string;
    type: string;
    size: number;
    used: number;
    use: number;
    mount: string;
  }

  declare interface Systeminformation$BlockDevicesData {
    name: string;
    type: string;
    fstype: string;
    mount: string;
    size: number;
    physical: string;
    uuid: string;
    label: string;
    model: string;
    serial: string;
    removable: boolean;
    protocol: string;
  }

  declare interface Systeminformation$FsStatsData {
    rx: number;
    wx: number;
    tx: number;
    rx_sec: number;
    wx_sec: number;
    tx_sec: number;
    ms: number;
  }

  declare interface Systeminformation$DisksIoData {
    rIO: number;
    wIO: number;
    tIO: number;
    rIO_sec: number;
    wIO_sec: number;
    tIO_sec: number;
    ms: number;
  }

  declare interface Systeminformation$NetInterfacesData {
    iface: string;
    ip4: string;
    ip6: string;
    mac: string;
    internal: boolean;
  }

  declare interface Systeminformation$NetStatsData {
    iface: string;
    rx: number;
    tx: number;
    rx_sec: number;
    tx_sec: number;
    ms: number;
  }

  declare interface Systeminformation$NetConnectionsData {
    protocol: string;
    localaddress: string;
    localport: string;
    peeraddress: string;
    peerport: string;
    state: string;
  }

  declare interface Systeminformation$NetChecksiteData {
    url: string;
    ok: boolean;
    status: number;
    ms: number;
  }

  declare interface Systeminformation$CurrentLoadData {
    avgload: number;
    currentload: number;
    currentload_user: number;
    currentload_nice: number;
    currentload_system: number;
    currentload_irq: number;
    cpus: Systeminformation$CurrentLoadCpuData[];
  }

  declare interface Systeminformation$CurrentLoadCpuData {
    load: number;
    load_user: number;
    load_nice: number;
    load_system: number;
    load_irq: number;
  }

  declare interface Systeminformation$ProcessesData {
    all: number;
    running: number;
    blocked: number;
    sleeping: number;
    list: Systeminformation$ProcessesProcessData[];
  }

  declare interface Systeminformation$ProcessesProcessData {
    pid: number;
    pcpu: number;
    pcpuu: number;
    pcpus: number;
    pmem: number;
    priority: number;
    mem_vsz: number;
    mem_rss: number;
    nice: number;
    started: string;
    state: string;
    tty: string;
    user: string;
    command: string;
    name: string;
  }

  declare interface Systeminformation$ProcessesProcessLoadData {
    proc: string;
    pid: number;
    cpu: number;
    mem: number;
  }

  declare interface Systeminformation$ServicesData {
    name: string;
    running: boolean;
    pcpu: number;
    pmem: number;
  }

  declare interface Systeminformation$DockerContainerData {
    id: string;
    name: string;
    image: string;
    imageID: string;
    command: string;
    created: number;
    state: string;
    ports: number[];
    mounts: Systeminformation$DockerContainerMountData[];
  }

  declare interface Systeminformation$DockerContainerMountData {
    Type: string;
    Source: string;
    Destination: string;
    Mode: string;
    RW: boolean;
    Propagation: string;
  }

  declare interface Systeminformation$DockerContainerStatsData {
    id: string;
    mem_usage: number;
    mem_limit: number;
    mem_percent: number;
    cpu_percent: number;
    netIO: {
      rx: number,
      wx: number
    };
    blockIO: {
      r: number,
      w: number
    };
    cpu_stats: {
      cpu_usage: {
        total_usage: number,
        usage_in_kernelmode: number,
        usage_in_usermode: number
      },
      throttling_data: {
        periods: number,
        throttled_periods: number,
        throttled_time: number
      }
    };
    precpu_stats: {
      cpu_usage: {
        total_usage: number,
        usage_in_kernelmode: number,
        usage_in_usermode: number
      },
      throttling_data: {
        periods: number,
        throttled_periods: number,
        throttled_time: number
      }
    };
    memory_stats: {
      usage: number,
      max_usage: number,
      stats: {
        active_anon: number,
        active_file: number,
        cache: number,
        dirty: number,
        hierarchical_memory_limit: number,
        inactive_anon: number,
        inactive_file: number,
        mapped_file: number,
        pgfault: number,
        pgmajfault: number,
        pgpgin: number,
        pgpgout: number,
        rss: number,
        rss_huge: number,
        total_active_anon: number,
        total_active_file: number,
        total_cache: number,
        total_dirty: number,
        total_inactive_anon: number,
        total_inactive_file: number,
        total_mapped_file: number,
        total_pgfault: number,
        total_pgmajfault: number,
        total_pgpgin: number,
        total_pgpgout: number,
        total_rss: number,
        total_rss_huge: number,
        total_unevictable: number,
        total_writeback: number,
        unevictable: number,
        writeback: number
      },
      limit: number
    };
    networks: any;
  }

  declare type Systeminformation$DockerContainerAllData = {
    pids: number,
    processes: Systeminformation$DockerContainerStatsProcessesData[]
  } & Systeminformation$DockerContainerData &
    Systeminformation$DockerContainerStatsData;

  declare interface Systeminformation$DockerContainerStatsProcessesData {
    pid_host: string;
    ppid: string;
    pgid: string;
    user: string;
    ruser: string;
    group: string;
    rgroup: string;
    stat: string;
    time: string;
    elapsed: string;
    nice: string;
    rss: string;
    vsz: string;
    command: string;
  }
}
