declare module 'gl-react-expo' {
        import typeof * as glReact from 'gl-react';

	import type {
          GLViewNative,GLViewNativeProps
        } from './GLViewNative';

	declare export type SurfaceProps = {} & glReact.SurfaceProps & GLViewNativeProps

	declare export class Surface mixins glReact.Surface<GLViewNative> {
props: SurfaceProps
}
    }
