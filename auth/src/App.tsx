import 'assets/styles/style.scss';
import MainRouter from './router/MainRouter';

const App = () => {
  console.log(process.env);

  return (
    <div>
      <MainRouter />
    </div>
  );
};

export default App;
