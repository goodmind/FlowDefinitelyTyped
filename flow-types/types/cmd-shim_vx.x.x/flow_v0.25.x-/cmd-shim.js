declare module "cmd-shim" {
  /**
   * Create a cmd shim at `to` for the command line program at `from`. e.g.
   *
   *      var cmdShim = require('cmd-shim');
   *      cmdShim(__dirname + '/cli.js', '/usr/bin/command-name', function (err) {
   *          if (err) throw err;
   *      });
   */
  declare function cmdShim(
    from: string,
    to: string,
    cb: (err: any) => void
  ): void;

  declare var npm$namespace$cmdShim: {
    ifExists: typeof cmdShim$ifExists
  };

  /**
   * Create a cmd shim at `to` for the command line program at `from`, but will just
   * continue if the file does not exist.
   *
   *      var cmdShim = require('cmd-shim');
   *      cmdShim.ifExists(__dirname + '/cli.js', '/usr/bin/command-name', function (err) {
   *          if (err) throw err;
   *      });
   */
  declare function cmdShim$ifExists(
    from: string,
    to: string,
    cb: (err: any) => void
  ): void;

  declare module.exports: typeof cmdShim;
}
