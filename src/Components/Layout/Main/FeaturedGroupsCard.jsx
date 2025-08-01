import { BookOpen, Calendar, Users } from 'lucide-react';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../../Context/AuthContext';

const FeaturedGroupsCard = ({ singleData }) => {
    const { themeToggle } = use(AuthContext);
    const { gp_name, description, available_time, displayName, photoURL, book_category, members, _id } = singleData
    // console.log(singleData)
    return (
        <Link to={`/group-details/${_id}`}>
            <div>
                <div className={`${themeToggle === "dark" ? 'bg-gradient-to-br from-[#22303c] to-[#121212]' : 'bg-white'} shadow-xl rounded-[7px]`}>
                    <div className='relative   overflow-hidden'>
                        <img className='h-48 w-full object-cover duration-300 transition-transform hover:scale-105' src={photoURL} />
                        <span className="absolute top-4 left-4 shadow-2xl bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                            {book_category}
                        </span>
                    </div>
                    <div className='p-6 '>
                        <div className='flex items-center justify-between '>
                            <h1 className={`text-xl font-bold ${themeToggle === "dark" ? 'text-white' : 'text-[#172331]'}`}>{gp_name}</h1>
                            <span className='flex items-center space-x-1 '><Users size={18} /><p>{members}</p></span>
                        </div>
                        <p className={`py-4 ${themeToggle === "dark" ? 'text-[#8fa2bb]' : 'text-slate-600'} text-sm`}>{description}</p>
                        <span className='flex space-x-2 items-center'>
                            <Calendar size={18} /> <h1 className={`${themeToggle === "dark" ? 'text-[#c8daf3]' : 'text-slate-600'} text-sm`}>{available_time}</h1>
                        </span>
                        <div className={`flex items-center ${themeToggle === "dark" ? 'bg-[#2c3e50] ' : 'bg-slate-50'} rounded-md p-3 mt-6`}>
                            <BookOpen className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 " />
                            <div>
                                <p className="text-sm py-1 font-medium">Currently Reading:</p>
                                <p className={`${themeToggle === "dark" ? 'text-[#a5acb4] ' : 'text-slate-700'} py-1`}>The Splendid and the Vile</p>
                                <p className={`${themeToggle === "dark" ? 'text-slate-300' : 'text-slate-500'} py-1 text-xs`}>{displayName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};





export default FeaturedGroupsCard;