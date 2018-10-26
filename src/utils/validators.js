export const required = value => (value ? undefined : 'Required');

export const nonEmpty = value => {
  if (!value) {return value}
  return value.trim() !== '' ? undefined : 'Cannot be empty';
}

export const isTrimmed = value => {
  if (!value) {return value}
  return value.trim() === value ? undefined : 'Cannot start or end with whitespace';
}
    

export const length = length => value => {
  if (!value) {return value}
  if (length.min && value.length < length.min) {
      return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
      return `Must be at most ${length.max} characters long`;
  }
};

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';

export const phoneValidate = phoneNumber => {
  if (!phoneNumber) {return phoneNumber}
  let phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  let digits = phoneNumber.replace(/\D/g, "");
  return phoneRe.test(digits) === true ? undefined : "Phone number is not valid";
}