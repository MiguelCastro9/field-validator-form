export type Validator = (value: any) => string | null;

export const required: Validator = (value) => {
  if (value === null || value === undefined || value === '') {
    return 'This field is required.';
  }
  return null;
};

export const notEmpty: Validator = (value) => {
  if (typeof value === 'string' && value.trim() === '') {
    return 'This field cannot be empty.';
  }
  return null;
};

export const email: Validator = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof value === 'string' && !emailRegex.test(value)) {
    return 'Invalid email.';
  }
  return null;
};

export const currency: Validator = (value) => {
  const currencyRegex = /^\d+(\.\d{1,2})?$/;
  if (typeof value === 'string' && !currencyRegex.test(value)) {
    return 'Invalid currency value.';
  }
  return null;
};

export function validate(value: any, validators: Validator[]): string[] {
  return validators
    .map((validator) => validator(value))
    .filter((result): result is string => result !== null);
}