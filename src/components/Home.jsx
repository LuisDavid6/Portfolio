import About from './About'
import Navbar from './NavBar'
import Techs from './Techs'
import Projects from './Projects'
import Contact from './Contact'
import { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Home = () => {
  // const [dark, setDark] = useState(window.sessionStorage.getItem('dark'))
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') document.querySelector('html').classList.add('dark')
    else document.querySelector('html').classList.remove('dark')
  }, [theme])

  const handleChangeTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className='bg-white dark:bg-zinc-800 min-h-screen w-full'>
      <Navbar handleChangeTheme={handleChangeTheme} theme={theme} />
      <About theme={theme} />
      <Techs />
      <Projects />
      <Contact theme={theme} />
      <div className='fixed bottom-0 right-0 mr-3 mb-3 cursor-pointer'>
        <BsFillArrowUpCircleFill size={30} color={theme === 'dark' ? 'white' : 'black'} title='Volver arriba' onClick={() => window.scrollTo(0, 0)} />
      </div>
    </div>
  )
}

export default Home
