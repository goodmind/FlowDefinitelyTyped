declare module "lyricist" {
  declare class Lyricist {
    constructor(accessToken: string): this;
    album(
      id: number,
      opts?: {
        fetchTracklist?: boolean,
        textFormat?: $Values<typeof Lyricist$LyricistTextFormat>
      }
    ): Promise<Lyricist$Album>;
    artist(
      id: number,
      opts: {
        textFormat?: $Values<typeof Lyricist$LyricistTextFormat>
      }
    ): Promise<Lyricist$Artist>;
    artistByName(
      name: string,
      opts: {
        textFormat?: $Values<typeof Lyricist$LyricistTextFormat>
      }
    ): Promise<Lyricist$Artist>;
    search(query: string): Promise<Lyricist$SearchResult[]>;
    song(
      id: number,
      opts?: {
        fetchLyrics?: boolean,
        textFormat?: $Values<typeof Lyricist$LyricistTextFormat>
      }
    ): Promise<Lyricist$Song>;
    songsByArtist(
      id: number,
      opts?: {
        page?: number,
        perPage?: number,
        sort?: "asc" | "desc"
      }
    ): Promise<Lyricist$SongByArtist[]>;
  }
  declare var Lyricist: typeof npm$namespace$Lyricist;

  declare var npm$namespace$Lyricist: {
    LyricistTextFormat: typeof Lyricist$LyricistTextFormat
  };

  declare var Lyricist$LyricistTextFormat: {|
    +DOM: "dom", // "dom"
    +PLAIN: "plain", // "plain"
    +HTML: "html" // "html"
  |};

  declare interface Lyricist$Description {
    "NO PRINT IMPLEMENTED: ComputedPropertyName"?: { [key: string]: any };
    "NO PRINT IMPLEMENTED: ComputedPropertyName"?: string;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"?: string;
  }

  declare interface Lyricist$Song {
    annotation_count: number;
    api_path: string;
    apple_music_id?: any;
    apple_music_player_url: string;
    description: Lyricist$Description;
    embed_content: string;
    featured_video: boolean;
    full_title: string;
    header_image_thumbnail_url: string;
    header_image_url: string;
    id: number;
    lyrics: string;
    lyrics_owner_id: number;
    lyrics_state: string;
    path: string;
    pyongs_count?: any;
    recording_location?: any;
    release_date: string;
    song_art_image_thumbnail_url: string;
    song_art_image_url: string;
    stats: {
      accepted_annotations: number,
      contributors: number,
      hot: boolean,
      iq_earners: number,
      transcribers: number,
      unreviewed_annotations: number,
      verified_annotations: number,
      pageviews: number
    };
    title: string;
    title_with_featured: string;
    url: string;
    current_user_metadata: {
      permissions: string[],
      excluded_permissions: string[],
      interactions: {
        pyong: boolean,
        following: boolean
      },
      relationships: any,
      iq_by_action: any
    };
    album?: any;
    custom_performances: any[];
    description_annotation: Lyricist$DescriptionAnnotation;
    featured_artists: any[];
    lyrics_marked_complete_by?: any;
    media: Lyricist$Media[];
    primary_artist: Lyricist$ArtistBrief;
    producer_artists: Lyricist$ArtistBrief[];
    song_relationships: Array<{
      type: string,
      songs: any[]
    }>;
    verified_annotations_by: any[];
    verified_contributors: any[];
    verified_lyrics_by: any[];
    writer_artists: Lyricist$ArtistBrief[];
  }

  declare interface Lyricist$ClientTimestamps {
    updated_by_human_at: number;
    lyrics_updated_at: number;
  }

  declare interface Lyricist$AvatarConfig {
    url: string;
    bounding_box: {
      width: number,
      height: number
    };
  }

  declare interface Lyricist$Avatar {
    tiny: Lyricist$AvatarConfig;
    thumb: Lyricist$AvatarConfig;
    small: Lyricist$AvatarConfig;
    medium: Lyricist$AvatarConfig;
  }

  declare interface Lyricist$User {
    api_path: string;
    avatar: Lyricist$Avatar;
    header_image_url: string;
    human_readable_role_for_display: string;
    id: number;
    iq: number;
    login: string;
    name: string;
    role_for_display: string;
    url: string;
    current_user_metadata: {
      permissions: any[],
      excluded_permissions: string[],
      interactions: {
        following: boolean
      },
      features: any[]
    };
  }

  declare interface Lyricist$Author {
    attribution: number;
    pinned_role?: any;
    user: Lyricist$User;
  }

  declare interface Lyricist$Annotation {
    api_path: string;
    body: Lyricist$Description;
    comment_count: number;
    community: boolean;
    custom_preview?: any;
    has_voters: boolean;
    id: number;
    pinned: boolean;
    share_url: string;
    source?: any;
    state: string;
    url: string;
    verified: boolean;
    votes_total: number;
    current_user_metadata: {
      permissions: string[],
      excluded_permissions: string[],
      interactions: {
        cosign: boolean,
        pyong: boolean,
        vote?: any
      },
      iq_by_action: any
    };
    authors: Lyricist$Author[];
    cosigned_by: any[];
    rejection_comment?: any;
    verified_by?: any;
  }

  declare interface Lyricist$DescriptionAnnotation {
    _type: string;
    annotator_id: number;
    annotator_login: string;
    api_path: string;
    classification: string;
    fragment: string;
    id: number;
    is_description: boolean;
    path: string;
    range: {
      content: string
    };
    song_id: number;
    url: string;
    verified_annotator_ids: any[];
    annotatable: {
      api_path: string,
      client_timestamps: Lyricist$ClientTimestamps,
      context: string,
      id: number,
      image_url: string,
      link_title: string,
      title: string,
      type: string,
      url: string
    };
    annotations: Lyricist$Annotation[];
  }

  declare interface Lyricist$Media {
    provider: string;
    start: number;
    type: string;
    url: string;
  }

  declare interface Lyricist$ArtistBrief {
    api_path: string;
    header_image_url: string;
    id: number;
    image_url: string;
    is_meme_verified: boolean;
    is_verified: boolean;
    name: string;
    url: string;
  }

  declare interface Lyricist$Artist {
    alternate_names: any[];
    api_path: string;
    description: Lyricist$Description;
    facebook_name: string;
    followers_count: number;
    header_image_url: string;
    id: number;
    image_url: string;
    instagram_name: string;
    is_meme_verified: boolean;
    is_verified: boolean;
    name: string;
    translation_artist: boolean;
    twitter_name: string;
    url: string;
    current_user_metadata: {
      permissions: string[],
      excluded_permissions: string[],
      interactions: {
        following: boolean
      }
    };
    description_annotation: Lyricist$DescriptionAnnotation;
    user?: any;
  }

  declare interface Lyricist$SearchResult {
    annotation_count: number;
    api_path: string;
    full_title: string;
    header_image_thumbnail_url: string;
    header_image_url: string;
    id: number;
    lyrics_owner_id: number;
    lyrics_state: string;
    path: string;
    pyongs_count?: any;
    song_art_image_thumbnail_url: string;
    stats: {
      hot: boolean,
      unreviewed_annotations: number,
      pageviews: number
    };
    title: string;
    title_with_featured: string;
    url: string;
    primary_artist: Lyricist$ArtistBrief;
  }

  declare interface Lyricist$SongByArtist {
    annotation_count: number;
    api_path: string;
    full_title: string;
    header_image_thumbnail_url: string;
    header_image_url: string;
    id: number;
    lyrics_owner_id: number;
    lyrics_state: string;
    path: string;
    pyongs_count: number;
    song_art_image_thumbnail_url: string;
    stats: {
      hot: boolean,
      unreviewed_annotations: number,
      pageviews: number
    };
    title: string;
    title_with_featured: string;
    url: string;
    primary_artist: Lyricist$ArtistBrief;
  }

  declare interface Lyricist$Album {
    api_path: string;
    comment_count: number;
    cover_art_url: string;
    custom_header_image_url?: any;
    full_title: string;
    header_image_url: string;
    id: number;
    lock_state: string;
    name: string;
    pyongs_count: number;
    release_date?: any;
    release_date_components?: any;
    url: string;
    current_user_metadata: {
      permissions: string[],
      excluded_permissions: string[],
      interactions: {
        pyong: boolean
      }
    };
    song_pageviews: number;
    artist: Lyricist$ArtistBrief;
    cover_arts: any[];
    description_annotation: Lyricist$DescriptionAnnotation;
    performance_groups: any[];
    song_performances: any[];
  }
  declare export default typeof Lyricist;
}
