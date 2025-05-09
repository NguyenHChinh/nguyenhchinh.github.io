import { useEffect, useState } from 'react';

function Navbar({ onClick }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        function handleScroll() {
            const threshold = 10 * 16; // threshold = rem * 16px
            setVisible(window.scrollY <= threshold);
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleClick(section) {
        switch (section) {
            case 'about':
                onClick("about");
                break;
            case 'contact':
                onClick("contact");
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
        <div className={`navbar-container transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <nav className='text-sm sm:text-xl xl:text-2xl flex justify-center sm:justify-end items-center fixed top-5 right-5 left-5 sm:left-auto z-50 bg-transparent'>
            <div className='flex gap-x-8 sm:gap-x-12 lg:gap-x-14 font-bold'>
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                key={item}
                className='hover:text-blue-600 transition-colors cursor-pointer'
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