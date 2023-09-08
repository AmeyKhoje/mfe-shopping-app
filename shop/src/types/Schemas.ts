import * as yup from 'yup';

type ConditionSchema<T> = T extends string
  ? yup.StringSchema
  : T extends number
  ? yup.NumberSchema
  : T extends Boolean
  ? yup.BooleanSchema
  : T extends Record<any, any>
  ? yup.AnyObjectSchema
  : T extends Array<any>
  ? yup.ArraySchema<any, any>
  : T extends Date
  ? yup.DateSchema
  : yup.AnySchema;

export type Shape<Fields> = {
  [Key in keyof Fields]: ConditionSchema<Fields[Key]>;
};
