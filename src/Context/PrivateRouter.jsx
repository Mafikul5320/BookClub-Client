import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router';

const PrivateRouter = ({ children }) => {


    const { user } = use(AuthContext)
    if (!user && !user?.email) {
        return <Navigate to={"/login"}></Navigate>
    }

    return children;
};

export default PrivateRouter;