declare module "gapi.client.testing" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    projects: typeof gapi$client$projects,
    testEnvironmentCatalog: typeof gapi$client$testEnvironmentCatalog
  };

  /**
   * Load Google Cloud Testing API v1
   */
  declare function gapi$client$load(
    name: "testing",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "testing",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$projects: testing$ProjectsResource;

  declare var gapi$client$testEnvironmentCatalog: testing$TestEnvironmentCatalogResource;

  declare interface gapi$client$testing$Account {
    /**
     * An automatic google login account
     */
    googleAuto?: any;
  }

  declare interface gapi$client$testing$AndroidDevice {
    /**
     * The id of the Android device to be used.
     * Use the EnvironmentDiscoveryService to get supported options.
     * Required
     */
    androidModelId?: string;

    /**
     * The id of the Android OS version to be used.
     * Use the EnvironmentDiscoveryService to get supported options.
     * Required
     */
    androidVersionId?: string;

    /**
     * The locale the test device used for testing.
     * Use the EnvironmentDiscoveryService to get supported options.
     * Required
     */
    locale?: string;

    /**
     * How the device is oriented during the test.
     * Use the EnvironmentDiscoveryService to get supported options.
     * Required
     */
    orientation?: string;
  }

  declare interface gapi$client$testing$AndroidDeviceCatalog {
    /**
     * The set of supported Android device models.
     * @OutputOnly
     */
    models?: testing$AndroidModel[];

    /**
     * The set of supported runtime configurations.
     * @OutputOnly
     */
    runtimeConfiguration?: testing$AndroidRuntimeConfiguration;

    /**
     * The set of supported Android OS versions.
     * @OutputOnly
     */
    versions?: testing$AndroidVersion[];
  }

  declare interface gapi$client$testing$AndroidDeviceList {
    /**
     * A list of Android devices
     * Required
     */
    androidDevices?: gapi$client$testing$AndroidDevice[];
  }

  declare interface gapi$client$testing$AndroidInstrumentationTest {
    /**
     * The APK for the application under test.
     * Required
     */
    appApk?: testing$FileReference;

    /**
     * The java package for the application under test.
     * Optional, default is determined by examining the application's manifest.
     */
    appPackageId?: string;

    /**
     * The option of whether running each test within its own invocation of
     * instrumentation with Android Test Orchestrator or not.
     * &#42;&#42; Orchestrator is only compatible with AndroidJUnitRunner version 1.0 or
     * higher! &#42;&#42;
     * Orchestrator offers the following benefits:
     * - No shared state
     * - Crashes are isolated
     * - Logs are scoped per test
     *
     * See
     * <https://developer.android.com/training/testing/junit-runner.html#using-android-test-orchestrator>
     * for more information about Android Test Orchestrator.
     *
     * Optional, if empty, test will be run without orchestrator.
     */
    orchestratorOption?: string;

    /**
     * The APK containing the test code to be executed.
     * Required
     */
    testApk?: testing$FileReference;

    /**
     * The java package for the test to be executed.
     * Optional, default is determined by examining the application's manifest.
     */
    testPackageId?: string;

    /**
     * The InstrumentationTestRunner class.
     * Optional, default is determined by examining the application's manifest.
     */
    testRunnerClass?: string;

    /**
     * Each target must be fully qualified with the package name or class name,
     * in one of these formats:
     * - "package package_name"
     * - "class package_name.class_name"
     * - "class package_name.class_name#method_name"
     *
     * Optional, if empty, all targets in the module will be run.
     */
    testTargets?: string[];
  }

  declare interface gapi$client$testing$AndroidMatrix {
    /**
     * The ids of the set of Android device to be used.
     * Use the EnvironmentDiscoveryService to get supported options.
     * Required
     */
    androidModelIds?: string[];

    /**
     * The ids of the set of Android OS version to be used.
     * Use the EnvironmentDiscoveryService to get supported options.
     * Required
     */
    androidVersionIds?: string[];

    /**
     * The set of locales the test device will enable for testing.
     * Use the EnvironmentDiscoveryService to get supported options.
     * Required
     */
    locales?: string[];

    /**
     * The set of orientations to test with.
     * Use the EnvironmentDiscoveryService to get supported options.
     * Required
     */
    orientations?: string[];
  }

  declare interface gapi$client$testing$AndroidModel {
    /**
     * The company that this device is branded with.
     * Example: "Google", "Samsung"
     * @OutputOnly
     */
    brand?: string;

    /**
     * The name of the industrial design.
     * This corresponds to android.os.Build.DEVICE
     * @OutputOnly
     */
    codename?: string;

    /**
     * Whether this device is virtual or physical.
     * @OutputOnly
     */
    form?: string;

    /**
     * The unique opaque id for this model.
     * Use this for invoking the TestExecutionService.
     * @OutputOnly
     */
    id?: string;

    /**
     * The manufacturer of this device.
     * @OutputOnly
     */
    manufacturer?: string;

    /**
     * The human-readable marketing name for this device model.
     * Examples: "Nexus 5", "Galaxy S5"
     * @OutputOnly
     */
    name?: string;

    /**
     * Screen density in DPI.
     * This corresponds to ro.sf.lcd_density
     * @OutputOnly
     */
    screenDensity?: number;

    /**
     * Screen size in the horizontal (X) dimension measured in pixels.
     * @OutputOnly
     */
    screenX?: number;

    /**
     * Screen size in the vertical (Y) dimension measured in pixels.
     * @OutputOnly
     */
    screenY?: number;

    /**
     * The list of supported ABIs for this device.
     * This corresponds to either android.os.Build.SUPPORTED_ABIS (for API level
     * 21 and above) or android.os.Build.CPU_ABI/CPU_ABI2.
     * The most preferred ABI is the first element in the list.
     *
     * Elements are optionally prefixed by "version_id:" (where version_id is
     * the id of an AndroidVersion), denoting an ABI that is supported only on
     * a particular version.
     * @OutputOnly
     */
    supportedAbis?: string[];

    /**
     * The set of Android versions this device supports.
     * @OutputOnly
     */
    supportedVersionIds?: string[];

    /**
     * Tags for this dimension.
     * Examples: "default", "preview", "deprecated"
     */
    tags?: string[];
  }

  declare interface gapi$client$testing$AndroidRoboTest {
    /**
     * The APK for the application under test.
     * Required
     */
    appApk?: testing$FileReference;

    /**
     * The initial activity that should be used to start the app.
     * Optional
     */
    appInitialActivity?: string;

    /**
     * The java package for the application under test.
     * Optional, default is determined by examining the application's manifest.
     */
    appPackageId?: string;

    /**
     * The max depth of the traversal stack Robo can explore. Needs to be at least
     * 2 to make Robo explore the app beyond the first activity.
     * Default is 50.
     * Optional
     */
    maxDepth?: number;

    /**
     * The max number of steps Robo can execute.
     * Default is no limit.
     * Optional
     */
    maxSteps?: number;

    /**
     * A set of directives Robo should apply during the crawl.
     * This allows users to customize the crawl. For example, the username and
     * password for a test account can be provided.
     * Optional
     */
    roboDirectives?: testing$RoboDirective[];
  }

  declare interface gapi$client$testing$AndroidRuntimeConfiguration {
    /**
     * The set of available locales.
     * @OutputOnly
     */
    locales?: testing$Locale[];

    /**
     * The set of available orientations.
     * @OutputOnly
     */
    orientations?: testing$Orientation[];
  }

  declare interface gapi$client$testing$AndroidTestLoop {
    /**
     * The APK for the application under test.
     * Required
     */
    appApk?: testing$FileReference;

    /**
     * The java package for the application under test.
     * Optional, default is determined by examining the application's manifest.
     */
    appPackageId?: string;

    /**
     * The list of scenario labels that should be run during the test.
     * The scenario labels should map to labels defined in the application's
     * manifest. For example, player_experience and
     * com.google.test.loops.player_experience add all of the loops labeled in the
     * manifest with the com.google.test.loops.player_experience name to the
     * execution.
     * Optional. Scenarios can also be specified in the scenarios field.
     */
    scenarioLabels?: string[];

    /**
     * The list of scenarios that should be run during the test.
     * Optional, default is all test loops, derived from the application's
     * manifest.
     */
    scenarios?: number[];
  }

  declare interface gapi$client$testing$AndroidVersion {
    /**
     * The API level for this Android version.
     * Examples: 18, 19
     * @OutputOnly
     */
    apiLevel?: number;

    /**
     * The code name for this Android version.
     * Examples: "JellyBean", "KitKat"
     * @OutputOnly
     */
    codeName?: string;

    /**
     * Market share for this version.
     * @OutputOnly
     */
    distribution?: testing$Distribution;

    /**
     * An opaque id for this Android version.
     * Use this id to invoke the TestExecutionService.
     * @OutputOnly
     */
    id?: string;

    /**
     * The date this Android version became available in the market.
     * @OutputOnly
     */
    releaseDate?: testing$Date;

    /**
     * Tags for this dimension.
     * Examples: "default", "preview", "deprecated"
     */
    tags?: string[];

    /**
     * A string representing this version of the Android OS.
     * Examples: "4.3", "4.4"
     * @OutputOnly
     */
    versionString?: string;
  }

  declare interface gapi$client$testing$CancelTestMatrixResponse {
    /**
     * The current rolled-up state of the test matrix.
     * If this state is already final, then the cancelation request will
     * have no effect.
     */
    testState?: string;
  }

  declare interface gapi$client$testing$ClientInfo {
    /**
     * The list of detailed information about client.
     */
    clientInfoDetails?: testing$ClientInfoDetail[];

    /**
     * Client name, such as gcloud.
     * Required
     */
    name?: string;
  }

  declare interface gapi$client$testing$ClientInfoDetail {
    /**
     * The key of detailed client information.
     * Required
     */
    key?: string;

    /**
     * The value of detailed client information.
     * Required
     */
    value?: string;
  }

  declare interface gapi$client$testing$Date {
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

  declare interface gapi$client$testing$DeviceFile {
    /**
     * A reference to an opaque binary blob file
     */
    obbFile?: testing$ObbFile;
  }

  declare interface gapi$client$testing$Distribution {
    /**
     * The estimated fraction (0-1) of the total market with this configuration.
     * @OutputOnly
     */
    marketShare?: number;

    /**
     * The time this distribution was measured.
     * @OutputOnly
     */
    measurementTime?: string;
  }

  declare interface gapi$client$testing$Environment {
    /**
     * An Android device which must be used with an Android test.
     */
    androidDevice?: gapi$client$testing$AndroidDevice;
  }

  declare interface gapi$client$testing$EnvironmentMatrix {
    /**
     * A list of Android devices; the test will be run only on the specified
     * devices.
     */
    androidDeviceList?: gapi$client$testing$AndroidDeviceList;

    /**
     * A matrix of Android devices.
     */
    androidMatrix?: gapi$client$testing$AndroidMatrix;
  }

  declare interface gapi$client$testing$EnvironmentVariable {
    /**
     * Key for the environment variable
     */
    key?: string;

    /**
     * Value for the environment variable
     */
    value?: string;
  }

  declare interface gapi$client$testing$FileReference {
    /**
     * A path to a file in Google Cloud Storage.
     * Example: gs://build-app-1414623860166/app-debug-unaligned.apk
     */
    gcsPath?: string;
  }

  declare interface gapi$client$testing$GoogleCloudStorage {
    /**
     * The path to a directory in GCS that will
     * eventually contain the results for this test.
     * The requesting user must have write access on the bucket in the supplied
     * path.
     * Required
     */
    gcsPath?: string;
  }

  declare interface gapi$client$testing$Locale {
    /**
     * The id for this locale.
     * Example: "en_US"
     * @OutputOnly
     */
    id?: string;

    /**
     * A human-friendly name for this language/locale.
     * Example: "English"
     * @OutputOnly
     */
    name?: string;

    /**
     * A human-friendy string representing the region for this locale.
     * Example: "United States"
     * Not present for every locale.
     * @OutputOnly
     */
    region?: string;

    /**
     * Tags for this dimension.
     * Examples: "default"
     */
    tags?: string[];
  }

  declare interface gapi$client$testing$NetworkConfiguration {
    /**
     * The emulation rule applying to the download traffic
     */
    downRule?: testing$TrafficRule;

    /**
     * The unique opaque id for this network traffic configuration
     * @OutputOnly
     */
    id?: string;

    /**
     * The emulation rule applying to the upload traffic
     */
    upRule?: testing$TrafficRule;
  }

  declare interface gapi$client$testing$NetworkConfigurationCatalog {
    configurations?: gapi$client$testing$NetworkConfiguration[];
  }

  declare interface gapi$client$testing$ObbFile {
    /**
     * Opaque Binary Blob (OBB) file(s) to install on the device
     * Required
     */
    obb?: gapi$client$testing$FileReference;

    /**
     * OBB file name which must conform to the format as specified by
     * Android
     * e.g. [main|patch].0300110.com.example.android.obb
     * which will be installed into
     * <shared-storage>/Android/obb/<package-name>/
     * on the device
     * Required
     */
    obbFileName?: string;
  }

  declare interface gapi$client$testing$Orientation {
    /**
     * The id for this orientation.
     * Example: "portrait"
     * @OutputOnly
     */
    id?: string;

    /**
     * A human-friendly name for this orientation.
     * Example: "portrait"
     * @OutputOnly
     */
    name?: string;

    /**
     * Tags for this dimension.
     * Examples: "default"
     */
    tags?: string[];
  }

  declare interface gapi$client$testing$ResultStorage {
    /**
     * Required.
     */
    googleCloudStorage?: gapi$client$testing$GoogleCloudStorage;

    /**
     * The tool results execution that results are written to.
     * @OutputOnly
     */
    toolResultsExecution?: testing$ToolResultsExecution;

    /**
     * The tool results history that contains the tool results execution that
     * results are written to.
     *
     * Optional, if not provided the service will choose an appropriate value.
     */
    toolResultsHistory?: testing$ToolResultsHistory;
  }

  declare interface gapi$client$testing$RoboDirective {
    /**
     * The type of action that Robo should perform on the specified element.
     * Required.
     */
    actionType?: string;

    /**
     * The text that Robo is directed to set. If left empty, the directive will be
     * treated as a CLICK on the element matching the resource_name.
     * Optional
     */
    inputText?: string;

    /**
     * The android resource name of the target UI element
     * For example,
     * in Java: R.string.foo
     * in xml: @string/foo
     * Only the “foo” part is needed.
     * Reference doc:
     * https://developer.android.com/guide/topics/resources/accessing-resources.html
     * Required
     */
    resourceName?: string;
  }

  declare interface gapi$client$testing$TestDetails {
    /**
     * If the TestState is ERROR, then this string will contain human-readable
     * details about the error.
     * @OutputOnly
     */
    errorMessage?: string;

    /**
     * Human-readable, detailed descriptions of the test's progress.
     * For example: "Provisioning a device", "Starting Test".
     *
     * During the course of execution new data may be appended
     * to the end of progress_messages.
     * @OutputOnly
     */
    progressMessages?: string[];
  }

  declare interface gapi$client$testing$TestEnvironmentCatalog {
    /**
     * Android devices suitable for running Android Instrumentation Tests.
     */
    androidDeviceCatalog?: gapi$client$testing$AndroidDeviceCatalog;

    /**
     * Supported network configurations
     */
    networkConfigurationCatalog?: gapi$client$testing$NetworkConfigurationCatalog;
  }

  declare interface gapi$client$testing$TestExecution {
    /**
     * How the host machine(s) are configured.
     * @OutputOnly
     */
    environment?: gapi$client$testing$Environment;

    /**
     * Unique id set by the backend.
     * @OutputOnly
     */
    id?: string;

    /**
     * Id of the containing TestMatrix.
     * @OutputOnly
     */
    matrixId?: string;

    /**
     * The cloud project that owns the test execution.
     * @OutputOnly
     */
    projectId?: string;

    /**
     * Indicates the current progress of the test execution (e.g., FINISHED).
     * @OutputOnly
     */
    state?: string;

    /**
     * Additional details about the running test.
     * @OutputOnly
     */
    testDetails?: gapi$client$testing$TestDetails;

    /**
     * How to run the test.
     * @OutputOnly
     */
    testSpecification?: testing$TestSpecification;

    /**
     * The time this test execution was initially created.
     * @OutputOnly
     */
    timestamp?: string;

    /**
     * Where the results for this execution are written.
     * @OutputOnly
     */
    toolResultsStep?: testing$ToolResultsStep;
  }

  declare interface gapi$client$testing$TestMatrix {
    /**
     * Information about the client which invoked the test.
     * Optional
     */
    clientInfo?: gapi$client$testing$ClientInfo;

    /**
     * How the host machine(s) are configured.
     * Required
     */
    environmentMatrix?: gapi$client$testing$EnvironmentMatrix;

    /**
     * Describes why the matrix is considered invalid.
     * Only useful for matrices in the INVALID state.
     * @OutputOnly
     */
    invalidMatrixDetails?: string;

    /**
     * The cloud project that owns the test matrix.
     * @OutputOnly
     */
    projectId?: string;

    /**
     * Where the results for the matrix are written.
     * Required
     */
    resultStorage?: gapi$client$testing$ResultStorage;

    /**
     * Indicates the current progress of the test matrix (e.g., FINISHED)
     * @OutputOnly
     */
    state?: string;

    /**
     * The list of test executions that the service creates for this matrix.
     * @OutputOnly
     */
    testExecutions?: gapi$client$testing$TestExecution[];

    /**
     * Unique id set by the service.
     * @OutputOnly
     */
    testMatrixId?: string;

    /**
     * How to run the test.
     * Required
     */
    testSpecification?: testing$TestSpecification;

    /**
     * The time this test matrix was initially created.
     * @OutputOnly
     */
    timestamp?: string;
  }

  declare interface gapi$client$testing$TestSetup {
    /**
     * The device will be logged in on this account for the duration of the test.
     * Optional
     */
    account?: gapi$client$testing$Account;

    /**
     * The directories on the device to upload to GCS at the end of the test;
     * they must be absolute, whitelisted paths.
     * Refer to RegularFile for whitelisted paths.
     * Optional
     */
    directoriesToPull?: string[];

    /**
     * Environment variables to set for the test (only applicable for
     * instrumentation tests).
     */
    environmentVariables?: gapi$client$testing$EnvironmentVariable[];

    /**
     * Optional
     */
    filesToPush?: gapi$client$testing$DeviceFile[];

    /**
     * The network traffic profile used for running the test.
     * Optional
     */
    networkProfile?: string;
  }

  declare interface gapi$client$testing$TestSpecification {
    /**
     * An Android instrumentation test.
     */
    androidInstrumentationTest?: gapi$client$testing$AndroidInstrumentationTest;

    /**
     * An Android robo test.
     */
    androidRoboTest?: gapi$client$testing$AndroidRoboTest;

    /**
     * An Android Application with a Test Loop
     */
    androidTestLoop?: gapi$client$testing$AndroidTestLoop;

    /**
     * Enables automatic Google account login.
     * If set, the service will automatically generate a Google test account and
     * add it to the device, before executing the test. Note that test accounts
     * might be reused.
     * Many applications show their full set of functionalities when an account is
     * present on the device. Logging into the device with these generated
     * accounts allows testing more functionalities.
     * Default is false.
     * Optional
     */
    autoGoogleLogin?: boolean;

    /**
     * Disables performance metrics recording; may reduce test latency.
     */
    disablePerformanceMetrics?: boolean;

    /**
     * Disables video recording; may reduce test latency.
     */
    disableVideoRecording?: boolean;

    /**
     * Test setup requirements e.g. files to install, bootstrap scripts
     * Optional
     */
    testSetup?: gapi$client$testing$TestSetup;

    /**
     * Max time a test execution is allowed to run before it is
     * automatically cancelled.
     * Optional, default is 5 min.
     */
    testTimeout?: string;
  }

  declare interface gapi$client$testing$ToolResultsExecution {
    /**
     * A tool results execution ID.
     * @OutputOnly
     */
    executionId?: string;

    /**
     * A tool results history ID.
     * @OutputOnly
     */
    historyId?: string;

    /**
     * The cloud project that owns the tool results execution.
     * @OutputOnly
     */
    projectId?: string;
  }

  declare interface gapi$client$testing$ToolResultsHistory {
    /**
     * A tool results history ID.
     * Required
     */
    historyId?: string;

    /**
     * The cloud project that owns the tool results history.
     * Required
     */
    projectId?: string;
  }

  declare interface gapi$client$testing$ToolResultsStep {
    /**
     * A tool results execution ID.
     * @OutputOnly
     */
    executionId?: string;

    /**
     * A tool results history ID.
     * @OutputOnly
     */
    historyId?: string;

    /**
     * The cloud project that owns the tool results step.
     * @OutputOnly
     */
    projectId?: string;

    /**
     * A tool results step ID.
     * @OutputOnly
     */
    stepId?: string;
  }

  declare interface gapi$client$testing$TrafficRule {
    /**
     * Bandwidth in kbits/second
     */
    bandwidth?: number;

    /**
     * Burst size in kbits
     */
    burst?: number;

    /**
     * Packet delay, must be >= 0
     */
    delay?: string;

    /**
     * Packet duplication ratio (0.0 - 1.0)
     */
    packetDuplicationRatio?: number;

    /**
     * Packet loss ratio (0.0 - 1.0)
     */
    packetLossRatio?: number;
  }

  declare interface gapi$client$testing$TestMatricesResource {
    /**
     * Cancels unfinished test executions in a test matrix.
     * This call returns immediately and cancellation proceeds asychronously.
     * If the matrix is already final, this operation will have no effect.
     *
     * May return any of the following canonical error codes:
     *
     * - PERMISSION_DENIED - if the user is not authorized to read project
     * - INVALID_ARGUMENT - if the request is malformed
     * - NOT_FOUND - if the Test Matrix does not exist
     */
    cancel(request: {
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
       * Cloud project that owns the test.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Test matrix that will be canceled.
       */
      testMatrixId: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$testing$CancelTestMatrixResponse>;

    /**
     * Request to run a matrix of tests according to the given specifications.
     * Unsupported environments will be returned in the state UNSUPPORTED.
     * Matrices are limited to at most 200 supported executions.
     *
     * May return any of the following canonical error codes:
     *
     * - PERMISSION_DENIED - if the user is not authorized to write to project
     * - INVALID_ARGUMENT - if the request is malformed or if the matrix expands
     * to more than 200 supported executions
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
       * The GCE project under which this job will run.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * A string id used to detect duplicated requests.
       * Ids are automatically scoped to a project, so
       * users should ensure the ID is unique per-project.
       * A UUID is recommended.
       *
       * Optional, but strongly recommended.
       */
      requestId?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$testing$TestMatrix>;

    /**
     * Check the status of a test matrix.
     *
     * May return any of the following canonical error codes:
     *
     * - PERMISSION_DENIED - if the user is not authorized to read project
     * - INVALID_ARGUMENT - if the request is malformed
     * - NOT_FOUND - if the Test Matrix does not exist
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
       * Cloud project that owns the test matrix.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Unique test matrix id which was assigned by the service.
       */
      testMatrixId: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$testing$TestMatrix>;
  }

  declare interface gapi$client$testing$ProjectsResource {
    testMatrices: gapi$client$testing$TestMatricesResource;
  }

  declare interface gapi$client$testing$TestEnvironmentCatalogResource {
    /**
     * Get the catalog of supported test environments.
     *
     * May return any of the following canonical error codes:
     *
     * - INVALID_ARGUMENT - if the request is malformed
     * - NOT_FOUND - if the environment type does not exist
     * - INTERNAL - if an internal error occurred
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
       * The type of environment that should be listed.
       * Required
       */
      environmentType: string,

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
       * For authorization, the cloud project requesting the TestEnvironmentCatalog.
       * Optional
       */
      projectId?: string,

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
    }): Request<gapi$client$testing$TestEnvironmentCatalog>;
  }
}
