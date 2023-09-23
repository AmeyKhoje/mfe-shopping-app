import { useSelector } from 'react-redux';
import AppRouter from './router';
import { Provider } from 'react-redux';
import { store } from './store';
import { useGetCartQuery } from './store/services/CartService';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
