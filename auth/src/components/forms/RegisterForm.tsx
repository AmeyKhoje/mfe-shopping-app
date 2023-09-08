import { Controller, useForm } from 'react-hook-form';
import {
  FormButton,
  FormInput,
  FormFieldContainer,
  Typography,
} from 'uiComponents/components';
import { registerFormFields } from './helpers';
import { useNavigate } from 'react-router-dom';
import { createUser } from 'src/firebase/FirebaseHelpers';
import ApiResponseModel from 'src/models/ApiResponseModel';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserZod } from 'src/zod/RegisterZod';

const RegisterForm = () => {
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(UserZod),
  });
  const navigate = useNavigate();

  const handleRegister = (data: any) => {
    createUser(data).then((response: ApiResponseModel) => {
      if (!!response.status) {
        navigate('/auth');
      }
    });
  };

  const goToLogin = () => navigate('/auth');

  return (
    <>
      <Typography size={3.5} mb={3} center bold={5}>
        Register
      </Typography>
      {registerFormFields.map((field) => (
        <FormFieldContainer key={field.key}>
          <Typography mb={1} size={2}>
            {field.label}
          </Typography>
          <Controller
            control={control}
            name={field.key}
            render={({
              fieldState: { error },
              field: { name, onBlur, onChange, value },
            }) => (
              <FormInput
                type={field.type}
                placeholder={field.placeholder}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                value={value}
                error={error}
              />
            )}
          />
        </FormFieldContainer>
      ))}
      <FormFieldContainer center>
        <FormButton
          title="Create User"
          onClick={handleSubmit(handleRegister)}
        />
      </FormFieldContainer>
      <FormFieldContainer center>
        <FormButton title="Go to Login" variant={'LIGHT'} onClick={goToLogin} />
      </FormFieldContainer>
    </>
  );
};

export default RegisterForm;
