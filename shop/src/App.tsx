import 'assets/styles/style.scss';
import MainRouter from './router/MainRouter';
import { auth } from './firebase/Config';
import { Events } from 'utilityFunctions/constants';
import { registerEvent } from './custom-events/CustomEvent';

const App = () => {
  auth.onAuthStateChanged((user) => {
    console.log(user?.uid);
    const logoutEvent = registerEvent(Events.LOGOUT, {});
    dispatchEvent(logoutEvent);
  });
  return (
    <div>
      <MainRouter />
    </div>
  );
};

export default App;
