import {  useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signup } from '../../redux/user/user-operations';
import useLogin from "../../shared/hooks/useLogin";


import Section from '../../shared/components/Section';
import RegisterForm from '../../components/RegisterForm';

const RegisterPage  = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLogin = useLogin();
    
    useEffect(() => {
        if (isLogin) {
            navigate('/');
        }
    }, [isLogin, navigate]);
  
      const registerUser = (data) => {
        dispatch(signup(data));
    }

  return (
    <Section title="Register">
          <RegisterForm onSubmit={registerUser}/>
    </Section>
  );
};

export default RegisterPage;