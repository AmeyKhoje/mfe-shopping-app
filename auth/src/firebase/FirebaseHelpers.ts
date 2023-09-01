import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from './Config';
import { dispatchEvent, registerEvent } from 'src/custom-event/CustomEvent';
import { Events, LocalStorageKeys } from 'utilityFunctions/constants';
import { addToLocalStorage } from 'utilityFunctions/helpers';
import UserModel from 'src/models/User';
import ApiResponse from 'src/objects/ApiRespone';
import ApiResponseModel from 'src/models/ApiResponseModel';

// export const createUser = async (user: UserModel) => {
//   try {
//     const createResponse = await createUserWithEmailAndPassword(
//       auth,
//       user.email,
//       user.password
//     );
//     const createdUser = createResponse.user;
//     await addDoc(collection(db, 'users'), {
//       uid: createdUser.uid,
//       authProvider: 'local',
//       ...user,
//     });
//     const successEvent = registerEvent(Events.USER_CREATE.SUCCESS, {
//       success: true,
//     });
//     dispatchEvent(successEvent);
//   } catch (error) {
//     const errorEvent = registerEvent(Events.USER_CREATE.ERROR, {
//       success: false,
//     });
//     dispatchEvent(errorEvent);
//   }
// };

export const createUser = (user: UserModel) =>
  new Promise<ApiResponseModel>((resolve, reject) => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((createResponse) => {
        const createdUser = createResponse.user;
        addDoc(collection(db, 'users'), {
          uid: createdUser.uid,
          authProvider: 'local',
          ...user,
        })
          .then((response) => {
            if (response.id) {
              const apiResponse = new ApiResponse(
                true,
                'User added successfully'
              );
              resolve(<ApiResponseModel>apiResponse.getObject());
              const successEvent = registerEvent(Events.USER_CREATE.SUCCESS, {
                success: true,
                toastMessage: 'User Created successfully',
              });
              dispatchEvent(successEvent);
            }
          })
          .catch((error) => {
            const apiResponse = new ApiResponse(false, 'Failed to create user');
            reject(<ApiResponseModel>apiResponse.getObject());
            const errorEvent = registerEvent(Events.USER_CREATE.ERROR, {
              success: false,
              toastMessage: 'User Created successfully',
            });
            dispatchEvent(errorEvent);
          });
      })
      .catch((error) => {
        const apiResponse = new ApiResponse(false, 'Failed to create user');
        reject(<ApiResponseModel>apiResponse.getObject());
        const errorEvent = registerEvent(Events.USER_CREATE.ERROR, {
          success: false,
          toastMessage: 'User Created successfully',
        });
        dispatchEvent(errorEvent);
      });
  });

// export const login = async (email: string, password: string) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     const successEvent = registerEvent(Events.LOGIN.SUCCESS, { success: true });
//     dispatchEvent(successEvent);
//     addToLocalStorage(LocalStorageKeys.IS_LOGGED_IN, true);
//   } catch (error) {
//     const errorEvent = registerEvent(Events.LOGIN.SUCCESS, { success: true });
//     dispatchEvent(errorEvent);
//     console.error(error);
//   }
// };

export const login = (email: string, password: string) =>
  new Promise<ApiResponseModel>((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((loginResponse) => {
        if (loginResponse.user) {
          const apiResponse = new ApiResponse(true, 'Welcome!');
          resolve(<ApiResponseModel>apiResponse.getObject());
          const successEvent = registerEvent(Events.LOGIN.SUCCESS, {
            success: true,
          });
          dispatchEvent(successEvent);
          addToLocalStorage(LocalStorageKeys.IS_LOGGED_IN, true);
        } else {
          const apiResponse = new ApiResponse(false, 'Failed to login');
          reject(<ApiResponseModel>apiResponse.getObject());
          const errorEvent = registerEvent(Events.LOGIN.ERROR, {
            success: true,
          });
          dispatchEvent(errorEvent);
        }
      })
      .catch((error) => {
        const apiResponse = new ApiResponse(false, 'Failed to login');
        reject(<ApiResponseModel>apiResponse.getObject());
        const errorEvent = registerEvent(Events.LOGIN.ERROR, {
          success: true,
        });
        dispatchEvent(errorEvent);
      });
  });

export const logout = () => {
  signOut(auth);
};
