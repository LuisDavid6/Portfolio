import { RiSunFill } from 'react-icons/ri'
import { IoMdMoon } from 'react-icons/io'

const Navbar = ({ toggleMod, dark }) => {
  return (
    <div className='flex justify-end pr-3 lg:pr-10 pt-10 text-lg sm:text-xl font-semibold text-great-blue-600 dark:text-cyan-600 bg-transparent'>
      <ul className='flex gap-5'>
        <li
          className='hover:underline hover:underline-offset-8 hover:shadow-xl hover:scale-105 cursor-pointer select-none'
          onClick={() => document.getElementById('techs').scrollIntoView()}
        >
          Tecnologias
        </li>
        <li
          className='hover:underline hover:underline-offset-8 hover:shadow-xl hover:scale-105 cursor-pointer select-none'
          onClick={() => document.getElementById('projects').scrollIntoView()}
        >
          Proyectos
        </li>
        <li
          className='hover:underline hover:underline-offset-8 hover:shadow-xl hover:scale-105 cursor-pointer select-none'
          onClick={() => document.getElementById('contact').scrollIntoView()}
        >
          Contacto
        </li>
        <button className='ml-3' onClick={() => toggleMod()}>
          {dark === 'true' ? <RiSunFill /> : <IoMdMoon />}
        </button>
      </ul>
    </div>
  )
}

export default Navbar
