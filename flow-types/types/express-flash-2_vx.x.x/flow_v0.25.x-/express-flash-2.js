declare interface Express$Request {
  session?: Express$Session;
}

declare interface Express$Session {
  flash: Express$Flash;
}

declare interface Express$Flash {
  [key: string]: any[];
}

declare interface Express$Response {
  /**
   * Queue flash `msg` of the given `type`.
   *
   * Examples:
   *
   *       req.flash('info', 'email sent');
   *       req.flash('error', 'email delivery failed');
   *       req.flash('info', 'email re-sent');
   *
   *
   * Formatting:
   *
   * Flash notifications also support arbitrary formatting support.
   * For example you may pass variable arguments to `req.flash()`
   * and use the %s specifier to be replaced by the associated argument:
   *
   *      req.flash('info', 'email has been sent to %s.', userName);
   *
   * Formatting uses `util.format()`, which is available on Node 0.6+.
   */
  flash(type: string, msg: string | any[]): void;
  locals: {
    flash: Express$Flash
  };
}
declare module "global" {
}
declare module "express-flash-2" {
  /**
   * Expose `flash()` function on responses.
   */
  declare function flash(): express.RequestHandler;

  declare module.exports: typeof flash;
}
