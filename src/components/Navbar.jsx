import { useEffect, useState } from "react";

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        
    }, [isDarkMode]);

    function toggleMode() {
        setIsDarkMode((prevMode) => !prevMode);
    }

    return (
        <div className="navbar-container">
            <nav className="text-2xl sm:text-3xl lg:text-3xl py-4 pr-6 flex justify-end items-center fixed top-5 right-5 z-50 bg-transparent">
            <div className="flex gap-x-8 font-medium">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                    key={item}
                    className="hover:text-blue-600 transition-colors cursor-pointer"
                    onClick={() => console.log(item)}
                >
                    {item}
                </button>
                ))}
            </div>
            </nav>
        </div>
      );
}

export default Navbar