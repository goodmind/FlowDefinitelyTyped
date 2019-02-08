declare var npm$namespace$ShopifyBuy: {
  buildClient: typeof ShopifyBuy$buildClient,
  NO_IMAGE_URI: typeof ShopifyBuy$NO_IMAGE_URI
};
declare export function ShopifyBuy$buildClient(
  config: ShopifyBuy$Config
): ShopifyBuy$Client;

export interface ShopifyBuy$Client {
  product: ShopifyBuy$ShopifyBuy$ProductResource;
  collection: ShopifyBuy$ShopifyBuy$CollectionResource;
  checkout: ShopifyBuy$ShopifyBuy$CheckoutResource;
  shop: ShopifyBuy$ShopResource;
  image: ShopifyBuy$Image;
  fetchNextPage<T: ShopifyBuy$GraphModel>(nextArray: T[]): T[];
}

export interface ShopifyBuy$Config {
  domain: string;
  storefrontAccessToken: string;
}

export interface ShopifyBuy$ProductResource {
  fetch(id: string): Promise<ShopifyBuy$Product>;
  fetchAll(pageSizeopt?: number): Promise<ShopifyBuy$Product[]>;
  fetchByHandle(handle: string): Promise<ShopifyBuy$Product>;
  fetchMultiple(ids: string[]): Promise<ShopifyBuy$Product[]>;
  fetchQuery(query: ShopifyBuy$Query): Promise<ShopifyBuy$Product[]>;

  /**
   * Product Helper Namespace
   * @link https://shopify.github.io/js-buy-sdk/ProductResource.html
   */
  variantForOptions(
    product: ShopifyBuy$Product,
    options: ShopifyBuy$Option
  ): ShopifyBuy$ProductVariant;
}

export interface ShopifyBuy$CollectionResource {
  fetch(id: string): Promise<ShopifyBuy$Product[]>;
  fetchWithProducts(id: string): Promise<any[]>;
  fetchAll(pageSizeopt?: number): Promise<any[]>;
  fetchAllWithProducts(): Promise<any[]>;
  fetchByHandle(handle: string): Promise<any[]>;
  fetchQuery(query: ShopifyBuy$Query): Promise<any[]>;
}

export interface ShopifyBuy$CheckoutResource {
  create(
    email?: string,
    lineItems?: ShopifyBuy$LineItem[],
    shippingAddress?: ShopifyBuy$Address,
    note?: string,
    customAttributes?: ShopifyBuy$AttributeInput[]
  ): Promise<ShopifyBuy$Cart>;
  fetch(id: string): Promise<ShopifyBuy$Cart>;
  addLineItems(
    checkoutId: string | number,
    lineItems: ShopifyBuy$LineItem[]
  ): Promise<ShopifyBuy$Cart>;

  /**
   * Remove all line items from cart
   */
  clearLineItems(
    checkoutId: string | number,
    lineItems: ShopifyBuy$LineItem[]
  ): Promise<ShopifyBuy$Cart>;

  /**
   * Add items to cart. Updates cart's lineItems
   */
  addVariants(
    item: ShopifyBuy$Item,
    nextItem?: Array<ShopifyBuy$Item>
  ): Promise<ShopifyBuy$Cart>;

  /**
   * Remove a line item from cart based on line item id
   */
  removeLineItem(
    checkoutId: string | number,
    lineItemIds: string[]
  ): Promise<ShopifyBuy$Cart>;

  /**
   * Update a line item quantity based on line item id
   */
  updateLineItem(
    checkoutId: string | number,
    lineItems: ShopifyBuy$AttributeInput[]
  ): Promise<ShopifyBuy$Cart>;
}

export interface ShopifyBuy$ShopResource {
  fetchInfo(): Promise<ShopifyBuy$Shop>;
  fetchPolicies(): Promise<ShopifyBuy$Shop>;
}

export interface ShopifyBuy$Query {
  /**
   * query: title, collection_type, updated_at
   * TODO probably will remove before Defintely Typed PR,
   * as their  community guidelines
   */
  query: string;
  sortBy: string;
  after?: string;
  before?: string;
  first?: string;
  last?: string;
  reverse?: boolean;
}

