declare module "react-share" {
  import typeof * as React from "react";

  declare export interface CommonShareButtonProps {
    /**
     * URL of the shared page
     */
    url: string;

    /**
     * Disables click action and adds `disabled` class
     */
    disabled?: boolean;

    /**
     * Style when button is disabled
     * @default { opacity: 0.6 }
     */
    disabledStyle?: React.StyleHTMLAttributes<HTMLDivElement>;
    windowWidth?: number;
    windowHeight?: number;

    /**
     * Takes a function that returns a Promise to be fulfilled before calling
     * `onClick`. If you do not return promise, `onClick` is called immediately.
     */
    beforeOnClick?: () => Promise<void>;

    /**
     * Takes a function to be called after closing share dialog.
     */
    onShareWindowClose?: () => void;

    /**
     * An object to pass any additional properties, such as `aria-*` attributes.
     */
    additionalProps?: React.HTMLAttributes<HTMLDivElement>;
  }
  declare export var FacebookShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      /**
       * A quote to be shared along with the link.
       */
      quote?: string,

      /**
       * A hashtag specified by the developer to be added to the shared
       * content. People will still have the opportunity to remove this
       * hashtag in the dialog. The hashtag should include the hash symbol.
       */
      hashtag?: string
    }
  >;
  declare export var GooglePlusShareButton: React.StatelessComponent<CommonShareButtonProps>;
  declare export var LinkedinShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      /**
       * Title of the shared page
       */
      title?: string,

      /**
       * Description of the shared page
       */
      description?: string
    }
  >;
  declare export var TwitterShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      /**
       * Title of the shared page
       */
      title?: string,
      via?: string,
      hashtags?: string[]
    }
  >;
  declare export var TelegramShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      /**
       * Title of the shared page
       */
      title?: string
    }
  >;
  declare export var WhatsappShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      /**
       * Title of the shared page
       */
      title?: string,

      /**
       * Separates title from the url
       * @default ' '
       */
      separator?: string
    }
  >;
  declare export var PinterestShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      media: string,

      /**
       * Description of the shared page
       */
      description?: string
    }
  >;
  declare export var VKShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      /**
       * Title of the shared page
       */
      title?: string,

      /**
       * Description of the shared page
       */
      description?: string,

      /**
       * An absolute link to the image that will be shared
       */
      image?: string
    }
  >;
  declare export var OKShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      /**
       * Title of the shared page
       */
      title?: string,

      /**
       * Description of the shared page
       */
      description?: string
    }
  >;
  declare export var RedditShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      /**
       * Title of the shared page
       */
      title?: string
    }
  >;
  declare export var TumblrShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      /**
       * Title of the shared page
       */
      title?: string,
      tags?: string[],

      /**
       * Description of the shared page
       */
      caption?: string
    }
  >;
  declare export var LivejournalShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      title?: string,
      description?: string
    }
  >;
  declare export var MalruShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      /**
       * Title of the shared page
       */
      title?: string,

      /**
       * Description of the shared page
       */
      description?: string,

      /**
       * An absolute link to the image that will be shared
       */
      image?: string
    }
  >;
  declare export var EmailShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
      /**
       * Title of the shared page
       */
      subject?: string,

      /**
       * Body of the email, defaults to shared url.
       */
      body?: string
    }
  >;
  declare export interface ShareCountComponentProps {
    /**
     * The URL you are sharing
     */
    url: string;

    /**
     * Classes to apply (if any)
     */
    className?: string;

    /**
     * Supply a function as the child to render anything but the count
     */
    children?: (shareCount: number) => React.Node;
  }
  declare export var FacebookShareCount: React.StatelessComponent<ShareCountComponentProps>;
  declare export var GooglePlusShareCount: React.StatelessComponent<ShareCountComponentProps>;
  declare export var LinkedinShareCount: React.StatelessComponent<ShareCountComponentProps>;
  declare export var PinterestShareCount: React.StatelessComponent<ShareCountComponentProps>;
  declare export var VKShareCount: React.StatelessComponent<ShareCountComponentProps>;
  declare export var OKShareCount: React.StatelessComponent<ShareCountComponentProps>;
  declare export var RedditShareCount: React.StatelessComponent<ShareCountComponentProps>;
  declare export var TumblrShareCount: React.StatelessComponent<ShareCountComponentProps>;
  declare export interface IconComponentProps {
    /**
     * Icon size in pixels
     */
    size?: number;

    /**
     * Whether to show round or rect icons
     */
    round?: boolean;

    /**
     * Customize background style, e.g. fill
     */
    iconBgStyle?: React.CSSProperties;

    /**
     * Customize logo's fill color
     * @default 'white'
     */
    logoFillColor?: string;
  }
  declare export var FacebookIcon: React.StatelessComponent<IconComponentProps>;
  declare export var TwitterIcon: React.StatelessComponent<IconComponentProps>;
  declare export var TelegramIcon: React.StatelessComponent<IconComponentProps>;
  declare export var WhatsappIcon: React.StatelessComponent<IconComponentProps>;
  declare export var GooglePlusIcon: React.StatelessComponent<IconComponentProps>;
  declare export var LinkedinIcon: React.StatelessComponent<IconComponentProps>;
  declare export var PinterestIcon: React.StatelessComponent<IconComponentProps>;
  declare export var VKIcon: React.StatelessComponent<IconComponentProps>;
  declare export var OKIcon: React.StatelessComponent<IconComponentProps>;
  declare export var RedditIcon: React.StatelessComponent<IconComponentProps>;
  declare export var TumblrIcon: React.StatelessComponent<IconComponentProps>;
  declare export var LivejournalIcon: React.StatelessComponent<IconComponentProps>;
  declare export var MailruIcon: React.StatelessComponent<IconComponentProps>;
  declare export var EmailIcon: React.StatelessComponent<IconComponentProps>;
}
