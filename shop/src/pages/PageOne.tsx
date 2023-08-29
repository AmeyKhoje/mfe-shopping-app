import { useNavigate } from 'react-router-dom';
import { useWindowDimension } from 'utilityFunctions/hooks';
import { navigateToRemote } from 'utilityFunctions/helpers';

const PageOne = () => {
  const navigate = useNavigate();
  const dim = useWindowDimension();

  return (
    <div className="page-one">
      Page One Remote App 2
      <div>
        <button onClick={() => navigateToRemote('/auth')}>
          Remote One App
        </button>
        <button onClick={() => navigate('/remote-two/two')}>
          Remote Two - Page 2
        </button>
      </div>
    </div>
  );
};

export default PageOne;
