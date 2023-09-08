import Product from 'src/models/Product';
import { Shape } from 'src/types/Schemas';
import * as yup from 'yup';

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

type ProductModel = yup.InferType<typeof productSchema>;

export { productSchema, ProductModel };
