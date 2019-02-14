declare module "plugapi" {
  declare var npm$namespace$PlugAPI: {
    ROOM_ROLE: typeof PlugAPI$ROOM_ROLE,
    GLOBAL_ROLES: typeof PlugAPI$GLOBAL_ROLES,
    STATUS: typeof PlugAPI$STATUS,
    BAN: typeof PlugAPI$BAN,
    BAN_REASON: typeof PlugAPI$BAN_REASON,
    MUTE: typeof PlugAPI$MUTE,
    MUTE_REASON: typeof PlugAPI$MUTE_REASON,
    events: typeof PlugAPI$events
  };
  declare interface PlugAPI$PlugLogin {
    email: string;
    password: string;
  }

  declare interface PlugAPI$Notification {
    action: string;
    id: number;
    timestamp: string;
    value: string;
  }

  declare interface PlugAPI$RawChatMessage {
    cid: string;
    message: string;
    sub: number;
    uid: number;
    un: string;
  }

  declare interface PlugAPI$Media {
    author: string;
    format: number;
    image: string;
    cid: string;
    duration: number;
    title: string;
    id: number;
  }

  declare interface PlugAPI$Score {
    positive: number;
    listeners: number;
    grabs: number;
    negative: number;
    skipped: number;
  }

  declare interface PlugAPI$LastPlay {
    dj: User$DJ;
    media: PlugAPI$Media;
    score: PlugAPI$Score;
  }

  declare interface PlugAPI$FollowJoinData {
    r: number;
    un: string;
    id: string;
  }

  declare interface PlugAPI$LogObject {
    log(): void;
  }

  declare interface PlugAPI$User$Default {
    username: string;
    language: string;
    avatarID: string;
  }

  declare type PlugAPI$User$Extended = {
    status: number,
    fans: number,
    listenerPoints: number,
    id: string,
    curatorPoints: number,
    djPoints: number
  } & Default;

  declare type PlugAPI$User$Update = {
    dateJoined: string
  } & Extended;

  declare type PlugAPI$User$Room = {
    sub: number,
    level: number,
    joined: string,
    id: number,
    badge: string,
    role: number,
    gRole: number,
    slug: string
  } & Default;

  declare type PlugAPI$User$User = {
    silver: boolean,
    guest: boolean
  } & Room;

  declare type PlugAPI$User$DJ = {
    blurp: any,
    grab: boolean,
    status: number,
    vote: number
  } & Room;

  declare type PlugAPI$User$Audience = {
    ignores: any[],
    notifications: PlugAPI$Notification[],
    pp: number,
    pw: number,
    xp: number
  } & DJ;

  declare interface PlugAPI$Enum$RoomRole {
    NONE: number;
    RESIDENTDJ: number;
    BOUNCER: number;
    MANAGER: number;
    COHOST: number;
    HOST: number;
  }

  declare interface PlugAPI$Enum$GlobalRole {
    NONE: number;
    VOLUNTEER: number;
    AMBASSADOR: number;
    LEADER: number;
    ADMIN: number;
  }

  declare interface PlugAPI$Enum$Status {
    OFFLINE: number;
    ONLINE: number;
  }

  declare interface PlugAPI$Enum$Ban {
    HOUR: "h";
    DAY: "d";
    PERMA: "f";
  }

  declare interface PlugAPI$Enum$BanReason {
    SPAMMING_TROLLING: number;
    VERBAL_ABUSE: number;
    OFFENSIVE_MEDIA: number;
    INAPPROPRIATE_GENRE: number;
    NEGATIVE_ATTITUDE: number;
  }

  declare interface PlugAPI$Enum$Mute {
    SHORT: "s";
    MEDIUM: "m";
    LONG: "l";
  }

  declare interface PlugAPI$Enum$MuteReason {
    VIOLATING_COMMUNITY_RULES: number;
    VERBAL_ABUSE: number;
    SPAMMING_TROLLING: number;
    OFFENSIVE_LANGUAGE: number;
    NEGATIVE_ATTITUDE: number;
  }

  declare interface PlugAPI$Enum$Events {
    ADVANCE: "advance";
    BAN: "ban";
    BOOTH_LOCKED: "boothLocked";
    CHAT: "chat";
    CHAT_COMMAND: "command";
    CHAT_DELETE: "chatDelete";
    CHAT_LEVEL_UPDATE: "roomMinChatLevelUpdate";
    COMMAND: "command";
    DJ_LIST_CYCLE: "djListCycle";
    DJ_LIST_UPDATE: "djListUpdate";
    DJ_LIST_LOCKED: "djListLocked";
    EARN: "earn";
    FOLLOW_JOIN: "followJoin";
    FLOOD_CHAT: "floodChat";
    FRIEND_REQUEST: "friendRequest";
    GIFTED: "gifted";
    GRAB: "grab";
    KILL_SESSION: "killSession";
    MAINT_MODE: "plugMaintenance";
    MAINT_MODE_ALERT: "plugMaintenanceAlert";
    MODERATE_ADD_DJ: "modAddDJ";
    MODERATE_ADD_WAITLIST: "modAddWaitList";
    MODERATE_AMBASSADOR: "modAmbassador";
    MODERATE_BAN: "modBan";
    MODERATE_MOVE_DJ: "modMoveDJ";
    MODERATE_MUTE: "modMute";
    MODERATE_REMOVE_DJ: "modRemoveDJ";
    MODERATE_REMOVE_WAITLIST: "modRemoveWaitList";
    MODERATE_SKIP: "modSkip";
    MODERATE_STAFF: "modStaff";
    NOTIFY: "notify";
    PDJ_MESSAGE: "pdjMessage";
    PDJ_UPDATE: "pdjUpdate";
    PING: "ping";
    PLAYLIST_CYCLE: "playlistCycle";
    REQUEST_DURATION: "requestDuration";
    REQUEST_DURATION_RETRY: "requestDurationRetry";
    ROOM_CHANGE: "roomChanged";
    ROOM_DESCRIPTION_UPDATE: "roomDescriptionUpdate";
    ROOM_JOIN: "roomJoin";
    ROOM_NAME_UPDATE: "roomNameUpdate";
    ROOM_VOTE_SKIP: "roomVoteSkip";
    ROOM_WELCOME_UPDATE: "roomWelcomeUpdate";
    SESSION_CLOSE: "sessionClose";
    SKIP: "skip";
    STROBE_TOGGLE: "strobeToggle";
    USER_COUNTER_UPDATE: "userCounterUpdate";
    USER_FOLLOW: "userFollow";
    USER_JOIN: "userJoin";
    USER_LEAVE: "userLeave";
    USER_UPDATE: "userUpdate";
    VOTE: "vote";
  }

  declare interface PlugAPI$Event$BoothCycle {
    moderator: string;
    cycle: boolean;
  }

  declare interface PlugAPI$Event$BoothLocked {
    m: string;
    c: boolean;
    ml: string;
    f: boolean;
  }

  declare interface PlugAPI$Event$Chat {
    raw: PlugAPI$RawChatMessage;
    id: string;
    from: User$User;
    message: string;
    mentions: any[];
    muted: boolean;
    type: string;
  }

  declare interface PlugAPI$Event$ChatDelete {
    mi: number;
    chatID: string;
  }

  declare type PlugAPI$Event$Grab = number;

  declare interface PlugAPI$Event$Advance {
    media: PlugAPI$Media;
    startTime: string;
    historyID: string;
    djs: User$DJ[];
    currentDJ: User$DJ;
    playlistID: number;
    lastPlay: PlugAPI$LastPlay;
  }

  declare interface PlugAPI$Event$DJListUpdate {
    djs: User$DJ[];
    remove: string;
  }

  declare interface PlugAPI$Event$Emote {
    fromID: string;
    message: string;
    from: string;
    type: string;
    chatID: string;
  }

  declare interface PlugAPI$Event$FollowJoin {
    data: PlugAPI$FollowJoinData;
    type: string;
  }

  declare interface PlugAPI$Event$ModAddDJ {
    moderator: string;
    username: string;
  }

  declare interface PlugAPI$Event$ModBan {
    moderator: string;
    username: string;
    duration: number;
    ref: string;
    reason: string;
  }

  declare interface PlugAPI$Event$ModMoveDJ {
    moderator: string;
    index: number;
    old: number;
    userID: string;
  }

  declare interface PlugAPI$Event$ModRemoveDJ {
    moderator: string;
    username: string;
    userID: string;
  }

  declare interface PlugAPI$Event$ModSkip {
    mi: number;
    m: string;
  }

  declare interface PlugAPI$Event$RoomMinChatLevelUpdate {
    level: number;
    id: number;
    user: User$User;
  }

  declare type PlugAPI$Event$RoomJoin = string;

  declare type PlugAPI$Event$UserJoin = User$User;

  declare type PlugAPI$Event$UserLeave = User$User;

  declare interface PlugAPI$Event$UserUpdate {
    username: string;
    status: number;
    fans: number;
    listenerPoints: number;
    dateJoined: string;
    language: string;
    avatarID: string;
    id: string;
    curatorPoints: number;
    djPoints: number;
  }

  declare interface PlugAPI$Event$Vote {
    i: number;
    v: number;
  }

  declare type PlugAPI$Event$Command = {
    command: string,
    args: string[],
    respond(...args: any[]): any,
    respondTimeout(...args: any[]): any,
    havePermission(...args: any[]): boolean,
    isFrom(...args: any[]): boolean
  } & Chat;

  declare var PlugAPI$ROOM_ROLE: Enum$RoomRole;

  declare var PlugAPI$GLOBAL_ROLES: Enum$GlobalRole;

  declare var PlugAPI$STATUS: Enum$Status;

  declare var PlugAPI$BAN: Enum$Ban;

  declare var PlugAPI$BAN_REASON: Enum$BanReason;

  declare var PlugAPI$MUTE: Enum$Mute;

  declare var PlugAPI$MUTE_REASON: Enum$MuteReason;

  declare var PlugAPI$events: Enum$Events;
  declare class PlugAPI {
    constructor(
      login: PlugAPI$PlugLogin,
      callback?: (error: Error, bot: PlugAPI) => void | ((bot: PlugAPI) => void)
    ): this;
    deleteAllChat: boolean;
    multiLine: boolean;
    multiLineLimit: number;
    connect(room: string): void;
    changeDJCycle(enabled: boolean, callback?: () => void): boolean;
    changeRoom(room: string, callback?: () => void): void;
    close(): void;
    getAdmins(): PlugAPI$UserExtended[];
    getAmbassadors(): PlugAPI$UserExtended[];
    getAudience(): PlugAPI$UserAudience[];
    getDJ(): PlugAPI$UserDJ;
    getDJs(): PlugAPI$UserDJ[];
    getHost(): PlugAPI$UserExtended;
    getMedia(): PlugAPI$Media;
    getRoomScore(): PlugAPI$Score;
    getSelf(): PlugAPI$UserAudience;
    getStaff(): PlugAPI$UserExtended[];
    getTimeElapsed(): number;
    getTimeRemaining(): number;
    getUser(userID: number): PlugAPI$UserDJ;
    getUsers(): PlugAPI$UserDJ[];
    getWaitList(): PlugAPI$UserExtended;
    getWaitListPosition(userID: number): number;
    havePermission(
      userID: number,
      permission: number,
      global?: boolean
    ): boolean;
    joinBooth(callback?: () => void): boolean;
    leaveBooth(callback?: () => void): boolean;
    selfSkip(callback?: () => void): boolean;
    sendChat(msg: string, timeout?: number): void;
    setLogger(logObject: PlugAPI$LogObject): boolean;
    on(
      event: "boothCycle",
      callback: (data: PlugAPI$EventBoothCycle) => void
    ): void;
    on(
      event: "boothLocked",
      callback: (data: PlugAPI$EventBoothLocked) => void
    ): void;
    on(event: "chat", callback: (data: PlugAPI$EventChat) => void): void;
    on(
      event: "chatDelete",
      callback: (data: PlugAPI$EventChatDelete) => void
    ): void;
    on(event: "grab", callback: (data: PlugAPI$EventGrab) => void): void;
    on(event: "advance", callback: (data: PlugAPI$EventAdvance) => void): void;
    on(
      event: "djListUpdate",
      callback: (data: PlugAPI$EventDJListUpdate) => void
    ): void;
    on(event: "emote", callback: (data: PlugAPI$EventEmote) => void): void;
    on(
      event: "followJoin",
      callback: (data: PlugAPI$EventFollowJoin) => void
    ): void;
    on(
      event: "modAddDJ",
      callback: (data: PlugAPI$EventModAddDJ) => void
    ): void;
    on(event: "modBan", callback: (data: PlugAPI$EventModBan) => void): void;
    on(
      event: "modMoveDJ",
      callback: (data: PlugAPI$EventModMoveDJ) => void
    ): void;
    on(
      event: "modRemoveDJ",
      callback: (data: PlugAPI$EventModRemoveDJ) => void
    ): void;
    on(event: "modSkip", callback: (data: PlugAPI$EventModSkip) => void): void;
    on(
      event: "roomMinChatLevelUpdate",
      callback: (data: PlugAPI$EventRoomMinChatLevelUpdate) => void
    ): void;
    on(
      event: "roomJoin",
      callback: (data: PlugAPI$EventRoomJoin) => void
    ): void;
    on(
      event: "userJoin",
      callback: (data: PlugAPI$EventUserJoin) => void
    ): void;
    on(
      event: "userLeave",
      callback: (data: PlugAPI$EventUserLeave) => void
    ): void;
    on(
      event: "userUpdate",
      callback: (data: PlugAPI$EventUserUpdate) => void
    ): void;
    on(event: "vote", callback: (data: PlugAPI$EventVote) => void): void;
    on(event: "command", callback: (data: PlugAPI$EventCommand) => void): void;
    on(event: string, callback: (data: any) => void): void;
  }
  declare export default typeof PlugAPI;
}
