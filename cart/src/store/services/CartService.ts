import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
export const cartApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'cartApi',
  endpoints: (builder) => ({
    getCart: builder.query({
      async queryFn(args: any) {
        try {
          return { data: {} };
        } catch {
          return { error: {} };
        }
      },
    }),
  }),
});
