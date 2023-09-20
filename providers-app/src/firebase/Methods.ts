export * from 'firebase/auth';
export {
  addDoc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  collection,
  deleteDoc,
  doc,
  limit,
  limitToLast,
  orderBy,
  updateDoc,
  where,
  and,
  or,
  terminate,
} from 'firebase/firestore';
export { app, auth, db } from './Config';
