import React from 'react';
import Navber from './Navber';
import Dashboard from '../../Pages/Dashboard';
import { Outlet } from 'react-router';
import Footer from './Footer';

const DashboardLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;