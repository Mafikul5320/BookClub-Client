import React, { use } from 'react';
import { Outlet, NavLink } from 'react-router';
import { LayoutDashboard, List, PlusCircle, User } from 'lucide-react';
import { AuthContext } from '../Context/AuthContext';

const Dashboard = () => {
    const { user } = use(AuthContext)
    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />


            <div className="drawer-content p-4">
                <div className="lg:hidden mb-4">
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button">
                        Open Menu
                    </label>
                </div>

                <Outlet />
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <h2 className="text-2xl font-bold mb-4">📊 Dashboard</h2>
                    <li>
                        <NavLink
                            to="/Dashboard"
                            className="flex items-center gap-2"
                        >
                            <LayoutDashboard size={18} /> Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Dashboard/all-group/"
                            className={({ isActive }) => isActive ? "flex items-center gap-2 font-semibold text-blue-600 bg-gray-200" : "flex items-center gap-2"}
                        >
                            <List size={18} /> All Group
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Dashboard/create-group"
                            className={({ isActive }) => isActive ? "flex items-center gap-2 font-semibold text-blue-600 bg-gray-200" : "flex items-center gap-2"}
                        >
                            <PlusCircle size={18} /> Create Group
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/Dashboard/${user?.email}`}
                            className={({ isActive }) => isActive ? "flex items-center gap-2 font-semibold text-blue-600 bg-gray-200" : "flex items-center gap-2"}
                        >
                            <User size={18} /> My Groups
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
