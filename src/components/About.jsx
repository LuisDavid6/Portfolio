import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'

const About = ({ theme }) => {
  const shadow = theme === 'dark' ? '7px 7px 0 rgba(0, 0, 0, 3)' : '6px 6px 0 rgba(0, 0, 0, 0.2)'

  return (
    <div className='grid gap-5 justify-items-center mt-3'>
      <div className='flex flex-wrap justify-center gap-10'>
        <img src={profile} alt='perfil' className='rounded-full w-56 mt-5 sm:mt-0 sm:w-72 max-w-xs' style={{ borderRadius: '50%' }} />
        <div className='grid justify-items-center content-center gap-10 max-w-lg'>
          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 5, opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 3,
              stiffness: 50,
              restDelta: 0.009,
              duration: 8,
            }}
            className='text-center font-serif text-4xl sm:text-5xl mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-great-blue-500 via-violet-600 to-emerald-700'
          >
            Luis David Patiño
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 3 }}
            className='font-serif text-xl text-center px-4 dark:text-white'
          >
            Me considero un desarrollador apasionado por la tecnología y por el aprendizaje constante enfocado en mejorar mis habilidades tanto
            técnicas como personales
          </motion.h3>
        </div>
      </div>

      <div className='text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
        <Typewriter
          options={{
            strings: ['Full Stack Developer', 'Front end Developer', 'Back end Developer'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <motion.div
        initial={{ boxShadow: '5px 5px 12px rgba(0, 0, 0, 0.2)', borderWidth: '1px' }}
        animate={{
          scale: 1.035,
          borderWidth: '1px',
          borderColor: '#606562',
          boxShadow: '12px 12px 15px rgba(0, 0, 0, 0.3)',
        }}
        transition={{ ease: 'easeInOut', duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        className='border border-b-4 border-neutral-400 border-l-4 shadow-2xl bg-slate-100 dark:bg-transparent w-9/12 font-serif text-xl text-center p-5 rounded-2xl text-great-blue-800 dark:text-stone-100'
      >
        <h4 className='font-semibold'>¡Programación! Más que una profesión es mi pasión</h4>
      </motion.div>
      <div className='flex mr-8 '>
        <motion.button
          initial={{ x: -80 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ translateY: 50 }}
          animate={{
            x: 20,
            boxShadow: shadow,
          }}
          transition={{ ease: 'easeOut', duration: 4 }}
          className='bg-cyan-800 text-white text-2xl px-5 ms:px-8 py-2 rounded-md'
        >
          <a href='https://drive.google.com/file/d/1yKjG1Jsg-kTiWHb1pmRxnMt3xx_ccsfY/view?usp=sharing' target='_blank' rel='noreferrer'>
            Descargar CV
          </a>
        </motion.button>

        <motion.p
          initial={{ x: -80 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ translateY: 50 }}
          animate={{
            x: 20,
            boxShadow: shadow,
          }}
          transition={{ ease: 'easeOut', duration: 4 }}
          className='border-4 rounded-md border-gray-400 mx-2 sm:mx-7 cursor-pointer'
        >
          <a href='https://linkedin.com/in/luis-david-patino' target='_blank' rel='noreferrer'>
            <RiLinkedinBoxFill color={theme === 'dark' ? 'white' : '#3192F0'} size={60} />
          </a>
        </motion.p>

        <motion.p
          initial={{ x: -80 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ translateY: 50 }}
          animate={{
            x: 20,
            boxShadow: shadow,
          }}
          transition={{ ease: 'easeOut', duration: 4 }}
          className='border-4 rounded-md border-gray-400 cursor-pointer '
        >
          <a href='https://github.com/LuisDavid6' target='_blank' rel='noreferrer'>
            <RiGithubFill color={theme === 'dark' ? 'white' : 'black'} size={60} />
          </a>
        </motion.p>
      </div>
    </div>
  )
}

export default About
