import Product from 'src/models/Product';
import { Shape } from 'src/types/Schemas';
import * as yup from 'yup';

const productSchema = yup.object<Shape<Product>>({
  title: yup
    .string()
    .required('Title is required')
    .min(5, 'Product title should be minimum 5 letters')
    .max(25, 'Product title cannot be greater than 25 letters')
    .default(''),
  description: yup
    .string()
    .min(15, 'Product description should be minimum 15 characters')
    .max(60, 'Product description cannot be greater than 60 characters')
    .default(''),
  availability: yup
    .number()
    .typeError('Only number is acceptable')
    .required('Availability is required')
    .min(1)
    .integer('Availability cannot contain decimals')
    .positive('Value should be positive')
    .default(null),
  originalPrice: yup
    .number()
    .typeError('Only number is acceptable')
    .required('Original price is required')
    .min(1)
    .positive('Value should be positive')
    .default(null),
  discountedPrice: yup
    .number()
    .typeError('Only number is acceptable')
    .min(1)
    .positive('Value should be positive')
    .default(null),
  rating: yup.number().max(5).min(0),
});

type ProductModel = yup.InferType<typeof productSchema>;

export { productSchema, ProductModel };
