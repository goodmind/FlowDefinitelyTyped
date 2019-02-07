declare module 'globalize' {
        import typeof * as Cldr from 'cldrjs';

	import typeof * as Globalize from './dist/globalize';

	import './dist/globalize/message';

	import './dist/globalize/number';

	import './dist/globalize/plural';

	import './dist/globalize/currency';

	import './dist/globalize/date';

	import './dist/globalize/relative-time';

	import './dist/globalize/unit';

	declare module.exports: typeof Globalize

    }
