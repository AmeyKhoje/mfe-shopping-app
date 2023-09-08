import { ChangeEvent, memo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Product from 'src/models/Product';
import { Shape } from 'src/types/Schemas';
import { ADD_PRODUCT_FORM_FIELDS } from 'src/utils/Constants';
import { useYupValidationResolver } from 'src/utils/Validation';
import {
  FormInput,
  FormFieldContainer,
  Typography,
  FilePicker,
} from 'uiComponents/components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const productSchema = yup.object<Shape<Product>>({
  title: yup
    .string()
    .required('Title is required')
    .min(5, 'Product title should be minimum 5 letters')
    .max(25, 'Product title cannot be greater than 25 letters'),
  description: yup
    .string()
    .default(null)
    .min(15, 'Product description should be minimum 15 characters')
    .max(60, 'Product description cannot be greater than 60 characters'),
  availability: yup
    .number()
    .required('Availability is required')
    .min(1)
    .integer('Availability cannot contain decimals'),
  originalPrice: yup.number().required('Original price is required'),
  discountedPrice: yup.number().default(0),
  rating: yup.number().default(0).max(5).min(0),
});

const AddProductForm = () => {
  const [file, setFile] = useState<any>();
  const { control } = useForm({
    resolver: yupResolver<yup.AnyObject>(productSchema),
  });

  return (
    <>
      {ADD_PRODUCT_FORM_FIELDS.map((productField) => (
        <Controller
          control={control}
          name={productField.key}
          render={({ field: { name, onBlur, onChange, value } }) => (
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
              />
            </FormFieldContainer>
          )}
        />
      ))}

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
          Original Price
        </Typography>
        <FormInput placeholder={'Enter product original price'} />
      </FormFieldContainer>
      <FormFieldContainer>
        <Typography size={1.5} mb={1}>
          Discounted Price
        </Typography>
        <FormInput placeholder={'Enter product discounted price'} />
      </FormFieldContainer>
      <FilePicker
        path={file}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (event.target.files?.length) setFile(event.target.files[0]);
        }}
      />
    </>
  );
};

export default memo(AddProductForm);
