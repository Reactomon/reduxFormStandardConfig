import React from 'react';
import { Field, reduxForm } from 'redux-form';
import createValidateMethod from '../../utils/reduxFormValidations/createValidateMethod';
import getStandardConfig from '../../utils/reduxFormValidations/validatorStandardConfig';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span style={{ color:'red'}}>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

const HomeForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component={renderField}
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component={renderField}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="emailAddress"
            component={renderField}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Phone</label>
        <div>
          <Field
            name="phoneNumber"
            component={renderField}
            type="phone"
            placeholder="Phone"
          />
        </div>
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
  form: 'homeForm',
  ...validateMethod
})(HomeForm);
