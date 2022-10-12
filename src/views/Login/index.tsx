import { useCallback, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa';

import FormAlert from 'components/AlertBanner';
import Checkbox from 'components/Checkbox';
import { Button, Link } from 'components/common/Button.styled';
import { Hr, TextDivider } from 'components/common/Divider.styled';
import { CenterAlignedFlex } from 'components/common/Flex.styled';
import { Paragraph } from 'components/common/Text.styled';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import { ILoginForm } from 'interfaces/login.interface';
import { loginFormSchema } from 'utils/schemas/loginSchema';

import {
  FormContainer,
  FormHeadingSection,
  FormContentSection,
  FormFooterSection,
  FormInfoSection,
} from './styles.styled';

function Login() {
  const { control, handleSubmit, setValue, formState } = useForm<ILoginForm>({
    reValidateMode: 'onBlur',
    mode: 'all',
    defaultValues: { email: '', password: '', rememberMe: false },
    resolver: yupResolver(loginFormSchema),
  });
  const [formData, setFormData] = useState<ILoginForm>({
    email: '',
    password: '',
    rememberMe: false,
  });

  const onSubmitForm = useCallback((data: ILoginForm) => setFormData(data), []);

  return (
    <FormContainer>
      <FormAlert
        hidden={!formState.isSubmitted}
        text={
          formState.isSubmitSuccessful
            ? `Logged in succesfully! Your data is, email: ${formData.email}, password: ${formData.password} and Remember Me: ${formData.rememberMe}`
            : 'Whoops! something went wrong'
        }
        type={!formState.isSubmitSuccessful ? 'error' : 'success'}
      />
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <FormHeadingSection>
          <IconButton
            type="button"
            variant="facebook"
            text="Continue with Facebook"
            icon={<FaFacebook />}
          />
          <IconButton
            type="button"
            variant="apple"
            text="Continue with Apple"
            icon={<FaApple />}
          />
          <IconButton
            type="button"
            variant="default"
            text="Continue with Google"
            icon={<FaGoogle />}
          />
          <TextDivider>OR</TextDivider>
        </FormHeadingSection>
        <FormContentSection>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                ref={null}
                type="text"
                id="email"
                labelText="Email address or username"
                placeholder="Enter address or username"
                autoComplete="off"
                errorText={formState?.errors?.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                {...field}
                ref={null}
                labelText="Password"
                placeholder="Password"
                type="password"
                errorText={formState?.errors?.password?.message}
              />
            )}
          />
          <Link href="/">Forgot your password?</Link>
        </FormContentSection>
        <FormFooterSection>
          <CenterAlignedFlex>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onChange={(e) => {
                setValue('rememberMe', e.target.checked);
              }}
              labelText="Remember me"
            />
          </CenterAlignedFlex>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </FormFooterSection>
        <FormInfoSection>
          <Hr />
          <Paragraph>Don&apos;t have an account?</Paragraph>
          <Button type="button" variant="secondary">
            Sign up for spotify
          </Button>
        </FormInfoSection>
      </form>
    </FormContainer>
  );
}

export default Login;
