declare module "spotify-api" {
  /**
   * Object for search parameters for searching for tracks, playlists, artists or albums.
   * See: [Search for an item](https://developer.spotify.com/web-api/search-item/)
   *
   * q and type are not optional in the API, however they are marked as optional here, since various libraries
   * implement them as function call parameters instead. This could be changed.
   * @param q Required. The search query's keywords (and optional field filters and operators).
   * @param type Required. A comma-separated list of item types to search across. Valid types are: album, artist, playlist, and track.
   * @param market Optional. An ISO 3166-1 alpha-2 country code or the string from_token
   * @param limit Optional. The maximum number of results to return. Default: 20. Minimum: 1. Maximum: 50.
   * @param offset Optional. The index of the first result to return. Default: 0 (i.e., the first result). Maximum offset: 100.000. Use with limit to get the next page of search results.
   */
  declare interface SpotifyApi$SearchForItemParameterObject {
    q?: string;
    type?: string;
    market?: string;
    limit?: number;
    offset?: number;
  }

  /**
   * Object for use in Recommendations Based on Seeds.
   * See: [Recommendations Based on Seeds](https://developer.spotify.com/web-api/get-recommendations/)
   * @limit q Optional. The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20. Minimum: 1. Maximum: 100.
   * @market q Optional. An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking. Because min_*, max_* and target_* are applied to pools before relinking, the generated results may not precisely match the filters applied. Original, non-relinked tracks are available via the linked_from attribute of the relinked track response.
   * @max_ q Optional. Multiple values. For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, max_instrumentalness=0.35 would filter out most tracks that are likely to be instrumental.
   * @min_ q Optional. Multiple values. For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, min_tempo=140 would restrict results to only those tracks with a tempo of greater than 140 beats per minute.
   * @seed_artists q A comma separated list of Spotify IDs for seed artists. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
   * @seed_genres q A comma separated list of any genres in the set of available genre seeds. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
   * @seed_tracks q A comma separated list of Spotify IDs for a seed track. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres.
   * @target_ q Optional. Multiple values. For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
   */
  declare interface SpotifyApi$RecommendationsOptionsObject {
    limit?: number;
    market?: string;
    max_acousticness?: number;
    max_danceability?: number;
    max_duration_ms?: number;
    max_energy?: number;
    max_instrumentalness?: number;
    max_key?: number;
    max_liveness?: number;
    max_loudness?: number;
    max_mode?: number;
    max_popularity?: number;
    max_speechiness?: number;
    max_tempo?: number;
    max_time_signature?: number;
    max_valence?: number;
    min_acousticness?: number;
    min_danceability?: number;
    min_duration_ms?: number;
    min_energy?: number;
    min_instrumentalness?: number;
    min_key?: number;
    min_liveness?: number;
    min_loudness?: number;
    min_mode?: number;
    min_popularity?: number;
    min_speechiness?: number;
    min_tempo?: number;
    min_time_signature?: number;
    min_valence?: number;
    seed_artists?: string;
    seed_genres?: string;
    seed_tracks?: string;
    target_acousticness?: number;
    target_danceability?: number;
    target_duration_ms?: number;
    target_energy?: number;
    target_instrumentalness?: number;
    target_key?: number;
    target_liveness?: number;
    target_loudness?: number;
    target_mode?: number;
    target_popularity?: number;
    target_speechiness?: number;
    target_tempo?: number;
    target_time_signature?: number;
    target_valence?: number;
  }

  /**
   * Void Response
   */
  declare interface SpotifyApi$VoidResponse {}

  /**
   * Response with Playlist Snapshot
   */
  declare interface SpotifyApi$PlaylistSnapshotResponse {
    snapshot_id: string;
  }

  /**
   * Get an Album
   *
   * GET /v1/albums/{id}
   * https://developer.spotify.com/web-api/get-album/
   */
  declare type SpotifyApi$SingleAlbumResponse = {} & SpotifyApi$AlbumObjectFull;

  /**
   * Get Several Albums
   *
   * GET /v1/albums?ids={ids}
   * https://developer.spotify.com/web-api/get-several-albums/
   */
  declare interface SpotifyApi$MultipleAlbumsResponse {
    albums: SpotifyApi$AlbumObjectFull[];
  }

