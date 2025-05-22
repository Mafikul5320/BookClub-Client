import React from 'react';
import Banner from './Banner';
import BenefitsofJoining from './BenefitsofJoining';
import HowtoStart from './HowtoStart';
import FeaturedGroupsCard from './FeaturedGroupsCard';
import { useLoaderData } from 'react-router';

const MainLayout = () => {
    const CardData = useLoaderData()
    console.log(CardData)
    return (
        <div>
            <Banner></Banner>
            <div className='my-8 w-11/13  mx-auto'>
                <h1 className='text-3xl text-[#172331] text-center font-bold'>Featured Book Clubs</h1>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        CardData.map(singleData => <FeaturedGroupsCard singleData={singleData} key={singleData._id}></FeaturedGroupsCard>)
                    }
                </div>
            </div>
            <BenefitsofJoining></BenefitsofJoining>
            <HowtoStart></HowtoStart>
        </div>
    );
};

export default MainLayout;