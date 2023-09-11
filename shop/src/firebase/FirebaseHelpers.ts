import { addDoc, collection } from 'firebase/firestore';
import { Events } from 'utilityFunctions/constants';
import { db } from './Config';
import { ProductModel } from 'src/schemas/ProductSchema';
import ApiResponse, { ApiResponseInterface } from 'src/models/ApiResponse';
import { registerEvent } from 'src/custom-events/CustomEvent';

export const addProduct = (product: ProductModel, userId: string) =>
  new Promise<ApiResponseInterface>((resolve, reject) => {
    try {
      addDoc(collection(db, 'products'), {
        ...product,
        createdBy: userId,
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