  /**
   * Get an Album’s Tracks
   *
   * GET /v1/albums/{id}/tracks
   * https://developer.spotify.com/web-api/get-albums-tracks/
   */
  declare type SpotifyApi$AlbumTracksResponse = {} & SpotifyApi$PagingObject<SpotifyApi$TrackObjectSimplified>;

  /**
   * Get an Artist
   *
   * GET /v1/artists/{id}
   * https://developer.spotify.com/web-api/get-artist/
   */
  declare type SpotifyApi$SingleArtistResponse = {} & SpotifyApi$ArtistObjectFull;

  /**
   * Get Several Artists
   *
   * /v1/artists?ids={ids}
   * https://developer.spotify.com/web-api/get-several-artists/
   */
  declare interface SpotifyApi$MultipleArtistsResponse {
    artists: SpotifyApi$ArtistObjectFull[];
  }

  /**
   * Get an Artist’s Albums
   *
   * GET /v1/artists/{id}/albums
   * https://developer.spotify.com/web-api/get-artists-albums/
   */
  declare type SpotifyApi$ArtistsAlbumsResponse = {} & SpotifyApi$PagingObject<SpotifyApi$AlbumObjectSimplified>;

  /**
   * Get an Artist’s Top Tracks
   *
   * GET /v1/artists/{id}/top-tracks
   * https://developer.spotify.com/web-api/get-artists-top-tracks/
   */
  declare interface SpotifyApi$ArtistsTopTracksResponse {
    tracks: SpotifyApi$TrackObjectFull[];
  }

  /**
   * Get an Artist’s Related Artists
   *
   * GET /v1/artists/{id}/related-artists
   * https://developer.spotify.com/web-api/get-related-artists/
   */
  declare interface SpotifyApi$ArtistsRelatedArtistsResponse {
    artists: SpotifyApi$ArtistObjectFull[];
  }

  /**
   * Get Audio Analysis for a Track
   *
   * GET /v1/audio-analysis/{id}
   * https://developer.spotify.com/web-api/get-audio-analysis/
   *
   * At the time of typing, the Audio Analysis Object is absent from the Object Model, so it is typed as any.
   * Object Model: https://developer.spotify.com/web-api/object-model/
   */
  declare type SpotifyApi$AudioAnalysisResponse = {} & Object;

  /**
   * Get audio features for a track
   *
   * GET /v1/audio-features/{id}
   * https://developer.spotify.com/web-api/get-audio-features/
   */
  declare type SpotifyApi$AudioFeaturesResponse = {} & SpotifyApi$AudioFeaturesObject;

  /**
   * Get audio features for several tracks
   *
   * GET /v1/audio-features?ids={ids}
   * https://developer.spotify.com/get-several-audio-features/
   */
  declare interface SpotifyApi$MultipleAudioFeaturesResponse {
    audio_features: SpotifyApi$AudioFeaturesObject[];
  }

  /**
   * Get a list of featured playlists
   *
   * GET /v1/browse/featured-playlists
   * https://developer.spotify.com/web-api/get-list-featured-playlists/
   */
  declare interface SpotifyApi$ListOfFeaturedPlaylistsResponse {
    message?: string;
    playlists: SpotifyApi$PagingObject<SpotifyApi$PlaylistObjectSimplified>;
  }

  /**
   * Get a list of new releases
   *
   * GET /v1/browse/new-releases
   * https://developer.spotify.com/web-api/get-list-new-releases/
   */
  declare interface SpotifyApi$ListOfNewReleasesResponse {
    message?: string;
    albums: SpotifyApi$PagingObject<SpotifyApi$AlbumObjectSimplified>;
  }

  /**
   * Get a list of categories
   *
   * GET /v1/browse/categories
   * https://developer.spotify.com/web-api/get-list-categories/
   */
  declare interface SpotifyApi$MultipleCategoriesResponse {
    categories: SpotifyApi$PagingObject<SpotifyApi$CategoryObject>;
  }

  /**
   * Get a category
   *
   * GET /v1/browse/categories/{id}
   * https://developer.spotify.com/web-api/get-category/
   */
  declare type SpotifyApi$SingleCategoryResponse = {} & SpotifyApi$CategoryObject;

