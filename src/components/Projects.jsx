import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import "swiper/css/effect-fade";
import {Autoplay, EffectFade} from "swiper"
import { motion } from "framer-motion"
import countries1 from "../assets/projects/countries1.png"
import countries2 from "../assets/projects/countries2.png"
import countries3 from "../assets/projects/countries3.png"
import cine1 from "../assets/projects/cine1.png"
import cine2 from "../assets/projects/cine2.png"
import cine3 from "../assets/projects/cine3.png"
import cine4 from "../assets/projects/cine4.png"
import cine5 from "../assets/projects/cine5.png"

const Projects = () => {
  return(
    <div id="projects" className="grid gap-6 justify-items-center mt-36 pb-10">
      <h2 className="text-4xl p-1 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Proyectos</h2>
      <section className="gap-10 grid grid-1 lg:grid-cols-2 max-w-5xl justify-center">        
      <motion.div 
          initial={{boxShadow: "5px 5px 12px rgba(0, 0, 0, 0.2)", borderWidth:"1px"}}
          animate={{ scale:1.035, borderWidth:"1px", borderColor:"#606562", boxShadow: "12px 12px 15px rgba(0, 0, 0, 0.3)"}}
          transition={{ ease: "easeInOut", duration: 2, repeat:Infinity, repeatType:'reverse' }}
          className="shadow-2xl rounded-md p-4 max-w-xs sm:max-w-sm">
          <div className="ml-4 max-w-xs">
            <Swiper
              className="mySwiper"
              spaceBetween={20}
              loop={true}
              effect={"fade"}
              grabCursor={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay,EffectFade]}
              >
              <SwiperSlide><img className="max-w-full rounded-md object-cover" src={countries1} alt="CountriesApp"></img></SwiperSlide>
              <SwiperSlide><img className="max-w-full rounded-md object-cover" src={countries2} alt="CountriesApp"></img></SwiperSlide>
              <SwiperSlide><img className="max-w-full rounded-md object-cover" src={countries3} alt="CountriesApp"></img></SwiperSlide>
            </Swiper>
          </div>
          <div className="flex gap-2 mt-5 flex-wrap">
            <button className="bg-great-blue-400 p-1 rounded-lg text-white text-sm">React</button>
            <button className="bg-great-blue-400 p-1 rounded-lg text-white text-sm">Redux</button>
            <button className="bg-great-blue-400 p-1 rounded-lg text-white text-sm">Node.js</button>
            <button className="bg-great-blue-400 p-1 rounded-lg text-white text-sm">Express</button>
            <button className="bg-great-blue-400 p-1 rounded-lg text-white text-sm">PostgreSQL</button>
          </div>
          <p className="mt-5 dark:text-white">SPA que filtra información sobre los paises </p>
        </motion.div>
        <motion.div 
          initial={{boxShadow: "5px 5px 12px rgba(0, 0, 0, 0.2)", borderWidth:"1px"}}
          animate={{ scale:1.035, borderWidth:"1px", borderColor:"#606562", boxShadow: "12px 12px 15px rgba(0, 0, 0, 0.3)"}}
          transition={{ ease: "easeInOut", duration: 2, repeat:Infinity, repeatType:'reverse' }}
          className="shadow-2xl rounded-md p-4 max-w-xs sm:max-w-sm">
          <div className="ml-4 max-w-xs">
            <Swiper
              className="mySwiper"
              spaceBetween={20}
              loop={true}
              effect={"fade"}
              grabCursor={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay,EffectFade]}
              >
              <SwiperSlide><img className="max-w-full rounded-md object-cover" src={cine1} alt="MoonCinema"></img></SwiperSlide>
              <SwiperSlide><img className="max-w-full rounded-md object-cover" src={cine2} alt="MoonCinema"></img></SwiperSlide>
              <SwiperSlide><img className="max-w-full rounded-md object-cover" src={cine3} alt="MoonCinema"></img></SwiperSlide>
              <SwiperSlide><img className="max-w-full rounded-md object-cover" src={cine4} alt="MoonCinema"></img></SwiperSlide>
              <SwiperSlide><img className="max-w-full rounded-md object-cover" src={cine5} alt="MoonCinema"></img></SwiperSlide>
            </Swiper>
          </div>
          <div className="flex gap-2 mt-5 flex-wrap">
            <button className="bg-great-blue-400 p-1 rounded-lg text-white text-sm">React</button>
            <button className="bg-great-blue-400 p-1 rounded-lg text-white text-sm">Redux</button>
            <button className="bg-great-blue-400 p-1 rounded-lg text-white text-sm">Node.js</button>
            <button className="bg-great-blue-400 p-1 rounded-lg text-white text-sm">Prisma</button>
            <button className="bg-great-blue-400 p-1 rounded-lg text-white text-sm">JWT</button>
            <button className="bg-great-blue-400 p-1 rounded-lg text-white text-sm">Bootstrap</button>
          </div>
          <p className="mt-5 dark:text-white">Página web para realizar compra de boletas para un cine</p>
        </motion.div>
      </section>
    
    </div>
  )
}

export default Projects