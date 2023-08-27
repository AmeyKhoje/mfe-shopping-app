import LoginForm from 'src/components/forms/LoginForm';
import { LoginCard } from 'uiComponents/components';
import { LoginPage } from 'uiComponents/pages';

const Login = () => {
  return (
    <LoginPage>
      <LoginCard FormComponent={<LoginForm />} />
    </LoginPage>
  );
};

export default Login;
