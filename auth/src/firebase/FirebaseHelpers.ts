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

export const createUser = async (user: {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
}) => {
  try {
    const createResponse = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    const createdUser = createResponse.user;
    await addDoc(collection(db, 'users'), {
      uid: createdUser.uid,
      authProvider: 'local',
      ...user,
    });
    console.log('here');

    const event = registerEvent(Events.USER_CREATE.SUCCESS, { success: true });
    dispatchEvent(event);
  } catch (error) {
    console.error(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const event = registerEvent(Events.LOGIN.SUCCESS, { success: true });
    dispatchEvent(event);
    addToLocalStorage(LocalStorageKeys.IS_LOGGED_IN, true);
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  signOut(auth);
};
