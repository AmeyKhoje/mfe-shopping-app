import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from 'src/firebase/FirebaseHelpers';
import ApiResponseModel from 'src/models/ApiResponseModel';
import {
  FormButton,
  FormInput,
  FormFieldContainer,
  Typography,
} from 'uiComponents/components';
import { navigateToRemote } from 'utilityFunctions/helpers';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginCredentialsZod } from 'src/zod/LoginZod';

const LoginForm = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(LoginCredentialsZod),
  });
  const navigate = useNavigate();

  const handleLogin = async (data: any) => {
    login(data?.email, data?.password)
      .then((response: ApiResponseModel) => {
        if (!!response.status) {
          navigateToRemote('/shop');
        }
      })
      .catch((error) => {});
  };

  const goToRegister = () => navigate('/auth/register');

  return (
    <>
      <Typography size={3.5} mb={3} center bold={5}>
        Login
      </Typography>
      <Controller
        name="email"
        control={control}
        render={({
          field: { name, onBlur, onChange, value },
          fieldState: { error },
        }) => (
          <FormFieldContainer>
            <Typography mb={1} size={2}>
              Email
            </Typography>
            <FormInput
              type="email"
              name={name}
              placeholder="Enter your email"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              error={error}
            />
          </FormFieldContainer>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({
          field: { name, onBlur, onChange, value },
          fieldState: { error },
        }) => (
          <FormFieldContainer>
            <Typography mb={1} size={2}>
              Password
            </Typography>
            <FormInput
              type="password"
              name={name}
              placeholder="Enter your password"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              error={error}
            />
          </FormFieldContainer>
        )}
      />
      <FormFieldContainer center>
        <FormButton title="Login" onClick={handleSubmit(handleLogin)} />
      </FormFieldContainer>
      <FormFieldContainer center>
        <FormButton title="Register" variant={'LIGHT'} onClick={goToRegister} />
      </FormFieldContainer>
    </>
  );
};

export default LoginForm;
