declare module 'styled-jsx' {
        import 'react';

	import typeof * as css from './css';

	import typeof * as server from './server';

	declare module 'react' {
        declare type StyleHTMLAttributes<T> = {
jsx?: boolean,
global?: boolean
} & HTMLAttributes<T>

    }

    }
