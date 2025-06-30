import { Calendar, Filter, Search, Users } from 'lucide-react';
import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const AllGroupTable = () => {
    const { themeToggle } = use(AuthContext);
    const data = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");

    // Filter data based on search input
    const filteredData = data.filter(group =>
        group.gp_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6">
            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4 backdrop-blur-md shadow-lg border border-white/10 bg-gradient-to-br from-sky-900/60 to-indigo-900/60 p-6 rounded-lg mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-sky-200" />
                    <input
                        type="text"
                        placeholder="Search book clubs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-sky-200 backdrop-blur focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                    />
                </div>

                <div className="relative w-full md:w-64">
                    <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-sky-200" />
                    <select
                        className="w-full pl-12 pr-8 py-3 rounded-lg bg-white/10 text-white placeholder:text-sky-200 backdrop-blur focus:outline-none focus:ring-2 focus:ring-sky-400 appearance-none transition-all"
                    >
                        <option className="text-slate-800">All Categories</option>
                        <option className="text-slate-800">Fiction</option>
                        <option className="text-slate-800">Mystery</option>
                        <option className="text-slate-800">History</option>
                    </select>
                </div>
            </div>

            {/* Table View */}
            <div className={`overflow-x-auto ${themeToggle === "dark" ? 'bg-gradient-to-br from-[#2c3e50] to-[#1c1c1e] ' : 'bg-white'} shadow-md rounded-lg`}>
                <table className="min-w-full table-auto">
                    <thead className={`${themeToggle === "dark" ? 'bg-gradient-to-br from-[#2c3e50] to-[#1c1c1e]' : 'bg-blue-50'}`}>
                        <tr className="text-left text-sm uppercase font-semibold">
                            <th className="py-3 px-4">Group Name</th>
                            <th className="py-3 px-4">Category</th>
                            <th className="py-3 px-4">Members</th>
                            <th className="py-3 px-4">Created By</th>
                            <th className="py-3 px-4 text-center">Details</th>
                        </tr>
                    </thead>
                    <tbody className={`${themeToggle === "dark" ? 'text-white' : 'text-gray-700'}`}>
                        {filteredData.length > 0 ? (
                            filteredData.map((onedata) => (
                                <tr key={onedata._id} className={`border-t ${themeToggle === "dark" ? 'hover:bg-[#2a3d50]' : 'hover:bg-sky-50'} transition`}>
                                    <td className="py-3 px-4 font-medium">{onedata.gp_name}</td>
                                    <td className="py-3 px-4">{onedata.book_category}</td>
                                    <td className="py-3 px-4 flex items-center gap-1">
                                        <Users size={16} className="text-sky-600" /> {onedata.members}
                                    </td>
                                    <td className="py-3 px-4 flex items-center gap-1">
                                        <Calendar size={16} className="text-sky-600" /> {onedata.available_time}
                                    </td>
                                    <td className={`py-3 px-4 text-sm ${themeToggle === "dark" ? 'text-white' : 'text-gray-600'} line-clamp-2 max-w-xs`}>
                                        {onedata.description}
                                    </td>
                                    <td className="py-3 px-4 text-sm">{onedata.displayName}</td>
                                    <td className="py-3 px-4 text-center">
                                        <Link to={`/group-details/${onedata._id}`}>
                                            <button className="btn btn-sm btn-primary">See More</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center py-6 text-gray-500">
                                    No groups found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllGroupTable;
