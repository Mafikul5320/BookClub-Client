import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
         <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 via-pink-200 to-purple-200 text-center px-4">
            <h1 className="text-7xl font-extrabold text-purple-800 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
            <p className="text-gray-600 text-lg mb-8">
                Oops! The page you are looking for doesn’t exist.
            </p>
            <Link
                to="/"
                className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition"
            >
                Go to Homepage
            </Link>
        </div>
    );
};

export default ErrorPage;