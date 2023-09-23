import {
  DocumentReference,
  FieldPath,
  addDoc,
  collection,
  documentId,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { Events } from 'utilityFunctions/constants';
import { db } from './Config';
import { ProductModel } from 'src/schemas/ProductSchema';
import ApiResponse, { ApiResponseInterface } from 'src/models/ApiResponse';
import { registerEvent } from 'src/custom-events/CustomEvent';

export const addProduct = (
  product: ProductModel,
  userId: string,
  image?: ImageBitmap
) =>
  new Promise<ApiResponseInterface>((resolve, reject) => {
    try {
      addDoc(collection(db, 'products'), {
        ...product,
        createdBy: userId,
        image:
          image ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2L7bhAsGnkgxjZt0pYvvk1udoCyr0UfuCLw&usqp=CAU',
      }).then((response) => {
        if (response.id) {
          resolve(
            new ApiResponse(
              'Product added',
              true
            ).getResponse() as ApiResponseInterface
          );
          const successEvent = registerEvent(Events.PRODUCT, {
            success: true,
            message: 'Product added!',
          });
          dispatchEvent(successEvent);
        } else {
          reject(
            new ApiResponse(
              'Failed to add product',
              false
            ).getResponse() as ApiResponseInterface
          );
          const successEvent = registerEvent(Events.PRODUCT, {
            success: false,
            message: 'Failed to add product',
          });
          dispatchEvent(successEvent);
        }
      });
    } catch (error) {
      reject(
        new ApiResponse(
          'Something went wrong, try after sometime',
          false
        ).getResponse() as ApiResponseInterface
      );
      const successEvent = registerEvent(Events.PRODUCT, {
        success: false,
        message: 'Something went wrong, try after sometime',
      });
      dispatchEvent(successEvent);
    }
  });

export const getAllProducts = () =>
  new Promise<ApiResponseInterface>((resolve, reject) => {
    const productQuery = query(collection(db, 'products'));
    getDocs(productQuery)
      .then((response) => {
        if (response.empty) {
          resolve(new ApiResponse('', true, []).getResponse());
        } else {
          resolve(
            new ApiResponse(
              '',
              true,
              response.docs.map((value) => value.data())
            ).getResponse()
          );
        }
      })
      .catch((error) => {
        reject(
          new ApiResponse('Failed to fetch products', false).getResponse()
        );
      });
  });

export const getPopulatedCart = async (cart: any) => {
  const items: any = [];
  const q = query(
    collection(db, 'products'),
    where(documentId(), 'in', [...cart?.items?.map((c: any) => c?.productId)])
  );

  const docs = await getDocs(q);

  docs.docs.forEach((d: any) => {
    const data = d.data();

    items.push({
      ...data,
      count: cart.items.find((c: any) => c.productId === d.id).count,
      productId: d.id,
    });
  });

  return {
    ...cart,
    items,
  };
};
