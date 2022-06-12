import { NavLink } from "react-router-dom";

import styles from './navbarMenu.module.css';

import { items } from "./items";

const isActive = ({ isActive }) =>
  isActive ? `${styles.navLink} ${styles.linkActive }` : `${styles.navLink}`;

const NavbarMenu = ({ isLogin }) => {
    const menuItems = items.filter(item => item.private === isLogin);
    const elements = menuItems.map(({ id, to, text }) => (
        <li key={id}  className={styles.item}>
            <NavLink to={to} className={isActive}>
                {text}
            </NavLink>
        </li>
    ));

    return (
        <ul  className={styles.tr}>
            {elements}
        </ul>
    )
}

export default NavbarMenu;