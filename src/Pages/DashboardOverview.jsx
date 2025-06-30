import React, { useContext, useEffect, useState } from 'react';
import { Box, ClipboardList, Users, UserCircle2 } from 'lucide-react';
import { AuthContext } from '../Context/AuthContext';

const DashboardOverview = () => {
    const { user, themeToggle } = useContext(AuthContext);
    const [stats, setStats] = useState({
        totalItems: 0,
        myItems: 0,
        users: 0,
    });

    useEffect(() => {
        // Fake fetch - replace with real API calls
        setStats({
            totalItems: 25,
            myItems: 12,
            users: 40,
        });
    }, []);

    return (
        <div className="space-y-10">
            <div className="text-center">
                <h1 className="text-3xl font-bold ">📊 Dashboard Overview</h1>
                <p className="text-gray-500 mt-2">Quick summary of your data</p>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {/* Total Items */}
                <div className={`${themeToggle === "dark" ? 'bg-gradient-to-br from-[#2c3e50] to-[#1c1c1e]' : 'bg-white'} shadow rounded-xl p-6 flex items-center gap-4 border-l-4 border-blue-500`}>
                    <Box size={36} className="text-blue-600" />
                    <div>
                        <p className="text-lg font-semibold">Total Groups</p>
                        <p className="text-2xl font-bold text-blue-700">{stats.totalItems}</p>
                    </div>
                </div>

                {/* My Items */}
                <div className={`${themeToggle === "dark" ? 'bg-gradient-to-br from-[#2c3e50] to-[#1c1c1e]' : 'bg-white'} shadow rounded-xl p-6 flex items-center gap-4 border-l-4 border-green-500`}>
                    <ClipboardList size={36} className="text-green-600" />
                    <div>
                        <p className="text-lg font-semibold">My Groups</p>
                        <p className="text-2xl font-bold text-green-700">{stats.myItems}</p>
                    </div>
                </div>

                {/* Total Users */}
                <div className={`${themeToggle === "dark" ? 'bg-gradient-to-br from-[#2c3e50] to-[#1c1c1e]' : 'bg-white'} shadow rounded-xl p-6 flex items-center gap-4 border-l-4 border-purple-500`}>
                    <Users size={36} className="text-purple-600" />
                    <div>
                        <p className="text-lg font-semibold">Total Users</p>
                        <p className="text-2xl font-bold text-purple-700">{stats.users}</p>
                    </div>
                </div>
            </div>

            {/* Logged-in User Info */}
            <div className={`${themeToggle === "dark" ? 'bg-gradient-to-br from-[#2c3e50] to-[#1c1c1e]' : 'bg-white'} p-6 rounded-xl shadow-md border`}>
                <h2 className="text-2xl font-semibold mb-4">👤 Logged-in User Info</h2>
                <div className="flex items-center gap-6">
                    <img className='rounded-full w-20 h-20' src={user?.photoURL} />
                    <div>
                        <p><strong>Name:</strong> {user?.displayName || 'Anonymous'}</p>
                        <p><strong>Email:</strong> {user?.email}</p>
                        <p><strong>Role:</strong> User</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
