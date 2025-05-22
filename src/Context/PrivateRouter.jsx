import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router';
import Loading from '../Components/Layout/Main/Loading';

const PrivateRouter = ({ children }) => {


    const { user, Loader } = use(AuthContext)
    if (Loader) {
        return <Loading></Loading>
    }
    if (!user && !user?.email) {
        return <Navigate to={"/login"}></Navigate>
    }

    return children;
};

export default PrivateRouter;