import { BookOpen, LogOut, Menu, X } from 'lucide-react';
import React, { useState, use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import ThemeToggle from './Main/ThemeToggle';

const Navber = () => {
    const { user, SignOut, setUser, themeToggle } = use(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    console.log(themeToggle)
    const HandelLogOut = () => {
        SignOut().then(res => {
            console.log(res);
            setUser(null);
        });
    };

    return (
        <div className=' shadow-xl items-center'>
            <div className='flex justify-between items-center w-11/13 mx-auto px-4 py-4'>

                <Link to={"/"}>
                    <div className='flex items-center space-x-2'>
                        <BookOpen size={36} className='text-blue-600' />
                        <h1 className='text-xl   font-semibold'>BookClub</h1>
                    </div>
                </Link>
                <div className='hidden md:flex items-center space-x-3'>
                    <Link to={"/"}><button className='bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm'>Home</button></Link>
                    <Link to={"/all-group"}><button >All Groups</button></Link>
                    <Link to={"/create-group"}><button>Create Group</button></Link>
                    <Link to={`/my-group/${user?.email}`}><button>My Groups</button></Link>
                </div>


                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>


                <div className='hidden md:flex items-center space-x-2 '>
                    <span className='pr-4 md:pt-2'><ThemeToggle /></span>
                    {user ? (
                        <>
                            <div className='relative group '>
                                <img className='w-13 h-13 rounded-full border-2 border-blue-500 ' src={user.photoURL} />
                                <span className='font-bold absolute -top-4 right-4 opacity-0 group-hover:opacity-100'>{user.displayName}</span>
                            </div>
                            <button onClick={HandelLogOut} className='btn ml-3 btn-primary'>LogOut <LogOut size={18} /></button>
                        </>
                    ) : (
                        <>
                            <Link to={"/login"}><button className='btn text-white bg-[#0866ff] border-0 '>Login</button></Link>
                            <Link to={"/register"}><button className='btn text-white bg-[#2a994b] border-0 '>Register</button></Link>
                        </>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden flex flex-col items-center space-y-3 pb-4'>
                    <Link to={"/"}><button className='bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm'>Home</button></Link>
                    <Link to={"/all-group"}><button>All Groups</button></Link>
                    <Link to={"/create-group"}><button>Create Group</button></Link>
                    <Link to={`/my-group/${user?.email}`}><button>My Groups</button></Link>
                    <ThemeToggle />
                    {user ? (
                        <>
                            <div className='flex items-center space-x-2 mt-2'>
                                <img className='w-10 h-10 rounded-full border-2 border-blue-500' src={user.photoURL} />
                                <span className='font-semibold'>{user.displayName}</span>
                            </div>
                            <button onClick={HandelLogOut} className='btn mt-2'>LogOut</button>
                        </>
                    ) : (
                        <>
                            <Link to={"/login"}><button className='btn text-white bg-[#0866ff] border-0 mt-2'>Login</button></Link>
                            <Link to={"/register"}><button className='btn text-white bg-[#2a994b] border-0 mt-2'>Register</button></Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navber;