  /**
   * Get a categorys playlists
   *
   * GET /v1/browse/categories/{id}/playlists
   * https://developer.spotify.com/web-api/get-categorys-playlists/
   */
  declare interface SpotifyApi$CategoryPlaylistsReponse {
    playlists: SpotifyApi$PagingObject<SpotifyApi$PlaylistObjectSimplified>;
  }

  /**
   * Get Current User’s Profile
   *
   * GET /v1/me
   * https://developer.spotify.com/web-api/get-current-users-profile/
   */
  declare type SpotifyApi$CurrentUsersProfileResponse = {} & SpotifyApi$UserObjectPrivate;

  /**
   * Get User’s Followed Artists
   *
   * GET /v1/me/following
   * https://developer.spotify.com/web-api/get-followed-artists/
   */
  declare interface SpotifyApi$UsersFollowedArtistsResponse {
    artists: SpotifyApi$CursorBasedPagingObject<SpotifyApi$ArtistObjectFull>;
  }

  /**
   * Follow artists or users
   *
   * PUT /v1/me/following
   * https://developer.spotify.com/web-api/follow-artists-users/
   */
  declare type SpotifyApi$FollowArtistsOrUsersResponse = {} & SpotifyApi$VoidResponse;

  /**
   * Unfollow artists or users
   *
   * DELETE /v1/me/following
   * https://developer.spotify.com/web-api/unfollow-artists-users/
   */
  declare type SpotifyApi$UnfollowArtistsOrUsersResponse = {} & SpotifyApi$VoidResponse;

  /**
   * Check if User Follows Users or Artists
   *
   * GET /v1/me/following/contains
   * https://developer.spotify.com/web-api/check-current-user-follows/
   */
  declare type SpotifyApi$UserFollowsUsersOrArtistsResponse = {} & Array<boolean>;

  /**
   * Follow a Playlist
   *
   * PUT /v1/users/{owner_id}/playlists/{playlist_id}/followers
   * https://developer.spotify.com/web-api/follow-playlist/
   */
  declare type SpotifyApi$FollowPlaylistReponse = {} & SpotifyApi$VoidResponse;

  /**
   * Unfollow a Playlist
   *
   * DELETE /v1/users/{owner_id}/playlists/{playlist_id}/followers
   * https://developer.spotify.com/web-api/unfollow-playlist/
   */
  declare type SpotifyApi$UnfollowPlaylistReponse = {} & SpotifyApi$VoidResponse;

  /**
   * Save tracks for user
   *
   * PUT /v1/me/tracks?ids={ids}
   * https://developer.spotify.com/web-api/save-tracks-user/
   */
  declare type SpotifyApi$SaveTracksForUserResponse = {} & SpotifyApi$VoidResponse;

  /**
   * Get user's saved tracks
   *
   * GET /v1/me/tracks
   * https://developer.spotify.com/web-api/get-users-saved-tracks/
   */
  declare type SpotifyApi$UsersSavedTracksResponse = {} & SpotifyApi$PagingObject<SpotifyApi$SavedTrackObject>;

  /**
   * Remove User’s Saved Tracks
   *
   * DELETE /v1/me/tracks?ids={ids}
   * https://developer.spotify.com/web-api/remove-tracks-user/
   */
  declare type SpotifyApi$RemoveUsersSavedTracksResponse = {} & SpotifyApi$VoidResponse;

  /**
   * Check User’s Saved Tracks
   *
   * GET /v1/me/tracks/contains?ids={ids}
   * https://developer.spotify.com/web-api/check-users-saved-tracks/
   */
  declare type SpotifyApi$CheckUsersSavedTracksResponse = {} & Array<boolean>;

  /**
   * Save albums for user
   *
   * PUT /v1/me/albums?ids={ids}
   * https://developer.spotify.com/web-api/save-albums-user/
   */
  declare type SpotifyApi$SaveAlbumsForUserResponse = {} & SpotifyApi$VoidResponse;

  /**
   * Get user's saved albums
   *
   * GET /v1/me/albums
   * https://developer.spotify.com/web-api/get-users-saved-albums/
   */
  declare type SpotifyApi$UsersSavedAlbumsResponse = {} & SpotifyApi$PagingObject<SpotifyApi$SavedAlbumObject>;

