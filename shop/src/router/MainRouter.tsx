import {Routes, Route} from 'react-router-dom';
import PageOne from 'src/pages/PageOne';
import PageTwo from 'src/pages/PageTwo';

const MainRouter = () => {
  return (
    <Routes>
      <Route index element={<PageOne />} />
      <Route path='/two' element={<PageTwo />} />
    </Routes>
  );
};

export default MainRouter;