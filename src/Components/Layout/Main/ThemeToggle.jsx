import { use, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
    const { setThemeToggle } = use(AuthContext)
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    setThemeToggle(theme)
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        
        <button onClick={toggleTheme}>
            {theme === 'dark' ?
                <><Sun size={28} className="  text-yellow-500" /></> :
                <><Moon size={28} className=" text-gray-600" /></>
            }
        </button>
        
    );
};

export default ThemeToggle;
