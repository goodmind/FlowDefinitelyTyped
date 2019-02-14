declare module "overwatch-api" {
  declare export type callbackFunc<T> = (err: Error | null, data: T) => void;
  declare export type OverwatchPlatform = "pc" | "xbl" | "psn";
  declare export type OverwatchServerRegion =
    | "us"
    | "eu"
    | "kr"
    | "cn"
    | "global";
  declare export type OverwatchHero =
    | "Zarya"
    | "Mercy"
    | "Reinhardt"
    | "Zenyatta"
    | "Hanzo"
    | "Orisa"
    | "Genji"
    | "Roadhog"
    | "McCree"
    | "Tracer"
    | "Ana"
    | "Winston"
    | "D.Va"
    | "Moira"
    | "Junkrat"
    | "Soldier: 76"
    | "Brigitte"
    | "Lúcio"
    | "Torbjörn"
    | "Reaper"
    | "Pharah"
    | "Widowmaker"
    | "Bastion"
    | "Symmetra"
    | "Mei"
    | "Sombra"
    | "Doomfist";
  declare export interface GameType {
    won: number;
    played: number;
  }
  declare export type QuickplayGameType = GameType;
  declare export type CompetitiveGameType = {
    lost: number,
    draw: number,
    win_rate: number
  } & GameType;

  declare export interface GameTypes {
    quickplay: QuickplayGameType;
    competitive: CompetitiveGameType;
  }
  declare export interface Playtime {
    quickplay: string;
    competitive: string;
  }
  declare export interface CompetitiveRankInfo {
    rank: number;
    rank_img: string;
  }
  declare export interface OverwatchApiResponse {
    username: string;
    level: number;
    portrait: string;
    private: boolean;
  }
  declare export type ProfileApiResponse = {
    games: GameTypes,
    playtime: Playtime,
    competitive: CompetitiveRankInfo,
    levelFrame: string,
    star: string
  } & OverwatchApiResponse;

  declare export interface TopHeroStats {
    hero: OverwatchHero;
    img: string;
  }
  declare export type HeroTimePlayed = {
    played: string
  } & TopHeroStats;

  declare export type HeroGamesWon = {
    games_won: string
  } & TopHeroStats;

  declare export type HeroWinRate = {
    win_rate: string
  } & TopHeroStats;

  declare export interface Stat {
    title: string;
    value: string;
  }
  declare export interface StatsByGameType<T> {
    quickplay: T[];
    competitive: T[];
  }
  declare export interface StatByGameType<T, U> {
    quickplay: T;
    competitive: U;
  }
  declare export interface QuickplayTopHeroData {
    played: HeroTimePlayed[];
    games_won: HeroGamesWon[];
  }
  declare export type CompetitiveTopHeroData = {
    win_rate: HeroWinRate[]
  } & QuickplayTopHeroData;

  declare export interface StatsCategories {
    top_heroes: StatByGameType<QuickplayTopHeroData, CompetitiveTopHeroData>;
    combat: StatsByGameType<Stat>;
    match_awards: StatsByGameType<Stat>;
    assists: StatsByGameType<Stat>;
    average: StatsByGameType<Stat>;
    miscellaneous: StatsByGameType<Stat>;
    best: StatsByGameType<Stat>;
    game: StatsByGameType<Stat>;
  }
  declare export type StatsApiResponse = {
    stats: StatsCategories
  } & OverwatchApiResponse;

  declare export function getProfile(
    platform: OverwatchPlatform,
    region: OverwatchServerRegion,
    tag: string,
    callback: callbackFunc<ProfileApiResponse>
  ): void;

  declare export function getStats(
    platform: OverwatchPlatform,
    region: OverwatchServerRegion,
    tag: string,
    callback: callbackFunc<StatsApiResponse>
  ): void;

  declare var npm$namespace$owl: {
    getLiveMatch: typeof owl$getLiveMatch,
    getStandings: typeof owl$getStandings,
    getSchedule: typeof owl$getSchedule
  };
  declare interface owl$ApiResponse<T> {
    data: T;
  }

  declare interface owl$StandingInfo {
    matchWin: number;
    matchLoss: number;
    matchDraw: number;
    matchBye: number;
    gameWin: number;
    gameLoss: number;
    gameTie: number;
    gamePointsFor: number;
    gamePointsAgainst: number;
    placement: number;
  }

  declare interface owl$StandingComparison {
    key: string;
    value: number;
  }

  declare type owl$StageStandingInfo = {
    isPlayoffWinner: boolean
  } & PreseasonStandingInfo;

  declare interface owl$Stages {
    stage1: owl$StageStandingInfo;
    stage2: owl$StageStandingInfo;
    stage3: owl$StageStandingInfo;
    stage4: owl$StageStandingInfo;
  }

  declare type owl$PreseasonStandingInfo = {
    comparisons: owl$StandingComparison[]
  } & StandingInfo;

  declare interface owl$TeamStandingInfo {
    id: number;
    divisionId: number;
    name: string;
    abbreviatedName: string;
    league: owl$StandingInfo;
    stages: owl$Stages;
    preseason: owl$PreseasonStandingInfo;
  }

  declare interface owl$LiveMatchData {
    liveMatch: {};
  }

  declare interface owl$TournamentData {
    id: number;
    type: string;
  }

  declare interface owl$MatchScores {
    value: number;
  }

  declare interface owl$TeamData {
    id: number;
    availableLanguages: string[];
    handle: string;
    name: string;
    homeLocation: string;
    primaryColor: string;
    secondaryColor: string;
    game: string;
    abbreviatedName: string;
    addressCountry: string;
    logo: string;
    icon: string;
    secondaryPhoto: string;
    type: string;
  }

  declare interface owl$MatchGameScore {
    team1: number;
    team2: number;
  }

  declare interface owl$MatchGameAttributeData {
    instanceID: string;
    map: string;
    mapScore: owl$MatchGameScore;
  }

  declare type owl$ScoreTuple = [number, number];

  declare interface owl$MatchGameData {
    id: number;
    points: owl$ScoreTuple;
    attributes: owl$MatchGameAttributeData;
    attributesVersion: string;
    state: string;
    status: string;
    statusReason: string;
    stats: null;
    handle: string;
  }

  declare interface owl$MatchVideoData {
    name: number;
    description: string;
    vodLink: string;
    youtubeId: string;
    thumbnailUrl: string;
  }

  declare interface owl$MatchTournamentData {
    id: number;
    type: string;
    location: string;
  }

  declare interface owl$MatchData {
    id: number;
    competitors: owl$TeamData[];
    scores: owl$MatchScores[];
    conclusionValue: number;
    conclusionStrategy: string;
    winner: owl$TeamData;
    state: string;
    status: string;
    statusReason: string;
    attributes: {};
    games: owl$MatchGameData[];
    clientHints: any[];
    dateCreated: number;
    flags: any[];
    handle: string;
    startDate: string;
    endDate: string;
    showStartTime: boolean;
    showEndTime: boolean;
    startDateTS: number;
    endDateTS: number;
    youtubeId: string;
    wins: owl$ScoreTuple;
    ties: owl$ScoreTuple;
    losses: owl$ScoreTuple;
    videos: owl$MatchVideoData[];
    tournament: owl$MatchTournamentData;
  }

  declare interface owl$WeekData {
    id: number;
    startDate: number;
    endDate: number;
    matches: owl$MatchData[];
    name: string;
  }

  declare interface owl$StageScheduleInfo {
    id: number;
    slug: string;
    enabled: boolean;
    name: string;
    tournament: owl$TournamentData[];
    matches: owl$MatchData[];
    weeks: owl$WeekData[];
  }

  declare interface owl$ScheduleInfo {
    startDate: string;
    endDate: string;
    stages: owl$StageScheduleInfo[];
  }

  declare function owl$getLiveMatch(
    callback: callbackFunc<owl$ApiResponse<owl$LiveMatchData>>
  ): void;

  declare function owl$getStandings(
    callback: callbackFunc<owl$ApiResponse<owl$TeamStandingInfo[]>>
  ): void;

  declare function owl$getSchedule(
    callback: callbackFunc<owl$ApiResponse<owl$ScheduleInfo>>
  ): void;
}
