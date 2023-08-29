import { Routes, Route } from 'react-router-dom';
import PageOne from 'src/pages/PageOne';
import PageTwo from 'src/pages/PageTwo';
import ShopHome from 'src/pages/ShopHome';
import { ShopLayout } from 'uiComponents/layouts';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopLayout />}>
        <Route path="/" element={<ShopHome />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
