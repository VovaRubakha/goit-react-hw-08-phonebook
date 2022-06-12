import { useSelector, shallowEqual } from 'react-redux';

import { isUserLogin } from '../../redux/user/user-selector';

const useLogin = () => {
  const isLogin = useSelector(isUserLogin, shallowEqual);

  return isLogin;
};

export default useLogin;
