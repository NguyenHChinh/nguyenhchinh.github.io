import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import CommentLine from './components/CommentLine'
import Skill from './components/Skill'
import missingIcon from './icons/missing.png'

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
          <h1 className='skills-title w-full mb-7 sm:mb-6  xl:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-left'>
            Here's what I use.
          </h1>
          <h2 className='comment-block md:leading-5.5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
            // This is my main tech stack, <br/>
            // and I'm always looking to add more to it. <br/>
          </h2>

          {/* Skill Key v1 */}
          <div className='skills-key origin-top-right scale-61 sm:scale-64 md:scale-70 lg:scale-80 xl:scale-85'>
            <p className='text-3xl font-bold mb-1'>Key</p>
            <p>Languages<span className='key-box languages-box'/></p>
            <p>Frameworks<span className='key-box frameworks-box'/></p>
            <p>Backend<span className='key-box backend-box'/></p>
            <p>Database<span className='key-box database-box'/></p>
            <p>Tools<span className='key-box tools-box'/></p>
          </div>

          {/* Skill Key v2 */}
          {/* <div className='skills-key origin-top-right scale-74 sm:scale-81 lg:scale-100'>
            <p className='text-3xl font-bold mb-1'>Key</p>
            <div className='text-center'>
              <p className='bg-red-500 mb-1 rounded-4xl px-3 py-1 text-white text-sm font-medium text-shadow-lg'>Languages</p>
              <p className='bg-blue-500 mb-1 rounded-4xl px-3 py-1 text-white text-sm font-medium text-shadow-lg'>Frameworks</p>
              <p className='bg-green-700 mb-1 rounded-4xl px-3 py-1 text-white text-sm font-medium text-shadow-lg'>Backend</p>
              <p className='bg-purple-500 mb-1 rounded-4xl px-3 py-1 text-white text-sm font-medium text-shadow-lg'>Database</p>
              <p className='bg-teal-700 mb-1 rounded-4xl px-3 py-1 text-white text-sm font-medium text-shadow-lg'>Tools</p>
            </div>
          </div> */}

          <div className="w-full flex justify-center mt-8 md:mt-12 xl:mt-16 mb-10">
            <div className="skills-list-container grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 xl:gap-5 w-full max-w-8xl">
              <Skill
                title={"Ex. Languages"}
                description={"Description Languages"}
                type={"languages"}
                icon={missingIcon}/>
              <Skill
                title={"Ex. Frameworks"}
                description={"Description Frameworks"}
                type={"frameworks"}
                icon={missingIcon}/>
              <Skill
                title={"Ex. Backend"}
                description={"Description Backend"}
                type={"backend"}
                icon={missingIcon}/>
              <Skill
                title={"Ex. Database"}
                description={"Description Database"}
                type={"database"}
                icon={missingIcon}/>
              <Skill
                title={"Ex. Tools"}
                description={"Description Tools"}
                type={"tools"}
                icon={missingIcon}/>
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='test-skills h-50 w-2/5 bg-gray-600'>

            </div>
            <div className='tesujitweij h-50 w-3/5 bg-gray-800'>

            </div>
          </div>


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
