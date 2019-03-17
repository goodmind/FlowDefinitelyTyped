declare module "open-graph" {
  declare var og: typeof npm$namespace$og;

  declare var npm$namespace$og: {
    parse: typeof og$parse,
    getHTML: typeof og$getHTML
  };
  declare interface og$Metadata {
    [key: string]: string | string[] | void;

    /**
     * An alternate url to use if the webpage requires HTTPS.
     */
    secure_url?: string | string[];

    /**
     * A MIME type for this image.
     */
    type?: string | string[];
  }

  declare type og$ImageVideoMetadata = {
    /**
     * A description of what is in the image (not a caption). If the page specifies an `og:image` it should specify `og:image:alt`.
     */
    alt?: string | string[],

    /**
     * The number of pixels high.
     */
    height?: string | string[],

    /**
     * The
     */
    url?: string | string[],

    /**
     * The number of pixels wide.
     */
    width?: string | string[]
  } & og$Metadata;

  declare interface og$Data {
    [key: string]:
      | string
      | string[]
      | og$ImageVideoMetadata
      | og$Metadata
      | void;

    /**
     * A URL to an audio file to accompany this object.
     */
    audio?: string | string[] | og$Metadata;

    /**
     * A one to two sentence description of your object.
     */
    description?: string | string[];

    /**
     * The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto).
     * If auto is chosen, the consumer of your data should chose between "a" or "an". Default is "" (blank).
     */
    determiner?: string | string[];

    /**
     * An image URL which should represent your object within the graph.
     */
    image?: string | string[] | og$ImageVideoMetadata;

    /**
     * The locale these tags are marked up in. Of the format `language_TERRITORY`. Default is `en_US`.
     */
    locale?:
      | string
      | string[]
      | {
          /**
           * An array of other locales this page is available in.
           */
          alternate?: string | string[]
        };

    /**
     * If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
     */
    site_name?: string | string[];

    /**
     * The title of your object as it should appear within the graph, e.g., "The Rock".
     */
    title: string | string[];

    /**
     * The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
     */
    type?: string | string[];

    /**
     * The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "http://www.imdb.com/title/tt0117500/".
     */
    url?: string | string[];

    /**
     * A URL to a video file that complements this object.
     */
    video?: string | string[] | og$ImageVideoMetadata;
  }

  declare type og$DataCallback = (
    err: Error | null,
    data: og$Data | void
  ) => void;

  declare type og$RequestCallback = (
    err: Error | null,
    data: string | void
  ) => void;

  declare interface og$Options {
    strict?: boolean;
  }

  declare function og$parse(
    websiteContent: string,
    options?: og$Options
  ): og$Data;

  declare function og$getHTML(
    url: string | Cheerio,
    callback: og$RequestCallback
  ): void;

  declare function og(
    url: string,
    callback: og$DataCallback,
    options?: og$Options
  ): void;

  declare export default typeof og;
}
