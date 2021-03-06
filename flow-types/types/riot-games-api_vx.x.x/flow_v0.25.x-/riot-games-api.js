declare module "riot-games-api" {
  declare interface Champion$ChampionDto {
    active: boolean;
    botEnabled: boolean;
    botMmEnabled: boolean;
    freeToPlay: boolean;
    id: number;
    rankedPlayEnabled: boolean;
    allytips: Array<string>;
    blurb: string;
    enemytips: Array<string>;
    id: number;
    image: LolStaticData$ImageDto;
    info: LolStaticData$InfoDto;
    key: string;
    lore: string;
    name: string;
    partype: string;
    passive: LolStaticData$PassiveDto;
    recommended: Array<LolStaticData$RecommendedDto>;
    skins: Array<LolStaticData$SkinDto>;
    spells: Array<LolStaticData$ChampionSpellDto>;
    stats: LolStaticData$StatsDto;
    tags: Array<string>;
    title: string;
  }

  declare interface Champion$ChampionListDto {
    champions: Array<Champion$ChampionDto>;
    data: {
      [str: string]: Champion$ChampionDto
    };
    format: string;
    keys: {
      [str: string]: string
    };
    type: string;
    version: string;
  }

  declare interface ChampionMastery$ChampionMasteryDto {
    championId: number;
    championLevel: number;
    championPoints: number;
    championPointsSinceLastLevel: number;
    championPointsUntilNextLevel: number;
    chestGranted: boolean;
    highestGrade: string;
    lastPlayTime: number;
    playerId: number;
  }

  declare interface CurrentGame$CurrentGameInfo {
    bannedChampion: Array<Match$BannedChampion>;
    gameId: number;
    gameLength: number;
    gameMode: number;
    gameQueueConfigId: number;
    gameStartTime: number;
    gameType: string;
    mapId: number;
    observers: FeaturedGames$Observer;
    participants: Array<CurrentGame$CurrentGameParticipant>;
    platformId: string;
  }

  declare interface CurrentGame$BannedChampion {
    championId: number;
    pickTurn: number;
    teamId: number;
    championId: number;
    pickTurn: number;
    teamId: number;
    championId: number;
    pickTurn: number;
  }

  declare interface CurrentGame$CurrentGameParticipant {
    bot: boolean;
    championId: number;
    masteries: Array<Match$Mastery>;
    profileIconId: number;
    runes: Array<Match$Rune>;
    spell1Id: number;
    spell2Id: number;
    summonerId: number;
    summonerName: string;
    teamId: number;
  }

  declare interface CurrentGame$Observer {
    encryptionKey: string;
    encryptionKey: string;
  }

  declare interface CurrentGame$Mastery {
    masterId: number;
    rank: number;
    masteryId: number;
    rank: number;
  }

  declare interface CurrentGame$Rune {
    count: number;
    runeId: number;
    rank: number;
    runeId: number;
  }

  declare interface FeaturedGames$FeaturedGames {
    clientRefreshInterval: number;
    gameList: Array<FeaturedGames$FeaturedGameInfo>;
  }

  declare interface FeaturedGames$FeaturedGameInfo {
    bannedChampions: Array<CurrentGame$BannedChampion>;
    gameId: number;
    gameLength: number;
    gameMode: string;
    gameQueueConfigId: number;
    gameStartTime: number;
    gameType: string;
    mapId: number;
    observers: CurrentGame$Observer;
    participants: Array<Match$Participant>;
    plateformId: string;
  }

  declare interface FeaturedGames$Participant {
    bot: boolean;
    championId: number;
    profileIconId: number;
    spell1Id: number;
    spell2Id: number;
    summonerName: string;
    teamId: number;
    championId: number;
    highestAchievedSeasonTier: string;
    masteries: Array<CurrentGame$Mastery>;
    participantId: number;
    runes: Array<CurrentGame$Rune>;
    spell1Id: number;
    spell2Id: number;
    stats: Match$ParticipantStats;
    teamId: number;
    timeline: Match$ParticipantTimeline;
  }

  declare interface FeaturedGames$BannedChampion {
    championId: number;
    pickTurn: number;
    teamId: number;
    championId: number;
    pickTurn: number;
    teamId: number;
    championId: number;
    pickTurn: number;
  }

  declare interface FeaturedGames$Observer {
    encryptionKey: string;
    encryptionKey: string;
  }

  declare interface Game$RecentGamesDto {
    games: Array<Game$GameDto>;
    summonerId: number;
  }

  declare interface Game$GameDto {
    championId: number;
    createDate: number;
    fellowPlayers: Array<Game$PlayerDto>;
    gameId: number;
    gameMode: string;
    gameType: string;
    invalid: boolean;
    ipEarned: number;
    level: number;
    mapId: number;
    spell1: number;
    spell2: number;
    stats: Game$RawStatsDto;
    subType: string;
    teamId: number;
  }

  declare interface Game$PlayerDto {
    championId: number;
    summonerId: number;
    teamId: number;
  }

  declare interface Game$RawStatsDto {
    assists: number;
    barracksKilled: number;
    championsKilled: number;
    combatPlayerScore: number;
    consumablesPurchased: number;
    damageDealtPlayer: number;
    doubleKills: number;
    firstBlood: number;
    gold: number;
    goldEarned: number;
    goldSpent: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    itemsPurchased: number;
    killingSprees: number;
    largestCriticalStrike: number;
    largestKillingSpree: number;
    largestMultiKill: number;
    legendaryItemsCreated: number;
    level: number;
    magicDamageDealtPlayer: number;
    magicDamageDealtToChampions: number;
    magicDamageTaken: number;
    minionsDenied: number;
    minionsKilled: number;
    neutralMinionsKilled: number;
    neutralMinionsKilledEnemyJungle: number;
    neutralMinionsKilledYourJungle: number;
    nexusKilled: boolean;
    nodeCapture: number;
    nodeCaptureAssist: number;
    nodeNeutralize: number;
    nodeNeutralizeAssist: number;
    numDeaths: number;
    numItemsBought: number;
    objectivePlayerScore: number;
    pentaKills: number;
    physicalDamageDealtPlayer: number;
    physicalDamageDealtToChampions: number;
    physicalDamageTaken: number;
    playerPosition: number;
    playerRole: number;
    quadraKills: number;
    sightWardsBought: number;
    spell1Cast: number;
    spell2Cast: number;
    spell3Cast: number;
    spell4Cast: number;
    summonSpell1Cast: number;
    summonSpell2Cast: number;
    superMonsterKilled: number;
    team: number;
    teamObjective: number;
    timePlayed: number;
    totalDamageDealt: number;
    totalDamageDealtToChampions: number;
    totalDamageTaker: number;
    totalHeal: number;
    totalPlayerScore: number;
    totalScoreRank: number;
    totalTimeCrowdControlDealt: number;
    totalUnitsHealed: number;
    tripleKills: number;
    trueDamageDealtPlayer: number;
    trueDamageDealtToChampions: number;
    trueDamageTaken: number;
    turrentsKilled: number;
    unrealKills: number;
    victoryPointTotal: number;
    visionWardsBought: number;
    wardKilled: number;
    wardPlaced: number;
    win: boolean;
  }

  declare interface League$LeagueDto {
    entries: Array<League$LeagueEntryDto>;
    name: string;
    participantId: string;
    queue: string;
    tier: string;
  }

  declare interface League$LeagueEntryDto {
    division: string;
    isFreshBlood: boolean;
    isHotStreak: boolean;
    isInactive: boolean;
    isVeteran: boolean;
    leaguePoints: number;
    losses: number;
    miniSeries: League$MiniSeriesDto;
    playerOrTeamId: string;
    playerOrTeamName: string;
    wins: number;
  }

  declare interface League$MiniSeriesDto {
    losses: number;
    progress: string;
    target: number;
    wins: number;
  }

  declare interface LolStaticData$ChampionListDto {
    champions: Array<Champion$ChampionDto>;
    data: {
      [str: string]: Champion$ChampionDto
    };
    format: string;
    keys: {
      [str: string]: string
    };
    type: string;
    version: string;
  }

  declare interface LolStaticData$ChampionDto {
    active: boolean;
    botEnabled: boolean;
    botMmEnabled: boolean;
    freeToPlay: boolean;
    id: number;
    rankedPlayEnabled: boolean;
    allytips: Array<string>;
    blurb: string;
    enemytips: Array<string>;
    id: number;
    image: LolStaticData$ImageDto;
    info: LolStaticData$InfoDto;
    key: string;
    lore: string;
    name: string;
    partype: string;
    passive: LolStaticData$PassiveDto;
    recommended: Array<LolStaticData$RecommendedDto>;
    skins: Array<LolStaticData$SkinDto>;
    spells: Array<LolStaticData$ChampionSpellDto>;
    stats: LolStaticData$StatsDto;
    tags: Array<string>;
    title: string;
  }

  declare interface LolStaticData$ChampionSpellDto {
    altimages: Array<LolStaticData$ImageDto>;
    cooldown: Array<number>;
    cooldownBurn: string;
    cost: Array<number>;
    costBurn: string;
    costType: string;
    description: string;
    effect: Array<Array<number>>;
    effectBurn: Array<string>;
    image: LolStaticData$ImageDto;
    key: string;
    leveltip: LolStaticData$LevelTipDto;
    maxrank: number;
    name: string;
    range: Array<number> | string;
    rangeBurn: string;
    resource: string;
    sanitizedDescription: string;
    sanitizedTooltip: string;
    tooltip: string;
    vars: Array<LolStaticData$SpellVarsDto>;
  }

  declare interface LolStaticData$ImageDto {
    full: string;
    group: string;
    h: number;
    sprite: string;
    w: number;
    x: number;
    y: number;
  }

  declare interface LolStaticData$InfoDto {
    attack: number;
    defense: number;
    difficulty: number;
    magic: number;
  }

  declare interface LolStaticData$PassiveDto {
    description: string;
    image: LolStaticData$ImageDto;
    name: string;
    sanitizedDescription: string;
  }

  declare interface LolStaticData$RecommendedDto {
    block: Array<LolStaticData$BlockDto>;
    champion: string;
    map: string;
    mode: string;
    priority: boolean;
    title: string;
    type: string;
  }

  declare interface LolStaticData$SkinDto {
    id: number;
    name: string;
    num: number;
  }

  declare interface LolStaticData$StatsDto {
    armor: number;
    armorperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackrange: number;
    attackspeedoffset: number;
    attackspeedperlevel: number;
    crit: number;
    critperlevel: number;
    hp: number;
    hpperlevel: number;
    hpregen: number;
    hpregenperlevel: number;
    movespeed: number;
    mp: number;
    mpperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
  }

  declare interface LolStaticData$LevelTipDto {
    effect: Array<string>;
    label: Array<string>;
  }

  declare interface LolStaticData$SpellVarsDto {
    coeff: Array<number>;
    dyn: string;
    key: string;
    link: string;
    ranksWith: string;
  }

  declare interface LolStaticData$BlockDto {
    items: Array<LolStaticData$BlockItemDto>;
    recMath: boolean;
    type: string;
  }

  declare interface LolStaticData$BlockItemDto {
    count: number;
    id: number;
  }

  declare interface LolStaticData$ItemListDto {
    basic: LolStaticData$BasicDataDto;
    data: Array<{
      [str: string]: LolStaticData$ItemDto
    }>;
    groups: Array<LolStaticData$GroupDto>;
    tree: Array<LolStaticData$ItemTreeDto>;
    type: string;
    version: string;
  }

  declare interface LolStaticData$BasicDataDto {
    colloq: string;
    consumeOnFull: boolean;
    consumed: boolean;
    depth: number;
    description: string;
    from: Array<string>;
    gold: LolStaticData$GoldDto;
    group: string;
    hideFromAll: boolean;
    id: number;
    image: LolStaticData$ImageDto;
    inStore: boolean;
    into: Array<string>;
    maps: Array<{
      [str: string]: boolean
    }>;
    name: string;
    plaintext: string;
    requiredChampion: string;
    rune: LolStaticData$MetaDataDto;
    sanitizedDescription: string;
    specialRecipe: number;
    stacks: number;
    stats: LolStaticData$BasicDataStatsDto;
    tags: Array<string>;
  }

  declare interface LolStaticData$GroupDto {
    MaxGroupOwnable: string;
    key: string;
  }

  declare interface LolStaticData$ItemDto {
    colloq: string;
    consumeOnFull: boolean;
    consumed: boolean;
    depth: number;
    description: string;
    effect: Array<{
      [str: string]: string
    }>;
    from: Array<string>;
    gold: LolStaticData$GoldDto;
    group: string;
    hideFromAll: boolean;
    id: number;
    image: LolStaticData$ImageDto;
    inStore: boolean;
    into: Array<string>;
    maps: Array<{
      [str: string]: boolean
    }>;
    name: string;
    plaintext: string;
    requiredChampion: string;
    rune: LolStaticData$MetaDataDto;
    sanitizedDescription: string;
    specialRecipe: number;
    stacks: number;
    stats: LolStaticData$BasicDataStatsDto;
    tags: Array<string>;
  }

  declare interface LolStaticData$ItemTreeDto {
    header: string;
    tags: Array<string>;
  }

  declare interface LolStaticData$BasicDataStatsDto {
    FlatArmorMod: number;
    FlatAttackSpeedMod: number;
    FlatBlockMod: number;
    FlatCritChanceMod: number;
    FlatCritDamageMod: number;
    FlatEXPBonus: number;
    FlatEnergyPoolMod: number;
    FlatEnergyRegenMod: number;
    FlatHPPoolMod: number;
    FlatHPRegenMod: number;
    FlatMPPoolMod: number;
    FlatMPRegenMod: number;
    FlatMagicDamageMod: number;
    FlatMovementSpeedMod: number;
    FlatPhysicalDamageMod: number;
    FlatSpellBlockMod: number;
    PercentArmorMod: number;
    PercentAttackSpeedMod: number;
    PercentBlockMod: number;
    PercentCritChanceMod: number;
    PercentCritDamageMod: number;
    PercentDodgeMod: number;
    PercentEXPBonus: number;
    PercentHPPoolMod: number;
    PercentHPRegenMod: number;
    PercentLifeStealMod: number;
    PercentMPPoolMod: number;
    PercentMPRegenMod: number;
    PercentMagicDamageMod: number;
    PercentMovementSpeedMod: number;
    PercentPhysicalDamageMod: number;
    PercentSpellBlockMod: number;
    PercentSpellVampMod: number;
    rFlatArmorModPerLevel: number;
    rFlatArmorPenetrationMod: number;
    rFlatArmorPenetrationModPerLevel: number;
    rFlatCritChanceModPerLevel: number;
    rFlatCritDamageModPerLevel: number;
    rFlatDodgeMod: number;
    rFlatDodgeModPerLevel: number;
    rFlatEnergyModPerLevel: number;
    rFlatEnergyRegenModPerLevel: number;
    rFlatGoldPer10Mod: number;
    rFlatHPModPerLevel: number;
    rFlatHPRegenModPerLevel: number;
    rFlatMPModPerLevel: number;
    rFlatMPRegenModPerLevel: number;
    rFlatMagicDamageModPerLevel: number;
    rFlatMagicPenetrationMod: number;
    rFlatMagicPenetrationModPerLevel: number;
    rFlatMovementSpeedModPerLevel: number;
    rFlatPhysicalDamageModPerLevel: number;
    rFlatSpellBlockModPerLevel: number;
    rFlatTimeDeadMod: number;
    rFlatTimeDeadModPerLevel: number;
    rPercentArmorPenetrationMod: number;
    rPercentArmorPenetrationModPerLevel: number;
    rPercentAttackSpeedModPerLevel: number;
    rPercentCooldownMod: number;
    rPercentCooldownModPerLevel: number;
    rPercentMagicPenetrationMod: number;
    rPercentMagicPenetrationModPerLevel: number;
    rPercentMovementSpeedModPerLevel: number;
    rPercentTimeDeadMod: number;
    rPercentTimeDeadModPerLevel: number;
  }

  declare interface LolStaticData$GoldDto {
    base: number;
    purchasable: boolean;
    sell: number;
    total: number;
  }

  declare interface LolStaticData$MetaDataDto {
    isRune: boolean;
    tier: string;
    type: string;
  }

  declare interface LolStaticData$LanguageStringsDto {
    data: Array<{
      [str: string]: string
    }>;
    type: string;
    version: string;
  }

  declare interface LolStaticData$MapDataDto {
    data: Array<{
      [str: string]: LolStaticData$MapDetailsDto
    }>;
    type: string;
    version: string;
  }

  declare interface LolStaticData$MapDetailsDto {
    image: LolStaticData$ImageDto;
    mapId: number;
    mapName: string;
    unpurchasableItemList: Array<number>;
  }

  declare interface LolStaticData$MasteryListDto {
    data: Array<{
      [str: string]: Summoner$MasteryDto
    }>;
    tree: LolStaticData$MasteryTreeDto;
    type: string;
    version: string;
  }

  declare interface LolStaticData$MasteryDto {
    description: Array<string>;
    id: number;
    image: LolStaticData$ImageDto;
    masteryTree: string;
    name: string;
    prereq: string;
    ranks: number;
    sanitizedDescription: Array<string>;
    id: number;
    rank: number;
  }

  declare interface LolStaticData$MasteryTreeDto {
    Defense: Array<LolStaticData$MasteryTreeListDto>;
    Offense: Array<LolStaticData$MasteryTreeListDto>;
    Utility: Array<LolStaticData$MasteryTreeListDto>;
  }

  declare interface LolStaticData$MasteryTreeListDto {
    masteryTreeItems: Array<LolStaticData$MasteryTreeItemDto>;
  }

  declare interface LolStaticData$MasteryTreeItemDto {
    masteryId: number;
    prereq: string;
  }

  declare interface LolStaticData$RealmDto {
    cdn: string;
    css: string;
    dd: string;
    l: string;
    lg: string;
    n: Array<{
      [str: string]: string
    }>;
    profileiconmax: number;
    storage: string;
    v: string;
  }

  declare interface LolStaticData$RuneListDto {
    basic: LolStaticData$BasicDataDto;
    data: Array<{
      [str: string]: LolStaticData$RuneDto
    }>;
    type: string;
    version: string;
  }

  declare interface LolStaticData$RuneDto {
    colloq: string;
    consumeOnFull: boolean;
    consumed: boolean;
    depth: number;
    description: string;
    from: Array<string>;
    group: string;
    hideFromAll: boolean;
    id: number;
    image: LolStaticData$ImageDto;
    inStore: boolean;
    into: Array<string>;
    maps: Array<{
      [str: string]: boolean
    }>;
    name: string;
    plaintext: string;
    requiredChampion: string;
    rune: LolStaticData$MetaDataDto;
    sanitizedDescription: string;
    specialRecipe: number;
    stacks: number;
    stats: LolStaticData$BasicDataStatsDto;
    tags: Array<string>;
  }

  declare interface LolStaticData$SummonerSpellListDto {
    data: Array<{
      [str: string]: LolStaticData$SummonerSpellDto
    }>;
    type: string;
    version: string;
  }

  declare interface LolStaticData$SummonerSpellDto {
    cooldown: Array<number>;
    cooldownBurn: string;
    cost: Array<number>;
    costBurn: string;
    costType: string;
    description: string;
    effect: Array<Array<number>>;
    effectBurn: Array<string>;
    id: number;
    image: LolStaticData$ImageDto;
    key: string;
    leveltip: LolStaticData$LevelTipDto;
    maxrank: number;
    modes: Array<string>;
    name: string;
    range: Array<number> | string;
    rangeBurn: string;
    resource: string;
    sanitizedDescription: string;
    sanitizedTooltip: string;
    summonerLevel: number;
    tooltip: string;
    vars: Array<LolStaticData$SpellVarsDto>;
  }

  declare interface LolStatus$Shard {
    hostname: string;
    locales: Array<string>;
    name: string;
    region_tag: string;
    slug: string;
  }

  declare interface LolStatus$ShardStatus {
    hostname: string;
    locales: Array<string>;
    name: string;
    region_tag: string;
    services: Array<LolStatus$Service>;
    slug: string;
  }

  declare interface LolStatus$Service {
    incidents: Array<LolStatus$Incident>;
    name: string;
    slug: string;
    status: string;
  }

  declare interface LolStatus$Incident {
    active: boolean;
    created_at: string;
    id: number;
    updates: Array<LolStatus$Message>;
  }

  declare interface LolStatus$Message {
    author: string;
    content: string;
    created_at: string;
    id: number;
    severity: string;
    translations: Array<LolStatus$Translation>;
    updated_at: string;
  }

  declare interface LolStatus$Translation {
    content: string;
    locale: string;
    updated_at: string;
  }

  declare interface Match$MatchDetail {
    mapId: number;
    matchCreation: number;
    matchId: number;
    matchMode: string;
    matchType: string;
    matchVersion: string;
    participantIdentities: Array<Match$ParticipantIdentity>;
    participants: Array<FeaturedGames$Participant>;
    plateformId: string;
    queueType: string;
    region: string;
    season: string;
    teams: Array<Match$Team>;
    timeline: Match$Timeline;
  }

  declare interface Match$Participant {
    bot: boolean;
    championId: number;
    profileIconId: number;
    spell1Id: number;
    spell2Id: number;
    summonerName: string;
    teamId: number;
    championId: number;
    highestAchievedSeasonTier: string;
    masteries: Array<CurrentGame$Mastery>;
    participantId: number;
    runes: Array<CurrentGame$Rune>;
    spell1Id: number;
    spell2Id: number;
    stats: Match$ParticipantStats;
    teamId: number;
    timeline: Match$ParticipantTimeline;
  }

  declare interface Match$ParticipantIdentity {
    participantId: number;
    player: Match$Player;
  }

  declare interface Match$Team {
    bans: Array<FeaturedGames$BannedChampion>;
    baronKills: number;
    dominionVictoryScore: number;
    dragonKills: number;
    firstBaron: boolean;
    firstBlood: boolean;
    firstDragon: boolean;
    firstInhibitor: boolean;
    firstTower: boolean;
    inhibitorKills: number;
    teamId: number;
    towerKills: number;
    vilemawKills: number;
    winner: boolean;
  }

  declare interface Match$Timeline {
    frameInverval: number;
    frames: Array<Match$Frame>;
  }

  declare interface Match$Mastery {
    masterId: number;
    rank: number;
    masteryId: number;
    rank: number;
  }

  declare interface Match$ParticipantStats {
    assists: number;
    champLevel: number;
    combatPlayerScore: number;
    deaths: number;
    doubleKills: number;
    firstBloodAssist: boolean;
    firstBloodKill: boolean;
    firstInhibitorAssist: boolean;
    firstInhibitorKill: boolean;
    firstTowerAssist: boolean;
    firstTowerKill: boolean;
    goldEarned: number;
    goldSpent: number;
    inhibitorKills: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    killingSprees: number;
    kills: number;
    largestCriticalStrike: number;
    largestKillingSpree: number;
    largestMultiKill: number;
    magicDamageDealt: number;
    magicDamageDealtToChampions: number;
    magicDamageTaken: number;
    minionsKilled: number;
    neutralMinionsKilled: number;
    neutralMinionsKilledEnemyJungle: number;
    neutralMinionsKilledTeamJungle: number;
    nodeCapture: number;
    nodeCaptureAssist: number;
    nodeNeutralize: number;
    nodeNeutralizeAssist: number;
    objectivePlayerScore: number;
    pentaKills: number;
    physicalDamageDealt: number;
    physicalDamageDealtToChampions: number;
    physicalDamageTaken: number;
    quadraKills: number;
    sightWardsBoughtInGame: number;
    teamObjective: number;
    totalDamageDealt: number;
    totalDamageDealtToChampions: number;
    totalDamageTaken: number;
    totalHeal: number;
    totalPlayerScore: number;
    totalScoreRank: number;
    totalTimeCrowdControlDealt: number;
    totalUnitsHealed: number;
    towerKills: number;
    tripleKills: number;
    trueDamageDealt: number;
    trueDamageDealtToChampions: number;
    trueDamageTaken: number;
    unrealKills: number;
    visionWardsBoughtInGame: number;
    wardsKilled: number;
    wardsPlaced: number;
    winner: boolean;
  }

  declare interface Match$ParticipantTimeline {
    ancientGolemAssistsPerMinCounts: Match$ParticipantTimelineData;
    ancientGolemKillsPerMinCounts: Match$ParticipantTimelineData;
    assistedLaneDeathsPerMinDeltas: Match$ParticipantTimelineData;
    assistedLaneKillsPerMinDeltas: Match$ParticipantTimelineData;
    baronAssistsPerMinCounts: Match$ParticipantTimelineData;
    baronKillsPerMinCounts: Match$ParticipantTimelineData;
    creepsPerMinDeltas: Match$ParticipantTimelineData;
    csDiffPerMinDeltas: Match$ParticipantTimelineData;
    damageTakenDiffPerMinDeltas: Match$ParticipantTimelineData;
    damageTakenPerMinDeltas: Match$ParticipantTimelineData;
    dragonAssistsPerMinCounts: Match$ParticipantTimelineData;
    dragonKillsPerMinCounts: Match$ParticipantTimelineData;
    elderLizardAssistsPerMinCounts: Match$ParticipantTimelineData;
    elderLizardKillsPerMinCounts: Match$ParticipantTimelineData;
    goldPerMinDeltas: Match$ParticipantTimelineData;
    inhibitorAssistsPerMinCounts: Match$ParticipantTimelineData;
    inhibitorKillsPerMinCounts: Match$ParticipantTimelineData;
    lane: string;
    role: string;
    towerAssistsPerMinCounts: Match$ParticipantTimelineData;
    towerKillsPerMinCounts: Match$ParticipantTimelineData;
    towerKillsPerMinDeltas: Match$ParticipantTimelineData;
    vilemawAssistsPerMinCounts: Match$ParticipantTimelineData;
    vilemawKillsPerMinCounts: Match$ParticipantTimelineData;
    wardsPerMinDeltas: Match$ParticipantTimelineData;
    xpDiffPerMinDeltas: Match$ParticipantTimelineData;
    xpPerMinDeltas: Match$ParticipantTimelineData;
  }

  declare interface Match$Rune {
    count: number;
    runeId: number;
    rank: number;
    runeId: number;
  }

  declare interface Match$Player {
    matchHistoryUri: string;
    profileIcon: number;
    summonerId: number;
    summonerName: string;
  }

  declare interface Match$BannedChampion {
    championId: number;
    pickTurn: number;
    teamId: number;
    championId: number;
    pickTurn: number;
    teamId: number;
    championId: number;
    pickTurn: number;
  }

  declare interface Match$Frame {
    events: Array<Match$Event>;
    participanFrames: Array<{
      [str: string]: Match$ParticipantFrame
    }>;
    timestamp: number;
  }

  declare interface Match$ParticipantTimelineData {
    tenToTwenty: number;
    thirtyToEnd: number;
    twentyToThirty: number;
    zeroToTen: number;
  }

  declare interface Match$Event {
    ascendedType: string;
    assistingParticipantIds: Array<number>;
    buildingType: string;
    creatorId: number;
    eventType: string;
    itemAfter: number;
    itemBefore: number;
    itemId: number;
    killerId: number;
    laneType: string;
    levelUpType: string;
    monsterType: string;
    participantId: number;
    pointCaptured: string;
    position: Match$Position;
    skillSlot: number;
    teamId: number;
    timestamp: number;
    towerType: string;
    victimId: number;
    wardType: string;
  }

  declare interface Match$ParticipantFrame {
    currentGold: number;
    dominionScore: number;
    jungleMinionsKilled: number;
    level: number;
    minionsKilled: number;
    participantId: number;
    position: Match$Position;
    teamScore: number;
    totalGold: number;
    xp: number;
  }

  declare interface Match$Position {
    x: number;
    y: number;
  }

  declare interface MatchList$MatchList {
    endIndex: number;
    matches: Array<MatchList$MatchReference>;
    startIndex: number;
    totalGames: number;
  }

  declare interface MatchList$MatchReference {
    champion: number;
    lane: string;
    matchId: number;
    plateformId: string;
    queue: string;
    region: string;
    role: string;
    season: string;
    timestamp: number;
  }

  declare interface Stats$RankedStatsDto {
    champions: Array<Stats$ChampionStatsDto>;
    modifyDate: number;
    summonerId: number;
  }

  declare interface Stats$ChampionStatsDto {
    id: number;
    stats: Stats$AggregatedStatsDto;
  }

  declare interface Stats$AggregatedStatsDto {
    averageAssists: number;
    averageChampionsKilled: number;
    averageCombatPlayerScore: number;
    averageNodeCapture: number;
    averageNodeCaptureAssist: number;
    averageNodeNeutralize: number;
    averageNodeNeutralizeAssist: number;
    averageNumDeaths: number;
    averageObjectivePlayerScore: number;
    averageTeamObjective: number;
    averageTotalPlayerScore: number;
    botGamesPlayed: number;
    killingSpree: number;
    maxAssists: number;
    maxChampionsKilled: number;
    maxCombatPlayerScore: number;
    maxLargestCriticalStrike: number;
    maxLargestKillingSpree: number;
    maxNodeCapture: number;
    maxNodeCaptureAssist: number;
    maxNodeNeutralize: number;
    maxNodeNeutralizeAssist: number;
    maxNumDeaths: number;
    maxObjectivePlayerScore: number;
    maxTeamObjective: number;
    maxTimePlayed: number;
    maxTimeSpentLiving: number;
    maxTotalPlayerScore: number;
    mostChampionKillsPerSession: number;
    mostSpellsCast: number;
    normalGamesPlayed: number;
    rankedPremadeGamesPlayed: number;
    rankedSoloGamesPlayed: number;
    totalAssists: number;
    totalChampionKills: number;
    totalDamageDealt: number;
    totalDamageTaken: number;
    totalDeathsPerSession: number;
    totalDoubleKills: number;
    totalFirstBlood: number;
    totalGoldEarned: number;
    totalHeal: number;
    totalMagicDamageDealt: number;
    totalMinionsKills: number;
    totalNeutralMinionsKilled: number;
    totalNodeCapture: number;
    totalNodeNeutralize: number;
    totalPentaKills: number;
    totalPhysicalDamageDealt: number;
    totalQuadraKills: number;
    totalSessionsLost: number;
    totalSessionsPlayed: number;
    totalSessionsWon: number;
    totalTripleKills: number;
    totalTurretsKilleds: number;
    totalUnrealKills: number;
  }

  declare interface Stats$PlayerStatsSummaryListDto {
    playerStatSummaries: Array<Stats$PlayerStatsSummaryDto>;
    summonerId: number;
  }

  declare interface Stats$PlayerStatsSummaryDto {
    aggregatedStats: Stats$AggregatedStatsDto;
    losses: number;
    modifyDate: number;
    playerStatSummaryType: string;
    wins: number;
  }

  declare interface Summoner$SummonerDto {
    id: number;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
  }

  declare interface Summoner$MasteryPagesDto {
    pages: Array<Summoner$MasteryPageDto>;
    summonerId: number;
  }

  declare interface Summoner$MasteryPageDto {
    current: boolean;
    id: number;
    masteries: Array<LolStaticData$MasteryDto>;
    name: string;
  }

  declare interface Summoner$MasteryDto {
    description: Array<string>;
    id: number;
    image: LolStaticData$ImageDto;
    masteryTree: string;
    name: string;
    prereq: string;
    ranks: number;
    sanitizedDescription: Array<string>;
    id: number;
    rank: number;
  }

  declare interface Summoner$RunePagesDto {
    pages: Array<Summoner$RunePageDto>;
    summonerId: number;
  }

  declare interface Summoner$RunePageDto {
    current: boolean;
    id: number;
    name: string;
    slots: Array<Summoner$RuneSlotDto>;
  }

  declare interface Summoner$RuneSlotDto {
    runeId: number;
    runeSlotId: number;
  }

  declare interface Team$TeamDto {
    createDate: number;
    fullId: string;
    lastGameDate: number;
    lastJoinDate: number;
    lastJoinedRankedTeamQueueDate: number;
    matchHistory: Array<Team$MatchHistorySummaryDto>;
    modifyDate: number;
    name: string;
    roster: Team$RosterDto;
    secondLastJoinDate: number;
    status: string;
    tag: string;
    teamStatDetails: Array<Team$TeamStatDetailDto>;
    thirdLastJoinDate: number;
  }

  declare interface Team$MatchHistorySummaryDto {
    assists: number;
    date: number;
    deaths: number;
    gameId: number;
    gameMode: string;
    invalid: boolean;
    kills: number;
    mapId: number;
    opposingTeamKills: number;
    opposingTeamName: string;
    win: boolean;
  }

  declare interface Team$RosterDto {
    memberList: Array<Team$TeamMemberInfoDto>;
    ownerId: number;
  }

  declare interface Team$TeamStatDetailDto {
    averageGamesPlayed: number;
    losses: number;
    teamStatType: string;
    wins: number;
  }

  declare interface Team$TeamMemberInfoDto {
    inviteDate: number;
    joinDate: number;
    playerId: number;
    status: string;
  }

  declare interface TournamentProvider$TournamentCodeParameters {
    allowedSummonerIds: TournamentProvider$SummonerIdParams;
    mapType: string;
    metadata: string;
    pickType: string;
    spectatorType: string;
    teamSize: number;
  }

  declare interface TournamentProvider$SummonerIdParams {
    participants: number[];
  }

  declare interface TournamentProvider$TournamentCodeDto {
    code: string;
    id: number;
    lobbyName: string;
    map: string;
    metaData: string;
    participants: number[];
    password: string;
    pickType: string;
    providerId: number;
    region: string;
    spectators: string;
    teamSize: number;
    tournamentId: number;
  }

  declare interface TournamentProvider$TournamentCodeUpdateParameters {
    allowedParticipants: string;
    mapType: string;
    pickType: string;
    spectatorType: string;
  }

  declare interface TournamentProvider$LobbyEventDtoWrapper {
    eventList: TournamentProvider$LobbyEventDto[];
  }

  declare interface TournamentProvider$LobbyEventDto {
    eventType: string;
    summonerId: string;
    timestamp: string;
  }

  declare interface TournamentProvider$ProviderRegistrationParameters {
    region: string;
    url: string;
  }

  declare interface TournamentProvider$TournamentRegistrationParameters {
    name: string;
    providerId: number;
  }
}
