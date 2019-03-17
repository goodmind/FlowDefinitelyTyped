declare module "giphy-api" {
  declare type Rating = "y" | "g" | "pg" | "pg-13" | "r";
  declare type Format = "html" | "json";
  declare interface BaseOptions {
    rating: Rating;
    fmt?: Format;
  }
  declare type TranslateOptions = {
    s: string
  } & BaseOptions;

  declare type RandomOptions = {
    tag: string
  } & BaseOptions;

  declare type TrendingOptions = {
    limit?: number
  } & BaseOptions;

  declare interface BaseImage {
    url: string;
    width: string;
    height: string;
  }
  declare interface BaseResponse {
    pagination: {
      total_count: number,
      count: number,
      offset: number
    };
    meta: {
      status: number,
      msg: string,
      response_id: string
    };
  }
  declare type Callback<TResponse> = (err: Error, res: TResponse) => void;
  declare function giphyApi(
    apiKeyOrOptions?: string | giphyApi$GiphyOptions
  ): giphyApi$Giphy;

  declare interface giphyApi$GiphyOptions {
    https?: boolean;
    timeout?: number;
    apiKey?: string;
  }

  declare type giphyApi$SearchOptions = {
    q: string,
    limit?: number,
    offset?: number
  } & BaseOptions;

  declare interface giphyApi$Giphy {
    search(
      queryOrOptions: string | giphyApi$SearchOptions,
      cb: Callback<giphyApi$MultiResponse>
    ): void;
    search(
      queryOrOptions: string | giphyApi$SearchOptions
    ): Promise<giphyApi$MultiResponse>;
    id(ids: string | string[], cb: Callback<giphyApi$MultiResponse>): void;
    id(ids: string | string[]): Promise<giphyApi$MultiResponse>;
    translate(
      termOrOptions: string | TranslateOptions,
      cb: Callback<giphyApi$SingleResponse>
    ): void;
    translate(
      termOrOptions: string | TranslateOptions
    ): Promise<giphyApi$SingleResponse>;
    random(
      tagOrOptions: string | RandomOptions,
      cb: Callback<giphyApi$SingleResponse>
    ): void;
    random(
      tagOrOptions: string | RandomOptions
    ): Promise<giphyApi$SingleResponse>;
    trending(
      options: TrendingOptions,
      cb: Callback<giphyApi$MultiResponse>
    ): void;
    trending(cb: Callback<giphyApi$MultiResponse>): void;
    trending(options?: TrendingOptions): Promise<giphyApi$MultiResponse>;
  }

  declare interface giphyApi$Images {
    fixed_height: BaseImage & {
      size: string,
      mp4: string,
      mp4_size: string,
      webp: string,
      webp_size: string
    };
    fixed_height_still: BaseImage;
    fixed_height_downsampled: BaseImage & {
      size: string,
      webp: string,
      webp_size: string
    };
    fixed_width: BaseImage & {
      size: string,
      mp4: string,
      mp4_size: string,
      webp: string,
      webp_size: string
    };
    original_still: BaseImage;
    fixed_width_still: BaseImage;
    fixed_width_downsampled: BaseImage & {
      size: string,
      webp: string,
      webp_size: string
    };
    fixed_height_small: BaseImage & {
      size: string,
      mp4: string,
      mp4_size: string,
      webp: string,
      webp_size: string
    };
    fixed_height_small_still: BaseImage;
    fixed_width_small: BaseImage & {
      size: string,
      mp4: string,
      mp4_size: string,
      webp: string,
      webp_size: string
    };
    fixed_width_small_still: BaseImage;
    downsized: BaseImage & {
      size: string
    };
    downsized_still: BaseImage;
    downsized_large: BaseImage & {
      size: string
    };
    downsized_medium: BaseImage & {
      size: string
    };
    downsized_small: BaseImage & {
      size: string
    };
    original: BaseImage & {
      size: string,
      frames: string,
      mp4: string,
      mp4_size: string,
      webp: string,
      webp_size: string
    };
    looping: {
      mp4: string
    };
    preview: {
      width: string,
      height: string,
      mp4: string,
      mp4_size: string
    };
    preview_gif: BaseImage & {
      size: string
    };
  }

  declare interface giphyApi$GIFObject {
    type: string;
    id: string;
    slug: string;
    url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    rating: Rating;
    content_url: string;
    user?: {
      avatar_url: string,
      banner_url: string,
      profile_url: string,
      username: string,
      display_name: string,
      twitter: string
    };
    source_tld: string;
    source_post_url: string;
    update_datetime: string;
    create_datetime: string;
    import_datetime: string;
    trending_datetime: string;
    title: string;
    images: giphyApi$Images;
  }

  declare type giphyApi$MultiResponse = {
    data: giphyApi$GIFObject[]
  } & BaseResponse;

  declare type giphyApi$SingleResponse = {
    data: giphyApi$GIFObject
  } & BaseResponse;

  declare export default typeof giphyApi;
}
