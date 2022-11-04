import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
import Typewriter from "typewriter-effect"
import { motion } from 'framer-motion';


const About = ({dark}) => {

  const shadow = dark==="true" ? "10px 10px 0 rgba(0, 0, 0, 1)" : "10px 10px 0 rgba(0, 0, 0, 0.2)"

  return(
    <div className="grid gap-5 justify-items-center mt-10">
      <motion.h1 
        initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{ease: "easeInOut", duration:3}}
        className="text-4xl font-extrabold text-great-blue-500 mb-6">¡¡HOLA !!
      </motion.h1>
      <motion.h1
      initial={{y:-50, opacity: 0}}
      animate={{y:5, opacity:1}}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.009,
        duration:8
      }}
        className="text-center text-4xl sm:text-5xl mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-emerald-600">SOY LUIS DAVID PATIÑO
      </motion.h1>
      <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
        <Typewriter
          options={{
            strings: [
              'Full Stack Developer',
              'Front end Developer',
              'Back end Developer',
            ],
            autoStart: true,
            loop: true,
          }}/>
      </div>
      <motion.div 
        initial={{boxShadow: "5px 5px 12px rgba(0, 0, 0, 0.2)", borderWidth:"1px"}}
        animate={{ scale:1.035, borderWidth:"1px", borderColor:"#606562", boxShadow: "12px 12px 15px rgba(0, 0, 0, 0.3)"}}
        transition={{ ease: "easeInOut", duration:3, repeat:Infinity, repeatType:'reverse' }}
        className="border border-b-4 border-neutral-400 border-l-4 shadow-2xl bg-slate-100 dark:bg-transparent w-9/12 font-serif text-xl text-center p-5 rounded-2xl text-great-blue-800 dark:text-stone-100 dark:border-y-green-700 dark:border-x-emerald-800">
          <h4>Full Stack Developer recién graduado del bootcamp de Henry con conocimientos en
              desarrollo web tanto front-end como back-end, apasionado por la tecnología y por el
              aprendizaje constante, con unas bases muy sólidas en React, Nodejs, TypeScript y
              PostgreSQL. Cuento con experiencia trabajando en equipo con la metodología SCRUM lo
              cual me ha ayudado a reforzar mis habilidades de comunicación, resolución de problemas,
              adaptabilidad, empatía y dedicación.
          </h4>
      </motion.div>
        {/* <button className="border p-2 border-b-4 b-2 rounded-lg active:translate-y-1 dark:bg-gray-50 dark:border-gray-300 ">CV</button> */}
      <div className='flex mr-8 '>
        <motion.button 
          initial={{x:-80}}
          whileHover={{ scale:1.2}}
          whileTap={{translateY:50}}
          animate={{
            x: 20,
            boxShadow: shadow
          }}
          transition={{ ease: "easeOut", duration: 4 }}
          // transition={{ repeat: Infinity, repeatDelay: 1 }}
          className="bg-cyan-800 text-white text-2xl px-5 ms:px-8 py-2 rounded-md">Descargar CV
        </motion.button>                                                     

        <motion.p
          initial={{x:-80}}
          whileHover={{ scale:1.2}}
          whileTap={{translateY:50}}
          animate={{
            x: 20,
            boxShadow: shadow
          }}
          transition={{ ease: "easeOut", duration: 4 }}
          className="border-4 rounded-md border-gray-400 mx-2 sm:mx-7 cursor-pointer">
            <RiLinkedinBoxFill color={dark==="true" ? "white" :'#3192F0'} size={60}/>
        </motion.p>

        <motion.p
          initial={{x:-80}}
          whileHover={{ scale:1.2}}
          whileTap={{translateY:50}}
          animate={{
            x: 20,
            boxShadow: shadow
          }}
          transition={{ ease: "easeOut", duration: 4 }}
          className="border-4 rounded-md border-gray-400 cursor-pointer ">
            <RiGithubFill color={dark==="true" ? "white" :'black'} size={60}/>
        </motion.p>
      </div>
    </div>
  )
}

export default About