import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import CommentLine from './components/CommentLine'
import Skill from './components/Skill'
import javascriptIcon from './icons/javascript.png'
import pythonIcon from './icons/python.png'
import cppIcon from './icons/cpp.png'
import typescriptIcon from './icons/typescript.png'
import sqlIcon from './icons/sql.png'
import htmlIcon from './icons/html.png'
import cssIcon from './icons/css.png'
import phpIcon from './icons/php.png'
import reactIcon from './icons/react.png'
import nodeIcon from './icons/node.png'
import viteicon from './icons/vite.png'
import tailwindIcon from './icons/tailwind.png'
import restapiIcon from './icons/restapi.png'
import webhookIcon from './icons/webhook.png'
import mysqlIcon from './icons/mysql.png'
import nosqlIcon from './icons/nosql.png'
import supabaseIcon from './icons/supabase.png'
import localstorageIcon from './icons/localstorage.png'
import gitIcon from './icons/git.png'
import vscodeIcon from './icons/vscode.png'
import postmanIcon from './icons/postman.png'
import windowsIcon from './icons/windows.png'
import ubuntuIcon from './icons/ubuntu.png'
import figmaIcon from './icons/figma.png'
import adobeIcon from './icons/adobe.png'
import googleIcon from './icons/google.png'
import microsoftIcon from './icons/microsoft.png'

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
      <div className='hero-container w-4/5'>
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

        <div className='skills-container w-9/10 sm:w-4/5'>
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
              {/* SKILLS: LANGUAGES SECTION */}
              <Skill
                title={"JavaScript"}
                description={"Dynamic web language"}
                type={"languages"}
                icon={javascriptIcon}/>
              <Skill
                title={"Python"}
                description={"Versatile scripting"}
                type={"languages"}
                icon={pythonIcon}/>
              <Skill
                title={"C++"}
                description={"High-performance"}
                type={"languages"}
                icon={cppIcon}/>
              <Skill
                title={"TypeScript"}
                description={"Javascript, but with rules"}
                type={"languages"}
                icon={typescriptIcon}/>
              <Skill
                title={"SQL"}
                description={"Query language"}
                type={"languages"}
                icon={sqlIcon}/>
              <Skill
                title={"HTML"}
                description={"Web structure"}
                type={"languages"}
                icon={htmlIcon}/>
              <Skill
                title={"CSS"}
                description={"Web styling"}
                type={"languages"}
                icon={cssIcon}/>
              <Skill
                title={"PHP"}
                description={"Server-side scripting"}
                type={"languages"}
                icon={phpIcon}/>

              {/* SKILLS: FRAMEWORKS SECTION */}
              <Skill
                title={"React"}
                description={"Frontend library"}
                type={"frameworks"}
                icon={reactIcon}/>
              <Skill
                title={"Node.js"}
                description={"Backend runtime"}
                type={"frameworks"}
                icon={nodeIcon}/>
              <Skill
                title={"Vite"}
                description={"Fast dev build tool"}
                type={"frameworks"}
                icon={viteicon}/>
              <Skill
                title={"Tailwind"}
                description={"CSS framework"}
                type={"frameworks"}
                icon={tailwindIcon}/>

              {/* SKILLS: BACKEND SECTION */}
              <Skill
                title={"REST APIs"}
                description={"Backend communication"}
                type={"backend"}
                icon={restapiIcon}/>
              <Skill
                title={"Webhooks"}
                description={"Real-time updates"}
                type={"backend"}
                icon={webhookIcon}/>

              {/* SKILLS: DATABASE SECTION */}
              <Skill
                title={"MySQL"}
                description={"SQL-based backend"}
                type={"database"}
                icon={mysqlIcon}/>
              <Skill
                title={"NoSQL"}
                description={"Flexible data storage"}
                type={"database"}
                icon={nosqlIcon}/>
              <Skill
                title={"Supabase"}
                description={"Backend-as-a-service"}
                type={"database"}
                icon={supabaseIcon}/>
              <Skill
                title={"LocalStorage"}
                description={"Browser storage"}
                type={"database"}
                icon={localstorageIcon}/>
              
              {/* SKILLS: TOOLS SECTION */}
              <Skill
                title={"Git"}
                description={"Version control"}
                type={"tools"}
                icon={gitIcon}/>
              <Skill
                title={"VSCode"}
                description={"Developer IDE"}
                type={"tools"}
                icon={vscodeIcon}/>
              <Skill
                title={"Postman"}
                description={"API testing tool"}
                type={"tools"}
                icon={postmanIcon}/>
              <Skill
                title={"Windows"}
                description={"Mainstream OS"}
                type={"tools"}
                icon={windowsIcon}/>
              <Skill
                title={"Ubuntu"}
                description={"Linux distro"}
                type={"tools"}
                icon={ubuntuIcon}/>
              <Skill
                title={"Figma"}
                description={"UI/UX design"}
                type={"tools"}
                icon={figmaIcon}/>
              <Skill
                title={"Adobe Suite"}
                description={"Creative tools"}
                type={"tools"}
                icon={adobeIcon}/>
              <Skill
                title={"Google Workspace"}
                description={"Team collaboration"}
                type={"tools"}
                icon={googleIcon}/>
              <Skill
                title={"Microsoft Office"}
                description={"Word, Excel, etc."}
                type={"tools"}
                icon={microsoftIcon}/>
            </div>
          </div>

          {/* This was my test so that I could try out a different layout. */}
          {/* <div className='flex flex-row'>
            <div className='test-skills h-50 w-2/5 bg-gray-600'>

            </div>
            <div className='tesujitweij h-50 w-3/5 bg-gray-800'>

            </div>
          </div> */}
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
