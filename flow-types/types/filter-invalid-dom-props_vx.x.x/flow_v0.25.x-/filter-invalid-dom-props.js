declare module "filter-invalid-dom-props" {
  declare export default function filterInvalidDOMProps<T>(props: T): $Shape<T>;
}