  /**
   * Remove Albums for Current User
   *
   * DELETE /v1/me/albums?ids={ids}
   * https://developer.spotify.com/web-api/remove-albums-user/
   */
  declare type SpotifyApi$RemoveAlbumsForUserResponse = {} & SpotifyApi$VoidResponse;

  /**
   * Check user's saved albums
   *
   * GET /v1/me/albums/contains?ids={ids}
   * https://developer.spotify.com/web-api/check-users-saved-albums/
   */
  declare type SpotifyApi$CheckUserSavedAlbumsResponse = {} & Array<boolean>;

  /**
   * Get a User’s Top Artists and Tracks (Note: This is only Artists)
   *
   * GET /v1/me/top/{type}
   * https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/
   */
  declare type SpotifyApi$UsersTopArtistsResponse = {} & SpotifyApi$PagingObject<SpotifyApi$ArtistObjectFull>;

  /**
   * Get a User’s Top Artists and Tracks (Note: This is only Tracks)
   *
   * GET /v1/me/top/{type}
   * https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/
   */
  declare type SpotifyApi$UsersTopTracksResponse = {} & SpotifyApi$PagingObject<SpotifyApi$TrackObjectFull>;

  /**
   * Get recommendations based on seeds
   *
   * GET /v1/recommendations
   * https://developer.spotify.com/get-recommendations/
   */
  declare type SpotifyApi$RecommendationsFromSeedsResponse = {} & SpotifyApi$RecommendationsObject;

  /**
   * Get available genre seeds
   *
   * GET /v1/recommendations/available-genre-seeds
   * https://developer.spotify.com/web-api/get-recommendations/#available-genre-seeds
   */
  declare interface SpotifyApi$AvailableGenreSeedsResponse {
    genres: string[];
  }

  /**
   * Search for an album
   *
   * GET /v1/search?type=album
   * https://developer.spotify.com/web-api/search-item/
   */
  declare interface SpotifyApi$AlbumSearchResponse {
    albums: SpotifyApi$PagingObject<SpotifyApi$AlbumObjectSimplified>;
  }

  /**
   * Search for an artist
   *
   * GET /v1/search?type=artist
   * https://developer.spotify.com/web-api/search-item/
   */
  declare interface SpotifyApi$ArtistSearchResponse {
    artists: SpotifyApi$PagingObject<SpotifyApi$ArtistObjectFull>;
  }

  /**
   * Search for a playlist
   *
   * GET /v1/search?type=playlist
   * https://developer.spotify.com/web-api/search-item/
   */
  declare interface SpotifyApi$PlaylistSearchResponse {
    playlists: SpotifyApi$PagingObject<SpotifyApi$PlaylistObjectSimplified>;
  }

  /**
   * Search for a track
   *
   * GET /v1/search?type=track
   * https://developer.spotify.com/web-api/search-item/
   */
  declare interface SpotifyApi$TrackSearchResponse {
    tracks: SpotifyApi$PagingObject<SpotifyApi$TrackObjectFull>;
  }

  /**
   * Get a track
   *
   * GET /v1/tracks/{id}
   * https://developer.spotify.com/web-api/get-track/
   */
  declare type SpotifyApi$SingleTrackResponse = {} & SpotifyApi$TrackObjectFull;

  /**
   * Get multiple tracks
   *
   * GET /v1/tracks?ids={ids}
   * https://developer.spotify.com/web-api/get-several-tracks/
   */
  declare interface SpotifyApi$MultipleTracksResponse {
    tracks: SpotifyApi$TrackObjectFull[];
  }

  /**
   * Get user profile
   *
   * GET /v1/users/{user_id}
   * https://developer.spotify.com/web-api/get-users-profile/
   */
  declare type SpotifyApi$UserProfileResponse = {} & SpotifyApi$UserObjectPublic;

  /**
   * Get a list of a user's playlists
   *
   * GET /v1/users/{user_id}/playlists
   * https://developer.spotify.com/web-api/get-list-users-playlists/
   */
  declare type SpotifyApi$ListOfUsersPlaylistsResponse = {} & SpotifyApi$PagingObject<SpotifyApi$PlaylistObjectSimplified>;

