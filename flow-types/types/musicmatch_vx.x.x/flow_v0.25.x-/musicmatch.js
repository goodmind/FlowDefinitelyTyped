declare module "musicmatch" {
  declare export type TFormat = "json" | "xml";
  declare export type TSort = "asc" | "desc";
  declare export type TBoolean = 0 | 1;
  declare export interface Pageable {
    page?: number;
    page_size?: number;
  }
  declare export interface AlbumParams {
    album_id: number;
  }
  declare export interface AlbumTracksParams {
    album_id?: number;
    album_mbid?: number;
    format?: TFormat;
  }
  declare export interface ArtistParams {
    artist_id?: number;
    artist_mbid?: number;
  }
  declare export type ArtistRelatedParams = {} & ArtistParams & Pageable;

  declare export type ArtistAlbumsParams = {
    g_album_name?: TBoolean,
    s_release_date?: TSort
  } & ArtistParams &
    Pageable;

  declare export type ArtistSearchParams = {
    q_artist?: string,
    f_artist_id?: number,
    f_artist_mbid?: number
  } & Pageable;

  declare export interface MatcherLyricsParams {
    q_track?: string;
    q_artist?: string;
  }
  declare export type MatcherSubtitleParams = {
    f_subtitle_length?: number,
    f_subtitle_length_max_deviation?: number
  } & MatcherLyricsParams;

  declare export type MatcherTrackParams = {
    f_has_lyrics?: TBoolean,
    f_has_subtitle?: TBoolean
  } & MatcherLyricsParams;

  declare export interface TrackLyricsFeedbackParams {
    lyrics_id?: number;
    track_id?: number;
    feedback?:
      | "wrong_lyrics"
      | "wrong_attribution"
      | "bad_characters"
      | "lines_too_long"
      | "wrong_verses"
      | "wrong_formatting";
  }
  declare export interface TrackLyricsAddParams {
    lyrics_id?: number;
    lyrics_body?: string;
  }
  declare export interface TrackSnippetParams {
    track_id: number;
  }
  declare export interface TrackLyricsParams {
    track_id?: number;
    track_mbid?: number;
  }
  declare export interface TrackSubtitleParams {
    track_id?: number;
    track_mbid?: number;
    subtitle_format?: "lrc" | "dfxp" | "stledu";
    f_subtitle_length?: number;
    f_subtitle_length_max_deviation?: number;
  }
  declare export interface TrackParams {
    track_id?: number;
    track_mbid?: number;
  }
  declare export type TrackSearchParams = {
    q?: string,
    q_lyrics?: string,
    f_has_lyrics?: TBoolean,
    f_artist_id?: number,
    f_music_genre_id?: number,
    f_artist_mbid?: number,
    f_lyrics_language?: string,
    s_track_rating?: TSort,
    s_artist_rating?: TSort,
    quorum_factor?: number
  } & Pageable;

  declare export interface TrackSearchResult {
    message: {
      body: {
        track_list: TrackResult[]
      },
      header: {
        available: number,
        execute_time: number,
        status_code: number
      }
    };
  }
  declare export interface MusicGenre {
    music_genre_id: number;
    music_genre_parent_id: number;
    music_genre_name: string;
    music_genre_name_extended: string;
    music_genre_vanity: string;
  }
  declare export interface PrimaryGenres {
    music_genre_list: Array<{
      music_genre: MusicGenre
    }>;
  }
  declare export interface TrackResult {
    track: {
      track_id: number,
      track_name: string,
      track_name_translation_list: any[],
      track_rating: number,
      commontrack_id: number,
      instrumental: TBoolean,
      explicit: TBoolean,
      has_lyrics: TBoolean,
      has_subtitles: TBoolean,
      has_richsync: TBoolean,
      num_favourite: number,
      album_id: number,
      album_name: string,
      artist_id: number,
      artist_name: string,
      track_share_url: string,
      track_edit_url: string,
      restricted: TBoolean,
      updated_time: string,
      primary_genres: PrimaryGenres
    };
  }
  declare export type ChartTracksParams = {
    country?: string,
    f_has_lyrics?: TBoolean
  } & Pageable;

  declare export type ChartArtistsParams = {
    country?: string
  } & Pageable;

  declare export default class Musicmatch {
    constructor(obj?: {
      apikey?: string,
      format?: string
    }): this;
    album(params: AlbumParams): Promise<any>;
    albumTracks(params: AlbumTracksParams): Promise<any>;
    artist(params: ArtistParams): Promise<any>;
    artistAlbums(params: ArtistAlbumsParams): Promise<any>;
    artistRelated(params: ArtistRelatedParams): Promise<any>;
    artistSearch(params: ArtistSearchParams): Promise<any>;
    chartArtists(params: ChartArtistsParams): Promise<any>;
    chartTracks(params: ChartTracksParams): Promise<any>;
    matcherLyrics(params: MatcherLyricsParams): Promise<any>;
    matcherSubtitle(params: MatcherSubtitleParams): Promise<any>;
    matcherTrack(params: MatcherTrackParams): Promise<any>;
    track(params: TrackParams): Promise<any>;
    trackLyrics(params: TrackLyricsParams): Promise<any>;
    trackLyricsAdd(params: TrackLyricsAddParams): Promise<any>;
    trackLyricsFeedback(params: TrackLyricsFeedbackParams): Promise<any>;
    trackSearch(params: TrackSearchParams): Promise<TrackSearchResult>;
    trackSnippet(params: TrackSnippetParams): Promise<any>;
    trackSubtitle(params: TrackSubtitleParams): Promise<any>;
  }
}
