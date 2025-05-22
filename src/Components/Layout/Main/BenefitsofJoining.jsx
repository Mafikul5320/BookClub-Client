import { BookOpen } from 'lucide-react';
import React from 'react';

const BenefitsofJoining = () => {
    return (
        <div className='bg-[#f5f8f5] my-8 py-8 space-y-4 '>
            <h1 className='text-center text-3xl font-bold'>Benefits of Joining a Book Club</h1>
            <p className='text-center text-sm'>Connecting readers has never been easier. Start your <br /> literary journey in three simple steps.</p>
            <div className='grid grid-cols-3 w-11/13 mx-auto gap-6'>
                <div className='text-center bg-white p-3 space-y-4 py-19 shadow-lg '>
                    <span className='flex justify-center '>
                        <svg className="w-15 h-15 bg-amber-200 p-3 rounded-full text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </span>
                    <h1 className='text-xl font-semibold'>Expand Your Literary Horizon</h1>
                    <p className='text-sm font-medium'>Discover books you might never have chosen yourself, broadening <br /> your reading  experience and opening your mind to new genres, authors, and ideas.</p>

                </div>
                <div className='text-center bg-white p-3 space-y-4 py-19 shadow-lg '>
                    <span className='flex justify-center '>
                        <svg className="w-15 h-15 bg-cyan-200 p-3 rounded-full text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                    </span>
                    <h1 className='text-xl font-semibold'>Meaningful Social Connections</h1>
                    <p className='text-sm font-medium'>Build friendships with people who share your passion for reading, <br /> creating a supportive community where you can engage in thoughtful discussions.</p>

                </div>
                <div className='text-center bg-white p-3 space-y-4 py-19 shadow-lg '>
                    <span className='flex justify-center '>
                        <svg className="w-15 h-15 bg-green-200 p-3 rounded-full text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                    </span>
                    <h1 className='text-xl font-semibold'>Deeper Understanding</h1>
                    <p className='text-sm font-medium'>Gain fresh perspectives from diverse viewpoints, enriching your <br /> comprehension of the text and helping you notice details you might have missed.</p>

                </div>
            </div>
        </div>
    );
};

export default BenefitsofJoining;