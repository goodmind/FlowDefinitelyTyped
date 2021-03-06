declare module "imgur-rest-api" {
  declare interface ImgurRestApi$Response<T> {
    data: any;
    status: number;
    success: boolean;
  }

  declare interface ImgurRestApi$Account {
    id: number;
    url: string;
    bio: string;
    reputation: number;
    created: number;
    pro_expiration: any;
  }

  declare interface ImgurRestApi$AccountSettings {
    email: string;
    high_quality: boolean;
    public_images: boolean;
    album_privacy: string;
    pro_expiration: any;
    accepted_gallery_terms: boolean;
    active_emails: Array<string>;
    messaging_enabled: boolean;
    blocked_users: Array<ImgurRestApi$BlockedUser>;
  }

  declare interface ImgurRestApi$Album {
    id: string;
    title: string;
    description: string;
    datetime: number;
    cover: string;
    cover_width: number;
    cover_height: number;
    account_url?: string;
    account_id?: number;
    privacy: string;
    layout: string;
    views: number;
    link: string;
    favorite: boolean;
    nsfw?: boolean;
    section: string;
    order: number;
    deletehash?: string;
    images_count: number;
    images: Array<ImgurRestApi$Image>;
  }

  declare interface ImgurRestApi$BlockedUser {
    blocked_id: number;
    blocked_url: string;
  }

  declare interface ImgurRestApi$Comment {
    id: number;
    image_id: string;
    comment: string;
    author: string;
    author_id: number;
    on_album: boolean;
    album_cover: string;
    ups: number;
    downs: number;
    points: number;
    datetime: number;
    parent_id: number;
    deleted: boolean;
    vote?: string;
    children: Array<ImgurRestApi$Comment>;
  }

  declare interface ImgurRestApi$Conversation {
    id: number;
    last_message_preview: string;
    datetime: number;
    with_account_id: number;
    with_account: string;
    message_count: number;
    messages?: Array<ImgurRestApi$Message>;
    done?: boolean;
    page?: number;
  }

  declare interface ImgurRestApi$CustomGallery {
    account_url: string;
    link: string;
    tags: Array<string>;
    item_count: number;
    items: Array<ImgurRestApi$GalleryItem>;
  }

  declare interface ImgurRestApi$GalleryItem {
    id: string;
    title: string;
    description: string;
    datetime: number;
    account_url?: string;
    account_id?: number;
    ups: number;
    downs: number;
    score: number;
    is_album: boolean;
    views: number;
    link: string;
    vote?: string;
    favorite: boolean;
    nsfw?: boolean;
    comment_count: number;
    topic: string;
    topic_id: number;
  }

  declare type ImgurRestApi$GalleryAlbum = {
    cover: string,
    cover_width: number,
    cover_height: number,
    privacy: string,
    layout: string,
    images_count: number,
    images: Array<ImgurRestApi$Image>
  } & ImgurRestApi$GalleryItem;

  declare type ImgurRestApi$GalleryImage = {
    type: string,
    animated: boolean,
    width: number,
    height: number,
    size: number,
    bandwidth: number,
    deletehash?: string,
    gifv?: string,
    mp4?: string,
    webm?: string,
    looping?: boolean,
    section: string
  } & ImgurRestApi$GalleryItem;

  declare interface ImgurRestApi$GalleryProfile {
    total_gallery_comments: number;
    total_gallery_favorites: number;
    total_gallery_submissions: number;
    trophies: Array<ImgurRestApi$Trophy>;
  }

  declare interface ImgurRestApi$Trophy {
    id: number;
    name: string;
    name_clean: string;
    description: string;
    data: string;
    data_link: string;
    datetime: number;
    image: string;
  }

  declare interface ImgurRestApi$Image {
    id: string;
    title: string;
    description: string;
    datetime: number;
    type: string;
    animated: boolean;
    width: number;
    height: number;
    size: number;
    views: number;
    bandwidth: number;
    deletehash?: string;
    name?: string;
    section: string;
    link: string;
    gifv?: string;
    mp4?: string;
    webm?: string;
    looping?: boolean;
    vote?: string;
    favorite: boolean;
    nsfw?: boolean;
    account_url?: string;
    account_id?: number;
  }

  declare interface ImgurRestApi$MemeMetadata {
    meme_name: string;
    top_text: string;
    bottom_text: string;
    bg_image: string;
  }

  declare interface ImgurRestApi$Message {
    id: number;
    from: string;
    account_id: number;
    sender_id: number;
    body: string;
    conversation_id: number;
    datetime: number;
  }

  declare interface ImgurRestApi$Notification<T> {
    id: number;
    account_id: number;
    viewed: boolean;
    content: T;
  }

  declare interface ImgurRestApi$AccountNotifications {
    replies: Array<ImgurRestApi$Notification<ImgurRestApi$Comment>>;
    messages: Array<ImgurRestApi$Notification<ImgurRestApi$Conversation>>;
  }

  declare interface ImgurRestApi$Tag {
    name: string;
    followers: number;
    total_items: number;
    following?: boolean;
    items: Array<ImgurRestApi$GalleryItem>;
  }

  declare interface ImgurRestApi$TagVote {
    ups: number;
    downs: number;
    name: string;
    author: string;
  }

  declare interface ImgurRestApi$Topic {
    id: number;
    name: string;
    description: string;
  }

  declare interface ImgurRestApi$Vote {
    ups: number;
    downs: number;
  }

  declare interface ImgurRestApi$Error {
    error: string;
    request: string;
    method: string;
  }
}
