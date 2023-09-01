import { Routes, Route } from 'react-router-dom';
import { auth } from 'src/firebase/Config';
import ShopHome from 'src/pages/ShopHome';
import { NAVBAR_LINKS } from 'src/utils/Constants';
import { ShopLayout } from 'uiComponents/layouts';

const MainRouter = () => {
  const handleLogout = () => {
    auth.signOut();
  };
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
