import About from './About'
import Navbar from './NavBar'
import Techs from './Techs'
import Projects from './Projects'
import Contact from './Contact'
import { useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Home = () => {
  const [dark, setDark] = useState(window.sessionStorage.getItem('dark'))

  if (!window.sessionStorage.getItem('dark')) {
    window.sessionStorage.setItem('dark', 'false')
  }

  if (dark === 'true') document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')

  const toggleMod = () => {
    window.sessionStorage.setItem('dark', dark === 'false' ? 'true' : 'false')
    setDark(dark === 'false' ? 'true' : 'false')
  }

  return (
    <div className='bg-white dark:bg-zinc-800 min-h-screen w-full'>
      <Navbar toggleMod={toggleMod} dark={dark} />
      <About dark={dark} />
      <Techs dark={dark} />
      <Projects dark={dark} />
      <Contact dark={dark} />
      <div className='fixed bottom-0 right-0 mr-3 mb-3 cursor-pointer'>
        <BsFillArrowUpCircleFill
          size={30}
          color={dark === 'true' ? 'white' : 'black'}
          title='Volver arriba'
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
    </div>
  )
}

export default Home
