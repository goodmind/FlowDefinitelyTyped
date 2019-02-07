declare module "node-xlsx" {
  /**
   * parsing a xlsx from file/buffer, outputs an object of worksheets
   * @param mixed file path or buffer
   * @param options options is for xlsx
   * @returns worksheets data, like: { name: 'worksheets', data: [[1,2,3],['1', '2','word']] }
   */
  declare export function parse(
    mixed: string | ArrayBuffer,
    options?: {}
  ): Array<{
    name: string,
    data: Array<[]>
  }>;

  /**
   * building a xlsx
   * @param worksheets worksheets data, like:{ name: 'worksheets', data: [[1,2,3],['1', '2','word']] }
   * @param options spannig multiple rows A1:A4
   * @returns returns a buffer of worksheets
   */
  declare export function build(
    worksheets: Array<{
      name: string,
      data: any[][]
    }>,
    options?: {}
  ): ArrayBuffer;

  declare var _default: {
    parse: typeof parse,
    build: typeof build
  };
  declare export default typeof _default;
}
