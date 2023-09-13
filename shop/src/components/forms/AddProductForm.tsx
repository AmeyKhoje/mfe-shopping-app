import { ChangeEvent, memo, useState } from 'react';
import { Controller, Control } from 'react-hook-form';
import { ADD_PRODUCT_FORM_FIELDS, CATEGORIES } from 'src/utils/Constants';
import {
  FormInput,
  FormFieldContainer,
  Typography,
  FilePicker,
  CustomSelect,
} from 'uiComponents/components';

const AddProductForm = ({ control }: { control: Control }) => {
  const [file, setFile] = useState<any>();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) setFile(event.target.files[0]);
  };

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
                onBlur={onBlur}
                value={value || ''}
                name={name}
                error={error}
              />
            </FormFieldContainer>
          )}
        />
      ))}

      <CustomSelect list={CATEGORIES} isMultiSelect />

      <FormFieldContainer>
        <Typography size={1.5} mb={1}>
          Product Image
        </Typography>
        <FilePicker path={file} onChange={handleImageChange} />
      </FormFieldContainer>
    </>
  );
};

export default memo(AddProductForm);
