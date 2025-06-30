import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4 md:px-20">
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About HobbyHub</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          HobbyHub is more than just a website — it's a community. We help people discover and connect with local hobby groups, so you can explore your passions with others who share the same interests.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-md transition"
            whileHover={{ scale: 1.03 }}
          >
            <Users className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Community Driven</h4>
            <p className="text-gray-600 dark:text-gray-300">
              We believe shared hobbies build strong communities. Our platform encourages authentic connections through group participation.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-md transition"
            whileHover={{ scale: 1.03 }}
          >
            <Target className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Purposeful Design</h4>
            <p className="text-gray-600 dark:text-gray-300">
              HobbyHub is designed to be user-friendly, responsive, and enjoyable — whether you're joining a hiking group or hosting a cooking circle.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-md transition"
            whileHover={{ scale: 1.03 }}
          >
            <Lightbulb className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Inspire & Be Inspired</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Discover new hobbies, meet like-minded individuals, and share your creativity. HobbyHub helps you grow personally and socially.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
