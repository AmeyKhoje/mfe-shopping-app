import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import moment from 'moment-mini';
import { Routes, Route } from 'react-router-dom';
import { auth, db } from 'src/firebase/Config';
import ShopHome from 'src/pages/ShopHome';
import { useCustomDispatch, useTypedSelector } from 'src/store';
import { UserSliceInterface, setUser } from 'src/store/slices/UserSlice';
import { NAVBAR_LINKS } from 'src/utils/Constants';
import { ShopLayout } from 'uiComponents/layouts';

const MainRouter = () => {
  const dispatch = useCustomDispatch();
  const handleLogout = () => {
    auth.signOut();
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      const dbQuery = query(
        collection(db, 'users'),
        where('uid', '==', user.uid)
      );

      getDocs(dbQuery).then((response) => {
        if (!response.empty) {
          if (response.docs[0].exists()) {
            dispatch(
              setUser({ ...response.docs[0].data(), added: moment().valueOf() })
            );
          }
        }
      });
    }
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ShopLayout navbarLinks={NAVBAR_LINKS} onLogout={handleLogout} />
        }
      >
        <Route path="/" element={<ShopHome />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
