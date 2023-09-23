import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from 'src/firebase/Config';

export const cartApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'cartApi',
  endpoints: (builder) => ({
    checkCart: builder.query({
      async queryFn({ userId }) {
        try {
          const ref = query(
            collection(db, 'carts'),
            where('userId', '==', userId)
          );
          const snapshot = await getDocs(ref);
          if (!snapshot?.docs?.length) {
            return {
              data: {
                isExists: false,
              },
            };
          } else {
            return {
              data: {
                isExists: true,
              },
            };
          }
        } catch (error) {
          return {
            error: true,
          };
        }
      },
    }),
    getCart: builder.query({
      async queryFn(userId) {
        try {
          const ref = query(
            collection(db, 'carts'),
            where('userId', '==', userId)
          );
          const snapshot = await getDocs(ref);
          if (!snapshot?.docs?.length) {
            return {
              data: null,
            };
          } else {
            let data: any = {};
            snapshot.forEach((document) => {
              data = { ...document.data(), id: document.id };
            });
            return {
              data,
            };
          }
        } catch (error) {
          return {
            error: true,
          };
        }
      },
    }),
    createNewCart: builder.query({
      async queryFn({ cart }) {
        try {
          const ref = collection(db, 'carts');
          const snapshot = await addDoc(ref, {
            ...cart,
          });
          if (snapshot.id) {
            return {
              data: true,
            };
          }
          return { data: false };
        } catch (error) {
          return { error: true };
        }
      },
    }),
    updateCart: builder.query({
      async queryFn(payload, { getState, dispatch }) {
        try {
          const state: any = getState();
          if (state.cart) {
            const ref = doc(db, 'carts', state.cart?.id || state.cart?.uid);
            await updateDoc(ref, {
              ...payload,
            });

            dispatch(
              cartApi.endpoints.getCart.initiate(payload.userId, {
                forceRefetch: true,
              })
            );

            return {
              data: true,
            };
          } else {
            dispatch(
              cartApi.endpoints.createNewCart.initiate(
                { cart: payload },
                { forceRefetch: true }
              )
            );
            return { data: null };
          }
        } catch (error) {
          return {
            error: true,
          };
        }
      },
    }),
    triggerCartAction: builder.query({
      async queryFn({ dbCart, newCart }, { dispatch }) {
        if (dbCart) {
          dispatch(
            cartApi.endpoints.updateCart.initiate(newCart, {
              forceRefetch: true,
            })
          );
        } else {
          dispatch(
            cartApi.endpoints.createNewCart.initiate(
              { cart: newCart },
              { forceRefetch: true }
            )
          );
        }
        return {
          data: null,
        };
      },
    }),
  }),
});

export const {
  useCheckCartQuery,
  useGetCartQuery,
  useLazyTriggerCartActionQuery,
} = cartApi;

export const {
  endpoints: { checkCart, triggerCartAction, getCart },
} = cartApi;
