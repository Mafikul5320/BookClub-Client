import { BookOpen, Calendar, Filter, Search, Users } from 'lucide-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGroup = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4 p-6  backdrop-blur-md shadow-lg border border-white/10 bg-gradient-to-br from-sky-900/60 to-indigo-900/60">

                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-sky-200" />
                    <input
                        type="text"
                        placeholder="Search book clubs..."
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
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='my-22 grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12  mx-auto'>
                {
                    data.map(onedata=><div className='bg-white  shadow-xl rounded-[7px]'>
                    <div className='relative   overflow-hidden'>
                        <img className='h-48 w-full object-cover duration-300 transition-transform hover:scale-105' src={onedata.photoURL} />
                        <span className="absolute top-4 left-4 shadow-2xl bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                            {onedata.book_category}
                        </span>
                    </div>
                    <div className='p-6 '>
                        <div className='flex items-center justify-between '>
                            <h1 className='text-xl font-bold text-[#172331]'>{onedata.gp_name}</h1>
                            <span className='flex items-center space-x-1 '><Users size={18} /><p>{onedata.members}</p></span>
                        </div>
                        <p className='py-4 text-slate-600 text-sm'>{onedata.description}</p>
                        <span className='flex space-x-2 items-center'>
                            <Calendar size={18} /> <h1 className='text-slate-600 text-sm'>{onedata.available_time}</h1>
                        </span>
                        <div className="flex items-center bg-slate-50 rounded-md p-3 mt-6 ">
                            <BookOpen className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 " />
                            <div>
                                <p className="text-sm py-1 font-medium">Currently Reading:</p>
                                <p className="text-slate-700 py-1">The Splendid and the Vile</p>
                                <p className="text-slate-500 py-1 text-xs">{onedata.displayName}</p>
                            </div>

                        </div>
                        <Link to={`/group-details/${onedata._id}`}>
                            <div className='flex justify-center my-2'>
                                <button className='btn btn-primary w-full'>See More</button>
                            </div>
                        </Link>
                    </div>

                </div>)
                }
            </div>
        </div>
    );
};

export default AllGroup;
