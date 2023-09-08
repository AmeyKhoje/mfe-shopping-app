import { z } from 'zod';
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const UserZod = z.object({
  firstName: z
    .string({
      required_error: 'First name is required',
    })
    .max(15, { message: 'First name cannot be more than 15 characters' }),
  lastName: z
    .string({
      required_error: 'Last name is required',
    })
    .max(15, { message: 'Last name cannot be more than 15 characters' }),
  email: z
    .string({ required_error: 'Email id required' })
    .email({ message: 'Invalid email id' }),
  mobile: z.string().regex(phoneRegex, 'Invalid mobile number'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, { message: 'Password length cannot be less than 8 characters' })
    .max(25, { message: 'Password length cannot be less than 25 characters' }),
});

export { UserZod };