  /**
   * Get a list of the current user's playlists
   *
   * GET /v1/me/playlists
   * https://developer.spotify.com/web-api/get-list-users-playlists/
   */
  declare type SpotifyApi$ListOfCurrentUsersPlaylistsResponse = {} & SpotifyApi$PagingObject<SpotifyApi$PlaylistObjectSimplified>;

  /**
   * Get a playlist
   *
   * GET /v1/users/{user_id}/playlists/{playlist_id}
   * https://developer.spotify.com/web-api/get-playlist/
   */
  declare type SpotifyApi$SinglePlaylistResponse = {} & SpotifyApi$PlaylistObjectFull;

  /**
   * Get a playlist's tracks
   *
   * GET /v1/users/{user_id}/playlists/{playlist_id}/tracks
   * https://developer.spotify.com/web-api/get-playlists-tracks/
   */
  declare type SpotifyApi$PlaylistTrackResponse = {} & SpotifyApi$PagingObject<SpotifyApi$PlaylistTrackObject>;

  /**
   * Create a Playlist
   *
   * POST /v1/users/{user_id}/playlists
   * https://developer.spotify.com/web-api/create-playlist/
   */
  declare type SpotifyApi$CreatePlaylistResponse = {} & SpotifyApi$PlaylistObjectFull;

  /**
   * Change a Playlist’s Details
   *
   * PUT /v1/users/{user_id}/playlists/{playlist_id}
   * https://developer.spotify.com/web-api/change-playlist-details/
   */
  declare type SpotifyApi$ChangePlaylistDetailsReponse = {} & SpotifyApi$VoidResponse;

  /**
   * Add Tracks to a Playlist
   *
   * POST /v1/users/{user_id}/playlists/{playlist_id}/tracks
   * https://developer.spotify.com/web-api/add-tracks-to-playlist/
   */
  declare type SpotifyApi$AddTracksToPlaylistResponse = {} & SpotifyApi$PlaylistSnapshotResponse;

  /**
   * Remove Tracks from a Playlist
   *
   * DELETE /v1/users/{user_id}/playlists/{playlist_id}/tracks
   * https://developer.spotify.com/web-api/remove-tracks-playlist/
   */
  declare type SpotifyApi$RemoveTracksFromPlaylistResponse = {} & SpotifyApi$PlaylistSnapshotResponse;

  /**
   * Reorder a Playlist’s Tracks
   *
   * PUT /v1/users/{user_id}/playlists/{playlist_id}/tracks
   * https://developer.spotify.com/web-api/reorder-playlists-tracks/
   */
  declare type SpotifyApi$ReorderPlaylistTracksResponse = {} & SpotifyApi$PlaylistSnapshotResponse;

  /**
   * Replace a Playlist’s Tracks
   *
   * PUT /v1/users/{user_id}/playlists/{playlist_id}/tracks
   * https://developer.spotify.com/web-api/replace-playlists-tracks/
   */
  declare type SpotifyApi$ReplacePlaylistTracksResponse = {} & SpotifyApi$VoidResponse;

  /**
   * Check if Users Follow a Playlist
   *
   * GET /v1/users/{user_id}/playlists/{playlist_id}/followers/contains
   * https://developer.spotify.com/web-api/check-user-following-playlist/
   */
  declare type SpotifyApi$UsersFollowPlaylistReponse = {} & Array<boolean>;

  /**
   * Full Album Object
   * [album object (full)](https://developer.spotify.com/web-api/object-model/#album-object-simplified)
   */
  declare type SpotifyApi$AlbumObjectFull = {
    artists: SpotifyApi$ArtistObjectSimplified[],
    copyrights: SpotifyApi$CopyrightObject[],
    external_ids: SpotifyApi$ExternalIdObject,
    genres: string[],
    popularity: number,
    release_date: string,
    release_date_precision: string,
    tracks: SpotifyApi$PagingObject<SpotifyApi$TrackObjectSimplified>
  } & SpotifyApi$AlbumObjectSimplified;

  /**
   * Simplified Album Object
   * [album object (simplified)](https://developer.spotify.com/web-api/object-model/#album-object-simplified)
   */
  declare interface SpotifyApi$AlbumObjectSimplified {
    album_type: string;
    available_markets?: string[];
    external_urls: SpotifyApi$ExternalUrlObject;
    href: string;
    id: string;
    images: SpotifyApi$ImageObject[];
    name: string;
    type: "album";
    uri: string;
  }

