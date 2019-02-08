declare module "form-urlencoded" {
  declare export interface FormEncodedOptions {
    sorted?: boolean;
    skipIndex?: boolean;
    ignorenull?: boolean;
  }
  declare export default function fn(
    data: any,
    opts?: FormEncodedOptions
  ): string;
}
