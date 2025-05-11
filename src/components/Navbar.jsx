import { useEffect, useState } from 'react';

function Navbar({ modalMode, onClick }) {
    const [visible, setVisible] = useState(true);
    const [threshold, setThreshold] = useState(10);

    useEffect(() => {
        setThreshold(modalMode ? 10 : 0);

        function handleScroll() {
            let navbarThreshold = threshold * 16; // threshold = rem * 16px
            setVisible(window.scrollY <= navbarThreshold);
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [modalMode]);

    function handleClick(section) {
        switch (section) {
            case 'about':
            case 'contact':
                onClick();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'education':
                onClick("education");
                break;
            case 'projects':
            case 'skills':
                scrollToWithOffset(`${section}-container`);
                break;
            default:
                console.warn("Unhandled section:", section);
        }
    }

    function scrollToWithOffset(className, offset = 100) {
        const el = document.querySelector(`.${className}`);
        if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <div className={`navbar-container absolute transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <nav className='text-black sm:text-white text-lg sm:text-xl xl:text-2xl flex justify-center sm:justify-end items-center fixed top-5 right-5 left-5 sm:left-auto z-100 bg-transparent'>
                <div className='flex gap-x-8 sm:gap-x-12 lg:gap-x-14 font-bold'>
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <button
                        key={item}
                        className='hover:text-gray-300 hover:underline transition-colors cursor-pointer'
                        onClick={() => handleClick(item.toLowerCase())}
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