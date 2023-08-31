import 'assets/styles/style.scss';
import HostRouter from './router/HostRouter';
import { compose } from 'ramda';
import UtilityHOC from './hoc/UtilityHOC';
import EventHOC from './hoc/EventHOC';

const App = () => {
  return (
    <div>
      <HostRouter />
    </div>
  );
};

export default compose(UtilityHOC, EventHOC)(App);
