
import {  useEffect, useCallback } from 'react';
import {  useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../redux/user/user-operations';
import useLogin from '../../shared/hooks/useLogin';

import Section from '../../shared/components/Section';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  
  const dispatch = useDispatch();
  const isLogin = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  const loginUser = useCallback(
    data => {
      return dispatch(login(data));
    },
    [dispatch]
  );

  return (
    <Section title="Login">
          <LoginForm onSubmit={loginUser} />
    </Section>
  );
};

export default LoginPage;