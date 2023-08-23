import SignUpForm from '../../components/SignUp/index';
import SignInForm from '../../components/SignIn/index';

import './index.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;