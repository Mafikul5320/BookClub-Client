import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router';
import Footer from './Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <main className='min-h-[calc(100vh-421px)]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;