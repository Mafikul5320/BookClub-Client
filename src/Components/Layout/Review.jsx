import { Star } from 'lucide-react';
import React, { use } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { AuthContext } from '../../Context/AuthContext';

const Review = () => {
        const { themeToggle } = use(AuthContext);
    return (
         <section className={`py-16 ${themeToggle === "dark" ? 'bg-gradient-to-br from-[#2c3e50] to-[#1c1c1e]' : 'bg-blue-50'}`}>
        <div className="container mx-auto px-4">
          <Fade triggerOnce>
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Members Say</h2>
          </Fade>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Slide >
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-soft">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://i.ibb.co/j9XMZRTj/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.jpg" 
                    alt="Emma" 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Emma Richardson</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "BookClub has completely transformed my reading experience. I've discovered amazing books I never would have picked up on my own!"
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-soft">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" 
                    alt="Marcus" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Marcus Chen</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "The discussions are incredibly insightful. It's amazing how different perspectives can completely change how you view a story."
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-soft">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
                    alt="Sarah" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Sarah Williams</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "I've made lifelong friends through this platform. There's nothing quite like bonding over a great book!"
                </p>
              </div>
            </Slide>
          </div>
        </div>
      </section>
    );
};

export default Review;