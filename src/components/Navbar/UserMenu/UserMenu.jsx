import { shallowEqual, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { logout } from '../../../redux/user/user-operations';

import { getUser } from 'redux/user/user-selector'

import styles from './userMenu.module.css'

const UserMenu = () => {
    const { name } = useSelector(getUser, shallowEqual);

    const dispatch = useDispatch()

    const logoutUser = () => {
        dispatch(logout()) 
    }

    return ( 
        <>
           <div className={styles.navLink}>{name}</div> <button className={styles.btn} onClick={logoutUser}>LogOut</button>
        </>
    )
}

export default UserMenu