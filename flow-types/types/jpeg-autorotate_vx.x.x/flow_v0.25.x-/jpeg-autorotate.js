declare module "jpeg-autorotate" {
  declare export class errors {
    constructor(...args: empty): mixed;
    static +read_file: Class<errors__read_file> &
      errors__read_file &
      "read_file"; // "read_file"
    static +read_exif: Class<errors__read_exif> &
      errors__read_exif &
      "read_exif"; // "read_exif"
    static +no_orientation: Class<errors__no_orientation> &
      errors__no_orientation &
      "no_orientation"; // "no_orientation"
    static +unknown_orientation: Class<errors__unknown_orientation> &
      errors__unknown_orientation &
      "unknown_orientation"; // "unknown_orientation"
    static +correct_orientation: Class<errors__correct_orientation> &
      errors__correct_orientation &
      "correct_orientation"; // "correct_orientation"
    static +rotate_file: Class<errors__rotate_file> &
      errors__rotate_file &
      "rotate_file"; // "rotate_file"
  }

  declare class errors__read_file mixins errors {}
  declare class errors__read_exif mixins errors {}
  declare class errors__no_orientation mixins errors {}
  declare class errors__unknown_orientation mixins errors {}
  declare class errors__correct_orientation mixins errors {}
  declare class errors__rotate_file mixins errors {}

  declare export type CustomError = {
    code: errors
  } & Error;

  declare export function rotate(
    path_or_buffer: string | Buffer,
    options?: {
      quality?: number
    },
    module_callback?: (
      error: CustomError | null,
      buffer: Buffer | null,
      orientation: number | null,
      dimensions: {
        height: number,
        width: number
      } | null
    ) => void
  ): void;
}
