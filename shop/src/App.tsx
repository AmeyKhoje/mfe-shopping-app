import 'assets/styles/style.scss';
import MainRouter from './router/MainRouter';
import { auth } from './firebase/Config';
import { Events } from 'utilityFunctions/constants';
import { registerEvent } from './custom-events/CustomEvent';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  auth.onAuthStateChanged((user) => {
    if (!user?.uid) {
      const logoutEvent = registerEvent(Events.LOGOUT, {});
      dispatchEvent(logoutEvent);
    }
  });
  return (
    <div>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </div>
  );
};

export default App;