  /**
   * Full Artist Object
   * [artist object (full)](https://developer.spotify.com/web-api/object-model/)
   */
  declare type SpotifyApi$ArtistObjectFull = {
    followers: SpotifyApi$FollowersObject,
    genres: string[],
    images: SpotifyApi$ImageObject[],
    popularity: number
  } & SpotifyApi$ArtistObjectSimplified;

  /**
   * Simplified Artist Object
   * [artist object (simplified)](https://developer.spotify.com/web-api/object-model/)
   */
  declare interface SpotifyApi$ArtistObjectSimplified {
    external_urls: SpotifyApi$ExternalUrlObject;
    href: string;
    id: string;
    name: string;
    type: "artist";
    uri: string;
  }

  /**
   * Audio Features Object
   * https://developer.spotify.com/web-api/object-model/#audio-features-object
   */
  declare interface SpotifyApi$AudioFeaturesObject {
    acousticness: number;
    analysis_url: string;
    danceability: number;
    duration_ms: number;
    energy: number;
    id: string;
    instrumentalness: number;
    key: number;
    liveness: number;
    loudness: number;
    mode: number;
    speechiness: number;
    tempo: number;
    time_signature: number;
    track_href: string;
    type: "audio_features";
    uri: string;
    valence: number;
  }

  /**
   * Category Object
   * [category object](https://developer.spotify.com/web-api/object-model/)
   */
  declare interface SpotifyApi$CategoryObject {
    href: string;
    icons: SpotifyApi$ImageObject[];
    id: string;
    name: string;
  }

  /**
   * Copyright object
   * [copyright object](https://developer.spotify.com/web-api/object-model/)
   */
  declare interface SpotifyApi$CopyrightObject {
    text: string;
    type: "C" | "P";
  }

  /**
   * Cursor object
   * [cursor object](https://developer.spotify.com/web-api/object-model/)
   */
  declare interface SpotifyApi$CursorObject {
    after: string;
  }

  /**
   * Error object
   * [error object](https://developer.spotify.com/web-api/object-model/)
   */
  declare interface SpotifyApi$ErrorObject {
    status: number;
    message: string;
  }

  /**
   * External Id object
   * [](https://developer.spotify.com/web-api/object-model/)
   *
   * Note that there might be other types available, it couldn't be found in the docs.
   */
  declare interface SpotifyApi$ExternalIdObject {
    isrc?: string;
    ean?: string;
    upc?: string;
  }

  /**
   * External Url Object
   * [](https://developer.spotify.com/web-api/object-model/)
   *
   * Note that there might be other types available, it couldn't be found in the docs.
   */
  declare interface SpotifyApi$ExternalUrlObject {
    spotify: string;
  }

  /**
   * Followers Object
   * [](https://developer.spotify.com/web-api/object-model/)
   */
  declare interface SpotifyApi$FollowersObject {
    href: string;
    total: number;
  }

  /**
   * Image Object
   * [](https://developer.spotify.com/web-api/object-model/)
   */
  declare interface SpotifyApi$ImageObject {
    height?: number;
    url: string;
    width?: number;
  }

  /**
   * Paging Object wrapper used for retrieving collections from the Spotify API.
   * [](https://developer.spotify.com/web-api/object-model/#paging-object)
   */
  declare interface SpotifyApi$PagingObject<T> {
    href: string;
    items: T[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  }

  /**
   * Cursor Based Paging Object wrappers used for retrieving collections from the Spotify API.
   * [](https://developer.spotify.com/web-api/object-model/#cursor-based-paging-object)
   */
  declare interface SpotifyApi$CursorBasedPagingObject<T> {
    href: string;
    items: T[];
    limit: number;
    next: string;
    cursors: SpotifyApi$CursorObject;
    total: number;
  }

  /**
   * Base Playlist Object. Does not in itself exist in Spotify Web Api,
   * but needs to be made since the tracks types vary in the Full and Simplified versions.
   */
  declare interface SpotifyApi$PlaylistBaseObject {
    collaborative: boolean;
    external_urls: SpotifyApi$ExternalUrlObject;
    href: string;
    id: string;
    images: SpotifyApi$ImageObject[];
    name: string;
    owner: SpotifyApi$UserObjectPublic;
    public: boolean;
    snapshot_id: string;
    type: "playlist";
    uri: string;
  }

