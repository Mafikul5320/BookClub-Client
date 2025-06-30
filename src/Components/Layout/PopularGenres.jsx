import { BookOpen, Heart, MessageCircle, Star, TrendingUp, Zap } from 'lucide-react';
import React, { use } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const PopularGenres = () => {
            const { themeToggle } = use(AuthContext);
    return (
         <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
        <div className="container mx-auto px-4">
          <Fade triggerOnce>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Popular Genres</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover book clubs across various genres and find your perfect literary community
              </p>
            </div>
          </Fade>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <Slide direction="up" triggerOnce cascade>
              {[
                { name: 'Fiction', icon: BookOpen, color: 'bg-blue-500', count: '45 clubs' },
                { name: 'Mystery', icon: MessageCircle, color: 'bg-purple-500', count: '32 clubs' },
                { name: 'Romance', icon: Heart, color: 'bg-pink-500', count: '28 clubs' },
                { name: 'Sci-Fi', icon: Zap, color: 'bg-indigo-500', count: '24 clubs' },
                { name: 'Fantasy', icon: Star, color: 'bg-emerald-500', count: '38 clubs' },
                { name: 'Self-Help', icon: TrendingUp, color: 'bg-orange-500', count: '19 clubs' }
              ].map((genre, index) => (
                <Link
                  key={index}
                  to="/groups"
                  className="group   p-6 rounded-lg shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className={`w-12 h-12 ${genre.color} rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                    <genre.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{genre.name}</h3>
                  <p className={`${themeToggle === "dark" ? 'text-gray-600' : 'text-sm text-gray-900 font-semibold'}`}>{genre.count}</p>
                </Link>
              ))}
            </Slide>
          </div>
        </div>
      </section>
    );
};

export default PopularGenres;