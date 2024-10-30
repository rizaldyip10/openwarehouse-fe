import * as Yup from 'yup';

export const UserPinValidationSchema = Yup.object({
  pin: Yup.string()
    .required('Pin is required')
    .length(6, 'Pin must be exactly 6 characters')
    .matches(/^[0-9]+$/, 'Pin must be a number'),
  confirmPin: Yup.string()
    .oneOf([Yup.ref('pin'), undefined], 'Pin must match')
    .required('Please confirm your pin'),
});
