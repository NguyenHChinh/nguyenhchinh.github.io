import { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar'
import CommentLine from './components/CommentLine'
import Skill from './components/Skill'
import Project from './components/Project'
import Modal from './components/Modal'

// Icons
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

// Project thumbnails
import kanaganaThumbnail from './projects/kanagana.png'
import portfolioThumbnail from './projects/portfolio.png'
import natsubotThumbnail from './projects/natsubot.png'

function App() {
  const [atTop, setAtTop] = useState(true);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSection, setModalSection] = useState("about");

  const skillLinks = {
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    Python: "https://www.python.org/",
    CPP: "https://isocpp.org/",
    TypeScript: "https://www.typescriptlang.org/",
    SQL: "https://www.w3schools.com/sql/",
    HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    PHP: "https://www.php.net/",
    React: "https://reactjs.org/",
    NodeJS: "https://nodejs.org/",
    Vite: "https://vitejs.dev/",
    Tailwind: "https://tailwindcss.com/",
    RestAPI: "https://restfulapi.net/",
    Webhooks: "https://webhooks.fyi/",
    MySQL: "https://www.mysql.com/",
    NoSQL: "https://www.mongodb.com/nosql-explained",
    Supabase: "https://supabase.com/",
    LocalStorage: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
    Git: "https://git-scm.com/",
    VSCode: "https://code.visualstudio.com/",
    Postman: "https://www.postman.com/",
    Windows: "https://www.microsoft.com/windows",
    Ubuntu: "https://ubuntu.com/",
    Figma: "https://www.figma.com/",
    Adobe: "https://www.adobe.com/creativecloud.html",
    Google: "https://workspace.google.com/",
    Microsoft: "https://www.microsoft.com/microsoft-365",
  };

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
      <Navbar onClick={(selection) => {
        setIsModalOpen(true);
        setModalSection(selection);
      }}/>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 px-8 flex items-center justify-center bg-black/25 backdrop-blur-[5px]'
          onClick={() => setIsModalOpen(false)}>
          <div className='w-full max-w-2xl'
          onClick={(e) => e.stopPropagation()}>
            <Modal
              defaultSection={modalSection}
              onClose={() => setIsModalOpen(false)}/>
          </div>
        </div>
      )}

      {/* Title screen */}
      <div className='hero-container w-4/5'>
        {/* Hero title */}
        <div className='hero-title'>
          <h2 className='comment text-base sm:text-xl lg:text-2xl mb-2'>
            // Hi, my name is
          </h2>
          <h1 className='text-5xl sm:text-6xl lg:text-8xl font-medium'>
            <span className='bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent'>Chinh Nguyen</span>,
          </h1>
          <h2 className='text-3xl sm:text-5xl lg:text-7xl'>
            I'm a <span className='bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent font-medium'>Fullstack Developer</span>
          </h2>
        </div>

        {/* Hero description */}
        {(windowHeight > 500 || !atTop) && (
          <div className='hero-description'>
            <p className='text-lg sm:text-2xl lg:text-3xl text-justify'>
              I graduated from the <span className='font-bold'>University of Kansas</span> with a Bachelor's in Computer Science,
              and I <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400'>love building things</span>.
            </p>
          </div>
        )}
      </div>

      {/* Bottom of hero title screen */}
      {atTop && windowHeight > 700 && (
        <p className="scroll-indicator text-gray-400 text-lg sm:text-xl lg:text-2xl text-center mt-8">
          ↓ Scroll down for more information ↓
        </p>
      )}

      {/* Rest of page */}
      <div className={`transition-opacity duration-300 ${atTop ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <CommentLine/>

        {/* Skills Section */}
        <div className='skills-container w-9/10 sm:w-4/5 max-w-6xl mx-auto'>
          <h1 className='skills-title w-full mb-7 sm:mb-6  xl:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-left'>
            Here's what I use.
          </h1>
          <h2 className='comment-block md:leading-5.5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-2'>
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
            <div className="skills-list-container grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 xl:gap-4 w-full max-w-8xl">
              {/* SKILLS: LANGUAGES SECTION */}
              <Skill
                title={"JavaScript"}
                description={"Dynamic web language"}
                type={"languages"}
                icon={javascriptIcon}
                link={skillLinks["JavaScript"]}/>
              <Skill
                title={"Python"}
                description={"Versatile scripting"}
                type={"languages"}
                icon={pythonIcon}
                link={skillLinks["Python"]}/>
              <Skill
                title={"C++"}
                description={"High-performance"}
                type={"languages"}
                icon={cppIcon}
                link={skillLinks["CPP"]}
                />
              <Skill
                title={"TypeScript"}
                description={"JavaScript with types"}
                type={"languages"}
                icon={typescriptIcon}
                link={skillLinks["TypeScript"]}/>
              <Skill
                title={"SQL"}
                description={"Query language"}
                type={"languages"}
                icon={sqlIcon}
                link={skillLinks["SQL"]}/>
              <Skill
                title={"HTML"}
                description={"Web structure"}
                type={"languages"}
                icon={htmlIcon}
                link={skillLinks["HTML"]}/>
              <Skill
                title={"CSS"}
                description={"Web styling"}
                type={"languages"}
                icon={cssIcon}
                link={skillLinks["CSS"]}/>
              <Skill
                title={"PHP"}
                description={"Server-side scripting"}
                type={"languages"}
                icon={phpIcon}
                link={skillLinks["PHP"]}/>

              {/* SKILLS: FRAMEWORKS SECTION */}
              <Skill
                title={"React"}
                description={"Frontend library"}
                type={"frameworks"}
                icon={reactIcon}
                link={skillLinks["React"]}/>
              <Skill
                title={"Node.js"}
                description={"Backend runtime"}
                type={"frameworks"}
                icon={nodeIcon}
                link={skillLinks["NodeJS"]}/>
              <Skill
                title={"Vite"}
                description={"Fast dev build tool"}
                type={"frameworks"}
                icon={viteicon}
                link={skillLinks["Vite"]}/>
              <Skill
                title={"Tailwind"}
                description={"CSS framework"}
                type={"frameworks"}
                icon={tailwindIcon}
                link={skillLinks["Tailwind"]}/>

              {/* SKILLS: BACKEND SECTION */}
              <Skill
                title={"REST APIs"}
                description={"Backend communication"}
                type={"backend"}
                icon={restapiIcon}
                link={skillLinks["RestAPI"]}/>
              <Skill
                title={"Webhooks"}
                description={"Real-time updates"}
                type={"backend"}
                icon={webhookIcon}
                link={skillLinks["Webhooks"]}/>

              {/* SKILLS: DATABASE SECTION */}
              <Skill
                title={"MySQL"}
                description={"SQL-based backend"}
                type={"database"}
                icon={mysqlIcon}
                link={skillLinks["MySQL"]}/>
              <Skill
                title={"NoSQL"}
                description={"Flexible data storage"}
                type={"database"}
                icon={nosqlIcon}
                iconSize={"w-14/20 h-14/20"}
                link={skillLinks["NoSQL"]}/>
              <Skill
                title={"Supabase"}
                description={"Backend-as-a-service"}
                type={"database"}
                icon={supabaseIcon}
                link={skillLinks["Supabase"]}/>
              <Skill
                title={"LocalStorage"}
                description={"Browser storage"}
                type={"database"}
                icon={localstorageIcon}
                iconSize={"w-3/5 h-3/5"}
                link={skillLinks["LocalStorage"]}/>
              
              {/* SKILLS: TOOLS SECTION */}
              <Skill
                title={"Git"}
                description={"Version control"}
                type={"tools"}
                icon={gitIcon}
                link={skillLinks["Git"]}/>
              <Skill
                title={"VSCode"}
                description={"Developer IDE"}
                type={"tools"}
                icon={vscodeIcon}
                link={skillLinks["VSCode"]}/>
              <Skill
                title={"Postman"}
                description={"API testing tool"}
                type={"tools"}
                icon={postmanIcon}
                link={skillLinks["Postman"]}/>
              <Skill
                title={"Windows"}
                description={"Mainstream OS"}
                type={"tools"}
                icon={windowsIcon}
                link={skillLinks["Windows"]}/>
              <Skill
                title={"Ubuntu"}
                description={"Linux distro"}
                type={"tools"}
                icon={ubuntuIcon}
                link={skillLinks["Ubuntu"]}/>
              <Skill
                title={"Figma"}
                description={"UI/UX design"}
                type={"tools"}
                icon={figmaIcon}
                link={skillLinks["Figma"]}/>
              <Skill
                title={"Adobe Suite"}
                description={"Creative tools"}
                type={"tools"}
                icon={adobeIcon}
                link={skillLinks["Adobe"]}/>
              <Skill
                title={"Google Workspace"}
                description={"Team collaboration"}
                type={"tools"}
                icon={googleIcon}
                link={skillLinks["Google"]}/>
              <Skill
                title={"Microsoft Office"}
                description={"Word, Excel, etc."}
                type={"tools"}
                icon={microsoftIcon}
                link={skillLinks["Microsoft"]}/>
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

        {/* Projects Section */}
        <div className='projects-container mx-auto w-9/10 sm:w-4/5 max-w-5xl'>
          <h1 className='projects-title w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center'>
            Here's what I've built.
          </h1>

          <div className='projects-list-container mt-15'>
            <Project
              type={"Full-stack Project"}
              title={"Kanagana"}
              description={"A beginner-friendly web application for practicing Hiragana and Katakana."}
              tags={["React", "Vite", "Language Learning", "Japanese Studying"]}
              thumbnail={kanaganaThumbnail}
              link={"https://github.com/NguyenHChinh/kanagana"}
              imagelink={"https://chinhnguyen.dev/kanagana/#/"}/>
            <Project
              type={"Full-stack Project"}
              title={"Developer Portfolio"}
              description={"A personal site to showcase my skills, projects, and experience."}
              tags={["React", "Vite", "Tailwind", "Responsive Design", "Portfolio"]}
              thumbnail={portfolioThumbnail}
              link={"https://github.com/NguyenHChinh/nguyenhchinh.github.io"}
              imagelink={"https://chinhnguyen.dev"}/>
            <Project
              type={"Bot Development"}
              title={"Natsu (Discord Bot)"}
              description={"Multi-featured Discord bot with admin tools and niche game utilities."}
              tags={["Python", "Discord.py", "MySQL", "API Integration", "Live Service"]}
              thumbnail={natsubotThumbnail}
              link={"https://github.com/NguyenHChinh/natsu-bot"}
              imagelink={"https://github.com/NguyenHChinh/natsu-bot"}/>
          </div>
        </div>

        {/* Footer Section */}
        <div className='footer-container text-center pb-10'>
          © 2025 Chinh Nguyen. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default App
