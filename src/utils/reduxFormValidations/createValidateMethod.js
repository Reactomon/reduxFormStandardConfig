import invariant from 'invariant';
import validatorDefaultMessages from './validatorDefaultMessages';
import validatorMethods from './validatorMethods';
import formErrorCMSMessage from './formErrorCMSMessage';
export const GENERAL_ERROR_FIELD_NAME = '_error';

const EMPTY_ARRAY = [];
const DEFAULT_OPTIONS = {
  stopOnFirstError: false,
};

function isCustomRule(ruleName) {
  return ruleName.startsWith('custom');
}

function getErrorMessage(messages, fieldName, ruleName, linkedPropsValues, linkedFieldsValues) {
  const specificMessage =
    (messages[fieldName] && messages[fieldName][ruleName]) || messages[fieldName];
  if (typeof specificMessage === 'function') {
    return specificMessage(linkedPropsValues, linkedFieldsValues);
  }
  return (
    specificMessage || validatorDefaultMessages[ruleName] || validatorDefaultMessages.genericError
  );
}

/* eslint-disable */
function evaluateAllSyncRules(
  rules = {},
  messages = {},
  options = DEFAULT_OPTIONS,
  values = {},
  props = {}
) {

  const errors = {};
  Object.keys(rules).forEach(fieldName => {
    const fieldRules = rules[fieldName];
    Object.keys(fieldRules).forEach(ruleName => {
      const validator = validatorMethods[ruleName];
      invariant(
        typeof validator === 'function' || isCustomRule(ruleName),
        `createValidateMethod, evaluateAllSyncRules: unknown validation rule name '${ruleName}'`
      );
      const param = fieldRules[ruleName];
      invariant(
        !isCustomRule(ruleName) ||
          typeof param === 'function' ||
          (param && typeof param.param === 'function'),
        `createValidateMethod, evaluateAllSyncRules: custom validation rule '${ruleName}' has value of type '${typeof param}', expected 'function' or an object with a 'param' field that is a function`
      );

      const linkedRulesValidated = true;

      const linkedFieldsValues = param.linkedFields
        ? param.linkedFields.map(linkedFieldName => values[linkedFieldName])
        : EMPTY_ARRAY;
      const linkedPropsValues = param.linkedProps
        ? param.linkedProps.map(linkedPropName => props[linkedPropName])
        : EMPTY_ARRAY;
      let isFieldInvalid = false;
      if (isCustomRule(ruleName)) {
        if (typeof param === 'function') {
          isFieldInvalid = linkedRulesValidated && !param(values, props, validatorMethods);
        } else if (typeof param.param === 'function') {
          isFieldInvalid = linkedRulesValidated && !param.param(values, props, validatorMethods);
        }
      } else {
        let validationParam = param.param || param;
        if (typeof param.param === 'function') {
          validationParam = param.param(linkedPropsValues, linkedFieldsValues);
        }
        isFieldInvalid =
          linkedRulesValidated &&
          !validator(
            values[fieldName] || '',
            validationParam,
            linkedPropsValues,
            linkedFieldsValues
          );
      }

      let messagesObject = messages;
      if (typeof messages === 'function') {
        messagesObject = messages(props);
      }
      if (isFieldInvalid && !errors[fieldName]) {
        errors[fieldName] = getErrorMessage(
          messagesObject,
          fieldName,
          ruleName,
          linkedPropsValues,
          linkedFieldsValues
        );
      }
    });
  });
  return getErrorMessageLabels(errors, props);
}

export function getErrorMessageLabels(errors, props) {
  Object.keys(errors).forEach(key => {
    errors[key] = props.formErrorMessage
      ? ` ${props.formErrorMessage[errors[key]]}`
      : ` ${formErrorCMSMessage[errors[key]]}`;
  });
  return errors;
}

function validateSection(sectionConfig, values, props) {
  const { rules, messages, asyncValidators, options, ...subSections } = sectionConfig;
  const errors = evaluateAllSyncRules(rules, messages, options, values, props);
  if (values) {
    Object.keys(subSections).forEach(sectionName => {
      errors[sectionName] = validateSection(
        subSections[sectionName],
        values[sectionName] || {},
        props
      );
    });
  }

  return errors;
}

export default function createValidateMethod(config) {
  return {
    validate: validateSection.bind(null, config),
  };
}
