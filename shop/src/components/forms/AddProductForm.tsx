import { memo } from 'react';
import {
  FormInput,
  FormFieldContainer,
  Typography,
} from 'uiComponents/components';

const AddProductForm = () => {
  return (
    <>
      <FormFieldContainer>
        <Typography size={1.5} mb={1}>
          Title
        </Typography>
        <FormInput placeholder={'Enter product title'} />
      </FormFieldContainer>
      <FormFieldContainer>
        <Typography size={1.5} mb={1}>
          Description
        </Typography>
        <FormInput placeholder={'Enter product description'} />
      </FormFieldContainer>
      <FormFieldContainer>
        <Typography size={1.5} mb={1}>
          Availability
        </Typography>
        <FormInput placeholder={'Enter product availability'} />
      </FormFieldContainer>
      <FormFieldContainer>
        <Typography size={1.5} mb={1}>
          Availability
        </Typography>
        <FormInput placeholder={'Enter product availability'} />
      </FormFieldContainer>
    </>
  );
};

export default memo(AddProductForm);
