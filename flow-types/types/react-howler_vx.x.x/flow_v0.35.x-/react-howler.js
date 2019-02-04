declare module 'react-howler' {
        import typeof * as React from 'react';

	import type {
          Howl
        } from 'howler';

	declare  class HOWLER_STATE {
  constructor(...args: empty): mixed;
static +UNLOADED: Class<HOWLER_STATE__UNLOADED> & HOWLER_STATE__UNLOADED & "unloaded";// "unloaded"
static +LOADING: Class<HOWLER_STATE__LOADING> & HOWLER_STATE__LOADING & "loading";// "loading"
static +LOADED: Class<HOWLER_STATE__LOADED> & HOWLER_STATE__LOADED & "loaded";// "loaded"

}

declare class HOWLER_STATE__UNLOADED mixins HOWLER_STATE {}
declare class HOWLER_STATE__LOADING mixins HOWLER_STATE {}
declare class HOWLER_STATE__LOADED mixins HOWLER_STATE {}

	declare interface Props {
src: string | string[],
format?: string[],
playing?: boolean,
mute?: boolean,
loop?: boolean,
preload?: boolean,
volume?: number,
onEnd?: () => void,
onPause?: () => void,
onPlay?: (id: number) => void,
onVolume?: (id: number) => void,
onStop?: (id: number) => void,
onLoad?: () => void,
onLoadError?: (id: number) => void,
html5?: boolean
} 
	declare class ReactHowler mixins React.Component<Props> {
stop(id?: number): void;
duration(id?: number): number;
seek(time: number): number;
howlerState(): HOWLER_STATE;
howler: Howl
}
	declare export default typeof ReactHowler

    }
