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

    function handleClick(section) {
        switch (section) {
            case 'about':
                console.log('about clicked.');
                break;
            case 'contact':
                console.log('contact clicked.');
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
        <nav className='text-2xl sm:text-3xl lg:text-3xl py-4 pr-6 flex justify-center sm:justify-end items-center fixed top-5 right-5 left-5 sm:left-auto z-50 bg-transparent'>
            <div className='flex gap-x-10 sm:gap-x-12 font-bold'>
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
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