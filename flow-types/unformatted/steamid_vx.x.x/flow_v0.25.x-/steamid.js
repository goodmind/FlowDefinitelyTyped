declare module 'steamid' {
        
/**
 * Render this SteamID into Steam2 textual format
 * @param newerFormat [newerFormat=false] - true if you want to use 1 in place of the leading 0 for the public universe
 */
declare type getSteam2RenderedID = (newerFormat?: boolean) => string;
	
/**
 * Render this SteamID into Steam3 textual format
 */
declare type getSteam3RenderedID = () => string;
	
/**
 * Render this SteamID into 64-bit numeric format
 */
declare type getSteamID64 = () => string;
	declare class SteamID  {
universe: SteamID$SteamID$Universe;
type: SteamID$SteamID$Type;
instance: SteamID$SteamID$Instance;
accountid: number;

/**
 * You can create a SteamID object from a Steam2 rendered ID, a Steam3 rendered ID, a SteamID64, or from the four parts that make up a SteamID.
 * @param input SteamID string
 */
constructor(input: string): this;

/**
 * Check whether this SteamID is valid (according to Steam's rules)
 */
isValid(): boolean;

/**
 * Check whether this chat SteamID is tied to a Steam group.
 */
isGroupChat(): boolean;

/**
 * Check whether this chat SteamID is a Steam lobby.
 */
isLobby(): boolean;
getSteam2RenderedID: getSteam2RenderedID;
steam2: getSteam2RenderedID;
getSteam3RenderedID: getSteam3RenderedID;
steam3: getSteam3RenderedID;
getSteamID64: getSteamID64;
toString: getSteamID64
}
	
      declare var npm$namespace$SteamID: {
        fromIndividualAccountID: typeof SteamID$fromIndividualAccountID,
        AccountIDMask: typeof SteamID$AccountIDMask,
AccountInstanceMask: typeof SteamID$AccountInstanceMask,
      }
declare  class SteamID$Universe {
  constructor(...args: empty): mixed;
static +INVALID: Class<SteamID$Universe__INVALID> & SteamID$Universe__INVALID & 0;// 0
static +PUBLIC: Class<SteamID$Universe__PUBLIC> & SteamID$Universe__PUBLIC & 1;// 1
static +BETA: Class<SteamID$Universe__BETA> & SteamID$Universe__BETA & 2;// 2
static +INTERNAL: Class<SteamID$Universe__INTERNAL> & SteamID$Universe__INTERNAL & 3;// 3
static +DEV: Class<SteamID$Universe__DEV> & SteamID$Universe__DEV & 4;// 4

}

declare class SteamID$Universe__INVALID mixins SteamID$Universe {}
declare class SteamID$Universe__PUBLIC mixins SteamID$Universe {}
declare class SteamID$Universe__BETA mixins SteamID$Universe {}
declare class SteamID$Universe__INTERNAL mixins SteamID$Universe {}
declare class SteamID$Universe__DEV mixins SteamID$Universe {}


declare  class SteamID$Type {
  constructor(...args: empty): mixed;
static +INVALID: Class<SteamID$Type__INVALID> & SteamID$Type__INVALID & 0;// 0
static +INDIVIDUAL: Class<SteamID$Type__INDIVIDUAL> & SteamID$Type__INDIVIDUAL & 1;// 1
static +MULTISEAT: Class<SteamID$Type__MULTISEAT> & SteamID$Type__MULTISEAT & 2;// 2
static +GAMESERVER: Class<SteamID$Type__GAMESERVER> & SteamID$Type__GAMESERVER & 3;// 3
static +ANON_GAMESERVER: Class<SteamID$Type__ANON_GAMESERVER> & SteamID$Type__ANON_GAMESERVER & 4;// 4
static +PENDING: Class<SteamID$Type__PENDING> & SteamID$Type__PENDING & 5;// 5
static +CONTENT_SERVER: Class<SteamID$Type__CONTENT_SERVER> & SteamID$Type__CONTENT_SERVER & 6;// 6
static +CLAN: Class<SteamID$Type__CLAN> & SteamID$Type__CLAN & 7;// 7
static +CHAT: Class<SteamID$Type__CHAT> & SteamID$Type__CHAT & 8;// 8
static +P2P_SUPER_SEEDER: Class<SteamID$Type__P2P_SUPER_SEEDER> & SteamID$Type__P2P_SUPER_SEEDER & 9;// 9
static +ANON_USER: Class<SteamID$Type__ANON_USER> & SteamID$Type__ANON_USER & 10;// 10

}

declare class SteamID$Type__INVALID mixins SteamID$Type {}
declare class SteamID$Type__INDIVIDUAL mixins SteamID$Type {}
declare class SteamID$Type__MULTISEAT mixins SteamID$Type {}
declare class SteamID$Type__GAMESERVER mixins SteamID$Type {}
declare class SteamID$Type__ANON_GAMESERVER mixins SteamID$Type {}
declare class SteamID$Type__PENDING mixins SteamID$Type {}
declare class SteamID$Type__CONTENT_SERVER mixins SteamID$Type {}
declare class SteamID$Type__CLAN mixins SteamID$Type {}
declare class SteamID$Type__CHAT mixins SteamID$Type {}
declare class SteamID$Type__P2P_SUPER_SEEDER mixins SteamID$Type {}
declare class SteamID$Type__ANON_USER mixins SteamID$Type {}


declare  class SteamID$Instance {
  constructor(...args: empty): mixed;
static +ALL: Class<SteamID$Instance__ALL> & SteamID$Instance__ALL & 0;// 0
static +DESKTOP: Class<SteamID$Instance__DESKTOP> & SteamID$Instance__DESKTOP & 1;// 1
static +CONSOLE: Class<SteamID$Instance__CONSOLE> & SteamID$Instance__CONSOLE & 2;// 2
static +WEB: Class<SteamID$Instance__WEB> & SteamID$Instance__WEB & 4;// 4

}

declare class SteamID$Instance__ALL mixins SteamID$Instance {}
declare class SteamID$Instance__DESKTOP mixins SteamID$Instance {}
declare class SteamID$Instance__CONSOLE mixins SteamID$Instance {}
declare class SteamID$Instance__WEB mixins SteamID$Instance {}


declare  class SteamID$TypeChars {
  constructor(...args: empty): mixed;
static +I: Class<SteamID$TypeChars__I> & SteamID$TypeChars__I & Type.INVALID;// Type.INVALID
static +U: Class<SteamID$TypeChars__U> & SteamID$TypeChars__U & Type.INDIVIDUAL;// Type.INDIVIDUAL
static +M: Class<SteamID$TypeChars__M> & SteamID$TypeChars__M & Type.MULTISEAT;// Type.MULTISEAT
static +G: Class<SteamID$TypeChars__G> & SteamID$TypeChars__G & Type.GAMESERVER;// Type.GAMESERVER
static +A: Class<SteamID$TypeChars__A> & SteamID$TypeChars__A & Type.ANON_GAMESERVER;// Type.ANON_GAMESERVER
static +P: Class<SteamID$TypeChars__P> & SteamID$TypeChars__P & Type.PENDING;// Type.PENDING
static +C: Class<SteamID$TypeChars__C> & SteamID$TypeChars__C & Type.CONTENT_SERVER;// Type.CONTENT_SERVER
static +g: Class<SteamID$TypeChars__g> & SteamID$TypeChars__g & Type.CLAN;// Type.CLAN
static +T: Class<SteamID$TypeChars__T> & SteamID$TypeChars__T & Type.CHAT;// Type.CHAT
static +a: Class<SteamID$TypeChars__a> & SteamID$TypeChars__a & Type.ANON_USER;// Type.ANON_USER

}

declare class SteamID$TypeChars__I mixins SteamID$TypeChars {}
declare class SteamID$TypeChars__U mixins SteamID$TypeChars {}
declare class SteamID$TypeChars__M mixins SteamID$TypeChars {}
declare class SteamID$TypeChars__G mixins SteamID$TypeChars {}
declare class SteamID$TypeChars__A mixins SteamID$TypeChars {}
declare class SteamID$TypeChars__P mixins SteamID$TypeChars {}
declare class SteamID$TypeChars__C mixins SteamID$TypeChars {}
declare class SteamID$TypeChars__g mixins SteamID$TypeChars {}
declare class SteamID$TypeChars__T mixins SteamID$TypeChars {}
declare class SteamID$TypeChars__a mixins SteamID$TypeChars {}


declare var SteamID$AccountIDMask: ;

declare var SteamID$AccountInstanceMask: ;

declare  class SteamID$ChatInstanceFlags {
  constructor(...args: empty): mixed;
static +Clan: Class<SteamID$ChatInstanceFlags__Clan> & SteamID$ChatInstanceFlags__Clan & "NO PRINT IMPLEMENTED: BinaryExpression";// "NO PRINT IMPLEMENTED: BinaryExpression"
static +Lobby: Class<SteamID$ChatInstanceFlags__Lobby> & SteamID$ChatInstanceFlags__Lobby & "NO PRINT IMPLEMENTED: BinaryExpression";// "NO PRINT IMPLEMENTED: BinaryExpression"
static +MMSLobby: Class<SteamID$ChatInstanceFlags__MMSLobby> & SteamID$ChatInstanceFlags__MMSLobby & "NO PRINT IMPLEMENTED: BinaryExpression";// "NO PRINT IMPLEMENTED: BinaryExpression"

}

declare class SteamID$ChatInstanceFlags__Clan mixins SteamID$ChatInstanceFlags {}
declare class SteamID$ChatInstanceFlags__Lobby mixins SteamID$ChatInstanceFlags {}
declare class SteamID$ChatInstanceFlags__MMSLobby mixins SteamID$ChatInstanceFlags {}



/**
 * Create an individual SteamID in the public universe given an accountid
 * @param accountid - The user's account ID
 */
declare function SteamID$fromIndividualAccountID(accountid: number | string): SteamID

	declare module.exports: typeof SteamID

    }
