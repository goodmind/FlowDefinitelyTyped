declare module 'gl-react-dom' {
        import typeof * as glReact from 'gl-react';

	import type {
          GLViewDOM,GLViewDOMProps
        } from './GLViewDOM';

	declare export type SurfaceProps = {} & glReact.SurfaceProps & GLViewDOMProps

	declare export class Surface mixins glReact.Surface<GLViewDOM> {
props: SurfaceProps
}
    }
