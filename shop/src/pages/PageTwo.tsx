import { useNavigate } from 'react-router-dom';
import { navigateToRemote } from 'utility-remote/helpers';

const PageTwo = () => {
  const navigate = useNavigate();
  return (
    <div>
      Page Two
      <div>
        <button onClick={() => navigate('/remote-two')}>
          To Page 1"(remote 2)"
        </button>
        <button onClick={() => navigateToRemote('/auth')}>Remote One</button>
      </div>
    </div>
  );
};

export default PageTwo;
