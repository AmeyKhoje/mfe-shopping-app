import { Route, Routes } from 'react-router-dom';
import { ShopLayout } from 'uiComponents/layouts';
import { CartPage } from 'tailwindUI/pages';
import { NAVBAR_LINKS } from 'src/utils/Constants';
import { auth, db } from 'src/firebase/Config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useCustomDispatch } from 'src/store';
import { setUser } from 'src/store/slices/UserSlice';
import moment from 'moment-mini';

const AppRouter = () => {
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
          } else {
            handleLogout();
          }
        } else {
          handleLogout();
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
        <Route path="/" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
