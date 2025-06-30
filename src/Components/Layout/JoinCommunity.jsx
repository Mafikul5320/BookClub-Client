import { BookOpen, Star, TrendingUp, Users } from 'lucide-react';
import React, { use } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { AuthContext } from '../../Context/AuthContext';
import CountUp from 'react-countup';

const JoinCommunity = () => {
    const { themeToggle } = use(AuthContext);
    return (
        <section className={`py-16 bg-gray-50 ${themeToggle === "dark" ? 'bg-gradient-to-br from-[#2c3e50] to-[#1c1c1e]' : 'bg-gray-50'} `}>
            <div className="container mx-auto px-4">
                <Fade triggerOnce>
                    <h2 className="text-3xl font-bold mb-12 text-center">Join Our Growing Community</h2>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <Slide direction="up" triggerOnce cascade>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <Users className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"><CountUp duration={7} end={2500}/>+</h3>
                            <p className="text-gray-600 dark:text-gray-400">Active Readers</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <BookOpen className="h-8 w-8 text-secondary-600 dark:text-secondary-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2"><CountUp duration={5} end={150}/>+</h3>
                            <p className="text-gray-600 dark:text-gray-400">Book Clubs</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <Star className="h-8 w-8 text-accent-600 dark:text-accent-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2"><CountUp duration={3} end={4}/>/5</h3>
                            <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16  flex items-center justify-center mb-4 mx-auto">
                                <TrendingUp className="h-8 w-8 " />
                            </div>
                            <h3 className="text-3xl font-bold  mb-2"><CountUp duration={5} end={95}/>%</h3>
                            <p className="text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default JoinCommunity;