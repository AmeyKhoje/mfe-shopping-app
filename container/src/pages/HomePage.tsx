import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home Page
      <div>
        <button onClick={() => navigate('/auth')}>Remote One</button>
      </div>
    </div>
  );
};

export default HomePage;
