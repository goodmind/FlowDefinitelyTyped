declare module 'json2csv' {
        import type {
          json2csv
        } from './JSON2CSVBase';

	import typeof JSON2CSVParser from './JSON2CSVParser';

	import typeof JSON2CSVTransform from './JSON2CSVTransform';

	declare export {
          json2csv,Parser,Transform
        }

	declare export function parse<T>(data: $ReadOnly<T> | $ReadOnlyArray<T>, opts?: json2csv.Options<T>): string

    }
