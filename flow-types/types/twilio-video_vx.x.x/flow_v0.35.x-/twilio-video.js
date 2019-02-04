declare module 'twilio-video' {
        import type {
          EventEmitter
        } from 'events';

	
/**
 * Classes
 */
declare export class AccessTokenExpiredError mixins TwilioError {
code: 20104;
message: "Access Token expired or expiration date invalid"
}
	declare export class AccessTokenGrantsInvalidError mixins TwilioError {
code: 20106;
message: "Invalid Access Token grants"
}
	declare export class AccessTokenHeaderInvalidError mixins TwilioError {
code: 20102;
message: "Invalid Access Token header"
}
	declare export class AccessTokenIssuerInvalidError mixins TwilioError {
code: 20103;
message: "Invalid Access Token issuer/subject"
}
	declare export class AccessTokenNotYetValidError mixins TwilioError {
code: 20105;
message: "Access Token not yet valid"
}
	declare export class AccessTokenSignatureInvalidError mixins TwilioError {
code: 20107;
message: "Invalid Access Token signature"
}
	declare export class AudioTrack mixins Track {
isStarted: boolean;
isEnabled: boolean;
kind: "audio";
mediaStreamTrack: MediaStreamTrack;
_attachments: HTMLMediaElement[];
attach(element?: HTMLMediaElement | string): HTMLMediaElement;
detach(element?: HTMLMediaElement | string): HTMLMediaElement[]
}
	declare export class ConfigurationAcquireFailedError mixins TwilioError {
code: 53500;
message: "Unable to acquire configuration"
}
	declare export class ConfigurationAcquireTurnFailedError mixins TwilioError {
code: 53501;
message: "Unable to acquire TURN credentials"
}
	declare export class LocalAudioTrack mixins AudioTrack {
constructor(mediaStreamTrack: MediaStreamTrack, options?: LocalTrackOptions): this;
id: Track$Track$ID;
isStopped: boolean;
disable(): LocalAudioTrack;
enable(enabled?: boolean): LocalAudioTrack;
stop(): LocalAudioTrack
}
	declare export class LocalAudioTrackPublication mixins LocalTrackPublication {
kind: "audio";
track: LocalAudioTrack;
unpublish(): LocalAudioTrackPublication
}
	declare export class LocalAudioTrackStats mixins LocalTrackStats {
audioLevel: AudioLevel | null;
jitter: number | null
}
	declare export class LocalDataTrack mixins Track {
constructor(options?: LocalDataTrackOptions): this;
id: Track$Track$ID;
kind: "data";
maxPacketLifeTime: number | null;
maxRetransmits: number | null;
ordered: boolean;
reliable: boolean;
send(data: string | Blob | ArrayBuffer | ArrayBufferView): void
}
	declare export class LocalDataTrackPublication mixins LocalTrackPublication {
kind: "data";
track: LocalDataTrack;
unpublish(): LocalDataTrackPublication
}
	declare export class LocalParticipant mixins Participant {
audioTracks: Map<Track$Track$SID, LocalAudioTrackPublication>;
dataTracks: Map<Track$Track$SID, LocalDataTrackPublication>;
tracks: Map<Track$Track$SID, LocalTrackPublication>;
videoTracks: Map<Track$Track$SID, LocalVideoTrackPublication>;
publishTrack(track: LocalTrack): Promise<LocalTrackPublication>;
publishTrack(
mediaStreamTrack: MediaStreamTrack,
options?: LocalTrackOptions): Promise<LocalTrackPublication>;
publishTracks(tracks: LocalTrack[] | MediaStreamTrack[]): Promise<LocalTrackPublication[]>;
setParameters(encodingParameters?: EncodingParameters | null): LocalParticipant;
unpublishTrack(track: LocalTrack): LocalTrackPublication;
unpublishTracks(tracks: LocalTrack): LocalTrackPublication[]
}
	declare export class LocalTrackPublication mixins TrackPublication {
isTrackEnabled: boolean;
kind: Track$Track$Kind;
track: LocalTrack;
unpublish(): LocalTrackPublication
}
	declare export class LocalTrackStats mixins TrackStats {
bytesSent: number | null;
packetsSent: number | null;
roundTripTime: number | null
}
	declare export class LocalVideoTrack mixins VideoTrack {
constructor(mediaStreamTrack: MediaStreamTrack, options?: LocalTrackOptions): this;
id: Track$Track$ID;
isStopped: boolean;
disable(): LocalVideoTrack;
enable(enabled?: boolean): LocalVideoTrack;
stop(): LocalVideoTrack
}
	declare export class LocalVideoTrackPublication mixins LocalTrackPublication {
kind: "video";
track: LocalVideoTrack;
unpublish(): LocalVideoTrackPublication
}
	declare export class LocalVideoTrackStats mixins LocalTrackStats {
captureDimensions: VideoTrack$VideoTrack$Dimensions | null;
dimensions: VideoTrack$VideoTrack$Dimensions | null;
captureFrameRate: number | null;
frameRate: number | null
}
	declare export class MediaClientLocalDescFailedError mixins TwilioError {
code: 53400;
message: "Client is unable to create or apply a local media description"
}
	declare export class MediaClientRemoteDescFailedError mixins TwilioError {
code: 53402;
message: "Client is unable to apply a remote media description"
}
	declare export class MediaConnectionError mixins TwilioError {
code: 53405;
message: "Media connection failed"
}
	declare export class MediaNoSupportedCodecError mixins TwilioError {
code: 53404;
message: "No supported codec"
}
	declare export class MediaServerLocalDescFailedError mixins TwilioError {
code: 53401;
message: "Server is unable to create or apply a local media description"
}
	declare export class MediaServerRemoteDescFailedError mixins TwilioError {
code: 53403;
message: "Server is unable to apply a remote media description"
}
	declare type Participant$Identity = string;

declare type Participant$SID = string;
	declare export class Participant mixins EventEmitter {
audioTracks: Map<Track$Participant$SID, AudioTrackPublication>;
dataTracks: Map<Track$Participant$SID, DataTrackPublication>;
identity: Participant$Participant$Identity;
networkQualityLevel: NetworkQualityLevel | null;
sid: Participant$Participant$SID;
state: string;
tracks: Map<Track$Participant$SID, TrackPublication>;
videoTracks: Map<Track$Participant$SID, VideoTrackPublication>
}
	declare export class ParticipantDuplicateIdentityError mixins TwilioError {
code: 53205;
message: "Participant disconnected because of duplicate identity"
}
	declare export class ParticipantIdentityCharsInvalidError mixins TwilioError {
code: 53202;
message: "Participant identity contains invalid characters"
}
	declare export class ParticipantIdentityInvalidError mixins TwilioError {
code: 53200;
message: "Participant identity is invalid"
}
	declare export class ParticipantIdentityTooLongError mixins TwilioError {
code: 53201;
message: "Participant identity is too long"
}
	declare export class ParticipantMaxTracksExceededError mixins TwilioError {
code: 53203;
message: "Participant has too many Tracks"
}
	declare export class ParticipantNotFoundError mixins TwilioError {
code: 53204;
message: "Participant not found"
}
	declare export class RemoteAudioTrack mixins AudioTrack {
sid: Track$Participant$SID
}
	declare export class RemoteAudioTrackPublication mixins RemoteTrackPublication {
kind: "audio";
track: RemoteAudioTrack | null
}
	declare export class RemoteAudioTrackStats mixins RemoteTrackStats {
audioLevel: AudioLevel | null;
jitter: number | null
}
	declare export class RemoteDataTrack mixins Track {
isEnabled: boolean;
isSubscribed: boolean;
kind: "data";
maxPacketLifeTime: number | null;
maxRetransmits: number | null;
ordered: boolean;
reliable: boolean;
sid: Track$Participant$SID
}
	declare export class RemoteDataTrackPublication mixins RemoteTrackPublication {
kind: "data";
track: RemoteDataTrack | null
}
	declare export class RemoteParticipant mixins Participant {
audioTracks: Map<Track$Participant$SID, RemoteAudioTrackPublication>;
dataTracks: Map<Track$Participant$SID, RemoteDataTrackPublication>;
tracks: Map<Track$Participant$SID, RemoteTrackPublication>;
videoTracks: Map<Track$Participant$SID, RemoteVideoTrackPublication>
}
	declare export class RemoteTrackPublication mixins TrackPublication {
isSubscribed: boolean;
isTrackEnabled: boolean;
kind: Track$Track$Kind;
track: RemoteTrack | null
}
	declare export class RemoteTrackStats  {
bytesReceived: number | null;
packetsReceived: number | null
}
	declare export class RemoteVideoTrack mixins VideoTrack {
sid: Track$Participant$SID
}
	declare export class RemoteVideoTrackPublication mixins RemoteTrackPublication {
kind: "video";
track: RemoteVideoTrack | null
}
	declare export class RemoteVideoTrackStats mixins RemoteTrackStats {
dimensions: VideoTrack$VideoTrack$Dimensions | null;
frameRate: number | null
}
	declare type Room$SID = string;
	declare export class Room mixins EventEmitter {
dominantSpeaker: RemoteParticipant | null;
isRecording: boolean;
localParticipant: LocalParticipant;
name: string;
participants: Map<Participant$Room$SID, RemoteParticipant>;
sid: Room$Room$SID;
state: string;
disconnect(): Room;
getStats(): Promise<StatsReport[]>
}
	declare export class RoomCompletedError mixins TwilioError {
code: 53118;
message: "Room completed"
}
	declare export class RoomConnectFailedError mixins TwilioError {
code: 53104;
message: "Unable to connect to Room"
}
	declare export class RoomCreateFailedError mixins TwilioError {
code: 53103;
message: "Unable to create Room"
}
	declare export class RoomInvalidParametersError mixins TwilioError {
code: 53114;
message: "Room creation parameter(s) incompatible with the Room type"
}
	declare export class RoomMaxParticipantsExceededError mixins TwilioError {
code: 53105;
message: "Room contains too many Participants"
}
	declare export class RoomMaxParticipantsOutOfRangeError mixins TwilioError {
code: 53107;
message: "MaxParticipants is out of range"
}
	declare export class RoomMediaRegionInvalidError mixins TwilioError {
code: 53115;
message: "MediaRegion is invalid"
}
	declare export class RoomMediaRegionUnavailableError mixins TwilioError {
code: 53116;
message: "There are no media servers available in the MediaRegion"
}
	declare export class RoomNameCharsInvalidError mixins TwilioError {
code: 53102;
message: "Room name contains invalid characters"
}
	declare export class RoomNameInvalidError mixins TwilioError {
code: 53100;
message: "Room name is invalid"
}
	declare export class RoomNameTooLongError mixins TwilioError {
code: 53101;
message: "Room name is too long"
}
	declare export class RoomNotFoundError mixins TwilioError {
code: 53106;
message: "Room not found"
}
	declare export class RoomRoomExistsError mixins TwilioError {
code: 53113;
message: "Room exists"
}
	declare export class RoomStatusCallbackInvalidError mixins TwilioError {
code: 53111;
message: "StatusCallback is invalid"
}
	declare export class RoomStatusCallbackMethodInvalidError mixins TwilioError {
code: 53110;
message: "StatusCallbackMethod is invalid"
}
	declare export class RoomStatusInvalidError mixins TwilioError {
code: 53112;
message: "Status is invalid"
}
	declare export class RoomSubscriptionOperationNotSupportedError mixins TwilioError {
code: 53117;
message: "The subscription operation requested is not supported for the Room type"
}
	declare export class RoomTimeoutOutOfRangeError mixins TwilioError {
code: 53109;
message: "Timeout is out of range"
}
	declare export class RoomTypeInvalidError mixins TwilioError {
code: 53108;
message: "RoomType is not valid"
}
	declare export class SignalingConnectionDisconnectedError mixins TwilioError {
code: 53001;
message: "Signaling connection disconnected"
}
	declare export class SignalingConnectionError mixins TwilioError {
code: 53000;
message: "Signaling connection error"
}
	declare export class SignalingConnectionTimeoutError mixins TwilioError {
code: 53002;
message: "Signaling connection timed out"
}
	declare export class SignalingIncomingMessageInvalidError mixins TwilioError {
code: 53003;
message: "Client received an invalid signaling message"
}
	declare export class SignalingOutgoingMessageInvalidError mixins TwilioError {
code: 53004;
message: "Client sent an invalid signaling message"
}
	declare export class StatsReport  {
peerConnectionId: string;
localAudioTrackStats: LocalAudioTrackStats[];
localVideoTrackStats: LocalVideoTrackStats[];
remoteAudioTrackStats: RemoteAudioTrackStats[];
remoteVideoTrackStats: RemoteVideoTrackStats[]
}
	declare type Track$Kind = "audio" | "video" | "data";

declare type Track$ID = string;

declare type Track$SID = string;
	declare export class Track mixins EventEmitter {
kind: Track$Track$Kind;
name: string
}
	declare export class TrackInvalidError mixins TwilioError {
code: 53300;
message: "Track is invalid"
}
	declare export class TrackNameCharsInvalidError mixins TwilioError {
code: 53303;
message: "Track name contains invalid characters"
}
	declare export class TrackNameInvalidError mixins TwilioError {
code: 53301;
message: "Track name is invalid"
}
	declare export class TrackNameIsDuplicatedError mixins TwilioError {
code: 53304;
message: "Track name is duplicated"
}
	declare export class TrackNameTooLongError mixins TwilioError {
code: 53302;
message: "Track name is too long"
}
	declare export class TrackPublication mixins EventEmitter {
trackName: string;
trackSid: Track$Track$SID
}
	declare export class TrackServerTrackCapacityReachedError mixins TwilioError {
code: 53305;
message: "The server has reached capacity and cannot fulfill this request."
}
	declare export class TrackStats  {
trackId: Track$Track$ID;
trackSid: Track$Track$SID;
timestamp: number;
ssrc: string;
packetsLost: number | null;
codec: string | null
}
	declare export class TwilioError mixins Error {
code: number;
toString(): string
}
	declare interface VideoTrack$Dimensions {
width: number | null,
height: number | null
} 
	declare export class VideoTrack mixins Track {
isStarted: boolean;
isEnabled: boolean;
dimensions: VideoTrack$VideoTrack$Dimensions;
kind: "video";
mediaStreamTrack: MediaStreamTrack;
_attachments: HTMLMediaElement[];
attach(element?: HTMLMediaElement | string): HTMLVideoElement;
detach(element?: HTMLMediaElement | string): HTMLMediaElement[]
}
	
/**
 * Global (https://media.twiliocdn.com/sdk/js/video/releases/2.0.0-beta1/docs/global.html)
 */
declare export var version: string;
	
/**
 * Members
 */
declare export type AudioCodec = "isac" | "opus" | "PCMA" | "PCMU";
	declare export type LogLevel = "debug"
| "info"
| "warn"
| "error"
| "off";
	declare export type VideoCodec = "H264" | "VP8" | "VP9";
	
/**
 * Methods
 */
declare export function connect(token: string, options?: ConnectOptions): Promise<Room>

	declare export function createLocalAudioTrack(options?: CreateLocalTrackOptions): Promise<LocalAudioTrack>

	declare export function createLocalTracks(options?: CreateLocalTracksOptions): Promise<LocalTrack[]>

	declare export function createLocalVideoTrack(options?: CreateLocalTrackOptions): Promise<LocalVideoTrack>

	declare export function isSupported(): boolean

	declare export function rewriteLocalTrackIds(room: Room, trackStats: LocalTrackStats[]): LocalTrackStats[]

	
/**
 * Type Definitions
 */
declare export type AudioLevel = number;
	declare export type AudioTrackPublication = LocalAudioTrackPublication | RemoteAudioTrackPublication;
	declare export interface ConnectOptions {
abortOnIceServersTimeout?: boolean,
audio?: boolean | CreateLocalTrackOptions,
iceServers?: RTCIceServer[],
iceServersTimeout?: number,
iceTransportPolicy?: RTCIceTransportPolicy,
insights?: boolean,
maxAudioBitRate?: number | null,
maxVideoBitRate?: number | null,
name?: string | null,
preferredAudioCodecs?: AudioCodec[],
preferredVideoCodecs?: VideoCodec[] | VideoCodecSettings[],
logLevel?: LogLevel | LogLevels,
tracks?: LocalTrack[] | MediaStreamTrack[],
video?: boolean | CreateLocalTrackOptions
} 
	declare export type CreateLocalTrackOptions = {
logLevel?: LogLevel | LogLevels,
name?: string,
workaroundWebKitBug180748?: boolean
} & MediaTrackConstraints

	declare export interface CreateLocalTracksOptions {
audio?: boolean | CreateLocalTrackOptions,
logLevel?: LogLevel | LogLevels,
video?: boolean | CreateLocalTrackOptions
} 
	declare export type DataTrack = LocalDataTrack | RemoteDataTrack;
	declare export type DataTrackPublication = LocalDataTrackPublication | RemoteDataTrackPublication;
	declare export interface EncodingParameters {
maxAudioBitrate?: number | null,
maxVideoBitrate?: number | null
} 
	declare export interface LocalDataTrackOptions {
maxPacketLifeTime?: number | null,
maxRetransmits?: number | null,
ordered?: boolean
} 
	declare export type LocalTrack = LocalAudioTrack | LocalVideoTrack | LocalDataTrack;
	declare export interface LocalTrackOptions {
logLevel: LogLevel | LogLevels,
name?: string
} 
	declare export interface LogLevels {
default: LogLevel,
media: LogLevel,
signaling: LogLevel,
webrtc: LogLevel
} 
	declare export type NetworkQualityLevel = number;
	declare export type RemoteTrack = RemoteAudioTrack | RemoteVideoTrack | RemoteDataTrack;
	declare export interface RemoteTrackPublicationOptions {
logLevel: LogLevel | LogLevels
} 
	declare export interface TrackPublicationOptions {
logLevel: LogLevel | LogLevels
} 
	declare export interface VideoCodecSettings {
codec: VideoCodec
} 
	declare export type VideoTrackPublication = LocalVideoTrackPublication | RemoteVideoTrackPublication;
	declare export interface VP8CodecSettings {
name: VideoCodec,
simulcast?: boolean
} 
    }