  /**
   * Playlist Object Full
   * [](https://developer.spotify.com/web-api/object-model/)
   */
  declare type SpotifyApi$PlaylistObjectFull = {
    description: string,
    followers: SpotifyApi$FollowersObject,
    tracks: SpotifyApi$PagingObject<SpotifyApi$PlaylistTrackObject>
  } & SpotifyApi$PlaylistBaseObject;

  /**
   * Playlist Object Simplified
   * [](https://developer.spotify.com/web-api/object-model/)
   */
  declare type SpotifyApi$PlaylistObjectSimplified = {
    tracks: {
      href: string,
      total: number
    }
  } & SpotifyApi$PlaylistBaseObject;

  /**
   * The Track Object in Playlists
   * [](https://developer.spotify.com/web-api/object-model/)
   */
  declare interface SpotifyApi$PlaylistTrackObject {
    added_at: string;
    added_by: SpotifyApi$UserObjectPublic;
    is_local: boolean;
    track: SpotifyApi$TrackObjectFull;
  }

  /**
   * Recommendations Object
   * [](https://developer.spotify.com/web-api/object-model/#recommendations-object)
   */
  declare interface SpotifyApi$RecommendationsObject {
    seeds: SpotifyApi$RecommendationsSeedObject[];
    tracks: SpotifyApi$TrackObjectSimplified[];
  }

  /**
   * Recommendations Seed Object
   * [](https://developer.spotify.com/web-api/object-model/#recommendations-seed-object)
   */
  declare interface SpotifyApi$RecommendationsSeedObject {
    afterFilteringSize: number;
    afterRelinkingSize: number;
    href: string;
    id: string;
    initialPoolSize: number;
    type: "artist" | "track" | "genre";
  }

  /**
   * Saved Track Object in Playlists
   * [](https://developer.spotify.com/web-api/object-model/)
   */
  declare interface SpotifyApi$SavedTrackObject {
    added_at: string;
    track: SpotifyApi$TrackObjectFull;
  }

  /**
   * Saved Track Object in Playlists
   * [](https://developer.spotify.com/web-api/object-model/)
   */
  declare interface SpotifyApi$SavedAlbumObject {
    added_at: string;
    album: SpotifyApi$AlbumObjectFull;
  }

  /**
   * Full Track Object
   * [track object (full)](https://developer.spotify.com/web-api/object-model/#track-object-full)
   */
  declare type SpotifyApi$TrackObjectFull = {
    album: SpotifyApi$AlbumObjectSimplified,
    external_ids: SpotifyApi$ExternalIdObject,
    popularity: number
  } & SpotifyApi$TrackObjectSimplified;

  /**
   * Simplified Track Object
   * [track object (simplified)](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
   */
  declare interface SpotifyApi$TrackObjectSimplified {
    artists: SpotifyApi$ArtistObjectSimplified[];
    available_markets?: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: SpotifyApi$ExternalUrlObject;
    href: string;
    id: string;
    is_playable?: boolean;
    linked_from?: SpotifyApi$TrackLinkObject;
    name: string;
    preview_url: string;
    track_number: number;
    type: "track";
    uri: string;
  }

  /**
   * Track Link Object
   * [](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
   */
  declare interface SpotifyApi$TrackLinkObject {
    external_urls: SpotifyApi$ExternalUrlObject;
    href: string;
    id: string;
    type: "track";
    uri: string;
  }

  /**
   * User Object (Private)
   * [](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
   */
  declare type SpotifyApi$UserObjectPrivate = {
    birthdate: string,
    country: string,
    email: string,
    product: string
  } & SpotifyApi$UserObjectPublic;

  /**
   * User Object (Public)
   * [](https://developer.spotify.com/web-api/object-model/#track-object-simplified)
   */
  declare interface SpotifyApi$UserObjectPublic {
    display_name?: string;
    external_urls: SpotifyApi$ExternalUrlObject;
    followers?: SpotifyApi$FollowersObject;
    href: string;
    id: string;
    images?: SpotifyApi$ImageObject[];
    type: "user";
    uri: string;
  }
}
