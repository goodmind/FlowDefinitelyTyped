declare module "steamid" {
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
  declare class SteamID {
    universe: SteamID$Universe;
    type: SteamID$Type;
    instance: SteamID$Instance;
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
    toString: getSteamID64;
  }

  declare var npm$namespace$SteamID: {
    fromIndividualAccountID: typeof SteamID$fromIndividualAccountID,
    AccountIDMask: typeof SteamID$AccountIDMask,
    AccountInstanceMask: typeof SteamID$AccountInstanceMask,
    Universe: typeof SteamID$Universe,
    Type: typeof SteamID$Type,
    Instance: typeof SteamID$Instance,
    TypeChars: typeof SteamID$TypeChars,
    ChatInstanceFlags: typeof SteamID$ChatInstanceFlags
  };

  declare var SteamID$Universe: {|
    +INVALID: 0, // 0
    +PUBLIC: 1, // 1
    +BETA: 2, // 2
    +INTERNAL: 3, // 3
    +DEV: 4 // 4
  |};

  declare var SteamID$Type: {|
    +INVALID: 0, // 0
    +INDIVIDUAL: 1, // 1
    +MULTISEAT: 2, // 2
    +GAMESERVER: 3, // 3
    +ANON_GAMESERVER: 4, // 4
    +PENDING: 5, // 5
    +CONTENT_SERVER: 6, // 6
    +CLAN: 7, // 7
    +CHAT: 8, // 8
    +P2P_SUPER_SEEDER: 9, // 9
    +ANON_USER: 10 // 10
  |};

  declare var SteamID$Instance: {|
    +ALL: 0, // 0
    +DESKTOP: 1, // 1
    +CONSOLE: 2, // 2
    +WEB: 4 // 4
  |};

  declare var SteamID$TypeChars: {|
    +I: Type.INVALID, // Type.INVALID
    +U: Type.INDIVIDUAL, // Type.INDIVIDUAL
    +M: Type.MULTISEAT, // Type.MULTISEAT
    +G: Type.GAMESERVER, // Type.GAMESERVER
    +A: Type.ANON_GAMESERVER, // Type.ANON_GAMESERVER
    +P: Type.PENDING, // Type.PENDING
    +C: Type.CONTENT_SERVER, // Type.CONTENT_SERVER
    +g: Type.CLAN, // Type.CLAN
    +T: Type.CHAT, // Type.CHAT
    +a: Type.ANON_USER // Type.ANON_USER
  |};

  declare var SteamID$AccountIDMask: any; // 4294967295;

  declare var SteamID$AccountInstanceMask: any; // 1048575;

  declare var SteamID$ChatInstanceFlags: {|
    +Clan: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +Lobby: "NO PRINT IMPLEMENTED: BinaryExpression", // "NO PRINT IMPLEMENTED: BinaryExpression"
    +MMSLobby: "NO PRINT IMPLEMENTED: BinaryExpression" // "NO PRINT IMPLEMENTED: BinaryExpression"
  |};

  /**
   * Create an individual SteamID in the public universe given an accountid
   * @param accountid - The user's account ID
   */
  declare function SteamID$fromIndividualAccountID(
    accountid: number | string
  ): SteamID;

  declare export default typeof SteamID;
}
