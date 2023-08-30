import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from './Config';

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
  } catch (error) {
    console.error(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  signOut(auth);
};
