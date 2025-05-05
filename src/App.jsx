import Navbar from './components/Navbar'
import CommentLine from './components/CommentLine'
import { useState, useEffect } from 'react';

function App() {
  const [atTop, setAtTop] = useState(true);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleScroll() {
      setAtTop(window.scrollY === 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <div className='hero-container'>
        <div className='hero-title'>
          <h2 className='comment text-base sm:text-xl lg:text-2xl'>
            // Hi, my name is
          </h2>
          <h1 className='text-5xl sm:text-6xl lg:text-8xl font-medium'>
            <span className='bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent'>Chinh Nguyen</span>,
          </h1>
          <h2 className='text-3xl sm:text-5xl lg:text-7xl'>
            I'm a <span className='bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent font-medium'>Fullstack Developer</span>
          </h2>
        </div>

        {(windowHeight > 500 || !atTop) && (
          <div className='hero-description'>
            <p className='text-lg sm:text-2xl lg:text-3xl text-justify'>
              I graduated from the <span className='font-bold'>University of Kansas</span> with a Bachelor's in Computer Science,
              and I <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400'>love building things</span>.
            </p>
          </div>
        )}
      </div>

      {atTop && windowHeight > 700 && (
        <p className="scroll-indicator text-gray-400 text-lg sm:text-xl lg:text-2xl text-center mt-8">
          ↓ Scroll down for more information ↓
        </p>
      )}

      <div className={`transition-opacity duration-300 ${atTop ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <CommentLine/>

        <div className='skills-container'>
          <h1 className='skills-title w-full text-3xl sm:text-4xl lg:text-5xl font-bold text-center'>
            Here's what I use.
          </h1>

          <h2 className='w-full text-2xl sm:text-3xl lg:text-4xl font-medium text-center'>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
          </h2>
        </div>

        <CommentLine/>

        <div className='projects-container'>
          <h1 className='projects-title w-full text-3xl sm:text-4xl lg:text-5xl font-bold text-center'>
            Here's what I've built.
          </h1>

          <h2 className='w-full text-2xl sm:text-3xl lg:text-4xl font-medium text-center'>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
            PLACEHOLDER <br/>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default App
