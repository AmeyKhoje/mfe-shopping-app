import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from 'src/firebase/Config';

export const productsApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'productApi',
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      async queryFn() {
        try {
          const ref = query(collection(db, 'products'));
          const snapshot = await getDocs(ref);
          let data: any = [];
          snapshot.forEach((document) => {
            data.push({ id: document.id, ...document.data() });
          });
          return { data };
        } catch (error: any) {
          console.log('Error');
          return { error: error?.message };
        }
      },
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
export const {
  endpoints: { getAllProducts },
} = productsApi;
