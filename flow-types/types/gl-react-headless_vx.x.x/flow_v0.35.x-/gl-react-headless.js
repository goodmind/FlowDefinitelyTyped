declare module 'gl-react-headless' {
        import typeof * as glReact from 'gl-react';

	import type {
          GLViewHeadless,GLViewHeadlessProps
        } from './GLViewHeadless';

	declare export type SurfaceProps = {} & glReact.SurfaceProps & GLViewHeadlessProps

	declare export class Surface mixins glReact.Surface<GLViewHeadless> {
props: SurfaceProps
}
    }
