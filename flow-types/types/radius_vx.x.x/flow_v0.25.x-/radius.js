declare module "radius" {
  /**
   * {@link https://github.com/retailnext/node-radius#radiusdecodeargs} for more info.
   */
  declare export function decode(args: DecodeArgsWithSecret): RadiusPacket;

  /**
   * {@link https://github.com/retailnext/node-radius#radiusdecode_without_secretargs} for more info.
   */
  declare export function decode_without_secret(args: DecodeArgs): RadiusPacket;

  /**
   * {@link https://github.com/retailnext/node-radius#radiusencodeargs} for more info.
   */
  declare export function encode(args: EncodeArgs): Buffer;

  /**
   * {@link https://github.com/retailnext/node-radius#radiusencode_responseargs} for more info.
   */
  declare export function encode_response(args: EncodeResponseArgs): Buffer;

  /**
   * {@link https://github.com/retailnext/node-radius#radiusverify_responseargs} for more info.
   */
  declare export function verify_response(args: VerifyResponseArgs): boolean;

  /**
   * {@link https://github.com/retailnext/node-radius#radiusadd_dictionarypath} for more info.
   * @param path Can be either a path to a file or a directory.
   */
  declare export function add_dictionary(path: string): void;

  declare export function unload_dictionaries(): void;

  /**
   * {@link https://github.com/retailnext/node-radius#radiusdecode_without_secretargs} for more info.
   */
  declare interface DecodeArgs {
    packet: Buffer;
  }

  /**
   * {@link https://github.com/retailnext/node-radius#radiusdecodeargs} for more info.
   */
  declare type DecodeArgsWithSecret = {
    secret: string
  } & DecodeArgs;

  /**
   * {@link https://github.com/retailnext/node-radius#radiusencodeargs} for more info.
   */
  declare interface EncodeArgs {
    code: string;
    secret: string;
    identifier?: number;

    /**
     * This can be an object: { attribute_name: attribute_value, ... },
     * an array within an array: [ [ attribute_name, attribute_value ], ... ],
     * or if you haven't loaded a dictionary for the attributes: [ [ attribute_id, Buffer ], ... ].
     *
     * Tag field-attributes can be specified like so: [ [ attribute_name, tag_number, attribute_value ] ... ]
     */
    attributes?: any;
    add_message_authenticator?: boolean;
  }

  /**
   * {@link https://github.com/retailnext/node-radius#radiusencode_responseargs} for more info.
   */
  declare interface EncodeResponseArgs {
    packet: RadiusPacket;
    code: string;
    secret: string;
    attributes?: any;
  }

  /**
   * {@link https://github.com/retailnext/node-radius#radiusverify_responseargs} for more info.
   */
  declare interface VerifyResponseArgs {
    request: Buffer;
    response: Buffer;
    secret: string;
  }
  declare interface RadiusPacket {
    code: string;
    identifier: number;
    length: number;
    attributes: any;
    raw_attributes: Array<Array<any>>;
  }
}
