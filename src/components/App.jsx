import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Routes from './Routes';


import { getCurrentUser } from '../redux/user/user-operations';

// import styles from './App.module.css'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div >
      <Routes/>
    </div>
  );
}

export default App;