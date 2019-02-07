declare module "react-youtube-embed" {
  import typeof * as React from "react";

  declare export interface YouTubeEmbedProps {
    id: string;
    aspectRatio?: string;
    prependSrc?: string;
    appendSrc?: string;
    width?: number;
  }
  declare export default class YouTubeEmbed
    mixins React.Component<YouTubeEmbedProps> {}
}
