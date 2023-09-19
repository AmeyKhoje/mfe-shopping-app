export * from 'firebase/auth';
export {
  addDoc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  collection,
} from 'firebase/firestore';
export { app, auth, db } from './Config';
