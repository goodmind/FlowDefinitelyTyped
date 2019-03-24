declare module "node-telegram-bot-api" {
  import type { EventEmitter } from "events";

  import type { Stream, Readable } from "stream";

  import type { ServerOptions } from "https";

  import type { Options } from "request";

  declare interface TelegramBot$TextListener {
    regexp: RegExp;
    callback(msg: TelegramBot$Message, match: RegExpExecArray | null): void;
  }

  declare interface TelegramBot$ReplyListener {
    id: number;
    chatId: number | string;
    messageId: number | string;
    callback(msg: TelegramBot$Message): void;
  }

  declare type TelegramBot$ChatType =
    | "private"
    | "group"
    | "supergroup"
    | "channel";

  declare type TelegramBot$ChatAction =
    | "typing"
    | "upload_photo"
    | "record_video"
    | "upload_video"
    | "record_audio"
    | "upload_audio"
    | "upload_document"
    | "find_location"
    | "record_video_note"
    | "upload_video_note";

  declare type TelegramBot$ChatMemberStatus =
    | "creator"
    | "administrator"
    | "member"
    | "restricted"
    | "left"
    | "kicked";

  declare type TelegramBot$DocumentMimeType =
    | "application/pdf"
    | "application/zip";

  declare type TelegramBot$MessageType =
    | "text"
    | "animation"
    | "audio"
    | "channel_chat_created"
    | "contact"
    | "delete_chat_photo"
    | "document"
    | "game"
    | "group_chat_created"
    | "invoice"
    | "left_chat_member"
    | "location"
    | "migrate_from_chat_id"
    | "migrate_to_chat_id"
    | "new_chat_members"
    | "new_chat_photo"
    | "new_chat_title"
    | "passport_data"
    | "photo"
    | "pinned_message"
    | "sticker"
    | "successful_payment"
    | "supergroup_chat_created"
    | "video"
    | "video_note"
    | "voice";

  declare type TelegramBot$MessageEntityType =
    | "mention"
    | "hashtag"
    | "bot_command"
    | "url"
    | "email"
    | "bold"
    | "italic"
    | "code"
    | "pre"
    | "text_link"
    | "text_mention";

  declare type TelegramBot$ParseMode = "Markdown" | "HTML";

  declare interface TelegramBot$PollingOptions {
    interval?: string | number;
    autoStart?: boolean;
    params?: TelegramBot$GetUpdatesOptions;
  }

  declare interface TelegramBot$WebHookOptions {
    host?: string;
    port?: number;
    key: string;
    cert: string;
    pfx: string;
    autoOpen?: boolean;
    https?: ServerOptions;
    healthEndpoint?: string;
  }

  declare interface TelegramBot$ConstructorOptions {
    polling?: boolean | TelegramBot$PollingOptions;
    webHook?: boolean | TelegramBot$WebHookOptions;
    onlyFirstMatch?: boolean;
    request?: Options;
    baseApiUrl?: string;
    filepath?: boolean;
  }

  declare type TelegramBot$StartPollingOptions = {
    restart?: boolean
  } & TelegramBot$ConstructorOptions;

  declare interface TelegramBot$StopPollingOptions {
    cancel?: boolean;
    reason?: string;
  }

  declare interface TelegramBot$SetWebHookOptions {
    url?: string;
    certificate?: string | Stream;
    max_connections?: number;
    allowed_updates?: string[];
  }

  declare interface TelegramBot$GetUpdatesOptions {
    offset?: number;
    limit?: number;
    timeout?: number;
    allowed_updates?: string[];
  }

  declare interface TelegramBot$SendBasicOptions {
    disable_notification?: boolean;
    reply_to_message_id?: number;
    reply_markup?:
      | TelegramBot$InlineKeyboardMarkup
      | TelegramBot$ReplyKeyboardMarkup
      | TelegramBot$ReplyKeyboardRemove
      | TelegramBot$ForceReply;
  }

  declare type TelegramBot$SendMessageOptions = {
    parse_mode?: TelegramBot$ParseMode,
    disable_web_page_preview?: boolean
  } & TelegramBot$SendBasicOptions;

  declare interface TelegramBot$AnswerInlineQueryOptions {
    cache_time?: number;
    is_personal?: boolean;
    next_offset?: string;
    switch_pm_text?: string;
    switch_pm_parameter?: string;
  }

  declare interface TelegramBot$ForwardMessageOptions {
    disable_notification?: boolean;
  }

  declare type TelegramBot$SendPhotoOptions = {
    caption?: string
  } & TelegramBot$SendBasicOptions;

  declare type TelegramBot$SendAudioOptions = {
    caption?: string,
    duration?: number,
    performer?: string,
    title?: string
  } & TelegramBot$SendBasicOptions;

  declare type TelegramBot$SendDocumentOptions = {
    caption?: string
  } & TelegramBot$SendBasicOptions;

  declare interface TelegramBot$SendMediaGroupOptions {
    disable_notification?: boolean;
    reply_to_message_id?: number;
  }

  declare type TelegramBot$SendStickerOptions = TelegramBot$SendBasicOptions;

  declare type TelegramBot$SendVideoOptions = {
    duration?: number,
    width?: number,
    height?: number,
    caption?: string
  } & TelegramBot$SendBasicOptions;

  declare type TelegramBot$SendVoiceOptions = {
    caption?: string,
    duration?: number
  } & TelegramBot$SendBasicOptions;

  declare type TelegramBot$SendVideoNoteOptions = {
    duration?: number,
    length?: number
  } & TelegramBot$SendBasicOptions;

  declare type TelegramBot$SendLocationOptions = TelegramBot$SendBasicOptions;

  declare type TelegramBot$EditMessageLiveLocationOptions = TelegramBot$EditMessageCaptionOptions;

  declare type TelegramBot$StopMessageLiveLocationOptions = TelegramBot$EditMessageCaptionOptions;

  declare type TelegramBot$SendVenueOptions = {
    foursquare_id?: string
  } & TelegramBot$SendBasicOptions;

  declare type TelegramBot$SendContactOptions = {
    last_name?: string
  } & TelegramBot$SendBasicOptions;

  declare type TelegramBot$SendGameOptions = TelegramBot$SendBasicOptions;

  declare type TelegramBot$SendInvoiceOptions = {
    provider_data?: string,
    photo_url?: string,
    photo_size?: number,
    photo_width?: number,
    photo_height?: number,
    need_name?: boolean,
    need_phone_number?: boolean,
    need_email?: boolean,
    need_shipping_address?: boolean,
    is_flexible?: boolean
  } & TelegramBot$SendBasicOptions;

  declare interface TelegramBot$RestrictChatMemberOptions {
    until_date?: number;
    can_send_messages?: boolean;
    can_send_media_messages?: boolean;
    can_send_other_messages?: boolean;
    can_add_web_page_previews?: boolean;
  }

  declare interface TelegramBot$PromoteChatMemberOptions {
    can_change_info?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_delete_messages?: boolean;
    can_invite_users?: boolean;
    can_restrict_members?: boolean;
    can_pin_messages?: boolean;
    can_promote_members?: boolean;
  }

  declare interface TelegramBot$AnswerCallbackQueryOptions {
    callback_query_id: string;
    text?: string;
    show_alert?: boolean;
    url?: string;
    cache_time?: number;
  }

  declare type TelegramBot$EditMessageTextOptions = {
    parse_mode?: TelegramBot$ParseMode,
    disable_web_page_preview?: boolean
  } & TelegramBot$EditMessageCaptionOptions;

  declare type TelegramBot$EditMessageCaptionOptions = {
    reply_markup?: TelegramBot$InlineKeyboardMarkup
  } & TelegramBot$EditMessageReplyMarkupOptions;

  declare interface TelegramBot$EditMessageReplyMarkupOptions {
    chat_id?: number | string;
    message_id?: number;
    inline_message_id?: string;
  }

  declare interface TelegramBot$GetUserProfilePhotosOptions {
    offset?: number;
    limit?: number;
  }

  declare interface TelegramBot$SetGameScoreOptions {
    force?: boolean;
    disable_edit_message?: boolean;
    chat_id?: number;
    message_id?: number;
    inline_message_id?: string;
  }

  declare interface TelegramBot$GetGameHighScoresOptions {
    chat_id?: number;
    message_id?: number;
    inline_message_id?: string;
  }

  declare interface TelegramBot$AnswerShippingQueryOptions {
    shipping_options?: TelegramBot$ShippingOption[];
    error_message?: string;
  }

  declare interface TelegramBot$AnswerPreCheckoutQueryOptions {
    error_message?: string;
  }

  declare interface TelegramBot$Update {
    update_id: number;
    message?: TelegramBot$Message;
    edited_message?: TelegramBot$Message;
    channel_post?: TelegramBot$Message;
    edited_channel_post?: TelegramBot$Message;
    inline_query?: TelegramBot$InlineQuery;
    chosen_inline_result?: TelegramBot$ChosenInlineResult;
    callback_query?: TelegramBot$CallbackQuery;
    shipping_query?: TelegramBot$ShippingQuery;
    pre_checkout_query?: TelegramBot$PreCheckoutQuery;
  }

  declare interface TelegramBot$WebhookInfo {
    url: string;
    has_custom_certificate: boolean;
    pending_update_count: number;
    last_error_date?: number;
    last_error_message?: string;
    max_connections?: number;
    allowed_updates?: string[];
  }

  declare interface TelegramBot$User {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
  }

  declare interface TelegramBot$Chat {
    id: number;
    type: TelegramBot$ChatType;
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    all_members_are_administrators?: boolean;
    photo?: TelegramBot$ChatPhoto;
    description?: string;
    invite_link?: string;
    pinned_message?: TelegramBot$Message;
  }

  declare interface TelegramBot$Message {
    message_id: number;
    from?: TelegramBot$User;
    date: number;
    chat: TelegramBot$Chat;
    forward_from?: TelegramBot$User;
    forward_from_chat?: TelegramBot$Chat;
    forward_from_message_id?: number;
    forward_signature?: string;
    forward_date?: number;
    reply_to_message?: TelegramBot$Message;
    edit_date?: number;
    author_signature?: string;
    text?: string;
    entities?: TelegramBot$MessageEntity[];
    audio?: TelegramBot$Audio;
    document?: TelegramBot$Document;
    game?: TelegramBot$Game;
    photo?: TelegramBot$PhotoSize[];
    sticker?: TelegramBot$Sticker;
    video?: TelegramBot$Video;
    voice?: TelegramBot$Voice;
    video_note?: TelegramBot$VideoNote;
    caption?: string;
    contact?: TelegramBot$Contact;
    location?: TelegramBot$Location;
    venue?: TelegramBot$Venue;
    new_chat_members?: TelegramBot$User[];
    left_chat_member?: TelegramBot$User;
    new_chat_title?: string;
    new_chat_photo?: TelegramBot$PhotoSize[];
    delete_chat_photo?: boolean;
    group_chat_created?: boolean;
    supergroup_chat_created?: boolean;
    channel_chat_created?: boolean;
    migrate_to_chat_id?: number;
    migrate_from_chat_id?: number;
    pinned_message?: TelegramBot$Message;
    invoice?: TelegramBot$Invoice;
    successful_payment?: TelegramBot$SuccessfulPayment;
  }

  declare interface TelegramBot$MessageEntity {
    type: TelegramBot$MessageEntityType;
    offset: number;
    length: number;
    url?: string;
    user?: TelegramBot$User;
  }

  declare interface TelegramBot$FileBase {
    file_id: string;
    file_size?: number;
  }

  declare type TelegramBot$PhotoSize = {
    width: number,
    height: number
  } & TelegramBot$FileBase;

  declare type TelegramBot$Audio = {
    duration: number,
    performer?: string,
    title?: string,
    mime_type?: string
  } & TelegramBot$FileBase;

  declare type TelegramBot$Document = {
    thumb?: TelegramBot$PhotoSize,
    file_name?: string,
    mime_type?: string
  } & TelegramBot$FileBase;

  declare type TelegramBot$Video = {
    width: number,
    height: number,
    duration: number,
    thumb?: TelegramBot$PhotoSize,
    mime_type?: string
  } & TelegramBot$FileBase;

  declare type TelegramBot$Voice = {
    duration: number,
    mime_type?: string
  } & TelegramBot$FileBase;

  declare interface TelegramBot$InputMediaBase {
    media: string;
    caption?: string;
    parse_mode?: TelegramBot$ParseMode;
  }

  declare type TelegramBot$InputMediaPhoto = {
    type: "photo"
  } & TelegramBot$InputMediaBase;

  declare type TelegramBot$InputMediaVideo = {
    type: "video",
    width?: number,
    height?: number,
    duration?: number,
    supports_streaming?: boolean
  } & TelegramBot$InputMediaBase;

  declare type TelegramBot$InputMedia =
    | TelegramBot$InputMediaPhoto
    | TelegramBot$InputMediaVideo;

  declare type TelegramBot$VideoNote = {
    length: number,
    duration: number,
    thumb?: TelegramBot$PhotoSize
  } & TelegramBot$FileBase;

  declare interface TelegramBot$Contact {
    phone_number: string;
    first_name: string;
    last_name?: string;
    user_id?: number;
  }

  declare interface TelegramBot$Location {
    longitude: number;
    latitude: number;
  }

  declare interface TelegramBot$Venue {
    location: TelegramBot$Location;
    title: string;
    address: string;
    foursquare_id?: string;
  }

  declare interface TelegramBot$UserProfilePhotos {
    total_count: number;
    photos: TelegramBot$PhotoSize[][];
  }

  declare type TelegramBot$File = {
    file_path?: string
  } & TelegramBot$FileBase;

  declare interface TelegramBot$ReplyKeyboardMarkup {
    keyboard: TelegramBot$KeyboardButton[][];
    resize_keyboard?: boolean;
    one_time_keyboard?: boolean;
    selective?: boolean;
  }

  declare interface TelegramBot$KeyboardButton {
    text: string;
    request_contact?: boolean;
    request_location?: boolean;
  }

  declare interface TelegramBot$ReplyKeyboardRemove {
    remove_keyboard: boolean;
    selective?: boolean;
  }

  declare interface TelegramBot$InlineKeyboardMarkup {
    inline_keyboard: TelegramBot$InlineKeyboardButton[][];
  }

  declare interface TelegramBot$InlineKeyboardButton {
    text: string;
    url?: string;
    callback_data?: string;
    switch_inline_query?: string;
    switch_inline_query_current_chat?: string;
    callback_game?: TelegramBot$CallbackGame;
    pay?: boolean;
  }

  declare interface TelegramBot$CallbackQuery {
    id: string;
    from: TelegramBot$User;
    message?: TelegramBot$Message;
    inline_message_id?: string;
    chat_instance: string;
    data?: string;
    game_short_name?: string;
  }

  declare interface TelegramBot$ForceReply {
    force_reply: boolean;
    selective?: boolean;
  }

  declare interface TelegramBot$ChatPhoto {
    small_file_id: string;
    big_file_id: string;
  }

  declare interface TelegramBot$ChatMember {
    user: TelegramBot$User;
    status: TelegramBot$ChatMemberStatus;
    until_date?: number;
    can_be_edited?: boolean;
    can_change_info?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_delete_messages?: boolean;
    can_invite_users?: boolean;
    can_restrict_members?: boolean;
    can_pin_messages?: boolean;
    can_promote_members?: boolean;
    can_send_messages?: boolean;
    can_send_media_messages?: boolean;
    can_send_other_messages?: boolean;
    can_add_web_page_previews?: boolean;
  }

  declare interface TelegramBot$Sticker {
    file_id: string;
    width: number;
    height: number;
    thumb?: TelegramBot$PhotoSize;
    emoji?: string;
    set_name?: string;
    mask_position?: TelegramBot$MaskPosition;
    file_size?: number;
  }

  declare interface TelegramBot$StickerSet {
    name: string;
    title: string;
    contains_masks: boolean;
    stickers: TelegramBot$Sticker[];
  }

  declare interface TelegramBot$MaskPosition {
    point: string;
    x_shift: number;
    y_shift: number;
    scale: number;
  }

  declare interface TelegramBot$InlineQuery {
    id: string;
    from: TelegramBot$User;
    location?: TelegramBot$Location;
    query: string;
    offset: string;
  }

  declare interface TelegramBot$InlineQueryResultBase {
    id: string;
    reply_markup?: TelegramBot$InlineKeyboardMarkup;
  }

  declare type TelegramBot$InlineQueryResultArticle = {
    type: "article",
    title: string,
    input_message_content: TelegramBot$InputMessageContent,
    url?: string,
    hide_url?: boolean,
    description?: string,
    thumb_url?: string,
    thumb_width?: number,
    thumb_height?: number
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultPhoto = {
    type: "photo",
    photo_url: string,
    thumb_url: string,
    photo_width?: number,
    photo_height?: number,
    title?: string,
    description?: string,
    caption?: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultGif = {
    type: "gif",
    gif_url: string,
    gif_width?: number,
    gif_height?: number,
    gif_duration?: number,
    thumb_url?: string,
    title?: string,
    caption?: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultMpeg4Gif = {
    type: "mpeg4_gif",
    mpeg4_url: string,
    mpeg4_width?: number,
    mpeg4_height?: number,
    mpeg4_duration?: number,
    thumb_url?: string,
    title?: string,
    caption?: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultVideo = {
    type: "video",
    video_url: string,
    mime_type: string,
    thumb_url: string,
    title: string,
    caption?: string,
    video_width?: number,
    video_height?: number,
    video_duration?: number,
    description?: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultAudio = {
    type: "audio",
    audio_url: string,
    title: string,
    caption?: string,
    performer?: string,
    audio_duration?: number,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultVoice = {
    type: "voice",
    voice_url: string,
    title: string,
    caption?: string,
    voice_duration?: number,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultDocument = {
    type: "document",
    title: string,
    caption?: string,
    document_url: string,
    mime_type: string,
    description?: string,
    input_message_content?: TelegramBot$InputMessageContent,
    thumb_url?: string,
    thumb_width?: number,
    thumb_height?: number
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultLocationBase = {
    latitude: number,
    longitude: number,
    title: string,
    input_message_content?: TelegramBot$InputMessageContent,
    thumb_url?: string,
    thumb_width?: number,
    thumb_height?: number
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultLocation = {
    type: "location"
  } & TelegramBot$InlineQueryResultLocationBase;

  declare type TelegramBot$InlineQueryResultVenue = {
    type: "venue",
    address: string,
    foursquare_id?: string
  } & TelegramBot$InlineQueryResultLocationBase;

  declare type TelegramBot$InlineQueryResultContact = {
    type: "contact",
    phone_number: string,
    first_name: string,
    last_name?: string,
    input_message_content?: TelegramBot$InputMessageContent,
    thumb_url?: string,
    thumb_width?: number,
    thumb_height?: number
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultGame = {
    type: "game",
    game_short_name: string
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultCachedPhoto = {
    type: "photo",
    photo_file_id: string,
    title?: string,
    description?: string,
    caption?: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultCachedGif = {
    type: "gif",
    gif_file_id: string,
    title?: string,
    caption?: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultCachedMpeg4Gif = {
    type: "mpeg4_gif",
    mpeg4_file_id: string,
    title?: string,
    caption?: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultCachedSticker = {
    type: "sticker",
    sticker_file_id: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultCachedDocument = {
    type: "document",
    title: string,
    document_file_id: string,
    description?: string,
    caption?: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultCachedVideo = {
    type: "video",
    video_file_id: string,
    title: string,
    description?: string,
    caption?: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultCachedVoice = {
    type: "voice",
    voice_file_id: string,
    title: string,
    caption?: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResultCachedAudio = {
    type: "audio",
    audio_file_id: string,
    caption?: string,
    input_message_content?: TelegramBot$InputMessageContent
  } & TelegramBot$InlineQueryResultBase;

  declare type TelegramBot$InlineQueryResult =
    | TelegramBot$InlineQueryResultCachedAudio
    | TelegramBot$InlineQueryResultCachedDocument
    | TelegramBot$InlineQueryResultCachedGif
    | TelegramBot$InlineQueryResultCachedMpeg4Gif
    | TelegramBot$InlineQueryResultCachedPhoto
    | TelegramBot$InlineQueryResultCachedSticker
    | TelegramBot$InlineQueryResultCachedVideo
    | TelegramBot$InlineQueryResultCachedVoice
    | TelegramBot$InlineQueryResultArticle
    | TelegramBot$InlineQueryResultAudio
    | TelegramBot$InlineQueryResultContact
    | TelegramBot$InlineQueryResultGame
    | TelegramBot$InlineQueryResultDocument
    | TelegramBot$InlineQueryResultGif
    | TelegramBot$InlineQueryResultLocation
    | TelegramBot$InlineQueryResultMpeg4Gif
    | TelegramBot$InlineQueryResultPhoto
    | TelegramBot$InlineQueryResultVenue
    | TelegramBot$InlineQueryResultVideo
    | TelegramBot$InlineQueryResultVoice;

  declare type TelegramBot$InputMessageContent = { [key: string]: any };

  declare type TelegramBot$InputTextMessageContent = {
    message_text: string,
    parse_mode?: TelegramBot$ParseMode,
    disable_web_page_preview?: boolean
  } & TelegramBot$InputMessageContent;

  declare type TelegramBot$InputLocationMessageContent = {
    latitude: number,
    longitude: number
  } & TelegramBot$InputMessageContent;

  declare type TelegramBot$InputVenueMessageContent = {
    title: string,
    address: string,
    foursquare_id?: string
  } & TelegramBot$InputLocationMessageContent;

  declare type TelegramBot$InputContactMessageContent = {
    phone_number: string,
    first_name: string,
    last_name?: string
  } & TelegramBot$InputMessageContent;

  declare interface TelegramBot$ChosenInlineResult {
    result_id: string;
    from: TelegramBot$User;
    location?: TelegramBot$Location;
    inline_message_id?: string;
    query: string;
  }

  declare interface TelegramBot$ResponseParameters {
    migrate_to_chat_id?: number;
    retry_after?: number;
  }

  declare interface TelegramBot$LabeledPrice {
    label: string;
    amount: number;
  }

  declare interface TelegramBot$Invoice {
    title: string;
    description: string;
    start_parameter: string;
    currency: string;
    total_amount: number;
  }

  declare interface TelegramBot$ShippingAddress {
    country_code: string;
    state: string;
    city: string;
    street_line1: string;
    street_line2: string;
    post_code: string;
  }

  declare interface TelegramBot$OrderInfo {
    name?: string;
    phone_number?: string;
    email?: string;
    shipping_address?: TelegramBot$ShippingAddress;
  }

  declare interface TelegramBot$ShippingOption {
    id: string;
    title: string;
    prices: TelegramBot$LabeledPrice[];
  }

  declare interface TelegramBot$SuccessfulPayment {
    currency: string;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: TelegramBot$OrderInfo;
    telegram_payment_charge_id: string;
    provider_payment_charge_id: string;
  }

  declare interface TelegramBot$ShippingQuery {
    id: string;
    from: TelegramBot$User;
    invoice_payload: string;
    shipping_address: TelegramBot$ShippingAddress;
  }

  declare interface TelegramBot$PreCheckoutQuery {
    id: string;
    from: TelegramBot$User;
    currency: string;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: TelegramBot$OrderInfo;
  }

  declare interface TelegramBot$Game {
    title: string;
    description: string;
    photo: TelegramBot$PhotoSize[];
    text?: string;
    text_entities?: TelegramBot$MessageEntity[];
    animation?: TelegramBot$Animation;
  }

  declare interface TelegramBot$Animation {
    file_id: string;
    thumb?: TelegramBot$PhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
  }

  declare type TelegramBot$CallbackGame = { [key: string]: any };

  declare interface TelegramBot$GameHighScore {
    position: number;
    user: TelegramBot$User;
    score: number;
  }

  declare interface TelegramBot$Metadata {
    type?: TelegramBot$MessageType;
  }
  declare class TelegramBot mixins EventEmitter {
    constructor(token: string, options?: TelegramBot$ConstructorOptions): this;
    startPolling(options?: TelegramBot$StartPollingOptions): Promise<any>;
    stopPolling(options?: TelegramBot$StopPollingOptions): Promise<any>;
    isPolling(): boolean;
    openWebHook(): Promise<any>;
    closeWebHook(): Promise<any>;
    hasOpenWebHook(): boolean;
    getMe(): Promise<TelegramBot$User>;
    setWebHook(
      url: string,
      options?: TelegramBot$SetWebHookOptions
    ): Promise<any>;
    deleteWebHook(): Promise<boolean>;
    getWebHookInfo(): Promise<TelegramBot$WebhookInfo>;
    getUpdates(
      options?: TelegramBot$GetUpdatesOptions
    ): Promise<TelegramBot$Update[]>;
    processUpdate(update: TelegramBot$Update): void;
    sendMessage(
      chatId: number | string,
      text: string,
      options?: TelegramBot$SendMessageOptions
    ): Promise<TelegramBot$Message>;
    answerInlineQuery(
      inlineQueryId: string,
      results: $ReadOnlyArray<TelegramBot$InlineQueryResult>,
      options?: TelegramBot$AnswerInlineQueryOptions
    ): Promise<boolean>;
    forwardMessage(
      chatId: number | string,
      fromChatId: number | string,
      messageId: number | string,
      options?: TelegramBot$ForwardMessageOptions
    ): Promise<TelegramBot$Message>;
    sendPhoto(
      chatId: number | string,
      photo: string | Stream | Buffer,
      options?: TelegramBot$SendPhotoOptions
    ): Promise<TelegramBot$Message>;
    sendAudio(
      chatId: number | string,
      audio: string | Stream | Buffer,
      options?: TelegramBot$SendAudioOptions
    ): Promise<TelegramBot$Message>;
    sendDocument(
      chatId: number | string,
      doc: string | Stream | Buffer,
      options?: TelegramBot$SendDocumentOptions,
      fileOpts?: any
    ): Promise<TelegramBot$Message>;
    sendMediaGroup(
      chatId: number | string,
      media: $ReadOnlyArray<TelegramBot$InputMedia>,
      options?: TelegramBot$SendMediaGroupOptions
    ): Promise<TelegramBot$Message>;
    sendSticker(
      chatId: number | string,
      sticker: string | Stream | Buffer,
      options?: TelegramBot$SendStickerOptions
    ): Promise<TelegramBot$Message>;
    sendVideo(
      chatId: number | string,
      video: string | Stream | Buffer,
      options?: TelegramBot$SendVideoOptions
    ): Promise<TelegramBot$Message>;
    sendVideoNote(
      chatId: number | string,
      videoNote: string | Stream | Buffer,
      options?: TelegramBot$SendVideoNoteOptions
    ): Promise<TelegramBot$Message>;
    sendVoice(
      chatId: number | string,
      voice: string | Stream | Buffer,
      options?: TelegramBot$SendVoiceOptions
    ): Promise<TelegramBot$Message>;
    sendChatAction(
      chatId: number | string,
      action: TelegramBot$ChatAction
    ): Promise<boolean>;
    kickChatMember(chatId: number | string, userId: string): Promise<boolean>;
    unbanChatMember(chatId: number | string, userId: string): Promise<boolean>;
    restrictChatMember(
      chatId: number | string,
      userId: string,
      options?: TelegramBot$RestrictChatMemberOptions
    ): Promise<boolean>;
    promoteChatMember(
      chatId: number | string,
      userId: string,
      options?: TelegramBot$PromoteChatMemberOptions
    ): Promise<boolean>;
    exportChatInviteLink(chatId: number | string): Promise<string>;
    setChatPhoto(
      chatId: number | string,
      photo: string | Stream | Buffer
    ): Promise<boolean>;
    deleteChatPhoto(chatId: number | string): Promise<boolean>;
    setChatTitle(chatId: number | string, title: string): Promise<boolean>;
    setChatDescription(
      chatId: number | string,
      description: string
    ): Promise<boolean>;
    pinChatMessage(
      chatId: number | string,
      messageId: string
    ): Promise<boolean>;
    unpinChatMessage(chatId: number | string): Promise<boolean>;
    answerCallbackQuery(
      callbackQueryId: string,
      options?: $Shape<TelegramBot$AnswerCallbackQueryOptions>
    ): Promise<boolean>;

    /**
     * @deprecated since version 0.30.0
     */
    answerCallbackQuery(
      options?: TelegramBot$AnswerCallbackQueryOptions
    ): Promise<boolean>;
    editMessageText(
      text: string,
      options?: TelegramBot$EditMessageTextOptions
    ): Promise<TelegramBot$Message | boolean>;
    editMessageCaption(
      caption: string,
      options?: TelegramBot$EditMessageCaptionOptions
    ): Promise<TelegramBot$Message | boolean>;
    editMessageReplyMarkup(
      replyMarkup: TelegramBot$InlineKeyboardMarkup,
      options?: TelegramBot$EditMessageReplyMarkupOptions
    ): Promise<TelegramBot$Message | boolean>;
    getUserProfilePhotos(
      userId: number | string,
      options?: TelegramBot$GetUserProfilePhotosOptions
    ): Promise<TelegramBot$UserProfilePhotos>;
    sendLocation(
      chatId: number | string,
      latitude: number,
      longitude: number,
      options?: TelegramBot$SendLocationOptions
    ): Promise<TelegramBot$Message>;
    editMessageLiveLocation(
      latitude: number,
      longitude: number,
      options?: TelegramBot$EditMessageLiveLocationOptions
    ): Promise<TelegramBot$Message | boolean>;
    stopMessageLiveLocation(
      options?: TelegramBot$StopMessageLiveLocationOptions
    ): Promise<TelegramBot$Message | boolean>;
    sendVenue(
      chatId: number | string,
      latitude: number,
      longitude: number,
      title: string,
      address: string,
      options?: TelegramBot$SendVenueOptions
    ): Promise<TelegramBot$Message>;
    sendContact(
      chatId: number | string,
      phoneNumber: string,
      firstName: string,
      options?: TelegramBot$SendContactOptions
    ): Promise<TelegramBot$Message>;
    getFile(fileId: string): Promise<TelegramBot$File>;
    getFileLink(fileId: string): Promise<string>;
    getFileStream(fileId: string): Readable;
    downloadFile(fileId: string, downloadDir: string): Promise<string>;
    onText(
      regexp: RegExp,
      callback: (
        msg: TelegramBot$Message,
        match: RegExpExecArray | null
      ) => void
    ): void;
    removeTextListener(regexp: RegExp): TelegramBot$TextListener | null;
    onReplyToMessage(
      chatId: number | string,
      messageId: number | string,
      callback: (msg: TelegramBot$Message) => void
    ): number;
    removeReplyListener(replyListenerId: number): TelegramBot$ReplyListener;
    getChat(chatId: number | string): Promise<TelegramBot$Chat>;
    getChatAdministrators(
      chatId: number | string
    ): Promise<TelegramBot$ChatMember[]>;
    getChatMembersCount(chatId: number | string): Promise<number>;
    getChatMember(
      chatId: number | string,
      userId: string
    ): Promise<TelegramBot$ChatMember>;
    leaveChat(chatId: number | string): Promise<boolean>;
    setChatStickerSet(
      chatId: number | string,
      stickerSetName: string
    ): Promise<boolean>;
    deleteChatStickerSet(chatId: number | string): Promise<boolean>;
    sendGame(
      chatId: number | string,
      gameShortName: string,
      options?: TelegramBot$SendGameOptions
    ): Promise<TelegramBot$Message>;
    setGameScore(
      userId: string,
      score: number,
      options?: TelegramBot$SetGameScoreOptions
    ): Promise<TelegramBot$Message | boolean>;
    getGameHighScores(
      userId: string,
      options?: TelegramBot$GetGameHighScoresOptions
    ): Promise<TelegramBot$GameHighScore[]>;
    deleteMessage(
      chatId: number | string,
      messageId: string,
      options?: any
    ): Promise<boolean>;
    sendInvoice(
      chatId: number | string,
      title: string,
      description: string,
      payload: string,
      providerToken: string,
      startParameter: string,
      currency: string,
      prices: $ReadOnlyArray<TelegramBot$LabeledPrice>,
      options?: TelegramBot$SendInvoiceOptions
    ): Promise<TelegramBot$Message>;
    answerShippingQuery(
      shippingQueryId: string,
      ok: boolean,
      options?: TelegramBot$AnswerShippingQueryOptions
    ): Promise<boolean>;
    answerPreCheckoutQuery(
      preCheckoutQueryId: string,
      ok: boolean,
      options?: TelegramBot$AnswerPreCheckoutQueryOptions
    ): Promise<boolean>;
    addListener(
      event: TelegramBot$MessageType | "message",
      listener: (
        message: TelegramBot$Message,
        metadata: TelegramBot$Metadata
      ) => void
    ): this;
    addListener(
      event: "callback_query",
      listener: (query: TelegramBot$CallbackQuery) => void
    ): this;
    addListener(
      event: "inline_query",
      listener: (query: TelegramBot$InlineQuery) => void
    ): this;
    addListener(
      event: "chosen_inline_result",
      listener: (result: TelegramBot$ChosenInlineResult) => void
    ): this;
    addListener(
      event:
        | "channel_post"
        | "edited_message"
        | "edited_message_text"
        | "edited_message_caption"
        | "edited_channel_post"
        | "edited_channel_post_text"
        | "edited_channel_post_caption",
      listener: (message: TelegramBot$Message) => void
    ): this;
    addListener(
      event: "shipping_query",
      listener: (query: TelegramBot$ShippingQuery) => void
    ): this;
    addListener(
      event: "pre_checkout_query",
      listener: (query: TelegramBot$PreCheckoutQuery) => void
    ): this;
    addListener(
      event: "polling_error" | "webhook_error" | "error",
      listener: (error: Error) => void
    ): this;
    on(
      event: TelegramBot$MessageType | "message",
      listener: (
        message: TelegramBot$Message,
        metadata: TelegramBot$Metadata
      ) => void
    ): this;
    on(
      event: "callback_query",
      listener: (query: TelegramBot$CallbackQuery) => void
    ): this;
    on(
      event: "inline_query",
      listener: (query: TelegramBot$InlineQuery) => void
    ): this;
    on(
      event: "chosen_inline_result",
      listener: (result: TelegramBot$ChosenInlineResult) => void
    ): this;
    on(
      event:
        | "channel_post"
        | "edited_message"
        | "edited_message_text"
        | "edited_message_caption"
        | "edited_channel_post"
        | "edited_channel_post_text"
        | "edited_channel_post_caption",
      listener: (message: TelegramBot$Message) => void
    ): this;
    on(
      event: "shipping_query",
      listener: (query: TelegramBot$ShippingQuery) => void
    ): this;
    on(
      event: "pre_checkout_query",
      listener: (query: TelegramBot$PreCheckoutQuery) => void
    ): this;
    on(
      event: "polling_error" | "webhook_error" | "error",
      listener: (error: Error) => void
    ): this;
    once(
      event: TelegramBot$MessageType | "message",
      listener: (
        message: TelegramBot$Message,
        metadata: TelegramBot$Metadata
      ) => void
    ): this;
    once(
      event: "callback_query",
      listener: (query: TelegramBot$CallbackQuery) => void
    ): this;
    once(
      event: "inline_query",
      listener: (query: TelegramBot$InlineQuery) => void
    ): this;
    once(
      event: "chosen_inline_result",
      listener: (result: TelegramBot$ChosenInlineResult) => void
    ): this;
    once(
      event:
        | "channel_post"
        | "edited_message"
        | "edited_message_text"
        | "edited_message_caption"
        | "edited_channel_post"
        | "edited_channel_post_text"
        | "edited_channel_post_caption",
      listener: (message: TelegramBot$Message) => void
    ): this;
    once(
      event: "shipping_query",
      listener: (query: TelegramBot$ShippingQuery) => void
    ): this;
    once(
      event: "pre_checkout_query",
      listener: (query: TelegramBot$PreCheckoutQuery) => void
    ): this;
    once(
      event: "polling_error" | "webhook_error" | "error",
      listener: (error: Error) => void
    ): this;
    prependListener(
      event: TelegramBot$MessageType | "message",
      listener: (
        message: TelegramBot$Message,
        metadata: TelegramBot$Metadata
      ) => void
    ): this;
    prependListener(
      event: "callback_query",
      listener: (query: TelegramBot$CallbackQuery) => void
    ): this;
    prependListener(
      event: "inline_query",
      listener: (query: TelegramBot$InlineQuery) => void
    ): this;
    prependListener(
      event: "chosen_inline_result",
      listener: (result: TelegramBot$ChosenInlineResult) => void
    ): this;
    prependListener(
      event:
        | "channel_post"
        | "edited_message"
        | "edited_message_text"
        | "edited_message_caption"
        | "edited_channel_post"
        | "edited_channel_post_text"
        | "edited_channel_post_caption",
      listener: (message: TelegramBot$Message) => void
    ): this;
    prependListener(
      event: "shipping_query",
      listener: (query: TelegramBot$ShippingQuery) => void
    ): this;
    prependListener(
      event: "pre_checkout_query",
      listener: (query: TelegramBot$PreCheckoutQuery) => void
    ): this;
    prependListener(
      event: "polling_error" | "webhook_error" | "error",
      listener: (error: Error) => void
    ): this;
    prependOnceListener(
      event: TelegramBot$MessageType | "message",
      listener: (
        message: TelegramBot$Message,
        metadata: TelegramBot$Metadata
      ) => void
    ): this;
    prependOnceListener(
      event: "callback_query",
      listener: (query: TelegramBot$CallbackQuery) => void
    ): this;
    prependOnceListener(
      event: "inline_query",
      listener: (query: TelegramBot$InlineQuery) => void
    ): this;
    prependOnceListener(
      event: "chosen_inline_result",
      listener: (result: TelegramBot$ChosenInlineResult) => void
    ): this;
    prependOnceListener(
      event:
        | "channel_post"
        | "edited_message"
        | "edited_message_text"
        | "edited_message_caption"
        | "edited_channel_post"
        | "edited_channel_post_text"
        | "edited_channel_post_caption",
      listener: (message: TelegramBot$Message) => void
    ): this;
    prependOnceListener(
      event: "shipping_query",
      listener: (query: TelegramBot$ShippingQuery) => void
    ): this;
    prependOnceListener(
      event: "pre_checkout_query",
      listener: (query: TelegramBot$PreCheckoutQuery) => void
    ): this;
    prependOnceListener(
      event: "polling_error" | "webhook_error" | "error",
      listener: (error: Error) => void
    ): this;
    removeListener(
      event: TelegramBot$MessageType | "message",
      listener: (
        message: TelegramBot$Message,
        metadata: TelegramBot$Metadata
      ) => void
    ): this;
    removeListener(
      event: "callback_query",
      listener: (query: TelegramBot$CallbackQuery) => void
    ): this;
    removeListener(
      event: "inline_query",
      listener: (query: TelegramBot$InlineQuery) => void
    ): this;
    removeListener(
      event: "chosen_inline_result",
      listener: (result: TelegramBot$ChosenInlineResult) => void
    ): this;
    removeListener(
      event:
        | "channel_post"
        | "edited_message"
        | "edited_message_text"
        | "edited_message_caption"
        | "edited_channel_post"
        | "edited_channel_post_text"
        | "edited_channel_post_caption",
      listener: (message: TelegramBot$Message) => void
    ): this;
    removeListener(
      event: "shipping_query",
      listener: (query: TelegramBot$ShippingQuery) => void
    ): this;
    removeListener(
      event: "pre_checkout_query",
      listener: (query: TelegramBot$PreCheckoutQuery) => void
    ): this;
    removeListener(
      event: "polling_error" | "webhook_error" | "error",
      listener: (error: Error) => void
    ): this;
    off(
      event: TelegramBot$MessageType | "message",
      listener: (
        message: TelegramBot$Message,
        metadata: TelegramBot$Metadata
      ) => void
    ): this;
    off(
      event: "callback_query",
      listener: (query: TelegramBot$CallbackQuery) => void
    ): this;
    off(
      event: "inline_query",
      listener: (query: TelegramBot$InlineQuery) => void
    ): this;
    off(
      event: "chosen_inline_result",
      listener: (result: TelegramBot$ChosenInlineResult) => void
    ): this;
    off(
      event:
        | "channel_post"
        | "edited_message"
        | "edited_message_text"
        | "edited_message_caption"
        | "edited_channel_post"
        | "edited_channel_post_text"
        | "edited_channel_post_caption",
      listener: (message: TelegramBot$Message) => void
    ): this;
    off(
      event: "shipping_query",
      listener: (query: TelegramBot$ShippingQuery) => void
    ): this;
    off(
      event: "pre_checkout_query",
      listener: (query: TelegramBot$PreCheckoutQuery) => void
    ): this;
    off(
      event: "polling_error" | "webhook_error" | "error",
      listener: (error: Error) => void
    ): this;
    removeAllListeners(
      event:
        | TelegramBot$MessageType
        | "message"
        | "callback_query"
        | "inline_query"
        | "chosen_inline_result"
        | "channel_post"
        | "edited_message"
        | "edited_message_text"
        | "edited_message_caption"
        | "edited_channel_post"
        | "edited_channel_post_text"
        | "edited_channel_post_caption"
        | "shipping_query"
        | "pre_checkout_query"
        | "polling_error"
        | "webhook_error"
        | "error"
    ): this;
    listeners(
      event:
        | TelegramBot$MessageType
        | "message"
        | "callback_query"
        | "inline_query"
        | "chosen_inline_result"
        | "channel_post"
        | "edited_message"
        | "edited_message_text"
        | "edited_message_caption"
        | "edited_channel_post"
        | "edited_channel_post_text"
        | "edited_channel_post_caption"
        | "shipping_query"
        | "pre_checkout_query"
        | "polling_error"
        | "webhook_error"
        | "error"
    ): Array<(data: any, metadata?: TelegramBot$Metadata) => void>;
    rawListeners(
      event:
        | TelegramBot$MessageType
        | "message"
        | "callback_query"
        | "inline_query"
        | "chosen_inline_result"
        | "channel_post"
        | "edited_message"
        | "edited_message_text"
        | "edited_message_caption"
        | "edited_channel_post"
        | "edited_channel_post_text"
        | "edited_channel_post_caption"
        | "shipping_query"
        | "pre_checkout_query"
        | "polling_error"
        | "webhook_error"
        | "error"
    ): Array<(data: any, metadata?: TelegramBot$Metadata) => void>;
    eventNames(): Array<
      | TelegramBot$MessageType
      | "message"
      | "callback_query"
      | "inline_query"
      | "chosen_inline_result"
      | "channel_post"
      | "edited_message"
      | "edited_message_text"
      | "edited_message_caption"
      | "edited_channel_post"
      | "edited_channel_post_text"
      | "edited_channel_post_caption"
      | "shipping_query"
      | "pre_checkout_query"
      | "polling_error"
      | "webhook_error"
      | "error"
    >;
    listenerCount(
      event:
        | TelegramBot$MessageType
        | "message"
        | "callback_query"
        | "inline_query"
        | "chosen_inline_result"
        | "channel_post"
        | "edited_message"
        | "edited_message_text"
        | "edited_message_caption"
        | "edited_channel_post"
        | "edited_channel_post_text"
        | "edited_channel_post_caption"
        | "shipping_query"
        | "pre_checkout_query"
        | "polling_error"
        | "webhook_error"
        | "error"
    ): number;
  }
  declare export default typeof TelegramBot;
}
