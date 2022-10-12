import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is a required field'),
  password: Yup.string()
    .min(1, 'Password must be longer than 1 character')
    .required('Password is a required field'),
  rememberMe: Yup.bool(),
});
