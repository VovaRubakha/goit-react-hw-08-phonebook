import { NavLink } from "react-router-dom";

import styles from './authMenu.module.css'

const isActive = ({ isActive }) =>
  isActive ? `${styles.navLink} ${styles.linkActive }` : `${styles.navLink}`;

const AuthMenu = () => {
    return (
        <div className={styles.list}>
            <div className={styles.item}>
            <NavLink to="/register" className={isActive}>
                Register
            </NavLink>
            </div>
            
            <div className={styles.item}>
            <NavLink to="/login" className={isActive}>
                Login
            </NavLink>
            </div>
        </div>
    )    
}
            
export default AuthMenu;