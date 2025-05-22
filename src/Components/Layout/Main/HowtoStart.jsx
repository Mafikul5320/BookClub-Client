import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const HowtoStart = () => {
    return (
        <div>
            <section className="py-16 bg-white ">
                <div className="container mx-auto px-4">
                    <Fade triggerOnce>
                        <h2 className="text-3xl font-bold mb-12 text-center">How to Start Your Own Reading Group</h2>
                    </Fade>

                    <div className="max-w-4xl mx-auto ">
                        <div className="space-y-8">
                            <Fade cascade damping={0.1} triggerOnce>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-[#0a1a2f]">Choose Your Focus</h3>
                                        <p className="text-gray-600 font-medium">
                                            Decide on the type of books your club will read. Will you focus on a specific genre, bestsellers, classics, or a mix? Having a clear focus helps attract members with similar interests.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-[#0a1a2f]">Create Your Group</h3>
                                        <p className="text-gray-600 font-medium">
                                            Use our "Create Group" feature to set up your book club. Give it a descriptive name, write an engaging description, choose a meeting location, and set a start date for your first gathering.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-[#0a1a2f]">Invite Members</h3>
                                        <p className="text-gray-600 font-medium">
                                            Share your group with friends or let the community discover it. Consider the optimal size for meaningful discussions—usually between 5 and 15 members works well.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        4
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-[#0a1a2f]">Start Reading Together</h3>
                                        <p className="text-gray-600 font-medium">
                                            Begin your literary journey! Establish a regular meeting schedule, prepare thoughtful discussion questions, and create an inclusive atmosphere where everyone feels comfortable sharing their insights.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                        <div className="mt-12 text-center">
                            <Link
                                to="/createGroup"
                                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors"
                            >
                                Start Your Book Club Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowtoStart;