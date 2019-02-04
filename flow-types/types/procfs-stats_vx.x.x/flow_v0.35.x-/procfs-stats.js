declare module 'procfs-stats' {
        declare function procfs(pid: number): procfs$procfs$StatStatic

	declare type procfs$Callback<Value> = (error: any, value: Value) => void;

declare interface procfs$Cpu {
cpu: procfs$CpuDetail,
intr: string,
ctxt: string,
btime: string,
processes: string,
procs_running: string,
procs_blocked: string,
softirq: string
} 

declare interface procfs$CpuDetail {
user: string,
nice: string,
system: string,
idle: string,
iowait: string,
irq: string,
softirq: string,
steal: string,
guest: string,
guest_nice: string
} 

declare interface procfs$DiskStat {
device_number: string,
device_number_minor: string,
device: string,
reads_completed: string,
reads_merged: string,
sectors_read: string,
ms_reading: string,
writes_completed: string,
writes_merged: string,
sectors_written: string,
ms_writing: string,
ios_pending: string,
ms_io: string,
ms_weighted_io: string
} 

declare interface procfs$FileDescriptor {
fd?: string,
path: string,
info: procfs$FileDescriptorInfo,
stat: procfs$FileDescriptorStat | boolean
} 

declare interface procfs$FileDescriptorInfo {
pos: string,
flags: string
} 

declare interface procfs$FileDescriptorStat {
dev: number,
mode: number,
nlink: number,
uid: number,
gid: number,
rdev: number,
blksize: number,
ino: number,
size: number,
blocks: number,
atime: Date,
mtime: Date,
ctime: Date
} 

declare interface procfs$MemoryInfo {
MemTotal: string,
MemFree: string,
MemAvailable: string,
Buffers: string,
Cached: string,
SwapCached: string,
Active: string,
Inactive: "136524",
"Active(anon)": string,
"Inactive(anon)": string,
"Active(file)": string,
"Inactive(file)": string,
Unevictable: string,
Mlocked: string,
SwapTotal: string,
SwapFree: string,
Dirty: string,
Writeback: string,
AnonPages: string,
Mapped: string,
Shmem: string,
Slab: string,
SReclaimable: string,
SUnreclaim: string,
KernelStack: string,
PageTables: string,
NFS_Unstable: string,
Bounce: string,
WritebackTmp: string,
CommitLimit: string,
Committed_AS: string,
VmallocTotal: string,
VmallocUsed: string,
VmallocChunk: string,
AnonHugePages: string,
HugePages_Total: string,
HugePages_Free: string,
HugePages_Rsvd: string,
HugePages_Surp: string,
Hugepagesize: string,
DirectMap4k: string,
DirectMap2M: string
} 

declare interface procfs$MemoryStat {
size: string,
resident: string,
share: string,
text: string,
lib: string,
data: string,
dt: string
} 

declare interface procfs$Net {
Interface: string,
bytes: {
Receive: string,
Transmit: string
},
packets: {
Receive: string,
Transmit: string
},
errs: {
Receive: string,
Transmit: string
},
drop: {
Receive: string,
Transmit: string
},
fifo: {
Receive: string,
Transmit: string
},
frame: {
Receive: string
},
compressed: {
Receive: string,
Transmit: string
},
multicast: {
Receive: string
},
colls: {
Transmit: string
},
carrier: {
Transmit: string
}
} 

declare interface procfs$Io {
cancelled_write_bytes: string,
rchar: string,
read_bytes: string,
syscr: string,
syscw: string,
wchar: string,
write_bytes: string
} 

declare interface procfs$Stat {
pid: string,
comm: string,
state: string,
ppid: string,
pgrp: string,
session: string,
tty_nr: string,
tpgid: string,
flags: string,
minflt: string,
cminflt: string,
majflt: string,
cmajflt: string,
utime: string,
stime: string,
cutime: string,
cstime: string,
priority: string,
nice: string,
num_threads: string,
itrealvalue: string,
starttime: string,
vsize: string,
rss: string,
rsslim: string,
startcode: string,
endcode: string,
startstack: string,
kstkesp: string,
kstkeip: string,
signal: string,
blocked: string,
sigignore: string,
sigcatch: string,
wchan: string,
nswap: string,
cnswap: string,
exit_signal: string,
processor: string,
rt_priority: string,
policy: string,
delayacct_blkio_ticks: string,
guest_time: string,
cguest_time: string
} 

declare interface procfs$Status {
Name: string,
State: string,
Tgid: string,
Pid: string,
PPid: string,
TracerPid: string,
Uid: string,
Gid: string,
FDSize: string,
Groups: string,
VmPeak: string,
VmSize: string,
VmLck: string,
VmPin: string,
VmHWM: string,
VmRSS: string,
VmData: string,
VmStk: string,
VmExe: string,
VmLib: string,
VmPTE: string,
VmSwap: string,
Threads: string,
SigQ: string,
SigPnd: string,
ShdPnd: string,
SigBlk: string,
SigIgn: string,
SigCgt: string,
CapInh: string,
CapPrm: string,
CapEff: string,
CapBnd: string,
Cpus_allowed: string,
Cpus_allowed_list: string,
Mems_allowed: string,
Mems_allowed_list: string,
voluntary_ctxt_switches: string,
nonvoluntary_ctxt_switches: string
} 

declare interface procfs$Tcp {
sl: string,
local_address: string,
rem_address: string,
st: string,
tx_queue: string,
rx_queue: string,
tr: string,
"tm->when": string,
retrnsmt: string,
uid: string,
timeout: string,
inode: string,
_: {
[key: string]: string
}
} 

declare interface procfs$Udp {
sl: string,
local_address: string,
rem_address: string,
st: string,
tx_queue: string,
rx_queue: string,
tr: string,
"tm->when": string,
retrnsmt: string,
uid: string,
timeout: string,
inode: string,
ref: string,
pointer: string,
drops: string
} 

declare interface procfs$UnixSocket {
Num: string,
RefCount: string,
Protocol: string,
Flags: string,
Type: string,
St: string,
Inode: string,
Path: string
} 

declare interface procfs$Wifi {
Interface: string,
status: string,
link: {
Quality: string
},
level: {
Quality: string
},
noise: {
Quality: string
},
nwid: {
"Discarded packets": string
},
crypt: {
"Discarded packets": string
},
frag: {
"Discarded packets": string
},
retry: {
"Discarded packets": string
},
misc: {
"Discarded packets": string
},
beacon: {
Missed: string
}
} 

declare class procfs$StatStatic  {
argv(callback: procfs$Callback<string[]>): empty;
cpu(callback: procfs$Callback<procfs$Cpu>): empty;
cwd(callback: procfs$Callback<string>): empty;
disk(callback: procfs$Callback<procfs$DiskStat[]>): empty;
env(callback: procfs$Callback<string[]>): empty;
fd(fdPath: string, callback: procfs$Callback<procfs$FileDescriptor>): empty;
fds(callback: procfs$Callback<string[]>): empty;
meminfo(callback: procfs$Callback<procfs$MemoryInfo>): empty;
net(callback: procfs$Callback<procfs$Net[]>): empty;
io(callback: procfs$Callback<procfs$Io>): empty;
stat(callback: procfs$Callback<procfs$Stat>): empty;
statm(callback: procfs$Callback<procfs$MemoryStat>): empty;
status(callback: procfs$Callback<procfs$Status>): empty;
tcp(callback: procfs$Callback<procfs$Tcp[]>): empty;
thread(tid: number): procfs$Stat;
threads(callback: procfs$Callback<string[]>): empty;
udp(callback: procfs$Callback<procfs$Udp[]>): empty;
unix(callback: procfs$Callback<procfs$UnixSocket[]>): empty;
wifi(callback: procfs$Callback<procfs$Wifi[]>): empty;
works: boolean
}
	declare module.exports: typeof procfs

    }
