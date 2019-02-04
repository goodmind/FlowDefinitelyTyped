declare module 'unzip' {
        declare export function Extract(options: {
path: string
}): NodeJS.WritableStream

	declare export function Parse(): NodeJS.WritableStream

	
/**
 * Code example from https://www.npmjs.com/package/unzip with type unzip.Entry added
 * ```
 *  * fs.createReadStream('path/to/archive.zip')
 *  *  .pipe(unzip.Parse())
 *  *  .on('entry', function (entry: unzip.Entry) {
 *  *    var fileName = entry.path;
 *  *    var type = entry.type; // 'Directory' or 'File'
 *  *    var size = entry.size;
 *  *    if (fileName === "this IS the file I'm looking for") {
 *  *      entry.pipe(fs.createWriteStream('output/path'));
 *  *    } else {
 *  *      entry.autodrain();
 *  *    }
 *  *  });
 *  * ```
 */
declare export type Entry = {
path: string,
type: "Directory" | "File",
size: number,
autodrain: () => void
} & stream.PassThrough

    }
