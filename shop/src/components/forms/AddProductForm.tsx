import { ChangeEvent, memo, useState } from 'react';
import { Controller, useForm, Control } from 'react-hook-form';
import Product from 'src/models/Product';
import { Shape } from 'src/types/Schemas';
import { ADD_PRODUCT_FORM_FIELDS } from 'src/utils/Constants';
import { useYupValidationResolver } from 'src/utils/Validation';
import {
  FormInput,
  FormFieldContainer,
  Typography,
  FilePicker,
  FormButton,
} from 'uiComponents/components';

const AddProductForm = ({ control }: { control: Control }) => {
  const [file, setFile] = useState<any>();

  return (
    <>
      {ADD_PRODUCT_FORM_FIELDS.map((productField) => (
        <Controller
          control={control}
          name={productField.key}
          render={({
            field: { name, onBlur, onChange, value },
            fieldState: { error },
          }) => (
            <FormFieldContainer>
              <Typography size={1.5} mb={1}>
                {productField.label}
              </Typography>
              <FormInput
                placeholder={productField.placeholder}
                type={productField.type}
                onChange={onChange}
                value={value}
                name={name}
                error={error}
              />
            </FormFieldContainer>
          )}
        />
      ))}

      <FormFieldContainer>
        <Typography size={1.5} mb={1}>
          Product Image
        </Typography>
        <FilePicker
          path={file}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (event.target.files?.length) setFile(event.target.files[0]);
          }}
        />
      </FormFieldContainer>
    </>
  );
};

export default memo(AddProductForm);
