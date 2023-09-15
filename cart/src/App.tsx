// import 'assets/styles/style.scss';
import { TailButton, TailCheckbox } from 'tailwindUI/components';

const App = () => {
  return (
    <div>
      <TailButton
        title={'Hello Amey'}
        icon={{ type: 'chevronRight', position: 'right' }}
        variant={'primary'}
      />
      <TailCheckbox />
    </div>
  );
};

export default App;
