import { BookOpen, LogOut, Menu, X } from 'lucide-react';
import React, { useState, use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import ThemeToggle from './Main/ThemeToggle';

const Navber = () => {
    const { user, SignOut, setUser,themeToggle } = use(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    // console.log(themeToggle);

    const HandelLogOut = () => {
        SignOut().then(() => {
            // console.log(res);
            setUser(null);
        });
    };

    return (
        <div className={`shadow-xl items-center sticky top-0 z-50 ${themeToggle === "dark" ? 'bg-gray-800' : 'bg-white/60'} backdrop-blur-lg`}>
            <div className='flex justify-between items-center w-11/13 mx-auto px-4 py-4'>
                <Link to={"/"}>
                    <div className='flex items-center space-x-2'>
                        <BookOpen size={36} className='text-blue-600' />
                        <h1 className='text-xl font-semibold'>BookClub</h1>
                    </div>
                </Link>

                <div className='hidden md:flex items-center space-x-3'>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? 'bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm' : 'font-bold hover:text-primary'
                    }>
                        Home
                    </NavLink>
                    <NavLink to="/all-group" className={({ isActive }) =>
                        isActive ? 'bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm' : 'font-bold hover:text-primary'
                    }>
                        All Groups
                    </NavLink>

                    <NavLink to="/About-us" className={({ isActive }) =>
                        isActive ? 'bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm' : 'font-bold hover:text-primary'
                    }>
                        About Us
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? 'bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm' : 'font-bold hover:text-primary'
                    }>
                        Contact
                    </NavLink>
                    {
                        user && <>
                            
                            {/* <NavLink to="/create-group" className={({ isActive }) =>
                                isActive ? 'bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm' : 'font-bold hover:text-primary'
                            }>
                                Create Group
                            </NavLink> */}
                            <NavLink to="/Dashboard" className={({ isActive }) =>
                                isActive ? 'bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm' : 'font-bold hover:text-primary'
                            }>
                                Dashboard
                            </NavLink>
                        </>
                    }
                </div>

                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div className='hidden md:flex items-center space-x-2'>
                    <span className='pr-4 md:pt-2'><ThemeToggle /></span>
                    {user ? (
                        <>
                            <div className='relative group'>
                                <img className='w-13 h-13 rounded-full border-3 border-blue-500' src={user.photoURL} />
                                <span className='font-bold absolute -top-4 right-4 opacity-0 group-hover:opacity-100'>{user.displayName}</span>
                            </div>
                            <button onClick={HandelLogOut} className='btn ml-3 btn-primary'>LogOut <LogOut size={18} /></button>
                        </>
                    ) : (
                        <>
                            <Link to="/login"><button className='btn text-white bg-[#0866ff] border-0'>Login</button></Link>
                            <Link to="/register"><button className='btn text-white bg-[#2a994b] border-0'>Register</button></Link>
                        </>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden flex flex-col items-center space-y-3 pb-4'>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? 'bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm w-full text-center' :
                            'font-bold hover:text-primary w-full text-center'
                    }>
                        Home
                    </NavLink>
                    <NavLink to="/all-group" className={({ isActive }) =>
                        isActive ? 'bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm w-full text-center' :
                            'font-bold hover:text-primary w-full text-center'
                    }>
                        All Groups
                    </NavLink>
                    <NavLink to="/create-group" className={({ isActive }) =>
                        isActive ? 'bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm w-full text-center' :
                            'font-bold hover:text-primary w-full text-center'
                    }>
                        Create Group
                    </NavLink>
                    <NavLink to={`/my-group/${user?.email}`} className={({ isActive }) =>
                        isActive ? 'bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm w-full text-center' :
                            'font-bold hover:text-primary w-full text-center'
                    }>
                        My Groups
                    </NavLink>

                    <ThemeToggle />
                    {user ? (
                        <>
                            <div className='flex items-center space-x-2 mt-2'>
                                <img className='w-10 h-10 rounded-full border-3 border-blue-500' src={user.photoURL} />
                                <span className='font-semibold'>{user.displayName}</span>
                            </div>
                            <button onClick={HandelLogOut} className='btn mt-2'>LogOut</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login"><button className='btn text-white bg-[#0866ff] border-0 mt-2'>Login</button></Link>
                            <Link to="/register"><button className='btn text-white bg-[#2a994b] border-0 mt-2'>Register</button></Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navber;
