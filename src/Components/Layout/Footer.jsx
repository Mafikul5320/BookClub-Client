import { BookOpen, Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-200 p-2 md:p-5">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <BookOpen className="h-6 w-6 text-primary-400" />
                            <span className="text-lg font-serif font-bold text-white">
                                BookClub
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 mb-6">
                            Connecting readers through shared literary experiences. Join a club, discover new books, and engage in meaningful discussions.
                        </p>
                        <div className="flex space-x-4">
                            <a target="_blank"
                                href="https://www.facebook.com/mdmafikul.islam.3388"
                                className="text-slate-400 hover:text-primary-400 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a target="_blank"
                                href="https://x.com/?lang=en"
                                className="text-slate-400 hover:text-primary-400 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a target="_blank"
                                href="https://www.instagram.com/accounts/login/?hl=en"
                                className="text-slate-400 hover:text-primary-400 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-medium mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/explore" className="text-slate-400 hover:text-primary-400 transition-colors">
                                    Explore Book Clubs
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-slate-400 hover:text-primary-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-slate-400 hover:text-primary-400 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-slate-400 hover:text-primary-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-medium mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/help" className="text-slate-400 hover:text-primary-400 transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-slate-400 hover:text-primary-400 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-slate-400 hover:text-primary-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-slate-400 hover:text-primary-400 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-medium mb-4">Stay Updated</h4>
                        <p className="text-sm text-slate-400 mb-4">
                            Subscribe to our newsletter for the latest book recommendations and club updates.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 w-full text-sm bg-slate-800 border border-slate-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500 text-white"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary-600 px-4 py-2 rounded-r-md hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                                aria-label="Subscribe"
                            >
                                <Mail className="h-5 w-5" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t text-center border-slate-800 mt-12 pt-6 ">
                    <p>&copy; 2025 BookClub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;