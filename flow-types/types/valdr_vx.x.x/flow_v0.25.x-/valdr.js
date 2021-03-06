declare module "valdr" {
  /**
   * Custom validators must implement this interface to provide custom validation logic.
   */
  declare interface valdr$ValdrValidator {
    /**
     * Custom validator's name, that will be set in the violation's validator field.
     */
    name: string;

    /**
     * Method to be called to perform custom validation over given value.
     */
    validate(
      value: any,
      validationArguments?: {
        [argumentName: string]: any
      }
    ): boolean;
  }

  declare interface valdr$ValdrConstraintValidator {
    [argumentName: string]: any;
    message: string;
  }

  declare interface valdr$ValdrConstraintFieldName {
    [validatorName: string]: valdr$ValdrConstraintValidator;
  }

  declare interface valdr$ValdrConstraintTypeName {
    [fieldName: string]: valdr$ValdrConstraintFieldName;
  }

  declare interface valdr$ValdrConstraints {
    [typeName: string]: valdr$ValdrConstraintTypeName;
  }

  declare type valdr$ValdrViolation = {
    valid: boolean,
    value: string,
    field: string,
    type: string,
    validator: string
  } & valdr$ValdrConstraintValidator;

  declare interface valdr$ValdrValidationResult {
    valid: boolean;
    violations: valdr$ValdrViolation[];
    validationResults: valdr$ValdrViolation[];
  }

  declare interface valdr$Valdr {
    /**
     * Validates the value of the given type with the constraints for the given field name.
     * @param typeName the type name.
     * @param fieldName the field name.
     * @param value the value to validate.
     * @returns {valdr$ValdrValidationResult} the validation result.
     */
    validate(
      typeName: string,
      fieldName: string,
      value: string
    ): valdr$ValdrValidationResult;

    /**
     * Adds a new list of constraints (JSON Object).
     * @param newConstraints the list of constraints (JSON Object).
     */
    addConstraints(newConstraints: valdr$ValdrConstraints): void;

    /**
     * Removes one or many contraints.
     * @param constraintNames the name or array of constraint names.
     */
    removeConstraints(constraintNames: string | string[]): void;

    /**
     * Gets the list of constraints (JSON Object).
     * @returns the list of constraints.
     */
    getConstraints(): valdr$ValdrConstraints;

    /**
     * Sets custom classes on the surrounding elements.
     * @param newClasses the new classes.
     */
    setClasses(newClasses: {
      valid: string,
      invalid: string
    }): void;
  }

  declare interface valdr$ValdrProvider {
    /**
     * Adds a new list of constraints (JSON Object).
     * @param newConstraints the list of constraints (JSON Object).
     */
    addConstraints(newConstraints: valdr$ValdrConstraints): void;

    /**
     * Removes one or many contraints.
     * @param constraintNames the name or array of constraint names.
     */
    removeConstraints(constraintNames: string | string[]): void;

    /**
     * Sets the constraint URL (eg "/api/constraints").
     * @param url the URL of the contraints.
     */
    setConstraintUrl(url: string): void;

    /**
     * Adds a custom validator.
     * @param validatorName the name of the custom validator.
     */
    addValidator(validatorName: string): void;

    /**
     * Adds a constraint validator alias.
     * @param valdrName the validator name.
     * @param alias the validator alias name.
     */
    addConstraintAlias(valdrName: string, alias: string): void;
  }
}
