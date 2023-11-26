import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

import countries1 from '../assets/projects/countries1.png'
import countries2 from '../assets/projects/countries2.png'
import countries3 from '../assets/projects/countries3.png'
import cine1 from '../assets/projects/cine1.png'
import cine2 from '../assets/projects/cine2.png'
import cine3 from '../assets/projects/cine3.png'
import cine4 from '../assets/projects/cine4.png'
import cine5 from '../assets/projects/cine5.png'
import techstore1 from '../assets/projects/techstore1.png'
import techstore2 from '../assets/projects/techstore2.png'
import techstore3 from '../assets/projects/techstore3.png'
import techstore4 from '../assets/projects/techstore4.png'
import techstore5 from '../assets/projects/techstore5.png'
import techstore6 from '../assets/projects/techstore6.png'
import techstore7 from '../assets/projects/techstore7.png'
import portfolio from '../assets/projects/portfolio.png'
import netflix1 from '../assets/projects/netflix1.png'
import netflix2 from '../assets/projects/netflix2.png'
import netflix3 from '../assets/projects/netflix3.png'
import netflix4 from '../assets/projects/netflix4.png'
import netflix5 from '../assets/projects/netflix5.png'

const projects = [
  {
    name: 'Countries App',
    images: [countries1, countries2, countries3],
    techs: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL'],
    description: 'SPA que filtra información sobre los paises con opción de agregar actividades turisticas a los mismos.',
    link: 'https://countries-jgl.vercel.app',
    repo: 'https://github.com/LuisDavid6/PI-Countries',
  },
  {
    name: 'Moon Cinema',
    images: [cine1, cine2, cine3, cine4, cine5],
    techs: ['React', 'Redux', 'Node.js', 'Prisma', 'JWT', 'Bootstrap'],
    description:
      'Página web para realizar compra de boletas y dulceria para un cine, con panel de administrador para controlar las funciones de las peliculas.',
    link: 'https://moon-cinema-app.vercel.app/home',
    repo: 'https://github.com/gjuancruz/PF',
  },
  {
    name: 'TechStore',
    images: [techstore1, techstore2, techstore3, techstore4, techstore5, techstore6, techstore7],
    techs: ['React', 'Redux', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
    description: 'Ecommerce de productos tecnologicos con autenticación de usuarios y panel de administrador para manejar toda la información.',
    link: 'https://tech-store-t.vercel.app/home',
    repo: 'https://github.com/LuisDavid6/TechStore',
  },
  {
    name: 'Portafolio',
    images: [portfolio],
    techs: ['React', 'Tailwind', 'Swiper', 'Framer Motion', 'Formik', 'EmailJs'],
    description: 'Mi portafolio como desarrollador',
    link: 'https://portfolio-luisdavid.vercel.app',
    repo: 'https://github.com/LuisDavid6/Portfolio',
  },
  {
    name: 'Netflix Clone',
    images: [netflix1, netflix2, netflix3, netflix4, netflix5],
    techs: ['NextJs', 'Next-Auth', 'Typescript', 'Tailwind', 'Prisma', 'MongoDB'],
    description: 'Clon de netflix con autenticación de usuarios, listado y visualización de peliculas ',
    link: 'https://netflix-clone10.vercel.app',
    repo: 'https://github.com/LuisDavid6/Netflix-clone',
  },
]

const Projects = () => {
  return (
    <div id='projects' className='grid gap-6 justify-items-center mt-20 pt-10 pb-10'>
      <h2 className='text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 dark:from-great-blue-500 dark:via-violet-600 dark:to-emerald-700'>
        Proyectos
      </h2>

      <section className='gap-10 flex flex-wrap max-w-5xl justify-center'>
        {projects?.map((e) => (
          <motion.div
            key={e.name}
            initial={{ boxShadow: '5px 5px 12px rgba(0, 0, 0, 0.2)', borderWidth: '1px' }}
            animate={{
              scale: 1.035,
              borderWidth: '1px',
              borderColor: '#606562',
              boxShadow: '12px 12px 15px rgba(0, 0, 0, 0.3)',
            }}
            transition={{ ease: 'easeInOut', duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className='shadow-2xl rounded-md p-4 max-w-xs sm:max-w-sm'
          >
            <div className='ml-4 max-w-xs'>
              <Swiper
                className='mySwiper'
                spaceBetween={20}
                loop={true}
                effect={'fade'}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
              >
                {e.images?.map((i) => (
                  <SwiperSlide key={i}>
                    <img className='max-w-full rounded-md object-cover' src={i} alt={e.name}></img>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='flex mt-5 justify-between ml-3 mr-5'>
              <h2 className='text-lg font-bold dark:text-white'>{e.name}</h2>
              <div className='flex gap-3 items-center'>
                <a href={e.repo} target='_blank' rel='noreferrer'>
                  <FaGithub size={25} title='Ir al repositorio' className='dark:text-white cursor-pointer' />
                </a>
                <a href={e.link} target='_blank' rel='noreferrer'>
                  <FiExternalLink size={30} title='Ir al sitio web' className='dark:text-white cursor-pointer' />
                </a>
              </div>
            </div>
            <div className='flex gap-2 mt-5 flex-wrap'>
              {e.techs?.map((t) => (
                <button key={t} className='bg-great-blue-400 p-1 rounded-lg text-white text-sm'>
                  {t}
                </button>
              ))}
            </div>
            <p className='mt-5 text-sm dark:text-white'>{e.description}</p>
          </motion.div>
        ))}
      </section>
    </div>
  )
}

export default Projects
