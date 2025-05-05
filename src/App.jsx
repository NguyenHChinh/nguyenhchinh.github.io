import Navbar from './components/Navbar'

function App() {

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
        <div className='hero-description'>
          <p className='text-lg sm:text-2xl lg:text-3xl text-justify'>
            I graduated from the <span className='font-bold'>University of Kansas</span> with a Bachelor's in Computer Science,
            and I <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400'>love building things</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
