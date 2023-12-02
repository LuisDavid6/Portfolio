import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

import { projects } from '../lib/projects'

const Projects = () => {
  return (
    <div id='projects' className='grid gap-6 justify-items-center mt-20 pt-10 pb-10'>
      <h2 className='text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 dark:from-great-blue-500 dark:via-violet-600 dark:to-emerald-700'>
        Proyectos
      </h2>

      <section className='gap-10 flex flex-wrap max-w-5xl justify-center'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          cardsEffect={{ slideShadows: false }}
          modules={[EffectCards]}
          className='mySwiper w-[300px] md:w-[800px] lg:w-full lg:min-h-[500px]'
        >
          {projects?.map((e) => (
            <SwiperSlide className='flex justify-center' key={e.name}>
              <motion.div key={e.name} className='shadow-2xl rounded-md p-4 max-w-[240px] md:max-w-sm lg:max-w-lg dark:bg-zinc-700'>
                <div className='w-full'>
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
                  <h2 className='text-lg font-bold dark:text-white lg:text-2xl'>{e.name}</h2>
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
                    <button key={t} className='bg-great-blue-400 p-1 rounded-lg text-white text-sm lg:text-lg'>
                      {t}
                    </button>
                  ))}
                </div>
                <p className='mt-5 text-sm dark:text-white lg:text-lg'>{e.description}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

export default Projects
