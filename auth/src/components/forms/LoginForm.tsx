import { useNavigate } from 'react-router-dom';
import {
  FormButton,
  FormInput,
  FormFieldContainer,
  Typography,
} from 'uiComponents/components';

const LoginForm = () => {
  const navigate = useNavigate();

  const goToRegister = () => navigate('/auth/register');

  return (
    <>
      <Typography size={3.5} mb={3} center bold={5}>
        Login
      </Typography>
      <FormFieldContainer>
        <Typography mb={1} size={2}>
          Email
        </Typography>
        <FormInput type="text" placeholder="Enter your email" />
      </FormFieldContainer>
      <FormFieldContainer>
        <Typography mb={1} size={2}>
          Password
        </Typography>
        <FormInput type="password" placeholder="Enter your password" />
      </FormFieldContainer>
      <FormFieldContainer center>
        <FormButton title="Login" />
      </FormFieldContainer>
      <FormFieldContainer center>
        <FormButton title="Register" variant={'LIGHT'} onClick={goToRegister} />
      </FormFieldContainer>
    </>
  );
};

export default LoginForm;
