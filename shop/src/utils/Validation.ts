import { useCallback } from 'react';
import { Shape } from 'src/types/Schemas';
import { Schema, ValidationError } from 'yup';

export const useYupValidationResolver = (validationSchema: Schema) =>
  useCallback(
    async (data: Shape<any>) => {
      try {
        const values = validationSchema.validate(data, { abortEarly: false });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors?.inner?.reduce((all, current) => ({
            ...all,
            [current?.path]: {
              type: current?.type ?? 'validation',
              message: current?.message,
            },
          })),
        };
      }
    },
    [validationSchema]
  );
