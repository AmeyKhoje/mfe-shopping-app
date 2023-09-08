import { getAuth } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from './Config';
import { ProductModel } from 'src/schemas/ProductSchema';

export const addProduct = (product: ProductModel, userId: string) =>
  new Promise((resolve, reject) => {
    try {
      addDoc(collection(db, 'products'), {
        ...product,
        createdBy: userId,
      }).then((response) => {
        if (response.id) {
          resolve(true);
        } else reject(false);
      });
    } catch (error) {
      reject(false);
    }
  });
