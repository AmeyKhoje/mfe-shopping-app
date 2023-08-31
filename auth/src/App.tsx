import 'assets/styles/style.scss';
import MainRouter from './router/MainRouter';
import { Events } from 'utilityFunctions/constants';

const App = () => {
  // document.addEventListener(
  //   Events.USER_CREATE.SUCCESS,
  //   function handler(event: CustomEvent) {
  //     // event.stopImmediatePropagation();
  //     // document.removeEventListener(Events.USER_CREATE.SUCCESS, (event: CustomEvent) => handler(event));
  //     console.log('hey');

  //     // toast('Hello', {
  //     //   duration: 5000,
  //     //   position: 'top-center',
  //     // });
  //   },
  //   { once: true }
  // );
  return (
    <div>
      <MainRouter />
    </div>
  );
};

export default App;
