import React from 'react';
import { Navigate, Outlet,useLocation } from 'react-router-dom';


const useAuth = () => {
    var isNotLogged:any = false;
    const userData= localStorage.getItem('user-data');
    if(typeof userData === 'string'){
        isNotLogged = JSON.parse(userData)
    }

    return isNotLogged
}

function ProtectedRoutes() {
    let location = useLocation();
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />
}

export default ProtectedRoutes