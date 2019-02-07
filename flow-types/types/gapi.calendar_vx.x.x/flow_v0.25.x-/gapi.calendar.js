declare module "gapi.calendar" {
  declare export class calendar$freebusy {
    static query(
      parameters: calendar$FreeBusyQueryParameters
    ): HttpRequest<calendar$FreeBusy>;
  }

  declare interface calendar$FreeBusyQueryParameters {
    timeMin: calendar$datetime;
    timeMax: calendar$datetime;
    timeZone?: string;
    groupExpansionMax?: calendar$integer;
    calendarExpansionMax?: calendar$integer;
    items: {
      id: string
    }[];
  }

  declare interface calendar$FreeBusy {
    kind: "calendar#freeBusy";
    timeMin: calendar$datetime;
    timeMax: calendar$datetime;
    groups: {
      (
        key: string
      ): {
        errors?: {
          domain: string,
          reason: string
        }[],
        calendar$calendars: string[]
      }
    };
    calendar$calendars: {
      (
        key: string
      ): {
        errors?: {
          domain: string,
          reason: string
        }[],
        busy: {
          start: calendar$datetime,
          end: calendar$datetime
        }[]
      }
    };
  }

  declare export class calendar$acl {
    static insert(
      parameters: calendar$AclInsertParameters
    ): HttpRequest<calendar$Acl>;
    static get(
      parameters: calendar$AclGetParameters
    ): HttpRequest<calendar$Acl>;
    static update(
      parameters: calendar$AclUpdateParameters
    ): HttpRequest<calendar$Acl>;
    static delete(parameters: calendar$AclDeleteParameters): HttpRequest<void>;
  }

  declare type calendar$ScopeType = "default" | "user" | "group" | "domain";

  declare interface calendar$Acl {
    kind: "calendar#aclRule";
    calendar$etag: calendar$etag;
    id: string;
    scope: {
      type: calendar$ScopeType,
      value: string
    };
    role: calendar$AccessRole;
  }

  declare interface calendar$AclInsertParameters {
    calendarId: string;
    role: calendar$AccessRole;
    scope: {
      type: calendar$ScopeType,
      value?: string
    };
  }

  declare interface calendar$AclGetParameters {
    calendarId: string;
    ruleId: string;
  }

  declare type calendar$AclUpdateParameters = {
    ruleId: string
  } & calendar$AclInsertParameters;

  declare type calendar$AclDeleteParameters = {} & calendar$AclGetParameters;

  declare export class calendar$calendarList {
    static list(
      parameters?: calendar$CalendarListListParameters
    ): HttpRequest<calendar$CalendarList>;
    static insert(
      parameters: calendar$CalendarListInsertParameters
    ): HttpRequest<calendar$CalendarListEntry>;
  }

  declare type calendar$AccessRoleWithoutNone =
    | "freeBusyReader"
    | "reader"
    | "writer"
    | "owner";

  declare type calendar$AccessRole = "none" | calendar$AccessRoleWithoutNone;

  declare interface calendar$CalendarListListParameters {
    maxResults?: calendar$integer;
    minAccessRole?: calendar$AccessRoleWithoutNone;
    pageToken?: string;
    showDeleted?: boolean;
    showHidden?: boolean;
    syncToken?: string;
  }

  declare interface calendar$CalendarListInsertParameters {
    colorRgbFormat?: boolean;
    resource: calendar$CalendarListInput;
  }

  declare interface calendar$CalendarListInput {
    id: string;
    backgroundColor?: string;
    colorId?: string;
    defaultReminders?: {
      method: calendar$ReminderMethod,
      minutes: calendar$integer
    }[];
    foregroundColor?: string;
    hidden?: boolean;
    notificationSettings?: {
      notifications: {
        type: calendar$NotificationType,
        method: string
      }[]
    };
    selected?: boolean;
    summaryOverride?: string;
  }

  declare interface calendar$CalendarList {
    kind: "calendar#calendarList";
    calendar$etag: calendar$etag;

    /**
     * Token used to access the next page of this result.
     * Omitted if no further results are available, in which case nextSyncToken is provided.
     */
    nextPageToken?: string;

    /**
     * Token used at a later point in time to retrieve only the entries that have changed since this result was returned.
     * Omitted if further results are available, in which case nextPageToken is provided.
     */
    nextSyncToken?: string;
    items: calendar$CalendarListEntry[];
  }

  declare type calendar$NotificationType =
    | "eventCreation"
    | "eventChange"
    | "eventCancellation"
    | "eventResponse"
    | "agenda";

  declare interface calendar$CalendarListEntry {
    kind: "calendar#calendarListEntry";
    calendar$etag: calendar$etag;
    id: string;
    summary: string;
    description?: string;
    location?: string;
    timeZone?: string;
    summaryOverride?: string;
    colorId?: string;
    backgroundColor?: string;
    foregroundColor?: string;
    hidden?: boolean;
    selected?: boolean;
    accessRole: calendar$AccessRoleWithoutNone;
    defaultReminders: {
      method: calendar$ReminderMethod,
      minutes: calendar$integer
    }[];
    notificationSettings?: {
      notifications: {
        type: calendar$NotificationType,
        method: string
      }[]
    };
    primary?: boolean;
    deleted?: boolean;
  }

  declare export class calendar$calendars {
    static insert(
      parameters: calendar$CalendarsInsertParameters
    ): HttpRequest<calendar$Calendar>;
    static update(
      parameters: calendar$CalendarsUpdateParameters
    ): HttpRequest<calendar$Calendar>;
    static delete(
      parameters: calendar$CalendarsDeleteParameters
    ): HttpRequest<void>;
  }

  declare interface calendar$CalendarsUpdateParameters {
    calendarId: string;
    description?: string;
    location?: string;
    summary?: string;
    timeZone?: string;
  }

  declare interface calendar$CalendarsInsertParameters {
    summary: string;
    description?: string;
    location?: string;
    timeZone?: string;
  }

  declare interface calendar$CalendarsDeleteParameters {
    calendarId: string;
  }

  declare interface calendar$Calendar {
    kind: "calendar#calendar";
    calendar$etag: calendar$etag;
    id: string;
    summary: string;
    description?: string;
    location?: string;
    timeZone?: string;
  }

  declare export class calendar$events {
    static list(
      parameters: calendar$EventsListParameters
    ): HttpRequest<calendar$Events>;
    static insert(
      parameters: calendar$EventsInsertParameters
    ): HttpRequest<calendar$Event>;
    static update(
      parameters: calendar$EventsUpdateParameters
    ): HttpRequest<calendar$Event>;
    static get(
      parameters: calendar$EventsGetParameters
    ): HttpRequest<calendar$Event>;
    static delete(
      parameters: calendar$EventsDeleteParameters
    ): HttpRequest<calendar$Event>;
  }

  declare interface calendar$EventsGetParameters {
    calendarId: string;
    eventId: string;
    alwaysIncludeEmail?: boolean;
    maxAttendees?: calendar$integer;
    timeZone?: string;
  }

  declare interface calendar$EventsInsertParameters {
    calendarId: string;
    maxAttendees?: calendar$integer;
    sendNotifications?: boolean;
    supportsAttachments?: boolean;
    resource: calendar$EventInput;
  }

  declare interface calendar$EventsUpdateParameters {
    calendarId: string;
    eventId: string;
    alwaysIncludeEmail?: boolean;
    maxAttendees?: calendar$integer;
    sendNotifications?: boolean;
    supportsAttachments?: boolean;
    resource: calendar$EventInput;
  }

  declare interface calendar$EventsDeleteParameters {
    calendarId: string;
    eventId: string;
    sendNotifications?: boolean;
  }

  declare interface calendar$EventInput {
    attachments?: {
      fileUrl: string
    }[];
    attendees?: {
      email: string,
      displayName?: string,
      optional?: boolean,
      responseStatus?: calendar$AttendeeResponseStatus,
      comment?: string,
      additionalGuests?: calendar$integer
    }[];
    end: {
      calendar$date?: calendar$date,
      dateTime?: calendar$datetime,
      timeZone?: string
    };
    reminders?: {
      overrides: {
        method: string,
        minutes: calendar$integer
      }[],
      useDefault: boolean
    };
    start: {
      calendar$date?: calendar$date,
      dateTime?: calendar$datetime,
      timeZone?: string
    };
    anyoneCanAddSelf?: boolean;
    colorId?: string;
    description?: string;
    extendedProperties?: {
      private: {
        (key: string): string
      },
      shared: {
        (key: string): string
      }
    };
    gadget?: {
      display?: calendar$GadgetDisplayMode,
      height: calendar$integer,
      iconLink: string,
      link: string,
      preferences: {
        (key: string): string
      },
      title: string,
      type: string,
      width: calendar$integer
    };
    guestsCanInviteOthers?: boolean;
    guestsCanSeeOtherGuests?: boolean;
    id?: string;
    location?: string;
    originalStartTime?: {
      calendar$date: calendar$date,
      dateTime: calendar$datetime,
      timeZone: string
    };
    recurrence?: string[];
    sequence?: calendar$integer;
    source?: {
      url: string,
      title: string
    };
    status?: calendar$EventStatus;
    summary?: string;
    transparency?: calendar$EventTransparency;
    visibility?: calendar$EventVisibility;
  }

  declare type calendar$EventsOrder = "startTime" | "updated";

  declare type calendar$SyncToken =
    | "iCalUID"
    | "orderBy"
    | "privateExtendedProperty"
    | "q"
    | "sharedExtendedProperty"
    | "timeMin"
    | "timeMax"
    | "updatedMin";

  declare interface calendar$EventsListParameters {
    calendarId: string;
    alwaysIncludeEmail?: boolean;
    iCalUID?: string;
    maxAttendees?: calendar$integer;
    maxResults?: calendar$integer;
    orderBy?: calendar$EventsOrder;
    pageToken?: string;
    privateExtendedProperty?: string;
    q?: string;
    sharedExtendedProperty?: string;
    showDeleted?: boolean;
    showHiddenInvitations?: boolean;
    singleEvents?: boolean;
    syncToken?: calendar$SyncToken;
    timeMax?: calendar$datetime;
    timeMin?: calendar$datetime;
    timeZone?: string;
    updatedMin?: calendar$datetime;
  }

  declare interface calendar$Events {
    kind: "calendar#events";
    calendar$etag: calendar$etag;
    summary: string;
    description: string;
    updated: calendar$datetime;
    timeZone: string;
    accessRole: calendar$AccessRole;
    defaultReminders: {
      method: calendar$ReminderMethod,
      minutes: calendar$integer
    }[];
    nextPageToken?: string;
    nextSyncToken?: string;
    items: calendar$Event[];
  }

  declare type calendar$etag = string;

  declare type calendar$datetime = string;

  declare type calendar$date = string;

  declare type calendar$integer = number;

  declare type calendar$AttendeeResponseStatus =
    | "needsAction"
    | "declined"
    | "tentative"
    | "accepted";

  declare type calendar$GadgetDisplayMode = "icon" | "chip";

  declare type calendar$ReminderMethod = "email" | "sms" | "popup";

  declare type calendar$EventStatus = "confirmed" | "tentative" | "cancelled";

  declare type calendar$EventTransparency = "opaque" | "transparent";

  declare type calendar$EventVisibility =
    | "default"
    | "public"
    | "private"
    | "confidential";

  declare class calendar$Event {
    kind: "calendar#event";
    calendar$etag: calendar$etag;
    id: string;
    status: calendar$EventStatus;
    htmlLink: string;
    created: calendar$datetime;
    updated: calendar$datetime;
    summary: string;
    description: string;
    location: string;
    colorId: string;
    creator: {
      id?: string,
      email?: string,
      displayName?: string,
      self?: boolean
    };
    organizer: {
      id?: string,
      email?: string,
      displayName?: string,
      self?: boolean
    };
    start: {
      calendar$date?: calendar$date,
      dateTime?: calendar$datetime,
      timeZone?: string
    };
    end: {
      calendar$date?: calendar$date,
      dateTime?: calendar$datetime,
      timeZone?: string
    };
    endTimeUnspecified: boolean;
    recurrence: string[];
    recurringEventId: string;
    originalStartTime: {
      calendar$date: calendar$date,
      dateTime: calendar$datetime,
      timeZone?: string
    };
    transparency: calendar$EventTransparency;
    visibility: calendar$EventVisibility;
    iCalUID: string;
    sequence: calendar$integer;
    attendees: {
      id: string,
      email: string,
      displayName?: string,
      organizer: boolean,
      self: boolean,
      resource: boolean,
      optional?: boolean,
      responseStatus: calendar$AttendeeResponseStatus,
      comment?: string,
      additionalGuests?: calendar$integer
    }[];
    attendeesOmitted: boolean;
    extendedProperties: {
      private: {
        (key: string): string
      },
      shared: {
        (key: string): string
      }
    };
    hangoutLink: string;
    gadget: {
      type: string,
      title: string,
      link: string,
      iconLink: string,
      width?: calendar$integer,
      height?: calendar$integer,
      display?: calendar$GadgetDisplayMode,
      preferences: {
        (key: string): string
      }
    };
    anyoneCanAddSelf: boolean;
    guestsCanInviteOthers: boolean;
    guestsCanModify: boolean;
    guestsCanSeeOtherGuests: boolean;
    privateCopy: boolean;
    locked: boolean;
    reminders: {
      useDefault: boolean,
      overrides?: {
        method: calendar$ReminderMethod,
        minutes: calendar$integer
      }[]
    };
    source: {
      url: string,
      title: string
    };
    attachments: {
      fileUrl: string,
      title: string,
      mimeType: string,
      iconLink: string,
      fileId: string
    }[];
  }
}
