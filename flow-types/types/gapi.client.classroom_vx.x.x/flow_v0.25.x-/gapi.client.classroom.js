declare module "gapi.client.classroom" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    courses: typeof client$courses,
    invitations: typeof client$invitations,
    registrations: typeof client$registrations,
    userProfiles: typeof client$userProfiles
  };

  /**
   * Load Google Classroom API v1
   */
  declare function client$load(
    name: "classroom",
    version: "v1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "classroom",
    version: "v1",
    callback: () => any
  ): void;

  declare var client$courses: classroom$classroom$CoursesResource;

  declare var client$invitations: classroom$classroom$InvitationsResource;

  declare var client$registrations: classroom$classroom$RegistrationsResource;

  declare var client$userProfiles: classroom$classroom$UserProfilesResource;

  declare interface classroom$Announcement {
    /**
     * Absolute link to this announcement in the Classroom web UI.
     * This is only populated if `state` is `PUBLISHED`.
     *
     * Read-only.
     */
    alternateLink?: string;

    /**
     * Assignee mode of the announcement.
     * If unspecified, the default value is `ALL_STUDENTS`.
     */
    assigneeMode?: string;

    /**
     * Identifier of the course.
     *
     * Read-only.
     */
    courseId?: string;

    /**
     * Timestamp when this announcement was created.
     *
     * Read-only.
     */
    creationTime?: string;

    /**
     * Identifier for the user that created the announcement.
     *
     * Read-only.
     */
    creatorUserId?: string;

    /**
     * Classroom-assigned identifier of this announcement, unique per course.
     *
     * Read-only.
     */
    id?: string;

    /**
     * Identifiers of students with access to the announcement.
     * This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.
     * If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this
     * field will be able to see the announcement.
     */
    individualStudentsOptions?: classroom$IndividualStudentsOptions;

    /**
     * Additional materials.
     *
     * Announcements must have no more than 20 material items.
     */
    materials?: classroom$Material[];

    /**
     * Optional timestamp when this announcement is scheduled to be published.
     */
    scheduledTime?: string;

    /**
     * Status of this announcement.
     * If unspecified, the default state is `DRAFT`.
     */
    state?: string;

    /**
     * Description of this announcement.
     * The text must be a valid UTF-8 string containing no more
     * than 30,000 characters.
     */
    text?: string;

    /**
     * Timestamp of the most recent change to this announcement.
     *
     * Read-only.
     */
    updateTime?: string;
  }

  declare interface classroom$Assignment {
    /**
     * Drive folder where attachments from student submissions are placed.
     * This is only populated for course teachers and administrators.
     */
    studentWorkFolder?: classroom$DriveFolder;
  }

  declare interface classroom$AssignmentSubmission {
    /**
     * Attachments added by the student.
     * Drive files that correspond to materials with a share mode of
     * STUDENT_COPY may not exist yet if the student has not accessed the
     * assignment in Classroom.
     *
     * Some attachment metadata is only populated if the requesting user has
     * permission to access it. Identifier and alternate_link fields are always
     * available, but others (e.g. title) may not be.
     */
    attachments?: classroom$Attachment[];
  }

  declare interface classroom$Attachment {
    /**
     * Google Drive file attachment.
     */
    driveFile?: classroom$DriveFile;

    /**
     * Google Forms attachment.
     */
    form?: classroom$Form;

    /**
     * Link attachment.
     */
    link?: classroom$Link;

    /**
     * Youtube video attachment.
     */
    youTubeVideo?: classroom$YouTubeVideo;
  }

  declare interface classroom$CloudPubsubTopic {
    /**
     * The `name` field of a Cloud Pub/Sub
     * [Topic](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).
     */
    topicName?: string;
  }

  declare interface classroom$Course {
    /**
     * Absolute link to this course in the Classroom web UI.
     *
     * Read-only.
     */
    alternateLink?: string;

    /**
     * The Calendar ID for a calendar that all course members can see, to which
     * Classroom adds events for course work and announcements in the course.
     *
     * Read-only.
     */
    calendarId?: string;

    /**
     * The email address of a Google group containing all members of the course.
     * This group does not accept email and can only be used for permissions.
     *
     * Read-only.
     */
    courseGroupEmail?: string;

    /**
     * Sets of materials that appear on the "about" page of this course.
     *
     * Read-only.
     */
    courseMaterialSets?: classroom$CourseMaterialSet[];

    /**
     * State of the course.
     * If unspecified, the default state is `PROVISIONED`.
     */
    courseState?: string;

    /**
     * Creation time of the course.
     * Specifying this field in a course update mask results in an error.
     *
     * Read-only.
     */
    creationTime?: string;

    /**
     * Optional description.
     * For example, "We'll be learning about the structure of living
     * creatures from a combination of textbooks, guest lectures, and lab work.
     * Expect to be excited!"
     * If set, this field must be a valid UTF-8 string and no longer than 30,000
     * characters.
     */
    description?: string;

    /**
     * Optional heading for the description.
     * For example, "Welcome to 10th Grade Biology."
     * If set, this field must be a valid UTF-8 string and no longer than 3600
     * characters.
     */
    descriptionHeading?: string;

    /**
     * Enrollment code to use when joining this course.
     * Specifying this field in a course update mask results in an error.
     *
     * Read-only.
     */
    enrollmentCode?: string;

    /**
     * Whether or not guardian notifications are enabled for this course.
     *
     * Read-only.
     */
    guardiansEnabled?: boolean;

    /**
     * Identifier for this course assigned by Classroom.
     *
     * When
     * creating a course,
     * you may optionally set this identifier to an
     * alias string in the
     * request to create a corresponding alias. The `id` is still assigned by
     * Classroom and cannot be updated after the course is created.
     *
     * Specifying this field in a course update mask results in an error.
     */
    id?: string;

    /**
     * Name of the course.
     * For example, "10th Grade Biology".
     * The name is required. It must be between 1 and 750 characters and a valid
     * UTF-8 string.
     */
    name?: string;

    /**
     * The identifier of the owner of a course.
     *
     * When specified as a parameter of a
     * create course request, this
     * field is required.
     * The identifier can be one of the following:
     *
     * &#42; the numeric identifier for the user
     * &#42; the email address of the user
     * &#42; the string literal `"me"`, indicating the requesting user
     *
     * This must be set in a create request. Admins can also specify this field
     * in a patch course request to
     * transfer ownership. In other contexts, it is read-only.
     */
    ownerId?: string;

    /**
     * Optional room location.
     * For example, "301".
     * If set, this field must be a valid UTF-8 string and no longer than 650
     * characters.
     */
    room?: string;

    /**
     * Section of the course.
     * For example, "Period 2".
     * If set, this field must be a valid UTF-8 string and no longer than 2800
     * characters.
     */
    section?: string;

    /**
     * Information about a Drive Folder that is shared with all teachers of the
     * course.
     *
     * This field will only be set for teachers of the course and domain administrators.
     *
     * Read-only.
     */
    teacherFolder?: classroom$DriveFolder;

    /**
     * The email address of a Google group containing all teachers of the course.
     * This group does not accept email and can only be used for permissions.
     *
     * Read-only.
     */
    teacherGroupEmail?: string;

    /**
     * Time of the most recent update to this course.
     * Specifying this field in a course update mask results in an error.
     *
     * Read-only.
     */
    updateTime?: string;
  }

  declare interface classroom$CourseAlias {
    /**
     * Alias string. The format of the string indicates the desired alias scoping.
     *
     * &#42; `d:<name>` indicates a domain-scoped alias.
     * Example: `d:math_101`
     * &#42; `p:<name>` indicates a project-scoped alias.
     * Example: `p:abc123`
     *
     * This field has a maximum length of 256 characters.
     */
    alias?: string;
  }

  declare interface classroom$CourseMaterial {
    /**
     * Google Drive file attachment.
     */
    driveFile?: classroom$DriveFile;

    /**
     * Google Forms attachment.
     */
    form?: classroom$Form;

    /**
     * Link atatchment.
     */
    link?: classroom$Link;

    /**
     * Youtube video attachment.
     */
    youTubeVideo?: classroom$YouTubeVideo;
  }

  declare interface classroom$CourseMaterialSet {
    /**
     * Materials attached to this set.
     */
    materials?: classroom$CourseMaterial[];

    /**
     * Title for this set.
     */
    title?: string;
  }

  declare interface classroom$CourseRosterChangesInfo {
    /**
     * The `course_id` of the course to subscribe to roster changes for.
     */
    courseId?: string;
  }

  declare interface classroom$CourseWork {
    /**
     * Absolute link to this course work in the Classroom web UI.
     * This is only populated if `state` is `PUBLISHED`.
     *
     * Read-only.
     */
    alternateLink?: string;

    /**
     * Assignee mode of the coursework.
     * If unspecified, the default value is `ALL_STUDENTS`.
     */
    assigneeMode?: string;

    /**
     * Assignment details.
     * This is populated only when `work_type` is `ASSIGNMENT`.
     *
     * Read-only.
     */
    assignment?: classroom$Assignment;

    /**
     * Whether this course work item is associated with the Developer Console
     * project making the request.
     *
     * See google.classroom.Work.CreateCourseWork for more
     * details.
     *
     * Read-only.
     */
    associatedWithDeveloper?: boolean;

    /**
     * Identifier of the course.
     *
     * Read-only.
     */
    courseId?: string;

    /**
     * Timestamp when this course work was created.
     *
     * Read-only.
     */
    creationTime?: string;

    /**
     * Identifier for the user that created the coursework.
     *
     * Read-only.
     */
    creatorUserId?: string;

    /**
     * Optional description of this course work.
     * If set, the description must be a valid UTF-8 string containing no more
     * than 30,000 characters.
     */
    description?: string;

    /**
     * Optional date, in UTC, that submissions for this this course work are due.
     * This must be specified if `due_time` is specified.
     */
    dueDate?: classroom$Date;

    /**
     * Optional time of day, in UTC, that submissions for this this course work
     * are due.
     * This must be specified if `due_date` is specified.
     */
    dueTime?: classroom$TimeOfDay;

    /**
     * Classroom-assigned identifier of this course work, unique per course.
     *
     * Read-only.
     */
    id?: string;

    /**
     * Identifiers of students with access to the coursework.
     * This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.
     * If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students
     * specified in this field will be assigned the coursework.
     */
    individualStudentsOptions?: classroom$IndividualStudentsOptions;

    /**
     * Additional materials.
     *
     * CourseWork must have no more than 20 material items.
     */
    materials?: classroom$Material[];

    /**
     * Maximum grade for this course work.
     * If zero or unspecified, this assignment is considered ungraded.
     * This must be a non-negative integer value.
     */
    maxPoints?: number;

    /**
     * Multiple choice question details.
     * For read operations, this field is populated only when `work_type` is
     * `MULTIPLE_CHOICE_QUESTION`.
     * For write operations, this field must be specified when creating course
     * work with a `work_type` of `MULTIPLE_CHOICE_QUESTION`, and it must not be
     * set otherwise.
     */
    multipleChoiceQuestion?: classroom$MultipleChoiceQuestion;

    /**
     * Optional timestamp when this course work is scheduled to be published.
     */
    scheduledTime?: string;

    /**
     * Status of this course work.
     * If unspecified, the default state is `DRAFT`.
     */
    state?: string;

    /**
     * Setting to determine when students are allowed to modify submissions.
     * If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`.
     */
    submissionModificationMode?: string;

    /**
     * Title of this course work.
     * The title must be a valid UTF-8 string containing between 1 and 3000
     * characters.
     */
    title?: string;

    /**
     * Timestamp of the most recent change to this course work.
     *
     * Read-only.
     */
    updateTime?: string;

    /**
     * Type of this course work.
     *
     * The type is set when the course work is created and cannot be changed.
     */
    workType?: string;
  }

  declare interface classroom$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
     * if specifying a year/month where the day is not significant.
     */
    day?: number;

    /**
     * Month of year. Must be from 1 to 12.
     */
    month?: number;

    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
     * a year.
     */
    year?: number;
  }

  declare interface classroom$DriveFile {
    /**
     * URL that can be used to access the Drive item.
     *
     * Read-only.
     */
    alternateLink?: string;

    /**
     * Drive API resource ID.
     */
    id?: string;

    /**
     * URL of a thumbnail image of the Drive item.
     *
     * Read-only.
     */
    thumbnailUrl?: string;

    /**
     * Title of the Drive item.
     *
     * Read-only.
     */
    title?: string;
  }

  declare interface classroom$DriveFolder {
    /**
     * URL that can be used to access the Drive folder.
     *
     * Read-only.
     */
    alternateLink?: string;

    /**
     * Drive API resource ID.
     */
    id?: string;

    /**
     * Title of the Drive folder.
     *
     * Read-only.
     */
    title?: string;
  }

  declare interface classroom$Feed {
    /**
     * Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
     * This field must be specified if `feed_type` is `COURSE_ROSTER_CHANGES`.
     */
    courseRosterChangesInfo?: classroom$CourseRosterChangesInfo;

    /**
     * The type of feed.
     */
    feedType?: string;
  }

  declare interface classroom$Form {
    /**
     * URL of the form.
     */
    formUrl?: string;

    /**
     * URL of the form responses document.
     * Only set if respsonses have been recorded and only when the
     * requesting user is an editor of the form.
     *
     * Read-only.
     */
    responseUrl?: string;

    /**
     * URL of a thumbnail image of the Form.
     *
     * Read-only.
     */
    thumbnailUrl?: string;

    /**
     * Title of the Form.
     *
     * Read-only.
     */
    title?: string;
  }

  declare interface classroom$GlobalPermission {
    /**
     * Permission value.
     */
    permission?: string;
  }

  declare interface classroom$GradeHistory {
    /**
     * The teacher who made the grade change.
     */
    actorUserId?: string;

    /**
     * The type of grade change at this time in the submission grade history.
     */
    gradeChangeType?: string;

    /**
     * When the grade of the submission was changed.
     */
    gradeTimestamp?: string;

    /**
     * The denominator of the grade at this time in the submission grade
     * history.
     */
    maxPoints?: number;

    /**
     * The numerator of the grade at this time in the submission grade history.
     */
    pointsEarned?: number;
  }

  declare interface classroom$Guardian {
    /**
     * Identifier for the guardian.
     */
    guardianId?: string;

    /**
     * User profile for the guardian.
     */
    guardianProfile?: classroom$UserProfile;

    /**
     * The email address to which the initial guardian invitation was sent.
     * This field is only visible to domain administrators.
     */
    invitedEmailAddress?: string;

    /**
     * Identifier for the student to whom the guardian relationship applies.
     */
    studentId?: string;
  }

  declare interface classroom$GuardianInvitation {
    /**
     * The time that this invitation was created.
     *
     * Read-only.
     */
    creationTime?: string;

    /**
     * Unique identifier for this invitation.
     *
     * Read-only.
     */
    invitationId?: string;

    /**
     * Email address that the invitation was sent to.
     * This field is only visible to domain administrators.
     */
    invitedEmailAddress?: string;

    /**
     * The state that this invitation is in.
     */
    state?: string;

    /**
     * ID of the student (in standard format)
     */
    studentId?: string;
  }

  declare interface classroom$IndividualStudentsOptions {
    /**
     * Identifiers for the students that have access to the
     * coursework/announcement.
     */
    studentIds?: string[];
  }

  declare interface classroom$Invitation {
    /**
     * Identifier of the course to invite the user to.
     */
    courseId?: string;

    /**
     * Identifier assigned by Classroom.
     *
     * Read-only.
     */
    id?: string;

    /**
     * Role to invite the user to have.
     * Must not be `COURSE_ROLE_UNSPECIFIED`.
     */
    role?: string;

    /**
     * Identifier of the invited user.
     *
     * When specified as a parameter of a request, this identifier can be set to
     * one of the following:
     *
     * &#42; the numeric identifier for the user
     * &#42; the email address of the user
     * &#42; the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
  }

  declare interface classroom$Link {
    /**
     * URL of a thumbnail image of the target URL.
     *
     * Read-only.
     */
    thumbnailUrl?: string;

    /**
     * Title of the target of the URL.
     *
     * Read-only.
     */
    title?: string;

    /**
     * URL to link to.
     * This must be a valid UTF-8 string containing between 1 and 2024 characters.
     */
    url?: string;
  }

  declare interface classroom$ListAnnouncementsResponse {
    /**
     * Announcement items that match the request.
     */
    announcements?: classroom$Announcement[];

    /**
     * Token identifying the next page of results to return. If empty, no further
     * results are available.
     */
    nextPageToken?: string;
  }

  declare interface classroom$ListCourseAliasesResponse {
    /**
     * The course aliases.
     */
    aliases?: classroom$CourseAlias[];

    /**
     * Token identifying the next page of results to return. If empty, no further
     * results are available.
     */
    nextPageToken?: string;
  }

  declare interface classroom$ListCourseWorkResponse {
    /**
     * Course work items that match the request.
     */
    courseWork?: classroom$CourseWork[];

    /**
     * Token identifying the next page of results to return. If empty, no further
     * results are available.
     */
    nextPageToken?: string;
  }

  declare interface classroom$ListCoursesResponse {
    /**
     * Courses that match the list request.
     */
    client$courses?: classroom$Course[];

    /**
     * Token identifying the next page of results to return. If empty, no further
     * results are available.
     */
    nextPageToken?: string;
  }

  declare interface classroom$ListGuardianInvitationsResponse {
    /**
     * Guardian invitations that matched the list request.
     */
    guardianInvitations?: classroom$GuardianInvitation[];

    /**
     * Token identifying the next page of results to return. If empty, no further
     * results are available.
     */
    nextPageToken?: string;
  }

  declare interface classroom$ListGuardiansResponse {
    /**
     * Guardians on this page of results that met the criteria specified in
     * the request.
     */
    guardians?: classroom$Guardian[];

    /**
     * Token identifying the next page of results to return. If empty, no further
     * results are available.
     */
    nextPageToken?: string;
  }

  declare interface classroom$ListInvitationsResponse {
    /**
     * Invitations that match the list request.
     */
    client$invitations?: classroom$Invitation[];

    /**
     * Token identifying the next page of results to return. If empty, no further
     * results are available.
     */
    nextPageToken?: string;
  }

  declare interface classroom$ListStudentSubmissionsResponse {
    /**
     * Token identifying the next page of results to return. If empty, no further
     * results are available.
     */
    nextPageToken?: string;

    /**
     * Student work that matches the request.
     */
    studentSubmissions?: classroom$StudentSubmission[];
  }

  declare interface classroom$ListStudentsResponse {
    /**
     * Token identifying the next page of results to return. If empty, no further
     * results are available.
     */
    nextPageToken?: string;

    /**
     * Students who match the list request.
     */
    students?: classroom$Student[];
  }

  declare interface classroom$ListTeachersResponse {
    /**
     * Token identifying the next page of results to return. If empty, no further
     * results are available.
     */
    nextPageToken?: string;

    /**
     * Teachers who match the list request.
     */
    teachers?: classroom$Teacher[];
  }

  declare interface classroom$Material {
    /**
     * Google Drive file material.
     */
    driveFile?: classroom$SharedDriveFile;

    /**
     * Google Forms material.
     */
    form?: classroom$Form;

    /**
     * Link material. On creation, will be upgraded to a more appropriate type
     * if possible, and this will be reflected in the response.
     */
    link?: classroom$Link;

    /**
     * YouTube video material.
     */
    youtubeVideo?: classroom$YouTubeVideo;
  }

  declare interface classroom$ModifyAnnouncementAssigneesRequest {
    /**
     * Mode of the announcement describing whether it will be accessible by all
     * students or specified individual students.
     */
    assigneeMode?: string;

    /**
     * Set which students can view or cannot view the announcement.
     * Must be specified only when `assigneeMode` is `INDIVIDUAL_STUDENTS`.
     */
    modifyIndividualStudentsOptions?: classroom$ModifyIndividualStudentsOptions;
  }

  declare interface classroom$ModifyAttachmentsRequest {
    /**
     * Attachments to add.
     * A student submission may not have more than 20 attachments.
     *
     * Form attachments are not supported.
     */
    addAttachments?: classroom$Attachment[];
  }

  declare interface classroom$ModifyCourseWorkAssigneesRequest {
    /**
     * Mode of the coursework describing whether it will be assigned to all
     * students or specified individual students.
     */
    assigneeMode?: string;

    /**
     * Set which students are assigned or not assigned to the coursework.
     * Must be specified only when `assigneeMode` is `INDIVIDUAL_STUDENTS`.
     */
    modifyIndividualStudentsOptions?: classroom$ModifyIndividualStudentsOptions;
  }

  declare interface classroom$ModifyIndividualStudentsOptions {
    /**
     * Ids of students to be added as having access to this
     * coursework/announcement.
     */
    addStudentIds?: string[];

    /**
     * Ids of students to be removed from having access to this
     * coursework/announcement.
     */
    removeStudentIds?: string[];
  }

  declare interface classroom$MultipleChoiceQuestion {
    /**
     * Possible choices.
     */
    choices?: string[];
  }

  declare interface classroom$MultipleChoiceSubmission {
    /**
     * Student's select choice.
     */
    answer?: string;
  }

  declare interface classroom$Name {
    /**
     * The user's last name.
     *
     * Read-only.
     */
    familyName?: string;

    /**
     * The user's full name formed by concatenating the first and last name
     * values.
     *
     * Read-only.
     */
    fullName?: string;

    /**
     * The user's first name.
     *
     * Read-only.
     */
    givenName?: string;
  }

  declare interface classroom$Registration {
    /**
     * The Cloud Pub/Sub topic that notifications are to be sent to.
     */
    cloudPubsubTopic?: classroom$CloudPubsubTopic;

    /**
     * The time until which the `Registration` is effective.
     *
     * This is a read-only field assigned by the server.
     */
    expiryTime?: string;

    /**
     * Specification for the class of notifications that Classroom should deliver
     * to the `destination`.
     */
    feed?: classroom$Feed;

    /**
     * A server-generated unique identifier for this `Registration`.
     *
     * Read-only.
     */
    registrationId?: string;
  }

  declare interface classroom$SharedDriveFile {
    /**
     * Drive file details.
     */
    driveFile?: classroom$DriveFile;

    /**
     * Mechanism by which students access the Drive item.
     */
    shareMode?: string;
  }

  declare interface classroom$ShortAnswerSubmission {
    /**
     * Student response to a short-answer question.
     */
    answer?: string;
  }

  declare interface classroom$StateHistory {
    /**
     * The teacher or student who made the change
     */
    actorUserId?: string;

    /**
     * The workflow pipeline stage.
     */
    state?: string;

    /**
     * When the submission entered this state.
     */
    stateTimestamp?: string;
  }

  declare interface classroom$Student {
    /**
     * Identifier of the course.
     *
     * Read-only.
     */
    courseId?: string;

    /**
     * Global user information for the student.
     *
     * Read-only.
     */
    profile?: classroom$UserProfile;

    /**
     * Information about a Drive Folder for this student's work in this course.
     * Only visible to the student and domain administrators.
     *
     * Read-only.
     */
    studentWorkFolder?: classroom$DriveFolder;

    /**
     * Identifier of the user.
     *
     * When specified as a parameter of a request, this identifier can be one of
     * the following:
     *
     * &#42; the numeric identifier for the user
     * &#42; the email address of the user
     * &#42; the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
  }

  declare interface classroom$StudentSubmission {
    /**
     * Absolute link to the submission in the Classroom web UI.
     *
     * Read-only.
     */
    alternateLink?: string;

    /**
     * Optional grade. If unset, no grade was set.
     * This value must be non-negative. Decimal (i.e. non-integer) values are
     * allowed, but will be rounded to two decimal places.
     *
     * This may be modified only by course teachers.
     */
    assignedGrade?: number;

    /**
     * Submission content when course_work_type is ASSIGNMENT.
     *
     * Students can modify this content using
     * google.classroom.Work.ModifyAttachments.
     */
    assignmentSubmission?: classroom$AssignmentSubmission;

    /**
     * Whether this student submission is associated with the Developer Console
     * project making the request.
     *
     * See google.classroom.Work.CreateCourseWork for more
     * details.
     *
     * Read-only.
     */
    associatedWithDeveloper?: boolean;

    /**
     * Identifier of the course.
     *
     * Read-only.
     */
    courseId?: string;

    /**
     * Identifier for the course work this corresponds to.
     *
     * Read-only.
     */
    courseWorkId?: string;

    /**
     * Type of course work this submission is for.
     *
     * Read-only.
     */
    courseWorkType?: string;

    /**
     * Creation time of this submission.
     * This may be unset if the student has not accessed this item.
     *
     * Read-only.
     */
    creationTime?: string;

    /**
     * Optional pending grade. If unset, no grade was set.
     * This value must be non-negative. Decimal (i.e. non-integer) values are
     * allowed, but will be rounded to two decimal places.
     *
     * This is only visible to and modifiable by course teachers.
     */
    draftGrade?: number;

    /**
     * Classroom-assigned Identifier for the student submission.
     * This is unique among submissions for the relevant course work.
     *
     * Read-only.
     */
    id?: string;

    /**
     * Whether this submission is late.
     *
     * Read-only.
     */
    late?: boolean;

    /**
     * Submission content when course_work_type is MULTIPLE_CHOICE_QUESTION.
     */
    multipleChoiceSubmission?: classroom$MultipleChoiceSubmission;

    /**
     * Submission content when course_work_type is SHORT_ANSWER_QUESTION.
     */
    shortAnswerSubmission?: classroom$ShortAnswerSubmission;

    /**
     * State of this submission.
     *
     * Read-only.
     */
    state?: string;

    /**
     * The history of the submission (includes state and grade histories).
     *
     * Read-only.
     */
    submissionHistory?: classroom$SubmissionHistory[];

    /**
     * Last update time of this submission.
     * This may be unset if the student has not accessed this item.
     *
     * Read-only.
     */
    updateTime?: string;

    /**
     * Identifier for the student that owns this submission.
     *
     * Read-only.
     */
    userId?: string;
  }

  declare interface classroom$SubmissionHistory {
    /**
     * The grade history information of the submission, if present.
     */
    gradeHistory?: classroom$GradeHistory;

    /**
     * The state history information of the submission, if present.
     */
    stateHistory?: classroom$StateHistory;
  }

  declare interface classroom$Teacher {
    /**
     * Identifier of the course.
     *
     * Read-only.
     */
    courseId?: string;

    /**
     * Global user information for the teacher.
     *
     * Read-only.
     */
    profile?: classroom$UserProfile;

    /**
     * Identifier of the user.
     *
     * When specified as a parameter of a request, this identifier can be one of
     * the following:
     *
     * &#42; the numeric identifier for the user
     * &#42; the email address of the user
     * &#42; the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
  }

  declare interface classroom$TimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
     * to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number;

    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    minutes?: number;

    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    nanos?: number;

    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
     * allow the value 60 if it allows leap-seconds.
     */
    seconds?: number;
  }

  declare interface classroom$UserProfile {
    /**
     * Email address of the user.
     *
     * Read-only.
     */
    emailAddress?: string;

    /**
     * Identifier of the user.
     *
     * Read-only.
     */
    id?: string;

    /**
     * Name of the user.
     *
     * Read-only.
     */
    name?: classroom$Name;

    /**
     * Global permissions of the user.
     *
     * Read-only.
     */
    permissions?: classroom$GlobalPermission[];

    /**
     * URL of user's profile photo.
     *
     * Read-only.
     */
    photoUrl?: string;

    /**
     * Represents whether a G Suite for Education user's domain administrator has
     * explicitly verified them as being a teacher. If the user is not a member of
     * a G Suite for Education domain, than this field will always be false.
     *
     * Read-only
     */
    verifiedTeacher?: boolean;
  }

  declare interface classroom$YouTubeVideo {
    /**
     * URL that can be used to view the YouTube video.
     *
     * Read-only.
     */
    alternateLink?: string;

    /**
     * YouTube API resource ID.
     */
    id?: string;

    /**
     * URL of a thumbnail image of the YouTube video.
     *
     * Read-only.
     */
    thumbnailUrl?: string;

    /**
     * Title of the YouTube video.
     *
     * Read-only.
     */
    title?: string;
  }

  declare interface classroom$AliasesResource {
    /**
     * Creates an alias for a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to create the
     * alias or for access errors.
     * &#42; `NOT_FOUND` if the course does not exist.
     * &#42; `ALREADY_EXISTS` if the alias already exists.
     * &#42; `FAILED_PRECONDITION` if the alias requested does not make sense for the
     * requesting user or course (for example, if a user not in a domain
     * attempts to access a domain-scoped alias).
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course to alias.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$CourseAlias>;

    /**
     * Deletes an alias of a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to remove the
     * alias or for access errors.
     * &#42; `NOT_FOUND` if the alias does not exist.
     * &#42; `FAILED_PRECONDITION` if the alias requested does not make sense for the
     * requesting user or course (for example, if a user not in a domain
     * attempts to delete a domain-scoped alias).
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Alias to delete.
       * This may not be the Classroom-assigned identifier.
       */
      alias: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course whose alias should be deleted.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Returns a list of aliases for a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * course or for access errors.
     * &#42; `NOT_FOUND` if the course does not exist.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * The identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Maximum number of items to return. Zero or unspecified indicates that the
       * server may assign a maximum.
       *
       * The server may return fewer than the specified number of results.
       */
      pageSize?: number,

      /**
       * nextPageToken
       * value returned from a previous
       * list call,
       * indicating that the subsequent page of results should be returned.
       *
       * The list request
       * must be otherwise identical to the one that resulted in this token.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$ListCourseAliasesResponse>;
  }

  declare interface classroom$AnnouncementsResource {
    /**
     * Creates an announcement.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course, create announcements in the requested course, share a
     * Drive attachment, or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course does not exist.
     * &#42; `FAILED_PRECONDITION` for the following request error:
     * &#42; AttachmentNotVisible
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Announcement>;

    /**
     * Deletes an announcement.
     *
     * This request must be made by the Developer Console project of the
     * [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
     * create the corresponding announcement item.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting developer project did not create
     * the corresponding announcement, if the requesting user is not permitted
     * to delete the requested course or for access errors.
     * &#42; `FAILED_PRECONDITION` if the requested announcement has already been
     * deleted.
     * &#42; `NOT_FOUND` if no course exists with the requested ID.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the announcement to delete.
       * This identifier is a Classroom-assigned identifier.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Returns an announcement.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course or announcement, or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course or announcement does not exist.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the announcement.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Announcement>;

    /**
     * Returns a list of announcements that the requester is permitted to view.
     *
     * Course students may only view `PUBLISHED` announcements. Course teachers
     * and domain administrators may view all announcements.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access
     * the requested course or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course does not exist.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * Restriction on the `state` of announcements returned.
       * If this argument is left unspecified, the default value is `PUBLISHED`.
       */
      announcementStates?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Optional sort ordering for results. A comma-separated list of fields with
       * an optional sort direction keyword. Supported field is `updateTime`.
       * Supported direction keywords are `asc` and `desc`.
       * If not specified, `updateTime desc` is the default behavior.
       * Examples: `updateTime asc`, `updateTime`
       */
      orderBy?: string,

      /**
       * Maximum number of items to return. Zero or unspecified indicates that the
       * server may assign a maximum.
       *
       * The server may return fewer than the specified number of results.
       */
      pageSize?: number,

      /**
       * nextPageToken
       * value returned from a previous
       * list call,
       * indicating that the subsequent page of results should be returned.
       *
       * The list request
       * must be otherwise identical to the one that resulted in this token.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$ListAnnouncementsResponse>;

    /**
     * Modifies assignee mode and options of an announcement.
     *
     * Only a teacher of the course that contains the announcement may
     * call this method.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course or course work or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course or course work does not exist.
     */
    modifyAssignees(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the announcement.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Announcement>;

    /**
     * Updates one or more fields of an announcement.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting developer project did not create
     * the corresponding announcement or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `FAILED_PRECONDITION` if the requested announcement has already been
     * deleted.
     * &#42; `NOT_FOUND` if the requested course or announcement does not exist
     */
    patch(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the announcement.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Mask that identifies which fields on the announcement to update.
       * This field is required to do an update. The update fails if invalid
       * fields are specified. If a field supports empty values, it can be cleared
       * by specifying it in the update mask and not in the Announcement object. If
       * a field that does not support empty values is included in the update mask
       * and not set in the Announcement object, an `INVALID_ARGUMENT` error will be
       * returned.
       *
       * The following fields may be specified by teachers:
       *
       * &#42; `text`
       * &#42; `state`
       * &#42; `scheduled_time`
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Announcement>;
  }

  declare interface classroom$StudentSubmissionsResource {
    /**
     * Returns a student submission.
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course, course work, or student submission or for
     * access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course, course work, or student submission
     * does not exist.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Identifier of the course work.
       */
      courseWorkId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the student submission.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$StudentSubmission>;

    /**
     * Returns a list of student submissions that the requester is permitted to
     * view, factoring in the OAuth scopes of the request.
     * `-` may be specified as the `course_work_id` to include student
     * submissions for multiple course work items.
     *
     * Course students may only view their own work. Course teachers
     * and domain administrators may view all student submissions.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course or course work, or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course does not exist.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Identifier of the student work to request.
       * This may be set to the string literal `"-"` to request student work for
       * all course work in the specified course.
       */
      courseWorkId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Requested lateness value. If specified, returned student submissions are
       * restricted by the requested value.
       * If unspecified, submissions are returned regardless of `late` value.
       */
      late?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Maximum number of items to return. Zero or unspecified indicates that the
       * server may assign a maximum.
       *
       * The server may return fewer than the specified number of results.
       */
      pageSize?: number,

      /**
       * nextPageToken
       * value returned from a previous
       * list call,
       * indicating that the subsequent page of results should be returned.
       *
       * The list request
       * must be otherwise identical to the one that resulted in this token.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Requested submission states. If specified, returned student submissions
       * match one of the specified submission states.
       */
      states?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * Optional argument to restrict returned student work to those owned by the
       * student with the specified identifier. The identifier can be one of the
       * following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       */
      userId?: string
    }): Request<classroom$ListStudentSubmissionsResponse>;

    /**
     * Modifies attachments of student submission.
     *
     * Attachments may only be added to student submissions belonging to course
     * work objects with a `workType` of `ASSIGNMENT`.
     *
     * This request must be made by the Developer Console project of the
     * [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
     * create the corresponding course work item.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course or course work, if the user is not permitted to modify
     * attachments on the requested student submission, or for
     * access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course, course work, or student submission
     * does not exist.
     */
    modifyAttachments(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Identifier of the course work.
       */
      courseWorkId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the student submission.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$StudentSubmission>;

    /**
     * Updates one or more fields of a student submission.
     *
     * See google.classroom.v1.StudentSubmission for details
     * of which fields may be updated and who may change them.
     *
     * This request must be made by the Developer Console project of the
     * [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
     * create the corresponding course work item.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting developer project did not create
     * the corresponding course work, if the user is not permitted to make the
     * requested modification to the student submission, or for
     * access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course, course work, or student submission
     * does not exist.
     */
    patch(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Identifier of the course work.
       */
      courseWorkId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the student submission.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Mask that identifies which fields on the student submission to update.
       * This field is required to do an update. The update fails if invalid
       * fields are specified.
       *
       * The following fields may be specified by teachers:
       *
       * &#42; `draft_grade`
       * &#42; `assigned_grade`
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$StudentSubmission>;

    /**
     * Reclaims a student submission on behalf of the student that owns it.
     *
     * Reclaiming a student submission transfers ownership of attached Drive
     * files to the student and update the submission state.
     *
     * Only the student that owns the requested student submission may call this
     * method, and only for a student submission that has been turned in.
     *
     * This request must be made by the Developer Console project of the
     * [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
     * create the corresponding course work item.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course or course work, unsubmit the requested student submission,
     * or for access errors.
     * &#42; `FAILED_PRECONDITION` if the student submission has not been turned in.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course, course work, or student submission
     * does not exist.
     */
    reclaim(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Identifier of the course work.
       */
      courseWorkId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the student submission.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Returns a student submission.
     *
     * Returning a student submission transfers ownership of attached Drive
     * files to the student and may also update the submission state.
     * Unlike the Classroom application, returning a student submission does not
     * set assignedGrade to the draftGrade value.
     *
     * Only a teacher of the course that contains the requested student submission
     * may call this method.
     *
     * This request must be made by the Developer Console project of the
     * [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
     * create the corresponding course work item.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course or course work, return the requested student submission,
     * or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course, course work, or student submission
     * does not exist.
     */
    return(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Identifier of the course work.
       */
      courseWorkId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the student submission.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Turns in a student submission.
     *
     * Turning in a student submission transfers ownership of attached Drive
     * files to the teacher and may also update the submission state.
     *
     * This may only be called by the student that owns the specified student
     * submission.
     *
     * This request must be made by the Developer Console project of the
     * [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
     * create the corresponding course work item.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course or course work, turn in the requested student submission,
     * or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course, course work, or student submission
     * does not exist.
     */
    turnIn(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Identifier of the course work.
       */
      courseWorkId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the student submission.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;
  }

  declare interface classroom$CourseWorkResource {
    /**
     * Creates course work.
     *
     * The resulting course work (and corresponding student submissions) are
     * associated with the Developer Console project of the
     * [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
     * make the request. Classroom API requests to modify course work and student
     * submissions must be made with an OAuth client ID from the associated
     * Developer Console project.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course, create course work in the requested course, share a
     * Drive attachment, or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course does not exist.
     * &#42; `FAILED_PRECONDITION` for the following request error:
     * &#42; AttachmentNotVisible
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$CourseWork>;

    /**
     * Deletes a course work.
     *
     * This request must be made by the Developer Console project of the
     * [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
     * create the corresponding course work item.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting developer project did not create
     * the corresponding course work, if the requesting user is not permitted
     * to delete the requested course or for access errors.
     * &#42; `FAILED_PRECONDITION` if the requested course work has already been
     * deleted.
     * &#42; `NOT_FOUND` if no course exists with the requested ID.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the course work to delete.
       * This identifier is a Classroom-assigned identifier.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Returns course work.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course or course work, or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course or course work does not exist.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the course work.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$CourseWork>;

    /**
     * Returns a list of course work that the requester is permitted to view.
     *
     * Course students may only view `PUBLISHED` course work. Course teachers
     * and domain administrators may view all course work.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access
     * the requested course or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course does not exist.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Restriction on the work status to return. Only courseWork that matches
       * is returned. If unspecified, items with a work status of `PUBLISHED`
       * is returned.
       */
      courseWorkStates?: string,

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
       * Optional sort ordering for results. A comma-separated list of fields with
       * an optional sort direction keyword. Supported fields are `updateTime`
       * and `dueDate`. Supported direction keywords are `asc` and `desc`.
       * If not specified, `updateTime desc` is the default behavior.
       * Examples: `dueDate asc,updateTime desc`, `updateTime,dueDate desc`
       */
      orderBy?: string,

      /**
       * Maximum number of items to return. Zero or unspecified indicates that the
       * server may assign a maximum.
       *
       * The server may return fewer than the specified number of results.
       */
      pageSize?: number,

      /**
       * nextPageToken
       * value returned from a previous
       * list call,
       * indicating that the subsequent page of results should be returned.
       *
       * The list request
       * must be otherwise identical to the one that resulted in this token.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$ListCourseWorkResponse>;

    /**
     * Modifies assignee mode and options of a coursework.
     *
     * Only a teacher of the course that contains the coursework may
     * call this method.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course or course work or for access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `NOT_FOUND` if the requested course or course work does not exist.
     */
    modifyAssignees(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the coursework.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$CourseWork>;

    /**
     * Updates one or more fields of a course work.
     *
     * See google.classroom.v1.CourseWork for details
     * of which fields may be updated and who may change them.
     *
     * This request must be made by the Developer Console project of the
     * [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
     * create the corresponding course work item.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting developer project did not create
     * the corresponding course work, if the user is not permitted to make the
     * requested modification to the student submission, or for
     * access errors.
     * &#42; `INVALID_ARGUMENT` if the request is malformed.
     * &#42; `FAILED_PRECONDITION` if the requested course work has already been
     * deleted.
     * &#42; `NOT_FOUND` if the requested course, course work, or student submission
     * does not exist.
     */
    patch(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the course work.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Mask that identifies which fields on the course work to update.
       * This field is required to do an update. The update fails if invalid
       * fields are specified. If a field supports empty values, it can be cleared
       * by specifying it in the update mask and not in the CourseWork object. If a
       * field that does not support empty values is included in the update mask and
       * not set in the CourseWork object, an `INVALID_ARGUMENT` error will be
       * returned.
       *
       * The following fields may be specified by teachers:
       *
       * &#42; `title`
       * &#42; `description`
       * &#42; `state`
       * &#42; `due_date`
       * &#42; `due_time`
       * &#42; `max_points`
       * &#42; `scheduled_time`
       * &#42; `submission_modification_mode`
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$CourseWork>;
    studentSubmissions: classroom$StudentSubmissionsResource;
  }

  declare interface classroom$StudentsResource {
    /**
     * Adds a user as a student of a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to create
     * students in this course or for access errors.
     * &#42; `NOT_FOUND` if the requested course ID does not exist.
     * &#42; `FAILED_PRECONDITION` if the requested user's account is disabled,
     * for the following request errors:
     * &#42; CourseMemberLimitReached
     * &#42; CourseNotModifiable
     * &#42; UserGroupsMembershipLimitReached
     * &#42; `ALREADY_EXISTS` if the user is already a student or teacher in the
     * course.
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course to create the student in.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

      /**
       * Enrollment code of the course to create the student in.
       * This code is required if userId
       * corresponds to the requesting user; it may be omitted if the requesting
       * user has administrative permissions to create students for any user.
       */
      enrollmentCode?: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Student>;

    /**
     * Deletes a student of a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to delete
     * students of this course or for access errors.
     * &#42; `NOT_FOUND` if no student of this course has the requested ID or if the
     * course does not exist.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * Identifier of the student to delete. The identifier can be one of the
       * following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       */
      userId: string
    }): Request<{}>;

    /**
     * Returns a student of a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to view
     * students of this course or for access errors.
     * &#42; `NOT_FOUND` if no student of this course has the requested ID or if the
     * course does not exist.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * Identifier of the student to return. The identifier can be one of the
       * following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       */
      userId: string
    }): Request<classroom$Student>;

    /**
     * Returns a list of students of this course that the requester
     * is permitted to view.
     *
     * This method returns the following error codes:
     *
     * &#42; `NOT_FOUND` if the course does not exist.
     * &#42; `PERMISSION_DENIED` for access errors.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Maximum number of items to return. Zero means no maximum.
       *
       * The server may return fewer than the specified number of results.
       */
      pageSize?: number,

      /**
       * nextPageToken
       * value returned from a previous
       * list call, indicating that
       * the subsequent page of results should be returned.
       *
       * The list request must be
       * otherwise identical to the one that resulted in this token.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$ListStudentsResponse>;
  }

  declare interface classroom$TeachersResource {
    /**
     * Creates a teacher of a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not  permitted to create
     * teachers in this course or for access errors.
     * &#42; `NOT_FOUND` if the requested course ID does not exist.
     * &#42; `FAILED_PRECONDITION` if the requested user's account is disabled,
     * for the following request errors:
     * &#42; CourseMemberLimitReached
     * &#42; CourseNotModifiable
     * &#42; CourseTeacherLimitReached
     * &#42; UserGroupsMembershipLimitReached
     * &#42; `ALREADY_EXISTS` if the user is already a teacher or student in the
     * course.
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Teacher>;

    /**
     * Deletes a teacher of a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to delete
     * teachers of this course or for access errors.
     * &#42; `NOT_FOUND` if no teacher of this course has the requested ID or if the
     * course does not exist.
     * &#42; `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher
     * of this course.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * Identifier of the teacher to delete. The identifier can be one of the
       * following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       */
      userId: string
    }): Request<{}>;

    /**
     * Returns a teacher of a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to view
     * teachers of this course or for access errors.
     * &#42; `NOT_FOUND` if no teacher of this course has the requested ID or if the
     * course does not exist.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * Identifier of the teacher to return. The identifier can be one of the
       * following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       */
      userId: string
    }): Request<classroom$Teacher>;

    /**
     * Returns a list of teachers of this course that the requester
     * is permitted to view.
     *
     * This method returns the following error codes:
     *
     * &#42; `NOT_FOUND` if the course does not exist.
     * &#42; `PERMISSION_DENIED` for access errors.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Identifier of the course.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
       */
      courseId: string,

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
       * Maximum number of items to return. Zero means no maximum.
       *
       * The server may return fewer than the specified number of results.
       */
      pageSize?: number,

      /**
       * nextPageToken
       * value returned from a previous
       * list call, indicating that
       * the subsequent page of results should be returned.
       *
       * The list request must be
       * otherwise identical to the one that resulted in this token.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$ListTeachersResponse>;
  }

  declare interface classroom$CoursesResource {
    /**
     * Creates a course.
     *
     * The user specified in `ownerId` is the owner of the created course
     * and added as a teacher.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to create
     * courses or for access errors.
     * &#42; `NOT_FOUND` if the primary teacher is not a valid user.
     * &#42; `FAILED_PRECONDITION` if the course owner's account is disabled or for
     * the following request errors:
     * &#42; UserGroupsMembershipLimitReached
     * &#42; `ALREADY_EXISTS` if an alias was specified in the `id` and
     * already exists.
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Course>;

    /**
     * Deletes a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to delete the
     * requested course or for access errors.
     * &#42; `NOT_FOUND` if no course exists with the requested ID.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the course to delete.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Returns a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access the
     * requested course or for access errors.
     * &#42; `NOT_FOUND` if no course exists with the requested ID.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the course to return.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Course>;

    /**
     * Returns a list of courses that the requesting user is permitted to view,
     * restricted to those that match the request. Returned courses are ordered by
     * creation time, with the most recently created coming first.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` for access errors.
     * &#42; `INVALID_ARGUMENT` if the query argument is malformed.
     * &#42; `NOT_FOUND` if any users specified in the query arguments do not exist.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Restricts returned courses to those in one of the specified states
       * The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED.
       */
      courseStates?: string,

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
       * Maximum number of items to return. Zero or unspecified indicates that the
       * server may assign a maximum.
       *
       * The server may return fewer than the specified number of results.
       */
      pageSize?: number,

      /**
       * nextPageToken
       * value returned from a previous
       * list call,
       * indicating that the subsequent page of results should be returned.
       *
       * The list request must be
       * otherwise identical to the one that resulted in this token.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Restricts returned courses to those having a student with the specified
       * identifier. The identifier can be one of the following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       */
      studentId?: string,

      /**
       * Restricts returned courses to those having a teacher with the specified
       * identifier. The identifier can be one of the following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       */
      teacherId?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$ListCoursesResponse>;

    /**
     * Updates one or more fields in a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to modify the
     * requested course or for access errors.
     * &#42; `NOT_FOUND` if no course exists with the requested ID.
     * &#42; `INVALID_ARGUMENT` if invalid fields are specified in the update mask or
     * if no update mask is supplied.
     * &#42; `FAILED_PRECONDITION` for the following request errors:
     * &#42; CourseNotModifiable
     */
    patch(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the course to update.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Mask that identifies which fields on the course to update.
       * This field is required to do an update. The update will fail if invalid
       * fields are specified. The following fields are valid:
       *
       * &#42; `name`
       * &#42; `section`
       * &#42; `descriptionHeading`
       * &#42; `description`
       * &#42; `room`
       * &#42; `courseState`
       * &#42; `ownerId`
       *
       * Note: patches to ownerId are treated as being effective immediately, but in
       * practice it may take some time for the ownership transfer of all affected
       * resources to complete.
       *
       * When set in a query parameter, this field should be specified as
       *
       * `updateMask=<field1>,<field2>,...`
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Course>;

    /**
     * Updates a course.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to modify the
     * requested course or for access errors.
     * &#42; `NOT_FOUND` if no course exists with the requested ID.
     * &#42; `FAILED_PRECONDITION` for the following request errors:
     * &#42; CourseNotModifiable
     */
    update(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the course to update.
       * This identifier can be either the Classroom-assigned identifier or an
       * alias.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Course>;
    aliases: classroom$AliasesResource;
    announcements: classroom$AnnouncementsResource;
    courseWork: classroom$CourseWorkResource;
    students: classroom$StudentsResource;
    teachers: classroom$TeachersResource;
  }

  declare interface classroom$InvitationsResource {
    /**
     * Accepts an invitation, removing it and adding the invited user to the
     * teachers or students (as appropriate) of the specified course. Only the
     * invited user may accept an invitation.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to accept the
     * requested invitation or for access errors.
     * &#42; `FAILED_PRECONDITION` for the following request errors:
     * &#42; CourseMemberLimitReached
     * &#42; CourseNotModifiable
     * &#42; CourseTeacherLimitReached
     * &#42; UserGroupsMembershipLimitReached
     * &#42; `NOT_FOUND` if no invitation exists with the requested ID.
     */
    accept(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the invitation to accept.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Creates an invitation. Only one invitation for a user and course may exist
     * at a time. Delete and re-create an invitation to make changes.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to create
     * invitations for this course or for access errors.
     * &#42; `NOT_FOUND` if the course or the user does not exist.
     * &#42; `FAILED_PRECONDITION` if the requested user's account is disabled or if
     * the user already has this role or a role with greater permissions.
     * &#42; `ALREADY_EXISTS` if an invitation for the specified user and course
     * already exists.
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Invitation>;

    /**
     * Deletes an invitation.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to delete the
     * requested invitation or for access errors.
     * &#42; `NOT_FOUND` if no invitation exists with the requested ID.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the invitation to delete.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Returns an invitation.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to view the
     * requested invitation or for access errors.
     * &#42; `NOT_FOUND` if no invitation exists with the requested ID.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Identifier of the invitation to return.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Invitation>;

    /**
     * Returns a list of invitations that the requesting user is permitted to
     * view, restricted to those that match the list request.
     *
     * &#42;Note:&#42; At least one of `user_id` or `course_id` must be supplied. Both
     * fields can be supplied.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` for access errors.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Restricts returned invitations to those for a course with the specified
       * identifier.
       */
      courseId?: string,

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
       * Maximum number of items to return. Zero means no maximum.
       *
       * The server may return fewer than the specified number of results.
       */
      pageSize?: number,

      /**
       * nextPageToken
       * value returned from a previous
       * list call, indicating
       * that the subsequent page of results should be returned.
       *
       * The list request must be
       * otherwise identical to the one that resulted in this token.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * Restricts returned invitations to those for a specific user. The identifier
       * can be one of the following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       */
      userId?: string
    }): Request<classroom$ListInvitationsResponse>;
  }

  declare interface classroom$RegistrationsResource {
    /**
     * Creates a `Registration`, causing Classroom to start sending notifications
     * from the provided `feed` to the provided `destination`.
     *
     * Returns the created `Registration`. Currently, this will be the same as
     * the argument, but with server-assigned fields such as `expiry_time` and
     * `id` filled in.
     *
     * Note that any value specified for the `expiry_time` or `id` fields will be
     * ignored.
     *
     * While Classroom may validate the `destination` and return errors on a best
     * effort basis, it is the caller's responsibility to ensure that it exists
     * and that Classroom has permission to publish to it.
     *
     * This method may return the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if:
     * &#42; the authenticated user does not have permission to receive
     * notifications from the requested field; or
     * &#42; the credential provided does not include the appropriate scope for the
     * requested feed.
     * &#42; another access error is encountered.
     * &#42; `INVALID_ARGUMENT` if:
     * &#42; no `destination` is specified, or the specified `destination` is not
     * valid; or
     * &#42; no `feed` is specified, or the specified `feed` is not valid.
     * &#42; `NOT_FOUND` if:
     * &#42; the specified `feed` cannot be located, or the requesting user does not
     * have permission to determine whether or not it exists; or
     * &#42; the specified `destination` cannot be located, or Classroom has not
     * been granted permission to publish to it.
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Registration>;

    /**
     * Deletes a `Registration`, causing Classroom to stop sending notifications
     * for that `Registration`.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The `registration_id` of the `Registration` to be deleted.
       */
      registrationId: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;
  }

  declare interface classroom$GuardianInvitationsResource {
    /**
     * Creates a guardian invitation, and sends an email to the guardian asking
     * them to confirm that they are the student's guardian.
     *
     * Once the guardian accepts the invitation, their `state` will change to
     * `COMPLETED` and they will start receiving guardian notifications. A
     * `Guardian` resource will also be created to represent the active guardian.
     *
     * The request object must have the `student_id` and
     * `invited_email_address` fields set. Failing to set these fields, or
     * setting any other fields in the request, will result in an error.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the current user does not have permission to
     * manage guardians, if the guardian in question has already rejected
     * too many requests for that student, if guardians are not enabled for the
     * domain in question, or for other access errors.
     * &#42; `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian
     * link limit.
     * &#42; `INVALID_ARGUMENT` if the guardian email address is not valid (for
     * example, if it is too long), or if the format of the student ID provided
     * cannot be recognized (it is not an email address, nor a `user_id` from
     * this API). This error will also be returned if read-only fields are set,
     * or if the `state` field is set to to a value other than `PENDING`.
     * &#42; `NOT_FOUND` if the student ID provided is a valid student ID, but
     * Classroom has no record of that student.
     * &#42; `ALREADY_EXISTS` if there is already a pending guardian invitation for
     * the student and `invited_email_address` provided, or if the provided
     * `invited_email_address` matches the Google account of an existing
     * `Guardian` for this user.
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * ID of the student (in standard format)
       */
      studentId: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$GuardianInvitation>;

    /**
     * Returns a specific guardian invitation.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to view
     * guardian invitations for the student identified by the `student_id`, if
     * guardians are not enabled for the domain in question, or for other
     * access errors.
     * &#42; `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
     * be recognized (it is not an email address, nor a `student_id` from the
     * API, nor the literal string `me`).
     * &#42; `NOT_FOUND` if Classroom cannot find any record of the given student or
     * `invitation_id`. May also be returned if the student exists, but the
     * requesting user does not have access to see that student.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The `id` field of the `GuardianInvitation` being requested.
       */
      invitationId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The ID of the student whose guardian invitation is being requested.
       */
      studentId: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$GuardianInvitation>;

    /**
     * Returns a list of guardian invitations that the requesting user is
     * permitted to view, filtered by the parameters provided.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if a `student_id` is specified, and the requesting
     * user is not permitted to view guardian invitations for that student, if
     * `"-"` is specified as the `student_id` and the user is not a domain
     * administrator, if guardians are not enabled for the domain in question,
     * or for other access errors.
     * &#42; `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
     * be recognized (it is not an email address, nor a `student_id` from the
     * API, nor the literal string `me`). May also be returned if an invalid
     * `page_token` or `state` is provided.
     * &#42; `NOT_FOUND` if a `student_id` is specified, and its format can be
     * recognized, but Classroom has no record of that student.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * If specified, only results with the specified `invited_email_address`
       * will be returned.
       */
      invitedEmailAddress?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Maximum number of items to return. Zero or unspecified indicates that the
       * server may assign a maximum.
       *
       * The server may return fewer than the specified number of results.
       */
      pageSize?: number,

      /**
       * nextPageToken
       * value returned from a previous
       * list call,
       * indicating that the subsequent page of results should be returned.
       *
       * The list request
       * must be otherwise identical to the one that resulted in this token.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * If specified, only results with the specified `state` values will be
       * returned. Otherwise, results with a `state` of `PENDING` will be returned.
       */
      states?: string,

      /**
       * The ID of the student whose guardian invitations are to be returned.
       * The identifier can be one of the following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       * &#42; the string literal `"-"`, indicating that results should be returned for
       * all students that the requesting user is permitted to view guardian
       * invitations.
       */
      studentId: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$ListGuardianInvitationsResponse>;

    /**
     * Modifies a guardian invitation.
     *
     * Currently, the only valid modification is to change the `state` from
     * `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the current user does not have permission to
     * manage guardians, if guardians are not enabled for the domain in question
     * or for other access errors.
     * &#42; `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state.
     * &#42; `INVALID_ARGUMENT` if the format of the student ID provided
     * cannot be recognized (it is not an email address, nor a `user_id` from
     * this API), or if the passed `GuardianInvitation` has a `state` other than
     * `COMPLETE`, or if it modifies fields other than `state`.
     * &#42; `NOT_FOUND` if the student ID provided is a valid student ID, but
     * Classroom has no record of that student, or if the `id` field does not
     * refer to a guardian invitation known to Classroom.
     */
    patch(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The `id` field of the `GuardianInvitation` to be modified.
       */
      invitationId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The ID of the student whose guardian invitation is to be modified.
       */
      studentId: string,

      /**
       * Mask that identifies which fields on the course to update.
       * This field is required to do an update. The update will fail if invalid
       * fields are specified. The following fields are valid:
       *
       * &#42; `state`
       *
       * When set in a query parameter, this field should be specified as
       *
       * `updateMask=<field1>,<field2>,...`
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$GuardianInvitation>;
  }

  declare interface classroom$GuardiansResource {
    /**
     * Deletes a guardian.
     *
     * The guardian will no longer receive guardian notifications and the guardian
     * will no longer be accessible via the API.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if no user that matches the provided `student_id`
     * is visible to the requesting user, if the requesting user is not
     * permitted to manage guardians for the student identified by the
     * `student_id`, if guardians are not enabled for the domain in question,
     * or for other access errors.
     * &#42; `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
     * be recognized (it is not an email address, nor a `student_id` from the
     * API).
     * &#42; `NOT_FOUND` if the requesting user is permitted to modify guardians for
     * the requested `student_id`, but no `Guardian` record exists for that
     * student with the provided `guardian_id`.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The `id` field from a `Guardian`.
       */
      guardianId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The student whose guardian is to be deleted. One of the following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       */
      studentId: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;

    /**
     * Returns a specific guardian.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if no user that matches the provided `student_id`
     * is visible to the requesting user, if the requesting user is not
     * permitted to view guardian information for the student identified by the
     * `student_id`, if guardians are not enabled for the domain in question,
     * or for other access errors.
     * &#42; `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
     * be recognized (it is not an email address, nor a `student_id` from the
     * API, nor the literal string `me`).
     * &#42; `NOT_FOUND` if the requesting user is permitted to view guardians for
     * the requested `student_id`, but no `Guardian` record exists for that
     * student that matches the provided `guardian_id`.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The `id` field from a `Guardian`.
       */
      guardianId: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * The student whose guardian is being requested. One of the following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       */
      studentId: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$Guardian>;

    /**
     * Returns a list of guardians that the requesting user is permitted to
     * view, restricted to those that match the request.
     *
     * To list guardians for any student that the requesting user may view
     * guardians for, use the literal character `-` for the student ID.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if a `student_id` is specified, and the requesting
     * user is not permitted to view guardian information for that student, if
     * `"-"` is specified as the `student_id` and the user is not a domain
     * administrator, if guardians are not enabled for the domain in question,
     * if the `invited_email_address` filter is set by a user who is not a
     * domain administrator, or for other access errors.
     * &#42; `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
     * be recognized (it is not an email address, nor a `student_id` from the
     * API, nor the literal string `me`). May also be returned if an invalid
     * `page_token` is provided.
     * &#42; `NOT_FOUND` if a `student_id` is specified, and its format can be
     * recognized, but Classroom has no record of that student.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Filter results by the email address that the original invitation was sent
       * to, resulting in this guardian link.
       * This filter can only be used by domain administrators.
       */
      invitedEmailAddress?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Maximum number of items to return. Zero or unspecified indicates that the
       * server may assign a maximum.
       *
       * The server may return fewer than the specified number of results.
       */
      pageSize?: number,

      /**
       * nextPageToken
       * value returned from a previous
       * list call,
       * indicating that the subsequent page of results should be returned.
       *
       * The list request
       * must be otherwise identical to the one that resulted in this token.
       */
      pageToken?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Filter results by the student who the guardian is linked to.
       * The identifier can be one of the following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       * &#42; the string literal `"-"`, indicating that results should be returned for
       * all students that the requesting user has access to view.
       */
      studentId: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<classroom$ListGuardiansResponse>;
  }

  declare interface classroom$UserProfilesResource {
    /**
     * Returns a user profile.
     *
     * This method returns the following error codes:
     *
     * &#42; `PERMISSION_DENIED` if the requesting user is not permitted to access
     * this user profile, if no profile exists with the requested ID, or for
     * access errors.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * Identifier of the profile to return. The identifier can be one of the
       * following:
       *
       * &#42; the numeric identifier for the user
       * &#42; the email address of the user
       * &#42; the string literal `"me"`, indicating the requesting user
       */
      userId: string
    }): Request<classroom$UserProfile>;
    guardianInvitations: classroom$GuardianInvitationsResource;
    guardians: classroom$GuardiansResource;
  }
}
