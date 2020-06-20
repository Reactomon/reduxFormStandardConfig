import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import createValidateMethod from '../../utils/reduxFormValidations/createValidateMethod';
import getStandardConfig from '../../utils/reduxFormValidations/validatorStandardConfig';

const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
  ) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );
  
  const renderCheckbox = ({ input, label }) => (
    <Checkbox
      label={label}
      checked={input.value ? true : false}
      onCheck={input.onChange}
    />
  );
  
  const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup
      {...input}
      {...rest}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  );
  
  const renderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom },
  ) => (
    <SelectField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
    />
  );
  
  const HomeForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="firstName"
            component={renderTextField}
            label="First Name"
          />
        </div>
        <div>
          <Field name="lastName" component={renderTextField} label="Last Name" />
        </div>
        <div>
          <Field name="emailAddress" component={renderTextField} label="Email" />
        </div>
        <div>
          <Field
            name="phoneNumber"
            component={renderTextField}
            label="Phone"
            multiLine={true}
          />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    );
  };

const validateMethod = createValidateMethod(
    getStandardConfig([
      'firstName',
      'lastName',
      'phoneNumber',
      'emailAddress',
      'confirmEmailAddress',
    ])
  );

export default reduxForm({
  form: 'home',
  ...validateMethod
})(HomeForm);
