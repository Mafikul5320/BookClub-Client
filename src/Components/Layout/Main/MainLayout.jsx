import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import BenefitsofJoining from './BenefitsofJoining';
import HowtoStart from './HowtoStart';
import FeaturedGroupsCard from './FeaturedGroupsCard';
import { useLoaderData } from 'react-router';
import JoinCommunity from '../JoinCommunity';
import Review from '../Review';
import PopularGenres from '../PopularGenres';

const MainLayout = () => {
    const CardData = useLoaderData()
    const [card, setCard] = useState([])
    // console.log(CardData)
    useEffect(() => {
        setCard(CardData.slice(0,6))
    }, [CardData])
    return (
        <div>
            <Banner></Banner>
            <div className='my-8 md:w-11/13 w-11/12  mx-auto'>
                <h1 className='text-3xl mb-8 md:mb-0 md:pb-8 text-center font-bold'>Featured Book Clubs</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        card.map(singleData => <FeaturedGroupsCard singleData={singleData} key={singleData._id}></FeaturedGroupsCard>)
                    }
                </div>
            </div>
            <PopularGenres></PopularGenres>
            <BenefitsofJoining></BenefitsofJoining>
            <HowtoStart></HowtoStart>
            <JoinCommunity></JoinCommunity>
            <Review></Review>
        </div>
    );
};

export default MainLayout;