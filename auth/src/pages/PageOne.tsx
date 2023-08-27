import { useNavigate } from 'react-router-dom';
// import { navigateToRemote } from 'utility-remote/helpers';
import { FormButton, FormInput, LoginCard } from 'uiComponents/components';

const PageOne = () => {
  const navigate = useNavigate();

  return (
    <div className="page-one">
      Page One Remote App One
      <div>
        <FormButton title="Button" />
        <div style={{ width: '20rem' }}>
          Here
          <FormInput placeholder={'Enter name'} type="text" />
        </div>
        <LoginCard FormComponent={<div>Hello</div>} />

        {/* <button onClick={() => navigateToRemote('/remote-two')}>
          Remote App Two
        </button> */}
      </div>
    </div>
  );
};

export default PageOne;
