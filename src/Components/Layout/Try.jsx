import { useEffect, useState } from 'react';

function Try() {
    const [isDark, setIsDark] = useState(false);

    // Add or remove 'dark' class to <html> element
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-all">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">React + Tailwind Theme Toggle</h1>
                <button
                    onClick={toggleTheme}
                    className="px-6 py-3 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:scale-105 transition"
                >
                    {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </div>
        </div>
    );
}

export default Try;