export type ShopifyBuy$Product = {
  /**
   * A product description.
   */
  description: string,

  /**
   * Product unique ID
   */
  id: string | number,

  /**
   * An Array of Objects that contain meta data about an image including src of the images.
   */
  images: Array<ShopifyBuy$Image>,

  /**
   * All variants of a product.
   */
  variants: Array<ShopifyBuy$ProductVariant>,

  /**
   * Get an array of Product Options. Product Options can be used to define
   * the currently selectedVariant from which you can get a checkout url (ProductVariant.checkoutUrl)
   * or can be added to a cart (Cart.createLineItemsFromVariants).
   */
  options: Array<ShopifyBuy$Option>,

  /**
   * Retrieve variant for currently selected options. By default the first value in each option is selected
   * which means selectedVariant will never be null. With a selectedVariant you can
   * create checkout url (ProductVariant.checkoutUrl) or
   * it can be added to a cart (Cart.createLineItemsFromVariants).
   */
  selectedVariant: ShopifyBuy$ProductVariant,

  /**
   * Retrieve image for currently selected variantImage.
   */
  selectedVariantImage: ShopifyBuy$Image,

  /**
   * A read only Array of Strings represented currently selected option values. eg. ["Large", "Red"]
   */
  selections: Array<string>,

  /**
   * The product title
   */
  title: string,

  /**
   * The product’s vendor name
   */
  vendor: string
} & ShopifyBuy$GraphModel;

export type ShopifyBuy$ProductVariant = {
  /**
   * Variant in stock. Always true if inventory tracking is disabled.
   */
  available: boolean,

  /**
   * Compare at price for variant. The compareAtPrice would be the price of the
   * product previously before the product went on sale.
   */
  compareAtPrice: string,

  /**
   * Price of variant, formatted according to shop currency format string. For instance "$10.00"
   */
  formattedPrice: string,

  /**
   * Variant weight in grams. If no weight is defined grams will be 0.
   */
  grams: number,

  /**
   * Variant unique ID
   */
  id: string | number,

  /**
   * Image for variant
   */
  image: ShopifyBuy$Image,

  /**
   * Image variants available for a variant.
   */
  imageVariant: Array<ShopifyBuy$ImageVariant>,

  /**
   * Option values associated with this variant, ex {name: "color", value: "Blue"}
   */
  optionValues: Array<ShopifyBuy$OptionValue>,

  /**
   * Price of the variant. The price will be in the following form: "10.00"
   */
  price: string,

  /**
   * ID of product variant belongs to
   */
  productId: string | number,

  /**
   * Title of product variant belongs to
   */
  productTitle: string,

  /**
   * Title of variant
   */
  title: string,
  checkoutUrl(quantitiy: number): string
} & ShopifyBuy$GraphModel;

export interface ShopifyBuy$Option {
  /**
   * name of option (ex. "Size", "Color")
   */
  name: string;

  /**
   * get/set the currently selected option value with one of the values from the Product Options/values array.
   * For instance if the option values array had the following ["Large", "Medium", "Small"] setting selected to be
   * "Large", "Medium", or "Small" would be valid any other value would throw an Error.
   */
  selected: string;

  /**
   * an Array possible values for option. For instance if this option
   * is a "Size" option an example value for values could be: ["Large", "Medium", "Small"]
   */
  values: Array<ShopifyBuy$OptionValue>;
}

export interface ShopifyBuy$OptionValue {
  name: string;
  option_id: string;
  value: any;
}

export interface ShopifyBuy$Collection {
  handle: string;
  body_html: string;
  image: ShopifyBuy$Image;
  id: string;
  metafields: any[];
  published: boolean;
  published_at: string;
  published_scope: string;
  sort_order: string;
  template_suffix: string;
  title: string;
  updated_at: string;
}

