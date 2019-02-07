declare module "gapi.client.prediction" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    hostedmodels: typeof client$hostedmodels,
    trainedmodels: typeof client$trainedmodels
  };

  /**
   * Load Prediction API v1.6
   */
  declare function client$load(
    name: "prediction",
    version: "v1.6"
  ): PromiseLike<void>;

  declare function client$load(
    name: "prediction",
    version: "v1.6",
    callback: () => any
  ): void;

  declare var client$hostedmodels: prediction$prediction$HostedmodelsResource;

  declare var client$trainedmodels: prediction$prediction$TrainedmodelsResource;

  declare interface prediction$Analyze {
    /**
     * Description of the data the model was trained on.
     */
    dataDescription?: {
      /**
       * Description of the input features in the data set.
       */
      features?: Array<{
        /**
         * Description of the categorical values of this feature.
         */
        categorical?: {
          /**
           * Number of categorical values for this feature in the data.
           */
          count?: string,

          /**
           * List of all the categories for this feature in the data set.
           */
          values?: Array<{
            /**
             * Number of times this feature had this value.
             */
            count?: string,

            /**
             * The category name.
             */
            value?: string
          }>
        },

        /**
         * The feature index.
         */
        index?: string,

        /**
         * Description of the numeric values of this feature.
         */
        numeric?: {
          /**
           * Number of numeric values for this feature in the data set.
           */
          count?: string,

          /**
           * Mean of the numeric values of this feature in the data set.
           */
          mean?: string,

          /**
           * Variance of the numeric values of this feature in the data set.
           */
          variance?: string
        },

        /**
         * Description of multiple-word text values of this feature.
         */
        text?: {
          /**
           * Number of multiple-word text values for this feature.
           */
          count?: string
        }
      }>,

      /**
       * Description of the output value or label.
       */
      outputFeature?: {
        /**
         * Description of the output values in the data set.
         */
        numeric?: {
          /**
           * Number of numeric output values in the data set.
           */
          count?: string,

          /**
           * Mean of the output values in the data set.
           */
          mean?: string,

          /**
           * Variance of the output values in the data set.
           */
          variance?: string
        },

        /**
         * Description of the output labels in the data set.
         */
        text?: Array<{
          /**
           * Number of times the output label occurred in the data set.
           */
          count?: string,

          /**
           * The output label.
           */
          value?: string
        }>
      }
    };

    /**
     * List of errors with the data.
     */
    errors?: Array<Record<string, string>>;

    /**
     * The unique name for the predictive model.
     */
    id?: string;

    /**
     * What kind of resource this is.
     */
    kind?: string;

    /**
     * Description of the model.
     */
    modelDescription?: {
      /**
       * An output confusion matrix. This shows an estimate for how this model will do in predictions. This is first indexed by the true class label. For each
       * true class label, this provides a pair {predicted_label, count}, where count is the estimated number of times the model will predict the predicted
       * label given the true label. Will not output if more then 100 classes (Categorical models only).
       */
      confusionMatrix?: Record<string, Record<string, string>>,

      /**
       * A list of the confusion matrix row totals.
       */
      confusionMatrixRowTotals?: Record<string, string>,

      /**
       * Basic information about the model.
       */
      modelinfo?: prediction$Insert2
    };

    /**
     * A URL to re-request this resource.
     */
    selfLink?: string;
  }

  declare interface prediction$Input {
    /**
     * Input to the model for a prediction.
     */
    input?: {
      /**
       * A list of input features, these can be strings or doubles.
       */
      csvInstance?: any[]
    };
  }

  declare interface prediction$Insert {
    /**
     * The unique name for the predictive model.
     */
    id?: string;

    /**
     * Type of predictive model (classification or regression).
     */
    modelType?: string;

    /**
     * The Id of the model to be copied over.
     */
    sourceModel?: string;

    /**
     * Google storage location of the training data file.
     */
    storageDataLocation?: string;

    /**
     * Google storage location of the preprocessing pmml file.
     */
    storagePMMLLocation?: string;

    /**
     * Google storage location of the pmml model file.
     */
    storagePMMLModelLocation?: string;

    /**
     * Instances to train model on.
     */
    trainingInstances?: Array<{
      /**
       * The input features for this instance.
       */
      csvInstance?: any[],

      /**
       * The generic output value - could be regression or class label.
       */
      output?: string
    }>;

    /**
     * A class weighting function, which allows the importance weights for class labels to be specified (Categorical models only).
     */
    utility?: Array<Record<string, number>>;
  }

  declare interface prediction$Insert2 {
    /**
     * Insert time of the model (as a RFC 3339 timestamp).
     */
    created?: string;

    /**
     * The unique name for the predictive model.
     */
    id?: string;

    /**
     * What kind of resource this is.
     */
    kind?: string;

    /**
     * Model metadata.
     */
    modelInfo?: {
      /**
       * Estimated accuracy of model taking utility weights into account (Categorical models only).
       */
      classWeightedAccuracy?: string,

      /**
       * A number between 0.0 and 1.0, where 1.0 is 100% accurate. This is an estimate, based on the amount and quality of the training data, of the estimated
       * prediction accuracy. You can use this is a guide to decide whether the results are accurate enough for your needs. This estimate will be more reliable
       * if your real input data is similar to your training data (Categorical models only).
       */
      classificationAccuracy?: string,

      /**
       * An estimated mean squared error. The can be used to measure the quality of the predicted model (Regression models only).
       */
      meanSquaredError?: string,

      /**
       * Type of predictive model (CLASSIFICATION or REGRESSION).
       */
      modelType?: string,

      /**
       * Number of valid data instances used in the trained model.
       */
      numberInstances?: string,

      /**
       * Number of class labels in the trained model (Categorical models only).
       */
      numberLabels?: string
    };

    /**
     * Type of predictive model (CLASSIFICATION or REGRESSION).
     */
    modelType?: string;

    /**
     * A URL to re-request this resource.
     */
    selfLink?: string;

    /**
     * Google storage location of the training data file.
     */
    storageDataLocation?: string;

    /**
     * Google storage location of the preprocessing pmml file.
     */
    storagePMMLLocation?: string;

    /**
     * Google storage location of the pmml model file.
     */
    storagePMMLModelLocation?: string;

    /**
     * Training completion time (as a RFC 3339 timestamp).
     */
    trainingComplete?: string;

    /**
     * The current status of the training job. This can be one of following: RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
     */
    trainingStatus?: string;
  }

  declare interface prediction$List {
    /**
     * List of models.
     */
    items?: prediction$Insert2[];

    /**
     * What kind of resource this is.
     */
    kind?: string;

    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string;

    /**
     * A URL to re-request this resource.
     */
    selfLink?: string;
  }

  declare interface prediction$Output {
    /**
     * The unique name for the predictive model.
     */
    id?: string;

    /**
     * What kind of resource this is.
     */
    kind?: string;

    /**
     * The most likely class label (Categorical models only).
     */
    outputLabel?: string;

    /**
     * A list of class labels with their estimated probabilities (Categorical models only).
     */
    outputMulti?: Array<{
      /**
       * The class label.
       */
      label?: string,

      /**
       * The probability of the class label.
       */
      score?: string
    }>;

    /**
     * The estimated regression value (Regression models only).
     */
    outputValue?: string;

    /**
     * A URL to re-request this resource.
     */
    selfLink?: string;
  }

  declare interface prediction$Update {
    /**
     * The input features for this instance.
     */
    csvInstance?: any[];

    /**
     * The generic output value - could be regression or class label.
     */
    output?: string;
  }

  declare interface prediction$HostedmodelsResource {
    /**
     * Submit input and request an output against a hosted model.
     */
    predict(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The name of a hosted model.
       */
      hostedModelName: string,

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
       * The project associated with the model.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<prediction$Output>;
  }

  declare interface prediction$TrainedmodelsResource {
    /**
     * Get analysis of the model and the data the model was trained on.
     */
    analyze(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The unique name for the predictive model.
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
       * The project associated with the model.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<prediction$Analyze>;

    /**
     * Delete a trained model.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The unique name for the predictive model.
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
       * The project associated with the model.
       */
      project: string,

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
     * Check training status of your model.
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
       * The unique name for the predictive model.
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
       * The project associated with the model.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<prediction$Insert2>;

    /**
     * Train a Prediction API model.
     */
    insert(request: {
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
       * The project associated with the model.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<prediction$Insert2>;

    /**
     * List available models.
     */
    list(request: {
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
       * Maximum number of results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pagination token.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project associated with the model.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<prediction$List>;

    /**
     * Submit model id and request a prediction.
     */
    predict(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The unique name for the predictive model.
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
       * The project associated with the model.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<prediction$Output>;

    /**
     * Add new data to a trained model.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The unique name for the predictive model.
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
       * The project associated with the model.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<prediction$Insert2>;
  }
}
