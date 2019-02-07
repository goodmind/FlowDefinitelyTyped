declare type DotObject$DotConstructor = {
  new(separator: string): DotObject$Dot
} & DotObject$Dot;

declare interface DotObject$ModifierFunctionWrapper {
  (arg: any): any;
}

declare interface DotObject$Dot {
  /**
   * Copy a property from one object to another object.
   *
   * If the source path does not exist (undefined)
   * the property on the other object will not be set.
   * @param {String} source
   * @param {String} target
   * @param {Object} obj1
   * @param {Object} obj2
   * @param {Function | Array} mods
   * @param {Boolean} merge
   */
  copy(
    source: string,
    target: string,
    obj1: any,
    obj2: any,
    mods?:
      | DotObject$ModifierFunctionWrapper
      | Array<DotObject$ModifierFunctionWrapper>,
    merge?: boolean
  ): void;

  /**
   * Convert object to dotted-key/value pair
   *
   * Usage:
   *    var tgt = {}
   *    dot.dot(obj, tgt)
   * @param {Object} obj source object
   * @param {Object} tgt target object
   */
  dot(obj: any, tgt: any): void;

  /**
   * Convert object to dotted-key/value pair
   *
   * Usage:
   *
   *    var tgt = dot.dot(obj)
   * @param {Object} obj source object
   * @return {Object} result
   */
  dot(obj: any): any;

  /**
   * Remove value from an object using dot notation.
   * @param {String} path
   * @param {Object} obj
   * @return {Mixed} The removed value
   */
  del(path: string, obj: any): any;

  /**
   * Move a property from one place to the other.
   *
   * If the source path does not exist (undefined)
   * the target property will not be set.
   * @param {String} source
   * @param {String} target
   * @param {Object} obj
   * @param {Function | Array} mods
   * @param {Boolean} merge
   */
  move(
    source: string,
    target: string,
    obj: any,
    mods?:
      | DotObject$ModifierFunctionWrapper
      | Array<DotObject$ModifierFunctionWrapper>,
    merge?: boolean
  ): void;

  /**
   * Converts an object with dotted-key/value pairs to it's expanded version
   *
   * Optionally transformed by a set of modifiers.
   *
   * Usage:
   *
   *    var row = {
   *      'nr': 200,
   *      'doc.name': '  My Document  '
   *    }
   *
   *    var mods = {
   *      'doc.name': [_s.trim, _s.underscored]
   *    }
   *
   *    dot.object(row, mods)
   * @param {Object} obj
   * @param {Object} mods
   */
  object(
    obj: any,
    mods?:
      | DotObject$ModifierFunctionWrapper
      | Array<DotObject$ModifierFunctionWrapper>
  ): void;

  /**
   * Pick a value from an object using dot notation.
   *
   * Optionally remove the value
   * @param {String} path
   * @param {Object} obj
   * @param {Boolean} remove
   */
  pick(path: string, obj: any, remove?: boolean): any;

  /**
   * Remove value from an object using dot notation.
   * @param {String} path
   * @param {Object} obj
   * @return {Mixed} The removed value
   */
  remove(path: string, obj: any): any;

  /**
   * Replace/create with a string
   * @param {String} path dotted path
   * @param {String} v value to be set
   * @param {Object} obj object to be modified
   * @param {Function | Array} mods optional modifier
   */
  str(
    path: string,
    v: any,
    obj: { [key: string]: any },
    mods?:
      | DotObject$ModifierFunctionWrapper
      | Array<DotObject$ModifierFunctionWrapper>
  ): void;

  /**
   * Replace/merge an object to an existing object property
   * @param {String} path dotted path
   * @param {Object} v object to be set
   * @param {Object} obj object to be modified
   * @param {Boolean} merge optional merge
   */
  set(path: string, v: any, obj: { [key: string]: any }, merge?: boolean): void;

  /**
   * Transfer a property from one object to another object.
   *
   * If the source path does not exist (undefined)
   * the property on the other object will not be set.
   * @param {String} source
   * @param {String} target
   * @param {Object} obj1
   * @param {Object} obj2
   * @param {Function | Array} mods
   * @param {Boolean} merge
   */
  transfer(
    source: string,
    target: string,
    obj1: any,
    obj2: any,
    mods?:
      | DotObject$ModifierFunctionWrapper
      | Array<DotObject$ModifierFunctionWrapper>,
    merge?: boolean
  ): void;

  /**
   * Transform an object
   *
   * Usage:
   *
   *    var obj = {
   *      "id": 1,
   *  "some": {
   *  "thing": "else"
   *  }
   *    }
   *
   *    var transform = {
   *      "id": "nr",
   *  "some.thing": "name"
   *    }
   *
   *    var tgt = dot.transform(transform, obj)
   * @param {Object} recipe Transform recipe
   * @param {Object} obj Object to be transformed
   * @param {Array} mods modifiers for the target
   */
  transform(
    recipe: any,
    obj: any,
    mods?:
      | DotObject$ModifierFunctionWrapper
      | Array<DotObject$ModifierFunctionWrapper>
  ): void;
}
declare var dot: DotObject$DotObject$DotConstructor;
declare module "dot-object" {
  declare module.exports: typeof dot;
}
