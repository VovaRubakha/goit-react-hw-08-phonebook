import { Outlet } from 'react-router-dom';


import NavbarMenu from './NavbarMenu'
import AuthMenu from './AuthMenu';
import UserMenu from './UserMenu';


import useLogin from '../../shared/hooks/useLogin'

import styles from './navbar.module.css';

const Navbar = () => {

  const isLogin = useLogin()

  return (
    <div >
      <div className={styles.list}>

        <NavbarMenu isLogin={isLogin} />
        
        <div className={styles.tr}>
        {isLogin && <UserMenu />}
        {!isLogin && <AuthMenu />}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;