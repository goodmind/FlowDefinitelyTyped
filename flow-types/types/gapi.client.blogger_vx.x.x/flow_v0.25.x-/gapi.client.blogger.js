declare module "gapi.client.blogger" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    blogUserInfos: typeof gapi$client$blogUserInfos,
    blogs: typeof gapi$client$blogs,
    comments: typeof gapi$client$comments,
    pageViews: typeof gapi$client$pageViews,
    pages: typeof gapi$client$pages,
    postUserInfos: typeof gapi$client$postUserInfos,
    posts: typeof gapi$client$posts,
    users: typeof gapi$client$users
  };

  /**
   * Load Blogger API v3
   */
  declare function gapi$client$load(
    name: "blogger",
    version: "v3"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "blogger",
    version: "v3",
    callback: () => any
  ): void;

  declare var gapi$client$blogUserInfos: blogger$BlogUserInfosResource;

  declare var gapi$client$blogs: blogger$BlogsResource;

  declare var gapi$client$comments: blogger$CommentsResource;

  declare var gapi$client$pageViews: blogger$PageViewsResource;

  declare var gapi$client$pages: blogger$PagesResource;

  declare var gapi$client$postUserInfos: blogger$PostUserInfosResource;

  declare var gapi$client$posts: blogger$PostsResource;

  declare var gapi$client$users: blogger$UsersResource;

  declare interface gapi$client$blogger$Blog {
    /**
     * The JSON custom meta-data for the Blog
     */
    customMetaData?: string;

    /**
     * The description of this blog. This is displayed underneath the title.
     */
    description?: string;

    /**
     * The identifier for this resource.
     */
    id?: string;

    /**
     * The kind of this entry. Always blogger#blog
     */
    kind?: string;

    /**
     * The locale this Blog is set to.
     */
    locale?: {
      /**
       * The country this blog's locale is set to.
       */
      country?: string,

      /**
       * The language this blog is authored in.
       */
      language?: string,

      /**
       * The language variant this blog is authored in.
       */
      variant?: string
    };

    /**
     * The name of this blog. This is displayed as the title.
     */
    name?: string;

    /**
     * The container of pages in this blog.
     */
    pages?: {
      /**
       * The URL of the container for pages in this blog.
       */
      selfLink?: string,

      /**
       * The count of pages in this blog.
       */
      totalItems?: number
    };

    /**
     * The container of posts in this blog.
     */
    posts?: {
      /**
       * The List of Posts for this Blog.
       */
      items?: blogger$Post[],

      /**
       * The URL of the container for posts in this blog.
       */
      selfLink?: string,

      /**
       * The count of posts in this blog.
       */
      totalItems?: number
    };

    /**
     * RFC 3339 date-time when this blog was published.
     */
    published?: string;

    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;

    /**
     * The status of the blog.
     */
    status?: string;

    /**
     * RFC 3339 date-time when this blog was last updated.
     */
    updated?: string;

    /**
     * The URL where this blog is published.
     */
    url?: string;
  }

  declare interface gapi$client$blogger$BlogList {
    /**
     * Admin level list of blog per-user information
     */
    blogUserInfos?: blogger$BlogUserInfo[];

    /**
     * The list of Blogs this user has Authorship or Admin rights over.
     */
    items?: gapi$client$blogger$Blog[];

    /**
     * The kind of this entity. Always blogger#blogList
     */
    kind?: string;
  }

  declare interface gapi$client$blogger$BlogPerUserInfo {
    /**
     * ID of the Blog resource
     */
    blogId?: string;

    /**
     * True if the user has Admin level access to the blog.
     */
    hasAdminAccess?: boolean;

    /**
     * The kind of this entity. Always blogger#blogPerUserInfo
     */
    kind?: string;

    /**
     * The Photo Album Key for the user when adding photos to the blog
     */
    photosAlbumKey?: string;

    /**
     * Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).
     */
    role?: string;

    /**
     * ID of the User
     */
    userId?: string;
  }

  declare interface gapi$client$blogger$BlogUserInfo {
    /**
     * The Blog resource.
     */
    blog?: gapi$client$blogger$Blog;

    /**
     * Information about a User for the Blog.
     */
    blog_user_info?: gapi$client$blogger$BlogPerUserInfo;

    /**
     * The kind of this entity. Always blogger#blogUserInfo
     */
    kind?: string;
  }

  declare interface gapi$client$blogger$Comment {
    /**
     * The author of this Comment.
     */
    author?: {
      /**
       * The display name.
       */
      displayName?: string,

      /**
       * The identifier of the Comment creator.
       */
      id?: string,

      /**
       * The comment creator's avatar.
       */
      image?: {
        /**
         * The comment creator's avatar URL.
         */
        url?: string
      },

      /**
       * The URL of the Comment creator's Profile page.
       */
      url?: string
    };

    /**
     * Data about the blog containing this comment.
     */
    blog?: {
      /**
       * The identifier of the blog containing this comment.
       */
      id?: string
    };

    /**
     * The actual content of the comment. May include HTML markup.
     */
    content?: string;

    /**
     * The identifier for this resource.
     */
    id?: string;

    /**
     * Data about the comment this is in reply to.
     */
    inReplyTo?: {
      /**
       * The identified of the parent of this comment.
       */
      id?: string
    };

    /**
     * The kind of this entry. Always blogger#comment
     */
    kind?: string;

    /**
     * Data about the post containing this comment.
     */
    post?: {
      /**
       * The identifier of the post containing this comment.
       */
      id?: string
    };

    /**
     * RFC 3339 date-time when this comment was published.
     */
    published?: string;

    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;

    /**
     * The status of the comment (only populated for admin users)
     */
    status?: string;

    /**
     * RFC 3339 date-time when this comment was last updated.
     */
    updated?: string;
  }

  declare interface gapi$client$blogger$CommentList {
    /**
     * Etag of the response.
     */
    etag?: string;

    /**
     * The List of Comments for a Post.
     */
    items?: gapi$client$blogger$Comment[];

    /**
     * The kind of this entry. Always blogger#commentList
     */
    kind?: string;

    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string;

    /**
     * Pagination token to fetch the previous page, if one exists.
     */
    prevPageToken?: string;
  }

  declare interface gapi$client$blogger$Page {
    /**
     * The author of this Page.
     */
    author?: {
      /**
       * The display name.
       */
      displayName?: string,

      /**
       * The identifier of the Page creator.
       */
      id?: string,

      /**
       * The page author's avatar.
       */
      image?: {
        /**
         * The page author's avatar URL.
         */
        url?: string
      },

      /**
       * The URL of the Page creator's Profile page.
       */
      url?: string
    };

    /**
     * Data about the blog containing this Page.
     */
    blog?: {
      /**
       * The identifier of the blog containing this page.
       */
      id?: string
    };

    /**
     * The body content of this Page, in HTML.
     */
    content?: string;

    /**
     * Etag of the resource.
     */
    etag?: string;

    /**
     * The identifier for this resource.
     */
    id?: string;

    /**
     * The kind of this entity. Always blogger#page
     */
    kind?: string;

    /**
     * RFC 3339 date-time when this Page was published.
     */
    published?: string;

    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;

    /**
     * The status of the page for admin resources (either LIVE or DRAFT).
     */
    status?: string;

    /**
     * The title of this entity. This is the name displayed in the Admin user interface.
     */
    title?: string;

    /**
     * RFC 3339 date-time when this Page was last updated.
     */
    updated?: string;

    /**
     * The URL that this Page is displayed at.
     */
    url?: string;
  }

  declare interface gapi$client$blogger$PageList {
    /**
     * Etag of the response.
     */
    etag?: string;

    /**
     * The list of Pages for a Blog.
     */
    items?: gapi$client$blogger$Page[];

    /**
     * The kind of this entity. Always blogger#pageList
     */
    kind?: string;

    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$blogger$Pageviews {
    /**
     * Blog Id
     */
    blogId?: string;

    /**
     * The container of posts in this blog.
     */
    counts?: Array<{
      /**
       * Count of page views for the given time range
       */
      count?: string,

      /**
       * Time range the given count applies to
       */
      timeRange?: string
    }>;

    /**
     * The kind of this entry. Always blogger#page_views
     */
    kind?: string;
  }

  declare interface gapi$client$blogger$Post {
    /**
     * The author of this Post.
     */
    author?: {
      /**
       * The display name.
       */
      displayName?: string,

      /**
       * The identifier of the Post creator.
       */
      id?: string,

      /**
       * The Post author's avatar.
       */
      image?: {
        /**
         * The Post author's avatar URL.
         */
        url?: string
      },

      /**
       * The URL of the Post creator's Profile page.
       */
      url?: string
    };

    /**
     * Data about the blog containing this Post.
     */
    blog?: {
      /**
       * The identifier of the Blog that contains this Post.
       */
      id?: string
    };

    /**
     * The content of the Post. May contain HTML markup.
     */
    content?: string;

    /**
     * The JSON meta-data for the Post.
     */
    customMetaData?: string;

    /**
     * Etag of the resource.
     */
    etag?: string;

    /**
     * The identifier of this Post.
     */
    id?: string;

    /**
     * Display image for the Post.
     */
    images?: Array<{
      url?: string
    }>;

    /**
     * The kind of this entity. Always blogger#post
     */
    kind?: string;

    /**
     * The list of labels this Post was tagged with.
     */
    labels?: string[];

    /**
     * The location for geotagged posts.
     */
    location?: {
      /**
       * Location's latitude.
       */
      lat?: number,

      /**
       * Location's longitude.
       */
      lng?: number,

      /**
       * Location name.
       */
      name?: string,

      /**
       * Location's viewport span. Can be used when rendering a map preview.
       */
      span?: string
    };

    /**
     * RFC 3339 date-time when this Post was published.
     */
    published?: string;

    /**
     * Comment control and display setting for readers of this post.
     */
    readerComments?: string;

    /**
     * The container of comments on this Post.
     */
    replies?: {
      /**
       * The List of Comments for this Post.
       */
      items?: gapi$client$blogger$Comment[],

      /**
       * The URL of the comments on this post.
       */
      selfLink?: string,

      /**
       * The count of comments on this post.
       */
      totalItems?: string
    };

    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;

    /**
     * Status of the post. Only set for admin-level requests
     */
    status?: string;

    /**
     * The title of the Post.
     */
    title?: string;

    /**
     * The title link URL, similar to atom's related link.
     */
    titleLink?: string;

    /**
     * RFC 3339 date-time when this Post was last updated.
     */
    updated?: string;

    /**
     * The URL where this Post is displayed.
     */
    url?: string;
  }

  declare interface gapi$client$blogger$PostList {
    /**
     * Etag of the response.
     */
    etag?: string;

    /**
     * The list of Posts for this Blog.
     */
    items?: gapi$client$blogger$Post[];

    /**
     * The kind of this entity. Always blogger#postList
     */
    kind?: string;

    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$blogger$PostPerUserInfo {
    /**
     * ID of the Blog that the post resource belongs to.
     */
    blogId?: string;

    /**
     * True if the user has Author level access to the post.
     */
    hasEditAccess?: boolean;

    /**
     * The kind of this entity. Always blogger#postPerUserInfo
     */
    kind?: string;

    /**
     * ID of the Post resource.
     */
    postId?: string;

    /**
     * ID of the User.
     */
    userId?: string;
  }

  declare interface gapi$client$blogger$PostUserInfo {
    /**
     * The kind of this entity. Always blogger#postUserInfo
     */
    kind?: string;

    /**
     * The Post resource.
     */
    post?: gapi$client$blogger$Post;

    /**
     * Information about a User for the Post.
     */
    post_user_info?: gapi$client$blogger$PostPerUserInfo;
  }

  declare interface gapi$client$blogger$PostUserInfosList {
    /**
     * The list of Posts with User information for the post, for this Blog.
     */
    items?: gapi$client$blogger$PostUserInfo[];

    /**
     * The kind of this entity. Always blogger#postList
     */
    kind?: string;

    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$blogger$User {
    /**
     * Profile summary information.
     */
    about?: string;

    /**
     * The container of blogs for this user.
     */
    blogs?: {
      /**
       * The URL of the Blogs for this user.
       */
      selfLink?: string
    };

    /**
     * The timestamp of when this profile was created, in seconds since epoch.
     */
    created?: string;

    /**
     * The display name.
     */
    displayName?: string;

    /**
     * The identifier for this User.
     */
    id?: string;

    /**
     * The kind of this entity. Always blogger#user
     */
    kind?: string;

    /**
     * This user's locale
     */
    locale?: {
      /**
       * The user's country setting.
       */
      country?: string,

      /**
       * The user's language setting.
       */
      language?: string,

      /**
       * The user's language variant setting.
       */
      variant?: string
    };

    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;

    /**
     * The user's profile page.
     */
    url?: string;
  }

  declare interface gapi$client$blogger$BlogUserInfosResource {
    /**
     * Gets one blog and user info pair by blogId and userId.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the blog to get.
       */
      blogId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of posts to pull back with the blog.
       */
      maxPosts?: number,

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
       * ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$blogger$BlogUserInfo>;
  }

  declare interface gapi$client$blogger$BlogsResource {
    /**
     * Gets one blog by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the blog to get.
       */
      blogId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of posts to pull back with the blog.
       */
      maxPosts?: number,

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
      userIp?: string,

      /**
       * Access level with which to view the blog. Note that some fields require elevated access.
       */
      view?: string
    }): Request<gapi$client$blogger$Blog>;

    /**
     * Retrieve a Blog by URL.
     */
    getByUrl(request: {
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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The URL of the blog to retrieve.
       */
      url: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * Access level with which to view the blog. Note that some fields require elevated access.
       */
      view?: string
    }): Request<gapi$client$blogger$Blog>;

    /**
     * Retrieves a list of blogs, possibly filtered.
     */
    listByUser(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Whether the response is a list of blogs with per-user information instead of just blogs.
       */
      fetchUserInfo?: boolean,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * User access types for blogs to include in the results, e.g. AUTHOR will return blogs where the user has author level access. If no roles are specified,
       * defaults to ADMIN and AUTHOR roles.
       */
      role?: string,

      /**
       * Blog statuses to include in the result (default: Live blogs only). Note that ADMIN access is required to view deleted blogs.
       */
      status?: string,

      /**
       * ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * Access level with which to view the blogs. Note that some fields require elevated access.
       */
      view?: string
    }): Request<gapi$client$blogger$BlogList>;
  }

  declare interface gapi$client$blogger$CommentsResource {
    /**
     * Marks a comment as not spam.
     */
    approve(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

      /**
       * The ID of the comment to mark as not spam.
       */
      commentId: string,

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
       * The ID of the Post.
       */
      postId: string,

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
    }): Request<gapi$client$blogger$Comment>;

    /**
     * Delete a comment by ID.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

      /**
       * The ID of the comment to delete.
       */
      commentId: string,

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
       * The ID of the Post.
       */
      postId: string,

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
    }): Request<void>;

    /**
     * Gets one comment by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog to containing the comment.
       */
      blogId: string,

      /**
       * The ID of the comment to get.
       */
      commentId: string,

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
       * ID of the post to fetch posts from.
       */
      postId: string,

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
       * Access level for the requested comment (default: READER). Note that some comments will require elevated permissions, for example comments where the
       * parent posts which is in a draft state, or comments that are pending moderation.
       */
      view?: string
    }): Request<gapi$client$blogger$Comment>;

    /**
     * Retrieves the comments for a post, possibly filtered.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog to fetch comments from.
       */
      blogId: string,

      /**
       * Latest date of comment to fetch, a date-time with RFC 3339 formatting.
       */
      endDate?: string,

      /**
       * Whether the body content of the comments is included.
       */
      fetchBodies?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of comments to include in the result.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token if request is paged.
       */
      pageToken?: string,

      /**
       * ID of the post to fetch posts from.
       */
      postId: string,

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
       * Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
       */
      startDate?: string,
      status?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * Access level with which to view the returned result. Note that some fields require elevated access.
       */
      view?: string
    }): Request<gapi$client$blogger$CommentList>;

    /**
     * Retrieves the comments for a blog, across all posts, possibly filtered.
     */
    listByBlog(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog to fetch comments from.
       */
      blogId: string,

      /**
       * Latest date of comment to fetch, a date-time with RFC 3339 formatting.
       */
      endDate?: string,

      /**
       * Whether the body content of the comments is included.
       */
      fetchBodies?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of comments to include in the result.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token if request is paged.
       */
      pageToken?: string,

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
       * Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
       */
      startDate?: string,
      status?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$blogger$CommentList>;

    /**
     * Marks a comment as spam.
     */
    markAsSpam(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

      /**
       * The ID of the comment to mark as spam.
       */
      commentId: string,

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
       * The ID of the Post.
       */
      postId: string,

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
    }): Request<gapi$client$blogger$Comment>;

    /**
     * Removes the content of a comment.
     */
    removeContent(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

      /**
       * The ID of the comment to delete content from.
       */
      commentId: string,

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
       * The ID of the Post.
       */
      postId: string,

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
    }): Request<gapi$client$blogger$Comment>;
  }

  declare interface gapi$client$blogger$PageViewsResource {
    /**
     * Retrieve pageview stats for a Blog.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the blog to get.
       */
      blogId: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,
      range?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$blogger$Pageviews>;
  }

  declare interface gapi$client$blogger$PagesResource {
    /**
     * Delete a page by ID.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

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
       * The ID of the Page.
       */
      pageId: string,

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
    }): Request<void>;

    /**
     * Gets one blog page by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog containing the page.
       */
      blogId: string,

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
       * The ID of the page to get.
       */
      pageId: string,

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
      view?: string
    }): Request<gapi$client$blogger$Page>;

    /**
     * Add a page.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog to add the page to.
       */
      blogId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Whether to create the page as a draft (default: false).
       */
      isDraft?: boolean,

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
    }): Request<gapi$client$blogger$Page>;

    /**
     * Retrieves the pages for a blog, optionally including non-LIVE statuses.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog to fetch Pages from.
       */
      blogId: string,

      /**
       * Whether to retrieve the Page bodies.
       */
      fetchBodies?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of Pages to fetch.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token if the request is paged.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,
      status?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * Access level with which to view the returned result. Note that some fields require elevated access.
       */
      view?: string
    }): Request<gapi$client$blogger$PageList>;

    /**
     * Update a page. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

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
       * The ID of the Page.
       */
      pageId: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Whether a publish action should be performed when the page is updated (default: false).
       */
      publish?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether a revert action should be performed when the page is updated (default: false).
       */
      revert?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$blogger$Page>;

    /**
     * Publishes a draft page.
     */
    publish(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the blog.
       */
      blogId: string,

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
       * The ID of the page.
       */
      pageId: string,

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
    }): Request<gapi$client$blogger$Page>;

    /**
     * Revert a published or scheduled page to draft state.
     */
    revert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the blog.
       */
      blogId: string,

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
       * The ID of the page.
       */
      pageId: string,

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
    }): Request<gapi$client$blogger$Page>;

    /**
     * Update a page.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

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
       * The ID of the Page.
       */
      pageId: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Whether a publish action should be performed when the page is updated (default: false).
       */
      publish?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether a revert action should be performed when the page is updated (default: false).
       */
      revert?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$blogger$Page>;
  }

  declare interface gapi$client$blogger$PostUserInfosResource {
    /**
     * Gets one post and user info pair, by post ID and user ID. The post user info contains per-user information about the post, such as access rights,
     * specific to the user.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the blog.
       */
      blogId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of comments to pull back on a post.
       */
      maxComments?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The ID of the post to get.
       */
      postId: string,

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
       * ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$blogger$PostUserInfo>;

    /**
     * Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access
     * rights, specific to the user.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog to fetch posts from.
       */
      blogId: string,

      /**
       * Latest post date to fetch, a date-time with RFC 3339 formatting.
       */
      endDate?: string,

      /**
       * Whether the body content of posts is included. Default is false.
       */
      fetchBodies?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Comma-separated list of labels to search for.
       */
      labels?: string,

      /**
       * Maximum number of posts to fetch.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Sort order applied to search results. Default is published.
       */
      orderBy?: string,

      /**
       * Continuation token if the request is paged.
       */
      pageToken?: string,

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
       * Earliest post date to fetch, a date-time with RFC 3339 formatting.
       */
      startDate?: string,
      status?: string,

      /**
       * ID of the user for the per-user information to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * Access level with which to view the returned result. Note that some fields require elevated access.
       */
      view?: string
    }): Request<gapi$client$blogger$PostUserInfosList>;
  }

  declare interface gapi$client$blogger$PostsResource {
    /**
     * Delete a post by ID.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

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
       * The ID of the Post.
       */
      postId: string,

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
    }): Request<void>;

    /**
     * Get a post by ID.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog to fetch the post from.
       */
      blogId: string,

      /**
       * Whether the body content of the post is included (default: true). This should be set to false when the post bodies are not required, to help minimize
       * traffic.
       */
      fetchBody?: boolean,

      /**
       * Whether image URL metadata for each post is included (default: false).
       */
      fetchImages?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of comments to pull back on a post.
       */
      maxComments?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The ID of the post
       */
      postId: string,

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
       * Access level with which to view the returned result. Note that some fields require elevated access.
       */
      view?: string
    }): Request<gapi$client$blogger$Post>;

    /**
     * Retrieve a Post by Path.
     */
    getByPath(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog to fetch the post from.
       */
      blogId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of comments to pull back on a post.
       */
      maxComments?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Path of the Post to retrieve.
       */
      path: string,

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
       * Access level with which to view the returned result. Note that some fields require elevated access.
       */
      view?: string
    }): Request<gapi$client$blogger$Post>;

    /**
     * Add a post.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog to add the post to.
       */
      blogId: string,

      /**
       * Whether the body content of the post is included with the result (default: true).
       */
      fetchBody?: boolean,

      /**
       * Whether image URL metadata for each post is included in the returned result (default: false).
       */
      fetchImages?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Whether to create the post as a draft (default: false).
       */
      isDraft?: boolean,

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
    }): Request<gapi$client$blogger$Post>;

    /**
     * Retrieves a list of posts, possibly filtered.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog to fetch posts from.
       */
      blogId: string,

      /**
       * Latest post date to fetch, a date-time with RFC 3339 formatting.
       */
      endDate?: string,

      /**
       * Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize
       * traffic.
       */
      fetchBodies?: boolean,

      /**
       * Whether image URL metadata for each post is included.
       */
      fetchImages?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Comma-separated list of labels to search for.
       */
      labels?: string,

      /**
       * Maximum number of posts to fetch.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Sort search results
       */
      orderBy?: string,

      /**
       * Continuation token if the request is paged.
       */
      pageToken?: string,

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
       * Earliest post date to fetch, a date-time with RFC 3339 formatting.
       */
      startDate?: string,

      /**
       * Statuses to include in the results.
       */
      status?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * Access level with which to view the returned result. Note that some fields require escalated access.
       */
      view?: string
    }): Request<gapi$client$blogger$PostList>;

    /**
     * Update a post. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

      /**
       * Whether the body content of the post is included with the result (default: true).
       */
      fetchBody?: boolean,

      /**
       * Whether image URL metadata for each post is included in the returned result (default: false).
       */
      fetchImages?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of comments to retrieve with the returned post.
       */
      maxComments?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The ID of the Post.
       */
      postId: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Whether a publish action should be performed when the post is updated (default: false).
       */
      publish?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether a revert action should be performed when the post is updated (default: false).
       */
      revert?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$blogger$Post>;

    /**
     * Publishes a draft post, optionally at the specific time of the given publishDate parameter.
     */
    publish(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

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
       * The ID of the Post.
       */
      postId: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Optional date and time to schedule the publishing of the Blog. If no publishDate parameter is given, the post is either published at the a previously
       * saved schedule date (if present), or the current time. If a future date is given, the post will be scheduled to be published.
       */
      publishDate?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$blogger$Post>;

    /**
     * Revert a published or scheduled post to draft state.
     */
    revert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

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
       * The ID of the Post.
       */
      postId: string,

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
    }): Request<gapi$client$blogger$Post>;

    /**
     * Search for a post.
     */
    search(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * ID of the blog to fetch the post from.
       */
      blogId: string,

      /**
       * Whether the body content of posts is included (default: true). This should be set to false when the post bodies are not required, to help minimize
       * traffic.
       */
      fetchBodies?: boolean,

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
       * Sort search results
       */
      orderBy?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Query terms to search this blog for matching posts.
       */
      q: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$blogger$PostList>;

    /**
     * Update a post.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the Blog.
       */
      blogId: string,

      /**
       * Whether the body content of the post is included with the result (default: true).
       */
      fetchBody?: boolean,

      /**
       * Whether image URL metadata for each post is included in the returned result (default: false).
       */
      fetchImages?: boolean,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of comments to retrieve with the returned post.
       */
      maxComments?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The ID of the Post.
       */
      postId: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Whether a publish action should be performed when the post is updated (default: false).
       */
      publish?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether a revert action should be performed when the post is updated (default: false).
       */
      revert?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$blogger$Post>;
  }

  declare interface gapi$client$blogger$UsersResource {
    /**
     * Gets one user by ID.
     */
    get(request: {
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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The ID of the user to get.
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$blogger$User>;
  }
}
