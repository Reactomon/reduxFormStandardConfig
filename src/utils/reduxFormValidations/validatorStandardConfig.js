const enterPhoneNumber = 'lbl_err_phonenumber_required';
const validPhoneNumber = 'lbl_err_phonenumber_phone';
const validStreetAddress = 'lbl_err_validstreetaddress';
const ssnMessage = 'lbl_err_ssnumber_ssn';

export const formValidationMessages = {
  message: {
    nonEmpty: 'lbl_err_message_required',
  },
  gender: {
    required: 'lbl_err_gender_required',
  },
  shareToEmailAddresses: {
    required: 'lbl_err_toemail_required',
    multiEmails: 'lbl_err_toemail_required',
  },
  shareFromEmailAddresses: {
    required: 'lbl_err_email_req',
    email: 'lbl_err_email',
  },
  subject: {
    nonEmpty: 'lbl_err_subject_required',
    required: 'lbl_err_subject_required',
  },
  childName: {
    nonEmpty: 'lbl_err_name_nonempty',
    name: 'lbl_err_name_name',
    maxLength: 'lbl_err_name_maxlength',
  },
  acceptAddChildAgreement: {
    required: 'lbl_err_accept_tna_required',
  },
  addressLine1: {
    required: validStreetAddress,
    address: 'lbl_err_addressline1_address',
    minLength: validStreetAddress,
    maxLength: 'lbl_err_addressline1_maxlength',
  },
  storeAddressLocator: {
    required: 'lbl_storelanding_validErrorLabel',
    address: 'lbl_storelanding_invalidAddressError',
    minLength: 'lbl_storelanding_validErrorLabel',
  },
  addressLine2: {
    address: 'lbl_err_addressline2_address',
    maxLength: validStreetAddress,
  },
  city: {
    nonEmpty: 'lbl_err_city_nonempty',
    city: 'lbl_err_city_city',
    maxLength: 'lbl_err_city_nonempty',
  },
  country: {
    required: 'lbl_err_country_required',
  },
  userBirthMonth: {
    userBirthday: 'lbl_err_userbirthdaymonth_required',
  },
  userBirthYear: {
    userBirthday: 'lbl_err_userbirthdayyear_required',
  },
  childBirthMonth: {
    required: 'lbl_err_userbirthdaymonth_required',
  },
  childBirthYear: {
    required: 'lbl_err_userbirthdayyear_required',
  },
  state: {
    stateRequired: (linkedPropsValues, linkedFieldsValues) =>
      linkedFieldsValues[0] === 'US'
        ? 'lbl_err_state_staterequired_us'
        : 'lbl_err_state_staterequired_nonus',
  },
  firstName: {
    nonEmpty: 'lbl_err_firstname_nonempty',
    name: 'lbl_err_firstname_name',
    maxLength: 'lbl_err_firstname_maxlength',
  },
  firstName_alt: {
    nonEmpty: 'lbl_err_firstname_nonempty',
    name: 'lbl_err_firstname_name',
    maxLength: 'lbl_err_firstname_maxlength',
  },
  lastName: {
    nonEmpty: 'lbl_err_lastname_nonempty',
    name: 'lbl_err_lastname_name',
    maxLength: 'lbl_err_lastname_maxlength',
  },
  lastName_alt: {
    nonEmpty: 'lbl_err_lastname_nonempty',
    name: 'lbl_err_lastname_name',
    maxLength: 'lbl_err_lastname_maxlength',
  },
  phoneNumber: {
    required: enterPhoneNumber,
    phone: validPhoneNumber,
  },
  zipCode: {
    required: 'lbl_err_zipcode_required',
    zipcode: 'lbl_err_zipcode_zipcode',
  },
  noCountryZip: {
    required: 'lbl_err_zipcode_required',
    noCountryZip: 'lbl_err_zipcode_zipcode',
  },
  recaptchaToken: {
    required: 'lbl_err_recaptchatoken_required',
  },
  cardNumber: {
    required: 'lbl_err_cardnumber_required',
    cardNumberForType: 'lbl_err_cardnumber_type',
    plccEnabled: 'lbl_err_cardnumber_plccenabled',
  },
  expYear: {
    required: 'lbl_err_expYear',
    expiration: 'lbl_err_expYear',
  },
  expMonth: {
    required: 'lbl_err_expMonth',
    expiration: 'lbl_err_expMonth',
  },
  giftCardNumber: 'lbl_err_giftcardnumber',
  cardPin: 'lbl_err_cardpin',

  Email: {
    required: `lbl_err_email_req`,
    validEmail: 'lbl_err_email_validemail',
  },
  emailAddress: {
    required: `lbl_err_email_req`,
    emailPattern: 'lbl_err_email',
  },
  emailAddress_alt: {
    required: `lbl_err_email_req`,
    emailPattern: 'lbl_err_email',
  },
  confirmEmailAddress: {
    required: 'lbl_err_confirmemailaddress_required',
    matchEmail: 'lbl_err_confirmemailaddress_matchemail',
  },
  legacyPassword: {
    required: 'lbl_err_req',
  },
  password: {
    required: 'lbl_err_password_required',
    password: 'lbl_err_password_password',
  },
  currentPassword: {
    required: 'lbl_err_password_required',
    password: 'lbl_err_currentpassword_password',
  },
  confirmPassword: {
    required: 'lbl_err_password_password',
    equalTo: 'lbl_err_currentpassword_equalto',
  },
  emailAddressNoAsync: {
    required: `lbl_err_email_req`,
    email: 'lbl_err_email',
    validEmail: 'lbl_err_emailaddressnoasync',
  },
  dateOfBirthBothRequired: {
    userDateOfBirth: 'lbl_err_dob_required',
  },
  airMilesAccountNumber: 'lbl_err_airmilesaccountnumber',
  associateId: 'lbl_err_associateid',
  iAgree: {
    required: 'lbl_err_iagree',
  },
  preScreenCode: {
    alphanumeric: 'lbl_err_prescreencode',
  },
  ssNumber: {
    ssn: ssnMessage,
    nonSequentialNumber: ssnMessage,
    required: ssnMessage,
  },
  birthDate: 'lbl_err_birthdate',
  statewocountry: {
    required: 'lbl_err_statewocountry_required',
  },
  date: {
    dob: 'lbl_err_date_dob',
  },
  month: {
    dob: 'lbl_err_month_dob',
  },
  year: {
    dob: 'lbl_err_year_dob',
  },
  orderNumber: 'lbl_err_ordernumber',
  cvvCode: {
    required: 'lbl_err_cvvcode_required',
    cvvNumber: 'lbl_err_cvvcode_cvvnumber',
    cvvLengthThree: 'lbl_err_cvvcode_cvvlengththree',
    cvvLengthFour: 'lbl_err_cvvcode_cvvlengthfour',
  },
  phoneNumberWithAlt: {
    eitherRequired: enterPhoneNumber,
    phone: validPhoneNumber,
    required: validPhoneNumber,
  },
  altPhoneNumber: {
    eitherRequired: enterPhoneNumber,
    phone: validPhoneNumber,
    notEqualTo: 'lbl_err_altphonenumber_notequalto',
  },
  storeNumber: {
    required: 'lbl_err_store_number_required',
    maxLength: 'lbl_err_store_number_invalid',
    number: 'lbl_err_store_number_invalid',
  },
  registerNumber: {
    required: 'lbl_err_register_number_required',
    maxLength: 'lbl_err_register_number_invalid',
    number: 'lbl_err_register_number_invalid',
  },
  transactionNumber: {
    required: 'lbl_err_transaction_number_required',
    maxLength: 'lbl_err_transaction_number_invalid',
    number: 'lbl_err_transaction_number_invalid',
  },
  transactionDate: {
    required: 'lbl_err_transaction_date_required',
  },
  orderDate: {
    required: 'lbl_err_order_date_required',
  },
  promoId: 'lbl_err_airmilesaccountnumber',
  listName: {
    nonEmpty: 'lbl_err_listname_required',
  },
};

