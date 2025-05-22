import { Calendar, MapPin, Users } from 'lucide-react';
import React from 'react';

const GroupDetailsPage = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className=" bg-[#f5f8f5] rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 md:h-80">
                    <img
                        src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Book Club Cover"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 p-6">
                        <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-2">
                            Fiction
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">The Readers Circle</h1>
                        <p className="text-gray-200">Created by John Doe</p>
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center  text-slate-900">
                            <MapPin className="w-5 h-5 mr-2" />
                            <span>New York Public Library</span>
                        </div>
                        <div className="flex items-center text-[#172331] ">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>Starts on 08/01/2025</span>
                        </div>
                        <div className="flex items-center text-[#172331] ">
                            <Users className="w-5 h-5 mr-2" />
                            <span>5/10 members</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl  mb-3 text-[#172331] font-semibold">About This Book Club</h2>
                        <p className="text-[#2d4e74] text-sm font-semibold">
                            This is a group for readers who love fiction and enjoy engaging discussions.
                            We meet weekly to talk about a selected book and share our thoughts.
                        </p>
                    </div>

                    <div className="mt-6">
                        <button
                            disabled={false}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            data-tooltip-id="join-tooltip"
                            data-tooltip-content="Join this book club to participate in discussions"
                        >
                            Join Group
                        </button>
                        {/* <Tooltip id="join-tooltip" /> */}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl  mb-4 text-[#172331] font-semibold">Group Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold py-1 text-[#172331] ">Created By</h3>
                                <p className="text-gray-500 ">John Doe</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-700 ">Email</h3>
                                <p className="text-gray-900 ">johndoe@example.com</p>
                            </div>
                            <div>
                                <h3 className=" text-[#172331] font-semibold">Created On</h3>
                                <p className="text-gray-900">07/15/2025</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-[#172331] ">Member Count</h3>
                                <p className="text-gray-900">5 of 10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GroupDetailsPage;