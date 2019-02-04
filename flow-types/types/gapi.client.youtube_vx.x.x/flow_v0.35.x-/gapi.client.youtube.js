declare module 'gapi.client.youtube' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        activities: typeof client$activities,
captions: typeof client$captions,
channelBanners: typeof client$channelBanners,
channelSections: typeof client$channelSections,
channels: typeof client$channels,
commentThreads: typeof client$commentThreads,
comments: typeof client$comments,
fanFundingEvents: typeof client$fanFundingEvents,
guideCategories: typeof client$guideCategories,
i18nLanguages: typeof client$i18nLanguages,
i18nRegions: typeof client$i18nRegions,
liveBroadcasts: typeof client$liveBroadcasts,
liveChatBans: typeof client$liveChatBans,
liveChatMessages: typeof client$liveChatMessages,
liveChatModerators: typeof client$liveChatModerators,
liveStreams: typeof client$liveStreams,
playlistItems: typeof client$playlistItems,
playlists: typeof client$playlists,
search: typeof client$search,
sponsors: typeof client$sponsors,
subscriptions: typeof client$subscriptions,
superChatEvents: typeof client$superChatEvents,
thumbnails: typeof client$thumbnails,
videoAbuseReportReasons: typeof client$videoAbuseReportReasons,
videoCategories: typeof client$videoCategories,
videos: typeof client$videos,
watermarks: typeof client$watermarks,
      }

/**
 * Load YouTube Data API v3
 */
declare function client$load(name: "youtube", version: "v3"): PromiseLike<void>


declare function client$load(name: "youtube", version: "v3", callback: () => any): void


declare var client$activities: youtube$youtube$ActivitiesResource;

declare var client$captions: youtube$youtube$CaptionsResource;

declare var client$channelBanners: youtube$youtube$ChannelBannersResource;

declare var client$channelSections: youtube$youtube$ChannelSectionsResource;

declare var client$channels: youtube$youtube$ChannelsResource;

declare var client$commentThreads: youtube$youtube$CommentThreadsResource;

declare var client$comments: youtube$youtube$CommentsResource;

declare var client$fanFundingEvents: youtube$youtube$FanFundingEventsResource;

declare var client$guideCategories: youtube$youtube$GuideCategoriesResource;

declare var client$i18nLanguages: youtube$youtube$I18nLanguagesResource;

declare var client$i18nRegions: youtube$youtube$I18nRegionsResource;

declare var client$liveBroadcasts: youtube$youtube$LiveBroadcastsResource;

declare var client$liveChatBans: youtube$youtube$LiveChatBansResource;

declare var client$liveChatMessages: youtube$youtube$LiveChatMessagesResource;

declare var client$liveChatModerators: youtube$youtube$LiveChatModeratorsResource;

declare var client$liveStreams: youtube$youtube$LiveStreamsResource;

declare var client$playlistItems: youtube$youtube$PlaylistItemsResource;

declare var client$playlists: youtube$youtube$PlaylistsResource;

declare var client$search: youtube$youtube$SearchResource;

declare var client$sponsors: youtube$youtube$SponsorsResource;

declare var client$subscriptions: youtube$youtube$SubscriptionsResource;

declare var client$superChatEvents: youtube$youtube$SuperChatEventsResource;

declare var client$thumbnails: youtube$youtube$ThumbnailsResource;

declare var client$videoAbuseReportReasons: youtube$youtube$VideoAbuseReportReasonsResource;

declare var client$videoCategories: youtube$youtube$VideoCategoriesResource;

declare var client$videos: youtube$youtube$VideosResource;

declare var client$watermarks: youtube$youtube$WatermarksResource;

declare interface youtube$AccessPolicy {

/**
 * The value of allowed indicates whether the access to the policy is allowed or denied by default.
 */
allowed?: boolean,

/**
 * A list of region codes that identify countries where the default policy do not apply.
 */
exception?: string[]
} 

declare interface youtube$Activity {

/**
 * The contentDetails object contains information about the content associated with the activity. For example, if the snippet.type value is videoRated,
 * then the contentDetails object's content identifies the rated video.
 */
contentDetails?: youtube$ActivityContentDetails,

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the activity.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#activity".
 */
kind?: string,

/**
 * The snippet object contains basic details about the activity, including the activity's type and group ID.
 */
snippet?: youtube$ActivitySnippet
} 

declare interface youtube$ActivityContentDetails {

/**
 * The bulletin object contains details about a channel bulletin post. This object is only present if the snippet.type is bulletin.
 */
bulletin?: youtube$ActivityContentDetailsBulletin,

/**
 * The channelItem object contains details about a resource which was added to a channel. This property is only present if the snippet.type is
 * channelItem.
 */
channelItem?: youtube$ActivityContentDetailsChannelItem,

/**
 * The comment object contains information about a resource that received a comment. This property is only present if the snippet.type is comment.
 */
comment?: youtube$ActivityContentDetailsComment,

/**
 * The favorite object contains information about a video that was marked as a favorite video. This property is only present if the snippet.type is
 * favorite.
 */
favorite?: youtube$ActivityContentDetailsFavorite,

/**
 * The like object contains information about a resource that received a positive (like) rating. This property is only present if the snippet.type is
 * like.
 */
like?: youtube$ActivityContentDetailsLike,

/**
 * The playlistItem object contains information about a new playlist item. This property is only present if the snippet.type is playlistItem.
 */
playlistItem?: youtube$ActivityContentDetailsPlaylistItem,

/**
 * The promotedItem object contains details about a resource which is being promoted. This property is only present if the snippet.type is promotedItem.
 */
promotedItem?: youtube$ActivityContentDetailsPromotedItem,

/**
 * The recommendation object contains information about a recommended resource. This property is only present if the snippet.type is recommendation.
 */
recommendation?: youtube$ActivityContentDetailsRecommendation,

/**
 * The social object contains details about a social network post. This property is only present if the snippet.type is social.
 */
social?: youtube$ActivityContentDetailsSocial,

/**
 * The subscription object contains information about a channel that a user subscribed to. This property is only present if the snippet.type is
 * subscription.
 */
subscription?: youtube$ActivityContentDetailsSubscription,

/**
 * The upload object contains information about the uploaded video. This property is only present if the snippet.type is upload.
 */
upload?: youtube$ActivityContentDetailsUpload
} 

declare interface youtube$ActivityContentDetailsBulletin {

/**
 * The resourceId object contains information that identifies the resource associated with a bulletin post.
 */
resourceId?: youtube$ResourceId
} 

declare interface youtube$ActivityContentDetailsChannelItem {

/**
 * The resourceId object contains information that identifies the resource that was added to the channel.
 */
resourceId?: youtube$ResourceId
} 

declare interface youtube$ActivityContentDetailsComment {

/**
 * The resourceId object contains information that identifies the resource associated with the comment.
 */
resourceId?: youtube$ResourceId
} 

declare interface youtube$ActivityContentDetailsFavorite {

/**
 * The resourceId object contains information that identifies the resource that was marked as a favorite.
 */
resourceId?: youtube$ResourceId
} 

declare interface youtube$ActivityContentDetailsLike {

/**
 * The resourceId object contains information that identifies the rated resource.
 */
resourceId?: youtube$ResourceId
} 

declare interface youtube$ActivityContentDetailsPlaylistItem {

/**
 * The value that YouTube uses to uniquely identify the playlist.
 */
playlistId?: string,

/**
 * ID of the item within the playlist.
 */
playlistItemId?: string,

/**
 * The resourceId object contains information about the resource that was added to the playlist.
 */
resourceId?: youtube$ResourceId
} 

declare interface youtube$ActivityContentDetailsPromotedItem {

/**
 * The URL the client should fetch to request a promoted item.
 */
adTag?: string,

/**
 * The URL the client should ping to indicate that the user clicked through on this promoted item.
 */
clickTrackingUrl?: string,

/**
 * The URL the client should ping to indicate that the user was shown this promoted item.
 */
creativeViewUrl?: string,

/**
 * The type of call-to-action, a message to the user indicating action that can be taken.
 */
ctaType?: string,

/**
 * The custom call-to-action button text. If specified, it will override the default button text for the cta_type.
 */
customCtaButtonText?: string,

/**
 * The text description to accompany the promoted item.
 */
descriptionText?: string,

/**
 * The URL the client should direct the user to, if the user chooses to visit the advertiser's website.
 */
destinationUrl?: string,

/**
 * The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could
 * have been shown.
 */
forecastingUrl?: string[],

/**
 * The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item.
 */
impressionUrl?: string[],

/**
 * The ID that YouTube uses to uniquely identify the promoted video.
 */
videoId?: string
} 

declare interface youtube$ActivityContentDetailsRecommendation {

/**
 * The reason that the resource is recommended to the user.
 */
reason?: string,

/**
 * The resourceId object contains information that identifies the recommended resource.
 */
resourceId?: youtube$ResourceId,

/**
 * The seedResourceId object contains information about the resource that caused the recommendation.
 */
seedResourceId?: youtube$ResourceId
} 

declare interface youtube$ActivityContentDetailsSocial {

/**
 * The author of the social network post.
 */
author?: string,

/**
 * An image of the post's author.
 */
imageUrl?: string,

/**
 * The URL of the social network post.
 */
referenceUrl?: string,

/**
 * The resourceId object encapsulates information that identifies the resource associated with a social network post.
 */
resourceId?: youtube$ResourceId,

/**
 * The name of the social network.
 */
type?: string
} 

declare interface youtube$ActivityContentDetailsSubscription {

/**
 * The resourceId object contains information that identifies the resource that the user subscribed to.
 */
resourceId?: youtube$ResourceId
} 

declare interface youtube$ActivityContentDetailsUpload {

/**
 * The ID that YouTube uses to uniquely identify the uploaded video.
 */
videoId?: string
} 

declare interface youtube$ActivityListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of activities, or events, that match the request criteria.
 */
items?: youtube$Activity[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#activityListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$ActivitySnippet {

/**
 * The ID that YouTube uses to uniquely identify the channel associated with the activity.
 */
channelId?: string,

/**
 * Channel title for the channel responsible for this activity
 */
channelTitle?: string,

/**
 * The description of the resource primarily associated with the activity.
 */
description?: string,

/**
 * The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a
 * user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In
 * your user interface, you can avoid repetition by grouping events with the same groupId value.
 */
groupId?: string,

/**
 * The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedAt?: string,

/**
 * A map of thumbnail images associated with the resource that is primarily associated with the activity. For each object in the map, the key is the name
 * of the thumbnail image, and the value is an object that contains other information about the thumbnail.
 */
client$thumbnails?: youtube$ThumbnailDetails,

/**
 * The title of the resource primarily associated with the activity.
 */
title?: string,

/**
 * The type of activity that the resource describes.
 */
type?: string
} 

declare interface youtube$Caption {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the caption track.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#caption".
 */
kind?: string,

/**
 * The snippet object contains basic details about the caption.
 */
snippet?: youtube$CaptionSnippet
} 

declare interface youtube$CaptionListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of captions that match the request criteria.
 */