export const formValidationRules = {
  shareToEmailAddresses: {
    required: true,
    multiEmails: true,
  },
  shareFromEmailAddresses: {
    required: true,
    email: true,
  },
  subject: {
    nonEmpty: true,
    required: true,
  },
  message: {
    nonEmpty: true,
  },
  gender: {
    required: true,
  },
  childName: {
    nonEmpty: true,
    name: true,
    maxLength: 50,
  },
  acceptAddChildAgreement: {
    required: true,
  },
  addressLine1: {
    required: true,
    address: true,
    minLength: 5,
    maxLength: 30,
  },
  storeAddressLocator: {
    required: true,
    address: true,
    minLength: 3,
  },
  addressLine2: {
    address: true,
    maxLength: 30,
  },
  city: {
    nonEmpty: true,
    city: true,
    maxLength: 20,
  },
  state: {
    stateRequired: {
      linkedFields: ['country'],
    },
  },
  country: {
    required: true,
  },

  userBirthMonth: {
    userBirthday: {
      linkedProps: ['values'],
    },
  },
  userBirthYear: {
    userBirthday: {
      linkedProps: ['values'],
    },
  },
  childBirthMonth: {
    required: true,
  },
  childBirthYear: {
    required: true,
  },
  firstName: {
    nonEmpty: true,
    name: true,
    maxLength: 50,
  },
  firstName_alt: {
    nonEmpty: true,
    name: true,
    maxLength: 50,
  },
  lastName: {
    nonEmpty: true,
    name: true,
    maxLength: 50,
  },
  lastName_alt: {
    nonEmpty: true,
    name: true,
    maxLength: 50,
  },
  phoneNumber: {
    required: true,
    phone: true,
  },
  zipCode: {
    required: true,
    zipcode: {
      linkedFields: ['country'],
    },
  },
  noCountryZip: {
    required: true,
    noCountryZip: true,
  },
  recaptchaToken: {
    required: true,
  },
  cardNumber: {
    required: true,
    cardNumberForType: {
      linkedProps: ['cardType', 'isPLCCEnabled'],
      linkedFields: ['cardType'],
    },
    plccEnabled: {
      linkedProps: ['cardType', 'isPLCCEnabled'],
      linkedFields: ['cardType'],
    },
  },
  expMonth: {
    required: true,
    expiration: {
      linkedFields: ['expMonth', 'expYear'],
      depends: {
        expYY: { required: true },
      },
    },
  },
  expYear: {
    required: true,
    expiration: { linkedFields: ['expMonth', 'expYear'] },
  },
  giftCardNumber: {
    number: true,
    required: true,
    exactLength: 19,
  },
  cardPin: {
    required: true,
    number: true,
    exactLength: 4,
  },
  Email: {
    required: true,
    validEmail: true,
  },
  emailAddress: {
    required: true,
    emailPattern: 'isValid',
    validEmail: true,
  },
  emailAddress_alt: {
    required: true,
    emailPattern: 'isValid',
    validEmail: true,
  },
  confirmEmailAddress: {
    required: true,
    matchEmail: {
      linkedFields: ['emailAddress'],
    },
  },
  password: {
    required: true,
    password: true,
  },
  currentPassword: {
    required: true,
    password: true,
  },
  confirmPassword: {
    required: true,
    equalTo: {
      linkedFields: ['password'],
    },
  },
  emailAddressNoAsync: {
    required: true,
    email: true,
  },
  legacyPassword: {
    required: true,
  },
  orderNumber: {
    required: true,
    minLength: 6,
    number: true,
  },
  dateOfBirthBothRequired: {
    userDateOfBirth: { linkedFields: ['userBirthYear'] },
  },
  airMilesAccountNumber: {
    number: true,
    exactLength: 11,
  },
  associateId: {
    required: true,
    number: true,
  },
  iAgree: {
    required: true,
  },
  preScreenCode: {
    alphanumeric: true,
  },
  ssNumber: {
    ssn: true,
    nonSequentialNumber: true,
    required: true,
  },
  statewocountry: {
    required: true,
  },
  date: {
    dob: true,
  },
  month: {
    dob: true,
  },
  year: {
    dob: true,
  },
  cvvCode: {
    required: true,
    cvvNumber: true,
    cvvLengthThree: {
      linkedFields: ['cardType'],
    },
    cvvLengthFour: {
      linkedFields: ['cardType'],
    },
  },
  phoneNumberWithAlt: {
    phone: true,
    eitherRequired: {
      linkedFields: ['altPhoneNumber'],
    },
  },
  altPhoneNumber: {
    phone: true,
    eitherRequired: {
      linkedFields: ['phoneNumberWithAlt'],
    },
    notEqualTo: {
      linkedFields: ['phoneNumberWithAlt'],
    },
  },
  storeNumber: {
    required: true,
    maxLength: 4,
    number: true,
  },
  registerNumber: {
    required: true,
    maxLength: 2,
    number: true,
  },
  transactionNumber: {
    required: true,
    maxLength: 4,
    number: true,
  },
  orderDate: {
    required: true,
  },
  transactionDate: {
    required: true,
  },
  promoId: {
    number: true,
    exactLength: 11,
  },
  listName: {
    nonEmpty: true,
    required: true,
  },
};

function getFieldAndConfigNames(element) {
  if (typeof element === 'string') {
    return { fieldName: element, configName: element };
  }
  if (typeof element === 'object') {
    const elementKeys = Object.keys(element);
    return { fieldName: elementKeys[0], configName: element[elementKeys[0]] };
  }
  return null;
}

export function getStandardConfigMessages(fieldNames) {
  const result = {};
  fieldNames.forEach(element => {
    const { fieldName, configName } = getFieldAndConfigNames(element);
    if (formValidationMessages[configName]) {
      result[fieldName] = formValidationMessages[configName];
    }
  });
  return result;
}

export function getStandardConfigRules(fieldNames) {
  const result = {};
  fieldNames.forEach(element => {
    const { fieldName, configName } = getFieldAndConfigNames(element);
    if (formValidationRules[configName]) {
      result[fieldName] = formValidationRules[configName];
    }
  });
  return result;
}

export default function getStandardConfig(fieldNames) {
  return {
    rules: getStandardConfigRules(fieldNames),
    messages: getStandardConfigMessages(fieldNames),
  };
}
