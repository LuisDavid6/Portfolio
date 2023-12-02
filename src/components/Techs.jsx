import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Autoplay } from 'swiper'

import { front, back } from '../lib/techs'

const Techs = () => {
  return (
    <div id='techs' className='grid justify-items-center mt-16 pt-10'>
      <h2 className='text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 dark:from-great-blue-500 dark:via-violet-600 dark:to-emerald-700'>
        Tecnologias
      </h2>

      <div className='mt-5 max-w-[310px] xs:max-w-[400px] sm:max-w-xl md:max-w-3xl '>
        <h3 className='w-fit text-3xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 dark:from-great-blue-500 dark:via-violet-600 dark:to-emerald-700'>
          Front end
        </h3>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            100: { slidesPerView: 3 },
            400: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className='mySwiper'
        >
          {front.map((e) => (
            <SwiperSlide key={e.name}>
              <div className='grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700'>
                <img
                  src={e.image}
                  className={`${e.name === 'Bootstrap' ? 'brightness-150 h-20' : 'h-20'} lg:w-28 lg:h-28`}
                  width={80}
                  height={80}
                  alt={e.name}
                />
                <h4 className='lg:text-lg'>{e.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='mt-5 max-w-[310px] xs:max-w-[400px] sm:max-w-xl md:max-w-3xl '>
        <h3 className='w-fit text-3xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 dark:from-great-blue-500 dark:via-violet-600 dark:to-emerald-700'>
          Back end
        </h3>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            100: { slidesPerView: 1 },
            400: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className='mySwiper'
        >
          {back.map((e) => (
            <SwiperSlide key={e.name}>
              <div className='grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2xl font-semibold dark:text-slate-50 dark:bg-zinc-700'>
                <img
                  src={e.image}
                  className={`${e.name === 'Bootstrap' ? 'brightness-150 h-20' : 'h-20'} lg:w-28 lg:h-28`}
                  width={80}
                  height={80}
                  alt={e.name}
                />
                <h4 className='lg:text-lg'>{e.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Techs
