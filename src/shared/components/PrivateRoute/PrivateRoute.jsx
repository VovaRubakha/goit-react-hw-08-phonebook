import { Navigate, Outlet } from "react-router-dom";

import useLogin from '../../hooks/useLogin';

const PrivateRoute = () => {

    const isLogin = useLogin();
    console.log(isLogin);
    if (!isLogin) {
        return <Navigate to="/login"/>
    }
    return <Outlet />
};

export default PrivateRoute;