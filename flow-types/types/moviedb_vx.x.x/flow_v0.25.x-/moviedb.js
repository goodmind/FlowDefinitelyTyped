declare module "moviedb" {
  declare export interface MovieDB$IMovieDB {
    searchMovie(
      params: MovieDB$SearchOptions,
      callback: (err: any, movies: MovieDB$SearchResults) => void
    ): void;
    movieInfo(
      options: MovieDB$InfoOptions,
      callback: (err: any, curMovie: MovieDB$Movie) => void
    ): void;
    movieImages(
      options: MovieDB$InfoOptions,
      callback: (err: any, images: MovieDB$MovieImages) => void
    ): void;
  }

  declare export interface MovieDB$MovieImages {
    id: number;
    backdrops: MovieDB$MovieImage[];
    posters: MovieDB$MovieImage[];
  }

  declare export interface MovieDB$MovieImage {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }

  declare export interface MovieDB$SearchOptions {
    query: string;
    language?: string;
  }

  declare export interface MovieDB$InfoOptions {
    id: number;
    language?: string;
  }

  declare export interface MovieDB$SearchResults {
    page: number;
    results: MovieDB$SearchResult[];
    total_Pages: number;
    total_results: number;
  }

  declare export interface MovieDB$SearchResult {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_title: string;
    release_date: Date;
    poster_path: string;
    popularity: number;
    title: string;
    vote_average: number;
    vote_count: number;
  }

  declare export interface MovieDB$Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: MovieDB$Genre[];
    homepage: string;
    id: number;
    imdb_id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: MovieDB$ProductionCompany[];
    production_countries: MovieDB$ProductionCountry[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: MovieDB$SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
  }

  declare export interface MovieDB$Genre {
    id: number;
    name: string;
  }

  declare export interface MovieDB$ProductionCompany {
    id: number;
    name: string;
  }

  declare export interface MovieDB$ProductionCountry {
    iso_3166_1: number;
    name: string;
  }

  declare export interface MovieDB$SpokenLanguage {
    iso_639_1: number;
    name: string;
  }
  declare function apiKeyAcceptor(key: string): MovieDB$MovieDB$IMovieDB;

  declare module.exports: typeof apiKeyAcceptor;
}
