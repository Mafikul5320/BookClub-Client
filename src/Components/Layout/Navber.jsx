import { BookOpen, SunMoon } from 'lucide-react';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navber = () => {
    const { user, SignOut, setUser } = use(AuthContext)
    const HandelLogOut = () => {
        SignOut().then(res => {
            console.log(res)
            setUser(null)
        })
    }
    console.log(user)
    return (
        <div className='bg-white  shadow-xl'>
            <div className='flex justify-between items-center w-11/13 mx-auto py-4'>
                <div className='flex items-center space-x-2'>
                    <BookOpen size={36} className='text-blue-600' />
                    <h1 className='text-xl font-semibold'>BookClub</h1>
                </div>
                <div className='flex justify-center items-center space-x-3'>
                    <Link to={"/"}><button className='bg-blue-200 text-primary font-semibold px-3 py-1 rounded-sm'>Home</button></Link>
                    <Link to={"/all-group"}>
                        <button>All Groups</button>
                    </Link>
                    <Link to={"/create-group"}><button>Create Group </button></Link>
                    <Link to={`/my-group/${user?.email}`}>
                        <button>My Groups</button>
                    </Link>
                </div>
                <div className='flex items-center space-x-2'>
                    <SunMoon />
                    {user ? <>
                        <div className='relative group'>
                            <img className='w-13 h-13 rounded-full border-2 border-blue-500' src={user.photoURL} />
                            <span className='font-bold absolute -top-4 right-4 opacity-0 group-hover:opacity-100'>{user && user.displayName}</span>
                        </div> <button onClick={HandelLogOut} className='btn ml-3'>LogOut</button>
                    </> : <>
                        <Link to={"/login"}>
                            <button className='btn btn-primary'>Login</button>
                        </Link>
                        <Link to={"/register"}><button className='btn btn-primary'>Register</button></Link>
                    </>}
                </div>
            </div>
        </div>
    );
};

export default Navber;