export type ShopifyBuy$Cart = {
  /**
   * Get checkout URL for current cart
   */
  checkoutUrl: string,

  /**
   * get ID for current cart
   */
  id: string | number,

  /**
   * Gets the total quantity of all line items. Example: you've added two variants
   * with quantities 3 and 2. lineItemCount will be 5.
   */
  lineItemCount: number,

  /**
   * Get an Array of CartLineItemModel's
   */
  lineItems: ShopifyBuy$LineItem[],

  /**
   * Get current subtotal price for all line items, before shipping, taxes, and discounts.
   * Example: two items have been added to the cart that cost $1.25 then the subtotal will be 2.50
   */
  subtotalPrice: string
} & ShopifyBuy$GraphModel;

export type ShopifyBuy$LineItem = {
  /**
   * Compare at price for variant. The compareAtPrice would be the price of the product
   * previously before the product went on sale.
   * If no compareAtPrice is set then this value will be null. An example value: "5.00".
   */
  compare_at_price: string,

  /**
   * Variant's weight in grams. If no weight is set then 0 is returned.
   */
  grams: number,

  /**
   * A line item ID.
   */
  id: string | number,

  /**
   * Variant's image.
   */
  image: ShopifyBuy$Image,

  /**
   * The total price for this line item. For instance if the variant costs 1.50 and you have a
   * quantity of 2 then line_price will be 3.00.
   */
  line_price: string,

  /**
   * Price of the variant. For example: "5.00".
   */
  price: string,

  /**
   * ID of variant's product.
   */
  product_id: string | number,

  /**
   * Count of variants to order.
   */
  quantity: number,

  /**
   * Product title of variant's parent product.
   */
  title: string,

  /**
   * ID of line item variant.
   */
  variant_id: string | number,

  /**
   * Title of variant.
   */
  variant_title: string
} & ShopifyBuy$GraphModel;

export interface ShopifyBuy$Item {
  variant: ShopifyBuy$ProductVariant;
  quantity: number;
}

export interface ShopifyBuy$Address {
  address1: String;
  address2: String;
  city: String;
  company: String;
  country: String;
  firstName: String;
  lastName: String;
  phone: String;
  province: String;
  zip: String;
}

/**
 * https://help.shopify.com/api/custom-storefronts/storefront-api/reference/input_object/attributeinput
 * https://help.shopify.com/api/custom-storefronts/storefront-api/reference/input_object/checkoutlineitemupdateinput
 */
export interface ShopifyBuy$AttributeInput {
  key?: string;
  value?: string;
  id?: string | number;
  quantity?: number;
  variantId?: string;
}

/**
 * TODO Validate schema matches js-buy
 * Derived from REST API Docs: https://help.shopify.com/api/custom-storefronts/storefront-api/reference/object/shop#fields
 */
export interface ShopifyBuy$Shop {
  description: string;
  moneyFormat: string;
  name: string;

  /**
   * TODO Add types for the Shop properties below
   * PaymentSettings, ShopPolicy etc
   */
  paymentSettings: any;
  primaryDomain: any;
  privacyPolicy: any;
  refundPolicy: any;
  termsOfService: any;
}

/**
 * Internal Image description
 */
export type ShopifyBuy$Image = {
  id: string | number,
  created_at: string,
  position: number,
  updated_at: string,
  product_id: string,
  src: string,
  variant_ids: Array<string>
} & ShopifyBuy$GraphModel;

export type ShopifyBuy$ImageVariant = {
  name: string,
  dimensions: string,
  src: string,

  /**
   * Returns src URL for new image size/variant
   * @param image The image you would like a different size for.
   * @param options Image Max width and height configuration.
   */
  imageForSize(
    image: ShopifyBuy$Image,
    options: ShopifyBuy$ImageOptions
  ): string
} & ShopifyBuy$Image;

export interface ShopifyBuy$ImageOptions {
  maxWidth: number;
  maxHeight: number;
}

declare var ShopifyBuy$NO_IMAGE_URI: string;

export interface ShopifyBuy$GraphModel {
  attrs?: any;
  onlineStoreUrl?: string;
}
declare module "shopify-buy" {
  declare export default typeof ShopifyBuy;
}
