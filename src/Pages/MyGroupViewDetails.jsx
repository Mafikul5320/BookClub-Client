import { Calendar, MapPin, Users } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const MyGroupViewDetails = () => {
    const data = useLoaderData()
    const { _id, photoURL, members, location, gp_name, email, displayName, description, date, book_category } = data;
    const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
    
        const formattedDate = `${year}-${month}-${day}`;
    
        const limited = date == formattedDate;
        const handelSuccess = () => {
            toast.success("Group Join Successfull!")
        }
    
    return (
        <div className="container mx-auto px-4 py-10">
            <div className=" bg-[#f5f8f5] rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 md:h-80">
                    <img
                        src={photoURL}
                        alt="Book Club Cover"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 p-6">
                        <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-2">
                            {book_category}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{gp_name}</h1>
                        <p className="text-gray-200">Created by {displayName}</p>
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center  text-slate-900">
                            <MapPin className="w-5 h-5 mr-2" />
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center text-[#172331] ">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>Starts on {date}</span>
                        </div>
                        <div className="flex items-center text-[#172331] ">
                            <Users className="w-5 h-5 mr-2" />
                            <span>{members} members</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl  mb-3 text-[#172331] font-semibold">About This Book Club</h2>
                        <p className="text-[#2d4e74] text-sm font-semibold">
                            {description}
                        </p>
                    </div>

                    <div className="mt-6">
                        {
                            limited ? <>
                                <button onClick={handelSuccess}
                                    disabled={false}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Join Group
                                </button> <ToastContainer />
                            </> : <button
                                disabled={true}
                                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-not-allowed transition-colors"
                            >
                                Expired

                            </button>
                        }

                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl  mb-4 text-[#172331] font-semibold">Group Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold py-1 text-[#172331] ">Created By</h3>
                                <p className="text-gray-500 ">{displayName}</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-700 ">Email</h3>
                                <p className="text-gray-900 ">{email}</p>
                            </div>
                            <div>
                                <h3 className=" text-[#172331] font-semibold">Created On</h3>
                                <p className="text-gray-900">{date}</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-[#172331] ">Member Count</h3>
                                <p className="text-gray-900">{members}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyGroupViewDetails;