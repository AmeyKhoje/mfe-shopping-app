import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
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
          return { error: error?.message };
        }
      },
    }),
    addProduct: builder.query({
      async queryFn(payload, { dispatch }) {
        try {
          const ref = collection(db, 'products');
          const snapshot = await addDoc(ref, {
            ...payload.data,
            createdBy: payload.userId,
            image:
              payload.image ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2L7bhAsGnkgxjZt0pYvvk1udoCyr0UfuCLw&usqp=CAU',
          });
          if (snapshot.id) {
            dispatch(
              productsApi.endpoints.getAllProducts.initiate(
                {},
                { forceRefetch: true }
              )
            );
          }
          return { error: 'Error' };
        } catch (error) {
          return { error: 'Error' };
        }
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddProductQuery,
  useLazyAddProductQuery,
} = productsApi;
export const {
  endpoints: { getAllProducts, addProduct },
} = productsApi;
