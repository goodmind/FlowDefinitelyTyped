declare module "spotify-web-api-node" {
  declare class SpotifyWebApi {
    constructor(credentials?: Credentials): this;
    getCredentials(): Credentials;
    setCredentials(credentials: Credentials): void;
    resetCredentials(): void;
    getClientId(): string | void;
    setClientId(clientId: string): void;
    resetClientId(): void;
    getClientSecret(): string | void;
    setClientSecret(clientSecret: string): void;
    resetClientSecret(): void;
    getRedirectURI(): string | void;
    setRedirectURI(redirectUri: string): void;
    resetRedirectURI(): void;
    getAccessToken(): string | void;
    setAccessToken(accessToken: string): void;
    resetAccessToken(): void;
    getRefreshToken(): string | void;
    setRefreshToken(refreshToken: string): void;
    resetRefreshToken(): void;
    getTrack(
      trackId: string,
      options: MarketOptions,
      callback: Callback<SpotifyApi.SingleTrackResponse>
    ): void;
    getTrack(
      trackId: string,
      options?: MarketOptions
    ): Promise<Response<SpotifyApi.SingleTrackResponse>>;
    getTracks(
      trackIds: $ReadOnlyArray<string>,
      options: MarketOptions,
      callback: Callback<SpotifyApi.MultipleTracksResponse>
    ): void;
    getTracks(
      trackIds: $ReadOnlyArray<string>,
      options?: MarketOptions
    ): Promise<Response<SpotifyApi.MultipleTracksResponse>>;
    getAlbum(
      albumId: string,
      options: MarketOptions,
      callback: Callback<SpotifyApi.SingleAlbumResponse>
    ): void;
    getAlbum(
      albumId: string,
      options?: MarketOptions
    ): Promise<Response<SpotifyApi.SingleAlbumResponse>>;
    getAlbums(
      albumIds: $ReadOnlyArray<string>,
      options: MarketOptions,
      callback: Callback<SpotifyApi.MultipleAlbumsResponse>
    ): void;
    getAlbums(
      albumIds: $ReadOnlyArray<string>,
      options?: MarketOptions
    ): Promise<Response<SpotifyApi.MultipleAlbumsResponse>>;
    getArtist(
      artistId: string,
      callback: Callback<SpotifyApi.SingleArtistResponse>
    ): void;
    getArtist(
      artistId: string
    ): Promise<Response<SpotifyApi.SingleArtistResponse>>;
    getArtists(
      artistIds: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.MultipleArtistsResponse>
    ): void;
    getArtists(
      artistIds: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.MultipleArtistsResponse>>;
    search(
      query: string,
      types: $ReadOnlyArray<SearchType>,
      options: SearchOptions,
      callback: Callback<SpotifyApi.SearchResponse>
    ): void;
    search(
      query: string,
      types: $ReadOnlyArray<SearchType>,
      options?: SearchOptions
    ): Promise<Response<SpotifyApi.SearchResponse>>;
    searchAlbums(
      query: string,
      options: SearchOptions,
      callback: Callback<SpotifyApi.SearchResponse>
    ): void;
    searchAlbums(
      query: string,
      options?: SearchOptions
    ): Promise<Response<SpotifyApi.SearchResponse>>;
    searchArtists(
      query: string,
      options: SearchOptions,
      callback: Callback<SpotifyApi.SearchResponse>
    ): void;
    searchArtists(
      query: string,
      options?: SearchOptions
    ): Promise<Response<SpotifyApi.SearchResponse>>;
    searchTracks(
      query: string,
      options: SearchOptions,
      callback: Callback<SpotifyApi.SearchResponse>
    ): void;
    searchTracks(
      query: string,
      options?: SearchOptions
    ): Promise<Response<SpotifyApi.SearchResponse>>;
    searchPlaylists(
      query: string,
      options: SearchOptions,
      callback: Callback<SpotifyApi.SearchResponse>
    ): void;
    searchPlaylists(
      query: string,
      options?: SearchOptions
    ): Promise<Response<SpotifyApi.SearchResponse>>;
    getArtistAlbums(
      artistId: string,
      options: GetArtistAlbumsOptions,
      callback: Callback<SpotifyApi.ArtistsAlbumsResponse>
    ): void;
    getArtistAlbums(
      artistId: string,
      options?: GetArtistAlbumsOptions
    ): Promise<Response<SpotifyApi.ArtistsAlbumsResponse>>;
    getAlbumTracks(
      albumId: string,
      options: PaginationMarketOptions,
      callback: Callback<SpotifyApi.AlbumTracksResponse>
    ): void;
    getAlbumTracks(
      albumId: string,
      options?: PaginationMarketOptions
    ): Promise<Response<SpotifyApi.AlbumTracksResponse>>;
    getArtistTopTracks(
      artistId: string,
      country: string,
      callback: Callback<SpotifyApi.ArtistsTopTracksResponse>
    ): void;
    getArtistTopTracks(
      artistId: string,
      country: string
    ): Promise<Response<SpotifyApi.ArtistsTopTracksResponse>>;
    getArtistRelatedArtists(
      artistId: string,
      callback: Callback<SpotifyApi.ArtistsRelatedArtistsResponse>
    ): void;
    getArtistRelatedArtists(
      artistId: string
    ): Promise<Response<SpotifyApi.ArtistsRelatedArtistsResponse>>;
    getUser(
      userId: string,
      callback: Callback<SpotifyApi.UserProfileResponse>
    ): void;
    getUser(userId: string): Promise<Response<SpotifyApi.UserProfileResponse>>;
    getMe(callback: Callback<SpotifyApi.CurrentUsersProfileResponse>): void;
    getMe(): Promise<Response<SpotifyApi.CurrentUsersProfileResponse>>;
    getUserPlaylists(
      userId: string,
      options: PaginationOptions,
      callback: Callback<SpotifyApi.ListOfUsersPlaylistsResponse>
    ): void;
    getUserPlaylists(
      options: PaginationOptions,
      callback: Callback<SpotifyApi.ListOfUsersPlaylistsResponse>
    ): void;
    getUserPlaylists(
      userId: string,
      options?: PaginationOptions
    ): Promise<Response<SpotifyApi.ListOfUsersPlaylistsResponse>>;
    getUserPlaylists(
      options?: PaginationOptions
    ): Promise<Response<SpotifyApi.ListOfUsersPlaylistsResponse>>;
    getPlaylist(
      playlistId: string,
      options: GetPlaylistOptions,
      callback: Callback<SpotifyApi.SinglePlaylistResponse>
    ): void;
    getPlaylist(
      playlistId: string,
      options?: GetPlaylistOptions
    ): Promise<Response<SpotifyApi.SinglePlaylistResponse>>;
    getPlaylistTracks(
      playlistId: string,
      options: GetPlaylistTracksOptions,
      callback: Callback<SpotifyApi.PlaylistTrackResponse>
    ): void;
    getPlaylistTracks(
      playlistId: string,
      options?: GetPlaylistTracksOptions
    ): Promise<Response<SpotifyApi.PlaylistTrackResponse>>;
    createPlaylist(
      userId: string,
      playlistName: string,
      options: PlaylistDetailsOptions,
      callback: Callback<SpotifyApi.CreatePlaylistResponse>
    ): void;
    createPlaylist(
      userId: string,
      playlistName: string,
      options?: PlaylistDetailsOptions
    ): Promise<Response<SpotifyApi.CreatePlaylistResponse>>;
    followPlaylist(
      playlistId: string,
      options: PublicOptions,
      callback: Callback<SpotifyApi.FollowPlaylistReponse>
    ): void;
    followPlaylist(
      playlistId: string,
      options?: PublicOptions
    ): Promise<Response<SpotifyApi.FollowPlaylistReponse>>;
    unfollowPlaylist(
      playlistId: string,
      callback: Callback<SpotifyApi.UnfollowPlaylistReponse>
    ): void;
    unfollowPlaylist(
      playlistId: string
    ): Promise<Response<SpotifyApi.UnfollowPlaylistReponse>>;
    changePlaylistDetails(
      playlistId: string,
      options: ChangePlaylistOptions,
      callback: Callback<SpotifyApi.ChangePlaylistDetailsReponse>
    ): void;
    changePlaylistDetails(
      playlistId: string,
      options?: ChangePlaylistOptions
    ): Promise<Response<SpotifyApi.ChangePlaylistDetailsReponse>>;
    uploadCustomPlaylistCoverImage(
      playlistId: string,
      base64URI: string,
      callback: Callback<SpotifyApi.UploadCustomPlaylistCoverImageReponse>
    ): void;
    uploadCustomPlaylistCoverImage(
      playlistId: string,
      base64URI: string
    ): Promise<Response<SpotifyApi.UploadCustomPlaylistCoverImageReponse>>;
    addTracksToPlaylist(
      playlistId: string,
      tracks: $ReadOnlyArray<string>,
      options: PositionOptions,
      callback: Callback<SpotifyApi.AddTracksToPlaylistResponse>
    ): void;
    addTracksToPlaylist(
      playlistId: string,
      tracks: $ReadOnlyArray<string>,
      options?: PositionOptions
    ): Promise<Response<SpotifyApi.AddTracksToPlaylistResponse>>;
    removeTracksFromPlaylist(
      playlistId: string,
      tracks: $ReadOnlyArray<Track>,
      options: SnapshotOptions,
      callback: Callback<SpotifyApi.RemoveTracksFromPlaylistResponse>
    ): void;
    removeTracksFromPlaylist(
      playlistId: string,
      tracks: $ReadOnlyArray<Track>,
      options?: SnapshotOptions
    ): Promise<Response<SpotifyApi.RemoveTracksFromPlaylistResponse>>;
    removeTracksFromPlaylistByPosition(
      playlistId: string,
      positions: $ReadOnlyArray<number>,
      snapshotId: string,
      callback: Callback<SpotifyApi.RemoveTracksFromPlaylistResponse>
    ): void;
    removeTracksFromPlaylistByPosition(
      playlistId: string,
      positions: $ReadOnlyArray<number>,
      snapshotId: string
    ): Promise<Response<SpotifyApi.RemoveTracksFromPlaylistResponse>>;
    replaceTracksInPlaylist(
      playlistId: string,
      uris: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.ReplacePlaylistTracksResponse>
    ): void;
    replaceTracksInPlaylist(
      playlistId: string,
      uris: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.ReplacePlaylistTracksResponse>>;
    reorderTracksInPlaylist(
      playlistId: string,
      rangeStart: number,
      insertBefore: number,
      options: ReorderPlaylistTracksOptions,
      callback: Callback<SpotifyApi.ReorderPlaylistTracksResponse>
    ): void;
    reorderTracksInPlaylist(
      playlistId: string,
      rangeStart: number,
      insertBefore: number,
      options?: ReorderPlaylistTracksOptions
    ): Promise<Response<SpotifyApi.ReorderPlaylistTracksResponse>>;
    getAudioFeaturesForTrack(
      trackId: string,
      callback: Callback<SpotifyApi.AudioFeaturesResponse>
    ): void;
    getAudioFeaturesForTrack(
      trackId: string
    ): Promise<Response<SpotifyApi.AudioFeaturesResponse>>;
    getAudioAnalysisForTrack(
      trackId: string,
      callback: Callback<SpotifyApi.AudioAnalysisResponse>
    ): void;
    getAudioAnalysisForTrack(
      trackId: string
    ): Promise<Response<SpotifyApi.AudioAnalysisResponse>>;
    getAudioFeaturesForTracks(
      trackIds: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.MultipleAudioFeaturesResponse>
    ): void;
    getAudioFeaturesForTracks(
      trackIds: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.MultipleAudioFeaturesResponse>>;
    getRecommendations(
      options: GetRecommendationsOptions,
      callback: Callback<SpotifyApi.RecommendationsFromSeedsResponse>
    ): void;
    getRecommendations(
      options?: GetRecommendationsOptions
    ): Promise<Response<SpotifyApi.RecommendationsFromSeedsResponse>>;
    createAuthorizeURL(
      scopes: $ReadOnlyArray<string>,
      state: string,
      showDialog?: boolean
    ): string;
    getMySavedTracks(
      options: PaginationMarketOptions,
      callback: Callback<SpotifyApi.UsersSavedTracksResponse>
    ): void;
    getMySavedTracks(
      options?: PaginationMarketOptions
    ): Promise<Response<SpotifyApi.UsersSavedTracksResponse>>;
    containsMySavedTracks(
      trackIds: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.CheckUsersSavedTracksResponse>
    ): void;
    containsMySavedTracks(
      trackIds: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.CheckUsersSavedTracksResponse>>;
    removeFromMySavedTracks(
      trackIds: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.RemoveUsersSavedTracksResponse>
    ): void;
    removeFromMySavedTracks(
      trackIds: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.RemoveUsersSavedTracksResponse>>;
    addToMySavedTracks(
      trackIds: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.SaveTracksForUserResponse>
    ): void;
    addToMySavedTracks(
      trackIds: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.SaveTracksForUserResponse>>;
    removeFromMySavedAlbums(
      albumIds: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.RemoveAlbumsForUserResponse>
    ): void;
    removeFromMySavedAlbums(
      albumIds: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.RemoveAlbumsForUserResponse>>;
    addToMySavedAlbums(
      albumIds: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.SaveAlbumsForUserResponse>
    ): void;
    addToMySavedAlbums(
      albumIds: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.SaveAlbumsForUserResponse>>;
    getMySavedAlbums(
      options: PaginationMarketOptions,
      callback: Callback<SpotifyApi.UsersSavedAlbumsResponse>
    ): void;
    getMySavedAlbums(
      options?: PaginationMarketOptions
    ): Promise<Response<SpotifyApi.UsersSavedAlbumsResponse>>;
    containsMySavedAlbums(
      albumIds: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.CheckUserSavedAlbumsResponse>
    ): void;
    containsMySavedAlbums(
      albumIds: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.CheckUserSavedAlbumsResponse>>;
    getMyTopArtists(
      options: GetTopOptions,
      callback: Callback<SpotifyApi.UsersTopArtistsResponse>
    ): void;
    getMyTopArtists(
      options?: GetTopOptions
    ): Promise<Response<SpotifyApi.UsersTopArtistsResponse>>;
    getMyTopTracks(
      options: GetTopOptions,
      callback: Callback<SpotifyApi.UsersTopTracksResponse>
    ): void;
    getMyTopTracks(
      options?: GetTopOptions
    ): Promise<Response<SpotifyApi.UsersTopTracksResponse>>;
    getMyRecentlyPlayedTracks(
      options: BeforeOptions | AfterOptions,
      callback: Callback<SpotifyApi.UsersRecentlyPlayedTracksResponse>
    ): void;
    getMyRecentlyPlayedTracks(
      options?: BeforeOptions | AfterOptions
    ): Promise<Response<SpotifyApi.UsersRecentlyPlayedTracksResponse>>;
    getMyDevices(callback: Callback<SpotifyApi.UserDevicesResponse>): void;
    getMyDevices(): Promise<Response<SpotifyApi.UserDevicesResponse>>;
    getMyCurrentPlayingTrack(
      options: MarketOptions,
      callback: Callback<SpotifyApi.CurrentlyPlayingResponse>
    ): void;
    getMyCurrentPlayingTrack(
      options?: MarketOptions
    ): Promise<Response<SpotifyApi.CurrentlyPlayingResponse>>;
    getMyCurrentPlaybackState(
      options: MarketOptions,
      callback: Callback<SpotifyApi.CurrentPlaybackResponse>
    ): void;
    getMyCurrentPlaybackState(
      options?: MarketOptions
    ): Promise<Response<SpotifyApi.CurrentPlaybackResponse>>;
    transferMyPlayback(
      options: TransferPlaybackOptions,
      callback: Callback<void>
    ): void;
    transferMyPlayback(
      options?: TransferPlaybackOptions
    ): Promise<Response<void>>;
    play(options: PlayOptions, callback: Callback<void>): void;
    play(options?: PlayOptions): Promise<Response<void>>;
    pause(options: DeviceOptions, callback: Callback<void>): void;
    pause(options?: DeviceOptions): Promise<Response<void>>;
    skipToPrevious(callback: Callback<void>): void;
    skipToPrevious(): Promise<Response<void>>;
    skipToNext(callback: Callback<void>): void;
    skipToNext(): Promise<Response<void>>;
    seek(
      positionMs: number,
      options: DeviceOptions,
      callback: Callback<void>
    ): void;
    seek(positionMs: number, options?: DeviceOptions): Promise<Response<void>>;
    setRepeat(options: RepeatOptions, callback: Callback<void>): void;
    setRepeat(options?: RepeatOptions): Promise<Response<void>>;
    setShuffle(options: ShuffleOptions, callback: Callback<void>): void;
    setShuffle(options?: ShuffleOptions): Promise<Response<void>>;
    setVolume(
      volumePercent: number,
      options: DeviceOptions,
      callback: Callback<void>
    ): void;
    setVolume(
      volumePercent: number,
      options?: DeviceOptions
    ): Promise<Response<void>>;
    followUsers(
      userIds: $ReadOnlyArray<string>,
      callback: Callback<void>
    ): void;
    followUsers(userIds: $ReadOnlyArray<string>): Promise<Response<void>>;
    followArtists(
      artistIds: $ReadOnlyArray<string>,
      callback: Callback<void>
    ): void;
    followArtists(artistIds: $ReadOnlyArray<string>): Promise<Response<void>>;
    unfollowUsers(
      userIds: $ReadOnlyArray<string>,
      callback: Callback<void>
    ): void;
    unfollowUsers(userIds: $ReadOnlyArray<string>): Promise<Response<void>>;
    unfollowArtists(
      artistIds: $ReadOnlyArray<string>,
      callback: Callback<void>
    ): void;
    unfollowArtists(artistIds: $ReadOnlyArray<string>): Promise<Response<void>>;
    isFollowingUsers(
      userIds: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.UserFollowsUsersOrArtistsResponse>
    ): void;
    isFollowingUsers(
      userIds: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.UserFollowsUsersOrArtistsResponse>>;
    getFollowedArtists(
      options: AfterOptions,
      callback: Callback<SpotifyApi.UsersFollowedArtistsResponse>
    ): void;
    getFollowedArtists(
      options?: AfterOptions
    ): Promise<Response<SpotifyApi.UsersFollowedArtistsResponse>>;
    areFollowingPlaylist(
      userId: string,
      playlistId: string,
      followerIds: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.UsersFollowPlaylistReponse>
    ): void;
    areFollowingPlaylist(
      userId: string,
      playlistId: string,
      followerIds: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.UsersFollowPlaylistReponse>>;
    isFollowingArtists(
      artistIds: $ReadOnlyArray<string>,
      callback: Callback<SpotifyApi.UserFollowsUsersOrArtistsResponse>
    ): void;
    isFollowingArtists(
      artistIds: $ReadOnlyArray<string>
    ): Promise<Response<SpotifyApi.UserFollowsUsersOrArtistsResponse>>;
    getNewReleases(
      options: PaginationCountryOptions,
      callback: Callback<SpotifyApi.ListOfNewReleasesResponse>
    ): void;
    getNewReleases(
      options?: PaginationCountryOptions
    ): Promise<Response<SpotifyApi.ListOfNewReleasesResponse>>;
    getFeaturedPlaylists(
      options: GetFeaturedPlaylistsOptions,
      callback: Callback<SpotifyApi.ListOfFeaturedPlaylistsResponse>
    ): void;
    getFeaturedPlaylists(
      options?: GetFeaturedPlaylistsOptions
    ): Promise<Response<SpotifyApi.ListOfFeaturedPlaylistsResponse>>;
    getCategories(
      options: PaginationLocaleOptions,
      callback: Callback<SpotifyApi.MultipleCategoriesResponse>
    ): void;
    getCategories(
      options?: PaginationLocaleOptions
    ): Promise<Response<SpotifyApi.MultipleCategoriesResponse>>;
    getCategory(
      categoryId: string,
      options: LocaleOptions,
      callback: Callback<SpotifyApi.SingleCategoryResponse>
    ): void;
    getCategory(
      categoryId: string,
      options?: LocaleOptions
    ): Promise<Response<SpotifyApi.SingleCategoryResponse>>;
    getPlaylistsForCategory(
      categoryId: string,
      options: PaginationCountryOptions,
      callback: Callback<SpotifyApi.CategoryPlaylistsReponse>
    ): void;
    getPlaylistsForCategory(
      categoryId: string,
      options?: PaginationCountryOptions
    ): Promise<Response<SpotifyApi.CategoryPlaylistsReponse>>;
    clientCredentialsGrant(
      options: {},
      callback: Callback<ClientCredentialsGrantResponse>
    ): void;
    clientCredentialsGrant(options?: {}): Promise<
      Response<ClientCredentialsGrantResponse>
    >;
    authorizationCodeGrant(
      code: string,
      callback: Callback<AuthorizationCodeGrantResponse>
    ): void;
    authorizationCodeGrant(
      code: string
    ): Promise<Response<AuthorizationCodeGrantResponse>>;
    refreshAccessToken(callback: Callback<RefreshAccessTokenResponse>): void;
    refreshAccessToken(): Promise<Response<RefreshAccessTokenResponse>>;
  }
  declare type Callback<T> = (error: Error, response: Response<T>) => void;
  declare interface Response<T> {
    body: T;
    headers: Record<string, string>;
    statusCode: number;
  }
  declare interface Credentials {
    accessToken?: string;
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    refreshToken?: string;
  }
  declare interface Track {
    positions?: $ReadOnlyArray<number>;
    uri: string;
  }
  declare interface LimitOptions {
    limit?: number;
  }
  declare type PaginationOptions = {
    offset?: number
  } & LimitOptions;

  declare interface DeviceOptions {
    device_id?: string;
  }
  declare interface MarketOptions {
    market?: string;
  }
  declare interface FieldsOptions {
    fields?: string;
  }
  declare interface PublicOptions {
    public?: boolean;
  }
  declare interface SnapshotOptions {
    snapshot_id?: string;
  }
  declare interface CountryOptions {
    country?: string;
  }
  declare type BeforeOptions = {
    before?: number
  } & LimitOptions;

  declare type AfterOptions = {
    after?: number
  } & LimitOptions;

  declare type LocaleOptions = {
    locale?: string
  } & CountryOptions;

  declare type PaginationMarketOptions = {} & PaginationOptions & MarketOptions;

  declare type PaginationCountryOptions = {} & PaginationOptions &
    CountryOptions;

  declare type PaginationLocaleOptions = {} & PaginationOptions & LocaleOptions;

  declare type GetPlaylistOptions = {} & MarketOptions & FieldsOptions;

  declare type PlaylistDetailsOptions = {
    collaborative?: boolean,
    description?: string
  } & PublicOptions;

  declare type ChangePlaylistOptions = {
    name?: string
  } & PlaylistDetailsOptions;

  declare interface PositionOptions {
    position?: number;
  }
  declare type GetArtistAlbumsOptions = {
    include_groups?: string
  } & PaginationCountryOptions;

  declare type GetPlaylistTracksOptions = {} & PaginationMarketOptions &
    FieldsOptions;

  declare type SearchType = "album" | "artist" | "playlist" | "track";
  declare type SearchOptions = {
    include_external?: "audio"
  } & PaginationMarketOptions;

  declare type ReorderPlaylistTracksOptions = {
    range_length?: number
  } & SnapshotOptions;

  declare type GetRecommendationsOptions = {
    max_acousticness?: number,
    max_danceability?: number,
    max_duration_ms?: number,
    max_energy?: number,
    max_instrumentalness?: number,
    max_key?: number,
    max_liveness?: number,
    max_loudness?: number,
    max_mode?: number,
    max_popularity?: number,
    max_speechiness?: number,
    max_tempo?: number,
    max_time_signature?: number,
    max_valence?: number,
    min_acousticness?: number,
    min_danceability?: number,
    min_duration_ms?: number,
    min_energy?: number,
    min_instrumentalness?: number,
    min_key?: number,
    min_liveness?: number,
    min_loudness?: number,
    min_mode?: number,
    min_popularity?: number,
    min_speechiness?: number,
    min_tempo?: number,
    min_time_signature?: number,
    min_valence?: number,
    seed_artists?: $ReadOnlyArray<string> | string,
    seed_genres?: $ReadOnlyArray<string> | string,
    seed_tracks?: $ReadOnlyArray<string> | string,
    target_acousticness?: number,
    target_danceability?: number,
    target_duration_ms?: number,
    target_energy?: number,
    target_instrumentalness?: number,
    target_key?: number,
    target_liveness?: number,
    target_loudness?: number,
    target_mode?: number,
    target_popularity?: number,
    target_speechiness?: number,
    target_tempo?: number,
    target_time_signature?: number,
    target_valence?: number
  } & LimitOptions &
    MarketOptions;

  declare type GetTopOptions = {
    time_range?: "long_term" | "medium_term" | "short_term"
  } & PaginationOptions;

  declare interface TransferPlaybackOptions {
    device_ids: $ReadOnlyArray<string>;
    play?: boolean;
  }
  declare type PlayOptions = {
    context_uri?: string,
    uris?: $ReadOnlyArray<string>,
    offset?:
      | {
          position: number
        }
      | {
          uri: string
        },
    position_ms?: number
  } & DeviceOptions;

  declare type RepeatOptions = {
    state?: "track" | "context" | "off"
  } & DeviceOptions;

  declare type ShuffleOptions = {
    state?: boolean
  } & DeviceOptions;

  declare type GetFeaturedPlaylistsOptions = {
    timestamp?: string
  } & PaginationLocaleOptions;

  declare interface ClientCredentialsGrantResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
  }
  declare interface AuthorizationCodeGrantResponse {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
  }
  declare interface RefreshAccessTokenResponse {
    access_token: string;
    expires_in: number;
    scope: string;
    token_type: string;
  }
  declare export default typeof SpotifyWebApi;
}
