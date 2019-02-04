declare module 'sdp-transform' {
        declare export function write(description: SessionDescription): string

	declare export function parse(description: string): SessionDescription

	declare export function parsePayloads(payloads: string): number[]

	declare export function parseRemoteCandidates(candidates: string): Array<{
component: number,
ip: string,
port: number
}>

	declare export function parseSimulcastStreamList(streams: string): Array<{
scid: number | string,
paused: boolean
}>

	declare export interface ParamMap {
[paramName: string]: number | string
} 
	declare export function parseParams(params: string): ParamMap

	declare export function parseImageAttributes(params: string): ParamMap[]

	declare export type MediaDescription = {} & SharedDescriptionFields & MediaAttributes

	
/**
 * Descriptor fields that exist only at the session level (before an m= block).
 * 
 * See the SDP grammar for more details: https://tools.ietf.org/html/rfc4566#section-9
 */
declare export type SessionDescription = {
version?: number,
origin?: {
username: string,
sessionId: string | number,
sessionVersion: number,
netType: string,
address: string
},
name?: string,
uri?: string,
email?: string,
phone?: string,
timing?: {
start: number,
stop: number
},
timezones?: string,
repeats?: string,
media: Array<{
type: string,
port: number,
protocol: string,
payloads?: string
} & MediaDescription>
} & SharedDescriptionFields & SessionAttributes

	
/**
 * These attributes can exist on both the session level and the media level.
 * 
 * https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-8
 */
declare export interface SharedAttributes {
direction?: "sendrecv" | "recvonly" | "sendonly" | "inactive",
control?: string,
ext?: {
value: number,
direction?: string,
uri: string,
config?: string
},
setup?: string,
iceUfrag?: string,
icePwd?: string,
fingerprint?: {
type: string,
hash: string
},
sourceFilter?: {
filterMode: "excl" | "incl",
netType: string,
addressTypes: string,
destAddress: string,
srcList: string
},
invalid?: Array<{
value: string
}>
} 
	
/**
 * Attributes that only exist at the session level (before an m= block).
 * 
 * https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-7
 */
declare export type SessionAttributes = {
icelite?: string,
iceOptions?: string,
msidSemantic?: {
semantic: string,
token: string
},
groups?: Array<{
type: string,
mids: string
}>
} & SharedAttributes

	
/**
 * Attributes that only exist at the media level (within an m= block).
 * 
 * https://www.iana.org/assignments/sdp-parameters/sdp-parameters.xhtml#sdp-parameters-9
 */
declare export type MediaAttributes = {
rtp?: {
payload: number,
codec: string,
rate?: number,
encoding?: number
},
rtcp?: {
port: number,
netType?: string,
ipVer?: number,
address?: string
},
rtcpFb?: {
payload: number,
type: string,
subtype?: string
},
rtcpFbTrrInt?: {
payload: number,
value: number
},
fmtp?: {
payload: number,
config: string
},
mid?: string,
msid?: string,
ptime?: number,
maxptime?: number,
crypto?: {
id: number,
suite: string,
config: string,
sessionConfig?: string
},
candidates?: Array<{
foundation: string,
component: number,
transport: string,
priority: number | string,
ip: string,
port: number,
type: string,
raddr: string,
rport: number,
tcptype: string,
generation: number,
"network-id"?: number,
"network-cost"?: number
}>,
endOfCandidates?: string,
remoteCandidates?: string,
ssrcs?: Array<{
id: number | string,
attribute: string,
value?: string
}>,
ssrcGroups?: Array<{
semantics: string,
ssrcs: string
}>,
rtcpMux?: string,
rtcpRsize?: string,
sctpmap?: {
sctpmapNumber: number | string,
app: string,
maxMessageSize: number
},
xGoogleFlag?: string,
rids?: Array<{
id: number | string,
direction: string,
params?: string
}>,
imageattrs?: Array<{
pt: number | string,
dir1: string,
attrs1: string,
dir2?: string,
attrs2?: string
}>,
simulcast?: {
dir1: string,
list1: string,
dir2?: string,
list2?: string
},
simulcast_03?: {
value: string
},
framerate?: number | string
} & SharedAttributes

	
/**
 * Descriptor fields that exist at both the session level and media level.
 * 
 * See the SDP grammar for more details: https://tools.ietf.org/html/rfc4566#section-9
 */
declare export interface SharedDescriptionFields {
description?: string,
connection?: {
version: number,
ip: string
},
bandwidth?: {
type: "TIAS"
| "AS"
| "CT"
| "RR"
| "RS",
limit: number | string
}
} 
    }