items?: youtube$Caption[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#captionListResponse".
 */
kind?: string,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$CaptionSnippet {

/**
 * The type of audio track associated with the caption track.
 */
audioTrackType?: string,

/**
 * The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed.
 */
failureReason?: string,

/**
 * Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested
 * when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true
 * to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to
 * determine when to display captions.
 */
isAutoSynced?: boolean,

/**
 * Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false.
 */
isCC?: boolean,

/**
 * Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false.
 */
isDraft?: boolean,

/**
 * Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false.
 */
isEasyReader?: boolean,

/**
 * Indicates whether the caption track uses large text for the vision-impaired. The default value is false.
 */
isLarge?: boolean,

/**
 * The language of the caption track. The property value is a BCP-47 language tag.
 */
language?: string,

/**
 * The date and time when the caption track was last updated. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
lastUpdated?: string,

/**
 * The name of the caption track. The name is intended to be visible to the user as an option during playback.
 */
name?: string,

/**
 * The caption track's status.
 */
status?: string,

/**
 * The caption track's type.
 */
trackKind?: string,

/**
 * The ID that YouTube uses to uniquely identify the video associated with the caption track.
 */
videoId?: string
} 

declare interface youtube$CdnSettings {

/**
 * The format of the video stream that you are sending to Youtube.
 */
format?: string,

/**
 * The frame rate of the inbound video data.
 */
frameRate?: string,

/**
 * The ingestionInfo object contains information that YouTube provides that you need to transmit your RTMP or HTTP stream to YouTube.
 */
ingestionInfo?: youtube$IngestionInfo,

/**
 * The method or protocol used to transmit the video stream.
 */
ingestionType?: string,

/**
 * The resolution of the inbound video data.
 */
resolution?: string
} 

declare interface youtube$Channel {

/**
 * The auditionDetails object encapsulates channel data that is relevant for YouTube Partners during the audition process.
 */
auditDetails?: youtube$ChannelAuditDetails,

/**
 * The brandingSettings object encapsulates information about the branding of the channel.
 */
brandingSettings?: youtube$ChannelBrandingSettings,

/**
 * The contentDetails object encapsulates information about the channel's content.
 */
contentDetails?: youtube$ChannelContentDetails,

/**
 * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
 */
contentOwnerDetails?: youtube$ChannelContentOwnerDetails,

/**
 * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
 */
conversionPings?: youtube$ChannelConversionPings,

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the channel.
 */
id?: string,

/**
 * The invideoPromotion object encapsulates information about promotion campaign associated with the channel.
 */
invideoPromotion?: youtube$InvideoPromotion,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#channel".
 */
kind?: string,

/**
 * Localizations for different languages
 */
localizations?: Record<string, youtube$ChannelLocalization>,

/**
 * The snippet object contains basic details about the channel, such as its title, description, and thumbnail images.
 */
snippet?: youtube$ChannelSnippet,

/**
 * The statistics object encapsulates statistics for the channel.
 */
statistics?: youtube$ChannelStatistics,

/**
 * The status object encapsulates information about the privacy status of the channel.
 */
status?: youtube$ChannelStatus,

/**
 * The topicDetails object encapsulates information about Freebase topics associated with the channel.
 */
topicDetails?: youtube$ChannelTopicDetails
} 

declare interface youtube$ChannelAuditDetails {

/**
 * Whether or not the channel respects the community guidelines.
 */
communityGuidelinesGoodStanding?: boolean,

/**
 * Whether or not the channel has any unresolved claims.
 */
contentIdClaimsGoodStanding?: boolean,

/**
 * Whether or not the channel has any copyright strikes.
 */
copyrightStrikesGoodStanding?: boolean,

/**
 * Describes the general state of the channel. This field will always show if there are any issues whatsoever with the channel. Currently this field
 * represents the result of the logical and operation over the community guidelines good standing, the copyright strikes good standing and the content ID
 * claims good standing, but this may change in the future.
 */
overallGoodStanding?: boolean
} 

declare interface youtube$ChannelBannerResource {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource".
 */
kind?: string,

/**
 * The URL of this banner image.
 */
url?: string
} 

declare interface youtube$ChannelBrandingSettings {

/**
 * Branding properties for the channel view.
 */
channel?: youtube$ChannelSettings,

/**
 * Additional experimental branding properties.
 */
hints?: youtube$PropertyValue[],

/**
 * Branding properties for branding images.
 */
image?: youtube$ImageSettings,

/**
 * Branding properties for the watch page.
 */
watch?: youtube$WatchSettings
} 

declare interface youtube$ChannelContentDetails {
relatedPlaylists?: {

/**
 * The ID of the playlist that contains the channel"s favorite videos. Use the  playlistItems.insert and  playlistItems.delete to add or remove items from
 * that list.
 */
favorites?: string,

/**
 * The ID of the playlist that contains the channel"s liked videos. Use the   playlistItems.insert and  playlistItems.delete to add or remove items from
 * that list.
 */
likes?: string,

/**
 * The ID of the playlist that contains the channel"s uploaded videos. Use the  videos.insert method to upload new videos and the videos.delete method to
 * delete previously uploaded videos.
 */
uploads?: string,

/**
 * The ID of the playlist that contains the channel"s watch history. Use the  playlistItems.insert and  playlistItems.delete to add or remove items from
 * that list.
 */
watchHistory?: string,

/**
 * The ID of the playlist that contains the channel"s watch later playlist. Use the playlistItems.insert and  playlistItems.delete to add or remove items
 * from that list.
 */
watchLater?: string
}
} 

declare interface youtube$ChannelContentOwnerDetails {

/**
 * The ID of the content owner linked to the channel.
 */
contentOwner?: string,

/**
 * The date and time of when the channel was linked to the content owner. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
timeLinked?: string
} 

declare interface youtube$ChannelConversionPing {

/**
 * Defines the context of the ping.
 */
context?: string,

/**
 * The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example
 * of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D
 * cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this
 * ping.
 */
conversionUrl?: string
} 

declare interface youtube$ChannelConversionPings {

/**
 * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying
 * the ping.
 */
pings?: youtube$ChannelConversionPing[]
} 

declare interface youtube$ChannelListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of channels that match the request criteria.
 */
items?: youtube$Channel[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#channelListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$ChannelLocalization {

/**
 * The localized strings for channel's description.
 */
description?: string,

/**
 * The localized strings for channel's title.
 */
title?: string
} 

declare interface youtube$ChannelProfileDetails {

/**
 * The YouTube channel ID.
 */
channelId?: string,

/**
 * The channel's URL.
 */
channelUrl?: string,

/**
 * The channel's display name.
 */
displayName?: string,

/**
 * The channels's avatar URL.
 */
profileImageUrl?: string
} 

declare interface youtube$ChannelSection {

/**
 * The contentDetails object contains details about the channel section content, such as a list of playlists or channels featured in the section.
 */
contentDetails?: youtube$ChannelSectionContentDetails,

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the channel section.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection".
 */
kind?: string,

/**
 * Localizations for different languages
 */
localizations?: Record<string, youtube$ChannelSectionLocalization>,

/**
 * The snippet object contains basic details about the channel section, such as its type, style and title.
 */
snippet?: youtube$ChannelSectionSnippet,

/**
 * The targeting object contains basic targeting settings about the channel section.
 */
targeting?: youtube$ChannelSectionTargeting
} 

declare interface youtube$ChannelSectionContentDetails {

/**
 * The channel ids for type multiple_channels.
 */
client$channels?: string[],

/**
 * The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed.
 */
client$playlists?: string[]
} 

declare interface youtube$ChannelSectionListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of ChannelSections that match the request criteria.
 */
items?: youtube$ChannelSection[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#channelSectionListResponse".
 */
kind?: string,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$ChannelSectionLocalization {

/**
 * The localized strings for channel section's title.
 */
title?: string
} 

declare interface youtube$ChannelSectionSnippet {

/**
 * The ID that YouTube uses to uniquely identify the channel that published the channel section.
 */
channelId?: string,

/**
 * The language of the channel section's default title and description.
 */
defaultLanguage?: string,

/**
 * Localized title, read-only.
 */
localized?: youtube$ChannelSectionLocalization,

/**
 * The position of the channel section in the channel.
 */
position?: number,

/**
 * The style of the channel section.
 */
style?: string,

/**
 * The channel section's title for multiple_playlists and multiple_channels.
 */
title?: string,

/**
 * The type of the channel section.
 */
type?: string
} 

declare interface youtube$ChannelSectionTargeting {

/**
 * The country the channel section is targeting.
 */
countries?: string[],

/**
 * The language the channel section is targeting.
 */
languages?: string[],

/**
 * The region the channel section is targeting.
 */
regions?: string[]
} 

declare interface youtube$ChannelSettings {

/**
 * The country of the channel.
 */
country?: string,
defaultLanguage?: string,

/**
 * Which content tab users should see when viewing the channel.
 */
defaultTab?: string,

/**
 * Specifies the channel description.
 */
description?: string,

/**
 * Title for the featured channels tab.
 */
featuredChannelsTitle?: string,

/**
 * The list of featured channels.
 */
featuredChannelsUrls?: string[],

/**
 * Lists keywords associated with the channel, comma-separated.
 */
keywords?: string,

/**
 * Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible.
 */
moderateComments?: boolean,

/**
 * A prominent color that can be rendered on this channel page.
 */
profileColor?: string,

/**
 * Whether the tab to browse the videos should be displayed.
 */
showBrowseView?: boolean,

/**
 * Whether related channels should be proposed.
 */
showRelatedChannels?: boolean,

/**
 * Specifies the channel title.
 */
title?: string,

/**
 * The ID for a Google Analytics account to track and measure traffic to the channels.
 */
trackingAnalyticsAccountId?: string,

/**
 * The trailer of the channel, for users that are not subscribers.
 */
unsubscribedTrailer?: string
} 

declare interface youtube$ChannelSnippet {

/**
 * The country of the channel.
 */
country?: string,

/**
 * The custom url of the channel.
 */
customUrl?: string,

/**
 * The language of the channel's default title and description.
 */
defaultLanguage?: string,

/**
 * The description of the channel.
 */
description?: string,

/**
 * Localized title and description, read-only.
 */
localized?: youtube$ChannelLocalization,

/**
 * The date and time that the channel was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedAt?: string,

/**
 * A map of thumbnail images associated with the channel. For each object in the map, the key is the name of the thumbnail image, and the value is an
 * object that contains other information about the thumbnail.
 */
client$thumbnails?: youtube$ThumbnailDetails,

/**
 * The channel's title.
 */
title?: string
} 

declare interface youtube$ChannelStatistics {

/**
 * The number of comments for the channel.
 */
commentCount?: string,

/**
 * Whether or not the number of subscribers is shown for this user.
 */
hiddenSubscriberCount?: boolean,

/**
 * The number of subscribers that the channel has.
 */
subscriberCount?: string,

/**
 * The number of videos uploaded to the channel.
 */
videoCount?: string,

/**
 * The number of times the channel has been viewed.
 */
viewCount?: string
} 

declare interface youtube$ChannelStatus {

/**
 * If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity.
 */
isLinked?: boolean,

/**
 * The long uploads status of this channel. See
 */
longUploadsStatus?: string,

/**
 * Privacy status of the channel.
 */
privacyStatus?: string
} 

declare interface youtube$ChannelTopicDetails {

/**
 * A list of Wikipedia URLs that describe the channel's content.
 */
topicCategories?: string[],

/**
 * A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.
 */
topicIds?: string[]
} 

declare interface youtube$Comment {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the comment.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#comment".
 */
kind?: string,

/**
 * The snippet object contains basic details about the comment.
 */
snippet?: youtube$CommentSnippet
} 

declare interface youtube$CommentListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of comments that match the request criteria.
 */
items?: youtube$Comment[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#commentListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$CommentSnippet {

/**
 * The id of the author's YouTube channel, if any.
 */
authorChannelId?: any,

/**
 * Link to the author's YouTube channel, if any.
 */
authorChannelUrl?: string,

/**
 * The name of the user who posted the comment.
 */
authorDisplayName?: string,

/**
 * The URL for the avatar of the user who posted the comment.
 */
authorProfileImageUrl?: string,

/**
 * Whether the current viewer can rate this comment.
 */
canRate?: boolean,

/**
 * The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video comment it's
 * the video's channel.
 */
channelId?: string,

/**
 * The total number of likes this comment has received.
 */
likeCount?: number,

/**
 * The comment's moderation status. Will not be set if the comments were requested through the id filter.
 */
moderationStatus?: string,

/**
 * The unique id of the parent comment, only set for replies.
 */
parentId?: string,

/**
 * The date and time when the comment was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedAt?: string,

/**
 * The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from
 * the text originally posted in that it may replace video links with video titles etc.
 */
textDisplay?: string,

/**
 * The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which
 * is only guaranteed if the viewer is the comment's author.
 */
textOriginal?: string,

/**
 * The date and time when was last updated . The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
updatedAt?: string,

/**
 * The ID of the video the comment refers to, if any.
 */
videoId?: string,

/**
 * The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This
 * may change in the future.
 */
viewerRating?: string
} 

declare interface youtube$CommentThread {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the comment thread.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#commentThread".
 */
kind?: string,

/**
 * The replies object contains a limited number of replies (if any) to the top level comment found in the snippet.
 */
replies?: youtube$CommentThreadReplies,

/**
 * The snippet object contains basic details about the comment thread and also the top level comment.
 */
snippet?: youtube$CommentThreadSnippet
} 

declare interface youtube$CommentThreadListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of comment threads that match the request criteria.
 */
items?: youtube$CommentThread[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#commentThreadListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$CommentThreadReplies {

/**
 * A limited number of replies. Unless the number of replies returned equals total_reply_count in the snippet the returned replies are only a subset of
 * the total number of replies.
 */
client$comments?: youtube$Comment[]
} 

declare interface youtube$CommentThreadSnippet {

/**
 * Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field.
 */
canReply?: boolean,

/**
 * The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If video_id isn't set the comments refer
 * to the channel itself.
 */
channelId?: string,

/**
 * Whether the thread (and therefore all its comments) is visible to all YouTube users.
 */
isPublic?: boolean,

/**
 * The top level comment of this thread.
 */
topLevelComment?: youtube$Comment,

/**
 * The total number of replies (not including the top level comment).
 */
totalReplyCount?: number,

/**
 * The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment.
 */
videoId?: string
} 

declare interface youtube$ContentRating {

/**
 * The video's Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify
 * children's television programming.
 */
acbRating?: string,

/**
 * The video's rating from Italy's Autorità per le Garanzie nelle Comunicazioni (AGCOM).
 */
agcomRating?: string,

/**
 * The video's Anatel (Asociación Nacional de Televisión) rating for Chilean television.
 */
anatelRating?: string,

/**
 * The video's British Board of Film Classification (BBFC) rating.
 */
bbfcRating?: string,

/**
 * The video's rating from Thailand's Board of Film and Video Censors.
 */
bfvcRating?: string,

/**
 * The video's rating from the Austrian Board of Media Classification (Bundesministerium für Unterricht, Kunst und Kultur).
 */
bmukkRating?: string,

/**
 * Rating system for Canadian TV - Canadian TV Classification System The video's rating from the Canadian Radio-Television and Telecommunications
 * Commission (CRTC) for Canadian English-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.
 */
catvRating?: string,

/**
 * The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more
 * information, see the Canadian Broadcast Standards Council website.
 */
catvfrRating?: string,

/**
 * The video's Central Board of Film Certification (CBFC - India) rating.
 */
cbfcRating?: string,

/**
 * The video's Consejo de Calificación Cinematográfica (Chile) rating.
 */
cccRating?: string,

/**
 * The video's rating from Portugal's Comissão de Classificação de Espect´culos.
 */
cceRating?: string,

/**
 * The video's rating in Switzerland.
 */
chfilmRating?: string,

/**
 * The video's Canadian Home Video Rating System (CHVRS) rating.
 */
chvrsRating?: string,

/**
 * The video's rating from the Commission de Contrôle des Films (Belgium).
 */
cicfRating?: string,

/**
 * The video's rating from Romania's CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA).
 */
cnaRating?: string,

/**
 * Rating system in France - Commission de classification cinematographique
 */
cncRating?: string,

/**
 * The video's rating from France's Conseil supérieur de l?audiovisuel, which rates broadcast content.
 */
csaRating?: string,

/**
 * The video's rating from Luxembourg's Commission de surveillance de la classification des films (CSCF).
 */
cscfRating?: string,

/**
 * The video's rating in the Czech Republic.
 */
czfilmRating?: string,

/**
 * The video's Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating.
 */
djctqRating?: string,

/**
 * Reasons that explain why the video received its DJCQT (Brazil) rating.
 */
djctqRatingReasons?: string[],

/**
 * Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism
 */
ecbmctRating?: string,

/**
 * The video's rating in Estonia.
 */
eefilmRating?: string,

/**
 * The video's rating in Egypt.
 */
egfilmRating?: string,

/**
 * The video's Eirin (映倫) rating. Eirin is the Japanese rating system.
 */
eirinRating?: string,

/**
 * The video's rating from Malaysia's Film Censorship Board.
 */
fcbmRating?: string,

/**
 * The video's rating from Hong Kong's Office for Film, Newspaper and Article Administration.
 */
fcoRating?: string,

/**
 * This property has been deprecated. Use the contentDetails.contentRating.cncRating instead.
 */
fmocRating?: string,

/**
 * The video's rating from South Africa's Film and Publication Board.
 */
fpbRating?: string,

/**
 * Reasons that explain why the video received its FPB (South Africa) rating.
 */
fpbRatingReasons?: string[],

/**
 * The video's Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating.
 */
fskRating?: string,

/**
 * The video's rating in Greece.
 */
grfilmRating?: string,

/**
 * The video's Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating.
 */
icaaRating?: string,

/**
 * The video's Irish Film Classification Office (IFCO - Ireland) rating. See the IFCO website for more information.
 */
ifcoRating?: string,

/**
 * The video's rating in Israel.
 */
ilfilmRating?: string,

/**
 * The video's INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating.
 */
incaaRating?: string,

/**
 * The video's rating from the Kenya Film Classification Board.
 */
kfcbRating?: string,

/**
 * voor de Classificatie van Audiovisuele Media (Netherlands).
 */
kijkwijzerRating?: string,

/**
 * The video's Korea Media Rating Board (영상물등급위원회) rating. The KMRB rates videos in South Korea.
 */
kmrbRating?: string,

/**
 * The video's rating from Indonesia's Lembaga Sensor Film.
 */
lsfRating?: string,

/**
 * The video's rating from Malta's Film Age-Classification Board.
 */
mccaaRating?: string,

/**
 * The video's rating from the Danish Film Institute's (Det Danske Filminstitut) Media Council for Children and Young People.
 */
mccypRating?: string,

/**
 * The video's rating system for Vietnam - MCST
 */
mcstRating?: string,

/**
 * The video's rating from Singapore's Media Development Authority (MDA) and, specifically, it's Board of Film Censors (BFC).
 */
mdaRating?: string,

/**
 * The video's rating from Medietilsynet, the Norwegian Media Authority.
 */
medietilsynetRating?: string,

/**
 * The video's rating from Finland's Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute).
 */
mekuRating?: string,

/**
 * The rating system for MENA countries, a clone of MPAA. It is needed to
 */
menaMpaaRating?: string,

/**
 * The video's rating from the Ministero dei Beni e delle Attività Culturali e del Turismo (Italy).
 */
mibacRating?: string,

/**
 * The video's Ministerio de Cultura (Colombia) rating.
 */
mocRating?: string,

/**
 * The video's rating from Taiwan's Ministry of Culture (文化部).
 */
moctwRating?: string,

/**
 * The video's Motion Picture Association of America (MPAA) rating.
 */
mpaaRating?: string,

/**
 * The rating system for trailer, DVD, and Ad in the US. See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html.
 */
mpaatRating?: string,

/**
 * The video's rating from the Movie and Television Review and Classification Board (Philippines).
 */
mtrcbRating?: string,

/**
 * The video's rating from the Maldives National Bureau of Classification.
 */
nbcRating?: string,

/**
 * The video's rating in Poland.
 */
nbcplRating?: string,

/**
 * The video's rating from the Bulgarian National Film Center.
 */
nfrcRating?: string,

/**
 * The video's rating from Nigeria's National Film and Video Censors Board.
 */
nfvcbRating?: string,

/**
 * The video's rating from the Nacionãlais Kino centrs (National Film Centre of Latvia).
 */
nkclvRating?: string,

/**
 * The video's Office of Film and Literature Classification (OFLC - New Zealand) rating.
 */
oflcRating?: string,

/**
 * The video's rating in Peru.
 */
pefilmRating?: string,

/**
 * The video's rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film.
 */
rcnofRating?: string,

/**
 * The video's rating in Venezuela.
 */
resorteviolenciaRating?: string,

/**
 * The video's General Directorate of Radio, Television and Cinematography (Mexico) rating.
 */
rtcRating?: string,

/**
 * The video's rating from Ireland's Raidió Teilifís Éireann.
 */
rteRating?: string,

/**
 * The video's National Film Registry of the Russian Federation (MKRF - Russia) rating.
 */
russiaRating?: string,

/**
 * The video's rating in Slovakia.
 */
skfilmRating?: string,

/**
 * The video's rating in Iceland.
 */
smaisRating?: string,

/**
 * The video's rating from Statens medieråd (Sweden's National Media Council).
 */
smsaRating?: string,

/**
 * The video's TV Parental Guidelines (TVPG) rating.
 */
tvpgRating?: string,

/**
 * A rating that YouTube uses to identify age-restricted content.
 */
ytRating?: string
} 

declare interface youtube$FanFundingEvent {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube assigns to uniquely identify the fan funding event.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#fanFundingEvent".
 */
kind?: string,

/**
 * The snippet object contains basic details about the fan funding event.
 */
snippet?: youtube$FanFundingEventSnippet
} 

declare interface youtube$FanFundingEventListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of fan funding events that match the request criteria.
 */
items?: youtube$FanFundingEvent[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#fanFundingEventListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$FanFundingEventSnippet {

/**
 * The amount of funding in micros of fund_currency. e.g., 1 is represented
 */
amountMicros?: string,

/**
 * Channel id where the funding event occurred.
 */
channelId?: string,

/**
 * The text contents of the comment left by the user.
 */
commentText?: string,

/**
 * The date and time when the funding occurred. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
createdAt?: string,

/**
 * The currency in which the fund was made. ISO 4217.
 */
currency?: string,

/**
 * A rendered string that displays the fund amount and currency (e.g., "$1.00"). The string is rendered for the given language.
 */
displayString?: string,

/**
 * Details about the supporter. Only filled if the event was made public by the user.
 */
supporterDetails?: youtube$ChannelProfileDetails
} 

declare interface youtube$GeoPoint {

/**
 * Altitude above the reference ellipsoid, in meters.
 */
altitude?: number,

/**
 * Latitude in degrees.
 */
latitude?: number,

/**
 * Longitude in degrees.
 */
longitude?: number
} 

declare interface youtube$GuideCategory {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the guide category.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#guideCategory".
 */
kind?: string,

/**
 * The snippet object contains basic details about the category, such as its title.
 */
snippet?: youtube$GuideCategorySnippet
} 

declare interface youtube$GuideCategoryListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of categories that can be associated with YouTube channels. In this map, the category ID is the map key, and its value is the corresponding
 * guideCategory resource.
 */
items?: youtube$GuideCategory[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#guideCategoryListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$GuideCategorySnippet {
channelId?: string,

/**
 * Description of the guide category.
 */
title?: string
} 

declare interface youtube$I18nLanguage {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the i18n language.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguage".
 */
kind?: string,

/**
 * The snippet object contains basic details about the i18n language, such as language code and human-readable name.
 */
snippet?: youtube$I18nLanguageSnippet
} 

declare interface youtube$I18nLanguageListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource.
 */
items?: youtube$I18nLanguage[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguageListResponse".
 */
kind?: string,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$I18nLanguageSnippet {

/**
 * A short BCP-47 code that uniquely identifies a language.
 */
hl?: string,

/**
 * The human-readable name of the language in the language itself.
 */
name?: string
} 

declare interface youtube$I18nRegion {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the i18n region.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegion".
 */
kind?: string,

/**
 * The snippet object contains basic details about the i18n region, such as region code and human-readable name.
 */
snippet?: youtube$I18nRegionSnippet
} 

declare interface youtube$I18nRegionListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource.
 */
items?: youtube$I18nRegion[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegionListResponse".
 */
kind?: string,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$I18nRegionSnippet {

/**
 * The region code as a 2-letter ISO country code.
 */
gl?: string,

/**
 * The human-readable name of the region.
 */
name?: string
} 

declare interface youtube$ImageSettings {

/**
 * The URL for the background image shown on the video watch page. The image should be 1200px by 615px, with a maximum file size of 128k.
 */
backgroundImageUrl?: youtube$LocalizedProperty,

/**
 * This is used only in update requests; if it's set, we use this URL to generate all of the above banner URLs.
 */
bannerExternalUrl?: string,

/**
 * Banner image. Desktop size (1060x175).
 */
bannerImageUrl?: string,

/**
 * Banner image. Mobile size high resolution (1440x395).
 */
bannerMobileExtraHdImageUrl?: string,

/**
 * Banner image. Mobile size high resolution (1280x360).
 */
bannerMobileHdImageUrl?: string,

/**
 * Banner image. Mobile size (640x175).
 */
bannerMobileImageUrl?: string,

/**
 * Banner image. Mobile size low resolution (320x88).
 */
bannerMobileLowImageUrl?: string,

/**
 * Banner image. Mobile size medium/high resolution (960x263).
 */
bannerMobileMediumHdImageUrl?: string,

/**
 * Banner image. Tablet size extra high resolution (2560x424).
 */
bannerTabletExtraHdImageUrl?: string,

/**
 * Banner image. Tablet size high resolution (2276x377).
 */
bannerTabletHdImageUrl?: string,

/**
 * Banner image. Tablet size (1707x283).
 */
bannerTabletImageUrl?: string,

/**
 * Banner image. Tablet size low resolution (1138x188).
 */
bannerTabletLowImageUrl?: string,

/**
 * Banner image. TV size high resolution (1920x1080).
 */
bannerTvHighImageUrl?: string,

/**
 * Banner image. TV size extra high resolution (2120x1192).
 */
bannerTvImageUrl?: string,

/**
 * Banner image. TV size low resolution (854x480).
 */
bannerTvLowImageUrl?: string,

/**
 * Banner image. TV size medium resolution (1280x720).
 */
bannerTvMediumImageUrl?: string,

/**
 * The image map script for the large banner image.
 */
largeBrandedBannerImageImapScript?: youtube$LocalizedProperty,

/**
 * The URL for the 854px by 70px image that appears below the video player in the expanded video view of the video watch page.
 */
largeBrandedBannerImageUrl?: youtube$LocalizedProperty,

/**
 * The image map script for the small banner image.
 */
smallBrandedBannerImageImapScript?: youtube$LocalizedProperty,

/**
 * The URL for the 640px by 70px banner image that appears below the video player in the default view of the video watch page.
 */
smallBrandedBannerImageUrl?: youtube$LocalizedProperty,

/**
 * The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages.
 */
trackingImageUrl?: string,

/**
 * The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot
 * exceed 170 pixels.
 */
watchIconImageUrl?: string
} 

declare interface youtube$IngestionInfo {

/**
 * The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are
 * sending to the ingestionAddress to this URL.
 */
backupIngestionAddress?: string,

/**
 * The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL.
 * 
 * Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may
 * need to concatenate them in the following format:
 * 
 * STREAM_URL/STREAM_NAME
 */
ingestionAddress?: string,

/**
 * The HTTP or RTMP stream name that YouTube assigns to the video stream.
 */
streamName?: string
} 

declare interface youtube$InvideoBranding {
imageBytes?: string,
imageUrl?: string,
position?: youtube$InvideoPosition,
targetChannelId?: string,
timing?: youtube$InvideoTiming
} 

declare interface youtube$InvideoPosition {

/**
 * Describes in which corner of the video the visual widget will appear.
 */
cornerPosition?: string,

/**
 * Defines the position type.
 */
type?: string
} 

declare interface youtube$InvideoPromotion {

/**
 * The default temporal position within the video where the promoted item will be displayed. Can be overriden by more specific timing in the item.
 */
defaultTiming?: youtube$InvideoTiming,

/**
 * List of promoted items in decreasing priority.
 */
items?: youtube$PromotedItem[],

/**
 * The spatial position within the video where the promoted item will be displayed.
 */
position?: youtube$InvideoPosition,

/**
 * Indicates whether the channel's promotional campaign uses "smart timing." This feature attempts to show promotions at a point in the video when they
 * are more likely to be clicked and less likely to disrupt the viewing experience. This feature also picks up a single promotion to show on each video.
 */
useSmartTiming?: boolean
} 

declare interface youtube$InvideoTiming {

/**
 * Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default.
 */
durationMs?: string,

/**
 * Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from
 * the start or from the end of the video, expressed in milliseconds.
 */
offsetMs?: string,

/**
 * Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is
 * offsetFromEnd, then the offsetMs field represents an offset from the end of the video.
 */
type?: string
} 

declare interface youtube$LanguageTag {
value?: string
} 

declare interface youtube$LiveBroadcast {

/**
 * The contentDetails object contains information about the event's video content, such as whether the content can be shown in an embedded video player or
 * if it will be archived and therefore available for viewing after the event has concluded.
 */
contentDetails?: youtube$LiveBroadcastContentDetails,

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube assigns to uniquely identify the broadcast.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast".
 */
kind?: string,

/**
 * The snippet object contains basic details about the event, including its title, description, start time, and end time.
 */
snippet?: youtube$LiveBroadcastSnippet,

/**
 * The statistics object contains info about the event's current stats. These include concurrent viewers and total chat count. Statistics can change (in
 * either direction) during the lifetime of an event. Statistics are only returned while the event is live.
 */
statistics?: youtube$LiveBroadcastStatistics,

/**
 * The status object contains information about the event's status.
 */
status?: youtube$LiveBroadcastStatus
} 

declare interface youtube$LiveBroadcastContentDetails {

/**
 * This value uniquely identifies the live stream bound to the broadcast.
 */
boundStreamId?: string,

/**
 * The date and time that the live stream referenced by boundStreamId was last updated.
 */
boundStreamLastUpdateTimeMs?: string,
closedCaptionsType?: string,

/**
 * This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through
 * the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to
 * CLOSED_CAPTIONS_HTTP_POST.
 */
enableClosedCaptions?: boolean,

/**
 * This setting indicates whether YouTube should enable content encryption for the broadcast.
 */
enableContentEncryption?: boolean,

/**
 * This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback
 * experience by pausing, rewinding, or fast forwarding content. The default value for this property is true.
 * 
 * 
 * 
 * Important: You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately
 * after the broadcast ends.
 */
enableDvr?: boolean,

/**
 * This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive
 * property), this setting will also apply to the archived video.
 */
enableEmbed?: boolean,

/**
 * Indicates whether this broadcast has low latency enabled.
 */
enableLowLatency?: boolean,

/**
 * If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match
 * enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted.
 */
latencyPreference?: string,
mesh?: string,

/**
 * The monitorStream object contains information about the monitor stream, which the broadcaster can use to review the event content before the broadcast
 * stream is shown publicly.
 */
monitorStream?: youtube$MonitorStreamInfo,

/**
 * The projection format of this broadcast. This defaults to rectangular.
 */
projection?: string,

/**
 * Automatically start recording after the event goes live. The default value for this property is true.
 * 
 * 
 * 
 * Important: You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If
 * you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived
 * video will be available for playback.
 */
recordFromStart?: boolean,

/**
 * This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After
 * updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and
 * make your broadcast stream visible to viewers.
 */
startWithSlate?: boolean
} 

declare interface youtube$LiveBroadcastListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of broadcasts that match the request criteria.
 */
items?: youtube$LiveBroadcast[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcastListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$LiveBroadcastSnippet {

/**
 * The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete. The value is specified
 * in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
actualEndTime?: string,

/**
 * The date and time that the broadcast actually started. This information is only available once the broadcast's state is live. The value is specified in
 * ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
actualStartTime?: string,

/**
 * The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast.
 */
channelId?: string,

/**
 * The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the
 * corresponding video resource.
 */
description?: string,
isDefaultBroadcast?: boolean,

/**
 * The id of the live chat for this broadcast.
 */
liveChatId?: string,

/**
 * The date and time that the broadcast was added to YouTube's live broadcast schedule. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ)
 * format.
 */
publishedAt?: string,

/**
 * The date and time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
scheduledEndTime?: string,

/**
 * The date and time that the broadcast is scheduled to start. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
scheduledStartTime?: string,

/**
 * A map of thumbnail images associated with the broadcast. For each nested object in this object, the key is the name of the thumbnail image, and the
 * value is an object that contains other information about the thumbnail.
 */
client$thumbnails?: youtube$ThumbnailDetails,

/**
 * The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by
 * setting the title field of the corresponding video resource.
 */
title?: string
} 

declare interface youtube$LiveBroadcastStatistics {

/**
 * The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the
 * broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the
 * broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
 */
concurrentViewers?: string,

/**
 * The total number of live chat messages currently on the broadcast. The property and its value will be present if the broadcast is public, has the live
 * chat feature enabled, and has at least one message. Note that this field will not be filled after the broadcast ends. So this property would not
 * identify the number of chat messages for an archived video of a completed live broadcast.
 */
totalChatCount?: string
} 

declare interface youtube$LiveBroadcastStatus {

/**
 * The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method.
 */
lifeCycleStatus?: string,

/**
 * Priority of the live broadcast event (internal state).
 */
liveBroadcastPriority?: string,

/**
 * The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported
 * for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video
 * resource.
 */
privacyStatus?: string,

/**
 * The broadcast's recording status.
 */
recordingStatus?: string
} 

declare interface youtube$LiveChatBan {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube assigns to uniquely identify the ban.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatBan".
 */
kind?: string,

/**
 * The snippet object contains basic details about the ban.
 */
snippet?: youtube$LiveChatBanSnippet
} 

declare interface youtube$LiveChatBanSnippet {

/**
 * The duration of a ban, only filled if the ban has type TEMPORARY.
 */
banDurationSeconds?: string,
bannedUserDetails?: youtube$ChannelProfileDetails,

/**
 * The chat this ban is pertinent to.
 */
liveChatId?: string,

/**
 * The type of ban.
 */
type?: string
} 

declare interface youtube$LiveChatFanFundingEventDetails {

/**
 * A rendered string that displays the fund amount and currency to the user.
 */
amountDisplayString?: string,

/**
 * The amount of the fund.
 */
amountMicros?: string,

/**
 * The currency in which the fund was made.
 */
currency?: string,

/**
 * The comment added by the user to this fan funding event.
 */
userComment?: string
} 

declare interface youtube$LiveChatMessage {

/**
 * The authorDetails object contains basic details about the user that posted this message.
 */
authorDetails?: youtube$LiveChatMessageAuthorDetails,

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube assigns to uniquely identify the message.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessage".
 */
kind?: string,

/**
 * The snippet object contains basic details about the message.
 */
snippet?: youtube$LiveChatMessageSnippet
} 

declare interface youtube$LiveChatMessageAuthorDetails {

/**
 * The YouTube channel ID.
 */
channelId?: string,

/**
 * The channel's URL.
 */
channelUrl?: string,

/**
 * The channel's display name.
 */
displayName?: string,

/**
 * Whether the author is a moderator of the live chat.
 */
isChatModerator?: boolean,

/**
 * Whether the author is the owner of the live chat.
 */
isChatOwner?: boolean,

/**
 * Whether the author is a sponsor of the live chat.
 */
isChatSponsor?: boolean,

/**
 * Whether the author's identity has been verified by YouTube.
 */
isVerified?: boolean,

/**
 * The channels's avatar URL.
 */
profileImageUrl?: string
} 

declare interface youtube$LiveChatMessageDeletedDetails {
deletedMessageId?: string
} 

declare interface youtube$LiveChatMessageListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of live chat messages.
 */
items?: youtube$LiveChatMessage[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessageListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,

/**
 * The date and time when the underlying stream went offline. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
offlineAt?: string,
pageInfo?: youtube$PageInfo,

/**
 * The amount of time the client should wait before polling again.
 */
pollingIntervalMillis?: number,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$LiveChatMessageRetractedDetails {
retractedMessageId?: string
} 

declare interface youtube$LiveChatMessageSnippet {

/**
 * The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent -
 * the user that funded the broadcast newSponsorEvent - the user that just became a sponsor messageDeletedEvent - the moderator that took the action
 * messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that
 * made the purchase
 */
authorChannelId?: string,

/**
 * Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE
 * and CHAT_ENDED_EVENT are silent.
 */
displayMessage?: string,

/**
 * Details about the funding event, this is only set if the type is 'fanFundingEvent'.
 */
fanFundingEventDetails?: youtube$LiveChatFanFundingEventDetails,

/**
 * Whether the message has display content that should be displayed to users.
 */
hasDisplayContent?: boolean,
liveChatId?: string,
messageDeletedDetails?: youtube$LiveChatMessageDeletedDetails,
messageRetractedDetails?: youtube$LiveChatMessageRetractedDetails,
pollClosedDetails?: youtube$LiveChatPollClosedDetails,
pollEditedDetails?: youtube$LiveChatPollEditedDetails,
pollOpenedDetails?: youtube$LiveChatPollOpenedDetails,
pollVotedDetails?: youtube$LiveChatPollVotedDetails,

/**
 * The date and time when the message was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedAt?: string,

/**
 * Details about the Super Chat event, this is only set if the type is 'superChatEvent'.
 */
superChatDetails?: youtube$LiveChatSuperChatDetails,

/**
 * Details about the text message, this is only set if the type is 'textMessageEvent'.
 */
textMessageDetails?: youtube$LiveChatTextMessageDetails,

/**
 * The type of message, this will always be present, it determines the contents of the message as well as which fields will be present.
 */
type?: string,
userBannedDetails?: youtube$LiveChatUserBannedMessageDetails
} 

declare interface youtube$LiveChatModerator {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube assigns to uniquely identify the moderator.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModerator".
 */
kind?: string,

/**
 * The snippet object contains basic details about the moderator.
 */
snippet?: youtube$LiveChatModeratorSnippet
} 

declare interface youtube$LiveChatModeratorListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of moderators that match the request criteria.
 */
items?: youtube$LiveChatModerator[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModeratorListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$LiveChatModeratorSnippet {

/**
 * The ID of the live chat this moderator can act on.
 */
liveChatId?: string,

/**
 * Details about the moderator.
 */
moderatorDetails?: youtube$ChannelProfileDetails
} 

declare interface youtube$LiveChatPollClosedDetails {

/**
 * The id of the poll that was closed.
 */
pollId?: string
} 

declare interface youtube$LiveChatPollEditedDetails {
id?: string,
items?: youtube$LiveChatPollItem[],
prompt?: string
} 

declare interface youtube$LiveChatPollItem {

/**
 * Plain text description of the item.
 */
description?: string,
itemId?: string
} 

declare interface youtube$LiveChatPollOpenedDetails {
id?: string,
items?: youtube$LiveChatPollItem[],
prompt?: string
} 

declare interface youtube$LiveChatPollVotedDetails {

/**
 * The poll item the user chose.
 */
itemId?: string,

/**
 * The poll the user voted on.
 */
pollId?: string
} 

declare interface youtube$LiveChatSuperChatDetails {

/**
 * A rendered string that displays the fund amount and currency to the user.
 */
amountDisplayString?: string,

/**
 * The amount purchased by the user, in micros (1,750,000 micros = 1.75).
 */
amountMicros?: string,

/**
 * The currency in which the purchase was made.
 */
currency?: string,

/**
 * The tier in which the amount belongs to. Lower amounts belong to lower tiers. Starts at 1.
 */
tier?: number,

/**
 * The comment added by the user to this Super Chat event.
 */
userComment?: string
} 

declare interface youtube$LiveChatTextMessageDetails {

/**
 * The user's message.
 */
messageText?: string
} 

declare interface youtube$LiveChatUserBannedMessageDetails {

/**
 * The duration of the ban. This property is only present if the banType is temporary.
 */
banDurationSeconds?: string,

/**
 * The type of ban.
 */
banType?: string,

/**
 * The details of the user that was banned.
 */
bannedUserDetails?: youtube$ChannelProfileDetails
} 

declare interface youtube$LiveStream {

/**
 * The cdn object defines the live stream's content delivery network (CDN) settings. These settings provide details about the manner in which you stream
 * your content to YouTube.
 */
cdn?: youtube$CdnSettings,

/**
 * The content_details object contains information about the stream, including the closed captions ingestion URL.
 */
contentDetails?: youtube$LiveStreamContentDetails,

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube assigns to uniquely identify the stream.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream".
 */
kind?: string,

/**
 * The snippet object contains basic details about the stream, including its channel, title, and description.
 */
snippet?: youtube$LiveStreamSnippet,

/**
 * The status object contains information about live stream's status.
 */
status?: youtube$LiveStreamStatus
} 

declare interface youtube$LiveStreamConfigurationIssue {

/**
 * The long-form description of the issue and how to resolve it.
 */
description?: string,

/**
 * The short-form reason for this issue.
 */
reason?: string,

/**
 * How severe this issue is to the stream.
 */
severity?: string,

/**
 * The kind of error happening.
 */
type?: string
} 

declare interface youtube$LiveStreamContentDetails {

/**
 * The ingestion URL where the closed captions of this stream are sent.
 */
closedCaptionsIngestionUrl?: string,

/**
 * Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same
 * stream for many different broadcasts if those broadcasts occur at different times.
 * 
 * If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams
 * differ from reusable streams in the following ways:
 * - A non-reusable stream can only be bound to one broadcast.
 * - A non-reusable stream might be deleted by an automated process after the broadcast ends.
 * - The  liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that
 * method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream.
 */
isReusable?: boolean
} 

declare interface youtube$LiveStreamHealthStatus {

/**
 * The configurations issues on this stream
 */
configurationIssues?: youtube$LiveStreamConfigurationIssue[],

/**
 * The last time this status was updated (in seconds)
 */
lastUpdateTimeSeconds?: string,

/**
 * The status code of this stream
 */
status?: string
} 

declare interface youtube$LiveStreamListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of live streams that match the request criteria.
 */
items?: youtube$LiveStream[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#liveStreamListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$LiveStreamSnippet {

/**
 * The ID that YouTube uses to uniquely identify the channel that is transmitting the stream.
 */
channelId?: string,

/**
 * The stream's description. The value cannot be longer than 10000 characters.
 */
description?: string,
isDefaultStream?: boolean,

/**
 * The date and time that the stream was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedAt?: string,

/**
 * The stream's title. The value must be between 1 and 128 characters long.
 */
title?: string
} 

declare interface youtube$LiveStreamStatus {

/**
 * The health status of the stream.
 */
healthStatus?: youtube$LiveStreamHealthStatus,
streamStatus?: string
} 

declare interface youtube$LocalizedProperty {
default?: string,

/**
 * The language of the default property.
 */
defaultLanguage?: youtube$LanguageTag,
localized?: youtube$LocalizedString[]
} 

declare interface youtube$LocalizedString {
language?: string,
value?: string
} 

declare interface youtube$MonitorStreamInfo {

/**
 * If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.
 */
broadcastStreamDelayMs?: number,

/**
 * HTML code that embeds a player that plays the monitor stream.
 */
embedHtml?: string,

/**
 * This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event
 * content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to
 * identify the optimal times to insert cuepoints.
 * 
 * You need to set this value to true if you intend to have a broadcast delay for your event.
 * 
 * Note: This property cannot be updated once the broadcast is in the testing or live state.
 */
enableMonitorStream?: boolean
} 

declare interface youtube$PageInfo {

/**
 * The number of results included in the API response.
 */
resultsPerPage?: number,

/**
 * The total number of results in the result set.
 */
totalResults?: number
} 

declare interface youtube$Playlist {

/**
 * The contentDetails object contains information like video count.
 */
contentDetails?: youtube$PlaylistContentDetails,

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the playlist.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#playlist".
 */
kind?: string,

/**
 * Localizations for different languages
 */
localizations?: Record<string, youtube$PlaylistLocalization>,

/**
 * The player object contains information that you would use to play the playlist in an embedded player.
 */
player?: youtube$PlaylistPlayer,

/**
 * The snippet object contains basic details about the playlist, such as its title and description.
 */
snippet?: youtube$PlaylistSnippet,

/**
 * The status object contains status information for the playlist.
 */
status?: youtube$PlaylistStatus
} 

declare interface youtube$PlaylistContentDetails {

/**
 * The number of videos in the playlist.
 */
itemCount?: number
} 

declare interface youtube$PlaylistItem {

/**
 * The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the
 * video.
 */
contentDetails?: youtube$PlaylistItemContentDetails,

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the playlist item.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem".
 */
kind?: string,

/**
 * The snippet object contains basic details about the playlist item, such as its title and position in the playlist.
 */
snippet?: youtube$PlaylistItemSnippet,

/**
 * The status object contains information about the playlist item's privacy status.
 */
status?: youtube$PlaylistItemStatus
} 

declare interface youtube$PlaylistItemContentDetails {

/**
 * The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video
 * should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the
 * video.
 */
endAt?: string,

/**
 * A user-generated note for this item.
 */
note?: string,

/**
 * The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the
 * video should start and stop playing when the video is played in the context of the playlist.) The default value is 0.
 */
startAt?: string,

/**
 * The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request.
 */
videoId?: string,

/**
 * The date and time that the video was published to YouTube. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
videoPublishedAt?: string
} 

declare interface youtube$PlaylistItemListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of playlist items that match the request criteria.
 */
items?: youtube$PlaylistItem[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$PlaylistItemSnippet {

/**
 * The ID that YouTube uses to uniquely identify the user that added the item to the playlist.
 */
channelId?: string,

/**
 * Channel title for the channel that the playlist item belongs to.
 */
channelTitle?: string,

/**
 * The item's description.
 */
description?: string,

/**
 * The ID that YouTube uses to uniquely identify the playlist that the playlist item is in.
 */
playlistId?: string,

/**
 * The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a
 * position of 1, and so forth.
 */
position?: number,

/**
 * The date and time that the item was added to the playlist. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedAt?: string,

/**
 * The id object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.
 */
resourceId?: youtube$ResourceId,

/**
 * A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is
 * an object that contains other information about the thumbnail.
 */
client$thumbnails?: youtube$ThumbnailDetails,

/**
 * The item's title.
 */
title?: string
} 

declare interface youtube$PlaylistItemStatus {

/**
 * This resource's privacy status.
 */
privacyStatus?: string
} 

declare interface youtube$PlaylistListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of playlists that match the request criteria.
 */
items?: youtube$Playlist[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#playlistListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$PlaylistLocalization {

/**
 * The localized strings for playlist's description.
 */
description?: string,

/**
 * The localized strings for playlist's title.
 */
title?: string
} 

declare interface youtube$PlaylistPlayer {

/**
 * An <iframe> tag that embeds a player that will play the playlist.
 */
embedHtml?: string
} 

declare interface youtube$PlaylistSnippet {

/**
 * The ID that YouTube uses to uniquely identify the channel that published the playlist.
 */
channelId?: string,

/**
 * The channel title of the channel that the video belongs to.
 */
channelTitle?: string,

/**
 * The language of the playlist's default title and description.
 */
defaultLanguage?: string,

/**
 * The playlist's description.
 */
description?: string,

/**
 * Localized title and description, read-only.
 */
localized?: youtube$PlaylistLocalization,

/**
 * The date and time that the playlist was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedAt?: string,

/**
 * Keyword tags associated with the playlist.
 */
tags?: string[],

/**
 * A map of thumbnail images associated with the playlist. For each object in the map, the key is the name of the thumbnail image, and the value is an
 * object that contains other information about the thumbnail.
 */
client$thumbnails?: youtube$ThumbnailDetails,

/**
 * The playlist's title.
 */
title?: string
} 

declare interface youtube$PlaylistStatus {

/**
 * The playlist's privacy status.
 */
privacyStatus?: string
} 

declare interface youtube$PromotedItem {

/**
 * A custom message to display for this promotion. This field is currently ignored unless the promoted item is a website.
 */
customMessage?: string,

/**
 * Identifies the promoted item.
 */
id?: youtube$PromotedItemId,

/**
 * If true, the content owner's name will be used when displaying the promotion. This field can only be set when the update is made on behalf of the
 * content owner.
 */
promotedByContentOwner?: boolean,

/**
 * The temporal position within the video where the promoted item will be displayed. If present, it overrides the default timing.
 */
timing?: youtube$InvideoTiming
} 

declare interface youtube$PromotedItemId {

/**
 * If type is recentUpload, this field identifies the channel from which to take the recent upload. If missing, the channel is assumed to be the same
 * channel for which the invideoPromotion is set.
 */
recentlyUploadedBy?: string,

/**
 * Describes the type of the promoted item.
 */
type?: string,

/**
 * If the promoted item represents a video, this field represents the unique YouTube ID identifying it. This field will be present only if type has the
 * value video.
 */
videoId?: string,

/**
 * If the promoted item represents a website, this field represents the url pointing to the website. This field will be present only if type has the value
 * website.
 */
websiteUrl?: string
} 

declare interface youtube$PropertyValue {

/**
 * A property.
 */
property?: string,

/**
 * The property's value.
 */
value?: string
} 

declare interface youtube$ResourceId {

/**
 * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the
 * resourceId.kind value is youtube#channel.
 */
channelId?: string,

/**
 * The type of the API resource.
 */
kind?: string,

/**
 * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the
 * resourceId.kind value is youtube#playlist.
 */
playlistId?: string,

/**
 * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind
 * value is youtube#video.
 */
videoId?: string
} 

declare interface youtube$SearchListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of results that match the search criteria.
 */
items?: youtube$SearchResult[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#searchListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
regionCode?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$SearchResult {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The id object contains information that can be used to uniquely identify the resource that matches the search request.
 */
id?: youtube$ResourceId,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#searchResult".
 */
kind?: string,

/**
 * The snippet object contains basic details about a search result, such as its title or description. For example, if the search result is a video, then
 * the title will be the video's title and the description will be the video's description.
 */
snippet?: youtube$SearchResultSnippet
} 

declare interface youtube$SearchResultSnippet {

/**
 * The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies.
 */
channelId?: string,

/**
 * The title of the channel that published the resource that the search result identifies.
 */
channelTitle?: string,

/**
 * A description of the search result.
 */
description?: string,

/**
 * It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's "none" if there is not any upcoming/active live
 * broadcasts.
 */
liveBroadcastContent?: string,

/**
 * The creation date and time of the resource that the search result identifies. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedAt?: string,

/**
 * A map of thumbnail images associated with the search result. For each object in the map, the key is the name of the thumbnail image, and the value is
 * an object that contains other information about the thumbnail.
 */
client$thumbnails?: youtube$ThumbnailDetails,

/**
 * The title of the search result.
 */
title?: string
} 

declare interface youtube$Sponsor {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube assigns to uniquely identify the sponsor.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#sponsor".
 */
kind?: string,

/**
 * The snippet object contains basic details about the sponsor.
 */
snippet?: youtube$SponsorSnippet
} 

declare interface youtube$SponsorListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of sponsors that match the request criteria.
 */
items?: youtube$Sponsor[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#sponsorListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$SponsorSnippet {

/**
 * The id of the channel being sponsored.
 */
channelId?: string,

/**
 * Details about the sponsor.
 */
sponsorDetails?: youtube$ChannelProfileDetails,

/**
 * The date and time when the user became a sponsor. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
sponsorSince?: string
} 

declare interface youtube$Subscription {

/**
 * The contentDetails object contains basic statistics about the subscription.
 */
contentDetails?: youtube$SubscriptionContentDetails,

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the subscription.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#subscription".
 */
kind?: string,

/**
 * The snippet object contains basic details about the subscription, including its title and the channel that the user subscribed to.
 */
snippet?: youtube$SubscriptionSnippet,

/**
 * The subscriberSnippet object contains basic details about the sbuscriber.
 */
subscriberSnippet?: youtube$SubscriptionSubscriberSnippet
} 

declare interface youtube$SubscriptionContentDetails {

/**
 * The type of activity this subscription is for (only uploads, everything).
 */
activityType?: string,

/**
 * The number of new items in the subscription since its content was last read.
 */
newItemCount?: number,

/**
 * The approximate number of items that the subscription points to.
 */
totalItemCount?: number
} 

declare interface youtube$SubscriptionListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of subscriptions that match the request criteria.
 */
items?: youtube$Subscription[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#subscriptionListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$SubscriptionSnippet {

/**
 * The ID that YouTube uses to uniquely identify the subscriber's channel.
 */
channelId?: string,

/**
 * Channel title for the channel that the subscription belongs to.
 */
channelTitle?: string,

/**
 * The subscription's details.
 */
description?: string,

/**
 * The date and time that the subscription was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedAt?: string,

/**
 * The id object contains information about the channel that the user subscribed to.
 */
resourceId?: youtube$ResourceId,

/**
 * A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object
 * that contains other information about the thumbnail.
 */
client$thumbnails?: youtube$ThumbnailDetails,

/**
 * The subscription's title.
 */
title?: string
} 

declare interface youtube$SubscriptionSubscriberSnippet {

/**
 * The channel ID of the subscriber.
 */
channelId?: string,

/**
 * The description of the subscriber.
 */
description?: string,

/**
 * Thumbnails for this subscriber.
 */
client$thumbnails?: youtube$ThumbnailDetails,

/**
 * The title of the subscriber.
 */
title?: string
} 

declare interface youtube$SuperChatEvent {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube assigns to uniquely identify the Super Chat event.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEvent".
 */
kind?: string,

/**
 * The snippet object contains basic details about the Super Chat event.
 */
snippet?: youtube$SuperChatEventSnippet
} 

declare interface youtube$SuperChatEventListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of Super Chat purchases that match the request criteria.
 */
items?: youtube$SuperChatEvent[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEventListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$SuperChatEventSnippet {

/**
 * The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000.
 */
amountMicros?: string,

/**
 * Channel id where the event occurred.
 */
channelId?: string,

/**
 * The text contents of the comment left by the user.
 */
commentText?: string,

/**
 * The date and time when the event occurred. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
createdAt?: string,

/**
 * The currency in which the purchase was made. ISO 4217.
 */
currency?: string,

/**
 * A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language.
 */
displayString?: string,

/**
 * The tier for the paid message, which is based on the amount of money spent to purchase the message.
 */
messageType?: number,

/**
 * Details about the supporter.
 */
supporterDetails?: youtube$ChannelProfileDetails
} 

declare interface youtube$Thumbnail {

/**
 * (Optional) Height of the thumbnail image.
 */
height?: number,

/**
 * The thumbnail image's URL.
 */
url?: string,

/**
 * (Optional) Width of the thumbnail image.
 */
width?: number
} 

declare interface youtube$ThumbnailDetails {

/**
 * The default image for this resource.
 */
default?: youtube$Thumbnail,

/**
 * The high quality image for this resource.
 */
high?: youtube$Thumbnail,

/**
 * The maximum resolution quality image for this resource.
 */
maxres?: youtube$Thumbnail,

/**
 * The medium quality image for this resource.
 */
medium?: youtube$Thumbnail,

/**
 * The standard quality image for this resource.
 */
standard?: youtube$Thumbnail
} 

declare interface youtube$ThumbnailSetResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of thumbnails.
 */
items?: youtube$ThumbnailDetails[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#thumbnailSetResponse".
 */
kind?: string,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$Video {

/**
 * Age restriction details related to a video. This data can only be retrieved by the video owner.
 */
ageGating?: youtube$VideoAgeGating,

/**
 * The contentDetails object contains information about the video content, including the length of the video and its aspect ratio.
 */
contentDetails?: youtube$VideoContentDetails,

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the file's resolution, duration, audio and
 * video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.
 */
fileDetails?: youtube$VideoFileDetails,

/**
 * The ID that YouTube uses to uniquely identify the video.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#video".
 */
kind?: string,

/**
 * The liveStreamingDetails object contains metadata about a live video broadcast. The object will only be present in a video resource if the video is an
 * upcoming, live, or completed live broadcast.
 */
liveStreamingDetails?: youtube$VideoLiveStreamingDetails,

/**
 * List with all localizations.
 */
localizations?: Record<string, youtube$VideoLocalization>,

/**
 * The monetizationDetails object encapsulates information about the monetization status of the video.
 */
monetizationDetails?: youtube$VideoMonetizationDetails,

/**
 * The player object contains information that you would use to play the video in an embedded player.
 */
player?: youtube$VideoPlayer,

/**
 * The processingProgress object encapsulates information about YouTube's progress in processing the uploaded video file. The properties in the object
 * identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates
 * whether different types of data or content, such as file details or thumbnail images, are available for the video.
 * 
 * The processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the
 * uploaded video file. This data can only be retrieved by the video owner.
 */
processingDetails?: youtube$VideoProcessingDetails,

/**
 * The projectDetails object contains information about the project specific video metadata.
 */
projectDetails?: youtube$VideoProjectDetails,

/**
 * The recordingDetails object encapsulates information about the location, date and address where the video was recorded.
 */
recordingDetails?: youtube$VideoRecordingDetails,

/**
 * The snippet object contains basic details about the video, such as its title, description, and category.
 */
snippet?: youtube$VideoSnippet,

/**
 * The statistics object contains statistics about the video.
 */
statistics?: youtube$VideoStatistics,

/**
 * The status object contains information about the video's uploading, processing, and privacy statuses.
 */
status?: youtube$VideoStatus,

/**
 * The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This
 * data can only be retrieved by the video owner.
 */
suggestions?: youtube$VideoSuggestions,

/**
 * The topicDetails object encapsulates information about Freebase topics associated with the video.
 */
topicDetails?: youtube$VideoTopicDetails
} 

declare interface youtube$VideoAbuseReport {

/**
 * Additional comments regarding the abuse report.
 */
client$comments?: string,

/**
 * The language that the content was viewed in.
 */
language?: string,

/**
 * The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID.
 */
reasonId?: string,

/**
 * The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason
 * for the primary reason.
 */
secondaryReasonId?: string,

/**
 * The ID that YouTube uses to uniquely identify the video.
 */
videoId?: string
} 

declare interface youtube$VideoAbuseReportReason {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID of this abuse report reason.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#videoAbuseReportReason".
 */
kind?: string,

/**
 * The snippet object contains basic details about the abuse report reason.
 */
snippet?: youtube$VideoAbuseReportReasonSnippet
} 

declare interface youtube$VideoAbuseReportReasonListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of valid abuse reasons that are used with video.ReportAbuse.
 */
items?: youtube$VideoAbuseReportReason[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#videoAbuseReportReasonListResponse".
 */
kind?: string,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$VideoAbuseReportReasonSnippet {

/**
 * The localized label belonging to this abuse report reason.
 */
label?: string,

/**
 * The secondary reasons associated with this reason, if any are available. (There might be 0 or more.)
 */
secondaryReasons?: youtube$VideoAbuseReportSecondaryReason[]
} 

declare interface youtube$VideoAbuseReportSecondaryReason {

/**
 * The ID of this abuse report secondary reason.
 */
id?: string,

/**
 * The localized label for this abuse report secondary reason.
 */
label?: string
} 

declare interface youtube$VideoAgeGating {

/**
 * Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP,
 * can view the content.
 */
alcoholContent?: boolean,

/**
 * Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content
 * is restricted to viewers aged 18+. Otherwise The field won't be present.
 */
restricted?: boolean,

/**
 * Video game rating, if any.
 */
videoGameRating?: string
} 

declare interface youtube$VideoCategory {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * The ID that YouTube uses to uniquely identify the video category.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategory".
 */
kind?: string,

/**
 * The snippet object contains basic details about the video category, including its title.
 */
snippet?: youtube$VideoCategorySnippet
} 

declare interface youtube$VideoCategoryListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the
 * corresponding videoCategory resource.
 */
items?: youtube$VideoCategory[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategoryListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$VideoCategorySnippet {
assignable?: boolean,

/**
 * The YouTube channel that created the video category.
 */
channelId?: string,

/**
 * The video category's title.
 */
title?: string
} 

declare interface youtube$VideoContentDetails {

/**
 * The value of captions indicates whether the video has captions or not.
 */
caption?: string,

/**
 * Specifies the ratings that the video received under various rating schemes.
 */
contentRating?: youtube$ContentRating,

/**
 * The countryRestriction object contains information about the countries where a video is (or is not) viewable.
 */
countryRestriction?: youtube$AccessPolicy,

/**
 * The value of definition indicates whether the video is available in high definition or only in standard definition.
 */
definition?: string,

/**
 * The value of dimension indicates whether the video is available in 3D or in 2D.
 */
dimension?: string,

/**
 * The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period
 * of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers
 * that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds
 * long.
 */
duration?: string,

/**
 * Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader.
 */
hasCustomThumbnail?: boolean,

/**
 * The value of is_license_content indicates whether the video is licensed content.
 */
licensedContent?: boolean,

/**
 * Specifies the projection format of the video.
 */
projection?: string,

/**
 * The regionRestriction object contains information about the countries where a video is (or is not) viewable. The object will contain either the
 * contentDetails.regionRestriction.allowed property or the contentDetails.regionRestriction.blocked property.
 */
regionRestriction?: youtube$VideoContentDetailsRegionRestriction
} 

declare interface youtube$VideoContentDetailsRegionRestriction {

/**
 * A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then
 * the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries.
 */
allowed?: string[],

/**
 * A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then
 * the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries.
 */
blocked?: string[]
} 

declare interface youtube$VideoFileDetails {

/**
 * A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.
 */
audioStreams?: youtube$VideoFileDetailsAudioStream[],

/**
 * The uploaded video file's combined (video and audio) bitrate in bits per second.
 */
bitrateBps?: string,

/**
 * The uploaded video file's container format.
 */
container?: string,

/**
 * The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are
 * supported:
 * - Date only: YYYY-MM-DD
 * - Naive time: YYYY-MM-DDTHH:MM:SS
 * - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM
 */
creationTime?: string,

/**
 * The length of the uploaded video in milliseconds.
 */
durationMs?: string,

/**
 * The uploaded file's name. This field is present whether a video file or another type of file was uploaded.
 */
fileName?: string,

/**
 * The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded.
 */
fileSize?: string,

/**
 * The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present
 * whether a video file or another type of file was uploaded.
 */
fileType?: string,

/**
 * A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.
 */
videoStreams?: youtube$VideoFileDetailsVideoStream[]
} 

declare interface youtube$VideoFileDetailsAudioStream {

/**
 * The audio stream's bitrate, in bits per second.
 */
bitrateBps?: string,

/**
 * The number of audio channels that the stream contains.
 */
channelCount?: number,

/**
 * The audio codec that the stream uses.
 */
codec?: string,

/**
 * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
 */
vendor?: string
} 

declare interface youtube$VideoFileDetailsVideoStream {

/**
 * The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed.
 */
aspectRatio?: number,

/**
 * The video stream's bitrate, in bits per second.
 */
bitrateBps?: string,

/**
 * The video codec that the stream uses.
 */
codec?: string,

/**
 * The video stream's frame rate, in frames per second.
 */
frameRateFps?: number,

/**
 * The encoded video content's height in pixels.
 */
heightPixels?: number,

/**
 * The amount that YouTube needs to rotate the original source content to properly display the video.
 */
rotation?: string,

/**
 * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
 */
vendor?: string,

/**
 * The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels.
 */
widthPixels?: number
} 

declare interface youtube$VideoGetRatingResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of ratings that match the request criteria.
 */
items?: youtube$VideoRating[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#videoGetRatingResponse".
 */
kind?: string,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$VideoListResponse {

/**
 * Etag of this resource.
 */
etag?: string,

/**
 * Serialized EventId of the request which produced this response.
 */
eventId?: string,

/**
 * A list of videos that match the request criteria.
 */
items?: youtube$Video[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "youtube#videoListResponse".
 */
kind?: string,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
 */
nextPageToken?: string,
pageInfo?: youtube$PageInfo,

/**
 * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
 */
prevPageToken?: string,
tokenPagination?: any,

/**
 * The visitorId identifies the visitor.
 */
visitorId?: string
} 

declare interface youtube$VideoLiveStreamingDetails {

/**
 * The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live
 * chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id
 * will no longer be tied to this video but rather to the new video being displayed at the persistent page.
 */
activeLiveChatId?: string,

/**
 * The time that the broadcast actually ended. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until
 * the broadcast is over.
 */
actualEndTime?: string,

/**
 * The time that the broadcast actually started. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available
 * until the broadcast begins.
 */
actualStartTime?: string,

/**
 * The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the
 * broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the
 * broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
 */
concurrentViewers?: string,

/**
 * The time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. If the value is empty or the
 * property is not present, then the broadcast is scheduled to continue indefinitely.
 */
scheduledEndTime?: string,

/**
 * The time that the broadcast is scheduled to begin. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
scheduledStartTime?: string
} 

declare interface youtube$VideoLocalization {

/**
 * Localized version of the video's description.
 */
description?: string,

/**
 * Localized version of the video's title.
 */
title?: string
} 

declare interface youtube$VideoMonetizationDetails {

/**
 * The value of access indicates whether the video can be monetized or not.
 */
access?: youtube$AccessPolicy
} 

declare interface youtube$VideoPlayer {
embedHeight?: string,

/**
 * An <iframe> tag that embeds a player that will play the video.
 */
embedHtml?: string,

/**
 * The embed width
 */
embedWidth?: string
} 

declare interface youtube$VideoProcessingDetails {

/**
 * This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You
 * can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
 */
editorSuggestionsAvailability?: string,

/**
 * This value indicates whether file details are available for the uploaded video. You can retrieve a video's file details by requesting the fileDetails
 * part in your videos.list() request.
 */
fileDetailsAvailability?: string,

/**
 * The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed.
 */
processingFailureReason?: string,

/**
 * This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video,
 * warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the
 * suggestions part in your videos.list() request.
 */
processingIssuesAvailability?: string,

/**
 * The processingProgress object contains information about the progress YouTube has made in processing the video. The values are really only relevant if
 * the video's processing status is processing.
 */
processingProgress?: youtube$VideoProcessingDetailsProcessingProgress,

/**
 * The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
 */
processingStatus?: string,

/**
 * This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other
 * users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
 */
tagSuggestionsAvailability?: string,

/**
 * This value indicates whether thumbnail images have been generated for the video.
 */
thumbnailsAvailability?: string
} 

declare interface youtube$VideoProcessingDetailsProcessingProgress {

/**
 * The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by
 * calculating:
 * 100 &#42; parts_processed / parts_total
 * 
 * Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed,
 * it is possible that the calculated progress could periodically decrease while YouTube processes a video.
 */
partsProcessed?: string,

/**
 * An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube
 * processes the video.
 */
partsTotal?: string,

/**
 * An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.
 */
timeLeftMs?: string
} 

declare interface youtube$VideoProjectDetails {

/**
 * A list of project tags associated with the video during the upload.
 */
tags?: string[]
} 

declare interface youtube$VideoRating {
rating?: string,
videoId?: string
} 

declare interface youtube$VideoRecordingDetails {

/**
 * The geolocation information associated with the video.
 */
location?: youtube$GeoPoint,

/**
 * The text description of the location where the video was recorded.
 */
locationDescription?: string,

/**
 * The date and time when the video was recorded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
 */
recordingDate?: string
} 

declare interface youtube$VideoSnippet {

/**
 * The YouTube video category associated with the video.
 */
categoryId?: string,

/**
 * The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.
 */
channelId?: string,

/**
 * Channel title for the channel that the video belongs to.
 */
channelTitle?: string,

/**
 * The default_audio_language property specifies the language spoken in the video's default audio track.
 */
defaultAudioLanguage?: string,

/**
 * The language of the videos's default snippet.
 */
defaultLanguage?: string,

/**
 * The video's description.
 */
description?: string,

/**
 * Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast.
 */
liveBroadcastContent?: string,

/**
 * Localized snippet selected with the hl parameter. If no such localization exists, this field is populated with the default snippet. (Read-only)
 */
localized?: youtube$VideoLocalization,

/**
 * The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedAt?: string,

/**
 * A list of keyword tags associated with the video. Tags may contain spaces.
 */
tags?: string[],

/**
 * A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object
 * that contains other information about the thumbnail.
 */
client$thumbnails?: youtube$ThumbnailDetails,

/**
 * The video's title.
 */
title?: string
} 

declare interface youtube$VideoStatistics {

/**
 * The number of comments for the video.
 */
commentCount?: string,

/**
 * The number of users who have indicated that they disliked the video by giving it a negative rating.
 */
dislikeCount?: string,

/**
 * The number of users who currently have the video marked as a favorite video.
 */
favoriteCount?: string,

/**
 * The number of users who have indicated that they liked the video by giving it a positive rating.
 */
likeCount?: string,

/**
 * The number of times the video has been viewed.
 */
viewCount?: string
} 

declare interface youtube$VideoStatus {

/**
 * This value indicates if the video can be embedded on another website.
 */
embeddable?: boolean,

/**
 * This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.
 */
failureReason?: string,

/**
 * The video's license.
 */
license?: string,

/**
 * The video's privacy status.
 */
privacyStatus?: string,

/**
 * This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be
 * visible if this is disabled.
 */
publicStatsViewable?: boolean,

/**
 * The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private. The value is specified in
 * ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishAt?: string,

/**
 * This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was
 * rejected.
 */
rejectionReason?: string,

/**
 * The status of the uploaded video.
 */
uploadStatus?: string
} 

declare interface youtube$VideoSuggestions {

/**
 * A list of video editing operations that might improve the video quality or playback experience of the uploaded video.
 */
editorSuggestions?: string[],

/**
 * A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video's
 * current processing status, eventually, that status will almost certainly be failed.
 */
processingErrors?: string[],

/**
 * A list of suggestions that may improve YouTube's ability to process the video.
 */
processingHints?: string[],

/**
 * A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are
 * generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing
 * to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track.
 */
processingWarnings?: string[],

/**
 * A list of keyword tags that could be added to the video's metadata to increase the likelihood that users will locate your video when searching or
 * browsing on YouTube.
 */
tagSuggestions?: youtube$VideoSuggestionsTagSuggestion[]
} 

declare interface youtube$VideoSuggestionsTagSuggestion {

/**
 * A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video
 * category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts
 * defined for the keyword.
 */
categoryRestricts?: string[],

/**
 * The keyword tag suggested for the video.
 */
tag?: string
} 

declare interface youtube$VideoTopicDetails {

/**
 * Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You
 * can retrieve information about each topic using Freebase Topic API.
 */
relevantTopicIds?: string[],

/**
 * A list of Wikipedia URLs that provide a high-level description of the video's content.
 */
topicCategories?: string[],

/**
 * A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be
 * said that the video is mainly about each of these. You can retrieve information about each topic using the Freebase Topic API.
 */
topicIds?: string[]
} 

declare interface youtube$WatchSettings {

/**
 * The text color for the video watch page's branded area.
 */
backgroundColor?: string,

/**
 * An ID that uniquely identifies a playlist that displays next to the video player.
 */
featuredPlaylistId?: string,

/**
 * The background color for the video watch page's branded area.
 */
textColor?: string
} 

declare interface youtube$ActivitiesResource {

/**
 * Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)
 * 
 * Note: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to
 * use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the
 * playlistItems.insert() method to mark a video as a favorite.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$Activity>,

/**
 * Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel,
 * events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
 */
channelId?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.
 */
home?: boolean,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
 */
mine?: boolean,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include.
 * 
 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an
 * activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth.
 * If you set part=snippet, the API response will also contain all of those nested properties.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API
 * response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The
 * value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedAfter?: string,

/**
 * The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API
 * response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The
 * value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
 */
publishedBefore?: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
 * YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.
 */
regionCode?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$ActivityListResponse>
} 

declare interface youtube$CaptionsResource {

/**
 * Deletes a specified caption track.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter identifies the caption track that is being deleted. The value is a caption track ID as identified by the id property in a caption
 * resource.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * ID of the Google+ Page for the channel that the request is be on behalf of
 */
onBehalfOf?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its
 * original language unless the request specifies a value for the tlang parameter.
 */
download(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter identifies the caption track that is being retrieved. The value is a caption track ID as identified by the id property in a caption
 * resource.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * ID of the Google+ Page for the channel that the request is be on behalf of
 */
onBehalfOf?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The tfmt parameter specifies that the caption track should be returned in a specific format. If the parameter is not included in the request, the track
 * is returned in its original format.
 */
tfmt?: string,

/**
 * The tlang parameter specifies that the API response should return a translation of the specified caption track. The parameter value is an ISO 639-1
 * two-letter language code that identifies the desired caption language. The translation is generated by using machine translation, such as Google
 * Translate.
 */
tlang?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Uploads a caption track.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * ID of the Google+ Page for the channel that the request is be on behalf of
 */
onBehalfOf?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The part parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value
 * to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions.
 * 
 * You should set the sync parameter to true if you are uploading a transcript, which has no time codes, or if you suspect the time codes in your file are
 * incorrect and want YouTube to try to fix them.
 */
sync?: boolean,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$Caption>,

/**
 * Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that
 * the captions.download method provides the ability to retrieve a caption track.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies a comma-separated list of IDs that identify the caption resources that should be retrieved. Each ID must identify a caption
 * track associated with the specified video.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * ID of the Google+ Page for the channel that the request is on behalf of.
 */
onBehalfOf?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The part parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you
 * can include in the parameter value are id and snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The videoId parameter specifies the YouTube video ID of the video for which the API should return caption tracks.
 */
videoId: string
}): Request<youtube$CaptionListResponse>,

/**
 * Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * ID of the Google+ Page for the channel that the request is be on behalf of
 */
onBehalfOf?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include. Set the property value to snippet if you are updating the track's draft status. Otherwise, set the property value to id.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Note: The API server only processes the parameter value if the request contains an updated caption file.
 * 
 * The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value
 * to true, YouTube will automatically synchronize the caption track with the audio track.
 */
sync?: boolean,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$Caption>
} 

declare interface youtube$ChannelBannersResource {

/**
 * Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:
 * 
 * - Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192
 * pixels.
 * - Extract the url property's value from the response that the API returns for step 1.
 * - Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the
 * URL obtained in step 2.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The channelId parameter identifies the YouTube channel to which the banner is uploaded. The channelId parameter was introduced as a required parameter
 * in May 2017. As this was a backward-incompatible change, channelBanners.insert requests that do not specify this parameter will not return an error
 * until six months have passed from the time that the parameter was introduced. Please see the API Terms of Service for the official policy regarding
 * backward incompatible changes and the API revision history for the exact date that the parameter was introduced.
 */
channelId?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$ChannelBannerResource>
} 

declare interface youtube$ChannelSectionsResource {

/**
 * Deletes a channelSection.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the YouTube channelSection ID for the resource that is being deleted. In a channelSection resource, the id property
 * specifies the YouTube channelSection ID.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Adds a channelSection for the authenticated user's channel.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 * 
 * The part names that you can include in the parameter value are snippet and contentDetails.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$ChannelSection>,

/**
 * Returns channelSection resources that match the API request criteria.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The channelId parameter specifies a YouTube channel ID. The API will only return that channel's channelSections.
 */
channelId?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The hl parameter indicates that the snippet.localized property values in the returned channelSection resources should be in the specified language if
 * localized values for that language are available. For example, if the API request specifies hl=de, the snippet.localized properties in the API response
 * will contain German titles if German titles are available. Channel owners can provide localized channel section titles using either the
 * channelSections.insert or channelSections.update method.
 */
hl?: string,

/**
 * The id parameter specifies a comma-separated list of the YouTube channelSection ID(s) for the resource(s) that are being retrieved. In a channelSection
 * resource, the id property specifies the YouTube channelSection ID.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Set this parameter's value to true to retrieve a feed of the authenticated user's channelSections.
 */
mine?: boolean,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part
 * names that you can include in the parameter value are id, snippet, and contentDetails.
 * 
 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a
 * channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set part=snippet, the
 * API response will also contain all of those nested properties.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$ChannelSectionListResponse>,

/**
 * Update a channelSection.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 * 
 * The part names that you can include in the parameter value are snippet and contentDetails.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$ChannelSection>
} 

declare interface youtube$ChannelsResource {

/**
 * Returns a collection of zero or more channel resources that match the request criteria.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.
 */
categoryId?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.
 */
forUsername?: string,

/**
 * The hl parameter should be used for filter out the properties that are not in the given language. Used for the brandingSettings part.
 */
hl?: string,

/**
 * The id parameter specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved. In a channel resource, the
 * id property specifies the channel's YouTube channel ID.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * Set this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter
 * specifies. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
 */
managedByMe?: boolean,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.
 */
mine?: boolean,

/**
 * Use the subscriptions.list method and its mySubscribers parameter to retrieve a list of subscribers to the authenticated user's channel.
 */
mySubscribers?: boolean,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include.
 * 
 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel
 * resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set part=contentDetails, the API
 * response will also contain all of those nested properties.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$ChannelListResponse>,

/**
 * Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion
 * objects and their child properties.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value.
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual
 * CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 * 
 * The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with
 * a single request.)
 * 
 * Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value
 * specifies.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$Channel>
} 

declare interface youtube$CommentThreadsResource {

/**
 * Creates a new top-level comment. To add a reply to an existing comment, use the comments.insert method instead.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost
 * of 2 units.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$CommentThread>,

/**
 * Returns a list of comment threads that match the API request parameters.
 */
list(
request: {

/**
 * The allThreadsRelatedToChannelId parameter instructs the API to return all comment threads associated with the specified channel. The response can
 * include comments about the channel or about the channel's videos.
 */
allThreadsRelatedToChannelId?: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The channelId parameter instructs the API to return comment threads containing comments about the specified channel. (The response will not include
 * comments left on videos that the channel uploaded.)
 */
channelId?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies a comma-separated list of comment thread IDs for the resources that should be retrieved.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 * 
 * Note: This parameter is not supported for use in conjunction with the id parameter.
 */
maxResults?: number,

/**
 * Set this parameter to limit the returned comment threads to a particular moderation state.
 * 
 * Note: This parameter is not supported for use in conjunction with the id parameter.
 */
moderationStatus?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The order parameter specifies the order in which the API response should list comment threads. Valid values are:
 * - time - Comment threads are ordered by time. This is the default behavior.
 * - relevance - Comment threads are ordered by relevance.Note: This parameter is not supported for use in conjunction with the id parameter.
 */
order?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies
 * the next page of the result that can be retrieved.
 * 
 * Note: This parameter is not supported for use in conjunction with the id parameter.
 */
pageToken?: string,

/**
 * The part parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The searchTerms parameter instructs the API to limit the API response to only contain comments that contain the specified search terms.
 * 
 * Note: This parameter is not supported for use in conjunction with the id parameter.
 */
searchTerms?: string,

/**
 * Set this parameter's value to html or plainText to instruct the API to return the comments left by users in html formatted or in plain text.
 */
textFormat?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The videoId parameter instructs the API to return comment threads associated with the specified video ID.
 */
videoId?: string
}): Request<youtube$CommentThreadListResponse>,

/**
 * Modifies the top-level comment in a comment thread.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include
 * the snippet part in the parameter value since that part contains all of the properties that the API request can update.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$CommentThread>
} 

declare interface youtube$CommentsResource {

/**
 * Deletes a comment.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the comment ID for the resource that is being deleted.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Creates a reply to an existing comment. Note: To create a top-level comment, use the commentThreads.insert method.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost
 * of 2 units.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$Comment>,

/**
 * Returns a list of comments that match the API request parameters.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies a comma-separated list of comment IDs for the resources that are being retrieved. In a comment resource, the id property
 * specifies the comment's ID.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 * 
 * Note: This parameter is not supported for use in conjunction with the id parameter.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies
 * the next page of the result that can be retrieved.
 * 
 * Note: This parameter is not supported for use in conjunction with the id parameter.
 */
pageToken?: string,

/**
 * The parentId parameter specifies the ID of the comment for which replies should be retrieved.
 * 
 * Note: YouTube currently supports replies only for top-level comments. However, replies to replies may be supported in the future.
 */
parentId?: string,

/**
 * The part parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * This parameter indicates whether the API should return comments formatted as HTML or as plain text.
 */
textFormat?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$CommentListResponse>,

/**
 * Expresses the caller's opinion that one or more comments should be flagged as spam.
 */
markAsSpam(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the
 * comments.
 */
setModerationStatus(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The banAuthor parameter lets you indicate that you want to automatically reject any additional comments written by the comment's author. Set the
 * parameter value to true to ban the author.
 * 
 * Note: This parameter is only valid if the moderationStatus parameter is also set to rejected.
 */
banAuthor?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies a comma-separated list of IDs that identify the comments for which you are updating the moderation status.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Identifies the new moderation status of the specified comments.
 */
moderationStatus: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Modifies a comment.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value
 * since that part contains all of the properties that the API request can update.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$Comment>
} 

declare interface youtube$FanFundingEventsResource {

/**
 * Lists fan funding events for a channel.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The
 * parameter value must be a language code included in the list returned by the i18nLanguages.list method.
 * 
 * If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if
 * localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
 */
hl?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies the fanFundingEvent resource parts that the API response will include. Supported values are id and snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$FanFundingEventListResponse>
} 

declare interface youtube$GuideCategoriesResource {

/**
 * Returns a list of categories that can be associated with YouTube channels.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The hl parameter specifies the language that will be used for text values in the API response.
 */
hl?: string,

/**
 * The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a
 * guideCategory resource, the id property specifies the YouTube channel category ID.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter specifies the guideCategory resource properties that the API response will include. Set the parameter value to snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO
 * 3166-1 alpha-2 country code.
 */
regionCode?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$GuideCategoryListResponse>
} 

declare interface youtube$I18nLanguagesResource {

/**
 * Returns a list of application languages that the YouTube website supports.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The hl parameter specifies the language that should be used for text values in the API response.
 */
hl?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$I18nLanguageListResponse>
} 

declare interface youtube$I18nRegionsResource {

/**
 * Returns a list of content regions that the YouTube website supports.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The hl parameter specifies the language that should be used for text values in the API response.
 */
hl?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$I18nRegionListResponse>
} 

declare interface youtube$LiveBroadcastsResource {

/**
 * Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video
 * stream, though a video stream may be bound to more than one broadcast.
 */
bind(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the unique ID of the broadcast that is being bound to a video stream.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names
 * that you can include in the parameter value are id, snippet, contentDetails, and status.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The streamId parameter specifies the unique ID of the video stream that is being bound to a broadcast. If this parameter is omitted, the API will
 * remove any existing binding between the broadcast and a video stream.
 */
streamId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveBroadcast>,

/**
 * Controls the settings for a slate that can be displayed in the broadcast stream.
 */
control(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The displaySlate parameter specifies whether the slate is being enabled or disabled.
 */
displaySlate?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the YouTube live broadcast ID that uniquely identifies the broadcast in which the slate is being updated.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The offsetTimeMs parameter specifies a positive time offset when the specified slate change will occur. The value is measured in milliseconds from the
 * beginning of the broadcast's monitor stream, which is the time that the testing phase for the broadcast began. Even though it is specified in
 * milliseconds, the value is actually an approximation, and YouTube completes the requested action as closely as possible to that time.
 * 
 * If you do not specify a value for this parameter, then YouTube performs the action as soon as possible. See the Getting started guide for more details.
 * 
 * Important: You should only specify a value for this parameter if your broadcast stream is delayed.
 */
offsetTimeMs?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names
 * that you can include in the parameter value are id, snippet, contentDetails, and status.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The walltime parameter specifies the wall clock time at which the specified slate change will occur. The value is specified in ISO 8601
 * (YYYY-MM-DDThh:mm:ss.sssZ) format.
 */
walltime?: string
}): Request<youtube$LiveBroadcast>,

/**
 * Deletes a broadcast.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the YouTube live broadcast ID for the resource that is being deleted.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Creates a broadcast.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 * 
 * The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveBroadcast>,

/**
 * Returns a list of YouTube broadcasts that match the API request parameters.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The broadcastStatus parameter filters the API response to only include broadcasts with the specified status.
 */
broadcastStatus?: string,

/**
 * The broadcastType parameter filters the API response to only include broadcasts with the specified type. This is only compatible with the mine filter
 * for now.
 */
broadcastType?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies a comma-separated list of YouTube broadcast IDs that identify the broadcasts being retrieved. In a liveBroadcast resource,
 * the id property specifies the broadcast's ID.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * The mine parameter can be used to instruct the API to only return broadcasts owned by the authenticated user. Set the parameter value to true to only
 * retrieve your own broadcasts.
 */
mine?: boolean,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names
 * that you can include in the parameter value are id, snippet, contentDetails, and status.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveBroadcastListResponse>,

/**
 * Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a
 * broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that
 * the value of the status.streamStatus property for the stream bound to your broadcast is active.
 */
transition(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The broadcastStatus parameter identifies the state to which the broadcast is changing. Note that to transition a broadcast to either the testing or
 * live state, the status.streamStatus must be active for the stream that the broadcast is bound to.
 */
broadcastStatus: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the unique ID of the broadcast that is transitioning to another status.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names
 * that you can include in the parameter value are id, snippet, contentDetails, and status.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveBroadcast>,

/**
 * Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 * 
 * The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
 * 
 * Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value
 * specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted
 * broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the
 * request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the
 * default privacy setting.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveBroadcast>
} 

declare interface youtube$LiveChatBansResource {

/**
 * Removes a chat ban.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter identifies the chat ban to remove. The value uniquely identifies both the ban and the chat.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Adds a new ban to the chat.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response returns. Set the parameter value to snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveChatBan>
} 

declare interface youtube$LiveChatMessagesResource {

/**
 * Deletes a chat message.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the YouTube chat message ID of the resource that is being deleted.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Adds a message to a live chat.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response
 * will include. Set the parameter value to snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveChatMessage>,

/**
 * Lists live chat messages for a specific chat.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The
 * parameter value must be a language code included in the list returned by the i18nLanguages.list method.
 * 
 * If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if
 * localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
 */
hl?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The liveChatId parameter specifies the ID of the chat whose messages will be returned.
 */
liveChatId: string,

/**
 * The maxResults parameter specifies the maximum number of messages that should be returned in the result set.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify
 * other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The profileImageSize parameter specifies the size of the user profile pictures that should be returned in the result set. Default: 88.
 */
profileImageSize?: number,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveChatMessageListResponse>
} 

declare interface youtube$LiveChatModeratorsResource {

/**
 * Removes a chat moderator.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter identifies the chat moderator to remove. The value uniquely identifies both the moderator and the chat.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Adds a new moderator for the chat.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response returns. Set the parameter value to snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveChatModerator>,

/**
 * Lists moderators for a live chat.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The liveChatId parameter specifies the YouTube live chat for which the API should return moderators.
 */
liveChatId: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveChatModeratorListResponse>
} 

declare interface youtube$LiveStreamsResource {

/**
 * Deletes a video stream.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the YouTube live stream ID for the resource that is being deleted.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 * 
 * The part properties that you can include in the parameter value are id, snippet, cdn, and status.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveStream>,

/**
 * Returns a list of video streams that match the API request parameters.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies a comma-separated list of YouTube stream IDs that identify the streams being retrieved. In a liveStream resource, the id
 * property specifies the stream's ID.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * The mine parameter can be used to instruct the API to only return streams owned by the authenticated user. Set the parameter value to true to only
 * retrieve your own streams.
 */
mine?: boolean,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names
 * that you can include in the parameter value are id, snippet, cdn, and status.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveStreamListResponse>,

/**
 * Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 * 
 * The part properties that you can include in the parameter value are id, snippet, cdn, and status.
 * 
 * Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value
 * specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$LiveStream>
} 

declare interface youtube$PlaylistItemsResource {

/**
 * Deletes a playlist item.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property
 * specifies the playlist item's ID.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Adds a resource to a playlist.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$PlaylistItem>,

/**
 * Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or
 * retrieve one or more playlist items by their unique IDs.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies a comma-separated list of one or more unique playlist item IDs.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include.
 * 
 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a
 * playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such,
 * if you set part=snippet, the API response will contain all of those properties.
 */
part: string,

/**
 * The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an
 * optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.
 */
playlistId?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The videoId parameter specifies that the request should return only the playlist items that contain the specified video.
 */
videoId?: string
}): Request<youtube$PlaylistItemListResponse>,

/**
 * Modifies a playlist item. For example, you could update the item's position in the playlist.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 * 
 * Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value
 * specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when
 * users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value
 * includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request
 * body does not specify values, the existing start and end times will be removed and replaced with the default settings.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$PlaylistItem>
} 

declare interface youtube$PlaylistsResource {

/**
 * Deletes a playlist.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the
 * playlist's ID.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Creates a playlist.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$Playlist>,

/**
 * Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns,
 * or you can retrieve one or more playlists by their unique IDs.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * This value indicates that the API should only return the specified channel's playlists.
 */
channelId?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The hl parameter should be used for filter out the properties that are not in the given language. Used for the snippet part.
 */
hl?: string,

/**
 * The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource,
 * the id property specifies the playlist's YouTube playlist ID.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
 */
mine?: boolean,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include.
 * 
 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a
 * playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet,
 * the API response will contain all of those properties.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$PlaylistListResponse>,

/**
 * Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 * 
 * Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For
 * example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value
 * for the snippet.description property, the playlist's existing description will be deleted.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$Playlist>
} 

declare interface youtube$SearchResource {

/**
 * Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies
 * matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The channelId parameter indicates that the API response should only contain resources created by the channel
 */
channelId?: string,

/**
 * The channelType parameter lets you restrict a search to a particular type of channel.
 */
channelType?: string,

/**
 * The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value
 * to video.
 */
eventType?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The forContentOwner parameter restricts the search to only retrieve resources owned by the content owner specified by the onBehalfOfContentOwner
 * parameter. The user must be authenticated using a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
 */
forContentOwner?: boolean,

/**
 * The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the
 * request's authorization credentials to identify the developer. Therefore, a developer can restrict results to videos uploaded through the developer's
 * own app or website but not to videos uploaded through other apps or sites.
 */
forDeveloper?: boolean,

/**
 * The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type
 * parameter's value must also be set to video.
 */
forMine?: boolean,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that
 * specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude
 * coordinates e.g. (37.42307,-122.08427).
 * 
 * 
 * - The location parameter value identifies the point at the center of the area.
 * - The locationRadius parameter specifies the maximum distance that the location associated with a video can be from that point for the video to still
 * be included in the search results.The API returns an error if your request specifies a value for the location parameter but does not also specify a
 * value for the locationRadius parameter.
 */
location?: string,

/**
 * The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area.
 * 
 * The parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid
 * parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers.
 * 
 * Note: See the definition of the location parameter for more information.
 */
locationRadius?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The order parameter specifies the method that will be used to order resources in the API response.
 */
order?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter
 * value to snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339
 * formatted date-time value (1970-01-01T00:00:00Z).
 */
publishedAfter?: string,

/**
 * The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339
 * formatted date-time value (1970-01-01T00:00:00Z).
 */
publishedBefore?: string,

/**
 * The q parameter specifies the query term to search for.
 * 
 * Your request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search
 * terms. For example, to search for videos matching either "boating" or "sailing", set the q parameter value to boating|sailing. Similarly, to search for
 * videos matching either "boating" or "sailing" but not "fishing", set the q parameter value to boating|sailing -fishing. Note that the pipe character
 * must be URL-escaped when it is sent in your API request. The URL-escaped value for the pipe character is %7C.
 */
q?: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country
 * code.
 */
regionCode?: string,

/**
 * The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must
 * be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
 */
relatedToVideoId?: string,

/**
 * The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is
 * typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese.
 * Please note that results in other languages will still be returned if they are highly relevant to the search query term.
 */
relevanceLanguage?: string,

/**
 * The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.
 */
safeSearch?: string,

/**
 * The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a
 * Freebase topic ID.
 */
topicId?: string,

/**
 * The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types.
 */
type?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for
 * this parameter, you must also set the type parameter's value to video.
 */
videoCaption?: string,

/**
 * The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the
 * type parameter's value to video.
 */
videoCategoryId?: string,

/**
 * The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are
 * available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. If you specify a value for this parameter, you
 * must also set the type parameter's value to video.
 */
videoDefinition?: string,

/**
 * The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set
 * the type parameter's value to video.
 */
videoDimension?: string,

/**
 * The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type
 * parameter's value to video.
 */
videoDuration?: string,

/**
 * The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this
 * parameter, you must also set the type parameter's value to video.
 */
videoEmbeddable?: string,

/**
 * The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach
 * either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also
 * set the type parameter's value to video.
 */
videoLicense?: string,

/**
 * The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this
 * parameter, you must also set the type parameter's value to video.
 */
videoSyndicated?: string,

/**
 * The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the
 * type parameter's value to video.
 */
videoType?: string
}): Request<youtube$SearchListResponse>
} 

declare interface youtube$SponsorsResource {

/**
 * Lists sponsors for a channel.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The filter parameter specifies which channel sponsors to return.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies the sponsor resource parts that the API response will include. Supported values are id and snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$SponsorListResponse>
} 

declare interface youtube$SubscriptionsResource {

/**
 * Deletes a subscription.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies
 * the YouTube subscription ID.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Adds a subscription for the authenticated user's channel.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$Subscription>,

/**
 * Returns subscription resources that match the API request criteria.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.
 */
channelId?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those
 * channels.
 */
forChannelId?: string,

/**
 * The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription
 * resource, the id property specifies the YouTube subscription ID.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.
 */
mine?: boolean,

/**
 * Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in reverse chronological order (newest first).
 */
myRecentSubscribers?: boolean,

/**
 * Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in no particular order.
 */
mySubscribers?: boolean,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The order parameter specifies the method that will be used to sort resources in the API response.
 */
order?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include.
 * 
 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a
 * subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API
 * response will also contain all of those nested properties.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$SubscriptionListResponse>
} 

declare interface youtube$SuperChatEventsResource {

/**
 * Lists Super Chat events for a channel.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The
 * parameter value must be a language code included in the list returned by the i18nLanguages.list method.
 * 
 * If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if
 * localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
 */
hl?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 */
pageToken?: string,

/**
 * The part parameter specifies the superChatEvent resource parts that the API response will include. Supported values are id and snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$SuperChatEventListResponse>
} 

declare interface youtube$ThumbnailsResource {

/**
 * Uploads a custom video thumbnail to YouTube and sets it for a video.
 */
set(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.
 */
videoId: string
}): Request<youtube$ThumbnailSetResponse>
} 

declare interface youtube$VideoAbuseReportReasonsResource {

/**
 * Returns a list of abuse reasons that can be used for reporting abusive videos.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The hl parameter specifies the language that should be used for text values in the API response.
 */
hl?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$VideoAbuseReportReasonListResponse>
} 

declare interface youtube$VideoCategoriesResource {

/**
 * Returns a list of categories that can be associated with YouTube videos.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The hl parameter specifies the language that should be used for text values in the API response.
 */
hl?: string,

/**
 * The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The part parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO
 * 3166-1 alpha-2 country code.
 */
regionCode?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$VideoCategoryListResponse>
} 

declare interface youtube$VideosResource {

/**
 * Deletes a YouTube video.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Retrieves the ratings that the authorized user gave to a list of specified videos.
 */
getRating(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video
 * resource, the id property specifies the video's ID.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$VideoGetRatingResponse>,

/**
 * Uploads a video to YouTube and optionally sets the video's metadata.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The autoLevels parameter indicates whether YouTube should automatically enhance the video's lighting and color.
 */
autoLevels?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The notifySubscribers parameter indicates whether YouTube should send a notification about the new video to users who subscribe to the video's channel.
 * A parameter value of True indicates that subscribers will be notified of newly uploaded videos. However, a channel owner who is uploading many videos
 * might prefer to set the value to False to avoid sending a notification about each new video to the channel's subscribers.
 */
notifySubscribers?: boolean,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required
 * when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the
 * request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the
 * channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter
 * specifies.
 * 
 * This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate
 * once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each
 * separate channel.
 */
onBehalfOfContentOwnerChannel?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 * 
 * Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates
 * statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that
 * does not contain mutable values, that part will still be included in the API response.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The stabilize parameter indicates whether YouTube should adjust the video to remove shaky camera motions.
 */
stabilize?: boolean,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$Video>,

/**
 * Returns a list of videos that match the API request parameters.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The chart parameter identifies the chart that you want to retrieve.
 */
chart?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The
 * parameter value must be a language code included in the list returned by the i18nLanguages.list method.
 * 
 * If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if
 * localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
 */
hl?: string,

/**
 * The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id
 * property specifies the video's ID.
 */
id?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * DEPRECATED
 */
locale?: string,

/**
 * The maxHeight parameter specifies a maximum height of the embedded player. If maxWidth is provided, maxHeight may not be reached in order to not
 * violate the width request.
 */
maxHeight?: number,

/**
 * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
 * 
 * Note: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with
 * the id parameter.
 */
maxResults?: number,

/**
 * The maxWidth parameter specifies a maximum width of the embedded player. If maxHeight is provided, maxWidth may not be reached in order to not violate
 * the height request.
 */
maxWidth?: number,

/**
 * Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.
 */
myRating?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken
 * properties identify other pages that could be retrieved.
 * 
 * Note: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with
 * the id parameter.
 */
pageToken?: string,

/**
 * The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include.
 * 
 * If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video
 * resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set part=snippet, the API
 * response will contain all of those properties.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction
 * with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code.
 */
regionCode?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction
 * with the chart parameter. By default, charts are not restricted to a particular category.
 */
videoCategoryId?: string
}): Request<youtube$VideoListResponse>,

/**
 * Add a like or dislike rating to a video or remove a rating from a video.
 */
rate(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed.
 */
id: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Specifies the rating to record.
 */
rating: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Report abuse for a video.
 */
reportAbuse(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Updates a video's metadata.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that
 * the API response will include.
 * 
 * Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value
 * specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the
 * request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If
 * the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting.
 * 
 * In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates
 * statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that
 * does not contain mutable values, that part will still be included in the API response.
 */
part: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<youtube$Video>
} 

declare interface youtube$WatermarksResource {

/**
 * Uploads a watermark image to YouTube and sets it for a channel.
 */
set(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The channelId parameter specifies the YouTube channel ID for which the watermark is being provided.
 */
channelId: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Deletes a channel's watermark image.
 */
unset(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The channelId parameter specifies the YouTube channel ID for which the watermark is being unset.
 */
channelId: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Note: This parameter is intended exclusively for YouTube content partners.
 * 
 * The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the
 * content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube
 * channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication
 * credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
 */
onBehalfOfContentOwner?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>
} 
    }
