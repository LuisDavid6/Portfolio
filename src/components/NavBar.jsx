import { RiSunFill } from 'react-icons/ri';
import { IoMdMoon } from 'react-icons/io';

const Navbar = ({toggleMod, dark}) =>{

  return(
    <div className="flex justify-end lg:pr-10 py-5 text-xl font-semibold text-great-blue-600 dark:text-cyan-600 sticky top-0 bg-slate-50 dark:bg-zinc-700 shadow-2xl">
      <ul className="flex gap-5">
        <li className="hover:underline hover:underline-offset-8 hover:shadow-xl hover:scale-105 cursor-pointer select-none" onClick={()=> document.getElementById('techs').scrollIntoView()}>Tecnologias</li>
        <li className="hover:underline hover:underline-offset-8 hover:shadow-xl hover:scale-105 cursor-pointer select-none" onClick={()=> document.getElementById('projects').scrollIntoView()}>Proyectos</li>
        <li className="hover:underline hover:underline-offset-8 hover:shadow-xl hover:scale-105 cursor-pointer select-none" onClick={()=> document.getElementById('contact').scrollIntoView()}>Contacto</li>
        <button className="ml-5" onClick={()=>toggleMod()}>{dark==="true" ? <RiSunFill/> : <IoMdMoon/>}</button>
      </ul>
    </div>
  )
}

export default Navbar