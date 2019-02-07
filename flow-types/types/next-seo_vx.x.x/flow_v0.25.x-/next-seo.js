declare module "next-seo" {
  import type { Component } from "react";

  declare export interface NextSeoProps {
    config: Config;
  }
  declare export interface Config {
    title?: string;
    titleTemplate?: string;
    description?: string;
    canonical?: string;
    dangerouslySetAllPagesToNoIndex?: boolean;
    noindex?: boolean;
    twitter?: Twitter;
    facebook?: Facebook;
    openGraph?: OpenGraph;
  }
  declare export interface Twitter {
    cardType?: string;
    site?: string;
    handle?: string;
  }
  declare export interface Facebook {
    appId?: number;
  }
  declare export interface OpenGraph {
    url?: string;
    type?: string;
    title?: string;
    description?: string;
    images?: $ReadOnlyArray<OpenGraphImages>;
    defaultImageHeight?: number;
    defaultImageWidth?: number;
    locale?: string;
    site_name?: string;
    profile?: OpenGraphProfile;
    book?: OpenGraphBook;
    article?: OpenGraphArticle;
  }
  declare export interface OpenGraphImages {
    url?: string;
    width?: number;
    height?: number;
    alt?: string;
  }
  declare export interface OpenGraphProfile {
    firstName?: string;
    lastName?: string;
    username?: string;
    gender?: string;
  }
  declare export interface OpenGraphBook {
    authors?: $ReadOnlyArray<string>;
    isbn?: string;
    releaseDate?: string;
    tags?: $ReadOnlyArray<string>;
  }
  declare export interface OpenGraphArticle {
    publishedTime?: string;
    modifiedTime?: string;
    expirationTime?: string;
    authors?: $ReadOnlyArray<string>;
    section?: string;
    tags?: $ReadOnlyArray<string>;
  }
  declare export default class NextSeo mixins Component<NextSeoProps> {}
}
