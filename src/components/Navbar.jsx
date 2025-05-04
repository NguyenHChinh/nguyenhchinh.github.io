import { useEffect, useState } from "react";

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(() => 
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

    function toggleMode() {
        setIsDarkMode((prevMode) => !prevMode);
    }

    return (
        <div className="navbar-container">
            <nav className="text-3xl w-full px-6 py-4 flex justify-between items-center fixed top-0 z-50 bg-transparent">
            <div
                className="font-semibold cursor-pointer"
                onClick={() => toggleMode()}
            >
                {isDarkMode ? "Lights On" : "Lights Off"}
            </div>
            <div className="flex space-x-6 font-medium">
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