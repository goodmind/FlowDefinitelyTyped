declare module "smart-fox-server" {
  declare export class Data$Vec3D {
    /**
     * @type {number} Returns the position along the X axis.
     */
    px: number;

    /**
     * @type {number} Returns the position along the Y axis.
     */
    py: number;

    /**
     * @type {number} Returns the position along the Z axis.
     */
    pz: number;

    /**
     * Creates a new Vec3D instance.
     * @param {number} px The position along the X axis.
     * @param {number} py The position along the Y axis.
     * @param {number} pz The position along the Z axis.
     */
    constructor(px: number, py: number, pz?: number): this;

    /**
     * Indicates whether the position is expressed using floating point values or not.
     * @return {boolean} Returns: true if the position is expressed using floating point values.
     */
    isFloat(): boolean;
  }

  declare export class Invitation$InvitationReply {
    /**
     * @type {number} Invitation is accepted.
     */
    static ACCEPT: number;

    /**
     * @type {number} Invitation is refused.
     */
    static REFUSE: number;
  }

  declare export class Invitation$SFSInvitation {
    /**
     * @type {number} Indicates the id of the invitation.
     */
    id: number;

    /**
     * @type {Entities$SFSUser} Returns the SFSUser object corresponding to the user who received the invitation.
     */
    invitee: Entities$SFSUser;

    /**
     * @type {Entities$SFSUser} Returns the SFSUser object corresponding to the user who sent the invitation.
     */
    inviter: Entities$SFSUser;

    /**
     * @type {Object} Returns an object containing a custom set of parameters.
     */
    params: Object;

    /**
     * @type {number} Returns the number of seconds available to the invitee to reply to the invitation, after which the invitation expires.
     */
    secondsForAnswer: number;

    /**
     * Creates a new SFSInvitation instance.
     * @param {Entities$SFSUser} inviter A SFSUser object corresponding to the user who sent the invitation.
     * @param {Entities$SFSUser} invitee A SFSUser object corresponding to the user who received the invitation.
     * @param {number} secondsForAnswer The number of seconds available to the invitee to reply to the invitation.
     * @param {Object} params An object containing a custom set of parameters representing the invitation details.
     */
    constructor(
      inviter: Entities$SFSUser,
      invitee: Entities$SFSUser,
      secondsForAnswer: number,
      params: Object
    ): this;
  }

  declare export class Match$BoolMatch {
    /**
     * @type {Match$BoolMatch} An instance of BoolMatch representing the following condition: bool1 == bool2.
     */
    static EQUALS: Match$BoolMatch;

    /**
     * @type {Match$BoolMatch} An instance of BoolMatch representing the following condition: bool1 != bool2.
     */
    static NOT_EQUALS: Match$BoolMatch;
  }

  declare export class Match$LogicOperator {
    /**
     * @type {Match$LogicOperator} An instance of LogicOperator representing the AND logical operator.
     */
    static AND: Match$LogicOperator;

    /**
     * @type {Match$LogicOperator} An instance of LogicOperator representing the OR logical operator.
     */
    static OR: Match$LogicOperator;
  }

  declare export class Match$MatchExpression {
    /**
 * @type {(Match$RoomProperties
| Match$UserProperties
| Match$BoolMatch
| Match$NumberMatch
| Match$StringMatch
| Requests$Game.Game$CreateSFSGameRequest
| Requests$System.System$FindRoomsRequest
| Requests$System.System$FindUsersRequest)} Returns the matching criteria used during values comparison among those provided by the BoolMatch, NumberMatch and StringMatch classes.
 */
    condition:
      | Match$RoomProperties
      | Match$UserProperties
      | Match$BoolMatch
      | Match$NumberMatch
      | Match$StringMatch
      | Requests$Game.Game$CreateSFSGameRequest
      | Requests$System.System$FindRoomsRequest
      | Requests$System.System$FindUsersRequest;

    /**
     * @type {Match$LogicOperator} In case of concatenated expressions, returns the current logical operator.
     */
    loginOp: Match$LogicOperator;

    /**
     * @type {Match$MatchExpression} Returns the next matching expression concatenated to the current one, if existing.
     */
    next: Match$MatchExpression;

    /**
     * @type {any} Returns the value against which the variable or property corresponding to varName is compared.
     */
    value: any;

    /**
     * @type {string} Returns the name of the variable or property against which the comparison is made.
     */
    varName: string;

    /**
 * Creates a new MatchExpression instance.
 * @param {string} varName Name of the variable or property to match.
 * @param {(Match$RoomProperties
| Match$UserProperties
| Match$BoolMatch
| Match$NumberMatch
| Match$StringMatch
| Requests$Game.Game$CreateSFSGameRequest
| Requests$System.System$FindRoomsRequest
| Requests$System.System$FindUsersRequest)} condition A matching condition among those provided by the BoolMatch, NumberMatch and StringMatch classes.
 * @param {any} value The value to compare against the variable or property during the matching.
 */
    constructor(
      varName: string,
      condition:
        | Match$RoomProperties
        | Match$UserProperties
        | Match$BoolMatch
        | Match$NumberMatch
        | Match$StringMatch
        | Requests$Game.Game$CreateSFSGameRequest
        | Requests$System.System$FindRoomsRequest
        | Requests$System.System$FindUsersRequest,
      value: any
    ): this;

    /**
 * Concatenates the current expression with a new one using the logical AND operator.
 * @param {string} varName Name of the additional variable or property to match.
 * @param {(Match$RoomProperties
| Match$UserProperties
| Match$BoolMatch
| Match$NumberMatch
| Match$StringMatch
| Requests$Game.Game$CreateSFSGameRequest
| Requests$System.System$FindRoomsRequest
| Requests$System.System$FindUsersRequest)} condition The additional matching condition among those provided by the BoolMatch, NumberMatch and StringMatch classes.
 * @param {any} value The value to compare against the additional variable or property during the matching.
 * @return {Match$MatchExpression} A new MatchExpression resulting from the concatenation of the current expression with a new one generated from the specified parameters.
 */
    and(
      varName: string,
      condition:
        | Match$RoomProperties
        | Match$UserProperties
        | Match$BoolMatch
        | Match$NumberMatch
        | Match$StringMatch
        | Requests$Game.Game$CreateSFSGameRequest
        | Requests$System.System$FindRoomsRequest
        | Requests$System.System$FindUsersRequest,
      value: any
    ): Match$MatchExpression;

    /**
     * Checks if the current matching expression is concatenated to another one through a logical operator.
     * @return {boolean} Returns: true if the current matching expression is concatenated to another one.
     */
    hasNext(): boolean;

    /**
 * Concatenates the current expression with a new one using the logical OR operator.
 * @param {string} varName Name of the additional variable or property to match.
 * @param {(Match$RoomProperties
| Match$UserProperties
| Match$BoolMatch
| Match$NumberMatch
| Match$StringMatch
| Requests$Game.Game$CreateSFSGameRequest
| Requests$System.System$FindRoomsRequest
| Requests$System.System$FindUsersRequest)} condition The additional matching condition among those provided by the BoolMatch, NumberMatch and StringMatch classes.
 * @param {any} value The value to compare against the additional variable or property during the matching.
 * @return {Match$MatchExpression} A new MatchExpression resulting from the concatenation of the current expression with a new one generated from the specified parameters.
 */
    or(
      varName: string,
      condition:
        | Match$RoomProperties
        | Match$UserProperties
        | Match$BoolMatch
        | Match$NumberMatch
        | Match$StringMatch
        | Requests$Game.Game$CreateSFSGameRequest
        | Requests$System.System$FindRoomsRequest
        | Requests$System.System$FindUsersRequest,
      value: any
    ): Match$MatchExpression;

    /**
     * Moves the iterator cursor to the first matching expression in the chain.
     * @return {Match$MatchExpression} The MatchExpression object at the top of the chain of matching expressions.
     */
    rewind(): Match$MatchExpression;

    /**
     * Returns a string representation of the matching expression.
     * @return {string} The string representation of the MatchExpression object.
     */
    toString(): string;
  }

  declare export class Match$NumberMatch {
    /**
     * @type {Match$NumberMatch} An instance of NumberMatch representing the following condition: number1 == number2.
     */
    static EQUALS: Match$NumberMatch;

    /**
     * @type {Match$NumberMatch} An instance of NumberMatch representing the following condition: number1 > number2.
     */
    static GREATER_THAN: Match$NumberMatch;

    /**
     * @type {Match$NumberMatch} An instance of NumberMatch representing the following condition: number1 >= number2.
     */
    static GREATER_THAN_OR_EQUAL_TO: Match$NumberMatch;

    /**
     * @type {Match$NumberMatch} An instance of NumberMatch representing the following condition: number1 < number2.
     */
    static LESS_THAN: Match$NumberMatch;

    /**
     * @type {Match$NumberMatch} An instance of NumberMatch representing the following condition: number1 <= number2.
     */
    static LESS_THAN_OR_EQUAL_TO: Match$NumberMatch;

    /**
     * @type {Match$NumberMatch} An instance of NumberMatch representing the following condition: number1 != number2.
     */
    static NOT_EQUALS: Match$NumberMatch;
  }

  declare export class Match$RoomProperties {
    /**
     * @type {string} The name of the Group to which the Room belongs.
     */
    static GROUP_ID: string;

    /**
     * @type {string} The Room has at least one free player slot.
     */
    static HAS_FREE_PLAYER_SLOTS: string;

    /**
     * @type {string} The Room is a Game Room.
     */
    static IS_GAME: string;

    /**
     * @type {string} The Room is private.
     */
    static IS_PRIVATE: string;

    /**
     * @type {string} The Room is an SFSGame on the server-side.
     */
    static IS_TYPE_SFSGAME: string;

    /**
     * @type {string} The maximum number of spectators allowed in the Room (Game Rooms only).
     */
    static MAX_SPECTATORS: string;

    /**
     * @type {string} The maximum number of users allowed in the Room (players in Game Rooms).
     */
    static MAX_USERS: string;

    /**
     * @type {string} The Room name.
     */
    static NAME: string;

    /**
     * @type {string} The Room spectators count (Game Rooms only).
     */
    static SPECTATOR_COUNT: string;

    /**
     * @type {string} The Room users count (players in Game Rooms).
     */
    static USER_COUNT: string;
  }

  declare export class Match$StringMatch {
    /**
     * @type {Match$StringMatch} An instance of StringMatch representing the following condition: string1.indexOf(string2) != -1
     */
    static CONTAINS: Match$StringMatch;

    /**
     * @type {Match$StringMatch} An instance of StringMatch representing the following condition: string1 ends with characters contained in string2.
     */
    static ENDS_WITH: Match$StringMatch;

    /**
     * @type {Match$StringMatch} An instance of StringMatch representing the following condition: string1 == string2.
     */
    static EQUALS: Match$StringMatch;

    /**
     * @type {Match$StringMatch} An instance of StringMatch representing the following condition: string1 != string2.
     */
    static NOT_EQUALS: Match$StringMatch;

    /**
     * @type {Match$StringMatch} An instance of StringMatch representing the following condition: string1 starts with characters contained in string2.
     */
    static STARTS_WITH: Match$StringMatch;
  }

  declare export class Match$UserProperties {
    /**
     * @type {string} The user joined at least one Room.
     */
    static IS_IN_ANY_ROOM: string;

    /**
     * @type {string} The user is a Non-Player Character (NPC).
     */
    static IS_NPC: string;

    /**
     * @type {string} The user is a player in a Game Room.
     */
    static IS_PLAYER: string;

    /**
     * @type {string} The user is a spectator in a Game Room.
     */
    static IS_SPECTATOR: string;

    /**
     * @type {string} The user name.
     */
    static NAME: string;

    /**
     * @type {string} The user privilege id.
     */
    static PRIVILEGE_ID: string;
  }

  declare export class Entities$MMOItem {
    /**
     * @type {Data$Data$Vec3D} Returns the entry point of this item in the current user's AoI.
     */
    aoiEnteryPoint: Data$Data$Vec3D;

    /**
     * @type {number} Indicates the id of this item.
     */
    id: number;

    /**
     * Creates a new MMOItem instance.
     * @param {number} id The item id.
     */
    constructor(id: number): this;

    /**
     * Indicates whether this item has the specified MMOItem Variable set or not.
     * @param {string} varName The name of the MMOItem Variable whose existance must be checked.
     * @return {boolean} Returns: true if an MMOItem Variable with the passed name is set for this item.
     */
    containsVariable(varName: string): boolean;

    /**
     * Retrieves an MMOItem Variable from its name.
     * @param {string} varName The name of the MMOItem Variable to be retrieved.
     * @return {Variables$Variables$MMOItemVariable} The MMOItemVariable object, or null if no MMOItem Variable with the passed name is associated to this item.
     */
    getVariable(varName: string): Variables$Variables$MMOItemVariable;

    /**
     * Retrieves all the MMOItem Variables of this item.
     * @return {Variables$Variables$MMOItemVariable[]} The list of MMOItemVariable objects associated to this item.
     */
    getVariables(): Variables$Variables$MMOItemVariable[];

    /**
     * Returns a string that contains the item id.
     * @return {string} Returns: The string representation of the MMOItem object.
     */
    toString(): string;
  }

  declare export class Entities$MMORoom mixins Entities$SFSRoom {
    /**
     * @type {Data$Data$Vec3D} Returns the default Area of Interest (AoI) of this MMORoom.
     */
    defaultAOI: Data$Data$Vec3D;

    /**
     * @type {Requests$MMO.MMO$MapLimits} Returns the higher coordinates limit of the virtual environment represented by the MMORoom along the X,Y,Z axes. If null is returned, no limits were set at Room creation time.
     */
    higherMapLimit: Requests$MMO.MMO$MapLimits;

    /**
     * @type {Requests$MMO.MMO$MapLimits} Returns the lower coordinates limit of the virtual environment represented by the MMORoom along the X,Y,Z axes. If null is returned, no limits were set at Room creation time.
     */
    lowerMapLimit: Requests$MMO.MMO$MapLimits;

    /**
     * Creates a new MMORoom instance.
     * @param {number} id The MMORoom id.
     * @param {string} name The MMORoom name.
     * @param {string} groupId The id of the Group to which the MMORoom belongs.
     */
    constructor(id: number, name: string, groupId?: string): this;

    /**
     * Retrieves an MMOItem object from its id property. The item is available to the current user if it falls within his Area of Interest only.
     * @param {number} id The id of the item to be retrieved.
     * @return {Entities$MMOItem} Returns: An MMOItem object, or null if the item with the passed id is not in proximity of the current user.
     */
    getMMOItem(id: number): Entities$MMOItem;

    /**
     * Retrieves all MMOItem object in the MMORoom that fall within the current user's Area of Interest.
     * @return {Entities$MMOItem[]} Returns: A list of MMOItem objects, or an empty list if no item is in proximity of the current user.
     */
    getMMOItems(): Entities$MMOItem[];
  }

  declare export class Entities$SFSBuddy {
    /**
     * @type {number} Indicates the id of this buddy.
     */
    id: number;

    /**
     * @type {string} Indicates the name of this buddy.
     */
    name: string;

    /**
     * Creates a new SFSBuddy instance.
     * @param {number} id The buddy id.
     * @param {string} name The buddy name.
     * @param {boolean} isBlocked If true, the buddy is blocked by the current user.
     * @param {boolean} isTemp If true, the buddy is just temporary in the current user's buddy list.
     */
    constructor(
      id: number,
      name: string,
      isBlocked?: boolean,
      isTemp?: boolean
    ): this;

    /**
     * Indicates whether this user has the specified Buddy Variable set or not.
     * @param {string} varName The name of the Buddy Variable whose existance must be checked.
     * @return {boolean} Returns: true if a Buddy Variable with the passed name is set for this buddy.
     */
    containsVariable(varName: string): boolean;

    /**
     * Returns the nickname of this buddy. If the nickname is not set, null is returned.
     * @return {string} Returns: The nickname of the buddy.
     */
    getNickName(): string;

    /**
     * Retrieves the list of persistent Buddy Variables for this buddy.
     * @return {Variables$Variables$SFSBuddyVariable[]} Returns: An array of SFSBuddyVariable objects.
     */
    getOfflineVariables(): Variables$Variables$SFSBuddyVariable[];

    /**
     * Retrieves the list of non-persistent Buddy Variables for this buddy.
     * @return {Variables$Variables$SFSBuddyVariable[]} Returns: An array of SFSBuddyVariable objects.
     */
    getOnlineVariables(): Variables$Variables$SFSBuddyVariable[];

    /**
     * Returns the custom state of this buddy. Examples of custom states are "Available", "Busy", "Be right back", etc. If the custom state is not set, null is returned.
     * @return {string} Returns: The custom state of the buddy.
     */
    getState(): string;

    /**
     * Retrieves a Buddy Variable from its name.
     * @param {string} varName The name of the Buddy Variable to be retrieved.
     * @return {Variables$Variables$SFSBuddyVariable} Returns: The object representing the Buddy Variable, or null if no Buddy Variable with the passed name is associated to this buddy.
     */
    getVariable(varName: string): Variables$Variables$SFSBuddyVariable;

    /**
     * Retrieves all the Buddy Variables of this user.
     * @return {Variables$Variables$SFSBuddyVariable[]} Returns: The list of SFSBuddyVariable objects associated to the buddy.
     */
    getVariables(): Variables$Variables$SFSBuddyVariable[];

    /**
     * Indicates whether this buddy is blocked in the current user's buddy list or not. A buddy can be blocked by means of a BlockBuddyRequest request.
     * @return {boolean} Returns: true if the buddy is blocked.
     */
    isBlocked(): boolean;

    /**
     * Indicates whether this buddy is online in the Buddy List system or not.
     * @return {boolean} Returns: true if the buddy is online.
     */
    isOnline(): boolean;

    /**
     * Indicates whether this buddy is temporary (non-persistent) in the current user's buddy list or not.
     * @return {boolean} Returns: true if the buddy is temporary.
     */
    isTemp(): boolean;

    /**
     * Returns a string that contains the buddy id and name.
     * @return {string} Returns: The string representation of the SFSBuddy object.
     */
    toString(): string;
  }

  declare export class Entities$SFSRoom {
    /**
     * @type {string} Returns the Room Group name.
     */
    groupId: string;

    /**
     * @type {number} Indicates the id of this Room.
     */
    id: number;

    /**
     * @type {boolean} Indicates whether this is a Game Room or not.
     */
    isGame: boolean;

    /**
     * @type {boolean} Indicates whether this Room is hidden or not.
     */
    isHidden: boolean;

    /**
     * @type {boolean} Indicates whether the client joined this Room or not.
     */
    isJoined: boolean;

    /**
     * @type {boolean} Indicates whether this Room requires a password to be joined or not.
     */
    isPasswordProtected: boolean;

    /**
     * @type {number} Returns the maximum number of spectators allowed in this Room (Game Rooms only).
     */
    maxSpectators: number;

    /**
     * @type {number} Returns the maximum number of users allowed in this Room.
     */
    maxUsers: number;

    /**
     * @type {string} Indicates the name of this Room.
     */
    name: string;

    /**
     * @type {Object} Defines a generic utility object that can be used to store custom Room data.
     */
    properties: Object;

    /**
     * Creates a new SFSRoom instance.
     * @param {number} id The Room id.
     * @param {string} name The Room name.
     * @param {string} groupId The id of the Group to which the Room belongs.
     */
    constructor(id: number, name: string, groupId?: string): this;

    /**
     * Indicates whether the specified user is currently inside this Room or not.
     * @param {Entities$SFSUser} user The SFSUser object representing the user whose presence in this Room must be checked.
     * @return {boolean} Returns: true if the user is inside this Room; false otherwise.
     */
    containsUser(user: Entities$SFSUser): boolean;

    /**
     * Indicates whether this Room has the specified Room Variable set or not.
     * @param {string} varName The name of the Room Variable whose existance in this Room must be checked.
     * @return {boolean} Returns: true if a Room Variable with the passed name exists in this Room.
     */
    containsVariable(varName: string): boolean;

    /**
     * Returns the maximum amount of users, including spectators, that can be contained in this Room.
     * @return {number} Returns: Maximum number of users that can enter the Room.
     */
    getCapacity(): number;

    /**
     * Retrieves the list of SFSUser objects representing the players currently inside this Room (Game Rooms only).
     * @return {Entities$SFSUser[]} Returns: The list of SFSUser objects representing the users who joined the Room as players.
     */
    getPlayerList(): Entities$SFSUser[];

    /**
     * Retrieves a reference to the Room Manager which manages this Room.
     * @return {Managers$Managers$RoomManager} Returns: The Room Manager to which this Room is associated.
     */
    getRoomManager(): Managers$Managers$RoomManager;

    /**
     * Returns the current number of spectators in this Room (Game Rooms only).
     * @return {number} Returns: Current number of spectators in the Room.
     */
    getSpectatorCount(): number;

    /**
     * Retrieves the list of SFSUser objects representing the spectators currently inside this Room (Game Rooms only).
     * @return {Entities$SFSUser[]} Returns: The list of SFSUser objects representing the users who joined the Room as spectators.
     */
    getSpectatorList(): Entities$SFSUser[];

    /**
     * Retrieves a SFSUser object from its id property.
     * @param {number} id The id of the user to be found.
     * @return {Entities$SFSUser} Returns: An object representing the user, or null if no user with the passed id exists in this Room.
     */
    getUserById(id: number): Entities$SFSUser;

    /**
     * Retrieves a SFSUser object from its name property.
     * @param {string} name The name of the user to be found.
     * @return {Entities$SFSUser} Returns: An object representing the user, or null if no user with the passed name exists in this Room.
     */
    getUserByName(name: string): Entities$SFSUser;

    /**
     * Returns the current number of users in this Room. In case of Game Rooms, this is the number of players.
     * @return {number} Returns: Current number of users in the Room.
     */
    getUserCount(): number;

    /**
     * Returns the current number of users in this Room. In case of Game Rooms, this is the number of players.
     * @return {Entities$SFSUser[]} Returns: Current number of users in the Room.
     */
    getUserList(): Entities$SFSUser[];

    /**
     * Retrieves a Room Variable from its name.
     * @param {string} varName The name of the Room Variable to be retrieved.
     * @return {Variables$Variables$SFSRoomVariable} Returns: The object representing the Room Variable, or null if no Room Variable with the passed name exists in this Room.
     */
    getVariable(varName: string): Variables$Variables$SFSRoomVariable;

    /**
     * Retrieves all the Room Variables of this Room.
     * @return {Variables$Variables$SFSRoomVariable[]} Returns: The list of SFSRoomVariable objects associated with this Room.
     */
    getVariables(): Variables$Variables$SFSRoomVariable[];

    /**
     * Returns a string that contains the Room id, name and id of the Group to which it belongs.
     * @return {string} Returns: The string representation of the SFSRoom object.
     */
    toString(): string;
  }

  declare export class Entities$SFSUser {
    /**
     * @type {Data$Data$Vec3D} Returns the entry point of this user in the current user's AoI.
     */
    aoiEntryPoint: Data$Data$Vec3D;

    /**
     * @type {number} Indicates the id of this user. It is unique and it is generated by the server when the user is created.
     */
    id: number;

    /**
     * @type {boolean} Indicates if this SFSUser object represents the current client.
     */
    isItMe: boolean;

    /**
     * @type {string} Indicates the name of this user. Two users in the same Zone can't have the same name.
     */
    name: string;

    /**
     * @type {number} Returns the id which identifies the privilege level of this user.
     */
    privilegeId: number;

    /**
     * @type {Object} Defines a generic utility object that can be used to store custom user data. The values added to this object are for client-side use only and are never transmitted to the server or to the other clients.
     */
    properties: Object;

    /**
     * Creates a new SFSUser instance.
     * @param {number} id The user id.
     * @param {string} name The user name.
     * @param {boolean} isItMe If true, the user being created corresponds to the current client.
     */
    constructor(id: number, name: string, isItMe?: boolean): this;

    /**
     * Indicates whether this user has the specified User Variable set or not.
     * @param {string} varName The name of the User Variable whose existance must be checked.
     * @return {boolean} Returns: true if a User Variable with the passed name is set for this user.
     */
    containsVariable(varName: string): boolean;

    /**
     * Returns the playerId value of this user in the passed Room. See the playerId property description for more informations.
     * @param {Entities$SFSRoom} room The SFSRoom object representing the Room to retrieve the player id from.
     * @return {number} Returns: The playerId of this user in the passed Room.
     */
    getPlayerId(room: Entities$SFSRoom): number;

    /**
     * Returns a reference to the User Manager which manages this user.
     * @return {Managers$Managers$UserManager} Returns: The User Manager to which this user is associated.
     */
    getUserManager(): Managers$Managers$UserManager;

    /**
     * Retrieves a User Variable from its name.
     * @param {string} varName The name of the User Variable to be retrieved.
     * @return {Variables$Variables$SFSUserVariable} Returns: The object representing the User Variable, or null if no User Variable with the passed name is associated with this user.
     */
    getVariable(varName: string): Variables$Variables$SFSUserVariable;

    /**
     * Retrieves all the User Variables of this user.
     * @return {Variables$Variables$SFSUserVariable[]} Returns: The list of SFSUserVariable objects associated with the user.
     */
    getVariables(): Variables$Variables$SFSUserVariable[];

    /**
     * Indicates whether this user logged in as an administrator or not. Administrator users have the privilegeId property set to UserPrivileges.ADMINISTRATOR.
     * @return {boolean} Returns: true if this user is an administrator.
     */
    isAdmin(): boolean;

    /**
     * Indicates whether this user logged in as a guest or not. Guest users have the privilegeId property set to UserPrivileges.GUEST.
     * @return {boolean} Returns: true if this user is a guest.
     */
    isGuest(): boolean;

    /**
     * Indicates whether this user joined the passed Room or not.
     * @param {Entities$SFSRoom} room The SFSRoom object representing the Room where to check the user presence.
     * @return {boolean} Returns: true if this user is inside the passed Room.
     */
    isJoinedInRoom(room: Entities$SFSRoom): boolean;

    /**
     * Indicates whether this user logged in as a moderator or not. Moderator users have the privilegeId property set to UserPrivileges.MODERATOR.
     * @return {boolean} Returns: true if this user is a moderator.
     */
    isModerator(): boolean;

    /**
     * Indicates whether this user is a player (playerId greater than 0) in the last joined Room or not. Non-Game Rooms always return false.
     * @return {boolean} Returns: true if this user is a player in the last joined Room.
     */
    isPlayer(): boolean;

    /**
     * Indicates whether this user is a player (playerId greater than 0) in the passed Room or not. Non-Game Rooms always return false.
     * @param {Entities$SFSRoom} room The SFSRoom object representing the Room where to check if this user is a player.
     * @return {boolean} Returns: true if this user is a player in the passed Room.
     */
    isPlayerInRoom(room: Entities$SFSRoom): boolean;

    /**
     * Indicates whether this user is a spectator (playerId lower than 0) in the last joined Room or not. Non-Game Rooms always return false.
     * @return {boolean} Returns: true if this user is a spectator in the last joined Room.
     */
    isSpectator(): boolean;

    /**
     * Indicates whether this user is a spectator (playerId lower than 0) in the passed Room or not. Non-Game Rooms always return false.
     * @param {Entities$SFSRoom} room The SFSRoom object representing the Room where to check if this user is a spectator.
     * @return {boolean} Returns: true if this user is a spectator in the passed Room.
     */
    isSpectatorInRoom(room: Entities$SFSRoom): boolean;

    /**
     * Indicates whether this user logged in as a standard user or not. Standard users have the privilegeId property set to UserPrivileges.STANDARD.
     * @return {boolean} Returns: true if this user is a standard user.
     */
    isStandardUser(): boolean;

    /**
     * Returns a string that contains the user id, name and a boolean indicating if the SFSUser object represents the current client.
     * @return {string} Returns: The string representation of the SFSUser object.
     */
    toString(): string;
  }

  declare export class Entities$UserPrivileges {
    /**
     * @type {number} The administrator user can send dedicated "administrator messages", kick and ban users.
     */
    static ADMINISTRATOR: number;

    /**
     * @type {number} The Guest user is usually the lowest level in the privilege profiles scale.
     */
    static GUEST: number;

    /**
     * @type {number} The moderator user can send dedicated "moderator messages", kick and ban users.
     */
    static MODERATOR: number;

    /**
     * @type {number} The standard user is usually registered in the application custom login system; uses a unique name and password to login.
     */
    static STANDARD: number;
  }

  declare export class Variables$MMOItemVariable
    mixins Variables$SFSUserVariable {
    /**
     * Creates a new MMOItemVariable instance.
     * @param {string} name The name of the MMOItem Variable.
     * @param {any} value The value of the MMOItem Variable; valid data types are: Boolean, Number, String, Object, Array. The value can also be null.
     * @param {number} type The type id of the MMOItem Variable among those available in the VariableType class. Usually it is not necessary to pass this parameter, as the type is auto-detected from the value.
     */
    constructor(name: string, value: any, type?: number): this;

    /**
     * Returns a string that contains the MMOItem Variable name, type and value.
     * @return {string} Returns: The string representation of the MMOItemVariable object.
     */
    toString(): string;
  }

  declare export class Variables$ReservedBuddyVariables {
    /**
     * @type {string} The Buddy Variable with this name stores the optional nickname of the user in a buddy list. This variable is persistent, which means that the nickname is preserved upon disconnection.
     */
    static BV_NICKNAME: string;

    /**
     * @type {string} The Buddy Variable with this name keeps track of the online/offline state of the user in a buddy list. This variable is persistent, which means that the online/offline state is preserved upon disconnection.
     */
    static BV_ONLINE: string;

    /**
     * @type {string} The Buddy Variable with this name stores the custom state of the user in a buddy list. This variable is persistent, which means that the custom state is preserved upon disconnection.
     */
    static BV_STATE: string;
  }

  declare export class Variables$ReservedRoomVariables {
    /**
     * @type {string} The Room Variable with this name keeps track of the state (started or stopped) of a game created with the CreateSFSGameRequest request.
     */
    static RV_GAME_STARTED: string;
  }

  declare export class Variables$SFSBuddyVariable
    mixins Variables$SFSUserVariable {
    /**
     * @type {string} The prefix to be added to a Buddy Variable name to make it persistent.
     */
    static OFFLINE_PREFIX: string;

    /**
     * Creates a new SFSBuddyVariable instance.
     * @param {string} name The name of the Buddy Variable.
     * @param {any} value The value of the Buddy Variable; valid data types are: Boolean, Number, String, Object, Array. The value can also be null.
     * @param {number} type The type id of the Buddy Variable among those available in the VariableType class. Usually it is not necessary to pass this parameter, as the type is auto-detected from the value.
     */
    constructor(name: string, value: any, type?: number): this;

    /**
     * Indicates whether the Buddy Variable is persistent or not.
     * @return {boolean} Returns: true if the Buddy Variable is persistent.
     */
    isOffline(): boolean;

    /**
     * Returns a string that contains the Buddy Variable name, type and value.
     * @return {string} Returns: The string representation of the SFSBuddyVariable object.
     */
    toString(): string;
  }

  declare export class Variables$SFSRoomVariable
    mixins Variables$SFSUserVariable {
    /**
     * @type {boolean} Indicates whether this Room Variable is persistent or not.
     */
    isPersistent: boolean;

    /**
     * @type {boolean} Indicates whether this Room Variable is private or not.
     */
    isPrivate: boolean;

    /**
     * Creates a new SFSRoomVariable instance.
     * @param {string} name The name of the Room Variable.
     * @param {any} value The value of the Room Variable; valid data types are: Boolean, Number, String, Object, Array. The value can also be null.
     * @param {number} type The type id of the Room Variable among those available in the VariableType class. Usually it is not necessary to pass this parameter, as the type is auto-detected from the value.
     */
    constructor(name: string, value: any, type?: number): this;

    /**
     * Returns a string that contains the Room Variable name, type, value and isPrivate flag.
     * @return {string} Returns: The string representation of the SFSRoomVariable object.
     */
    toString(): string;
  }

  declare export class Variables$SFSUserVariable {
    /**
     * @type {string} Indicates the name of this variable.
     */
    name: string;

    /**
     * @type {number} Returns the value of this variable.
     */
    value: number;

    /**
     * Creates a new SFSUserVariable instance.
     * @param {string} name The name of the User Variable.
     * @param {any} value The value of the User Variable; valid data types are: Boolean, Number, String, Object, Array. The value can also be null.
     * @param {number} type The type id of the User Variable among those available in the VariableType class. Usually it is not necessary to pass this parameter, as the type is auto-detected from the value.
     */
    constructor(name: string, value: any, type?: number): this;

    /**
     * Indicates the type of this variable. Possibly returned strings are: Null, Bool, Int, Double, String, Object, Array.
     * @param {number} typeId The type id of the User Variable among those available in the VariableType class.
     * @return {string} Returns: The variable type name.
     */
    getTypeName(typeId: number): string;

    /**
     * Indicates if the variable is null.
     * @return {boolean} Returns: true if the variable has a null value.
     */
    isNull(): boolean;

    /**
     * Returns a string that contains the User Variable name, type and value.
     * @return {string} Returns: The string representation of the SFSUserVariable object.
     */
    toString(): string;
  }

  declare export class Variables$VariableType {
    /**
     * @type {number} The type of the User/Room Variable is array.
     */
    static ARRAY: number;

    /**
     * @type {number} The type of the User/Room Variable is boolean.
     */
    static BOOL: number;

    /**
     * @type {number} The type of the User/Room Variable is number (specifically a double).
     */
    static DOUBLE: number;

    /**
     * @type {number} The type of the User/Room Variable is number (specifically an integer).
     */
    static INT: number;

    /**
     * @type {number} The User/Room Variable is null.
     */
    static NULL: number;

    /**
     * @type {number} The type of the User/Room Variable is object.
     */
    static OBJECT: number;

    /**
     * @type {number} The type of the User/Room Variable is string.
     */
    static STRING: number;
  }

  declare export class SFS2X$ErrorCodes {
    /**
     * Sets the text of the error message corresponding to the passed error code.
     * @param {number} code The code of the error message to be modified.
     * @param {string} message The new error message, including the placeholders for runtime informations.
     */
    static setErrorMessage(code: number, message: string): void;
  }

  declare export class SFS2X$Logger {
    /**
     * Sets the current logging level.
     * @param {number} level The minimum logging level.
     */
    setLevel(level: number): void;
  }

  declare export class SFS2X$LogLevel {
    /**
     * @type {number} A DEBUG message is a fine-grained information on the client activity.
     */
    static DEBUG: number;

    /**
     * @type {number} An ERROR message contains informations on a problem that occurred during the client activities. Client operations might be compromised when an error is raised.
     */
    static ERROR: number;

    /**
     * @type {number} An INFO message contains informations on the standard client activities.
     */
    static INFO: number;

    /**
     * @type {number} A WARN message is a warning caused by an unexpected behavior of the client. Client operations are not compromised when a warning is raised.
     */
    static WARN: number;
  }

  declare export class Managers$BuddyManager {
    /**
     * Creates a new BuddyManager instance.
     * @param {SFS2X$SmartFox} sfs An instance of the SmartFoxServer 2X client API main SmartFox class.
     */
    constructor(sfs: SFS2X$SmartFox): this;

    /**
     * Indicates whether a buddy exists in user's buddy list or not.
     * @param {string} name The name of the buddy whose presence in the buddy list is to be checked.
     * @return {boolean} Returns: true if the specified buddy exists in the buddy list.
     */
    containsBuddy(name: string): boolean;

    /**
     * Retrieves a SFSBuddy object from its id property.
     * @param {number} id The id of the buddy to be found.
     * @return {Entities$Entities$SFSBuddy} Returns: The SFSBuddy object representing the buddy, or null if no buddy with the passed id exists in the buddy list.
     */
    getBuddyById(id: number): Entities$Entities$SFSBuddy;

    /**
     * Retrieves a SFSBuddy object from its name property.
     * @param {string} name The name of the buddy to be found.
     * @return {Entities$Entities$SFSBuddy} Returns: The SFSBuddy object representing the buddy, or null if no buddy with the passed name exists in the buddy list.
     */
    getBuddyByName(name: string): Entities$Entities$SFSBuddy;

    /**
     * Retrieves a SFSBuddy object using its getNickName method.
     * @param {string} nickName The nickname of the buddy to be found.
     * @return {Entities$Entities$SFSBuddy} Returns: The SFSBuddy object representing the buddy, or null if no buddy with the passed nickname exists in the buddies list.
     */
    getBuddyByNickName(nickName: string): Entities$Entities$SFSBuddy;

    /**
     * Returns a list of SFSBuddy objects representing all the buddies in the user's buddy list.
     * @return {Entities$Entities$SFSBuddy[]} Returns: A list of SFSBuddy objects representing all the buddies.
     */
    getBuddyList(): Entities$Entities$SFSBuddy[];

    /**
     * Returns a list of strings representing the available custom buddy states.
     * @return {string[]} Returns: The list of available custom buddy states in the Buddy List system.
     */
    getBuddyStates(): string[];

    /**
     * Returns the current user's nickname (if set). If the nickname was never set before, null is returned.
     * @return {string} Returns: The user nickname in the Buddy List system.
     */
    getMyNickName(): string;

    /**
     * Returns the current user's online/offline state.
     * @return {boolean} Returns true if the user is online in the Buddy List system.
     */
    getMyOnlineState(): boolean;

    /**
     * Returns the current user's custom state (if set). Examples of custom states are "Available", "Busy", "Be right back", etc. If the custom state was never set before, null is returned.
     * @return {string} Returns: The user state in the Buddy List system.
     */
    getMyState(): string;

    /**
     * Retrieves a Buddy Variable set for the current user from its name.
     * @param {string} varName The name of the Buddy Variable to be retrieved.
     * @return {Entities$Variables.Variables$SFSBuddyVariable} Returns: The SFSBuddyVariable object representing the Buddy Variable, or null if no Buddy Variable with the passed name is associated to the current user.
     */
    getMyVariable(
      varName: string
    ): Entities$Variables.Variables$SFSBuddyVariable;

    /**
     * Returns all the Buddy Variables set for the current user.
     * @return {Entities$Variables.Variables$SFSBuddyVariable[]} Returns: A list of SFSBuddyVariable objects representing all the Buddy Variables set for the user.
     */
    getMyVariables(): Entities$Variables.Variables$SFSBuddyVariable[];

    /**
     * Returns a list of SFSBuddy objects representing all the offline buddies in the user's buddy list.
     * @return {Entities$Entities$SFSBuddy[]} Returns: A list of SFSBuddy objects representing the offline buddies.
     */
    getOfflineBuddies(): Entities$Entities$SFSBuddy[];

    /**
     * Returns a list of SFSBuddy objects representing all the online buddies in the user's buddy list.
     * @return {Entities$Entities$SFSBuddy[]} Returns: A list of SFSBuddy objects representing the online buddies.
     */
    getOnlineBuddies(): Entities$Entities$SFSBuddy[];

    /**
     * Indicates whether the client's Buddy List system is initialized or not. If not, an InitBuddyListRequest request should be sent to the server in order to retrieve the persistent Buddy List data.
     * @return {boolean} Returns: true if the Buddy List system is initialized in the client.
     */
    isInited(): boolean;
  }

  declare export class Managers$RoomManager {
    /**
     * Creates a new RoomManager instance.
     * @param {SFS2X$SmartFox} sfs An instance of the SmartFoxServer 2X client API main SmartFox class.
     */
    constructor(sfs: SFS2X$SmartFox): this;

    /**
     * Indicates whether the specified Group has been subscribed by the client or not.
     * @param {string} groupId The name of the Group.
     * @return {boolean} Returns: true if the client subscribed the passed Group.
     */
    containsGroup(groupId: string): boolean;

    /**
     * Indicates whether the Rooms list contains a Room belonging to the specified Group or not.
     * @param {any} idOrName The id or name of the SFSRoom object whose presence in the Rooms list is to be tested.
     * @return {boolean} Returns: true if the passed Room exists in the Rooms list.
     */
    containsRoom(idOrName: any): boolean;

    /**
     * Indicates whether the Rooms list contains a Room belonging to the specified Group or not.
     * @param {any} idOrName The id or name of the SFSRoom object whose presence in the Rooms list is to be tested.
     * @param {string} groupId The name of the Group to which the specified Room must belong.
     * @return {boolean} Returns: true if the Rooms list contains the passed Room and it belongs to the specified Group.
     */
    containsRoomInGroup(idOrName: any, groupId: string): boolean;

    /**
     * Returns a list of Rooms currently joined by the client.
     * @return {Entities$Entities$SFSRoom[]} Returns: The list of SFSRoom objects representing the Rooms currently joined by the client.
     */
    getJoinedRooms(): Entities$Entities$SFSRoom[];

    /**
     * Retrieves a SFSRoom object from its id.
     * @param {number} id The id of the Room.
     * @return {Entities$Entities$SFSRoom} Returns: The object representing the requested Room; null if no SFSRoom object with the passed id exists in the Rooms list.
     */
    getRoomById(id: number): Entities$Entities$SFSRoom;

    /**
     * Retrieves a SFSRoom object from its name.
     * @param {string} name The name of the Room.
     * @return {Entities$Entities$SFSRoom} Returns: The object representing the requested Room; null if no SFSRoom object with the passed name exists in the Rooms list.
     */
    getRoomByName(name: string): Entities$Entities$SFSRoom;

    /**
     * Returns the current number of Rooms in the Rooms list.
     * @return {number} Returns: A list of Group names.
     */
    getRoomCount(): number;

    /**
     * Returns the names of Groups currently subscribed by the client.
     * @return {string[]} Returns: A list of Group names.
     */
    getRoomGroups(): string[];

    /**
     * Returns a list of Rooms currently "known" by the client. The list contains all the Rooms that are currently joined and all the Rooms belonging to the Room Groups that have been subscribed.
     * @return {Entities$Entities$SFSRoom[]} Returns: The list of the available SFSRoom objects.
     */
    getRoomList(): Entities$Entities$SFSRoom[];

    /**
     * Retrieves the list of Rooms which are part of the specified Room Group.
     * @param {string} groupId The name of the Group.
     * @return {Entities$Entities$SFSRoom[]} Returns: The list of SFSRoom objects belonging to the passed Group.
     */
    getRoomListFromGroup(groupId: string): Entities$Entities$SFSRoom[];

    /**
     * Retrieves a list of Rooms joined by the specified user. The list contains only those Rooms "known" by the Room Manager; the user might have joined others the client is not aware of.
     * @param {Entities$Entities$SFSUser} user A SFSUser object representing the user to look for in the current Rooms list.
     * @return {Entities$Entities$SFSRoom[]} Returns: The list of Rooms joined by the passed user.
     */
    getUserRooms(user: Entities$Entities$SFSUser): Entities$Entities$SFSRoom[];
  }

  declare export class Managers$UserManager {
    /**
     * Creates a new UserManager instance.
     * @param {SFS2X$SmartFox} sfs An instance of the SmartFoxServer 2X client API main SmartFox class.
     */
    constructor(sfs: SFS2X$SmartFox): this;

    /**
     * Indicates whether a user exists in the local users list or not.
     * @param {Entities$Entities$SFSUser} user The SFSUser object representing the user whose presence in the users list is to be tested.
     * @return {boolean} Returns: true if the passed user exists in the users list.
     */
    containsUser(user: Entities$Entities$SFSUser): boolean;

    /**
     * Indicates whether a user exists in the local users list or not from the id.
     * @param {number} userId The id of the user whose presence in the users list is to be tested.
     * @return {boolean} Returns: true if the passed user exists in the users list.
     */
    containsUserId(userId: number): boolean;

    /**
     * Indicates whether a user exists in the local users list or not from the name.
     * @param {string} userName The name of the user whose presence in the users list is to be tested.
     * @return {boolean} Returns: true if the passed user exists in the users list.
     */
    containsUserName(userName: string): boolean;

    /**
     * Retrieves a SFSUser object from its id property.
     * @param {number} userId The id of the user to be found.
     * @return {Entities$Entities$SFSUser} Returns: The SFSUser object representing the user, or null if no user with the passed id exists in the local users list.
     */
    getUserById(userId: number): Entities$Entities$SFSUser;

    /**
     * Retrieves a SFSUser object from its name property.
     * @param {string} userName The name of the user to be found.
     * @return {Entities$Entities$SFSUser} Returns: The SFSUser object representing the user, or null if no user with the passed name exists in the local users list.
     */
    getUserByName(userName: string): Entities$Entities$SFSUser;

    /**
     * Returns the total number of users in the local users list.
     * @return {number} Returns: The number of users in the local users list.
     */
    getUserCount(): number;

    /**
     * Get the whole list of users inside the Rooms joined by the client.
     * @return {Entities$Entities$SFSUser[]} Returns: The list of SFSUser objects representing the users in the local users list.
     */
    getUserList(): Entities$Entities$SFSUser[];
  }

  declare export class Requests$BanMode {
    /**
     * @type {number} User is banned by IP address.
     */
    static BY_ADDRESS: number;

    /**
     * @type {number} User is banned by name.
     */
    static BY_NAME: number;
  }

  declare export class BuddyList$AddBuddyRequest {
    /**
     * Creates a new AddBuddyRequest instance.
     * @param {string} buddyName The name of the user to be added as a buddy.
     */
    constructor(buddyName: string): this;
  }

  declare export class BuddyList$BlockBuddyRequest {
    /**
     * Creates a new BlockBuddyRequest instance.
     * @param {string} buddyName The name of the buddy to be removed from the user's buddy list.
     * @param {boolean} blocked blocked
     */
    constructor(buddyName: string, blocked: boolean): this;
  }

  declare export class BuddyList$BuddyMessageRequest {
    /**
     * Creates a new BuddyMessageRequest instance.
     * @param {string} message The message to be sent to a buddy.
     * @param {Entities$Entities$SFSBuddy} targetBuddy The SFSBuddy object corresponding to the message recipient.
     * @param {Object} parms An object containing additional custom parameters (e.g. the message color, an emoticon id, etc).
     */
    constructor(
      message: string,
      targetBuddy: Entities$Entities$SFSBuddy,
      parms?: Object
    ): this;
  }

  declare export class BuddyList$GoOnlineRequest {
    /**
     * Creates a new GoOnlineRequest instance.
     * @param {boolean} online true to make the current user available (online) in the Buddy List system; false to make him not available (offline).
     */
    constructor(online: boolean): this;
  }

  declare export class BuddyList$InitBuddyListRequest {
    /**
     * Creates a new InitBuddyListRequest instance.
     */
    constructor(): this;
  }

  declare export class BuddyList$RemoveBuddyRequest {
    /**
     * Creates a new RemoveBuddyRequest instance.
     * @param {string} buddyName The name of the buddy to be removed from the user's buddy list.
     */
    constructor(buddyName: string): this;
  }

  declare export class BuddyList$SetBuddyVariablesRequest {
    /**
     * Creates a new SetBuddyVariablesRequest instance.
     * @param {Entities$Variables.Variables$SFSBuddyVariable[]} buddyVariables A list of SFSBuddyVariable objects representing the Buddy Variables to set.
     */
    constructor(
      buddyVariables: Entities$Variables.Variables$SFSBuddyVariable[]
    ): this;
  }

  declare export class Game$CreateSFSGameRequest {
    /**
     * Creates a new CreateSFSGameRequest instance.
     * @param {Game$SFSGameSettings} settings An object containing the Game Room configuration settings.
     */
    constructor(settings: Game$SFSGameSettings): this;
  }

  declare export class Game$InvitationReplyRequest {
    /**
     * Creates a new InvitationReplyRequest instance.
     * @param {SFS2X$IINVITATION} invitation An instance of the Invitation class containing the invitation details (inviter, custom parameters, etc).
     * @param {number} invitationReply The answer to be sent to the inviter, among those available as constants in the InvitationReply class.
     * @param {Object} params An object containing custom parameters to be returned to the inviter together with the reply (for example a message describing the reason of refusal).
     */
    constructor(
      invitation: SFS2X$IINVITATION,
      invitationReply: number,
      params?: Object
    ): this;
  }

  declare export class Game$InviteUsersRequest {
    /**
     * Creates a new InviteUsersRequest instance.
     * @param {Entities$Entities$SFSUser[]} invitedUsers A list of SFSUser objects, each representing a user to send the invitation to.
     * @param {number} secondsForAnswer The number of seconds available to each invited user to reply to the invitation (recommended range: 15 to 40 seconds).
     * @param {Object} params An object containing custom parameters containing additional invitation details.
     */
    constructor(
      invitedUsers: Entities$Entities$SFSUser[],
      secondsForAnswer: number,
      params?: Object
    ): this;
  }

  declare export class Game$QuickJoinGameRequest {
    /**
     * Creates a new QuickJoinGameRequest instance.
     * @param {Entities$Entities$SFSRoom[]} whereToSearch An array of SFSRoom objects or an array of Group names to which the matching expression should be applied. The maximum number of elements that this array can contain is 32.
     * @param {Entities$Entities$SFSRoom} roomToLeave A SFSRoom object representing the Room that the user should leave when joining the game.
     */
    constructor(
      whereToSearch: Entities$Entities$SFSRoom[],
      roomToLeave?: Entities$Entities$SFSRoom
    ): this;

    /**
     * Creates a new QuickJoinGameRequest instance.
     * @param {Entities$Match.Match$MatchExpression} matchExpression A matching expression that the system will use to search a Game Room where to join the current user.
     * @param {Entities$Entities$SFSRoom[]} whereToSearch An array of SFSRoom objects or an array of Group names to which the matching expression should be applied. The maximum number of elements that this array can contain is 32.
     * @param {Entities$Entities$SFSRoom} roomToLeave A SFSRoom object representing the Room that the user should leave when joining the game.
     */
    constructor(
      matchExpression: Entities$Match.Match$MatchExpression,
      whereToSearch: Entities$Entities$SFSRoom[],
      roomToLeave?: Entities$Entities$SFSRoom
    ): this;
  }

  declare export class Game$SFSGameSettings mixins Requests$RoomSettings {
    /**
     * @type {number} In private games, defines the number of seconds that users have to reply to the invitation to join a game. The suggested range is 10 to 40 seconds.
     */
    invitationExpiryTime: number;

    /**
     * @type {Object} In private games, defines a list of SFSUser objects representing players to be invited to join the game.
     */
    invitiationParams: Object;

    /**
     * @type {Entities$Entities$SFSUser[]} In private games, defines a list of SFSUser objects representing players to be invited to join the game..
     */
    invitiedPlayers: Entities$Entities$SFSUser[];

    /**
     * @type {boolean} Indicates whether the game is public or private.
     */
    isPublic: boolean;

    /**
     * @type {boolean} In private games, indicates whether the players must leave the previous Room when joining the game or not.
     */
    leaveLastJoinedRoom: boolean;

    /**
     * @type {number} Defines the minimum number of players required to start the game. If the notifyGameStarted property is set to true, when this number is reached, the game start is notified.
     */
    minPlayersToStartGame: number;

    /**
     * @type {boolean} Indicates if a game state change must be notified when the minimum number of players is reached.
     */
    notifyGameStarted: boolean;

    /**
     * @type {Entities$Match.Match$MatchExpression} Defines the game matching expression to be used to filters players.
     */
    playerMatchExpression: Entities$Match.Match$MatchExpression;

    /**
     * @type {string[]} In private games, defines a list of Groups names where to search players to invite.
     */
    serachableRooms: string[];

    /**
     * @type {Entities$Match.Match$MatchExpression} Defines the game matching expression to be used to filters spectators.
     */
    spectatorMatchExpression: Entities$Match.Match$MatchExpression;

    /**
     * Creates a new SFSGameSettings instance.
     * @param {string} name The name of the Game Room to be created.
     */
    constructor(name: string): this;
  }

  declare export class Requests$MessageRecipientMode {
    /**
     * @type {number} Returns the selected recipient mode.
     */
    mode: number;

    /**
     * @type {any} Returns the moderator/administrator message target, according to the selected recipient mode.
     */
    target: any;

    /**
     * @type {number} The moderator/administrator message will be sent to all the clients who subscribed a specific Room Group.
     */
    static TO_GROUP: number;

    /**
     * @type {number} The moderator/administrator message will be sent to all the users in a specific Room.
     */
    static TO_ROOM: number;

    /**
     * @type {number} The moderator/administrator message will be sent to a specific user.
     */
    static TO_USER: number;

    /**
     * @type {number} The moderator/administrator message will be sent to all the users in the Zone.
     */
    static TO_ZONE: number;

    /**
     * Creates a new MessageRecipientMode instance.
     * @param {number} mode One of the costants contained in this class, describing the recipient mode.
     * @param {any} target The moderator/administrator message recipient/s, according to the selected recipient mode.
     */
    constructor(mode: number, target: any): this;
  }

  declare export class MMO$MapLimits {
    /**
     * @type {Entities$Data.Data$Vec3D} Returns the higher coordinates limit of the virtual environment along the X,Y,Z axes.
     */
    higherLimit: Entities$Data.Data$Vec3D;

    /**
     * @type {Entities$Data.Data$Vec3D} Returns the lower coordinates limit of the virtual environment along the X,Y,Z axes.
     */
    lowerLimit: Entities$Data.Data$Vec3D;

    /**
     * Creates a new MapLimits instance.
     * @param {Entities$Data.Data$Vec3D} lowerLimit
     * @param {Entities$Data.Data$Vec3D} higherLimit
     */
    constructor(
      lowerLimit: Entities$Data.Data$Vec3D,
      higherLimit: Entities$Data.Data$Vec3D
    ): this;
  }

  declare export class MMO$MMORoomSettings {
    /**
     * @type {Entities$Data.Data$Vec3D} Defines the Area of Interest (AoI) for the MMORoom.
     */
    defaultAOI: Entities$Data.Data$Vec3D;

    /**
     * @type {MMO$MapLimits} Defines the limits of the virtual environment represented by the MMORoom.
     */
    mapLimits: MMO$MapLimits;

    /**
     * @type {number} Configures the speed at which the SFSEvent.PROXIMITY_LIST_UPDATE event is sent by the server.
     */
    proximityListUpdateMillis: number;

    /**
     * @type {boolean} Sets if the users entry points in the current user's Area of Interest should be transmitted in the SFSEvent.PROXIMITY_LIST_UPDATE event.
     */
    sendAOIEntryPoint: boolean;

    /**
     * @type {number} Defines the time limit before a user without a physical position set inside the MMORoom is kicked from the Room.
     */
    userMaxLimboSeconds: number;

    /**
     * Creates a new MMORoomSettings instance.
     * @param {string} name The name of the MMORoom to be created.
     */
    constructor(name: string): this;
  }

  declare export class MMO$SetUserPositionRequest {
    /**
     * Creates a new SetUserPositionRequest instance.
     * @param {Entities$Data.Data$Vec3D} pos The user position.
     * @param {Entities$Entities$MMORoom} targetRoom The MMORoom object corresponding to the Room where the position should be set; if null, the last Room joined by the user is used.
     */
    constructor(
      pos: Entities$Data.Data$Vec3D,
      targetRoom?: Entities$Entities$MMORoom
    ): this;
  }

  declare export class Requests$RoomEvents {
    /**
     * @type {boolean} Sets whether or not the userCountChange event should be dispatched whenever the users (or players+spectators) count changes in the Room.
     */
    allowUserCountChance: boolean;

    /**
     * @type {boolean} Sets whether the userEnterRoom event should be dispatched whenever a user joins the Room or not.
     */
    allowUserEnter: boolean;

    /**
     * @type {boolean} Sets whether the userExitRoom event should be dispatched whenever a user leaves the Room or not.
     */
    allowUserExit: boolean;

    /**
     * @type {boolean} Sets whether or not the userVariablesUpdate event should be dispatched whenever a user in the Room updates his User Variables
     */
    allowUserVariablesUpdate: boolean;

    /**
     * Creates a new RoomEvents instance.
     */
    constructor(): this;
  }

  declare export class Requests$RoomExtension {
    /**
     * @type {string} Returns the fully qualified name of the main class of the Extension.
     */
    className: string;

    /**
     * @type {string} Returns the name of the Extension to be attached to the Room.
     */
    id: string;

    /**
     * @type {string} Sets the name of an optional properties file that should be loaded on the server-side during the Extension initialization.
     */
    propertiesFile: string;

    /**
     * Creates a new RoomExtension instance.
     * @param {string} id The name of the Extension as deployed on the server; it's the name of the folder containing the Extension classes inside the main [sfs2x-install-folder]/SFS2X/extensions folder.
     * @param {string} className The fully qualified name of the main class of the Extension.
     */
    constructor(id: string, className: string): this;
  }

  declare export class Requests$RoomPermissions {
    /**
     * @type {boolean} Sets whether changing the Room name after its creation is allowed or not.
     */
    allowNameChange: boolean;

    /**
     * @type {boolean} Sets whether changing (or removing) the Room password after its creation is allowed or not.
     */
    allowPasswordStateChange: boolean;

    /**
     * @type {boolean} Sets whether users inside the Room are allowed to send public messages or not.
     */
    allowPublicMessages: boolean;

    /**
     * @type {boolean} Sets whether the Room capacity can be changed after its creation or not.
     */
    aloowResizing: boolean;

    /**
     * Creates a new RoomPermissions instance.
     */
    constructor(): this;
  }

  declare export class Requests$RoomSettings {
    /**
     * @type {Requests$RoomEvents} Sets the flags indicating which events related to the Room are dispatched by the SmartFox client.
     */
    events: Requests$RoomEvents;

    /**
     * @type {Requests$RoomExtension} Sets the Extension that must be attached to the Room on the server-side, and its settings.
     */
    extension: Requests$RoomExtension;

    /**
     * @type {string} Sets the id of the Group to which the Room should belong.
     */
    groupId: string;

    /**
     * @type {boolean} Sets whether the Room is a Game Room or not.
     */
    isGame: boolean;

    /**
     * @type {number} Sets the maximum number of spectators allowed in the Room (only for Game Rooms).
     */
    maxSpectators: number;

    /**
     * @type {number} Sets the maximum number of users allowed in the Room.
     */
    maxUsers: number;

    /**
     * @type {number} Sets the maximum number of Room Variables allowed for the Room.
     */
    maxVariables: number;

    /**
     * @type {string} Defines the name of the Room.
     */
    name: string;

    /**
     * @type {string} Sets the password of the Room.
     */
    password: string;

    /**
     * @type {Requests$RoomPermissions} Sets the flags indicating which operations are permitted on the Room.
     */
    permissions: Requests$RoomPermissions;

    /**
     * @type {Entities$Variables.Variables$ReservedRoomVariables[]} Sets a list of SFSRooomVariable objects to be attached to the Room.
     */
    variables: Entities$Variables.Variables$ReservedRoomVariables[];

    /**
     * Creates a new RoomSettings instance.
     * @param {string} name The name of the Room to be created.
     */
    constructor(name: string): this;
  }

  declare export class System$AdminMessageRequest {
    /**
     * Creates a new AdminMessageRequest instance.
     * @param {string} message The message of the administrator to be sent to the target user/s defined by the recipientMode parameter.
     * @param {Requests$MessageRecipientMode} recipientMode An instance of MessageRecipientMode containing the target to which the message should be delivered.
     * @param {Object} params An object containing custom parameters to be sent to the recipient user/s.
     */
    constructor(
      message: string,
      recipientMode: Requests$MessageRecipientMode,
      params?: Object
    ): this;
  }

  declare export class System$BanUserRequest {
    /**
     * Creates a new BanUserRequest instance.
     * @param {number} userId The id of the user to be banned.
     * @param {string} message A custom message to be delivered to the user before banning him; if null, the default message configured in the SmartFoxServer 2X Administration Tool is used.
     * @param {Requests$BanMode} banMode One of the ban modes defined in the BanMode class.
     * @param {number} delaySeconds The number of seconds after which the user is banned after receiving the ban message.
     * @param {number} durationHours The duration of the banishment, expressed in hours.
     */
    constructor(
      userId: number,
      message?: string,
      banMode?: Requests$BanMode,
      delaySeconds?: number,
      durationHours?: number
    ): this;
  }

  declare export class System$ChangeRoomCapacityRequest {
    /**
     * Creates a new ChangeRoomCapacityRequest instance.
     * @param {Entities$Entities$SFSRoom} room The Room object corresponding to the Room whose capacity should be changed.
     * @param {number} newMaxUsers The new maximum number of users/players who can join the Room; the -1 value can be passed not to change the Room.maxUsers property.
     * @param {number} newMaxSpect The new maximum number of spectators who can join the Room (for Game Rooms only); the -1 value can be passed not to change the Room.maxSpectators property.
     */
    constructor(
      room: Entities$Entities$SFSRoom,
      newMaxUsers: number,
      newMaxSpect: number
    ): this;
  }

  declare export class System$ChangeRoomNameRequest {
    /**
     * Creates a new ChangeRoomNameRequest instance.
     * @param {Entities$Entities$SFSRoom} room The SFSRoom object corresponding to the Room whose name should be changed.
     * @param {string} newName The new name to be assigned to the Room.
     */
    constructor(room: Entities$Entities$SFSRoom, newName: string): this;
  }

  declare export class System$ChangeRoomPasswordStateRequest {
    /**
     * Creates a new ChangeRoomPasswordStateRequest instance.
     * @param {Entities$Entities$SFSRoom} room The SFSRoom object corresponding to the Room whose password should be changed.
     * @param {string} newPass The new password to be assigned to the Room; an empty string or the null value can be passed to remove the Room's password.
     */
    constructor(room: Entities$Entities$SFSRoom, newPass: string): this;
  }

  declare export class System$CreateRoomRequest {
    /**
     * Creates a new CreateRoomRequest instance.
     * @param {Requests$RoomSettings} settings An object containing the Room configuration settings.
     * @param {boolean} {autoJoin=false}    If true, the Room is joined as soon as it is created.
     * @param {Entities$Entities$SFSRoom} {roomToLeave=null} A SFSRoom object representing the Room that should be left if the new Room is auto-joined.
     */
    constructor(
      settings: Requests$RoomSettings,
      autoJoin?: boolean,
      roomToLeave?: Entities$Entities$SFSRoom
    ): this;
  }

  declare export class System$ExtensionRequest {
    /**
     * Creates a new ExtensionRequest instance.
     * @param {string} extCmd The name of the command which identifies an action that should be executed by the server-side Extension.
     * @param {Object} {params=null} An object containing custom data to be sent to the Extension. Can be null if no data needs to be sent.
     * @param {Entities$Entities$SFSRoom} {room=null}   If null, the specified command is sent to the current Zone server-side Extension; if not null, the command is sent to the server-side Extension attached to the passed Room.
     */
    constructor(
      extCmd: string,
      params?: Object,
      room?: Entities$Entities$SFSRoom
    ): this;
  }

  declare export class System$FindRoomsRequest {
    /**
     * Creates a new FindRoomsRequest instance.
     * @param {Entities$Match.Match$MatchExpression} expr A matching expression that the system will use to retrieve the Rooms.
     * @param {string} {groupId=null} The name of the Group where to search for matching Rooms; if null, the search is performed in the whole Zone.
     * @param {number} limit The maximum size of the list of Rooms that will be returned by the roomFindResult event. If 0, all the found Rooms are returned.
     */
    constructor(
      expr: Entities$Match.Match$MatchExpression,
      groupId?: string,
      limit?: number
    ): this;
  }

  declare export class System$FindUsersRequest {
    /**
     * Creates a new FindUsersRequest instance.
     * @param {Entities$Match.Match$MatchExpression} expr A matching expression that the system will use to retrieve the users.
     * @param {any} target The name of a Group or a single SFSRoom object where to search for matching users; if null, the search is performed in the whole Zone.
     * @param {number} limit The maximum size of the list of users that will be returned by the userFindResult event. If 0, all the found users are returned.
     */
    constructor(
      expr: Entities$Match.Match$MatchExpression,
      target?: any,
      limit?: number
    ): this;
  }

  declare export class System$JoinRoomRequest {
    /**
     * Creates a new JoinRoomRequest instance.
     * @param {any} room The id or the name of the Room to be joined.
     * @param {string} password The password of the Room, in case it is password protected.
     * @param {number} roomIdToLeave The id of a previously joined Room that the user should leave when joining the new Room. By default, the last joined Room is left; if a negative number is passed, no previous Room is left.
     * @param {boolean} asSpect true to join the Room as a spectator (in Game Rooms only).
     */
    constructor(
      room: any,
      password?: string,
      roomIdToLeave?: number,
      asSpect?: boolean
    ): this;
  }

  declare export class System$KickUserRequest {
    /**
     * Creates a new KickUserRequest instance.
     * @param {number} userId The id of the user to be kicked.
     * @param {string} message A custom message to be delivered to the user before kicking him; if null, the default message configured in the SmartFoxServer 2X Administration Tool is used.
     * @param {number} delaySeconds The number of seconds after which the user is kicked after receiving the kick message.
     */
    constructor(userId: number, message?: string, delaySeconds?: number): this;
  }

  declare export class System$LeaveRoomRequest {
    /**
     * Creates a new LeaveRoomRequest instance.
     * @param {Entities$Entities$SFSRoom} room The SFSRoom object corresponding to the Room that the current user must leave. If null, the last Room joined by the user is left.
     */
    constructor(room?: Entities$Entities$SFSRoom): this;
  }

  declare export class System$LoginRequest {
    /**
     * Creates a new LoginRequest instance.
     * @param {string} userName The name to be assigned to the user. If not passed and if the Zone allows guest users, the name is generated automatically by the server.
     * @param {string} password The user password to access the system. SmartFoxServer doesn't offer a default authentication system, so the password must be validated implementing a custom login system in the Zone's server-side Extension.
     * @param {Object} params An object containing custom parameters to be passed to the Zone Extension (requires a custom login system to be in place).
     * @param {string} zoneName The name (case-sensitive) of the server Zone to login to; if a Zone name is not specified, the client will use the setting passed to the SmartFox class constructor.
     */
    constructor(
      userName: string,
      password?: string,
      params?: Object,
      zoneName?: string
    ): this;
  }

  declare export class System$LogoutRequest {
    /**
     * Creates a new LogoutRequest instance.
     */
    constructor(): this;
  }

  declare export class System$ModeratorMessageRequest {
    /**
     * Creates a new ModeratorMessageRequest instance.
     * @param {string} message The message of the moderator to be sent to the target user/s defined by the recipientMode parameter.
     * @param {Requests$MessageRecipientMode} recipientMode An instance of MessageRecipientMode containing the target to which the message should be delivered.
     * @param {Object} params An object containing custom parameters to be sent to the recipient user/s.
     */
    constructor(
      message: string,
      recipientMode: Requests$MessageRecipientMode,
      params?: Object
    ): this;
  }

  declare export class System$ObjectMessageRequest {
    /**
     * Creates a new ObjectMessageRequest instance.
     * @param {Object} obj An object containing custom parameters to be sent to the message recipients.
     * @param {Entities$Entities$SFSRoom} targetRoom The SFSRoom object corresponding to the Room where the message should be dispatched; if null, the last Room joined by the user is used.
     * @param {Entities$Entities$SFSUser[]} recipients A list of SFSUser objects corresponding to the message recipients; if null, the message is sent to all users in the target Room (except the sender himself).
     */
    constructor(
      obj: Object,
      targetRoom?: Entities$Entities$SFSRoom,
      recipients?: Entities$Entities$SFSUser[]
    ): this;
  }

  declare export class System$PlayerToSpectatorRequest {
    /**
     * Creates a new SpectatorToPlayerRequest instance.
     * @param {Entities$Entities$SFSRoom} targetRoom The SFSRoom object corresponding to the Room in which the spectator should be turned to player. If null, the last Room joined by the user is used.
     */
    constructor(targetRoom?: Entities$Entities$SFSRoom): this;
  }

  declare export class System$PrivateMessageRequest {
    /**
     * Creates a new PrivateMessageRequest instance.
     * @param {string} message The message to be sent to to the recipient user.
     * @param {number} recipientId The id of the user to which the message is to be sent.
     * @param {Object} params An object containing additional custom parameters to be sent to the message recipient (for example the color of the text, etc).
     */
    constructor(message: string, recipientId: number, params?: Object): this;
  }

  declare export class System$PublicMessageRequest {
    /**
     * Creates a new PublicMessageRequest instance.
     * @param {string} message The message to be sent to all the users in the target Room.
     * @param {Object} params An object containing additional custom parameters to be sent to the message recipients (for example the color of the text, etc).
     * @param {Entities$Entities$SFSRoom} targetRoom The SFSRoom object corresponding to the Room where the message should be dispatched; if null, the last Room joined by the user is used.
     */
    constructor(
      message: string,
      params?: Object,
      targetRoom?: Entities$Entities$SFSRoom
    ): this;
  }

  declare export class System$SetRoomVariablesRequest {
    /**
     * Creates a new SetRoomVariablesRequest instance.
     * @param {Entities$Variables.Variables$SFSRoomVariable[]} roomVariables A list of SFSRoomVariable objects representing the Room Variables to be set.
     * @param {Entities$Entities$SFSRoom} room A SFSRoom object representing the Room where to set the Room Variables; if null, the last Room joined by the current user is used.
     */
    constructor(
      roomVariables: Entities$Variables.Variables$SFSRoomVariable[],
      room: Entities$Entities$SFSRoom
    ): this;
  }

  declare export class System$SetUserVariablesRequest {
    /**
     * Creates a new SetUserVariablesRequest instance.
     * @param {Entities$Variables.Variables$SFSUserVariable} userVariables A list of SFSUserVariable objects representing the User Variables to be set.
     */
    constructor(
      userVariables: Entities$Variables.Variables$SFSUserVariable
    ): this;
  }

  declare export class System$SpectatorToPlayerRequest {
    /**
     * Creates a new SpectatorToPlayerRequest instance.
     * @param {Entities$Entities$SFSRoom} targetRoom The SFSRoom object corresponding to the Room in which the spectator should be turned to player. If null, the last Room joined by the user is used.
     */
    constructor(targetRoom: Entities$Entities$SFSRoom): this;
  }

  declare export class System$SubscribeRoomGroupRequest {
    /**
     * Creates a new SubscribeRoomGroupRequest instance.
     * @param {string} groupId The name of the Room Group to subscribe.
     */
    constructor(groupId: string): this;
  }

  declare export class System$UnsubscribeRoomGroupRequest {
    /**
     * Creates a new UnsubscribeRoomGroupRequest instance.
     * @param {string} groupId The name of the Room Group to unsubscribe.
     */
    constructor(groupId: string): this;
  }

  declare export class SFS2X$SFSBuddyEvent {
    /**
     * @type {string} The buddyAdd event type, dispatched when a buddy is added successfully to the current user's buddy list.
     */
    static BUDDY_ADD: string;

    /**
     * @type {string} The buddyBlock event type, dispatched when a buddy is blocked or unblocked successfully by the current user.
     */
    static BUDDY_BLOCK: string;

    /**
     * @type {string} The buddyError event type, dispatched if an error occurs while executing a request related to the Buddy List system.
     */
    static BUDDY_ERROR: string;

    /**
     * @type {string} The buddyListInit event type, dispatched if the Buddy List system is successfully initialized.
     */
    static BUDDY_LIST_INIT: string;

    /**
     * @type {string} The buddyMessage event type, dispatched when a message from a buddy is received by the current user.
     */
    static BUDDY_MESSAGE: string;

    /**
     * @type {string} The buddyOnlineStateChange event type, dispatched when a buddy in the current user's buddy list changes his online state in the Buddy List system.
     */
    static BUDDY_ONLINE_STATE_CHANGE: string;

    /**
     * @type {string} The buddyRemove event type, dispatched when a buddy is removed successfully from the current user's buddy list.
     */
    static BUDDY_REMOVE: string;

    /**
     * @type {string} The buddyVariablesUpdate event type, dispatched when a buddy in the current user's buddies list updates one or more Buddy Variables.
     */
    static BUDDY_VARIABLES_UPDATE: string;
  }

  declare interface SFS2X$IBUDDY_ADD {
    buddy: Entities$Entities$SFSBuddy;
  }

  declare interface SFS2X$IBUDDY_BLOCK {
    buddy: Entities$Entities$SFSBuddy;
  }

  declare interface SFS2X$IBUDDY_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$IBUDDY_LIST_INIT {
    buddyList: Entities$Entities$SFSBuddy[];
    myVariables: Entities$Variables.Variables$SFSBuddyVariable[];
  }

  declare interface SFS2X$IBUDDY_MESSAGE {
    buddy: Entities$Entities$SFSBuddy;
    isItMe: boolean;
    message: string;
    data: Object;
  }

  declare interface SFS2X$IBUDDY_ONLINE_STATE_CHANGE {
    buddy: Entities$Entities$SFSBuddy;
    isItMe: boolean;
  }

  declare interface SFS2X$IBUDDY_REMOVE {
    buddy: Entities$Entities$SFSBuddy;
  }

  declare interface SFS2X$IBUDDY_VARIABLES_UPDATE {
    buddy: Entities$Entities$SFSBuddy;
    isItMe: boolean;
    changedVars: string[];
  }

  declare export class SFS2X$SFSEvent {
    /**
     * @type {string} The adminMessage event type, dispatched when the current user receives a message from an administrator user.
     */
    static ADMIN_MESSAGE: string;

    /**
     * @type {string} The connection event type, dispatched when a connection between the client and a SmartFoxServer 2X instance is attempted.
     */
    static CONNECTION: string;

    /**
     * @type {string} The connectionLost event type, dispatched when the connection between the client and the SmartFoxServer 2X instance is interrupted.
     */
    static CONNECTION_LOST: string;

    /**
     * @type {string} The extensionResponse event type, dispatched when data coming from a server-side Extension is received by the current user.
     */
    static EXTENSION_RESPONSE: string;

    /**
     * @type {string} The invitation event type, dispatched when the current user receives an invitation from another user.
     */
    static INVITATION: string;

    /**
     * @type {string} The invitationReply event type, dispatched when the current user receives a reply to an invitation he sent previously.
     */
    static INVITATION_REPLY: string;

    /**
     * @type {string} The invitationReplyError event type, dispatched when an error occurs while the current user is sending a reply to an invitation he received.
     */
    static INVITATION_REPLY_ERROR: string;

    /**
     * @type {string} The login event type, dispatched when the current user performs a successful login in a server Zone.
     */
    static LOGIN: string;

    /**
     * @type {string} The loginError event type, dispatched if an error occurs while the user login is being performed.
     */
    static LOGIN_ERROR: string;

    /**
     * @type {string} The logout event type, dispatched when the current user performs logs out of the server Zone.
     */
    static LOGOUT: string;

    /**
     * @type {string} The mmoItemVariablesUpdate event type, dispatched when an MMOItem Variable is updated in an MMORoom.
     */
    static MMOITEM_VARIABLES_UPDATE: string;

    /**
     * @type {string} The moderatorMessage event type, dispatched when the current user receives a message from a moderator user.
     */
    static MODERATOR_MESSAGE: string;

    /**
     * @type {string} The objectMessage event type, dispatched when an object containing custom data is received by the current user.
     */
    static OBJECT_MESSAGE: string;

    /**
     * @type {string} The pingPong event type, dispatched when a new lag value measurement is available.
     */
    static PING_PONG: string;

    /**
     * @type {string} The playerToSpectator event type, dispatched when a player is turned to a spectator inside a Game Room.
     */
    static PLAYER_TO_SPECTATOR: string;

    /**
     * @type {string} The playerToSpectatorError event type, dispatched when an error occurs while the current user is being turned from player to spectator in a Game Room.
     */
    static PLAYER_TO_SPECTATOR_ERROR: string;

    /**
     * @type {string} The privateMessage event type, dispatched when a private message is received by the current user.
     */
    static PRIVATE_MESSAGE: string;

    /**
     * @type {string} The proximityListUpdate event type, dispatched when one more users or one or more MMOItem objects enter/leave the current user's Area of Interest in MMORooms.
     */
    static PROXIMITY_LIST_UPDATE: string;

    /**
     * @type {string} The publicMessage event type, dispatched when a public message is received by the current user.
     */
    static PUBLIC_MESSAGE: string;

    /**
     * @type {string} The roomAdd event type, dispatched when a new Room is created inside the Zone under any of the Room Groups that the client subscribed.
     */
    static ROOM_ADD: string;

    /**
     * @type {string} The roomCapacityChange event type, dispatched when the capacity of a Room is changed.
     */
    static ROOM_CAPACITY_CHANGE: string;

    /**
     * @type {string} The roomCapacityChangeError event type, dispatched when an error occurs while attempting to change the capacity of a Room.
     */
    static ROOM_CAPACITY_CHANGE_ERROR: string;

    /**
     * @type {string} The roomCreationError event type, dispatched if an error occurs while creating a new Room.
     */
    static ROOM_CREATION_ERROR: string;

    /**
     * @type {string} The roomFindResult event type, dispatched when a Rooms search is completed.
     */
    static ROOM_FIND_RESULT: string;

    /**
     * @type {string} The roomGroupSubscribe event type, dispatched when a Group is subscribed by the current user.
     */
    static ROOM_GROUP_SUBSCRIBE: string;

    /**
     * @type {string} The roomGroupSubscribeError event type, dispatched when an error occurs while a Room Group is being subscribed.
     */
    static ROOM_GROUP_SUBSCRIBE_ERROR: string;

    /**
     * @type {string} The roomGroupUnsubscribe event type, dispatched when a Group is unsubscribed by the current user.
     */
    static ROOM_GROUP_UNSUBSCRIBE: string;

    /**
     * @type {string} The roomGroupUnsubscribeError event type, dispatched when an error occurs while a Room Group is being unsubscribed.
     */
    static ROOM_GROUP_UNSUBSCRIBE_ERROR: string;

    /**
     * @type {string} The roomJoin event type, dispatched when a Room is joined by the current user.
     */
    static ROOM_JOIN: string;

    /**
     * @type {string} The roomJoinError event type, dispatched when an error occurs while the current user is trying to join a Room.
     */
    static ROOM_JOIN_ERROR: string;

    /**
     * @type {string} The roomNameChange event type, dispatched when the name of a Room is changed.
     */
    static ROOM_NAME_CHANGE: string;

    /**
     * @type {string} The roomNameChangeError event type, dispatched when an error occurs while attempting to change the name of a Room.
     */
    static ROOM_NAME_CHANGE_ERROR: string;

    /**
     * @type {string} The roomPasswordStateChange event type, dispatched when the password of a Room is set, changed or removed.
     */
    static ROOM_PASSWORD_STATE_CHANGE: string;

    /**
     * @type {string} The roomPasswordStateChangeError event type, dispatched when an error occurs while attempting to set, change or remove the password of a Room.
     */
    static ROOM_PASSWORD_STATE_CHANGE_ERROR: string;

    /**
     * @type {string} The roomRemove event type, dispatched when a Room belonging to one of the Groups subscribed by the client is removed from the Zone.
     */
    static ROOM_REMOVE: string;

    /**
     * @type {string} The roomVariablesUpdate event type, dispatched when a Room Variable is updated.
     */
    static ROOM_VARIABLES_UPDATE: string;

    /**
     * @type {string} The socketError event type, dispatched when a low level socket error is detected, for example bad/inconsistent data.
     */
    static SOCKET_ERROR: string;

    /**
     * @type {string} The spectatorToPlayer event type, dispatched when a spectator is turned to a player inside a Game Room.
     */
    static SPECTATOR_TO_PLAYER: string;

    /**
     * @type {string} The spectatorToPlayerError event type, dispatched when an error occurs while the current user is being turned from spectator to player in a Game Room.
     */
    static SPECTATOR_TO_PLAYER_ERROR: string;

    /**
     * @type {string} The userCountChange event type, dispatched when the number of users/players or spectators inside a Room changes.
     */
    static USER_COUNT_CHANGE: string;

    /**
     * @type {string} The userEnterRoom event type, dispatched when one of the Rooms joined by the current user is entered by another user.
     */
    static USER_ENTER_ROOM: string;

    /**
     * @type {string} The userExitRoom event type, dispatched when one of the Rooms joined by the current user is left by another user, or by the current user himself.
     */
    static USER_EXIT_ROOM: string;

    /**
     * @type {string} The userFindResult event type, dispatched when a users search is completed.
     */
    static USER_FIND_RESULT: string;

    /**
     * @type {string} The userVariablesUpdate event type, dispatched when a User Variable is updated.
     */
    static USER_VARIABLES_UPDATE: string;
  }

  declare interface SFS2X$IADMIN_MESSAGE {
    sender: Entities$Entities$SFSUser;
    message: string;
    data: Object;
  }

  declare interface SFS2X$ICONNECTION {
    success: boolean;
  }

  declare interface SFS2X$ICONNECTION_LOST {
    reason: string;
  }

  declare interface SFS2X$IEXTENSION_RESPONSE {
    cmd: string;
    params: Object;
    sourceRoom: number;
  }

  declare interface SFS2X$IINVITATION {
    invitation: Entities$Invitation.Invitation$SFSInvitation;
  }

  declare interface SFS2X$IINVITATION_REPLY {
    invitee: Entities$Entities$SFSUser;
    reply: number;
    data: Object;
  }

  declare interface SFS2X$IINVITATION_REPLY_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$ILOGIN {
    user: Entities$Entities$SFSUser;
    data: Object;
  }

  declare interface SFS2X$ILOGIN_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$ILOGOUT {}

  declare interface SFS2X$IMMOITEM_VARIABLES_UPDATE {
    room: Entities$Entities$MMORoom;
    mmoItem: Entities$Entities$MMOItem;
    changedVars: string[];
  }

  declare interface SFS2X$IMODERATOR_MESSAGE {
    sender: Entities$Entities$SFSUser;
    message: string;
    data: Object;
  }

  declare interface SFS2X$IOBJECT_MESSAGE {
    sender: Entities$Entities$SFSUser;
    message: string;
  }

  declare interface SFS2X$IPING_PONG {
    lagValue: number;
  }

  declare interface SFS2X$IPLAYER_TO_SPECTATOR {
    room: Entities$Entities$SFSRoom;
    user: Entities$Entities$SFSUser;
  }

  declare interface SFS2X$IPLAYER_TO_SPECTATOR_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$IPRIVATE_MESSAGE {
    sender: Entities$Entities$SFSUser;
    message: string;
    data: Object;
  }

  declare interface SFS2X$IPROXIMITY_LIST_UPDATE {
    addedUsers: Entities$Entities$SFSUser[];
    removedUsers: Entities$Entities$SFSUser[];
    addedItems: Entities$Entities$MMOItem[];
    removedItems: Entities$Entities$MMOItem[];
  }

  declare interface SFS2X$IPUBLIC_MESSAGE {
    room: Entities$Entities$SFSRoom;
    sender: Entities$Entities$SFSUser;
    message: string;
    data: Object;
  }

  declare interface SFS2X$IROOM_ADD {
    room: Entities$Entities$SFSRoom;
  }

  declare interface SFS2X$IROOM_CAPACITY_CHANGE {
    room: Entities$Entities$SFSRoom;
  }

  declare interface SFS2X$IROOM_CAPACITY_CHANGE_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$IROOM_CREATION_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$IROOM_FIND_RESULT {
    rooms: Entities$Entities$SFSRoom[];
  }

  declare interface SFS2X$IROOM_GROUP_SUBSCRIBE {
    groupId: string;
    newRooms: Entities$Entities$SFSRoom[];
  }

  declare interface SFS2X$IROOM_GROUP_SUBSCRIBE_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$IROOM_GROUP_UNSUBSCRIBE {
    groupId: string;
  }

  declare interface SFS2X$IROOM_GROUP_UNSUBSCRIBE_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$IROOM_JOIN {
    room: Entities$Entities$SFSRoom;
  }

  declare interface SFS2X$IROOM_JOIN_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$IROOM_NAME_CHANGE {
    room: Entities$Entities$SFSRoom;
    oldName: string;
  }

  declare interface SFS2X$IROOM_NAME_CHANGE_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$IROOM_PASSWORD_STATE_CHANGE {
    room: Entities$Entities$SFSRoom;
  }

  declare interface SFS2X$IROOM_PASSWORD_STATE_CHANGE_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$IROOM_REMOVE {
    room: Entities$Entities$SFSRoom;
  }

  declare interface SFS2X$IROOM_VARIABLES_UPDATE {
    room: Entities$Entities$SFSRoom;
    changedVars: string[];
  }

  declare interface SFS2X$ISOCKET_ERROR {
    errorMessage: string;
  }

  declare interface SFS2X$ISPECTATOR_TO_PLAYER {
    room: Entities$Entities$SFSRoom;
    user: Entities$Entities$SFSUser;
    playerId: number;
  }

  declare interface SFS2X$ISPECTATOR_TO_PLAYER_ERROR {
    errorMessage: string;
    errorCode: number;
  }

  declare interface SFS2X$IUSER_COUNT_CHANGE {
    room: Entities$Entities$SFSRoom;
    uCount: number;
    sCount: number;
  }

  declare interface SFS2X$IUSER_ENTER_ROOM {
    user: Entities$Entities$SFSUser;
    room: Entities$Entities$SFSRoom;
  }

  declare interface SFS2X$IUSER_EXIT_ROOM {
    user: Entities$Entities$SFSUser;
    room: Entities$Entities$SFSRoom;
  }

  declare interface SFS2X$IUSER_FIND_RESULT {
    users: Entities$Entities$SFSUser[];
  }

  declare interface SFS2X$IUSER_VARIABLES_UPDATE {
    user: Entities$Entities$SFSUser;
    changedVars: string[];
  }

  declare export class SFS2X$SmartFox {
    /**
     * @type {Managers$Managers$BuddyManager} Returns a reference to the Buddy Manager.
     */
    buddyManager: Managers$Managers$BuddyManager;

    /**
     * @type {SFS2X$IconfigObj} Returns the client configuration object passed during the SmartFox instance creation.
     */
    config: SFS2X$IconfigObj;

    /**
     * @type {boolean} Indicates whether the client-server messages console debug is enabled or not.
     */
    debug: boolean;

    /**
     * @type {Entities$Entities$SFSRoom} Returns the object representing the last Room joined by the client, if any.
     */
    lastJoinedRoom: Entities$Entities$SFSRoom;

    /**
     * @type {SFS2X$Logger} Returns a reference to the internal Logger instance used by SmartFoxServer 2X.
     */
    logger: SFS2X$Logger;

    /**
     * @type {Entities$Entities$SFSUser} Returns the SFSUser object representing the client itself when connected to a SmartFoxServer 2X instance.
     */
    mySelf: Entities$Entities$SFSUser;

    /**
     * @type {Managers$Managers$RoomManager} Returns a reference to the Room Manager.
     */
    roomManager: Managers$Managers$RoomManager;

    /**
     * @type {string} Returns the unique session token of the client.
     */
    sessionToken: string;

    /**
     * @type {Managers$Managers$UserManager} Returns a reference to the User Manager.
     */
    userManager: Managers$Managers$UserManager;

    /**
     * @type {string} Returns the current version of the SmartFoxServer 2X JavaScript API.
     */
    version: string;

    /**
     * Creates a new SmartFox instance.
     * @param {SFS2X$IconfigObj} configObj The SmartFox instance can be configured through a configuration object with the following properties (all optional).
     */
    constructor(configObj?: SFS2X$IconfigObj): this;

    /**
     * Registers an event listener function that will receive notification of an event.
     * @param {string} evtType The type of event to listen to, among those available in the SFSevent and SFSBuddyEvent classes.
     * @param {Function} listener The listener function that processes the event. This function should accept an object as its only parameter, which in turn contains the event parameters.
     * @param {number} scope The object that acts as a context for the event listener: it is the object that acts as a "parent scope" for the callback function, thus providing context (i.e. access to variables and other mehtods) to the function itself.
     */
    addEventListener(evtType: string, listener: Function, scope: number): void;

    /**
     * Establishes a connection between the client and a SmartFoxServer 2X instance.
     * @param {string} host The address of the server to connect to.
     * @param {number} port The TCP port to connect to.
     * @param {boolean} useSSL Use an encrypted SSL connection.
     */
    connect(host?: string, port?: number, useSSL?: boolean): void;

    /**
     * Closes the connection between the client and the SmartFoxServer 2X instance.
     */
    disconnect(): void;

    /**
     * Enables the automatic realtime monitoring of the lag between the client and the server (round robin).
     * @param {boolean} enabled The lag monitoring status: true to start the monitoring, false to stop it.
     * @param {number} interval The amount of seconds to wait between each query (recommended 3-4s).
     * @param {number} queueSize The amount of values stored temporarily and used to calculate the average lag.
     */
    enableLagMonitor(
      enabled: boolean,
      interval?: number,
      queueSize?: number
    ): void;

    /**
     * Returns a list of SFSRoom objects representing the Rooms currently joined by the client.
     * @return {Entities$Entities$SFSRoom[]} Returns: The list of SFSRoom objects representing the Rooms joined by the client.
     */
    getJoinedRooms(): Entities$Entities$SFSRoom[];

    /**
     * Returns the maximum size of messages allowed by the server.
     * @return {number} Returns: The maximum size of messages allowed by the server.
     */
    getMaxMessageSize(): number;

    /**
     * Retrieves a SFSRoom object from its id.
     * @param {number} id The id of the Room.
     * @return {Entities$Entities$SFSRoom} Returns: The object representing the requested Room; null if no SFSRoom object with the passed id exists in the Rooms list.
     */
    getRoomById(id: number): Entities$Entities$SFSRoom;

    /**
     * Retrieves a SFSRoom object from its name.
     * @param {string} name The name of the Room.
     * @return {Entities$Entities$SFSRoom} Returns: The object representing the requested Room; null if no SFSRoom object with the passed name exists in the Rooms list.
     */
    getRoomByName(name: string): Entities$Entities$SFSRoom;

    /**
     * Returns the list of SFSRoom objects representing the Rooms currently "watched" by the client.
     * @return {Entities$Entities$SFSRoom[]} Returns: The list of SFSRoom objects representing the Rooms available on the client.
     */
    getRoomList(): Entities$Entities$SFSRoom[];

    /**
     * Retrieves the list of Rooms which are part of the specified Room Group.
     * @param {string} groupId The name of the Group.
     * @return {Entities$Entities$SFSRoom} Returns: The list of SFSRoom objects belonging to the passed Group.
     */
    getRoomListFromGroup(groupId: string): Entities$Entities$SFSRoom;

    /**
     * Indicates whether the client is connected to the server or not.
     * @return {boolean} Returns: true if the client is connected.
     */
    isConnected(): boolean;

    /**
     * Removes an event listener.
     * @param {string} evtType The type of event to remove, among those available in the SFSevent and SFSBuddyEvent classes.
     * @param {Function} listener The listener function to be removed.
     */
    removeEventListener(evtType: string, listener: Function): void;

    /**
 * Sends a request to the server.
 * @param {(Requests$BuddyList.BuddyList$AddBuddyRequest
| Requests$BuddyList.BuddyList$BlockBuddyRequest
| Requests$BuddyList.BuddyList$BuddyMessageRequest
| Requests$BuddyList.BuddyList$GoOnlineRequest
| Requests$BuddyList.BuddyList$InitBuddyListRequest
| Requests$BuddyList.BuddyList$RemoveBuddyRequest
| Requests$BuddyList.BuddyList$SetBuddyVariablesRequest
| Requests$Game.Game$CreateSFSGameRequest
| Requests$Game.Game$InvitationReplyRequest
| Requests$Game.Game$InviteUsersRequest
| Requests$Game.Game$QuickJoinGameRequest
| Requests$MMO.MMO$SetUserPositionRequest
| Requests$System.System$AdminMessageRequest
| Requests$System.System$BanUserRequest
| Requests$System.System$ChangeRoomCapacityRequest
| Requests$System.System$ChangeRoomNameRequest
| Requests$System.System$ChangeRoomPasswordStateRequest
| Requests$System.System$CreateRoomRequest
| Requests$System.System$ExtensionRequest
| Requests$System.System$FindRoomsRequest
| Requests$System.System$FindUsersRequest
| Requests$System.System$JoinRoomRequest
| Requests$System.System$KickUserRequest
| Requests$System.System$LeaveRoomRequest
| Requests$System.System$LoginRequest
| Requests$System.System$LogoutRequest
| Requests$System.System$ModeratorMessageRequest
| Requests$System.System$ObjectMessageRequest
| Requests$System.System$PlayerToSpectatorRequest
| Requests$System.System$PrivateMessageRequest
| Requests$System.System$PublicMessageRequest
| Requests$System.System$SetRoomVariablesRequest
| Requests$System.System$SetUserVariablesRequest
| Requests$System.System$SpectatorToPlayerRequest
| Requests$System.System$SubscribeRoomGroupRequest
| Requests$System.System$UnsubscribeRoomGroupRequest)} request Sends a request to the server.
 */
    send(
      request:
        | Requests$BuddyList.BuddyList$AddBuddyRequest
        | Requests$BuddyList.BuddyList$BlockBuddyRequest
        | Requests$BuddyList.BuddyList$BuddyMessageRequest
        | Requests$BuddyList.BuddyList$GoOnlineRequest
        | Requests$BuddyList.BuddyList$InitBuddyListRequest
        | Requests$BuddyList.BuddyList$RemoveBuddyRequest
        | Requests$BuddyList.BuddyList$SetBuddyVariablesRequest
        | Requests$Game.Game$CreateSFSGameRequest
        | Requests$Game.Game$InvitationReplyRequest
        | Requests$Game.Game$InviteUsersRequest
        | Requests$Game.Game$QuickJoinGameRequest
        | Requests$MMO.MMO$SetUserPositionRequest
        | Requests$System.System$AdminMessageRequest
        | Requests$System.System$BanUserRequest
        | Requests$System.System$ChangeRoomCapacityRequest
        | Requests$System.System$ChangeRoomNameRequest
        | Requests$System.System$ChangeRoomPasswordStateRequest
        | Requests$System.System$CreateRoomRequest
        | Requests$System.System$ExtensionRequest
        | Requests$System.System$FindRoomsRequest
        | Requests$System.System$FindUsersRequest
        | Requests$System.System$JoinRoomRequest
        | Requests$System.System$KickUserRequest
        | Requests$System.System$LeaveRoomRequest
        | Requests$System.System$LoginRequest
        | Requests$System.System$LogoutRequest
        | Requests$System.System$ModeratorMessageRequest
        | Requests$System.System$ObjectMessageRequest
        | Requests$System.System$PlayerToSpectatorRequest
        | Requests$System.System$PrivateMessageRequest
        | Requests$System.System$PublicMessageRequest
        | Requests$System.System$SetRoomVariablesRequest
        | Requests$System.System$SetUserVariablesRequest
        | Requests$System.System$SpectatorToPlayerRequest
        | Requests$System.System$SubscribeRoomGroupRequest
        | Requests$System.System$UnsubscribeRoomGroupRequest
    ): void;

    /**
     * Allows to specify custom client details that will be used to gather statistics about the client platform via the AdminTool's Analytics Module.
     * @param {string} platformId An identification string for the client, like the browser name for example.
     * @param {string} version An additional string to describe the client version, like the browser version for example.
     */
    setClientDetails(platformId: string, version: string): void;
  }

  declare export interface SFS2X$IconfigObj {
    /**
     * @type {string} The IP address or host name of the SmartFoxServer 2X instance to connect to.
     */
    host?: string;

    /**
     * @type {number} The TCP port of the SmartFoxServer 2X instance to connect to.
     */
    port?: number;

    /**
     * @type {boolean} Use an encrypted SSL connection.
     */
    useSSL?: boolean;

    /**
     * @type {string} The Zone of the SmartFoxServer 2X instance to join during the login process.
     */
    zone?: string;

    /**
     * @type {boolean} Indicates whether the client-server messages console debug should be enabled or not.
     */
    debug?: boolean;
  }

  declare export class Utils$ClientDisconnectionReason {
    /**
     * @type {string} Client was banned from the server.
     */
    static BAN: string;

    /**
     * @type {string} Client was disconnected because it was idle for too long.
     */
    static IDLE: string;

    /**
     * @type {string} Client was kicked out of the server.
     */
    static KICK: string;

    /**
     * @type {string} The client manually disconnected from the server.
     */
    static MANUAL: string;

    /**
     * @type {string} A generic network error occurred, and the client is unable to determine the cause of the disconnection.
     */
    static UNKNOWN: string;
  }
}
