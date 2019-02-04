declare module 'clovelced-plugin-audiomanagement' {
        declare export  class AudioMode {
  constructor(...args: empty): mixed;
static +SILENT: Class<AudioMode__SILENT> & AudioMode__SILENT & 0;// 0
static +VIBRATE: Class<AudioMode__VIBRATE> & AudioMode__VIBRATE & 1;// 1
static +NORMAL: Class<AudioMode__NORMAL> & AudioMode__NORMAL & 2;// 2

}

declare class AudioMode__SILENT mixins AudioMode {}
declare class AudioMode__VIBRATE mixins AudioMode {}
declare class AudioMode__NORMAL mixins AudioMode {}

	declare export  class VolumeType {
  constructor(...args: empty): mixed;
static +RING: Class<VolumeType__RING> & VolumeType__RING & 0;// 0
static +MUSIC: Class<VolumeType__MUSIC> & VolumeType__MUSIC & 1;// 1
static +NOTIFICATION: Class<VolumeType__NOTIFICATION> & VolumeType__NOTIFICATION & 2;// 2
static +SYSTEM: Class<VolumeType__SYSTEM> & VolumeType__SYSTEM & 3;// 3

}

declare class VolumeType__RING mixins VolumeType {}
declare class VolumeType__MUSIC mixins VolumeType {}
declare class VolumeType__NOTIFICATION mixins VolumeType {}
declare class VolumeType__SYSTEM mixins VolumeType {}

	
/**
 * Sets the `AudioManagement.AudioMode` for the device.
 * @param mode the device can be set to: Silent, Normal, Vibrate
 * @param onSuccess a callback when setting succeeds.
 * @param onError a callback when setting fails.
 * @returns void
 */
declare export function setAudioMode(mode: AudioMode, onSuccess: () => void, onError: (error: any) => void): void

	
/**
 * Gets the current `AudioManagement.AudioMode` of the device.
 * @param onSuccess a callback when succeeds with an object with `label` and `audioMode` properties.
 * @param onError a callback when getting fails.
 * @returns void
 */
declare export function getAudioMode(
onSuccess: (results: {
audioMode: AudioMode,
label: string
}) => void,
onError: (error: any) => void): void

	
/**
 * Sets the specified `AudioManagement.VolumeType` for the device with the value from `volume`.
 * @param type the `AudioManagement.VolumeType` to set
 * @param volume the volume value
 * @param onSuccess a callback when setting succeeds.
 * @param onError a callback when setting fails.
 * @returns void
 */
declare export function setVolume(
type: VolumeType,
volume: number,
onSuccess: () => void,
onError: (error: any) => void): void

	
/**
 * Gets the specified `AudioManagement.VolumeType`'s `volume`.
 * @param type the `AudioManagement.VolumeType` to get
 * @param onSuccess a callback when getting succeeds with an object with numeric `volume` property.
 * @param onError a callback when getting fails.
 * @returns void
 */
declare export function getVolume(
type: VolumeType,
onSuccess: (results: {
volume: number
}) => void,
onError: (error: any) => void): void

	
/**
 * Gets the specified `AudioManagement.VolumeType`'s maximum `volume` that the device is currently set to.
 * @param type the `AudioManagement.VolumeType` to get
 * @param onSuccess a callback when getting succeeds with an object with numeric `maxVolume` property.
 * @param onError a callback when getting fails.
 * @returns void
 */
declare export function getMaxVolume(
type: VolumeType,
onSuccess: (results: {
maxVolume: number
}) => void,
onError: (error: any) => void): void

    }
