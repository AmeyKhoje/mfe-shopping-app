import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  DocumentReference,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from 'src/firebase/Config';
import { getPopulatedCart } from 'src/firebase/FirebaseHelpers';
import { getCheckoutDetails } from 'src/utils/Helpers';

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
            let cart = { ...snapshot.docs[0].data(), id: snapshot.docs[0].id };

            const populatedCart = await getPopulatedCart(cart);

            data = {
              cart: { ...populatedCart },
              checkout: getCheckoutDetails(populatedCart),
            };
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
      async queryFn(payload, { dispatch }) {
        try {
          const productRefString = (refId: string) =>
            doc(db, 'products', refId);

          const ref = collection(db, 'carts');
          const snapshot = await addDoc(ref, {
            ...payload?.cart,
            items: payload?.cart?.items.map((item: any) => {
              return {
                ...item,
                product: productRefString(item?.productId),
              };
            }),
          });
          if (snapshot.id) {
            dispatch(
              cartApi.endpoints.getCart.initiate(payload.cart?.userId, {
                forceRefetch: true,
              })
            );
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

          if (state.cart?.cart) {
            const ref = doc(
              db,
              'carts',
              state?.cart?.cart?.id || state?.cart?.cart?.uid
            );
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
  useTriggerCartActionQuery,
  useLazyTriggerCartActionQuery,
  useLazyGetCartQuery,
  useLazyCreateNewCartQuery,
} = cartApi;

export const {
  endpoints: { checkCart, triggerCartAction, getCart },
} = cartApi;
