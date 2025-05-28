import { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar'
import CommentLine from './components/CommentLine'
import Skill from './components/Skill'
import Project from './components/Project'
import Modal from './components/Modal'
import Contact from './components/Contact'

// Icons for Hero Title
import downloadIcon from './icons/download.png'
import githubIcon from './icons/github.png'
import linkedinIcon from './icons/linkedin.png'
import emailIcon from './icons/email.png'

// Icons for Skills
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
import wordcomboThumbnail from './projects/wordcombo.png'

function App() {
  const [atTop, setAtTop] = useState(true);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [showHeroWave, setShowHeroWave] = useState(window.innerWidth >= 460);
  const [copied, setCopied] = useState(false);
  const email = 'contact@chinhnguyen.dev';

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
      setShowHeroWave(window.innerWidth >= 468);
    }
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const emailClick = async () => {
    // Smaller screens, mailto:
    if (window.innerWidth < 768) {
      window.location.href = `mailto:${email}`;
    } else {
    // Larger screens, copy to clipboard
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    }
  };

  return (
    <div className='App'>
      <Navbar
        modalMode={isModalOpen}
        onClick={(selection) => {
          setIsModalOpen(true);
          setModalSection(selection);
        }
      }/>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute inset-0 z-50 px-8 flex items-center justify-center">
          <div
            className="relative w-full max-w-5xl flex min-h-[440px] sm:min-h-[470px] drop-shadow-2xl/40"
            onClick={(e) => e.stopPropagation()}>
            {/* Left side */}
            <div className="w-1/2 slide-in-left">
              <Modal
                defaultSection={modalSection}
                onClose={() => setIsModalOpen(false)}/>
            </div>

            {/* Right side */}
            <div className="w-1/2 slide-in-right">
              <Contact
                onClose={() => setIsModalOpen(false)}/>
            </div>
          </div>
        </div>
      )}

      {/* Title screen */}
      <div className='hero-container w-7/10 max-w-5xl'>
        {/* Hero title */}
        <div className='hero-title'>
          <h2 className='comment text-base sm:text-xl lg:text-2xl mb-0'>
            // Hi, my name is
          </h2>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium'>
            <span className='bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent'>Chinh Nguyen</span>,
          </h1>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
            I'm a <span className='bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent font-medium'>Fullstack Developer</span>
          </h2>
        </div>

        {/* Hero description */}
        {(windowHeight > 500 || !atTop) && (
          <div>
            {/* Description */}
            <div className='hero-description'>
              <p className='text-base md:text-lg lg:text-xl text-justify'>
                I graduated from the <span className='font-bold'>University of Kansas</span> with a Bachelor's in Computer Science,
                and I <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500'>love building things</span>.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="scale-75 sm:scale-85 md:scale-90 lg:scale-95 xl:scale-100 origin-left flex gap-4 items-center justify-left mt-1 md:mt-2 lg:mt-3">
              {/* Download Resume Button */}
              <a
                href="/ChinhNguyen_SWE.pdf"
                download
                className="whitespace-nowrap text-sm sm:text-base flex items-center gap-1.5 pl-2.5 sm:pl-3.5 pr-4 py-2 bg-blue-500 text-white rounded-lg font-semibold transition-transform duration-200 hover:scale-105 cursor-pointer w-fit"
              >
                <img src={downloadIcon} alt="Download Icon" className="w-4 h-4" />
                Download Resume
              </a>

              {/* GitHub Icon */}
              <a
                href="https://github.com/NguyenHChinh"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-125 cursor-pointer"
              >
                <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/chinh-nguyen-71b5b6182/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-125 cursor-pointer"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              </a>

              {/* Email Icon */}
              <div className="relative flex items-center">
                <button
                  onClick={emailClick}
                  className="transition-transform duration-200 hover:scale-125 cursor-pointer"
                >
                <img src={emailIcon} alt="Email" className="w-8 h-8" />
                </button>
                {copied && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-black text-white text-xs rounded px-2 py-1">
                    Email copied!
                  </div>
                )}
              </div>
            </div>
          </div>
          
        )}

        {/* Animated Wave */}
        {showHeroWave && (
          <div className="absolute origin-top scale-105 -top-87 md:-top-90 lg:-top-95 xl:-top-98 2xl:-top-100 left-1/2 w-full -translate-x-1/2 -z-10 animate-wave">
            <div className='bg-gradient-to-r from-blue-500 to-blue-400 h-100 translate-y-1 w-full'/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-auto"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2e82ff" />
                  <stop offset="100%" stopColor="#51a2ff" />
                </linearGradient>
              </defs>
              <path
                fill="url(#waveGradient)"
                fillOpacity="1"
                d="M0,256L48,218.7C96,181,192,107,288,96C384,85,480,139,576,138.7C672,139,768,85,864,69.3C960,53,1056,75,1152,90.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
            </svg>
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
        <div className='skills-container w-9/10 sm:w-4/5 max-w-5xl mx-auto'>
          <h1 className='skills-title w-full mb-7 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-left'>
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
          <h1 className='projects-title w-full text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center'>
            Here's what I've built.
          </h1>

          <div className='projects-list-container mx-auto mt-15 origin-top scale-90 max-w-4xl'>
            <Project
              type={"Full-stack Project"}
              title={"WordCombo"}
              description={"A daily word puzzle game where players solve a chain of compound words with limited hints."}
              tags={["React", "Vite", "Tailwind", "Supabase", "Netlify", "Game Development"]}
              thumbnail={wordcomboThumbnail}
              link={"https://github.com/NguyenHChinh/wordcombo"}
              imagelink={"https://wordcombo.app"}
            />
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
              title={"Natsu Discord Bot"}
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
