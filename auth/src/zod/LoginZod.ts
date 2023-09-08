import { z } from 'zod';

const LoginCredentialsZod = z.object({
  email: z
    .string({ required_error: 'Email id required' })
    .email({ message: 'Invalid email id' }),

  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, { message: 'Password length cannot be less than 8 characters' })
    .max(25, { message: 'Password length cannot be less than 25 characters' }),
});

export { LoginCredentialsZod };
