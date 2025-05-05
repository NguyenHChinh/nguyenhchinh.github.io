import { useEffect, useState } from 'react';

function Navbar() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        function handleScroll() {
            const threshold = 10 * 16; // threshold = rem * 16px
            setVisible(window.scrollY <= threshold);
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar-container transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <nav className='text-2xl sm:text-3xl lg:text-3xl py-4 pr-6 flex justify-end items-center fixed top-5 right-5 z-50 bg-transparent'>
            <div className='flex gap-x-10 font-medium'>
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                    key={item}
                    className='hover:text-blue-600 transition-colors cursor-pointer'
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